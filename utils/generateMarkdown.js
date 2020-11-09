// function to generate markdown for README
function generateMarkdown(data) {
  var githublink = ("<a href='https://github.com/" + `${data.github}` + "'>Github</a>");
  return `
  
  
  # **${data.title}**

  ## ${data.description}

  ## TABLE OF CONTENTS
  <a href="#Installation">Installation</a> <br>
  <a href="#Usage">Usage</a> <br>
  <a href="#License">License</a> <br>
  <a href="#Contributing">Contributing</a> <br>
  <a href="#Tests">Tests</a> <br>
  <a href="#Questions">Questions</a> <br>
  
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
