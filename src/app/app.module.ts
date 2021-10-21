import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './routers/menu/menu.component';
import { TalesComponent } from './routers/tales/tales.component';
import { HomeComponent } from './routers/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './routers/signup/signup.component';
import { SigninComponent } from './routers/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: SigninComponent},
  {path: '', component: HomeComponent},
  {path: 'tale/:id', component: TalesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TalesComponent,
    HomeComponent,
    SigninComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
