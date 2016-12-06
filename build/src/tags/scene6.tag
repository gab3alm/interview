<scene6>
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- PRESENTATION MARKUP - BEGIN                 -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <div class="container-fluid" id="scene6">

    <!-- page description -->
    <div class="row center-align">
      <div class="col s12">
        <section id="scene-info-container">
          <p class="sc-title flow-text"> {scene.title} </p>
          <p class="sc-description flow-text"> {scene.description} </p>
          <!-- <a class="waves-effect waves-light btn"><i class="material-icons right">forward</i>Learn More</a>   -->
          <a href="/#accepting-the-job" class="button button-3d button-caution button-pill">Learn More</a>
        </section>
      </div>
    </div>

    <!-- page graphics -->
    <div class="row">
      <div class="col s12">
        <section id="graphics-container">
          <img src="src/images/scene6/watermelon.svg" alt="" class="watermelon">
          <img src="src/images/scene6/pear.svg" alt="" class="pear">
          <img src="src/images/scene6/banana.svg" alt="" class="banana">
          <img src="src/images/scene6/orangeboy.svg" alt="" class="orangeboy">
          <img src="src/images/scene6/corn.svg" alt="" class="corn">
          <img src="src/images/scene6/broco.svg" alt="" class="brocoli">
        </section>
      </div>
    </div>    

    <!-- next scene button -->
    <div class="row">
      <div class="col s12">
        <div class="next-scene-btn-container animated bounce">
          <!-- <i id="sc6-next-btn" class="material-icons next-scene-btn tooltipped" data-position="top" data-delay="25" data-tooltip="Scroll Down">arrow_drop_down_circle</i> -->
        </div>
      </div>
    </div>
  </div>

  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- STYLES BEGIN                                -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <style>
    #scene6{
      position:relative;
      height:calc(101vh - 45px);
      /*height:calc(100vh - 55px);*/
      background-image:url('src/images/scene6/background.svg');
      background-size:cover;
      background-position:center;
      overflow:hidden;
      z-index:1000;
    }

    #scene-info-container{
      /*border:2px solid green;*/
      padding:0px 10% 0px 10%;
      margin:5% 0px 0px 0px;
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
      color:rgba(0,0,0,.65);
      font-family:'abel';
      font-size:1.3em;
      /*text-align:left;*/
      /*margin:0px 0px 10px 0px;*/
      /*padding:0px 10% 0px 10%;*/
    }

    .next-scene-btn-container{
      width:100%;
      text-align:center;
      position:absolute;
      /*55px becuase i'm accomodating the footer height*/
      bottom:5%;
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
      height:50vh;
      width:100%;
    }
    
    .watermelon{
      height:30%;
      position:absolute;
      bottom:2%;
      left:0;
    }
    
    .pear{
      height:60%;
      position:absolute;
      bottom:20%;
      left:20%;
    }
    
    .banana{
      height:65%;
      position:absolute;
      bottom:5%;
      left:40%;
    }

    .orangeboy{
      height:40%;
      position:absolute;
      bottom:10%;
      right:33%;
    }

    .corn{
      height:70%;
      position:absolute;
      bottom:25%;
      right:20%;
    }

    .brocoli{
      height:60%;
      position:absolute;
      bottom:10%;
      right:0;
    }
    

    /*Styles for Med size screens*/
    /* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      .watermelon{
        display:none;
      }

      .pear{
        display:none;
      }

      .banana{
        height:65%;
        position:absolute;
        bottom:5%;
        left:20%;
      }

      .orangeboy{
        height:40%;
        position:absolute;
        bottom:10%;
        right:20%;
      }

      .corn{
        display:none;
      }

      .brocoli{
        display:none;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      .watermelon{
        display:none;
      }

      .pear{
        display:none;
      }

      .banana{
        height:65%;
        position:absolute;
        bottom:5%;
        left:0%;
      }

      .orangeboy{
        height:40%;
        position:absolute;
        bottom:10%;
        right:0%;
      }

      .corn{
        display:none;
      }

      .brocoli{
        display:none;
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
      title:'accepting the job',
      description:
      `
      Congratulations! Once you have been hired, there are still some important 
      tips to getting started at your new place of employment.
      `
    };
  </script>
</scene6>