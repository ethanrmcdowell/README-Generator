// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  # ${data.title}
  # a project by ${data.contributors}
  # <a href="https://github.com/" + ${data.github}>Github</a>






`;
}

module.exports = generateMarkdown;
