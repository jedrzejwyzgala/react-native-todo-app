import RNCheckBox from '@react-native-community/checkbox'
import styled from 'styled-components/native'
import { CheckBoxProps } from './checkbox.types'

export const CheckBoxStyled = styled(RNCheckBox)<CheckBoxProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin: 1px;
`
