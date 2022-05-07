# Edbee-Technologies


An API that says whether the entered number is a valid IMEI number or not

## Table of Contents
* Generalinfo
* Technology
* Setup
* Functionality
* status

## Introduction
    
  The Application helps to find a valid IMEI Number. Express is used with Node.js due to its fast, 
  unopinionated, minimalist web framework. MongoDB used to store data of users and the movies due to its avaliability of large
  range of Schema and ease to use. 
    
## Technology
    1. Node.js
    2. Express
    3. MongoDB
    4. Mongoose

## Setup
   Make sure that Node.js, Mongodb, robo3T, VS Code(any text editor) and Postman are installed in your local system. 
   Open the terminal and type the following commands
   * npm install --save-dev nodemon
   * npm install
   * To run the project type **npm start** in the terminal

## Functionality

   ## Valid IMEI Number or not 
        Send an 15 digit IMEI number in the body against key 'imei' as a "POST" request to /.
        Don't Enter less than or more than 15 digits, in these cases you will be thrown invalid
        IMEI code. The below picture gives a clear idea of what the statements means
![Screenshot (337)](https://user-images.githubusercontent.com/76957372/167254034-65b5116b-b82c-475a-ab65-ff0f900c3c82.png)


## Status
    This project is completely developed and has all required functionality. 
