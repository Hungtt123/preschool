import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildinformationRoutingModule } from './childinformation-routing.module';
import { ChildinformationComponent } from './childinformation.component';


@NgModule({
  declarations: [
    ChildinformationComponent
  ],
  imports: [
    CommonModule,
    ChildinformationRoutingModule
  ]
})
export class ChildinformationModule { }
