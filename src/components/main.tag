<main>
  <!-- HTML -->
  <preloader></preloader>

  <div class="app-outer-container">
    <div class="app-container">

      <!-- viewport is used by route in routes.js -->
      <div id="viewport">
      </div>

      <navbar></navbar>
      <footing></footing>
    </div>
  </div>

  <!-- SCRIPT -->
  <script>
    this.on('mount', function(){
      var $node = $(this.root);
      // transition the loader into homepage, nice and smooth
      $node.find('.app-outer-container').hide();
      setTimeout(function(){
        $node.find('.app-outer-container').fadeIn();
      }, 3000);
    });

  </script>

  <!-- SOME STYLE HERE -->
  <style>
    .app-outer-container{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100vh;
    }

    .app-container{
      height:100vh;
      width:100%;
      position:relative;
      overflow:auto;
    }

    #viewport{
      width:100%;
      height:100vh;
      overflow:auto;
      margin:0;
    }

    navbar{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:auto;
    }

    footing{
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
    }
  </style>
</main>