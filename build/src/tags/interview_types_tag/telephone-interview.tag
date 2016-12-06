<telephone-interview>
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
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble3.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/phone_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						telephone interview
					</p>
					<p class="scene-description flow-text">
						Telephone interviews are meant to eliminate poorly qualified candidates.
						Your objective is to be invited for a personal face-to-face interview.
						To ensure this, introduce yourself clearly. Engage in some rapport,
						building small talk.
					</p>
					<p class="scene-description flow-text">
						Modulate your voice and speak clearly into the receiver. Your voice is the only tool you can
						use to convey your enthusiasm for the job, so make sure your voice reveals both your personality 
						and attitude positively. Have in front of you your Resume/CV, job description, interview 
						preparation notes, and pen and paper. Eliminate any distractions and if you need to refer 
						to your interview preparation notes, do so discreetly.
					</p>
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
		this.prev = '/#lunch-interview';
		this.next = '/#competency-interview';
	</script>
</telephone-interview>