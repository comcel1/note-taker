const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function deleteNote(id, notesArray) {
  const newNotes = notesArray.filter((note) => note.id !== id);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: newNotes }, null, 2)
  );
  return newNotes;
}

module.exports = { createNewNote, deleteNote };
