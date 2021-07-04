import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import constants from '../config/constants'
import actionsAPI from '../redux/action/pokemon';

export function* fetchListPokemon() {
  console.log('rene -');
  yield takeEvery(constants.LIST_POKEMON_REQUEST, sagaPokemon)
}

function* sagaPokemon() {
  console.log('sini gak')
  return fetch('https://pokeapi.co/api/v2/pokemon')
  .then(rsp => console.log('rsp', rsp))
  .catch(err=>console.log(err))
  // -------
  // try {
  // const {lala} = yield call(actionsAPI.getListPokemon, action.payload)
  // console.log('lalalala', lala)
  // } catch (e) {
  //   console.log('e', e)
  // }
  // -------
  // try {
    // const data = axios.get(`${constants.URL}/pokemon`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })

    // console.log('DATA POK', data)
  //   // yield put({type: constants.LIST_POKEMON_SUCCESS, data})
  //   //return res.data
  // } catch (err) {
  //   // yield put({type: constants.LIST_POKEMON_FAILURE, err})
  //   //if (err.response) return err.response.data
  // }
}