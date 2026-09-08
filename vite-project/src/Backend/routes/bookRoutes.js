import express from "express";

import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/bookController.js";

const router = express.Router();


// GET all
router.get("/", getBooks);

// GET one
router.get("/:id", getBook);

// POST
router.post("/", createBook);

// PUT
router.put("/:id", updateBook);

// DELETE
router.delete("/:id", deleteBook);


export default router;