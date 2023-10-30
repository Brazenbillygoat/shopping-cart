import React from "react";
import { Button, Card } from "react-bootstrap";

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
    <Card className="sale-item-card">
      <Card.Img className="sale-item-image" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">${price}</Button>
      </Card.Body>
    </Card>
  );
}
