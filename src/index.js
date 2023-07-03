import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
	  primary: {
		main: '#FFA500'
	  },
	  secondary: {
		main: '#808080'
	  }
	
	}
  });

  ReactDOM.render(
	<React.StrictMode>
	  <ThemeProvider theme={theme}>
		<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
  );