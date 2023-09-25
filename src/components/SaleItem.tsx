import React from "react";

export type SaleItemProps = {
  // When referencing this url you may have to declare `new`
  // Ex: var picture = new SaleItemProps.image
  image: string | undefined;
  price: number | string;
  label: string;
  description: string;
}

export const SaleItem = ({image, price, label, description}: SaleItemProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt="Card image cap" style={{ width: "inherit" }} />
      <div className="card-body">
        <h5 className="card-title">{label}</h5>
        <p className="card-text">
          {description}
        </p>
        <a href={image} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}