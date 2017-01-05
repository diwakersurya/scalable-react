// import { take, call, put, select } from 'redux-saga/effects';
import {takeLatest} from "redux-saga";
import {call,put} from "redux-saga/effects";
import {requestLinksSucceeded,requestLinksFailed} from "./actions";
import {REQUEST_LINKS,START_ADD } from "./constants";
import {push} from "react-router-redux";

export function fetchLinksFromServer(topicName){
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
  .then(response=>response.json())
}
function* fetchLinks(action){
  try{
 const links=yield call(fetchLinksFromServer,action.topicName);
 yield put(requestLinksSucceeded(links));
 }
 catch(e)
 {
   yield put(requestLinksFailed(e.message));
 }
}

function* startAdd(action)
{
  yield put(push(`/topics/${action.topicName}/add`));
}

// Individual exports for testing
export function* requestLinksSaga() {
  yield* takeLatest(REQUEST_LINKS,fetchLinks)
  return;
}
export function* startAddSaga() {
  yield* takeLatest(START_ADD,startAdd)
  return;
}

// All sagas to be loaded
export default [
  requestLinksSaga,
  startAddSaga
];
