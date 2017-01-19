require('expose?$!expose?jQuery!jquery');
require("materialize-css/dist/css/materialize.min.css");
require("animate.css/animate.min.css");
require("materialize-css/dist/js/materialize.min.js");
require("riot");
require("riot-route");

// require all your necessary elements
require('./tags/preloader.tag');
require('./tags/homepage/main.tag');
require('./tags/navbar.tag');
require('./tags/footing.tag');
require('./tags/main.tag');
require('./tags/scenes.tag');
require('./tags/scenes/scene1.tag');
require('./tags/scenes/subscene1.tag');
require('./tags/scenes/scene2.tag');
require('./tags/scenes/subscene2.tag');
require('./tags/scenes/scene3.tag');
require('./tags/scenes/subscene3.tag');
require('./tags/scenes/scene4.tag');
require('./tags/scenes/subscene4.tag');
require('./tags/scenes/scene5.tag');
require('./tags/scenes/subscene5.tag');
require('./tags/scenes/scene6.tag');
require('./tags/scenes/subscene6.tag');

// route file
require('./routes.js');