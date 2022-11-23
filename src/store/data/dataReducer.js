const initalData={
  products:[],
  loading: false
}

const dataReducer=(state=initalData, action) => {
  switch (action.type) {
    case 'GET_DATA_REQUEST':
      return {
        ...state,             
        loading: true
      }
    case 'GET_DATA_REQUEST_SUCCESS':
      return {
        ...state,             
        loading: false,
        products: action.data     
      }
    default:
      return state
  }
}

export default dataReducer