import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import constants from '../config/constants'

export function* fetchListPokemon() {
  yield takeEvery(constants.LIST_POKEMON_REQUEST, sagaPokemon)
}

function* sagaPokemon() {
  try {
    const response = yield call(axios.get, `${constants.URL}/pokemon`)
    // console.log('DATA POK', response.data)
    yield put({type: constants.LIST_POKEMON_SUCCESS, payload: response.data})
  } catch (err) {
    const error = err.response.data
    yield put({type: constants.LIST_POKEMON_FAILURE})
  }
}