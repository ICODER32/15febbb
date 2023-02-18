# 📖 Add WebPack Development Server to a Project Using Hot Module Replacement (HMR)

Work with a partner to implement the following user story:

- As a developer, I want to add a `webpack-dev-server` to my project so that I can use Hot Module Replacement (HMR) to update the page without a full page refresh.

- As a developer, I want to learn how to configure `webpack-dev-server` so that it can test my project in a way that allows my work to continue without much downtime.

## Acceptance Criteria

- It is done when I have installed `webpack-dev-server` as a `devDependency`.

- It is done when I have added a `dev` command to `package.json` that runs `webpack-dev-server --open`.

- It is done when I have a `webpack.config.js` file in my project that includes the `devServer` property.

- It is done when I have added a `hot` property to the `devServer` object in `webpack.config.js` and set its value to `only`.

- It is done when I have opened `Unsolved/src/index.js` and made the following changes:

  - Imported the CSS file from the CSS folder.

  - Added logic to accept Hot Module Replacement (HMR), as this is an optional feature.

- It is done when I have modified or added some content to the `style.css` file. For example, I changed the `h1` font weight in the `style.css` file and saved it; and that change is reflected in the browser.

## 📝 Notes

- If you encounter any issues with loading your most recent changes, try again in a private/incognito window.

Refer to the documentation:

- [Webpack docs on Hot Module Replacement (HMR)](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr)

- [Webpack docs on webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

## 💡 Hints

- What other options are available for the `devServer` property?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

- What is another way to run `webpack-dev-server` without needing to add it to our `package.json` file?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
