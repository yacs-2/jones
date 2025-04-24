/**
This script will do some smth like inject some stuff like global header into #gheader div of each page
**/

const INJECTION ='<div id="global-preheader"><h1>HIIIIII</h1></div><div id="global-header"><ul id="nav-list"><li> <a href="/jones"></a>Home</a></li><li> <a href="#">Photos</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="#">Projects </a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="#"> music</a><ul><li><a href="#">album 1</a></li><li><a href="#">album 2</a></li><li><a href="#">album 3</a></li></ul></li><li><a href="/jones/web-dev">Web Development</a><ul><li><a href="/jones/wdsub/week1.html">album 1</a></li><li><a href="/jones/wdsub/recipe.html"> album 2</a></li><li><a href="/jones/wdsub/anchors.html"> album 3</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/poem.html">album 1</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/reviews.html">album 2</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/journal.html">album 3</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/band-camp.html">album 1</a></li><li><a href="https://yacs-2.github.io/jones/wdsub/list-maker.html">album 2</a></li><li><a href="#">album 3</li></ul></a></li></ul></div>';

let_div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
