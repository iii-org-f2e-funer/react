import { combineReducers } from 'redux'

function userInfo(state = {}, action) {
  switch (action.type) {
    case 'USER_INFO':
      return {
        ...state,
        account: action.payload.account,
        login: true,
      }
    case 'LOG_OUT':
      return {
        ...state,
        account: '',
        login: false,
      }
    default:
      return state
  }
}

export default combineReducers({
  userInfo,
})
