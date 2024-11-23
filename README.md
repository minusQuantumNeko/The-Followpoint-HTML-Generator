# The Followpoint's HTML Generator

Generates an interview with HTML code included after you paste raw one in `interview.md` file.

# Config

Before running the program, there are multiple variables you need to set in `config.json`:

1. `interviewerName` and `intervieweeName`, which are used for interviewer and interviwee avatars and to display their nicknames.
2. `interviewerID` and `intervieweeID`, which are used for links to their profiles.
3.  `interviewerGroup` and `intervieweeGroup`, which are used to set their nickname colors as their group color.
4. `interviewerAvatarVersion` and `intervieweeAvatarVersion`, which are used to let osu! know which pfp from wiki to use.
<br>If `/wiki/shared/avatars/` does not contain either of the avatars or their avatar didn't change since first addition - please keep their value at default (`1`), if it's a new pfp - make it `2` and so on.
<br>**Note**: If last avatar that was used has a number at the end (eg. MegaMix-3.jpg) and the avatar of the player didn't change since then - use the number of the last avatar.

# Usage

0. If you don't have node.js installed yet, make sure to do so!
1. Setup config (see: [Config](#config)).
2. Paste questions and answers to `interview.md` file and **make sure to surround questions with triple asterisks** (\*\*\*). You may find an example in the file itself.
3. Run `npm start` in console (make sure you are in the same directory as `index.js` file). You can open PowerShell console by doing `Shift + Right Click` while inside script's folder and clicking "Open PowerShell window here".
<br>Alternatively you can just run `run.bat` file included in this repository (**if you use Windows**).
4. Enjoy your formatted interview in `formatted_interview.md` :D