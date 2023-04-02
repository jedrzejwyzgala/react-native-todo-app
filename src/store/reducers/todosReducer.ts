import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  Update,
} from '@reduxjs/toolkit'
import { Todo } from '../../types/Todo'
import randomUUID from '../../utils/randomUUID'

export const todosAdapter = createEntityAdapter<Todo>()

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
    completedTodosCleared: todosAdapter.removeMany,
  },
})

export const { todoAdded, todoUpdated, todoRemoved, completedTodosCleared } =
  todosSlice.actions
export default todosSlice.reducer
