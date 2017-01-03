<scene1>
  <!-- HTML MARKUP -->

  <div class="container-fluid">
   <div class="row">
     <div class="col s12">
       <div class="scene-container">

        <p class="app-title">successful interviewing</p>
        <div id="information-container">

          <p class="scene-title">
            starting a job search
          </p>
          <p class="scene-description">
            The CSUN Career Center Website has made the job hunting process a bit easier. 
            SUNlink lists jobs and connects students to companies looking specifically hire CSUN students, 
            and Pathways links your area of study or desired occupations to relevant companies that are hiring.
          </p>
          <a href="#steps/starting-job-search" class="button button-3d button-caution button-pill">Learn More</a>
        </div>

        <img class="cubes" src="public/images/scene1/cubes.svg" alt="graduation cubes">
        <img class="icecream" src="public/images/scene1/podium.svg" alt="ice cream dude">

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

  .scene-container{
    height:auto;
    min-height:calc(100vh - 50px);
    width:100%;
    background-color:rgba(0,0,0,.5);
    z-index:99;

    background-image:url('public/images/scene1/background2.svg');
    background-size:cover;
    background-position:center;

    overflow:hidden;
  }

  .app-title{
    width:100%;
    text-align:center;
    font-family:'pattaya';
    font-size:4em;
    text-transform: capitalize;
    color:white;
    text-shadow: 2px 2px 2px rgba(0,0,0,.5);
    margin-bottom:10px;
  }

  #information-container{
    /*border:2px solid green;*/
    width:45%;
    margin-left:100px;
  }  

  .scene-title{
    font-family:'pattaya';
    font-size:2.5em;
    text-transform: capitalize;
    color:white;
    margin:0;
  }

  .scene-description{
    font-family:'abel';
    font-size:1.5em;
    color:white;
    margin:0;
    text-align:justify;
  }

  .cubes{
    height:20%;
    position:absolute;
    top:50%;
    left:10%;
  }

  .icecream{
   height:40%; 
   position:absolute;
   top:30%;
   right:10%;
 }
 /*Styles for Med size screens*/
 @media only screen and (min-width: 40.063em) and (max-width: 64em) {
  #information-container{
    width:80%;
    margin-left:20px;
  }

  .cubes{
    height:15%;
    position:absolute;
    top:55%;
    left:1%;
  } 

  .icecream{
    height:35%;
    position:absolute;
    top:35%;
    right:1%;
  }  
}

/*STYLES FOR SMALL/MOBILE SCREENS */
@media only screen and (max-width: 40em) {
  .app-title{
    font-size:2em;
    margin:60px 0 0 0;
  }

  #information-container{
    width:100%;
    margin:0;
    padding:20px;
  }

  .scene-title{
    font-size:1.5em;
  }

  .scene-description{
    font-size:1.2em;
    margin:0;
    text-align:justify;
  }

  .cubes, .icecream{
    display:none;
  }
}

</style>
<!-- SCRIPTS & STUFF -->
<script src="src/js/snow.js"></script>
<script>

  this.on('mount', function(){
    var $node = $(this.root);
    // SNOW STORM INCOMING!!! 
    // $.fn.snow();
  });

</script>
</scene1>