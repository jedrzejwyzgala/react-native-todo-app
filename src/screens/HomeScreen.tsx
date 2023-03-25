import { FlatList, ListRenderItem } from 'react-native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTodos } from '../store/selectors/todosSelectors'
import { Todo } from '../types/Todo'
import { TodoListItem } from '../components/todoListItem/TodoListItem'
import { Container } from './HomeScreen.styled'

export const HomeScreen = () => {
  const todos = useSelector(selectAllTodos)

  const renderTodo: ListRenderItem<Todo> = ({ item, index }) => (
    <TodoListItem index={index} title={item.title} completed={item.completed} />
  )

  return (
    <Container>
      <FlatList data={todos} renderItem={renderTodo} />
    </Container>
  )
}
