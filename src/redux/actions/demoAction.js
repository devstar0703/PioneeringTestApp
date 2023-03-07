import ActionTypes from './actionTypes'

export const ConnectRedux = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.ConnectRedux,
      payload: {}
    })
  } catch (err) {
    console.log(err)
  }
}
