<navbar>
  <!-- HTML -->
  <nav>
    <div class="nav-wrapper">

      <a href="#!" class="brand-logo">
        <img class="navbar-logo" src="public/images/logo4.svg" alt="">
      </a>
      <a href="#" data-activates="mobile-demo" class="button-collapse">
        <svg fill="#FFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </a>
      

      <ul class="right hide-on-med-and-down">
<!--         <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li> -->
      </ul>



      <ul class="side-nav" id="mobile-demo">
      <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Starting Job Search</a></li>
        <li><a href="collapsible.html">Types of Interviews</a></li>
        <li><a href="mobile.html">Preparing for Interview</a></li>
        <li><a href="mobile.html">Acing the Interview</a></li>
        <li><a href="mobile.html">Following up the interview</a></li>
        <li><a href="mobile.html">Accepting the job</a></li>
        <li><a href="mobile.html">Career Center</a></li>
      </ul>


    </div>
  </nav>


  <!-- SCRIPT -->
  <script>  
    import 'navbar/main.scss';
    this.on('mount', function(){
      var $node = $(this.root);
      $node.find('.button-collapse').sideNav();
    });  
  </script>
</navbar>
