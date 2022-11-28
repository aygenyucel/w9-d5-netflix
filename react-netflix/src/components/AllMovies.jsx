import { Component } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class AllMovies extends Component {
  state = {
    movieData: [],
    movieNumber: "",
    movieName: "",
  };

  fetchData = async (searchQuery) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=d54c1d6b&s=${searchQuery}`
      );

      if (response.ok) {
        let data = await response.json();
        // console.log(data);
        this.setState({
          ...this.state,
          movieData: data.Search,
          movieNumber: data.Search.length,
          movieName: this.capitalizeFirstLetters(
            searchQuery.split("-").join(" ")
          ),
        });
      } else {
        console.log("error when fetching data..");
      }
    } catch (error) {
      console.log(error);
    }
  };

  capitalizeFirstLetters = (header) => {
    const wordArr = header.split(" ");
    const newArr = wordArr.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return newArr.join(" ");
  };

  componentDidMount() {
    this.fetchData(this.props.searchQuery);
  }

  render() {
    let moviesRow = [];
    let slideNumber = Math.floor(this.state.movieNumber / 6) + 1;
    const displayMoviesRow = () => {
      for (let i = 0; i < slideNumber; i++) {
        moviesRow.push(
          <Carousel.Item key={i}>
            <div className="movie-row">
              <Row>
                {this.state.movieData.slice(i * 6, (i + 1) * 6).map((movie) => {
                  return (
                    <SingleMovie poster={movie.Poster} key={movie.imdbID} />
                  );
                })}
              </Row>
            </div>
          </Carousel.Item>
        );
      }
      return moviesRow;
    };

    const displayMovieContainer = () => {
      return (
        <Container fluid>
          <h5 className="text-light mt-2 mb-2 d-flex flex-start">
            {this.state.movieName}
          </h5>
          <Carousel>{displayMoviesRow()}</Carousel>
        </Container>
      );
    };
    return <>{displayMovieContainer()}</>;
  }
}

export default AllMovies;
