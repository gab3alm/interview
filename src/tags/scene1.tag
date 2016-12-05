<scene1>
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- PRESENTATION MARKUP - BEGIN                 -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <div class="container-fluid" id="scene1">
    <div id="snowflakeContainer" class="hide-on-small-only">
      <p class="snowflake">.</p>
      <!-- <p class="snowflake">&#10052;</p> -->
    </div>

    <!-- page title -->
    <div class="row center-align">
      <h1 class="app-title flow-text">successful interviewing</h1>
    </div>

    <!-- page description -->
    <div class="row">
      <div class="col s12 m12 l6">
        <section id="scene-info-container">
          <p class="sc-title flow-text"> {scene.title} </p>
          <p class="sc-description flow-text"> {scene.description} </p>
          <!-- <a class="waves-effect waves-light btn right"><i class="material-icons right">forward</i>Learn More</a>   -->
          <a href="/#start-job-search" class="button button-3d button-caution button-pill">Learn More</a>
          <!-- <a href="#!" class="button button-glow button-rounded button-caution">Learn More</a> -->
        </section>
      </div>
    </div>

    <!-- page graphics -->
    <div class="row center-align">
      <div class="col s12">
        <section id="graphics-container">
          <img class="cubes animated slideInLeft" src="src/images/scene1/cubes.svg" alt="">
          <img class="ice-cream animated slideInRight" src="src/images/scene1/podium.svg" alt="">
        </section>
      </div>
    </div>

    <!-- next scene button -->
    <div class="row">
      <div class="col s12">
        <div class="next-scene-btn-container animated bounce">
          <i id="sc1-next-btn" class="material-icons next-scene-btn tooltipped" data-position="top" data-delay="25" data-tooltip="Scroll Down">arrow_drop_down_circle</i>
        </div>
      </div>
    </div>
  </div>

  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- STYLES BEGIN                                -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <style>
    #snowflakeContainer {
      position: absolute;
      left: 0px;
      top: 0px;
    }

    .snowflake {
      padding-left: 15px;
      font-size: 20px;
      line-height: 24px;
      position: fixed;
      color: rgba(255,255,255,.5) !important;
      user-select: none;
      z-index:999;

      /*user cant interact with snowflake*/
      /*no clicking or dragging*/
      user-drag: none; 
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    .snowflake:hover {
      cursor: default;
    }

    #scene1{
      position:relative;
      /*border:2px solid red;*/
      /*height:100vh;*/
      height:calc(101vh - 55px - 64px);
      /*height:calc(100vh - 55px);*/
      background-image:url('src/images/scene1/background2.svg');
      background-size:cover;
      background-position:center;
      width:auto;
      overflow:hidden !important;
    }

    .app-title{
      color:white;
      text-shadow:2px 2px 2px rgba(0,0,0,.5);
      font-family:'pattaya';
      font-size:2.5em;
      text-transform:capitalize;
      margin:0px;
      padding:20px;
    }

    #scene-info-container{
      padding:0px 10px 0px 0px;
      margin:0px 0px 0px 15%;
    }

    .sc-title{
      color:white;
      text-shadow:1px 1px 1px rgba(0,0,0,.5);
      font-family:'pattaya';
      font-size:2em;
      text-transform:capitalize;
      margin:0px;
    }

    .sc-description{
      color:white;
      font-family:'abel';
      font-size:1.3em;
      text-align:left;
      margin:0px 0px 10px 0px;
    }

    #graphics-container{
      position:relative;
      /*border:2px solid green;*/
    }

    .cubes{
      height:45%;
      width:45%;
      display:inline-block;
      margin:0px 100px 0px 0px;
    }

    .ice-cream{
      height:20%;
      width:20%;  
      display:inline-block;
    }

    .next-scene-btn-container{
      width:100%;
      text-align:center;
      position:absolute;
      /*55px becuase i'm accomodating the footer height*/
      bottom:10px;
      left:0px; 
      animation-duration: 2s;
    }

    .next-scene-btn{
      transition: all .5s ease-out;
      font-size:2.7em;
      color:rgba(255,255,255,.5);
    }

    .next-scene-btn:hover{
      transition: all .5s ease-out;
      font-size:3.5em;
      color:rgba(255,255,255,1);
      cursor:pointer;
    }

    /*Styles for Med size screens*/
    /* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      #scene-info-container{
        padding:0px 20px 0px 0px;
        margin:0px;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #scene-info-container{
        padding:0px 20px 0px 0px;
        margin:0px;
      }
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
      title:'starting a job search',
      description:
      `The CSUN Career Center Website has made the job hunting process a bit easier. 
      SUNlink lists jobs and connects students to companies looking specifically hire CSUN students, 
      and Pathways links your area of study or desired occupations to relevant companies that are hiring.
      `
    };
  </script>
  <script src="src/js/snow.js"></script>
</scene1>
