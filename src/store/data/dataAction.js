export const getDataRequest = () => ({
  type: 'GET_DATA_REQUEST'
})

export const getDataRequestSuccess = data => ({
  type: 'GET_DATA_REQUEST_SUCCESS',
  data
})