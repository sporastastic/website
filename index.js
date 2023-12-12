//Disappear and reappearing section referces the following stack overflow
//https://stackoverflow.com/questions/41730653/how-to-make-a-div-disappear-then-reappear-onclick

var eacbStory = document.getElementById('YurenaiKizunaStory');

function showDiv() {
  eacbStory.style.display = "block";
}

function closeDiv() {
  eacbStory.style.display = "none";
}

function showOrHide() {
  if (eacbStory.style.display === "block") {
    closeDiv()
  } else {
    showDiv()
  }
}
