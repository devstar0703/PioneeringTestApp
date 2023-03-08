import Actions from 'src/store/Actions'
import { type ActionTypes } from 'src/store/types/ActionTypes'

const INITIAL_STATE = {
  role: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case Actions.ConnectRedux:
      return ({
        ...state,
        role: action.payload.role
      })
    default :
      return state
  }
}
