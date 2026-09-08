import books from "../Data/Alone1";
import { useState, useEffect } from "react";
function Home() {

    const [books, setBooks] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

  }, []);
  return (
    <main className="home">
      <div className="card">
        {books.map((book) => (
          <div className="item" key={book.id}>
            <img src={book.image} alt={book.title} />

            <h3>{book.title}</h3>

            <a
              href={book.viewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;