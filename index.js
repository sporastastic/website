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

//Use JSON file to auto generate content
let numProjs = 6;
let curProject;
let name;
let link;
let linkID;

//fetch JSON data https://developer.mozilla.org/en-US/docs/Web/API/Response/json
fetch('projects.json') //this is to get the file
.then((response) => response.json())
.then(function(data){
  let rawData = data;
  // looping over json
  // https://www.codegrepper.com/code-examples/javascript/loop+through+json+object+javascript
  // the main thing is the loop needs to be in the fetch rather than outside of the fetch
  for(j=0;j<numProjs;j++){
    name=rawData.animationSamples[j].name;
    link = rawData.animationSamples[j].link;
    linkID=rawData.animationSamples[j].linkID;
    style=rawData.animationSamples[j].style;
    notes=rawData.animationSamples[j].notes;
    // console.log("grrah " + name);
    // console.log("brrrah "+pic);



    // console.log("image + " + img.src);
    // Looking at Oceane's website for the linking https://oceanestars.github.io/
    document.getElementById('chorusBattleStyleContainer').innerHTML+="<div id=div"+j+"></div>"; //create divs for each project
    document.getElementById('div'+j).innerHTML+="<iframe class='youtubeVideo' src='https://www.youtube.com/embed/" + linkID + "'> </iframe>";


    //document.getElementById('projContainer').innerHTML+="<div id=div"+j+" class=singleProject></div>"; //create divs for each project
    //document.getElementById('div'+j).innerHTML+="<a href='" + link + "' target = '_blank' id=project" +j+ "></a>";

    //document.getElementById('project'+j).appendChild(img);
    //document.getElementById('project'+j).innerHTML+="<h2 class = 'centered'>"+name+"</h2>";
    //document.getElementById('project'+j).innerHTML+="<p>"+blurb+"</p>";
    // I think the button looks cheesy which is why I don't include it
    // document.getElementById('project'+j).innerHTML+="<button class='centered'> <a href='"+link+"' target='_blank'>Find Out More</a></button>";
  }
};
