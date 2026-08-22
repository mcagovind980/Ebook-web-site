import books from "../Data/Baiography1";


function Home() {
  return (
    <main className="home">
      <div className="card">
        {books.map((book) => (
          <div className="item" key={book.id}>
            <img src={book.Image} alt={book.title} />

            <h3>{book.title}</h3>

            <a
              href={book.Link}
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