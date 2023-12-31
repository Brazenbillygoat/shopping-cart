import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setTimeout(() => setShow(false), 50);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="sidebar-open-button"
        
        onClick={handleShow}
      >
        <TiThMenu size={"2rem"} />
      </Button>

      <Offcanvas
        className="sidebar"
        show={show}
        onHide={handleClose}
        onBlur={handleClose}
      >
        <Offcanvas.Header className="sidebar-header">
          <h1 className="sidebar-title">Categories:</h1>
          <Button className="sidebar-close-button" onClick={handleClose}>
            <FaArrowLeftLong
              style={{ marginBottom: "-.1rem", marginRight: ".1rem" }}
            />
            Close
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sidebar-links-container">
            {SidebarData.map((item, index) => {
              return (
                <Link
                  className="nav-link sidebar-link"
                  to={item.path}
                  key={index}
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
