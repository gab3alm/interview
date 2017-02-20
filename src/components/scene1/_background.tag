<scene1-background>
  <!-- HTML -->
  <div class="sc1-background-container">
    <section class="sc1-scenary-container">
      <img class="sc1-floor" src="public/images/scene1/floor.svg" alt="">

      <!--       
      <object id="EdgeID" type="text/html" width="1930" height="535" data-dw-widget="Edge" data="public/animation/Roleplay_animated/Assets/Roleplay_animated.html">
      </object> -->

      <object class="tray-animation-container hide-on-small-only" id="EdgeID" type="text/html" width="1930" height="535" data-dw-widget="Edge" data="public/animation/ice_tray_animated/Assets/ice_tray_animated.html">
      </object>

      <object class="icecream-animation-container hide-on-small-only" id="EdgeID" type="text/html" width="570" height="420" data-dw-widget="Edge" data="public/animation/prof_cream_animated/Assets/prof_cream_animated.html">
      </object>

      <img class="sc1-ice_cream hide-on-med-and-up" src="public/images/scene1/podium.svg" alt="">
      <img class="sc1-ice_tray hide-on-med-and-up" src="public/images/scene1/cubes.svg" alt="">
    </section>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene1/_background.scss';
    this.on('mount', function(){
      var $node = $(this.root);
    });
  </script>
</scene1-background>