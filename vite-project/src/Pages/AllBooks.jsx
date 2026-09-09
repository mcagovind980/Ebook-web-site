import { useState } from "react";

import books from "../Data/Allbooks1";
import BookSearch from "../Component/BookSearch";

function AllBooks() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  // Search function
  const handleSearch = (searchText) => {
    const text = searchText.trim().toLowerCase();

    // Agar search empty hai
    if (text === "") {
      setFilteredBooks(books);
      return;
    }

    // Book filter
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(text)
    );

    setFilteredBooks(result);
  };

  // Show all books
  const showAllBooks = () => {
    setFilteredBooks(books);
  };

  return (
    <div className="all-books">

      {/* Page Heading */}
      <h1>All Books</h1>

      {/* Search */}
      <BookSearch onSearch={handleSearch} />

      {/* Books */}
      {filteredBooks.length > 0 ? (

        <div className="books-container">

          {filteredBooks.map((book) => (

            <div className="book-card" key={book.id}>

              <img
                src={book.image}
                alt={book.title}
              />

              <h3>
                {book.title}
              </h3>

              <button
                type="button"
                onClick={() => {
                  window.location.href = book.viewLink;
                }}
              >
                Open
              </button>

            </div>

          ))}

        </div>

      ) : (

        /* Not Found */
        <div className="not-found">

          <div className="not-found-icon">
            📚
          </div>

          <h2>
            Book Not Found
          </h2>

          <p>
            Sorry, aapki search se koi book match nahi hui.
          </p>

          <button
            type="button"
            onClick={showAllBooks}
          >
            Show All Books
          </button>

        </div>

      )}

    </div>
  );
}

export default AllBooks;