import React from "react";
import { SaleItem } from "../components/SaleItem";
import { CandyDataTemp } from "./CandyDataTemp";
import { PageTitle } from "../components/PageTitle";

const Candy: React.FunctionComponent = () => {
  return (
  <>
  <PageTitle title="Candy" />
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
