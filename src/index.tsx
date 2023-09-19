import { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './app/App'
import { StoreProvider } from './app/providers/store'
import { GlobalStyle } from './app/styles/Global.styled'
import { lightTheme, theme } from './app/styles/theme/Theme'

const Root = () => {
  const [currentTheme, setCurrentTheme] = useState(theme)

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? theme : lightTheme)
  }

  return (
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          <App toggleTheme={toggleTheme} />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
