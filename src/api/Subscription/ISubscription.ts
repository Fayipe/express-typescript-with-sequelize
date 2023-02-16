import { IBaseInterface } from "../baseInterface";

export interface ISubscription extends IBaseInterface {
  // type any is used to prevent error on validation level
  coin_balance: any;
  expires: any;
  occupation: any;
}