const initalCategorizedProduct={
    categorizedProducts:[]
  }
  
/**
 * Burada yaptığın metodların hepsi set işlemidir hiçbiri request değil
 * hepsinde aynı parametreyi setlemissin hepsi için ayrı ayrı parametreler oluşturman gerekiyor yoksa
 * birbirine girer datalar
 * 
 */
const categorizedProductReducer=(state=initalCategorizedProduct, action) => {
    switch (action.type) {
      case 'GET_JEWELERY_REQUEST':
        // console.log("jewelery request"); => request değil set işlemi
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