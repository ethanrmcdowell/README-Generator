// function to generate markdown for README
function generateMarkdown(data) {
  var githublink = ("<a href='https://github.com/" + `${data.github}` + "'>Github</a>");
  return `
  
  
  # **${data.title}**

  ${data.license === "Perl" ? "## Perl \n [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)" : data.license === "MIT" ? "## MIT \n [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ? "## IBM \n [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : data.license === "Mozilla" ? "## Mozilla \n [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" : "## Apache \n [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}

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
  \n ${data.license} \n
  ## Contributing
  \n ${data.contributors} \n
  ## Tests
  \n ${data.test} \n
  ## Questions
  \n ${githublink} \n
`;
}

module.exports = generateMarkdown;
