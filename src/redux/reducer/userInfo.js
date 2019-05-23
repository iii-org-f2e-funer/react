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

// 借放一下 XD
function isFixed(state = false, action) {
  switch (action.type) {
    case 'isFixed':
      state = true
      return state
    case 'unFixed':
      state = false
      return state
    default:
      return state
  }
}
// 到這裡結束

export default combineReducers({
  userInfo,
  isFixed,
})
