const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  birth_year: Number,
});

const UserSchema = new mongoose.Schema({
  index: Number,
  name: String,
  isActive: Boolean,
  registered: Date,
  age: Number,
  gender: String,
  eyeColor: String,
  favoriteFruit: String,
  company: {
    title: String,
    email: String,
    phone: String,
    location: {
      country: String,
      address: String,
    },
  },
  tags: [String],
});

const BookSchema = new mongoose.Schema({
  title: String,
  author_id: mongoose.Schema.Types.ObjectId,
  genre: String,
});

const author = mongoose.model("Author", AuthorSchema);
const users = mongoose.model("User", UserSchema);
const books = mongoose.model("Book", BookSchema);

module.exports = { author, users, books };
