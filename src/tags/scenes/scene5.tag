<scene5>
  <!-- HTML -->
  <div id="sc5-container">
    <div class="container">

      <div id="outer-information-container"><!-- relative container -->


        <div id="sc5-inner-information-container"><!-- absolute container -->
          <p class="sc5-title">following up the interview</p>
          <div id="sc5-description-container">
            <p class="sc5-description">
              Don't be nervous about following up the interview. Whether it is sending 
              a thank you note for their time, a list of references, a call or email,
              they will appreciate your tenacity!
            </p>  
          </div>
          <a href="#steps/following-up-the-interview" class="cust-btn2 button button-3d button-action button-pill">learn more</a>
        </div>



        <div id="sc5-scenary-container"><!-- absolute container -->
          <img class="shake" src="public/images/scene5/shake.svg" alt="">
          <img class="chococake" src="public/images/scene5/chocolate.svg" alt="">
          <img class="cheesecake" src="public/images/scene5/cheesecake.svg" alt="">
          <img class="phonebooth" src="public/images/scene5/phonebooth.svg" alt="">
        </div>


      </div>

    </div>
  </div>
  <!-- CSS -->
  <style>
    #sc5-container{
      height:100vh;
      width:100%;
      background-image:url(public/images/scene5/background.svg);
      background-size:cover;
      background-position:center;
      overflow:hidden;
    }

    #outer-information-container{
      position:relative;
      height:100vh;
      width:100%;
    }

    #sc5-inner-information-container{
      position:absolute;
      top:5vh;
      left:0;
    }

    #sc5-description-container{
      background-color:rgba(0,0,0,.4);
      border-radius:0 20px;
      width:600px;
      padding:10px;
    }

    .sc5-title{
      font-family:'pattaya';
      font-size:2.5em;
      text-transform: capitalize;
      /*color:rgba(0,0,0,.75);*/
      color:rgba(0,0,0,.75);
      text-align:left;
      margin:0;
      /*text-shadow:2px 2px 2px rgba(0,0,0,.25);*/
    }

    .sc5-description{
      font-family:'abel';
      font-size:1.3em;
      color:rgba(0,0,0,.65);
      text-align:justify; 
      margin:0;
      color:white;
    }

    .cust-btn2{
      margin-top:10px;
      font-size:1.3em;
      color:rgba(255,255,255,.75) !important;
      text-shadow:1px 1px 1px rgba(0,0,0,.25);
      text-transform: capitalize;
      font-family:'pattaya';
    }


    .phonebooth{
      position:absolute;
      top:35vh;
      left:-25%;
      height:50vh;
      transform:translate(50%, 0);
    }

    .shake{
     position:absolute;
     top:25vh;
     right:50%;
     height:40vh;
   }

   .chococake{
     position:absolute;
     top:35vh;
     right:8%;
     height:40vh;
   }

   .cheesecake{
     position:absolute;
     top:55vh;
     right:-20%;
     height:30vh;
   }


   /* Retina-specific stuff here */
   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    #sc5-inner-information-container{
      left:-10%;
    }

    .phonebooth{
      left:-40%;
    }

    .shake{
     right:30%;
   }

   .chococake{
     right:-23%;
   }

   .cheesecake{
     right:-50%;
   }

   .sc5-description{
    font-size:1.5em;
  }

  #sc5-description-container{
    padding:20px 30px;
    width:750px;
  }
}

/*Styles for Med size screens*/
@media only screen and (min-width: 40.063em) and (max-width: 64em) {

  .phonebooth{
    left:-30%;
  }

  .shake{
   top:25vh;
   right:30%;
   height:40vh;
 }

 .chococake{
   top:35vh;
   right:-20%;
   height:40vh;
 }

 .cheesecake{
   top:60vh;
   right:-30%;
   height:30vh;
 }

}

/*STYLES FOR SMALL/MOBILE SCREENS */
@media only screen and (max-width: 40em) {
 .sc5-title{
  font-size:1.5em;
}

.sc5-description{
  font-size:1.2em;
  width:100%;
  text-align:justify;
}

#sc5-outer-information-container{
  width:100%;
}

#sc5-inner-information-container{
  left:0;
  top:12vh;

}

#sc5-description-container{
  border-radius:0 10px;
  width:100%;
}

#sc5-scenary-container{
  display:none;
}
}

</style>
<!-- SCRIPTS -->
<script>
  this.on('mount', function(){

  });
</script>
</scene5>