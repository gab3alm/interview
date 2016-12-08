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
						<li id="background" class="layer" data-depth="0.00">
						</li>

						<!-- FLOOR -->
						<li class="layer" data-depth="0.10">
							<img id="floor" src="src/images/homepage2_assets/floor.svg" alt="">
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

			</div>
		</div>
	</div>


	<!-- |||||||||||||||||||||||||||||||||||| -->
	<!-- CSS STYLES													  -->
	<!-- |||||||||||||||||||||||||||||||||||| -->
	<style>
		.row, .col{
			padding:0 !important;
			margin:0 !important;
		}

		#homepage-container{
			border:2px solid green;
			height:100vh;
			width:100%;
			overflow:hidden;

			background-image:url('src/images/homepage2_assets/background.svg');
			background-size:cover;
			background-position:center;
		}

		.layer{
			width:100%;
			height:100vh;
		}
		
		#floor{
			position:absolute;
			bottom:0;
			left:0;
			width:100%;
			transform:scale(1.2);
		}

		#fridge{
			border:2px solid white;
			width:75%;
			position:absolute;
			top:20vh;
			left:0;
		}

		#tangerine{
			border:2px solid white;
			position:absolute;
			top:50vh;
			left:25%;
			transform:scale(1) translate(-50%, 0);
		}

		/*Styles for Med size screens*/
		@media only screen and (min-width: 40.063em) and (max-width: 64em) {
			#floor{
				transform:scale(3);
			}

			#tangerine{
				transform:scale(1) translate(-50%, 0);
			}
		}

		/*STYLES FOR SMALL/MOBILE SCREENS */
		@media only screen and (max-width: 40em) {
			#floor{
				transform:scale(5);
			}

			#tangerine{
				transform:scale(.8) translate(-50%, 0);
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
			$node = $(this.root);
			$node.find('#scene').parallax();
			$node.find('#tangerine').load('src/animations/tangerine.html');
		});
	</script>


</homepage-2>
