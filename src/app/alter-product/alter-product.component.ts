import { Component,  OnInit, ViewChild } from '@angular/core';
 import { User } from './../model/user';
 import { Shared } from './../util/shared';
 import { Registration } from '../model/registration';
 import { ProductPanelComponent } from '../product-panel/product-panel.component';
import { ShoppingListService } from '../services/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-alter-product',
  templateUrl: './alter-product.component.html',
  styleUrls: ['./alter-product.component.css']
})
export class AlterProductComponent implements OnInit {
  nomeProduto = '';
  valor: number =0;
  user!: User;
  registerProductInvalid = false;
  registerProductMessage = '';
  id: number=0;
  isSubmitted!: boolean;
  registrations!:Registration[];

  @ViewChild(ProductPanelComponent)
  productPanelComponent!: ProductPanelComponent;
  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private listService:ShoppingListService, private route: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.registerProductMessage = '';
    Shared.initializeWebStorage();
    this.nomeProduto = this.route.snapshot.paramMap.get('product')!;
  }

  async onSubmit() {

    if (this.nomeProduto.length < 3) {
      this.registerProductInvalid = true;
      this.registerProductMessage =
        'Opps!!! O produto deve ter pelo menos 3 letras.';
      return;
      }

      let registration =new Registration(this.nomeProduto, 1 );
      await this.listService.update(registration).subscribe();

      this.registerProductInvalid = false;
       this.registerProductMessage = `Produto ${registration.product} foi alterado com sucesso!`;

      this.nomeProduto = '';
    }

  onResetClick() {
    this.nomeProduto = '';
    localStorage.clear;
  }

  getProduct(id:number): Registration[] {
    this.registrations = this.registrations.filter((r)=>id=== r.id)
    this.listService.getProduct(id).subscribe();
    return this.registrations;
  }

  onCloseModal() {
    this.modal.show = false;
  }

}
