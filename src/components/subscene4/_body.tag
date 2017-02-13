<subscene4-body>

  <!-- HTML -->
  <section class="subscene4-information-container">
    <p class="fancy subsc4-title"><span>acing the interview</span></p>
    <p class="subsc4-description">
      The keys to successful interviewing are preparation, like-ability, and bonding. 
      <br>
      There are several critical areas to consider and essential things to do in preparation
      for your interview
    </p>
  </section>


  <!-- CARD CONTAINER - START -->
  <section class="subscene4-cards-container">
    <div class="row">

      <virtual each={cards}>
        <div class="col s12 m6 l4">
          <div class="subsc4-card-container center-align">

            <img class="subsc4-card-image" id={image_id} src={image} alt={image_alt}>
            <div class="subsc4-card-title-container">
              <p class="subsc4-card-title">{title}</p>
            </div>

            <div class="subsc4-card-description-container hoverable">
              <virtual each={description}>
                <p class="subsc4-card-description">{text}</p>
              </virtual>  

              <div class="center-align">
                <a href='#!' class="subsc4-card-btn button button-3d button-royal button-pill">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </virtual>


    </div>
  </section>   
  <!-- CARD CONTAINER - END -->




  <!-- DO's & Dont's List - START -->
  <section class="subscene4-tip-list">
    <div class="row">
      <virtual each={do_list}>
        <div class="col s12 m12 l4 push-l8">
          <img class="subsc4-tip-list-image" src={image} alt="">
        </div>
        <div class="col s12 m12 l8 pull-l4">
          <p class="subsc4-list-title">{title}</p>
          <p each={items} class="subsc4-list-item">{text}</p>
        </div>
      </virtual>    
    </div>


    <div class="row">
      <virtual each={dont_list}>
        <div class="col s12 m12 l4">
          <img class="subsc4-tip-list-image" src={image} alt="">
        </div>
        <div class="col s12 m12 l8">
          <p class="subsc4-list-title">{title}</p>
          <p each={items} class="subsc4-list-item">{text}</p>
        </div>
      </virtual>    
    </div>
  </section>
  <!-- DO's & Dont's List - END -->


  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- Know you rights - START                        -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <section class="subscene4-information-container">
    <p class="fancy subsc4-title"><span>know your rights</span></p>
    <p class="subsc4-description">
      check out the questions that are acceptable for you to be asked by an interviewer
    </p>
    <div class="center-align">
      <a href='#!' class="subsc4-reg-btn button button-3d button-royal button-pill">
        Coming Soon!
      </a>
    </div>
  </section>  
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- Know you rights - END                          -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->



  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- Avoid common mistakes - START                  -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <section class="subscene4-tip-list">

    <div class="row">
      <virtual each={avoid_common_mistakes}>

        <div class="col s12 m12 l4 push-l8">
          <img class="subsc4-tip-list-image" src={image} alt="">
        </div>

        <div class="col s12 m12 l8 pull-l4">
          <p class="subsc4-list-title">{title}</p>
          <p each={items} class="subsc4-list-item2">{text}</p>
        </div>

      </virtual>    
    </div>

  </section>
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- Avoid commmon mistakes - END                   -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->


  <div class="center-align">
    <a href="#steps/" class="btn2 button button-3d button-royal button-pill">Return</a>
  </div>



  <!-- SCRIPT -->
  <script>
    import 'subscene4/_body.scss';

    this.on('mount', function(){
    });


    this.cards = [
    {
      title:'the night before',
      image:'public/images/subscene4/night_before.svg',
      image_id:'night_before',
      image_alt:'the night before the interview',
      description:[
      {
        text:`
        By preparing properly beforehand, as 
        opposed to leaving it to the last minute, 
        you can avoid extra stress the night 
        before. Simply make sure your clothing is 
        laid out and ready to go and that you have 
        all necessary materials (a copy of your 
        resume, identifcation, paper for taking 
        any notes or jotting down pertinent information). 
        `
      },
      {
        text:`
        You can only prepare so much, and 
        overpreparation lends itself to stifness 
        and unease. Just try your best to get a 
        good night’s sleep and have a healthy 
        breakfast beforehand.
        `
      }
      ],
      button:true,
      link:'#!'
    },
    {
      title:'first impression count!',
      image:'public/images/subscene4/first_impression.svg',
      image_id:'first_impression',
      image_alt:'first impressions count during an interview',
      description:[
      {
        text:`
        Arrive at least 15 minutes before your 
        interview. Know that the frst person that 
        you encounter (receptionist) is already 
        interviewing you. 
        `
      },
      {
        text:`

        Remember, your interview begins before 
        you sit down with the potential employer. 
        Greet everyone, including the receptionist, 
        in a positive and professional manner. 
        The decision to hire, or not to hire, is often 
        made early in the interview. 
        `
      },
      {
        text:`
        The decision 
        made by the interviewer is largely 
        subjective. It can revolve around whether 
        you fit the office "culture" or if you have a 
        strength an employer is seeking
        `
      }
      ],
      button:false,
      link:'#!'
    },
    {
      title:'once you begin the interview',
      image:'public/images/subscene4/begin_interview.svg',
      image_id:'begin_interview',
      image_alt:'Once you begin the interview process',
      description:[
      {
        text:`
        Make eye-contact and show attentiveness to
        whomever is interviewing you. 
        Employers are looking for potential 
        candidates who feel confident in their 
        proposed position. Fidgeting and nervous behavior can give off the wrong impression
        `
      }
      ],
      button:false,
      link:'#!'
    }
    ];


    this.do_list = [
    {
      image:'public/images/subscene4/do.svg',
      title:'do\'s',
      items:[
      {text:'Put yourself on their team'},
      {text:'Research their company'},
      {text:'shake hands with each member interviewing you'},
      {text:'make eye contact when answering questions, or when the interviewer is speaking'},
      {text:'talk about previous experience that relates to the position'},
      {text:'discuss your skills and qualifications'}
      ]
    }
    ];

    this.dont_list = [
    {
      image:'public/images/subscene4/dont.svg',
      title:'don\'ts',
      items:
      [
      {text:'Bring food or gifts for the interview'},
      {text:'chew gum'},
      {text:'play with pens, pencils, objects'},
      {text:'talk excessively'},
      {text:'talk badly about acquaintances or past employment positions'},
      {text:'slouch'},
      {text:'talk about politics or religion (unless related to position)'},
      {text:'ask about salary or benefits during the initial interview (don\'t make it your first question)'}
      ]
    }
    ];

    this.avoid_common_mistakes = [
    {
      title:'how to avoid common mistakes',
      image:'public/images/subscene4/avoid.svg',
      items:[
      {text:'have an idea about what you’d like to do within your potential new job'},
      {text:'Show your best, most polite, enthusiastic, and professional self'},
      {text:`
        Assume that your interviewer may not have looked at your resume. You need to sell 
        yourself, so don’t just depend on the submission of your resume to do it for you
        `
      },
      {text:'Prepare a mental outline and pitch beforehand. Just winging it may push you into a corner'},
      {text:`
        Give thoughtful answers to the questions asked of you. Just giving short, one word 
        answers doesn’t give your potential employer a good image of your potential without explanation
        `
      },
      {text:`
        Explain how your experiences ft the needs of the recruiter. You need to tackle the
        interview believing you’re the best person for the job, and then prove it!
        `
      },
      {text:`
        Be sure to ask questions of the interviewer! Remember, you’re also interviewing the com 
        pany to make sure you’d like to work for them. This also allows you to go further in the 
        interview process with as little confusion as possible.
        `
      },
      {text:
        `
        Don’t forget to mention extracurricular experiences such as clubs or volunteer work
        `
      }
      ]
    }
    ];
  </script>

</subscene4-body>
