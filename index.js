require("./js/GoogleTracking.js");
require("./js/rps/rps.js");
require("./js/rps/functions.js");
require("./CSS/style.css");
document.title="Beshai's site";


var base=document.createElement("base");
base.setAttribute("href","/");
document.head.appendChild(base);

var link=document.createElement("link");

link.rel= "shortcut icon";
link.type= "x-icon";
link.href= "https://github.com/MBeshai/MBeshai.github.io/blob/master/MB.png?raw=true";
document.head.appendChild(link);


var navBar=document.createElement("div");
//navBar.setAttribute("background","yellow");
navBar.setAttribute("style","border:double;border-color:black;width:100%;background:yellow;height:10%");



var introDiv=document.createElement("div");
introDiv.id="introDiv";
introDiv.innerHTML+="About";
introDiv.style="display: inline-block; width:50%";
introDiv.onclick=navChange;


var workExp=document.createElement("div");
workExp.id="workExp";
workExp.innerHTML+="Skills";
workExp.style="display: inline-block;width:50%;";
workExp.onclick=navChange;


var viewIntro=document.createElement("div");
viewIntro.id="viewIntro";
viewIntro.innerHTML+="viewIntro";
viewIntro.class="view";



var viewWork=document.createElement("div");
viewWork.id="viewWork";
viewWork.innerHTML+="viewWork";
//viewWork.style="width:300px;height:300px;background:green;border:double;border-color:black;";



navBar.appendChild(introDiv);
navBar.appendChild(workExp);
document.body.appendChild(navBar);
//document.body.appendChild(viewIntro);
//document.body.appendChild(viewWork);

function navChange(e){
  var currElem=e.currentTarget.id;
//  console.log(e.currentTarget.id)


  if(currElem=="introDiv"){

     var intronav=  document.getElementById('viewIntro');
     var worknav =document.getElementById("viewWork");
     if(worknav){
       document.body.removeChild(worknav);
    //   console.log(viewIntro);
       document.body.appendChild(viewIntro);
    }
    else{
      document.body.appendChild(viewIntro);

    }

  }
  else if (currElem=="workExp") {

    var intronav=document.getElementById('viewIntro');
    var worknav =document.getElementById("viewWork");

    if(intronav){
      document.body.removeChild(intronav);
      document.body.appendChild(viewWork);
    }
    else{
  document.body.appendChild(workExp);

    }
  }
}
