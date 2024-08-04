// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (license && license !== "None") {
    const licenseSlug = license.toLowerCase().replace(/\s+/g, '_');
    return `![GitHub license](https://img.shields.io/badge/license-${licenseSlug}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is using the ${license} license
    `;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ## Description
   ${data.projectDescription}

   ## Table of Contents
   ${data.projectTableOfContents}
   
   ## Installation
    ${data.projectInstallation}
   
   ## Usage
   ${data.projectUsage}
   
   ## Credits
   ${data.projectCredits}

  
  ${renderLicenseSection(data.projectLicense)} 
  ${renderLicenseBadge(data.projectLicense)}
  ${renderLicenseLink(data.projectLicense)}
`;
}

module.exports = generateMarkdown;
