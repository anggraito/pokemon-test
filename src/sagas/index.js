import { all } from 'redux-saga/effects'
import { fetchListPokemon, fetchDetailPokemon } from './pokemon'

export default function* rootSaga() {
  yield all([
    fetchListPokemon(),
    fetchDetailPokemon()
  ])
}