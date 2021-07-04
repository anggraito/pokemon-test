import constants from "../../config/constants"

const initialState = {
  data: {},
  isLoading: false,
  isFound: false
}

export default pokemonReducer = (state=initialState, action) => {
  //const { type, payload } = action
  switch (action.type) {
    case constants.LIST_POKEMON_REQUEST:
      return { ...state , isLoading: true }
    case constants.LIST_POKEMON_SUCCESS:
      return { ...state , data: action.payload.data, isLoading: false, isFound: true }
    case constants.LIST_POKEMON_FAILURE:
      return { ...state , isLoading: false, isFound: false }
    default:
      return state
  }
}