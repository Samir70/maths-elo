# Maths Review
The general aim for this is to have the computer ask maths questions on a variety of topics. Each question will have a rating (kind of like a chess ELO). So will the user. These ratings will change in the same way as ratings change when chess players win or lose a game of change. Generally: a strong user answering a weak question will result in hardly any change. But a weak user answering a hard question will lower the rating of the question and raise the rating of the user -- by quite a bit.

I aim to allow the user to be able to select questions (by subject or difficulty). And the computer can also select questions (to review a topic and also to challenge the user with questions they haven't seen before.) Many questions will also have links to online resources (BBC bitesize, for one). 

## So far: this is as far as I've got!
The deployed app works stand alone. It only has a few questions, the user rating changes properly but is not saved between sessions. 

I have the backend in another repo. And everything is setup with the development server by using a proxy (listed in package.json) to localhost 8080, which is where the development server listens. Next stage is to deploy the server to the web and connect to that. 

If you want to clone and use this app, then you will need to also clone the [math-elo-api](https://github.com/Samir70/maths-elo-api) and run both at the same time on your local machine.

## Tech stack
Main app: React and Redux
Backend: Node and Express
Database: sqlite3

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

