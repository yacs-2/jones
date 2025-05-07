let photoArr = document.querySelectorAll(".photo-container img");

let currentIndex = 0;


function showBig(_self) {
  const BIG_DIV = document.getElementById("big-container");
  const BIG_IMG = document.getElementById("big-img");
  
  
  BIG_DIV.style.display = "block";
  BIG_IMG.setAttribute("src", _self.src);
  
  for (let _i = 0; _i < photoArr.length; _i++) {
    if (photoArr[_i].isEqualNode(_self));
}

function hideBig(_self) {
  _self.style.display = "none";
}
