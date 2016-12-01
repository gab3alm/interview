<multiple-interview>
	<!-- HTML MARKUP -->
	<div class="row">
		<div class="scene-control-holder col s1">
			<a href={prev}>
				<i id="prev" class="material-icons scene-control-btn">chevron_left</i>
			</a>
		</div>

		<div class="col s10 animated slideInRight">
			<!-- general interview  -->
			<div class="col s12 m4">
				<div class="scene-container">
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble5.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/multiple_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						multiple one to one interview
					</p>
					<p class="scene-description flow-text">
						One to one interviews are usually used when it has been established that 
						you possess the rights skills and profile necessary for the position. 
						They are usually used for second or third stage interviews whereby you 
						will be interviewed by a number of different individuals from the business.
					</p>
					<p class="scene-description flow-text">
						The idea is to gauge whether you will be a good fit with the company,
						culture and values. They explore how your skills complement the rest 
						of the organization. Your goal should be to establish rapport with 
						each interviewer and to demonstrate that your attributes are a good fit.
					</p>
					<a href="#!" class="button button-3d button-caution button-pill">Download!</a>
				</div>
			</div>
		</div>

		<div class="scene-control-holder col s1">
			<a href={next}>
				<i id="next" class="material-icons scene-control-btn">chevron_right</i>
			</a>	
		</div>
	</div>


	<!-- STYLES -->
	<style>
		.scene-container{
			height:70vh;
			padding:10%;
		}

		.speech-bubble{
			width:100%;
			height:50%;
		}

		.scene-image{
			width:100%;
			height:50%;
		}

		.scene-title{
			margin:0;
			font-family:'pattaya';
			font-size:2.5em;
			text-transform:capitalize;
		}

		.scene-description{
			font-family:'abel';
			font-transform:capitalize;
			text-align:justify;
		}
	</style>

	<!-- SCRIPT -->
	<script>
		this.prev = '/#competency-interview';
		this.next = '/#panel-interview';
	</script>
</multiple-interview>