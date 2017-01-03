<scene3>
  <!-- HTML MARKUP -->
  <section id="scene3-container">

    <div id="sc3-scenary-container">
      <img src="public/images/scene3/cheesebed.svg" alt="" class="sc3-bed">
      <img src="public/images/scene3/glass.svg" alt="" class="sc3-glass">
      <img src="public/images/scene3/milk.svg" alt="" class="sc3-milk">
    </div>

    <div id="sc3-information-container">
      <p class="sc3-scene-title">preparing for an interview</p>
      <p class="sc3-scene-description">
        Once you have found an opportunity that appeals to you and is hiring, it is time to apply for a position!
        The keys to successful interviewing are preparation, like-ability, and bonding. There are several critical
        areas to consider and essential things to do in preparation for your interview.
      </p>
      <a href="#steps/interview-preparation" class="button button-3d button-caution button-pill">Learn More</a>
    </div>

  </section>
  <!-- CSS RULES -->
  <style> 
    #scene3-container{
      height:100vh;
      width:100%;
      overflow:hidden;
      background-color:rgba(0,0,0,.8);
      background-image:url('public/images/scene3/background.svg');
      background-size:cover;
      background-position: center;
    }

    #sc3-scenary-container{
      position:relative;
      /*border:2px solid green;*/
      height:600px;
    }

    .sc3-glass{
      position:absolute;
      bottom:0;
      left:2%;
      height:400px;
    }

    .sc3-bed{
      position:absolute;
      bottom:50px;
      left:50%;
      height:250px;
      transform:translate(-50%, 0);
    }

    .sc3-milk{
      position:absolute;
      bottom:0;
      right:0%;
      height:500px;
    }

    #sc3-information-container{
      /*border:2px solid green;*/
      padding:0 15% 0 15%;
    }

    .sc3-scene-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      margin:0 0 10px 0;
    }

    .sc3-scene-description{
      font-family:'abel';
      font-size:1.5em;
      margin:0 0 10px 0;
      text-align:left;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      .sc3-glass{
        height:250px;
      }

      .sc3-bed{
        height:150px;
      }

      .sc3-milk{
        height:350px;
      }

      #sc3-scenary-container{
        height:550px;
      }

      #sc3-information-container{
        padding:0 8% 0 8%;
      }

      .sc3-scene-description{
        text-align:justify;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #sc3-scenary-container{
        display:none;
      }

      #sc3-information-container{
        padding:0 5% 0 5%;
        margin-top:80px;
      }

      .sc3-scene-title{
        font-size:1.5em;
      }

      .sc3-scene-description{
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
</scene3>
