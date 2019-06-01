import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';

import {UserManagerComponent} from './User/user-manager.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ModalComponent } from '../../@theme/components/error-modal/modal.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ModalComponent,
    UserManagerComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class UserManagerModule { }
