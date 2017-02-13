<scene6-background>
  <!-- HTML -->
  <!-- <div class="test"></div> -->

  <div class="sc6-background-container">
    <section class="sc6-scenary-container">
      <img class="sc6-floor" src="public/images/scene6/floor.svg" alt="">

      <img class="sc6-cubicles animated fadeIn" src="public/images/scene6/cubicles.svg" alt="">
      <img class="sc6-peeps animated fadeIn" src="public/images/scene6/characters.svg" alt="">

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