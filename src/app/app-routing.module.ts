import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './serviecs/auth-guard.service';

import { PagesModule } from '../app/pages/pages.module';
import {NgxAuthModule} from './auth/auth.module';

const routes: Routes = [
  { path: 'pages',canActivate:[AuthGuard], loadChildren: ()=>PagesModule },
  {
    path: 'auth',
    loadChildren: ()=> NgxAuthModule,
    //component: NbAuthComponent,
    // children: [
    //   {
    //     path: '',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'login',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'register',
    //     component: NbRegisterComponent,
    //   },
    //   {
    //     path: 'logout',
    //     component: NbLogoutComponent,
    //   },
    //   {
    //     path: 'request-password',
    //     component: NbRequestPasswordComponent,
    //   },
    //   {
    //     path: 'reset-password',
    //     component: NbResetPasswordComponent,
    //   },
    // ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
