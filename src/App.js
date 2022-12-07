//import logo from './logo.svg';
//import './App.css';
import Screen from './screens/screen';
import { myTheme } from './constants/theme';
import { ThemeProvider} from '@mui/material/styles';

function App() {

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <Screen/>
      </ThemeProvider>      
    </div>
  );
}

export default App;
