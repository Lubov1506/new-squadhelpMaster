import { put } from 'redux-saga/effects'
import * as restControllers from '../api/rest/restController'
import {
  getTransactionsSuccess,
  getTransactionsError
} from '../actions/actionCreator'
import ACTION from '../actions/actionTypes'

export function * getTransactionsSaga (action) {
  try {
    const {data} = yield restControllers.getAllTransactions()
    yield put({type: ACTION.GET_TRANSACTIONS_SUCCESS, data})
  } catch (error) {
    yield put({type: ACTION.GET_TRANSACTIONS_ERROR, error})
  }
}
