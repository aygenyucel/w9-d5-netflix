import { Carousel, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const MovieRow = (props) => {
  return (
    <Carousel.Item>
      <div className="movie-row">
        <Row>
          <SingleMovie poster={props.poster} />
        </Row>
      </div>
    </Carousel.Item>
  );
};

export default MovieRow;
