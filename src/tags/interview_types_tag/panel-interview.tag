<panel-interview>
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
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble6.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/panel_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						panel interview
					</p>
					<p class="scene-description flow-text">
						Panel interviews are a common practice. You will face several members of the 
						company who have a vested interest in the hiring decision. Interviewers may 
						include, the Hiring (Line) Manager, Departmental/Segment/Regional Head, HR
						Manager and related/dependent function managers. Panel interviews are either
						well-structured with a cohesive approach in seeking to identify why you may 
						be suited to the job, with each interviewer assigned an area in which he will
						assess you. Alternatively, they may be unstructured and quite intense, as 
						each interviewer takes it in turn to pursue their own line of questioning.
					</p>
					<p class="scene-description flow-text">
						They often assess how you respond to hypothetical questions or construct your
						approach to various business scenarios and how you would apply your skills,
						knowledge and experience to a real life business situation. Remember, 
						to maintain eye contact with all members of the panel when responding to 
						questions.
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
		this.prev = '/#multiple-interview';
		this.next = '/#group-interview';
	</script>
</panel-interview>