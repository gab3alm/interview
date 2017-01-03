<scene2>
  <!-- HTML MARKUP -->

  <div class="container-fluid">
    <div class="sc2-scene-container">


      <div class="row">
        <div class="col s12">

          <img class="bottles" src="public/images/scene2/bottles.svg" alt="">


          <div id="sc2-information-container" class="center-align">
            <p class="sc2-scene-title">
              types of interviews
            </p>
            <p class="sc2-scene-description">
              Knowing the different types of interviews that you may be facing makes it easy to prepare for them.
              Interviews types range from the general interview, a lunch interview protocol, telephone screening,
              competency based, multiple one to one, panel interview, role play, skype/facetime, presentation
            </p>
            <a href="#steps/interview-types" class="button button-3d button-caution button-pill">Learn More</a>
          </div>
        </div>
      </div>


    </div>  
  </div> 
  <!-- CSS RULES -->
  <style>
    .button{
      margin-top:10px;
    }

    .row, .col{
      padding:0 !important;
      margin:0 !important;
    }

    .sc2-scene-container{
      height:auto;
      min-height:calc(100vh - 50px);
      width:100%;
      background-color:rgba(0,0,0,.5);
      z-index:99;

      background-image:url('public/images/scene2/background.svg');
      background-size:cover;
      background-position:center;

      overflow:hidden;

      position:relative;
    }

    .sc2-app-title{
      width:100%;
      text-align:center;
      font-family:'pattaya';
      font-size:4em;
      text-transform: capitalize;
      color:white;
      text-shadow: 2px 2px 2px rgba(0,0,0,.5);
      margin-bottom:10px;
    }

    #sc2-information-container{
      width:100%;
      position:absolute;
      top:580px;
      left:0;
    }  

    .sc2-scene-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      color:rgba(0,0,0,.85);
      margin:0;
      text-align:center;
    }

    .sc2-scene-description{
      font-family:'abel';
      font-size:1.5em;
      color:rgba(0,0,0,.65);
      margin:0;
      text-align:center;
      padding:0 20% 0 20%;
    }

    .bottles{
      position:absolute;
      top:110px;
      left:10%;
      width:80%;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      #sc2-information-container{
        position:absolute;
        top:520px;
        left:0%;
        width:100%;
      }

      .sc2-scene-description{
        font-family:'abel';
        font-size:1.5em;
        color:rgba(0,0,0,.65);
        margin:0;
        text-align:justify;
        padding:0 10% 0 10%;
      }

      .bottles{
        position:absolute;
        top:230px;
        left:0%;
        width:100%;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #sc2-information-container{
        /*margin-top:50px;*/
        top:50px;
        left:0;
      }

      .sc2-scene-title{
        font-size:1.5em;
      }

      .sc2-scene-description{
        font-size:1.2em;
        margin:0;
        text-align:justify;
        padding:0 5% 0 5%;
      }

      .bottles{
        display:none;
      }

    }

  </style>
  <!-- SCRIPTS & STUFF -->
  <script>

    this.on('mount', function(){
      var $node = $(this.root);
    });

  </script>
</scene2>