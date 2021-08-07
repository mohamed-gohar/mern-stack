import React, { useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let timeOutId = null;
  const onBlurHander = () => {
    timeOutId = setTimeout(() => {
      setIsOpen(false);
    });
  };

  const onFocusHander = () => {
    clearTimeout(timeOutId);
  };

  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      onFocus={onFocusHander}
      onBlur={onBlurHander}
      tabIndex="-1"
    >
      <Container>
        <NavbarBrand href="/">Mern</NavbarBrand>
        <NavbarToggler onClick={toggle}></NavbarToggler>
        <Collapse navbar isOpen={isOpen}>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="https://www.google.com" target="_blank">
                google
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.google.com">google</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.google.com">google</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
