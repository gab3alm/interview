<homepage>
	<!-- |||||||||||||||||||||||||||||||||||||||| -->
	<!-- |||||||  HTML MARKUP							||||||| -->
	<!-- |||||||||||||||||||||||||||||||||||||||| -->
	<link rel="stylesheet" href="src/css/preloader.css">
	<link rel="stylesheet" href="src/css/homepage.css">

	<div class="container-fluid">
		<!-- SCENE for REGULAR & MEDIUM SCREENS -->
		<div class="row hide-on-small-only">
			<div class="col s12">
				<ul id="scene">
					<!-- clouds -->
					<li class="layer" data-depth="0.10">
						<div class="inside_layer">
							<img class="cloud" src="src/images/home_assets/backclouds.svg" alt="">
						</div>
					</li>

					<!-- clouds -->
					<li class="layer" data-depth="0.20">
						<div class="inside_layer">
							<img class="clouds2" src="src/images/home_assets/foreclouds.svg" alt="">
						</div>
					</li>

					<!-- FLOOR -->
					<li class="layer" data-depth="0.30">
						<div class="inside_layer">
							<img class="floor" src="src/images/home_assets/floor.svg" alt="">
						</div>
					</li>
					
					<!-- lights -->
					<li class="layer" data-depth="0.40">
						<div class="inside_layer lamps">
							<!-- lamp build -->
							<div class="hanging_lamp1">
								<div class="lamp_container">
									<img class="handle" src="src/images/home_assets/handle.svg">
									<img class="glass" src="src/images/home_assets/glass2.svg">
									<img class="bulb" src="src/images/home_assets/lightbulb.svg">
									<img class="cone" src="src/images/home_assets/center_light2.svg">
								</div>	
							</div>


							<div class="hanging_lamp2">
								<div class="lamp_container">
									<img class="handle" src="src/images/home_assets/handle.svg">
									<img class="glass" src="src/images/home_assets/glass2.svg">
									<img class="bulb" src="src/images/home_assets/lightbulb.svg">
									<img class="cone" src="src/images/home_assets/center_light2.svg">
								</div>	
							</div>

							<div class="hanging_lamp3">
								<div class="lamp_container">
									<img class="handle" src="src/images/home_assets/handle.svg">
									<img class="glass" src="src/images/home_assets/glass2.svg">
									<img class="bulb" src="src/images/home_assets/lightbulb.svg">
									<img class="cone" src="src/images/home_assets/center_light2.svg">
								</div>	
							</div>
						</div>
					</li>

					<!-- CSUN Logo -->
					<li class="layer" data-depth="0.45">
						<img class="logo logo-initial animated rotateIn infinite" src="src/images/logo3.svg" alt="">
						<img class="logo logo-later animated fadeIn" src="src/images/logo4.svg" alt="">		
					</li>

					<!-- fridge -->
					<li class="layer" data-depth="0.50">
						<div class="inside_layer">
							<img class="fridge" src="src/images/home_assets/fridge.svg" alt="">
						</div>
					</li>

					<!-- Orange -->
					<li class="layer" data-depth="0.60">
						<div class="inside_layer">
							<img class="orange_boy" src="src/images/home_assets/tanback.svg" alt="">
						</div>
					</li>

					<!-- Welcome text -->
					<li class="layer" data-depth="0.70">
						<div class="inside_layer">
							<p class="welcome_text flow-text animated fadeIn">Successful Interviewing</p>
						</div>
					</li>

					<li class="layer" data-depth="0.8">
						<div class="inside_layer">
							<section class="introduction_area">
								<p class="intro_text flow-text animated fadeIn">
									Looking for a way to help pay your way to through college?
									<br>
									Perhaps you are looking to expand your experiences and step foot into the job market. No matter your goals, sometimes applying for a job can be daunting task, especially when it comes to the interview process!
									<br>
									Luckily, the CSUN Career Center is committed to ensuring you will be completely prepared for when the time comes.
									On this website, you will find all the necessarily steps and guidance to succeed when an interview day comes your way!
								</p>
								<div class="row center-align">
									<button class="btn cust-btn animated bounce">
										<a href="/#scenes">Begin Journey!</a>
									</button>
								</div>	
							</section>
						</div>
					</li> 
				</ul>
			</div>
		</div>

		<!-- SCENE FOR MOBILE SCREENS -->
		<div class="row hide-on-med-and-up phone-area">
			<div class="col s12">
				<!-- Start with scene -->
				<div class="row">
					<ul id="scene1">

						<!-- clouds -->
						<li class="layer" data-depth="0.10">
							<div class="inside_layer">
								<img class="cloud cloud_right_1 animated fadeIn infinite" src="src/images/home_assets/backclouds.svg" alt="">
							</div>
						</li>

						<!-- clouds -->
						<li class="layer" data-depth="0.20">
							<div class="inside_layer">
								<img class="clouds2 cloud_left_1 animated shake infinite" src="src/images/home_assets/foreclouds.svg">
								<img class="clouds2 cloud_left_2 animated shake infinite" src="src/images/home_assets/foreclouds.svg">
							</div>
						</li>

						<!-- Fridge -->
						<li class="layer" data-depth="0.2">
							<div class="center-align">
								<img class="fridge" src="src/images/home_assets/refrigerator.svg" alt="">
							</div>
						</li>

						<!-- Orange Boy -->
						<li class="layer" data-depth="0.3">
							<!-- <img class="orange_boy" src="./img/home_assets/tanback.svg" alt=""> -->
							<div id="animation_container" style="z-index:9999; width:550px; height:400px">
								<canvas id="canvas" width="550" height="400"></canvas>
								<div id="dom_overlay_container">
								</div>
							</div>
						</li>

						<!-- Lamp -->
						<li class="layer" data-depth="0.10">
							<div class="hanging_lamp2 animated swing infinite">
								<div class="lamp_container">
									<img class="handle" src="src/images/home_assets/handle.svg">
									<img class="glass" src="src/images/home_assets/glass2.svg">
									<img class="bulb" src="src/images/home_assets/lightbulb.svg">
									<img class="cone" src="src/images/home_assets/center_light2.svg">
								</div>	
							</div>
						</li>

						<!-- Career Center Logo -->
						<li class="layer" data-depth="0.15">
							<div class="center-align">
								<img class="logo logo-initial animated rotateIn" src="src/images/logo3.svg" alt="">
								<img class="logo logo-later" src="src/images/logo4.svg" alt="">
							</div>
						</li>
						
						<li class="layer" data-depth=".20">
							<!-- welcome message -->
							<div class="inside_layer">
								<div class="message-holder">
									<p class="welcome_message">welcome!</p>
									<p class="intro_text flow-text animated fadeIn">
										Looking for a way to help pay your way to through college? Perhaps you are looking to expand your experiences and step foot into the job market. No matter your goals, sometimes applying for a job can be daunting task, especially when it comes to the interview process!

										<br>							

										Luckily, the CSUN Career Center is committed to ensuring you will be completely prepared for when the time comes.
										On this website, you will find all the necessarily steps and guidance to succeed when an interview day comes your way!
									</p>
									<div class="row center-align">
										<button class="btn btn-large cust-btn animated bounce">
											<a href="/#scenes">Begin Journey!</a>
										</button>
									</div>	
								</div>
							</div>
						</li> 
					</ul>
				</div>
			</div>
		</div>

		<footing></footing>
	</div>


	<!-- CSUN LOADER SCREEN -->
	<div id="loader-wrapper">
		<div id="loader">
			<div id="animation-container">
				<img id="loader-logo" class="animated rotateIn infinite" src="src/images/preloader/color-logo.svg" alt="csun logo">
				<img id="loader-csun" class="animated pulse" src="src/images/preloader/logo-white.svg" alt="csun logo">
			</div>
			<div class="loader-section section-left"></div>
			<div class="loader-section section-right"></div>
		</div>
	</div>	


	<!-- |||||||||||||||||||||||||||||||||||||||| -->
	<!-- |||||||  STYLE										||||||| -->
	<!-- |||||||||||||||||||||||||||||||||||||||| -->
	<style>

	</style>

	<!-- |||||||||||||||||||||||||||||||||||||||| -->
	<!-- |||||||  Script									||||||| -->
	<!-- |||||||||||||||||||||||||||||||||||||||| -->
	<script src="src/js/jquery.parallax.js"></script>
	<script>
		// preloader animation
    // right after the tag is mounted on the page
    this.on('mount', function() {
			//get the root DOM of the tag
			var $node = $(this.root);

			$node.find('#scene').parallax();
			$node.find('#scene1').parallax();

			$node.find('.container-fluid').hide();
			setTimeout(function(){
				$(opts.body).addClass('loaded');
				$node.find('.container-fluid').show();
			}, 3000);

			setTimeout(function(){
				$node.find('.logo-initial').fadeOut(900);
				setTimeout(function(){
					$node.find('.logo-later').fadeIn(2000);
				}, 1000);
			}, 1000);

		});
  </script>
</homepage>