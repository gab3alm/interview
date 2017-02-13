import riot from 'riot';
import route from 'riot-route';

function router(scene, subscene){
  // console.log(scene + " " + subscene);
  // initial page for user
  if(scene == ''){
    riot.mount('#viewport', 'homepage');
  }else if(scene == "steps"){
    //you want to load scenes, because it has the #sub-viewport element 
    riot.mount('#viewport', 'scenes');
    if(subscene == "starting-job-search"){
      riot.mount('#viewport', 'subscene1');
    }else if(subscene == "interview-types"){
      riot.mount('#viewport', 'subscene2');
    }else if(subscene == "interview-preparation"){
      riot.mount('#viewport', 'subscene3');
      window.scrollTo(0,0);
    }else if(subscene == "ace-the-interview"){
      riot.mount('#viewport', 'subscene4');
      window.scrollTo(0,0);
    }else if(subscene == "following-up-the-interview"){
      riot.mount('#viewport', 'subscene5');
      window.scrollTo(0,0);
    }else if(subscene == "accepting-the-job"){
      riot.mount('#viewport', 'subscene6');
      window.scrollTo(0,0);
    }
  }else{
    // this would be your 404 page
    riot.mount('#main-viewport', 'main');
  }
}

route.stop();
route.start(true);
route(router);
