import { Workbox } from 'workbox-window';

import './css/style.css';

const targetEl = document.querySelector('.flexbox');

const getDevArticles = async () => {
  const response = await fetch('https://dev.to/api/articles');
  const articles = await response.json();
  return articles;
};

const logger = (type, message, extra = '') => {
  const badge = `%c${type}`;
  const style =
    'color: white; background-color: orange; padding: 2px 5px; border-radius: 5px; font-weight: bold';
  console.log(badge, style, message, extra);
};

getDevArticles().then((articles) => {
  document.getElementById('articles').innerHTML = '';
  articles.forEach((article) => {
    const articleEl = document.createElement('article');

    articleEl.innerHTML = `
    <div class="article-container">
      <div class="row">
        <div class="col s12">
          <div class="card blue-grey darken-1">
            <div class="card-image">
              <img crossorigin="anonymous" src="${article.cover_image || ''}">
            </div>
            <div class="card-content white-text">
              <span class="card-title">${article.title}</span>
              <p>${article.description}</p>
            </div>
            <div class="card-action">
              <a href="${article.url}">Read more!</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    targetEl.appendChild(articleEl);
  });
});

// TODO: Add a comment describing the functionality of the service worker
// The service worker is a script that runs in the background of a web application and can intercept network requests, cache content, and enable offline functionality.
if ('serviceWorker' in navigator) {
  // TODO: Add a comment what the Workbox constructor does and why it is needed
  // the Workbox constructor is used to create a new instance of the Workbox object. The Workbox library is a set of service worker libraries that make it easy to add offline functionality to web applications. The Workbox constructor takes the path to the service worker file as its argument, which will be registered by calling the register() 
  const wb = new Workbox('/service-worker.js');
  logger('Service Worker', 'GenerateSW Service Worker is ready', wb);

  // Call the register method on the service worker to register the service worker
  // Once registered, the service worker can begin to intercept and cache network requests, which will be used to provide offline functionality when needed.
  wb.register();
}
