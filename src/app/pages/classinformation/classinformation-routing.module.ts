import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassinformationComponent } from './classinformation.component';

const routes: Routes = [{ path: '', component: ClassinformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassinformationRoutingModule { }
