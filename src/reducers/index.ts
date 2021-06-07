import { IAction, IState } from "../types";

const initialState: IState = {
  isLoggedIn: false,
  user: null,
};

export default function mainReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: false,
      } as IState;
      case "logged_in":
        return {
          ...state,
          isLoggedIn: true,
          user: action.user,
        } as IState;
      default:
      return state;
  }
}
