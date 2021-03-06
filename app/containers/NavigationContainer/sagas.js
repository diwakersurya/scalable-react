// import { take, call, put, select } from 'redux-saga/effects';
import {
  REQUEST_TOPICS,SELECT_TOPIC,REQUEST_TOPICS_SUCCEEDED
} from './constants';
import {takeLatest} from "redux-saga";
import {call,put,select} from "redux-saga/effects";
import {requestTopicsSucceeded,requestTopicsFailed} from "./actions";
import {push} from 'react-router-redux';
import selectNavigationContainer from "./selectors"
export function fetchTopicsFromServer(){
  return fetch("http://localhost:3000/api/topics")
  .then(response=>response.json())
}
function* fetchTopics(){
  try{
 const topics=yield call(fetchTopicsFromServer);
 yield put(requestTopicsSucceeded(topics));
 }
 catch(e)
 {
   yield put(requestTopicsFailed(e.message));
 }
}
function* pushTopic(action)
{
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic(){
  const state=yield select(selectNavigationContainer());
  if(!state.selectedTopic && state.routerLocation==="/"){
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}
function* pushTopicSaga(){
  yield* takeLatest(SELECT_TOPIC,pushTopic);
}
export function* selectDefaultTopicSaga(){
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED,selectDefaultTopic);
}
// Individual exports for testing
export function* requestTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS,fetchTopics);
  return;
}

// All sagas to be loaded
export default [
  requestTopicsSaga,
  pushTopicSaga,
  selectDefaultTopicSaga
];
