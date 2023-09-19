import React from "react";
import styled from "styled-components";

const CandyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const Candy: React.FunctionComponent = () => {
  return <CandyText>Candy</CandyText>;
};

export default Candy;
