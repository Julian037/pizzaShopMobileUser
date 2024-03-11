import { AuthState } from '.';
// import { IUser } from '../../interfaces';

type AuthActionType = 
  //  | { type: '[Auth] - Login', payload: IUser }
  | { type: '[Auth] - Login' }
  | { type: '[Auth] - Logout' }


export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {

  switch (action.type) {
      case '[Auth] - Login':
        return {
          ...state,
          isLoggedIn: true,
        };
      case '[Auth] - Logout':
        return {
            ...state,
            isLoggedIn: false,
            // user: undefined,
        };
      default:
        return state;
  }
}
