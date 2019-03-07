/*
* SpurtCommerce
* version 2.0.0
* http://www.spurtcommerce.com
*
* Copyright (c) 2019 PICCOSOFT
* Author piccosoft <support@spurtcommerce.com>
* Licensed under the MIT license.
*/

export class CategoryForm {

  public name: string;
  public sortOrder:number;
  public metaTagDescription:string;
  public metaTagKeyword:string;
  public metaTagTitle:string;
  public parentInt:number;
  public image:string;
  public imagePath:string;
  public status:number;
  // public categoryId:number;




  constructor(categoryForm: any){
console.log('val model' , categoryForm)
    this.name = categoryForm.name || '';
    this.sortOrder = categoryForm.sortOrder || '';
    this.metaTagDescription = categoryForm.metaTagDescription || '';
    this.metaTagKeyword = categoryForm.metaTagKeyword || '';
    this.metaTagTitle = categoryForm.metaTagTitle || '';
    this.parentInt = categoryForm.parentInt || '';
    this.image = categoryForm.image || '';
    this.imagePath = categoryForm.imagePath || '';
    this.status = categoryForm.status || '';
    // this.categoryId = categoryForm.categoryId || '';
  }
}
