import { all, put, takeEvery } from "redux-saga/effects";
import { IAction } from "../types";

function* sign_in(action: IAction) {
  

  yield all([
    put({
      type: "logged_in",
      user: action.user,
    }),
  ]);
}

export default function* rootSaga() {
  yield all([takeEvery("login", sign_in)]);
}
