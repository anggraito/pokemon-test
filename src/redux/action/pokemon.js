import { put } from "@redux-saga/core/effects";
import axios from "axios";
import constants from "../../config/constants";

const actionsAPI = {}

actionsAPI.getListPokemon = () => {
  return () => {
    //console.log('test test');
    //try {
      const res = axios.get(`${constants.URL}/pokemon`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      console.log('DATAAAA PKKKK', res.data) 
      return res.data //should with thunk
      // yield put({type: constants.LIST_POKEMON_SUCCESS, data})
      //return res.data
    // } catch (err) {
    //   console.log('err', err)
    //   // yield put({type: constants.LIST_POKEMON_FAILURE, err})
    //   if (err.response) return err.response.data
    // }
  }
}

export default actionsAPI