import { FlatList, ListRenderItem, TextInput } from 'react-native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from '../types/Todo'
import { TodoListItem } from '../components/todoListItem/TodoListItem'
import { Container } from './HomeScreen.styled'
import { todosEntitySelectors } from '../store/selectors/todosSelectors'
import { useAppDispatch } from '../store/store'
import { todoAdded } from '../store/reducers/todosReducer'

export const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const todos = useSelector(todosEntitySelectors.selectAll)

  const renderTodo: ListRenderItem<Todo> = ({ item }) => (
    <TodoListItem id={item.id} title={item.title} completed={item.completed} />
  )

  const [title, setTitle] = React.useState('')
  const createTodo = () => {
    dispatch(todoAdded({ title }))
    setTitle('')
  }

  return (
    <Container>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        ListFooterComponent={
          <TextInput
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={createTodo}
            blurOnSubmit={false}
            style={{ backgroundColor: '#6b4a4a', color: 'white', padding: 8 }}
          />
        }
      />
    </Container>
  )
}
