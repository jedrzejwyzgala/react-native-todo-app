import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../types/Todo'

interface TodosState {
  all: Array<Todo>
}

const initialState: TodosState = {
  all: [
    { title: 'Take out trash', completed: false },
    { title: 'Read a chapter of a book', completed: true },
  ],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: (state, action: PayloadAction<Todo>) => {
      state.all.push(action.payload)
    },
    todoToggled: (state, action: PayloadAction<number>) => {
      const index = action.payload
      const todo = state.all[index]
      todo.completed = !todo.completed
    },
  },
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
