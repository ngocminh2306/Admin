import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';

export const host = 'http://localhost:21021/api/';

@Injectable()
export class HttpService {

  constructor(private authService: NbAuthService, private http: HttpClient) {
  }

  buildHeader(){
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.authService.getToken().toPromise().then((tokenUser: any)=>{
      
      headers.append('Authorization', 'Bearer ' + tokenUser.token);
      return headers;
    })
  }

  get(inner_url: string, params?: HttpParams){
    return from(this.buildHeader()).pipe(
      switchMap((header) =>
      this.http.get(host + inner_url, { headers: header })
      )
    )
  }

  put(inner_url: string, body: any ,params?: HttpParams){
    return from(this.buildHeader()).pipe(
      switchMap((header) =>
      this.http.put(host + inner_url ,body , { headers: header, params: params })
      )
    )
  }

  post(inner_url: string, body: any ,params?: HttpParams){
    return from(this.buildHeader()).pipe(
      switchMap((header) =>
      this.http.post(host + inner_url ,body , { headers: header, params: params })
      )
    )
  }
}