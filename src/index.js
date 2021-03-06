import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './style.css';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif"
  }
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
