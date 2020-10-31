/*
4. Visited Sites
In this problem, you should create a JS functionality that keeps track of how many times a specific site has been
visited.
 For instance, if we click twice on the Kingslan
*/
//#4 Visited Websites - working code
function solve() {
  let webSites = document.querySelectorAll('.link-1');
  Array.from(webSites).forEach(site => {
      site.addEventListener(`click`, (ev) => {
          let paragraph = site.querySelector('p');
          let counter = paragraph.textContent.split(` `)[1];
          counter++;
          paragraph.innerHTML = `visited ${counter} times`;
      });
  });
}