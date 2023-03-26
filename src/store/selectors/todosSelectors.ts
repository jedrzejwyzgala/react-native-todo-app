import { todosAdapter } from '../reducers/todosReducer'
import { RootState } from '../store'

export const todosEntitySelectors = todosAdapter.getSelectors<RootState>(
  (state) => state.todos,
)
