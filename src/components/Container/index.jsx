import styled from "styled-components";

const Container = styled.div`
  max-width: ${props => (props.small ? "600" : "800")}px;
  margin: auto;
  padding: 20px;
`;

export default Container;
