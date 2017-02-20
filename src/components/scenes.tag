<scenes>
  <!-- HTML -->
  <div id="scenes-container">
    <scene1></scene1>
    <scene2></scene2>
    <scene3></scene3>
    <scene4></scene4>
    <scene5></scene5>
    <scene6></scene6>  
  </div>
  

  <!-- SCRIPT -->
  <script>
    this.on('mount', function(){
      var $node = $(this.root);
      var body = opts.body;

      $node.find('.sc1-down-arrow-container').click(function(){
        $(body).animate({scrollTop: 800}, 200, "swing");
        console.log('hello there');
      });
    });
  </script>
</scenes>