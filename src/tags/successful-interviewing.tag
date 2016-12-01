<successful-interviewing>
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- PRESENTATION MARKUP - BEGIN                 -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <navigation-bar></navigation-bar>
  <div id="sub-viewport">
    <scene1></scene1>
    <scene2></scene2>
    <scene3></scene3>
    <scene4></scene4>
    <scene5></scene5>
    <scene6></scene6>
  </div>
  <footing></footing>

  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- STYLES BEGIN                                -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <style>
  </style>


  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- SCRIPTS BEGIN - LOGIC                       -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <script>
    this.on('mount', function() {
      var $node = $(this.root);
      $node.find('#sc1-next-btn').click(function(){smoothSceneScroll('#scene2')});
      $node.find('#sc2-next-btn').click(function(){smoothSceneScroll('#scene3')});
      $node.find('#sc3-next-btn').click(function(){smoothSceneScroll('#scene4')});
      $node.find('#sc4-next-btn').click(function(){smoothSceneScroll('#scene5')});
      $node.find('#sc5-next-btn').click(function(){smoothSceneScroll('#scene6')});
    });

    function smoothSceneScroll(destiny){
      $(opts.body).animate({
        scrollTop: $(destiny).offset().top
      }, 1500);
    }
  </script>


</successful-interviewing>