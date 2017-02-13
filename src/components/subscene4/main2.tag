<subscene4>

  <!-- SUBSCENE4 SCENARY -->
  <div class="subscene4-scenary-container">
    <img class="subscene4-floor" src="public/images/subscene4/floor.svg" alt="">
    <div class="subscene4-scenary">

      <img class="subscene4-jelly" src="public/images/subscene4/jelly.svg" alt="">
      <img class="subscene4-cream" src="public/images/subscene4/cream.svg" alt="">
      <img class="subscene4-mustard" src="public/images/subscene4/mustard.svg" alt="">
      <img class="subscene4-ketchup" src="public/images/subscene4/tomato.svg" alt="">
      <img class="subscene4-desktop" src="public/images/subscene4/desktop.svg" alt="">
    </div> 
  </div>
  <!-- SUBSCENE4 SCENARY -->


  <!-- SUBSCENE4 INFORMATION CONTAINER -->
  <div class="subscene4-information-container">
    <img id="wave3" class="subscene4-wave" src="public/images/subscene4/wave1_2.svg" alt="">
    <img id="wave4" class="subscene4-wave" src="public/images/subscene4/wave1_3.svg" alt="">
    <img id="wave1" class="subscene4-wave" src="public/images/subscene4/wave1.svg" alt="">
    <img id="wave2" class="subscene4-wave" src="public/images/subscene4/wave1.svg" alt="">

    <div class="subscene4-information">
      <p class="subscene4-title">acing the interview</p>
      <p class="subscene4-description">
        The keys to successful interviewing are preparation, like-ability, and bonding. 
        There are several critical areas to consider and essential things to do in preparation for your interview
      </p>
    </div>
  </div> 
  <!-- SUBSCENE4 INFORMATION CONTAINER -->




  <!-- SUBSCENE4 CARD CONTAINER - START -->
  <section class="subscene4-cards-container">

    <div class="subscene4-card-wrapper">
      <div class="row">

        <virtual each={boxes}>
          <div class="col s12 m6 l4">

            <div class="subscene4-card-image-container">
              <img id={image_id} src={image} alt={image_alt} class="subscene3-card-image">
            </div>

            <div class="subscene4-card-title-container">
              <p class="subscene4-card-title">{title}</p>
            </div>

            <div class="subscene4-card-description-container hoverable">
              <p class="subscene4-card-description" each={description}>{text}</p>
              <div if={button} class="center-align">
                <a href={url} target="_blank" class="subscene4-card-btn button button-3d button-action button-pill">learn more</a>
              </div>
            </div>




          </div>  
        </virtual>

      </div>
    </div>
    
    <div class="subscene4-tips-list">
      <div class="row">
        <virtual each={do_list}>
          <div class="col s12 m6 push-m6">
            <div class="subscene4-do-list-image-container">
              <img class="subscene4-do-list-image" src={image} alt="">
            </div>
          </div>
          <div class="col s12 m6 pull-m6">
            <p class="subscene4-tips-title">{title}</p>
            <ul class="subscene4-tips-items">
              <li each={items} class="subscene4-tip-item">
                {text}
              </li>
            </ul>
          </div>          
        </virtual>
      </div>

      <div class="row">
        <virtual each={dont_list}>
          <div class="col s12 m6">
            <div class="subscene4-do-list-image-container">
              <img class="subscene4-do-list-image" src={image} alt="">
            </div>
          </div>
          <div class="col s12 m6">
            <p class="subscene4-tips-title">{title}</p>
            <ul class="subscene4-tips-dont-items">
              <li each={items} class="subscene4-tip-item">
                {text}
              </li>
            </ul>
          </div>          
        </virtual>
      </div>
    </div>

    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <!-- WAVE SECTION                             -->
    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <img id="wave8" class="subscene4-wave" src="public/images/subscene4/wave2_4.svg" alt="">
    <img id="wave7" class="subscene4-wave" src="public/images/subscene4/wave2_3.svg" alt="">
    <img id="wave6" class="subscene4-wave" src="public/images/subscene4/wave2_2.svg" alt="">

    <img id="wave5_2" class="subscene4-wave" src="public/images/subscene4/wave2_1.svg" alt="">
    <img id="wave5" class="subscene4-wave" src="public/images/subscene4/wave2_1.svg" alt="">
  </section>  
  <!-- SUBSCENE4 CARD CONTAINER - END   -->



  <!-- SUBSCENE3 INFORMATION CONTAINER 2 - START -->
  <section class="subscene4-information-container2">
    <p class="subscene4-title2">know your rights</p>
    <p class="subscene4-description">
      Check out the questions that are acceptable for you to be asked by an interviewer.
    </p>

    <div class="center-align">
      <a href="#steps/" class="subscene4-return-btn button button-3d button-royal button-pill">coming soon!</a>
    </div>



    <!-- |||||||||||||||||||||||||||||||||||||||||| -->
    <!--  AVOID COMMON MISTAKES WHILE HAVING YOUR INTERVIEW -->
    <!-- |||||||||||||||||||||||||||||||||||||||||| -->
    <div class="subscene4-tips-container">
      <virtual each={avoid_common_mistakes}>

        <ul class="subscene4-tips-container">
          <p class="subscene4-tip-title">{title}</p>
          <li class="subscene4-tips-description" each={items}>{text}</li>
        </ul>
      </virtual>
    </div>


    <div class="center-align">
      <a href="#steps/" class="subscene3-return-btn button button-3d button-royal button-pill">Return</a>
    </div>
  </section>
  <!-- SUBSCENE2 INFORMATION CONTAINER 2 - END -->


  <script>  
    import 'subscene4/main2.scss';
    this.on('mount',function(){
      var $node = $(this.root);
    });

    this.boxes = [
    {
      title:'the night before',
      title_id:'the_night_before',
      description:[
      {
        text:`
        By preparing properly beforehand, as opposed to leaving it to the last minute, you can avoid extra stress the night before. Simply make sure your clothing is laid out and ready to go and that you have all necessary materials (a copy of your resume, identifcation, paper for taking any notes or jotting down pertinent information).
        `
      },
      {
        text:`
        You can only prepare so much, and overpreparation lends itself to stifness and unease. Just try your best to get a good night’s sleep and have a healthy breakfast beforehand.
        `
      }
      ],
      image:'public/images/subscene4/night_before.svg',
      image_id:'night_before_interview',
      image_alt:'rest up the night before the interview',
      button:false,
      url:'#!'
    },
    {
      title:'first impressions count!',
      title_id:'first_impressions_count',
      description:[
      {
        text:`
        Arrive at least 15 minutes before your interview. Know that the first person that you encounter (receptionist) is already interviewing you.
        `
      },
      {
        text:`
        Remember, your interview begins before you sit down with the potential employer. Greet everyone, including the receptionist, in a positive and professional manner. The decision to hire, or not to hire, is often made early in the interview.
        `
      },
      {
        text:`
        The decision made by the interviewer is largely subjective. It can revolve around whether you fit the office "culture" or if you have a strength an employer is seeking
        `
      }
      ],
      image:'public/images/subscene4/first_impression.svg',
      image_id:'first_impressions',
      image_alt:'Remember to make a positive impressions upon your arrival to the interview',
      button:false,
      url:'#!'
    },
    {
      title:'why hire you?',
      title_id:'hire_you_title',
      description:[
      {
        text:`
        Make eye-contact and show attentiveness to whomever is interviewing you. Employers are looking for potential
        candidates who feel confident in their proposed position. Fidgeting and nervous behavior can give off the wrong impression.
        `
      }
      ],
      image:'public/images/subscene4/begin_interview.svg',
      image_id:'once_you_begin_interview',
      image_alt:'Be chill once you begin your interview, nothing will go wrong',
      button:false,
      url:'#!'
    },
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
</subscene4>