const initalCategorizedProduct={
    categorizedProducts:[]
  }
  
const categorizedProductReducer=(state=initalCategorizedProduct, action) => {
    switch (action.type) {
      case 'SET_JEWELERY_REQUEST':
          
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      case 'SET_ELECTRONICS_REQUEST':
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      case 'SET_MEN_REQUEST':
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      case 'SET_WOMEN_REQUEST':
        return {
          ...state,       
          categorizedProducts: action.data     
        }

      default:
        return state
    }
  }
  
export default categorizedProductReducer;