import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
                        { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
                        { path: 'childinformation', loadChildren: () => import('./pages/childinformation/childinformation.module').then(m => m.ChildinformationModule) },
                        { path: 'attendance', loadChildren: () => import('./pages/attendance/attendance.module').then(m => m.AttendanceModule) },
                        { path: 'teacherinformation', loadChildren: () => import('./pages/teacherinformation/teacherinformation.module').then(m => m.TeacherinformationModule) },
                        { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) },
                        { path: 'schedule', loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule) },
                        { path: 'absencefrom', loadChildren: () => import('./pages/absencefrom/absencefrom.module').then(m => m.AbsencefromModule) },
                        { path: 'classinformation', loadChildren: () => import('./pages/classinformation/classinformation.module').then(m => m.ClassinformationModule) },
                        { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
                        { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
                        { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },


                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
