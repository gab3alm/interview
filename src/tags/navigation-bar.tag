<navigation-bar>
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- PRESENTATION MARKUP - BEGIN                 -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <div class="container-fluid">
    <div class="row">
      <nav class="animated slideInDown">
        <div class="nav-wrapper">
          <a target="_blank" href="https://www.csun.edu/career" class="brand-logo"><img class="logo-image" src="src/images/logo4.svg" alt=""></a>
          <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>

          <!-- Desktop Navigation Bar -->
          <ul class="right hide">
            <virtual each={item in nav_items}>
              <li class="nav-item"><a target="_blank" href={ item.url }> { item.title } </a></li>
            </virtual>
          </ul>

          <!-- Mobile Side Navigation -->
          <ul class="side-nav" id="mobile-nav">
            <virtual each={side_item in mobile_nav_items}>
              <li class="nav-item"><a target="_blank" href={ side_item.url }> { side_item.title } </a></li>
            </virtual>
          </ul>
        </div>
      </nav>
    </div>
  </div>

  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- STYLES BEGIN                                -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <style>
    .row{
      margin:0px;
    }

    .logo-image{
      height:64px;
      padding:10px;
    }

    nav{
      background-color:rgba(0,0,0,.75) !important;
      margin:0px;
    }

    .nav-item{
      text-transform: capitalize;
    }
  </style>


  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <!-- SCRIPTS BEGIN - LOGIC                       -->
  <!-- ||||||||||||||||||||||||||||||||||||||||||| -->
  <script>
    // right after the tag is mounted on the page
    this.on('mount', function() {
      var $node = $(this.root);
      $node.find(".button-collapse").sideNav();

      //removing the animated class allows the mobile navbar to work correctly 
      setTimeout(function(){
        $node.find("nav").removeClass("animated");
      }, 800);
    })

    this.nav_items = [
    {title: 'homepage', url: 'https://www.csun.edu/career'},
    {title: 'resources', url: 'https://www.csun.edu/career'},
    ];

    this.mobile_nav_items = [
    {title: 'Career Center', url: 'https://www.csun.edu/career'},
    {title: 'homepage', url: 'https://www.csun.edu/career'},
    {title: 'starting a job search', url: 'https://www.csun.edu/career'},
    {title: 'types of interviews', url: 'https://www.csun.edu/career'},
    {title: 'preparing for an interview', url: 'https://www.csun.edu/career'},
    {title: 'acing the interview', url: 'https://www.csun.edu/career'},
    {title: 'following up after the interview', url: 'https://www.csun.edu/career'},
    {title: 'accepting the job!', url: 'https://www.csun.edu/career'},
    ];
  </script>
</navigation-bar>
