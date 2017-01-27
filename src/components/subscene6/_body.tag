<subscene6-body>

  <!-- HTML -->
  <section class="subscene6-information-container">
    <p class="fancy subsc6-title"><span>accepting the job</span></p>
    <p class="subsc6-description">
      <span class="subsc6-greeting">Congratulations!</span>
      <br>
      Once you have been hired, there are still some important tips
      to getting started at your new place of employment
    </p>
  </section>


  <!-- CARD CONTAINER - START -->
  <section class="subscene6-cards-container">
    <div class="row">

      <virtual each={cards}>
        <div class="col s12 m6 l6">
          <div class="card-container center-align">

            <img class="subsc6-card-image" id={image_id} src={image} alt={image_alt}>
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
  <section class="subscene6-tip-list">

    <div class="row center-align">
      <virtual each={dont_list}>
        <div class="col s12 m12 l6 push-l6">
          <img class="subsc6-tip-list-image" src={image} id={image_id} alt={image_alt}>
        </div>
        <div class="col s12 m12 l6 pull-l6">

          <div class="subsc6-title-container">
            <p class="fancy subsc6-title"><span>{title}</span></p>
          </div>

          <p each={items} class="subsc6-list-item"> 
            <img class="subsc6-not" src="public/images/subscene6/not.svg" alt="">
            {text}
          </p>
        </div>
      </virtual>    
    </div>

    
    <div id="do-list" class="row center-align">
      <virtual each={do_list}>
        <div class="col s12 m12 l6">
          <img class="subsc6-tip-list-image" src={image} alt="">
        </div>
        <div class="col s12 m12 l6">
          <div class="subsc6-title-container">
            <p class="fancy subsc6-title"><span>{title}</span></p>
          </div>

          <p each={items} class="subsc6-list-item">
            <img class="subsc6-not" src="public/images/subscene6/check.svg" alt="">
            {text}
          </p>
        </div>
      </virtual>    
    </div>

  </section>
  <!-- DO's & Dont's List - END -->



  <div class="center-align">
    <a href="#steps/" class="reg-btn button button-3d button-royal button-pill">Return</a>
  </div>



  <!-- SCRIPT -->
  <script>
    import 'subscene6/_body.scss';
    this.on('mount', function(){
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

</subscene6-body>
