import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { MainNavigator } from './navigation/MainNavigator'
import { Provider } from 'react-redux'
import store from './store/store'
import { theme } from './theme/theme'
import { ThemeProvider } from 'styled-components/native'
import { AppSafeAreaView, AppStatusBar } from './App.styled'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppSafeAreaView>
            <AppStatusBar />
            <MainNavigator />
          </AppSafeAreaView>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
