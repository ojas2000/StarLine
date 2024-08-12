const express = require('express');
const path = require('path');

const app = express();
const uri = "mongodb+srv://loppoma:RnOj%401918@starline.tyqa7.mongodb.net/yourdatabase?retryWrites=true&w=majority";
const mongoose = require('mongoose');
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const JournalEntry = require('./JournalEntry');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'dynamic'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/entries', async (req, res) => {
  try {
    const entries = await JournalEntry.find(); 
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entries', error });
  }
});

app.get('/entries/type/:type', async (req, res) => {
  const type = req.params.type;

  try {
    const entries = await JournalEntry.find({ type });
    res.json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/entries/heading/:heading', async (req, res) => {
  const heading = req.params.heading;

  try {
    const entry = await JournalEntry.findOne({ heading });
    if (entry) {
      res.json(entry);
    } else {
      res.status(404).send('Entry not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/entries/latest', async (req, res) => {
  try {
    const latestEntries = await JournalEntry.find()
      .sort({ date: -1 }) 
      .limit(3); 
    res.json(latestEntries);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/', (req, res) => {
  res.render('index', { dynamicData: 'Hello, World!' });
});

app.get('/starline-journal/:page', (req, res) => {
  const page = req.params.page;

  res.render(page, { });
});

app.get('/journal/:topic', (req, res) => {
  const topic = req.params.topic;
  res.render('page', { page_info: topic });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

