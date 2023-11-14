import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  imprimir() {
    window.print();
  }
  data:any[]=[];
  objetSelec: any;

  constructor(
    private route: ActivatedRoute,
    private cityService:FlightsService,
    ) {
    this.data = this.cityService.dateRegister;  
    this.route.params.subscribe(params => {
      const index = +params['index']; 
      this.objetSelec = this.data[index]
      console.log(this.objetSelec);
    });
  }
}
