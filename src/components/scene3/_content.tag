<scene3-content>
  <!-- HTML -->
  <div class="sc3-content-container animated fadeIn">

    <div class="sc3-outer-information-container"><!-- absolute container -->
      <div class="sc3-inner-information-container"><!-- relative container -->

        <p class="sc3-title">preparing for an interview</p>

        <div class="sc3-description-container">
          <p class="sc3-description">
            Once you have found an opportunity that appeals to you and is hiring, it is time to apply for a position! The keys to successful interviewing are preparation, like-ability, and bonding. There are several critical areas to consider and essential things to do in preparation for your interview.
          </p>
        </div>
        <div class="sc3-btn-container">
          <a href="#steps/interview-preparation" class="sc3-btn sc-btn button button-3d button-royal button-pill">learn more</a>
        </div>
        
      </div>      
    </div>


    <div class="sc3-down-arrow-container animated bounce infinite tooltipped" data-position="top" data-delay="50" data-tooltip="Scroll Down">
      <svg class="sc3-down-arrow" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
      </svg>  
    </div>


  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene3/_content.scss';
    this.on('mount', function(){
      var $node = $(this.root);     
      $node.find('.tooltipped').tooltip({delay: 50});
      
    });
  </script>
</scene3-content>