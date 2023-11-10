import { Component } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  data:any[]=[];
  
  constructor(
    private apiService: FlightsService,
    private cityService:FlightsService,
    private router:Router,
  ){}
  ngOnInit(): void {
    this.addData();
  }
  

  addData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
    })
  }
  
  dataSearch(originUpper:string, destinUpper:string){
    this.cityService.convertToIATACode(originUpper,destinUpper,this.data)
    this.router.navigate(['list']);
  }
  
  
}
