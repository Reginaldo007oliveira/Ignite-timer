import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/defalt'
import UseEffectstoma from './pages/UseEffectstoma'

export function Saida() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <UseEffectstoma />
      <GlobalStyle />
    </ThemeProvider>
  )
}
