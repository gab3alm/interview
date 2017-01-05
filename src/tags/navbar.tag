<navbar>
  <!-- HTML MARKUP -->
  <nav>
    <div class="nav-wrapper">
      <a target="_blank" href="http://www.csun.edu/career" class="brand-logo">
        <img class="nav-logo" src="public/images/logo4.svg">
      </a>
      <a href="!#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>
      
      <!-- Desktop Navbar -->
      <ul class="right hide-on-med-and-down">
      </ul>

      <!-- mobile navbar -->
      <ul class="side-nav" id="mobile-nav">
        <virtual each={mobile_links}>
          <li class="navitems"><a href={url}>{title}</a></li>
        </virtual>
      </ul>
    </div>
  </nav>


  <!-- CSS RULES -->
  <style>
    nav{
      position:fixed;
      top:0;
      left:0;
      z-index:100;
      background-color:transparent;
      box-shadow: none;
    }

    .side-nav{
      z-index:9999 !important;
    }

    .nav-logo{
      margin:20px 0 0 40px;
      padding:5px;
      height:64px;
    }

    .navitems{
      text-transform: capitalize;
    }

    /*Styles for Med size screens*/
    @media only screen and (min-width: 40.063em) and (max-width: 64em) {
      .nav-logo{
        height:50px;
      }
    }

    /*STYLES FOR SMALL/MOBILE SCREENS */
    @media only screen and (max-width: 40em) {
      .nav-logo{
        margin:10px 0 auto;
        height:40px;
      }
    }
  </style>
  <!-- SCRIPT STUFF -->
  <script>
    this.on('mount', function(){
      var $node = $(this.root);
      $node.find(".button-collapse").sideNav();

      $node.find('.button-collapse').click(function(){
        $node.find("nav").addClass('display','none');
      });
    });

    this.mobile_links = [
    {title: 'career center', url: 'https://www.csun.edu/career'},
    {title: 'homepage', url: 'https://www.csun.edu/career'},
    {title: 'starting a job search', url: 'https://www.csun.edu/career'},
    {title: 'types of interviews', url: 'https://www.csun.edu/career'},
    {title: 'preparing for an interview', url: 'https://www.csun.edu/career'},
    {title: 'acing the interview', url: 'https://www.csun.edu/career'},
    {title: 'following up after the interview', url: 'https://www.csun.edu/career'},
    {title: 'accepting the job!', url: 'https://www.csun.edu/career'},
    ];
  </script>
</navbar>