import config from "."

const constants = {}

constants.SET_ACCOUNT_INFO = 'SET_ACCOUNT_INFO'
constants.URL = config.URL[config.environment]
constants.pathVersion = '/v2/pokemon'

export default constants