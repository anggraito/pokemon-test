import axios from 'axios'
import constants from '../../config/constants'

const getListPokemon = () => {
  return async () => {
    try {
      const url = `${constants.URL}/pokemon`
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      // console.log('UIK---------', url, response) 
      return response
    }
    catch (e) {
      console.error(e)
    }
  }
}

const getDetailPokemon = async (params) => {
  try {
    const response = await axios.get(params, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return response
  }
  catch (e) {
    console.error(e)
  }
}

export {
  getListPokemon,
  getDetailPokemon
}