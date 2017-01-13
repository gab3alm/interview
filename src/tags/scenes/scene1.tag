<scene1>
  <!-- HTML MARKUP -->
  <div id="sc1-wrapper">
    <div id="sc1-element-wrapper" class="container">

      <div id="app-title-container">
        <p class="app-title">successful interviewing</p>
      </div>

      <div id="sc1-scene-information-container" class="animated slideInLeft">
        <p class="sc1-scene-title">
          starting a job search
        </p>

        <div id="description-container" class="animated fadeIn">
          <p class="sc1-scene-description">
            The CSUN Career Center Website has made the job hunting process a bit easier.
            SUNlink lists jobs and connects students to companies looking specifically 
            hire CSUN students, and Pathways links your area of study or desired occupations 
            to relevant companies that are hiring.
          </p>
        </div>

        <a href="#steps/starting-job-search" class="cust-btn2 button button-3d button-action button-pill">learn more</a>
      </div>

      <section id="outer-scenary-container">
        <div id="scenary-container">
          <img id="icecream" class="animated slideInRight" src="public/images/scene1/podium.svg" alt="">
          <img id="tray" class="animated slideInLeft" src="public/images/scene1/cubes.svg" alt="">
        </div>  
      </section>
      


    </div>
  </div>

  <!-- CSS RULES -->
  <style>
    .cust-btn2{
      margin-top:10px;
      font-size:1.3em;
      color:rgba(255,255,255,.75) !important;
      text-shadow:1px 1px 1px rgba(0,0,0,.25);
      text-transform: capitalize;
      font-family:'pattaya';
    }

    #sc1-wrapper{
      background-image:url('public/images/scene1/background2.svg');
      background-size:cover;
      background-position:center;
      width:100%;
      height:100vh;
      overflow:hidden;
    }

    #sc1-element-wrapper{
      position:relative;
      /*border:2px solid green;*/
      height:100vh;
    }

    #app-title-container{
      position:absolute;
      top:10vh;
      left:0;
      /*border:2px solid green;*/
      width:100%;
      text-align:center;
    }

    .app-title{
      font-family:'pattaya';
      font-size:3.8em;
      color:white;
      text-transform: capitalize;
      margin:0;
      text-shadow: 2px 2px 2px rgba(0,0,0,.5);
    }

    #sc1-scene-information-container{
      /*border:2px solid white;*/
      position:absolute;
      top:20vh;
      left:0;      
    }

    .sc1-scene-title{
      font-family:'pattaya';
      font-size:2.8em;
      color:white;
      text-transform: capitalize;
      margin:0;
      text-shadow: 2px 2px 2px rgba(0,0,0,.2);
    }

    #description-container{
      background-color:rgba(18,38,75,.75);
      padding:10px 30px;
      border-radius:0px 20px;
    }

    .sc1-scene-description{
      font-family:'abel';
      font-size:1.3em;
      color:white;
      margin:0;
      width:600px;
      text-align:justify;
    }

    #outer-scenary-container{
      /*border:2px solid green;*/
      position:absolute;
      top:50vh;
      left:0;
      height:35vh;
      width:100%;
    }

    #scenary-container{
      /*border:2px solid green;*/
      position:relative;
      height:inherit;
      width:inherit;
    }

    #icecream{
      height:40vh;
      position:absolute;
      top:-40%;
      right:0%;
      transform:translate(50%,0);
    }

    #tray{
      height:20vh;
      position:absolute;
      top:10%;
      left:-10%;
      transform:translate(-40%,0);
    }

    /* Retina-specific stuff here */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
      #sc1-scene-information-container{
        top:20vh;
        left:-10%;      
      }

      #icecream{
        height:30vh;
        top:-20%;
        right:-10%;
      }

      #tray{
        height:15vh;
        top:20%;
        left:-20%;
      }

      .sc1-scene-description{
        font-size:1.5em;
        width:750px;
      }

      #description-container{
        padding:20px 30px;
      }
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      #icecream{
        height:30vh;
        top:-20%;
        right:-10%;
      }

      #tray{
        height:15vh;
        top:20%;
        left:-20%;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #sc1-scene-information-container{
        top:20vh;
        left:0%;      
      }

      .app-title{
        font-size:1.8em;
      }

      .sc1-scene-title{
        font-size:1.5em;
      }

      .sc1-scene-description{
        font-size:1.2em;
        width:100%;
        text-align:justify;
      }

      #description-container{
        padding:10px;
      }

      .cust-btn2{
        /*transform:scale(.8);*/
      }

      #outer-scenary-container{
        display:none;
      }
    }

  </style>
  <!-- SCRIPTS & STUFF -->
  <script>
    require('../../js/snow.js');
    this.on('mount', function(){
      var $node = $(this.root);
      // SNOW STORM INCOMING!!! 
      // $.fn.snow();
    });

  </script>
</scene1>