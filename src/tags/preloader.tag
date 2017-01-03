<preloader>
  <!-- HTML MARKUP -->
  <div id="loader-wrapper">
    <div id="loader">
      <div id="animation-container">
        <img id="loader-logo" class="animated rotateIn infinite" src="public/images/preloader/color-logo.svg" alt="csun logo">
        <img id="loader-csun" class="animated pulse" src="public/images/preloader/logo-white.svg" alt="csun logo">
      </div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
  </div>  
  
  <!-- CSS RULES -->
  <style>
    #animation-container
    {
      position:relative;
      width:100%;
      margin-top:25%;
      z-index:1002;
    } 

    #loader-logo{
      position:absolute;
      top:0px;
      left:42.5%;
      width:5%;
      animation-duration: 1.5s;
    }

    #loader-csun{
      position:absolute;
      top:0px;
      left:25%;
      width:50%;
      animation-duration:2s;
    }

    #loader-wrapper .loader-section{
      position:absolute;
      top:0px;
      width:51%;
      height:100%;
      background:#222222;
      z-index:1000;
    }

    #loader-wrapper .loader-section.section-left{
      left:0;
    }

    #loader-wrapper .loader-section.section-right{
      right:0;
    }

    #loader{
      z-index:1001;
    }

    /*Preloader Transition*/
    .loaded #loader-wrapper .loader-section.section-left{
      -webkit-transform:translateX(-100%); /* Chrome */
      -ms-transform:translateX(-100%); /* IE9 */
      transform:translateX(-100%); /* firefox */
    }

    /*Preloader Transition*/
    .loaded #loader-wrapper .loader-section.section-right{
      -webkit-transform:translateX(100%); /* Chrome */
      -ms-transform:translateX(100%); /* IE9 */
      transform:translateX(100%); /* firefox */
    }

    .loaded #loader
    {
      opacity:0;
      -webkit-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;

      -webkit-transition: all 0.3s 0.6s ease-out;
      transition: all 0.3s 0.6s ease-out;
    }

    .loaded #loader-wrapper
    {
      visibility: hidden;
      -webkit-transition: all 0.3s 1s ease-out; 
      transition: all 0.3s 1s ease-out;
    }

    .loaded #loader-wrapper .loader-section.section-left,
    .loaded #loader-wrapper .loader-section.section-right
    {
      /*the first 0.3 defines the animation duration*/
      /*the second 0.3 defines the animation delayR*/
      -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
      transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }
  </style>

  <!-- SCRIPT STUFF -->
  <script>

    this.on('mount', function(){
      var $node = $(this.root);

      setTimeout(function(){
        $('#loader-wrapper').addClass('loaded');
      }, 3000);

      setTimeout(function(){
        $node.find('.logo-initial').fadeOut(900);
        setTimeout(function(){
          $node.find('.logo-later').fadeIn(2000);
        }, 1000);
      }, 1000);
    });
  </script>
</preloader>