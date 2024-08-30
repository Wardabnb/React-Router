import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap m-4">
      <Link to={`/movie/${title}`}>
        <Card style={{ width: "18rem", marginBottom: "1rem" }}>
          <Card.Img variant="top" src={posterURL} className="h-5" />
          <Card.Body>
            <Card.Title className="text-danger">{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <strong>Rating:</strong> {rating}/10
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
