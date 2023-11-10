import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    MainComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [
    FooterComponent,
    NavComponent,
    MainComponent,
  ]
})
export class SharedModule { }
