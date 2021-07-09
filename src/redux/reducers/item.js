import constants from "../../config/constants"

const initialState = {
  data: [],
  isLoading: false,
  isFound: false,
  detailData: null,
  detailLoading: false,
  detailFound: false
}

export default itemMonReducer = (state=initialState, action) => {
  // console.log('iniii', action.payload)
  const { type, payload } = action
  switch (type) {
    case constants.LIST_ITEMS_REQUEST:
      return { ...state , isLoading: true }
    case constants.LIST_ITEMS_SUCCESS:
      return { ...state , data: payload.results, isLoading: false, isFound: true }
    case constants.LIST_ITEMS_FAILURE:
      return { ...state , isLoading: false, isFound: false }
    case constants.DETAIL_ITEM_REQUEST:
      return { ...state , detailLoading: true }
    case constants.DETAIL_ITEM_SUCCESS:
      return { ...state , detailData: { ...state.detailData, ...action.payload}, detailLoading: false, detailFound: true }
    case constants.DETAIL_ITEM_FAILURE:
      return { ...state , detailLoading: false, detailFound: false }
    default:
      return state
  }
}