<scene4-background>
  <!-- HTML -->
  <div class="sc4-background-container animated fadeIn">
    <section class="sc4-scenary-container">
      <img class="sc4-floor" src="public/images/scene4/floor.svg" alt="">

      <img class="sc4-jelly" src="public/images/scene4/jelly.svg" alt="">
      <img class="sc4-cream" src="public/images/scene4/cream.svg" alt="">
      <img class="sc4-mustard" src="public/images/scene4/mustard.svg" alt="">
      <img class="sc4-ketchup" src="public/images/scene4/ketchup.svg" alt="">
      <img class="sc4-desk" src="public/images/scene4/desk.svg" alt="">

      
      <!-- <object class="desk-animation hide-on-small-only" id="EdgeID" type="text/html" width="570" height="420" data-dw-widget="Edge" data="public/animation/dr_ban_animated/Assets/dr_ban_animated.html"></object> -->

    </section>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene4/_background.scss';
    this.on('mount', function(){
      var $node = $(this.root);
    });
  </script>
</scene4-background>