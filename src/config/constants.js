import config from "."

const constants = {}

constants.LIST_POKEMON_REQUEST = 'LIST_POKEMON_REQUEST'
constants.LIST_POKEMON_SUCCESS = 'LIST_POKEMON_SUCCESS'
constants.LIST_POKEMON_FAILURE = 'LIST_POKEMON_FAILURE'

constants.DETAIL_POKEMON_REQUEST = 'DETAIL_POKEMON_REQUEST'
constants.DETAIL_POKEMON_SUCCESS = 'DETAIL_POKEMON_SUCCESS'
constants.DETAIL_POKEMON_FAILURE = 'DETAIL_POKEMON_FAILURE'

constants.URL = config.URL[config.environment]

export default constants