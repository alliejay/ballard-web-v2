
const searchProducts = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: 'PRODUCT_SEARCH', searchTerm })
  }
};