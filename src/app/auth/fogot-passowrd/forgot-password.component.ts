import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: '../auth.component.css',
})
export class ForgotPasswordComponent {
  constructor(private router: Router) {}

  toResetPassword() {
    this.router.navigate(['/auth/reset-password']);
  }
}
