<scene4-main>
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
				

				<p class="scene-title fancy"><span>acing the interview</span></p>
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
						<p class="scene-title fancy"><span>interview tips &amp; advice</span></p>
					</div>
				</div>
				<div class="row">
					<div class="col s12 m6">
						<p class="section-description">Do's</p>
						<ul class="section-description-list">
							<li>put yourself on their team</li>
							<li>compliment their accomplishments</li>
							<li>research their company</li>
							<li>shake hands with each member interviewing you</li>
							<li>make eye contact when answering questions, or when the interviewer is speaking</li>
							<li>talk about previous experience that relates to the position</li>
							<li>discuss your skills and qualifications</li>
						</ul>
					</div>
					<div class="col s12 m6"><img class="circle-img" src="" alt=""></div>

				</div>

				<div class="row">
					<div class="col s12 m6"><img class="circle-img" src="" alt=""></div>
					<div class="col s12 m6">
						<p class="section-description">Dont's</p>
						<ul class="section-description">
							<li>bring food or gifts for the interview</li>
							<li>wear heavy make-up, cologne, or perfume.</li>
							<li>chew gum</li>
							<li>play with pens, pencils, and objects</li>
							<li>talk excessively</li>
							<li>talk badly about acquaintances or past employment positions.</li>
							<li>slouch</li>
							<li>talk about politics or religion (unless related to position)</li>
							<li>ask about salary or benefits during the initial interview (dont' make it your first question)</li>
						</ul>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<p class="scene-title fancy"><span>know your rights</span></p>
						<p class="scene-description">check out the questions that are acceptable for you to be asked by an interviewer</p>
						<a href="#!" class="button button-3d button-primary button-pill">Coming Soon!</a>
					</div>
				</div>

				<div class="row">
					<div class="col s12 m3 push-m9">

					</div>
					<div class="col s12 m9 pull-m3">
						<p class="section-title">how to avoid common mistakes</p>
						<ul class="tip-lists"><li class="tip-list-item" each={common_mistakes}>{title}</li></ul>
					</div>
				</div>
				
				<hr style="width:80%;">
				<hr style="width:80%;">

			</div>
		</div>
	</div>	


	<!-- STYLES -->
	<style>
		.tip-lists{
			font-family:'abel';
			font-size:1.2em;
			text-transform: capitalize;
			text-align:left;
			margin:0 0 0 6%;
			padding:0 10% 0 0;
		}
		
		.tip-list-item{
			list-style: circle outside none !important;
			/*list-style: disc outside none;*/
			display: list-item;
			margin:1em 0 0 0;

		}

		.section-title{
			font-family:'abel';
			font-size:2.0em;
			color:rgba(0,0,0,.75);
			text-transform: capitalize;
			text-align:left;
			margin:5% 0 0 5%;
		}

		.hide{
			display:none;
		}

		.card-panel{
			margin:5%;
			background-color:rgba(0,0,0,.25);
			min-height:500px;
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

		.section-description-list{
			text-align:left;
			font-family:'abel';
			font-size:1.2em;
			color:rgba(0,0,0,.65);
			display:list-item;
			list-style-position:inside;
			list-style-type:circle;
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
			title:'the night before', 
			description:
			`
			By preparing properly beforehand, as opposed to leaving it to the last minute,
			you can avoid extra stress the night before. Simply make sure your clothing is laid out 
			and ready to go and that you have all necessary materials (a copy of your resume,
			identification, paper for taking any notes or jotting down pertinent information). 
			You can only prepare so much, and over-preparation lends itself to stiffness and unease. 
			Just try your best to get a good night’s sleep and have a healthy breakfast beforehand.
			`, 
			button:1, 
			buttonTitle:'Coming Soon!', 
			buttonLink:'#!'
		},
		{
			image:'',
			title:'first impression counts!', 
			description:
			`
			First impressions count! Arrive at least 15 minutes before your interview. Know that the
			first person that you encounter (receptionist) is already interviewing you. Remember, 
			your interview begins before you sit down with the potential employer. Greet everyone,
			including the receptionist, in a positive and professional manner. The decision to hire, 
			or not to hire, is often made early in the interview. The decision made by the interviewer 
			is largely subjective. It can revolve around whether you fit the office "culture" or if 
			you have a strength an employer is seeking.
			`, 
			button:0, 
			buttonTitle:'', 
			buttonLink:''
		},
		{
			image:'',
			title:'once you begin the interview', 
			description:
			`
			Once you begin the interview, make eye-contact and show attentiveness to whomever
			is interviewing you. Employers are looking for potential candidates who feel 
			confident in their proposed position. Fidgeting and nervous behavior can give off 
			the wrong impression
			`, 
			button:0, 
			buttonTitle:'', 
			buttonLink:''
		}
		];

		this.common_mistakes = [
		{title:'have an idea about what you\'d like to do within your potential new job'},
		{title:'show your best, most polite, and professional self'},
		{title:
			`
			Assume that your interviewer may not have looked at your resume. You need
			to sell yourself, so don’t just depend on the submission of your resume to 
			do it for you.
			`
		},
		{title:'Prepare a mental outline and pitch beforehand. Just winging it may push you into a corner.'},
		{title:
			`
			Give thoughtful answers to the questions asked of you. Just giving short, 
			one word answers doesn’t give your potential employer a good image of your 
			potential without explanation. 
			`
		},
		{title:
			`
			Explain how your experiences fit the needs of the recruiter. You need to tackle
			the interview believing you’re the best person for the job, and then prove it!
			`
		},
		{title:
			`
			Be sure to ask questions of the interviewer! Remember, you’re also interviewing 
			the company to make sure you’d like to work for them. This also allows you to go
			further in the interview process with as little confusion as possible.
			`
		},
		{title:
			`
			Don’t forget to mention extracurricular experiences such as clubs or volunteer work.
			`
		},
		];
	</script>
</scene4-main>	