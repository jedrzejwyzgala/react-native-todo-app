import * as React from 'react'
import { useAppDispatch } from '../../store/store'
import { todoAdded, todoUpdated } from '../../store/reducers/todosReducer'
import { Container, Label } from './TodoListItem.styled'
import { CheckBox } from '../checkbox/checkbox'
import { useTheme } from 'styled-components/native'

interface TodoListItemProps {
  id?: string
  title?: string
  completed?: boolean
}

export const TodoListItem = ({
  id,
  title: initialTitle = '',
  completed = false,
}: TodoListItemProps) => {
  const dispatch = useAppDispatch()
  const theme = useTheme()

  const [title, setTitle] = React.useState(initialTitle)

  const update = () => {
    if (id) dispatch(todoUpdated({ id, changes: { title } }))
  }

  const toggle = () => {
    if (id) dispatch(todoUpdated({ id, changes: { completed: !completed } }))
  }

  const create = () => {
    if (id || !title.length) return
    dispatch(todoAdded({ title }))
    setTitle('')
  }

  const save = id ? update : create

  return (
    <Container>
      <CheckBox value={completed} onChange={toggle} size={theme.fontSize.l} />
      <Label
        completed={completed}
        onChangeText={setTitle}
        onSubmitEditing={save}
        onBlur={save}
        blurOnSubmit={!!id}
      >
        {title}
      </Label>
    </Container>
  )
}
