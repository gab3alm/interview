<scene5-background>
  <!-- HTML -->
  <div class="sc5-background-container">
    <section class="sc5-scenary-container">
      <img class="sc5-floor" src="public/images/scene5/floor.svg" alt="">

      <img class="sc5-shake" src="public/images/scene5/shake.svg" alt="">
      <img class="sc5-chocolate" src="public/images/scene5/chocolate.svg" alt="">
      <img class="sc5-cheesecake" src="public/images/scene5/cheesecake.svg" alt="">
      <img class="sc5-telephone" src="public/images/scene5/phonebooth.svg" alt="">

      

    </section>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene5/_background.scss';
    this.on('mount', function(){
      var $node = $(this.root);
    });
  </script>
</scene5-background>