import books from "../Data/Alone1";

function Home() {
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