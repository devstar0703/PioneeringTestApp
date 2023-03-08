import Actions from 'src/store/Actions'
import { type AppDispatch } from 'src/store/types/AppDispatch'

export const ConnectWallet = (role: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: Actions.ConnectRedux,
      payload: {
        role
      }
    })
  } catch (err) {
    console.log(err)
  }
}
