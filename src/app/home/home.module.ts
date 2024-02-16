import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations:[
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule{}
