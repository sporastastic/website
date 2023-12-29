//Disappear and reappearing section referces the following stack overflow
//https://stackoverflow.com/questions/41730653/how-to-make-a-div-disappear-then-reappear-onclick
function showOrHide(targetedBlock) {
  if (targetedBlock.style.display === "block") {
    closeDiv(targetedBlock)
  } else {
    showDiv(targetedBlock)
  }
}

function showOrHideFlex(targetedBlock) {
  if (targetedBlock.style.display === "flex") {
    closeDiv(targetedBlock)
  } else {
    showDivFlex(targetedBlock)
  }
}

function showDiv(targetedBlock) {
  targetedBlock.style.display = "block";
}

function showDivFlex(targetedBlock) {
  targetedBlock.style.display = "flex";
}

function closeDiv(targetedBlock) {
  targetedBlock.style.display = "none";
}
