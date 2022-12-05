# pwa-text-editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 **Visit the [Deployed Site here.]()**

  **Deployment Date:**  12/04/22 <br>
 
  **Technologies used:** Node.js, JavaScript, WebPack<br>

  **Project goal:** Add to existing code to create a text editor that runs in the browser and meets PWA criteria. <br>


  ## Table of Contents
  1. [Project Description](#Description)
  2. [Installation]](#Installation)
  3. [Challenges Encounted](#Challenges)
  4. [Future Development](#Future-Development)
  5. [Tests](#Tests)
  6. [License](#License)
  <br>
  
  ## Description
   The goal of this project was to add pertinent code to an existing text editor to make it a PWA. The text editor was already functional, but needed to be updated to meet PWA criteria. The provided criteria included:

## Acceptance Criteria

```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Installation
run ```npm i``` to install dependencies
To deploy the application locally run ```npm start``` in the terminal. This will open the application in the browser at localhost:3000.

## Deployed Screenshots
![landing-page](./public/assets/portfolio-landing.png)
_<p align="center">Landing Page</p>_
</br>

## Challenges
With the heavy lifting already completed for this project, the biggest challenge was ensuring proper configuration of the service worker and manifest files. My first deployment returned several errors, and I had to fix some syntax in the webpack.config.js file. There was an issue with the format of my store put object that was keeping IndexedDB data from being stored under proper keys. 


## Future Development

No future plans for development at this time.

## Tests

  No tests were written for this program.

## License

  Click the badge to learn more about the license used for this project.
  <br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Questions?

  Find me on GitHub at: https://github.com/sarahthoorens

  You can also send any questions about this project to: s.thoorens@gmail.com

