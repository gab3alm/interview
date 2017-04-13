<subscene3>

  <!-- SUBSCENE3 SCENARY -->
  <div class="subscene3-scenary-container">
    <img class="subscene3-floor" src="public/images/subscene3/floor.svg" alt="">
    <div class="subscene3-scenary">
      <img class="subscene3-cheesebed" src="public/images/subscene3/cheesebed.svg" alt="">
      <img class="subscene3-glass hide-on-med-and-up" src="public/images/subscene3/glass2.svg" alt="">
      <img class="subscene3-closet" src="public/images/subscene3/closet.svg" alt="">

      <object class="sub3_tanner-tie-animation hide-on-small-only" id="EdgeID" type="text/html" width="570" height="420" data-dw-widget="Edge" data="public/animation/tanner_tie_animated/Assets/tanner_tie_animated.html">
      </object>
    </div> 
  </div>
  <!-- SUBSCENE3 SCENARY -->



  <!-- SUBSCENE3 INFORMATION CONTAINER -->
  <div class="subscene3-information-container">
    <img id="wave3" class="subscene3-wave" src="public/images/subscene3/wave1_2.svg" alt="">
    <img id="wave4" class="subscene3-wave" src="public/images/subscene3/wave1_3.svg" alt="">
    <img id="wave1" class="subscene3-wave" src="public/images/subscene3/wave1.svg" alt="">
    <img id="wave2" class="subscene3-wave" src="public/images/subscene3/wave1.svg" alt="">

    <div class="subscene3-information">
      <p class="subscene3-title">preparing for an interview</p>
      <p class="subscene3-description">
        The keys to successful interviewing are preparation, like-ability, and bonding. There are several critical areas to consider and essential things to do in preparation for your interview.
      </p>
    </div>
  </div> 
  <!-- SUBSCENE3 INFORMATION CONTAINER -->




  <!-- SUBSCENE3 CARD CONTAINER - START -->
  <section class="subscene3-cards-container">

    <div class="subscene3-card-wrapper">
      <div class="row">

        <virtual each={boxes}>
          <div class="col s12 m6 l4">

            <div class="subscene3-card-image-container">
              <img id={image_id} src={image} alt={image_alt} class="subscene3-card-image">
            </div>

            <div class="subscene3-card-title-container">
              <p class="subscene3-card-title">{title}</p>
            </div>

            <div class="subscene3-card-description-container hoverable">
              <p class="subscene3-card-description" each={description}>{text}</p>
              <div if={button} class="center-align">
                <a href={url} target="_blank" class="subscene3-card-btn button button-3d button-action button-pill">learn more</a>
              </div>
            </div>




          </div>  
        </virtual>
        
      </div>
    </div>



    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <!-- WAVE SECTION                             -->
    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <img id="wave8" class="subscene3-wave" src="public/images/subscene3/wave2_4.svg" alt="">
    <img id="wave7" class="subscene3-wave" src="public/images/subscene3/wave2_3.svg" alt="">
    <img id="wave6" class="subscene3-wave" src="public/images/subscene3/wave2_2.svg" alt="">

    <img id="wave5_2" class="subscene3-wave" src="public/images/subscene3/wave2_1.svg" alt="">
    <img id="wave5" class="subscene3-wave" src="public/images/subscene3/wave2_1.svg" alt="">
  </section>  
  <!-- SUBSCENE3 CARD CONTAINER - END   -->



  <!-- SUBSCENE3 INFORMATION CONTAINER 2 - START -->
  <section class="subscene3-information-container2">
    <p class="subscene3-title2">hearing back from employers</p>
    <p class="subscene3-description">
      Here are some tips that will guide you when employers get back to you.
    </p>


    <div class="subscene3-tips-container">
      <div class="row">
        <div class="col s12 m12 l6">
          <div class="subscene3-tips-image-container">
            <img class="subscene3-tips-image" src="public/images/subscene3/fish.svg" alt="fishing for a job">
          </div>
        </div>
        <div class="col s12 m12 l6">
          <p class="subscene3-tips-description">
            They say patience is a virtue, but that can be difficult to remember when waiting to hear back from an employer. Try your best to focus on other things, or even keep applying to opportunities.
          </p>
          <p class="subscene3-tips-description">
            After a week, it is always appropiate to call and check the status of their application. This is less about finding out immediately if they'd like to schedule an interview so much as it lets your potential employer know of your continued interest and initiative.
          </p>
        </div>
      </div>
    </div>

    <div class="subscene3-tips-container">
      <div class="row">

        <div class="col s12 m12 l6 push-l6">
          <div class="subscene3-tips-image-container">
            <img class="subscene3-tips-image" src="public/images/subscene3/calendar.svg" alt="plan the date for your interview">
          </div>
        </div>

        <div class="col s12 m12 l6 pull-l6">
          <p class="subscene3-tips-description">
            Sometimes it's through an email and other times over the phone, but hearing back from an employer that they'd like to schedule an interview is very exciting. Many times, employers will give a range of dates and times. 
          </p>
          <p class="subscene3-tips-description">
            Try to be as flexible as possible, but don't schedule for a time that could result in you being late. Be sure to reflect on your excitement for having the opportunity to learn more about the company.
          </p>
        </div>
        
      </div>
    </div>


    <div class="center-align">
      <a href="#steps/" class="subscene3-return-btn button button-3d button-action button-pill">Return</a>
    </div>
  </section>
  <!-- SUBSCENE2 INFORMATION CONTAINER 2 - END -->


  <script>  
    import 'subscene3/main2.scss';
    this.on('mount',function(){
      var $node = $(this.root);
    });



    this.boxes = [
    {
      title:'know the position',
      title_id:'know_position_title',
      description:[
      {
        text:`
        Be prepared to explain why you are seeking the position and
        why you would be successful in the job.
        `
      }
      ],
      image:'public/images/subscene3/book.svg',
      image_id:'know_position',
      image_alt:'know the position that you are applying for',
      button:false,
      url:'#!'
    },
    {
      title:' know the company',
      title_id:'know_company_title',
      description:[
      {
        text:`
        Learn about its services and products to converse intelligently
        about the organization.
        `
      }
      ],
      image:'public/images/subscene3/company.svg',
      image_id:'know_company',
      image_alt:'research the company that you are applying to',
      button:false,
      url:'#!'
    },
    {
      title:'why hire you?',
      title_id:'hire_you_title',
      description:[
      {
        text:`
        Your primary responsibility during the interview is to give 
        the employer substantial reasons why you should be hired. 
        `,
        text:`
        Stress what you can do to meet the goals and needs of the 
        employer, not what the employer can do for you. Look for
        commonalities - colleges, values, backgrounds, interests
        -so that you can build necessary social links.
        `
      }
      ],
      image:'public/images/subscene3/hired.svg',
      image_id:'you_are_hired',
      image_alt:'Know your skills and why you would be a good asset to that company',
      button:false,
      url:'#!'
    },
    {
      title:'present yourself effectively',
      title_id:'present_yourself_title',
      description:[
      {
        text:`
        Remember that the interviewer needs to hire employees. So, if
        you can present yourself and your qualifications to the interviewer
        more effectively than anyone else, you will significantly increase
        your chances for obtaining an offer of employment.
        `
      }
      ],
      image:'public/images/subscene3/landing.svg',
      image_id:'present_yourself',
      image_alt:'first impressions matter a lot during interviews',
      button:false,
      url:'#!'
    },
    {
      title:'know your skills',
      title_id:'know_skills_title',
      description:[
      {
        text:`
        Need help figuring out what skill areas you excel in? Check out the interactive activity on Pathways!
        `
      }
      ],
      image:'public/images/subscene3/skills.svg',
      image_id:'know_your_skills',
      image_alt:'know your strenghts and why these are important',
      button:true,
      url:'#!'
    },
    {
      title:'on campus interviews',
      title_id:'campus_interviews_title',
      description:[
      {
        text:`
        Don’t forget to check out On Campus Interviews at CSUN
        `
      }
      ],
      image:'public/images/subscene3/csun.svg',
      image_id:'campus_interviews',
      image_alt:'CSUN also has cool on campus interviews',
      button:true,
      url:'#!'
    }
    ];
  </script>
</subscene3>