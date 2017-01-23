<scene1-background>
  <!-- HTML -->
  <div class="sc1-background-container">
    <section class="sc1-scenary-container">
      <img class="sc1-floor" src="public/images/scene1/floor.svg" alt="">
      <img class="sc1-ice_cream" src="public/images/scene1/podium.svg" alt="">
      <img class="sc1-ice_tray" src="public/images/scene1/cubes.svg" alt="">
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