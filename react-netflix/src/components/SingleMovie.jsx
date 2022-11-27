import { Col } from "react-bootstrap";

const SingleMovie = (props) => {
  return (
    <Col xs={2} key={props.imdbID}>
      <img className="movie-cover" src={props.poster} alt="fdsg" />
    </Col>
  );
};
export default SingleMovie;
