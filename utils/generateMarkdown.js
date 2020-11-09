// function to generate markdown for README
function generateMarkdown(data) {
  var githublink = ("<a href='https://github.com/" + `${data.github}` + "'>Github</a>");
  return `
  
  
  # ${data.title}
  # a project by ${data.contributors}
  # ${githublink}






`;
}

module.exports = generateMarkdown;
