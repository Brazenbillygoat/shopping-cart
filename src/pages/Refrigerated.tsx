import React from "react";
import styled from "styled-components";

const RefrigeratedText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const Refrigerated: React.FunctionComponent = () => {
  return <RefrigeratedText>Refrigerated</RefrigeratedText>;
};

export default Refrigerated;
