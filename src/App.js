import './App.css';
import Routes from './routes'
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
