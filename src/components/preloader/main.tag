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
  
  <!-- SCRIPT STUFF -->
  <script>
    import 'preloader/main.scss';
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