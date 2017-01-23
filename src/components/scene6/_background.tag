<scene6-background>
  <!-- HTML -->
  <!-- <div class="test"></div> -->

  <div class="sc6-background-container">
    <section class="sc6-scenary-container">
      <img class="sc6-floor" src="public/images/scene6/floor.svg" alt="">

      <img class="sc6-cubicles" src="public/images/scene6/cubicles.svg" alt="">
      <img class="sc6-peeps" src="public/images/scene6/characters.svg" alt="">


      <!-- <div class="sc6-down-arrow-container animated bounce infinite tooltipped" data-position="top" data-delay="50" data-tooltip="Scroll Down">
        <svg class="sc6-down-arrow" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
        </svg>  
      </div> -->
      

    </section>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene6/_background.scss';
    this.on('mount', function(){
      var $node = $(this.root);
      $node.find('.tooltipped').tooltip({delay: 50});
    });
  </script>
</scene6-background>