  <homepage>
    <!-- HTML MARKUP -->  
    <navbar></navbar>

    <div id="scene-container">
      <ul id="scene">
        <li class="layer" data-depth="0.00">
          <!-- Static layer 0.0 -->
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

        <li class="layer" data-depth="0.45">
          <div id="lamp2-wrapper">
            <div class="lamp-container" id="lamp-container-2">
              <img src="public/images/homepage/lamp.svg" class="lamp"  id="lamp2" alt="">
              <img src="public/images/homepage/light.svg" class="light" id="light2" alt="">
            </div>  
          </div>
        </li>

        <li class="layer" data-depth="0.30">
          <img src="public/images/homepage/floor.svg" alt="" id="floor">
          <img src="public/images/homepage/fridge_shadow2.svg" alt="" id="fridge">
        </li>


        <li class="layer" data-depth="0.10">
          <div id="lamp1-wrapper">
            <div class="lamp-container" id="lamp-container-1">
              <img src="public/images/homepage/lamp.svg" class="lamp"  id="lamp1" alt="">
              <img src="public/images/homepage/light.svg" class="light" id="light1" alt="">
            </div>  
          </div>


          <div id="lamp3-wrapper">
            <div class="lamp-container" id="lamp-container-3">
              <img src="public/images/homepage/lamp.svg" class="lamp"  id="lamp3" alt="">
              <img src="public/images/homepage/light.svg" class="light" id="light3" alt="">
            </div>  
          </div>
        </li>


        <li class="layer" data-depth=".35">
          <div id="tanner-container"></div>
        </li>

      </ul>



      <section id="information-container" class="center-align">
        <p class="app-title">successful interviewing</p>
        <div id="description-area">
          <p class="app-description">
            Looking to expand your experiences and step foot into the job market?
          </p>
          <p class="app-description">
            No matter your goals, sometimes applying for a job can be daunting task, especially when it comes to the interview process! 
            Luckily, the CSUN Career Center is committed to ensuring you will be completely prepared for when the time comes. On this 
            website, you will find all the necessarily steps and guidance to succeed when an interview day comes your way!
          </p>
        </div>
        <a href="#steps/" class="button button-3d button-caution button-pill">Learn More</a>
      </section>
    </div>

    <footing></footing>  



    <!-- CSS RULES -->
    <style>
      #scene-container{
        background-color:#18498e;
        background-image:url('public/images/homepage/background.svg');
        background-size:cover;
        background-position: center;
        height:100vh;
        overflow:hidden;  
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

      /*|||||||||||||||||||||||||||||||||*/
      /*||| LAMP STUFF: ;                */
      /*|||||||||||||||||||||||||||||||||*/
      .lamp-container{
        /*border:2px solid green;*/
        height:500px;
        width:500px;
        position:relative;
      }

      .lamp{
        height:50%;
        position:absolute;
        top:0;
        left:50%;
        transform:translate(-50%,0);
      }

      .light{
        height:50%;
        position:absolute;
        top:38%;
        left:50%;
        transform:translate(-48%,0) scale(1.2); 
        opacity: .5;
      }

      #lamp-container-1{
        transform: scale(1.5);
      }

      #lamp-container-2{
        transform: scale(1.6);
      }

      #lamp-container-3{
        transform: scale(3);
      }

      #lamp1-wrapper{
        position:absolute;
        top:0;
        left:17%;
        transform:translate(-50%, 0);
      }

      #lamp2-wrapper{
        position:absolute;
        top:-8%;
        left:50%;
        transform:translate(-50%, 0);
      }

      #lamp3-wrapper{
        position:absolute;
        top:30%;
        left:85%;
        transform:translate(-50%, 0);
      }


      /*|||||||||||||||||||||||||||||||||||||||||||||||*/
      #information-container{
        /*border:2px solid green;*/
        position:absolute;
        top:0;
        left:0;
        height:100vh;
        width:100%;
      }

      .app-title{
        font-family:'pattaya';
        font-size:4.5em;
        color:white;
        text-shadow: 2px 2px 2px rgba(0,0,0,.5);
        text-transform: capitalize;
        margin-top:5%;
      }

      #description-area{
        background-color:rgba(0,0,0,.5);
        border-radius:10px;
        width:800px;
        margin:18% auto 20px;
        padding:20px 50px 20px 50px;
      }

      .app-description{
        font-family:'abel';
        font-size:1.5em;
        color:white;
        margin:0;

        text-align: justify;
        -moz-text-align-last: center;
        text-align-last: center;
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
          font-size:4em;
          margin-top:10%;
        }

        #description-area{
          margin:36% auto 20px;
        }
      }

      /*STYLES FOR SMALL/MOBILE SCREENS */
      @media only screen and (max-width: 40em) {
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
          height:65%;
        }

        .app-title{
          font-size:2em;
          margin-top:50px;
        }

        #description-area{
          background-color:rgba(0,0,0,.5);
          border-radius:10px;
          width:100%;
          margin:12% auto 20px;
          padding:20px;
        }

        .app-description{
          font-family:'abel';
          font-size:1.2em;
          color:white;
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