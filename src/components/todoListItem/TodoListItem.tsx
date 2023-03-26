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
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated'

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

  // const offsetTarget = useSharedValue(0)
  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: withTiming(offsetTarget.value, {
  //           duration: 300,
  //           easing: Easing.linear,
  //         }),
  //       },
  //     ],
  //   }
  // })

  const activate = () => setActive(true)

  const update = () => {
    if (id) dispatch(todoUpdated({ id, changes: { title } }))
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
    <Animated.View exiting={FadeOutRight} entering={FadeInLeft}>
      <Container>
        <CheckBox value={completed} onChange={toggle} size={theme.fontSize.l} />
        <Title
          completed={completed}
          onChangeText={setTitle}
          onSubmitEditing={save}
          onBlur={save}
          blurOnSubmit={!!id}
          onFocus={activate}
        >
          {title}
        </Title>
        {!!showCloseButton && <Button title="✕" onPress={remove} />}
      </Container>
    </Animated.View>
  )
}
