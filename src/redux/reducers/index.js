import {combineReducers} from 'redux' 

import pokemonReducers from './pokemon'
import itemMonReducer from './item'

export default rootReducer = combineReducers({
  pokemon: pokemonReducers,
  itemMon: itemMonReducer
})
