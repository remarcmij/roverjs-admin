import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'
import Executions from './app/Executions'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Executions />
      </MuiThemeProvider>
    )
  }
}

export default App
