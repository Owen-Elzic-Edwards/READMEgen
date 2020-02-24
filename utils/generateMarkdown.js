

function generateMarkdown(data, userData) {
  return `
# ${data.title}
[](https://img.shields.io/github/last-commit/${data.username}/${data.title})

## Description

${data.description}

## Table of Contents

[Installation](#Installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[FAQ](#questions-and-answers)

## Installation


## Usage


## License

${data.license}

## Contributing


## Tests


## Questions and Answers

### Who wrote this?

${userData.realName}
![](${userData.avatar})
${userData.email}


`;
}

module.exports = {generateMarkdown: generateMarkdown};
