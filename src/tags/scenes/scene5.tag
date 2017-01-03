<scene5>
  <!-- HTML MARKUP -->
  <section id="scene5-container">

    <div id="sc5-information-container">
      <p class="sc5-scene-title">following up the interview</p>
      <p class="sc5-scene-description">
        Don't be nervous about following up the interview.
        Whether it is sending a thank you note for their time, a list of references, a call or email, they will appreciate your tenacity!
      </p>
      <a href="#steps/following-up-the-interview" class="button button-3d button-caution button-pill">Learn More</a>
    </div>


    <div id="sc5-scenary-container">
      <img src="public/images/scene5/waffer.svg" alt="" class="sc5-phone">
      <img src="public/images/scene5/shake.svg" alt="" class="sc5-icecream">
      <img src="public/images/scene5/chocolate.svg" alt="" class="sc5-cake">
      <img src="public/images/scene5/cheesecake.svg" alt="" class="sc5-cheesecake">
    </div>

  </section>
  <!-- CSS RULES -->
  <style> 
    /*||||||||||||||||||||||||||*/
    .sc5-phone{
      height:450px;
      position:absolute;
      bottom:60px;
      left:100px;
    }

    .sc5-icecream{
      height:400px;
      position:absolute;
      bottom:40%;
      right:50%;
    }

    .sc5-cake{
      height:400px;
      position:absolute;
      bottom:20%;
      right:22%;
    }

    .sc5-cheesecake{
      height:350px;
      position:absolute;
      bottom:5%;
      right:0%;
    }
    /*||||||||||||||||||||||||||*/

    #scene5-container{
      height:100vh;
      width:100%;
      overflow:hidden;
      background-color:rgba(0,0,0,.8);
      background-image:url('public/images/scene5/background.svg');
      background-size:cover;
      background-position: center;
    }

    #sc5-scenary-container{
      position:relative;
      /*border:2px solid green;*/
      height:600px;
    }

    #sc5-information-container{
      /*border:2px solid green;*/
      padding:0 15% 0 15%;
      margin-top:100px;
    }

    .sc5-scene-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      margin:0 0 10px 0;
    }

    .sc5-scene-description{
      font-family:'abel';
      font-size:1.5em;
      margin:0 0 10px 0;
      text-align:left;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      .sc5-phone{
        height:450px;
        position:absolute;
        bottom:60px;
        left:50px;
      }

      .sc5-icecream{
        height:250px;
        position:absolute;
        bottom:50%;
        right:45%;
      }

      .sc5-cake{
        height:300px;
        position:absolute;
        bottom:30%;
        right:10%;
      }

      .sc5-cheesecake{
        height:250px;
        position:absolute;
        bottom:10%;
        right:0%;
      }

      #sc5-scenary-container{
        height:550px;
      }

      #sc5-information-container{
        padding:0 8% 0 8%;
      }

      .sc5-scene-description{
        text-align:justify;
      }

    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #sc5-scenary-container{
        display:none;
      }

      #sc5-information-container{
        padding:0 5% 0 5%;
        margin-top:80px;
      }

      .sc5-scene-title{
        font-size:1.5em;
      }

      .sc5-scene-description{
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
</scene5>
