<scene3>
  <!-- HTML -->
  <div id="scene3-container">


    <div class="container">


      <div id="sc3-scenary" class="center-align animated fadeIn"><!-- relative container -->
        <!-- item are absolute -->
        <img src="public/images/scene3/cheesebed2.svg" alt="" class="cheesebed">
        <img src="public/images/scene3/closet-milk.svg" alt="" class="milk">
        <img src="public/images/scene3/glass2.svg" alt="" class="glass">
      </div>


      <div id="sc3-outer-information-container" class="animated slideInLeft">
        <div id="sc3-inner-information-container">
          <p class="sc3-title">
            preparing for an interview
          </p>
          <div id="sc3-description-container" class="animated fadeIn">
            <p class="sc3-description">
              Once you have found an opportunity that appeals to you and is hiring, it is time to apply for a position!
              The keys to successful interviewing are preparation, like-ability, and bonding. There are several critical
              areas to consider and essential things to do in preparation for your interview.
            </p>
          </div>
          <a href="#steps/interview-preparation" class="cust-btn2 button button-3d button-royal button-pill">learn more</a>  
        </div>
      </div> 

    </div>

  </div>
  <!-- CSS -->
  <style>
    .cust-btn2{
      margin-top:10px;
      font-size:1.3em;
      color:rgba(255,255,255,1) !important;
      text-shadow:1px 1px 1px rgba(0,0,0,.25);
      text-transform: capitalize;
      font-family:'pattaya';
    }

    #scene3-container{
      background-image:url(public/images/scene3/scene3-background.svg);
      background-position:center;
      background-size:cover;
      height:100vh;
      width:100%;
      overflow:hidden;
      position:relative;
    }

    #sc3-outer-information-container{
      width:100%;
      position:relative;
      top:60vh;
    }

    #sc3-inner-information-container{
      position:absolute;
      top:0;
      left:0;
    }

    #sc3-description-container{
      background-color:rgba(16,100,51,.5);
      border-radius:0 20px;
      width:600px;
      padding:10px 30px;
    }

    .sc3-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      color:rgba(0,0,0,.75);
      text-align:left;
      margin:0;
      color:white;
      text-shadow:2px 2px 2px rgba(0,0,0,.25);
    }

    .sc3-description{
      font-family:'abel';
      font-size:1.4em;
      color:rgba(0,0,0,.65);
      text-align:justify; 
      margin:0;
      color:white;
    }

    #sc3-scenary{
      width:100%;
      height:auto;
      position:relative;
      top:0;
      left:0;
    }

    .glass{
      position:absolute;
      top:25vh;
      left:0;
      height:35vh;
      transform:translate(-50%, 0);
    }

    .cheesebed{
      position:absolute;
      top:35vh;
      left:50%;
      transform:translate(-50%, 0);
      height:20vh;
    }

    .milk{
      position:absolute;
      top:10vh;
      right:0;
      height:50vh;
      transform:translate(50%, 0);
    }

    /* Retina-specific stuff here */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){
      #sc3-scenary{
        top:28%;
      }

      #sc3-outer-information-container{
        width:100%;
        position:relative;
        top:65vh;
      }

      #sc3-inner-information-container{
        left:-10%;
      }

      .sc3-scene-description{
        font-size:1.5em;
        width:750px;
      }

      #sc3-description-container{
        padding:20px 30px;
      }
      
      .milk{
        right:-10%;
      }
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      #sc3-scenary{
        top:35%;
      }

    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      .sc3-title{
        font-size:1.5em;
      }

      #sc3-outer-information-container{
        width:100%;
        position:relative;
        top:20vh;
      }

      #sc3-inner-information-container{
        left:0;
      }

      #sc3-description-container{
        border-radius:0 10px;
        width:100%;
      }

      .sc3-description{
        font-size:1.2em;
        width:100%;
        text-align:justify;
      }

      #sc3-scenary{
        display:none;
      }
    }
  </style>  
  <!-- SCRIPT -->
  <script>
    this.on('mount', function(){

    });
  </script>
</scene3>