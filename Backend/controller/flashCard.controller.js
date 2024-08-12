const Flashcard = require("../models/flashCard.model");

// Get all flashcards
const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.findAll();
    res.status(200).json(flashcards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single flashcard by ID
const getFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByPk(+req.params.flashcardId);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }
    res.status(200).json(flashcard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new flashcard
const createFlashcard = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const newFlashcard = await Flashcard.create({ question, answer });
    res.status(201).json(newFlashcard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a flashcard
const updateFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByPk(req.params.flashcardId);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    await flashcard.update(req.body);
    res.status(200).json({
      message: "Flashcard updated",
      flashcard,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a flashcard
const deleteFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findByPk(req.params.flashcardId);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    await flashcard.destroy();
    res.status(200).json({ message: "Flashcard deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getFlashcards,
  getFlashcard,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
