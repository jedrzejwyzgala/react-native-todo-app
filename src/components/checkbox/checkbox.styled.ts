import RNCheckBox from '@react-native-community/checkbox'
import styled from 'styled-components/native'
import { CheckBoxProps } from './checkbox.types'

export const CheckBoxStyled = styled(RNCheckBox).attrs((props) => ({
  tintColor: props.disabled
    ? props.theme.colors.textSecondary
    : props.theme.colors.textPrimary,
  onTintColor: props.theme.colors.successPrimary,
  onCheckColor: props.theme.colors.successPrimary,
  tintColors: {
    true: props.theme.colors.successPrimary,
    false: props.disabled
      ? props.theme.colors.textSecondary
      : props.theme.colors.textPrimary,
  },
}))<CheckBoxProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin: 1px;
`
