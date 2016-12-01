<competency-interview>
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
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble4.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/competency_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						competency based interview
					</p>
					<p class="scene-description flow-text">
						Competency based interviews are designed to predict future behaviors based upon 
						past behaviors and experiences. It’s best to prepare for these types of questions
						by demonstrating how your past experiences have allowed you to develop specific 
						skills and how these skills could subsequently benefit the prospective employer.
						Every job will have a set of competencies, so for more help, see our in-depth guide.
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
		this.prev = '/#telephone-interview';
		this.next = '/#multiple-interview';
	</script>
</competency-interview>