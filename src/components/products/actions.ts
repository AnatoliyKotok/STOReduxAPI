import { Dispatch } from "react"
import { IProductsModel, ProductActions, ProductsActionTypes } from "./types"
import http from "../../http_common";
export const fetchProduct=()=>{
    return async(dispatch:Dispatch<ProductActions>)=>{
        try {
            let response = await http.get<IProductsModel>("api/products");
            const { data } = response.data;
            dispatch({
                type:ProductsActionTypes.FETCH_PRODUCTS,
                payload:data
            });
          } catch (ex) {
            console.log("Problem fetch");
          }
    }
}