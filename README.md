# terminal-based-notes-app
A notes app made using Node.js in which you can add, delete or view notes through your terminal with interactive colours in  your terminal.

# Usage:

1. clone the repository using `git clone`
2. run `npm install` in your terminal
3. To add a note: `node app.js add --title="[note title]" --body="[note body]"`
4. To remove a note: `node app.js  --title="[title of the node you want to delete]"`
5. To list all the notes: `node app.js list`
6. To read a note: `node app.js read --title="[title of the note you want to read]"`

# Color format:
### If you want to change the color of the note body or the note title, refer the npm package `chalk`. It's cool
