<scene1-background>
  <!-- HTML -->
  <div class="sc1-background-container">
    <section class="sc1-scenary-container">
      <img class="sc1-floor" src="public/images/scene1/floor.svg" alt="">


      <!-- <div id="icecream-animation-container"></div> -->

      <!-- <div id="tray-animation-container"> -->
<!--         <div id="animation_container" style="width:550px; height:400px">
          <canvas id="canvas" width="550" height="400" style="position: absolute; display: none;"></canvas>
          <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:550px; height:400px; position: absolute; left: 0px; top: 0px; display: none;">
          </div>
        </div>
        <div id='_preload_div_' style='display: inline-block; height:400px; width: 550px; vertical-align=middle;position:absolute;left:0px;top:0px;text-align: center;'>  
        </div> -->
      <!-- </div> -->
      <img class="sc1-ice_cream animated slideInRight" src="public/images/scene1/podium.svg" alt="">
      <img class="sc1-ice_tray animated slideInLeft" src="public/images/scene1/cubes.svg" alt="">
    </section>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene1/_background.scss';
    this.on('mount', function(){
      var $node = $(this.root);
      // $node.find('#tray-animation-container').load('public/animation/ice_tray/animation.html');
      // $node.find('#icecream-animation-container').load('public/animation/prof_cream/animation.html');
    });
  </script>
</scene1-background>