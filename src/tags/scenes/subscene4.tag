<subscene4>
  <!-- HTML MARKUP -->

  <div class="container-fluid">

    <!-- <button class="btn btn-large return-btn red lighten-1"><a href="#steps">Return</a></button> -->

    <section id="scenary">
      <div class="row">
        <div class="col s12">
          <img class="jelly" src="public/images/scene4/jelly.svg" alt="">
          <img class="cream" src="public/images/scene4/cream.svg" alt="">
          <img class="mustard" src="public/images/scene4/mustard.svg" alt="">
          <img class="ketchup" src="public/images/scene4/ketchup.svg" alt="">
          <img class="desk" src="public/images/scene4/desk.svg" alt="">
        </div>
      </div>  
    </section>


    <section id="scene-intro">
      <div class="row">
        <div class="col s12">
          <p class="fancy"><span>Acing the interview</span></p>
          <p class="description">
            The keys to successful interviewing are preparation, like-ability, and bonding. There are several
            critical areas to consider and essential things to do in preparation for your interview.
          </p>
        </div>
      </div>
    </section>

    <section id="tips">
      <div class="row">

        <virtual each={tips}>
          <div class="col s12 m4">
            <div class="center-align">
              <img src={image} alt="" class="tip-image">
            </div>
            <div class="tip-container">
              <p class="tip-title">{title}</p>
              <p class="tip-description">{description}</p>
            </div>
          </div>  
        </virtual>
        
      </div>
    </section>

  </div> 
  <!-- CSS RULES -->
  <style>

    #tips{
      width:100%;
      overflow:hidden;
      /*border:2px solid green;*/
      padding:20px;
    }

    .tip-image{
      height:200px;
    }

    .tip-container{
      background-color:rgba(0,0,0,.15);
      border-radius: 20px;
      padding:5% 15% 5% 15%;
      margin:5%;
      min-height:450px;
    }

    .tip-title{
      font-family:'pattaya';
      font-size:1.8em;
      text-transform: capitalize;
      text-align:center;
      margin:0;
    }
    
    .tip-description{
      font-family:'abel';
      font-size:1.2em;
      text-align:justify;
      margin:10px 0 0 0;
    }


    .desk{
      position:absolute;
      bottom:100px;
      left:50px;
      height:300px;
    }

    .jelly{
      position:absolute;
      bottom:35%;
      right:40%;
      height:300px;
    }

    .cream{
      position:absolute;
      bottom:30%;
      right:30%;
      height:330px;
    }

    .mustard{
      position:absolute;
      bottom:20%;
      right:15%;
      height:350px;
    }

    .ketchup{
      position:absolute;
      bottom:10%;
      right:5%;
      height:350px;
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
      text-align:center;
      margin:5px;
    }

    .row, .col{
      padding:0 !important;
      margin:0 !important;
    }

    #scenary{
      position:relative;
      background-color:rgba(0,0,0,.5);
      height:500px;
      background-image:url('public/images/scene4/background.svg');
      background-size:cover;
      background-position:center;
      overflow:hidden;
    }

    #scene-intro{
      /*background-color:#B4D8EF;*/
      background-color:white;
      min-height:200px;
      height:auto;
      width:100%;
      overflow:hidden;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em){
      .tip-container{
        padding:20px;
        min-height:600px;
      }

      .tip-title{
        font-size:1.5em;
        text-align:center;
      }

      .tip-description{
        text-align:center;
        margin:10px 0 0 0;
      }

      .desk{
        bottom:100px;
        left:50px;
        height:250px;
      }

      .jelly{
        position:absolute;
        bottom:35%;
        right:40%;
        height:250px;
      }

      .cream{
        position:absolute;
        bottom:30%;
        right:28%;
        height:230px;
      }

      .mustard{
        position:absolute;
        bottom:20%;
        right:10%;
        height:250px;
      }

      .ketchup{
        position:absolute;
        bottom:10%;
        right:0%;
        height:250px;
      } 




      .description{
        padding:0 5% 0 5%;
      }

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

    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #tips{
        padding:10px;
      }

      .tip-image{
        height:150px;
      }

      .tip-container{
        padding:5%;
        min-height:200px;
      }

      .tip-title{
        font-family:'pattaya';
        font-size:1.5em;
        text-transform: capitalize;
        text-align:center;
        margin:0;
      }

      .tip-description{
        font-family:'abel';
        font-size:1.2em;
        text-align:center;
        margin:10px 0 0 0;
      }

      .desk{
        bottom:50px;
        left:10px;
        height:120px;
      }

      .jelly{
        position:absolute;
        bottom:35%;
        right:50%;
        height:110px;
      }

      .cream{
        position:absolute;
        bottom:30%;
        right:35%;
        height:100px;
      }

      .mustard{
        position:absolute;
        bottom:25%;
        right:15%;
        height:90px;
      }

      .ketchup{
        position:absolute;
        bottom:20%;
        right:0%;
        height:90px;
      } 

      #scenary{
        min-height:250px;
        height:auto;
      }

      .fancy {
        font-size:1.8em;
      }

      .fancy span:before,
      .fancy span:after {
        height: 5px;
        border-bottom: 1px solid rgba(0,0,0,.25);
        border-top: 1px solid rgba(0,0,0,.25);
      }

      #scene-intro{
        min-height:150px;
      }

      .description{
        font-size:1em;
        color:rgba(0,0,0,.75);
        padding:0 5% 0 5%;
        text-align:center;
        margin:0;
      }

    }
  </style>
  <!-- SCRIPTS & STUFF -->
  <script>

    this.on('mount', function(){
      var $node = $(this.root);
    });


    this.tips = [
    {
      title:'the night before',
      description:
      `
      By preparing properly beforehand, as opposed to leaving it to the last minute, you can avoid extra stress the night before.
      Simply make sure your clothing is laid out and ready to go and that you have all necessary materials 
      (a copy of your resume, identification, paper for taking any notes or jotting down pertinent information). 
      You can only prepare so much, and over-preparation lends itself to stiffness and unease. 
      Just try your best to get a good night’s sleep and have a healthy breakfast beforehand.
      `,
      image:'public/images/subscene4/night.svg'
    },
    {
      title:'first impressions count!',
      description:
      `
      Arrive at least 15 minutes before your interview. Know that the first person that you encounter (receptionist) is already interviewing you.
      Remember, your interview begins before you sit down with the potential employer. Greet everyone, including the receptionist, in a positive 
      and professional manner. The decision to hire, or not to hire, is often made early in the interview. The decision made by the interviewer is
      largely subjective. It can revolve around whether you fit the office "culture" or if you have a strength an employer is seeking.
      `,
      image:'public/images/subscene4/impression.svg'
    },
    {
      title:'once you begin the interview',
      description:
      `
      make eye-contact and show attentiveness to whomever is interviewing you. Employers are looking for potential candidates who feel 
      confident in their proposed position. Fidgeting and nervous behavior can give off the wrong impression
      `,
      image:'public/images/subscene4/begin.svg'
    },
    ];
  </script>
</subscene4>