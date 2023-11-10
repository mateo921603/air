import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';


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
  
  constructor(
    private apiService: FlightsService,
    private cityService:FlightsService,

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
      console.log(this.data);
    })
  }

}
