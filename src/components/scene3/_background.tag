<scene3-background>
  <!-- HTML -->
  <div class="sc3-background-container">
    <section class="sc3-scenary-container">
      <img class="sc3-floor" src="public/images/scene3/floor.svg" alt="">

      <img class="sc3-bed" src="public/images/scene3/cheesebed2.svg" alt="">
      <img class="sc3-glass" src="public/images/scene3/glass2.svg" alt="">
      <img class="sc3-closet" src="public/images/scene3/closet-milk.svg" alt="">
      
      

    </section>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene3/_background.scss';
    this.on('mount', function(){
      var $node = $(this.root);
    });
  </script>
</scene3-background>