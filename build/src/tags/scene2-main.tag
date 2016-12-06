<scene2-main>
	<!-- HTML MARKUP -->
	<div class="container-fluid">
		<!-- main scene imagery -->
		<section class="row">
			<div class="col s12">
				<div class="imagery">
					<img class="floor" src="src/images/scene2-main/floor.svg" alt="">
				</div>				
			</div>	
		</section>


		<!-- Navigation buttons -->
		<div class="row">
			<div class="col s12"></div>
		</div>

		<!-- Scene view -->
		<div class="row center-align">
			<div id="interview-viewport" class="col s12">
				<general-interview></general-interview>
			</div>
		</div>
	</div>	


	<!-- STYLES -->
	<style>
		.row, .col{
			padding:0 !important;
			margin:0 !important;
		}

		.scene-control-holder{
			height:70vh;
			line-height:1em;
			position:relative;
		}

		.scene-control-btn{
			position:absolute;
			top:50%;
			font-size:3.5em;
			margin:0px 10px 0px 10px;

			border-radius: 50%;
			height:50px;
			width:50px;
			transition:all 0.3s ease-out;
		}

		.scene-control-btn:hover{
			transition:all 0.5s ease-out;
			background-color:rgba(0,0,0,.5);
			color:white;
			transform:scale(1.2);
			cursor:pointer;
		}

		#prev{
			left:0;
		}

		#next{
			right:0;
		}

		#main-viewport{
			background-color:rgba(0,0,155,.1);
		}

		.imagery{
			position:relative;
			height:30vh;
			width:100%;

			background-image:url('src/images/scene2-main/background.svg');
			background-size:cover;
			background-position: center;
			overflow:hidden;
		}	

		.floor{
			position:absolute;
			bottom:0%;
			left:0;
			width:100%;
		}

		#interview_viewport{
			position:relative;
			min-height:70vh;
			height:auto;
		}
	</style>
	

	<!-- SCRIPT -->
	<script>
	</script>
</scene2-main>	