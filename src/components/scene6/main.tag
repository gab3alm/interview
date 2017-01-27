<scene6>
  <!-- HTML -->
  <div class="element-container">
    <scene6-background></scene6-background>
    <scene6-content></scene6-content>    
  </div>


  <!-- SCRIPT -->
  <script>
    import 'main.scss';
    import 'scene6/_background.tag';  
    import 'scene6/_content.tag';  

    this.on('mount', function(){
      window.scrollTo(0,0);

    });
  </script>
</scene6>