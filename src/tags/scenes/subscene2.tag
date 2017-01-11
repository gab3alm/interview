<subscene2>
  <!-- HTML MARKUP -->

  <div class="container-fluid">

    <!-- <button class="btn btn-large return-btn red lighten-1"><a href="#steps">Return</a></button> -->

    <section id="scenary">
      <div class="row">
        <div class="col s12">
          <img src="public/images/subscene2/floor.svg" alt="" class="floor">
          <img src="public/images/subscene2/bottles.svg" alt="" class="bottles">
        </div>
      </div>  
    </section>


    <section id="scene-intro">
      <div class="row">
        <div class="col s12">
          <p class="fancy"><span>type of interviews</span></p>
          <p class="description">
            Knowing the different kinds of interviews that you may be facing makes it easy to prepare for them.
          </p>
          <p class="description">
            Here are some  examples of the different kind of Interviews: 
          </p>
        </div>
      </div>
    </section>




    <virtual each={interview_elements}>
      <!-- left image sided section -->
      <section if={side=="left"} id="" class="interview-type">
        <div class="row">
          <div class="col s12 m5 l3">
            <div class="center-align">
              <img class={image_class} src={interview_image} alt="">
            </div>
          </div>
          <div class="col s12 m7 l8">
            <p class="interview-title">{interview_title}</p>
            <p class="interview-description" each={interview_information}>{description}</p>
          </div>
        </div>
      </section>

      <!-- right image sided section -->
      <section if={side=="right"} id="" class="interview-type">
        <div class="row">
          <div class="col s12 m5 l3 push-l9">
            <img class={image_class} src={interview_image} alt="">
          </div>
          <div class="col s12 m7 l8 pull-l2">
            <p class="interview-title">{interview_title}</p>
            <p class="interview-description" each={interview_information}>{description}</p>
          </div>
        </div>
      </section>
    </virtual>

    <!-- TIPS -->
    <section id="tip-container">
      <div class="row">
        <div class="col s12">
          <p class="fancy"><span> interview tips</span></p>
          <p class="description">
            However, here are some live video specific Tips that might come in handy!        
          </p>
          <ul class="tip-list">
            <li each={tip_list} class="tip-item">
              <p class="tip-title">{tip_title}</p>
              <p class="tip-description">{tip_description}</p>
            </li>
          </ul>
        </div>
      </div>  

      <div class="row center-align">
        <a class="btn btn-large teal lighten-2" href="#steps">Return</a>
      </div>
    </section>
    

  </div> 
  <!-- CSS RULES -->
  <style>
    /*TIP LIST STYLES*/
    #tip-container{
      width:100%;
      overflow:hidden;
      margin-bottom:100px;
    }

    .tip-list{
      /*border:2px solid green;*/
      padding:0 25% 0 25%;
    }

    .tip-title{
      font-family:'pattaya';
      font-size:1.8em;
      text-transform: capitalize;
      color:rgba(0,0,0,.75);
      margin-bottom:10px;
    }

    .tip-description{
      margin:0;
      font-family:'abel';
      font-size:1.2em;
      /*text-transform: capitalize;*/
      color:rgba(0,0,0,.85);
    }
    /*TIP LIST STYLES*/


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
      background-image:url('public/images/subscene2/background.svg');
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

    .floor{
      position:absolute;
      bottom:0;
      left:0;
      height:50%;
      transform:scaleX(10);
    }

    .bottles{
      position:absolute;
      top:40px;
      left:20%;
      width:60%;
    }

    .interview-type{
      /*background-color:#FFFDED;*/
      min-height:300px;
      height:auto;
      width:100%;
      /*border:2px solid green;*/
      margin-bottom:0px;
    }

    .interview-image{
      margin:20px;
      max-height:300px;
      /*border:2px solid green;*/
    }

    .interview-title{
      font-family:'pattaya';
      font-size:2.2em;
      text-transform: capitalize;
      margin-bottom:5px;
    }

    .interview-description{
      font-family:'abel';
      font-size:1.3em;
      text-align:justify;
      padding:0 10% 0 0 ;
    }

    #right{
      background-color:#aacde1;
    }

    .phone-interview-image{
      height:300px;
      width:100%;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em){
      .bottles{
        position:absolute;
        top:100px;
        left:5%;
        width:90%;
      }

      .description{
        padding:0 5% 0 5%;
      }

      .tip-list{
        padding:0 15% 0 15%;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      .tip-list{
        padding:0 5% 0 5%;
      }

      .tip-title{
        font-size:1.5em;
      }

      .tip-description{
        text-align:justify;
        font-size:1em;
      }

      .bottles{
        position:absolute;
        top:75px;
        left:10%;
        width:80%;
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


      .interview-image{
        width:60%;
        margin-left:20%;
        margin-bottom:0;
      }

      .interview-title{
        font-size:1.5em;
        text-transform: capitalize;
        margin-bottom:0px;
        text-align:center;
      }

      .interview-description{
        font-size:1em;
        text-align:justify;
        padding:0 5% 0 5%;
      }
    }
  </style>
  <!-- SCRIPTS & STUFF -->
  <script>

    this.on('mount', function(){
      var $node = $(this.root);
      
    });



    this.interview_elements = [
    {
      side:'left',
      interview_title:'the general interview',
      interview_image: 'public/images/subscene2/general_interview.svg',
      image_class:'interview-image general-interview-image',
      interview_information:
      [
      {
        description:
        `
        The general interview format is the standard form of an interview where you will be invited to meet with the
        hiring manager, often accompanied by an HR representative. The specifics of the position, the company and 
        industry will be discussed.
        `
      },
      {
        description:
        `
        Your Resume/CV will be reviewed with questions designed to ascertain your suitability for the role and your
        cultural fit with the business. Competency questions may be used to assess how your past experiences have 
        allowed you to develop specific skills and how these could benefit the company. Often the decision to hire
        is made after this type of interview.
        `  
      }
      ]
    },
    {
      side:'right',
      interview_title:'the lunch interview protocol',
      interview_image: 'public/images/subscene2/lunch_interview.svg',
      image_class:'interview-image lunch-interview-image',
      interview_information:
      [
      {
        description:
        `
        The same rules apply in lunch interviews as in those held at the office. The setting may be more casual,
        but it is a business lunch and you will be carefully scrutinized. Limit or avoid alcohol intake and 
        remember table etiquette. 
        `
      }
      ]
    },
    {
      side:'left',
      interview_title:'telephone screening interview',
      interview_image: 'public/images/subscene2/phone_interview.svg',
      image_class:'interview-image phone-interview-image',
      interview_information:
      [
      {
        description:
        `
        Telephone interviews are meant to eliminate poorly qualified candidates. Your objective is to be invited for a personal
        face-to-face interview. To ensure this, introduce yourself clearly. Engage in some rapport, building small talk. 
        `
      },
      {
        description:
        `
        Modulate your voice and speak clearly into the receiver. Your voice is the only tool you can use to convey your enthusiasm for 
        the job, so make sure your voice reveals both your personality and attitude positively. Have in front of you your Resume/CV,
        job description, interview preparation notes, and pen and paper. Eliminate any distractions and if you need to refer to your 
        interview preparation notes, do so discreetly. 
        `
      },
      ]
    },
    {
      side:'right',
      interview_title:'competency based interview',
      interview_image: 'public/images/subscene2/competency_interview.svg',
      image_class:'interview-image competency-interview-image',
      interview_information:
      [
      {
        description:
        `
        Competency based interviews are designed to predict future behaviors based upon past 
        behaviors and experiences. It’s best to prepare for these types of questions by demonstrating 
        how your past experiences have allowed you to develop specific skills and how these skills could subsequently 
        benefit the prospective employer. Every job will have a set of competencies, so for more help, see our in-depth guide.
        `
      },
      ]
    },
    {
      side:'left',
      interview_title:'multiple one to one interview',
      interview_image: 'public/images/subscene2/multiple_interview.svg',
      image_class:'interview-image multiple-interview-image',
      interview_information:
      [
      {
        description:
        `
        One to one interviews are usually used when it has been established that you possess the rights skills and profile necessary
        for the position. They are usually used for second or third stage interviews whereby you will be interviewed by a number of
          different individuals from the business. 
        `
      },
      {
        description:
        `
        The idea is to gauge whether you will be a good fit with the company, culture and values. They explore how your skills complement
        the rest of the organization. Your goal should be to establish rapport with each interviewer and to demonstrate that your attributes are a good fit.
        `
      }
      ]
    },
    {
      side:'right',
      interview_title:'panel interview',
      interview_image: 'public/images/subscene2/panel_interview.svg',
      image_class:'interview-image panel-interview-image',
      interview_information:
      [
      {
        description:
        `
        Panel interviews are a common practice. You will face several members of the company who have a vested interest in the hiring decision. 
        Interviewers may include, the Hiring (Line) Manager, Departmental/Segment/Regional Head, HR Manager and related/dependent function managers. 
        Panel interviews are either well-structured with a cohesive approach in seeking to identify why you may be suited to the job, with each interviewer
        assigned an area in which he will assess you. Alternatively, they may be unstructured and quite intense, as each interviewer takes it in turn to 
        pursue their own line of questioning.
        `
      },
      {
        description:
        `
        They often assess how you respond to hypothetical questions or construct your approach to various business scenarios and how you would apply your 
        skills, knowledge and experience to a real life business situation. Remember, to maintain eye contact with all members of the panel when responding to questions.
        `
      }
      ]
    },
    {
      side:'left',
      interview_title:'group interview',
      interview_image:'public/images/subscene2/group_interview.svg',
      image_class:'interview-image group-interview-image',
      interview_information:
      [
      {
        description:
        `
        A group interview is usually designed to uncover the leadership potential of prospective employees. You may be gathered with other 
        front-runner candidates (external and internal) in an informal, discussion-type interview. A subject is introduced (often a 
        scenario that requires a problem to be solved) and the interviewer/s will start off the discussion. 
        `
      },
      {
        description:
        `
        Once the discussion is underway, the interviewer/s will withdraw from conversation and facilitate a leaderless group session.
        The objective of the group interview is to observe how you interact with others and how you use your knowledge, reasoning powers,
        persuasive and communication skills to win others over. 
        `
      }
      ]
    },
    {
      side:'right',
      interview_title:'role play interview',
      interview_image:'public/images/subscene2/roleplay_interview.svg',
      image_class:'interview-image role-interview-image',
      interview_information:
      [
      {
        description:
        `
        Role-play interviews are usually integrated into any of the above interview styles. The interviewer will ask you to assume a
        fictitious role in a hypothetical business situation, which will clearly be explained to you. You will be given a specific 
        task to accomplish during the role-play, while the interviewer assumes the role of a customer, supplier, employee, manager 
        or business associate.
        `
      },
      {
        description:
        `
        Often several interviewers or even actors may be involved in the scenario and each will be pre-prepared to respond in accordance 
        to your particular approach. These types of exercises are usually designed to measure your communication, influencing, sales,
        negotiation and interpersonal skills.
        `
      }
      ]
    },
    {
      side:'left',
      interview_title:'presentation interview',
      interview_image:'public/images/subscene2/presentation_interview.svg',
      image_class:'interview-image presentation-interview-image',
      interview_information:
      [
      {
        description:
        `
        Presentation interviews are also usually integrated into any of the above interview styles. They tend to be reserved for either
        second or third stage interview, but can also be used as an effective screening mechanism at first interview stage.
        `
      },
      {
        description:
        `
        You will be provided with details of the presentation topic and any supporting information as required, in advance of your interview.
        Remember to stick to your time limit, deliver any key messages confidently, maintain eye contact with the audience and be visually expressive.
        Where possible, prepare your presentation on soft copy slideshow for a professional delivery.
        `
      }
      ]
    },
    {
      side:'right',
      interview_title:'skype/facetime presentation',
      interview_image:'public/images/subscene2/skype_interview.svg',
      image_class:'interview-image skype-interview-image',
      interview_information:
      [
      {
        description:
        `
        Skype and Facetime interviews are becoming commonplace due to their ease of setup for the employer regardless of location.
        Many of the same rules apply to a live video interview, such as dressing professionally and connecting early. 
        `
      }
      ]
    },

    ];



    this.tip_list = [
    {
      tip_title:'maintain a professional profile', 
      tip_description: `be aware of your username, profile information, and profile picture. Make sure they represent you in a professional manner.`
    },
    {
      tip_title:'settle connection issues, camera, and sound', 
      tip_description: `Make sure you have a strong internet connection wherever you are. Check your camera to see that it is working and eye-level. Also, check to make sure the sound is working properly on your end.`
    },
    {
      tip_title:'prepare your surroundings', 
      tip_description: `Maintain a quiet area. No loud background noises, distractions, or interruptions. Close any other windows on your computer, mobile device, or tablet to maintain maximum focus.`
    },
    {
      tip_title:'practice', 
      tip_description: `Not only do you need to practice your answers, but you want to verify that the video works, that the volume is correct, and that your background and lighting look good.`
    },
    {
      tip_title:'look at the webcam, not the screen', 
      tip_description: `It is very tempting to watch yourself or your interviewer during a Skype session, but looking directly at the video camera is the only way to maintain direct eye contact with your interviewer.`
    },
    {
      tip_title:'watch your body language', 
      tip_description: 
      `
      Not all physical cues translate from in-person interviews to Skype interviews, which make the ones that do even more important. 
      Be sure to have good posture and relax your shoulders to avoid stiffness. Facial expressions are very important as well.
      `
    },
    {
      tip_title:'do not rely on notes', 
      tip_description: `Feel free, to have paper and pen with you to jot down interviewer names and details, but don’t focus on it. Do have your resume on hand for any questions you may receive.`
    }
    ];

  </script>
</subscene2>