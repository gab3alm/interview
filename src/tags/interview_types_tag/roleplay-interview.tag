<roleplay-interview>
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
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble8.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/roleplay_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						role play interview
					</p>
					<p class="scene-description flow-text">
						Role-play interviews are usually integrated into any of the above interview styles. 
						The interviewer will ask you to assume a fictitious role in a hypothetical business 
						situation, which will clearly be explained to you. You will be given a specific task
						to accomplish during the role-play, while the interviewer assumes the role of a customer,
						supplier, employee, manager or business associate.
					</p>
					<p class="scene-description flow-text">
						Often several interviewers or even actors may be involved in the scenario and each
						will be pre-prepared to respond in accordance to your particular approach. These
						types of exercises are usually designed to measure your communication, influencing,
						sales, negotiation and interpersonal skills.
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
		this.prev = '/#group-interview';
		this.next = '/#presentation-interview';
	</script>
</roleplay-interview>