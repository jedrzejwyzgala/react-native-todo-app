import * as React from 'react'
import { useAppDispatch } from '../../store/store'
import { todoToggled } from '../../store/reducers/todosReducer'
import { Container, Label } from './TodoListItem.styled'
import { CheckBox } from '../checkbox/checkbox'
import { useTheme } from 'styled-components/native'

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
  const theme = useTheme()

  const toggle = () => dispatch(todoToggled(index))

  return (
    <Container>
      <CheckBox value={completed} onChange={toggle} size={theme.fontSize.l} />
      <Label completed={completed}>{title}</Label>
    </Container>
  )
}
