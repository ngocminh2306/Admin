import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import {AuthGuard} from '../serviecs/auth-guard.service'

import {UserManagerComponent} from './user-manager/User/user-manager.component';
import {RoleManagerComponent} from './user-manager/role/role-manager.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [ 
  {
    path: 'user-manager',
    component: UserManagerComponent,
  },
  {
    path: 'role-manager',
    component: RoleManagerComponent,
  },
  {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, 
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[AuthGuard],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
