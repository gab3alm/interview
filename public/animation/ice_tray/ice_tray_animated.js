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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tanner_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C55C64").s().p("AiJBVQg2ghgNgxQgQg9AmgYQAqgcCMgHQCRgHAsAmQAfAagPA8QgMAxg1AhQg5AkhSABIgBAAQhQAAg5gig");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C55C64").s().p("AgEBoQhMAAg4geQgUgLgPgOQgYgVgKgbQgBgIABgHQgDgoAhgRQAlgVBpgIIAhgCQCLgGAsAfQAbARgDAjQgDALgEAMQgIAWgTAUQgRARgYAOQg5AghMABIgDAAg");
	this.shape_1.setTransform(0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C55C64").s().p("AiFA/QgUgKgPgMQgZgTgLgWQAAgHACgGQACghAhgPQAngRBjgHIAegCQCFgGAtAaQAdAOgDAdQgDAJgFALQgLAUgUAQQgRAQgXAMQg5AchHABIgDAAIgDAAQhGAAg3gag");
	this.shape_2.setTransform(0.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C55C64").s().p("AiCAzQgTgIgQgKQgagQgMgTQABgGAEgEQAGgaAigMQAogOBdgGIAdgCQB9gGAtAVQAhALgDAXIgLASQgMAQgVAOQgRANgXALQg4AYhDABIgEAAIgDAAQhCAAg2gXg");
	this.shape_3.setTransform(0.3,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C55C64").s().p("AgIA7QhBAAg2gTQgTgGgQgJQgagOgOgPQACgEAGgDQALgTAigJQAqgKBWgGIAbgBQB3gGAtAPQAkAIgDASIgNAOQgOAOgWAMQgSAKgWAJQg4AUg/ABIgDAAg");
	this.shape_4.setTransform(0.4,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C55C64").s().p("AgKAsQg8AAg2gPQgTgFgQgHQgbgLgPgMIALgEQAPgMAjgGQArgHBPgFIAbgBQBvgGAuAKQAnAFgDAMIgQAMQgPAKgXAKQgTAIgVAHQg3AQg7ABIgEAAg");
	this.shape_5.setTransform(0.4,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C55C64").s().p("Ah5ATIgjgJQgbgJgRgIIAOgCQATgEAkgDIB2gIIAYgBQBpgGAuAEQAqADgDAGIgRAIQgSAJgYAGQgTAGgUAFQg4ANg2ABIgDAAIgFAAQg3AAgzgLg");
	this.shape_6.setTransform(0.4,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C55C64").s().p("AiZADQgcgFgSgGIARACQAzAEB5gGQDYgKgGADQgZAIgnAHQhOAPhGABIgFAAQhEAAhEgNg");
	this.shape_7.setTransform(0.5,1.4);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C55C64").s().p("Ah4APIgjgIQgcgHgRgIIAPAAQAUgDAkgCIB0gHIAZgBQBmgFAuACQArABgCAGIgTAHQgSAHgYAGQgTAGgUAEQg4ALg0ABIgEAAIgFAAQg1AAgzgKg");
	this.shape_8.setTransform(0.5,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C55C64").s().p("Ah6AXQgSgFgRgGQgbgJgRgKIAOgCQARgIAjgEQAsgFBMgFIAZgBQBsgFAuAGQAoADgCAJIgRAKQgRAJgXAIQgUAHgUAFQg4AOg3ABIgEAAIgFAAQg3AAg0gMg");
	this.shape_9.setTransform(0.4,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C55C64").s().p("Ah8AeQgTgFgRgHQgagLgQgNIAMgEQAOgNAjgGQArgHBQgFIAagCQBwgFAuAKQAnAFgDANIgPAMQgQALgWAKQgTAIgVAHQg4ARg7ABIgDAAIgEAAQg7AAg0gQg");
	this.shape_10.setTransform(0.4,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C55C64").s().p("AgIA4QhAAAg2gSQgTgGgRgJQgagNgOgOQADgEAGgDQALgRAjgIQAqgKBUgGIAcgBQB1gGAtAOQAlAHgDARIgOAOQgOANgWALQgSAKgWAJQg4ATg+ABIgDAAg");
	this.shape_11.setTransform(0.4,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C55C64").s().p("AgIBCQhCABg3gVQgTgIgQgJQgagPgNgSQACgEAFgEQAIgWAigKQApgNBagFIAcgCQB6gGAtASQAiAJgCAVIgNAQQgNAPgVANQgSAMgWAJQg4AXhBAAIgEAAg");
	this.shape_12.setTransform(0.4,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C55C64").s().p("AiDA1QgTgIgQgKQgZgRgMgUQAAgGAEgFQAGgbAhgMQAogPBegGIAdgCQB/gGAtAWQAgAMgDAYQgEAIgGAKQgMARgVAPQgRANgXALQg4AZhEABIgEAAIgDAAQhDAAg2gYg");
	this.shape_13.setTransform(0.3,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C55C64").s().p("AgGBXQhIAAg3gaQgUgJgPgMQgZgTgLgWQAAgHACgGQADgfAhgPQAngRBigHIAegBQCEgHAtAaQAeAOgDAcIgJAUQgLATgUAQQgRAPgXAMQg5AchHABIgDAAg");
	this.shape_14.setTransform(0.3,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C55C64").s().p("AgFBiQhKAAg4gdQgUgKgPgNQgZgVgKgZQgBgHACgHQgBglAhgQQAmgTBngIIAfgCQCIgGAtAdQAcAQgDAgQgDALgFALQgJAWgTASQgRAQgYAOQg4AehLABIgDAAg");
	this.shape_15.setTransform(0.3,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C55C64").s().p("AgDBsQhNAAg4gfQgVgLgPgOQgYgXgJgcIgBgQQgEgpAggTQAmgWBrgIIAhgBQCMgHAtAhQAZASgDAkQgCALgEANQgIAYgSATQgRASgYAPQg5AhhNABIgDAAg");
	this.shape_16.setTransform(0.2,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C55C64").s().p("Ah5ARIgjgJQgbgIgRgIIAOAAQAUgEAkgDIB1gHIAYgCQBogFAuAEQAqABgCAGIgSAJQgSAHgYAGQgTAGgUAFQg4AMg1ABIgEAAIgEAAQg2AAg0gLg");
	this.shape_17.setTransform(0.5,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C55C64").s().p("Ah7AaQgTgFgQgGQgbgKgQgLQAEgCAIgCQAQgKAjgFQArgGBOgFIAagBQBugGAuAIQAoAFgDALIgQAKQgQAKgXAJQgTAIgVAGQg4APg5ABIgEAAIgEAAQg5AAg0gOg");
	this.shape_18.setTransform(0.4,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C55C64").s().p("Ah+AkQgTgGgQgIQgagNgPgOQADgDAHgDQAMgQAigIQArgJBTgFIAbgCQB0gFAuANQAlAHgDAPIgOAOQgPAMgWALQgSAKgWAIQg4ASg9ABIgDAAIgEAAQg9AAg1gRg");
	this.shape_19.setTransform(0.4,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C55C64").s().p("AgGBQQhGAAg3gYQgUgJgQgLQgZgRgMgVQABgFAEgGQAEgcAigNQAogPBegHIAegBQCAgHAtAXQAfAMgCAaIgLASQgLASgVAPQgRAOgXALQg4AahFABIgDAAg");
	this.shape_20.setTransform(0.3,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C55C64").s().p("AgGBdQhJAAg3gcQgUgKgQgMQgYgUgLgXQAAgHACgHQABgiAhgPQAmgTBlgHIAegCQCHgGAsAcQAdAOgDAeQgDAKgFAMQgKAUgUARQgRAQgXANQg5AdhIABIgEAAg");
	this.shape_21.setTransform(0.3,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C55C64").s().p("AgEBqQhMAAg4gfQgVgLgPgOQgYgWgJgbIgBgQQgDgoAggSQAmgVBqgIIAhgCQCLgHAsAhQAbARgDAjQgCALgFANQgIAXgTATQgQASgYAOQg5AhhNABIgDAAg");
	this.shape_22.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(23).to({_off:false},0).wait(32).to({_off:true},1).wait(19).to({_off:false},0).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).wait(7).to({_off:true},1).wait(48).to({_off:false},0).wait(5).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-11.9,42,23.8);


(lib.tanner_l_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2).p("ADigRQgBhQg3g5Qg5g6hNAFQgtACghAkQgJAKg3BQQgVgrgRgLQgVgNglANQgVAIgCAjQgCAkARApQASAqAeAlQgGAEgDAFQgLASAWAfQAXAfAqAZQArAYAlAEQAlAEALgTQAFgJgDgMIABAAQBRgCA3g3QA3g3gBhNg");
	this.shape.setTransform(22.9,-15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgPDQQglgEgrgYQgqgZgXgfQgWgfALgSQADgFAGgEQgeglgSgqQgRgpACgkQACgjAVgIQAlgNAVANQARALAVArQA3hQAJgKQAhgkAtgCQBNgFA5A6QA3A5ABBQQABBNg3A3Qg3A3hRACIgBAAQADAMgFAJQgJAQgaAAIgNgBg");
	this.shape_1.setTransform(22.9,-15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("Al0EEQgXgdAcgVQAUgPBIgZQBqgkApgRQBfgoBIgxQBshJB/iXQAtg0ASgNQAagRATAXQAHAKgbAuQgeAygzA8QiICeigBQQikBRhgAbQgrAMgZAAQgWAAgHgJg");
	this.shape_2.setTransform(-7.2,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tanner_l_arm, new cjs.Rectangle(-45.5,-37.8,92.9,74.4), null);


(lib.cube_9_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99B9B").s().p("AhfAZQgGgLAAgOIAAgTQgBgOAWgJQAbgMA2gCQBlgDAAAoQAAAjgHALQgUAehMAAQhMAAgSggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_9_mouth, new cjs.Rectangle(-10.2,-5.7,20.5,11.5), null);


(lib.cube_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B257").s().p("AjgAhIGbhXIA5AHInnBmg");
	this.shape.setTransform(-114.3,-80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E36").s().p("AqoEkQgNgXASgTIENkfQAggiAsgKIPJjiQAZgGAPAWQAOAVgPAVIjGERQgYAigoAJIwhDyIgKABQgSAAgLgSg");
	this.shape_1.setTransform(-85.3,-84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1B257").s().p("AgODcIAAm3IAdAAIAAG3g");
	this.shape_2.setTransform(-138.9,-34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181526").s().p("AkbhBIH+h1IA5D4QjIA9hBAQQgmAIhrARIhkAPg");
	this.shape_3.setTransform(-85.3,-64.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape_4.setTransform(39,-34.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AhvArQgCgJAdgYQAjgaArgPQArgOAnACQAhACADAJQACAFgjADQgxAFgeAJQgeAKgtAbQgcARgGAAIgCgBg");
	this.shape_5.setTransform(-42.7,-34.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(1.9).p("AiGA1QgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXQAIgPAGgKQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKATgWgBQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADg");
	this.shape_6.setTransform(106.8,102.7,1,1,82.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9ECEE").s().p("AgFDFQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADQgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXIAOgZQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKASgVAAIgBAAg");
	this.shape_7.setTransform(106.8,102.7,1,1,82.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_8.setTransform(-43.4,-5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_9.setTransform(39,-5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_10.setTransform(-25.1,107.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_11.setTransform(-104.7,28.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4E4ED").s().p("AscMcIAA43IY4AAIAAY3g");
	this.shape_12.setTransform(-7.7,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F20").s().p("AB+HVQgLgQgHgDQkKh8gTlTQgIiRApiiQAVhRAfhOIAAEDQgMA2gFAvQgkFZE/DYQALAHgMAPQgNAOgOACIgBAAQgKAAgJgLg");
	this.shape_13.setTransform(79.9,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_9, new cjs.Rectangle(-153.9,-115.1,281.9,240), null);


(lib.cube_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABOAbQgtgbghABQghACgqgDQgpgDAEgTQAFgTAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape.setTransform(64,-63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AhzArQgDgJAegYQAigaAsgPQArgOAmACQAiACAKAVQAJAUgpAEQgqADgmgEQgmgDgtAbQgcARgGAAIgBgBg");
	this.shape_1.setTransform(-17.2,-63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E99B9B").s().p("AikA9QhCgNgCgjQgGhGBHgMQAagFAyABIBbACIBcgCQAygBAbAFQBHAMgHBGQgEAjhFANQhFANheAAQhgAAhBgNg");
	this.shape_2.setTransform(23.4,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_3.setTransform(-18.3,-33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_4.setTransform(64.1,-33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_5.setTransform(0,79.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_6.setTransform(-79.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4E4ED").s().p("AscMcIAA43IY4AAIAAY3g");
	this.shape_7.setTransform(17.4,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_8, new cjs.Rectangle(-96.9,-87,194,174.1), null);


(lib.cube_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B257").s().p("AjgAhIGbhXIA5AHInnBmg");
	this.shape.setTransform(-73.3,-80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E36").s().p("AqoEkQgNgXASgTIENkfQAggiAsgKIPJjiQAZgGAPAWQAOAVgPAVIjGERQgYAigoAJIwhDyIgKABQgSAAgLgSg");
	this.shape_1.setTransform(-44.3,-84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1B257").s().p("AgODcIAAm3IAdAAIAAG3g");
	this.shape_2.setTransform(-97.9,-34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181526").s().p("AkbhBIH+h1IA5D4QjIA9hBAQQgmAIhrARIhkAPg");
	this.shape_3.setTransform(-44.2,-64.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape_4.setTransform(80,-34.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AhvArQgCgJAdgYQAjgaArgPQArgOAnACQAhACADAJQACAFgjADQgxAFgeAJQgeAKgtAbQgcARgGAAIgCgBg");
	this.shape_5.setTransform(-1.7,-34.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E99B9B").s().p("AimAPQhLguAIgTQAFgNDjgDQDigCAJAMQAFAGgSAUQgSAVggAUQhTA4hVAAQhUAAhVg0g");
	this.shape_6.setTransform(39,29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_7.setTransform(-2.3,-5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_8.setTransform(80,-5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_9.setTransform(16,107.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_10.setTransform(-63.7,28.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4E4ED").s().p("AscMcIAA43IY4AAIAAY3g");
	this.shape_11.setTransform(33.3,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_07, new cjs.Rectangle(-112.9,-115.1,225.9,230.2), null);


(lib.cube_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape.setTransform(64.1,-63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AhvArQgCgJAdgYQAjgaArgPQArgOAnACQAhACADAJQACAFgjADQgxAFgeAJQgeAKgtAbQgcARgGAAIgCgBg");
	this.shape_1.setTransform(-17.6,-63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E99B9B").s().p("Ag7AfQgYgUABgWQACgSAfgMQAbgLAaABQAuACAVAVQALALABAKQgEAOgLAOQgXAdglACIgFAAQgkAAgagVg");
	this.shape_2.setTransform(22.5,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_3.setTransform(-18.3,-33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_4.setTransform(64.1,-33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_5.setTransform(0,79.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_6.setTransform(-79.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4E4ED").s().p("AscMcIAA43IY4AAIAAY3g");
	this.shape_7.setTransform(17.4,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_06, new cjs.Rectangle(-96.9,-87,194,174.1), null);


(lib.cube_05_layer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape.setTransform(69.1,-63,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AhvArQgCgJAdgYQAjgaArgPQArgOAnACQAhACADAJQACAFgjADQgxAFgeAJQgeAKgtAbQgcARgGAAIgCgBg");
	this.shape_1.setTransform(-22.6,-62.9,1,1,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E99B9B").s().p("AiwAOQhRgeAYgWQAKgKAUAFQAKADAkAPQBSAhBEAAQBCAABXghQBDgbATAOQAdAWhTAeQhVAghdAAQheAAhSggg");
	this.shape_2.setTransform(23.5,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AAxAsQgTgHgcAAQgbAAgVAHQgUAGAAgcQAAgaATgUQAUgUAbAAQAcAAAUAUQATATAAAbQAAAXgMAAIgGgBg");
	this.shape_3.setTransform(-18.3,-36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AAwAoQgUgLgcAAQgbAAgUALQgTAMAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAATgKAAQgEAAgFgDg");
	this.shape_4.setTransform(64.1,-36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_5.setTransform(0,79.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_6.setTransform(-79.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4E4ED").s().p("AscMcIAA43IY4AAIAAY3g");
	this.shape_7.setTransform(17.4,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_05_layer, new cjs.Rectangle(-96.9,-87,194,174.1), null);


(lib.cube_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape.setTransform(48.4,-67.4,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AhpA5QgDgKAagbQAegfApgUQAogVAmgEQAigDAFAKQACAEgiAIQgwALgbAOQgeAOgpAhQgaAWgFAAIgCAAg");
	this.shape_1.setTransform(-33.3,-67.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AAZAtQgZgDghACQghADAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgIABIgFAAQgKAAgTgDg");
	this.shape_2.setTransform(-34.1,-40);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AgrAvQgXgBAAgbQAAgbATgUQAUgTAbgBQAcABAUATQATAUAAAbQAAAbgQABIgtABIgxgBg");
	this.shape_3.setTransform(48.3,-40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_4.setTransform(-15.8,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_5.setTransform(-95.4,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4E4ED").s().p("AscMcIAA43IY4AAIAAY3g");
	this.shape_6.setTransform(1.6,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.7,-91.4,194,174.1);


(lib.cube_4_r_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.9).p("AisgpQA7hVA7gMQgbgcAIgSQAJgUArACQAeACAiALQAQAFAQAHQAPAHAOAHQAhASAWAVQAfAfgIATQgGAOgYADQAcAiAHA9QAGAzgMAlQgNAmgXACQgVACgTgZQgSgagJgpQgXAggfBBQgcAsgugUQhFgdgrhNQguhQAkg0g");
	this.shape.setTransform(-17.1,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgyDFQhFgdgrhNQguhQAkg0QA7hVA7gMQgbgcAIgSQAJgUArACQAeACAiALQAQAFAQAHQAPAHAOAHQAhASAWAVQAfAfgIATQgGAOgYADQAcAiAHA9QAGAzgMAlQgNAmgXACQgVACgTgZQgSgagJgpQgXAggfBBQgUAegbAAQgNAAgOgGg");
	this.shape_1.setTransform(-17.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AjUDvQgQgHgPgFQBKh4CNiUQBDhHBLhGIA+g3QALgNARgBQARgBANALQALAKgBAJQgCAHgMAOQgRAXhbBNQheBPhABSIhLBfQgxA/gWAjQgOgIgQgGg");
	this.shape_2.setTransform(11.6,-18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_4_r_arm, new cjs.Rectangle(-37,-43.6,73.1,88.2), null);


(lib.cube_4_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99B9B").s().p("Ag9ATIgcgWQgOgMAOgGQASgIBMACQBPABAJALQAJALgKAIQgIAHgWAIQgWAIgrACIgLAAQgmAAgJgKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E99B9B").s().p("AhBAXIgggaQgRgQANgGQASgIBYACQBaABAJALQAJALgQAMQgNAMgWAIQgWAIgtABIgHAAQgrAAgKgKg");
	this.shape_1.setTransform(0.2,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E99B9B").s().p("AhEAaIgkgdQgVgTANgGQASgIBjAAQBmABAJALQAIALgVASQgTAPgWAJQgWAIguAAIgFAAQgvAAgKgLg");
	this.shape_2.setTransform(0.4,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E99B9B").s().p("AgIApQg1gBgLgLIgoghQgZgXAOgGQASgHBuAAQBxAAAJAMQAIALgbAWQgYAUgWAJQgUAHgsAAIgGAAg");
	this.shape_3.setTransform(0.6,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E99B9B").s().p("AgKAtQg2gCgLgLIgsgkQgdgbAOgGQASgIB5ABQB9AAAIALQAJALggAbQgeAZgXAIQgTAHgqAAIgLAAg");
	this.shape_4.setTransform(0.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E99B9B").s().p("AgMAxQg4gCgLgLIgwgoQgggeANgGQATgICEAAQCIAAAIALQAJALgmAfQgjAegXAIQgRAGgmAAIgTAAg");
	this.shape_5.setTransform(0.9,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E99B9B").s().p("AgOA1Qg6gDgLgLIgzgsQglghAOgGQASgICQgBQCTAAAIALQAJALgsAkQgoAigXAJQgPAGgiAAIgbgBg");
	this.shape_6.setTransform(1.1,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E99B9B").s().p("AgPA5Qg9gDgLgMIg3gvQgoglAOgGQASgICbgBQCeAAAJALQAIALgxAoQguAngXAJQgOAFgfAAIgggBg");
	this.shape_7.setTransform(1.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E99B9B").s().p("AgRA9Qg+gEgLgMQgkgegXgUQgsgpANgGQASgICngBQCpgBAJALQAIALg2AtQg0AsgXAIQgOAFgfAAIgigBg");
	this.shape_8.setTransform(1.4,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99B9B").s().p("AgTBBQhAgFgLgMQgmgggZgWQgwgtAOgGQASgICxgBQC1gBAJALQAIALg8AyQg5AwgXAJQgNAFgdAAIgngCg");
	this.shape_9.setTransform(1.6,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E99B9B").s().p("AgVBFQhCgGgLgLQgngigbgYQg0gwAOgGQASgIC8gCQDAgBAJALQAJALhCA2Qg/A1gXAJQgMAEgaAAQgTAAgagCg");
	this.shape_10.setTransform(1.8,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E99B9B").s().p("AgXBJQhEgGgLgMQgpgkgdgaQg3gzANgGQASgIDIgCQDLgCAJALQAJALhIA7QhEA6gXAIQgLAFgZAAQgUAAgdgDg");
	this.shape_11.setTransform(2,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E99B9B").s().p("AgYBMQhGgGgLgMQgrgmgfgbQg7g4ANgGQATgIDTgCQDWgBAJALQAIALhMA/QhKA+gXAJQgLAEgXAAQgWAAgfgEg");
	this.shape_12.setTransform(2.1,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E99B9B").s().p("AgaBRQhHgIgMgMQgtgnghgeQg/g7AOgGQASgIDegCQDigCAJALQAIALhSBEQhPBDgXAJQgKADgXAAQgWAAgigDg");
	this.shape_13.setTransform(2.3,4.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E99B9B").s().p("AgcBVQhJgJgLgMQgvgpgjgfQhDg+AOgGQASgIDqgDQDtgCAIALQAJALhYBJQhVBHgXAIQgKAEgWAAQgXAAgkgEg");
	this.shape_14.setTransform(2.4,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E99B9B").s().p("AgeBYQhLgJgLgMQgxgrglghQhGhCANgGQATgID0gDQD5gCAIALQAJALheBNQhaBMgXAJQgJADgUAAQgYAAgogFg");
	this.shape_15.setTransform(2.6,5.4);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E99B9B").s().p("AgbBSQhIgIgMgMQgugogigeQhAg9ANgGQATgIDjgCQDogCAIALQAJALhVBGQhTBFgWAJQgKADgWAAQgXAAgjgEg");
	this.shape_16.setTransform(2.4,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E99B9B").s().p("AgWBHQhDgGgLgMQgogjgcgZQg2gyAOgGQASgIDCgBQDGgCAJALQAIALhEA5QhCA3gXAJQgLAEgbAAQgTAAgbgCg");
	this.shape_17.setTransform(1.9,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E99B9B").s().p("AgQA7Qg9gEgLgLQgjgegWgTQgqgnANgGQASgIChgBQCkgBAIALQAJALg0ArQgxApgXAJQgOAFgeAAIgigBg");
	this.shape_18.setTransform(1.3,2.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E99B9B").s().p("AgLAvQg4gCgLgLIgtgmQgfgcAOgGQASgIB/AAQCCAAAIALQAJALgjAdQggAbgXAJQgRAGglAAIgTAAg");
	this.shape_19.setTransform(0.8,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E99B9B").s().p("AhCAYIgigbQgUgSAOgGQASgIBdABQBgABAJALQAJALgTAPQgPAOgXAIQgWAIgtABIgFAAQguAAgKgLg");
	this.shape_20.setTransform(0.3,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E99B9B").s().p("AgZBPQhGgIgMgLQgsgngggcQg9g5AOgGQASgIDZgDQDcgBAIALQAJALhQBBQhMBBgXAIQgLAEgXAAQgWAAgggDg");
	this.shape_21.setTransform(2.2,4.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E99B9B").s().p("AgHAnQg1AAgKgMIgmgfQgXgVANgGQASgIBpABQBrABAJALQAJALgYAUQgWASgWAIQgUAIgsAAIgFAAg");
	this.shape_22.setTransform(0.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(13).to({_off:true},1).wait(39).to({_off:false},0).wait(18).to({_off:true},1).wait(27).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(28).to({_off:false},0).wait(15).to({_off:true},1).wait(37).to({_off:false},0).wait(12).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-2.8,19.5,5.7);


(lib.cube_4_l_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.9).p("AiGA1QgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXQAIgPAGgKQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKATgWgBQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgFDFQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADQgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXIAOgZQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKASgVAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_4_l_hand, new cjs.Rectangle(-26,-24.8,46.2,51.5), null);


(lib.cube_3_r_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.9).p("AisBiQgShlAhgyQgngBgHgSQgIgUAggeQAXgUAhgRQAGgDAHgDQAJgEAIgDQAQgHAPgEQAFgCAFgBQAegIAagBQArAAAIATQAFAPgOASQAsAFAwAnQApAfARAkQASAigPASQgNAQgggEQgfgFgkgXQAIAmAXBEQALA0guASQhGAchUgXQhZgZgMg+g");
	this.shape.setTransform(-1.9,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AhHC5QhZgZgMg+QgShlAhgyQgngBgHgSQgIgUAggeQAXgUAhgRIANgGIARgHQAQgHAPgEIAKgDQAegIAagBQArAAAIATQAFAPgOASQAsAFAwAnQApAfARAkQASAigPASQgNAQgggEQgfgFgkgXQAIAmAXBEQALA0guASQgmAQgrAAQgiAAgngLg");
	this.shape_1.setTransform(-1.9,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AgmjGQBSghBmgBQBTgBAKAMQAQASgLAIQgJAHghAFQiCASgkAKQjrBIAREoIgKACQgQAFgPAGIgRAHQgxlMD7hjg");
	this.shape_2.setTransform(11.1,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_3_r_arm, new cjs.Rectangle(-23.4,-43.7,59.5,83.8), null);


(lib.cube_3_l_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.9).p("AiGA1QgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXQAIgPAGgKQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKATgWgBQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADg");
	this.shape.setTransform(48.4,-9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgFDFQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADQgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXIAOgZQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKASgVAAIgBAAg");
	this.shape_1.setTransform(48.4,-9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AAoCTQiRgLibg9QiUg8iAhdIgWgOQgLgIAAgLQAAgPALgLQAKgMAMAFIDZBsQCXBLBwAaQFRBQD/khQAJgKANAOQAMAOAAAPQAAAKgNAIQgRAJgEAGQiPDjknAAQgdAAgdgCg");
	this.shape_2.setTransform(-10.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_3_l_arm, new cjs.Rectangle(-67.4,-34,135.9,63.1), null);


(lib.cube_3_hat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B257").s().p("AjgAhIGbhXIA5AHInnBmg");
	this.shape.setTransform(-29,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E36").s().p("AqoEkQgNgXASgTIENkfQAggiAsgKIPJjiQAZgGAPAWQAOAVgPAVIjGERQgYAigoAJIwhDyIgKABQgSAAgLgSg");
	this.shape_1.setTransform(0,-20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1B257").s().p("AgODcIAAm3IAdAAIAAG3g");
	this.shape_2.setTransform(-53.6,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181526").s().p("AkbhBIH+h1IA5D4QjIA9hBAQQgmAIhrARIhkAPg");
	this.shape_3.setTransform(0.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_3_hat, new cjs.Rectangle(-68.6,-51.4,137.2,102.9), null);


(lib.cube_3_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AguAwQgUgMAAgcQAAgaATgUQAUgUAbAAQAcAAAUAUQATATAAAbQAAAcgSALQgTAKgcABIgFABQgYAAgTgLg");
	this.shape.setTransform(-41.2,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AguAwQgUgNAAgcQAAgbATgTQAUgUAbAAQAcAAAUAUQATAUAAAaQAAAcgSAMQgSALgcACIgFAAQgZAAgTgMg");
	this.shape_1.setTransform(41.2,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AFtAwQgUgNAAgcQAAgbATgTQAUgUAcAAQAcAAAUAUQATAUAAAaQAAAcgSAMQgSALgcACIgGAAQgZAAgTgMgAnJAvQgVgMAAgcQAAgaATgUQAVgUAbAAQAcAAAUAUQATATAAAbQAAAcgSALQgTAKgcABIgGAAQgYAAgSgKg");
	this.shape_2.setTransform(0,-0.7);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AFxAnQgagNgEgVQAEgUATgPQASgNAWgBQAfAAATAOQAQANAFARQgDAPgFAHQgFAIgJAFQgRAIgXACIgJAAQgTAAgOgGgAnDAjQgSgJgDgVQADgUASgPQARgOAYAAQAYAAASAOQAOAMAEAQIAAAHQgDAVgRAIIgDACQgPAGgVABIgFAAQgVAAgQgIg");
	this.shape_3.setTransform(0.6,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AFtAbQgYgJgIgOQAIgNATgKQARgKAVgBQAbABASAKQAQAIAIALQgHALgFAEQgGAGgIADQgSAFgUABIgIABQgRAAgNgEgAm9AXQgQgGgFgOQAGgMAPgKQAQgKATAAQAUAAAQAJQAMAIAGALIgCAEQgFAPgOAFIgDABQgOAEgRABIgCAAQgSAAgOgGg");
	this.shape_4.setTransform(1.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AFqAOQgXgEgMgIQANgGASgFQAQgFATgBQAYAAASAGQAPAEALAFIgQAIIgPAEQgRADgRAAIgMABQgMAAgKgCgAm3AMQgNgDgIgHQAJgGANgFQAOgFAPAAQAQAAANAEQALAEAIAGIgEABQgIAIgMADIgCAAQgLACgNABQgPAAgNgDg");
	this.shape_5.setTransform(1.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AgqAAIBVAAIgbABg");
	this.shape_6.setTransform(-38.8,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AgcABIgmAAIBCgBIBDABIgVAAQgagBgTABIgUAAIgJAAg");
	this.shape_7.setTransform(41.2,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AgDAAIgcAAIA/AAIgGAAIgVAAIgIAAg");
	this.shape_8.setTransform(38.6,0.2);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).wait(29).to({_off:true},1).wait(14).to({_off:false},0).wait(23).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(36).to({_off:false},0).wait(3).to({_off:true},1).wait(34).to({_off:false},0).wait(3).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-6.7,95.8,12);


(lib.cube_3_brrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape.setTransform(40.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AhvArQgCgJAdgYQAjgaArgPQArgOAnACQAhACADAJQACAFgjADQgxAFgeAJQgeAKgtAbQgcARgGAAIgCgBg");
	this.shape_1.setTransform(-40.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_3_brrow, new cjs.Rectangle(-52,-4.4,104.1,8.9), null);


(lib.cube_2_r_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.9).p("AisgpQA7hVA7gMQgbgcAIgSQAJgUArACQArACA1AXQA1AXAfAeQAfAfgIATQgGAOgYADQAcAiAHA9QAGAzgMAlQgNAmgXACQgVACgTgZQgSgagJgpQgXAggfBBQgcAsgugUQhFgdgrhNQguhQAkg0g");
	this.shape.setTransform(23.3,17.1,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgyDFQhFgdgrhNQguhQAkg0QA7hVA7gMQgbgcAIgSQAJgUArACQArACA1AXQA1AXAfAeQAfAfgIATQgGAOgYADQAcAiAHA9QAGAzgMAlQgNAmgXACQgVACgTgZQgSgagJgpQgXAggfBBQgUAegbAAQgNAAgOgGg");
	this.shape_1.setTransform(23.3,17.1,1,1,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AkZE/QAFgqAMgiQA7ifDXjjQBDhHBMhGIA9g3QALgNASgBQAQgBANALQAMAKgCAJQgBAHgNAOQgRAXhbBNQhdBPhBBTIhKBeQg8BNgVAjQhbCpgMAKQgKAKgHAAQgLAAADgjg");
	this.shape_2.setTransform(-8.2,-7.8,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_2_r_arm, new cjs.Rectangle(-43.6,-36,88.2,73.1), null);


(lib.cube_2_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99B9B").s().p("AitAVQhLgNAQgTQASgUDXgBQDagBAOAWQAOAUhLANQhEAMhoAAQhnAAhGgNg");
	this.shape.setTransform(0,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E99B9B").s().p("AgCAqQhQgBg+gQIgegHQgWgGgOgGQgegMAJgMIABgBQARgTDBgDIAbAAQCDAAA1AJQAVAEAJAHQAKAEABAFQAIARgsANIgZAHQg+AQhYABIgXAAg");
	this.shape_1.setTransform(-0.2,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E99B9B").s().p("AgDAyQhQgCg/gXIgdgKQgVgIgOgHQgbgPAJgMIAAgBQARgTDEgDIAcAAQCLAAAvALQAUAFAFAKQAHAFAAAGQAFARgpAOIgZAJQhAAWhWABIgXAAg");
	this.shape_2.setTransform(-0.4,-5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E99B9B").s().p("AgFA7QhPgEhBgfIgbgMQgVgKgNgJQgagRAJgMIABgBQARgTDHgCIAcAAQCUAAApAMQARAGACAOQAFAGgBAGQABARgmAQIgYAKQhCAdhVABIgXAAg");
	this.shape_3.setTransform(-0.5,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E99B9B").s().p("AgHBDQhOgFhCgnIgbgOQgUgLgNgLQgXgUAIgMIABAAQARgUDLgCIAcAAQCcABAjANQAQAIgDAQQADAHgCAHQgCASgjAQQgLAHgNAFQhEAkhTABIgXgBg");
	this.shape_4.setTransform(-0.6,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E99B9B").s().p("AgLBLQhNgGhEgvQgOgIgMgIQgTgNgMgNQgWgWAJgLIAAgBQARgUDPgBIAdAAQCjAAAeAQQAOAIgHAUQABAHgDAIQgGATggARQgLAHgMAGQhGArhRAAIgYgBg");
	this.shape_5.setTransform(-0.6,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E99B9B").s().p("AgQBUQhMgIhFg2IgagTQgRgOgMgPQgUgZAJgLIAAAAQARgUDSgCIAdAAQCrABAZARQAMAJgLAYQgBAIgFAIQgJATgdATIgWAPQhIAwhQABIgYgBg");
	this.shape_6.setTransform(-0.4,-1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E99B9B").s().p("AgVBcQhLgJhHg+QgOgKgLgLQgRgQgLgRQgSgbAJgLQARgUDUgBIAfAAQCzABATASQAKALgOAaQgEAJgGAJQgMAUgaAUIgWAQQhKA3hOAAIgYgBg");
	this.shape_7.setTransform(-0.2,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E99B9B").s().p("AiuAVQghgegRgeQgQgeAIgKQASgVDXgBQDaAAAOAWQAIALgSAeQgSAegiAeQhXBQhWAAQhXAAhVhRg");
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99B9B").s().p("AgXBfQhLgJhIhBIgYgVQgQgSgLgRQgSgcAJgLQARgUDVgBIAfAAQC2ABASATQAIALgPAbQgEAKgHAJQgOATgZAVIgVARQhLA5hNAAIgYgBg");
	this.shape_9.setTransform(-0.1,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E99B9B").s().p("AgTBZQhMgIhGg7IgZgVQgRgQgMgPQgTgbAJgLQASgUDTgBIAeAAQCxAAAVATQAKAKgNAZQgDAJgFAJQgMATgbATIgWAQQhJA1hPAAIgXgBg");
	this.shape_10.setTransform(-0.3,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E99B9B").s().p("AgMBOQhNgGhFgxIgagSQgSgNgMgOQgVgXAIgLIABgBQARgTDPgCIAdAAQCmAAAdARQANAIgIAVQAAAHgEAJQgHASgfATIgWANQhHAthRAAIgXgBg");
	this.shape_11.setTransform(-0.5,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E99B9B").s().p("AgJBIQhOgFhDgsIgbgQQgTgMgMgMQgWgWAIgLIABgBQARgUDNgBIAdAAQCgAAAgAPQAPAIgFATQABAHgDAIQgEASgiARQgKAHgNAGQhFAohSAAIgXgBg");
	this.shape_12.setTransform(-0.6,-2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E99B9B").s().p("AgFA9QhPgEhBgiQgPgFgNgHQgUgKgNgKQgZgSAJgMIAAgBQARgTDJgCIAcAAQCWAAAoANQAQAGAAAPQAFAGgCAHQAAARglAQIgXALQhDAfhUABIgXgBg");
	this.shape_13.setTransform(-0.6,-3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E99B9B").s().p("AgEA4QhPgEhBgcQgPgFgNgGQgVgJgNgIQgagRAJgMIAAgBQARgTDHgCIAcAAQCQAAArALQASAGADANQAGAFgBAGQADASgoAOQgKAGgOAEQhBAbhVABIgXAAg");
	this.shape_14.setTransform(-0.5,-4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E99B9B").s().p("AgCAtQhRgCg+gTIgdgHQgXgGgNgIQgdgMAJgNIABgBQAQgTDCgCIAcAAQCGAAAyAJQAVAFAIAHQAJAFABAFQAHASgsANIgYAHQhAAShWACIgXAAg");
	this.shape_15.setTransform(-0.2,-5.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E99B9B").s().p("AgBAnQhRgBg9gNIgegGQgXgFgOgGQgegLAJgNIABgBQAQgTDAgCIAbAAQCBgBA2AIQAWAEALAGQAKAEACAFQAJARgtAMIgaAGQg9APhYABIgXAAg");
	this.shape_16.setTransform(-0.1,-6.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E99B9B").s().p("AgBAmQhRAAg9gNIgegFQgXgFgPgGQgegLAJgMIABgBQARgTC/gDIAbAAQCAAAA3AIQAWADALAGQAKAEADAFQAJAQguAMQgKAEgPADQg9ANhYABIgXAAg");
	this.shape_17.setTransform(-0.1,-6.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E99B9B").s().p("AgBArQhRgCg+gQIgegHQgWgGgOgHQgdgLAJgNIABgBQAQgTDBgCIAcAAQCDgBA1AJQAVAEAJAIQAJAEACAFQAHARgsANIgZAHQg+ARhYABIgWAAg");
	this.shape_18.setTransform(-0.2,-5.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E99B9B").s().p("AgDAvQhQgCg/gVIgdgIQgWgHgNgIQgcgNAIgMIABgBQARgTDDgCIAbAAQCIAAAxAJQAVAFAHAJQAIAFABAFQAGARgrAOIgZAIQg/AUhXABIgXAAg");
	this.shape_19.setTransform(-0.3,-5.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E99B9B").s().p("AgDAzQhQgChAgZIgcgKQgWgIgNgHQgbgPAJgNIAAAAQARgUDFgCIAcAAQCMAAAuALQATAFAFALQAHAFAAAGQAEARgpAOQgLAFgNAEQhBAYhVABIgXgBg");
	this.shape_20.setTransform(-0.4,-5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E99B9B").s().p("AgFA8QhPgEhBggIgcgNQgUgKgNgJQgZgSAIgMIABAAQARgUDIgCIAdAAQCUAAApANQARAGAAAOQAFAGgBAHQAAASglAPIgZAKQhCAfhUABIgXgBg");
	this.shape_21.setTransform(-0.6,-4.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E99B9B").s().p("AgGBBQhOgFhCglQgPgGgNgHQgUgKgMgLQgZgUAJgLIABgBQARgTDKgCIAcAAQCZAAAmANQAQAHgCAQQAEAGgCAHQgCASgkAQQgKAGgNAGQhEAihTAAIgXAAg");
	this.shape_22.setTransform(-0.6,-3.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E99B9B").s().p("AgHBFQhOgGhDgoIgbgPQgTgLgNgMQgXgUAJgMIAAgBQARgTDMgCIAdAAQCdAAAiAOQAPAIgDARQACAIgCAHQgDASgjARIgXAMQhFAlhSABIgXgBg");
	this.shape_23.setTransform(-0.7,-3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E99B9B").s().p("AgKBKQhNgHhEgtIgagQQgTgMgMgNQgWgWAIgKIABgBQARgUDOgCIAcAAQCiABAfAPQAOAIgFATQABAIgDAIQgFARghASQgLAHgMAGQhGAphRABIgYgBg");
	this.shape_24.setTransform(-0.6,-2.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E99B9B").s().p("AgPBTQhMgIhFg1IgagSQgSgOgLgPQgVgZAJgKIAAgBQARgUDSgCIAdAAQCqABAaARQALAJgJAXQgBAIgFAJQgJASgdATIgWAOQhIAwhQABIgYgBg");
	this.shape_25.setTransform(-0.5,-1.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E99B9B").s().p("AgSBXQhMgIhGg5QgOgKgLgKQgRgQgMgPQgTgaAJgLQARgTDTgCIAeAAQCuAAAXATQAKAKgMAYQgCAIgFAJQgLATgbATIgWAQQhJAzhPAAIgYgBg");
	this.shape_26.setTransform(-0.3,-1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E99B9B").s().p("AgVBbQhLgIhHg+QgNgKgLgLQgRgQgMgQQgSgcAJgKQARgVDUgBIAfAAQCzABATATQAKAKgOAaQgEAJgGAJQgMAUgaATQgLAJgLAIQhKA2hOABQgLAAgNgCg");
	this.shape_27.setTransform(-0.2,-0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E99B9B").s().p("AgXBgQhLgKhIhBIgYgWQgRgSgKgRQgSgcAJgLQARgUDWgBIAfAAQC3ABAQATQAJALgQAcQgEAJgHAKQgOATgZAVIgVARQhLA6hOAAQgLAAgMgBg");
	this.shape_28.setTransform(-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:true},1).wait(39).to({_off:false},0).wait(9).to({_off:true},1).wait(47).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(10).to({_off:false},0).wait(20).to({_off:true},1).wait(35).to({_off:false},0).wait(28).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-10.1,47.1,6.7);


(lib.cube_2_l_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.9).p("AiGA1QgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXQAIgPAGgKQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKATgWgBQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADg");
	this.shape.setTransform(-20.9,41.8,1,0.983,0,-66.6,113.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgFDFQgbAAgwgaQgzgbgZgfQgZgeAKgSQAIgPAdADQgPgOgNgTQgXgggEggQgEggARgMQAOgJAWAJQAVAIAVAXIAOgZQA0hSAZgTQAogeA3AjQBCAqAaBDQAbBIgoBAQgZAoglAYQgjAWgmAEQABAKgGAMQgKASgVAAIgBAAg");
	this.shape_1.setTransform(-20.9,41.8,1,0.983,0,-66.6,113.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AAoCTQiRgLibg9QiUg8iAhdIgWgOQgLgIAAgLQAAgPALgLQAKgMAMAFIDZBsQCXBLBwAaQFRBQD/khQAJgKANAOQAMAOAAAPQAAAKgNAIQgRAJgEAGQiPDjknAAQgdAAgdgCg");
	this.shape_2.setTransform(23.5,-3,1,0.983,0,-66.6,113.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_2_l_arm, new cjs.Rectangle(-42.8,-59.9,83.5,122.9), null);


(lib.cube_2_brrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape.setTransform(40.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AhvArQgCgJAdgYQAjgaArgPQArgOAnACQAhACADAJQACAFgjADQgxAFgeAJQgeAKgtAbQgcARgGAAIgCgBg");
	this.shape_1.setTransform(-40.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_2_brrow, new cjs.Rectangle(-52,-4.4,104.1,8.9), null);


(lib.cube_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape.setTransform(-18.3,-33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_1.setTransform(64.1,-33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_2.setTransform(0,79.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_3.setTransform(-79.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4E4ED").s().p("AscMcIAA43IY4AAIAAY3g");
	this.shape_4.setTransform(17.4,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_2, new cjs.Rectangle(-96.9,-87,194,174.1), null);


(lib.cube_1_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99B9B").s().p("AilAOQgqgLgZgKQAZgHAqgHQBTgOBQAAQBQAABWAOQArAHAaAHQgaAKgrALQhWAWhQAAQhQAAhTgWg");
	this.shape.setTransform(0,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E99B9B").s().p("AgHAuQhMgBhHgTIgNgDQgsgNgVgOIAAgBQAUgPAngJQARgFATgDQAfgFAkgBQAegCAkAAIAPAAQAlABAsADQAlACAhAFIAEACQAsAHAXAOQgJAGgMAHQgQAJgYAIQgRAHgTAEQhDAQhFAAIgHAAg");
	this.shape_1.setTransform(0,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E99B9B").s().p("AgFA4QhRgBhGgVIgNgEQgugPgRgSIAAgBQAOgXAlgMQAQgGAUgEQAfgEAngBQAdgBAmAAIAQAAIBUACQApACAfAFIAEABQAtAIAUAUIgQASQgMANgZAKQgRAIgUAFQhCAShKABIgIAAg");
	this.shape_2.setTransform(0,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E99B9B").s().p("AgCBCQhXgBhFgWIgNgEQgwgSgNgWIAAgBQAIgeAjgQQAQgIAVgDQAdgFArAAQAbgBArABIAQAAIBWABQAsAAAdAFIAFABQAuAJARAaQgDALgHAMQgJAQgZANQgRAIgWAHQhCAUhOABIgIAAg");
	this.shape_3.setTransform(0,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E99B9B").s().p("AAABMQhbAAhFgYIgNgFQgygUgJgaIAAgBQADgnAggSQAPgJAXgEQAcgFAtAAIBIABIARAAIBZgBQAvABAdAFIAEAAQAwAKANAhQgBAMgEAPQgGATgZAQQgRAJgYAIQhAAWhUABIgIAAg");
	this.shape_4.setTransform(0,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E99B9B").s().p("AijA9QhDgZgCgjQgGhFBHgNQAagFAyABIBbACIBcgCQAygBAbAFQBHANgHBFQgEAkhCAYQhEAZhfAAQhfAAhEgZg");
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E99B9B").s().p("AAABPQhcAAhEgYIgOgFQgygVgHgcIAAgBQAAgoAfgTQAQgKAXgEQAbgFAvAAIBJACIARAAIBagBQAwgBAbAFIAEABQAxAKALAiQACAOgEAPQgFAUgaAQQgQAKgYAIQhBAXhVABIgJAAg");
	this.shape_6.setTransform(-0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E99B9B").s().p("AgBBIQhZgBhFgXIgNgFQgxgSgLgZIAAgBQAFgjAhgRQAQgJAWgEQAdgEAsAAIBGAAIARAAIBYAAQAuABAdAFIAEABQAvAJAPAeQgBALgGAOQgHASgaAOQgRAJgWAIQhBAUhSACIgIAAg");
	this.shape_7.setTransform(0,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E99B9B").s().p("AgDBAQhVAAhGgWIgNgFQgvgRgOgVIAAgBQAKgeAigPQAQgHAVgEQAdgFAqAAIBGAAIARAAIBVABQArABAeAFIAFABQAuAJARAZQgDAKgIAMQgKAPgZANQgQAIgWAHQhBAThPABIgIAAg");
	this.shape_8.setTransform(0,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99B9B").s().p("AgFA5QhRAAhGgVIgNgEQgugQgRgSIAAgBQANgYAkgNQARgHAUgDQAegFAoAAQAdgCAnABIAQAAIBUACQApACAfAFIAEABQAtAIAUAVQgGAJgJAJQgMANgZALQgRAIgUAGQhCAShLAAIgIAAg");
	this.shape_9.setTransform(0,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E99B9B").s().p("AgGAyQhOAAhHgUIgNgEQgsgOgUgQIAAAAQARgTAmgLQARgFAUgDQAegFAmgBQAegBAkAAIAQAAQAlABAtACQAnACAfAFIAEABQAtAIAWAQQgIAIgLAIQgOAKgZAKQgRAGgTAFQhDARhHAAIgHAAg");
	this.shape_10.setTransform(0,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E99B9B").s().p("AgIArQhKgBhIgTIgMgDQgrgNgXgMIAAgBQAWgMAngJQARgFASgCQAhgFAjgBQAegDAiABIAQAAQAlABArADQAkADAhAFIAEABQAsAHAYAMIgXAMQgQAIgZAIIgjAKQhDAPhDAAIgIAAg");
	this.shape_11.setTransform(0,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E99B9B").s().p("AgHAxQhMgBhHgUIgNgEQgtgNgUgPIAAgBQATgRAmgKQARgFATgDQAfgFAlgBQAegCAkABIAPAAQAlAAAtADQAmACAgAFIAEABQAtAIAWAPIgUAPQgOAKgZAJQgRAGgTAFQhDAQhGABIgIAAg");
	this.shape_12.setTransform(0,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E99B9B").s().p("AgEA9QhTgBhGgVIgNgEQgvgRgPgUIAAgBQALgaAkgOQAQgHAVgEQAdgFApAAQAcgBApABIAQAAIBVABQAqABAfAFIAEABQAuAJASAXQgFAKgIAKQgLAOgZAMQgRAIgVAGQhBAThNABIgIAAg");
	this.shape_13.setTransform(0,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E99B9B").s().p("AgBBJQhZAAhGgXIgMgFQgygUgKgZIAAgBQAEgkAggSQAQgJAXgEQAcgFAtABIBHAAIARAAIBYAAQAvAAAcAFIAEABQAwAKAOAfQgBAMgFAOQgHASgZAPQgRAJgXAIQhBAVhSABIgJAAg");
	this.shape_14.setTransform(0,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E99B9B").s().p("AAABUQheAAhEgZIgNgFQg0gWgFgdIAAgCQgCgsAegUQAQgLAXgEQAbgFAxABIBJACIARAAIBbgCQAygBAbAFIAEABQAwAKALAlQADAOgDARQgEAVgaASQgQAKgZAJQhAAXhXACIgKAAg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E99B9B").s().p("AAABRQhdAAhEgYIgOgGQgygVgHgcIAAgCQAAgpAegUQAQgKAXgEQAbgFAwABIBIABIASAAIBagBQAxgBAbAFIAEABQAxAKALAkQACANgEAQQgEAVgaAQQgQALgYAIQhBAXhWABIgJAAg");
	this.shape_16.setTransform(0,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E99B9B").s().p("AAABOQhcAAhEgYIgOgFQgygUgHgcIAAgBQABgoAfgSQAQgKAXgEQAbgFAvAAIBIACIARAAIBagBQAwgBAbAFIAEABQAwAKAMAiQACANgFAPQgFAUgaAQQgQAKgYAIQhAAWhVABIgJAAg");
	this.shape_17.setTransform(-0.1,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E99B9B").s().p("AAABLQhbAAhFgYIgNgFQgygTgJgbIAAAAQADgmAggSQAQgKAWgEQAcgFAuABQAagBAtACIARAAIBZgBQAvAAAdAFIAEABQAvAJAOAhQgBAMgEAPQgGASgaAQQgQAKgYAHQhAAWhUABIgIAAg");
	this.shape_18.setTransform(0,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E99B9B").s().p("AgBBIQhaAAhEgWIgNgGQgygSgKgaIAAgBQAEgkAhgRQAQgJAWgEQAcgEAugBIBGABIARAAIBYAAQAvABAcAFIAEAAQAwAKAOAeQgBAMgGAOQgGASgaAPQgQAJgYAIQhBAUhSABIgIAAg");
	this.shape_19.setTransform(0,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E99B9B").s().p("AgCBGQhYgBhFgWIgNgFQgwgTgMgXIAAgBQAGgiAhgRQAQgIAWgEQAcgFAtAAIBGABIARAAIBXAAQAuAAAcAFIAFABQAuAJAQAdQgCAMgGANQgHARgbAOQgQAJgWAHQhBAVhRABIgJAAg");
	this.shape_20.setTransform(0,0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E99B9B").s().p("AgCBDQhXAAhFgXIgNgEQgxgSgMgWIAAgCQAIggAigQQAQgIAVgDQAdgFArAAIBGAAIARAAIBWABQAsAAAeAFIAEABQAvAJAQAbQgDALgGANQgJAQgaAOQgQAIgWAHQhCAUhPABIgIAAg");
	this.shape_21.setTransform(0,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E99B9B").s().p("AgDBBQhVAAhGgWIgNgFQgvgRgOgWIAAgBQAJgeAjgPQAQgHAVgEQAdgFAqAAIBGAAIAQAAIBWABQAsABAdAFIAFABQAuAJARAZQgDALgIALQgJAQgZANQgRAIgWAHQhBAThPABIgIAAg");
	this.shape_22.setTransform(0,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E99B9B").s().p("AgEA+QhUAAhFgWIgNgFQgwgQgOgVIAAgBQALgcAigOQARgHAVgEQAegEApAAQAcgBApABIAQAAIBVABQArABAeAEIAEACQAuAIASAYQgEAKgJALQgKAOgYANQgSAIgVAGQhCAUhNAAIgIAAg");
	this.shape_23.setTransform(0,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E99B9B").s().p("AgEA8QhTgBhGgVIgNgEQgugRgQgTIAAgBQAMgZAkgOQAQgHAVgDQAdgFApgBQAcgBAoABIAQAAIBVACQAqABAeAFIAEABQAuAIATAXQgFAJgJALQgLANgZAMQgRAHgVAGQhBAThMABIgIAAg");
	this.shape_24.setTransform(0,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E99B9B").s().p("AgFA5QhRgBhGgVIgNgEQgugPgRgSIAAgBQAOgYAkgNQAQgGAVgDQAegFAngBQAdgBAnAAIAQAAIBUADQApABAfAFIAEABQAtAIAUAVQgGAJgJAKQgMAMgZALQgRAIgUAFQhCAShLABIgIAAg");
	this.shape_25.setTransform(0,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E99B9B").s().p("AgFA2QhQAAhHgVIgNgEQgtgPgSgRIAAgBQAPgVAlgMQARgGAUgEQAegEAngBQAdgCAmABIAQAAIBTACQAoACAfAFIAEABQAtAIAVATQgHAJgKAJQgMALgZALQgRAHgUAFQhCAShKAAIgHAAg");
	this.shape_26.setTransform(0,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E99B9B").s().p("AgGA0QhOgBhHgUIgNgEQgtgOgTgRIAAAAQARgUAlgLQARgGAUgDQAegEAmgCQAegBAlAAIAPAAIBTADQAnACAgAFIAEABQAtAIAVARQgHAIgLAJQgOALgYAJQgRAHgUAFQhCARhIABIgIAAg");
	this.shape_27.setTransform(0,0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E99B9B").s().p("AgGAxQhOgBhHgUIgNgDQgsgOgUgPIAAgBQASgRAmgLQARgFAUgDQAegFAlgBQAegCAlABIAPAAIBSADQAmACAgAFIAEABQAtAIAWAQIgUAPQgOAKgZAJQgRAGgTAFQhCARhHAAIgHAAg");
	this.shape_28.setTransform(0,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E99B9B").s().p("AgHAuQhMAAhHgUIgNgDQgsgOgVgNIAAgBQAUgPAngKQARgFASgDQAggEAkgCQAegBAjgBIAQAAIBRAEQAlACAhAFIAEABQAsAIAXAOQgJAHgMAHQgPAJgZAJIgkALQhCAPhGAAIgHAAg");
	this.shape_29.setTransform(0,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E99B9B").s().p("AgIAsQhKgBhIgTIgMgEQgsgMgWgNIAAgBQAVgMAngKIAkgHQAggEAjgCQAegCAjAAIAQAAQAlABArADQAkADAhAFIAEABQAsAHAYANIgWAMQgQAIgZAJQgRAFgTAEQhDAQhDAAIgIAAg");
	this.shape_30.setTransform(0,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E99B9B").s().p("AgJApQhJgBhHgSIgNgEQgrgLgXgNQAXgLAogJQARgEASgCQAggEAjgDQAegBAiAAIAPAAQAmABAqADQAjADAhAFIAFABQArAHAZAKIgYAMQgRAIgYAHIgkAJQhDAPhBAAIgJAAg");
	this.shape_31.setTransform(0,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E99B9B").s().p("AgJAnQhIgBhIgSIgNgEQgpgLgZgLQAYgJApgIIAjgGQAggFAhgBQAggDAgAAIAQAAQAmABApAEQAiADAiAFIAEABQArAHAaAJIgZAKQgSAHgYAHIgjAIQhDAPhBAAIgIAAg");
	this.shape_32.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17).to({_off:true},1).wait(28).to({_off:false},0).wait(11).to({_off:true},1).wait(41).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(22).to({_off:false},0).wait(17).to({_off:true},1).wait(21).to({_off:false},0).wait(19).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-2.7,46.6,7.3);


(lib.tanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B257").s().p("AjiBNIGXiwIA9gEInjDPg");
	this.shape.setTransform(-114.1,-51.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E36").s().p("AqDG6QgSgVAPgYIDalhQAagqAsgTIO8mxQAYgLAUATQATATgLAZIiUFEQgSAogoASIwTHTQgJAEgIAAQgPAAgMgNg");
	this.shape_1.setTransform(-85.1,-61.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1B257").s().p("AgPDoIAAnPIAfAAIAAHPg");
	this.shape_2.setTransform(-140.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181526").s().p("AkygJIH3jiIBuD1QjCBpg/AcQgnARhqAoIhkAkg");
	this.shape_3.setTransform(-81,-41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AgHheQAghNAaABQAiAAADAVQACARgSAvQhDClgOBXQglAAgpAEQApivAnhag");
	this.shape_4.setTransform(-133.1,86.4);

	this.instance = new lib.tanner_mouth();
	this.instance.parent = this;
	this.instance.setTransform(-7.3,56.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("ABZAUQgtgWgogHQgngFgyAHQgkAHABgEQACgMAkgKQAqgLAvAIQAwAHAlAXQAfAUgCALQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgGAAgZgNg");
	this.shape_5.setTransform(29.1,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("Ah0AtQgEgLAcgZQAfgdAugPQAtgPAtAHQAnAFADAMQACADgmgCQgzgCgmAMQgnANgnAdQgYATgFAAIgBgBg");
	this.shape_6.setTransform(-61.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AgpAvQgUgRgBgaQgCgZASgUQARgUAbgBQAZgCAUASQATASABAaQACAZgSAUQgRATgaACIgDAAQgYAAgSgRg");
	this.shape_7.setTransform(30.8,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AgqAwQgTgSgCgaQgBgaASgTQARgUAagCQAZgBAUARQAUASABAaQACAagSATQgRAUgbABIgDABQgXAAgTgQg");
	this.shape_8.setTransform(-59.1,34.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E3753A").s().p("AibKdIgOgBQh7jYAAj2QAAkcCijxQCdjqEKh/Qi5CJhoDGQhrDMAADlQAACkA5CaQA1CVBnB+QiSgKh3gCg");
	this.shape_9.setTransform(-108.2,36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA983E").s().p("ABdLiIqUgJQgXgCi9gIIi9gIQh7jZAAj2QAAjLBWi5QBTi0CXiKQCXiLDEhMQDLhODdAAQDeAADLBOQDEBMCXCLQCXCKBTC0QBWC5AADLQAACIgnCCQglB9hIBxQiegEq1gKg");
	this.shape_10.setTransform(-28.3,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-107.3,231.3,214.7);


(lib.cube_4_l_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cube_4_l_hand();
	this.instance.parent = this;
	this.instance.setTransform(49.1,-9.7,1,1,0,0,0,-11.9,13.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AAoCTQiRgLibg9QiUg8iAhdIgWgOQgLgIAAgLQAAgPALgLQAKgMAMAFIDZBsQCXBLBwAaQFRBQD/khQAJgKANAOQAMAOAAAPQAAAKgNAIQgRAJgEAGQiPDjknAAQgdAAgdgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_4_l_arm, new cjs.Rectangle(-56.9,-47.8,138,62.7), null);


(lib.cube_3_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cube_3_hat();
	this.instance.parent = this;
	this.instance.setTransform(-58.3,-68.2,1,1,0,0,0,31,0);

	this.instance_1 = new lib.cube_3_brrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.2,-32);

	this.instance_2 = new lib.cube_3_eyes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.8,-10.4);

	this.instance_3 = new lib.cube_3_r_arm();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-117,25.1,0.999,0.999,-29.9,0,0,26.9,-39.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E99B9B").s().p("Ah+ALQgvgIAKgMQAIgKAeABIB9ACQBbAAAjADQAeACAHAFQALAGggAIQgpALhUAAQhdAAgygIg");
	this.shape.setTransform(-7.4,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_1.setTransform(-29.1,103.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_2.setTransform(-108.7,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4E4ED").s().p("AsbMcIAA43IY4AAIAAY3g");
	this.shape_3.setTransform(-11.7,16.1);

	this.instance_4 = new lib.cube_3_l_arm();
	this.instance_4.parent = this;
	this.instance_4.setTransform(93.8,49,0.999,0.999,56.3,0,0,-2.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_3_all, new cjs.Rectangle(-162.8,-119.6,329.7,238.4), null);


(lib.cube_2_mouth_layer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cube_2_mouth();
	this.instance.parent = this;
	this.instance.setTransform(0,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cube_2_mouth_layer, new cjs.Rectangle(-23.5,-3.3,47.1,6.7), null);


(lib.cube_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B257").s().p("AjgAhIGbhXIA5AHInnBmg");
	this.shape.setTransform(-104.4,-86.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E36").s().p("AqoEkQgNgXASgTIENkfQAggiAsgKIPJjiQAZgGAPAWQAOAVgPAVIjGERQgYAigoAJIwhDyIgKABQgSAAgLgSg");
	this.shape_1.setTransform(-75.4,-91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1B257").s().p("AgODcIAAm3IAdAAIAAG3g");
	this.shape_2.setTransform(-129,-41.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181526").s().p("AkbhBIH+h1IA5D4QjIA9hBAQQgmAIhrARIhkAPg");
	this.shape_3.setTransform(-75.3,-71.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("ABNAbQgtgbgggKQgdgJgxgFQgigDABgFQADgJAigCQAngCAqAOQAsAPAiAaQAeAYgDAJIgCABQgGAAgbgRg");
	this.shape_4.setTransform(48.9,-41.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AhvArQgCgJAdgYQAjgaArgPQArgOAnACQAhACADAJQACAFgjADQgxAFgeAJQgeAKgtAbQgcARgGAAIgCgBg");
	this.shape_5.setTransform(-32.8,-41.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(1.9).p("AhihkQAHgTAOgTQAYggAcgOQAdgPAQANQANAJgBAYQgBAXgOAbQAQACAMADQBfAWAaARQAqAcgPBAQgRBMg3AuQg8AyhIgQQgugLgjgbQghgZgQgjQgJAFgNgCQgVgDgIgWQgJgZAJg2QAIg4AVgiQAUghAUADQARACAIAcg");
	this.shape_6.setTransform(127.8,100.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9ECEE").s().p("AgLC9QgugLgjgbQghgZgQgjQgJAFgNgCQgVgDgIgWQgJgZAJg2QAIg4AVgiQAUghAUADQARACAIAcQAHgTAOgTQAYggAcgOQAdgPAQANQANAJgBAYQgBAXgOAbIAcAFQBfAWAaARQAqAcgPBAQgRBMg3AuQgtAmg1AAQgRAAgRgEg");
	this.shape_7.setTransform(127.8,100.6);

	this.instance = new lib.cube_1_mouth();
	this.instance.parent = this;
	this.instance.setTransform(8.2,21.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(1.9).p("AisgpQA7hVA7gMQgbgcAIgSQAJgUArACQArACA1AXQA1AXAfAeQAfAfgIATQgGAOgYADQAcAiAHA9QAGAzgMAlQgNAmgXACQgVACgTgZQgSgagJgpQgXAggfBBQgcAsgugUQhFgdgrhNQguhQAkg0g");
	this.shape_8.setTransform(-109.6,102.2,1,1,-30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9ECEE").s().p("AgyDFQhFgdgrhNQguhQAkg0QA7hVA7gMQgbgcAIgSQAJgUArACQArACA1AXQA1AXAfAeQAfAfgIATQgGAOgYADQAcAiAHA9QAGAzgMAlQgNAmgXACQgVACgTgZQgSgagJgpQgXAggfBBQgUAegbAAQgNAAgOgGg");
	this.shape_9.setTransform(-109.6,102.2,1,1,-30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AkZE/QAFgqAMgiQA7ifDXjjQBDhHBMhGIA9g3QALgNASgBQAQgBANALQAMAKgCAJQgBAHgNAOQgRAXhbBNQhdBPhBBTIhKBeQg8BNgVAjQhbCpgMAKQgKAKgHAAQgLAAADgjg");
	this.shape_10.setTransform(-103.8,62.5,1,1,-30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_11.setTransform(-33.4,-12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221F20").s().p("AgvAwQgTgUAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTAUQgUATgcAAQgbAAgUgTg");
	this.shape_12.setTransform(48.9,-12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A4D6E0").s().p("AvJBKIFbiTIY4AAIkYCTg");
	this.shape_13.setTransform(-15.1,100.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A4D6E0").s().p("AisqOIFZjXIAAY3IlZCUg");
	this.shape_14.setTransform(-94.8,21.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4E4ED").s().p("AsbMcIAA43IY4AAIAAY3g");
	this.shape_15.setTransform(2.2,13.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221F20").s().p("AAoCTQiRgLibg9QiUg8iAhdIgWgOQgLgIAAgLQAAgPALgLQAKgMAMAFIDZBsQCXBLBwAaQFRBQD/khQAJgKANAOQAMAOAAAPQAAAKgNAIQgRAJgEAGQiPDjknAAQgdAAgdgCg");
	this.shape_16.setTransform(85.7,53.9,1,1,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-121.9,294.2,246.2);


// stage content:
(lib.ice_tray_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_ice_03 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AukSMIzTAHIJbzIIgMwGId8hsILlJaIQ/TvIw/IGg");
	mask.setTransform(1178.1,174.2);

	// Layer 20
	this.instance = new lib.cube_3_all();
	this.instance.parent = this;
	this.instance.setTransform(1227.8,340.7,1,0.995,0,0,0,15.2,112.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:0.4,scaleX:0.99,scaleY:1,x:1213,y:227.8},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:1213.1,y:226.9},0).wait(1).to({scaleX:0.98,scaleY:1.02,x:1213.2,y:226.1},0).wait(1).to({scaleX:0.98,scaleY:1.03,y:225.2},0).wait(1).to({scaleX:0.97,scaleY:1.03,x:1213.3,y:224.3},0).wait(1).to({scaleX:1,scaleY:1,x:1212.8,y:227.8},0).wait(1).to({scaleX:1.04,scaleY:0.97,x:1212.3,y:231.2},0).wait(1).to({scaleX:1.07,scaleY:0.94,x:1211.8,y:234.7},0).wait(1).to({scaleX:1.1,scaleY:0.91,x:1211.4,y:238.1},0).wait(1).to({scaleX:1.08,scaleY:0.93,x:1211.7,y:236.1},0).wait(1).to({scaleX:1.06,scaleY:0.95,x:1212,y:234.2},0).wait(1).to({scaleX:1.04,scaleY:0.97,x:1212.3,y:232.2},0).wait(1).to({scaleX:1.02,scaleY:0.98,x:1212.6,y:230.1},0).wait(1).to({scaleX:1,scaleY:1,x:1212.9,y:228.1},0).wait(7).to({y:228.2},0).wait(4).to({scaleY:1},0).wait(1).to({scaleX:1},0).wait(3).to({y:228.3},0).wait(6).to({scaleY:1},0).wait(3).to({scaleX:1,y:228.4},0).wait(7).to({scaleY:1},0).wait(2).to({y:228.5},0).wait(3).to({scaleX:1},0).wait(5).to({scaleY:1},0).wait(1).to({y:228.6},0).wait(4).to({x:1213},0).wait(2).to({scaleX:1},0).wait(2).to({y:228.7},0).wait(1).to({scaleY:1},0).wait(4).to({scaleX:0.99,scaleY:1,x:1213.1,y:228.1},0).wait(1).to({scaleX:0.98,scaleY:1.01,x:1213.2,y:227.4},0).wait(1).to({scaleX:0.97,scaleY:1.01,x:1213.3,y:226.8},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:1213.4,y:226.1},0).wait(1).to({scaleX:0.96,scaleY:1.02,x:1213.6,y:225.5},0).wait(1).to({scaleX:1,scaleY:1,x:1213,y:228.4},0).wait(1).to({scaleX:1.03,scaleY:0.97,x:1212.4,y:231.3},0).wait(1).to({scaleX:1.07,scaleY:0.95,x:1211.8,y:234.2},0).wait(1).to({scaleX:1.11,scaleY:0.92,x:1211.3,y:237},0).wait(1).to({scaleX:1.09,scaleY:0.94,x:1211.6,y:235.2},0).wait(1).to({scaleX:1.07,scaleY:0.95,x:1211.9,y:233.5},0).wait(1).to({scaleX:1.04,scaleY:0.97,x:1212.2,y:231.7},0).wait(1).to({scaleX:1.02,scaleY:0.98,x:1212.6,y:229.9},0).wait(1).to({scaleX:1,scaleY:1,x:1212.9,y:228.1},0).wait(18));

	// Layer 17
	this.instance_1 = new lib.cube_4_mouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(927.1,230,1,1,0,0,0,1.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:2.6,regY:5.4,x:928.1,y:236.7},0).wait(1).to({y:238.2},0).wait(1).to({y:239.6},0).wait(1).to({y:241},0).wait(1).to({y:242.5},0).wait(1).to({y:243.9},0).wait(1).to({y:245.3},0).wait(1).to({y:246.8},0).wait(1).to({y:248.2},0).wait(1).to({y:249.7},0).wait(1).to({y:251.1},0).wait(1).to({y:252.5},0).wait(1).to({y:254},0).wait(1).to({y:255.4},0).wait(1).to({y:256.8},0).wait(1).to({y:258.3},0).wait(1).to({y:259.7},0).wait(1).to({y:261.1},0).wait(1).to({y:262.6},0).wait(1).to({y:264},0).wait(1).to({y:260.4},0).wait(1).to({y:256.8},0).wait(1).to({y:253.2},0).wait(1).to({y:249.7},0).wait(1).to({y:246.1},0).wait(1).to({y:242.5},0).wait(1).to({y:238.9},0).wait(1).to({y:235.3},0).wait(23).to({y:236.5},0).wait(1).to({y:237.8},0).wait(1).to({y:239},0).wait(1).to({y:240.3},0).wait(1).to({y:241.5},0).wait(1).to({y:242.8},0).wait(1).to({y:244},0).wait(1).to({y:245.3},0).wait(1).to({y:246.5},0).wait(1).to({y:247.8},0).wait(1).to({y:249},0).wait(1).to({y:250.3},0).wait(1).to({y:251.5},0).wait(1).to({y:252.8},0).wait(1).to({y:254},0).wait(1).to({y:255.3},0).wait(1).to({y:256.5},0).wait(1).to({y:257.8},0).wait(1).to({y:259},0).wait(1).to({y:260.3},0).wait(1).to({y:261.5},0).wait(1).to({y:262.8},0).wait(1).to({y:264},0).wait(1).to({y:260.4},0).wait(1).to({y:256.8},0).wait(1).to({y:253.2},0).wait(1).to({y:249.7},0).wait(1).to({y:246.1},0).wait(1).to({y:242.5},0).wait(1).to({y:238.9},0).wait(1).to({y:235.3},0).wait(19));

	// mask_ice_04 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AzWQAIldgGIAM40IVZnZIa7F8IBHTNIsXHfg");
	mask_1.setTransform(927.5,187.3);

	// r_arm
	this.instance_2 = new lib.cube_4_r_arm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(817,233.8,0.999,0.999,-23.3,0,0,36.1,-43);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.5,regY:0.5,scaleX:1,scaleY:1,rotation:-22.9,x:800.2,y:289.6},0).wait(1).to({rotation:-22.3,x:799.7,y:290.8},0).wait(1).to({rotation:-21.7,x:799.1,y:292.1},0).wait(1).to({rotation:-21.1,x:798.6,y:293.3},0).wait(1).to({rotation:-20.5,x:798,y:294.6},0).wait(1).to({rotation:-19.9,x:797.4,y:295.8},0).wait(1).to({rotation:-19.4,x:796.9,y:297},0).wait(1).to({rotation:-18.8,x:796.4,y:298.2},0).wait(1).to({rotation:-18.2,x:795.8,y:299.5},0).wait(1).to({rotation:-17.6,x:795.2,y:300.7},0).wait(1).to({rotation:-17,x:794.7,y:301.9},0).wait(1).to({rotation:-16.4,x:794.2,y:303.1},0).wait(1).to({rotation:-15.8,x:793.6,y:304.3},0).wait(1).to({rotation:-15.2,x:793.1,y:305.5},0).wait(1).to({rotation:-14.6,x:792.6,y:306.7},0).wait(1).to({rotation:-14.1,x:792,y:307.9},0).wait(1).to({rotation:-13.5,x:791.5,y:309},0).wait(1).to({rotation:-12.9,x:791,y:310.2},0).wait(1).to({rotation:-12.3,x:790.5,y:311.4},0).wait(1).to({rotation:-11.7,x:790,y:312.6},0).wait(1).to({rotation:-13,x:791.1,y:309.5},0).wait(1).to({rotation:-14.2,x:792.2,y:306.5},0).wait(1).to({rotation:-15.5,x:793.3,y:303.5},0).wait(1).to({rotation:-16.7,x:794.4,y:300.4},0).wait(1).to({rotation:-18,x:795.6,y:297.3},0).wait(1).to({rotation:-19.2,x:796.8,y:294.1},0).wait(1).to({rotation:-20.5,x:798,y:291},0).wait(1).to({rotation:-21.7,x:799.1,y:287.8},0).wait(1).to({rotation:-21.9,x:799.3,y:287.9},0).wait(1).to({rotation:-22.1,x:799.5},0).wait(1).to({rotation:-22.3,x:799.7,y:288},0).wait(1).to({rotation:-22.5,x:799.9},0).wait(1).to({rotation:-22.7,x:800.1,y:288.1},0).wait(1).to({rotation:-22.9,x:800.2},0).wait(1).to({rotation:-23.1,x:800.4,y:288.2},0).wait(1).to({rotation:-23.3,x:800.6,y:288.3},0).wait(1).to({rotation:-23.5,x:800.8},0).wait(1).to({rotation:-23.7,x:801,y:288.4},0).wait(1).to({rotation:-23.9,x:801.2},0).wait(1).to({rotation:-24.1,x:801.3,y:288.5},0).wait(1).to({rotation:-24.3,x:801.5},0).wait(1).to({rotation:-24.5,x:801.7,y:288.6},0).wait(1).to({rotation:-24.7,x:801.9},0).wait(1).to({rotation:-24.9,x:802.1,y:288.7},0).wait(1).to({rotation:-25.1,x:802.3},0).wait(1).to({rotation:-25.3,x:802.4,y:288.8},0).wait(1).to({rotation:-25.4,x:802.6},0).wait(1).to({rotation:-25.6,x:802.8,y:288.9},0).wait(1).to({rotation:-25.8,x:803},0).wait(1).to({rotation:-26,x:803.2,y:289},0).wait(1).to({rotation:-25.9,x:803,y:290.2},0).wait(1).to({rotation:-25.7,x:802.9,y:291.4},0).wait(1).to({rotation:-25.6,x:802.7,y:292.6},0).wait(1).to({rotation:-25.4,x:802.6,y:293.8},0).wait(1).to({rotation:-25.3,x:802.4,y:295},0).wait(1).to({rotation:-25.1,x:802.3,y:296.2},0).wait(1).to({rotation:-24.9,x:802.1,y:297.4},0).wait(1).to({rotation:-24.8,x:802,y:298.6},0).wait(1).to({rotation:-24.6,x:801.8,y:299.8},0).wait(1).to({rotation:-24.5,x:801.7,y:301.1},0).wait(1).to({rotation:-24.3,x:801.6,y:302.3},0).wait(1).to({rotation:-24.2,x:801.4,y:303.5},0).wait(1).to({rotation:-24,x:801.3,y:304.7},0).wait(1).to({rotation:-23.8,x:801.1,y:305.9},0).wait(1).to({rotation:-23.7,x:801,y:307.1},0).wait(1).to({rotation:-23.5,x:800.8,y:308.3},0).wait(1).to({rotation:-23.4,x:800.7,y:309.5},0).wait(1).to({rotation:-23.2,x:800.5,y:310.7},0).wait(1).to({rotation:-23.1,x:800.4,y:311.9},0).wait(1).to({rotation:-22.9,x:800.2,y:313.1},0).wait(1).to({rotation:-22.8,x:800.1,y:314.3},0).wait(1).to({rotation:-22.6,x:799.9,y:315.5},0).wait(1).to({rotation:-22.4,x:799.8,y:316.7},0).wait(1).to({rotation:-22.6,x:799.9,y:313.2},0).wait(1).to({rotation:-22.7,x:800,y:309.6},0).wait(1).to({rotation:-22.8,x:800.2,y:306.1},0).wait(1).to({rotation:-23,x:800.3,y:302.5},0).wait(1).to({rotation:-23.1,x:800.4,y:299},0).wait(1).to({rotation:-23.2,x:800.5,y:295.4},0).wait(1).to({rotation:-23.4,x:800.6,y:291.9},0).wait(1).to({rotation:-23.5,x:800.8,y:288.3},0).wait(19));

	// ice_04
	this.instance_3 = new lib.cube_04();
	this.instance_3.parent = this;
	this.instance_3.setTransform(918.8,233,1,1,0,0,0,0,0.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-15.8,regY:-4.4,x:903,y:229.5},0).wait(1).to({y:231},0).wait(1).to({y:232.4},0).wait(1).to({y:233.8},0).wait(1).to({y:235.3},0).wait(1).to({y:236.7},0).wait(1).to({y:238.1},0).wait(1).to({y:239.6},0).wait(1).to({y:241},0).wait(1).to({y:242.5},0).wait(1).to({y:243.9},0).wait(1).to({y:245.3},0).wait(1).to({y:246.8},0).wait(1).to({y:248.2},0).wait(1).to({y:249.6},0).wait(1).to({y:251.1},0).wait(1).to({y:252.5},0).wait(1).to({y:253.9},0).wait(1).to({y:255.4},0).wait(1).to({y:256.8},0).wait(1).to({y:253.2},0).wait(1).to({y:249.6},0).wait(1).to({y:246},0).wait(1).to({y:242.5},0).wait(1).to({y:238.9},0).wait(1).to({y:235.3},0).wait(1).to({y:231.7},0).wait(1).to({y:228.1},0).wait(23).to({y:229.3},0).wait(1).to({y:230.6},0).wait(1).to({y:231.8},0).wait(1).to({y:233.1},0).wait(1).to({y:234.3},0).wait(1).to({y:235.6},0).wait(1).to({y:236.8},0).wait(1).to({y:238.1},0).wait(1).to({y:239.3},0).wait(1).to({y:240.6},0).wait(1).to({y:241.8},0).wait(1).to({y:243.1},0).wait(1).to({y:244.3},0).wait(1).to({y:245.6},0).wait(1).to({y:246.8},0).wait(1).to({y:248.1},0).wait(1).to({y:249.3},0).wait(1).to({y:250.6},0).wait(1).to({y:251.8},0).wait(1).to({y:253.1},0).wait(1).to({y:254.3},0).wait(1).to({y:255.6},0).wait(1).to({y:256.8},0).wait(1).to({y:253.2},0).wait(1).to({y:249.6},0).wait(1).to({y:246},0).wait(1).to({y:242.5},0).wait(1).to({y:238.9},0).wait(1).to({y:235.3},0).wait(1).to({y:231.7},0).wait(1).to({y:228.1},0).wait(19));

	// l_arm
	this.instance_4 = new lib.cube_4_l_arm();
	this.instance_4.parent = this;
	this.instance_4.setTransform(947.2,232.5,1,1,0,0,0,-57,-14);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:12.1,regY:-14.4,rotation:2.5,x:1016.4,y:235.7},0).wait(1).to({rotation:5,x:1016.3,y:239.3},0).wait(1).to({rotation:7.5,x:1016.1,y:243},0).wait(1).to({rotation:10,x:1015.7,y:246.6},0).wait(1).to({rotation:12.5,x:1015.3,y:250.2},0).wait(1).to({rotation:15,x:1014.7,y:253.8},0).wait(1).to({rotation:17.5,x:1014,y:257.3},0).wait(1).to({rotation:20,x:1013.1,y:260.8},0).wait(1).to({rotation:22.5,x:1012.2,y:264.2},0).wait(1).to({rotation:25,x:1011.1,y:267.6},0).wait(1).to({rotation:27.5,x:1010,y:271},0).wait(1).to({rotation:30,x:1008.6,y:274.3},0).wait(1).to({rotation:32.5,x:1007.2,y:277.4},0).wait(1).to({rotation:35,x:1005.6,y:280.6},0).wait(1).to({rotation:37.5,x:1004,y:283.7},0).wait(1).to({rotation:40,x:1002.2,y:286.7},0).wait(1).to({rotation:42.5,x:1000.4,y:289.6},0).wait(1).to({rotation:45,x:998.5,y:292.4},0).wait(1).to({rotation:35.6,x:1005.7,y:279.2},0).wait(1).to({rotation:26.2,x:1011.4,y:265},0).wait(1).to({rotation:16.8,x:1015.5,y:249.9},0).wait(1).to({rotation:7.5,x:1017.8,y:234.3},0).wait(1).to({rotation:-1.9,x:1018.3,y:218.6},0).wait(1).to({rotation:-11.3,x:1016.9,y:202.9},0).wait(1).to({rotation:-20.7,x:1013.7,y:187.5},0).wait(1).to({rotation:-30.1,x:1008.8,y:172.9},0).wait(1).to({rotation:-28.4,x:1009.8,y:170.6},0).wait(1).to({rotation:-26.7,x:1010.8,y:168.4},0).wait(1).to({rotation:-25,x:1011.7,y:166.3},0).wait(1).to({rotation:-23.3,x:1012.5,y:169.3},0).wait(1).to({rotation:-21.6,x:1013.3,y:172.4},0).wait(1).to({rotation:-19.9,x:1014.1,y:175.5},0).wait(1).to({rotation:-18.1,x:1014.8,y:178.6},0).wait(1).to({rotation:-16.4,x:1015.4,y:181.8},0).wait(1).to({rotation:-14.7,x:1016,y:184.8},0).wait(1).to({rotation:-13,x:1016.5,y:188},0).wait(1).to({rotation:-11.3,x:1016.9,y:191.2},0).wait(1).to({rotation:-9.6,x:1017.3,y:194.4},0).wait(1).to({rotation:-7.9,x:1017.6,y:197.7},0).wait(1).to({rotation:-6.2,x:1017.9,y:200.9},0).wait(1).to({rotation:-4.5,x:1018.1,y:204.1},0).wait(1).to({rotation:-2.8,x:1018.3,y:207.2},0).wait(1).to({rotation:-1.1,x:1018.4,y:210.5},0).wait(1).to({rotation:0.6,x:1018.3,y:213.7},0).wait(1).to({rotation:2.3,y:217},0).wait(1).to({rotation:4,x:1018.2,y:220.2},0).wait(1).to({rotation:5.7,x:1018.1,y:223.4},0).wait(1).to({rotation:7.5,x:1017.8,y:226.6},0).wait(1).to({rotation:9.2,x:1017.6,y:229.9},0).wait(1).to({rotation:10.9,x:1017.2,y:233},0).wait(1).to({rotation:12.6,x:1016.8,y:236.2},0).wait(1).to({rotation:14.3,x:1016.4,y:239.4},0).wait(1).to({rotation:16,x:1015.8,y:242.6},0).wait(1).to({rotation:17.7,x:1015.3,y:245.7},0).wait(1).to({rotation:19.4,x:1014.6,y:248.8},0).wait(1).to({rotation:21.1,x:1013.9,y:251.9},0).wait(1).to({rotation:22.8,x:1013.1,y:255.1},0).wait(1).to({rotation:24.5,x:1012.3,y:258.1},0).wait(1).to({rotation:26.2,x:1011.4,y:261.1},0).wait(1).to({rotation:27.9,x:1010.5,y:264.1},0).wait(1).to({rotation:29.6,x:1009.5,y:267.1},0).wait(1).to({rotation:31.3,x:1008.5,y:270.1},0).wait(1).to({rotation:33.1,x:1007.4,y:273},0).wait(1).to({rotation:34.8,x:1006.3,y:275.8},0).wait(1).to({rotation:36.5,x:1005.1,y:278.7},0).wait(1).to({rotation:38.2,x:1003.8,y:281.6},0).wait(1).to({rotation:39.9,x:1002.6,y:284.3},0).wait(1).to({rotation:41.6,x:1001.2,y:287.1},0).wait(1).to({rotation:43.3,x:999.8,y:289.7},0).wait(1).to({rotation:45,x:998.5,y:292.4},0).wait(1).to({rotation:35.6,x:1005.7,y:279.2},0).wait(1).to({rotation:26.2,x:1011.4,y:265},0).wait(1).to({rotation:16.8,x:1015.5,y:249.9},0).wait(1).to({rotation:7.5,x:1017.8,y:234.3},0).wait(1).to({rotation:-1.9,x:1018.3,y:218.6},0).wait(1).to({rotation:-11.3,x:1016.9,y:202.9},0).wait(1).to({rotation:-20.7,x:1013.7,y:187.5},0).wait(1).to({rotation:-30.1,x:1008.8,y:172.9},0).wait(1).to({rotation:-28.7,x:1009.7,y:170.3},0).wait(1).to({rotation:-27.2,x:1010.5,y:167.8},0).wait(1).to({rotation:-25.8,x:1011.3,y:165.4},0).wait(1).to({rotation:-24.4,x:1011.9,y:169},0).wait(1).to({rotation:-22.9,x:1012.5,y:172.6},0).wait(1).to({rotation:-21.5,x:1013,y:176.2},0).wait(1).to({rotation:-20.1,x:1013.5,y:179.9},0).wait(1).to({rotation:-18.6,x:1014,y:183.6},0).wait(1).to({rotation:-17.2,x:1014.4,y:187.2},0).wait(1).to({rotation:-15.8,x:1014.8,y:190.9},0).wait(1).to({rotation:-14.3,x:1015.1,y:194.6},0).wait(1).to({rotation:-12.9,x:1015.5,y:198.3},0).wait(1).to({rotation:-11.5,x:1015.7,y:202.1},0).wait(1).to({rotation:-10,x:1015.9,y:205.8},0).wait(1).to({rotation:-8.6,x:1016.1,y:209.5},0).wait(1).to({rotation:-7.2,x:1016.2,y:213.3},0).wait(1).to({rotation:-5.7,x:1016.3,y:217},0).wait(1).to({rotation:-4.3,y:220.8},0).wait(1).to({rotation:-2.9,x:1016.4,y:224.5},0).wait(1).to({rotation:-1.4,x:1016.3,y:228.3},0).wait(1).to({rotation:0,y:232.1},0).wait(1));

	// tanner_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgoQAU+MgC4goWMAvMgCCMAnFATjMgrWAXSg");
	mask_2.setTransform(726.6,151.6);

	// Tanner
	this.instance_5 = new lib.tanner();
	this.instance_5.parent = this;
	this.instance_5.setTransform(657.5,184.1,1,1,0,0,0,1,0);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-34.8,x:621.7,y:185.6},0).wait(1).to({y:187},0).wait(1).to({y:188.5},0).wait(1).to({y:190},0).wait(1).to({y:191.5},0).wait(1).to({y:192.9},0).wait(1).to({y:194.4},0).wait(1).to({y:195.9},0).wait(1).to({y:197.3},0).wait(1).to({y:198.8},0).wait(1).to({y:200.3},0).wait(1).to({y:201.8},0).wait(1).to({y:203.2},0).wait(1).to({y:204.7},0).wait(1).to({y:206.2},0).wait(1).to({y:207.7},0).wait(1).to({y:205.2},0).wait(1).to({y:202.7},0).wait(1).to({y:200.3},0).wait(1).to({y:197.8},0).wait(1).to({y:195.4},0).wait(1).to({y:192.9},0).wait(1).to({y:190.5},0).wait(1).to({y:188},0).wait(22).to({y:188.9},0).wait(1).to({y:189.7},0).wait(1).to({y:190.6},0).wait(1).to({y:191.4},0).wait(1).to({y:192.3},0).wait(1).to({y:193.1},0).wait(1).to({y:194},0).wait(1).to({y:194.8},0).wait(1).to({y:195.7},0).wait(1).to({y:196.5},0).wait(1).to({y:197.4},0).wait(1).to({y:198.3},0).wait(1).to({y:199.1},0).wait(1).to({y:200},0).wait(1).to({y:200.8},0).wait(1).to({y:201.7},0).wait(1).to({y:202.5},0).wait(1).to({y:203.4},0).wait(1).to({y:204.2},0).wait(1).to({y:205.1},0).wait(1).to({y:205.9},0).wait(1).to({y:206.8},0).wait(1).to({y:207.7},0).wait(1).to({y:204.7},0).wait(1).to({y:201.8},0).wait(1).to({y:198.8},0).wait(1).to({y:195.9},0).wait(1).to({y:192.9},0).wait(1).to({y:190},0).wait(1).to({y:187},0).wait(1).to({y:184.1},0).wait(24));

	// tanner_l_arm
	this.instance_6 = new lib.tanner_l_arm();
	this.instance_6.parent = this;
	this.instance_6.setTransform(719.6,223.2,1,1,0,0,0,-36.5,32.8);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0.5,regY:-0.5,rotation:-2.4,x:755.2,y:189.9},0).wait(1).to({rotation:-4.9,x:753.6,y:189.8},0).wait(1).to({rotation:-7.3,x:752.1,y:189.9},0).wait(1).to({rotation:-9.7,x:750.4,y:190},0).wait(1).to({rotation:-12.2,x:748.8,y:190.2},0).wait(1).to({rotation:-14.6,x:747,y:190.5},0).wait(1).to({rotation:-17,x:745.3,y:190.8},0).wait(1).to({rotation:-19.5,x:743.4,y:191.3},0).wait(1).to({rotation:-15.9,x:746.1,y:194.3},0).wait(1).to({rotation:-12.4,x:748.6,y:197.5},0).wait(1).to({rotation:-8.8,x:751,y:200.8},0).wait(1).to({rotation:-5.3,x:753.4,y:204.3},0).wait(1).to({rotation:-1.7,x:755.6,y:208},0).wait(1).to({rotation:1.8,x:757.6,y:211.7},0).wait(1).to({rotation:5.4,x:759.6,y:215.6},0).wait(1).to({rotation:8.9,x:761.3,y:219.6},0).wait(1).to({rotation:6.1,x:759.9,y:215.1},0).wait(1).to({rotation:3.3,x:758.5,y:210.7},0).wait(1).to({rotation:0.4,x:756.9,y:206.4},0).wait(1).to({rotation:-2.4,x:755.2,y:202.1},0).wait(1).to({rotation:-5.2,x:753.4,y:197.9},0).wait(1).to({rotation:-8,x:751.6,y:193.9},0).wait(1).to({rotation:-10.9,x:749.7,y:189.9},0).wait(1).to({rotation:-13.7,x:747.7,y:186},0).wait(1).to({rotation:-11,x:749.6,y:187.4},0).wait(1).to({rotation:-8.3,x:751.5,y:188.9},0).wait(1).to({rotation:-5.6,x:753.2,y:190.4},0).wait(1).to({rotation:-2.8,x:754.9,y:192},0).wait(1).to({rotation:-0.1,x:756.5,y:193.7},0).wait(1).to({rotation:2.6,x:758,y:195.5},0).wait(1).to({rotation:5.3,x:759.5,y:197.4},0).wait(1).to({rotation:8,x:760.9,y:199.2},0).wait(1).to({rotation:10.7,x:762.2,y:201.2},0).wait(1).to({rotation:13.4,x:763.3,y:203.3},0).wait(1).to({rotation:10.4,x:762,y:201},0).wait(1).to({rotation:7.3,x:760.5,y:198.8},0).wait(1).to({rotation:4.3,x:759,y:196.6},0).wait(1).to({rotation:1.2,x:757.3,y:194.6},0).wait(1).to({rotation:-1.9,x:755.5,y:192.6},0).wait(1).to({rotation:-4.9,x:753.6,y:190.7},0).wait(1).to({rotation:-8,x:751.7,y:189},0).wait(1).to({rotation:-11,x:749.6,y:187.3},0).wait(1).to({rotation:-14.1,x:747.4,y:185.8},0).wait(1).to({rotation:-17.1,x:745.2,y:184.4},0).wait(1).to({rotation:-20.2,x:742.8,y:183.1},0).wait(1).to({rotation:-17.6,x:744.8,y:185.1},0).wait(1).to({rotation:-15.1,x:746.7,y:187.2},0).wait(1).to({rotation:-12.5,x:748.6,y:189.4},0).wait(1).to({rotation:-9.9,x:750.3,y:191.6},0).wait(1).to({rotation:-7.3,x:752.1,y:194},0).wait(1).to({rotation:-4.8,x:753.7,y:196.4},0).wait(1).to({rotation:-2.2,x:755.3,y:198.9},0).wait(1).to({rotation:0.4,x:756.8,y:201.4},0).wait(1).to({rotation:3,x:758.3,y:204.1},0).wait(1).to({rotation:5.5,x:759.6,y:206.8},0).wait(1).to({rotation:8.1,x:760.9,y:209.5},0).wait(1).to({rotation:10.7,x:762.1,y:212.3},0).wait(1).to({rotation:7.8,x:760.8,y:211},0).wait(1).to({rotation:5,x:759.4,y:209.8},0).wait(1).to({rotation:2.1,x:757.8,y:208.6},0).wait(1).to({rotation:-0.7,x:756.2,y:207.6},0).wait(1).to({rotation:-3.6,x:754.4,y:206.5},0).wait(1).to({rotation:-6.4,x:752.7,y:205.7},0).wait(1).to({rotation:-9.3,x:750.8,y:204.8},0).wait(1).to({rotation:-12.1,x:748.8,y:204.1},0).wait(1).to({rotation:-15,x:746.8,y:203.4},0).wait(1).to({rotation:-17.8,x:744.7,y:202.9},0).wait(1).to({rotation:-20.7,x:742.5,y:202.5},0).wait(1).to({rotation:-17.4,x:745,y:200.9},0).wait(1).to({rotation:-14.2,x:747.4,y:199.5},0).wait(1).to({rotation:-10.9,x:749.6,y:198.2},0).wait(1).to({rotation:-7.7,x:751.8,y:197},0).wait(1).to({rotation:-4.5,x:753.9,y:195.9},0).wait(1).to({rotation:-1.2,x:755.9,y:195},0).wait(1).to({rotation:2,x:757.7,y:194.1},0).wait(1).to({rotation:5.2,x:759.5,y:193.4},0).wait(1).to({rotation:3.3,x:758.5,y:192.1},0).wait(1).to({rotation:1.3,x:757.3,y:190.7},0).wait(1).to({rotation:-0.7,x:756.2,y:189.5},0).wait(1).to({rotation:-2.7,x:755,y:188.2},0).wait(1).to({rotation:-4.6,x:753.8,y:187},0).wait(1).to({rotation:-6.6,x:752.5,y:185.9},0).wait(1).to({rotation:-8.6,x:751.3,y:184.8},0).wait(1).to({rotation:-10.6,x:749.9,y:183.7},0).wait(1).to({rotation:-12.5,x:748.5,y:182.7},0).wait(1).to({rotation:-14.5,x:747.1,y:181.7},0).wait(1).to({rotation:-16.5,x:745.7,y:180.8},0).wait(1).to({rotation:-18.4,x:744.2,y:179.9},0).wait(1).to({rotation:-16.8,x:745.5,y:180.6},0).wait(1).to({rotation:-15.1,x:746.7,y:181.4},0).wait(1).to({rotation:-13.4,x:747.9,y:182.2},0).wait(1).to({rotation:-11.7,x:749.1,y:183.1},0).wait(1).to({rotation:-10.1,x:750.2,y:183.9},0).wait(1).to({rotation:-8.4,x:751.4,y:184.9},0).wait(1).to({rotation:-6.7,x:752.5,y:185.8},0).wait(1).to({rotation:-5,x:753.5,y:186.8},0).wait(1).to({rotation:-3.4,x:754.6,y:187.8},0).wait(1).to({rotation:-1.7,x:755.6,y:188.8},0).wait(1).to({rotation:0,x:756.6,y:189.9},0).wait(1));

	// cube_2_l_arm_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EBapAaCIAAwWIeXAAIAAQWg");
	mask_3.setTransform(774.4,166.6);

	// cube_2_l_arm
	this.instance_7 = new lib.cube_2_l_arm();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1529.1,256.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:6,regY:3.6,x:1535.1,y:260.5},0).wait(6).to({rotation:-2.4,x:1532.8,y:257.8},0).wait(1).to({rotation:-4.7,x:1530.5,y:255.1},0).wait(1).to({rotation:-7.1,x:1528.1,y:252.4},0).wait(1).to({rotation:-9.5,x:1525.8,y:249.7},0).wait(1).to({rotation:-7.6,x:1527.6,y:251.8},0).wait(1).to({rotation:-5.7,x:1529.5,y:254},0).wait(1).to({rotation:-3.8,x:1531.4,y:256.2},0).wait(1).to({rotation:-1.9,x:1533.2,y:258.3},0).wait(1).to({rotation:0,x:1535.1,y:260.5},0).wait(47).to({rotation:-1.9,x:1533.2,y:258.3},0).wait(1).to({rotation:-3.8,x:1531.4,y:256.2},0).wait(1).to({rotation:-5.7,x:1529.5,y:254},0).wait(1).to({rotation:-7.6,x:1527.6,y:251.8},0).wait(1).to({rotation:-9.5,x:1525.8,y:249.7},0).wait(1).to({rotation:-7.6,x:1527.6,y:251.8},0).wait(1).to({rotation:-5.7,x:1529.5,y:254},0).wait(1).to({rotation:-3.8,x:1531.4,y:256.2},0).wait(1).to({rotation:-1.9,x:1533.2,y:258.3},0).wait(1).to({rotation:0,x:1535.1,y:260.5},0).wait(29));

	// mask_ice_02 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgjLgXhMBGXABmItIcPIr6E9MggFgAEIljAAInAMVg");
	mask_4.setTransform(1492.3,223.3);

	// cube_2_r_arm
	this.instance_8 = new lib.cube_2_r_arm();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1374.9,264.2,0.998,0.998,52.7,0,0,-40,-31.2);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0.5,regY:0.5,scaleX:1,scaleY:1,rotation:52.1,x:1374.8,y:315.6},0).wait(1).to({rotation:51.5,x:1375.3},0).wait(1).to({rotation:50.8,x:1375.9},0).wait(1).to({rotation:50.2,x:1376.4},0).wait(1).to({rotation:49.6,x:1377},0).wait(1).to({rotation:48.9,x:1377.6},0).wait(1).to({rotation:50.1,x:1376.5,y:305.6},0).wait(1).to({rotation:51.2,x:1375.6,y:295.6},0).wait(1).to({rotation:52.3,x:1374.6,y:285.6},0).wait(1).to({rotation:53.5,x:1373.6,y:275.6},0).wait(1).to({rotation:53.6,x:1373.4,y:283.6},0).wait(1).to({rotation:53.8,x:1373.3,y:291.6},0).wait(1).to({rotation:53.9,x:1373.1,y:299.6},0).wait(1).to({rotation:54.1,x:1373,y:307.6},0).wait(1).to({rotation:54.2,x:1372.9,y:315.6},0).wait(1).to({rotation:54.4,x:1372.8},0).wait(1).to({rotation:54.5,x:1372.7},0).wait(1).to({rotation:54.6,x:1372.5},0).wait(1).to({rotation:54.7,x:1372.4},0).wait(1).to({rotation:54.9,x:1372.3},0).wait(1).to({rotation:55,x:1372.2},0).wait(1).to({rotation:55.1,x:1372.1},0).wait(1).to({rotation:55.2,x:1372},0).wait(1).to({rotation:55.4,x:1371.9,y:315.5},0).wait(1).to({rotation:55.5,x:1371.8},0).wait(1).to({rotation:55.6,x:1371.7},0).wait(1).to({rotation:55.7,x:1371.5},0).wait(1).to({rotation:55.9,x:1371.4},0).wait(1).to({rotation:56,x:1371.3},0).wait(1).to({rotation:56.1,x:1371.2},0).wait(1).to({rotation:56.2,x:1371.1},0).wait(1).to({rotation:56.4,x:1371},0).wait(1).to({rotation:56.5,x:1370.9},0).wait(1).to({rotation:56.6,x:1370.8},0).wait(1).to({rotation:56.7,x:1370.6,y:315.4},0).wait(1).to({rotation:56.9,x:1370.5},0).wait(1).to({rotation:57,x:1370.4},0).wait(1).to({rotation:57.1,x:1370.3},0).wait(1).to({rotation:57.2,x:1370.2},0).wait(1).to({rotation:57.4,x:1370.1},0).wait(1).to({rotation:57.5,x:1369.9},0).wait(1).to({rotation:57.6,x:1369.8,y:315.3},0).wait(1).to({rotation:57.7,x:1369.7},0).wait(1).to({rotation:57.9,x:1369.6},0).wait(1).to({rotation:58,x:1369.5},0).wait(1).to({rotation:58.1,x:1369.4},0).wait(1).to({rotation:58.2,x:1369.2},0).wait(1).to({rotation:58.4,x:1369.1},0).wait(1).to({rotation:58.5,x:1369},0).wait(1).to({rotation:58.6,x:1368.9},0).wait(1).to({rotation:58.7,x:1368.8},0).wait(1).to({rotation:58.9,x:1368.7},0).wait(1).to({rotation:59,x:1368.6},0).wait(1).to({rotation:59.1,x:1368.5,y:315.2},0).wait(1).to({rotation:59.2,x:1368.4},0).wait(1).to({rotation:59.4,x:1368.2},0).wait(1).to({rotation:59.5,x:1368.1},0).wait(1).to({rotation:59.6,x:1368},0).wait(1).to({rotation:59.7,x:1367.9},0).wait(1).to({rotation:59.9,x:1367.8},0).wait(1).to({rotation:60,x:1367.7,y:315.1},0).wait(1).to({rotation:58.9,x:1368.7,y:307.3},0).wait(1).to({rotation:57.8,x:1369.7,y:299.3},0).wait(1).to({rotation:56.7,x:1370.7,y:291.4},0).wait(1).to({rotation:55.6,x:1371.7,y:283.5},0).wait(1).to({rotation:54.4,x:1372.7,y:275.6},0).wait(1).to({rotation:55.6,x:1371.7,y:283.5},0).wait(1).to({rotation:56.7,x:1370.7,y:291.4},0).wait(1).to({rotation:57.8,x:1369.7,y:299.3},0).wait(1).to({rotation:58.9,x:1368.7,y:307.3},0).wait(1).to({rotation:60,x:1367.7,y:315.1},0).wait(1).to({rotation:59.7,x:1367.9,y:315.2},0).wait(1).to({rotation:59.5,x:1368.1},0).wait(1).to({rotation:59.2,x:1368.4},0).wait(1).to({rotation:59,x:1368.6,y:315.3},0).wait(1).to({rotation:58.7,x:1368.8},0).wait(1).to({rotation:58.4,x:1369.1},0).wait(1).to({rotation:58.2,x:1369.3},0).wait(1).to({rotation:57.9,x:1369.6},0).wait(1).to({rotation:57.7,x:1369.8},0).wait(1).to({rotation:57.4,x:1370,y:315.4},0).wait(1).to({rotation:57.1,x:1370.3},0).wait(1).to({rotation:56.9,x:1370.5},0).wait(1).to({rotation:56.6,x:1370.8,y:315.5},0).wait(1).to({rotation:56.4,x:1371},0).wait(1).to({rotation:56.1,x:1371.2},0).wait(1).to({rotation:55.8,x:1371.5},0).wait(1).to({rotation:55.6,x:1371.7},0).wait(1).to({rotation:55.3,x:1371.9,y:315.6},0).wait(1).to({rotation:55.1,x:1372.1},0).wait(1).to({rotation:54.8,x:1372.4},0).wait(1).to({rotation:54.5,x:1372.6},0).wait(1).to({rotation:54.3,x:1372.8},0).wait(1).to({rotation:54,x:1373.1},0).wait(1).to({rotation:53.8,x:1373.3},0).wait(1).to({rotation:53.5,x:1373.5},0).wait(1).to({rotation:53.2,x:1373.8},0).wait(1).to({rotation:53,x:1374},0).wait(1).to({rotation:52.7,x:1374.2},0).wait(1));

	// Layer 14
	this.instance_9 = new lib.cube_2_brrow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1475.9,193.7);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({y:183.7},0).wait(1).to({y:173.7},0).wait(1).to({y:163.7},0).wait(1).to({y:153.7},0).wait(1).to({y:159.7},0).wait(1).to({y:165.7},0).wait(1).to({y:171.7},0).wait(1).to({y:177.7},0).wait(1).to({y:183.7},0).wait(1).to({y:183.9},0).wait(1).to({y:184.1},0).wait(1).to({y:184.4},0).wait(1).to({y:184.6},0).wait(1).to({y:184.8},0).wait(1).to({y:185},0).wait(1).to({y:185.2},0).wait(1).to({y:185.4},0).wait(1).to({y:185.7},0).wait(1).to({y:185.9},0).wait(1).to({y:186.1},0).wait(1).to({y:186.3},0).wait(1).to({y:186.5},0).wait(1).to({y:186.7},0).wait(1).to({y:187},0).wait(1).to({y:187.2},0).wait(1).to({y:187.4},0).wait(1).to({y:187.6},0).wait(1).to({y:187.8},0).wait(1).to({y:188},0).wait(1).to({y:188.3},0).wait(1).to({y:188.5},0).wait(1).to({y:188.7},0).wait(1).to({y:188.9},0).wait(1).to({y:189.1},0).wait(1).to({y:189.4},0).wait(1).to({y:189.6},0).wait(1).to({y:189.8},0).wait(1).to({y:190},0).wait(1).to({y:190.2},0).wait(1).to({y:190.4},0).wait(1).to({y:190.7},0).wait(1).to({y:190.9},0).wait(1).to({y:191.1},0).wait(1).to({y:191.3},0).wait(1).to({y:191.5},0).wait(1).to({y:191.7},0).wait(1).to({y:192},0).wait(1).to({y:192.2},0).wait(1).to({y:192.4},0).wait(1).to({y:192.6},0).wait(1).to({y:192.8},0).wait(1).to({y:193},0).wait(1).to({y:193.3},0).wait(1).to({y:193.5},0).wait(1).to({y:193.7},0).wait(1).to({y:185.7},0).wait(1).to({y:177.7},0).wait(1).to({y:169.7},0).wait(1).to({y:161.7},0).wait(1).to({y:153.7},0).wait(1).to({y:159.5},0).wait(1).to({y:165.3},0).wait(1).to({y:171.1},0).wait(1).to({y:176.9},0).wait(1).to({y:182.7},0).wait(1).to({y:183.1},0).wait(1).to({y:183.5},0).wait(1).to({y:183.9},0).wait(1).to({y:184.3},0).wait(1).to({y:184.7},0).wait(1).to({y:185.1},0).wait(1).to({y:185.5},0).wait(1).to({y:185.8},0).wait(1).to({y:186.2},0).wait(1).to({y:186.6},0).wait(1).to({y:187},0).wait(1).to({y:187.4},0).wait(1).to({y:187.8},0).wait(1).to({y:188.2},0).wait(1).to({y:188.6},0).wait(1).to({y:189},0).wait(1).to({y:189.4},0).wait(1).to({y:189.8},0).wait(1).to({y:190.2},0).wait(1).to({y:190.6},0).wait(1).to({y:191},0).wait(1).to({y:191.3},0).wait(1).to({y:191.7},0).wait(1).to({y:192.1},0).wait(1).to({y:192.5},0).wait(1).to({y:192.9},0).wait(1).to({y:193.3},0).wait(1).to({y:193.7},0).wait(1));

	// cube_2_mouth
	this.instance_10 = new lib.cube_2_mouth_layer();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1475.1,252.2);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:6.8,y:259},0).wait(6).to({y:249},0).wait(1).to({y:239},0).wait(1).to({y:229},0).wait(1).to({y:219},0).wait(1).to({y:227},0).wait(1).to({y:235},0).wait(1).to({y:243},0).wait(1).to({y:251},0).wait(1).to({y:259},0).wait(47).to({y:251},0).wait(1).to({y:243},0).wait(1).to({y:235},0).wait(1).to({y:227},0).wait(1).to({y:219},0).wait(1).to({y:227},0).wait(1).to({y:235},0).wait(1).to({y:243},0).wait(1).to({y:251},0).wait(1).to({y:259},0).wait(29));

	// ice_02
	this.instance_11 = new lib.cube_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1451.8,251);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({y:241},0).wait(1).to({y:231},0).wait(1).to({y:221},0).wait(1).to({y:211},0).wait(1).to({y:219},0).wait(1).to({y:227},0).wait(1).to({y:235},0).wait(1).to({y:243},0).wait(1).to({y:251},0).wait(47).to({y:243},0).wait(1).to({y:235},0).wait(1).to({y:227},0).wait(1).to({y:219},0).wait(1).to({y:211},0).wait(1).to({y:219},0).wait(1).to({y:227},0).wait(1).to({y:235},0).wait(1).to({y:243},0).wait(1).to({y:251},0).wait(29));

	// mask_ice_01 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AxDQyImagEIlYgFMADggh3MA0rAAAIBgcwIu9Ftg");
	mask_5.setTransform(334.3,175.5);

	// ice_01
	this.instance_12 = new lib.cube_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(341.6,230.9,1,1,0,0,0,1.3,1.1);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:1.2,regY:4.3,x:341.5,y:234.1},0).wait(17).to({y:228.1},0).wait(1).to({y:222.1},0).wait(1).to({y:216.1},0).wait(1).to({y:210.1},0).wait(1).to({y:204.1},0).wait(1).to({y:210.1},0).wait(1).to({y:216.1},0).wait(1).to({y:222.1},0).wait(1).to({y:228.1},0).wait(1).to({y:234.1},0).wait(36).to({y:228.1},0).wait(1).to({y:222.1},0).wait(1).to({y:216.1},0).wait(1).to({y:210.1},0).wait(1).to({y:204.1},0).wait(1).to({y:210.1},0).wait(1).to({y:216.1},0).wait(1).to({y:222.1},0).wait(1).to({y:228.1},0).wait(1).to({y:234.1},0).wait(28));

	// mask_ice_09 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EgtqAWzIElm8MgJUgqLMBQ8AIzIT3PhMg3LASOI+BgTIgmKag");
	mask_6.setTransform(1721.2,126.8);

	// cube_9_mouth
	this.instance_13 = new lib.cube_9_mouth();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1621.5,183.1,2.25,1.913);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({scaleX:2.07,scaleY:2.01,y:183},0).wait(1).to({scaleX:1.9,scaleY:2.11},0).wait(1).to({scaleX:1.72,scaleY:2.21},0).wait(1).to({scaleX:1.54,scaleY:2.31},0).wait(1).to({scaleX:1.37,scaleY:2.4},0).wait(1).to({scaleX:1.53,scaleY:2.05},0).wait(1).to({scaleX:1.7,scaleY:1.7,y:183.1},0).wait(1).to({scaleX:1.87,scaleY:1.34},0).wait(1).to({scaleX:2.04,scaleY:0.99},0).wait(1).to({scaleX:2.06,scaleY:1.29},0).wait(1).to({scaleX:2.08,scaleY:1.59},0).wait(1).to({scaleX:2.1,scaleY:1.89},0).wait(1).to({scaleX:2.12,scaleY:2.19,y:183},0).wait(1).to({scaleX:2.14,scaleY:2.49},0).wait(1).to({scaleX:2.15,scaleY:2.39},0).wait(1).to({scaleX:2.17,scaleY:2.3},0).wait(1).to({scaleX:2.19,scaleY:2.2},0).wait(1).to({scaleX:2.21,scaleY:2.1},0).wait(1).to({scaleX:2.23,scaleY:2.01},0).wait(1).to({scaleX:2.25,scaleY:1.91,y:183.1},0).wait(36).to({scaleX:2.07,scaleY:2.01,y:183},0).wait(1).to({scaleX:1.9,scaleY:2.11},0).wait(1).to({scaleX:1.72,scaleY:2.21},0).wait(1).to({scaleX:1.54,scaleY:2.31},0).wait(1).to({scaleX:1.37,scaleY:2.4},0).wait(1).to({scaleX:1.53,scaleY:2.05},0).wait(1).to({scaleX:1.7,scaleY:1.7,y:183.1},0).wait(1).to({scaleX:1.87,scaleY:1.34},0).wait(1).to({scaleX:2.04,scaleY:0.99},0).wait(1).to({scaleX:2.06,scaleY:1.29},0).wait(1).to({scaleX:2.08,scaleY:1.59},0).wait(1).to({scaleX:2.1,scaleY:1.89},0).wait(1).to({scaleX:2.12,scaleY:2.19,y:183},0).wait(1).to({scaleX:2.14,scaleY:2.49},0).wait(1).to({scaleX:2.15,scaleY:2.39},0).wait(1).to({scaleX:2.17,scaleY:2.3},0).wait(1).to({scaleX:2.19,scaleY:2.2},0).wait(1).to({scaleX:2.21,scaleY:2.1},0).wait(1).to({scaleX:2.23,scaleY:2.01},0).wait(1).to({scaleX:2.25,scaleY:1.91,y:183.1},0).wait(21));

	// ice_09
	this.instance_14 = new lib.cube_9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1623.5,265.8,1,1,0,0,0,0,115.1);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:-12,regY:5,x:1611.5,y:155.7},0).wait(4).to({scaleX:0.99,scaleY:1.01,x:1611.7,y:154.1},0).wait(1).to({scaleX:0.97,scaleY:1.03,x:1611.8,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:1612,y:151.2},0).wait(1).to({scaleX:0.94,scaleY:1.05,x:1612.2,y:149.7},0).wait(1).to({scaleX:0.93,scaleY:1.07,x:1612.4,y:148.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:1611.6,y:153.4},0).wait(1).to({scaleX:1.05,scaleY:0.97,x:1610.8,y:158.5},0).wait(1).to({scaleX:1.12,scaleY:0.93,x:1610.1,y:163.7},0).wait(1).to({scaleX:1.18,scaleY:0.88,x:1609.3,y:168.8},0).wait(1).to({scaleX:1.14,scaleY:0.9,x:1609.8,y:166.1},0).wait(1).to({scaleX:1.11,scaleY:0.93,x:1610.2,y:163.5},0).wait(1).to({scaleX:1.07,scaleY:0.95,x:1610.6,y:160.9},0).wait(1).to({scaleX:1.04,scaleY:0.98,x:1611,y:158.3},0).wait(1).to({scaleX:1,scaleY:1,x:1611.5,y:155.7},0).wait(42).to({scaleX:0.99,scaleY:1.01,x:1611.7,y:154.1},0).wait(1).to({scaleX:0.97,scaleY:1.03,x:1611.8,y:152.7},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:1612,y:151.2},0).wait(1).to({scaleX:0.94,scaleY:1.05,x:1612.2,y:149.7},0).wait(1).to({scaleX:0.93,scaleY:1.07,x:1612.4,y:148.2},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:1611.6,y:153.4},0).wait(1).to({scaleX:1.05,scaleY:0.97,x:1610.8,y:158.5},0).wait(1).to({scaleX:1.12,scaleY:0.93,x:1610.1,y:163.7},0).wait(1).to({scaleX:1.18,scaleY:0.88,x:1609.3,y:168.8},0).wait(1).to({scaleX:1.14,scaleY:0.9,x:1609.8,y:166.1},0).wait(1).to({scaleX:1.11,scaleY:0.93,x:1610.2,y:163.5},0).wait(1).to({scaleX:1.07,scaleY:0.95,x:1610.6,y:160.9},0).wait(1).to({scaleX:1.04,scaleY:0.98,x:1611,y:158.3},0).wait(1).to({scaleX:1,scaleY:1,x:1611.5,y:155.7},0).wait(27));

	// mask_ice_08 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("EglwAVaIgMqDMAIAgg7MA3WAAgIMjP0Mgl0ARhI5egnIACJ7g");
	mask_7.setTransform(1394.9,154.6);

	// ice_08
	this.instance_15 = new lib.cube_8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1334,169.5);

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({y:159.5},0).wait(1).to({y:149.5},0).wait(1).to({y:139.5},0).wait(1).to({y:129.5},0).wait(1).to({y:137.5},0).wait(1).to({y:145.5},0).wait(1).to({y:153.5},0).wait(1).to({y:161.5},0).wait(1).to({y:169.5},0).wait(47).to({y:161.5},0).wait(1).to({y:153.5},0).wait(1).to({y:145.5},0).wait(1).to({y:137.5},0).wait(1).to({y:129.5},0).wait(1).to({y:137.5},0).wait(1).to({y:145.5},0).wait(1).to({y:153.5},0).wait(1).to({y:161.5},0).wait(1).to({y:169.5},0).wait(24));

	// mask_ice_07 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("EggHAQBMgAgghyMAgWgGCMAg5AXhI9LQcI49gGIgOG+IqrAzg");
	mask_8.setTransform(1077.2,127.2);

	// ice_07
	this.instance_16 = new lib.cube_07();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1036.4,242,1,1,0,0,0,10.9,108.8);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:0,regY:0,x:1025.5,y:133.2},0).wait(11).to({scaleX:0.99,scaleY:1.01,x:1025.7,y:131.7},0).wait(1).to({scaleX:0.97,scaleY:1.03,x:1025.8,y:130.3},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:1026,y:128.8},0).wait(1).to({scaleX:0.94,scaleY:1.05,x:1026.1,y:127.3},0).wait(1).to({scaleX:0.93,scaleY:1.07,x:1026.3,y:125.9},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:1025.6,y:131},0).wait(1).to({scaleX:1.05,scaleY:0.97,x:1024.9,y:136},0).wait(1).to({scaleX:1.12,scaleY:0.93,x:1024.2,y:141.1},0).wait(1).to({scaleX:1.18,scaleY:0.88,x:1023.6,y:146.2},0).wait(1).to({scaleX:1.14,scaleY:0.9,x:1023.9,y:143.6},0).wait(1).to({scaleX:1.11,scaleY:0.93,x:1024.3,y:141},0).wait(1).to({scaleX:1.07,scaleY:0.95,x:1024.7,y:138.4},0).wait(1).to({scaleX:1.04,scaleY:0.98,x:1025.1,y:135.8},0).wait(1).to({scaleX:1,scaleY:1,x:1025.5,y:133.2},0).wait(42).to({scaleX:0.99,scaleY:1.01,x:1025.7,y:131.7},0).wait(1).to({scaleX:0.97,scaleY:1.03,x:1025.8,y:130.3},0).wait(1).to({scaleX:0.96,scaleY:1.04,x:1026,y:128.8},0).wait(1).to({scaleX:0.94,scaleY:1.05,x:1026.1,y:127.3},0).wait(1).to({scaleX:0.93,scaleY:1.07,x:1026.3,y:125.9},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:1025.6,y:131},0).wait(1).to({scaleX:1.05,scaleY:0.97,x:1024.9,y:136},0).wait(1).to({scaleX:1.12,scaleY:0.93,x:1024.2,y:141.1},0).wait(1).to({scaleX:1.18,scaleY:0.88,x:1023.6,y:146.2},0).wait(1).to({scaleX:1.14,scaleY:0.9,x:1023.9,y:143.6},0).wait(1).to({scaleX:1.11,scaleY:0.93,x:1024.3,y:141},0).wait(1).to({scaleX:1.07,scaleY:0.95,x:1024.7,y:138.4},0).wait(1).to({scaleX:1.04,scaleY:0.98,x:1025.1,y:135.8},0).wait(1).to({scaleX:1,scaleY:1,x:1025.5,y:133.2},0).wait(20));

	// mask_ice_06 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("A9mMPID3/zMAotgAGIPhV1I3uJ7I6XAGIg0HGIqEAZg");
	mask_9.setTransform(786.6,150.6);

	// ice_06
	this.instance_17 = new lib.cube_06();
	this.instance_17.parent = this;
	this.instance_17.setTransform(762.8,162.1,1,1,0,0,0,-0.3,0.8);

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:0,regY:0,x:763.1,y:161.3},0).wait(28).to({y:155.3},0).wait(1).to({y:149.3},0).wait(1).to({y:143.3},0).wait(1).to({y:137.3},0).wait(1).to({y:131.3},0).wait(1).to({y:137.3},0).wait(1).to({y:143.3},0).wait(1).to({y:149.3},0).wait(1).to({y:155.3},0).wait(1).to({y:161.3},0).wait(36).to({y:155.3},0).wait(1).to({y:149.3},0).wait(1).to({y:143.3},0).wait(1).to({y:137.3},0).wait(1).to({y:131.3},0).wait(1).to({y:137.3},0).wait(1).to({y:143.3},0).wait(1).to({y:149.3},0).wait(1).to({y:155.3},0).wait(1).to({y:161.3},0).wait(17));

	// mask_ice_05 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("A/0UaInBt1IKP1lMAoqgH+IaybqMgiFAKhI5+gNIgcH/g");
	mask_10.setTransform(542.8,125.6);

	// ice_05
	this.instance_18 = new lib.cube_05_layer();
	this.instance_18.parent = this;
	this.instance_18.setTransform(537.7,161.2,1,1,0,0,0,30,-0.1);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:0,regY:0,x:507.7,y:163.4},0).wait(1).to({y:165.5},0).wait(1).to({y:167.7},0).wait(1).to({y:169.8},0).wait(1).to({y:172},0).wait(1).to({y:174.1},0).wait(1).to({y:176.2},0).wait(1).to({y:178.4},0).wait(1).to({y:180.5},0).wait(1).to({y:182.7},0).wait(1).to({y:184.8},0).wait(1).to({y:179.5},0).wait(1).to({y:174.3},0).wait(1).to({y:169},0).wait(1).to({y:163.7},0).wait(1).to({y:158.5},0).wait(1).to({y:153.2},0).wait(1).to({y:147.9},0).wait(1).to({y:142.7},0).wait(1).to({y:147.3},0).wait(1).to({y:152},0).wait(1).to({y:156.7},0).wait(1).to({y:161.4},0).wait(1).to({y:166.1},0).wait(1).to({y:170.8},0).wait(1).to({y:175.4},0).wait(1).to({y:180.1},0).wait(1).to({y:184.8},0).wait(12).to({y:179.5},0).wait(1).to({y:174.3},0).wait(1).to({y:169},0).wait(1).to({y:163.7},0).wait(1).to({y:158.5},0).wait(1).to({y:153.2},0).wait(1).to({y:147.9},0).wait(1).to({y:142.7},0).wait(1).to({y:145.2},0).wait(1).to({y:147.7},0).wait(1).to({y:150.2},0).wait(1).to({y:152.7},0).wait(1).to({y:155.2},0).wait(1).to({y:157.7},0).wait(1).to({y:160.2},0).wait(1).to({y:162.7},0).wait(1).to({y:165.2},0).wait(27).to({y:162.7},0).wait(1).to({y:160.2},0).wait(1).to({y:157.7},0).wait(1).to({y:155.2},0).wait(1).to({y:152.7},0).wait(1).to({y:150.2},0).wait(1).to({y:147.7},0).wait(1).to({y:145.2},0).wait(1).to({y:142.7},0).wait(1).to({y:145},0).wait(1).to({y:147.3},0).wait(1).to({y:149.6},0).wait(1).to({y:152},0).wait(1).to({y:154.3},0).wait(1).to({y:156.6},0).wait(1).to({y:158.9},0).wait(1).to({y:161.3},0).wait(1));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#142644").s().p("A1yJjIACiuMAnCgQXIEhDbMgp7APqg");
	this.shape.setTransform(1682.9,257.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#142644").s().p("EhvZAAVIBcjMMDdXADFIh8Cqg");
	this.shape_1.setTransform(853.4,300.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C192B").s().p("EhwUABBIAnkFMDgCAAnIirFjg");
	this.shape_2.setTransform(835.7,322.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#142644").s().p("EhjNAK6IAA1zMDGbACEIAATvg");
	this.shape_3.setTransform(849.8,388.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C192B").s().p("A6LCTIKTkrMAqEgARIwEFTg");
	this.shape_4.setTransform(1625.9,213.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C192B").s().p("A5SCJIKPlLMAoWAAZIsgFsg");
	this.shape_5.setTransform(1313.9,213.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C192B").s().p("A3SC7IM4lsMAhtgARIrBGFg");
	this.shape_6.setTransform(1020.7,211);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C192B").s().p("AnoipMAghgARItaFsMgkXAAJg");
	this.shape_7.setTransform(756.4,210.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C192B").s().p("A2kCKIOFkIIfEgaIvjExg");
	this.shape_8.setTransform(528.3,207.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C192B").s().p("A7GDtIQHndMAmGAAQIyTHRg");
	this.shape_9.setTransform(1501,271.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C192B").s().p("A56DPIMYm+MAndAAhIu9G+g");
	this.shape_10.setTransform(1216,269.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C192B").s().p("A44DgIOGnXMAjsAASIsYHdg");
	this.shape_11.setTransform(927,267);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C192B").s().p("A7JDVIRSnFMAlBAAAIuRHhg");
	this.shape_12.setTransform(642.7,264.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C192B").s().p("A9hDMIYnmyMAicAAAIzBHNg");
	this.shape_13.setTransform(352.7,263.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#142644").s().p("EBd0AKpMjmzgB+QghgBgWgVQgUgTgEgeQgEgdAOgYQAQgaAggJMA71gQyQAKgDAMAAMDV/AARQCOBjhTCJQgeAyg2AsQgvAmglANMgo5APAQgOAFgMAAIgCgBg");
	this.shape_14.setTransform(957.5,246.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C192B").s().p("AllB8IA+kTIKNBFIAADrg");
	this.shape_15.setTransform(103,308.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C192B").s().p("EiJLAKMQgigBgagTQgXgRgJgZQgJgbALgVQAMgYAggIMA9ZgQ9QAKgDAMAAMDJnAAtIjPj7IQXBjIAHEmQgTAlhgAzQhkA1gHAMMgn/AP6QgNAEgPAAg");
	this.shape_16.setTransform(955.2,264.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0E1E30").s().p("AxunAMAq3gNdIogaNMgpxAOug");
	this.shape_17.setTransform(1660.3,363.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#142644").s().p("Eh61AHrQgeAAgTgTQgSgRgEgaQgDgaANgVQAOgXAcgJMA09gO2QAJgDAKABMC9cAAZQAdAAA6AfQA1AdA1AqQA2AsAWAgQAZAlgaAKMgp7AO3QgMAEgNAAg");
	this.shape_18.setTransform(972.8,436.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#142644").s().p("Ehk9AMDIsq5oMDjPABjIopZog");
	this.shape_19.setTransform(825.5,403.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1022.2,275.6,1775.6,478.8);
// library properties:
lib.properties = {
	id: 'C26D35BDAD00487184658132441DA792',
	width: 1910,
	height: 515,
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
an.compositions['C26D35BDAD00487184658132441DA792'] = {
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