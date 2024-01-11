const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/quizizzDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

// Use middleware for JSON parsing
app.use(express.json());

// Define routes
app.use('/quizzes', require('./routes/quizzes'));
app.use('/questions', require('./routes/questions'));
// Add more routes for users, authentication, etc.

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

// Get all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // Add more fields for description, questions, etc.
});

module.exports = mongoose.model('Quiz', quizSchema);

window.onload = async () => {
    const quizList = document.getElementById('quizList');
    try {
      const response = await fetch('/quizzes');
      const quizzes = await response.json();
      quizzes.forEach(quiz => {
        const li = document.createElement('li');
        li.textContent = quiz.title;
        quizList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };
  