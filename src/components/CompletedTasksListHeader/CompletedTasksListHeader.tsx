import { HeaderLabel } from '../HeaderLabel'
import { useAppDispatch } from '../../store/store'
import { completedTodosCleared } from '../../store/reducers/todosReducer'
import { useSelector } from 'react-redux'
import { selectCompletedIds } from '../../store/selectors/todosSelectors'
import { TextButton } from '../TextButton'
import { Container } from './CompletedTasksListHeader.styled'
import * as React from 'react'
import { FadeIn, FadeOut } from 'react-native-reanimated'

export const CompletedTasksListHeader = () => {
  const dispatch = useAppDispatch()
  const completedIds = useSelector(selectCompletedIds)

  const clear = () => {
    dispatch(completedTodosCleared(completedIds))
  }

  return (
    <Container entering={FadeIn} exiting={FadeOut}>
      <HeaderLabel>Completed tasks</HeaderLabel>
      <TextButton onPress={clear}>Clear all</TextButton>
    </Container>
  )
}
