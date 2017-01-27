<subscene5-body>

  <!-- HTML -->
  <section class="subscene5-information-container">
    <p class="fancy subsc5-title"><span>following up the interview</span></p>
    <p class="subsc5-description">
      The keys to successful interviewing are preparation, like-ability, and bonding. 
      <br>
      There are several critical areas to consider and essential things to do in preparation
      for your interview
    </p>
  </section>


  <!-- CARD CONTAINER - START -->
  <section class="subscene5-cards-container">
    <div class="row">

      <virtual each={cards}>
        <div class="col s12 m6 l6">
          <div class="card-container center-align">

            <img class="subsc5-card-image" id={image_id} src={image} alt={image_alt}>
            <div class="card-title-container">
              <p class="card-title">{title}</p>
            </div>

            <div class="card-description-container hoverable">
              <virtual each={description}>
                <p class="card-description">{text}</p>
              </virtual>  

              <div if={button} class="center-align">
                <a href='#!' class="card-btn button button-3d button-royal button-pill">
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
  <!-- <section class="subscene5-tip-list">
    <div class="row">
      <virtual each={do_list}>
        <div class="col s12 m12 l4 push-l8">
          <img class="tip-list-image" src={image} alt="">
        </div>
        <div class="col s12 m12 l8 pull-l4">
          <p class="list-title">{title}</p>
          <p each={items} class="list-item">~ {text}</p>
        </div>
      </virtual>    
    </div>


    <div class="row">
      <virtual each={dont_list}>
        <div class="col s12 m12 l4">
          <img class="tip-list-image" src={image} alt="">
        </div>
        <div class="col s12 m12 l8">
          <p class="list-title">{title}</p>
          <p each={items} class="list-item">~ {text}</p>
        </div>
      </virtual>    
    </div>
  </section> -->
  <!-- DO's & Dont's List - END -->


  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- handling the repsonse - START                        -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <section class="subscene5-information-container">
    <p class="fancy subsc4-title"><span>handling the response</span></p>
    <p class="subsc4-description">
      there can be a variety of reason for which an employer can go for another candidate,
      and it is important to not take it personally. Be gracious and move on to the next potential 
      opportunity.
    </p>
  </section>  

  <section class="subscene5-information-container">
    <div class="row">

      <virtual each={response}>
        <div class="col s12 m6 l6">
          <div class="card-container center-align">

            <img class="subsc5-card-image" id={image_id} src={image} alt={image_alt}>
            <div class="card-title-container">
              <p class="card-title">{title}</p>
            </div>

            <div class="card-description-container2 hoverable">
              <virtual each={description}>
                <p class="card-description">{text}</p>
              </virtual>  

              <div if={button} class="center-align">
                <a href='#!' class="card-btn button button-3d button-royal button-pill">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </virtual>


    </div>
  </section>

  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- Handling the response - END                          -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->



  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- Avoid common mistakes - START                  -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
<!--   <section class="subscene5-tip-list">

    <div class="row">
      <virtual each={avoid_common_mistakes}>

        <div class="col s12 m12 l4 push-l8">
          <img class="tip-list-image" src={image} alt="">
        </div>

        <div class="col s12 m12 l8 pull-l4">
          <p class="list-title">{title}</p>
          <p each={items} class="list-item">~ {text}</p>
        </div>

      </virtual>    
    </div>

  </section> -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- Avoid commmon mistakes - END                   -->
  <!-- |||||||||||||||||||||||||||||||||||||||||||||| -->


  <div class="center-align">
    <a href="#steps/" class="reg-btn button button-3d button-royal button-pill">Return</a>
  </div>



  <!-- SCRIPT -->
  <script>
    import 'subscene5/_body.scss';

    this.on('mount', function(){
    });


    this.cards = [
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
      link:'#!'
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
      link:'#!'
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
      link:'#!'
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
      link:'#!'
    },

    ];



  </script>

</subscene5-body>
