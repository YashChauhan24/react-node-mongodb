import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faTrashCan);

const Book = ({ _id, title, author, category, price, rating, handleClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row book-div">
        <div className=" col ">
          <div className="card border-secondary bg-light ">
            <h5 className="card-header">Title: {title} </h5>
            <div className="card-body">
              <h6 className="card-text">Author: {author}</h6>
              <p className="card-text">Category: {category}</p>
              <p className="card-text">Price: {price}</p>
              <span className="card-text">
                Rating: {rating} <FontAwesomeIcon icon={faStar} />
              </span>
              &emsp; &emsp; &emsp; &emsp;
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => handleClick(_id)}
              />
              &emsp;
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => navigate("/edit-book/" + _id)}
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Book;
