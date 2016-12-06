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
