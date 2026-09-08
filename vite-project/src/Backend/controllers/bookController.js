let books = [
  {
    id: 1,
    title: "Alone Together",
    image: "/Images/Alone/71HJ49yivqL.jpg",
    viewLink: "https://example.com/book1"
  },
  {
    id: 2,
    title: "Alone with the Alone",
    image: "/Images/Alone/OIP3.jpg",
    viewLink: "https://example.com/book2"
  }
];


// GET all books
export const getBooks = (req, res) => {
  res.json(books);
};


// GET single book
export const getBook = (req, res) => {

  const id = parseInt(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.json(book);
};


// POST create book
export const createBook = (req, res) => {

  const { title, image, viewLink } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  const newBook = {
    id: books.length > 0
      ? books[books.length - 1].id + 1
      : 1,

    title,
    image: image || "",
    viewLink: viewLink || ""
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book created successfully",
    book: newBook
  });
};


// PUT update book
export const updateBook = (req, res) => {

  const id = parseInt(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  const { title, image, viewLink } = req.body;

  if (title !== undefined) {
    book.title = title;
  }

  if (image !== undefined) {
    book.image = image;
  }

  if (viewLink !== undefined) {
    book.viewLink = viewLink;
  }

  res.json({
    message: "Book updated successfully",
    book
  });
};


// DELETE book
export const deleteBook = (req, res) => {

  const id = parseInt(req.params.id);

  const bookIndex = books.findIndex(
    (book) => book.id === id
  );

  if (bookIndex === -1) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.json({
    message: "Book deleted successfully",
    book: deletedBook[0]
  });
};