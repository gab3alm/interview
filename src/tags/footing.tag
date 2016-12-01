<footing>
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- PRESENTATION MARKUP - BEGIN                 -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <div class="container-fluid">
    <div class="row">

      <footer class="footer-wrapper animated slideInUp">
        <img class="footer-logo1" src="src/images/footer_assets/logo.svg" alt="career center logo">
        <section class="address-info-container hide-on-med-and-down">
          <p class="address-info">CAREER CENTER &copy; california state university, northridge</p>
          <p class="address-info">18111 nordhoff street,nortridge, CA 91330 | phone: (818) 677-2878 | <a target="_blank" href="https://www.csun.edu/career">WWW.CSUN.EDU/CAREER</a></p>
        </section>

        <section class="social-media-container">
          <virtual each={ social_link in social_media_items }>
            <a class="social_media_link" target="_blank" href={social_link.url}>
              <img class="tooltipped" data-position="top" data-delay="30" data-tooltip={social_link.title} src={social_link.src} alt={social_link.title}>
            </a>
          </virtual>
        </section>
      </footer>

    </div>
  </div>

  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- STYLES BEGIN                                -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <style>
    .footer-wrapper{
      /*background-color:rgba(0,0,0,.75);*/
      background-color:#282828;
      width:100%;
      height:55px;
      position:fixed;
      bottom:0px;
      left:0px;
      z-index:1002;
    }

    .footer-logo1{
      /*border:2px solid green;*/
      height:100%;
      width:auto;
      padding:.5%;
    }

    .address-info-container{
      /*border:2px solid green;*/
      display:inline-block;
      height:100%;
      margin:.4% 0px 0px 0px;
      position:absolute;
      top:0px;
    }

    .address-info{
      /*border:2px solid green;*/
      font-family:'abel';
      font-size:1em;
      color:white;
      text-transform: capitalize;
      margin:0px;
    }

    .social-media-container{
      /*border:2px solid green;*/
      height:100%;
      display:inline-block;
      float:right;
    }

    .social_media_link > img{
      height:100%;
      padding:6%;
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
    {title:'Facebook Career Center', src: 'src/images/footer_assets/facebook.svg', url: 'https://www.facebook.com/CSUNCareerCenter'},
    {title:'Instagram Career Center', src: 'src/images/footer_assets/instagram.svg', url: 'https://www.instagram.com/csuncareercenter'},
    {title:'Twitter Career Center', src: 'src/images/footer_assets/twitter.svg', url: 'https://twitter.com/CSUNCareerCtr'},
    {title:'LinkedIn Career Center', src: 'src/images/footer_assets/linkedin.svg', url: 'https://www.linkedin.com/in/csuncareerctr'},
    {title:'Youtube Career Center', src: 'src/images/footer_assets/youtube.svg', url: 'https://www.youtube.com/user/CsunCareerCenter'},
    ];
  </script>
</footing>
