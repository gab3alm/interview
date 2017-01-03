<subscene3>
  <!-- HTML MARKUP -->

  <div class="container-fluid">

    <!-- <button class="btn btn-large return-btn red lighten-1"><a href="#steps">Return</a></button> -->

    <section id="scenary">
      <div class="row">
        <div class="col s12">
          <img src="public/images/scene3/cheesebed.svg" class="subsc3-bed" alt="">
          <img src="public/images/scene3/glass.svg" class="subsc3-glass" alt="">
          <img src="public/images/scene3/milk.svg" class="subsc3-milk" alt="">
        </div>
      </div>  
    </section>


    <section id="scene-intro">
      <div class="row">
        <div class="col s12">
          <p class="fancy"><span>preparation for an interview</span></p>
          <p class="description">
            The keys to successful interviewing are preparation, like-ability, and bonding. There are several
            critical areas to consider and essential things to do in preparation for your interview.
          </p>
        </div>
      </div>
    </section>

    <section id="preparation-steps">
      <div class="row">

        <virtual each={preparation_steps}>
          <div class="col s12 m4">
            <div class="prep-step-card center-align">
              <img class="prep-step-image" src={image} alt="">
              <div class="information-box">
                <p class="prep-step-title">{title}</p>
                <p class="prep-step-description">{description}</p>
              </div>
            </div>
          </div>
        </virtual>

      </div>
    </section>


    <section id="feedback">
      <div class="row">
        <div class="col s12">
          <p class="fancy"><span>hearing back from employers</span></p>
        </div>
      </div>

      <div id="subsc3-tips">
        <div class="row">
          <div class="col s12 m3">
            <img class="feedback-image" src="public/images/subscene3/patience.svg" alt="">
          </div>
          <div class="col s12 m9">
            <p class="feedback-description">
              They say patience is a virtue, but that can be difficult to remember when waiting to hear back from an 
              employer. Try your best to focus on other things, or even keep applying to opportunities. 
            </p>

            <p class="feedback-description">
              After a week, it is always appropriate to call and check the status of their application. This is less
              about finding out immediately if they’d like to schedule an interview so much as it lets your potential 
              employer know of your continued interest and initiative. 
            </p>
          </div>
        </div>


        <div class="row">
          <div class="col s12 m3 push-m9">
            <img class="feedback-image" src="public/images/subscene3/schedule.svg" alt="">
          </div>
          <div class="col s12 m9 pull-m2">
            <p class="feedback-description">
              Sometimes it’s through an email and other times over the phone, but hearing back from an employer that they’d 
              like to schedule an interview is very exciting. Many times, employers will give a range of dates and times.
            </p>
            <p class="feedback-description">
              Try to be as flexible as possible, but don’t schedule yourself for a time that could result in you being late. 
              Be sure to reflect on your excitement for having the opportunity to learn more about the company
            </p>
          </div>
        </div>
      </div>
    </section>


  </div> 
  <!-- CSS RULES -->
  <style>
    .feedback-image{
      width:50%;
      transform:translate(50%, 0);
    }

    .feedback-description{
      font-family:'abel';
      font-size:1.5em;
      padding:0 10% 0 0;
    }

    .prep-step-card{
      /*background-color:rgba(0,0,0,.5);*/
      padding:20px;
      overflow:hidden;
    }

    .prep-step-image{
      height:200px;
    }

    .information-box{
      border-radius: 20px;
      background-color:rgba(0,0,0,.15);
      padding:10px 5% 10px 5%;
      min-height:250px;
      height:auto;
    }

    .prep-step-title{
      font-family:'pattaya';
      font-size:1.8em;
      text-transform: capitalize;
      margin:0;
    }

    .prep-step-description{
      font-family:'abel';
      font-size:1.2em;
      text-align:justify;
      /*border:2px solid green;*/
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
      background-image:url('public/images/scene3/background.svg');
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

    .subsc3-glass{
      position:absolute;
      bottom:100px;
      left:50px;
      height:350px;
    }

    .subsc3-bed{
      position:absolute;
      bottom:180px;
      left:50%;
      height:250px;
      transform:translate(-50%, 0); 
    }

    .subsc3-milk{
      position:absolute;
      bottom:100px;
      right:50px;
      height:380px;
    }

    #feedback{
      width:100%;
      overflow:hidden;
      margin-bottom:100px;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em){
      .description{
        padding:0 5% 0 5%;
      }


      /*Preparation Step boxes - START*/
      .prep-step-image{
        height:150px;
      }

      .information-box{
        background-color:rgba(0,0,0,.25);
        padding:10px 5% 10px 5%;
        min-height:350px;
        height:auto;
      }

      .prep-step-title{
        font-size:1.5em;
        margin-bottom:10px;
      }

      .prep-step-description{
        font-size:1.2em;
      }
      /*Preparation Step boxes - END*/
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

      .subsc3-bed{
        height:150px;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
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

      .feedback-description{
        font-size:1.2em;
        padding:0 5% 0 5%;
        text-align:justify;
      }

      .subsc3-glass{
        bottom:50px;
        left:0px;
        height:150px;
      }

      .subsc3-bed{
        bottom:80px;
        left:50%;
        height:50px;
        transform:translate(-50%, 0); 
      }

      .subsc3-milk{
        position:absolute;
        bottom:50px;
        right:0px;
        height:150px;
      }

    }
  </style>
  <!-- SCRIPTS & STUFF -->
  <script>

    this.on('mount', function(){
      var $node = $(this.root);
    });

    this.preparation_steps = [
    {
      title:'know the position',
      description:`Be prepared to explain why you are seeking the position and why you would be successful in the job.`,
      image:'public/images/subscene3/know.svg'
    },
    {
      title:'know the company/agency',
      description:`Learn about its services and products to converse intelligently about the organization.`,
      image:'public/images/subscene3/company.svg'
    },
    {
      title:'why should they hire you?',
      description:
      `
      Your primary responsibility during the interview is to give the employer substantial reasons why you should be hired.
      Stress what you can do to meet the goals and needs of the employer, not what the employer can do for you.
      Look for commonalities - colleges, values, backgrounds, interests -so that you can build necessary social links.
      `,
      image:'public/images/subscene3/hired.svg'
    },
    {
      title:'present yourself effectively',
      description:
      `
      Remember that the interviewer needs to hire employees. So, if you can present yourself and your qualifications to the interviewer
      more effectively than anyone else, you will significantly increase your chances for obtaining an offer of employment.
      `,
      image:'public/images/subscene3/present.svg'
    },
    {
      title:'know your skills',
      description:
      `
      Need help figuring out what skill areas you excel in? Check out the interactive activity on Pathways!    
      `,
      image:'public/images/subscene3/skills.svg'
    },
    {
      title:'on campus interviews',
      description:
      `
      Don’t forget to check out On Campus Interviews at CSUN
      `,
      image:'public/images/subscene3/campus.svg'
    },
    ];

  </script>
</subscene3>