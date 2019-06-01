/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpRequest} from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { of as observableOf } from 'rxjs/observable/of';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';

import { NbPasswordAuthStrategy, NbAuthModule,NbAuthJWTToken, 
  NbAuthSimpleInterceptor, NbAuthJWTInterceptor,
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';
  
import { AuthGuard } from './serviecs/auth-guard.service';
import { RoleProvider } from './serviecs/role.provider';
import { HttpService } from './serviecs/http-serviece';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:21021/api',
          login: {
            endpoint: '/TokenAuth/Authenticate',
            method: 'post',
            redirect: {
              success: '/page/iot-dashboard',
              failure: null,
            }
          },
          token: {
            class: NbAuthJWTToken,
            key: 'result.accessToken',
          }
        }),
      ],
      forms: {},
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['news', 'comments'],
        },
        user: {
          parent: 'guest',
          create: 'comments',
        },
        moderator: {
          parent: 'user',
          create: 'news',
          remove: '*',
        },
        admin: {
          parent: 'moderator',
          create: 'news',
          remove: '*',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
    //{provide: HTTP_INTERCEPTORS, useClass: NbAuthSimpleInterceptor, multi: true},
    { provide: NbRoleProvider, useValue: { getRole: () => { return observableOf('guest'); }, }, },
    { provide: NbRoleProvider, useClass: RoleProvider },
    { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: function () { return false; }, },
    AuthGuard,
    HttpService
  ],
})
export class AppModule {
}
