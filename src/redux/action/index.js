const getDetailPokemon = async (params) => {
  try {
    const response = await axios.get(params, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    // console.log('UIK---------', response) 
    return response
  }
  catch (e) {
    console.error(e)
  }
}

export {
  getDetailPokemon
}