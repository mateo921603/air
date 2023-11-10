import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: () => import('./flights/flight.module').then(m => m.FlightModule)},
  {path:'user', loadChildren: () => import('./auht/auht.module').then(m => m.AuhtModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
