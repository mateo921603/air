import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuhtService } from 'src/app/auht/auht.service';
import { FlightsService } from 'src/app/flights/flights.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private userService:AuhtService,
    private router:Router,
    private apiService: FlightsService,
  ){}
    logaut(){
      this.userService.logout()
      .then(() => {
        this.router.navigate(['/reservation']);
      })
      .catch((error) =>{
        console.log(error);
      })
    }
    data:any[]=[];
  
    ngOnInit(): void {
      this.addData();
    }
    
  
    addData(){
      this.apiService.getData().subscribe(data => {
        this.data = data;
        console.log(this.data);
      })
    }
}
