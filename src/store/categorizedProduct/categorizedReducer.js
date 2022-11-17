const initalCategorizedProduct={
    categorizedProducts:[]
  }
  
const categorizedProductReducer=(state=initalCategorizedProduct, action) => {
    switch (action.type) {
      case 'GET_JEWELERY_REQUEST':
        console.log("jewelery request");
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      case 'GET_ELECTRONICS_REQUEST':
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      case 'GET_MEN_REQUEST':
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      case 'GET_WOMEN_REQUEST':
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      default:
        return state
    }
  }
  
export default categorizedProductReducer;