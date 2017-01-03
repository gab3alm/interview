<scene6>
  <!-- HTML MARKUP -->
  <section id="scene6-container">

    <div id="sc6-information-container" class="center-align">
      <p class="sc6-scene-title">accepting the job</p>
      <p class="sc6-scene-description">
        Congratulations! 
        Once you have been hired, there are still some important tips to getting started at your new place of employment.
      </p>
      <a href="#steps/accepting-the-job" class="button button-3d button-caution button-pill">Learn More</a>
    </div>


    <div id="sc6-scenary-container">
    </div>

  </section>
  <!-- CSS RULES -->
  <style> 
    /*||||||||||||||||||||||||||*/
    .sc6-phone{
      height:450px;
      position:absolute;
      bottom:60px;
      left:100px;
    }

    .sc6-icecream{
      height:400px;
      position:absolute;
      bottom:40%;
      right:50%;
    }

    .sc6-cake{
      height:400px;
      position:absolute;
      bottom:20%;
      right:22%;
    }

    .sc6-cheesecake{
      height:350px;
      position:absolute;
      bottom:5%;
      right:0%;
    }
    /*||||||||||||||||||||||||||*/

    #scene6-container{
      height:100vh;
      width:100%;
      overflow:hidden;
      background-color:rgba(0,0,0,.8);
      background-image:url('public/images/scene6/background.svg');
      background-size:cover;
      background-position: center;
    }

    #sc6-scenary-container{
      position:relative;
      /*border:2px solid green;*/
      height:600px;
    }

    #sc6-information-container{
      /*border:2px solid green;*/
      padding:0 15% 0 15%;
      margin-top:100px;
    }

    .sc6-scene-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      margin:0 0 10px 0;
    }

    .sc6-scene-description{
      font-family:'abel';
      font-size:1.5em;
      margin:0 0 10px 0;
      text-align:center;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      .sc6-phone{
        height:450px;
        position:absolute;
        bottom:60px;
        left:50px;
      }

      .sc6-icecream{
        height:250px;
        position:absolute;
        bottom:50%;
        right:45%;
      }

      .sc6-cake{
        height:300px;
        position:absolute;
        bottom:30%;
        right:10%;
      }

      .sc6-cheesecake{
        height:250px;
        position:absolute;
        bottom:10%;
        right:0%;
      }

      #sc6-scenary-container{
        height:550px;
      }

      #sc6-information-container{
        padding:0 8% 0 8%;
      }

      .sc6-scene-description{
        text-align:justify;
      }

    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #sc6-scenary-container{
        display:none;
      }

      #sc6-information-container{
        padding:0 5% 0 5%;
        margin-top:80px;
      }

      .sc6-scene-title{
        font-size:1.5em;
      }

      .sc6-scene-description{
        font-size:1.2em;
        text-align:justify;
      }    
    }
  </style>
  <!-- SCRIPT STUFF -->
  <script>
    this.on('mount', function(){
      var $node = $(this.root);
    });
  </script>
</scene6>
