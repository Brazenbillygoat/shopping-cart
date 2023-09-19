import React from "react";
import styled from "styled-components";

const SpicyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const Spicy: React.FunctionComponent = () => {
  return <SpicyText>Spicy</SpicyText>;
};

export default Spicy;
