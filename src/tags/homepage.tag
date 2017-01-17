<homepage>
  <!-- HTML MARKUP -->
  <navbar></navbar>

  <div id="scene-container">
    <ul id="scene">
      <li class="layer" data-depth="0.00">
        <!-- Static layer 0.0 -->
      </li>



      <li class="layer" data-depth="0.40">

        <div id="lamp-post2" class="lamp-outer-container"><!-- absolute container -->
          <div class="lamp-inner-container"><!-- relative container -->
            <img src="public/images/homepage/lamp.svg" alt="" id="lamp2" class="lamp">
            <img src="public/images/homepage/light.svg" alt="" id="light2" class="light">
          </div>
        </div>

      </li>

      <li class="layer" data-depth="0.20">
        <img src="public/images/homepage/backcloud.svg" alt="" id="cloud1" class="clouds">
        <img src="public/images/homepage/forecloud.svg" alt="" id="cloud2" class="clouds">
      </li>


      <li class="layer" data-depth="0.25">
        <img src="public/images/homepage/backcloud.svg" alt="" id="cloud3" class="clouds">
      </li>

      <li class="layer" data-depth="0.35">
        <img src="public/images/homepage/forecloud.svg" alt="" id="cloud4" class="clouds">
      </li>


      <li class="layer" data-depth="0.30">
        <img src="public/images/homepage/floor.svg" alt="" id="floor">
        <img src="public/images/homepage/fridge_shadow2.svg" alt="" id="fridge">
      </li>


      <li class="layer" data-depth="0.30">

        <div id="lamp-post1" class="lamp-outer-container"><!-- absolute container -->
          <div class="lamp-inner-container"><!-- relative container -->
            <img src="public/images/homepage/lamp.svg" alt="" id="lamp1" class="lamp">
            <img src="public/images/homepage/light.svg" alt="" id="light1" class="light">
          </div>
        </div>


        <div id="lamp-post3" class="lamp-outer-container"><!-- absolute container -->
          <div class="lamp-inner-container"><!-- relative container -->
            <img src="public/images/homepage/lamp.svg" alt="" id="lamp3" class="lamp">
            <img src="public/images/homepage/light.svg" alt="" id="light3" class="light">
          </div>
        </div>

      </li>

      <li class="layer" data-depth=".35">
        <div id="tanner-container"></div>
      </li>
    </ul>

    <!-- absolute container -->
    <div id="information-container">
      <!-- relative container -->
      <div id="inner-information-container">

        <div id="title-container">
          <p class="app-title flow-text center-align">
            successful interviewing
          </p>
          <p class="app-todo flow-text center-align">
            <span class="accent">~</span> CSUN career center to-do guide <span class="accent">~</span>
          </p>
        </div>

        <div id="intro-container">
          <div id="app-description-container">
            <p class="app-description flow-text">
              <span class="welcome-message">Welcome!</span>
              No matter your goals, sometimes applying for a job can be daunting task, especially when it comes to the 
              <span class="keyword">
                interview process!  
              </span>
            </p>
            <p class="app-description">

              Luckily, the 
              <span class="keyword">
                CSUN Career Center
              </span>
              is committed to ensuring you will be completely prepared for when the time comes. 
              On this website, you will find all the 
              <span class="keyword">
                necessary steps
              </span>
              and guidance to succeed when an interview day comes your way!
            </p>
          </div>
          <div class="center-align">
            <a href="#steps/" class="cust-btn2 button button-3d button-action button-pill">Let's Begin!</a>
            <!-- <a href="#steps/" class="cust-btn btn btn-large hoverable">Let's Begin!</a> -->
          </div>
        </div>

      </div>
    </div>


  </div>

  <footing></footing>



  <!-- CSS RULES -->
  <style>
    .accent{
      /*font-size:2em;*/
    }

    .keyword{
      font-weight: bold;
      color:#a5de37;
      /*color:#f49331;*/
    }

    .app-todo{
      font-family:'abel';
      font-size:1.5em;
      /*margin-left:420px;*/
      text-shadow: 2px 2px 2px rgba(0,0,0,.5);
      margin-top:-10px;
      padding:0;
      text-transform: capitalize;
      /*color:#f49331;*/
      color:white;
    }

    .cust-btn2{
      font-family:'abel';
      margin-top:20px;
      font-weight: bold;
      color:rgba(0,0,0,.65) !important;
    }

    /*||||||||||||||||||||||||||||||||*/
    .lamp-outer-container{
      position:absolute;
      height:50vh;
      width:25vw;
      /*border:2px solid green;*/
      transform:translate(-50%, 0);
    }

    .lamp-inner-container{
      position:relative;
      height:inherit;
      width:inherit;
    }

    .lamp, .light{
      position:absolute;
      transform:translate(-50%, 0);
    }

    .light{
      opacity:.8;
    }

    #lamp-post1{
      top:-5%;
      left:15%;
    }

    #lamp1{
      top:0;
      left:50%;
      height:50%;
    }

    #light1{
      left:53.3%;
      top:33%;
      height:100%;
    }

    #lamp-post2{
      top:-15%;
      left:50%;
    }

    #lamp2{
      top:0;
      left:50%;
      height:60%;
    }

    #light2{
      left:53.3%;
      top:40%;
      height:110%;
    }

    #lamp-post3{
      top:-7%;
      left:85%;
    }

    #lamp3{
      top:0;
      left:50%;
      height:120%;
    }

    #light3{
      left:56%;
      top:79%;
      height:190%;
    }

    /*|||||||||||||||||||||||||||*/
    /* INFORMATION CONTAINER RULES*/
    /*|||||||||||||||||||||||||||*/
    #information-container{
      position:absolute;
      top:0;
      left:0;
      height:100vh;
      width:100vw;
    }

    #inner-information-container{
      position:relative;
      height:inherit;
      width:inherit;
      /*border:2px solid green;*/
    }

    #title-container{
      position:absolute;
      top:7vh;
      left:50%;
      transform:translate(-50%, 0);
    }

    .app-title{
      width:100vw;
      font-family: 'pattaya';
      font-size:5em;
      color:white;
      text-shadow: 2px 2px 2px rgba(0,0,0,.5);
      text-transform: capitalize;
      margin:0;
    }

    #intro-container{
      position:absolute;
      top:50vh;
      left:50%;
      transform:translate(-50%, 0);
    }

    #app-description-container{
      background-color:rgba(0,0,0,.5);
      border-radius: 20px;
      width:80%;
      margin: 0 auto;
      padding:1% 5% 1% 5%;
    }

    .app-description{
      /*border:2px solid green;*/
      font-family:'abel';
      font-size:1.2em;
      color:white;
      text-align: justify;  
      max-width:700px;
    }

    .welcome-message{
      font-family:'pattaya';
      font-size:2.5em;
      display:block;
      text-align:center;
      margin:0;
      /*color:#a5de37;*/
    }
    /*|||||||||||||||||||||||||||||||||||*/
    /* INFORMATION CONTAINER RULES - END */
    /*|||||||||||||||||||||||||||||||||||*/

    .cust-btn{
      border-radius:20px;
      background-color:rgba(244,147,49,1);
      margin-top:20px;
    }

    #scene-container{
      background-color:#18498e;
      background-size:cover;
      background-position: center;
      height:100vh;
      overflow:hidden;
      background-image:url("public/images/homepage/background.svg");
    }

    .layer{
      height:100vh;
      width:100%;
    }

    #floor{
      position:absolute;
      bottom:0;
      left:0;
      height:50%;
      transform:scaleX(1.2);
    }

    #fridge{
      position:absolute;
      bottom:0;
      left:50%;
      height:80%;
      /*since the shadow is included, i changed the pivot center of the image*/
      transform:translate(-91%,0);
    }

    #tanner-container{
      position:absolute;
      top:45%;
      left:5%;
    }

    .clouds{
      position:absolute;
      top:50%;
      /*left:0;*/
      width:100%;
      transform:translate(0,-90%);
    }

    #cloud1{
      right:25%;
    }
    #cloud2{
      left:25%;
    }
    #cloud3{
      left:50%;
    }
    #cloud4{
      right:50%;
    }


    /* Retina-specific stuff here */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
      .app-title{
        font-size:7em;
      }

      #intro-container{
        top:48vh;
      }

      #app-description-container{
        padding:1px 5% 1px 5%;
      }

      .app-description{
        font-size:1.8em;
        max-width:1000px;
      }

      .welcome-message{
        font-size:2.5em;
      }

      .cust-btn{
        transform:scale(1.2);
      }
    }



    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      #tanner-container{
        position:absolute;
        top:45%;
        left:-10%;
        transform:scale(.8);
      }

      .app-title{
        font-size:4.5em;
      }

      #app-description-container{
        background-color:rgba(0,0,0,.5);
        border-radius: 20px;
        width:100%;
        margin:0 auto;
        padding:1% 5% 1% 5%;
      }

      .app-description{
        font-size:1.2em;
        width:500px;
      }

      .welcome-message{
        font-size:2.5em;
      }

      #lamp-post1, #lamp-post3{
        display:none;
      }

    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      .cust-btn{
        margin-top:5px;
        transform:scale(.8);
      }

      #scene-container{
        height:calc(100vh + 150px);
      }

      #tanner-container{
        position:absolute;
        top:0;
        left:-60%;
        transform:scale(.3);
      }

      #fridge{
        top:20%;
        height:50%;
      }

      #floor{
        height:33%;
        transform:scaleY(2.7);
      }

      .app-title{
        font-size:1.8em;
      }

      #app-description-container{
        width:95vw;
        padding:1% 5% 1% 5%;
      }

      .welcome-message{
        font-family:'pattaya';
        font-size:1.5em;
        display:block;
        text-align:center;
        margin:0;
      }

      .app-description{
        /*border:2px solid green;*/
        font-family:'abel';
        font-size:1em;
        color:white;
        text-align: justify;  
        -moz-text-align-last: center; /* Code for Firefox */
        text-align-last: center;
        max-width:700px;
      }

      #lamp-post1, #lamp-post3{
        display:none;
      }

      #light2{
        left:61%;
      }

    }
  </style>

  <!-- SCRIPT STUFF -->
  <script>
    require('../js/parallax.js');

    this.on('mount', function(){
      var $node = $(this.root);
      $node.find('#scene').parallax();
      $node.find('#tanner-container').load('public/animations/tangerine.html');
    });
  </script>

</homepage>
