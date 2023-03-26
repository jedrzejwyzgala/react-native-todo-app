import { FlatList, ListRenderItem } from 'react-native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { TodoListItem } from '../components/todoListItem/TodoListItem'
import { Container } from './HomeScreen.styled'
import { todosEntitySelectors } from '../store/selectors/todosSelectors'
import { Todo } from '../types/Todo'

export const HomeScreen = () => {
  const todos = useSelector(todosEntitySelectors.selectAll)

  const renderTodo: ListRenderItem<Todo> = ({ item }) => (
    <TodoListItem id={item.id} title={item.title} completed={item.completed} />
  )

  return (
    <Container>
      <FlatList
        data={todos}
        renderItem={renderTodo}
        ListFooterComponent={<TodoListItem />}
      />
    </Container>
  )
}
