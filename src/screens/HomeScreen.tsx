import { FlatList, ListRenderItem } from 'react-native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { TodoListItem } from '../components/todoListItem/TodoListItem'
import { Container } from './HomeScreen.styled'
import {
  selectCompleted,
  selectUncompleted,
} from '../store/selectors/todosSelectors'
import { Todo } from '../types/Todo'

export const HomeScreen = () => {
  const completedTodos = useSelector(selectCompleted)
  const uncompletedTodos = useSelector(selectUncompleted)

  const renderTodo: ListRenderItem<Todo> = ({ item }) => (
    <TodoListItem id={item.id} title={item.title} completed={item.completed} />
  )

  return (
    <Container>
      <FlatList
        data={completedTodos}
        renderItem={renderTodo}
        ListFooterComponent={<TodoListItem />}
      />
      <FlatList data={uncompletedTodos} renderItem={renderTodo} />
    </Container>
  )
}
