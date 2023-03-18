import { createAction, createReducer } from '@reduxjs/toolkit'
import { Todo } from '../../types/Todo'

const todoAdded = createAction<Todo>('todos/todoAdded')
const todoToggled = createAction<number>('todos/toggled')

const todosReducer = createReducer(
  {
    all: [] as Array<Todo>,
  },
  (builder) => {
    builder
      .addCase(todoAdded, (state, action) => {
        state.all.push(action.payload)
      })
      .addCase(todoToggled, (state, action) => {
        const index = action.payload
        const todo = state.all[index]
        todo.completed = !todo.completed
      })
  },
)

export default todosReducer
