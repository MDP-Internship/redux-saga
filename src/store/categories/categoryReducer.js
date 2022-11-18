const initalCategory = {
  category: []
}


/**
 * GET CATEGORY REQUEST methodu aslında set yapıyor kafa karıştırıcı olmuş
 *  */
const categoryReducer = (state = initalCategory, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_REQUEST':
      return {
        ...state,
        category: action.data
      }
    default:
      return state
  }
}

export default categoryReducer