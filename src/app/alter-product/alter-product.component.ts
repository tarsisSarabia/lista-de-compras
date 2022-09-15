import { Component,  OnInit, ViewChild } from '@angular/core';
 import { User } from './../model/user';
 import { Shared } from './../util/shared';
 import { Registration } from '../model/registration';
 import { ProductPanelComponent } from '../product-panel/product-panel.component';
import { ShoppingListService } from '../services/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { concat, concatMap, delay, filter, map, of } from 'rxjs';

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
  registration!:Registration;


  @ViewChild(ProductPanelComponent)
  productPanelComponent!: ProductPanelComponent;
  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private route: ActivatedRoute, private listService:ShoppingListService  ) {

  }

  ngOnInit(): void {
    this.id  = +this.route.snapshot.paramMap.get('id')!;
    this.registerProductMessage = '';
    Shared.initializeWebStorage();
   }
  async onSubmit() {
      if (this.nomeProduto.length < 3) {
      this.registerProductInvalid = true;
      this.registerProductMessage =
        'Opps!!! O produto deve ter pelo menos 3 letras.';
      return;
      }
      let registration = new Registration(this.nomeProduto, 1 );

       await this.listService.update(this.id,registration).subscribe();

      this.registerProductInvalid = false;
        this.registerProductMessage = `Produto ${registration.product} foi alterado com sucesso!`;

      this.nomeProduto = '';
    }

  onResetClick() {
    this.nomeProduto = '';
    localStorage.clear;
  }

  onCloseModal() {
    this.modal.show = false;
  }

}
