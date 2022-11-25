import { ButtonGroup, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import netflixLogo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import "./NavbarMain.css";

const { Component } = require("react");

class NavbarMain extends Component {
  render() {
    return (
      <Navbar className="navbar-expand-lg navbar-dark">
        <Container fluid>
          <Navbar.Brand href="http://ubeytdemir.me/netflix-ui">
            <img src={netflixLogo} alt="netflix logo" id="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse className="collapse" id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
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
            <Nav>
              <Nav.Item>
                <Nav.Link className="active" aria-current="page" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search icon"
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
                    class="bi bi-bell-fill icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Dropdown>
                  <Dropdown.Toggle
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={avatar} id="avatar" alt="avatar" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="http://ubeytdemir.me/netflix-ui/profile.html">
                      <div className="d-flex align-items-center">
                        <img src={avatar} id="avatar-small" alt="avatar" />
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
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item href="#">Signout Netflix</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarMain;
