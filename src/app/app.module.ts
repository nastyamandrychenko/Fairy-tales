import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './routers/authorization/authorization.component';
import { MenuComponent } from './routers/menu/menu.component';
import { TalesComponent } from './routers/tales/tales.component';
import { HomeComponent } from './routers/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './routers/signup/signup.component';
import { SigninComponent } from './routers/signin/signin.component';

const routes: Routes = [
  {path: 'signUp', component: AuthorizationComponent},
  {path: '', component: HomeComponent},
  {path: 'tale/:id', component: TalesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    MenuComponent,
    TalesComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
