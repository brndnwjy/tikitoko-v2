import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './reset-password.component.html',
  styleUrl: '../auth.component.css',
})
export class ResetPasswordComponent {
  constructor(private router: Router) {}

  toLogin() {
    this.router.navigate(['/auth']);
  }
}
