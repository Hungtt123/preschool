import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
                        { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
                        { path: 'childinformation', loadChildren: () => import('./pages/childinformation/childinformation.module').then(m => m.ChildinformationModule) },
                        { path: 'attendance', loadChildren: () => import('./pages/attendance/attendance.module').then(m => m.AttendanceModule) },
                        { path: 'teacherinformation', loadChildren: () => import('./pages/teacherinformation/teacherinformation.module').then(m => m.TeacherinformationModule) },
                        { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
