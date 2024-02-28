import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [RouterModule, MaterialModule, FormsModule, AuthRoutingModule],
})
export class AuthModule {}
