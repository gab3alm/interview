<scene2>
  <!-- HTML -->
  <div id="scene2-container">


    <div class="container">

      <div id="sc2-scenary" class="center-align animated slideInDown"><!-- relative container -->
        <img class="bottles" src="public/images/scene2/bottles.svg" alt="">
      </div>

      <div id="sc2-outer-information-container" class="animated fadeIn"><!-- absolute container -->
        <div id="sc2-inner-information-container"><!-- relative container -->
          <p class="sc2-title">types of interviews</p>
          <div id="sc2-description-container">
            <p class="sc2-description">
              Knowing the different types of interviews that you may be facing makes it easy to prepare for them.
              Interviews types range from the general interview, a lunch interview protocol, telephone screening,
              competency based, multiple one to one, panel interview, role play, skype/facetime, presentation
            </p>  
          </div>
          <div class="center-align">
            <a href="#steps/interview-types" class="cust-btn2 button button-3d button-action button-pill">learn more</a>
          </div>

        </div>
      </div>
    </div>
    

  </div>
  <!-- CSS -->
  <style>
    .cust-btn2{
      margin-top:10px;
      font-size:1.3em;
      color:rgba(255,255,255,.75) !important;
      text-shadow:1px 1px 1px rgba(0,0,0,.25);
      text-transform: capitalize;
      font-family:'pattaya';
    }

    #scene2-container{
      background-image:url(public/images/scene2/background.svg);
      background-position:center;
      background-size:cover;
      height:100vh;
      width:100%;
      overflow:hidden;
      position:relative;
    }

    #sc2-outer-information-container{
      width:100%;
      position:absolute;
      top:60%;
      left:0;
    }

    #sc2-inner-information-container{
      width:600px;
      margin:0 auto;
    }

    #sc2-description-container{
      background-color:rgba(0,0,0,.4);
      border-radius:0 20px;
      padding:10px;
    }

    .sc2-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      color:rgba(0,0,0,.75);
      text-align:center;
      margin:0;
      color:white;
      text-shadow:2px 2px 2px rgba(0,0,0,.25);
    }

    .sc2-description{
     font-family:'abel';
     font-size:1.3em;
     color:rgba(0,0,0,.65);
     text-align:justify; 
     margin:0;
     color:white;
   }

   #sc2-scenary{
    width:100%;
    position:absolute;
    top:18vh;
    left:0;
  }

  .bottles{
    width:80%;
  }


  /* Retina-specific stuff here */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){
    #sc2-scenary{
      top:28%;
    }

    .bottles{
      width:60%;
    }
  }

  /*Styles for Med size screens*/
  @media only screen and (min-width: 40.063em) and (max-width: 64em) {
    #sc2-scenary{
      top:35%;
    }

    .bottles{
      width:80%;
    }
  }

  /*STYLES FOR SMALL/MOBILE SCREENS */
  @media only screen and (max-width: 40em) {
    #sc2-outer-information-container{
      top:20%;
      padding:5%;
    }

    #sc2-inner-information-container{
      width:100%;
      margin:0 auto;
    }

    .sc2-title{
      font-size:1.5em;
    }
    
    #sc2-description-container{
      border-radius:0 10px;
    }

    .sc2-description{
      font-size:1.2em;
      width:100%;
      text-align:justify;
    }

    #sc2-scenary{
      display:none;
    }
  }
</style>  
<!-- SCRIPT -->
<script>
  this.on('mount', function(){

  });
</script>
</scene2>