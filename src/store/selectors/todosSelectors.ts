import { createSelector } from '@reduxjs/toolkit'
import { todosAdapter } from '../reducers/todosReducer'
import { RootState } from '../store'

export const todosEntitySelectors = todosAdapter.getSelectors<RootState>(
  (state) => state.todos,
)

export const selectCompleted = createSelector(
  [todosEntitySelectors.selectAll],
  (all) => all.filter(({ completed }) => completed),
)

export const selectCompletedIds = createSelector(
  [selectCompleted],
  (completed) => completed.map(({ id }) => id),
)

export const selectUncompleted = createSelector(
  [todosEntitySelectors.selectAll],
  (all) =>
    all
      .filter(({ completed }) => !completed)
      .sort((a, b) => a.updated - b.updated),
)
