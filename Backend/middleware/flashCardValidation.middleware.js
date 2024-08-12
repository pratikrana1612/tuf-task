// middleware/flashcardValidation.middleware.js
const validateFlashcard = (req, res, next) => {
  const { question, answer } = req.body;

  console.log(req.body);
  if (!question || !answer) {
    return res
      .status(400)
      .json({ message: "Please provide both question and answer." });
  }

  next();
};

module.exports = { validateFlashcard };
