(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2.1).p("AjJhyQAQgXAcgWQAagTAcgMQgCgEAAgDQAAgVAwgOQAvgPBDAAQBDAAAwAPQAwAOAAAVQAAAUgyAPQAiAhATAtQATAwAAA1QAABgg5BDQg6BEhSAAQh7AAgWg9QgJgXABguQADg4AAggQAAgVACgTQggAighAOQgiANgVgOQgYgRAHgsQAGgsAhgug");
	this.shape.setTransform(21.7,-19.1,0.55,0.55,0,-148,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AhkC7QgJgXABguQADg4AAggQAAgVACgUQggAjghAOQgiANgVgOQgYgSAHgrQAGgsAhguQAQgYAcgUQAagUAcgMQgCgDAAgFQAAgUAwgOQAvgPBDAAQBDAAAwAPQAwAOAAAUQAAAWgyAOQAiAgATAuQATAwAAA0QAABgg5BFQg6BDhSAAQh7AAgWg9g");
	this.shape_1.setTransform(21.7,-19.1,0.55,0.55,0,-148,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AkpDiQgOgQAXgQQAPgLA4gXQCSg+BFg8QBOhCBwh6QAjgnAUgPQAagUAXgEQAPgBgFATQgGAUgaAjQg9BVh3BmQhxBhiLA9Qg0AYgoAJQgWAGgLAAQgHAAgDgDg");
	this.shape_2.setTransform(-5.3,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-35.5,74.1,67.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2.1).p("AhuBAQAJAMAPAMQAPAKAPAHQgBADAAABQAAALAaAIQAaAIAlAAQAlAAAagIQAagIAAgLQAAgLgbgIQASgSALgZQAKgaAAgdQAAg1gfglQggglgtAAQhEAAgMAhQgFANABAZQACAfAAASQAAALABALQgRgTgTgHQgSgIgMAIQgNAKADAXQAEAZASAZg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgfCAQgagIAAgLIABgEQgPgHgPgKQgPgMgJgMQgSgZgEgZQgDgXANgKQAMgIASAIQATAHARATIgBgWIgCgxQgBgZAFgNQAMghBEAAQAtAAAgAlQAfAlAAA1QAAAdgKAaQgLAZgSASQAbAIAAALQAAALgaAIQgaAIglAAQglAAgagIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-14.6,31.9,31.4);


// stage content:
(lib.pear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left_hand
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(254.4,172);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:12.3,x:249,y:119.8},7).to({regY:13.7,scaleX:1,scaleY:1,rotation:14,x:247,y:121.4},1).to({startPosition:0},8).to({regX:0.1,rotation:5.3,x:251.8,y:164.4},5).to({rotation:1.8,x:253.6,y:177.6},2).to({regX:0,regY:0,rotation:0,x:254.4,y:172},1).to({startPosition:0},8).to({scaleX:1,scaleY:1,rotation:70,x:268.6,y:215.5},4).to({scaleX:1,scaleY:1,rotation:122.4,x:275.2,y:257.1},3).to({regY:11.6,scaleX:1,scaleY:1,rotation:140,x:265.8,y:258.9},1).to({startPosition:0},8).to({scaleX:1,scaleY:1,rotation:70,x:257.3,y:220.2},4).to({rotation:17.3,x:255.2,y:188.3},3).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:254.4,y:172},1).wait(8));

	// left_arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABLDmQiJgohch1QgggogTgoQgQgjADgKQAGgUASASQALAMAlAuQBbBvBjAdQBQAXAWgsQARghgOhTQgThhgGgrQgJhLAZgVQAdgXAZBMQAYBLABBlQABBwggBAQgdA7g0AAQgPAAgRgFg");
	this.shape.setTransform(241,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("ABGDkQhVgMhEgtQgggWgcgbQgVgVgQgUIgNgUQgQgaAAgKQAEgSAQAMQAKAHAhAjIABABQBFA/BIAZQARAFATADQBIANAWgsQARgkgKhPQgGgrgEghQgFgngBgXQgGhIAZgXQAcgbAYBBIAHARQATA8gFBgQgCBDgNA0QgIAfgLAZQggBBg3AAIgSgCg");
	this.shape_1.setTransform(240.1,192.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AhNDIQgegNgbgRIgjgaQgHgGgGgIQgRgSgCgKQACgRAOAIQAJADAeAXIABABQBCAmBBAMQAQACARAAQBBADAUgtQASgngGhLIgFhLQgCglAAgYQgChFAXgYQAcgfAXA2IAIANQAUA2gLBnQgDBAgPA3QgIAegMAZQgiBJg+gBIgNAAQhGAAg6gag");
	this.shape_2.setTransform(239.3,184.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AhHDgQgcgFgagHIghgMQgHgCgGgFQgSgKgEgKQgBgPAMADQAIgCAcAMIABAAQA/ANA6AAIAegFQA4gHAVgtQARgqgChGQAAgqABggQgBgkACgZQAChCAWgaQAcgiAWArQAEAEAEAGQAVAugQBvQgGA9gQA5QgIAegLAZQghBIg3AIQgtALgmAAQgYAAgWgEg");
	this.shape_3.setTransform(238.6,177.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AigD0QgSgDgHgKQgDgNAKgCQAGgHAaACIABAAQA8gNAzgMQAOgFAOgHQAwgQATgvQATgtABhBIAGhJQACgjADgZQAFg/AVgbQAcgnAVAgQAFACAEAGQAWAmgWB2QgIA8gRA5QgJAegLAZQgeBHgxASQhAAgg1AHIgyAHQgRAAgPADIgEAAIgJgBg");
	this.shape_4.setTransform(237.8,171.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AixERQgFgLAIgIQAFgLAYgKIABAAQA4glAtgZIAXgTQApgaATgvQATgwAFg8IAKhJQAFgiAFgYQAJg9AUgdQAbgqATAUQAGABAFAEQAXAfgcB+QgKA5gSA7IgUA3QgcBFgrAcQg4AvgxAYQgXALgYAPQgPAIgPAKQgHADgGABQgHACgFAAQgKAAgGgGg");
	this.shape_5.setTransform(237,167.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AipE6QgHgKAGgMQAEgQAVgVIABgBQA1g+AmglIAUgaQAigkASgwQATgxAJg5IAPhIQAHggAHgZQAMg6ATgfQAbguASAKQAHgCAFAEQAYAXgiCFQgLA3gVA+IgTA2QgbBDgkAmQgxA+gsApQgVAUgWAZQgPAOgOASQgHAHgGAEQgLAIgJAAQgGAAgFgEg");
	this.shape_6.setTransform(236.2,163.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AigFlQgJgIADgSQADgUATggIABgBQAyhXAfgyIARggQAbguASgxQASg0ANg0IAUhIIARg4QARg3ARggQAbgyARgCQAHgDAGACQAYAQgnCNQgNA0gWBAIgTA2QgZBBgeAwQgqBNgnA7QgTAbgVAkIgbAvQgHAKgGAHQgOAPgLAAQgFAAgEgDg");
	this.shape_7.setTransform(235.3,159.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AiYGQQgXgMAghVQAvhxAZg+QBEjHArh3QBRjeAgALQAiALhcEFQhGDHhBCQQgZA5glBWQgWAugTAAQgFAAgEgDg");
	this.shape_8.setTransform(234.4,154.7);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AA+C2IgRgGQhvgvhQhoIgIgKQgfgpgSgoQgQgiADgKQAGgUASARQAMALAlAuIAKAMQBSBgBbAnIARAGQA7APAVgbQASgYgHhBQgHgxgCgdIgDgfQgFg8AZgOQAdgNAVBGIACAJQAQBCgNBCIgCARQgIBNgfArQgbAqgqAAQgSAAgVgIg");
	this.shape_9.setTransform(240.8,205.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AAtCXIgQgHQhng2hNhpIgHgLQgegrgRgnQgPgiADgKQAGgTASAPQANALAkAuIAKAMQBPBcBYAxIAQAIQA1ARAXgQQAUgOgBgxQgDgkADgSQgBgOABgIQABgsAXgHQAdgDARA+IACAIQALA8gcAoIgDAMQgPA5ghAdQgXAaggAAQgWAAgagNg");
	this.shape_10.setTransform(241,210);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("AAaCZIgPgJQhfg8hJhsIgHgKQgdgtgQglQgPgjADgJQAGgUASAPQAPALAjAsIALAMQBLBZBVA8IAPAIQAuAUAagEQAVgGAFggQACgXAIgIQABgIADgEQAFgdAWAAQAeAHAMA2IACAIQAFA3gpANIgGAHQgVAmgiAOQgSALgVAAQgbAAghgTg");
	this.shape_11.setTransform(241.3,210.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221F20").s().p("AAGCZIgMgKQhZhEhGhuIgGgKQgcgugPglQgOgiADgJQAGgTASANQAPALAkArIAKAMQBIBVBRBHIAOAKQApAVAcAIQAWADAMgOQAHgMAMADQADgDAEgBQAKgNAWAHQAdARAJAwIAAAHQABAyg4gPIgHADQgbASglgBQgIACgJAAQgiAAgrgeg");
	this.shape_12.setTransform(241.8,212);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F20").s().p("ACdDGIgJgDQgigCgngPQgogGgwgqIgMgMQhShLhBhxIgGgJQgbgwgOgjQgNgiACgJQAGgTASAMQARAKAjArIAKAMQBEBRBPBRIANAMIBBAqQAXANASADQAMABAQANIALAGQAPACAVANQAdAcAFApIAAAFQgDAYgUAAQgSAAghgUg");
	this.shape_13.setTransform(242.2,215.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221F20").s().p("ACODdIgLgHQgogWgogeQgpgXgrguIgLgMQhKhRg+h1IgFgJQgZgxgOgiQgNgiADgJQAFgTATALQASAKAiAqIALANICNCpIALAOQAdAYAgAeQAYAXAYATQARAOAVAYIAOAOQAUASAUAUQAdAmABAiIAAAEQgEAPgOAAQgXAAg1gsg");
	this.shape_14.setTransform(242.7,220.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221F20").s().p("AB/DzIgMgMQgvgqgqgsQgpgngngzIgKgOQhBhXg7h4IgEgIQgZgzgMghQgNgiADgJQAFgSATAKQATAJAiApIALANQA8BJBKBoIALAOIA4BFIA4BEIAwA9IARAXQAZAhATAbQAdAwgDAbIgBAEQgFAJgKAAQgbAAhHhHg");
	this.shape_15.setTransform(243.2,224.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221F20").s().p("ABhD3QhtiAhIh2Qg5hfg3h6Qg1h2AEgRQAMgpBNBeQA9BKBMB+QApBDCFDBQBsCngUAdQgEAGgHAAQgiAAhlh1g");
	this.shape_16.setTransform(243.7,229.9);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(23).to({_off:false},0).wait(8).to({_off:true},1).wait(23).to({_off:false},0).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({_off:false},0).wait(8).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(40).to({_off:false},0).wait(8).to({_off:true},1).wait(15));

	// eyes
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221F20").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQATASAAAZQAAAagTASQgSASgaABQgZgBgSgSg");
	this.shape_17.setTransform(260.9,143.6,0.55,0.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#221F20").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASgBAZQABAagTASQgSASgaAAQgZAAgSgSg");
	this.shape_18.setTransform(311.5,143.5,0.55,0.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#221F20").s().p("AkUAYQgKgKAAgOQAAgNAKgKQAKgKAOAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgOAAgKgKgADlAYQgKgKAAgOQAAgOAKgKQAmgKAKAKQAKAKAAAOQAAAOgKAKQgKAKgOAAQgOAAgKgKg");
	this.shape_19.setTransform(286.2,143.6);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#221F20").s().p("AkUASQgJgHgBgLQAAgKAKgHQAKgIAOAAQAOAAAKAIQALAHAAAKQgCALgJAHQgKAIgOAAQgOAAgKgIgADlASQgJgIgBgKQAAgKAKgIQAmgHAKAHQAKAIAAAKQgBAKgJAIQgKAHgOAAQgOAAgKgHg");
	this.shape_20.setTransform(285.9,143.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#221F20").s().p("AkUAMQgIgEgCgIQAAgGAKgGQAKgEAOAAQAOAAAKAEQAKAGAAAGQgCAIgIAEQgKAFgOABQgOgBgKgFgADlAMQgIgFgDgHQAAgGALgGQAmgEAKAEQAKAGAAAGQgCAHgIAFQgKAFgOAAQgPAAgJgFg");
	this.shape_21.setTransform(285.7,143.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#221F20").s().p("ADlAGQgHgCgEgEQAAgDALgDQAmgCAKACQAKADAAADQgEAEgGACQgKADgOAAQgPAAgJgDgAkUAGQgHgCgDgEQAAgDAKgCQAKgDAOAAQAOAAAKADQALACAAADQgEAEgHACQgKADgOAAQgOAAgKgDg");
	this.shape_22.setTransform(285.5,143.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#221F20").s().p("AD9AAIgYAAIgLAAIALAAIAwAAIAKAAIgKAAIgYAAgAj8AAIgYAAIgKAAIAKAAIAYAAIAYAAIALAAIgLAAIgYAAg");
	this.shape_23.setTransform(285.2,143.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.008,x:310.5,y:143.7}},{t:this.shape_17,p:{scaleY:0.008,x:259.9,y:143.7}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.008,x:310.5,y:143.7}},{t:this.shape_17,p:{scaleY:0.008,x:259.9,y:143.7}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.008,x:310.5,y:143.7}},{t:this.shape_17,p:{scaleY:0.008,x:259.9,y:143.7}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.008,x:310.5,y:143.7}},{t:this.shape_17,p:{scaleY:0.008,x:259.9,y:143.7}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).to({state:[{t:this.shape_18,p:{scaleY:0.55,x:311.5,y:143.5}},{t:this.shape_17,p:{scaleY:0.55,x:260.9,y:143.6}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(12).to({_off:false},0).wait(17).to({_off:true},1).wait(28));

	// FlashAICB
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#221F20").s().p("AhlAuQgEgIAbgTQAcgTAqgSQAqgTAggHQAhgHAEAJQADAGgfALQg6AUgRAGQgOAHg3AdQgVALgHAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_24.setTransform(261,121.8,0.55,0.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#221F20").s().p("ABJAgQg3gYgSgGQgQgFg7gQQgggIACgHQADgIAhAEQAhAFArAPQAsAPAdAQQAcARgDAIQAAACgEAAQgIAAgUgIg");
	this.shape_25.setTransform(310.8,121.8,0.55,0.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#845F41").s().p("AhtEXQgJgHgIgPQgQgeAFglQgIAFAWikQAXitAdhPQAQgpAXgMQAVgKAtAGQAuAGAgAjQAiAlgGArQgoAggqA/QhSB+gICbQgDAtgOALQgJAGgVAAQgNAAgRgCg");
	this.shape_26.setTransform(278.5,60,0.55,0.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ai6A5QhNgqgBg7QABgzBNgDQAwgCCKAIQBJAABygGQBNADAAAzQAAA7hNAqQhOAqhtAAQhtAAhNgqg");
	this.shape_27.setTransform(290.3,162.2,0.55,0.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBDD9A").s().p("ApyfdQk9iojjk0Qjpk6hKl2QhQmTB8mCQA6iyB2niQBvnEBRjqQB9lqCgjOQC/j4EJg8QAggDAcAAQE+AADJDfQCWCoCUGHQAqBwBVDxQBRDgBCCXQC/G7D/EgQDjEBAJE6QAJEbinEqQiaETkRDuQkIDnkyCIQijAtiUAKQgqADgpAAQkoAAkiiZg");
	this.shape_28.setTransform(287.2,191.6,0.55,0.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B2D28E").s().p("AryfbQl0jBkDk1QkVlKgvldQg1mHD+lOQCqjfCdm5QArh2BWkKQBRj6AviAQCbmoCtjKQDdkEFAAAQE+AADIDfQCXCoCTGGQArBxBVDxQBRDgBBCXQC/G7EAEgQEZE/g1GQQgvFkklFeQkTFGmFDSQmKDVlYAAQlZAAl5jFg");
	this.shape_29.setTransform(275.3,193.9,0.55,0.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#221F20").s().p("ABRKZQgbgigJg7QgGgsAChhQAFktgSi5QgRinhykIQgshkgGghQgLgyAngEQAQgBAlA6QAoA/AoBhQBrD+AaEOQAdEdgaC8QgKBPgSAhQgKAVgLAAQgHAAgHgJg");
	this.shape_30.setTransform(341.5,230.2,0.55,0.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#221F20").s().p("Ag/FoQgKgTgGgrQgNhnAPidQAPiUA7iMQAVg1AWgjQAUggAJABQAVACgFAbQgEATgYA3Qg+CRgJBcQgLBlADCmQABA1gDAYQgFAggPATQgEAEgEAAQgFAAgGgKg");
	this.shape_31.setTransform(275.5,202.8,1,1,0,0,0,67.3,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(64));

	// right_leg
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#221F20").s().p("Ah/LTQgtgCgggRQgsgWAIgsQAfihAKnWIADm0QgVhrgMhBQgVh5AhgCIBFElQAlgCAJAbQAFAOABBAQAIHlAdDpQAPB0ANATQF2B2iKA1QgxAThuAHQgxADgwAAQgnAAglgCg");
	this.shape_32.setTransform(267.5,321.2,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(64));

	// left_leg
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#221F20").s().p("AhMGNQgjgBgcgtQAOhHAFiQIAAgKQAHipgBjAQgCgcgRhDQgJg1AQgPIAmChQAtgDgRA8QADDNAJBjIABAFQAKCMAOATQDtBLhsATQgsARhNAAQgcAAghgCg");
	this.shape_33.setTransform(311.1,319);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(64));

	// right_arm
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(339.8,183.3,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,rotation:86.6,x:355.4,y:231.6},8).to({startPosition:0},8).to({regX:0,rotation:-15,x:339.8,y:183.3},8).to({startPosition:0},8).to({rotation:-19.2,x:332.4,y:145.8},8).to({startPosition:0},8).to({rotation:-15,x:339.8,y:183.3},8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(455.8,244.6,191.6,316.6);
// library properties:
lib.properties = {
	id: 'B89CDA3A8B8D4CF3BCA2EB77B43EAF87',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B89CDA3A8B8D4CF3BCA2EB77B43EAF87'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;