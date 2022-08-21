import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Constants } from './../util/constants';
import { User } from './../model/user';
import { WebStorageUtil } from './../util/web-storage-util';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  user!: User;
  transactions!: Transaction[];
  withdraw = true;
  deposit = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.transactions = this.user.transactions;
    this.doShoppingList();
    }

  doShoppingList() {
    let totalCosts = parseFloat(WebStorageUtil.get(Constants.COSTS_KEY));
    totalCosts += Constants.TAX_BANK_STATEMENT;
    WebStorageUtil.set(Constants.COSTS_KEY, totalCosts);
  }
   onClickItem(t: Transaction) {
     this.router.navigate(['/lista/detalhes', t?.id]);
  }
}
