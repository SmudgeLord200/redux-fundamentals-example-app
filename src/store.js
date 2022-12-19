import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

// const composedEnhancer = composeWithDevTools(
//   applyMiddleware(thunkMiddleware)
//   // other store enhancers if any
// )

//const store = createStore(rootReducer, composedEnhancer)

const store = configureStore({
  reducer: {
    //define a top-level state field named "todos", handled by "todosReducer"
    todos: todosReducer,
    filters: filtersReducer
  }
})

export default store
