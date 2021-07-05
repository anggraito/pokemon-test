import constants from "../../config/constants"

const initialState = {
  data: [],
  isLoading: false,
  isFound: false
}

export default pokemonReducer = (state=initialState, action) => {
  console.log('iniii', action.payload)
  const { type, payload } = action
  switch (type) {
    case constants.LIST_POKEMON_REQUEST:
      return { ...state , isLoading: true }
    case constants.LIST_POKEMON_SUCCESS:
      return { ...state , data: payload.results, isLoading: false, isFound: true }
    case constants.LIST_POKEMON_FAILURE:
      return { ...state , isLoading: false, isFound: false }
    default:
      return state
  }
}