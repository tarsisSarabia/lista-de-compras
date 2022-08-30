import { User } from './user';

export class Registration {
  static readonly WITHDRAW_TYPE = 'withdraw';
  static readonly DEPOSIT_TYPE = 'deposit';
  public date: Date;
  public id: number;
  public userId!: string;
  public type! : string;

  constructor(public produto: string, public value: number) {
    this.id = Math.round(Math.random() * 1000);
    this.value = value;
    this.date = new Date();
    this.produto=produto;

  }

  public static clone(registration:Registration){
    let t: Registration = new Registration(registration.produto, registration.value);
    t.produto=registration.produto;
    t.value=registration.value;
    t.date=registration.date
    return t;
  }
}
