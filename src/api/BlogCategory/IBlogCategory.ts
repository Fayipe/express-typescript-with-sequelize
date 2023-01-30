import { IBaseInterface } from "../baseInterface";

export interface IBlogCategory extends IBaseInterface {
  // type any is used to prevent error on validation level
  category_name: any;
  
}
