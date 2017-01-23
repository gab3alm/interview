<homepage-background>
  <!-- HTML -->
  <div class="homepage-container">


    <ul id="scene">
      <!-- STATIC LAYER, NOTHING MOVES HERE -->
      <li class="layer" data-depth="0.00"></li>
      
      <!-- CLOUD LAYERS -->
      <li class="layer" data-depth="0.10">
        <img id="hp-cloud" class="hp-cloud1" src="public/images/homepage/backcloud.svg" alt="">
      </li>

      <li class="layer" data-depth="0.15">
        <img id="hp-cloud" class="hp-cloud2" src="public/images/homepage/forecloud.svg" alt="">
      </li>

      <li class="layer" data-depth="0.20">
        <img id="hp-cloud" class="hp-cloud3" src="public/images/homepage/forecloud.svg" alt="">
      </li>

      <!-- LAMP 2 LAYER -->
      <li class="layer" data-depth="0.25">
        <div id="hp-outer-lamp-container" class="lamp-container-2"><!-- absolute container -->
          <div id="hp-inner-lamp-container"><!-- relative container -->
            <img id="lamp2" class="lamp" src="public/images/homepage/lamp.svg" alt="">            
            <img id="light2" class="light" src="public/images/homepage/light.svg" alt="">            
          </div>
        </div>
      </li>

      <!-- FLOOR & FRIDGE - LAYER -->
      <li class="layer" data-depth="0.30">
        <img class="hp-floor" src="public/images/homepage/floor.svg" alt="">
        <img class="hp-fridge" src="public/images/homepage/fridge_shadow2.svg" alt="">
      </li>


      <!-- LAMP 1 LAYER -->
      <li class="layer" data-depth="0.35">
        <div id="hp-outer-lamp-container" class="lamp-container-1"><!-- absolute container -->
          <div id="hp-inner-lamp-container"><!-- relative container -->
            <img id="lamp1" class="lamp" src="public/images/homepage/lamp.svg" alt="">            
            <img id="light1" class="light" src="public/images/homepage/light.svg" alt="">            
          </div>
        </div>
      </li>

      <!-- TANNER LAYER -->
      <li class="layer" data-depth="0.40">
        <img class="hp-tanner" src="public/images/homepage/tangerine.svg" alt="">
      </li>

      <!-- LAMP 3 LAYER -->
      <li class="layer" data-depth="0.45">
        <div id="hp-outer-lamp-container" class="lamp-container-3"><!-- absolute container -->
          <div id="hp-inner-lamp-container"><!-- relative container -->
            <img id="lamp3" class="lamp" src="public/images/homepage/lamp.svg" alt="">            
            <img id="light3" class="light" src="public/images/homepage/light.svg" alt="">            
          </div>
        </div>
      </li>

    </ul>


  </div>    


  <!-- SCRIPTS -->
  <script>
    import 'homepage/_background.scss';
    import 'parallax.js';  
    this.on('mount', function(){
      var $node = $(this.root);
      $node.find('#scene').parallax();
    });
  </script>
</homepage-background>