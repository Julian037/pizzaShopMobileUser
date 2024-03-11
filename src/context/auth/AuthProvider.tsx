import { FC, ReactNode, useReducer } from 'react';
import { AuthContext, authReducer } from './';

import { IUser } from '../../interfaces';

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: true,
    user: undefined,
}


export const AuthProvider= ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );

    // const loginUser = async( email: string, password: string ): Promise<boolean> => {

    //     try {
    //         const { data } = await tesloApi.post('/user/login', { email, password });
    //         const { token, user } = data;
    //         Cookies.set('token', token );
    //         dispatch({ type: '[Auth] - Login', payload: user });
    //         return true;
    //     } catch (error) {
    //         return false;
    //     }

    // }

    const logout = () => {
    };



    return (
        <AuthContext.Provider value={{
            ...state,

            // Methods
            // loginUser,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
};