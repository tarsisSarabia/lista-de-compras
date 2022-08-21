import {Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

 import { User } from './../model/user';
 import { Shared } from './../util/shared';
 import { TransactionList } from './../model/transactionList';
 import { Constants } from './../util/constants';
 import { WebStorageUtil } from './../util/web-storage-util';
 import { ProductPanelComponent } from '../product-panel/product-panel.component';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit{
  nomeLista = '';
  valor: number =0;
  user!: User;
  newListInvalid = false;
  newListMessage = '';

  @ViewChild(ProductPanelComponent)
  productPanelComponent!: ProductPanelComponent;
  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.newListMessage = '';
    Shared.initializeWebStorage();
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }
  // ngAfterViewInit(): void {
  //     console.log(`O seu saldo é ${this.productPanelComponent.value}`);
  // }
  onSubmit() {

    if (this.nomeLista.length < 3) {
      this.newListInvalid = true;
      this.newListMessage =
        'Opps!!! O produto deve ter pelo menos 3 letras.';
      return;
      }

    let netValue = this.nomeLista;
    let transactionList = new TransactionList(netValue);
    this.user.transactionsList.push(transactionList);
    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(this.user));


    this.newListInvalid = false;
    this.newListMessage = `Lista ${netValue} foi cadastrado com sucesso!`;

    this.nomeLista = '';
  }

  onResetClick() {
    this.nomeLista = '';
    localStorage.clear;
  }

  // onDonationEvent(event: boolean) {
  //   this.modal.show = event;
  //   this.modal.title = 'Aviso!';
  //   this.modal.text = `Você já tem  ${this.user.balance} produtos cadastrados! O que acha de dar uma conferida na
  //   sua lista!? `;
  // }

  onCloseModal() {
    this.modal.show = false;
  }

}
