<subscene1>
  <!-- HTML MARKUP -->

  <div class="container-fluid">

    <!-- <button class="btn btn-large return-btn red lighten-1"><a href="#steps">Return</a></button> -->

    <section id="scenary">
      <div class="row">
        <div class="col s12">
          <img class="floor" src="public/images/subscene1/floor1.svg" alt="">
          <img class="cubes" src="public/images/subscene1/tray.svg" alt="">
          <img class="icecream" src="public/images/subscene1/icecream.svg" alt="">
        </div>
      </div>  
    </section>


    <section id="scene-intro">
      <div class="row">
        <div class="col s12">
          <p class="fancy"><span>starting a job search</span></p>
          <p class="description">
            From Pathways to SUNlink, the CSUN Career Center Website has made the job hunting process a bit easier. 
            SUNlink lists jobs and connects students to companies looking specifically hire CSUN students, and Pathways
            links your area of study or desired occupations to relevant companies that are hiring. By browsing these
            job search databases, you can get a better feel for what opportunities are out there. 
          </p>
          <div id="tips-container">
            <img class="tips" src="public/images/subscene1/tips.svg" alt="">
          </div>

        </div>
      </div>
    </section>


    <section id="tips3">
      <div class="row center-align">
        <div class="col s12 m4">
          <img class="tip-image" src="public/images/subscene1/bubble1.svg" alt="">
        </div>
        <div class="col s12 m4">
          <img class="tip-image" src="public/images/subscene1/bubble2.svg" alt="">
        </div>
        <div class="col s12 m4">
          <img class="tip-image" src="public/images/subscene1/network.svg" alt="">
        </div>
      </div>
    </section>

    <section id="additional-info">
      <div class="row">
        <p class="fancy"><span>more resources!</span></p>
      </div>

      <div class="row center-align">
        <div class="col s12 m4">
          <a target="_blank" href="http://www.csun.edu/career">
            <img class="resource" src="public/images/logo3.svg" alt="">
          </a>
          <p class="resource-title">CSUN CAREER CENTER</p>
          <p class="resource-title">www.csun.edu/career</p>
        </div>

        <div class="col s12 m4">
          <a target="_blank" href="https://pathways.studentaffairs.csun.edu/login">
            <img class="resource" src="public/images/subscene1/placeholder.svg" alt="">
          </a>
          <p class="resource-title">PATHWAYS</p>
          <p class="resource-description">
            Pathways contains valuable career information and resources that
            allow students to find a sense of purpose and become job search ready.
          </p>
        </div>

        <div class="col s12 m4">
          <a target="_blank" href="https://csun-csm.symplicity.com/students">
            <img class="resource" src="public/images/subscene1/placeholder.svg" alt="">
          </a>
          <p class="resource-title">SUNlink</p>
          <p class="resource-description">
            SUNlink is our online job board and career services system through which
            students can apply for jobs or internships, sign up for events or conduct practice interviews.
          </p>
        </div>

      </div>
    </section>

  </div> 
  <!-- CSS RULES -->
  <style>
    .return-btn{
      position:fixed;
      top:20%;
      left:10px;
      z-index:101;

      border-radius: 50%;
      height:80px;
      width:80px;
      padding:0;
      margin:0;
    }
    /*|||||||||||||||||||||||||||||||*/
    .fancy {
      font-family:'pattaya';
      font-size:3em;
      text-transform:capitalize;
      line-height: 0.4;
      text-align: center;
    }
    .fancy span {
      display: inline-block;
      position: relative;  
    }
    .fancy span:before,
    .fancy span:after {
      content: "";
      position: absolute;
      height: 10px;
      border-bottom: 2px solid rgba(0,0,0,.25);
      border-top: 2px solid rgba(0,0,0,.25);
      top: 0;
      width: 600px;
    }
    .fancy span:before {
      right: 100%;
      margin-right: 15px;
    }
    .fancy span:after {
      left: 100%;
      margin-left: 15px;
    }
    /*||||||||||||||||||||||||||||||||*/
    .description{
      font-family:'abel';
      font-size:1.5em;
      color:rgba(0,0,0,.75);
      padding:0 20% 0 20%;
      text-align:justify;
    }

    .row, .col{
      padding:0 !important;
      margin:0 !important;
    }

    #scenary{
      position:relative;
      background-color:rgba(0,0,0,.5);
      height:500px;
      background-image:url('public/images/subscene1/background3.svg');
      background-size:cover;
      background-position:center;
      overflow:hidden;
    }

    #scene-intro{
      background-color:#B4D8EF;
      min-height:620px;
      height:auto;
      width:100%;
      overflow:hidden;
    }

    #tips3{
      min-height:300px;
      height:auto;
      width:100%;
      background-color:white;
      overflow:hidden;
    }

    #additional-info{
      background-color:#B4D8EF;
      min-height:500px;
      height:auto;
      width:100%;
      overflow:hidden;
    }

    .floor{
      position:absolute;
      bottom:0;
      left:0;
    }

    .cubes{
      position:absolute;
      top:80px;
      left:15%;
      height:60%;
    }

    .icecream{
      position:absolute;
      top:80px;
      right:25%;
      height:60%; 
    }

    .tip-image{
      width:80%;
      padding:10%;
    }

    .resource{
      width:25%;
      margin-top:20px;
    }

    .resource-title{
      font-family:'abel';
      font-size:1.5em;
      font-weight: bold;
      margin:0;
    }

    .resource-description{
      font-family:'abel';
      font-size:1.4em;
      padding:0 10% 0 10%;
      text-align: left;
    }

    #tips-container{
      position:relative;
    }

    .tips{
      position:absolute;
      top:0;
      left:50%;
      transform:translate(-50%, 0);
      height:250px;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em){
      .floor{
        height:50%;
      }

      .cubes{
        top:180px;
        left:5%;
        height:40%;
      }

      .icecream{
        top:180px;
        right:10%;
        height:40%; 
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #scenary{
        height:250px;
      }

      .floor{
        height:50%;
      }

      .cubes{
        position:absolute;
        top:120px;
        left:5%;
        height:30%;
      }

      .icecream{
        position:absolute;
        top:120px;
        right:10%;
        height:30%; 
      }

      .fancy {
        font-size:1em;
      }

      .fancy span:before,
      .fancy span:after {
        height: 5px;
        border-bottom: 1px solid rgba(0,0,0,.25);
        border-top: 1px solid rgba(0,0,0,.25);
      }

      #scene-intro{
        min-height:450px;
      }

      #additional-info{
        min-height:800px;
      }

      .description{
        font-size:1em;
        color:rgba(0,0,0,.75);
        padding:0 10% 0 10%;
        text-align:justify;
      }

      .tips{
        height:150px;
      }

      .resource-title{
        font-size:1.5em;
        margin:0;
      }

      .resource-description{
        font-size:1em;
        padding:0 10% 0 10%;
        text-align: justify;
      }
    }
  </style>
  <!-- SCRIPTS & STUFF -->
  <script>

    this.on('mount', function(){
      var $node = $(this.root);
    });

  </script>
</subscene1>