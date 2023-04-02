import { useTheme } from 'styled-components/native'
import { CheckBoxStyled } from './checkbox.styled'
import * as React from 'react'
import { CheckBoxProps as RNCheckBoxProps } from '@react-native-community/checkbox'
import { CheckBoxProps } from './checkbox.types'

export const CheckBox = ({
  size,
  disabled,
  ...rnCheckboxProps
}: CheckBoxProps & RNCheckBoxProps) => {
  const theme = useTheme()

  const uncheckedColor = disabled
    ? theme.colors.textSecondary
    : theme.colors.textPrimary

  const checkedColor = theme.colors.successPrimary

  return (
    <CheckBoxStyled
      animationDuration={0.2}
      tintColor={uncheckedColor}
      onTintColor={checkedColor}
      onCheckColor={checkedColor}
      tintColors={{
        true: checkedColor,
        false: uncheckedColor,
      }}
      size={size}
      {...rnCheckboxProps}
    />
  )
}
