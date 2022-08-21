import {
  Component,
   OnInit,
   ViewChild,
  AfterViewInit
 } from '@angular/core';

 import { User } from './../model/user';
 import { Shared } from './../util/shared';
 import { Transaction } from '../model/transaction';
 import { Constants } from './../util/constants';
 import { WebStorageUtil } from './../util/web-storage-util';
 import { ProductPanelComponent } from '../product-panel/product-panel.component';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  nomeProduto = '';
  valor: number =0;
  user!: User;
  registerProductInvalid = false;
  registerProductMessage = '';
  qtde: number=0;

  @ViewChild(ProductPanelComponent)
  productPanelComponent!: ProductPanelComponent;
  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.registerProductMessage = '';
    Shared.initializeWebStorage();
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onSubmit() {

    if (this.nomeProduto.length < 3) {
      this.registerProductInvalid = true;
      this.registerProductMessage =
        'Opps!!! O produto deve ter pelo menos 3 letras.';
      return;
      }

    let produto = this.nomeProduto;
    this.qtde=1;
    this.user.qtde +=this.qtde;
    let transaction = new Transaction(produto, 1);
    this.user.transactions.push(transaction);
    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(this.user));


    this.registerProductInvalid = false;
    this.registerProductMessage = `Produto ${produto} foi cadastrado com sucesso!`;

    this.nomeProduto = '';
  }

  onResetClick() {
    this.nomeProduto = '';
    localStorage.clear;
  }

  onDonationEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Aviso!';
    this.modal.text = `Você já tem  ${this.user.qtde} produtos cadastrados! O que acha de dar uma conferida na
    sua lista!? `;
  }

  onCloseModal() {
    this.modal.show = false;
  }

}
