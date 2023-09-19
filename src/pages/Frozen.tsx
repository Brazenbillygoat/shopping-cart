import React from "react";
import styled from "styled-components";

const FrozenText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const Frozen: React.FunctionComponent = () => {
  return <FrozenText>Frozen</FrozenText>;
};

export default Frozen;
