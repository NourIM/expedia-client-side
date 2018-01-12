import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
import { HotelService } from './services/hotel.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public hotelsInfo: any;
  constructor(private hotelService: HotelService) { }

  public ngOnInit() {
    this.onSubmit({});
  }

  public onSubmit(formData) {
    console.log(formData);
    this.hotelService.findHotales(formData)
      .subscribe((response) => {
        this.hotelsInfo = response.offers.Hotel || [];
      });
  }

  public resetSearch() {
    this.onSubmit({});
  }
}
