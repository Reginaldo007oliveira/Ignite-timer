import 'styled-components';
import { defaultTheme } from '../styles/theme/defalt';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}