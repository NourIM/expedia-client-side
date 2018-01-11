import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hotel-tile',
    styleUrls: ['./hotel-tile.css'],
    templateUrl: './hotel-tile.html',
})

export class HotelTileComponent implements OnInit {
  @Input() public hotels: any[] = [];
  constructor() { }

  public ngOnInit() {}
}