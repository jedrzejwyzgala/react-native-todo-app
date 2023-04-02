import { ListRenderItem } from 'react-native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { TodoListItem } from '../components/todoListItem/TodoListItem'
import { Container, extraStyles } from './HomeScreen.styled'
import {
  selectCompleted,
  selectUncompleted,
} from '../store/selectors/todosSelectors'
import { Todo } from '../types/Todo'
import Animated, { Layout } from 'react-native-reanimated'
import { CompletedTasksListHeader } from '../components/CompletedTasksListHeader/CompletedTasksListHeader'

export const HomeScreen = () => {
  const completedTodos = useSelector(selectCompleted)
  const uncompletedTodos = useSelector(selectUncompleted)

  const renderTodo: ListRenderItem<Todo> = ({ item }) => (
    <TodoListItem id={item.id} title={item.title} completed={item.completed} />
  )

  return (
    <Container>
      <Animated.FlatList
        data={uncompletedTodos}
        renderItem={renderTodo}
        ListFooterComponent={<TodoListItem />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(todo) => todo.id}
        itemLayoutAnimation={Layout.duration(300).delay(300)}
        contentContainerStyle={extraStyles.flatListContainer}
      />
      <Animated.FlatList
        data={completedTodos}
        renderItem={renderTodo}
        showsVerticalScrollIndicator={false}
        keyExtractor={(todo) => todo.id}
        itemLayoutAnimation={Layout.duration(300).delay(300)}
        contentContainerStyle={extraStyles.flatListContainer}
        ListHeaderComponent={
          completedTodos.length ? CompletedTasksListHeader : null
        }
      />
    </Container>
  )
}
