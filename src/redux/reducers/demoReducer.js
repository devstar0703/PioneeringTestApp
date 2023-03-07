import ActionTypes from '../actions/actionTypes'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ActionTypes.ConnectRedux:
      return {
        ...state
      }

    default:
      return state
  }
}
