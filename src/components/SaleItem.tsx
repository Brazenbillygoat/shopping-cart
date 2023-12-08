import React from "react";

export type SaleItemProps = {
  image: string | undefined;
  price: number | string;
  label: string;
  description: string;
}

export const SaleItem = ({image, price, label, description}: SaleItemProps) => {
  return (
    <div className="card sale-item-card-content">
      <img
        src={image}
        className="sale-item-image card-img-top"
        alt={description}
      />
      <div className="card-body">
        <h5 className="card-title">{label}</h5>
        <p className="card-text">{description}</p>
      </div>
      <p>${price}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
}
