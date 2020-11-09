// function to generate markdown for README
function generateMarkdown(data) {
  var githublink = ("<a href='https://github.com/" + `${data.github}` + "'>Github</a>");
  return `
  
  
  # **${data.title}**

  ## ${data.description}

  ## TABLE OF CONTENTS
  <a href="#Installation">Installation</a>
  <a href="#Usage">Usage</a>
  <a href="#License">License</a>
  <a href="#Contributing">Contributing</a>
  <a href="#Tests">Tests</a>
  <a href="#Questions">Questions</a>
  
  ##Installation
  ${data.install}
  ${`<br>`}
  ##Usage
  ${data.usage}
  ${`<br>`}
  ##License
  ${data.license}
  ${`<br>`}
  ##Contributing
  ${data.contributors}
  ${`<br>`}
  ##Tests
  ${data.test}
  ${`<br>`}
  ##Questions
  ${githublink}
  ${`<br>`}







`;
}

module.exports = generateMarkdown;
