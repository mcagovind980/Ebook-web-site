import books from "../Data/Home1";
import BookCard from "../Pages/Categories";

function Home() {
  return (
    <main className="home">

      <h1>My Books</h1>

      <div className="card">

        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>

    </main>
  );
}

export default Home;