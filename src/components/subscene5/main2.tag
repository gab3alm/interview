<subscene5>

  <!-- SUBSCENE5 SCENARY -->
  <div class="subscene5-scenary-container">
    <img class="subscene5-floor" src="public/images/subscene5/floor.svg" alt="">
    <div class="subscene5-scenary">

      <img class="subscene5-shake" src="public/images/subscene5/shake.svg" alt="">
      <img class="subscene5-chocolate" src="public/images/subscene5/chocolate.svg" alt="">
      <img class="subscene5-cheesecake" src="public/images/subscene5/cheesecake.svg" alt="">
      <img class="subscene5-phonebooth" src="public/images/subscene5/phonebooth.svg" alt="">
    </div> 
  </div>
  <!-- SUBSCENE5 SCENARY -->


  <!-- SUBSCENE5 INFORMATION CONTAINER -->
  <div class="subscene5-information-container">
    <img id="wave3" class="subscene5-wave" src="public/images/subscene5/wave1_2.svg" alt="">
    <img id="wave4" class="subscene5-wave" src="public/images/subscene5/wave1_3.svg" alt="">
    <img id="wave1" class="subscene5-wave" src="public/images/subscene5/wave1.svg" alt="">
    <img id="wave2" class="subscene5-wave" src="public/images/subscene5/wave1.svg" alt="">

    <div class="subscene5-information">
      <p class="subscene5-title">following up the interview</p>
      <p class="subscene5-description">
        The keys to successful interviewing are preparation, like-ability, and bonding. 
        There are several critical areas to consider and essential things to do in preparation for your interview
      </p>
    </div>
  </div> 
  <!-- SUBSCENE5 INFORMATION CONTAINER -->




  <!-- SUBSCENE5 CARD CONTAINER - START -->
  <section class="subscene5-cards-container">

    <div class="subscene5-card-wrapper">
      <div class="row">

        <virtual each={subscene5_card}>
          <div class="col s12 m6">

            <div class="subscene5-card-image-container">
              <img id={image_id} src={image} alt={image_alt} class="subscene5-card-image">
            </div>

            <div class="subscene5-card-title-container">
              <p class="subscene5-card-title">{title}</p>
            </div>

            <div class="subscene5-card-description-container hoverable">
              <p class="subscene5-card-description" each={description}>{text}</p>
              <div if={button} class="center-align">
                <a href={url} target="_blank" class="subscene5-card-btn button button-3d button-action button-pill">learn more</a>
              </div>
            </div>

          </div>  
        </virtual>

      </div>
    </div>
    

    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <!-- WAVE SECTION                             -->
    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <img id="wave8" class="subscene5-wave" src="public/images/subscene5/wave2_4.svg" alt="">
    <img id="wave7" class="subscene5-wave" src="public/images/subscene5/wave2_3.svg" alt="">
    <img id="wave6" class="subscene5-wave" src="public/images/subscene5/wave2_2.svg" alt="">

    <img id="wave5_2" class="subscene5-wave" src="public/images/subscene5/wave2_1.svg" alt="">
    <img id="wave5" class="subscene5-wave" src="public/images/subscene5/wave2_1.svg" alt="">
  </section>  
  <!-- SUBSCENE5 CARD CONTAINER - END   -->



  <!-- SUBSCENE5 INFORMATION CONTAINER 2 - START -->
  <section class="subscene5-information-container2">
    <p class="subscene5-title2">handling the response</p>
    <p class="subscene5-description2">
      There can be a variety of reason for which an employer can go for another candidate,
      and it is important to not take it personally. Be gracious and move on to the next potential opportunity.
    </p>

    
    <!-- CARD SECTION -->
    <section class="subscene5-cards-container2">

      <div class="subscene5-card-wrapper2">
        <div class="row">

          <virtual each={response}>
            <div class="col s12 m6">

              <div class="subscene5-card-image-container">
                <img id={image_id} src={image} alt={image_alt} class="subscene3-card-image">
              </div>

              <div class="subscene5-card-title-container">
                <p class="subscene5-card-title">{title}</p>
              </div>

              <div class="subscene5-card-description-container2 hoverable">
                <p class="subscene5-card-description" each={description}>{text}</p>
                <div if={button} class="center-align">
                  <a href={url} target="_blank" class="subscene5-card-btn button button-3d button-action button-pill">learn more</a>
                </div>
              </div>

            </div>  
          </virtual>

        </div>
      </div>
    </section>

    <div class="center-align">
      <a href="#steps/" class="subscene5-return-btn button button-3d button-royal button-pill">Return</a>
    </div>
  </section>
  <!-- SUBSCENE5 INFORMATION CONTAINER 2 - END -->


  <script>  
    import 'subscene5/main2.scss';
    this.on('mount',function(){
      var $node = $(this.root);
    });

    this.subscene5_card = [
    {
      title:'dont\'t be nervous',
      image:'public/images/subscene5/nervous.svg',
      image_id:'no_nervous',
      image_alt:'don\'t feel nervous before your interview',
      description:[
      {
        text:`
        Don't be nervous about following up the interview
        `
      },
      {
        text:`
        Whether it's sending a thank-you note for their time,
        a list of references, a call or an email, they will 
        appreciate your tenacity.
        `
      }
      ],
      button:false,
      url:'#!'
    },
    {
      title:'follow up',
      image:'public/images/subscene5/followup.svg',
      image_id:'follow up after your interview',
      image_alt:'don\'t be afraid to follow up after your interview',
      description:[
      {
        text:`
        Normally, once you've made it to the interview phase of the 
        hiring process, employers are closer to filling the position
        they've advertised.  
        `
      },
      {
        text:`
        Many will let you know when you can expect to hear back from them.
        sometimes, it will take a couple of other interviews for them to 
        reach their final decisions. Continue being courteous and patient.
        `
      },
      {
        text:`
        Impeccable manners can take you a long way. If it's been a week
        or more since you've had your interview, you can always send a polite
        follow up email checking the status of their decision making process. 
        `
      }
      ],
      button:false,
      url:'#!'
    }
    ];


    this.response = [
    {
      title:'Congratulations',
      image:'public/images/subscene5/congrats.svg',
      image_id:'you_gots_a_job',
      image_alt:'congratulations, you got the job! we need to tell mom/dad/grandparents!',
      description:[
      {
        text:`
        If you are picked for the job, then congratulations!
        `
      },
      {
        text:`
        Remember, you don't always have to accept right away. 
        If you are waiting to hear back from other opportunities 
        or decide that the job isn't right for you, then feel free
        to respectfully decline. 
        `
      }
      ],
      button:false,
      url:'#!'
    },
    {
      title:'Hurray!',
      image:'public/images/subscene5/hurray.svg',
      image_id:'let_start_new_job',
      image_alt:'accept the job and begin your path towards extreme greatness! don\'t forget to carry memes with you! load up!',
      description:[
      {
        text:`
        If you do want the job, then hurray! 
        `
      },
      {
        text:`
        A new adventure awaits you. Make sure you can fulfill 
        all the expectations and get ready to fill out some 
        paperwork. Always have an I.D. and pertinent information
        close at hand in case your new employer needs that for record keeping
        purposes.
        `
      }
      ],
      button:false,
      url:'#!'
    },

    ];
  </script>
</subscene5>