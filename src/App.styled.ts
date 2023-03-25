import styled from 'styled-components/native'

export const AppSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`
export const AppStatusBar = styled.StatusBar.attrs((props) => ({
  barStyle: props.theme.isDark ? 'light-content' : 'dark-content',
}))`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`
