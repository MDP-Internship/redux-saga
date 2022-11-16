const initalCategory={
    category:[]
  }

const categoryReducer= (state=initalCategory, action) => {
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