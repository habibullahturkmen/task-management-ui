import React, { FC, ReactElement } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { customTheme } from "./theme/customTheme"

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <h1>Hola Wola</h1>
    </ThemeProvider>
  )
}

export default App
