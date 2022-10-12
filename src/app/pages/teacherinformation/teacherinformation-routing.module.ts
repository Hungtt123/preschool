import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherinformationComponent } from './teacherinformation.component';

const routes: Routes = [{ path: '', component: TeacherinformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherinformationRoutingModule { }
