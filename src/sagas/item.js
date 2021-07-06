import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import constants from '../config/constants'

export function* fetchListItem() {
  yield takeEvery(constants.LIST_ITEMS_REQUEST, sagaItems)
}

function* sagaItems() {
  try {
    const response = yield call(axios.get, `${constants.URL}/item`)
    yield put({type: constants.LIST_ITEMS_SUCCESS, payload: response.data})
  } catch (err) {
    const error = err.response.data
    yield put({type: constants.LIST_ITEMS_FAILURE})
  }
}

export function* fetchDetailItem() {
  yield takeEvery(constants.DETAIL_ITEM_REQUEST, sagaItem)
}

function* sagaItem(action) {
  try {
    const response = yield call(axios.get, `${constants.URL}/item${action.params}`)
    // console.log('DATA POK pok--------', response.data)
    yield put({type: constants.DETAIL_ITEM_SUCCESS, payload: response.data})
  } catch (err) {
    const error = err.response.data
    yield put({type: constants.DETAIL_ITEM_FAILURE})
  }
}