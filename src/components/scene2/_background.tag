<scene2-background>
  <!-- HTML -->
  <div class="sc2-background-container">
    <section class="sc2-scenary-container">
      <img class="sc2-floor" src="public/images/scene2/floor.svg" alt="">
      <img class="sc2-bottles" src="public/images/scene2/bottles_2.svg" alt="">
      <img class="sc2-tanner" src="public/images/scene2/tanner.svg" alt="">
      
      

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