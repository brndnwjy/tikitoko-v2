import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.css',
})
export class LoginComponent {
  selectedType = 'customer';

  constructor(private router: Router) {}

  onChangeType(type) {
    this.selectedType = type;
  }

  onLogin() {
    this.router.navigate(['/home']);
  }
}
