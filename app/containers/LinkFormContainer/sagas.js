// import { take, call, put, select } from 'redux-saga/effects';
import {ADD_LINK,ADD_LINK_CANCEL} from "./constants";
import {takeLatest} from "redux-saga";
import {call,put} from "redux-saga/effects";
import {createLink} from "../../api";
import {addLinkSuccess,addLinkFailed} from "./actions";
import {goBack} from "react-router-redux";

// Individual exports for testing

function* addLink(action)
{
  try{
  const serverLink=yield call(createLink,action.link);
  yield put(addLinkSuccess(serverLink));
  yield put(goBack());
  }
  catch(e)
  {
    yield put(addLinkSuccess(action.link,e.message));
  }
}

function* addLinkCancel(){
  yield put(goBack());
}
export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK,addLink)
  return;
}

export function* addLinkCancelSaga() {
  yield* takeLatest(ADD_LINK_CANCEL,addLinkCancel)
  return;
}

// All sagas to be loaded
export default [
  addLinkSaga,
  addLinkCancelSaga
];
