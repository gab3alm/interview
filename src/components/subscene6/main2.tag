<subscene6>

  <!-- SUBSCENE6 SCENARY -->
  <div class="subscene6-scenary-container">
    <img class="subscene6-floor" src="public/images/subscene6/floor.svg" alt="">
    <div class="subscene6-scenary">
      <img class="subscene6-cubicles" src="public/images/subscene6/cubicles.svg" alt="cubicles in your new work station">
      <img class="subscene6-characters" src="public/images/subscene6/characters.svg" alt="people in your new work station">
    </div> 
  </div>
  <!-- SUBSCENE6 SCENARY -->


  <!-- SUBSCENE6 INFORMATION CONTAINER -->
  <div class="subscene6-information-container">
    <img id="wave3" class="subscene6-wave" src="public/images/subscene6/wave1_2.svg" alt="">
    <img id="wave4" class="subscene6-wave" src="public/images/subscene6/wave1_3.svg" alt="">
    <img id="wave1" class="subscene6-wave" src="public/images/subscene6/wave1.svg" alt="">
    <img id="wave2" class="subscene6-wave" src="public/images/subscene6/wave1.svg" alt="">

    <div class="subscene6-information">
      <p class="subscene6-title">accepting the job</p>
      <p class="subscene6-description">
        <span class="subscene6-congrats">Congratulations!</span>
        <br>
        Once you have been hired, there are still some important tips to getting started at your new place of employment
      </p>
    </div>
  </div> 
  <!-- SUBSCENE6 INFORMATION CONTAINER -->




  <!-- SUBSCENE6 CARD CONTAINER - START -->
  <section class="subscene6-cards-container">

    <div class="subscene6-card-wrapper">
      <div class="row center-align">
        <virtual each={dont_list}>
          <div class="col s12 m12 l6 push-l6">
            <img class="subsc6-tip-list-image" src={image} id={image_id} alt={image_alt}>
          </div>
          <div class="col s12 m12 l6 pull-l6">

            <div class="subsc6-title-container">
              <p class="fancy subsc6-title">{title}</p>
            </div>

            <p each={items} class="subsc6-list-item"> 
              <img class="subsc6-not" src="public/images/subscene6/not.svg" alt="">
              {text}
            </p>
          </div>
        </virtual>    
      </div>
    </div>
    

    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <!-- WAVE SECTION                             -->
    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <img id="wave8" class="subscene6-wave" src="public/images/subscene6/wave2_4.svg" alt="">
    <img id="wave7" class="subscene6-wave" src="public/images/subscene6/wave2_3.svg" alt="">
    <img id="wave6" class="subscene6-wave" src="public/images/subscene6/wave2_2.svg" alt="">

    <img id="wave5_2" class="subscene6-wave" src="public/images/subscene6/wave2_1.svg" alt="">
    <img id="wave5" class="subscene6-wave" src="public/images/subscene6/wave2_1.svg" alt="">
  </section>  
  <!-- SUBSCENE6 CARD CONTAINER - END   -->



  <!-- SUBSCENE6 INFORMATION CONTAINER 2 - START -->
  <section class="subscene6-information-container2">
    <p class="subscene6-title2">handling the response</p>
    <p class="subscene6-description2">
      There can be a variety of reason for which an employer can go for another candidate,
      and it is important to not take it personally. Be gracious and move on to the next potential opportunity.
    </p>

    
    <!-- CARD SECTION -->
    <section class="subscene6-cards-container2">

      <div class="subscene6-card-wrapper2">
        <div id="do-list" class="row center-align">
          <virtual each={do_list}>
            <div class="col s12 m12 l6">
              <img class="subsc6-tip-list-image" src={image} alt="">
            </div>
            <div class="col s12 m12 l6">
              <div class="subsc6-title-container">
                <p class="fancy subscene6-list-title2">{title}</p>
              </div>

              <p each={items} class="subsc6-list-item2">
                <img class="subsc6-not" src="public/images/subscene6/check.svg" alt="">
                {text}
              </p>
            </div>
          </virtual>    
        </div>
      </div>
    </section>

    <div class="center-align">
      <a href="#steps/" class="subscene6-return-btn button button-3d button-action button-pill">Return</a>
    </div>
  </section>
  <!-- SUBSCENE6 INFORMATION CONTAINER 2 - END -->


  <script>  
    import 'subscene6/main2.scss';
    this.on('mount',function(){
      var $node = $(this.root);
    });

    this.dont_list = [
    {
      title:'don\'t',
      image:'public/images/subscene6/dont.svg',
      image_id:'dont_list_image',
      image_alt:'caution tips on your new job',
      items:[
      {
        text:`
        Don't Get caught up in the gossip. It's easy to figure out who the gossiper in the group is
        (and yes, there is always one). They usually come on strong to the 'newbies'.
        `
      },
      {
        text:`
        Don't be a know-it-all. Even if you are correct, your delivery and timing could 
        be off and get you off on the wrong foot. Also, it can give your boss the impression
        that you are not a team player.
        `
      },
      {
        text:`
        Don't make personal calls
        `
      },
      {
        text:`
        Don't use attend to your personal email during business hours
        `
      },
      {
        text:`
        Don't have your cell phone on while in the office unless
        specifically needed to fulfill job responsibilities
        `
      },
      {
        text:`
        Don't shout across to others or lean over the low wall. 
        Use your 'best' manners at all times if you are in cubicle. 
        Remember to keep your voice low on the phone or when talking to 
        someone. (no one wants to hear you fighting personal issues over the phone)
        `
      },
      {
        text:`
        Don't Bring odorous food to the office
        `
      },
      {
        text:`
        Don't wear overpowering scents (you never know who may be allergic or sensitive).
        Avoid heavy use of perfume or after shave.
        `
      },
      {
        text:`
        Don't repay rudeness with rudeness
        `
      }
      ]
    }
    ];




    this.do_list = [
    {
      title:'do',
      image:'public/images/subscene6/do.svg',
      image_id:'do_list',
      image_alt:'tips to practice on your new job',
      items:[
      {
        text:`
        Respect people's time (client, coworker, etc.) by being punctual for meetings.
        `
      },
      {
        text:`
        If you are required to wear a nametag, place it on your right shoulder. When 
        shaking people's hands, they tend to look at that position.
        `
      },
      {
        text:`
        Remember that when at any business related function, even in the evening, you are an 
        employee.
        `
      },
      {
        text:`
        Greet anyone that you encounter when you arrive in the morning and good night at the
        end of the day.
        `
      },
      {
        text:`
        When handed a business card, show respect by reading it throughly and perhaps repeat
        the person's name and thank them for the card.
        `
      },
      {
        text:`
        Treat people at every level with respect.
        `
      }
      ]
    }
    ];
  </script>
</subscene6>