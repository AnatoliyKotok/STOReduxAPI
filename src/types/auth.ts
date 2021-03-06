export enum AuthActionType{
    LOGIN_AUTH="LOGIN_AUTH",
    LOGIN_AUTH_SUCCESS="LOGIN_AUTH_SUCCESS",
    LOGIN_AUTH_ERROR="LOGIN_AUTH_ERROR",
}

export interface IUser{
    email:string,
    image:string

}

export interface AuthState{
    user:IUser,
    isAuth:boolean,
    loading:boolean,
    error:null | string,
    
} 

export interface LoginAuthAction{
    type:AuthActionType.LOGIN_AUTH
}

export interface LoginAuthSuccessAction{
    type:AuthActionType.LOGIN_AUTH_SUCCESS,
    payload:IUser,
}

export interface LoginAuthErrorAction{
    type:AuthActionType.LOGIN_AUTH_ERROR,
    payload:string,
}
export type AuthAction=LoginAuthAction|LoginAuthSuccessAction|LoginAuthErrorAction;