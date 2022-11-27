import { Component } from "react";
import {
  Button,
  ButtonGroup,
  Carousel,
  Col,
  Container,
  Dropdown,
  Row,
} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import FooterMain from "./FooterMain";
import NavbarMain from "./NavbarMain";
class Home extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <NavbarMain />
          <Container fluid>
            <div className="genre-details">
              <div className="d-flex">
                <h3 className="text-light">TV Shows</h3>
                <Dropdown className="show">
                  <DropdownToggle
                    className=" genre-button"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Genres
                  </DropdownToggle>
                </Dropdown>
              </div>
              <div>
                <ButtonGroup
                  className="me-2"
                  role="group"
                  aria-label="First group"
                >
                  <Button type="button" className="btn-outline-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-text-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </Button>
                  <Button type="button" className="btn-outline-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-grid"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </Container>
          <Container fluid>
            <div className="movie-gallery mt-4">
              <h5 className="text-light mt-2 mb-2 d-flex flex-start">
                Watch It Again
              </h5>
              <Carousel>
                <Carousel.Item>
                  <div className="movie-row">
                    <Row>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media6.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media7.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media8.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media9.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media10.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media11.jpg"
                          alt=""
                        />
                      </Col>
                    </Row>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="movie-row">
                    <Row>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media6.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media7.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media8.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media9.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media10.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media11.jpg"
                          alt=""
                        />
                      </Col>
                    </Row>
                  </div>
                </Carousel.Item>

                {/* <Button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#watch-it-again"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </Button>
              <Button
                className="carousel-control-next"
                type="button"
                data-bs-target="#watch-it-again"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </Button> */}
              </Carousel>
            </div>
            <div className="movie-gallery mt-4">
              <h5 className="text-light mt-2 mb-2 d-flex flex-start">
                Watch It Again
              </h5>
              <Carousel>
                <Carousel.Item>
                  <div className="movie-row">
                    <Row>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media6.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media7.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media8.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media9.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media10.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media11.jpg"
                          alt=""
                        />
                      </Col>
                    </Row>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="movie-row">
                    <Row>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media6.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media7.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media8.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media9.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media10.jpg"
                          alt=""
                        />
                      </Col>
                      <Col xs={2}>
                        <img
                          className="movie-cover"
                          src="assets/media/media11.jpg"
                          alt=""
                        />
                      </Col>
                    </Row>
                  </div>
                </Carousel.Item>

                {/* <Button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#watch-it-again"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </Button>
              <Button
                className="carousel-control-next"
                type="button"
                data-bs-target="#watch-it-again"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </Button> */}
              </Carousel>
            </div>
          </Container>

          <Container>
            <FooterMain />
          </Container>
        </Container>
      </>
    );
  }
}
export default Home;
