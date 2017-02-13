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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA7g1IhtAAABAgSIiVAgABWALIhVAr");
	this.shape.setTransform(8.6,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,19.3,12.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABYAcQgogegngNQgmgNg0ADQglACABgEQAEgLAmgGQAugGAtAPQAuAPAgAdQAcAagEALIgBABQgFAAgYgTg");
	this.shape.setTransform(5.1,2,0.428,0.428,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,10.2,4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("Ah5AhQgCgMAggUQAlgXAwgIQAvgHArALQAlAKABALQABAFgkgGQgygJgoAHQgoAGgtAWQgaAOgFAAIgCgBg");
	this.shape.setTransform(5.2,1.4,0.428,0.428,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,10.5,2.9), null);


(lib.r_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2).p("AjjgRQABhRA4g5QA4g6BPAEQAtACAhAlQAIAIA4BSQAWgrARgLQAVgNAmANQAUAIADAkQACAjgRAqQgTAsgeAjQAGAEADAFQALATgWAfQgXAggrAYQgqAZgmAEQglAEgMgTQgFgJADgNIAAAAQhTgBg3g4Qg3g3ABhOg");
	this.shape.setTransform(22.8,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AghDDQgFgJADgNIAAAAQhTgBg3g4Qg3g3ABhOQABhRA4g5QA4g6BPAEQAtACAhAlQAIAIA4BSQAWgrARgLQAVgNAmANQAUAIADAkQACAjgRAqQgTAsgeAjQAGAEADAFQALATgWAfQgXAggrAYQgqAZgmAEIgNAAQgaAAgKgPg");
	this.shape_1.setTransform(22.8,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_hand, new cjs.Rectangle(-1,-2.4,54,45.5), null);


(lib.r_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ACsDgQiXhChyhMQhbg9hriEQhuiJAggYQAXgRBpB4QCECWA4AjQAmAYBVAmICVBBQCvBPgTAmQgHAPgcAAQgyAAh2gzg");
	this.shape.setTransform(38.7,27.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_arm, new cjs.Rectangle(1,0,75.5,55), null);


(lib.phone_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABHgZIiNAz");
	this.shape.setTransform(7.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone_line, new cjs.Rectangle(-1,-1,16.1,7.2), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C55C64").s().p("AAAB4QhSgBg5gkQg2gigMgxQgQg8AfgbQAtgmCSAHQCOAHAqAcQAmAZgQA9QgOAyg2AhQg4AihQAAIgDAAg");
	this.shape.setTransform(21.1,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C55C64").s().p("AgDBtQhOgBg6giIgGgEQgvgegPgqQgHguAXgYIAHgHQAtggB6AEIATABQCEAGAvAaQAYAOAEAbQAAAQgHATQgJAagVAUQgQARgYANQgzAchBADIgKAAIgJAAg");
	this.shape_1.setTransform(21.3,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C55C64").s().p("AiKBAIgGgDQgtgbgSgmQgCgoAYgWIAIgGQAxgcBwADIATABQB8AGAzAYQAXAMAHAYQgCAPgIARQgLAWgVATQgRAOgWAMQg0Aag+ACIgSABQhJgBg8ghg");
	this.shape_2.setTransform(21.3,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C55C64").s().p("AgGBXQhEgCg/geIgFgCQgsgZgVghQAEgjAZgSIAIgGQA1gZBoAEIASABQBzAFA4AVQAWALAKAVQgEAMgJAPQgNAUgWAQQgRAOgVAKQg1AYg6ACIgJAAIgIAAg");
	this.shape_3.setTransform(21.3,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C55C64").s().p("AgHBMQhAgChAgcIgEgCQgrgWgZgdQAKgdAbgQIAIgEQA5gWBeADIASABQBrAFA7ATQAXAKAMARQgGALgLAMQgOASgWAOQgRALgVAKQg2AVg1ACIgRAAg");
	this.shape_4.setTransform(21.3,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C55C64").s().p("AgIBBQg8gChBgaIgEgCQgpgTgcgZQAPgWAdgNIAHgEQA+gSBVADIARABQBiAEBAARQAWAHAOAOQgHAKgMAKQgPAOgXANQgSAKgUAHQg3AUgxABIgIAAIgIAAg");
	this.shape_5.setTransform(21.2,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C55C64").s().p("AgJA1Qg3gChEgXIgDgCQgogRgfgUQAVgQAegLIAIgCQBBgPBMACIARABQBZAEBFAPQAVAGARAKQgJAIgNAJQgRALgXAKQgTAIgTAHQg3ARguABIgPgBg");
	this.shape_6.setTransform(21.2,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C55C64").s().p("AgKArQgzgDhFgVIgDgCQgmgOgjgPQAbgLAfgHIAIgCQBGgMBDADIAQABQBRADBIAMQAWAFATAHIgZANQgTAIgYAIQgTAHgSAFQg4APgqAAIgGAAIgIAAg");
	this.shape_7.setTransform(21.2,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C55C64").s().p("AiDAIIhLgWIBBgKQBOgJA/ACQBiAEBsARQgfAKgpAKQhSAWgyAAQgwAAhVgYg");
	this.shape_8.setTransform(21.2,13.4);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C55C64").s().p("AgKAsQgzgDhFgVIgDgCQgngOgigQQAagMAfgIIAIgCQBFgMBFADIAQABQBSADBIANQAVAFATAHIgZANQgSAJgYAIIgmANQg3APgqAAIgPAAg");
	this.shape_9.setTransform(21.2,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C55C64").s().p("AgJA5Qg4gDhDgYIgEgCQgogRgegVQATgSAegMIAHgDQBBgPBPACIAQABQBcAEBDAPQAWAHAQALIgVASQgRAMgXALQgSAIgUAHQg3ASgvABIgPAAg");
	this.shape_10.setTransform(21.2,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C55C64").s().p("AgIBFQg9gChBgaIgEgDQgqgUgagaQANgZAbgPIAIgEQA7gTBaADIARABQBmAEA+ASQAXAIANAQQgIAKgKALQgQAQgVANQgTAKgVAJQg1AUgzABIgRAAg");
	this.shape_11.setTransform(21.3,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C55C64").s().p("AgGBSQhDgBg/gdIgFgDQgrgXgXggQAGggAbgRIAHgFQA4gYBjADIASABQBvAGA6AUQAWAKALATQgFAMgKAOQgNATgWAPQgRANgVAKQg2AXg3ABIgJAAIgIAAg");
	this.shape_12.setTransform(21.3,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C55C64").s().p("AgFBfQhIgBg9ggIgFgDQgtgagTglQAAgnAZgUIAHgGQAzgcBtAEIATABQB5AGA1AXQAXAMAHAXQgCANgJARQgLAWgVARQgRAPgWALQg1Aag8ACIgJAAIgJAAg");
	this.shape_13.setTransform(21.3,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C55C64").s().p("AiLBIIgGgDQgvgegPgpQgHguAYgYIAHgGQAuggB4AEIATABQCDAGAwAaQAXANAFAbQAAAQgIATQgJAZgVAUQgQAQgXANQg0AchBADIgSAAQhNgBg7gig");
	this.shape_14.setTransform(21.3,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C55C64").s().p("AgEBmQhLgBg8ghIgFgDQgugcgRgoQgEgrAYgWIAHgGQAwgeB0ADIATABQB/AGAyAZQAXANAGAZQgCAPgHASQgKAYgVATQgRAPgXANQgzAbhAACIgSAAg");
	this.shape_15.setTransform(21.3,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C55C64").s().p("AgGBUQhEgBg+geIgFgCQgsgYgWghQAFghAagSIAIgFQA2gZBlAEIASABQByAFA4AVQAXAKAKAUQgEANgKAOQgNATgVAQQgSANgVAKQg1AYg5ABIgJABIgIgBg");
	this.shape_16.setTransform(21.3,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C55C64").s().p("AgIBDQg8gChCgaIgEgCQgpgUgbgZQAOgYAcgOIAHgDQA9gTBYACIARABQBjAFBAARQAVAIAPAPIgTAUQgQAPgWANQgSAKgVAIQg1AUgzABIgQAAg");
	this.shape_17.setTransform(21.3,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C55C64").s().p("AgKAxQg1gChEgXIgDgBQgngQghgSQAXgOAegKIAJgCQBDgOBIADIAQABQBWAEBHANQAVAGASAJIgYAPQgRAKgXAJIgmAOQg4AQgrAAIgIABIgIgBg");
	this.shape_18.setTransform(21.2,13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C55C64").s().p("AiCAIIhLgWIBBgKQBOgJA9ACQBjAEBsARQgeAKgqAKQhSAWgxAAQgxAAhUgYg");
	this.shape_19.setTransform(21.2,13.4);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C55C64").s().p("AgKAuQg0gChFgWIgDgCQgngPghgRQAZgMAegJIAIgCQBFgNBGADIAQABQBUADBHANQAWAFASAJIgZAOQgRAJgYAJIgmANQg4APgqABIgPgBg");
	this.shape_20.setTransform(21.2,13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C55C64").s().p("AgJA9Qg6gChCgZIgDgCQgpgSgdgXQARgVAdgMIAIgDQA+gRBTACIARABQBfAFBBAQQAWAHAPAMQgIAJgMAKQgQANgXAMQgSAJgUAIQg3ASgwABIgQAAg");
	this.shape_21.setTransform(21.2,12.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C55C64").s().p("AgGBaQhGgBg9gfIgGgDQgsgZgUgjQACgkAZgUIAIgFQA0gbBqAEIASABQB3AFA2AWQAWAMAJAWQgDANgJAPQgMAVgWARQgQAOgWALQg1AYg7ACIgJABIgJgBg");
	this.shape_22.setTransform(21.3,12.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C55C64").s().p("AiLBHIgGgEQgugdgQgoQgGgtAYgXIAHgGQAvgfB2ADIATABQCCAHAwAZQAYANAFAaQgBAQgHASQgKAZgVATQgQAQgXANQg0AbhAADIgTAAQhMgBg7ghg");
	this.shape_23.setTransform(21.3,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(75).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(64).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(83).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(21).to({_off:false},0).wait(63).to({_off:true},1).wait(26).to({_off:false},0).wait(82).to({_off:true},1).wait(6));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,103.5,22.1), null);


(lib.r_entire_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.r_hand();
	this.instance.parent = this;
	this.instance.setTransform(30.9,38.4,1,1,0,0,0,30.9,38.4);

	this.ikNode_1 = new lib.r_arm();
	this.ikNode_1.parent = this;
	this.ikNode_1.setTransform(90.9,74.5,1,1,0,0,0,76.4,54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_entire_arm, new cjs.Rectangle(-1,-2.4,91.9,76.9), null);


(lib.phone_lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(8.6,5.4,1,1,0,0,0,8.6,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone_lines, new cjs.Rectangle(-0.5,-0.5,18.3,11.8), null);


(lib.phone_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 copy
	this.instance = new lib.phone_line();
	this.instance.parent = this;
	this.instance.setTransform(19.9,9.6,0.025,0.082,0,0,0,13.8,0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).to({_off:true},1).wait(7).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).to({_off:true},1).wait(9).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).to({_off:true},1).wait(6).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).to({_off:true},1).wait(51).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).to({_off:true},1).wait(7).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).to({_off:true},1).wait(9).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).to({_off:true},1).wait(6).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:45,x:19.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:39.7,x:15.1,y:7.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:34.5,x:10.4,y:6.5},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:29.2,x:5.6,y:5.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:24,x:0.9,y:4.8},0).wait(1).to({_off:true},1).wait(33));

	// Layer 3
	this.instance_1 = new lib.phone_line();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.9,9.6,0.025,0.082,0,0,0,13.8,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).to({_off:true},1).wait(7).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).to({_off:true},1).wait(9).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).to({_off:true},1).wait(6).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).to({_off:true},1).wait(51).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).to({_off:true},1).wait(7).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).to({_off:true},1).wait(9).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).to({_off:true},1).wait(6).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,x:19.7,y:9.7},0).wait(1).to({scaleX:0.27,scaleY:0.31,x:16.3,y:10.8},0).wait(1).to({scaleX:0.51,scaleY:0.54,x:12.9,y:11.9},0).wait(1).to({scaleX:0.76,scaleY:0.77,x:9.5,y:13.1},0).wait(1).to({scaleX:1,scaleY:1,x:6.2,y:14.2},0).wait(1).to({_off:true},1).wait(33));

	// Layer 3 copy 2
	this.instance_2 = new lib.phone_line();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.9,9.6,0.025,0.082,0,0,0,13.8,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).to({_off:true},1).wait(7).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).to({_off:true},1).wait(9).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).to({_off:true},1).wait(6).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).to({_off:true},1).wait(51).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).to({_off:true},1).wait(7).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).to({_off:true},1).wait(9).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).to({_off:true},1).wait(6).to({_off:false,regX:13.8,regY:0.6,scaleX:0.03,scaleY:0.08,rotation:0,x:19.9,y:9.6},0).wait(1).to({regX:7,regY:2.6,rotation:-45,y:9.8},0).wait(1).to({scaleX:0.27,scaleY:0.31,rotation:-39.4,x:17.1,y:13.9},0).wait(1).to({scaleX:0.51,scaleY:0.54,rotation:-33.7,x:14.1,y:17.7},0).wait(1).to({scaleX:0.76,scaleY:0.77,rotation:-28.1,x:10.8,y:21.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.5,x:7.4,y:24.7},0).wait(1).to({_off:true},1).wait(33));

	// Layer 1
	this.instance_3 = new lib.phone_lines();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.5,11.4,1,1,0,0,0,8.6,5.4);
	this.instance_3.visible = false;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD2F7E").s().p("AgKEbQgwgCgfhUQgehUAEh0QAGh2AlhRQAkhSAvACQAvACAfBUQAfBVgEB0QgFB1gmBRQgkBQgtAAIgCAAg");
	this.shape.setTransform(25,49.8,0.243,0.243);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD2F7E").s().p("AAADYQg9hAgthsQgshsAAhaQAAhZAsgSQAtgSA9BAQA+A/AtBtQAsBrAABaQAABagsASQgKAEgKAAQgmAAgxgyg");
	this.shape_1.setTransform(18.6,9,0.243,0.243);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC5291").s().p("AgXEfIgZgMIgDgBIgIgFIgCgJIABgQIAIhAIABgQIABgRQABgOANgDQALgDAMgBIAVgCIAXgCQAHgBADgCQAEgDACgJIACgPIACgPQAEgigDgiQgCgigLgiIgSgvIgLgWQgFgKgJABIghAGIgTAFQgLACgIAAQgHAAgEgDQgFgDgCgGIgIgTIgfhGIgFgLQgCgHABgGIAGgIIARgQIANgJQAHgFAGgBQAOgDAOABQAYAAAVAIIALAEIAJAFIADACIARAMIAIAIIAHAIIAYAiQATAdAJAQQAKAVAIAVQAHASAEARQAIAhADAVQAGAkACAeQACAbgCAWQgBAagGAXIgWBLIgEAKIgHANIgMARIgNAMQgTAQgXAJIgcAIIgGAAQgJAAgMgEg");
	this.shape_2.setTransform(27.2,29.1);

	this.instance_4 = new lib.r_entire_arm();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,39.8,0.428,0.428,0,15,-165,90.8,74.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3}]}).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.6,58.3);


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


// stage content:
(lib.tanner_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26160E").s().p("EAPCAvUQu2ickxhFQpTiIgciLQgRhYgMviQgMuyAEqlQACl7gIt/QgHrzAHksQAKnEAsg7QAyhFBpGpQBpGmBYAOQAmAFAyg7QAIgJBdh+QBHhgA6gxQBShGBYgLQDfgbEpFhQA2BACRgcQBxgWDIhWMAAABUmg");
	this.shape.setTransform(193.8,311.9,0.243,0.243);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C2415").s().p("EAHiAvNQu4idkvhFQpUiHgbiLQgRhYgMviQgMuzAEqkQACl7gIt/QgHrzAHksQAKnEAsg8QAyhEBpGoQBpGnBYANQAmAGAyg7QAIgJBdh/QBHhfA6gyQBShGBYgKQDggcEpFiQBHBVD4hTQBcgfCRg/QBSgkCphMQE1iICIgLQDAgQgFDDQgDB2ADP1QADPdgRI+QgTKOASKBQAGDQAgKQQARFtgQB3QgTCWhYAAQhIAAh3AKIjUAVQh+AKhoAAQh6AAhbgOg");
	this.shape_1.setTransform(205.5,312.1,0.243,0.243);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2DBBB").s().p("EgBPB4AMAAAjv/ICgAAMAAADv/g");
	this.shape_2.setTransform(229.4,194.2,0.243,0.243);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C49A6C").s().p("EgHGB5VMAAAjypIOOAAMAAADypg");
	this.shape_3.setTransform(228.1,196.3,0.243,0.243);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C49A6C").s().p("EgGwBT5IIApmIkylvIoCJpIAXihIG0oKIkpliIlCGCIAXigID1klIkulpIAAh8IFgGpIEllfIlimoIkjFeIAAiDIDskcIjskaIAAh+IEgFaIFXmaIlQmVIknFjIAAiEIDxkhIjxkjIAAiAIEnFhIEzlvIlWmaIkEE4IAAiDIDNj3IjNj3IAAh+IEBE3IElleIkxlxIj1EmIAAiDIC/jlIi/jnIAAiAID0EnIEsllIlAl8IjgEOIAAiTICjjEIijjAIAAh9IDWEAIGdnvIldmlIkWFUIAAiWIDakIIjakHIAAh/IEOFIIEqloIldmhIjbEGIAAhvICsjPIisjPIAAh+IDgEOIFWmcIlimnIjUD+IAAhwICljHIiljFIAAh0IDVD/IE1l0IlOmQIi8DhIAAhzICMioIiMinIAAgHIBCgpIB+CXIFzm/IDHh3IhDBRIFKGPIFqm0IjpkXIBFgpIDWECIGwoIIAAB/Il8HIIFcGkIAggnIAADCIgcghIltG1IFUGaIA0g+IAADwIgug3ImSHrIFoGyIBXhpIAACCIgiAoIAiAoIAABwIhQhgIk2F3IFDGCIBDhQIAAB/IgOARIANARIAABvIg8hIIlaGgIEyFxIBkh4IAACAIgvA5IAvA4IAABvIhehvIkxFuIFWGcIA4hDIAAB/IgDAFIADADIAAB6Ig2hBImWHpIFSGTIB5iSIAACAIhEBRIBEBRIAABvIhyiHIk3F1IFhGsIBIhXIAACAIgTAXIATAWIAACCIhIhYIkiFcIEoFmIBBhOIAACAIgMAPIAMANIAAByIg7hGIkwFtIE0FwIA3hCIgBCBIgBACIABABIAACSIg+hLIlVGaIEoFmIAHB4IlfmkIknFiIGqIBIAHB4Ingo/IpNLEgEgCxBDpIExFxIEnliIkzlwgEACkA9NIEyFyIFXmaIkzlygEgIPA9DIEnFkIEllgIkoljgEgC5A2oIEnFkIFXmaIkollgEgJQAu+IFhGpIFWmcIlgmpgEADXAvHIEpFkIExltIkpllgEgDBAneIFiGpIExluIlimpgEACiAg0IFhGqIEilbIlhmsgEgJIAgKIFRGTIExlvIlQmTgAjjZeIFOGVIEjldIlPmWgAB0TAIFQGWIE3l0IlTmTgApuSBIFVGcIEileIlTmcgAkVLjIFTGcIE0lwIlZmZgABKE8IFXGaIGYnoIlXmbgAp8EwIExFxIEvlsIk0lsgAkehyIEyFtIGZnqIkylxgAqToxIE+F9IGansIk9mBgACvqeIExFyIEyltIk0lwgAjExgIE+GCIEvlrIlCmBgACY4GIFAGDIFbmgIlDmCgApc5NIFeGnIEslpIlhmngAkB/0IFgGqIFamdIlmmtgEACCgnNIFmGtIE3l1IlpmwgEgKXgncIFbGiIFVmeIlZmfgEgEQguwIFZGeIE1l1IlZmdgEABXg1fIFYGdIGUnoIlXmagEgKig2SIFiGoIE1l1IlhmngEgE5g9CIFfGnIGTnmIlfmkgEgK2hEOIFNGRIGRnkIlMmOgEACNhFjIFeGmIFsm3Ilemhg");
	this.shape_4.setTransform(194.4,145.1,0.243,0.243);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A97C50").s().p("EgOnBx7MAAAjZ2IdOxeMgALDyzg");
	this.shape_5.setTransform(194.4,196.4,0.243,0.243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(200));

	// l_arm
	this.instance = new lib.l_entire_arm();
	this.instance.parent = this;
	this.instance.setTransform(228.9,339.8,0.428,0.428,0,0,180,21.2,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// mouth
	this.instance_1 = new lib.mouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(283.3,312.1,0.428,0.428,0,0,180,20.9,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// eyes
	this.instance_2 = new lib.eyes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(280.3,300.6,0.428,0.428,0,0,180,51.5,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:51.7,regY:11,x:280.7,y:300.5},0).wait(1).to({x:281.1,y:300.6},0).wait(1).to({x:281.6,y:300.7},0).wait(1).to({x:282,y:300.8},0).wait(1).to({x:282.5,y:300.9},0).wait(1).to({x:282.9,y:301},0).wait(1).to({x:283.4,y:301.1},0).wait(1).to({x:283.8,y:301.2},0).wait(1).to({x:284.3,y:301.3},0).wait(1).to({x:284.7,y:301.4},0).wait(1).to({x:285.2},0).wait(59).to({x:284.7,y:301.3},0).wait(1).to({x:284.2,y:301.2},0).wait(1).to({x:283.7,y:301.1},0).wait(1).to({x:283.2,y:301},0).wait(1).to({x:282.7,y:300.9},0).wait(1).to({x:282.2,y:300.8},0).wait(1).to({x:281.7,y:300.7},0).wait(1).to({x:281.2,y:300.6},0).wait(1).to({x:280.7,y:300.5},0).wait(1).to({x:280.2,y:300.4},0).wait(121));

	// l_brrow
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(259.8,288.9,1,1,0,0,0,5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:5.1,x:259.9},0).wait(65).to({y:288.4},0).wait(1).to({y:288},0).wait(1).to({y:287.5},0).wait(1).to({y:287.1},0).wait(1).to({y:286.6},0).wait(1).to({y:286.2},0).wait(1).to({y:285.7},0).wait(1).to({y:285.3},0).wait(1).to({y:284.9},0).wait(45).to({y:285.3},0).wait(1).to({y:285.7},0).wait(1).to({y:286.1},0).wait(1).to({y:286.5},0).wait(1).to({y:286.9},0).wait(1).to({y:287.3},0).wait(1).to({y:287.7},0).wait(1).to({y:288.1},0).wait(1).to({y:288.5},0).wait(1).to({y:288.9},0).wait(72));

	// r_brrow
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(298.9,286.5,1,1,0,0,0,5.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({y:286},0).wait(1).to({y:285.6},0).wait(1).to({y:285.1},0).wait(1).to({y:284.7},0).wait(1).to({y:284.2},0).wait(1).to({y:283.8},0).wait(1).to({y:283.3},0).wait(1).to({y:282.9},0).wait(1).to({y:282.5},0).wait(45).to({y:282.9},0).wait(1).to({y:283.3},0).wait(1).to({y:283.7},0).wait(1).to({y:284.1},0).wait(1).to({y:284.5},0).wait(1).to({y:284.9},0).wait(1).to({y:285.3},0).wait(1).to({y:285.7},0).wait(1).to({y:286.1},0).wait(1).to({y:286.5},0).wait(72));

	// body
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3753A").s().p("ApiNIQjlhsiZi9QCSCBC5BGQDABJDRAAQDYAADFhOQC+hLCTiKQCTiJBRiyQBUi4AAjJQAAjnhsjOQhqjHi7iLQEMCBCgDsQCkDzAAEfQAADMhXC7QhTC1iZCMQiYCMjGBMQjMBQjfAAQkLAAjshwg");
	this.shape_6.setTransform(269.4,315,0.428,0.428,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA983E").s().p("AmrOiQjGhNiZiLQiYiMhTi2QhXi7AAjNQAAjMBXi7QBTi1CYiNQCZiLDGhNQDMhPDfAAQDgAADMBPQDGBNCYCLQCZCNBTC1QBXC7AADMQAADNhXC7QhTC2iZCMQiYCLjGBNQjMBPjgAAQjfAAjMhPg");
	this.shape_7.setTransform(274.1,312.6,0.428,0.428,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AhGFHQgggBgxgJQhOgNBGgsQB3g+BFgoQAVgLAZjQQAdjvAIgbQAzABAGABQAYAFAAAVIgJGmIgCBfQgFBIgWANQgSAKgvAHQguAIgvAAQg1AAgOgBg");
	this.shape_8.setTransform(295.4,363.9,0.428,0.428,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AiLFOQhPgFBCgzQBwhJBBguQAUgOAFjRQAGjxAGgcQA0gDAFAAQAYADACAVIAfGlIAHBeQACBJgVAOQgRAMgtAMQgvAMguAFQgzAFgPABIgQAAQgcAAgmgDg");
	this.shape_9.setTransform(268.6,366.7,0.428,0.428,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3E914D").s().p("AggBPIgIihIBRAPIgNCWg");
	this.shape_10.setTransform(266.5,267.4,0.428,0.428,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E914D").s().p("AgJD2QkcghjXhjQjdhmAMhkQANhwBZghQBqgmEFAuQB1AUCVBCQAcANDfBtQCPBFBUAWQBzAfBRgeQA5gWg+AjQg+AjhiAkQj3BcjGAAQgwAAgrgFg");
	this.shape_11.setTransform(244.3,261.2,0.428,0.428,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(200));

	// phone
	this.instance_5 = new lib.phone_arm();
	this.instance_5.parent = this;
	this.instance_5.setTransform(325.6,308,1,1,0,0,0,23.2,29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:19.6,regY:28.6,x:322,y:307.4},0).wait(24).to({rotation:0.9,x:322.3,y:307.3},0).wait(1).to({rotation:1.8,x:322.7},0).wait(1).to({rotation:2.6,x:323,y:307.2},0).wait(1).to({rotation:3.5,x:323.3,y:307.1},0).wait(1).to({rotation:4.4,x:323.7},0).wait(1).to({rotation:5.3,x:324.1,y:307},0).wait(1).to({rotation:6.1,x:324.4},0).wait(1).to({rotation:7,x:324.8,y:306.9},0).wait(1).to({rotation:5.1,x:324.7,y:307},0).wait(1).to({rotation:3.2,y:307.1},0).wait(1).to({rotation:1.3,y:307.3},0).wait(1).to({rotation:-0.6,y:307.4},0).wait(1).to({rotation:-2.5,y:307.5},0).wait(1).to({rotation:-4.4,y:307.6},0).wait(1).to({rotation:-6.3,y:307.8},0).wait(1).to({rotation:-8.2,y:307.9},0).wait(1).to({rotation:-10.1,x:324.6,y:308},0).wait(1).to({rotation:-12,y:308.1},0).wait(1).to({rotation:-10.8,y:308},0).wait(1).to({rotation:-9.6,x:324.7,y:307.9},0).wait(1).to({rotation:-8.4},0).wait(1).to({rotation:-7.2,y:307.8},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-4.9,y:307.7},0).wait(1).to({rotation:-3.7,y:307.6},0).wait(1).to({rotation:-2.5,y:307.5},0).wait(1).to({rotation:-2.1,x:324.3},0).wait(1).to({rotation:-1.8,x:323.9},0).wait(1).to({rotation:-1.4,x:323.5,y:307.4},0).wait(1).to({rotation:-1.1,x:323.1},0).wait(1).to({rotation:-0.7,x:322.7},0).wait(1).to({rotation:-0.4,x:322.4},0).wait(1).to({rotation:0,x:322},0).wait(1).to({rotation:0.5,x:322.2,y:307.3},0).wait(1).to({rotation:1,x:322.4},0).wait(1).to({rotation:1.5,x:322.6},0).wait(1).to({rotation:2,x:322.8},0).wait(1).to({rotation:2.5,x:323,y:307.2},0).wait(1).to({rotation:3,x:323.1},0).wait(1).to({rotation:3.5,x:323.3,y:307.1},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:2.2,x:323.6,y:307.2},0).wait(1).to({rotation:1.5,x:323.8,y:307.3},0).wait(1).to({rotation:0.8,x:324},0).wait(1).to({rotation:0.2,x:324.1},0).wait(1).to({rotation:-0.5,x:324.2,y:307.4},0).wait(1).to({rotation:-1.2,x:324.4},0).wait(1).to({rotation:-1.8,x:324.5,y:307.5},0).wait(1).to({rotation:-2.5,x:324.7},0).wait(46).to({rotation:-1.3,y:307.4},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:1.1,y:307.3},0).wait(1).to({rotation:2.3,x:324.8,y:307.2},0).wait(1).to({rotation:3.4,x:324.7},0).wait(1).to({rotation:4.6,x:324.8,y:307.1},0).wait(1).to({rotation:5.8,y:307},0).wait(1).to({rotation:7,y:306.9},0).wait(1).to({rotation:5.1,x:324.7,y:307},0).wait(1).to({rotation:3.2,y:307.1},0).wait(1).to({rotation:1.3,y:307.3},0).wait(1).to({rotation:-0.6,y:307.4},0).wait(1).to({rotation:-2.5,y:307.5},0).wait(1).to({rotation:-4.4,y:307.6},0).wait(1).to({rotation:-6.3,y:307.8},0).wait(1).to({rotation:-8.2,y:307.9},0).wait(1).to({rotation:-10.1,x:324.6,y:308},0).wait(1).to({rotation:-12,y:308.1},0).wait(1).to({rotation:-10.8,y:308},0).wait(1).to({rotation:-9.6,x:324.7,y:307.9},0).wait(1).to({rotation:-8.4},0).wait(1).to({rotation:-7.2,y:307.8},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-4.9,y:307.7},0).wait(1).to({rotation:-3.7,y:307.6},0).wait(1).to({rotation:-2.5,y:307.5},0).wait(1).to({rotation:-2.1,x:324.3},0).wait(1).to({rotation:-1.8,x:323.9},0).wait(1).to({rotation:-1.4,x:323.5,y:307.4},0).wait(1).to({rotation:-1.1,x:323.1},0).wait(1).to({rotation:-0.7,x:322.7},0).wait(1).to({rotation:-0.4,x:322.4},0).wait(1).to({rotation:0,x:322},0).wait(1).to({rotation:0.5,x:322.2,y:307.3},0).wait(1).to({rotation:1,x:322.4},0).wait(1).to({rotation:1.5,x:322.6},0).wait(1).to({rotation:2,x:322.8},0).wait(1).to({rotation:2.5,x:323,y:307.2},0).wait(1).to({rotation:3,x:323.1},0).wait(1).to({rotation:3.5,x:323.3,y:307.1},0).wait(1).to({rotation:2.8,x:323.5},0).wait(1).to({rotation:2.2,x:323.6,y:307.2},0).wait(1).to({rotation:1.5,x:323.8,y:307.3},0).wait(1).to({rotation:0.8,x:324},0).wait(1).to({rotation:0.2,x:324.1},0).wait(1).to({rotation:-0.5,x:324.2,y:307.4},0).wait(1).to({rotation:-1.2,x:324.4},0).wait(1).to({rotation:-1.8,x:324.5,y:307.5},0).wait(1).to({rotation:-2.5,x:324.7},0).wait(1).to({rotation:-2.2,x:324.4},0).wait(1).to({rotation:-1.9,x:324.1},0).wait(1).to({rotation:-1.7,x:323.8},0).wait(1).to({rotation:-1.4,x:323.5},0).wait(1).to({rotation:-1.1,x:323.2,y:307.4},0).wait(1).to({rotation:-0.8,x:322.8},0).wait(1).to({rotation:-0.6,x:322.6},0).wait(1).to({rotation:-0.3,x:322.3},0).wait(1).to({rotation:0,x:322},0).wait(24));

	// Phone Booth.svg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBC9E5").s().p("AhPBgQgZgaANhdIARhZICqAAIgUDbQgfAFgkABIgOAAQg5AAgRgRg");
	this.shape_12.setTransform(278.5,169.9,0.243,0.243);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CBC9E5").s().p("AhRBjQgZgZAOhgIAThcICrAAIgUDbQghAGgkADIgaABQgxAAgPgQg");
	this.shape_13.setTransform(279.1,164.1,0.243,0.243);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CBC9E5").s().p("AhPBjQgZgaALhfIAPhcICwAAIgZDbQgfAGgiADIgYABQgwAAgPgQg");
	this.shape_14.setTransform(279.5,158.2,0.243,0.243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBC9E5").s().p("AhOBlQgYgaALhhIAQhdICrAAIgUDbQgfAHgjADIgfACQgrAAgOgPg");
	this.shape_15.setTransform(273,170,0.243,0.243);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBC9E5").s().p("AhfBdQgDhoASg+IARgpICfgBIgUDbQgqAIgqADIgZABQg9AAgBgXg");
	this.shape_16.setTransform(267.5,170,0.243,0.243);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CBC9E5").s().p("AhUBiQgYgaAQhfIAVhaICqAAIgUDbQghAGglACIgXAAQg2AAgQgQg");
	this.shape_17.setTransform(273.6,164.1,0.243,0.243);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CBC9E5").s().p("AhcBfQgOhyAVg7QAGgTAJgLIAIgHICggBIgUDbQgpAJgpADIgeACQg3AAgDgWg");
	this.shape_18.setTransform(268.2,164.2,0.243,0.243);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CBC9E5").s().p("AhPBlQgZgaANhhIARhcICrAAIgUDbQggAGgjADIgdABQguAAgOgOg");
	this.shape_19.setTransform(274.1,158.2,0.243,0.243);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBC9E5").s().p("AhcBuQgahbAchNQAJgYANgUIALgPICjACIgbDbQgqAHgpAEQghADgVAAQggAAgCgIg");
	this.shape_20.setTransform(268.5,158.2,0.243,0.243);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4EDF1").s().p("ABeFbIgDAdIiqAHIgygkIgDAdIisAHIhIg0ICjjBIhAACIhIg0ICljCIhOADIhJg0IDAjjIBIA0IgNCPICkjDIBJA0IgNCPICljDIBIA0IgUDcIgbACIAgAXIgUDbIgkABIAdAVIgUDcIirAHgAB3CGIgkABIAdAVIgNCPICIihIhAACIgygkgAhpCGIgkABIAdAVIgNCPICHihIg+ACIgygkgACFhuIgbABIAgAXIgNCPICLijIhPADIgygkgAhbhuIgbABIAhAXIgNCPICJijIhNADIgygkg");
	this.shape_21.setTransform(274.6,164.7,0.243,0.243);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D64387").s().p("AgRVWQhnixg8llQg2lGgKmgQgJmNAilzQAkl8BGjtQAyimE2g5MAAAAvUIg4AJQiXg3g5hig");
	this.shape_22.setTransform(292.4,177,0.243,0.243);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C7377F").s().p("AoBVFQhnixg7lkQg3lGgKmgQgJmNAjl0QAjl8BHjtQBKj5KFgDQFDgBE0AwMAAAAvVQkFAxkgAEIgnAAQodAAh+jYg");
	this.shape_23.setTransform(280.4,176.9,0.243,0.243);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C7377F").s().p("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");
	this.shape_24.setTransform(308.4,282.4,0.243,0.243);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#26160E").s().p("EAPCAvUQu2ickxhFQpTiIgciLQgRhYgMviQgMuyAEqlQACl7gIt/QgHrzAHksQAKnEAsg7QAyhFBpGpQBpGmBYAOQAmAFAyg7QAIgJBdh+QBHhgA6gxQBShGBYgLQDfgbEpFhQA2BACRgcQBxgWDIhWMAAABUmg");
	this.shape_25.setTransform(193.8,311.9,0.243,0.243);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3C2415").s().p("EAHiAvNQu4idkvhFQpUiHgbiLQgRhYgMviQgMuzAEqkQACl7gIt/QgHrzAHksQAKnEAsg8QAyhEBpGoQBpGnBYANQAmAGAyg7QAIgJBdh/QBHhfA6gyQBShGBYgKQDggcEpFiQBHBVD4hTQBcgfCRg/QBSgkCphMQE1iICIgLQDAgQgFDDQgDB2ADP1QADPdgRI+QgTKOASKBQAGDQAgKQQARFtgQB3QgTCWhYAAQhIAAh3AKIjUAVQh+AKhoAAQh6AAhbgOg");
	this.shape_26.setTransform(205.5,312.1,0.243,0.243);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F2DBBB").s().p("EgBPB4AMAAAjv/ICgAAMAAADv/g");
	this.shape_27.setTransform(229.4,194.2,0.243,0.243);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C49A6C").s().p("EgHGB5VMAAAjypIOOAAMAAADypg");
	this.shape_28.setTransform(228.1,196.3,0.243,0.243);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C49A6C").s().p("EgGwBT5IIApmIkylvIoCJpIAXihIG0oKIkpliIlCGCIAXigID1klIkulpIAAh8IFgGpIEllfIlimoIkjFeIAAiDIDskcIjskaIAAh+IEgFaIFXmaIlQmVIknFjIAAiEIDxkhIjxkjIAAiAIEnFhIEzlvIlWmaIkEE4IAAiDIDNj3IjNj3IAAh+IEBE3IElleIkxlxIj1EmIAAiDIC/jlIi/jnIAAiAID0EnIEsllIlAl8IjgEOIAAiTICjjEIijjAIAAh9IDWEAIGdnvIldmlIkWFUIAAiWIDakIIjakHIAAh/IEOFIIEqloIldmhIjbEGIAAhvICsjPIisjPIAAh+IDgEOIFWmcIlimnIjUD+IAAhwICljHIiljFIAAh0IDVD/IE1l0IlOmQIi8DhIAAhzICMioIiMinIAAgHIBCgpIB+CXIFzm/IDHh3IhDBRIFKGPIFqm0IjpkXIBFgpIDWECIGwoIIAAB/Il8HIIFcGkIAggnIAADCIgcghIltG1IFUGaIA0g+IAADwIgug3ImSHrIFoGyIBXhpIAACCIgiAoIAiAoIAABwIhQhgIk2F3IFDGCIBDhQIAAB/IgOARIANARIAABvIg8hIIlaGgIEyFxIBkh4IAACAIgvA5IAvA4IAABvIhehvIkxFuIFWGcIA4hDIAAB/IgDAFIADADIAAB6Ig2hBImWHpIFSGTIB5iSIAACAIhEBRIBEBRIAABvIhyiHIk3F1IFhGsIBIhXIAACAIgTAXIATAWIAACCIhIhYIkiFcIEoFmIBBhOIAACAIgMAPIAMANIAAByIg7hGIkwFtIE0FwIA3hCIgBCBIgBACIABABIAACSIg+hLIlVGaIEoFmIAHB4IlfmkIknFiIGqIBIAHB4Ingo/IpNLEgEgCxBDpIExFxIEnliIkzlwgEACkA9NIEyFyIFXmaIkzlygEgIPA9DIEnFkIEllgIkoljgEgC5A2oIEnFkIFXmaIkollgEgJQAu+IFhGpIFWmcIlgmpgEADXAvHIEpFkIExltIkpllgEgDBAneIFiGpIExluIlimpgEACiAg0IFhGqIEilbIlhmsgEgJIAgKIFRGTIExlvIlQmTgAjjZeIFOGVIEjldIlPmWgAB0TAIFQGWIE3l0IlTmTgApuSBIFVGcIEileIlTmcgAkVLjIFTGcIE0lwIlZmZgABKE8IFXGaIGYnoIlXmbgAp8EwIExFxIEvlsIk0lsgAkehyIEyFtIGZnqIkylxgAqToxIE+F9IGansIk9mBgACvqeIExFyIEyltIk0lwgAjExgIE+GCIEvlrIlCmBgACY4GIFAGDIFbmgIlDmCgApc5NIFeGnIEslpIlhmngAkB/0IFgGqIFamdIlmmtgEACCgnNIFmGtIE3l1IlpmwgEgKXgncIFbGiIFVmeIlZmfgEgEQguwIFZGeIE1l1IlZmdgEABXg1fIFYGdIGUnoIlXmagEgKig2SIFiGoIE1l1IlhmngEgE5g9CIFfGnIGTnmIlfmkgEgK2hEOIFNGRIGRnkIlMmOgEACNhFjIFeGmIFsm3Ilemhg");
	this.shape_29.setTransform(194.4,145.1,0.243,0.243);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ACHDpIkAAAQgeAAgOgOQgQgSADgaIAAldQgBgRAHgQQAFgOAOgFQAPgHARABID5AAQATgCAOAMQAMALgBAQQABAPgMALQgOALgTgBIjUAAIAAByIDCAAQASgCAPAMQALAKgBAPQABAPgLAKQgPAMgRgCIjDAAIAACFIDbAAQASgBAQALQAMAMgBAQQABAQgNALQgNAKgQAAIgEAAg");
	this.shape_30.setTransform(339,21.9,0.243,0.243);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiWDxQgUABgMgOQgOgTACgVIAAlnQgBgSAGgSQAHgQANgIQANgJARAAQAWgBAQARQAJAKAFAIIDDEoIAAkUQgCgWAOgSQALgPAUABQAUgBAMAPQANARgBAXIAAFtQAAA+gzAAQgMAAgLgEQgLgEgIgIQgKgIgGgKIjAkkIAAERQACAWgOASQgMANgRAAIgDAAg");
	this.shape_31.setTransform(327.4,21.9,0.243,0.243);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhhDfQgpgQgfghQgegjgNgqQgPgxAAgwQAAgzAPgwQAPgrAeghQAeggApgQQAugRAxAAQBBgCA7AgQAzAcAbA2QAcA8gBBDQABAxgQAxQgNAqgfAiQgdAhgrARQgvASgyAAQgxAAgwgSgAgBilQgbAAgZALQgYAKgRAVQgUAYgIAcQgKAjAAAkQAAAjAKAkQAIAcAVAZQASAVAYALQAdAMAegCQAfgCAbgQQAggUARgkQATgtgCgvQABgvgSgqQgOgjghgVQgfgUglAAIgBAAg");
	this.shape_32.setTransform(315.2,21.9,0.243,0.243);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACVDxQgVABgNgPQgPgTABgYIAAidIjKAAIAACdQABAZgOASQgPAPgUgBQgUABgNgPQgPgTABgYIAAlvQgBgYAPgTQANgPAUABQAUgBAPAPQAPATgCAZIAACFIDKAAIAAiGQgBgYAPgTQANgPAVABQAUgBAOAPQAPASgBAaIAAFuQABAYgQATQgMAOgTAAIgCAAg");
	this.shape_33.setTransform(303,21.9,0.243,0.243);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiDDtQgTAAgOgOQgOgTABgYIAAlmQAAgfAPgOQAUgPAZACIB4AAQAogBArAJQAcAIAVATQAWATAKAaQAMAegBAeQAABIgsAjQgsAlhXAAIhVAAIAACEQABAZgPASIgBABQgOANgSAAIgCAAgAhSgXIA/AAQAbABAcgIQAVgGANgQQANgTgBgXQABgdgTgVQgVgVg+AAIg/AAg");
	this.shape_34.setTransform(291.9,22,0.243,0.243);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ACHDpIj/AAQgfAAgOgOQgQgUADgYIAAldQgBgRAHgQQAFgNAOgGQAQgGARAAID4AAQASgCAPAMQAMAKAAAQQAAARgMAKQgOALgTgBIjUAAIAAByIDCAAQATgBAOALQALALgBAPQABAOgLALQgOALgSgBIjDAAIAACEIDbAAQATgBAPAMQAMALgBAQQABAQgMALQgOAKgQAAIgEAAg");
	this.shape_35.setTransform(281.5,21.9,0.243,0.243);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AB3DtIjjAAQgeAAgOgOQgPgTABgZIAAlmQgBgZAOgSQAOgPAVABQAUgBAOAPQAPATgCAYIAAFSIC+AAQAUgBAPAMQANALAAARQABARgNALQgOALgRAAIgFAAg");
	this.shape_36.setTransform(271.6,21.8,0.243,0.243);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ACHDpIkAAAQgfAAgNgOQgQgTACgZIAAldQAAgRAGgQQAGgOANgFQAQgHARABID4AAQATgCAPAMQAMALgBAQQABAPgMALQgPALgTgBIjTAAIAAByIDCAAQASgCAOAMQAMAKgBAPQABAPgLAKQgPAMgSgCIjCAAIAACFIDbAAQATgCAOAMQAMALAAARQAAAQgMALQgNAKgQAAIgEAAg");
	this.shape_37.setTransform(261.4,21.9,0.243,0.243);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAADtQgUABgNgPQgPgSABgZIAAlSIhnAAQgUACgPgNQgNgLABgRQgBgSAOgLQAPgLAUABIErAAQAUgBAQAMQANALgBARQABARgNAMQgRAMgUgCIhnAAIAAFSQADAYgPATQgOAOgSAAIgCAAg");
	this.shape_38.setTransform(250.9,22,0.243,0.243);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#603913").s().p("EgipAGVIAAspMBFTAAAIAAMpg");
	this.shape_39.setTransform(294.5,22,0.243,0.243);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C49A6C").s().p("EgjrAJgIAAy/MBHXAAAIAAS/g");
	this.shape_40.setTransform(293.9,22.7,0.243,0.243);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#26160E").s().p("EgELApgQvtiMhOg2QgQgLgLhFIAA/TQAMoDABjgQABkBgSlrQgWm2gChnIAKvoQAIiIAFgzQAHhUALglQAOgsAcgIQAdgIA1AcQGCDMEPAVQBwAIBrgUQBMgOBrglQCOgyAigJQBlgdBegFQDzgMFGCTQBTAmC9gfQBigPEVhEMAAABXwQxbiWouhNg");
	this.shape_41.setTransform(314.1,312.3,0.243,0.243);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3C2415").s().p("EARHAs+QkBgmohhJIuKh6QwliShQg4Qg/gsAQw2QAfz/ADmmQACnzgQp2QgSrNgBhiQgClYAeh8QAjiOBdA2QF8DbENAZQBuAKBsgVQBNgPBrgnQCZg5AZgHQBpghBfgHQD1gSFFCTQBiAsECg0QCWgfFJhRQEbg8CHAeQCyAogFDFQgDB4ADPzQACPegQI9QgTKNAQJ/QAFCqAdKwQAQFmgRB2QgVCThXAAQgcAAkCAPQgqADgpAAQhvAAhygSg");
	this.shape_42.setTransform(323.9,312.8,0.243,0.243);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F2DBBB").s().p("EgA/B4jMAAAjxFIB/AAMAAADxFg");
	this.shape_43.setTransform(358.1,195.1,0.243,0.243);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C49A6C").s().p("EgFqB4kMAAAjxHILVAAMAAADxHg");
	this.shape_44.setTransform(357.1,195.1,0.243,0.243);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8F5D3A").s().p("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");
	this.shape_45.setTransform(317.5,196.1,0.243,0.243);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8F5D3A").s().p("AhCgdICFg2IiGCng");
	this.shape_46.setTransform(283.5,35.8,0.243,0.243);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#875837").s().p("EgXGByIMAAHjZVMAq6gREMADMDwjg");
	this.shape_47.setTransform(317.6,195.3,0.243,0.243);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A97C50").s().p("EgOnBx7MAAAjZ2IdOxeMgALDyzg");
	this.shape_48.setTransform(194.4,196.4,0.243,0.243);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1B120E").s().p("EgVzAr/IiHgUQhSgKhKAAQgvAAgZgYQgagYgLg4QgShWAOklQAapDAFi0QAPpSgTqKQgRo8ADvZQADvwgDh2QgKl5F/AiQCTANDdBLQCEAtD+BpQBCAbBMgKQBAgIBYgnQAlgQCJhEQB6g+BXgjQEahxEtgLQGQgOHpCeQCxA5BGChQBACSAFE0QACCegXJIQgZJlACHVQAFOAgWMpQgdQ5hBAzQgsAjk4AOQihAHovAIQyWASnTBMQhZAPhZAAQhLAAhMgLg");
	this.shape_49.setTransform(242.5,307.4,0.243,0.243);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#875837").s().p("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");
	this.shape_50.setTransform(227.2,203.6,0.243,0.243);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7C5235").s().p("EgjOBsnMAAAjZNMBGdAAAMAAADZNg");
	this.shape_51.setTransform(227.2,203.6,0.243,0.243);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#603913").s().p("Eg7AgEIMBkaAAAIRnGhMhYkABxg");
	this.shape_52.setTransform(262.7,378.4,0.243,0.243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(445.5,208,197.2,377.8);
// library properties:
lib.properties = {
	id: 'D5E96885AC454E3B9412F3A5BCD6F9FE',
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
an.compositions['D5E96885AC454E3B9412F3A5BCD6F9FE'] = {
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