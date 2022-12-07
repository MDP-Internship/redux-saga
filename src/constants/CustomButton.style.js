import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)`
    color: ${(props)=> props.textcolor || 'secondary'};
    font-weight: bold;
    margin-top:10px
    
`;

/* 
  export const Button = styled.button`
  background-color: ${props => (props.disabled ? '#DDD' : 'green')};
`; 
*/