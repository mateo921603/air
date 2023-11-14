import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  data:any[]=[];

  origiMult:any[]=[];
  destinMult:any[]=[];
  origin:any[]=[];
  destin:any[]=[];
  
  selectedCurrency: string = 'USD';
  constructor(
    private apiService: FlightsService,
    private cityService:FlightsService,
    private router:Router,

  ){}
  ngOnInit(): void {
    this.addData();
    this.origiMult = this.cityService.origiMult;
    this.destinMult = this.cityService.destinMult;
    this.origin = this.cityService.origin;
    this.destin = this.cityService.destin;
  }
  

  addData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
    })
  }

  addReservation1(index: number){
    this.router.navigate(['/reservation', index]);
    this.cityService.dateRegister = this.destin;
  }

  addReservation2(index: number){
    this.router.navigate(['/reservation', index]);
    this.cityService.dateRegister = this.origin;
  }

  addReservation3(index: number){
    this.router.navigate(['/reservation', index]);
    this.cityService.dateRegister = this.origiMult;
  }



}
