import { useTheme } from 'styled-components/native'
import { CheckBoxStyled } from './checkbox.styled'
import * as React from 'react'
import { CheckBoxProps as RNCheckBoxProps } from '@react-native-community/checkbox'
import { CheckBoxProps } from './checkbox.types'

export const CheckBox = ({
  size,
  ...rnCheckboxProps
}: CheckBoxProps & RNCheckBoxProps) => {
  return (
    <CheckBoxStyled animationDuration={0.2} size={size} {...rnCheckboxProps} />
  )
}
