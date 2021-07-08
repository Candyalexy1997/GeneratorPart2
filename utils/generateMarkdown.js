// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = data.license[0];
  let licenseString = " ' "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://)`

  };
  if (licenseType === "General Public License 1.0") {
    licenseString = `![License: GPL v1.0]`
  }:
  if (licenseType === "Apache License 2.0"){
    licenseString = `![License] (https://)`
  };
  if (licenseType === "GNU General Public License 3.0"){
    licenseString = `![License: GPL vs] (https://)`

  };
  return licenseString
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  1. [Title](#title)
  2. [Instructions](#onstructions)
  3. [Credits](#credits)
  4. [Usage](#Usage)
  5. [License](#licenseC)
  6. [GitHub](#gitHub)
  7. [E-mail](#e-mail)

  ## Title
  ${data.title}

  ## Instructions
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## GitHub
  ${data.github}

  ## E-mail
  ${data.email}
}

module.exports = generateMarkdown;
