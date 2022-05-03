import './App.css';
import Routes from './routes'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { MainProvider } from './contexts/MainContext';

const font =  "'Manrope', sans-serif";
const font2 =  "'Oxanium'";
const theme = createTheme({
  typography: {
    fontFamily: [font, font2].join(','),
    },
    overrides: {
      AppBar: {
        colorPrimary: {
          backgroundColor: "#000",
        },
      },
    },
  }
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainProvider>
        <Routes/>
      </MainProvider>
      {/* <TawkMessengerReact
                propertyId="626e3e8a7b967b11798d4c01"
                widgetId="1g1va8k9n"/> */}
    </ThemeProvider>
  );
}

export default App;
