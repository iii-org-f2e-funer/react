const actions = {
  userInfo: payload => {
    return {
      type: 'USER_INFO',
      payload,
    }
  },
  firmInfo: payload => {
    return {
      type: 'FIRM_INFO',
      payload,
    }
  },
  logOut: payload => {
    return {
      type: 'LOG_OUT',
      payload,
    }
  },
}

export default actions
