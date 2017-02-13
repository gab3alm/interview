<subscene2>
	<!-- HTML -->
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<!-- SUBSCENE2 SCENARY 											  -->
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<section class="subscene2-imagery-container">
		<img class="subsc2-floor" src="public/images/subscene2/floor2.svg" alt="">
		<img class="subsc2-bottles" src="public/images/subscene2/bottles2.svg" alt="">
		<img class="subsc2-tanner" src="public/images/subscene2/orangeboy.svg" alt="">
	</section>

	<section class="subscene2-information-container">
		<p class="fancy subsc2-title"><span>types of interview</span></p>
		<p class="subsc2-description">
			Knowing the different kinds of interviews that you may be 
			facing makes it easy to prepare for them.
		</p>
		<p class="subsc2-description">
			Here are some examples of the different kind of Interviews
		</p>
	</section>


	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<!-- INTERVIEW TYPE INFORMATION - TEMPLATE	  -->
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<section class="subsc2-interview-types-container">
		<virtual each={interview_types}>
			<!-- ||||||||||||||||||||||||||| -->
			<!-- 	LEFT SIDE									 -->
			<!-- ||||||||||||||||||||||||||| -->
			<div class="interview-type-container" if={side == 'left'}>
				<div class="row">
					<!-- interview image -->
					<div class="col s12 m6 l4 center-align">
						<img id={image_id} class="interview-type-image" src={image} alt="">
					</div>
					<!-- interview description -->
					<div class="col s12 m6 l8">
						<div id={title_id} class="interview-title-container">
							<p class="interview-type-title">{title}</p>
						</div>
						<virtual each={description}>
							<p class="interview-type-description">
								{text}
							</p>							
						</virtual>
						<div if={button} class="center-align">
							<a href={link} class="cust-btn2 button button-3d button-action button-pill">download</a>
						</div>

					</div>
				</div>
			</div>

			<!-- ||||||||||||||||||||||||||| -->
			<!-- 	RIGHT SIDE								 -->
			<!-- ||||||||||||||||||||||||||| -->
			<div class="interview-type-container" if={side == 'right'}>
				<div class="row">
					<!-- interview image -->
					<div class="col s12 m6 push-m6 l4 push-l8">
						<img id={image_id} class="interview-type-image" src={image} alt="">
					</div>
					<!-- interview description -->
					<div class="col s12 m6 pull-m6 l8 pull-l4">
						<div id={title_id} class="interview-title-container">
							<p class="interview-type-title">{title}</p>
						</div>
						<virtual each={description}>
							<p class="interview-type-description">{text}</p>							
						</virtual>
						<div if={button} class="center-align">
							<a href={link} class="cust-btn2 button button-3d button-action button-pill">download</a>
						</div>
					</div>
				</div>	
			</div>
		</virtual>
	</section>


	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<!-- INTERVIEW TIPS AREA										  -->
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<section class="interview-tips-container">
		<p class="fancy subsc2-title"><span>interview tips</span></p>
		<p class="subsc2-description">
			However, here are some live video specific Tips that might come in handy!
		</p>

		<div class="tip-list-container">
			<virtual each={tips_list}>
				<p class="tip-title">{title}</p>
				<p class="tip-description">{description}</p>				
			</virtual>
		</div>

		<div class="center-align">
			<a href="#steps/" class="btn2 button button-3d button-primary button-pill">Return</a>
		</div>
	</section>


	<!-- SCRIPT -->
	<script>
		require('subscene2/main.scss');
		this.on('mount', function(){
		});


		this.tips_list = [
		{
			title:'maintain a professional profile',
			description:
			`
			be aware of your username, profile information, and profile picture. 
			Make sure they represent you in a professional manner.
			`
		},
		{
			title:'settle connection issues, camera, and sound',
			description:
			`
			Make sure you have a strong internet connection wherever you are. 
			Check your camera to see that it is working and eye-level. Also,
			check to make sure the sound is working properly on your end.
			`
		},
		{
			title:'prepare your surroundings',
			description:
			`
			Maintain a quiet area. No loud background noises, distractions, or interruptions.
			Close any other windows on your computer, mobile device, or tablet to maintain
			maximum focus.
			`
		},
		{
			title:'practice',
			description:
			`
			Not only do you need to practice your answers, but you want to verify that the video works, that the volume is correct, and that your background and lighting look good.
			`
		},
		{
			title:'look at the webcam, not the screen',
			description:
			`
			It is very tempting to watch yourself or your interviewer during a Skype session, but looking directly at the video camera is the only way to maintain direct eye contact with your interviewer.
			`
		},
		{
			title:'watch your body language',
			description:
			`
			Not all physical cues translate from in-person interviews to Skype interviews, which make the ones that do even more important. Be sure to have good posture and relax your shoulders to avoid stiffness. Facial expressions are very important as well.
			`
		},
		{
			title:'do not rely on notes',
			description:
			`
			Feel free, to have paper and pen with you to jot down interviewer names and details, but don’t focus on it. Do have your resume on hand for any questions you may receive.
			`
		}
		];

		this.interview_types = [
		{	
			side:'left',
			title_id:'general-interview',
			title:'the general interview',
			image_id:'general-interview-image',
			image:'public/images/subscene2/general_interview.svg',
			button:false,
			link:'#!',
			description:[
			{
				text:
				`
				The general interview format is the standard form of an interview where you will be invited to meet with the hiring manager, often accompanied by an HR representative. The specifics of the position, the company and industry will be discussed.
				`
			},
			{
				text:
				`
				Your Resume/CV will be reviewed with questions designed to ascertain your suitability for the role and your cultural fit with the business. Competency questions may be used to assess how your past experiences have allowed you to develop specific skills and how these could benefit the company. Often the decision to hire is made after this type of interview.
				`
			}
			]
		},
		{	
			side:'right',
			title_id:'lunch-interview',
			title:'the lunch interview protocol',
			image_id:'lunch-interview-image',
			image:'public/images/subscene2/lunch_interview.svg',
			button:false,
			link:'#!',
			description:[
			{
				text:
				`
				The same rules apply in lunch interviews as in those held at the office. 
				The setting may be more casual, but it is a business lunch and you will 
				be carefully scrutinized. Limit or avoid alcohol intake and remember table
				etiquette.
				`
			}
			]
		},
		{	
			side:'left',
			title_id:'telephone-interview',
			title:'telephone screening interview',
			image_id:'telephone-interview-image',
			image:'public/images/subscene2/phone_interview.svg',
			button:false,
			link:'#!',
			description:[
			{
				text:
				`
				Telephone interviews are meant to eliminate poorly qualified candidates.
				Your objective is to be invited for a personal face-to-face interview.
				To ensure this, introduce yourself clearly. Engage in some rapport, 
				building small talk.
				`
			},
			{
				text:
				`
				Modulate your voice and speak clearly into the receiver. Your voice is the
				only tool you can use to convey your enthusiasm for the job, so make sure
				your voice reveals both your personality and attitude positively. Have in 
				front of you your Resume/CV, job description, interview preparation notes, and
				pen and paper. Eliminate any distractions and if you need to refer to your
				interview preparation notes, do so discreetly.
				`
			}
			]
		},
		{	
			side:'right',
			title_id:'competency-interview',
			title:'competency based interview',
			image_id:'competency-interview-image',
			image:'public/images/subscene2/competency_interview.svg',
			button:true,
			link:'#!',
			description:[
			{
				text:
				`
				Competency based interviews are designed to predict future behaviors based upon 
				past behaviors and experiences. It’s best to prepare for these types of questions 
				by demonstrating how your past experiences have allowed you to develop specific 
				skills and how these skills could subsequently benefit the prospective employer.
				Every job will have a set of competencies, so for more help, see our in-depth guide.
				`
			},
			]
		},
		{	
			side:'left',
			title_id:'multiple-interview',
			title:'multiple one to one interview',
			image_id:'multiple-interview-image',
			image:'public/images/subscene2/multiple_interview.svg',
			button:true,
			link:'#!',
			description:[
			{
				text:
				`
				One to one interviews are usually used when it has been established that you possess the rights skills and profile necessary for the position. They are usually used for second or third stage interviews whereby you will be interviewed by a number of different individuals from the business.
				`
			},
			{
				text:
				`
				The idea is to gauge whether you will be a good fit with the company, culture and values. They explore how your skills complement the rest of the organization. Your goal should be to establish rapport with each interviewer and to demonstrate that your attributes are a good fit.

				`
			}
			]
		},
		{	
			side:'right',
			title_id:'panel-interview',
			title:'panel interview',
			image_id:'panel-interview-image',
			image:'public/images/subscene2/panel_interview.svg',
			button:true,
			link:'#!',
			description:[
			{
				text:
				`
				Panel interviews are a common practice. You will face several members of the company who have a vested interest in the hiring decision. Interviewers may include, the Hiring (Line) Manager, Departmental/Segment/Regional Head, HR Manager and related/dependent function managers.
				`
			},
			{
				text:`
				Panel interviews are either well-structured with a cohesive approach in seeking to identify why you may be suited to the job, with each interviewer assigned an area in which he will assess you. Alternatively, they may be unstructured and quite intense, as each interviewer takes it in turn to pursue their own line of questioning.
				`
			},
			{
				text:
				`
				They often assess how you respond to hypothetical questions or construct your approach to various business scenarios and how you would apply your skills, knowledge and experience to a real life business situation. Remember, to maintain eye contact with all members of the panel when responding to questions.
				`
			}
			]
		},
		{	
			side:'left',
			title_id:'group-interview',
			title:'group interview',
			image_id:'group-interview-image',
			image:'public/images/subscene2/group_interview.svg',
			button:true,
			link:'#!',
			description:[
			{
				text:
				`
				A group interview is usually designed to uncover the leadership potential of prospective employees. You may be gathered with other front-runner candidates (external and internal) in an informal, discussion-type interview. A subject is introduced (often a scenario that requires a problem to be solved) and the interviewer/s will start off the discussion.
				`
			},
			{
				text:
				`
				Once the discussion is underway, the interviewer/s will withdraw from conversation and facilitate a leaderless group session. The objective of the group interview is to observe how you interact with others and how you use your knowledge, reasoning powers, persuasive and communication skills to win others over.
				`
			}
			]
		},
		{	
			side:'right',
			title_id:'role-interview',
			title:'roleplay interview',
			image_id:'roleplay-interview-image',
			image:'public/images/subscene2/roleplay_interview.svg',
			button:true,
			link:'#!',
			description:[
			{
				text:
				`
				Role-play interviews are usually integrated into any of the above interview styles. The interviewer will ask you to assume a fictitious role in a hypothetical business situation, which will clearly be explained to you. You will be given a specific task to accomplish during the role-play, while the interviewer assumes the role of a customer, supplier, employee, manager or business associate.
				`
			},
			{
				text:
				`
				Often several interviewers or even actors may be involved in the scenario and each will be pre-prepared to respond in accordance to your particular approach. These types of exercises are usually designed to measure your communication, influencing, sales, negotiation and interpersonal skills.
				`
			}
			]
		},
		{	
			side:'left',
			title_id:'presentation-interview',
			title:'presentation interview',
			image_id:'presentation-interview-image',
			image:'public/images/subscene2/presentation_interview.svg',
			button:true,
			link:'#!',
			description:[
			{
				text:
				`
				Presentation interviews are also usually integrated into any of the above interview styles. They tend to be reserved for either second or third stage interview, but can also be used as an effective screening mechanism at first interview stage.
				`
			},
			{
				text:
				`
				You will be provided with details of the presentation topic and any supporting information as required, in advance of your interview. Remember to stick to your time limit, deliver any key messages confidently, maintain eye contact with the audience and be visually expressive. Where possible, prepare your presentation on soft copy slideshow for a professional delivery.
				`
			}
			]
		},
		{	
			side:'right',
			title_id:'skype-interview',
			title:'skype / facetime interview',
			image_id:'skype-interview-image',
			image:'public/images/subscene2/skype_interview.svg',
			button:true,
			link:'#!',
			description:[
			{
				text:
				`
				Skype and Facetime interviews are becoming commonplace due to their ease of setup for the employer regardless of location. Many of the same rules apply to a live video interview, such as dressing professionally and connecting early.
				`
			},
			]
		}
		];
	</script>
</subscene2>