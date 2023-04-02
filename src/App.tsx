import * as React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigator } from './navigation/MainNavigator'
import { Provider } from 'react-redux'
import store, { persistor } from './store/store'
import { theme } from './theme/theme'
import { ThemeProvider } from 'styled-components/native'
import { AppSafeAreaView, AppStatusBar } from './App.styled'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AppSafeAreaView>
              <AppStatusBar />
              <MainNavigator />
            </AppSafeAreaView>
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
