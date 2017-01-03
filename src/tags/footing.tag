<footing>
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- PRESENTATION MARKUP - BEGIN                 -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <div id="footer-container">
    <!-- SCHOOL INFORMATION -->
    <div id="footer-information">
      <img class="csun-logo" src="public/images/logo.svg" alt="CSUN Logo">
      <div id="address-container">
        <p class="address">career center &copy; california state university, northridge</p>
        <p class="address">18111 nordhoff street, northridge, CA 91330 | phone: (818) 677-2878 | <a target="_blank" href="http://www.csun.edu/career">WWW.CSUN.EDU/CAREER</a></p>

      </div>
    </div>
    <!-- SOCIAL MEDIA LINKS -->
    <div id="footer-social">
      <virtual each={social_media_items}>
        <div class="social-media-icon-container center-align tooltipped" data-position="top" data-delay="50" data-tooltip={title}>
          <a target="_blank" href={url}>
            <!-- <img src={src} alt={title} class="social-media-icon"> -->



          </a>
        </div>
      </virtual>
    </div>
  </div>

  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- STYLES BEGIN                                -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <style>
    #footer-container{
      height:50px;
      width:100%;
      background-color:rgba(0,0,0,.85);
      position:fixed;
      bottom:0px;
      left:0;
      z-index:100;
    }

    #footer-information{
      height:100%;
      float:left;
    }

    #footer-social{
      height:100%;
      float:right;
    }

    #address-container{
      height:100%;
      display:inline-block;
      margin:5px 0 5px 10px;
    }

    .csun-logo{
      height:30px;
      margin-left:10px;
      display:inline-block;
    }

    .address{
      font-family:'abel';
      font-size:1em;
      text-transform: capitalize;
      color:white;

      margin:0;
      padding:0;
    }

    .social-media-icon-container{
      height:100%;
      width:50px;
      display:inline-block;
      padding:10px;
    }

    .social-media-icon{
      height:100%;
    }

    .social-media-icon-container:hover #facebook{
      fill:#fff;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      #footer-information{
        width:auto;
        float:left;
        /*display:none;*/
      }

      #address-container{
        display:none;
      }

      .csun-logo{
        margin:15px 0 0 10px;
        height:25px;
      }

      .social-media-icon-container{
        /*border:2px solid green;*/
        height:80%;
        width:40px;
        display:inline-block;
        padding:5px;
        margin:5px 0;
      }

      .social-media-icon{
        height:100%;
      }
    }

  </style>


  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- SCRIPTS BEGIN - LOGIC                       -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <script>
    // right after the tag is mounted on the page
    var facebook =
    `
    <svg class="social-media-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.84 67.87">
      <defs><style>.cls-1{fill:#fff;}</style></defs>
      <title>Facebook</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path id="facebook" fill="#116a94" d="M21.84,67.87H7.28V33.93H0V22.23H7.28v-7C7.28,5.68,11.38,0,23.05,0h9.72V11.7H26.7c-4.54,0-4.85,1.64-4.85,4.68l0,5.85h11l-1.29,11.7H21.84Z"/>
          </g>
        </g>
      </g>
    </svg>
    `;

    this.on('mount', function() {
      var $node = $(this.root);
      $node.find('.tooltipped').tooltip({delay: 50});
    })

    this.social_media_items = [
    {title:'Facebook', src: 'public/images/footer/facebook.svg', url: 'https://www.facebook.com/CSUNCareerCenter'},
    {title:'Instagram', src: 'public/images/footer/instagram.svg', url: 'https://www.instagram.com/csuncareercenter'},
    {title:'Twitter', src: 'public/images/footer/twitter.svg', url: 'https://twitter.com/CSUNCareerCtr'},
    {title:'LinkedIn', src: 'public/images/footer/linkedin.svg', url: 'https://www.linkedin.com/in/csuncareerctr'},
    {title:'Youtube', src: 'public/images/footer/youtube.svg', url: 'https://www.youtube.com/user/CsunCareerCenter'},
    ];



  </script>
</footing>
