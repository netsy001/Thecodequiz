# Thecodequiz

# Thepasswordgenerator
[Introduction](#Introduction)


[Prerequisites](#Prerequisites)

[Installation](#Installation)

[Summary](#Summary)

[Psuedo code](#Psuedo-code)

[Author](#Author)


## Introduction

Thecodequiz: AS part of the program this assignment is to use a Javascript to write a quiz program with the following conditions.
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## Prerequisites
To program and write code you need a text editor. Visual Studio Code is the best option.

This assignment project has been delpoyed to Githubpages. To use this project, project link [Link to Github](https://netsy001.github.io/Thecodequiz/.)

## Installation

To install the code you can clone it at github repository using github guidelines.

## Summary

This project includes four files:- 

`index.html` 

`script.js`

`style.css`

`README.md`

This four files include the all the code and information of this assignment project.

## Psuedo code

1. The user can choose there own questions to start with the quiz. You can add questions both static or dynamic way with own choice. i.e you can write questions in HTML and use input type to run with Java script or if you got more questions you can variable and use array strings and define functions. Here i chose HTML method to make it clear and as convinent.
2. Using script tags linked HTML to Java script with `script.js` 
3. variables are used to store values in the java scirpt. In the script we used both global variables and local variables. 
4. Event lister is  used to start the quiz on clicking the button.
5. parameters inside function to get correct and wrond answers.

6. Java script has been writen as how the quiz has to be function from start to end.
    1. All the questions should be hidden during the start of the quiz. Displaying home page with quiz information and start button. So, we used variableto store values by calling ID and using if conditions to hide questions.
    2. On clicking start button we need display the timer and get questions one by one on answer displaying wromg or correct answer. So, we defined functions to get timer and if conditions as per reqirement to reduce timer by 10 seconds for wrong answers.
    3. We defined functions with switch statement as per 5 questions to break after each question and switch to next question after answering.
    4. Finally displayed score using conditions to eneter full name.

Media Queries :
max-width: 500px
Adjusts body and container width
max-width: 690px


Execution: Open in browser

## Author
Surendra Choudary Nettam















