import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelTileModule } from './hotel-tile/hotel-tile.module';
import { HotelService } from './services/hotel.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HotelTileModule
  ],
  providers: [ HotelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
