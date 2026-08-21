import { Link } from "react-router-dom";
// import Home1 from "../Data/Home1"
function BookCard({ book }) {
  return (
    <Link to={book.path} className="book-link">

      <div className="item">

        <img
          src={book.image}
          alt={book.title}
        />

        <h3>{book.title}</h3>

        <button>
          Open
        </button>

      </div>

    </Link>
  );
}

export default BookCard;