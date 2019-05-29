import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout *ngIf="isAdmin">
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
    <ngx-user-layout *ngIf="!isAdmin">
      <router-outlet></router-outlet>
    </ngx-user-layout>
  `,
})
export class PagesComponent {
  isAdmin: boolean;
  constructor(){
    this.isAdmin = true;
  }
  menu = MENU_ITEMS;
}
