import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit'
import { Todo } from '../../types/Todo'
import randomUUID from '../../utils/randomUUID'

export const todosAdapter = createEntityAdapter<Todo>({
  sortComparer: (a, b) => {
    if (!a.completed && b.completed) return -1
    if (a.completed && !b.completed) return 1
    return 0
  },
})

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    todoAdded: (state, action: PayloadAction<Pick<Todo, 'title'>>) =>
      todosAdapter.addOne(state, {
        ...action.payload,
        id: randomUUID(),
        completed: false,
        updated: Date.now(),
        created: Date.now(),
      }),
    todoUpdated: (state, action: PayloadAction<Update<Todo>>) =>
      todosAdapter.updateOne(state, {
        id: action.payload.id,
        changes: { ...action.payload.changes, updated: Date.now() },
      }),
    todoRemoved: todosAdapter.removeOne,
  },
})

export const { todoAdded, todoUpdated, todoRemoved } = todosSlice.actions
export default todosSlice.reducer
