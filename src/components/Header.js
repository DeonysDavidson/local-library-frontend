import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Header = ({ control }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">The Local Library</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {/* <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Books
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => control("allBooks")}>
                All Books
              </DropdownItem>
              <DropdownItem onClick={() => control("createBook")}>
                Create New Book
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Authors
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => control("allAuthors")}>
                All Authors
              </DropdownItem>
              <DropdownItem onClick={() => control("createAuthor")}>
                Create New Author
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Genre
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => control("allGenre")}>
                All Genres
              </DropdownItem>
              <DropdownItem onClick={() => control("createGenre")}>
                Create New Genre
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Book Copies
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => control("allInstances")}>
                All Copies
              </DropdownItem>
              <DropdownItem onClick={() => control("createInstance")}>
                Create New Copy
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;
