<subscene3>
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<!-- SUBSCENE3 SCENARY 											  -->
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<section class="subscene3-imagery-container">
		<img class="subsc3-floor" src="public/images/subscene3/floor.svg" alt="">
		<div class="subscene3-inner-container">
			<img class="subsc3-bed" src="public/images/subscene3/cheesebed.svg" alt="">
			<img class="subsc3-closet" src="public/images/subscene3/closet-milk.svg" alt="">
			<img class="subsc3-glass" src="public/images/subscene3/glass2.svg" alt="">
		</div>
	</section>

	<section class="subscene3-information-container">
		<p class="fancy subsc3-title"><span>preparing for an interview</span></p>
		<p class="subsc3-description">
			The keys to successful interviewing are preparation, like-ability, and bonding. There are several critical areas to consider and essential things to do in preparation for your interview.
		</p>
	</section>
	

	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<!-- SUBSCENE3 BOXES	 											  -->
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<section class="subscene3-boxes-container">

		<div class="row center-align">
			<virtual each={boxes}>
				<div class="col s12 m6 l4">

					<div class="subsc3-box-container">
						<img class="subsc3-box-image animated" id={image_id} src={image} alt="">

						<div id={title_id} class="subsc3-box-title-container">
							<div class="subsc3-box-title">{title}</div>
						</div>

						<div class="subsc3-box-description-container" each={description}>
							<div class="subsc3-box-description">{text}</div>
						</div>

						<a if={button} href={url} class="cust-btn2 button button-3d button-action button-pill">learn more</a>
					</div>

				</div>	
			</virtual>
		</div>

	</section>


	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<!--  SUBSCENE3 HEARING BACK FROM EMPLOYERS		-->
	<!-- ||||||||||||||||||||||||||||||||||||||\\ -->
	<div class="subscene3-tips-container">
		
	</div>



	<!-- SCRIPT -->
	<script>
		require('subscene3/_background.scss');
		this.on('mount', function(){
			var $node = $(this.root);
			$node.find('.subsc3-box-image').hover(function(){
				// mouse in function
				$node.find(this).addClass('shake');
			}, function(){
				// mouse out function
				$node.find(this).removeClass('shake');
			});
		});

		this.boxes = [
		{
			title:'know the position',
			title_id:'know_position_title',
			description:[
			{
				text:`
				Be prepared to explain why you are seeking the position and
				why you would be successful in the job.
				`
			}
			],
			image:'public/images/subscene3/book.svg',
			image_id:'know_position',
			image_alt:'know the position that you are applying for',
			button:false,
			url:'#!'
		},
		{
			title:' know the company/agency',
			title_id:'know_company_title',
			description:[
			{
				text:`
				Learn about its services and products to converse intelligently
				about the organization.
				`
			}
			],
			image:'public/images/subscene3/company.svg',
			image_id:'know_company',
			image_alt:'research the company that you are applying to',
			button:false,
			url:'#!'
		},
		{
			title:'why should they hire you?',
			title_id:'hire_you_title',
			description:[
			{
				text:`
				Your primary responsibility during the interview is to give 
				the employer substantial reasons why you should be hired. 
				`,
				text:`
				Stress what you can do to meet the goals and needs of the 
				employer, not what the employer can do for you. Look for
				commonalities - colleges, values, backgrounds, interests
				-so that you can build necessary social links.
				`
			}
			],
			image:'public/images/subscene3/hired.svg',
			image_id:'you_are_hired',
			image_alt:'Know your skills and why you would be a good asset to that company',
			button:false,
			url:'#!'
		},
		{
			title:'present yourself effectively',
			title_id:'present_yourself_title',
			description:[
			{
				text:`
				Remember that the interviewer needs to hire employees. So, if
				you can present yourself and your qualifications to the interviewer
				more effectively than anyone else, you will significantly increase
				your chances for obtaining an offer of employment.
				`
			}
			],
			image:'public/images/subscene3/landing.svg',
			image_id:'present_yourself',
			image_alt:'first impressions matter a lot during interviews',
			button:false,
			url:'#!'
		},
		{
			title:'know your skills',
			title_id:'know_skills_title',
			description:[
			{
				text:`
				Need help figuring out what skill areas you excel in? Check out the interactive activity on Pathways!
				`
			}
			],
			image:'public/images/subscene3/skills.svg',
			image_id:'know_your_skills',
			image_alt:'know your strenghts and why these are important',
			button:true,
			url:'#!'
		},
		{
			title:'on campus interviews',
			title_id:'campus_interviews_title',
			description:[
			{
				text:`
				Don’t forget to check out On Campus Interviews at CSUN
				`
			}
			],
			image:'public/images/subscene3/csun.svg',
			image_id:'campus_interviews',
			image_alt:'CSUN also has cool on campus interviews',
			button:true,
			url:'#!'
		}
		];
	</script>
</subscene3>