import { User } from './user';

export class TransactionList {
  public date: Date;
  public id: number;


  constructor(public nomeLista: string) {
    this.id = Math.round(Math.random() * 1000);
    this.date = new Date();
    this.nomeLista=nomeLista;

  }



}
