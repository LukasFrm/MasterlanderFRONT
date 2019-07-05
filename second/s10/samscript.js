// js for samgal lander 
var tickcounter =0;
var headerTextbox;
var questionBox;
var loadingBox;
var offerBox;
var commentsBox;
var dateBox;
var popupBox;
function loadMe(){
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(xhttp.responseText);
            headerTextbox = response.frontpage;
            questionBox = response.questions;
            loadingBox = response.loading;
            offerBox = response.offer;
            commentsBox = response.comments;
            dateBox = response.date;
            popupBox = response.popup;
            doFrontPage();
          }
        }
        xhttp.open("GET", "samdata.json", true);
        xhttp.send(); 

}


function doFrontPage(){
    doPopup();
   // document.getElementById("title").textContent = headerTextbox.title;
    // document.getElementById("h1").textContent = headerTextbox.header;
    // document.getElementById("h2").textContent = headerTextbox.subheader;
    // document.getElementById("p1").textContent = headerTextbox.textOne;
    // document.getElementById("p2").innerHTML = headerTextbox.textTwo;
    var pclass = "font-size-13 mt-1 mb-1 d-inline";
    var pele = document.createElement("p");
    pele.textContent = questionBox[0].head;
    pele.className = "font-weight-700"
    pele.className = "font-size-13 mt-1 mb-1 d-inline font-weight-700";
    document.getElementById("qst").appendChild(pele);
    var pele = document.createElement("p");
    pele.textContent =" " + questionBox[0].quest;
    pele.className = pclass ;
    document.getElementById("qst").appendChild(pele);
    questionBox[0].answer.forEach(element => {
        var bele = document.createElement("button");
        bele.setAttribute("type","button");
        bele.setAttribute("onclick", "doQuestions('1')");
        bele.className = "btn-color hov w-100 mb-2";
        bele.textContent = element;
        document.getElementById("qst").appendChild(bele);
      //  <button type="button" class="btn-height w-100 mb-2">ds</button>

    });
    document.getElementById("date").textContent = doDate();
}

function doPopup(){
    // document.getElementById("pop0").textContent = popupBox.header;
    // // document.getElementById("pop1").textContent = popupBox.first;
    // document.getElementById("pop2").textContent = popupBox.second;
    // document.getElementById("pop4").textContent = popupBox.btn;
  }

function closePop(){
    document.getElementById("pop").style.display = "none";
  }
function doQuestions(qstId){
    if(qstId < questionBox.length){
    if(qstId == 1 && screen.width < 800){
      document.getElementById("h2").style.display = "none";
      document.getElementById("p1").style.display = "none";
      document.getElementById("p2").style.display = "none";
    }
    removeQuestions();
    var pclass = "font-size-13 mt-1 mb-1 d-inline";
        var pele = document.createElement("p");
        pele.textContent = questionBox[qstId].head;qstId
        pele.className = pclass +" font-weight-700";
        document.getElementById("qst").appendChild(pele);
        var pele = document.createElement("p");
        pele.textContent = " " + questionBox[qstId].quest;
        pele.className = pclass ;
        document.getElementById("qst").appendChild(pele);
        var newid = parseInt(qstId)+1;
        questionBox[qstId].answer.forEach(element => {
            var bele = document.createElement("button");
            bele.setAttribute("type","button");
            bele.setAttribute("onclick", "doQuestions('"+ newid+"')");
            bele.className = "btn-color hov w-100 mb-2";
            bele.textContent = element;
            document.getElementById("qst").appendChild(bele);
          //  <button type="button" class="btn-height w-100 mb-2">ds</button>
    
        });
      }
      else{
        removeMain();
        doGif();
      }
    }

    function doGif(){

        var maindiv = document.getElementById("maincnt");
        var ele = document.createElement("h1");
        ele.textContent = loadingBox.header;
        ele.className = "text-center header-padding font-size-30";
        maindiv.appendChild(ele);
        var imgele = document.createElement("img");
        imgele.setAttribute("src", "img/loading.gif");
        ele = document.createElement("p");
        ele.className = "text-center";
        ele.appendChild(imgele);
        maindiv.appendChild(ele);
        setTimeout(doTicks, 800);
        //setTimeout(doProgressValue,800)
      }

    function doTicks(){

        if((tickcounter)  < loadingBox.chekeriai.length ){
        
        
        var maindiv = document.getElementById("maincnt");
        var ele = document.createElement("p");
        var imgele = document.createElement("img");
        imgele.className = "pr-1";
        
        imgele.setAttribute("src", "img/tick.png");
        ele.appendChild(imgele);
        var node = document.createTextNode(loadingBox.chekeriai[tickcounter]);
        ele.appendChild(node);
        ele.className = "font-size-13 m-0 font-weight-700";
       
        maindiv.appendChild(ele);
        tickcounter++;
        setTimeout(doTicks, 800);
        }
        else{
          doOffer();
        }
    }

    function doOffer(){
        removeMain();
        var maindiv = document.getElementById("maincnt");
        var ele = document.createElement("h1");
        ele.textContent = offerBox.header;
        ele.className = "font-size-20  text-center pt-0";
        maindiv.appendChild(ele);
        var ele = document.createElement("h2");
        ele.textContent = offerBox.subheaderone;
        ele.className = "font-size-18 mt-0 mb-0";
        maindiv.appendChild(ele);
        var ele = document.createElement("h2");
        ele.textContent = offerBox.subheadertwo;
        ele.className = "font-size-18 mt-0 mb-3";
        maindiv.appendChild(ele);
        var ele = document.createElement("h2");
        ele.textContent = offerBox.claimheader;
        ele.className = "text-center font-size-18 font-weight-bold";
        maindiv.appendChild(ele);
      
        var ele = document.createElement("img");
        ele.setAttribute("src", "img/s9.png");
        ele.className = "offer-img-size hov mx-auto d-block";
        ele.setAttribute("onclick", "window.open('"+ offerBox.link+"','_blank')");
        maindiv.appendChild(ele);
        
        var ele = document.createElement("button");
        ele.setAttribute("type","button");
        ele.setAttribute("onclick", "window.open('"+ offerBox.link+"','_blank')");
        ele.className = "btn-color hov w-100 mb-2 mt-4";
        ele.textContent = offerBox.buttontext;
        maindiv.appendChild(ele);
      
        var ele = document.createElement("p");
        ele.textContent = offerBox.subbtntext;
        ele.className = "font-size-14 mt-3 mb-3 text-center";
        maindiv.appendChild(ele);
        letsDoComments();
        
      
      
    }

    function letsDoComments(){
        var maindiv = document.createElement("div");
        maindiv.className = "container smallscreen container-width p-0 m-0 ";
        var ele = document.createElement("p");
        ele.textContent = commentsBox.commentstag[0];
        ele.className = "font-size-13 mt-3 pb-3 border-bottom";
        maindiv.appendChild(ele);
        var ele = document.createElement("p");
        ele.textContent = commentsBox.commentstag[1];
        ele.className = "font-size-13 mt-3 pb-3 grey-text border-bottom";
        maindiv.appendChild(ele);
        
        commentsBox.comments.forEach(element =>{
      
       
         var row = document.createElement("div");
        row.className = "row m-0"; // row starts 
        
        ele = document.createElement("div");
        ele.className = "com-width-70 pt-1  ";
        var mele = document.createElement("img");
        mele.setAttribute("src",element.profpic)
        mele.className = "img-size-60 hov";
        ele.appendChild(mele);
        row.appendChild(ele);
        ele = document.createElement("div");
        ele.className = " com-width-560   p-2 pl-1 float-right";
        var pele = document.createElement("p");
        pele.className = "name color-blue font-weight-700 hov";
        pele.textContent = element.name;
        ele.appendChild(pele);
        var pele = document.createElement("p");
        pele.className = "font-size-13";
        pele.textContent = element.comm;
        ele.appendChild(pele);
        if(element.hasOwnProperty("compic")){
          var mele = document.createElement("img");
          mele.setAttribute("src", element.compic);
          mele.className = "img-size150x";
          ele.appendChild(mele);
          var x = element.hasOwnProperty("compic");
        }
      
        row.appendChild(ele);
        
        maindiv.appendChild(row); // row ends? 
      
        mele = document.createElement("div");
        mele.className = " border-bottom m-0 p-0";
        ele = document.createElement("p");
        ele.textContent = element.subcomentline;
        ele.className = "font-size-11 hov color-blue mt-1 pb-2  d-inline";
        mele.appendChild(ele);
        
        ele = document.createElement("p");
        ele.textContent = doDate();
        ele.className = "font-size-11 mt-1 pb-2  d-inline ";
        mele.appendChild(ele);
        maindiv.appendChild(mele);
        });
        document.getElementById("maincnt").appendChild(maindiv);
        
      
      
      }
      

    function removeQuestions(){
        var myNode = document.getElementById("qst");
          while (myNode.firstChild) {
           myNode.removeChild(myNode.firstChild);
          }
    }

    function removeMain(){
        var myNode = document.getElementById("maincnt");
        while (myNode.firstChild) {
         myNode.removeChild(myNode.firstChild);
        }
      }

    function doDate(){
        var d = new Date();
        var month = dateBox.month[d.getMonth()];
        var day = d.getDate();
        var year = d.getFullYear();
        var ret = month+ " " + day +", " + year;
        return ret;
      }