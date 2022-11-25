//import logo from './logo.svg';
//import './App.css';
import FirstPage from './screens/pages/FirstPage';
import { myTheme } from './constants/theme';
import { ThemeProvider} from '@mui/material/styles';


function App() {
  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <FirstPage/>
      </ThemeProvider>      
    </div>
  );
}

export default App;
