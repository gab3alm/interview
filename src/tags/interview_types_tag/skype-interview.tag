<skype-interview>
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
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble10.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/skype_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						skype / facetime interview
					</p>
					<p class="scene-description flow-text">
						Skype and Facetime interviews are becoming commonplace due to their ease of setup 
						for the employer regardless of location. Many of the same rules apply to a live
						video interview, such as dressing professionally and connecting early. 
					</p>
					<p class="scene-description flow-text">
						You will be provided with details of the presentation topic and any supporting information
						as required, in advance of your interview. Remember to stick to your time limit, deliver
						any key messages confidently, maintain eye contact with the audience and be visually 
						expressive. Where possible, prepare your presentation on soft copy Slideshow for a 
						professional delivery.
					</p>
					<a href="#!" class="button button-3d button-caution button-pill">Tips</a>
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
		this.prev = '/#presentation-interview';
		this.next = '/#general-interview';
	</script>
</skype-interview>