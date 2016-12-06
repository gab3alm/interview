<general-interview>
	<!-- HTML MARKUP -->
	<div class="row">
		<!-- general interview  -->
		<div class="scene-control-holder col s1">
			<a href={prev}>
				<i id="prev" class="material-icons scene-control-btn">chevron_left</i>
			</a>
		</div>
		
		<div class="col s10 animated slideInRight">
			<div class="col s12 m4">
				<div class="scene-container">
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble1.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/general_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						general interview
					</p>
					<p class="scene-description flow-text">
						The general interview format is the standard form of an interview where you will be invited 
						to meet with the hiring manager, often accompanied by an HR representative. The specifics of
						the position, the company and industry will be discussed.
					</p>
					<p class="scene-description flow-text">
						Your Resume/CV will be reviewed with questions designed to ascertain your suitability for the 
						role and your cultural fit with the business. Competency questions may be used to assess how
						your past experiences have allowed you to develop specific skills and how these could benefit
						the company. Often the decision to hire is made after this type of interview.
					</p>
				</div>
			</div>
		</div>

		<div class="scene-control-holder col s1">
			<a href={next}>
				<!-- <a href='/#lunch-interview'> -->
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
		this.prev = '/#skype-interview';
		this.next = '/#lunch-interview';
	</script>
</general-interview>