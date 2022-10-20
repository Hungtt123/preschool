import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencefromComponent } from './absencefrom.component';

const routes: Routes = [{ path: '', component: AbsencefromComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbsencefromRoutingModule { }
