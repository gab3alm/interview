<main>
  <!-- HTML MARKUP -->
  <preloader></preloader>
  <homepage></homepage>
  
  <!-- CSS RULES -->
  <style>
    homepage{
      position:absolute;
      top:0;
      left:0;
      width:100%;
    }
  </style>

  <!-- SCRIPT STUFF -->
  <script>
    this.on('mount', function(){
      var $node = $(this.root);
      // transition the loader into homepage, nice and smooth
      $node.find('homepage').hide();
      setTimeout(function(){
        $node.find('homepage').fadeIn();
      }, 3500);
    });
  </script>
  
</main>