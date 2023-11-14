import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { FlightRoutingModule } from './flight-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CurrencyConverterPipe } from '../currency.pipe';


@NgModule({
  declarations: [
    ReservationComponent,
    SearchComponent,
    ListComponent,
    CurrencyConverterPipe
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    FormsModule
        
  ]
})
export class FlightModule { }
