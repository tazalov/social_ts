import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { ReactNode } from 'react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'

import Status from './Status'

import { profileAPI, ResultCodeE } from '../../../../api'
import { GlobalStyle } from '../../../../app/styles/Global.styled'
import { theme } from '../../../../app/styles/theme/Theme'

const renderWithProviders = (component: ReactNode, store: any) => {
  return render(
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {component}
        </ThemeProvider>
      </Provider>
    </HashRouter>,
  )
}

describe('Status', () => {
  const initialState = {
    app: { id: 1 },
    profile: {
      profile: { userId: 1 },
      status: 'Testing status string',
    },
  }

  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)

  it('renders without crashing', () => {
    const store = mockStore(initialState)
    renderWithProviders(<Status />, store)
  })

  it('renders the initial status with a short version', () => {
    const store = mockStore(initialState)
    renderWithProviders(<Status />, store)

    expect(screen.getByRole('status-span')).toBeInTheDocument()
    expect(screen.getByText('Testing status...')).toBeInTheDocument()
  })

  it('renders without input', () => {
    const store = mockStore(initialState)
    renderWithProviders(<Status />, store)

    expect(screen.queryByRole('status-input')).toBeNull()
  })

  it('enters edit mode on double click', () => {
    const store = mockStore(initialState)
    renderWithProviders(<Status />, store)

    userEvent.dblClick(screen.getByText('Testing status...'))

    expect(screen.getByRole('status-input')).toBeInTheDocument()
    expect(screen.queryByRole('status-span')).toBeNull()
  })

  it('should call profileAPI.updateStatus when the user changes the status and presses Enter', async () => {
    const store = mockStore(initialState)

    const updateStatusMock = jest
      .spyOn(profileAPI, 'updateStatus')
      .mockImplementation(async () => ({ resultCode: ResultCodeE.Success }))

    renderWithProviders(<Status />, store)

    const statusSpan = screen.getByRole('status-span')
    userEvent.dblClick(statusSpan)

    const statusInput = screen.getByRole('status-input')
    userEvent.clear(statusInput)
    userEvent.type(statusInput, 'Updated status{enter}')

    await waitFor(() => expect(updateStatusMock).toHaveBeenCalledWith('Updated status')) // проверяем, что мок был вызван с правильным аргументом

    updateStatusMock.mockRestore() // не забываем очистить мок после выполнения теста
  })
})
