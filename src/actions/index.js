import types from "./types";
import axios from "axios";

export const checkAuth = () => async dispatch => {
    const resp = await axios.get('/api/check-auth.php');

    if(resp.data.success)
    {
        return dispatch({
            type: types.SIGN_IN,
            email: resp.data.email
        });
    }
    else
    {
        return dispatch({
            type: types.SIGN_OUT
        });
    }
}

export function signIn(user){
    return function(dispatch){
        axios.post('/api/sign-in.php', user).then(resp => {
            console.log('Sign In Resp:', resp);

            if(resp.data.success)
            {
                localStorage.setItem("signedIn", "true");
                dispatch({
                    type: types.SIGN_IN,
                    email: resp.data.email
                })
            }
            else
            {
                dispatch({
                    type: types.SIGN_IN_ERROR
                })
            }
        });
    }
}

export function signOut(){
    return function(dispatch){
        axios.get('/api/sign-out.php').then(resp => {
            localStorage.removeItem("signedIn");
            dispatch({
                type: types.SIGN_OUT
            });
        });
    }
}

export function getAllProducts(){
    return function(dispatch){
        axios.get("/api/getproducts.php").then((resp) => {
            dispatch({
                type: types.GET_ALL_PRODUCTS,
                products: resp.data.products
            });
        });  
    }
}
