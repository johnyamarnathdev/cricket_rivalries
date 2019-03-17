import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-header></app-header>
        <router-outlet class="mat-app-background"></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class HomeLayoutComponent {}