import { all } from 'redux-saga/effects'
import { fetchListPokemon } from './pokemon'

export default function* rootSaga() {
  yield all([
    fetchListPokemon(),
  ])
}