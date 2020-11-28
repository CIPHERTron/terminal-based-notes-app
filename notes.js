const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
 const notes = loadNotes();

 const duplicateNotes = notes.filter((note) => note.title === title);
 const duplicateNote = notes.find((note) => note.title === title)

 if(!duplicateNote) {
  notes.push({
   title: title,
   body: body
  });
  saveNotes(notes);
  console.log(chalk.green.inverse('New note added'));
 } else {
  console.log(chalk.red.inverse('Note title taken!'));
 }

}

const saveNotes = (notes) => {
 const dataJSON = JSON.stringify(notes);
 fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
 try {
  const dataBuffer = fs.readFileSync('notes.json');
  const dataJSON = dataBuffer.toString();
  return JSON.parse(dataJSON);
 } catch (e) {
  return [];
 }



}

const removeNote = function(title) {
 const notes = loadNotes();

 const notesToKeep = notes.filter(function(note) {
  return note.title !== title;
 });

 if(notes.length > notesToKeep.length) {
  console.log(chalk.green.inverse('Note removed'));
  saveNotes(notesToKeep);
 } else {
  console.log(chalk.red.inverse('No note found!'));
 }
}


// List notes
const listNotes = () => {
 console.log(chalk.blue.inverse('Your notes:'));
 const notes = loadNotes();
 notes.forEach((note) => {
  console.log(chalk.white.inverse(note.title))
  console.log(chalk.green.inverse(note.body))
 })
}


// Read note
 const readNote = (title) => {
  const notes = loadNotes();
  try {
   const findNote = notes.find((note) => note.title === title);
   console.log(chalk.green.inverse(findNote.body));
  } catch {
   console.log(chalk.red.inverse('No note found!'));
  }
 }

module.exports = {
 addNote: addNote,
 removeNote: removeNote,
 listNotes: listNotes,
 readNote: readNote
};