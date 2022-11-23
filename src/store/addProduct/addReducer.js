const initalNewProduct={
    newProduct:[{
        id:31,
        title:'...',
        price:'...',
        category:'...',
        description:'...',
        image:'...'
    }]
  }

const newProductReducer= (state=initalNewProduct, action) => {
    switch (action.type) {
      case 'POST_NEW_PRODUCT_REQUEST':
        return {
          ...state,
          newProduct: action.data
        }
      default:
        return state
    }
}

export default newProductReducer