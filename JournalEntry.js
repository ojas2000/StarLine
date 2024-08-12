const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema({
  type: String,
  heading: String,
  image: String,
  content_s: String,
  content: String,
  likes: Number,
  views: Number,
  writer: String,
  date: String
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);

module.exports = JournalEntry;