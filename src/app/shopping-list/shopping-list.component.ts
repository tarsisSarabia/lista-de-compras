import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { Constants } from './../util/constants';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';
import { Registration } from '../model/registration';

import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  user!: User;
  users!: User[];
  registration!:Registration;
  registrations!: Registration[];
  isShowMessage: boolean = false;
  isSuccess!: boolean;



  constructor(private route: ActivatedRoute, private router: Router, private listService:ShoppingListService ) {
    this.getRegistrations();
   }

  ngOnInit(): void {
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
  }

  ondblClickItem(registration: Registration) {
    this.getProduct(registration);

  }
  onEdit(t: Registration  ) {
     this.router.navigate(['/alterar/', t.product]);
   }

  onDelete(registration:Registration) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o produto: ' + registration.product
    );
    if (!confirmation) {
      return;
    }
    this.delete(registration);

    let response: boolean = true;
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      window.alert(
        'o produto ' + registration.product + ' foi removido com sucesso! '
      );
    } else {
      window.alert(
        'Opss! O produto não pode ser removido. '
      );
    }

    }

  delete(registration:Registration) {
    this.registrations = this.registrations.filter((r)=>registration.id!== r.id)
    this.listService.remove(registration.id).subscribe();
  }

  getRegistrations(): void{
    this.listService.getAll().subscribe((registrations)=>(this.registrations=registrations));

  }

  getProduct(registration:Registration) {
    this.registrations = this.registrations.filter((r)=>registration.id=== r.id)
    this.listService.getProduct(registration.id).subscribe();
  }


}
