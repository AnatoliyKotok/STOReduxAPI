import { Dispatch } from "react"
import {AuthAction, AuthActionType} from '../../types/auth';
import http from '../../http_common';
import { ILoginModel,ILoginResponse } from "../../components/aouth/Login/types";


export const LoginUser = (data: ILoginModel) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            //dispatch({type: AuthActionType.LOGIN_AUTH});
            const response = await http.post<ILoginResponse>('api/auth/login', data);

            dispatch({type: AuthActionType.LOGIN_AUTH_SUCCESS, payload: {
                email: "sdf@asf.ssd", image:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" 
            }});
            console.log("End redux login");
            return Promise.resolve();
        }
        catch(error) {
            //dispatch({type: AuthActionType.LOGIN_AUTH_ERROR, payload: "Error"});
            console.log("End redux login problem");
            return Promise.reject(error);
            
        }
    }
}