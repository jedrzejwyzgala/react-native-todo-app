import { Colors } from './colors'
import { FontSize } from './size'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    isDark: boolean
    colors: typeof Colors
    fontSize: typeof FontSize
  }
}
