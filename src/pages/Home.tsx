import React from "react";
import styled from "styled-components";
import { SaleItem } from "../components/SaleItem";
import { CandyDataTemp } from "./CandyDataTemp";

const HomeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const Home: React.FunctionComponent = (): JSX.Element => {

  return (
  <>
  <HomeText>Home</HomeText>
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

export default Home;
