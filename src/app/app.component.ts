import { Component, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './states/auth.state';
import { AuthService } from './services/auth.service';
import { NbDialogService } from '@nebular/theme';
import { User } from '@angular/fire/auth';
import * as AuthAction from "src/app/actions/auth.action"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preschool';

  url = "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-nen-dien-thoai-tone-trang-tinh-khiet-1-19-10-27-56.jpg";
  onselectFile(e: any) {
    console.log(e);
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: any) => { this.url = event.target.result; }
    }
  }

  onImageError(e: any) {
    e.target.src = 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'
  }


  public user!: User;
  constructor(private store: Store<{ auth: AuthState }>, private AuthService: AuthService, private dialogService: NbDialogService,) {
    this.AuthService.user$.subscribe(user => {
      if (user.email) {
        this.user = user;
      }
    })
  }


  login() {
    this.store.dispatch(AuthAction.login())
  }





  public file!: any;
  public imageSrc!: any;
  public content!: string;


  onSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(this.file);
    }
  }

  async signOut() {
    await this.AuthService.logout();
    window.location.href = "/"
  }

}



