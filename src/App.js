//import logo from './logo.svg';
//import './App.css';
import FirstPage from './screens/pages/FirstPage';
import SecondPage from './screens/pages/SecondPage';
import { myTheme } from './constants/theme';
import { ThemeProvider} from '@mui/material/styles';

function App() {

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        {/* <FirstPage/> */}
        <SecondPage/>
      </ThemeProvider>      
    </div>
  );
}

export default App;
