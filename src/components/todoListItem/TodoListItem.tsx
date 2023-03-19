import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useAppDispatch } from '../../store/store'
import { todoToggled } from '../../store/reducers/todosReducer'

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
  const titleStyle = { color: completed ? 'green' : 'black' }

  const toggle = () => dispatch(todoToggled(index))

  return (
    <View style={styles.container}>
      <CheckBox value={completed} onChange={toggle} />
      <Text style={titleStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
