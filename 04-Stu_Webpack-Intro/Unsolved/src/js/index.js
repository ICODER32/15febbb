// TODO: Add a comment explaining role of the index.js file and import statements
// Includes the functions boxClick and headerClick from box.js and header.js
import { boxClick } from './box';
import { headerClick } from './header';
// On clicking the boxBtn boxClick Function is fired which change background color based on condition
document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
