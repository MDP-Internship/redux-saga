//import logo from './logo.svg';
//import './App.css';
import Screen from './screens/screen';
import Authentication from './screens/authentication';
import { myTheme } from './constants/theme';
import { ThemeProvider} from '@mui/material/styles';
import CustomRoute from './route/route';


function App() {

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <CustomRoute/>
      </ThemeProvider>      
    </div>
  );
}

export default App;
