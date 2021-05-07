# README Template Generator ![Node.js](https://img.shields.io/badge/License-Node.js-blue.svg)

## GitHub Repository and Application

[GitHub Link](https://github.com/JG-77/readme-template-generator.git)

[App Walkthrough Video](https://drive.google.com/file/d/1SsKpPRDeWVwYyi25Pezw_AzKoXLV_5Z5/view)

### Screenshots of the application 

![Node js generator](https://user-images.githubusercontent.com/76461629/117396063-0e285980-aeae-11eb-810d-e68d4694d7c0.png)

![Node js Prompt](https://user-images.githubusercontent.com/76461629/117396076-141e3a80-aeae-11eb-8df2-023404595f89.png)

![preview README](https://user-images.githubusercontent.com/76461629/117396090-1aacb200-aeae-11eb-8086-89ffa3febbd7.png)

![Preview README 2](https://user-images.githubusercontent.com/76461629/117396106-213b2980-aeae-11eb-9372-434cc521262e.png)

## Description 
The README-Template-Generator application allows users to easily generate a clean and organized README.md (markdown) file. Using Node.js and the Inquirer package, users can directly enter their input to answer each prompt question which will generate and format a new file for them! There is also the option to select a type of licensing that will display a license banner next to the title, and a license section in the README file will be created with the license information.

## Technologies 

## Node.js/Javascript

* Included packages needed for this application
* Created a function using fs and path to write README
* Created an array prompt of questions for user input
* Created function to initialize inquirer prompt and create README in Generated folder
* Function call to initialize app
* Function that returns a license badge based on which license is passed in, if there is no license, it returns an empty string
* Function that returns the license link, if there is no license, it returns an empty string
* Function that returns the license section of README, if there is no license, it returns an empty string
* Function to generate markdown for README
* Exported generateMarkdown function

## Contact 
Jessie Guadarrama: <jesguadarrama98@gmail.com>

## License
[Node.js License](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)

Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
