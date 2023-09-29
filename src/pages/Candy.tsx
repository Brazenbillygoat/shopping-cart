import React from "react";
import styled from "styled-components";
import { SaleItem, SaleItemProps } from "../components/SaleItem";
import { CandyDataTemp } from "./CandyDataTemp";

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
  return (
  <>
  <CandyText>Candy</CandyText>
  {CandyDataTemp.map((item, index) => {
    return (
      <SaleItem
        image={item.image}
        price={item.price}
        label={item.label}
        description={item.description}
      />
    );
  })}
  </>
)};

export default Candy;
