const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

// Create add command
yargs.command({
 command: 'add',
 describe: 'Add a new note!',
 builder: {
  title: {
   describe: "Note title",
   demandOption: true,
   type: 'string'
  },
  body: {
   describe: 'Note description',
   demandOption: true,
   type: 'string'
  }
 },
 handler(argv) {notes.addNote(argv.title, argv.body)}
})

// Create remove command
yargs.command({
 command: 'remove',
 describe: 'Remove a new note!',
 builder: {
  title: {
   describe: "Note title",
   demandOption: true,
   type: 'string'
  }
 },
 handler(argv) {notes.removeNote(argv.title)}
})

// Create list command
yargs.command({
 command: 'list',
 describe: 'To list note items!',
 handler() {notes.listNotes()}
})

// Create read command
yargs.command({
 command: 'read',
 describe: 'Read a note!',
 builder: {
  title: {
   describe: "Note title",
   demandOption: true,
   type: 'string'
  }
 },
 handler: () => { notes.readNote(argv.title) }
})

// console.log(yargs.argv);
yargs.parse();