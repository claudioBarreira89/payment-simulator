import styled from "styled-components";

const RadioButton = styled.div`
  width: 30px;
  height: 30px;
  margin: 20px auto 0;
  background-color: #eee;
  border: 11px solid transparent;
  border-radius: 100%;

  ${props =>
    props.active &&
    `
        border-color: #61b5d5;
        background-color: #fff;
      `}
`;

export default RadioButton;
