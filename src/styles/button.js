import styled from '@emotion/styled'

const dark_green = '#1f4120';
const light_green = '#32a436';

export const Button = styled.button`
  color:#fff;
  background-color: ${props => (props.secondary ? dark_green : light_green)};  
  border-color: ${props => (props.secondary ? light_green : dark_green)};
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 15px;

`

