import React from "react";
import { SaleItem } from "../components/SaleItem";
import { CandyDataTemp } from "./CandyDataTemp";
import { PageTitle } from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Candy = () => {
  return (
    <>
      <PageTitle title="Candy" />
      <Container>
        <Row style={{ display: "flex" }}>
          {CandyDataTemp.map((item, index) => {
            return (
              <Col sm>
                <SaleItem
                  image={item.image}
                  price={item.price}
                  label={item.label}
                  description={item.description}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );};

export default Candy;
