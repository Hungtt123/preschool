import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbDialogService, NbCardModule, NbButtonModule, NbDialogModule, NbAutocompleteModule, NbInputModule, NbOptionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { authReducer } from './reducers/auth.reducer';
import { AuthEffect } from './effects/auth.effect';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({auth: authReducer}, {}),
    EffectsModule.forRoot([AuthEffect]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    HttpClientModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbDialogModule,
    NbEvaIconsModule,
    NbAutocompleteModule,
    NbInputModule,
    NbOptionModule,






  ],
  providers: [NbDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
