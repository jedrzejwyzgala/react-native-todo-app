import { Text } from 'react-native'
import * as React from 'react'

interface TodoListItemProps {
  title: string
  completed: boolean
}

export const TodoListItem = ({ title, completed }: TodoListItemProps) => {
  const titleStyle = { color: completed ? 'green' : 'black' }

  return <Text style={titleStyle}>{title}</Text>
}
