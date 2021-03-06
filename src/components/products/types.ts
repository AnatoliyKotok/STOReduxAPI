export interface IProductItem{
    id:number;
    name:string;
    detail:string;
}

export interface IProductsModel{
    success:boolean;
    message:string;
    data:Array<IProductItem>;
}
export interface ProductsState{
  products:Array<IProductItem>;
}

export enum ProductsActionTypes{
    FETCH_PRODUCTS="FETCH_PRODUCTS"
}

export interface FetchProductAction{
    type:ProductsActionTypes.FETCH_PRODUCTS,
    payload:Array<IProductItem>
}

export type ProductActions=FetchProductAction;