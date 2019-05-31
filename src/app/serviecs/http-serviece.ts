import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
      console.log(headers);
      return headers;
    })
  }

  get(inner_url: string){
    return from(this.buildHeader()).pipe(
      switchMap((header) =>
      this.http.get(host + inner_url, { headers: header })
      )
    )
  }

}