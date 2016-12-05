<scene3-main>
	<!-- HTML MARKUP -->
	<div class="container-fluid">
		<!-- main scene imagery -->
		<section class="row">
			<div class="col s12">
				<div class="imagery">
					<img class="floor" src="src/images/scene2-main/floor.svg" alt="">
				</div>				
			</div>	
		</section>


		<!-- Navigation buttons -->
		<div class="row">
			<div class="col s12"></div>
		</div>

		<!-- Scene view -->
		<div class="row center-align">
			<div id="interview-viewport" class="col s12">
				<interview-preparation-viewport></interview-preparation-viewport>
				

				<p class="scene-title fancy"><span>preparing for an interview</span></p>
				<p class="scene-description">
					The keys to successful interviewing are preparation, like-ability, and bonding.
					There are several critical areas to consider and essential things to do in 
					preparation for your interview.
				</p>
				<!-- CARDS - START -->
				<div class="row">
					<virtual each={cards}>
						<div class="col s12 m6 l4">
							<div class="card-panel">
								<img class="circle-img" src={image} alt="">
								<p class="card-title"> {title} </p>
								<p class="card-description"> {description} </p>
								<!-- hide button if 'button' property is disabled -->
								<div class={ hide : !button}>
									<a href={buttonLink} class="button button-3d button-primary button-pill">{buttonTitle}</a>
								</div>
							</div>
						</div>
					</virtual>
				</div>
				<!-- CARDS - END -->
				<div class="row">
					<div class="col s12">
						<p class="scene-title fancy"><span>hearing back from employers &amp; scheduling an interview</span></p>
					</div>
				</div>
				<div class="row">
					<div class="col s12 m2"><img class="circle-img" src="" alt=""></div>
					<div class="col s12 m6">
						<p class="section-description">
							They say patience is a virtue, but that can be difficult to remember when waiting 
							to hear back from an employer. Try your best to focus on other things, or even 
							keep applying to opportunities. 
						</p>
						<p class="section-description">
							After a week, it is always appropriate to call and
							check the status of their application. This is less about finding out immediately 
							if they’d like to schedule an interview so much as it lets your potential employer
							know of your continued interest and initiative.
						</p>
					</div>
				</div>

				<div class="row">
					<div class="col s12 m2 push-m10"><img class="circle-img" src="" alt=""></div>
					<div class="col s12 m6 push-m2">
						<p class="section-description">
							They say patience is a virtue, but that can be difficult to remember when waiting 
							to hear back from an employer. Try your best to focus on other things, or even 
							keep applying to opportunities. 
						</p>
						<p class="section-description">
							After a week, it is always appropriate to call and
							check the status of their application. This is less about finding out immediately 
							if they’d like to schedule an interview so much as it lets your potential employer
							know of your continued interest and initiative.
						</p>
					</div>
				</div>
				
				<hr style="width:80%;">
				<hr style="width:80%;">

			</div>
		</div>
	</div>	


	<!-- STYLES -->
	<style>
		.hide{
			display:none;
		}

		.card-panel{
			margin:5%;
			background-color:rgba(0,0,0,.25);
			min-height:420px;
		}

		.circle-img{
			background-color:rgba(0,0,0,.85);
			height:120px;
			width:120px;
			border-radius:50%;
		}

		.card-title{
			font-family:'pattaya';
			color:rgba(0,0,0,.85);
			font-size:2em;
			text-transform: capitalize;
			margin:0px;
		}

		.card-description{
			font-family:'abel';
			color:rgba(0,0,0,.85);
			font-size:1.2em;
			text-transform: capitalize;
			padding:0px 5% 0px 5%;
			text-align:left;
		}
		
		.section-description{
			font-family:'abel';
			font-size:1.5em;
			color:rgba(0,0,0,.75);
			padding:0px 5% 0px 5%;
			text-align:left;
			/*margin:12px 0px 0px 0px;*/
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

		.row, .col{
			padding:0 !important;
			margin:0 !important;
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

		.scene-control-holder{
			height:70vh;
			line-height:1em;
			position:relative;
		}

		.scene-control-btn{
			position:absolute;
			top:50%;
			font-size:3.5em;
			margin:0px 10px 0px 10px;

			border-radius: 50%;
			height:50px;
			width:50px;
			transition:all 0.3s ease-out;
		}

		.scene-control-btn:hover{
			transition:all 0.5s ease-out;
			background-color:rgba(0,0,0,.5);
			color:white;
			transform:scale(1.2);
			cursor:pointer;
		}

		#prev{
			left:0;
		}

		#next{
			right:0;
		}

		#main-viewport{
			background-color:rgba(0,0,155,.1);
		}

		.imagery{
			position:relative;
			height:30vh;
			width:100%;

			background-image:url('src/images/scene2-main/background.svg');
			background-size:cover;
			background-position: center;
			overflow:hidden;
		}	

		.floor{
			position:absolute;
			bottom:0%;
			left:0;
			width:100%;
		}

		#interview_viewport{
			position:relative;
			min-height:70vh;
			height:auto;
		}

		/*Styles for Med size screens*/
		/* min-width 641px and max-width 1024px, use when QAing tablet-only issues */
		@media only screen and (min-width: 40.063em) and (max-width: 64em) {
			.scene-description{
				padding:0 15% 0 15%;
			}
		}

		/*STYLES FOR SMALL/MOBILE SCREENS */
		@media only screen and (max-width: 40em) {
			.scene-description{
				padding:0 15% 0 15%;
			}
			.card-panel{
				min-height:auto;
			}
		}
	</style>


	<!-- SCRIPT -->
	<script>
		this.cards = [
		{
			image:'',
			title:'know the position', 
			description:
			`
			be prepared to explain why you are seeking the 
			position and why you would be successful in the job
			`, 
			button:0, 
			buttonTitle:'', 
			buttonLink:''
		},
		{
			image:'',
			title:'know the company/agency', 
			description:
			`
			Learn about its services and products to converse intelligently about the organization. 
			`, 
			button:0, 
			buttonTitle:'', 
			buttonLink:''
		},
		{
			image:'',
			title:'why should they hire you?', 
			description:
			`
			Your primary responsibility during the interview is to give the employer substantial 
			reasons why you should be hired. Stress what you can do to meet the goals and needs
			of the employer, not what the employer can do for you. Look for commonalities -
			colleges, values, backgrounds, interests-so that you can build necessary social links. 
			`, 
			button:0, 
			buttonTitle:'', 
			buttonLink:''
		},
		{
			image:'',
			title:'present yourself effectively', 
			description:
			`
			Remember that the interviewer needs to hire employees. So, if you can present yourself
			and your qualifications to the interviewer more effectively than anyone else, you 
			will significantly increase your chances for obtaining an offer of employment
			`, 
			button:0, 
			buttonTitle:'', 
			buttonLink:''
		},
		{
			image:'',
			title:'know your skills', 
			description:
			`
			Need help figuring out what skill areas you excel in? 
			Check out the interactive activity on Pathways!
			`, 
			button:1, 
			buttonTitle:'Pathways Link', 
			buttonLink:'#!'
		},
		{
			image:'',
			title:'on campus interviews!', 
			description:
			`
			Don’t forget to check out On Campus Interviews at CSUN!
			`, 
			button:1, 
			buttonTitle:'CSUN LINK', 
			buttonLink:'#!'
		},
		];
	</script>
</scene3-main>	