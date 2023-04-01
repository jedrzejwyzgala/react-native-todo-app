import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  flex: 1;
  padding-horizontal: 10px;
`

export const extraStyles = StyleSheet.create({
  flatListContainer: { flex: 1 },
})
