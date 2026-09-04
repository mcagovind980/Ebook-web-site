import { useRef } from "react";
import books from "../Data/AboutMind1";
import "../css/Home1.css";

function Pages() {
  const cardRef = useRef(null);

  const scrollLeft = () => {
    cardRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
<div className="pages">
<div className="container">

      <button className="scroll-btn left-btn" onClick={scrollLeft}>
        ❮
      </button>

      <div className="card" ref={cardRef}>
        {books.map((book) => (
          <div className="title" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <a href={book.viewLink}>View Pages</a>
          </div>
        ))}
      </div>

      <button className="scroll-btn right-btn" onClick={scrollRight}>
        ❯
      </button>

    </div>
    </div>
  );
}

export default Pages;