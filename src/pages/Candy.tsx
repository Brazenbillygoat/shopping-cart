import React from "react";
import styled from "styled-components";
import { SaleItemProps } from "../components/SaleItem";

const CandyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

type CandyPageProps = {
  SaleItems: SaleItemProps[];
}

const Candy: React.FunctionComponent = () => {
  return <CandyText>Candy</CandyText>;
};

export default Candy;
