import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  template: 
  ` <mat-toolbar color="primary">
      <span> Cricket Rivalries!!!</span>
    </mat-toolbar>
    <router-outlet  class="mat-app-background"></router-outlet>
  `,
  styles: []
})
export class PublicLayoutComponent {}