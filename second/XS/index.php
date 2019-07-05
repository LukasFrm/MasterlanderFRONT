<!DOCTYPE html>
<html>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      media="none"
      onload="if(media!='all')media='all'"
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <!-- <script type="text/javascript" src="samdata.json" media="none" onload="if(media!='all')media='all'"></script> -->
    <link
      media="none"
      onload="if(media!='all')media='all'"
      rel="stylesheet"
      type="text/css"
      href="/second/XS/style.css"
    />
    <script
      src="https://code.jquery.com/jquery-3.4.1.js"
      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
      crossorigin="anonymous"
    ></script>

    <link
      rel="stylesheet"
      media="none"
      onload="if(media!='all')media='all'"
      rel="preload"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <style>
      .modal {
        display: block; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
      }

      .intro-popup {
        background-color: white;
        width: 600px;
        position: fixed;
        display: inline-block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @media (max-width: 800px) {
        .intro-popup {
          width: 95%;
        }
      }
    </style>
  </head>



  <!-- <script type="text/javascript" src="samscript.js"></script> -->

  <body>


   
  </body>

  <script>

let responseJSON = '<?php echo $response; ?>';
    console.log("Appending body for scratch");

    let response = JSON.parse(responseJSON);

  let markup = `
   <!-- the entery popup begins here -->
   <div id="pop" class="modal">
        <div class="intro-popup text-center">
          <h3 class="p-2 m-2 h-25 font-weight-bold" id="pop0">
            ${response.text.surveyHeaderText}
          </h3>
          <p class="p-1 m-0 font-size-15 black-text" id="pop1">
            ${response.text.popUpH3Text}
          </p>
          <p class="p-1 mt-1 m-2 font-size-15 black-text" id="pop2">
            ${response.text.popUpP1Text}
          </p>
          <p class="p-1 m-2 font-size-15 black-text" id="pop3"></p>
          <div class="text-center">
            <button
              type="button"
              id="pop4"
              class="hov p-2 m-4 w-75 btn-color"
              style="background-color:${response.brand.buttonColor}"
              onclick="closePop()"
            >
              OK
            </button>
          </div>
        </div>
      </div>
  
      <div class="header-style" style="background-color:${response.brand.buttonColor}">
        <img class="vertical-aligh d-inline" 
    style="max-height: 30px";
src="/second/XS/img/logo.png"/>
  
        <p class="d-inline" style="color: white">PRODUCTS &#x25BC;</p>
      </div>
      <div id="maindiv" class=" mobile-padding container-fluid pt-4 pl-3 pr-3">
        <div class="galaxy-img">
          <img class="galaxy-img" src=${response.brand.logo} />
        </div>
        <div
          id="date"
          style="width: 100%"
          class="hide-mobile text-right font-size-12 mt-3 mb-3"
        ></div>
  
        <div id="maincnt" class="container-fluid border-cnt p-2">
          <h1 id="h1" class="font-size-20">${response.text.surveyHeaderText}</h1>
          <h2 id="h2" class="font-size-18">
            ${response.text.surveyH4Text}
          </h2>
          <p id="p1" class="font-size-14">
            ${response.text.websiteP1Text}
          </p>
          <p id="p2" class="font-size-14">
            ${response.text.websiteP2Text}
            
          </p>
  
          <div id="qst" class="">
            <p></p>
          </div>
        </div>
      </div>
      `.split("[PHONE]")
  .join(`${response.offer.item.name}`)

  $('body').html(markup)

</script>
  <script>
    function initalHide() {
      for (let i = 1; i < response.text.questions.length + 1; i++) {
        $(".q" + i).hide();
        $(".q1").show();
      }
    }

    function closePop() {
      document.getElementById("pop").style.display = "none";
      questionAppend();
      initalHide();
    }

    function questionAppend() {
      for (let i = 0; i < response.text.questions.length; i++) {
        $("#qst").append(`
      <div class="q${i +
        1}"> <p class="font-size-13 mt-1 mb-1 d-inline font-weight-700 q${i +
          1}"> ${response.text.leaveCommentText} ${i + 1} / ${
          response.text.questions.length
        }:  </p>
      <p class="font-size-13 mt-1 mb-1 d-inline q${i + 1}"> ${
          response.text.questions[i].question
        }</p></div>
      `.split("[PHONE]")
  .join(`${response.offer.item.name}`));
        for (
          let j = 0;
          j < response.text.questions[i].answers.length;
          j++
        ) {
          $("#qst").append(`
        <button type="button" onclick="questionDisplay(${i +
          1})" class="btn-color hov w-100 mb-2 q${i + 1}" style="background-color:${response.brand.buttonColor}">${
            response.text.questions[i].answers[j].answer
          }</button>
        `);
        }
      }
    }

    function questionDisplay(x) {
      let y = x + 1;
      $(".q" + x).remove();
      $(".q" + y).show();

      if (x === response.text.questions.length) {
        let tickcounter = 0;

        function doGif() {
          var maindiv = document.getElementById("maincnt");
          var ele = document.createElement("h1");
          ele.textContent = response.text.questionsHeaderText.split("[PHONE]")
  .join(`${response.offer.item.name}`);
          ele.className = "text-center header-padding font-size-30";
          maindiv.appendChild(ele);
          var imgele = document.createElement("img");
          imgele.setAttribute("src", "/second/XS/img/loading.gif");
          ele = document.createElement("p");
          ele.className = "text-center";
          ele.appendChild(imgele);
          maindiv.appendChild(ele);
          setTimeout(doTicks, 800);
          //setTimeout(doProgressValue,800)
        }

        doGif();

        function removeMain() {
          var myNode = document.getElementById("maincnt");
          while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
          }
        }

        function doTicks() {
          var belekas = response.text.websiteTitleText;
          var blabla = belekas.split("[PHONE]")
  .join(`${response.offer.item.name}`)
          var kotunori = blabla.split(",");



          if (tickcounter < kotunori.length) {
            var maindiv = document.getElementById("maincnt");
            var ele = document.createElement("p");
            var imgele = document.createElement("img");
            imgele.className = "pr-1";

            imgele.setAttribute("src", "/second/XS/img/tick.png");
            ele.appendChild(imgele);
            var node = document.createTextNode(kotunori[tickcounter]);
            ele.appendChild(node);
            ele.className = "font-size-13 m-0 font-weight-700";

            maindiv.appendChild(ele);
            tickcounter++;
            setTimeout(doTicks, 800);
          } else {
            doOffer();
          }
        }

        function letsDoComments() {

            $('#maincnt').append(`
            <div class="container smallscreen container-width p-0 m-0 ">
      <p class="font-size-13 mt-3 pb-3 border-bottom">Comments</p>
      <p class="font-size-13 mt-3 pb-3 grey-text border-bottom">${response.text.comments.length} Comments</p>
            `)
          for (let k = 0; k < response.text.comments.length; k++) {
            $('.smallscreen').append(`      
            <div class="row m-0">
        <div class="com-width-70 pt-1  ">
          <img src="${response.text.comments[k].photo}" class="img-size-60 hov" />
        </div>
        <div class=" com-width-560   p-2 pl-1 float-right">
          <p class="name color-blue font-weight-700 hov">${response.text.comments[k].name}</p>
          <p class="font-size-13">
            ${response.text.comments[k].text}
          </p>
        </div>
      </div>
      <div class=" border-bottom m-0 p-0">
        <p class="font-size-11 hov color-blue mt-1 pb-2  d-inline">
          ${response.text.surveyExperienceText} | ${Math.floor(Math.random() * 100) + " Likes"}
        </p>
      </div>`.split("[PHONE]")
  .join(`${response.offer.item.name}`));
            }
          
        }

        function doOffer() {
          removeMain();
          var maindiv = document.getElementById("maincnt");
          var ele = document.createElement("h1");
          ele.textContent = response.text.completedSurveyP1Text;
          ele.className = "font-size-20  text-center pt-0";
          maindiv.appendChild(ele);
          var ele = document.createElement("h2");
          ele.textContent = response.text.completedSurveyP2Text;
          ele.className = "font-size-18 mt-0 mb-0";
          maindiv.appendChild(ele);
          var ele = document.createElement("h2");
          ele.textContent = response.text.offerPriceText.split("[PHONE]")
  .join(`${response.offer.item.name}`);
          ele.className = "font-size-18 mt-0 mb-3";
          maindiv.appendChild(ele);
          var ele = document.createElement("h2");
          ele.textContent = response.text.offerTodayPriceText;
          ele.className = "text-center font-size-18 font-weight-bold";
          maindiv.appendChild(ele);



          var ele = document.createElement("img");
          ele.setAttribute("src", response.offer.item.pictureUrl);
          ele.className = "offer-img-size hov mx-auto d-block";
          ele.setAttribute(
            "onclick",
            "window.open('" +
            response.offer.offerUrl.url +
            
              "','_blank')"
          );
          maindiv.appendChild(ele);

          var ele = document.createElement("button");
          ele.setAttribute("type", "button");
          ele.setAttribute(
            "onclick",
            "window.open('" +
              response.offer.offerUrl.url  +
              "','_blank')"
          );
          ele.setAttribute("style", "background-color:"+response.brand.buttonColor)
          ele.className = "btn-color hov w-100 mb-2 mt-4";
          ele.textContent = response.text.orderShippingText.split("[PHONE]")
  .join(`${response.offer.item.name}`);
          maindiv.appendChild(ele);

          var ele = document.createElement("p");
          ele.textContent = response.text.orderQuantityLeftText.split("[PHONE]")
  .join(`${response.offer.item.name}`);
          ele.className = "font-size-14 mt-3 mb-3 text-center";
          maindiv.appendChild(ele);
          letsDoComments();
        }
      }
    }
  </script>
</html>
