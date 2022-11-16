export default (state, action) => {
    switch (action.type) {
      case 'GET_CATEGORY_REQUEST':
        return {
          ...state,
          categories: {
            ...state,
            data: action.data
          }
        }
      default:
        return state
    }
}