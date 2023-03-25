import { colors } from './colors'
import { fontSize } from './size'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    isDark: boolean
    colors: typeof colors
    fontSize: typeof fontSize
  }
}
