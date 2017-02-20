<scene2-background>
  <!-- HTML -->
  <div class="sc2-background-container">
    <section class="sc2-scenary-container">
      <img class="sc2-floor" src="public/images/scene2/floor.svg" alt="">
      <img class="sc2-bottles animated fadeIn" src="public/images/scene2/bottles_2.svg" alt="">
      <img class="sc2-tanner animated fadeIn hide-on-med-and-up" src="public/images/scene2/tanner.svg" alt="">


      <object class="tanner-shows-animation-container hide-on-small-only" id="EdgeID" type="text/html" width="570" height="420" data-dw-widget="Edge" data="public/animation/tanner_shows/Assets/tanner_shows_animated_cc.html">
      </object>

    </section>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene2/_background.scss';
    this.on('mount', function(){
      var $node = $(this.root);
    });
  </script>
</scene2-background>