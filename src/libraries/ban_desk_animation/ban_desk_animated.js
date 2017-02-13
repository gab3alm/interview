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


(lib.r_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2).p("AjjgRQABhRA4g5QA4g6BPAEQAtACAhAlQAIAIA4BSQAWgrARgLQAVgNAmANQAUAIADAkQACAjgRAqQgTAsgeAjQAGAEADAFQALATgWAfQgXAggrAYQgqAZgmAEQglAEgMgTQgFgJADgNIAAAAQhTgBg3g4Qg3g3ABhOg");
	this.shape.setTransform(22.8,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AghDDQgFgJADgNIAAAAQhTgBg3g4Qg3g3ABhOQABhRA4g5QA4g6BPAEQAtACAhAlQAIAIA4BSQAWgrARgLQAVgNAmANQAUAIADAkQACAjgRAqQgTAsgeAjQAGAEADAFQALATgWAfQgXAggrAYQgqAZgmAEIgNAAQgaAAgKgPg");
	this.shape_1.setTransform(22.8,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.4,54,45.5);


(lib.r_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.r_arm, null, null);


(lib.paper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AgegnIA9AAIAABPIg9AAg");
	this.shape.setTransform(8,-9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhlBwIAAgJIDLAAIAAAJgAhlBaIAAgJIDLAAIAAAJgAhlBEIAAgJIDLAAIAAAJgAhlArIAAgJIDLAAIAAAJgAhlAVIAAgJIDLAAIAAAJgAhlAAIAAgJIDLAAIAAAJgAhlgjIAAgJIB4AAIAAAJgAhlg3IAAgJIB4AAIAAAJgAhlhLIAAgJIB4AAIAAAJgAhlhnIAAgJIAiAAIAAAJg");
	this.shape_1.setTransform(0.9,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiGCnIAAlNIENAAIAAFNgAhdBeIDMAAIAAgJIjMAAgAhdBIIDMAAIAAgJIjMAAgAhdAxIDMAAIAAgJIjMAAgAhdAYIDMAAIAAgJIjMAAgAhdACIDMAAIAAgIIjMAAgAhdgTIDMAAIAAgJIjMAAgAAxg2IA+AAIAAhQIg+AAIA+AAIAABQIg+AAIAAhQIAABQgAhdg2IB5AAIAAgJIh5AAgAhdhKIB5AAIAAgJIh5AAgAhdheIB5AAIAAgJIh5AAgAhdh6IAjAAIAAgIIgjAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paper, new cjs.Rectangle(-13.5,-16.7,27,33.5), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C55C64").s().p("AAAB4QhSgBg5gkQg2gigMgxQgQg8AfgbQAtgmCSAHQCOAHAqAcQAmAZgQA9QgOAyg2AhQg4AihQAAIgDAAg");
	this.shape.setTransform(21.1,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C55C64").s().p("AgCCIQhRAAg5gyQg1gsgMg6QgPg9AfgaQAsgmCSAHQCOAHAqAcQAlAYgPA/QgNA3g3AtQg7AwhQAAIgCAAg");
	this.shape_1.setTransform(21.1,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C55C64").s().p("AgDCZQhRgBg5g/Qg1g3gLhDQgOg9AegaQAsgmCSAIQCNAHAqAcQAlAYgOA+QgNA9g4A6Qg8A/hPAAIgCAAg");
	this.shape_2.setTransform(21.1,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C55C64").s().p("AgFCpQhQgBg5hNQg0hCgLhKQgNg+AegZQArgmCSAHQCNAHAqAcQAkAYgNA/QgMBDg5BGQg+BNhPAAIgCAAg");
	this.shape_3.setTransform(21.1,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C55C64").s().p("AgGC5QhQAAg6hbQgzhNgKhTQgMg+AdgZQArgmCSAIQCNAHApAbQAkAYgMA/QgLBKg6BSQhABbhPAAIgBAAg");
	this.shape_4.setTransform(21.1,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C55C64").s().p("AgIDKQhPgBg6hoQgzhYgJhbQgLg/AcgYQArgmCSAHQCNAHApAcQAjAXgLBAQgLBPg7BfQhBBqhOAAIgCAAg");
	this.shape_5.setTransform(21.1,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C55C64").s().p("AgJDaQhPAAg6h2QgyhigJhkQgKg/AcgYQArgmCRAHQCMAHApAcQAjAXgKBAQgKBWg8BqQhDB4hOAAIgBAAg");
	this.shape_6.setTransform(21.1,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C55C64").s().p("AgLDrQhPgBg5iDQgyhsgJhuQgIg/AbgYQAqgmCSAIQCMAHAoAbQAjAXgKBAQgJBdg9B2QhECHhNAAIgCAAg");
	this.shape_7.setTransform(21.2,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C55C64").s().p("AgMD7QhPgBg5iRQgyh3gIh1QgHhAAagYQAqglCSAHQCMAHAoAcQAiAWgJBBQgJBig+CDQhFCVhNAAIgBAAg");
	this.shape_8.setTransform(21.2,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C55C64").s().p("AgOELQhOAAg5ifQgxiBgIh+QgGhBAagXQAqglCRAHQCLAHAoAcQAiAWgIBBQgIBog/CPQhHCjhNAAIgBAAg");
	this.shape_9.setTransform(21.2,26.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C55C64").s().p("AgPEcQhOgBg5isQgxiMgHiHQgFhBAZgWQAqgmCRAIQCLAHAoAbQAhAWgHBBQgIBvhACbQhICyhMAAIgBAAg");
	this.shape_10.setTransform(21.2,28.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C55C64").s().p("AgREsQhNAAg6i6QgwiXgGiPQgEhCAYgWQAqglCRAHQCLAHAnAbQAhAXgGBBQgHB1hBCnQhKDAhMAAIgBAAg");
	this.shape_11.setTransform(21.2,30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C55C64").s().p("AgSE8QhNAAg6jIQgviigGiXQgDhCAYgVQApgmCRAIQCLAHAnAbQAgAWgFBBQgGB7hCC0QhLDOhMAAIgBAAg");
	this.shape_12.setTransform(21.2,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C55C64").s().p("AgUFNQhMgBg6jVQgvitgFifQgChDAXgVQApglCRAHQCKAHAnAbQAgAWgEBCQgGCBhDC/QhMDehMAAIgBAAg");
	this.shape_13.setTransform(21.2,33.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C55C64").s().p("AgVFdQhMAAg6jjQgui3gFioQgBhDAXgVQAoglCRAHQCKAHAnAbQAfAWgDBCQgFCHhEDMQhODrhLAAIgBAAg");
	this.shape_14.setTransform(21.2,34.9);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(83).to({_off:false},0).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(14).to({_off:false},0).wait(63).to({_off:true},1).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,24);


(lib.l_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2).p("AiuhUQATgTAggQQAfgPAdgFQgSgMACgNQACgUApgLQAogKA4AFQA5AGAmARQAnASgCAUQgCARghALQBSA1gfCOQgQBLhOAdQhDAYhPgPQhCgNgYgnQgXgmALhJQgVAKgSgBQgTgBgLgLQgSgSAIghQAJgiAegeg");
	this.shape.setTransform(21.6,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AggDFQhCgNgYgnQgXgmALhJQgVAKgSgBQgTgBgLgLQgSgSAIghQAJgiAegeQATgTAggQQAfgPAdgFQgSgMACgNQACgUApgLQAogKA4AFQA5AGAmARQAnASgCAUQgCARghALQBSA1gfCOQgQBLhOAdQgpAPguAAQgcAAgfgGg");
	this.shape_1.setTransform(21.6,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_hand, new cjs.Rectangle(-1,-3.7,45.3,47.2), null);


(lib.l_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AgRGiQgDgeAKhRQAdjugLh3QgKiBhJixQgYg5AAgTQABgZAlgBQAZAAAiBOQAoBcApC0QAoCvglDQQgNBOgVA3QgTAzgMAAIAAAAQgdAAgFgpg");
	this.shape.setTransform(10,45.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_arm, new cjs.Rectangle(0,0,20,91.8), null);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AgCBAQgbgBgSgUQgRgUABgZQACgbATgSQAUgRAaABQAaACASATQARAUgBAaQgBAagUASQgSAQgYAAIgDAAg");
	this.shape.setTransform(6.4,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AgCBAQgbgCgSgTQgRgUABgaQACgaATgSQAUgRAaABQAaABASAUQARAUgBAZQgBAbgUASQgSAQgYAAIgDAAg");
	this.shape_1.setTransform(97.1,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AHCBvQgagCgSgUQgSgTACgbQABgaAUgRQAUgSAaACQAaABASATQASAUgCAaQgBAagUATQgSAQgYAAIgEAAgAnIARQgagBgSgTQgSgTACgbQABgbAUgRQAUgSAaABQAbACARATQASAVgBAaQgCAagUARQgSAQgYAAIgEAAg");
	this.shape_2.setTransform(51.7,11.1);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AHDBeQgYgCgRgOQgRgQgDgUIAAAAQADgJAGgIQAegYATgBIAJAAQAXABASAOQARAPACATQgEAUgTANQgRAMgVAAIgFAAgAnHABIgCAAQgXgBgQgPQgRgPgDgUQADgKAGgIQAGgIAJgGQARgMAVABIAFAAQAYABARAPQAQAOAEATIAAABQgFAUgTANQgRALgWAAIgEAAg");
	this.shape_3.setTransform(51.7,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AHEBOQgVgBgRgKQgQgLgIgOIAAAAQAEgFAHgFQAegOARgBIAJAAQAVABAQAKQARAJAGAMQgIANgSAJQgQAHgSAAIgFAAgAnGgOIgCAAQgUgCgQgKQgRgKgHgOQAFgGAHgFIAOgJQARgHATAAIAEAAQAWACAQAKQAQAJAIAMIgBABQgIANgSAJQgPAHgRAAIgHAAg");
	this.shape_4.setTransform(51.7,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AHFA9QgSgBgQgFQgRgGgLgHIgBAAIANgDQAegFAQAAIAHAAQATABAQAEQAPAFALAFQgMAGgRADQgMADgNAAIgKAAgAnFgeIgCAAQgSgCgPgFQgRgGgLgHIAOgFIAPgDQAPgDARABIAEAAQATABARAFQAQAFALAFIgBABQgMAGgRAEQgNADgOAAIgIAAg");
	this.shape_5.setTransform(51.7,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AgCADQgWgBgWgCIgRgDIA+ADIBBADIgcABIgmgBg");
	this.shape_6.setTransform(6.4,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AgEAEQgWgBgVgDIgQgEIB/AGQgXADgXAAIgWgBg");
	this.shape_7.setTransform(97.1,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AHBAzQgWgBgVgEIgQgEIB/AHQgWACgXAAIgXAAgAnHgsQgWgBgWgDIgRgCIA+AEIBCADIgcAAIgngBg");
	this.shape_8.setTransform(51.7,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AHFA9QgSgBgQgFQgRgGgMgHIANgDQAegFAQAAIAHAAQATABAQAEQAPAFALAFQgMAGgRADQgMADgNAAIgKAAgAnFgeIgCAAQgSgCgPgFQgRgGgLgHIAOgFIAPgDQAPgDARABIAEAAQATABARAFQAQAFALAFIgBABQgMAGgRAEQgNADgOAAIgIAAg");
	this.shape_9.setTransform(51.7,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AHEBOQgVgBgRgKQgRgLgHgOQAEgFAHgFQAegOARgBIAJAAQAVABAQAKQARAJAGAMQgIANgSAJQgQAHgSAAIgFAAgAnGgOIgCAAQgUgCgQgKQgRgKgHgOQAFgGAHgFIAOgJQARgHATAAIAEAAQAWACAQAKQAQAJAIAMIgBABQgIANgSAJQgPAHgRAAIgHAAg");
	this.shape_10.setTransform(51.7,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("AHDBeQgYgCgRgOQgRgQgDgUQADgJAGgIQAegYATgBIAJAAQAXABASAOQARAPACATQgEAUgTANQgRAMgVAAIgFAAgAnHABIgCAAQgXgBgQgPQgRgPgDgUQADgKAGgIQAGgIAJgGQARgMAVABIAFAAQAYABARAPQAQAOAEATIAAABQgFAUgTANQgRALgWAAIgEAAg");
	this.shape_11.setTransform(51.7,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).wait(87).to({_off:true},1).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.5,22.1);


(lib.dr_ban_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape.setTransform(9.3,1.7,0.58,0.58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgZAaQgKgLAAgPQAAgOAKgKQAMgLANAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgNAAgMgKg");
	this.shape_1.setTransform(-9.4,-1.6,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dr_ban_eyes, new cjs.Rectangle(-11.4,-3.7,22.9,7.5), null);


(lib.dr_ban_brrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAhARIghgQIgigLQgPgFACgDQACgEAPADQAQADASAIQAUAIANAIQANAJgCAEQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgEAAgJgFg");
	this.shape.setTransform(8.8,1.3,0.58,0.58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAmAGIgmgCIglACQgQABAAgDQAAgEAQgCQAQgEAVAAQAWAAAQAEQAQACAAAEQAAADgJAAIgHgBg");
	this.shape_1.setTransform(-8.4,-2.1,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dr_ban_brrows, new cjs.Rectangle(-11.5,-2.4,23.2,5), null);


(lib.ban_l_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(1.2).p("ABQh7Qg1glhNBtQgZgsglAJQgcAHAGAkQACAQASAsQAEAMAIAMQgMAAgDAFQgFAIAPASQAPATAbARQAbARAXAGQAWAGAFgJQAEgGgHgLQAegFAfgUQAegVATgbQAbgmgPgzQgOguglgag");
	this.shape.setTransform(12,-3.4,0.58,0.58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8ECEE").s().p("AgPCDQgXgGgbgRQgbgRgPgTQgPgSAFgIQADgFAMAAQgIgMgEgMQgSgsgCgQQgGgkAcgHQAlgJAZAsQBNhtA1AlQAlAaAOAuQAPAzgbAmQgTAbgeAVQgfAUgeAFQAHALgEAGQgDAFgJAAQgGAAgJgCg");
	this.shape_1.setTransform(12,-3.4,0.58,0.58);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AiuBcQgsgVghgdQgdgZAEgHQAOgSAiANQAHADBDAmQB1BCBLgnQBigzA/hTIAjgvQARgSASACQANACgIAXQgIAYgbAhQhEBUhwA5QgyAag1AAQg+AAhEghg");
	this.shape_2.setTransform(-3.8,3.9,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ban_l_arm, new cjs.Rectangle(-19.8,-12.1,41.4,23.3), null);


(lib.tanner_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(-17.3,-20.5,0.444,0.444,0,0,0,48.3,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.7,regY:11,x:-15.8,y:-18.9},0).wait(25).to({x:-15.6,y:-17.8},0).wait(1).to({x:-15.4,y:-16.6},0).wait(1).to({x:-15.2,y:-15.5},0).wait(1).to({x:-15,y:-14.4},0).wait(1).to({x:-14.8,y:-13.2},0).wait(1).to({x:-14.6,y:-12.1},0).wait(9).to({x:-14.7,y:-12.4},0).wait(1).to({x:-14.8,y:-12.8},0).wait(1).to({x:-14.9,y:-13.1},0).wait(1).to({x:-15,y:-13.4},0).wait(1).to({x:-15.1,y:-13.8},0).wait(1).to({x:-15.2,y:-14.1},0).wait(1).to({x:-15.3,y:-14.4},0).wait(1).to({x:-15.4,y:-14.8},0).wait(1).to({x:-15.5,y:-15.1},0).wait(1).to({x:-15.6,y:-15.4},0).wait(1).to({x:-15.7,y:-15.8},0).wait(1).to({x:-15.8,y:-16.1},0).wait(12).to({y:-16.5},0).wait(1).to({y:-16.9},0).wait(1).to({y:-17.3},0).wait(1).to({y:-17.7},0).wait(1).to({y:-18.1},0).wait(1).to({y:-18.5},0).wait(1).to({y:-18.9},0).wait(56));

	// Layer 1
	this.instance_1 = new lib.mouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.3,-3.7,0.444,0.129,0,0,0,21.2,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("Ah5AhQgCgMAggUQAlgXAwgIQAvgHArALQAlAKABALQABAFgkgGQgygJgoAHQgoAGgtAWQgaAOgFAAIgCgBg");
	this.shape.setTransform(-32.6,-30.4,0.444,0.444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("ABYAcQgogegngNQgmgNg0ADQglACABgEQAEgLAmgGQAugGAtAPQAuAPAgAdQAcAagEALIgBABQgFAAgYgTg");
	this.shape_1.setTransform(7.9,-28,0.444,0.444);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3753A").s().p("ApiNIQjlhsiZi9QCSCBC5BGQDABJDRAAQDYAADFhOQC+hLCTiKQCTiJBRiyQBUi4AAjJQAAjnhsjOQhqjHi7iLQEMCBCgDsQCkDzAAEfQAADMhXC7QhTC1iZCMQiYCMjGBMQjMBQjfAAQkLAAjshwg");
	this.shape_2.setTransform(-2.1,-0.8,0.444,0.444);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA983E").s().p("Ai9GdQhYgihDg+QhEg+gmhRQgmhTAAhbQAAhaAmhUQAmhPBEg/QBDg+BYgiQBagjBjAAQBkAABaAjQBYAiBEA+QBEA/AkBPQAnBUAABaQAABbgnBTQgkBRhEA+QhEA+hYAiQhaAjhkAAQhjAAhagjg");
	this.shape_3.setTransform(-6.9,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AhGFHQgggBgxgJQhOgNBGgsQB3g+BFgoQAVgLAZjQQAdjvAIgbQAzABAGABQAYAFAAAVIgJGmIgCBfQgFBIgWANQgSAKgvAHQguAIgvAAQg1AAgOgBg");
	this.shape_4.setTransform(-29.1,49.9,0.444,0.444);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AiLFOQhPgFBCgzQBwhJBBguQAUgOAFjRQAGjxAGgcQA0gDAFAAQAYADACAVIAfGlIAHBeQACBJgVAOQgRAMgtAMQgvAMguAFQgzAFgPABIgQAAQgcAAgmgDg");
	this.shape_5.setTransform(-1.3,52.8,0.444,0.444);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E914D").s().p("AggBPIgIihIBRAPIgNCWg");
	this.shape_6.setTransform(0.9,-50.2,0.444,0.444);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E914D").s().p("AgJD2QkcghjXhjQjdhmAMhkQANhwBZghQBqgmEFAuQB1AUCVBCQAcANDfBtQCPBFBUAWQBzAfBRgeQA5gWg+AjQg+AjhiAkQj3BcjGAAQgwAAgrgFg");
	this.shape_7.setTransform(23.9,-56.6,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-67.7,111.7,135.5);


(lib.r_entire_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.r_hand();
	this.instance.parent = this;
	this.instance.setTransform(39.7,90.7,0.997,0.997,0,125.8,-54.2,29.9,35.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Layer 1
	this.ikNode_1 = new lib.r_arm();
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(46.4,16.1,1,1,0,125.8,-54.2,76.5,54.9);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.4,67.6,68.3,70.1);


(lib.l_entire_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l_hand();
	this.instance.parent = this;
	this.instance.setTransform(21.6,79.2,1,1,0,0,0,21.6,19.9);

	this.instance_1 = new lib.l_arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.4,45.9,1,1,0,0,0,10,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_entire_arm, new cjs.Rectangle(-1,0,45.3,102.8), null);


(lib.folder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// folder_light
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9BE49").s().p("AibC+IAAl7IE3AAIAABNIgPAYIAAEWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(125));

	// paper copy
	this.instance = new lib.paper();
	this.instance.parent = this;
	this.instance.setTransform(1.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125));

	// paper
	this.instance_1 = new lib.paper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:0.8},0).wait(4).to({y:0.7},0).wait(3).to({y:0.6},0).wait(4).to({y:0.5},0).wait(3).to({y:0.4},0).wait(3).to({y:0.3},0).wait(4).to({y:0.2},0).wait(3).to({y:0.1},0).wait(4).to({y:0},0).wait(2).to({x:11.8,y:4.4},0).wait(1).to({x:22.9,y:6.6},0).wait(1).to({x:34.1,y:6.8},0).wait(1).to({x:45.3,y:5.1},0).wait(1).to({x:55.8,y:1.1},0).wait(1).to({x:64.2,y:-6.3},0).wait(1).to({x:67.1,y:-16.9},0).wait(1).to({skewX:-0.1,x:66.7,y:-24.5},0).wait(1).to({x:66.2,y:-32},0).wait(1).to({skewX:-0.2,x:65.8,y:-39.6},0).wait(1).to({skewX:-0.3,x:65.4,y:-47.1},0).wait(1).to({skewX:-0.4,x:65.1,y:-54.7},0).wait(1).to({x:65,y:-62.2},0).wait(1).to({skewX:1.2,skewY:-2.9,x:65.4,y:-69.8},0).wait(1).to({skewX:2.9,skewY:-5.8,x:66.5,y:-77.2},0).wait(1).to({scaleX:0.97,scaleY:0.96,skewX:4.5,skewY:-8.7,x:68.5,y:-84.5},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:6.2,skewY:-11.6,x:72,y:-91.2},0).wait(1).to({scaleX:0.9,scaleY:0.87,skewX:7.8,skewY:-14.5,x:77,y:-96.8},0).wait(1).to({scaleX:0.87,scaleY:0.83,skewX:-9.3,skewY:-36.2,x:82.6,y:-99.6},0).wait(1).to({scaleX:0.84,scaleY:0.79,skewX:-26.4,skewY:-57.8,x:88.5,y:-101.9},0).wait(1).to({scaleX:0.8,scaleY:0.74,skewX:-43.5,skewY:-79.5,x:94.5,y:-103.5},0).wait(1).to({scaleX:0.77,scaleY:0.7,skewX:-60.6,skewY:-101.1,x:100.7,y:-104.3},0).wait(1).to({scaleX:0.74,scaleY:0.66,skewX:-77.7,skewY:-122.8,x:107,y:-104.1},0).wait(1).to({scaleX:0.7,scaleY:0.62,skewX:-94.8,skewY:-144.4,x:113.1,y:-102.8},0).wait(1).to({scaleX:0.67,scaleY:0.57,skewX:-111.9,skewY:-166.1,x:118.9,y:-100.5},0).wait(1).to({scaleX:0.64,scaleY:0.53,skewX:-129,skewY:-187.7,x:124.3,y:-97.3},0).wait(1).to({skewX:-128.9,x:126.1,y:-97.8},0).wait(1).to({skewX:-128.8,x:127.8,y:-98.2},0).wait(1).to({skewX:-128.7,x:129.5,y:-98.6},0).wait(1).to({skewX:-128.6,x:131.2,y:-99},0).wait(1).to({skewX:-128.5,x:133,y:-99.3},0).wait(1).to({skewX:-128.4,x:134.8,y:-99.5},0).wait(1).to({skewX:-128.3,x:136.5,y:-99.6},0).wait(1).to({skewX:-128.2,x:137.4,y:-99.7},0).wait(1).to({skewX:-128.1,x:138.2,y:-99.9},0).wait(1).to({skewX:-128,x:139,y:-100.2},0).to({_off:true},1).wait(57));

	// folder_dark
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C28830").s().p("AgHCXIAAkWIAPgYIAAEug");
	this.shape_1.setTransform(14.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-18.9,31.3,38);


// stage content:
(lib.dr_ban_animated_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tanner_l_arm
	this.instance = new lib.l_entire_arm();
	this.instance.parent = this;
	this.instance.setTransform(387,300.2,0.443,0.443,-3.8,0,0,12.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:21.6,regY:50.4,rotation:-4,x:392.5,y:321.8},0).wait(16).to({rotation:1.1,x:390.6,y:322.2},0).wait(1).to({rotation:6.3,x:388.6,y:322.4},0).wait(1).to({rotation:11.4,x:386.6,y:322.5},0).wait(1).to({rotation:16.6,x:384.6,y:322.4},0).wait(1).to({rotation:21.7,x:382.6,y:322.1},0).wait(1).to({rotation:26.9,x:380.7,y:321.6},0).wait(1).to({rotation:32,x:378.8,y:320.9},0).wait(1).to({rotation:37.2,x:377,y:320.1},0).wait(1).to({rotation:42.3,x:375.2,y:319.1},0).wait(1).to({rotation:47.5,x:373.5,y:318},0).wait(1).to({rotation:52.6,x:372,y:316.7},0).wait(1).to({rotation:57.7,x:370.6,y:315.3},0).wait(1).to({rotation:62.9,x:369.3,y:313.8},0).wait(1).to({rotation:68,x:368.2,y:312.1},0).wait(1).to({rotation:73.2,x:367.1,y:310.3},0).wait(40).to({rotation:66.8,x:368.4,y:312.5},0).wait(1).to({rotation:60.3,x:369.9,y:314.5},0).wait(1).to({rotation:53.9,x:371.6,y:316.4},0).wait(1).to({rotation:47.5,x:373.5,y:318},0).wait(1).to({rotation:41,x:375.6,y:319.4},0).wait(1).to({rotation:34.6,x:377.9,y:320.6},0).wait(1).to({rotation:28.2,x:380.2,y:321.4},0).wait(1).to({rotation:21.7,x:382.6,y:322.1},0).wait(1).to({rotation:15.3,x:385.1,y:322.4},0).wait(1).to({rotation:8.9,x:387.6,y:322.5},0).wait(1).to({rotation:2.4,x:390.1,y:322.2},0).wait(1).to({rotation:-4,x:392.5,y:321.8},0).wait(43));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_1 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_2 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_3 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_4 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_5 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_6 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_7 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_8 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_9 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_10 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_11 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_12 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_13 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_14 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_15 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_16 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_17 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_18 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_19 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_20 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_21 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_22 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_23 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_24 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_25 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_26 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_27 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_28 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_29 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_30 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_31 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_32 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_33 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_34 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_35 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_36 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_37 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_38 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_39 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_40 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_41 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_42 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_43 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_44 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_45 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_46 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_47 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_48 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_49 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_50 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_51 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_52 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_53 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_54 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_55 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_56 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_57 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_58 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_59 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_60 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_61 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_62 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_63 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_64 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_65 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_66 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_67 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_68 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_69 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_70 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_71 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_72 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_73 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_74 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_75 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_76 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_77 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_78 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_79 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_80 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_81 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_82 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_83 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_84 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_85 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_86 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_87 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_88 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_89 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_90 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_91 = new cjs.Graphics().p("EgmPgVvMBMfgNAMgNYA9jMg8vAH8g");
	var mask_graphics_92 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_93 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_94 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_95 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_96 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_97 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_98 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_99 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_100 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_101 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_102 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_103 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_104 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_105 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_106 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_107 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_108 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_109 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_110 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_111 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_112 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_113 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_114 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_115 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_116 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_117 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_118 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_119 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_120 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_121 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_122 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_123 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");
	var mask_graphics_124 = new cjs.Graphics().p("ArAGqI4CCuIBu/zMA2ngGQMANwA1vMgnXADog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_1,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_2,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_3,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_4,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_5,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_6,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_7,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_8,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_9,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_10,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_11,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_12,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_13,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_14,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_15,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_16,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_17,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_18,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_19,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_20,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_21,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_22,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_23,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_24,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_25,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_26,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_27,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_28,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_29,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_30,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_31,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_32,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_33,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_34,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_35,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_36,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_37,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_38,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_39,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_40,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_41,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_42,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_43,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_44,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_45,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_46,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_47,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_48,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_49,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_50,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_51,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_52,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_53,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_54,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_55,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_56,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_57,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_58,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_59,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_60,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_61,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_62,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_63,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_64,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_65,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_66,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_67,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_68,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_69,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_70,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_71,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_72,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_73,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_74,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_75,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_76,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_77,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_78,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_79,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_80,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_81,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_82,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_83,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_84,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_85,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_86,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_87,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_88,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_89,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_90,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_91,x:317.6,y:206.4}).wait(1).to({graphics:mask_graphics_92,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_93,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_94,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_95,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_96,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_97,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_98,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_99,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_100,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_101,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_102,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_103,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_104,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_105,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_106,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_107,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_108,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_109,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_110,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_111,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_112,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_113,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_114,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_115,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_116,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_117,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_118,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_119,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_120,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_121,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_122,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_123,x:305.3,y:214}).wait(1).to({graphics:mask_graphics_124,x:305.3,y:214}).wait(1));

	// folder
	this.instance_1 = new lib.folder();
	this.instance_1.parent = this;
	this.instance_1.setTransform(387.1,300.2,1,1,0,-95.5,84.5,-49.9,-0.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:69.5,regY:-49.8,x:349.6,y:423.7},0).wait(16).to({skewX:-90.4,skewY:89.6,x:338.7,y:419.9},0).wait(1).to({skewX:-85.3,skewY:94.7,x:328.1,y:415.2},0).wait(1).to({skewX:-80.1,skewY:99.9,x:318,y:409.4},0).wait(1).to({skewX:-75,skewY:105,x:308.5,y:402.9},0).wait(1).to({skewX:-69.9,skewY:110.1,x:299.6,y:395.5},0).wait(1).to({skewX:-64.7,skewY:115.3,x:291.4,y:387.4},0).wait(1).to({skewX:-59.6,skewY:120.4,x:284,y:378.5},0).wait(1).to({skewX:-54.5,skewY:125.5,x:277.3,y:369},0).wait(1).to({skewX:-49.3,skewY:130.7,x:271.6,y:359},0).wait(1).to({skewX:-44.2,skewY:135.8,x:266.8,y:348.5},0).wait(1).to({skewX:-39.1,skewY:140.9,x:262.9,y:337.6},0).wait(1).to({skewX:-33.9,skewY:146.1,x:260.1,y:326.5},0).wait(1).to({skewX:-28.8,skewY:151.2,x:258.2,y:315},0).wait(1).to({skewX:-23.7,skewY:156.3,x:257.4,y:303.6},0).wait(1).to({skewX:-18.5,skewY:161.5,x:257.6,y:292.1},0).wait(40).to({skewX:-24.9,skewY:155.1,x:257.5,y:306.4},0).wait(1).to({skewX:-31.4,skewY:148.6,x:259,y:320.7},0).wait(1).to({skewX:-37.8,skewY:142.2,x:262.1,y:334.8},0).wait(1).to({skewX:-44.2,skewY:135.8,x:266.8,y:348.5},0).wait(1).to({skewX:-50.6,skewY:129.4,x:272.9,y:361.5},0).wait(1).to({skewX:-57,skewY:123,x:280.5,y:373.8},0).wait(1).to({skewX:-63.4,skewY:116.6,x:289.4,y:385.2},0).wait(1).to({skewX:-69.9,skewY:110.1,x:299.6,y:395.5},0).wait(1).to({skewX:-76.3,skewY:103.7,x:310.8,y:404.6},0).wait(1).to({skewX:-82.7,skewY:97.3,x:323,y:412.5},0).wait(1).to({skewX:-89.1,skewY:90.9,x:336,y:418.9},0).wait(1).to({skewX:-95.5,skewY:84.5,x:349.6,y:423.7},0).wait(43));

	// tanner_r_arm
	this.instance_2 = new lib.r_entire_arm();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315.8,296.9,0.444,0.444,0,-2,178,0,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:47.1,regY:104.8,skewX:-2.2,skewY:177.8,x:296.6,y:338.4},0).wait(1).to({skewX:-2.4,skewY:177.6,x:296.8},0).wait(1).to({skewX:-2.5,skewY:177.5,x:297,y:338.5},0).wait(1).to({skewX:-2.7,skewY:177.3,x:297.3},0).wait(1).to({skewX:-2.8,skewY:177.2,x:297.5,y:338.6},0).wait(1).to({skewX:-3,skewY:177,x:297.7},0).wait(1).to({skewX:-3.1,skewY:176.9,x:297.9},0).wait(1).to({skewX:-3.3,skewY:176.7,x:298.2},0).wait(1).to({skewX:-3.5,skewY:176.5,x:298.4},0).wait(1).to({skewX:-3.6,skewY:176.4,x:298.7},0).wait(1).to({skewX:-3.8,skewY:176.2,x:298.9,y:338.7},0).wait(1).to({skewX:-3.9,skewY:176.1,x:299.1},0).wait(1).to({skewX:-4.1,skewY:175.9,x:299.4},0).wait(1).to({skewX:-4.2,skewY:175.8,x:299.6},0).wait(1).to({skewX:-4.4,skewY:175.6,x:299.8,y:338.8},0).wait(1).to({skewX:-4.5,skewY:175.5,x:300.1},0).wait(1).to({skewX:-4.7,skewY:175.3,x:300.3},0).wait(1).to({skewX:-4.8,skewY:175.2,x:300.5},0).wait(1).to({skewX:-5,skewY:175,x:300.7},0).wait(1).to({skewX:-10.6,skewY:169.4,x:302.1,y:340.2},0).wait(1).to({skewX:-16.2,skewY:163.8,x:303.6,y:341},0).wait(1).to({skewX:-21.7,skewY:158.3,x:305.2,y:341.6},0).wait(1).to({skewX:-27.3,skewY:152.7,x:306.8},0).wait(1).to({skewX:-32.9,skewY:147.1,x:308.4,y:341.1},0).wait(1).to({skewX:-38.5,skewY:141.5,x:310,y:340.3},0).wait(1).to({skewX:-44.1,skewY:135.9,x:312.1,y:339.4},0).wait(1).to({skewX:-49.7,skewY:130.3,x:313.9,y:338},0).wait(1).to({skewX:-55.2,skewY:124.8,x:315.7,y:336.2},0).wait(1).to({skewX:-60.8,skewY:119.2,x:317.2,y:334},0).wait(1).to({skewX:-66.4,skewY:113.6,x:318.5,y:331.4},0).wait(1).to({skewX:-72,skewY:108,x:319.5,y:328.6},0).wait(1).to({skewX:-60.9,skewY:119.1,x:315.3,y:332.9},0).wait(1).to({skewX:-49.8,skewY:130.2,x:309.7,y:336.1},0).wait(1).to({skewX:-38.8,skewY:141.2,x:303.6,y:338},0).wait(1).to({skewX:-27.7,skewY:152.3,x:296.3,y:338.8},0).wait(1).to({skewX:-16.6,skewY:163.4,x:289,y:337.9},0).wait(1).to({skewX:-5.5,skewY:174.5,x:282,y:335.2},0).wait(1).to({skewX:5.5,skewY:185.5,x:275.6,y:331.1},0).wait(1).to({skewX:16.6,skewY:196.6,x:270.2,y:325.4},0).wait(1).to({skewX:27.7,skewY:207.7,x:266,y:318.6},0).wait(1).to({skewX:38.8,skewY:218.8,x:263.1,y:310.7},0).wait(1).to({skewX:49.8,skewY:229.8,x:261.8,y:302.1},0).wait(1).to({skewX:60.9,skewY:240.9,x:262.2,y:293.2},0).wait(1).to({skewX:72,skewY:252,x:264.2,y:284.2},0).wait(1).to({skewX:71.3,skewY:251.3,x:264,y:283.7},0).wait(1).to({skewX:70.4,skewY:250.4,x:263.7,y:283.4},0).wait(1).to({skewX:69.3,skewY:249.3,x:263.4,y:283.1},0).wait(1).to({skewX:68.2,skewY:248.2,x:263.1,y:283},0).wait(1).to({skewX:66.8,skewY:246.8,x:262.9,y:282.9},0).wait(1).to({skewX:65.3,skewY:245.3,x:262.7,y:283.1},0).wait(1).to({skewX:63.5,skewY:243.5,y:283.5},0).wait(1).to({skewX:61.5,skewY:241.5,y:284},0).wait(1).to({skewX:59.1,skewY:239.1,x:262.8,y:284.8},0).wait(1).to({skewX:56.2,skewY:236.2,x:263.4,y:286.1},0).wait(1).to({skewX:52.6,skewY:232.6,x:264.7,y:288.5},0).wait(1).to({skewX:47.3,skewY:227.3,x:266.6,y:293},0).wait(1).to({skewX:42.4,skewY:222.4,x:268.2,y:297.6},0).wait(1).to({skewX:38.9,skewY:218.9,x:269.6,y:300.9},0).wait(1).to({skewX:35.8,skewY:215.8,x:270.9,y:303.8},0).wait(1).to({skewX:33,skewY:213,x:272.4,y:306.5},0).wait(1).to({skewX:30.4,skewY:210.4,x:273.8,y:309},0).wait(1).to({skewX:28,skewY:208,x:275.2,y:311.4},0).wait(1).to({skewX:25.6,skewY:205.6,x:276.6,y:313.7},0).wait(1).to({skewX:23.3,skewY:203.3,x:278,y:315.9},0).wait(1).to({skewX:21.1,skewY:201.1,x:279.5,y:318},0).wait(1).to({skewX:19,skewY:199,x:280.9,y:320},0).wait(1).to({skewX:16.9,skewY:196.9,x:282.4,y:322},0).wait(1).to({skewX:14.8,skewY:194.8,x:283.9,y:323.9},0).wait(1).to({skewX:12.8,skewY:192.8,x:285.3,y:325.7},0).wait(1).to({skewX:10.8,skewY:190.8,x:286.8,y:327.4},0).wait(1).to({skewX:8.9,skewY:188.9,x:288.3,y:329.2},0).wait(1).to({skewX:7,skewY:187,x:289.7,y:330.8},0).wait(1).to({skewX:5.1,skewY:185.1,x:291.1,y:332.4},0).wait(1).to({skewX:3.3,skewY:183.3,x:292.5,y:334},0).wait(1).to({skewX:1.5,skewY:181.5,x:293.9,y:335.5},0).wait(1).to({skewX:-0.3,skewY:179.7,x:295.2,y:337},0).wait(1).to({skewX:-2.1,skewY:177.9,x:296.4,y:338.4},0).wait(48));

	// tanner_r_arm_line_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAhBgBJBJQBlBoCcAjQCYAiASAtQAGAQgGAgQgJAxgBAOQgICQi/AzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAhBfBIBJQBlBpCdAjQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAhBeBHBJQBlBqCeAjQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAhBeBGBIQBlBrCfAjQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAgBdBGBIQBlBrCgAkQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAgBdBEBHQBmBsChAkQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAgBcBDBHQBmBtCiAkQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAgBbBCBHQBmBuCjAkQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAgBbBBBGQBmBuCkAlQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAfBaBBBGQBmBvClAlQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAfBZBABFQBnBxClAlQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAfBZA/BEQBnByCmAlQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAfBYA+BEQBnByCnAmQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAfBYA9BDQBnBzCoAmQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAeBXA9BDQBnB0CpAmQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAeBWA8BDQBnB1CqAmQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAeBWA7BCQBnB1CrAnQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAeBVA6BCQBnB2CsAnQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAdBUA6BCQBnB3CtAnQCYAiASAtQAGAQgGAgQgJAxgBAOQgHCQjAAzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AAkJ1QgRgPhLglQhigug0gaQjJhkACguQAAgWhCiRIiQk0QjNm4ATguQAQgqFVAMQDTAIAbAAQBvACAMgOQAZgeCZDuQCTDiAaBPQAdBUA5BBQBnB4CuAnQCYAiASAtQAGAQgGAgQgJAxgBAOQgICQi/AzQjWAnhYgWQgXgGhpAnQg2AUgiAAQgZAAgNgLg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AArJ5IgGgDQgLgIgbgQQgSgKgcgOIgIgEIgmgSIhpgzIgHgDIgegPQichQgOgrIgBgIQgBgHgGgUQgNgmgqhdIgEgJIgJgTIiEkbIgDgGIgFgKQjImvASguQARgqFOAMIAGAAIAGAAIDfAIIAKAAIAEAAQBLABAcgHQAMgDAFgDIABgBQANgIAiAlQAlApBCBiIAbApIACADQB/DEAjBWIAIAWIABADQAUA2AaAoQAKAOALAKIAWAWIAFAFIADACQAoAoA1AeQBEAoBSAXIAfAIIAHACQCBAfAYAtIAEAJIAAAAQAFAQgFAeIgBADIgIAuIgDAQIAAABQgDApgPAfQgnBXiHAnIgDABIhAALQihAahMgRIgCgBQgQgDgqAMQgaAHgoAOIgEACQgcAKgWAFQgXAFgRAAQgUAAgMgGg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AAsJ5IgFgDIgngWQgRgLgdgOIgIgDIgmgTIhpgzIgGgDIgggPQibhQgPgrIgCgHIgIgcQgLgkgrhfIgEgJIgJgTIiEkcIgDgGIgFgKQjImvASguQAQgqFPAMIAGAAIAGAAIDeAIIAMAAIAEAAQBNABAZgHQANgEAFgCIABgBQANgHAhAkQAnArBBBgIAbApIACADQB/DDAiBZIAIAVIABADQAWA6AZAkQAJAOANAJQANAIALAJIAGAFIACACQAoAlA5AbQBGAlBRAWIAgAIIAHACQB/AgAUA0QACAEABAFIAAABQAFARgGAdIgBADIgJAuIgCAQIgBABQgEAqgOAfQgkBZiGAoIgEABIg/ANQihAZhNgPIgCgBQgSgDgoAKQgZAGgpAPIgEABQgbAKgYAGQgYAGgTAAQgSAAgMgGg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AAuJ5IgGgCQgPgHgZgPQgQgKgdgPIgIgDIgmgTIhqgzIgGgDIgggQQibhPgQgrIgCgHIgIgbQgLgkgrhhIgEgIIgJgTIiFkdIgDgGIgFgKQjImvASguIAAgBQAQgpFPAMIAGAAIAGAAQC2AHApABIAMAAIAEAAQBOAAAZgHIASgFIABgBQANgFAhAjQAnArBBBgIAbAoIACADQB+DBAiBcIAIAWIABADQAXA9AXAgQAKANAPAIQAPAGALAIIAGAEIADACQAoAiA8AYQBIAhBQAVIAgAJIAHACQB9AhAQA7IADAJIAAACQAEAQgGAdIgBADIgKAvIgDAPIAAACQgGArgMAeQgiBbiFAqIgDABQggAIggAGQigAZhOgOIgDgBQgTgDgmAJQgZAFgqAPIgEABQgbAKgYAGQgaAHgTAAQgRAAgLgFg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AAvJ6IgFgCQgRgGgYgPQgPgKgfgPIgGgEIgngSIhrgzIgFgDIghgQQibhQgQgrIgDgHIgIgaQgKgigthkIgDgIIgJgTIiGkdIgDgGIgFgKQjImwASguIAAAAQARgqFOAMIAGAAIAGAAQC3AIApAAIAMAAIAEAAQBQABAXgIQALgEAIgBIABAAQANgEAhAiQAoArBABgIAbAoIACADQB9C/AiBfIAIAWIABADQAZBBAVAcQALAMAQAGQAQAFAMAGIAHAEIACABQApAfBAAWQBJAdBPAVIAhAJIAHACQB7AhAMBCIADAKIAAACQACARgGAdIgBADIgLAuIgDAQIAAACQgHAsgMAcQgeBeiEArIgDABQggAJghAGQifAahPgNIgDgBQgVgCgkAHQgYAEgsAPIgDABQgbAKgZAHQgbAHgUAAQgQAAgLgEg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AAxJ6IgGgCQgSgFgXgOQgPgKgfgQIgGgDIgngTIhrgzIgEgDIgigQQibhQgSgrIgDgGQgEgLgFgQQgIggguhmIgDgIIgJgTIiGkdIgDgGIgFgLQjImwASguIAAAAQAQgqFPAMIAGAAIAGAAQC4AIAnAAIANAAIAFAAQBSABAVgJQALgEAIAAIABAAQAOgDAfAhQAqAtBABfIAaAnIACADQB9C+AhBhIAIAWIABADQAaBFAVAYQAKAMASAEQASADAMAFIAHADIADABQAoAcBEATQBMAZBNAVIAiAJIAHACQB5AjAIBIIACAKIAAADQABARgGAcIgBADIgLAvIgDAPIgBADQgIAtgLAcQgcBgiCAtIgEABQgfAJghAHQifAahQgNIgEAAQgWgDgiAGQgXADguAQIgCABIg0AQQgeAJgVAAQgOAAgKgEg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AAyJ6QgWgDgZgQQgOgKgggRIgtgVIhsg0IgmgTQibhPgTgrQgHgNgFgUQgIgfguhoIgNgbIiGkeIgIgRQjImvASgvIAAAAQAQgqFPAMIAMAAQC5AIAnAAIASAAQBTABAUgJQALgGAKACQAOgBAfAgQAqAtBABfIAbApQB9C9AgBkIAKAZQAcBJASATQALALATADQAcADAMAEIADABQApAYBHARQBOAWBMAUIApALQB3AkAEBPIACAKQABATgIAeIgMAyIgEAPQgKAxgJAbQgZBjiCAuQghAKgjAIQieAahRgLQgZgDgkAEQgWACgvAQIg2ASQgfAJgWAAQgNAAgKgDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AA2J8QgYgCgYgQIgGgEQgOgJgagOIgtgWIgFgCIhogyIgmgTIgHgEQiShKgXgqQgIgNgFgTIgDgKQgJgggqhdIgMgdIgEgIIiCkWIgIgRIgEgIQjFmpARgvIAAgBQAQgpFMAMIAFAAIAMAAIDbAIIAFAAIASAAQBSAAATgJIACgBQAKgFALADQAOAAAdAfIABABQArAuA/BcIABABIAbApQB6C5AhBmIABAEIAKAZQAPAoAQAXQALARALAIQALAKATADIAeAFIALABIADABQAnAUBHANIAEABQBNARBIATIAGACIApAMQBzAkABBVIAAADIABAHQAAATgIAeIgNAyIgBAFIgDALQgLAxgJAaIAAAEQgYBjh+AvQghALgjAIIgEABQiaAahRgKQgbgDgiADIgFAAQgVACgrAPIg3ASIgDABQggAJgWAAQgKAAgIgBg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AA5J9QgZgBgXgOIgGgFQgNgJgbgOIgtgWIgFgCIhogyIgmgTIgHgEQiQhJgbgqQgKgOgFgRIgCgKQgHgdgrhhIgNgdIgEgIIiDkXIgIgQIgEgIQjFmrAQgwIAAgBIAAAAQARgqFNAMIAFAAIAMAAQC2AIAmAAIAFAAIASAAQBTABASgKIABgBQAKgGAMAFQAOACAdAeIABABQArAuA+BcIABABQAPAUANAVQB6C4AgBoIABAEIAJAaQAQAnATAWQALAPANAIQANAIATADIAdAEIALACIADABQAoAPBIAKIAEABQBQAOBIASIAGACQAWAGATAGQBvAmgEBaIABADIAAAHQgBATgIAfIgNAxIgCAFIgDALQgMAzgIAZIAAAEQgUBmh9AwQggAMglAIIgDABQiaAbhSgJQgdgCggAAIgEABQgUAAgtAQIg3ASIgEABQgjAKgYAAIgNAAg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AA8J+QgbAAgVgNIgHgEQgLgJgdgPIgtgXIgFgCIhpgyIgmgTIgGgEQiPhHgegrQgMgOgEgQIgCgJQgFgbgthkIgNgeIgEgHIiDkYIgIgRIgEgIQjGmsAPgxIAAAAIABgBQAQgqFPAMIAFAAIANAAQC5AIAjAAIAFAAIASAAQBUABAQgLIACgBQAJgGANAGQAOAEAcAdIABABQAsAvA+BbIABABIAcApQB5C4AfBqIABAEIAJAZQARAnAWAVQAMAOAPAHQANAHATADIAeADIALACIADAAQAoAMBKAHIAEAAQBSAMBIARIAGACQAWAFATAHQBqAngHBgIABACIgBAIQgBATgIAeIgOAyIgCAFIgDAMIgUBLIgBAEQgQBph8AyQggAMglAJIgEABQiYAbhUgHIg9gDIgEAAQgSgBgvAQIg4ASIgEACQgmAMgaAAIgHAAg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AAOJ0IgHgEQgKgJgegQIgtgXIgGgCIhogyIgmgTIgHgEQiMhGgjgrQgMgOgEgPIgCgJQgEgYguhoIgNgeIgEgHIiDkZIgIgQIgEgIQjHmuAPgyIAAgBQARgqFRAMIAFAAIAMAAIDcAIIAGAAIARAAQBXAAANgLIACgBQAIgGAOAHQAPAGAbAcIABABQAtAwA+BaIABABIAbAoQB5C4AeBsIABAFIAKAZQAQAmAZAUQAOAMARAGQAOAHASACIAeADIAMABIADABQAoAIBMADIAEABQBUAIBIAQIAGACQAWAGATAHQBmAogLBmIAAACIAAAIQgDATgIAeIgPAxIgBAGIgEAMQgPAzgFAYIgBAEQgNBrh6A0QggANgmAKIgDABQiXAbhWgGIg9gEIgDAAQgSgCgxAQIg3ATIgEABQgrAPgcAAIgGAAQgZAAgSgLg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AAQJ3IgGgFQgKgJgfgQIgtgXIgGgDIhpgyIglgTIgHgDQiKhFgngrQgOgOgEgOIgCgIQgBgWgwhsIgNgeIgDgGIiFkbIgHgQIgEgIQjImvAOgzIABgCQAQgqFTANIAFAAIAMAAQDAAIAdAAIAFAAIASAAQBYAAAMgMIABgBQAIgGAPAIQAPAIAaAbIABABQAtAwA+BZIABABIAcApQB5C3AdBvIABAEQAEAOAFALQARAmAcATQAOAKATAGQAPAFATACIAeADIALAAIADAAQApAFBOACIAEAAQBWAFBHAPIAHACQAWAFASAIQBjAogPBsIAAACIgBAIQgDATgJAeIgPAxIgCAGIgEAMQgQA1gEAXIgBAEQgJBuh5A2QggANgmAKIgDABQiXAchXgFQgigBgbgFIgDAAQgQgDgzARIg3ASIgFACQgqAPgcACIgNABQgWAAgPgJg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AAMJ1QgQgPhMglQhigugzgaQjJhjABgvQABgVhCiSIiQkzQjNm5ASguQARgqFUANQDTAIAbAAQBwABALgOQAOgQAzA2QAvAxA+BZQCSDUAfB9QARA8AqAZQAiATBCADQAoABBggCQBbABBIAQQCRAfgWCMQgGAmgaBLQgYBEgBAXQgICQjAAzQjVAohZgXQgXgGhpAoQg2AUghAAQgaAAgNgMg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AANJ2IgIgGQgVgQg/geIgIgEQhcgrgygZIgHgEQjBhgAAguIgBgIQgGgeg6iBIgDgFIiNkvIgCgEQjMm0ATgvQAQgqFTANIACAAIDsAIIACAAQBnABARgMIADgCQANgOAtAsIAIAHQAoAqAzBGIASAaQBxChAqBwQANAjAIAeIAGATQAPAoAcAWIAHAFQAPAJAWAEQAfAGAhABIABAAQAmACBggCIALAAQBWACBDAPIAPADQCBAjgTCDIgDAQQgIAkgVA9IgFANQgSA5gCAWIgCAOQgOCFi2AxIgNACQjLAlhWgVIgMgBQgeABhXAgIgKAEQgwARgeAAQgZAAgNgLg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AAPJ3IgIgGQgUgPhAggIgIgEQhcgrgygZIgHgEQjAhfgCguIgBgHQgFgeg7iCIgDgFIiOkvIgCgEQjLm1ASguIAAgBQARgqFTANIACAAIDrAIIADAAQBoABAQgMIADgCQANgOAtArIAIAIQAoApA0BGIASAaQBzChAoBwIATBCIAGATQAQApAaAWIAHAFQAOAJAWAEQAjAEAdACIABAAQAlABBhAAIALAAQBWABBDAOIAPADQCDAigTCDIgCAPQgIAkgVA+IgEANQgTA4gDAXIgBAOQgOCGi1AxIgMADQjMAlhWgVIgLgBQgdAAhZAhIgKADQgxASgfAAQgXAAgNgKg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AAQJ4IgIgGQgTgPhBggIgIgEIiOhEIgHgEQi/hfgEguIgBgHQgEgcg8iEIgDgGIiNkvIgCgEQjMm0ASgvIAAgBQARgqFTANIACAAIDsAIIADAAQBoABAQgNIADgCQANgMAtAqIAIAHQAoApA0BGIATAZQB0CiAmBwIASBDIAGATQAQApAZAXIAGAGQAOAJAXADIA/AEIABAAQAkACBiAAIALAAQBXABBCAOIAPADQCEAhgRCCIgDAPQgHAkgVA+IgFANQgSA4gDAXIgCAOQgMCHi1AyIgNACQjLAlhXgUIgLgBQgbgBhaAhIgKAEQgzASgfAAQgWAAgNgJg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AARJ4IgIgGQgSgOhCggIgIgEQhcgrgygZIgHgEQi/hfgFguIgBgHQgDgag9iGIgCgGIiOkvIgCgEQjLm1ARgvIAAgBQARgqFTANIACAAQDOAIAeAAIAEAAQBoABAPgNIADgCQAOgMAsApIAJAIQApAoA0BFIATAaQB2ChAjByIASBEIAGASQAPApAYAZIAGAFQANAKAXABIA/ADIABAAQAiADBkAAIALAAQBXABBBAOIAQACQCFAhgQCAIgDAQQgGAjgVA+IgFAPQgTA2gDAYIgCAOQgLCHi1AzIgMADQjKAlhYgTIgLgCQgbgChbAhIgKAEQgzATggAAQgVAAgNgJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AARJ5IgIgGQgRgOhCghIgJgEIiNhEIgIgEQi9hegIguIgBgHQgBgYg+iIIgCgGIiOkvIgCgEQjMm2ASgvIAAgBQAQgqFUANIACAAQDPAIAdAAIAEAAQBpABAOgNIADgDQAOgKAtAoIAIAHQApAoA1BFIATAZQB4CiAgByQAHAjAKAiIAGASQAQApAWAaIAFAGQANAJAYABIA+ACIABAAQAhADBmAAIAKAAQBYABBBANIAPACQCHAggPCAIgDAQQgGAigVA/IgFAPQgSA1gEAZIgCAOQgKCIi0A0IgNADQjKAlhYgTIgLgCQgZgDhdAiIgKAEQg0ATggAAQgVAAgNgIg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AATJ6IgIgGQgQgOhDghIgJgEIiOhEIgHgEQi9hegJguIgBgHQAAgXg/iKIgDgFIiOkwIgCgEQjLm1ARgwIAAgBQARgqFUANIACAAQDQAIAcAAIAEAAQBqABAMgNIAEgDQAOgKAtAnIAIAIQAqAoA1BEIATAZQB5CiAfByQAFAjALAjIAGASQAPAqAVAaIAFAGQAMAKAYAAIA+AAIABAAQAgADBnABIAKAAQBYABBBANIAPACQCIAfgOB/IgCAPQgGAjgVA/IgFAPQgSA1gFAZIgBAOQgJCJi0A0IgNAEQjJAlhZgTIgLgCQgYgEheAiIgKAEQg1AUghAAQgTAAgNgHg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AAMJ1QgQgPhMglQhigugzgaQjJhjABgvQABgVhCiSIiQkzQjNm5ASguQARgqFUANQDTAIAbAAQBwABALgOQAOgQAxArQAtAoA6BLQCNCyAeB8QAFArAQAtQAPAqATAbQALAQAfgBIA+AAQAgADBxABQBlABBDAPQCRAfgWCMQgGAmgaBLQgYBEgBAYQgICPjAAzQjVAohYgXQgYgGhpAoQg2AUghAAQgaAAgNgMg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AAQJ4IgIgGQgTgPhBggIgIgEQhcgrgygZIgHgEQi/hegFguIgBgIQgDgag8iGIgDgFIiOkvIgCgEQjKmzARgxIAAgBQAQgqFUANIACAAQDPAIAdAAIACAAQBqABAPgNIACgCQAOgNAvAnIABABQAsAmA4BHIAEAEQCGCoAgB4IACAOQAGAwAQAoQALAZANATQAIALAJAJQAPAOAbADIAtAFIATABQAiADBdABIASAAQBaACA+ANIAQACQCEAhgRCCIgCAPQgHAjgVA/IgFAOQgSA2gEAYIgBAOQgMCHi1AzIgMACQjLAlhXgTIgLgCQgbgChbAiIgKAEQgyASggAAQgWAAgNgJg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AAMJ1QgQgPhMglQhigugzgaQjJhjABgvQABgVhCiSIiQkzQjNm5ASguQARgqFUANQDTAIAbAAQBwABALgOQAOgQAwAoQAtAlA5BHQCLCpAeB7QAIBhAsAuQAkAmBHAKQAeAEB2ABQBnABBCAPQCRAfgWCMQgGAmgaBLQgYBEgBAYQgICQjAAyQjVAohZgXQgXgGhpAoQg2AUghAAQgaAAgNgMg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AAQJ5IgFgEIAAAAQgRgPhEgiIgHgDQhdgrgzgaIgGgDQi8hdgJguIgBgGIAAgBQgBgXg+iKIgCgEIgBgCIiPkwIgBgDQjMm3ASgvQAQgqFUAMIABAAIACAAQDPAIAcAAIACAAIACAAQBrACAMgOIAEgDQAPgKAtAhIAHAFQAsAhA2A8IACADQA1A6AjA2QAqA/ARA5QAHARAEAYIAEAUIACAZQAFAkAMAbQAJAXAYAaIADAEQAYAYAmAOQASAGAVAEIAGACQAhAHBoAEIAJAAQBdAEBCAOIALABIADABQCHAggPCCIgCAKIgBAFQgGAjgWBAIgDAIIgBADQgTA2gDAaIgCAJIAAAEQgKCJi2AzIgIACIgCAAQjMAmhYgTIgIgCIgBAAQgYgFheAjIgJADIgBABQg0ATghAAQgWAAgNgIg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AAQJ5IgFgEIgBgBQgRgPhEghIgHgDIAAAAIiPhFIgGgDIgBAAQi9hegIguIAAgGIAAgCQgCgZg+iHIgCgEIgBgCIiOkvIgBgDQjMm3ASgvIAAAAQAQgqFUAMIABAAIACAAQDNAIAeAAIABAAIADAAQBqACANgOIADgCQAPgMAvAeIAHAFQAvAfA4A4IADADQA4A4AjA1QAqA/AMA6QAEAOADAdIACAUIACAZQAEAlANAZQAHARAeAfIAEAEQAYAYAlAPQARAHAVAFIAHACQAkAJBjAHIAJAAQBaAHBFAPIALABIADABQCHAhgRCCIgBAKIgBAEQgGAjgWBBIgDAIIgBADQgTA3gEAZIgBAJIAAAEQgLCIi2AzIgHACIgDAAQjMAmhYgUIgIgBIgBAAQgZgEhdAjIgIADIgCABQgzATghAAQgWAAgNgJg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AAPJ5IgFgEIgBgBQgSgPhDghIgHgDIgBAAIiOhFIgGgDIgBAAQi+hfgGguIgBgGIAAgBQgDgbg8iGIgCgEIgBgCIiOkuIgBgDQjMm2ASgvIAAgBQAQgqFTANIABAAIACAAQDMAIAfAAIACAAIACAAQBqABAOgNIACgCQAPgOAxAcIAHAEQAzAcA5A1IADAEQA7A1AkA1QArA/AGA8QACAKABAiIABAUIABAYQACAmAQAYQAEALAjAkIAFAEQAYAYAkAPQASAHAUAGIAHADQAoAMBeAJIAJABQBYAKBHAQIALABIADABQCHAhgSCCIgBAKIgBAFQgHAjgVBAIgDAIIgBADQgUA4gDAZIgBAIIAAAEQgLCIi3AzIgHACIgDAAQjMAmhYgUIgIgCIgBAAQgagDhdAjIgHACIgCABQgzATggAAQgXAAgNgJg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AAPJ4IgGgFQgTgPhDggIgGgDIiQhFIgGgDQjAhggEguIAAgGQgDgbg9iHIgCgEIiPkwIgBgDQjMm1ASgvIAAgBQARgqFTANIACAAQDPAIAdAAIADAAQBpABAPgNIACgCQAOgPA0AaIAHADQA1AZA8AyIADAEQA/AyAkA1QAqA/ABA9IgBAuQgBAiABAKQACAnAQAXQADAEAoApQAaAaAnASQASAIAUAGQAqARBiANQBaANBOASIAOACQCGAhgTCDIgCAOQgHAjgVBAIgEAMQgUA5gDAYIgBALQgLCJi3AyIgKACQjNAmhXgVIgKgBQgbgChcAiIgIADQgzATggAAQgXAAgNgKg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AAmKPIgEgBIgBgBIgGgDQgWgIgogWIgQgJIgHgDIgCgBIgGgDIg5gcIhSgnIgGgDIgGgDIgygZQiChFgTgoIgDgGIAAAAIgBgGIgOgoQgMgkgnhOIgCgEIgBgDIgCgEIgFgIQhRiigvhfIgRglIAAgBIgBgDQjJmiAWhKIAAgCQAXhIEwgBIACAAIAHAAIACAAQCwAAA8AEIACAAIADAAIACAAQBaACAdgGIADgBIABgBIACAAIABgBQASgJAuAWIADABIAFACIADABQAmARAoAcIAhAaIADACIADACIADADQA5AsAlAwIAEAFIAEAFQAqA7AFA5IABAHQACAMAAAaIABAFQAAALgCAHIgDAKIgBAUQgBAUABAKQABAJAFAFQAGAEABAEIABACQgBAJANANQADAHAKAJIAJAJIAKALQARAXAcATIAKAGIAYANIAKAFQAlASBFAQIATAFIAIACQBSASBNASIAKADIAEABIAJADQBNAWAgAyQAVAdABArIAAABQABAFAAAGIAAADQABAigQA8IgCAFIgCAHIgBAFIgDAIQgNAsgGAcIgBADIgBAHIAAAFIgEARQgLA0gaAiQgnA/hhAhIgDABIgIADIgCAAQgyAMgwAIQiAAShFgLIgIgCIgBAAQgcgBg6AQQgNADgRAGIgFACIgEABIgFACQgoAOghAFIgSACQgPAAgLgFg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AA5KlIgEAAIgBgBIgHgBQgdgEgjgUIgEgDIgMgHIgGgDIgBgBIgCgBIgDgBIgEgCIg5gcIgEgCIhQgnIgCgBIgEgCIgCgBIgEgBIgzgaIgBgBQiBhDgYgnIAAgBIgDgEIAAgCIgCgEQgJgPgHgXIgBgFQgKgfgqhPIgBgCIgBgCIgBgCIAAgBIgCgEIgFgIIgBgCQhYijgthaIgCgDIgQghIAAgBIgBgCIAAgBIgBgCQjEmNAYhmIABgEIAAgCQAehlEUgOIACAAIADAAIAEgBIACAAQCegGBRAGIACAAIABAAIABAAIADAAIACAAQBRAEAogBIAAAAIADgBIABAAIACgBIABAAIABAAQAWgFAqATIADABIAFACIACABQAnAQAnAaIAEACIAiAYIABABIACACIABABIACABIADADQA3AoAmAtIAGAGIABACIADADIAEAFQArA4ALA3IABAEIABAIIAEAdIAAAKIABAFQABAKgBAIQAAABAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQgCABgEAXIgEAhIAAAYQgBAVABACQABABAGAAQAGAAACABIAHAJIAHAHQAGAFADAFIADADIAEAIQAMAaAZAWIADADIAFAEIAXARIAEACIAEADQAiAXBAAVIAEABIATAGIAEACIADABICfAtIAEABIAHACIAEABIADABIAHACQBGAVAqAmIAFAEQAbAZAIAnIAAAAIADALIAAABIAAACQAJAjgNA8IAAABIgBAEIgCAIIAAAAIgBAGIgCAGIAAABIgTBIIgBAEIgCAHIAAAFIgFASQgOA3gUAfIAAABQgfBGheAnIAAAAIgDABIgGADIgBAAIgDAAQgvAPgxAKIgCAAQh9AThHgIIgDAAIgFgBIgBAAIgDAAQgiAAgxAKIgFAAQgLACgQAFIgEABIgCAAIgDABIgDABIgDABQglAMglAJIgEABQgMACgJAAQgKAAgIgCg");
	var mask_1_graphics_47 = new cjs.Graphics().p("ABFK+IgHAAQgmABghgVIgSgLIgHgEIhCghIhTgoIgGgDIg5gdQiBhCgdgoIgDgFQgQgTgGgZQgGgbgxhXIgCgEIgIgOQhhiqgshWIgSgiIgBgDQjGmDAih/IAAgBQAjiFD8gbIACAAQCUgOBpAJIACAAICAAJIAEAAIAFgBQAZgBApARIAIADQAoAQApAaIAnAZIAEADQA7ApArAvIAIAJQAzA7AQA6QAGAQADAcQAEAcAAATQABANgGABQgGACAAAKIgFAbIgDAcQgCAOAAARQABAXAEALQADANAWAIQAbAJAIAJQAMAOAQANQAhAeBAAcIAbALQBPAeBXAbIAOAEQBIAVA3AgQAmAWAPAkQAEAFACAGQASAkgKA/IgCANIgDANIgTBJIgDAMIgGAXQgSA8gOAcQgWBOhbAsIgJAEQguATg2AMQh+AUhLgFIgJAAQgpAAgvAEQgMAAgVAGIgJACIhRAZQgVAFgQAAIgHgBg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AAfLLIgHgFIgSgLIgGgEIg9gfIgFgCIhUgpIgGgCIg1gbIgFgCQh8g/gmgoIgEgFQgUgVgDgVIAAgBQgEgXg1haIgCgEIgJgOIgBgCQhnitgshRIAAgBIgTgiIgBgDQjElyAniZIAAgBQApigDZgqIACAAQCAgXCCALIACAAQBGAFA8AJIAFABIAIAAIABAAQAdADAmAOIAHADQAqAQAqAYIAIAEIAhAUIADADQA8AmAuAvIAHAGIACACQA1A5AWA4QAJASAEAXQAGAbABAVQABALgDAFQgCADgBAKQgNAogGAvQgJBHAMA5IAqgJQAUAqApApIASARIAaAZQAxAsA5AjIAMAHIAZAOQAyAdAvAYQAeAPAXAQIANAKIAIAHQAmAZAOAnIAFAJIAFAJQANAYAEAbIACAHIABAMQACALgBAMIgBAJIgKA9IgFAXQgUBShaAvIgJAEQgkAQgsALIgWAFQh9AVhMgDIgKAAQglAAghgCIgQAAQgMABgVAGIgIACIhGAWIgNAFQgZAHgSABIgHAAIgQABQgdAAgTgNg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AAtLnQgRgPhLglQhigug0gaQjJhjACgvQAAgShIh0QhwizgrhMQjYl/Avi9QBXleIuBuQBUARBWAuQBYAuBCA/QCbCVg3CMQgdBKAKBbQAKBYAsBSQAsBVBDA6QBIA/BVATQCgAjAoAvQASAUADAfQACAQgDAwQgHCQjAAyQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AA5LhQgTgEgdgOIgLgGIgEgCIgfgRIg2gbIgHgEIgxgXIgpgUIgjgRIgMgHIgHgDQhdgxglgiQgWgTgGgRIgKgVIgFgJIgDgKQgKgZgjg6IgGgKIgLgRIgFgJIgGgJQhbiWgqhLIgIgNIgDgGIgDgFIgJgRQjFluAqipIAAgBQArisDBgyQB3gfCSANQA+AEA+ALIAHABIADAAIANACIAPADQAcAFAdAMQAoAOAoAWIACABIADACIAbAPIAWAOQA1AiArAoIACACIACACQAOANANANQAlAoAZAqQAbAvAGAjQABANgBAPQABAPgEAWQAAAGgDANIgHAuQgBADgFAIQgJAtACAmQABAXAOA6QARBCAnBDQAJAQAOADQANAFAPgBQAngHAWATQAVAQAaAOQAvAdA6ATQAeALAgAHIALADIABAAIABAAQBGASAiAfQAZAUAKAbQAFALADAMIAEANIAAADQADAQgCAUIAAACQgCAWgIAqIgBAFIAAABIAAABQgNA2gSAfIgBADIgBACQgXA3g8AjQgbAQgiAMQglAMgnAJIgMACIgDAAQhfAPhAgBQgeAAgagCQgagCgrAIIgFABIgFAAIgCABQgTADgdAJIg+ASIgHACIgEAAIgIACQgNACgKAAQgPAAgLgEg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AAMLRQgHgCgFgEIgDgCQgXgQg+gfIgHgDIgxgYIhOgmIgNgGIgHgEQhfgxgogiQghgZgNgcIgEgKIgDgKQgEgTgmhCIgQgbIgFgJIgGgKQhfifguhSIgDgGIgDgGIgJgRQjMl8AoifIAAgBQAqijDWgrQCDgZCIAOQBBAFA7AJIAHABIADAAIAMACQAfADAnASQAmAQAoAYIACACIADACQAYAPAYARQAzAlAqApIADAEIABABQA1A2AfA+QAaA1AAAhQAAAMgEARIgJAmIgGAUQgEATgBAcQgEA5AIAoQATBkBNBqQATAbAxgwQA1gzAQAGQBAAdBnAbIBNAUIABAAIABAAQBHATAYAtQAQAagCAoQAAAUgEAXIgBADIgIAkQgHAggOApIAAAAIgBABIgfBUIAAADIgBACQgMA/g1ArQg1AphRAVIgLADIgDABQhfAQhBABQhGAFg6gCIgFAAIgFgBIgCABQgeAAhTAaIgIADIgEAAIgIACQgfAIgZAAQgZAAgUgIg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AAlLJIgNgDQgRgDgQgIIgMgGIgDgCIgpgXIgsgWIgHgDIgHgDIgqgUIgkgSIgNgHIgagNIgNgHIgHgDQhFgmghgbQgOgLgKgLQgPgOgLgQIgFgKIgJgRIgEgKIgDgJQgGgSgXgoIgOgZIgBgDIgFgIIgJgQIgFgIIgGgKQhSiNgshRIgDgFIgHgMIgDgFIgCgGIgBgCIgIgPQjJl9AmiSIAAgBQAmiWDigkIAKgCQCGgTB2ALIARABQA5AFAwAGIAHABIADAAIAIABIAEABIACAAIANABQAXADAeAOIAQAIQAdAOAgAUIABABIADADIALAGIADACQARAMARANIAQAMQAoAfAhAjIADADIACACIALAMIACACQApAuAcA2IANAbQAOAhACAWQACAOgDAPIgBAGIgHAeIgFATQgCAOgCARIAAAQIgBAsQABAaAJAZIAFARQAUA2AmAyIAcAjIAAAAIAbAbQAXAXAsgbQAtgfAdAKQAkAOAwAPIBPAWIABAAIABABQAmALAhANIABABIABAAQAUAJAOAMQAbATAJAhIABAFQAFAPABATQABAPgCAQIAAAIQgCAQgEATIgBADIgJAiIAAABQgJAigOAjIAAABIgBABIgJASIgBADQgOAmgNAVIgBADIgBACQgKAZgSAVQgVAZgeATQghAUgnAPIgLADQgZAIgbAGIgLACIgDAAQg3AIgsADIg7ADIhFAFIgFAAIgGAAIgtADIgFAAIgFAAIgDABQgVACglAJIgIACIgMACIggAHIgIABIgEAAIgHABQgOACgNAAQgNAAgMgCg");
	var mask_1_graphics_53 = new cjs.Graphics().p("ABLK/IgEAAIgIAAQgagBgYgIIgNgEQgOgGgRgIIgMgHIgDgCIgrgWIgqgUIgHgEIgHgDIgpgUIgkgSIgNgHIgZgNIgMgGIgGgEQhGgngbgcQgMgLgKgMQgMgPgJgSIgFgKIgIgSIgEgJIgDgJQgJgUgUglIgOgZIgBgCIgFgKIgJgOIgEgIIgFgJQhPiKgrhRIgDgGIgGgLIgDgGIgDgFIgBgCIgHgNQjGmBAjiFIAAAAQAkiIDugfIAKgBQCNgQBpAJIAQACQA7ADAtAFIAHABIADAAIAIABIADAAIACAAIAMABQAXAAAfAQIAPAHQAdAPAeAUIABACIAEACIAKAHIADACIAhAZIAPANQAnAgAhAiIACADIACACIALALIACADQAmArAdA3IANAaQAPAgAFAVQAEAQgCAMIgBAFIgGAdIgEATIgDAeIAAAPIAAAsQABAXANAbIAHAQQAZAyAtArQAPAPARANIAAABIAeAWQAbATAogHQAlgJAqAMQAjAMAvANIBOAWIABAAIACABQAnAMAbARIABABIABABQARALAKAPQATAWABAmIAAAGQAAAQgBASIgDAeIgCAIQgCARgFASIAAADIgKAiIAAAAQgMAkgPAeIgBACIgJARIgBADQgOAhgSAYIgCACIgCACQgOAWgWASQgZATgfAQQgiAQgoALIgKADQgaAGgZAEIgLACIgDAAQg4AHgqgBIg6AEIhFAGIgFAAIgFABIgtAGIgFABIgFAAIgCAAQgXAEghAJIgJABIgLABQgQACgQABIgHAAg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AgPKhIgNgHQghgTg4gbIg3gaQgogUgkgTIgNgHQhqg4gagkQgXgWgNglIgEgMQgHgYglhDIgPgbIgFgKQhYicguhaIgDgGIgMgWQjLmPAhh5IAAAAQAih9EEgXQCggNBgAJQBIAEAvAEIAFAAIAMgBQAZgDArAaQAjASAkAcIAEADQAXARAYAVQAuAoAlAqIADADQAsAyAjBIQAhBCgFAPQgFAPgHA+IACA6QABAZAaAmQAfAvAyAkQASAMASAKIABAAQArAZA5AVQAwAVB1AcIBMAVIABAAQBIAXAOAvQAKAYgHAqQgDAVgFAWIgIAkQgGAhgOAmIAAABQgVA2gUAaIAAACQgYA4g/AkQg+AfhKAQIgLACQhiAOg+gEQg3ABhHALIgFAAIgEABIhvAYIgIABIgMgBIgSACQgnAAgogVg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ABJKpIgCAAQgrADg1gcIgMgGQgkgUg0gZIg2gbIgDgBQgmgSgkgTIgBgBIgMgGQhrg6gWgkIgBgCQgSgTgOgnIgBgEIgCgHQgJgagjhBIgCgDIgNgYIgCgFIgCgEQhUiagwhdIAAAAIgCgFIgMgYQjJmQAchvIABgDQAfhvEPgRIAHgBQCkgJBTAIIAFAAIBxAGIADAAIACAAIALgCIABAAQAYgFArAcIAAABQAiASAjAdIACACIABABQAWARAYAWIADADQArAnAjApIABACIACACQAtA1AgBDQAdA7gBAXIgBADIgFBIIAAAHIAEAyQAEAbAWAjQAfAvAzAjIACACQARAMARAJIABAAIAAABQAqAWA6AVQAqASB5AcIADABQAmAKAjALIABAAIABAAQBHAYALAvIABACQAHAXgJApIAAABIgIAqIAAAAIgIAiIAAACQgFAigPAkIAAABQgUAzgXAbIgBADQgcAzg/AhIgCABQhBAchHAPIgBAAIgLABQhiANg8gFQgyAAhMAPIgEAAIgBAAIgEACQgwALg+AMIgIAAIgKgCg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ABJKhIgLgDIgBAAQgogBg4gfIgLgFIhWgsIg3gaIgCgBQgmgSgkgUIgBgBIgMgGQhtg7gSgkIgBgBQgNgSgPgqIgCgEIgCgGQgKgcghhAIgCgDIgMgXIgCgEIgCgFQhRiXgwhgIAAgBIgCgFIgMgXQjKmZAbhhIAAgCQAchiEbgLIAHAAQCsgGBJAHIAFAAIBwADIADAAIADAAQAGgBAFgCIABAAQAVgGAsAdIAAAAQAgAUAjAeIABABIABABQAVASAYAXIADACQAqAqAiApIABABIABACQAvA6AeA+QAYAyADAgIAAACIAABHIAAAHQABAZAFAYQAGAeAUAgQAdAvA0AjIACABQASALARAJIABABIAAAAQApAVA7AUQAlAPB/AeIACABQAmAJAjAMIABABIABAAQBGAZAIAvIAAADQAFAWgKAqIAAABIgKAoIAAAAIgHAiIAAACQgFAigOAjIAAAAQgUAygaAbIgCADQgfAwhBAeIgDABQhFAahDANIgBAAIgLABQhjAMg7gHQgsgChQAUIgFABIAAAAIgFABQg1APg3AHIgIAAg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AAzKTQgjgEg8giIiZhLQglgSgmgUQh7hDgNglQgKgRgRgvQgLgfgjhGIgOgbQhPiZgxhkIgOgdQjLmiAZhTIAAgBQAahUEtgFQC9gCA6AFQBQACAjgBQAJgBAFgDQATgJAuAgQAfAVAiAgQAWATAZAaQAqArAhArQBXBvASBdIAFBNQAKB7BqBFQATAMASAIQAoAVA7ATQAgAMCFAfQAoAJAjANQBIAbAEAxQAEAWgNAsIgLAoQgFATgCAPQgEAkgOAiQgUAwgeAcQgjAvhIAdQhIAWhBALQhsANg8gJQgngDhVAYIgFABQg8AUg0ADQgLgBgIgEg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ABQKUQglACgmgWIgUgMIhGgjIhWgqIg8geIgPgIQh2g+gXgmQgSgTgJggIgDgLQgJgegkhJIgOgdIgGgOQhKiSgvhhIgNgcIgOgcQjBmYAWhGIAAgBQAOgvCYgVQBHgKBigDQBsgDBPgBIBCABQBLABAqgBQAJAAAFgCQAagHAqAWQAiAOAlAWIAAAAQAbANAaASQA6AdAUAfIAEAIQA0B4AKBhIACBNIACAUQALBjA2A+QALAOANANQAQAOAPALQAkAeA0AaIAJAFQAuAcBkAeIBLAYQAcAKAVANQAdAQALAWQAOASAAAiQAFARAAARIAAAXIAAAJQgBASgFAUIgJAhIgKAcQgLAegSAWQgfA0hGAfQguASgwALIgsAIQhqAPg/gGQgmgCgzAHQgOACgVAGIgGABQgmALgqALQgRAEgQACIgEAAQgIAAgHgCg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AAUKGQgHgGgNgIQgcgPgqgVIhXgpIg+gfIgOgHQhwg6gigmQgagYgEgaIgDgLQgJgegjhMIgNgdIgIgQIh2j1IgOgdIgNgdQjGmlATg9IAAAAQANglCggVQBKgKBhgFQBigFBegCIBDgBIB2gBIAPgBQAggEAmALQAnAHAmAMIACAAQAeAIAbAKQBOARAJAXIABAJQASCCADBkQgBApABAlIABAUQAGBpAnBCQAIAQALAPIAZAhQAfAlAuAhIAIAHQAzArBXAhQAkAOAlANIA0ASQAfAMASAPQAbAPANAXQANAOAHAPQAEAKACAKIABAJQABAQgFAWIgIAiIgHAdQgGAfgOAZQgcA3hFAjQgqAUg1ANIgrAIQhoAPhCgCIhYgCQgNAAgYAGIgFABIhTAZIggAJIgTABQgLACgLAAQgfAAgXgPg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AAkKKQgRgPhLglQhigug0gaQjJhjACgvQAAgVhCiSIiQkzQjNm5ATguQAKgaCqgWQCWgSDagJQDTgICVAFQCjAGgCAUQgbDaACCEQACBwAXBFQAhBgBJBKQBlBoCcAiQCYAiASAtQAGARgGAgQgJAwgBAPQgICPi/AzQjWAohYgXQgXgGhpAoQg2AUgiAAQgZAAgNgMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_1,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_2,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_3,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_4,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_5,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_6,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_7,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_8,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_9,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_10,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_11,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_12,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_13,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_14,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_15,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_16,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_17,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_18,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_19,x:269.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_20,x:269.6,y:316.1}).wait(1).to({graphics:mask_1_graphics_21,x:269.7,y:316.1}).wait(1).to({graphics:mask_1_graphics_22,x:269.9,y:316.2}).wait(1).to({graphics:mask_1_graphics_23,x:270.1,y:316.1}).wait(1).to({graphics:mask_1_graphics_24,x:270.2,y:316.1}).wait(1).to({graphics:mask_1_graphics_25,x:270.4,y:316.1}).wait(1).to({graphics:mask_1_graphics_26,x:270.6,y:316.1}).wait(1).to({graphics:mask_1_graphics_27,x:270.8,y:316}).wait(1).to({graphics:mask_1_graphics_28,x:271,y:316}).wait(1).to({graphics:mask_1_graphics_29,x:271.3,y:316}).wait(1).to({graphics:mask_1_graphics_30,x:271.5,y:316.1}).wait(1).to({graphics:mask_1_graphics_31,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_32,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_33,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_34,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_35,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_36,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_37,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_38,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_39,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_40,x:271.8,y:316.1}).wait(1).to({graphics:mask_1_graphics_41,x:271.8,y:316}).wait(1).to({graphics:mask_1_graphics_42,x:271.8,y:316}).wait(1).to({graphics:mask_1_graphics_43,x:271.8,y:316}).wait(1).to({graphics:mask_1_graphics_44,x:271.8,y:316}).wait(1).to({graphics:mask_1_graphics_45,x:271.3,y:313.9}).wait(1).to({graphics:mask_1_graphics_46,x:271.1,y:311.7}).wait(1).to({graphics:mask_1_graphics_47,x:271.1,y:309.2}).wait(1).to({graphics:mask_1_graphics_48,x:268.9,y:306.9}).wait(1).to({graphics:mask_1_graphics_49,x:268.5,y:304.7}).wait(1).to({graphics:mask_1_graphics_50,x:269.4,y:305.6}).wait(1).to({graphics:mask_1_graphics_51,x:270.9,y:306.6}).wait(1).to({graphics:mask_1_graphics_52,x:270.4,y:307.5}).wait(1).to({graphics:mask_1_graphics_53,x:270,y:308.5}).wait(1).to({graphics:mask_1_graphics_54,x:270.1,y:309.9}).wait(1).to({graphics:mask_1_graphics_55,x:269.9,y:311.1}).wait(1).to({graphics:mask_1_graphics_56,x:269.7,y:312.3}).wait(1).to({graphics:mask_1_graphics_57,x:269.5,y:313.5}).wait(1).to({graphics:mask_1_graphics_58,x:268.6,y:313.5}).wait(1).to({graphics:mask_1_graphics_59,x:269,y:313.7}).wait(1).to({graphics:mask_1_graphics_60,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_61,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_62,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_63,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_64,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_65,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_66,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_67,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_68,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_69,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_70,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_71,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_72,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_73,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_74,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_75,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_76,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_77,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_78,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_79,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_80,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_81,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_82,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_83,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_84,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_85,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_86,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_87,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_88,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_89,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_90,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_91,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_92,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_93,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_94,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_95,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_96,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_97,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_98,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_99,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_100,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_101,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_102,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_103,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_104,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_105,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_106,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_107,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_108,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_109,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_110,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_111,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_112,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_113,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_114,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_115,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_116,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_117,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_118,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_119,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_120,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_121,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_122,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_123,x:269.4,y:314}).wait(1).to({graphics:mask_1_graphics_124,x:269.4,y:314}).wait(1));

	// tanner_r_arm_line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(3).p("AguCeQAVhlARg5QAYhWAgg8");
	this.shape.setTransform(304.2,314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(3).p("AgtCfQAVhhAQg+QAXhXAgg7");
	this.shape_1.setTransform(304.3,314);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(3).p("AgrCfQAThdAQhCQAWhXAgg7");
	this.shape_2.setTransform(304.4,314);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(3).p("AgqCfQAShZAQhGQAVhYAgg6");
	this.shape_3.setTransform(304.5,314);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(3).p("AgqCfQAShVAQhKQAUhYAgg6");
	this.shape_4.setTransform(304.6,314);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(3).p("AgoCfQAQhQAQhPQAThZAgg5");
	this.shape_5.setTransform(304.7,314);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(3).p("AgnCaQAQhNAPhSQAThaAfg5");
	this.shape_6.setTransform(304.8,314.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(3).p("AgmCaQAPhJAPhWQAShbAfg4");
	this.shape_7.setTransform(304.9,314.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(3).p("AglCaQAOhFAPhaQARhbAfg5");
	this.shape_8.setTransform(305,314.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(3).p("AgkCaQAOhBAOhfQAQhbAfg4");
	this.shape_9.setTransform(305.1,314.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(3).p("AgjCaQANg9APhjQAPhcAeg3");
	this.shape_10.setTransform(305.2,314.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(3).p("AgiCaQAMg4APhoQAOhcAeg3");
	this.shape_11.setTransform(305.3,314.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(3).p("AghCaQALg0AOhrQAOhdAdg3");
	this.shape_12.setTransform(305.5,314.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(3).p("AggCaQAKgwAOhvQANheAdg2");
	this.shape_13.setTransform(305.6,314.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(3).p("AgfCbQAKgtANh0QAMheAdg2");
	this.shape_14.setTransform(305.7,314.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(3).p("AgdCbQAIgoANh4QALhfAdg2");
	this.shape_15.setTransform(305.8,314.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(3).p("AgcCbQAHgkAOh9QAKhfAcg1");
	this.shape_16.setTransform(305.9,314.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#231F20").ss(3).p("AgbCbQAHggANiBQAJhfAcg1");
	this.shape_17.setTransform(306,314.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#231F20").ss(3).p("AgaCbQAFgcANiEQAJhhAcg0");
	this.shape_18.setTransform(306.1,314.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#231F20").ss(3).p("AgZCbQAFgYAMiJQAIhhAcg0");
	this.shape_19.setTransform(306.2,314.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#231F20").ss(3).p("AgXCeQgBgVAChNQAAggACgkQAGhlAqgw");
	this.shape_20.setTransform(306.7,315.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#231F20").ss(3).p("AgPCgQgHgZgChMQgDgiAAgkQABhmA8gv");
	this.shape_21.setTransform(306.6,315.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#231F20").ss(3).p("AgHCjQgLgdgHhLQgGgkgCgkQgDhoBNgt");
	this.shape_22.setTransform(306.4,315.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#231F20").ss(3).p("AABClQgOgggNhJQgJgogDgjQgHhpBegs");
	this.shape_23.setTransform(306.1,315.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#231F20").ss(3).p("AAKCoQgUgkgRhJQgMgpgFgkQgMhqBwgr");
	this.shape_24.setTransform(305.9,316.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#231F20").ss(3).p("AAUCqQgYgngXhIQgRg2gHgoQgNhcCAgq");
	this.shape_25.setTransform(305.6,316.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#231F20").ss(3).p("AAdCjQgggogahBQgRglgIgfQgRhxCLgn");
	this.shape_26.setTransform(305.6,315.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#231F20").ss(3).p("AAmCbQgngngdg6QgVglgJgdQgPhuCVgk");
	this.shape_27.setTransform(305.5,314.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#231F20").ss(3).p("AAxCUQgwgngfg1QgagjgKgdQgOhpCggi");
	this.shape_28.setTransform(305.4,314.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#231F20").ss(3).p("AA7CMQg3gngigtQgegjgMgcQgMhlCqgf");
	this.shape_29.setTransform(305.2,313.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#231F20").ss(3).p("ABFCEQg+glgmgoQgjghgMgcQgLhhC1gc");
	this.shape_30.setTransform(305.1,312.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#231F20").ss(3).p("ABSB+QiHhJgdg5QgshZDlge");
	this.shape_31.setTransform(304.7,311.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#231F20").ss(3).p("AAyCKQgdgRgagaQg1gwgQgsQgRhBA0ghQAtgfBWgL");
	this.shape_32.setTransform(305.5,313.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#231F20").ss(3).p("AAUCYQgWgQgagjQgpg0gFg0QgFg7AugpQArgmBOgK");
	this.shape_33.setTransform(306.1,314.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#231F20").ss(3).p("AguCeQgNgNgFgnQgOg5AJgxQALg9AkgmQAsgxBBgJ");
	this.shape_34.setTransform(306.2,315.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#231F20").ss(3).p("AhbCkQgGgKANgyQAPg1AZg2QBGiVBRgK");
	this.shape_35.setTransform(304.2,315.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#231F20").ss(3).p("Ah1CZQgFgSANgsQANgrAcgrQBdiQBsgN");
	this.shape_36.setTransform(301.6,314.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#231F20").ss(3).p("AiPCOQgFgaANgmQAPgrAmgqQBqh2CHgQ");
	this.shape_37.setTransform(299.1,313.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#231F20").ss(3).p("AiqCKQgJhOBUhKQBjhZC1gU");
	this.shape_38.setTransform(296.5,311.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#231F20").ss(3).p("Ai+BoQABghAzgsQAbgYAfgVQAggUAggOQAigQA6gSQA9gQBFgB");
	this.shape_39.setTransform(294.4,309.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#231F20").ss(3).p("AjTBNQAHgRBKgpQBNgqA2gRQAegIBCgTQA/gOBCAH");
	this.shape_40.setTransform(292.4,306.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#231F20").ss(3).p("AjhAvQAbgRA9gbQA4gVA1gLQBFgKA5gHQBAgDA/AP");
	this.shape_41.setTransform(292.4,302.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#231F20").ss(3).p("AjoAZQBigmBvgIQCJgJB3Ar");
	this.shape_42.setTransform(291.7,298);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#231F20").ss(3).p("AjcgHQARgGBKgaQBJgUArAPQBIAaBGAfQAuATA3AU");
	this.shape_43.setTransform(292,294.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#231F20").ss(3).p("AjYhLQAmgHCLAxQB1ApArAXQAwAYA5AV");
	this.shape_44.setTransform(292.4,291.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#231F20").ss(3).p("AjYhOQBBgECDA1QBYAgAyAdQA0AbA4AU");
	this.shape_45.setTransform(292.4,291.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#231F20").ss(3).p("AjdhRQBdgBB5A5QA8AZA6AgQA4AeA3AU");
	this.shape_46.setTransform(292.8,291.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#231F20").ss(3).p("AjkhVQB3AEBwA8QAgARBBAlQA9AhA1AU");
	this.shape_47.setTransform(293.6,290.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#231F20").ss(3).p("AjnhYQB3AEBzA/QAhASBCAmQA+AiA1AU");
	this.shape_48.setTransform(293.3,290.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#231F20").ss(3).p("AjjhbQB3ADB3BDQAhASBEAoQA+AjA2AU");
	this.shape_49.setTransform(292.2,290.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#231F20").ss(3).p("AjghYQAwgCAzAOQA2AOA7AeQA4AgA5AjQAEACAEACQA7AeA5AU");
	this.shape_50.setTransform(292.5,290.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#231F20").ss(3).p("AjYhVQAugFA1AOQAyAOA8AgQA6AhA0AjQAEACAFABQA3AYA7AW");
	this.shape_51.setTransform(292.2,290.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#231F20").ss(3).p("AjWhSQAsgIA2AQQAvANA9AiQAuAaA+AqQA4AUBEAZ");
	this.shape_52.setTransform(292.6,290.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#231F20").ss(3).p("AjThKQArgMA1ANQApALAxAaQA/AkA2AnQA7ARBHAa");
	this.shape_53.setTransform(292.8,291.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#231F20").ss(3).p("AjQhDQBLgdBsA8QA3AfA6AtQA2AKBNAc");
	this.shape_54.setTransform(293.1,291.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#231F20").ss(3).p("AjKguQAhgNAvgBQAtAAAtAWQAsAUAoAaQARAIARAKQA0AIBKAc");
	this.shape_55.setTransform(293.8,293.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#231F20").ss(3).p("AjDgWQAbgLAwgKQAtgJApARQAsAPAnAXQARAFATAHQAyAGBHAb");
	this.shape_56.setTransform(294.4,294.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#231F20").ss(3).p("Ai8ADQAUgIAxgUQAvgQAkALQAsALAmAUQARABAUAEQAwAFBEAZ");
	this.shape_57.setTransform(295.1,295.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#231F20").ss(3).p("Ai2AcQAPgHAygcQAwgZAfAGQAqAFAnATQA3gJBfAi");
	this.shape_58.setTransform(295.7,297);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#231F20").ss(3).p("AivAgQAQgIAugcQAxgbAZAAQALgBAMABQAbABAcAIQA5gKBaAh");
	this.shape_59.setTransform(296.4,299.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#231F20").ss(3).p("AioApQAPgJArgfQAugcAXgFQALgDALgBQAagEAbADQA7gLBVAf");
	this.shape_60.setTransform(297.2,301.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#231F20").ss(3).p("AihA1QAQgKAngfQAqggAWgKQAKgFAKgDQAYgJAcgCQA8gNBRAe");
	this.shape_61.setTransform(297.9,302.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#231F20").ss(3).p("AiaBCQASgOAugpQAngjAagPQBPgwBuAp");
	this.shape_62.setTransform(298.6,304);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#231F20").ss(3).p("AiSBGQANgLAdgcQAiggAOgLQARgQAOgJQAMgIAMgGQBFghBZAc");
	this.shape_63.setTransform(298.9,305);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#231F20").ss(3).p("AiJBLQAMgMAbgcQAggiANgKQAQgQANgKQAMgJALgGQBCgmBVAW");
	this.shape_64.setTransform(299.2,306);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#231F20").ss(3).p("AiBBRQALgNAZgcQAfgjALgKQAQgQAMgLQALgJAKgHQBAgrBRAQ");
	this.shape_65.setTransform(299.5,306.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#231F20").ss(3).p("Ah5BXQAKgNAYgdQAcgjALgLQAOgQAMgMQAKgJAKgHQA9gwBMAJ");
	this.shape_66.setTransform(299.9,307.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#231F20").ss(3).p("AhxBdQAJgNAWgdQAbglAKgLQANgQALgMQAJgKAJgHQA7g1BIAD");
	this.shape_67.setTransform(300.2,308.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#231F20").ss(3).p("AhpBkQAIgOAUgeQAYglAKgLQAMgQAKgNQAJgKAIgIQA4g6BEgD");
	this.shape_68.setTransform(300.6,309.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#231F20").ss(3).p("AhiBsQAHgPASgeQAXgmAIgLQALgQAKgOQAIgLAHgIQA2g+BAgK");
	this.shape_69.setTransform(301,310.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#231F20").ss(3).p("AhbBzQAGgQAQgeQASghALgRQASgfAOgUQAzhCA9gQ");
	this.shape_70.setTransform(301.4,310.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#231F20").ss(3).p("AhWCDQAJgeAOgbQAQgiAKgRQAQgeANgUQAwhHA4gW");
	this.shape_71.setTransform(301.8,311.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#231F20").ss(3).p("AhQCOQALgtALgXQAPgiAJgTQAPgdALgUQAthLA0gb");
	this.shape_72.setTransform(302.1,312.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#231F20").ss(3).p("AhLCaQAOg8AJgVQANghAJgVQAMgbAKgVQAqhPAwgh");
	this.shape_73.setTransform(302.4,313.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#231F20").ss(3).p("AhFCkQAQhKAGgSQAMghAIgWQALgaAJgVQAmhTAsgn");
	this.shape_74.setTransform(302.7,314.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#231F20").ss(3).p("Ag9CiQANhBAIgYQAKggAHgWQANgkAEgKQAhhPAmgr");
	this.shape_75.setTransform(303.2,314.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#231F20").ss(3).p("Ag1CfQAMg4AIgeQAIgeAHgXQAMgiADgKQAbhLAggw");
	this.shape_76.setTransform(303.6,314.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(76).to({_off:false},0).wait(48));

	// tanner
	this.instance_3 = new lib.tanner_body();
	this.instance_3.parent = this;
	this.instance_3.setTransform(350,294.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125));

	// paperds
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(0.3).p("AABALIAmgHIgngOIgmAIg");
	this.shape_77.setTransform(185.4,267.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AANAfIAWgEIAFABIgWAEgAAAAaIBLgPIAEACIhLAPgAgKAWIBLgOIAEABIhKAPgAgUATIBMgPIADACIhKAOgAglANIB/gYIAFACIh/AXgAgwAJIB/gYIAFACIh/AXgAg7AFIB/gYIAFACIiAAXgAhIAAICAgXIAEABIh/AYgAhTgDIB/gYIAFABIh/AZgAhegHIB/gYIAFABIh/AZg");
	this.shape_78.setTransform(174.6,266.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AingMICoghICnA7IioAggAADAhIAEABIAWgDIgFgCgAgKAcIAEACIBLgPIgFgBgAgUAZIAEABIBLgOIgFgCgAgeAVIAEACIBLgPIgEgCgAgwAPIAFABIB/gXIgFgCgAg7ALIAFACIB/gYIgFgBgAhGAHIAFABIB/gXIgFgCgAhSADIAEABIB/gXIgEgCgAhdgBIAEABIB/gXIgEgCgAhogEIAEACIB/gaIgEgBg");
	this.shape_79.setTransform(175.7,266.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]}).wait(125));

	// desk
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AlnAuIDchbIHzAGIh6BVg");
	this.shape_80.setTransform(181.5,267,0.51,0.51);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E9EFF3").s().p("ApOAJIKLhCIISAeIofBVg");
	this.shape_81.setTransform(200.2,264.8,0.51,0.51);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2B201D").s().p("AhIj4ICQgCIAAHcIiQAZg");
	this.shape_82.setTransform(266.6,246.1,0.51,0.51);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3F302B").s().p("AhMDrIgCnkICdAAIAAHzg");
	this.shape_83.setTransform(258.9,246.1,0.51,0.51);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFF7D7").s().p("Ak4k4IJfAAIBVJsIr3AEg");
	this.shape_84.setTransform(262.1,214.9,0.51,0.51);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2B201D").s().p("AgeA/IAAh9IA9AAIAAB9g");
	this.shape_85.setTransform(261.1,231.1,0.51,0.51);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#181311").s().p("AgeA/IAAh9IA9AAIAAB9g");
	this.shape_86.setTransform(264,231.1,0.51,0.51);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2A3B90").s().p("AgeAnIAKgPQAJALANgEQAHgCADgEQAEgEAAgGQAAgFgCgBQgEgCgDABIgLABQgIACgHgGQgHgIABgJQAAgOAIgKQAHgJALgDIAJgBIAHABQAGABAGAGIgJAQQgEgDgFgCQgFgBgFABQgGABgDAFQgDAEAAAFQAAADACACQADACAFgBIALgBQAJgDAHAIQAFAHgBALQABAMgJALQgJAKgMADIgIABQgNAAgKgLg");
	this.shape_87.setTransform(281.9,304.8,0.51,0.51);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2A3B90").s().p("AgIAxIgFgCIgFgDQgFgFgDgIQgDgLAAgNQAAgLADgMQACgIAFgJQAFgHAFgDQAEgDAFgCQAMgDAJAJQAKAMgBAQIAAAPIgsALQgBAKAGAGQAFAGAGgDQALgDAEgKIAKAKQgHAQgSAFIgFABIgFgBgAAAgdQgGABgEAHQgFAIAAAKIAegHQAAgJgFgHQgDgEgFAAIgCABg");
	this.shape_88.setTransform(278.4,305.6,0.51,0.51);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2A3B90").s().p("AgSArQgKgKAAgZQgBgVALgSQAIgNANgEQAIgCAHADQAGADAFAHIgKAPQgFgJgKACQgSAEAAAdQAAAfASgFQAKgDAFgLIAKAKQgDAGgIAJQgFAFgKADIgGABQgIAAgHgHg");
	this.shape_89.setTransform(274.9,306.4,0.51,0.51);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2A3B90").s().p("AgcgqIAPgEIAAAKQAGgMALgDQAKgDAHAHQAJALgCAMIAAA/IgOAEIAAg5QABgIgFgGQgEgEgGABQgGACgDAGQgEAIAAAIIAAA4IgPAEg");
	this.shape_90.setTransform(271.2,307.4,0.51,0.51);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2A3B90").s().p("AgIAxIgFgCQgDgBgCgCQgGgFgCgIQgDgMAAgMQAAgKADgNQACgKAFgHQAEgGAGgEQAEgDAFgCQAMgDAIAJQAKAMgBAQIAAAPIgrAKQgBAJAGAIQAFAFAGgCQALgEAFgJIAKAJQgIARgSAFIgEABIgGgBgAAAgeQgHACgDAGQgEAJAAAJIAdgHQAAgJgEgHQgEgDgEAAIgDAAg");
	this.shape_91.setTransform(267.3,308.2,0.51,0.51);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#2A3B90").s().p("AgGgaIANgDIAABfIgNADgAgGhBIANgDIAAATIgNADg");
	this.shape_92.setTransform(264.6,307.9,0.51,0.51);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2A3B90").s().p("AgSArQgKgJAAgaQgBgVALgSQAIgNAOgEQAHgCAHADQAIAEADAFIgKAQQgFgJgKACQgRAEgBAeQAAAeASgFQALgDAEgLIAKAKQgEAIgHAHQgGAGgIACIgHABQgIAAgHgHg");
	this.shape_93.setTransform(262.1,309.4,0.51,0.51);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2A3B90").s().p("AgkA7IAKgSQANALAPgEQAJgCAGgGQAFgHAAgJQAAgPgNAAIgNABQgMABgIgKQgIgJABgNQAAgRAJgOQAIgMAPgEQASgFAPALIgIATQgMgIgNADQgGACgFAGQgFAGAAAKQAAAGADAEQAEAFAHgBIAKgBQANgBAIAKQAHAJAAAOQAAAmgjAJQgGACgGAAQgPAAgLgLg");
	this.shape_94.setTransform(258.1,309.4,0.51,0.51);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2A3B90").s().p("AgDA7QgGgIABgIIAAg5IgHABIAAgPIAHgBIAAgeIANgDIAAAdIALgCIAAAPIgLACIAAA4QAAAHAGgCIAFgBIAAASIgIACIgEABQgEAAgDgEg");
	this.shape_95.setTransform(253.2,310.8,0.51,0.51);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2A3B90").s().p("AgGgaIANgDIAABfIgNADgAgGhBIANgDIAAATIgNAEg");
	this.shape_96.setTransform(251.3,311,0.51,0.51);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2A3B90").s().p("AgUAwQgJgKABgNIABg/IAOgEIAAA5QgBAIAFAGQAFAFAEgCQAHgBADgHQAFgIgBgIIAAg4IAPgEIAABgIgPADIAAgKQgFAMgMAEIgEAAQgHAAgGgFg");
	this.shape_97.setTransform(248.3,312.6,0.51,0.51);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2A3B90").s().p("AgXgqIAPgDIAAAKQAFgNANgDQAIgDAHAHIgLATQgFgEgFABQgGACgDAFQgFAIABAJIAAA5IgPADg");
	this.shape_98.setTransform(245.2,313.5,0.51,0.51);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2A3B90").s().p("Aggg7IBAgQIAAAUIgwAMIAAAnIApgJIAAARIgpAKIAAA5IgQAFg");
	this.shape_99.setTransform(241.8,313.2,0.51,0.51);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2A3B90").s().p("AgKgKIgHACIAAgOIAHgCIAAgNQAAgMAGgJQAEgHAJgDIAJgCIAAASIgIACQgHAAABAKIAAAMIAOgDIAAAPIgOADIAABQIgOAEg");
	this.shape_100.setTransform(236.9,314.4,0.51,0.51);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2A3B90").s().p("AgNAxQgFgDgDgDQgFgIgBgFQgCgLAAgMQAAgLACgLIAGgPQAEgHAEgEQAHgFAGgCQAHgCAHADQAEABAEAFQAFAHABAFQACAKAAANQAAANgCAKQgCAIgEAHIgDAFIgFAFQgGAGgIACIgFAAQgEAAgEgBgAAAgcQgCABgEADQgDADgCADIgDAJIAAAOIAAAOQABAEACAEQACADADABQAEABACgBQAEgBADgDIAFgGIADgJIAAgcQgBgFgCgDQgCgDgDgBIgDgBIgEABg");
	this.shape_101.setTransform(233.8,316.1,0.51,0.51);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2A3B90").s().p("AgXgqIAPgEIAAAKQAFgMANgDQAHgCAIAFIgLAUQgEgEgGABQgFABgEAGQgFAHABAKIAAA5IgPADg");
	this.shape_102.setTransform(228.9,317.3,0.51,0.51);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2A3B90").s().p("AgNAxQgFgCgDgFQgFgFgBgHQgCgKAAgNQAAgMACgLIAGgPIAIgKQAFgFAIgCQAIgCAGACQAEACAEAFQAFAFABAHQACAPAAAIIgCAXQgCAIgEAHIgEAFIgEAFQgGAGgIACIgEAAQgFAAgEgBgAAAgcQgDABgDACQgDADgCADIgDAJIAAAdQABAEACAEIAFADQAEACACgCQAFgBACgCIAFgGQACgFABgEIAAgOIAAgPIgDgHQgCgEgDAAIgDgBIgEABg");
	this.shape_103.setTransform(225.3,318.1,0.51,0.51);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2A3B90").s().p("AgDA7QgGgIABgIIAAg5IgHACIAAgPIAHgCIAAgeIANgDIAAAdIALgCIAAAPIgLACIAAA4QAAAHAGgCIAFgBIAAASIgIACIgDABQgFAAgDgEg");
	this.shape_104.setTransform(222.3,318,0.51,0.51);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2A3B90").s().p("AgSArQgKgJAAgaQgBgVALgSQAIgNAOgEQAHgCAHADQAHADAFAHIgLAPQgEgJgLACQgSAFAAAdQAAAfASgFQALgDAEgLIALAKQgEAHgHAHQgHAHgIACIgGAAQgJAAgHgHg");
	this.shape_105.setTransform(219.7,319.4,0.51,0.51);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#2A3B90").s().p("AgIAyIgFgCIgFgEQgGgGgCgHQgDgKAAgOQAAgLADgMQACgKAFgHQADgFAHgGQAFgEAEAAQAMgDAJAJQAKALgBARIAAAOIgtAMQgBAIAHAIQAFAGAGgDQALgDAFgKIALAKQgJARgSAFIgEAAIgGAAgAAAgeQgHACgDAGQgFAIAAAKIAegHQABgIgFgIQgEgEgEAAIgDABg");
	this.shape_106.setTransform(216,320.3,0.51,0.51);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#2A3B90").s().p("AgWgrIAOgDIAAAKQAFgNANgDQAIgCAHAGIgKATQgFgEgFACQgHACgCAFQgGAHABAJIAAA6IgPADg");
	this.shape_107.setTransform(213.1,321,0.51,0.51);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2A3B90").s().p("AgGgaIANgEIAABgIgNAEgAgGhBIANgEIAAAUIgNADg");
	this.shape_108.setTransform(210.4,320.6,0.51,0.51);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2A3B90").s().p("Agjg+IAjgJQAJgCAKAEQAIAFAEAJQAEAHABAIQABAFAAAYIgBAeIgGAQQgDAJgJAJQgHAIgMAEIgiAIgAgBgzIgSAFIAABgIASgFQANgDAFgNQADgGAAgGIABgYIgBgZQAAgGgEgGQgDgFgEgCIgGgBIgEABg");
	this.shape_109.setTransform(207.2,321.6,0.51,0.51);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2A3B90").s().p("Agkg/IAkgIQAJgDAJAFQAKAFADAJQAEAHABAIIAAAdQABAMgCASIgBAIIgDAIQgEAJgJAJQgHAIgMAEIgjAIgAgBgzIgTAEIAABgIATgEQANgDAFgNQACgGABgGIAAgyQAAgFgEgGQgCgFgGgCIgFgBIgEABg");
	this.shape_110.setTransform(200.6,323.2,0.51,0.51);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2A3B90").s().p("AgGgHIANgEIAAATIgNAEg");
	this.shape_111.setTransform(197.2,326.7,0.51,0.51);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2A3B90").s().p("AgchBIAOgEIAAAyQAHgNALgEQALgBAGAHQAJAKgBANIAAA/IgPAEIAAg6QABgHgFgGQgEgFgGABQgFACgEAGQgEAHAAAIIAAA6IgPAEg");
	this.shape_112.setTransform(194.2,324.7,0.51,0.51);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#2A3B90").s().p("Agjg+IAkgJQAGgBAGAAQAIABAEAEQAFAEADAHQADAJAAAKQgBARgIANQgHAOgQAEIgXAFIAAA2IgQADgAACgzIgVAFIAAAsIAWgFQAJgDAEgHQAEgIAAgIIgCgMQgBgDgDgCQgEgCgEAAIgEABg");
	this.shape_113.setTransform(190.1,325.6,0.51,0.51);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#ED1F25").s().p("AgGAOIgKgDQgGgDAFgFIAKgKQAFgHAJABIAKADQAEABgBAEQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgKAMQgFAFgGAAIgDAAg");
	this.shape_114.setTransform(245.1,250.4,0.51,0.51);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#ED1F25").s().p("AgEAPQgGgBgFgCQgFgBACgFIABgBIALgNQAIgIAKAEQAMACgHAKIgIAIQgEAHgHAAIgCAAg");
	this.shape_115.setTransform(246.5,250.7,0.51,0.51);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#ED1F25").s().p("AgCAOQgHAAgHgDQgEgBABgEIABgCIALgMQAFgGAHABQAHAAAFADQAEABgBAFIgKAMQgFAGgFAAIgCAAg");
	this.shape_116.setTransform(243.9,251.8,0.51,0.51);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#ED1F25").s().p("AgFAPQgFAAgGgDQgEgBABgEIAMgQQAHgHAIACQAFAAADACQAGACgEAEIgLAPQgEAGgGAAIgCAAg");
	this.shape_117.setTransform(248,250.9,0.51,0.51);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#ED1F25").s().p("AgEAPQgHgBgEgDIgDgCIAAgDIABgCIALgNQAFgGAIABIAJACQAFADgDAFIgKAOQgFAFgFAAIgCAAg");
	this.shape_118.setTransform(246.8,252.5,0.51,0.51);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#ED1F25").s().p("AgQALQgEgBABgFIAMgOQAGgGAHACIALADQAEACgBAEIgKANQgGAGgGAAQgHgBgHgDg");
	this.shape_119.setTransform(245.4,252.1,0.51,0.51);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#ED1F25").s().p("AgQALQgEgCABgEIABgBIAMgNQAFgFAGABQAGAAAGADQAEABgBAFIgMAOQgDAEgGABQgHAAgIgEg");
	this.shape_120.setTransform(245.7,254,0.51,0.51);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#ED1F25").s().p("AgRAMQgEgBACgEIABgCIALgNQAFgHAJACIAKADQAGADgEAFIgLAMQgFAFgHAAQgJgBgEgCg");
	this.shape_121.setTransform(242.6,253.2,0.51,0.51);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#ED1F25").s().p("AgRALQgEgCABgEIABgCIAKgLQAFgFAGAAQAIAAAHADQAHADgGAFIgJAKQgEAHgHgBQgIAAgHgDg");
	this.shape_122.setTransform(244.1,253.6,0.51,0.51);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9D1D1F").s().p("Ag5ARQgIgDACgHIABgCQAGgNAOgHQANgHAOAAQAQgCAQACQATAAASAEQAEAAADAEQAEADgBAFIgBAFQgBADgEADIABgDQABgCgBgDQgBgDgDgBIgBAAQgJgDgJgBQgXgDgTABQgPgBgMAHQgJAFgGAIQgGAKALAEIAUADQAAAAABAAQABAAAAAAQAAAAABAAQAAABAAAAg");
	this.shape_123.setTransform(249.2,247.4,0.51,0.51);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#ED1F25").s().p("AhKAzQAKgWAPgQQAmgpAxgdQAUgLAWABIACAAIgIACQgaAKgWAPQgjAXgeAfQgUAVgTAeIgCADIgBABQADgKAEgIg");
	this.shape_124.setTransform(241.4,248.1,0.51,0.51);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#ED1F25").s().p("AgLA4IgXgCIgDgBQgggGgbgKIgDAAIgCgBQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAIgFgCIgDgCQADgBACACQAmAKARADQAWAFAYAAQAPABAQgGQAPgHALgOQARgUAfgsIAMgQIAAABIggA4QgKATgRAQQgOAPgVAEIgRACIgMgBg");
	this.shape_125.setTransform(245.6,253.4,0.51,0.51);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9D1D1F").s().p("AAEA3QgHgBgGgCIgGgEQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgLACgLgGIgCgBQgCgDgGABQgJACgKgEQgDgCgCgDQgCgEACgDIAAgCQAIgNAJgHQAFgEADgEQADgGAHgHQAFgGAHgCQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgFADgDQAGgIAIgGQAGgFAGABQAJgBAHAFQAEADAFgBQALgDAKAIQABAAAAAAQABABAAAAQAAAAABAAQAAgBAAAAQAKgDAKADQAEABACAEQACADgBAEQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgMAQQgCADgGADQAAAAgBAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAFgDADQgFAJgJAIQgEADgCAGIgCAFIgJAMQgFAHgJAAIgDAAgAgDAWIgLAOQgEADAEADIABABQAIAFAGgBQAHAAADgFIALgNQAEgDgEgEIgCgBQgFgDgGAAIgDAAQgEAAgFAEgAgiAQIgKAMQgDACADAEIACACQAGACAIABIAAAAQAJAAAEgGIAJgLQAFgFgGgDQgHgEgIAAQgHAAgFAGgAg+AJIgMANQgCAEADACIABABQAGADAGAAQAJAAAFgFIALgNQADgDgBgCQAAgBgEgCIgKgDIgDAAQgIAAgEAGgAATgGIgKAOQgDADADADIACABQAFACAGABQAHABAGgGIAKgOQADgFgFgCIgJgCIgDgBQgHAAgFAFgAgJgMIgKAMQgDADADADIABABQAIAEAGAAQAHAAAFgGIAJgLQADgDgDgDIgCgCIgLgDIgDAAQgFAAgFAFgAgmgSIgLAMQgDADACADIADABQAHADAHAAQAIAAAFgFIAJgLQADgDgDgEIgCgBQgHgDgFAAIAAAAIgBAAQgHAAgFAFgAAqgjQgGAGgFAJQgDADAEADIABABQAEACAHAAIAAAAQAIAAAFgFIALgQQADgEgFgDIgIgBIgEgBQgHAAgFAGgAANgoIgLANQgCAEADADIABABIALACQAKACAFgIIAHgKQAFgFgCgDQgBgCgGgBIgHgCQgHAAgGAGgAgPgtIgKAMQgEAFAGACIAKADQAIABAFgGQAGgFAFgIQADgCgDgEIgCgBQgFgCgEgBIAAABIgCAAQgIAAgFAFg");
	this.shape_126.setTransform(245.5,252.3,0.51,0.51);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#28283D").s().p("AgKATIgLAAIgDAAIgDgBIgUgDQgLgEAGgKQAGgIAJgFQAMgHAPABQATgBAXADQAJABAJADQAHACgCAHIAAABIgBACIgBABQgHAMgNAFIgJABIgSAAIgQAAg");
	this.shape_127.setTransform(249.4,247.6,0.51,0.51);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#9D1D1F").s().p("AhNBIQgGgEgCgHIgCgJIACABQADAFAHABQAGACAFgDQAbgJAUgVIBkhlQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAAGgDAFQgLAUgPASQgaAdgfAeQgQASgaAOQgMAFgMABIgCAAQgGAAgFgEg");
	this.shape_128.setTransform(241.8,249.5,0.51,0.51);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9D1D1F").s().p("Ag+BxQg5gIgcgPIgUgOQgCgCgEgLIgEgPQgCgKABgIIALAHQAUALAWAIQAEACAEAAQACACADAAIACABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAABAAIADAAQAfALAcAFIAEABIANACIAdACQAZgBASgQQAZgWANgcIAhg7QASgeATgVQALgOAKgKQAEALABAHQACASAAAOQAAAWgLATQgwBcgSAQQgSARgUAOQgeAHgiAAQgdAAghgGg");
	this.shape_129.setTransform(246,252.1,0.51,0.51);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#ED1F25").s().p("AgaBzQgGAAgGgDQAHAAAPADQAOABAPgCQAVgEAOgPQAQgOALgVIAhg5IAAgBIgNAQQgeAsgSAVQgMAOgOAHQgOAFgQAAQgYAAgXgFQgXgFgggIIgFgBIADACIgIgCQgUgHgVgMIgMgIQABgIAEgFQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBQgGgOAFgOQAKgbARgUQAqgxA5geQAVgMAZAGQALACADALQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAXgBIAUgBIAsAAQAaAAAZAGQAIADAFADQAEACACAEIgWAYQgWAbgPAYIgfA7QgPAcgYAWQgSARgaAAQgPAAgOgCgAgXBUQACADAEACIAOADQAJABAIgIIAIgMIACgFQABgFAFgEQAKgKAEgHQAEgEgCgFQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAFgCADgEIAMgQQACgEAAgEQgBgDgEgCQAAgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgKgEgJAEIgEAAQgKgIgLADQgGABgEgDQgHgFgGABIgBAAQgHgBgGAFQgIAGgGAHQgDADAAAFIgBACQgHACgFAGQgGAFgEAIIgHAJQgMAIgFAMQgCADAAAEQABAEADACIACAAQAKAFAJgCQAHgBABADIACABQALAGAMgCIABAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAgAikAqQABAHAHAEQAFAEAHAAQANgBALgFQAagOARgSQAggdAZgeQAOgRAMgVQACgFAAgHQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIhABEQgVAVgPAMQgSAUgcAKQgGADgFgCQgHgBgDgFQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAFACAFgAgvhmQgyAdgmAqQgQARgKAUIgGARIAAAAIACgCQAQgaAYgZQAeggAjgXQAXgPAagKIAHgCIgCAAIgDAAQgVAAgRAKgABLgiIATAAQAEAAAGgDQAMgEAIgMIABgCIAAAAQACgCABgGQADgEgCgEQgBgFgEgCIgFgBQgRgFgUAAIggAAQgPAAgNAIQgNAHgHAOQgBADAAADQABADAEACIACABIAQAEIAVADIADAAIARACIAFAAIAFAAg");
	this.shape_130.setTransform(245.8,250.4,0.51,0.51);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2B3990").s().p("Agch3IA7gMIBCDcIg5ANIgIglIg+ANIgJApIg5ANgAgTAZIAngIIgUhQg");
	this.shape_131.setTransform(285,291,0.51,0.51);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2B3990").s().p("AhZhoIA3gKIBGB3IAAiFIA2gKIAADuIg2AMIhFh1IAACEIg4AMg");
	this.shape_132.setTransform(274,292.9,0.51,0.51);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2B3990").s().p("Agfh9IBCgNIBJDmIg/AOIgKgmIhEAOIgKArIhAAOgAgUAZIAqgIIgVhUg");
	this.shape_133.setTransform(262.4,295.6,0.51,0.51);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#2B3990").s().p("AhihsIA8gMIBOB8IAAiLIA8gLIAAD6Ig8ANIhNh6IAACLIg+ANg");
	this.shape_134.setTransform(250.3,297.7,0.51,0.51);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#2B3990").s().p("AgiiEIBIgOIBRDxIhGAPIgLgoIhLAQIgLAuIhGAPgAgXAbIAwgKIgZhYg");
	this.shape_135.setTransform(237.5,300.8,0.51,0.51);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#2B3990").s().p("Ahph5ICFgZQAhgHARAQQATASgBAaQABAXgOAUQgIANgQAKQAVAAAPAQQANAQgCAXQABATgJAUQgIASgOAMQgMAKgPAFQgRAGgOAEIh7AbgAADANIgjAIIAAA2IAjgIQAPgCALgLQAIgKgBgLQABgLgIgHQgHgEgIAAQgFAAgGACgAgBhWIgfAGIAAAzIAfgHQAMgCAKgJQAHgJAAgLQABgKgIgHQgGgEgHAAQgFAAgEACg");
	this.shape_136.setTransform(224.7,303.3,0.51,0.51);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2B3990").s().p("AgjgeIBHgPIAABMIhHAPg");
	this.shape_137.setTransform(209.5,311.1,0.51,0.51);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#2B3990").s().p("Ah7h+ICDgZQAZgGAeACQASAEALAQQANAUgBAXQABAVgJAUQgKAUgPAMQgMAKgPAHQALABAJAEQAFADAHAJQAHAHAEAIIAlBJIhXASIgphMQgEgMgJgHQgKgFgKACIgHACIAAByIhPASgAgIhbIgjAHIAAA5IAhgHIAUgIQAIgEAEgHQAGgJgBgIQACgMgKgIQgEgDgJAAIgOACg");
	this.shape_138.setTransform(199.6,308.5,0.51,0.51);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2B3990").s().p("Ah6iDIB7gYQAdgHAdAGQAWAGAPASQAPATAGAWQAGAaAAAcQABAlgLAjQgJAagRAWQgPATgWAMQgWAMgbAGIh7AbgAgShWIgUAFIAACdIAUgFQAUgDAQgLQAMgKAFgPQAHgYgBgaQAAgtgOgPQgJgKgSAAQgIAAgKACg");
	this.shape_139.setTransform(184.2,311.8,0.51,0.51);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FDF5A4").s().p("As0PCQg7AAgpgpQgpgpAAg7IAA5oQAAg7ApgqQApgpA7AAIZoAAQA7AAAqApQApAqAAA7IAAZoQAAA7gpApQgqApg7AAg");
	this.shape_140.setTransform(106.9,324.9,0.51,0.51);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FEEA98").s().p("A18R9QhAgKg6gjQiChPAAh4IAA2DQAAhVA2hBQA3hCBTgOMAs0gGVQB7gVA5AUQBJAaAABkIgVRLQAABjgMAuQgUBJg9AXMgsJAMvQgkAOgqAAQgVAAgXgEg");
	this.shape_141.setTransform(218.7,315.1,0.51,0.51);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FEF7BC").s().p("EgjQACOMA0RgF+ISQAAMgqiAHhg");
	this.shape_142.setTransform(180.2,268.6,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]}).wait(125));

	// dr_ban_brrows
	this.instance_4 = new lib.dr_ban_brrows();
	this.instance_4.parent = this;
	this.instance_4.setTransform(138.3,215.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({y:215.1},0).wait(1).to({y:214.8},0).wait(1).to({x:138.4,y:214.4},0).wait(1).to({y:214.1},0).wait(1).to({x:138.5,y:213.8},0).wait(1).to({y:213.5},0).wait(1).to({x:138.6,y:213.2},0).wait(1).to({y:212.9},0).wait(1).to({x:138.7,y:212.5},0).wait(1).to({y:212.2},0).wait(1).to({x:138.8,y:211.9},0).wait(12).to({x:138.7,y:212.3},0).wait(1).to({x:138.6,y:212.8},0).wait(1).to({y:213.2},0).wait(1).to({x:138.5,y:213.7},0).wait(1).to({x:138.4,y:214.1},0).wait(1).to({y:214.5},0).wait(1).to({x:138.3,y:215},0).wait(1).to({y:215.4},0).wait(58));

	// dr_ban_eyes
	this.instance_5 = new lib.dr_ban_eyes();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.1,223.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({y:224.3},0).wait(1).to({y:224.6},0).wait(1).to({y:225},0).wait(1).to({y:225.3},0).wait(1).to({y:225.7},0).wait(1).to({y:226},0).wait(1).to({y:226.4},0).wait(6).to({x:136.2,y:226.1},0).wait(1).to({x:136.3,y:225.8},0).wait(1).to({x:136.4,y:225.6},0).wait(1).to({x:136.5,y:225.3},0).wait(1).to({x:136.6,y:225},0).wait(1).to({x:136.7,y:224.7},0).wait(1).to({x:136.8,y:224.4},0).wait(1).to({x:136.9,y:224.2},0).wait(6).to({x:136.7,y:224.5},0).wait(1).to({x:136.6,y:224.8},0).wait(1).to({x:136.5,y:225.1},0).wait(1).to({x:136.4,y:225.4},0).wait(1).to({x:136.3,y:225.8},0).wait(1).to({x:136.2,y:226.1},0).wait(1).to({x:136.1,y:226.4},0).wait(25).to({y:226.2},0).wait(1).to({y:225.9},0).wait(1).to({y:225.7},0).wait(1).to({y:225.4},0).wait(1).to({y:225.2},0).wait(1).to({y:224.9},0).wait(1).to({y:224.7},0).wait(1).to({y:224.4},0).wait(1).to({y:224.2},0).wait(1).to({y:223.9},0).wait(32));

	// dr_ban_mouth
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#231F20").s().p("AgFAcQgegEgYgVQgVgSACgMIAVAUQAaAUAbADQAaAEAfgNQAQgGAKgGQgCALgZAMQgWAKgXAAIgMAAg");
	this.shape_143.setTransform(135.5,234,0.58,0.58);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#231F20").s().p("AgDAQQgRgCgOgNQgMgKABgHIAMAMQAPALAQACQAPADASgIQAJgDAGgEQgCAGgOAHQgNAHgNAAIgHgBg");
	this.shape_144.setTransform(135.5,234);
	this.shape_144._off = true;

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#231F20").s().p("AADATIgHAAQgTgDgMgOQgKgKABgKIAAAAIALAKIACACQAMAJAMADIAIABQAKABALgDIANgFIAAABQAHAAADgBQAAACgDADQgEAEgIAEQgMAGgNAAIgCAAg");
	this.shape_145.setTransform(135.4,234.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#231F20").s().p("AABAWIgIgBQgUgDgKgQQgIgLACgMIAAAAIALALIACACQANAIANADIAIABQAKABAMgEQAHgBAGgEIAAACIAGADQgBADgDADQgEAFgIAEQgLAGgPAAIgCAAg");
	this.shape_146.setTransform(135.3,234.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#231F20").s().p("AgBAZIgIgCQgWgEgIgSQgGgKACgOIAAgBIAMALIADADQANAJANABIAJABQALAAALgDQAJgDAGgEIgBADIABAJIgEAFQgEAHgHAEQgLAGgPAAIgEAAg");
	this.shape_147.setTransform(135.3,234.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#231F20").s().p("AgIAvQhSgHANhXIAVAUQAaAVAbAEQAaADAfgMQAQgGAKgIQgFAdgJAOQgUAegqAAIgMgBg");
	this.shape_148.setTransform(135.4,235.1,0.58,0.58);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#231F20").s().p("AgFAcQgvgFAIgyIAMAMQAPAMAQACQAOACASgHQAJgDAGgFQgDARgFAIQgMARgZAAIgGAAg");
	this.shape_149.setTransform(135.4,235.1);
	this.shape_149._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_143}]}).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_143).to({_off:true},1).wait(58).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(1).to({_off:false},0).wait(57).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(64).to({_off:false},0).wait(24).to({_off:true},1).wait(36));

	// dr_ban
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#231F20").ss(1.2).p("AByhAQgWgdgigOIABgEQAAgMgbgIQgagIglAAQgmAAgbAIQgbAIAAAMQAAAMAcAIQgqAqABA6QAAA2AhAnQAgAmAuAAQBFAAANgjQAFgNgBgaQgCgfAAgSQAAgQgBgHQASATATAIQATAIAMgJQANgJgDgYQgEgZgSgag");
	this.shape_150.setTransform(105.3,282.8,0.58,0.58);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E8ECEE").s().p("AhnBmQghgnAAg2QgBg6AqgqQgcgIAAgMQAAgMAbgIQAbgIAmAAQAlAAAaAIQAbAIAAAMIgBAEQAiAOAWAdQASAaAEAZQADAYgNAJQgMAJgTgIQgTgIgSgTIABAXIACAxQABAagFANQgNAjhFAAQguAAgggmg");
	this.shape_151.setTransform(105.3,282.8,0.58,0.58);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#231F20").s().p("AhBD2QgLhWAMiBQANh6Awh0QAqhkASACQASABgFAXQgDAPgUAuQgzB3gIBNQgIBUACCIQABBRgTAZQgEAEgEAAQgMAAgJg8g");
	this.shape_152.setTransform(105.3,265.1,0.58,0.58);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#754C29").s().p("AhHBEQgDgEgHgFQAAgUALgYQAMgXAWgWQAZgZAcgMQAcgLAVAFIAHAGQARAQgOAeQgMAageAbQgeAbgcALQgPAGgLAAQgNAAgIgIg");
	this.shape_153.setTransform(157.4,328.9,0.58,0.58);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#754C29").s().p("AhZgQQAUgXANgMQARgXAcAKQAPAFAkAbQAnAdAEAEQAPASgQAXQgdAMgXAOQhPgLgohJg");
	this.shape_154.setTransform(166.6,165.5,0.58,0.58);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFD449").s().p("AFuVYQgMgMgugfIheg+Qhvg2hxhxQh6h6hgiiQjmmEAAnMQAAkZBgkHQBUjnCTjAQCDirCWhnQCPhiBpAAQAbgBAZAMQh5AJiJBqQiKBshzCxQh8C9hGDjQhND6AAEFQAADwBDDzQA9DeBrC+QBlC1B1BtQB2BtBlAFQAIAeAnAaQAnAbAhgCQgcAWgYAIQgLADgIAAQgOAAgIgIg");
	this.shape_155.setTransform(132,253.5,0.58,0.58);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FEE465").s().p("AFQVYQgNgMgtgfIheg+Qhwg2hxhxQh6h6hgiiQjmmEAAnMQAAkZBgkHQBUjnCTjAQCDirCWhnQCPhiBpAAQBeAAgBBpQAABKg8DYQhREngdCRQg8EkAAECQAAE6BSFjQATBTAsCqQAjCGAKA5QAJAhAMAXQAPAeAYAXQARAPgNAeQgMAbgeAcQgeAbgdALQgPAGgMAAQgMAAgIgIg");
	this.shape_156.setTransform(133.7,253.5,0.58,0.58);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FEE465").s().p("AiKC2QgZgTgDggQgDgdAPgeQAzhnBDhUQAigqAWgVQARgXAcAJQAQAGAkAaQAoAeADAFQAPASgRAWQgxAUg2AoQhqBQgSBkQgGAggTAHQgEACgFAAQgQAAgTgOg");
	this.shape_157.setTransform(162.1,172.9,0.58,0.58);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#231F20").s().p("AhCFJQgggGgJgFQgXgLAGgZQARhIgKjxIgNjjQgCgiAEgOQAHgTAVgCIAWgHQARgCgHAOQgNAbABARQAIEXAcCWQAPBKAMATQDNA6hNAYQgcAJg5ABQg2AAgmgHg");
	this.shape_158.setTransform(148.1,326.5,0.58,0.58);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#231F20").s().p("AhLGfQgagEgSgKQgYgPAGgZQAYhbAZkOIAUj6IgMhkQgIhHAUAAIAbCrQAVAAAFAQQACAIgCAmQgPEWAHCIQAEBDAHAMQDSBShRAZQghAKg1AAQgtAAg9gHg");
	this.shape_159.setTransform(129.5,323.6,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]}).wait(125));

	// dr_ban_l_arm
	this.instance_6 = new lib.ban_l_arm();
	this.instance_6.parent = this;
	this.instance_6.setTransform(142.5,247.7,1,1,0,0,0,-17.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0.2,regY:-0.1,rotation:-5.4,x:159.4,y:239.5},0).wait(1).to({rotation:-10.7,x:158.5,y:237.9},0).wait(1).to({rotation:-16,x:157.5,y:236.5},0).wait(1).to({rotation:-21.2,x:156.4,y:235.1},0).wait(1).to({rotation:-13.4,x:158.1,y:237.1},0).wait(1).to({rotation:-5,x:159.4,y:239.6},0).wait(1).to({rotation:3.4,x:160.4,y:242.1},0).wait(1).to({rotation:11.7,x:161,y:244.8},0).wait(1).to({rotation:9.1,x:160.9,y:243.9},0).wait(1).to({rotation:4.2,x:160.5,y:242.3},0).wait(1).to({rotation:-0.7,x:160,y:240.8},0).wait(1).to({rotation:-5.6,x:159.3,y:239.4},0).wait(1).to({rotation:-10.5,x:158.6,y:238},0).wait(1).to({rotation:-15.3,x:157.7,y:236.6},0).wait(1).to({rotation:-20.1,x:156.7,y:235.4},0).wait(1).to({rotation:-15.3,x:157.7,y:236.6},0).wait(1).to({rotation:-6.5,x:159.2,y:239.1},0).wait(1).to({rotation:2.2,x:160.3,y:241.7},0).wait(1).to({rotation:10.9,x:161,y:244.5},0).wait(1).to({rotation:19.5,x:161.3,y:247.3},0).wait(1).to({rotation:28.1,x:161.1,y:250.1},0).wait(1).to({rotation:36.6,x:160.5,y:252.8},0).wait(1).to({rotation:45.1,x:159.6,y:255.5},0).wait(1).to({rotation:53.5,x:158.3,y:257.9},0).wait(1).to({rotation:61.9,x:156.6,y:260.1},0).wait(1).to({rotation:70.2,x:154.7,y:262},0).wait(1).to({rotation:78.4,x:152.5,y:263.6},0).wait(1).to({rotation:81.3,x:151.7,y:264.1},0).wait(1).to({rotation:81.4},0).wait(1).to({rotation:81.5},0).wait(1).to({rotation:81.6,x:151.6},0).wait(1).to({y:264.2},0).wait(1).to({rotation:81.7},0).wait(1).to({rotation:81.8},0).wait(1).to({rotation:81.9,x:151.5},0).wait(2).to({rotation:82},0).wait(1).to({rotation:82.1},0).wait(1).to({rotation:82.2},0).wait(1).to({x:151.4,y:264.3},0).wait(1).to({rotation:82.3},0).wait(1).to({rotation:82.4},0).wait(2).to({rotation:82.5},0).wait(1).to({rotation:82.6,x:151.3},0).wait(1).to({rotation:82.7},0).wait(2).to({rotation:82.8},0).wait(1).to({rotation:82.9,x:151.2,y:264.4},0).wait(2).to({rotation:83},0).wait(1).to({rotation:83.1},0).wait(1).to({x:151.1},0).wait(1).to({rotation:83.2},0).wait(1).to({rotation:83.3},0).wait(2).to({rotation:83.4},0).wait(1).to({x:151},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:83.6,y:264.5},0).wait(2).to({rotation:83.7},0).wait(1).to({rotation:83.8},0).wait(1).to({x:150.9},0).wait(1).to({rotation:83.9},0).wait(2).to({rotation:84},0).wait(1).to({rotation:84.1},0).wait(1).to({x:150.8},0).wait(1).to({rotation:84.2},0).wait(1).to({y:264.6},0).wait(1).to({rotation:84.3},0).wait(2).to({rotation:84.4},0).wait(1).to({rotation:84.5},0).wait(1).to({x:150.7},0).wait(1).to({rotation:84.6},0).wait(2).to({rotation:84.7},0).wait(2).to({rotation:84.8},0).wait(1).to({x:150.6},0).wait(1).to({rotation:84.9},0).wait(1).to({y:264.7},0).wait(1).to({rotation:85},0).wait(2).to({rotation:85.1},0).wait(2).to({rotation:85.2,x:150.5},0).wait(2).to({rotation:85.3},0).wait(2).to({rotation:85.4},0).wait(2).to({rotation:85.5},0).wait(1).to({x:150.4},0).wait(2).to({rotation:85.6},0).wait(1).to({y:264.8},0).wait(1).to({rotation:85.7},0).wait(2).to({rotation:85.8},0).wait(2).to({x:150.3},0).wait(1).to({rotation:85.9},0).wait(2).to({rotation:86},0).wait(3).to({rotation:86.1},0).wait(3).to({rotation:86.2,x:150.2},0).wait(2).to({rotation:86.3},0).wait(2).to({rotation:79.8,x:152.1,y:263.9},0).wait(1).to({rotation:67.9,x:155.3,y:261.5},0).wait(1).to({rotation:56.1,x:157.8,y:258.6},0).wait(1).to({rotation:44.6,x:159.6,y:255.3},0).wait(1).to({rotation:33.2,x:160.8,y:251.7},0).wait(1).to({rotation:21.9,x:161.3,y:248.1},0).wait(1).to({rotation:10.9,x:161,y:244.5},0).wait(1).to({rotation:0,x:160,y:241},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(332.9,361.6,355,212.5);
// library properties:
lib.properties = {
	id: '248ED24747A54BC6B999639966D4BB6A',
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
an.compositions['248ED24747A54BC6B999639966D4BB6A'] = {
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