import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';
import { Registration } from '../model/registration';
import { RegisterProductComponent } from '../register-product/register-product.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  user!: User;
  users!: User[];
  cadProduto!:RegisterProductComponent;
  transaction!:Registration;
  registrations!: Registration[];
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {

    this.user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.registrations = this.user.registrations;
  }
  ondblClickItem(t: Registration) {
     this.router.navigate(['/lista/detalhes', t?.id]);
  }
  onEdit(t: Registration  ) {
    let clone = Registration.clone(t);
    this.router.navigate(['/cadastrar']);
    this.transaction = clone;


  }

  onDelete(id: number, produto: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o produto: ' + produto
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.delete(id);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      window.alert(
        'o produto ' + produto + ' foi removido com sucesso! '
      );
    } else {
      window.alert(
        'Opss! O produto não pode ser removido. '
      );;
    }
    this.registrations = this.getRegistrations();
    }

  delete(id: number): boolean {
    this.registrations = this.user.registrations;
    this.registrations = this.user.registrations.filter((t) => {
      return t.id?.valueOf() != id?.valueOf();

     });
     this.user.qtde= this.registrations.length;
     this.user.registrations=this.registrations;
     localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(this.user));

    return true;
  }

  getRegistrations(): Registration[] {
    return this.registrations;
  }
}
