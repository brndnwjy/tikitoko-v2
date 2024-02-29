import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NavbarComponent, LogoComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarComponent, LogoComponent, CommonModule],
})
export class SharedModule {}
