const { Router } = require("express");
const {
  validateFlashcard,
} = require("../middleware/flashCardValidation.middleware"); // Assume you have validation middleware for flashcards
const {
  getFlashcards,
  getFlashcard,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} = require("../controller/flashCard.controller");

const router = Router();

// GET /api/flashcards - Get all flashcards
router.get("/", getFlashcards);

// POST /api/flashcards - Create a new flashcard
// This route accepts a POST request to create a new flashcard
// It expects a JSON body with properties `question` and `answer`
router.post("/", validateFlashcard, createFlashcard);

// Routes for fetching, updating, and deleting a flashcard by flashcardId
// All these routes are routed to the respective handler functions
// The handler functions are defined in the flashcard.controller.js file
router
  .route("/:flashcardId")
  .get(getFlashcard)
  .put(validateFlashcard, updateFlashcard) // PUT request to update a flashcard
  .delete(deleteFlashcard); // DELETE request to delete a flashcard

module.exports = router;
