import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/states/auth.state';
import { User } from '@angular/fire/auth';
import * as AuthAction from "src/app/actions/auth.action"

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {


}
