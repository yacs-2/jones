function showBig(_self) {
  
 const BIGDIV = document.getElementById("bid-div");
  
  const BIGIMG=document.getElementById("big-img")
  
  BIGDIV.style.display = "block";

  BIGIMG.setAttribute("src,_self.src")
}

function hideBig(_self){
  _self.style.display = "none";
}
