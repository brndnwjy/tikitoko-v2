import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `<div class="flex justify-center items-center">
    <img src="/assets/blanja-logo.svg" alt="Blanja" />
    <h1 class="title">Blanja</h1>
  </div>`,
  styles: `
  .title {
  color: #db3022;
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
  margin: 0;
  transform: translateY(0.5rem);
}`,
})
export class LogoComponent {}
