import { FlatList, StyleSheet, Text, View, ListRenderItem } from 'react-native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTodos } from '../store/selectors/todosSelectors'
import { Todo } from '../types/Todo'
import { TodoListItem } from '../components/todoListItem/TodoListItem'

export const HomeScreen = () => {
  const todos = useSelector(selectAllTodos)

  const renderTodo: ListRenderItem<Todo> = ({ item, index }) => (
    <TodoListItem index={index} title={item.title} completed={item.completed} />
  )

  return (
    <View style={styles.container}>
      <Text>Todo List</Text>
      <FlatList data={todos} renderItem={renderTodo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#000',
  },
})
