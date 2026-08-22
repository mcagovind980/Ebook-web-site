import { Link } from "react-router-dom";
import Categories1 from "../Data/Categories1";

function Categories() {
  return (
    <div className="card">
      {Categories1.map((book) => (
        <Link
          key={book.id}
          to={book.Path}
          className="book-link"
        >
          <div className="item">
            <img
              src={book.image}
              alt={book.title}
            />

            <h3>{book.title}</h3>

            <button>Open</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;