import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Colors } from '../constants/theme';

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: Colors.dark_green,
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: Colors.light_green,
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
      
    },
  });

export default ValidationTextField;