import { useTheme } from 'styled-components/native'
import { CheckBoxStyled } from './checkbox.styled'
import * as React from 'react'
import { CheckBoxProps as RNCheckBoxProps } from '@react-native-community/checkbox'
import { CheckBoxProps } from './checkbox.types'

export const CheckBox = ({
  size,
  ...rnCheckboxProps
}: CheckBoxProps & RNCheckBoxProps) => {
  const theme = useTheme()
  return (
    <CheckBoxStyled
      animationDuration={0.2}
      tintColor={theme.colors.textPrimary}
      onTintColor={theme.colors.successPrimary}
      onCheckColor={theme.colors.successPrimary}
      tintColors={{
        true: theme.colors.successPrimary,
        false: theme.colors.textPrimary,
      }}
      size={size}
      {...rnCheckboxProps}
    />
  )
}
