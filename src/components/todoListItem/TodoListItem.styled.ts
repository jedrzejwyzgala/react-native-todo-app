import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

interface LabelProps {
  completed: boolean
}

export const Title = styled.TextInput<LabelProps>`
  font-size: ${(props) => props.theme.fontSize.m};
  margin-left: 8px;
  flex: 1;
  padding-vertical: 6px;
  color: ${(props) =>
    props.completed
      ? props.theme.colors.successPrimary
      : props.theme.colors.textPrimary};
`
