import { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { store } from './redux/store'
import { GlobalStyle } from './styles/Global.styled'
import { lightTheme, theme } from './styles/theme/Theme'

const Root = () => {
  const [currentTheme, setCurrentTheme] = useState(theme)

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? theme : lightTheme)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <App state={store.getState()} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
