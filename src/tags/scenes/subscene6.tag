<subscene6>
  <!-- HTML MARKUP -->
  <div class="container-fluid">
    <!-- main scene imagery -->
    <section class="row">
      <div class="col s12">
        <div class="imagery">
          <img class="floor" src="src/images/scene2-main/floor.svg" alt="">
        </div>        
      </div>  
    </section>


    <!-- Navigation buttons -->
    <div class="row">
      <div class="col s12"></div>
    </div>

    <!-- Scene view -->
    <div class="row center-align">
      <div id="interview-viewport" class="col s12">
        <interview-preparation-viewport></interview-preparation-viewport>
        

        <p class="scene-title fancy"><span>accepting the job</span></p>
        <p class="scene-description">
          Congratulations! <br>
          Once you have been hired, there are still some important tips 
          to getting started at your new place of employment.
        </p>

        <div class="row">
          <div class="col s12 m6 push-m6">
            <img class="circle-img" src="" alt="">
          </div>          
          <div class="col s12 m6 pull-m6">
            <p class="scene-title fancy"><span>Don't</span></p>
            <ul class="tip-lists">
              <li each={dont} class="tip-list-item">{title}</li>
            </ul>
          </div>          
        </div>


        <div class="row">
          <div class="col s12 m6">
            <img class="circle-img" src="" alt="">
          </div>          
          <div class="col s12 m6">
            <p class="scene-title fancy"><span>Do</span></p>
            <ul class="tip-lists">
              <li each={do} class="tip-list-item">{title}</li>
            </ul>
          </div>          
        </div>
        


        <hr style="width:80%;">
        <hr style="width:80%;">

      </div>
    </div>
  </div>  


  <!-- STYLES -->
  <style>
    .tip-lists{
      font-family:'abel';
      font-size:1.2em;
      text-transform: capitalize;
      text-align:left;
      margin:0 0 0 6%;
      padding:0 10% 0 0;
    }

    .tip-list-item{
      list-style: circle outside none !important;
      /*list-style: disc outside none;*/
      display: list-item;
      margin:1em 0 0 0;

    }

    .section-title{
      font-family:'abel';
      font-size:2.0em;
      color:rgba(0,0,0,.75);
      text-transform: capitalize;
      text-align:left;
      margin:5% 0 0 5%;
    }

    .hide{
      display:none;
    }

    .card-panel{
      margin:5%;
      background-color:rgba(0,0,0,.25);
      min-height:500px;
    }

    .circle-img{
      background-color:rgba(0,0,0,.85);
      height:120px;
      width:120px;
      border-radius:50%;
    }

    .card-title{
      font-family:'pattaya';
      color:rgba(0,0,0,.85);
      font-size:2em;
      text-transform: capitalize;
      margin:0px;
    }

    .card-description{
      font-family:'abel';
      color:rgba(0,0,0,.85);
      font-size:1.2em;
      text-transform: capitalize;
      padding:0px 5% 0px 5%;
      text-align:left;
    }

    .section-description{
      font-family:'abel';
      font-size:1.5em;
      color:rgba(0,0,0,.75);
      padding:0px 25% 0px 25%;
      text-align:center;
      /*margin:12px 0px 0px 0px;*/
    }

    .section-description-list{
      text-align:left;
      font-family:'abel';
      font-size:1.2em;
      color:rgba(0,0,0,.65);
      display:list-item;
      list-style-position:inside;
      list-style-type:circle;
    }

    /*css for title bars - START*/
    .fancy{
      overflow: hidden;
      text-align: center;
    }

    .fancy span{
      position: relative;
    }

    .fancy span:before,
    .fancy span:after{
      content: ""; 
      position: absolute;
      top: 50%; margin-top: -.2em;
      height: .2em;
      border-top: 1px solid rgba(0,0,0,.25);
      border-bottom: 1px solid rgba(0,0,0,.25);
      width: 150%;
    }

    .fancy span:before {  
      right: 100%;
      margin-right: .5em;
    }

    .fancy span:after {  
      left: 100%;
      margin-left: .5em;
    }
    /*css for title bars - END*/

    .row, .col{
      padding:0 !important;
      margin:0 !important;
    }

    .scene-title{
      font-family:'pattaya';
      font-size:2.5em;
      color:rgba(0,0,0,.75);
      text-transform: capitalize;
    }

    .scene-description{
      font-family:'abel';
      font-size:1.5em;
      padding:0 30% 0 30%;
      color:rgba(0,0,0,.75);
      text-transform: capitalize; 
      text-align:center;
    }

    .scene-control-holder{
      height:70vh;
      line-height:1em;
      position:relative;
    }

    .scene-control-btn{
      position:absolute;
      top:50%;
      font-size:3.5em;
      margin:0px 10px 0px 10px;

      border-radius: 50%;
      height:50px;
      width:50px;
      transition:all 0.3s ease-out;
    }

    .scene-control-btn:hover{
      transition:all 0.5s ease-out;
      background-color:rgba(0,0,0,.5);
      color:white;
      transform:scale(1.2);
      cursor:pointer;
    }

    #prev{
      left:0;
    }

    #next{
      right:0;
    }

    #main-viewport{
      background-color:rgba(0,0,155,.1);
    }

    .imagery{
      position:relative;
      height:30vh;
      width:100%;

      background-image:url('src/images/scene2-main/background.svg');
      background-size:cover;
      background-position: center;
      overflow:hidden;
    } 

    .floor{
      position:absolute;
      bottom:0%;
      left:0;
      width:100%;
    }

    #interview_viewport{
      position:relative;
      min-height:70vh;
      height:auto;
    }

    /*Styles for Med size screens*/
    /* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      .scene-description{
        padding:0 15% 0 15%;
      }

      .section-description{
        padding:0 5% 0 5%;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      .scene-description{
        padding:0 15% 0 15%;
      }
      .card-panel{
        min-height:auto;
      }
      .section-description{
        padding:0 5% 0 5%;
      }
    }
  </style>


  <!-- SCRIPT -->
  <script>
    this.dont = [
    {title:
      `
      get caught in gossip. It\'s easy to figure out who the gossiper in the group is.
      They usually come on strong to the 'newbies'
      `
    },
    {title:
      `
      Don't be a know-it-all. Even if you are correct, your delivery and timing could be off
      and get you off on the wrong foot. Also, it can give your boss the impression that you are 
      not a team player.        
      `
    },
    {title:
      `
      Don't make personal calls.  
      `
    },
    {title:
      `
      Don't use the e-mail for any kind of personal use during business hours.  
      `
    },
    {title:
      `
      Don't have your cell phone on while in the office unless specifically needed to fulfill job responsibilities.
      `
    },
    {title:
      `
      Don't shout across to others or lean over the low wall. Use your 'best' manners at all times 
      if you are in a cubicle. Use your low voice on the phone, or when you are talking to someone
        (No one wants to hear your fights with your boyfriend/girlfriend/friends/family/pets).  
      `
    },
    {title:
      `
      Bring odorous food to the office.
      `
    },
    {title:
      `
      Don't wear overpowering scents. (You never know if someone might have allergies/sensitive nose)
      `
    },
    ];


    this.do = [
    {
      title:
      `
      Respect people's time (client/coworker/etc) by being punctual for meetings.
      `
    },
    {
      title:
      `
      If wearing a nametag, place it on your right shoulder. When people shake hands with you,
      they usually tend to look there.        
      `
    },
    {
      title:
      `
      Remember that when at any business related function, even in the evening, you are an employee.
      `
    },
    {
      title:
      `
      Say hello to good morning to anyone you encounter when you arrive in the morning and good night at the end of the day.
      `
    },
    {
      title:
      `
      When handed a business card, show respect by reading it throughly and perhaps repeat the person's name and thank them for the card.
      `
    },
    ];
  </script>
</subscene6>  