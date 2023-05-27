import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "../../store/reducers/auth.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffect} from "../../store/effects/auth.effect";
import {AuthService} from "../../services/auth.service";
import {RouterLink} from "@angular/router";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffect]),
    RouterLink
  ]
})
export class AuthModule {
}
