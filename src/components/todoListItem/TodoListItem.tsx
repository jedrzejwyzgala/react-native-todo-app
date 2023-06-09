import * as React from 'react'
import { useAppDispatch } from '../../store/store'
import {
  todoAdded,
  todoRemoved,
  todoUpdated,
} from '../../store/reducers/todosReducer'
import { Container, Title } from './TodoListItem.styled'
import { CheckBox } from '../checkbox/checkbox'
import { useTheme } from 'styled-components/native'
import { Button } from 'react-native'
import { FadeIn, FadeOut } from 'react-native-reanimated'

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
  const [active, setActive] = React.useState(false)

  const activate = () => setActive(true)

  const update = () => {
    if (id && title !== initialTitle) {
      dispatch(todoUpdated({ id, changes: { title } }))
    }
    setActive(false)
  }

  const toggle = () => {
    if (id) dispatch(todoUpdated({ id, changes: { completed: !completed } }))
  }

  const create = () => {
    if (id || !title.length) return
    dispatch(todoAdded({ title }))
    setTitle('')
  }

  const remove = () => {
    if (id) dispatch(todoRemoved(id))
  }

  const save = id ? update : create

  const showCloseButton = id && (completed || active)

  return (
    <Container
      entering={
        completed ? FadeIn.duration(300).delay(300) : FadeIn.duration(300)
      }
      exiting={FadeOut.duration(300)}
    >
      <CheckBox
        disabled={!id}
        value={completed}
        onChange={toggle}
        size={theme.fontSize.l}
        animationDuration={0}
      />
      <Title
        completed={completed}
        onChangeText={setTitle}
        onSubmitEditing={save}
        onBlur={save}
        blurOnSubmit={!!id}
        onFocus={activate}
        placeholder="What needs to be done?"
      >
        {title}
      </Title>
      {!!showCloseButton && (
        <Button title="✕" onPress={remove} color={theme.colors.errorPrimary} />
      )}
    </Container>
  )
}
