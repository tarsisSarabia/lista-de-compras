import { Registration } from './registration';
import { TransactionList } from './transactionList';

export class User {
  id!: string;
  name?: string;
  username: string;
  password: string;
  cpf?: string;
  birthday?: Date;
  qtde: number;
  produto:string;
  isAdmin: boolean;
  registrations: Registration[];
  transactionsList: TransactionList[];
  constructor(username: string, password: string, isAdmin: boolean = false) {
    this.id = String(Math.round(Math.random() * 1000));
    this.username = username;
    this.password = password;
    this.qtde = 0;
    this.registrations = [];
    this.isAdmin = isAdmin;
    this.produto='';
    this.transactionsList = [];
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.qtde = user.qtde;
    u.registrations = user.registrations;
    u.transactionsList = user.transactionsList;
    return u;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param user
   * @returns
   */
  public static toWS(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.qtde = user.qtde;
    u.registrations = [];
    u.transactionsList = [];
    return u;
  }
}
