import styled from "styled-components";

const Section = styled.div`
  padding: 30px 0;
  ${props => props.bgColor && `background-color: ${props.bgColor}`}
`;

export default Section;
