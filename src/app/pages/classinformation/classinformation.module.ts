import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassinformationRoutingModule } from './classinformation-routing.module';
import { ClassinformationComponent } from './classinformation.component';


@NgModule({
  declarations: [
    ClassinformationComponent
  ],
  imports: [
    CommonModule,
    ClassinformationRoutingModule
  ]
})
export class ClassinformationModule { }
