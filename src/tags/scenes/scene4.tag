<scene4>
  <!-- HTML MARKUP -->
  <section id="scene4-container">

    <div id="sc4-information-container" class="center-align">
      <p class="sc4-scene-title">acing the interview</p>
      <p class="sc4-scene-description">
        By preparing properly beforehand, as opposed to leaving it to the last minute, you can avoid extra stress the night before an important interview.
      </p>
      <a href="#steps/ace-the-interview" class="button button-3d button-caution button-pill">Learn More</a>
    </div>


    <div id="sc4-scenary-container">
      <img class="sc4-jelly" src="public/images/scene4/jelly.svg" alt="">
      <img class="sc4-cream" src="public/images/scene4/cream.svg" alt="">
      <img class="sc4-mustard" src="public/images/scene4/mustard.svg" alt="">
      <img class="sc4-ketchup" src="public/images/scene4/ketchup.svg" alt="">
      <img class="sc4-desk" src="public/images/scene4/desk.svg" alt="">
    </div>

  </section>
  <!-- CSS RULES -->
  <style> 
    /*||||||||||||||||||||||||||*/
    .sc4-desk{
      height:360px;
      position:absolute;
      bottom:50px;
      left:50px;
    }

    .sc4-jelly{
      height:350px;
      position:absolute;
      bottom:30%;
      right:40%;
    }

    .sc4-cream{
      height:350px;
      position:absolute;
      bottom:20%;
      right:30%;
    }

    .sc4-mustard{
      height:350px;
      position:absolute;
      bottom:10%;
      right:15%;
    }

    .sc4-ketchup{
      height:350px;
      position:absolute;
      bottom:0%;
      right:5%;
    }
    /*||||||||||||||||||||||||||*/

    #scene4-container{
      height:100vh;
      width:100%;
      overflow:hidden;
      background-color:rgba(0,0,0,.8);
      background-image:url('public/images/scene4/background.svg');
      background-size:cover;
      background-position: center;
    }

    #sc4-scenary-container{
      position:relative;
      /*border:2px solid green;*/
      height:600px;
    }

    #sc4-information-container{
      /*border:2px solid green;*/
      padding:0 15% 0 15%;
      margin-top:100px;
    }

    .sc4-scene-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      margin:0 0 10px 0;
    }

    .sc4-scene-description{
      font-family:'abel';
      font-size:1.5em;
      margin:0 0 10px 0;
      text-align:center;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      #sc4-scenary-container{
        height:550px;
      }

      #sc4-information-container{
        padding:0 8% 0 8%;
      }

      .sc4-scene-description{
        text-align:justify;
      }

      .sc4-desk{
        height:260px;
        position:absolute;
        bottom:50px;
        left:50px;
      }

      .sc4-jelly{
        height:250px;
        position:absolute;
        bottom:30%;
        right:40%;
      }

      .sc4-cream{
        height:250px;
        position:absolute;
        bottom:20%;
        right:30%;
      }

      .sc4-mustard{
        height:250px;
        position:absolute;
        bottom:10%;
        right:15%;
      }

      .sc4-ketchup{
        height:250px;
        position:absolute;
        bottom:0%;
        right:5%;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #sc4-scenary-container{
        display:none;
      }

      #sc4-information-container{
        padding:0 5% 0 5%;
        margin-top:80px;
      }

      .sc4-scene-title{
        font-size:1.5em;
      }

      .sc4-scene-description{
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
</scene4>
