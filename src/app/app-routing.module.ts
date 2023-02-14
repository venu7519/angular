import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './auth.guard';
import { ForgetpswdComponent } from './forgetpswd/forgetpswd.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { SignupComponent } from './signup/signup.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:'full'},
{path: 'singUp', component: SignupComponent},
{path: 'verify/otp', component:OtpComponent},
{path: 'reset/password', component:ForgetpswdComponent},
{path:'home', canActivate:[AuthGuard], component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'table', canActivate:[AuthGuard], component: TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
