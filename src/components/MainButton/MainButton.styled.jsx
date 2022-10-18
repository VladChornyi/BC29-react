import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;

  padding: 5px 35px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;

  text-align: center;
  color: ${props => props.light ? "#111B47" : "#ffffff"};
  border-color: ${props => props.light ? "#111B47" : "transparent"};
  background: ${props => props.light ? 'transparent' : "#111B47"};
  border-radius: 2px;
`;

