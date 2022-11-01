import styled from 'styled-components'
export const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${(props) => (props.isMain ? 'transparent' : 'green')};
  border-radius: 4px;
  background-color: ${(props) => (props.isMain ? 'pink' : 'transparent')};
  color: ${(props) => (props.isMain ? 'blue' : 'green')};
`
