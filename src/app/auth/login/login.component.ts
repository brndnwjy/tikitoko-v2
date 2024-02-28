import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.css',
})
export class LoginComponent {
  selectedType = 'customer';

  onChangeType(type) {
    this.selectedType = type;
  }
}
