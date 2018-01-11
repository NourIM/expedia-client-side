import { async, getTestBed, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { HotelService } from './hotel.service';
describe('Service: Hotel Service', () => {
  let backend: MockBackend;
  let service: HotelService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        HotelService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
    const testbed = getTestBed();
    backend = testbed.get(MockBackend);
    service = testbed.get(HotelService);
  }));

  function setupConnections(options: any, endPoint: string) {
    backend.connections.subscribe((connection: MockConnection) => {
      if (connection.request.url.includes(endPoint)) {
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);
        connection.mockRespond(response);
      }
    });
  }

  it('Should Return Hotels deta ', () => {
    let res = {
      offerInfo: {currency: 'USD', language: 'en_US', siteID: '1', userSelectedCurrency: '1'},
      offers: {
        Hotel: [{
          destination: {
            associatedMultiCityRegionId: '178286',
            city: 'Miami',
            country: 'United States of America',
            longName: 'Miami (and vicinity), Florida, United States of America',
            nonLocalizedCity: 'Miami',
            province: 'Florida',
            regionID: '178286',
            shortName: 'Miami',
            tla: 'FLL'
          },
          hotelInfo: {
            hotelCity: 'Sunny Isles Beach',
            hotelCountryCode: 'USA',
            hotelDestination: 'Sunny Isles Beach',
            hotelDestinationRegionID: '10405',
            hotelGuestReviewRating: 2.73,
            hotelImageUrl: `https://images.trvl-media.com/hotels/11000000/10990000/10980200/10980182/10980182_143_t.jpg`,
          },
          hotelPricingInfo: {
            averagePriceValue: 142.34,
            crossOutPriceValue: 649.34,
            currency: 'USD',
            originalPricePerNight: 649.34,
            totalPriceValue: 569.36
          },
          hotelUrgencyInfo: {
            airAttachEnabled: false,
            airAttachRemainingTime: 0,
            link: `/Hotel-Search#selected=10980182`,
            numberOfPeopleViewing: 20,
            numberOfRoomsLeft: 11
          },
          hotelUrls: {
            hotelInfositeUrl: `https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhot
            el%2Finfo%2F21325078%2F2018-01-21%2F2018-01-22`,
            hotelSearchResultUrl: `https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F201
            8-01-21%2F2018-01-22%3FSearchType%3DDestination%26CityName%3DRishikesh%26RegionId%3D6126242%26Selected%3D21325078`
          },
          offerDateRange: { lengthOfStay: 4, travelEndDate: [], travelStartDate: []}

        }]
      },
      userInfo: { persona: {personaType: 'OTHERS'}, userId: 'foo' }
    };
    setupConnections({
      body: res,
      status: 200
    }, '/search');

    service.findHotales( {destinationName: 'miami' })
    .subscribe((responses) => {
      expect(responses.offers.Hotels).toBeTruthy();
      expect(responses).toEqual(jasmine.objectContaining(res));
    });
  });

});
