import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { Todo } from '../../types/Todo'

export const todosAdapter = createEntityAdapter<Todo>({
  sortComparer: (a, b) => {
    if (!a.completed && b.completed) return -1
    if (a.completed && !b.completed) return 1
    return 0
  },
})

const mockInitialState = {
  ids: [1, 2, 3],
  entities: {
    1: {
      id: 1,
      title: 'Read a chapter of a book',
      completed: false,
      created: Date.now(),
      updated: Date.now(),
    },
    2: {
      id: 2,
      title: 'Take out trash',
      completed: false,
      created: Date.now(),
      updated: Date.now(),
    },
    3: {
      id: 3,
      title: 'Study for 45 minutes',
      completed: false,
      created: Date.now(),
      updated: Date.now(),
    },
  },
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(mockInitialState),
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoUpdated: todosAdapter.updateOne,
  },
})

export const { todoAdded, todoUpdated } = todosSlice.actions
export default todosSlice.reducer
