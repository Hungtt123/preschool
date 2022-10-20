import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbsencefromRoutingModule } from './absencefrom-routing.module';
import { AbsencefromComponent } from './absencefrom.component';


@NgModule({
  declarations: [
    AbsencefromComponent
  ],
  imports: [
    CommonModule,
    AbsencefromRoutingModule
  ]
})
export class AbsencefromModule { }
