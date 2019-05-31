import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import {AuthGuard} from '../serviecs/auth-guard.service'

import {ModalOverlaysModule} from './modal-overlays/modal-overlays.module';
import {MapsModule} from './maps/maps.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {UserManagerComponent} from './user-manager/User/user-manager.component';
  import { from } from 'rxjs';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [ 
  {
    path: 'user-manager',
    component: UserManagerComponent,
  },
  {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'modal-overlays',
    loadChildren: ()=> ModalOverlaysModule,
  }, {
    path: 'maps',
    loadChildren: ()=>MapsModule,
  }, {
    path: 'miscellaneous',
    loadChildren: ()=>MiscellaneousModule,
  }, {
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
