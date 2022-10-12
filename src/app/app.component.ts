import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preschool';
  menuLeft = [
    {
      title: 'Home',
      href: ''
    },     
    {
      title: 'Login',
      href: 'login'
    },
    {
      title: 'Child Information',
      href: 'childinformation'
    },
    {
      title: 'Attendance',
      href: 'attendance'
    },
    {
      title: 'Teacher Information',
      href: 'teacherinformation'
    },
    {
      title: 'Menu',
      href: 'menu'
    },
  ]
}
