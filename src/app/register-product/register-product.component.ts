import {
  Component,
   OnInit,
   ViewChild,
  AfterViewInit
 } from '@angular/core';

 import { User } from './../model/user';
 import { Shared } from './../util/shared';
 import { Registration } from '../model/registration';
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
  isSubmitted!: boolean;

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
    if (!this.isExist(this.nomeProduto)) {
      this.qtde=1;
      this.user.qtde +=this.qtde;
      let registration = new Registration(produto, 1);
      this.user.registrations.push(registration);
      localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(this.user));
      this.registerProductInvalid = false;
      this.registerProductMessage = `Produto ${produto} foi cadastrado com sucesso!`;

      this.nomeProduto = '';
    } else {
      this.registerProductMessage = `Produto ${produto} Já existe na sua lista e não foi adicionado novamente!`;
      this.nomeProduto = '';
    }

  }

  onResetClick() {
    this.nomeProduto = '';
    localStorage.clear;
  }

  onProductEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Aviso!';
    this.modal.text = `Você já tem  ${this.user.qtde} produtos cadastrados! O que acha de dar uma conferida na
    sua lista!? `;
  }

  isExist(nomeProduto: string): boolean {
    // this.user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    for (let t of this.user.registrations) {
      if (t.produto?.valueOf() == nomeProduto?.valueOf()) {
        return true;
      }
    }
    return false;
  }
  onCloseModal() {
    this.modal.show = false;
  }

}
