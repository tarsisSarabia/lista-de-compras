import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/util/constants';
import { Registration } from '../model/registration';
import { User } from './../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  registration!: Registration;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let idParam: number = +this.route.snapshot.paramMap.get('id')!;
    let user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    let registrations = user.registrations;

    registrations = registrations.filter((t) => {
      return t.id === idParam;
    });

    if (registrations.length == 0) {
      alert('Oppsss! O produto não foi encontrada!');
    }

    this.registration = registrations[0];
  }

}
