# The Followpoint's HTML Generator

Generates an interview with HTML code included after you paste raw one in `interview.txt` file.

# Config

Before running the program, there are multiple variables you need to set in `config.json`:

1. `interviewerName` and `intervieweeName`, which are used for interviewer and interviwee avatars and to display their nicknames.
2. `interviewerID` and `intervieweeID`, which are used for links to their profiles.
3.  `interviewerGroup` and `intervieweeGroup`, which are used to set their nickname colors as their group color.
4. `fileName`, which is your newspost file name (PLEASE don't include `.md` in here).
<br>Example: "`2024-09-16-the-followpoint-xootynator-the-ceo-of-full-area`".

# Usage

0. If you don't have node.js installed yet, make sure to do so!
1. Setup config (see: [Config](#config)).
2. Paste questions and answers to `interview.txt` file and **make sure to surround questions with triple asterisks** (\*\*\*). You may find an example in the file itself.
3. Run `npm start` in console (make sure you are in the same directory as `index.js` file).
4. Enjoy your formatted interview in `formatted_interview.md` :D