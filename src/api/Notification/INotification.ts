import { IBaseInterface } from "../baseInterface";

export interface INotification extends IBaseInterface {
  // type any is used to prevent error on validation level
  message: any;
  context: any;
  is_read: any;
  triggered_by: any;
  extra_date: any;
  user_id: any;
}