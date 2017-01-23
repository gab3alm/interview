<scene5-content>
  <!-- HTML -->
  <div class="sc5-content-container">

    <div class="sc5-outer-information-container"><!-- absolute container -->
      <div class="sc5-inner-information-container"><!-- relative container -->

        <p class="sc5-title">following up the interview</p>

        <div class="sc5-description-container">
          <p class="sc5-description">
            Don't be nervous about following up the interview. Whether it is sending a thank you note for their time, a list of references, a call or email, they will appreciate your tenacity!
          </p>
        </div>
        
        <a href="" class="sc5-btn sc-btn button button-3d button-action button-pill">learn more</a>
      </div>      
    </div>

     <div class="sc5-down-arrow-container animated bounce infinite tooltipped" data-position="top" data-delay="50" data-tooltip="Scroll Down">
        <svg class="sc5-down-arrow" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
        </svg>  
      </div>
  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene5/_content.scss';
    this.on('mount', function(){
      var $node = $(this.root);     
      $node.find('.tooltipped').tooltip({delay: 50});
      
    });
  </script>
</scene5-content>