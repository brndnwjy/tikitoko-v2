import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: '../auth.component.css',
})
export class RegisterComponent {
  selectedType = 'customer';

  onChangeType(type) {
    this.selectedType = type;
  }
}
