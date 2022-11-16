export default (state, action) => {
  switch (action.type) {
    case 'GET_DATA_REQUEST':
      return {
        ...state,
        products: {
          ...state,               //.drinks,
          loading: true
        }
      }
    case 'GET_DATA_REQUEST_SUCCESS':
      return {
        ...state,
        products: {
          ...state,                 //.drinks,
          loading: false,
          data: action.data         //.drinks
        }
      }
    default:
      return state
  }
}