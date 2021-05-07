// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache License 2.0') {
    return '![Apache License 2.0](https://img.shields.io/badge/License-Apache_License_2.0-blue.svg)';
  } else if (license === 'GNU General Public License (GPL)') {
    return '![GNU General Public License (GPL)](https://img.shields.io/badge/License-GNU_General_Public_License_(GPL)-green.svg)';
  } else if (license === 'GNU Library or "Lesser" General Public License (LGPL)') {
    return '![GNU Library or "Lesser" General Public License (LGPL)](https://img.shields.io/badge/License-GNU_LGPL-red.svg)';
  } else if (license === 'GNU AGPLv3') {
    return '![GNU Affero General Public License v3.0](https://img.shields.io/badge/License-GNU_AGPLv3-yellow.svg)';
  } else if (license === 'MIT license') {
    return '![MIT License](https://img.shields.io/badge/License-MIT-orange.svg)';
  } else if (license === 'Boost Software License 1.0') {
    return '![Boost Software License 1.0](https://img.shields.io/badge/License-Boost_Software_License_1.0-blueviolet.svg)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-brightgreen.svg)';
  } else if (license === 'The Unlicense') {
    return '![The Unlicense](https://img.shields.io/badge/License-The_Unlicense-lightgrey.svg)';
  } else if (license === 'None') {
    return '';
  } 
}

// Function that returns the license link
//If there is no license, returns an empty string
function renderLicenseLink(license) {
   if(license === 'Apache License 2.0') {
    return '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (license === 'GNU General Public License (GPL)') {
    return '[GNU General Public License (GPL)](https://choosealicense.com/licenses/gpl-3.0/)';
  } else if (license === 'GNU Library or "Lesser" General Public License (LGPL)') {
    return '[GNU Library or "Lesser" General Public License (LGPL)](https://choosealicense.com/licenses/lgpl-3.0/)';
  } else if (license === 'GNU AGPLv3') {
    return '[GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)';
  } else if (license === 'MIT license') {
    return '[MIT License](https://choosealicense.com/licenses/mit/)';
  } else if (license === 'Boost Software License 1.0') {
    return '[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
  } else if (license === 'The Unlicense') {
    return '[The Unlicense](https://choosealicense.com/licenses/unlicense/)';
  } else if (license === 'None') {
    return '';
  } 
}

// Function that returns the license section of README
// If there is no license, returns an empty string

 function renderLicenseSection(license) {
   if(license === 'None') {
    return '';
   }else {
    return `## License
  ---
  This application is covered by the following license: *${license}*. To read the full documentation and legal limitations of this license please click the folowing link below.
    `;
   }
 }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ---

  ${data.description}

  ## Table of Contents
  ---

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)


  ## Installation
  ---

  ${data.installation}

  ## Usage
  ---

  ${data.usage}

  ## Contribution
 ---

  ${data.contribution}

  ## Test
---

  ${data.test}

  ${renderLicenseSection(data.license)} 
   
  ${renderLicenseLink(data.license)} 

  ## Questions

  ### For any Questions or concerns please reach out through the following contact info:
  ---

  - GitHub Profile: https://github.com/${data.github}
  
  - Email: <${data.email}>
`; 
} 

module.exports = generateMarkdown;