import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import {UserManagerModule} from './user-manager/user-manager.module';
const PAGES_COMPONENTS = [
  PagesComponent, 
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    UserManagerModule,
  ], 
  
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
