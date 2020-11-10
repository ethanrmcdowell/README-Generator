// function to generate markdown for README
function generateMarkdown(data) {
  var githublink = ("<a href='https://github.com/" + `${data.github}` + "'>Github</a>");
  return `
  
  
  # **${data.title}**

  ${data.license === "MIT License" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "Apache License v2.0" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : data.license === "GNU General Public License v3.0" ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" : ""}

  ## ${data.description}

  ## TABLE OF CONTENTS
  
  - [Installation](#Installation) \n
  - [Usage](#Usage) \n
  - [License](#License) \n
  - [Contributing](#Contributing) \n
  - [Tests](#Tests) \n
  - [Questions](#Questions) \n
  
  ## Installation
  \n ${data.install} \n
  ## Usage
  \n ${data.usage} \n
  ## License
  \n Copyright ${data.year} ${data.name}
  \n Licensed under ${data.license} \n
  ## Contributing
  \n ${data.contributors} \n
  ## Tests
  \n ${data.test} \n
  ## Questions
  \n ${githublink} \n ${data.email}

`;
}

module.exports = generateMarkdown;