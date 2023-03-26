import { createSelector } from '@reduxjs/toolkit'
import { todosAdapter } from '../reducers/todosReducer'
import { RootState } from '../store'

export const todosEntitySelectors = todosAdapter.getSelectors<RootState>(
  (state) => state.todos,
)

export const selectCompleted = createSelector(
  [todosEntitySelectors.selectAll],
  (all) => all.filter((todo) => !todo.completed),
)

export const selectUncompleted = createSelector(
  [todosEntitySelectors.selectAll],
  (all) => all.filter((todo) => todo.completed),
)
