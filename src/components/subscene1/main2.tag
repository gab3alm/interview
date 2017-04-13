<subscene1>
  <!-- SUBSCENE1 SCENARY -->
  <div class="subscene1-scenary-container">
    <img class="subscene1-floor" src="public/images/subscene1/floor.svg" alt="">
    <div class="subscene1-scenary">

      <object class="sub1_tray-animation-container hide-on-small-only" id="EdgeID" type="text/html" width="1930" height="535" data-dw-widget="Edge" data="public/animation/ice_tray_animated/Assets/ice_tray_animated.html">
      </object>

      <object class="sub1_icecream-animation-container hide-on-small-only" id="EdgeID" type="text/html" width="570" height="420" data-dw-widget="Edge" data="public/animation/prof_cream_animated/Assets/prof_cream_animated.html">
      </object>

      <img class="subscene1-tray animated slideInLeft hide-on-med-and-up" src="public/images/subscene1/tray.svg" alt="">
      <img class="subscene1-icecream hide-on-med-and-up" src="public/images/subscene1/icecream.svg" alt="">
    </div> 
  </div>
  <!-- SUBSCENE1 SCENARY -->

  <!-- SUBSCENE1 INFORMATION CONTAINER -->
  <div class="subscene1-information-container">
    <img id="wave3" class="subscene1-wave" src="public/images/subscene1/wave1_2.svg" alt="">
    <img id="wave4" class="subscene1-wave" src="public/images/subscene1/wave1_3.svg" alt="">
    <img id="wave1" class="subscene1-wave" src="public/images/subscene1/wave1.svg" alt="">
    <img id="wave2" class="subscene1-wave" src="public/images/subscene1/wave1.svg" alt="">



    <div class="subscene1-information">
      <p class="subscene1-title">starting a job search</p>
      <p class="subscene1-description">
        From Pathways to SUNlink, the CSUN Career Center Website has made the job hunting process a bit easier. SUNlink lists jobs and connects students to companies looking specifically hire CSUN students, and Pathways links your area of study or desired occupations to relevant companies that are hiring. By browsing these job search databases, you can get a better feel for what opportunities are out there.
      </p>
    </div>
  </div>
  <!-- SUBSCENE1 INFORMATION CONTAINER -->



  <!-- SUBSCENE1 CARD CONTAINER -->
  <div class="subscene1-card-container">

    <!-- CARDS SECTION -->
    <div class="subscene1-cards-container">
      <div class="row">

        <virtual each={cards}>
          <div class="col s12 m6 l4">

            <div class="subscene1-card">

              <div class="subscene1-card-image-container">
                <img id={image_id} class="subscene1-card-image" src={image} alt="">
              </div>

              <div class="subscene1-card-title-container">
                <p class="subscene1-card-title">{title}</p>
              </div>

              <div class="subscene1-card-description-container hoverable">
                <virtual each={description}>
                  <p class="subscene1-card-description">{text}</p>
                </virtual>
                <div if={button} class="center-align">
                  <a href={link} target="_blank" class="subscene1-card-btn button button-3d button-primary button-pill">learn more</a>
                </div>

              </div>


            </div>
          </div>  
        </virtual>
        
      </div>
    </div>


    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <!-- WAVE SECTION                             -->
    <!-- |||||||||||||||||||||||||||||||||||||||| -->
    <img id="wave8" class="subscene1-wave" src="public/images/subscene1/wave2_4.svg" alt="">
    <img id="wave7" class="subscene1-wave" src="public/images/subscene1/wave2_3.svg" alt="">
    <img id="wave6" class="subscene1-wave" src="public/images/subscene1/wave2_2.svg" alt="">

    <img id="wave5_2" class="subscene1-wave" src="public/images/subscene1/wave2_1.svg" alt="">
    <img id="wave5" class="subscene1-wave" src="public/images/subscene1/wave2_1.svg" alt="">

  </div>
  <!-- SUBSCENE1 CARD CONTAINER -->





  <!-- SUBSCENE1 INFORMATION SECTION2 -->

  <div class="subscene1-information-container2">
    <p class="subscene1-title2">more resources</p>

    <!-- CARDS SECTION -->
    <div class="subscene1-cards-container">
      <div class="row">

        <virtual each={resource_cards}>
          <div class="col s12 m6 l4">

            <div class="subscene1-card">

              <div class="subscene1-card-image-container">
                <img id={image_id} class="subscene1-card-image" src={image} alt="">
              </div>

              <div class="subscene1-card-title-container">
                <p class="subscene1-card-title">{title}</p>
              </div>

              <div class="subscene1-card-description-container hoverable">
                <virtual each={description}>
                  <p class="subscene1-card-description">{text}</p>
                </virtual>
                <div if={button} class="center-align">
                  <a href={link} target="_blank" class="subscene1-card-btn button button-3d button-primary button-pill">visit</a>
                </div>

              </div>


            </div>
          </div>  
        </virtual>
        
      </div>
      <div class="center-align">
        <a href="#steps/" class="subscene1-return-btn button button-3d button-primary button-pill">Return</a>
      </div>
    </div>
  </div>



  <!-- SUBSCENE1 INFORMATION SECTION2 -->







  <script>
    import 'subscene1/main2.scss';
    this.on('mount', function(){
      var $node = $(this.root);

      // $node.find('#wave3').animate({
      //   left:'100%'
      // }, 10000);

      // $node.find('#wave4').animate({
      //   right:'100%'
      // }, 10000);

    }); 



    this.cards = [
    {
      image:'public/images/subscene1/take_initiative.svg',
      image_id:'banana_orange',
      title:'take initiative',
      description:[
      {
        text:`
        If there is a particular company that you’d love to work for, 
        but they aren’t currently hiring, it never hurts to drop off 
        a resume in person or sending the company an email!
        `
      },
      {
        text:`
        It shows passion and interest in any future jobs, and you may 
        just impress them enough to make a place for you.
        `
      }
      ],
      button:false,
      link:''
    },
    {
      image:'public/images/subscene1/networking.svg',
      image_id:'banana_corn',
      title:'networking',
      description:[
      {
        text:`
        Networking is always a beneficial practice. 
        `
      },
      {
        text:`
        Contact People you know, whether friends or family, to see if they know of any opportunities that suit you.
        `
      },
      {
        text:`
        They’re prior knowledge of your interest and potential can be great benefit to your job searching endeavors.
        `
      }
      ],
      button:false,
      link:''
    },
    {
      image:'public/images/subscene1/mocktail.svg',
      image_id:'orange_pear',
      title:'networking practice',
      description:[
      {
        text:`
        Consider attending our Mocktail event for practice!
        `
      }
      ],
      button:true,
      link:'http://www.csun.edu/career'
    }
    ];



    this.resource_cards = [
    {
      image:'public/images/logo3.svg',
      image_id:'csun_career_center_logo',
      title:'Career Center',
      description:[
      {
        text:`
        The CSUN Career Center is committed to ensuring you will be ready for when you start looking for job opportunities
        `
      }
      ],
      button:true,
      link:'http://www.csun.edu/career'
    },
    {
      image:'public/images/subscene1/placeholder.svg',
      image_id:'pathways_logo',
      title:'pathways',
      description:[
      {
        text:`
        Pathways contains valuable career information and resources that allow students to find a sense of purpose and become job search ready.
        `
      }
      ],
      button:true,
      link:'https://pathways.studentaffairs.csun.edu/login'
    },
    {
      image:'public/images/subscene1/placeholder.svg',
      image_id:'sunlink_logo',
      title:'Sunlink',
      description:[
      {
        text:`
        SUNlink is our online job board and career services system through which students can apply for jobs or internships, sign up for events or conduct practice interviews.
        `
      }
      ],
      button:true,
      link:'https://csun-csm.symplicity.com'
    }
    ];
  </script>
</subscene1>