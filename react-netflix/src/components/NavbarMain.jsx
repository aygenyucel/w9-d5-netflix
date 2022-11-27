import { Dropdown, Nav, Navbar } from "react-bootstrap";

const { Component } = require("react");

class NavbarMain extends Component {
  render() {
    return (
      <Navbar expand="lg" className=" navbar-dark">
        <Navbar.Brand href="http://ubeytdemir.me/netflix-ui">
          <img src="assets/netflix_logo.png" alt="netflix logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse
          className=" align-items-start flex-lg-row justify-content-lg-between align-items-lg-center"
          id="navbarSupportedContent"
        >
          <Nav className="me-auto mb-lg-0 d-lg-flex align-items-lg-center">
            <Nav.Item>
              <Nav.Link href="http://ubeytdemir.me/netflix-ui">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Tv Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="d-flex align-items-lg-center">
            <Nav.Item>
              <Nav.Link className="active" aria-current="page" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">KIDS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  // className="custom-dropdown-toggle"
                >
                  <img src="assets/avatar.png" id="avatar" alt="avatar" />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" id="dropdown-menu-id">
                  <Dropdown.Item href="http://ubeytdemir.me/netflix-ui/profile.html">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/avatar.png"
                        id="avatar-small"
                        alt="avatar"
                      />
                      Ubeyt
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="http://ubeytdemir.me/netflix-ui/profile.html">
                    Manage Profiles
                  </Dropdown.Item>
                  <Dropdown.Item href="http://ubeytdemir.me/netflix-ui/accounts.html">
                    Account
                  </Dropdown.Item>
                  <Dropdown.Item href="#">Help Center</Dropdown.Item>
                  <hr />
                  <Dropdown.Item href="#">Signout Netflix</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMain;
