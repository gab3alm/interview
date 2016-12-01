<group-interview>
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
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble7.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/group_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						group interview
					</p>
					<p class="scene-description flow-text">
						A group interview is usually designed to uncover the leadership potential of prospective employees.
						You may be gathered with other front-runner candidates (external and internal) in an informal,
						discussion-type interview. A subject is introduced (often a scenario that requires a problem 
						to be solved) and the interviewer/s will start off the discussion. 
					</p>
					<p class="scene-description flow-text">
						Once the discussion is underway, the interviewer/s will withdraw from conversation and 
						facilitate a leaderless group session. The objective of the group interview is to
						observe how you interact with others and how you use your knowledge, reasoning powers,
						persuasive and communication skills to win others over. 
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
		this.prev = '/#panel-interview';
		this.next = '/#roleplay-interview';
	</script>
</group-interview>