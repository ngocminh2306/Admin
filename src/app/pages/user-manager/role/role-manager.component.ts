import {Component} from '@angular/core';
import {HttpService, host} from '../../../serviecs/http-serviece';
import { HttpParams } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';
import {ModalComponent} from '../../../@theme/components/error-modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-role-manager',
  templateUrl: './role-manager.component.html',
})
export class RoleManagerComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
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
        title: 'User Name',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      surname: {
        title: 'Surname',
        type: 'string',
      }
    }
  }
  source: LocalDataSource = new LocalDataSource();

  constructor(private httpService: HttpService,
    private modalService: NgbModal){
 
  }

  onDeleteConfiarm(event): void {

  }
  onSaveConfirm(event): void {

    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event): void {
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}