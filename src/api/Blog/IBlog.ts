import { IBaseInterface } from "../baseInterface";

export interface IBlog extends IBaseInterface {
  // type any is used to prevent error on validation level
  category_id:any;
  title: any;
  author_name: any;
  blog: any;
  slug: any;
  is_featured: any;
  read_count: any;
 
}