import React from "react";
import { SaleItem, SaleItemProps } from "../components/SaleItem";
import { CandyDataTemp } from "./CandyDataTemp";
import { PageTitle } from "../components/PageTitle";

const Candy = () => {

  let saleItems: JSX.Element[] = CandyDataTemp.map((item, index) => {
    return (
      <div className="col sale-item-card">
        <SaleItem
          image={item.image}
          price={item.price}
          label={item.label}
          description={item.description}
        />
      </div>
    );
  })

  return (
    <>
      <PageTitle title="Candy" />
      <div className="container-fluid">
        <div className="row">
          {saleItems}
        </div>
      </div>
    </>
  );};

export default Candy;
