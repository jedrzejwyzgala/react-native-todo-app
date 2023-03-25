import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

interface LabelProps {
  completed: boolean
}

export const Label = styled.Text<LabelProps>`
  color: ${(props) =>
    props.completed
      ? props.theme.colors.successPrimary
      : props.theme.colors.textPrimary};
`
