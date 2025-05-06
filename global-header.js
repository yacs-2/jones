/**
This script will do some smth like inject some stuff like global header into #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"><h1>Kaedens Personal  Site 😎</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/jones">Home</a></li><li> <a href="#">Photos</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/art-projects/index.html">Projects </a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/music/index.html"> music</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/web-dev">Web Development</a><ul><li><a href="/jones/wdsub/week1.html"> Week 1 Basic HTML</a></li><li><a href="/jones/wdsub/recipe.html"> Week 2 Brownie Recipe</a></li><li><a href="/jones/wdsub/anchors.html"> Week 3 Anchors</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/poem.html"> Week 4 Poems and ASCII</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/reviews.html"> Week 5 Book Reviews</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/journal.html"> Week 6 Journal</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/band-camp.html"> Week 7 Band-Camp</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/list-maker.html"> Week 8 List-Maker</a></li><li><a href="#"> Week 9 ???</li></ul></a></li></ul></div>'
let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
