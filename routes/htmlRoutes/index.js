const path = require("path");
const router = require("express").Router();

// server for notes HTML page
// GET /notes should return the notes.html file.
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// GET * (anything else) should return the index.html file.
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
