import { User } from './user';

export class Registration {

  public date: Date;
  public id: number;
  public userId!: string;
  public type! : string;

  constructor(public product: string, public quantity: number) {
    this.id = Math.round(Math.random() * 1000);
    this.quantity = quantity;
    this.date = new Date();
    this.product=product;

  }

  public static clone(registration:Registration){
    let t: Registration = new Registration(registration.product, registration.quantity);
    t.product=registration.product;
    t.quantity=registration.quantity;
    t.date=registration.date
    return t;
  }
}
