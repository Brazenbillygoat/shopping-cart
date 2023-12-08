import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBackdrop"
        aria-controls="offcanvasWithBackdrop"
      >
        Enable backdrop
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
            Offcanvas with backdrop
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <FaArrowLeftLong />
          </button>
        </div>
        <div className="offcanvas-body">
          <p>I'm the offCanvas body</p>
        </div>
      </div>
      {/* <button className="menu-button sidebar-open-button" variant="primary" onClick={handleShow}>
        Menu&nbsp;<FaArrowRightLong />
      </button>

      <Offcanvas className="sidebar" show={show} onHide={handleClose}>
        <Offcanvas.Header className="sidebar-header">
          <h1 className="sidebar-title">Categories:</h1>
          <Button className="sidebar-close-button" onClick={handleClose}>
            <FaArrowLeftLong />
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
      </Offcanvas> */}
    </>
  );
};

export default Sidebar;
