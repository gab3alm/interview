<lunch-interview>
	<!-- HTML MARKUP -->
	<div class="row">

		<div class="scene-control-holder col s1">
			<a href={prev}>
				<i id="prev" class="material-icons scene-control-btn">chevron_left</i>
			</a>
		</div>

		<div class="col s10 animated slideInLeft">
			<!-- general interview  -->
			<div class="col s12 m4">
				<div class="scene-container">
					<img class="speech-bubble" src="src/images/scene2-main/bubbles/bubble2.svg" alt="">
					<img class="scene-image" src="src/images/scene2-main/lunch_interview.svg" alt="">				
				</div>
			</div>

			<div class="col s12 m8">
				<div class="scene-container">
					<p class="scene-title flow-text">
						the lunch interview protocol
					</p>
					<p class="scene-description flow-text">
						The same rules apply in lunch interviews as in those held at the office. 
						The setting may be more casual, but it is a business lunch and you will 
						be carefully scrutinized. Limit or avoid alcohol intake and remember table
						etiquette.
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
		this.prev = '/#general-interview';
		this.next = '/#telephone-interview';
	</script>
</lunch-interview>