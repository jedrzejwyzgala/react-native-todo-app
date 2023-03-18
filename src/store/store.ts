import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import todosReducer from './reducers/todosReducer'

const reducer = {
  todos: todosReducer,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})
