import React from 'react'
import './App.css'
import { createStore, applyMiddleware, compose } from 'redux'
import RootRouter from './routers/index.js'
import rootReducer from './redux/reducer/userInfo'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}

export default App
