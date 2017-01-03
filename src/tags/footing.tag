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
          <a target="_blank" href={url}><img src={src} alt={title} class="social-media-icon"></a>
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
