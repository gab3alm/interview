<scene1-main>
	<!-- HTML MARKUP -->
	<div class="container-fluid">
		<!-- main scene imagery -->
		<section class="row">
			<div class="col s12">
				<div id="slide1" class="imagery">	
					<img class="snowflakes" src="src/images/scene1-main/snowflakes.svg" alt="let the snowflakes hit the floor">
					<img class="floor" src="src/images/scene1-main/floor1.svg" alt="floor of the scene">
					<img class="icecream" src="src/images/scene1-main/icecream.svg" alt="prof icecream">
					<img class="tray" src="src/images/scene1-main/tray.svg" alt="just of a tray of students">
				</div>				 
			</div>	
		</section>


		<!-- Navigation buttons -->
		<div class="row">
			<div class="col s12"></div>
		</div>

		<!-- Scene view -->
		<div id="type1" class="row center-align">
			<div class="col s12">
				<p class="scene-title fancy"><span>starting a job search</span></p>
				<p class="scene-description">
					From <a href="#!">Pathways</a> to <a href="#!">SUNlink</a>, the <a href="#!">CSUN Career Center</a>
					Website has made the job hunting process a bit easier. SUNlink lists jobs and connects
					students to companies looking specifically hire CSUN students, and Pathways 
					links your area of study or desired occupations to relevant companies that are hiring. 
					By browsing these job search databases, you can get a better feel for what opportunities 
					are out there. 
				</p>
				<img class="orangeboy animated shake infinite" src="src/images/scene1-main/orangeboytips.svg" alt="">
			</div>
		</div>


		<div id="type2" class="row center-align">
			<div class="col s12 m4"><img class="element" src="src/images/scene1-main/butter-desk.svg" alt=""></div>
			<div class="col s12 m4"><img class="element" src="src/images/scene1-main/sitting.svg" alt=""></div>
			<div class="col s12 m4"><img class="element" src="src/images/scene1-main/network.svg" alt=""></div>
		</div>

		<div id="type1" class="row center-align">
			<div class="col s12">
				<p class="scene-title fancy"><span>more resources</span></p>
				<div class="row">

					<div class="col s12 m4">
						<div class="item-container">
							<img class="round-logo" src="src/images/logo3.svg" alt="csun logo">
							<p class="section-title">CSUN CAREER CENTER</p>
							<p class="section-description1">
								<a target="_blank" href="#!">WWW.CSUN.EDU/CAREER</a>
							</p>	
						</div>
					</div>


					<div class="col s12 m4">
						<div class="item-container">
							<img class="round-logo" src="src/images/scene1-main/placeholder.svg" alt="csun logo">
							<p class="section-title">PATHWAYS</p>
							<p class="section-description">
								pathways contains valuable career information and resources
								that allow students to find a sense of purpose and become job
								search ready.
							</p>
						</div>
					</div>


					<div class="col s12 m4">
						<div class="item-container">
							<img class="round-logo" src="src/images/scene1-main/placeholder.svg" alt="csun logo">
							<p class="section-title">SUNlink</p>
							<p class="section-description">
								SUNlink is our online job board and career services system through
								which students can apply for jobs or internships, sign up for events
								or conduct practice interviews.
							</p>	
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>	


	<!-- STYLES -->
	<style>
		.row, .col{
			padding:0 !important;
			margin:0 !important;
		}

		.imagery{
			position:relative;
			height:400px;
			width:100%;

			background-color:#174a8d;
			overflow:hidden;
		}	
		
		.scene-title{
			font-family:'pattaya';
			font-size:2.5em;
			color:rgba(0,0,0,.75);
			text-transform: capitalize;
		}

		.scene-description{
			font-family:'abel';
			font-size:1.5em;
			padding:0 30% 0 30%;
			color:rgba(0,0,0,.75);
			text-transform: capitalize;	
			text-align:justify;
		}

		/*css for title bars - START*/
		.fancy{
			overflow: hidden;
			text-align: center;
		}

		.fancy span{
			position: relative;
		}

		.fancy span:before,
		.fancy span:after{
			content: ""; 
			position: absolute;
			top: 50%; margin-top: -.2em;
			height: .2em;
			border-top: 1px solid rgba(0,0,0,.25);
			border-bottom: 1px solid rgba(0,0,0,.25);
			width: 150%;
		}

		.fancy span:before {  
			right: 100%;
			margin-right: .5em;
		}

		.fancy span:after {  
			left: 100%;
			margin-left: .5em;
		}
		/*css for title bars - END*/
		#type1{
			/*background-color:#B4D8EF;*/
			background-color:rgba(0,0,0,.05);
		}

		#type2{
			background-color:#FFF;
		}

		.floor{
			position:absolute;
			bottom:0%;
			left:0;
			width:100%;
		}

		.icecream{
			position:absolute;
			bottom:15%;
			right:15%;
			width:25%;
			height:75%;
		}

		.tray{
			position:absolute;
			bottom:5%;
			left:15%;
			width:25%;
			height:75%;
		}

		.snowflakes{
			position:absolute;
			bottom:0%;
			left:0%;
			width:100%;
		}

		.orangeboy{
			margin:5% 0px 5% 0px;
			width:25%;
			animation-duration: 4s;
		}

		.element{
			width:100%;
			padding:10%;
		}
		
		.round-logo{
			width:30%;
		}

		.section-title{
			font-family:'abel';
			font-size:1.2em;
			font-weight:bold;
			text-transform:capitalize;
			margin:0;
		}

		.section-description{
			font-family:'abel';
			font-size:1em;
			text-transform:capitalize;
			margin:0;	
			text-align:justify;
			padding:0px 25% 0px 25%;
		}

		.item-container{
			margin-bottom:20%;
		}

		/* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
		@media only screen and (min-width: 40.063em) and (max-width: 64em) { 
			.scene-description{
				padding:0 15% 0 15%;
			}

			.orangeboy{
				width:50%;
			}

			.section-description{
				text-align:center;
				padding:0 15% 0 15%;
			}

			.icecream{
				width:50%;
				bottom:10%;
				right:0%;
			}

			.tray{
				width:50%;
				bottom:0%;
				left:0%;
			}

			.snowflakes{
				height:100%;
			}
		}

		/* max-width 640px, mobile-only styles, use when QAing mobile issues */
		@media only screen and (max-width: 40em) {
			.scene-description{
				text-align:left;
			}

			.scene-description{
				padding:0 5% 0 5%;
			}

			.orangeboy{
				width:75%;
			}

			.section-description{
				text-align:center;
				padding:0px 15% 0px 15%;
			}

			.floor{
				width:300%;
			}

			.icecream{
				width:30%;
				bottom:5%;
				right:0%;
			}

			.tray{
				width:50%;
				bottom:0%;
				left:0%;
			}

			.snowflakes{
				height:100%;
			}
		}
	</style>


	<!-- SCRIPT -->
	<script>
	</script>
</scene1-main>	