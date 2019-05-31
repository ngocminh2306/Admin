import {Component} from '@angular/core';
import {HttpService, host} from '../../../serviecs/http-serviece';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-user-manager',
  styleUrls: ['./user-manager.component.scss'],
  templateUrl: './user-manager.component.html',
})
export class UserManagerComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      userName: {
        title: 'First Name',
        type: 'string',
      },
      name: {
        title: 'Last Name',
        type: 'string',
      },
      surname: {
        title: 'Username',
        type: 'string',
      },
      emailAddress: {
        title: 'E-mail',
        type: 'string',
      },
      lastLoginTime: {
        title: 'Age',
        type: 'number',
      },
    }
  }
  source: LocalDataSource = new LocalDataSource();
  constructor(private http: HttpClient, private httpService: HttpService){
    // this.httpService.get(host + 'services/app/User/GetAll').subscribe((res)=>{
    //   console.log(res);
    // })

    // this.http.get(host + 'services/app/User/GetAll').subscribe((res)=>{
    //   console.log(res);
    // })
    this.http.get(host + 'services/app/User/GetAll')
    .toPromise().then((res: any)=>{
      console.log(res);
      if(res.success){
        this.source.load(res.items);
      }else{
        alert('that bai!');
      }
    }).catch((error)=>{
      alert('error');
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}