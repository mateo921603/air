import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'', component: SearchComponent},
  {path:'reservation/:index', component: ReservationComponent},
  {path:'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
