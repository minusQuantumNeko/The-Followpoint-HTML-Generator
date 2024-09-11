const fs = require("fs")
const { interviewerName, intervieweeName, interviewerID, intervieweeID, interviewerGroup, intervieweeGroup, fileName } = require("./config.json")

//Some preparations
const regex = /(\*\*\*.*?\*\*\*)/mg;
const commentsRegex = /^#.*$/mg;
const interviewText = fs.readFileSync("./interview.txt", {encoding: "utf-8"}) //Read raw interview file
const parts = interviewText.replace(commentsRegex, '').split(regex).filter(part => part.trim() !== '') //Put questions and answers in array while removing comments
let question_or_answer = 0 //0 - Question, 1 - Answer
let formattedInterviewText = ""

for (let i = 0; i < parts.length; i++) {
    if(question_or_answer == 0) {

        formattedInterviewText += `<a class="avatar news-chat-quote__avatar" href="https://osu.ppy.sh/users/${interviewerID}" style="background-image: url('/wiki/shared/news/${fileName}/avatar-${interviewerName.replace(" ", "_")}.jpg')"></a>\n\n<p class="news-chat-quote__username"><a class="news-chat-quote__colour-${interviewerGroup}" href="https://osu.ppy.sh/users/${interviewerID}">${interviewerName}</a></p>\n\n${parts[i].replace(/\*\*\*/mg, "")}\n\n`
        question_or_answer = 1

    } else if(question_or_answer == 1) {

        formattedInterviewText += `<a class="avatar news-chat-quote__avatar" href="https://osu.ppy.sh/users/${intervieweeID}" style="background-image: url('/wiki/shared/news/${fileName}/avatar-${intervieweeName.replace(" ", "_")}.jpg')"></a>\n\n<p class="news-chat-quote__username"><a class="news-chat-quote__colour-${intervieweeGroup}" href="https://osu.ppy.sh/users/${intervieweeID}">${intervieweeName}</a></p>${parts[i]}`
        question_or_answer = 0

    }
}

fs.writeFile('./formatted_interview.md', formattedInterviewText, { encoding: "utf-8" }, (err) => {

    if(err) return console.error(`Error while writing to output file: ${err}`)
    console.log(`Output file ("formatted_interview.md") updated successfully!`)

})