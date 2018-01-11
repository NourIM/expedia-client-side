import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelTileComponent } from './hotel-tile.component';

@NgModule({
  imports: [
    CommonModule
   ],
  declarations: [ HotelTileComponent ],
  exports: [ HotelTileComponent ],
  providers: [ ]
})
export class HotelTileModule { }