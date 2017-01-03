var riot = require('riot');
var route = require('riot-route');

riot.mount('*');

function router(scene, subscene){
  // console.log(scene + " " + subscene);
  // initial page for user
  if(scene == ''){
    riot.mount('#main-viewport', 'main');
  }else if(scene == "home"){
    riot.mount('#main-viewport', 'homepage');
  }else if(scene == "steps"){
    //you want to load scenes, because it has the #sub-viewport element 
    riot.mount('#main-viewport', 'scenes');
    if(subscene == "starting-job-search"){
      riot.mount('#sub-viewport', 'subscene1');
    }else if(subscene == "interview-types"){
      riot.mount('#sub-viewport', 'subscene2');
    }else if(subscene == "interview-preparation"){
      riot.mount('#sub-viewport', 'subscene3');
    }else if(subscene == "ace-the-interview"){
      riot.mount('#sub-viewport', 'subscene4');
    }else if(subscene == "following-up-the-interview"){
      riot.mount('#sub-viewport', 'subscene5');
    }else if(subscene == "accepting-the-job"){
      riot.mount('#sub-viewport', 'subscene6');
    }


  }else{
    // this would be your 404 page
    riot.mount('#main-viewport', 'main');
  }
}

route(router);
route.stop();
route.start(true);
