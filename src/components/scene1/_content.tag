<scene1-content>
  <!-- HTML -->
  <div class="sc1-content-container">

    <p class="sc1-app-title">successful interviewing</p>    

    <div class="sc1-outer-information-container"><!-- absolute container -->
      <div class="sc1-inner-information-container"><!-- relative container -->

        <p class="sc1-title">starting a job search</p>

        <div class="sc1-description-container">
          <p class="sc1-description">
            The CSUN Career Center Website has made the job hunting process a bit easier. SUNlink lists jobs and connects students to companies looking specifically hire CSUN students, and Pathways links your area of study or desired occupations to relevant companies that are hiring.
          </p>
        </div>

        <a href="#steps/starting-job-search" class="sc-btn button button-3d button-action button-pill">learn more</a>
      </div>      
    </div>



    <div class="sc1-down-arrow-container animated bounce infinite tooltipped" data-position="top" data-delay="50" data-tooltip="Scroll Down">
      <svg class="sc1-down-arrow" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
      </svg>  
    </div>


  </div>  


  <!-- SCRIPT -->
  <script>
    import 'scene1/_content.scss';
    this.on('mount', function(){
      var $node = $(this.root); 
      $node.find('.tooltipped').tooltip({delay: 50});
          
    });
  </script>
</scene1-content>