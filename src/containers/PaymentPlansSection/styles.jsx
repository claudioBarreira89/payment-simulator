import styled from "styled-components";

export const CaretDown = styled.i`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(45deg);
  margin-right: 10px;
  left: 0;
  top: 1px;
  position: absolute;

  ${props =>
    props.isOpen &&
    `
    top: 9px;
    transform: rotate(225deg);
  `}
`;

export const ToggleButton = styled.div`
  padding: 5px;
  text-align: center;
  cursor: pointer;

  p {
    position: relative;
    display: inline;
    padding-left: 30px;
    font-size: 18px;
  }
`;

export const PaymentsTableContainer = styled.div`
  padding: 15px 0;

  h2 {
    text-align: center;
  }
`;

export const PaymentsTable = styled.div`
  padding: 25px 0;
  margin: auto;

  .tableRow {
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    padding: 10px;
    margin-bottom: 6px;

    > div {
      flex: 1;

      span {
        color: #ddd;
      }
    }
  }

  @media (max-width: 500px) {
    .tableRow {
      > div {
        text-align: center;
        flex: 1 0 50%;
        margin-bottom: 5px;
      }
    }
  }
`;
