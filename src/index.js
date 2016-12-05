require('normalize.css/normalize.css');
require('materialize-css/dist/css/materialize.css');
require('animate.css/animate.min.css');
require('expose?$!expose?jQuery!jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');
require('riot-route/dist/route.min.js');

var riot = require('riot');
var route = require('riot-route');

require('./tags/homepage.tag');
require('./tags/footing.tag');
require('./tags/navigation-bar.tag');
require('./tags/successful-interviewing.tag');
require('./tags/scene1.tag');
require('./tags/scene2.tag');
require('./tags/scene3.tag');
require('./tags/scene4.tag');
require('./tags/scene5.tag');
require('./tags/scene6.tag');
require('./tags/scene1-main.tag');
require('./tags/scene2-main.tag');
require('./tags/scene3-main.tag');
require('./tags/scene4-main.tag');
require('./tags/interview_types_tag/general-interview.tag');
require('./tags/interview_types_tag/lunch-interview.tag');
require('./tags/interview_types_tag/telephone-interview.tag');
require('./tags/interview_types_tag/competency-interview.tag');
require('./tags/interview_types_tag/multiple-interview.tag');
require('./tags/interview_types_tag/panel-interview.tag');
require('./tags/interview_types_tag/group-interview.tag');
require('./tags/interview_types_tag/roleplay-interview.tag');
require('./tags/interview_types_tag/presentation-interview.tag');
require('./tags/interview_types_tag/skype-interview.tag');



document.addEventListener('DOMContentLoaded', function(){
	riot.mount('scene4-main');

	route.stop();
	route.start(true);
	route.base('#');

	route('/scenes', function(){
		riot.mount('#main-viewport', 'successful-interviewing');
	});

	route('/start-job-search', function(){
		riot.mount('#sub-viewport', 'scene1-main');
	});

	route('/interview-types', function(){
		riot.mount('#sub-viewport', 'scene2-main');
	});

	route('/interview-preparation', function(){
		riot.mount('#sub-viewport', 'scene3-main');
	});

	route('/general-interview', function(){
		riot.mount('#interview-viewport', 'general-interview');
	});

	route('/lunch-interview', function(){
		riot.mount('#interview-viewport', 'lunch-interview');
	});

	route('/telephone-interview', function(){
		riot.mount('#interview-viewport', 'telephone-interview');
	});

	route('/competency-interview', function(){
		riot.mount('#interview-viewport', 'competency-interview');
	});

	route('/multiple-interview', function(){
		riot.mount('#interview-viewport', 'multiple-interview');
	});

	route('/panel-interview', function(){
		riot.mount('#interview-viewport', 'panel-interview');
	});

	route('/group-interview', function(){
		riot.mount('#interview-viewport', 'group-interview');
	});

	route('/roleplay-interview', function(){
		riot.mount('#interview-viewport', 'roleplay-interview');
	});

	route('/presentation-interview', function(){
		riot.mount('#interview-viewport', 'presentation-interview');
	});

	route('/skype-interview', function(){
		riot.mount('#interview-viewport', 'skype-interview');
	});
})