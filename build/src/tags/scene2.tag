<scene2>
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- PRESENTATION MARKUP - BEGIN                 -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <div class="container-fluid" id="scene2">
    <!-- <div id="snowflakeContainer" class="hide-on-small-only">
      <p class="snowflake">&#10052;</p>
    </div> -->
    <!-- page graphics -->
    
    <div class="row">
      <div class="col s12">
        <section id="graphics-container">
          <img class="element skype" src="src/images/scene2/skype.svg">
          <img class="element naked" src="src/images/scene2/naked.svg">
          <img class="element coconut" src="src/images/scene2/coconut.svg">
          <img class="element orangejuice" src="src/images/scene2/orangejuice.svg">
          <img class="element starbucks" src="src/images/scene2/starbucks.svg">
          <img class="element gatorade" src="src/images/scene2/gatorade.svg">
          <img class="element monster" src="src/images/scene2/monster.svg">
          <img class="element coke" src="src/images/scene2/coke.svg">
          <img class="element cola" src="src/images/scene2/cola.svg">
        </section>
      </div>
    </div>

    <!-- page description -->
    <div class="row center-align">
      <div class="col s12">
        <section id="scene-info-container">
          <p class="sc-title flow-text"> {scene.title} </p>
          <p class="sc-description flow-text"> {scene.description} </p>
          <!-- <a class="waves-effect waves-light btn"><i class="material-icons right">forward</i>Learn More</a>   -->
          <a href="/#interview-types" class="button button-3d button-caution button-pill">Learn More</a>
        </section>
      </div>
    </div>
    

    <!-- next scene button -->
    <div class="row">
      <div class="col s12">
        <div class="next-scene-btn-container animated bounce">
          <i id="sc2-next-btn" class="material-icons next-scene-btn tooltipped" data-position="top" data-delay="25" data-tooltip="Scroll Down">arrow_drop_down_circle</i>
        </div>
      </div>
    </div>
  </div>

  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- STYLES BEGIN                                -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <style>
    #scene2{
      position:relative;
      height:calc(101vh - 45px);
      /*height:calc(100vh - 55px);*/
      background-image:url('src/images/scene2/background.svg');
      background-size:cover;
      background-position:center;
      overflow:hidden;
      z-index:1000;
    }

    #scene-info-container{
      /*border:2px solid green;*/
      /*padding:0px 10px 0px 0px;*/
      /*margin:0px 0px 0px 15%;*/
    }

    .sc-title{
      color:rgba(0,0,0,.85);
      /*text-shadow:1px 1px 1px rgba(0,0,0,.5);*/
      font-family:'pattaya';
      font-size:2em;
      text-transform:capitalize;
      margin:0px;
    }

    .sc-description{
      padding:0px 10% 0px 10%;
      color:rgba(0,0,0,.65);
      font-family:'abel';
      font-size:1.3em;
      /*text-align:left;*/
      margin:0px 0px 10px 0px;
    }

    .next-scene-btn-container{
      width:100%;
      text-align:center;
      position:absolute;
      /*55px becuase i'm accomodating the footer height*/
      bottom:1%;
      left:0px; 
      animation-duration: 2s;
    }

    .next-scene-btn{
      transition: all .5s ease-out;
      font-size:2.7em;
      color:rgba(255,255,255,.5);
    }

    .next-scene-btn:hover{
      -webkit-backface-visibility: hidden;
      transition: all .5s ease-out;
      font-size:3.5em;
      color:rgba(255,255,255,1);
      cursor:pointer;
    }

    #graphics-container{
      /*border:2px solid green;*/
      position:relative;
      height:60vh;
      width:100%;
    }

    .element{
      position:absolute;
      /*border:2px solid pink;*/
      width:11%;
      padding:0px;
      margin:0px;
    }

    .cola{
      /*height:80%;*/
      bottom:0px;
      left:88%;
    }
    
    .naked{
      /*height:40%;*/
      bottom:0px;
      left:11%; 
    }

    .starbucks{
      /*height:45%;*/
      bottom:0px;
      left:44%; 
    }

    .gatorade{
      /*height:55%;*/
      bottom:0px;
      left:55%; 
    }

    .skype{
      /*height:30%;*/
      bottom:0px;
      left:0; 
    }

    .coke{
      /*height:60%;*/
      bottom:0px;
      left:77%;
    }

    .monster{
      /*height:50%;*/
      bottom:0px;
      left:66%;
    }

    .coconut{
      /*height:45%;*/
      bottom:0px;
      left:22%;
    }

    .orangejuice{
      /*height:45%;*/
      bottom:0;
      left:33%;
    }

    /*Styles for Med size screens*/
    /* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      #graphics-container{
        height:30%;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
    }

  </style>


  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- SCRIPTS BEGIN - LOGIC                       -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <script>
    // right after the tag is mounted on the page
    this.on('mount', function() {
      var $node = $(this.root);
      $node.find('.tooltipped').tooltip({delay: 25});
    })

    this.scene = 
    {
      title:'types of interviews',
      description:
      `
      Knowing the different types of interviews that you may be facing makes it easy to prepare for them. 
      Interviews types range from the general interview, a lunch interview protocol, telephone screening,
      competency based, multiple one to one, panel interview, role play, skype/facetime, presentation
      `
    };
  </script>

</scene2>