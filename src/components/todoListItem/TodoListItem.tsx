import * as React from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useAppDispatch } from '../../store/store'
import { todoToggled } from '../../store/reducers/todosReducer'
import { Container, Label } from './TodoListItem.styled'

interface TodoListItemProps {
  index: number
  title: string
  completed: boolean
}

export const TodoListItem = ({
  index,
  title,
  completed,
}: TodoListItemProps) => {
  const dispatch = useAppDispatch()

  const toggle = () => dispatch(todoToggled(index))

  return (
    <Container>
      <CheckBox value={completed} onChange={toggle} />
      <Label completed={completed}>{title}</Label>
    </Container>
  )
}
