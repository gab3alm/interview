<homepage-2>
	<!-- |||||||||||||||||||||||||||||||||||| -->
	<!-- HTML MARKUP												  -->
	<!-- |||||||||||||||||||||||||||||||||||| -->
	<div class="container-fluid">
		
		<div class="row">
			<div class="col s12">
				
				<div id="homepage-container">
					
					<ul id="scene">
						<!-- BACKGROUND -->
						<li id="background" class="layer" data-depth="0.00"></li>

						
						<!-- START OF CLOUDS -->
						<li class="layer" data-depth="0.30">
							<img id="backcloud1" class="cloud animated shake infinite" src="src/images/homepage2_assets/backcloud.svg" alt="">
						</li>

						<li class="layer" data-depth="0.40">
							<img id="forecloud1" class="cloud animated shake infinite" src="src/images/homepage2_assets/forecloud.svg" alt="">
						</li>

						<li class="layer" data-depth="0.35">
							<img id="backcloud2" class="cloud animated shake infinite	" src="src/images/homepage2_assets/backcloud.svg" alt="">
							<img id="backcloud3" class="cloud animated shake infinite" src="src/images/homepage2_assets/backcloud.svg" alt="">
							<img id="backcloud2" class="cloud animated fadeOutLeft infinite" src="src/images/homepage2_assets/backcloud.svg" alt="">
							<img id="backcloud3" class="cloud animated fadeOutRight infinite" src="src/images/homepage2_assets/backcloud.svg" alt="">
						</li>
						<!-- END OF CLOUDS -->

						<!-- FLOOR -->
						<li class="layer" data-depth="0.10">
							<img id="floor" src="src/images/homepage2_assets/floor.svg" alt="">
						</li>

						<!-- Lights -->
						<li class="layer" data-depth="0.30">

							<div id="lamp-wrapper1">
								<div class="lamp-container1 animated swing infinite">
									<img id="lamp1" src="src/images/homepage2_assets/lamp.svg">
									<img id="lamp1-light" src="src/images/homepage2_assets/light.svg">
								</div>	
							</div>
							

							<div id="lamp-wrapper2">
								<div class="lamp-container2 animated swing infinite">
									<img id="lamp1" src="src/images/homepage2_assets/lamp.svg">
									<img id="lamp1-light" src="src/images/homepage2_assets/light.svg">
								</div>	
							</div>
							

							<div id="lamp-wrapper3">
								<div class="lamp-container3 animated swing infinite">
									<img id="lamp1" src="src/images/homepage2_assets/lamp.svg">
									<img id="lamp1-light" src="src/images/homepage2_assets/light.svg">
								</div>	
							</div>
							
						</li>

						<!-- FRIDGE -->
						<li class="layer" data-depth="0.20">
							<img id="fridge" src="src/images/homepage2_assets/fridge_shadow.svg" alt="">
						</li>
						

						<!-- TANGERINE -->
						<li class="layer" data-depth="0.50">
							<div id="tangerine"></div>
						</li>

					</ul>
				</div>

				<div id="information-container">
					<div class="row center-align">
						<div class="col s12">
							
							<p class="title">successful interviewing</p>

							<div class="row">
								<div class="col s12 m8 push-m2 l6 push-l3">
									<div class="description-container">
										<p class="description flow-text">
											No matter your goals, sometimes applying for a job can be daunting task, especially 
											when it comes to the interview process! 
										</p>
										<p class="description flow-text">
											Luckily, the CSUN Career Center is committed to ensuring you will be completely prepared 
											for when the time comes. On this website, you will find all the necessarily steps and
											guidance to succeed when an interview day comes your way!
										</p>
										<a href="/#scenes" class="button button-3d button-action button-pill">Lets Begin!</a>
									</div>
								</div>
							</div>	

						</div>
					</div>
				</div>
				

				<footing></footing>
			</div>
		</div>
	</div>


	<!-- |||||||||||||||||||||||||||||||||||| -->
	<!-- CSS STYLES													  -->
	<!-- |||||||||||||||||||||||||||||||||||| -->
	<style>
		.button{
			font-family:'abel';
			color:rgba(255,255,255,1) !important;
			font-weight:bold;
			font-size:1.3em;
		}

		body {
			-webkit-transform: translate3d(0, 0, 0);
		}

		.row, .col{
			padding:0 !important;
			margin:0 !important;
		}

		#homepage-container{
			/*border:2px solid green;*/
			/*height:calc(100vh - 55px);*/
			height:100vh;
			width:100%;
			overflow:hidden;

			background-image:url('src/images/homepage2_assets/background.svg');
			background-size:cover;
			background-position:center;
			position:relative;
			z-index:10;
		}

		.layer{
			width:100%;
			height:100vh;
		}
		

		.title{
			font-family:'pattaya';
			font-size:4em;
			text-transform: capitalize;
			color:white;
			margin:10vh 0 0 0;
			text-shadow: 2px 2px 2px rgba(0,0,0,.5);
		}
		
		.description-container{
			border-radius:20px;
			background-color:rgba(0,0,0,.5);
			padding:40px;
			margin-top:30vh;
		}

		.description{
			font-family:'abel';
			font-size:1.7em;
			color:white;
			/*padding:5%;*/
			margin:0 0 3% 0;
		}

		#information-container{
			position:absolute;
			width:100%;
			top:0px;
			left:0px;
			z-index:11;
		}

		#floor{
			position:absolute;
			top:52vh;
			left:0;
			height:50vh;
			transform:scale(1.2);
		}

		#fridge{
			/*border:2px solid white;*/
			width:100%;
			height:100vh;
			position:absolute;
			top:8vh;
			left:0;
			transform:scale(.8) translate(-28%, 0);
		}

		#lamp-wrapper1{
			position:absolute;
			top:0px;
			left:10%;
			transform:translate(-50%, 0);
		}

		#lamp-wrapper2{
			position:absolute;
			top:-5%;
			left:50%;
			transform:translate(-50%, 0);
		}	

		#lamp-wrapper3{
			position:absolute;
			top:25%;
			left:85%;
			transform:translate(-50%, 0) scale(1.5);
		}

		.lamp-container1{
			/*border:2px solid green;*/
			position:relative;
			width:500px;
			height:500px;
			animation-duration:10s;
		}

		.lamp-container2{
			/*border:2px solid green;*/
			position:relative;
			width:500px;
			height:500px;
			animation-duration:15s;
		}

		.lamp-container3{
			/*border:2px solid green;*/
			position:relative;
			width:500px;
			height:500px;
			animation-duration:20s;
		}

		#lamp1{
			height:100%;
			position:absolute;
			top:-50%;
			left:50%;
		}

		#lamp1-light{
			height:100%;
			position:absolute;
			top:15%;
			left:-15%;
			opacity: .5;
		}

		.cloud{
			/*border:2px solid white;*/
			width:100%;
			height:200px;
			position:absolute;
		}	

		#backcloud1{
			top:calc(50% - 180px);
			left:0;
			transform:scale(1.2);
			animation-duration: 6s;
		}

		#backcloud2{
			animation-duration: 10s;
			top:calc(50% - 180px);
			left:15%;
			transform:scale(2);
			opacity:.5;	
		}

		#backcloud3{
			animation-duration: 10s;
			top:calc(50% - 180px);
			left:-15%;
			transform:scale(1.5);	
			opacity:.5;	
		}

		#forecloud1{
			top:calc(50% - 180px);
			left:0;
			transform:scale(1.1);
			animation-duration:10s;	
		}

		#tangerine{
			/*border:2px solid white;*/
			position:absolute;
			top:50vh;
			left:25%;
			transform:scale(1) translate(-50%, 0);
		}

		/*Styles for Med size screens*/
		@media only screen and (min-width: 40.063em) and (max-width: 64em) {
			#floor{
				transform:scale(1.2);
			}

			#tangerine{
				transform:scale(1) translate(-50%, 0);
			}

			#fridge{
				top:12vh;
				transform:scale(1) translate(-40%, 0);
			}

			#backcloud1{
				top:calc(53% - 180px);
				transform:scale(1.2);
			}

			#backcloud2{
				top:calc(53% - 180px);
				left:15%;
				transform:scale(2);	
			}

			#backcloud3{
				top:calc(53% - 180px);
				left:-15%;
				transform:scale(1.5);	
			}

			#forecloud1{
				top:calc(53% - 180px);
				left:0;
				transform:scale(1.1);	
			}

			#lamp-wrapper1{
				display:none;
			}

			#lamp-wrapper2{
				transform:translate(-55%,0);
			}	

			#lamp-wrapper3{
				display:none;
			}
		}

		/*STYLES FOR SMALL/MOBILE SCREENS */
		@media only screen and (max-width: 40em) {
			#information-container{
				height:100vh;
				background-color:rgba(0,0,0,.5);
			}


			.description-container{
				margin-top:0vh;
			}

			#floor{
				transform:scale(1);
			}

			#tangerine{
				left:0;
				transform:scale(.7) translate(-50%,0);
			}

			#fridge{
				top:15vh;
				transform:scale(1.5) translate(-40%, 0);
			}

			#backcloud1{
				top:calc(65% - 180px);
				transform:scale(1.2);
			}

			#backcloud2{
				top:calc(65% - 180px);
				left:15%;
				transform:scale(2);	
			}

			#backcloud3{
				top:calc(65% - 180px);
				left:-15%;
				transform:scale(1.5);
			}

			#forecloud1{
				top:calc(64% - 180px);
				left:0;
				transform:scale(1.1);	
			}


			#lamp-wrapper1{
				display:none;
			}

			#lamp-wrapper2{
			}	

			#lamp-wrapper3{
				display:none;
			}
		}

	</style>

	<!-- |||||||||||||||||||||||||||||||||||| -->
	<!-- JAVSCRIPT													  -->
	<!-- |||||||||||||||||||||||||||||||||||| -->
	<script src="src/js/jquery.parallax.js"></script>
	<script>
		//execute right after the tag is mounted.	
		this.on('mount', function() {
			var $node = $(this.root);
			$node.find('#scene').parallax();
			$node.find('#tangerine').load('src/animations/tangerine.html');
			animate_clouds($node);
		});

		function animate_clouds(node){
			node.find('#backcloud1').fadeIn(5000);
		}
	</script>


</homepage-2>
