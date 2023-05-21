import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defalt";
import { GlobalStyle } from "./styles/global";

export function Saida() {
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button  />
      <Button />
      <Button  />
      <Button />
      <Button />
      <GlobalStyle />
      </ThemeProvider>
  )
}


