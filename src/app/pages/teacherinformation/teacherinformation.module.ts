import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherinformationRoutingModule } from './teacherinformation-routing.module';
import { TeacherinformationComponent } from './teacherinformation.component';


@NgModule({
  declarations: [
    TeacherinformationComponent
  ],
  imports: [
    CommonModule,
    TeacherinformationRoutingModule
  ]
})
export class TeacherinformationModule { }
