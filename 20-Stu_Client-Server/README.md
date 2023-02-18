# 🏗️  Start the Client and Back-End Servers Simultaneously

Work with a partner to implement the following user story:

* As a developer, I want to be able to start the client and back-end servers simultaneously so that I can test the full application, not just the client.

## Acceptance Criteria

* It is done when I have moved the existing code into a new `client` folder.

* It is done when I have created a simple Express server in the `server` folder.

* It is done when I have added a single static HTML route that serves the contents of the `client/dist/index.html` file.

* It is done when I have installed the `concurrently` npm package at the root of the project.

* It is done when I have configured the npm scripts in the root `package.json` to run both servers using `concurrently`.

* It is done when I am able to start the client and the backend server concurrently by running `npm start`.

---

## 💡 Hints

* `concurrently` can also be configured to shorten npm commands. How can we include this in our solution?

* Remember to close any other servers that you may have running to free up the needed ports.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is a proxy server?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
