import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from '../model/registration';
import { ShoppingListService } from '../services/shopping-list.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  registrations!: Registration[];
  registration!:Registration;

  constructor(private route: ActivatedRoute, private router: Router, private listService:ShoppingListService) {
  }

  ngOnInit(): void {

    let id: number = +this.route.snapshot.paramMap.get('id')!;
    let product=this.route.snapshot.paramMap.get('product');
     let registration = this.getProduct(id);
     this.listService.getProduct(id).subscribe((item)=>{
      this.registrations=registration;
     });
  }

  getProduct(id:number): Registration[] {
    this.registrations = this.registrations.filter((r)=>id=== r.id)
    this.listService.getProduct(id).subscribe();
    return this.registrations;
  }

  getRegistrations(): void{
    this.listService.getAll().subscribe((registrations)=>(this.registrations=registrations));
  }


}
