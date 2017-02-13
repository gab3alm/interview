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


(lib.tie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF3033").s().p("ADUDUQh4gmg4hCQgYAMgZgCQgYgBgVgNQhBA5h6AVQiBAWg1gwQg1gvADiUQADiSAtgfQA5goCCBFQBzA9BJBRQAZgOAcACQAeACAXAUQBShIB7guQCMg0A0AvQAoAlgQCQQgRCUg7AoQgdAVgvAAQguAAg/gUg");
	this.shape.setTransform(21.2,10.3,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tie, new cjs.Rectangle(0,0,42.4,20.6), null);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2).p("AiuhVQATgTAggQQAfgPAdgFQgSgMACgNQACgUApgLIBggFQA5AGAmARQAnASgCAUQgCARghALQBSA1gfCOQgQBLhOAdQhDAYhPgPQhCgNgYgnQgXgmALhJQgVAKgSgBQgTgBgLgLQgSgSAIghQAJgiAegeg");
	this.shape.setTransform(21.6,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AggDEQhCgNgYgnQgXgmALhJQgVAKgSgBQgTgBgLgLQgSgSAIghQAJgiAegeQATgTAggQQAfgPAdgFQgSgMACgNQACgUApgLIBggFQA5AGAmARQAnASgCAUQgCARghALQBSA1gfCOQgQBLhOAdQgpAPguAAQgcAAgfgGg");
	this.shape_1.setTransform(21.6,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-3.7,45.3,47.2);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AgRGiQgDgeAKhRQAdjugLh3QgKiBhJixQgYg5AAgTQABgZAlgBQAZAAAiBOQAoBcApC0QAoCvglDQQgNBOgVA3QgTAzgMAAIAAAAQgdAAgFgpg");
	this.shape.setTransform(10,45.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,91.8);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(2).p("AjjgRQABhRA4g5QA4g6BPAEQAtACAhAlQAIAIA4BSQAWgrARgLQAVgNAmANQAUAIADAkQACAjgRAqQgTAsgeAjIAJAJQALATgWAfQgXAggrAYQgqAZgmAEQglAEgMgTQgFgJADgNIAAAAQhTgBg3g4Qg3g3ABhOg");
	this.shape.setTransform(22.8,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AghDDQgFgJADgNIAAAAQhTgBg3g4Qg3g3ABhOQABhRA4g5QA4g6BPAEQAtACAhAlQAIAIA4BSQAWgrARgLQAVgNAmANQAUAIADAkQACAjgRAqQgTAsgeAjIAJAJQALATgWAfQgXAggrAYQgqAZgmAEIgNAAQgaAAgKgPg");
	this.shape_1.setTransform(22.8,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.4,54,45.5);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AAQC1QgUgHgsgnQgzgthQhzQhbiFAdgVQAbgUBKBcICGCtQAPATAPAEQAUAFAagPQAWgNAOgkIAJghQAhgKAXgKIBPgjQg3DDhWAgQgoAPgdAAQgOAAgKgDgACNgeIABAAIgBAAg");
	this.shape.setTransform(25.9,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-0.2,49.9,36.8);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF3033").s().p("ABeBeQg1gRgZgdIgVAFQgLgBgJgGQgdAZg3AKQg5AKgXgWQgYgVAChBQABhAAUgOQAZgSA6AfQAzAbAgAkQALgHANABQANABAKAJQAkggA3gUQA+gXAXAVQASAQgHA/QgIBCgaASQgNAJgVAAQgUAAgcgJg");
	this.shape.setTransform(21.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.4,20.6);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C55C64").s().p("AAAB4QhSgBg5gkQg2gigMgxQgQg8AfgbQAtgmCSAHQCOAHAqAcQAmAZgQA9QgOAyg2AhQg4AihQAAIgDAAg");
	this.shape.setTransform(21.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,24);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("Ag1AOQgBgFAOgJQARgKAVgDIAnABQARAFABAFIg3gCQgSADgUAKQgMAFgDAAIAAAAg");
	this.shape.setTransform(352.3,263.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AAnANQgSgNgRgGQgRgGgXACIgQgBQACgFARgDQAUgDAUAHQAUAHAPAMQAMAMgCAFIAAAAQgCAAgLgIg");
	this.shape_1.setTransform(392.9,266.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3753A").s().p("AkOF1QhmgwhEhUQBBA5BTAfQBUAhBdAAQBgAABXgjQBVghBBg9QBBg9AlhPQAlhSgBhYQABhngxhcQguhYhUg+QB4A5BGBpQBJBsAACAQAABagmBTQgmBQhDA/QhDA9hZAiQhaAkhjAAQh2AAhpgyg");
	this.shape_2.setTransform(382.9,293.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA983E").s().p("Ai9GdQhYgihDg+QhEg+glhRQgnhTAAhbQAAhaAnhUQAlhPBEg/QBDg+BYgiQBagjBjAAQBjAABbAjQBYAiBEA+QBDA/AlBPQAnBUAABaQAABbgnBTQglBRhDA+QhEA+hYAiQhbAjhjAAQhjAAhagjg");
	this.shape_3.setTransform(378.1,290.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AhDCNQgigFAfgVIBTgtQAJgEALhcQANhqAEgNIAZABQALACAAAKIgFDlQgCAggKAFIgdAIIhHADg");
	this.shape_4.setTransform(355.9,344.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("Ag9CVQgjgDAdgXIBOg0QAJgHAChcQADhrACgMIAagCQAKACABAJIARDkQABAggJAHQgIAFgUAGIhGAKg");
	this.shape_5.setTransform(383.7,347);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E914D").s().p("AgNAjIgEhHIAjAHIgFBCg");
	this.shape_6.setTransform(385.9,244);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E914D").s().p("AgDBtQh/gOhfgsQhiguAFgsQAGgxAogPQAvgRB0AVQA0AJBBAdIBvA2QBAAeAlAKQA0AOAjgOQAagJgcAPQgbAQgsAQQhtAphZAAQgVAAgSgDg");
	this.shape_7.setTransform(408.9,237.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(329.2,226.5,111.7,135.5);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AAQC1QgUgHgsgnQgzgthQhzQhbiFAdgVQAbgUBKBcQArA1BbB4QAPATAPAEQAUAFAagPQAWgNAOgkIAJghQAhgKAXgKIBPgjQg3DDhWAgQgoAPgdAAQgOAAgKgDgACNgeIAAAAIgBAAg");
	this.shape.setTransform(25.9,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_arm, new cjs.Rectangle(1,-0.2,49.9,36.8), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C55C64").s().p("AAAB4QhSgBg5gkQg2gigMgxQgQg8AfgbQAtgmCSAHQCOAHAqAcQAmAZgQA9QgOAyg2AhQg4AihQAAIgDAAg");
	this.shape.setTransform(21.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(0,0,42.3,24), null);


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


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98C7E5").s().p("EgjUADnQm6gtjzg7Qj7g8AAhDQAAhBD7g9QDzg7G6gtQOphgUrAAQUsAAOoBgQG7AtDzA7QD7A9AABBQAABDj7A8QjzA7m7AtQunBg0tAAQ0sAAuohgg");
	this.shape.setTransform(320.2,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BAD9EC").s().p("EAA4BOFQq6gSodiCQpBiLhfjJUgGigNogH5hE0UgD8gibgCqgfsMBkBAAAUgCdAeTgDoAhtUgHSBDYgF5AQ9QheENpDCFQm7BmpcAAQheAAhjgCg");
	this.shape_1.setTransform(320.1,533.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,640.2,1033.2), null);


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


(lib.Symbol255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol254 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.7,311.8,0.442,0.442,0,50.1,-129.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.3,311.1,0.444,0.444,0,50.1,-129.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,296.8,31.9,23.6);


(lib.Symbol253 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.8,311.4,0.442,0.442,0,49.4,-130.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.8,0.444,0.444,0,49.3,-130.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.7,297.2,31.7,22.9);


(lib.Symbol252 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.9,311,0.442,0.442,0,48.6,-131.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.6,0.444,0.444,0,48.6,-131.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.7,297.3,31.8,22.7);


(lib.Symbol251 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.1,310.6,0.442,0.442,0,47.9,-132.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.7,310.3,0.444,0.444,0,47.8,-132.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.1,31.8,23.6);


(lib.Symbol250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.1,310.2,0.442,0.442,0,47.1,-132.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.7,310,0.444,0.444,0,47.1,-132.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,297.2,31.8,22.8);


(lib.Symbol249 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.2,309.8,0.442,0.442,0,46.4,-133.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.9,309.8,0.444,0.444,0,46.3,-133.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.9,297.1,31.9,22.3);


(lib.Symbol248 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.4,309.4,0.442,0.442,0,45.6,-134.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,309.5,0.444,0.444,0,45.6,-134.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,296.9,31.9,21.9);


(lib.Symbol247 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.4,309,0.442,0.442,0,44.9,-135.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,309.3,0.444,0.444,0,44.9,-135.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,295.7,31.9,22.8);


(lib.Symbol246 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.5,308.6,0.442,0.442,0,44.1,-135.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351.1,309.1,0.444,0.444,0,44.1,-135.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328.1,296.6,31.9,21.8);


(lib.Symbol245 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.4,309,0.442,0.442,0,44.9,-135.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,309.3,0.444,0.444,0,44.8,-135.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,295.3,31.9,23.3);


(lib.Symbol244 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.3,309.4,0.442,0.442,0,45.6,-134.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.9,309.5,0.444,0.444,0,45.6,-134.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,297,31.9,21.8);


(lib.Symbol243 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.3,309.6,0.442,0.442,0,46.1,-133.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.9,309.7,0.444,0.444,0,46.1,-133.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,297,31.9,25.4);


(lib.Symbol242 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.2,310.1,0.442,0.442,0,46.9,-133.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.8,310,0.444,0.444,0,46.8,-133.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.9,297.2,31.8,22.7);


(lib.Symbol241 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.1,310.4,0.442,0.442,0,47.4,-132.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.7,310.1,0.444,0.444,0,47.4,-132.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.2,31.8,23.3);


(lib.Symbol240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362,310.8,0.442,0.442,0,48.1,-131.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.6,310.4,0.444,0.444,0,48.1,-131.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.2,31.8,23.6);


(lib.Symbol239 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.9,311.2,0.442,0.442,0,48.9,-131.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.7,0.444,0.444,0,48.8,-131.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.7,296.4,31.8,23.7);


(lib.Symbol238 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.8,311.4,0.442,0.442,0,49.4,-130.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.8,0.444,0.444,0,49.4,-130.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.6,31.6,23.6);


(lib.Symbol237 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.7,311.8,0.442,0.442,0,50.1,-129.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.3,311.1,0.444,0.444,0,50.1,-129.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,296.8,31.9,23.5);


(lib.Symbol236 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol235 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol234 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol233 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol230 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.3,312.9,0.442,0.442,0,52.1,-127.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,311.7,0.444,0.444,0,52.1,-127.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.5,297.3,31.5,23.6);


(lib.Symbol206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361,313.7,0.442,0.442,0,53.6,-126.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.7,312.3,0.444,0.444,0,53.6,-126.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.3,297.3,31.4,24.3);


(lib.Symbol205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.8,314.4,0.442,0.442,0,55.1,-124.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.5,312.7,0.444,0.444,0,55.1,-124.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.3,297.3,31.8,24.8);


(lib.Symbol204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.4,315.2,0.442,0.442,0,56.6,-123.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.2,313.2,0.444,0.444,0,56.6,-123.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.1,297.3,31.6,25.3);


(lib.Symbol203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.1,315.9,0.442,0.442,0,57.9,-122.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349,313.6,0.444,0.444,0,57.9,-122.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327,297.4,31,25.4);


(lib.Symbol202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.8,316.6,0.442,0.442,0,59.4,-120.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.7,314,0.444,0.444,0,59.4,-120.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.9,297.4,31.1,25.8);


(lib.Symbol201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.4,317.3,0.442,0.442,0,60.9,-119.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.4,314.5,0.443,0.443,0,60.9,-119.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.8,297.4,30.6,26.2);


(lib.Symbol200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359,318.1,0.442,0.442,0,62.4,-117.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348,314.9,0.443,0.443,0,62.3,-117.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.6,297.5,30.5,26.9);


(lib.Symbol199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.5,317.2,0.442,0.442,0,60.7,-119.3);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.4,314.4,0.443,0.443,0,60.6,-119.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.8,297.4,31.3,26.6);


(lib.Symbol198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.9,316.5,0.443,0.443,0,59.1,-120.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.8,313.9,0.444,0.444,0,59,-121);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.9,297.4,30.9,26.1);


(lib.Symbol197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.2,315.6,0.442,0.442,0,57.4,-122.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.1,313.4,0.444,0.444,0,57.3,-122.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.1,297.4,31,25.6);


(lib.Symbol196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.6,314.7,0.442,0.442,0,55.7,-124.3);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.4,312.9,0.444,0.444,0,55.6,-124.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.2,297.3,31.3,25.1);


(lib.Symbol195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361,313.9,0.442,0.442,0,54.1,-125.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.7,312.4,0.444,0.444,0,54.1,-125.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.4,297.3,31.4,24.2);


(lib.Symbol194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.3,313,0.442,0.442,0,52.4,-127.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,311.8,0.444,0.444,0,52.3,-127.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.5,297.3,31.5,24.1);


(lib.Symbol193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol187 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol186 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol185 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.7,311.8,0.442,0.442,0,50.1,-129.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.3,311.1,0.444,0.444,0,50.1,-129.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,296.8,31.9,23.6);


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.8,311.4,0.442,0.442,0,49.4,-130.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.8,0.444,0.444,0,49.3,-130.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.7,297.2,31.7,22.9);


(lib.Symbol151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.9,311,0.442,0.442,0,48.6,-131.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.6,0.444,0.444,0,48.6,-131.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.7,297.3,31.8,22.7);


(lib.Symbol150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.1,310.6,0.442,0.442,0,47.9,-132.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.7,310.3,0.444,0.444,0,47.8,-132.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.1,31.8,23.6);


(lib.Symbol149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.1,310.2,0.442,0.442,0,47.1,-132.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.7,310,0.444,0.444,0,47.1,-132.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,297.2,31.8,22.8);


(lib.Symbol148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.2,309.8,0.442,0.442,0,46.4,-133.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.9,309.8,0.444,0.444,0,46.3,-133.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.9,297.1,31.9,22.3);


(lib.Symbol147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.4,309.4,0.442,0.442,0,45.6,-134.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,309.5,0.444,0.444,0,45.6,-134.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,296.9,31.9,21.9);


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.4,309,0.442,0.442,0,44.9,-135.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,309.3,0.444,0.444,0,44.9,-135.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,295.7,31.9,22.8);


(lib.Symbol145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.5,308.6,0.442,0.442,0,44.1,-135.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351.1,309.1,0.444,0.444,0,44.1,-135.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328.1,296.6,31.9,21.8);


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.4,309,0.442,0.442,0,44.9,-135.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,309.3,0.444,0.444,0,44.8,-135.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,295.3,31.9,23.3);


(lib.Symbol143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.3,309.4,0.442,0.442,0,45.6,-134.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.9,309.5,0.444,0.444,0,45.6,-134.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,297,31.9,21.8);


(lib.Symbol142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.3,309.6,0.442,0.442,0,46.1,-133.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.9,309.7,0.444,0.444,0,46.1,-133.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,297,31.9,25.4);


(lib.Symbol141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.2,310.1,0.442,0.442,0,46.9,-133.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.8,310,0.444,0.444,0,46.8,-133.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.9,297.2,31.8,22.7);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.1,310.4,0.442,0.442,0,47.4,-132.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.7,310.1,0.444,0.444,0,47.4,-132.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.2,31.8,23.3);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362,310.8,0.442,0.442,0,48.1,-131.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.6,310.4,0.444,0.444,0,48.1,-131.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.2,31.8,23.6);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.9,311.2,0.442,0.442,0,48.9,-131.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.7,0.444,0.444,0,48.8,-131.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.7,296.4,31.8,23.7);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.8,311.4,0.442,0.442,0,49.4,-130.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.5,310.8,0.444,0.444,0,49.4,-130.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.8,296.6,31.6,23.6);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.7,311.8,0.442,0.442,0,50.1,-129.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.3,311.1,0.444,0.444,0,50.1,-129.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,296.8,31.9,23.5);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.3,312.9,0.442,0.442,0,52.1,-127.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,311.7,0.444,0.444,0,52.1,-127.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.5,297.3,31.5,23.6);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361,313.7,0.442,0.442,0,53.6,-126.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.7,312.3,0.444,0.444,0,53.6,-126.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.3,297.3,31.4,24.3);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.8,314.4,0.442,0.442,0,55.1,-124.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.5,312.7,0.444,0.444,0,55.1,-124.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.3,297.3,31.8,24.8);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.4,315.2,0.442,0.442,0,56.6,-123.4);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.2,313.2,0.444,0.444,0,56.6,-123.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.1,297.3,31.6,25.3);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.1,315.9,0.442,0.442,0,57.9,-122.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349,313.6,0.444,0.444,0,57.9,-122.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327,297.4,31,25.4);


(lib.Symbol91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.8,316.6,0.442,0.442,0,59.4,-120.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.7,314,0.444,0.444,0,59.4,-120.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.9,297.4,31.1,25.8);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.4,317.3,0.442,0.442,0,60.9,-119.1);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.4,314.5,0.443,0.443,0,60.9,-119.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.8,297.4,30.6,26.2);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359,318.1,0.442,0.442,0,62.4,-117.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348,314.9,0.443,0.443,0,62.3,-117.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.6,297.5,30.5,26.9);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.5,317.2,0.442,0.442,0,60.7,-119.3);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.4,314.4,0.443,0.443,0,60.6,-119.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.8,297.4,31.3,26.6);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(359.9,316.5,0.443,0.443,0,59.1,-120.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.8,313.9,0.444,0.444,0,59,-121);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(326.9,297.4,30.9,26.1);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.2,315.6,0.442,0.442,0,57.4,-122.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.1,313.4,0.444,0.444,0,57.3,-122.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.1,297.4,31,25.6);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(360.6,314.7,0.442,0.442,0,55.7,-124.3);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.4,312.9,0.444,0.444,0,55.6,-124.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.2,297.3,31.3,25.1);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361,313.9,0.442,0.442,0,54.1,-125.9);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.7,312.4,0.444,0.444,0,54.1,-125.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.4,297.3,31.4,24.2);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.3,313,0.442,0.442,0,52.4,-127.6);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,311.8,0.444,0.444,0,52.3,-127.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.5,297.3,31.5,24.1);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJICpAMIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// Layer 2
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(361.6,312.2,0.443,0.443,0,50.8,-129.2);

	this.instance_1 = new lib.Symbol52("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.2,311.3,0.444,0.444,0,50.8,-129.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(327.6,297.2,32,23.3);


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
p.nominalBounds = new cjs.Rectangle(15.4,47.6,68.3,90.1);


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
(lib.tanner_tie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(202,203.1,0.342,0.342,0,0,0,320.2,516.9);
	this.instance.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	//  
	this.instance_1 = new lib.Symbol55("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.2,290.7,0.444,0.444,0,-75,105,-18.2,-10.5);

	this.instance_2 = new lib.Symbol54("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(155.4,289.2,0.444,0.444,0,-75,105,-18.2,-10.5);

	this.instance_3 = new lib.Symbol50("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(580.6,0,1,1,0,0,180);

	this.instance_4 = new lib.Symbol49("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(233,289.7,1,1,0,0,180,2.4,-9);

	this.instance_5 = new lib.Symbol48("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(219,279.9,0.444,0.129,0,0,180,5.4,-69.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AjbAqQgJgIgBgMQAAgMAHgIQAIgIAMgBQAMAAAJAHQAIAHABAMQABAMgIAJQgIAIgMABIgCAAQgLAAgHgHgAC2AAQgIgHgBgLQgBgMAIgJQAIgJAMAAQAMgBAIAIQAJAIABAMQAAALgHAJQgIAIgMAAIgDABQgKAAgIgIg");
	this.shape.setTransform(208.9,278.5);

	this.instance_6 = new lib.Symbol47("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(578.2,-9,1,1,0,0,180,2.4,-9);

	this.instance_7 = new lib.Symbol57("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(580.6,0,1,1,0,0,180);

	this.instance_8 = new lib.Symbol58("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(580.6,0,1,1,0,0,180);

	this.instance_9 = new lib.Symbol59("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(580.6,0,1,1,0,0,180);

	this.instance_10 = new lib.Symbol60("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(580.6,0,1,1,0,0,180);

	this.instance_11 = new lib.Symbol61("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(580.6,0,1,1,0,0,180);

	this.instance_12 = new lib.Symbol62("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(580.6,0,1,1,0,0,180);

	this.instance_13 = new lib.Symbol63("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(580.6,0,1,1,0,0,180);

	this.instance_14 = new lib.Symbol64("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(580.6,0,1,1,0,0,180);

	this.instance_15 = new lib.Symbol65("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(580.6,0,1,1,0,0,180);

	this.instance_16 = new lib.Symbol66("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(580.6,0,1,1,0,0,180);

	this.instance_17 = new lib.Symbol67("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(580.6,0,1,1,0,0,180);

	this.instance_18 = new lib.Symbol68("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(580.6,0,1,1,0,0,180);

	this.instance_19 = new lib.Symbol69("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(580.6,0,1,1,0,0,180);

	this.instance_20 = new lib.Symbol70("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(580.6,0,1,1,0,0,180);

	this.instance_21 = new lib.Symbol71("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(580.6,0,1,1,0,0,180);

	this.instance_22 = new lib.Symbol72("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(580.6,0,1,1,0,0,180);

	this.instance_23 = new lib.Symbol73("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(580.6,0,1,1,0,0,180);

	this.instance_24 = new lib.Symbol74("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(580.6,0,1,1,0,0,180);

	this.instance_25 = new lib.Symbol75("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(580.6,0,1,1,0,0,180);

	this.instance_26 = new lib.Symbol76("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(580.6,0,1,1,0,0,180);

	this.instance_27 = new lib.Symbol77("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(580.6,0,1,1,0,0,180);

	this.instance_28 = new lib.Symbol78("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(580.6,0,1,1,0,0,180);

	this.instance_29 = new lib.Symbol79("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(580.6,0,1,1,0,0,180);

	this.instance_30 = new lib.Symbol80("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(580.6,0,1,1,0,0,180);

	this.instance_31 = new lib.Symbol81("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(580.6,0,1,1,0,0,180);

	this.instance_32 = new lib.Symbol82("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(580.6,0,1,1,0,0,180);

	this.instance_33 = new lib.Symbol83("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(580.6,0,1,1,0,0,180);

	this.instance_34 = new lib.Symbol84("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(580.6,0,1,1,0,0,180);

	this.instance_35 = new lib.Symbol85("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(580.6,0,1,1,0,0,180);

	this.instance_36 = new lib.Symbol86("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(580.6,0,1,1,0,0,180);

	this.instance_37 = new lib.Symbol87("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(580.6,0,1,1,0,0,180);

	this.instance_38 = new lib.Symbol88("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(580.6,0,1,1,0,0,180);

	this.instance_39 = new lib.Symbol89("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(580.6,0,1,1,0,0,180);

	this.instance_40 = new lib.Symbol90("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(580.6,0,1,1,0,0,180);

	this.instance_41 = new lib.Symbol91("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(580.6,0,1,1,0,0,180);

	this.instance_42 = new lib.Symbol92("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(580.6,0,1,1,0,0,180);

	this.instance_43 = new lib.Symbol93("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(580.6,0,1,1,0,0,180);

	this.instance_44 = new lib.Symbol94("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(580.6,0,1,1,0,0,180);

	this.instance_45 = new lib.Symbol95("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(580.6,0,1,1,0,0,180);

	this.instance_46 = new lib.Symbol96("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(580.6,0,1,1,0,0,180);

	this.instance_47 = new lib.Symbol97("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(580.6,0,1,1,0,0,180);

	this.instance_48 = new lib.Symbol98("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(580.6,0,1,1,0,0,180);

	this.instance_49 = new lib.Symbol99("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(580.6,0,1,1,0,0,180);

	this.instance_50 = new lib.Symbol100("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(580.6,0,1,1,0,0,180);

	this.instance_51 = new lib.Symbol101("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(580.6,0,1,1,0,0,180);

	this.instance_52 = new lib.Symbol102("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(580.6,0,1,1,0,0,180);

	this.instance_53 = new lib.Symbol103("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(580.6,0,1,1,0,0,180);

	this.instance_54 = new lib.Symbol104("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(580.6,0,1,1,0,0,180);

	this.instance_55 = new lib.Symbol105("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(580.6,0,1,1,0,0,180);

	this.instance_56 = new lib.Symbol106("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(580.6,0,1,1,0,0,180);

	this.instance_57 = new lib.Symbol107("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(580.6,0,1,1,0,0,180);

	this.instance_58 = new lib.Symbol108("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(580.6,0,1,1,0,0,180);

	this.instance_59 = new lib.Symbol109("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(580.6,0,1,1,0,0,180);

	this.instance_60 = new lib.Symbol110("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(580.6,0,1,1,0,0,180);

	this.instance_61 = new lib.Symbol111("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(580.6,0,1,1,0,0,180);

	this.instance_62 = new lib.Symbol112("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(580.6,0,1,1,0,0,180);

	this.instance_63 = new lib.Symbol113("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(580.6,0,1,1,0,0,180);

	this.instance_64 = new lib.Symbol114("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(580.6,0,1,1,0,0,180);

	this.instance_65 = new lib.Symbol115("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(580.6,0,1,1,0,0,180);

	this.instance_66 = new lib.Symbol116("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(580.6,0,1,1,0,0,180);

	this.instance_67 = new lib.Symbol117("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(580.6,0,1,1,0,0,180);

	this.instance_68 = new lib.Symbol118("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(580.6,0,1,1,0,0,180);

	this.instance_69 = new lib.Symbol119("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(580.6,0,1,1,0,0,180);

	this.instance_70 = new lib.Symbol120("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(580.6,0,1,1,0,0,180);

	this.instance_71 = new lib.Symbol121("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(580.6,0,1,1,0,0,180);

	this.instance_72 = new lib.Symbol122("synched",0);
	this.instance_72.parent = this;
	this.instance_72.setTransform(580.6,0,1,1,0,0,180);

	this.instance_73 = new lib.Symbol123("synched",0);
	this.instance_73.parent = this;
	this.instance_73.setTransform(580.6,0,1,1,0,0,180);

	this.instance_74 = new lib.Symbol124("synched",0);
	this.instance_74.parent = this;
	this.instance_74.setTransform(580.6,0,1,1,0,0,180);

	this.instance_75 = new lib.Symbol125("synched",0);
	this.instance_75.parent = this;
	this.instance_75.setTransform(580.6,0,1,1,0,0,180);

	this.instance_76 = new lib.Symbol126("synched",0);
	this.instance_76.parent = this;
	this.instance_76.setTransform(580.6,0,1,1,0,0,180);

	this.instance_77 = new lib.Symbol127("synched",0);
	this.instance_77.parent = this;
	this.instance_77.setTransform(580.6,0,1,1,0,0,180);

	this.instance_78 = new lib.Symbol128("synched",0);
	this.instance_78.parent = this;
	this.instance_78.setTransform(580.6,0,1,1,0,0,180);

	this.instance_79 = new lib.Symbol129("synched",0);
	this.instance_79.parent = this;
	this.instance_79.setTransform(580.6,0,1,1,0,0,180);

	this.instance_80 = new lib.Symbol130("synched",0);
	this.instance_80.parent = this;
	this.instance_80.setTransform(580.6,0,1,1,0,0,180);

	this.instance_81 = new lib.Symbol131("synched",0);
	this.instance_81.parent = this;
	this.instance_81.setTransform(580.6,0,1,1,0,0,180);

	this.instance_82 = new lib.Symbol132("synched",0);
	this.instance_82.parent = this;
	this.instance_82.setTransform(580.6,0,1,1,0,0,180);

	this.instance_83 = new lib.Symbol133("synched",0);
	this.instance_83.parent = this;
	this.instance_83.setTransform(580.6,0,1,1,0,0,180);

	this.instance_84 = new lib.Symbol134("synched",0);
	this.instance_84.parent = this;
	this.instance_84.setTransform(580.6,0,1,1,0,0,180);

	this.instance_85 = new lib.Symbol135("synched",0);
	this.instance_85.parent = this;
	this.instance_85.setTransform(580.6,0,1,1,0,0,180);

	this.instance_86 = new lib.Symbol136("synched",0);
	this.instance_86.parent = this;
	this.instance_86.setTransform(580.6,0,1,1,0,0,180);

	this.instance_87 = new lib.Symbol137("synched",0);
	this.instance_87.parent = this;
	this.instance_87.setTransform(580.6,0,1,1,0,0,180);

	this.instance_88 = new lib.Symbol138("synched",0);
	this.instance_88.parent = this;
	this.instance_88.setTransform(580.6,0,1,1,0,0,180);

	this.instance_89 = new lib.Symbol139("synched",0);
	this.instance_89.parent = this;
	this.instance_89.setTransform(580.6,0,1,1,0,0,180);

	this.instance_90 = new lib.Symbol140("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(580.6,0,1,1,0,0,180);

	this.instance_91 = new lib.Symbol141("synched",0);
	this.instance_91.parent = this;
	this.instance_91.setTransform(580.6,0,1,1,0,0,180);

	this.instance_92 = new lib.Symbol142("synched",0);
	this.instance_92.parent = this;
	this.instance_92.setTransform(580.6,0,1,1,0,0,180);

	this.instance_93 = new lib.Symbol143("synched",0);
	this.instance_93.parent = this;
	this.instance_93.setTransform(580.6,0,1,1,0,0,180);

	this.instance_94 = new lib.Symbol144("synched",0);
	this.instance_94.parent = this;
	this.instance_94.setTransform(580.6,0,1,1,0,0,180);

	this.instance_95 = new lib.Symbol145("synched",0);
	this.instance_95.parent = this;
	this.instance_95.setTransform(580.6,0,1,1,0,0,180);

	this.instance_96 = new lib.Symbol146("synched",0);
	this.instance_96.parent = this;
	this.instance_96.setTransform(580.6,0,1,1,0,0,180);

	this.instance_97 = new lib.Symbol147("synched",0);
	this.instance_97.parent = this;
	this.instance_97.setTransform(580.6,0,1,1,0,0,180);

	this.instance_98 = new lib.Symbol148("synched",0);
	this.instance_98.parent = this;
	this.instance_98.setTransform(580.6,0,1,1,0,0,180);

	this.instance_99 = new lib.Symbol149("synched",0);
	this.instance_99.parent = this;
	this.instance_99.setTransform(580.6,0,1,1,0,0,180);

	this.instance_100 = new lib.Symbol150("synched",0);
	this.instance_100.parent = this;
	this.instance_100.setTransform(580.6,0,1,1,0,0,180);

	this.instance_101 = new lib.Symbol151("synched",0);
	this.instance_101.parent = this;
	this.instance_101.setTransform(580.6,0,1,1,0,0,180);

	this.instance_102 = new lib.Symbol152("synched",0);
	this.instance_102.parent = this;
	this.instance_102.setTransform(580.6,0,1,1,0,0,180);

	this.instance_103 = new lib.Symbol153("synched",0);
	this.instance_103.parent = this;
	this.instance_103.setTransform(580.6,0,1,1,0,0,180);

	this.instance_104 = new lib.Symbol154("synched",0);
	this.instance_104.parent = this;
	this.instance_104.setTransform(580.6,0,1,1,0,0,180);

	this.instance_105 = new lib.Symbol155("synched",0);
	this.instance_105.parent = this;
	this.instance_105.setTransform(580.6,0,1,1,0,0,180);

	this.instance_106 = new lib.Symbol156("synched",0);
	this.instance_106.parent = this;
	this.instance_106.setTransform(580.6,0,1,1,0,0,180);

	this.instance_107 = new lib.Symbol157("synched",0);
	this.instance_107.parent = this;
	this.instance_107.setTransform(580.6,0,1,1,0,0,180);

	this.instance_108 = new lib.Symbol158("synched",0);
	this.instance_108.parent = this;
	this.instance_108.setTransform(580.6,0,1,1,0,0,180);

	this.instance_109 = new lib.Symbol159("synched",0);
	this.instance_109.parent = this;
	this.instance_109.setTransform(580.6,0,1,1,0,0,180);

	this.instance_110 = new lib.Symbol160("synched",0);
	this.instance_110.parent = this;
	this.instance_110.setTransform(580.6,0,1,1,0,0,180);

	this.instance_111 = new lib.Symbol161("synched",0);
	this.instance_111.parent = this;
	this.instance_111.setTransform(580.6,0,1,1,0,0,180);

	this.instance_112 = new lib.Symbol162("synched",0);
	this.instance_112.parent = this;
	this.instance_112.setTransform(580.6,0,1,1,0,0,180);

	this.instance_113 = new lib.Symbol163("synched",0);
	this.instance_113.parent = this;
	this.instance_113.setTransform(580.6,0,1,1,0,0,180);

	this.instance_114 = new lib.Symbol164("synched",0);
	this.instance_114.parent = this;
	this.instance_114.setTransform(580.6,0,1,1,0,0,180);

	this.instance_115 = new lib.Symbol165("synched",0);
	this.instance_115.parent = this;
	this.instance_115.setTransform(580.6,0,1,1,0,0,180);

	this.instance_116 = new lib.Symbol166("synched",0);
	this.instance_116.parent = this;
	this.instance_116.setTransform(580.6,0,1,1,0,0,180);

	this.instance_117 = new lib.Symbol167("synched",0);
	this.instance_117.parent = this;
	this.instance_117.setTransform(580.6,0,1,1,0,0,180);

	this.instance_118 = new lib.Symbol168("synched",0);
	this.instance_118.parent = this;
	this.instance_118.setTransform(580.6,0,1,1,0,0,180);

	this.instance_119 = new lib.Symbol169("synched",0);
	this.instance_119.parent = this;
	this.instance_119.setTransform(580.6,0,1,1,0,0,180);

	this.instance_120 = new lib.Symbol170("synched",0);
	this.instance_120.parent = this;
	this.instance_120.setTransform(580.6,0,1,1,0,0,180);

	this.instance_121 = new lib.Symbol171("synched",0);
	this.instance_121.parent = this;
	this.instance_121.setTransform(580.6,0,1,1,0,0,180);

	this.instance_122 = new lib.Symbol172("synched",0);
	this.instance_122.parent = this;
	this.instance_122.setTransform(580.6,0,1,1,0,0,180);

	this.instance_123 = new lib.Symbol173("synched",0);
	this.instance_123.parent = this;
	this.instance_123.setTransform(580.6,0,1,1,0,0,180);

	this.instance_124 = new lib.Symbol174("synched",0);
	this.instance_124.parent = this;
	this.instance_124.setTransform(580.6,0,1,1,0,0,180);

	this.instance_125 = new lib.Symbol175("synched",0);
	this.instance_125.parent = this;
	this.instance_125.setTransform(580.6,0,1,1,0,0,180);

	this.instance_126 = new lib.Symbol176("synched",0);
	this.instance_126.parent = this;
	this.instance_126.setTransform(580.6,0,1,1,0,0,180);

	this.instance_127 = new lib.Symbol177("synched",0);
	this.instance_127.parent = this;
	this.instance_127.setTransform(580.6,0,1,1,0,0,180);

	this.instance_128 = new lib.Symbol178("synched",0);
	this.instance_128.parent = this;
	this.instance_128.setTransform(580.6,0,1,1,0,0,180);

	this.instance_129 = new lib.Symbol179("synched",0);
	this.instance_129.parent = this;
	this.instance_129.setTransform(580.6,0,1,1,0,0,180);

	this.instance_130 = new lib.Symbol180("synched",0);
	this.instance_130.parent = this;
	this.instance_130.setTransform(580.6,0,1,1,0,0,180);

	this.instance_131 = new lib.Symbol181("synched",0);
	this.instance_131.parent = this;
	this.instance_131.setTransform(580.6,0,1,1,0,0,180);

	this.instance_132 = new lib.Symbol182("synched",0);
	this.instance_132.parent = this;
	this.instance_132.setTransform(580.6,0,1,1,0,0,180);

	this.instance_133 = new lib.Symbol183("synched",0);
	this.instance_133.parent = this;
	this.instance_133.setTransform(580.6,0,1,1,0,0,180);

	this.instance_134 = new lib.Symbol184("synched",0);
	this.instance_134.parent = this;
	this.instance_134.setTransform(580.6,0,1,1,0,0,180);

	this.instance_135 = new lib.Symbol185("synched",0);
	this.instance_135.parent = this;
	this.instance_135.setTransform(580.6,0,1,1,0,0,180);

	this.instance_136 = new lib.Symbol186("synched",0);
	this.instance_136.parent = this;
	this.instance_136.setTransform(580.6,0,1,1,0,0,180);

	this.instance_137 = new lib.Symbol187("synched",0);
	this.instance_137.parent = this;
	this.instance_137.setTransform(580.6,0,1,1,0,0,180);

	this.instance_138 = new lib.Symbol188("synched",0);
	this.instance_138.parent = this;
	this.instance_138.setTransform(580.6,0,1,1,0,0,180);

	this.instance_139 = new lib.Symbol189("synched",0);
	this.instance_139.parent = this;
	this.instance_139.setTransform(580.6,0,1,1,0,0,180);

	this.instance_140 = new lib.Symbol190("synched",0);
	this.instance_140.parent = this;
	this.instance_140.setTransform(580.6,0,1,1,0,0,180);

	this.instance_141 = new lib.Symbol191("synched",0);
	this.instance_141.parent = this;
	this.instance_141.setTransform(580.6,0,1,1,0,0,180);

	this.instance_142 = new lib.Symbol192("synched",0);
	this.instance_142.parent = this;
	this.instance_142.setTransform(580.6,0,1,1,0,0,180);

	this.instance_143 = new lib.Symbol193("synched",0);
	this.instance_143.parent = this;
	this.instance_143.setTransform(580.6,0,1,1,0,0,180);

	this.instance_144 = new lib.Symbol194("synched",0);
	this.instance_144.parent = this;
	this.instance_144.setTransform(580.6,0,1,1,0,0,180);

	this.instance_145 = new lib.Symbol195("synched",0);
	this.instance_145.parent = this;
	this.instance_145.setTransform(580.6,0,1,1,0,0,180);

	this.instance_146 = new lib.Symbol196("synched",0);
	this.instance_146.parent = this;
	this.instance_146.setTransform(580.6,0,1,1,0,0,180);

	this.instance_147 = new lib.Symbol197("synched",0);
	this.instance_147.parent = this;
	this.instance_147.setTransform(580.6,0,1,1,0,0,180);

	this.instance_148 = new lib.Symbol198("synched",0);
	this.instance_148.parent = this;
	this.instance_148.setTransform(580.6,0,1,1,0,0,180);

	this.instance_149 = new lib.Symbol199("synched",0);
	this.instance_149.parent = this;
	this.instance_149.setTransform(580.6,0,1,1,0,0,180);

	this.instance_150 = new lib.Symbol200("synched",0);
	this.instance_150.parent = this;
	this.instance_150.setTransform(580.6,0,1,1,0,0,180);

	this.instance_151 = new lib.Symbol201("synched",0);
	this.instance_151.parent = this;
	this.instance_151.setTransform(580.6,0,1,1,0,0,180);

	this.instance_152 = new lib.Symbol202("synched",0);
	this.instance_152.parent = this;
	this.instance_152.setTransform(580.6,0,1,1,0,0,180);

	this.instance_153 = new lib.Symbol203("synched",0);
	this.instance_153.parent = this;
	this.instance_153.setTransform(580.6,0,1,1,0,0,180);

	this.instance_154 = new lib.Symbol204("synched",0);
	this.instance_154.parent = this;
	this.instance_154.setTransform(580.6,0,1,1,0,0,180);

	this.instance_155 = new lib.Symbol205("synched",0);
	this.instance_155.parent = this;
	this.instance_155.setTransform(580.6,0,1,1,0,0,180);

	this.instance_156 = new lib.Symbol206("synched",0);
	this.instance_156.parent = this;
	this.instance_156.setTransform(580.6,0,1,1,0,0,180);

	this.instance_157 = new lib.Symbol207("synched",0);
	this.instance_157.parent = this;
	this.instance_157.setTransform(580.6,0,1,1,0,0,180);

	this.instance_158 = new lib.Symbol208("synched",0);
	this.instance_158.parent = this;
	this.instance_158.setTransform(580.6,0,1,1,0,0,180);

	this.instance_159 = new lib.Symbol209("synched",0);
	this.instance_159.parent = this;
	this.instance_159.setTransform(580.6,0,1,1,0,0,180);

	this.instance_160 = new lib.Symbol210("synched",0);
	this.instance_160.parent = this;
	this.instance_160.setTransform(580.6,0,1,1,0,0,180);

	this.instance_161 = new lib.Symbol211("synched",0);
	this.instance_161.parent = this;
	this.instance_161.setTransform(580.6,0,1,1,0,0,180);

	this.instance_162 = new lib.Symbol212("synched",0);
	this.instance_162.parent = this;
	this.instance_162.setTransform(580.6,0,1,1,0,0,180);

	this.instance_163 = new lib.Symbol213("synched",0);
	this.instance_163.parent = this;
	this.instance_163.setTransform(580.6,0,1,1,0,0,180);

	this.instance_164 = new lib.Symbol214("synched",0);
	this.instance_164.parent = this;
	this.instance_164.setTransform(580.6,0,1,1,0,0,180);

	this.instance_165 = new lib.Symbol215("synched",0);
	this.instance_165.parent = this;
	this.instance_165.setTransform(580.6,0,1,1,0,0,180);

	this.instance_166 = new lib.Symbol216("synched",0);
	this.instance_166.parent = this;
	this.instance_166.setTransform(580.6,0,1,1,0,0,180);

	this.instance_167 = new lib.Symbol217("synched",0);
	this.instance_167.parent = this;
	this.instance_167.setTransform(580.6,0,1,1,0,0,180);

	this.instance_168 = new lib.Symbol218("synched",0);
	this.instance_168.parent = this;
	this.instance_168.setTransform(580.6,0,1,1,0,0,180);

	this.instance_169 = new lib.Symbol219("synched",0);
	this.instance_169.parent = this;
	this.instance_169.setTransform(580.6,0,1,1,0,0,180);

	this.instance_170 = new lib.Symbol220("synched",0);
	this.instance_170.parent = this;
	this.instance_170.setTransform(580.6,0,1,1,0,0,180);

	this.instance_171 = new lib.Symbol221("synched",0);
	this.instance_171.parent = this;
	this.instance_171.setTransform(580.6,0,1,1,0,0,180);

	this.instance_172 = new lib.Symbol222("synched",0);
	this.instance_172.parent = this;
	this.instance_172.setTransform(580.6,0,1,1,0,0,180);

	this.instance_173 = new lib.Symbol223("synched",0);
	this.instance_173.parent = this;
	this.instance_173.setTransform(580.6,0,1,1,0,0,180);

	this.instance_174 = new lib.Symbol224("synched",0);
	this.instance_174.parent = this;
	this.instance_174.setTransform(580.6,0,1,1,0,0,180);

	this.instance_175 = new lib.Symbol225("synched",0);
	this.instance_175.parent = this;
	this.instance_175.setTransform(580.6,0,1,1,0,0,180);

	this.instance_176 = new lib.Symbol226("synched",0);
	this.instance_176.parent = this;
	this.instance_176.setTransform(580.6,0,1,1,0,0,180);

	this.instance_177 = new lib.Symbol227("synched",0);
	this.instance_177.parent = this;
	this.instance_177.setTransform(580.6,0,1,1,0,0,180);

	this.instance_178 = new lib.Symbol228("synched",0);
	this.instance_178.parent = this;
	this.instance_178.setTransform(580.6,0,1,1,0,0,180);

	this.instance_179 = new lib.Symbol229("synched",0);
	this.instance_179.parent = this;
	this.instance_179.setTransform(580.6,0,1,1,0,0,180);

	this.instance_180 = new lib.Symbol230("synched",0);
	this.instance_180.parent = this;
	this.instance_180.setTransform(580.6,0,1,1,0,0,180);

	this.instance_181 = new lib.Symbol231("synched",0);
	this.instance_181.parent = this;
	this.instance_181.setTransform(580.6,0,1,1,0,0,180);

	this.instance_182 = new lib.Symbol232("synched",0);
	this.instance_182.parent = this;
	this.instance_182.setTransform(580.6,0,1,1,0,0,180);

	this.instance_183 = new lib.Symbol233("synched",0);
	this.instance_183.parent = this;
	this.instance_183.setTransform(580.6,0,1,1,0,0,180);

	this.instance_184 = new lib.Symbol234("synched",0);
	this.instance_184.parent = this;
	this.instance_184.setTransform(580.6,0,1,1,0,0,180);

	this.instance_185 = new lib.Symbol235("synched",0);
	this.instance_185.parent = this;
	this.instance_185.setTransform(580.6,0,1,1,0,0,180);

	this.instance_186 = new lib.Symbol236("synched",0);
	this.instance_186.parent = this;
	this.instance_186.setTransform(580.6,0,1,1,0,0,180);

	this.instance_187 = new lib.Symbol237("synched",0);
	this.instance_187.parent = this;
	this.instance_187.setTransform(580.6,0,1,1,0,0,180);

	this.instance_188 = new lib.Symbol238("synched",0);
	this.instance_188.parent = this;
	this.instance_188.setTransform(580.6,0,1,1,0,0,180);

	this.instance_189 = new lib.Symbol239("synched",0);
	this.instance_189.parent = this;
	this.instance_189.setTransform(580.6,0,1,1,0,0,180);

	this.instance_190 = new lib.Symbol240("synched",0);
	this.instance_190.parent = this;
	this.instance_190.setTransform(580.6,0,1,1,0,0,180);

	this.instance_191 = new lib.Symbol241("synched",0);
	this.instance_191.parent = this;
	this.instance_191.setTransform(580.6,0,1,1,0,0,180);

	this.instance_192 = new lib.Symbol242("synched",0);
	this.instance_192.parent = this;
	this.instance_192.setTransform(580.6,0,1,1,0,0,180);

	this.instance_193 = new lib.Symbol243("synched",0);
	this.instance_193.parent = this;
	this.instance_193.setTransform(580.6,0,1,1,0,0,180);

	this.instance_194 = new lib.Symbol244("synched",0);
	this.instance_194.parent = this;
	this.instance_194.setTransform(580.6,0,1,1,0,0,180);

	this.instance_195 = new lib.Symbol245("synched",0);
	this.instance_195.parent = this;
	this.instance_195.setTransform(580.6,0,1,1,0,0,180);

	this.instance_196 = new lib.Symbol246("synched",0);
	this.instance_196.parent = this;
	this.instance_196.setTransform(580.6,0,1,1,0,0,180);

	this.instance_197 = new lib.Symbol247("synched",0);
	this.instance_197.parent = this;
	this.instance_197.setTransform(580.6,0,1,1,0,0,180);

	this.instance_198 = new lib.Symbol248("synched",0);
	this.instance_198.parent = this;
	this.instance_198.setTransform(580.6,0,1,1,0,0,180);

	this.instance_199 = new lib.Symbol249("synched",0);
	this.instance_199.parent = this;
	this.instance_199.setTransform(580.6,0,1,1,0,0,180);

	this.instance_200 = new lib.Symbol250("synched",0);
	this.instance_200.parent = this;
	this.instance_200.setTransform(580.6,0,1,1,0,0,180);

	this.instance_201 = new lib.Symbol251("synched",0);
	this.instance_201.parent = this;
	this.instance_201.setTransform(580.6,0,1,1,0,0,180);

	this.instance_202 = new lib.Symbol252("synched",0);
	this.instance_202.parent = this;
	this.instance_202.setTransform(580.6,0,1,1,0,0,180);

	this.instance_203 = new lib.Symbol253("synched",0);
	this.instance_203.parent = this;
	this.instance_203.setTransform(580.6,0,1,1,0,0,180);

	this.instance_204 = new lib.Symbol254("synched",0);
	this.instance_204.parent = this;
	this.instance_204.setTransform(580.6,0,1,1,0,0,180);

	this.instance_205 = new lib.Symbol255("synched",0);
	this.instance_205.parent = this;
	this.instance_205.setTransform(580.6,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regX:2.4,regY:-9,x:578.2,y:-9}},{t:this.shape},{t:this.instance_5,p:{regX:5.4,regY:-69.8,x:219,y:279.9}},{t:this.instance_4,p:{regX:2.4,regY:-9,x:233,y:289.7,skewX:0,skewY:180}},{t:this.instance_3},{t:this.instance_2,p:{regX:-18.2,regY:-10.5,x:155.4,y:289.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:-18.2,regY:-10.5,x:182.2,y:290.7,skewX:-75,skewY:105}}]}).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_7},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_8},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_9},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_10},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_11},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_12},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_13},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_14},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_15},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_16},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_17},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_18},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_19},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_20},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_21},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_22},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_23},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_24},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_25},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_26},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_27},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_28},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_29},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_30},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_31},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_32},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.7,y:299.1,skewX:1.3,skewY:-178.7}},{t:this.instance_33},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-76,skewY:104}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.3,skewX:-76,skewY:104}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.8,y:299.6,skewX:2.5,skewY:-177.5}},{t:this.instance_34},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-76.9,skewY:103.1}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:298.8,skewX:-76.9,skewY:103.1}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.1,y:300.1,skewX:3.8,skewY:-176.2}},{t:this.instance_35},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-77.7,skewY:102.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:298.4,skewX:-77.7,skewY:102.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.2,y:300.6,skewX:5,skewY:-175}},{t:this.instance_36},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-78.7,skewY:101.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:298,skewX:-78.7,skewY:101.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.4,y:301.1,skewX:6.3,skewY:-173.7}},{t:this.instance_37},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-79.5,skewY:100.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:297.7,skewX:-79.5,skewY:100.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.6,y:301.6,skewX:7.6,skewY:-172.4}},{t:this.instance_38},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-80.4,skewY:99.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:297.2,skewX:-80.4,skewY:99.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.7,y:302.1,skewX:8.8,skewY:-171.2}},{t:this.instance_39},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-81.2,skewY:98.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:296.9,skewX:-81.2,skewY:98.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.6,y:301.7,skewX:7.8,skewY:-172.2}},{t:this.instance_40},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-80.5,skewY:99.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:297.2,skewX:-80.5,skewY:99.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.4,y:301.2,skewX:6.6,skewY:-173.4}},{t:this.instance_41},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-79.7,skewY:100.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:297.5,skewX:-79.7,skewY:100.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.3,y:300.8,skewX:5.5,skewY:-174.5}},{t:this.instance_42},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-79,skewY:101}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:297.9,skewX:-79,skewY:101}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.1,y:300.3,skewX:4.3,skewY:-175.7}},{t:this.instance_43},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-78.2,skewY:101.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:298.2,skewX:-78.2,skewY:101.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236,y:299.9,skewX:3.3,skewY:-176.7}},{t:this.instance_44},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-77.4,skewY:102.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:298.6,skewX:-77.4,skewY:102.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.8,y:299.5,skewX:2.1,skewY:-177.9}},{t:this.instance_45},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-76.7,skewY:103.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:299,skewX:-76.7,skewY:103.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.6,y:299.1,skewX:1,skewY:-179}},{t:this.instance_46},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75.9,skewY:104.1}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.3,skewX:-75.9,skewY:104.1}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_47},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_48},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_49},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_50},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_51},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_52},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_53},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_54},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_55},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_56},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_57},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_58},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_59},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_60},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_61},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_62},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_63},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_64},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_65},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_66},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_67},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_68},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_69},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_70},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_71},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_72},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_73},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_74},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_75},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_76},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_77},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_78},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_79},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_80},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_81},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_82},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_83},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_84},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_85},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.3,y:298.5,skewX:-0.5,skewY:179.5}},{t:this.instance_86},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-74.7,skewY:105.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.9,skewX:-74.7,skewY:105.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.2,y:298.3,skewX:-1.1,skewY:178.9}},{t:this.instance_87},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-74.5,skewY:105.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300,skewX:-74.5,skewY:105.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.1,y:298,skewX:-1.8,skewY:178.2}},{t:this.instance_88},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-74.2,skewY:105.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.1,skewX:-74.2,skewY:105.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235,y:297.9,skewX:-2.3,skewY:177.7}},{t:this.instance_89},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.9,skewY:106.1}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.2,skewX:-73.9,skewY:106.1}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.8,y:297.6,skewX:-3,skewY:177}},{t:this.instance_90},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.5,skewY:106.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.4,skewX:-73.5,skewY:106.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.7,y:297.4,skewX:-3.6,skewY:176.4}},{t:this.instance_91},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.2,skewY:106.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.5,skewX:-73.2,skewY:106.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.6,y:297.2,skewX:-4.3,skewY:175.7}},{t:this.instance_92},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-73,skewY:107}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.7,skewX:-73,skewY:107}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.5,y:296.9,skewX:-4.8,skewY:175.2}},{t:this.instance_93},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-72.7,skewY:107.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.8,skewX:-72.7,skewY:107.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.4,y:296.7,skewX:-5.5,skewY:174.5}},{t:this.instance_94},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-72.4,skewY:107.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.9,skewX:-72.4,skewY:107.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.2,y:296.5,skewX:-6,skewY:174}},{t:this.instance_95},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-72,skewY:108}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:301.1,skewX:-72,skewY:108}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.4,y:296.8,skewX:-5.3,skewY:174.7}},{t:this.instance_96},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-72.4,skewY:107.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.9,skewX:-72.4,skewY:107.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.5,y:297,skewX:-4.8,skewY:175.2}},{t:this.instance_97},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-72.7,skewY:107.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.8,skewX:-72.7,skewY:107.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.6,y:297.2,skewX:-4,skewY:176}},{t:this.instance_98},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-73,skewY:107}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.7,skewX:-73,skewY:107}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.8,y:297.5,skewX:-3.3,skewY:176.7}},{t:this.instance_99},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-73.4,skewY:106.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.5,skewX:-73.4,skewY:106.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.9,y:297.7,skewX:-2.6,skewY:177.4}},{t:this.instance_100},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.7,skewY:106.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.3,skewX:-73.7,skewY:106.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.1,y:297.9,skewX:-2,skewY:178}},{t:this.instance_101},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-74,skewY:106}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.2,skewX:-74,skewY:106}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.2,y:298.2,skewX:-1.3,skewY:178.7}},{t:this.instance_102},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-74.4,skewY:105.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300,skewX:-74.4,skewY:105.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.3,y:298.5,skewX:-0.5,skewY:179.5}},{t:this.instance_103},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-74.7,skewY:105.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.8,skewX:-74.7,skewY:105.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_104},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_105},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_106},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_107},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_108},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_109},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_110},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_111},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_112},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_113},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_114},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_115},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_116},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_117},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_118},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_119},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_120},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_121},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_122},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_123},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_124},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_125},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_126},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_127},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_128},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_129},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_130},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_131},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_132},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_133},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_134},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_135},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_136},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_137},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_138},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_139},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_140},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_141},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_142},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_143},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.7,y:299.1,skewX:1.3,skewY:-178.7}},{t:this.instance_144},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-76,skewY:104}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.3,skewX:-76,skewY:104}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.8,y:299.6,skewX:2.5,skewY:-177.5}},{t:this.instance_145},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-76.9,skewY:103.1}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:298.8,skewX:-76.9,skewY:103.1}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.1,y:300.1,skewX:3.8,skewY:-176.2}},{t:this.instance_146},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-77.7,skewY:102.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:298.4,skewX:-77.7,skewY:102.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.2,y:300.6,skewX:5,skewY:-175}},{t:this.instance_147},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-78.7,skewY:101.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:298,skewX:-78.7,skewY:101.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.4,y:301.1,skewX:6.3,skewY:-173.7}},{t:this.instance_148},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-79.5,skewY:100.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:297.7,skewX:-79.5,skewY:100.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.6,y:301.6,skewX:7.6,skewY:-172.4}},{t:this.instance_149},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-80.4,skewY:99.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:297.2,skewX:-80.4,skewY:99.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.7,y:302.1,skewX:8.8,skewY:-171.2}},{t:this.instance_150},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-81.2,skewY:98.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:296.9,skewX:-81.2,skewY:98.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.6,y:301.7,skewX:7.8,skewY:-172.2}},{t:this.instance_151},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-80.5,skewY:99.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:297.2,skewX:-80.5,skewY:99.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.4,y:301.2,skewX:6.6,skewY:-173.4}},{t:this.instance_152},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-79.7,skewY:100.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:297.5,skewX:-79.7,skewY:100.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.3,y:300.8,skewX:5.5,skewY:-174.5}},{t:this.instance_153},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-79,skewY:101}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:297.9,skewX:-79,skewY:101}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236.1,y:300.3,skewX:4.3,skewY:-175.7}},{t:this.instance_154},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-78.2,skewY:101.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:298.2,skewX:-78.2,skewY:101.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:236,y:299.9,skewX:3.3,skewY:-176.7}},{t:this.instance_155},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-77.4,skewY:102.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:298.6,skewX:-77.4,skewY:102.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.8,y:299.5,skewX:2.1,skewY:-177.9}},{t:this.instance_156},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-76.7,skewY:103.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.7,y:299,skewX:-76.7,skewY:103.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.6,y:299.1,skewX:1,skewY:-179}},{t:this.instance_157},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75.9,skewY:104.1}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.3,skewX:-75.9,skewY:104.1}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_158},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_159},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_160},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_161},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_162},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_163},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_164},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_165},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_166},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_167},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_168},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_169},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_170},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_171},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_172},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_173},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_174},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_175},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_176},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_177},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_178},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_179},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_180},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_181},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_182},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_183},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_184},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_185},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_186},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.3,y:298.5,skewX:-0.5,skewY:179.5}},{t:this.instance_187},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-74.7,skewY:105.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.9,skewX:-74.7,skewY:105.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.2,y:298.3,skewX:-1.1,skewY:178.9}},{t:this.instance_188},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-74.5,skewY:105.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300,skewX:-74.5,skewY:105.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.1,y:298,skewX:-1.8,skewY:178.2}},{t:this.instance_189},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-74.2,skewY:105.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.1,skewX:-74.2,skewY:105.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235,y:297.9,skewX:-2.3,skewY:177.7}},{t:this.instance_190},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.9,skewY:106.1}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.2,skewX:-73.9,skewY:106.1}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.8,y:297.6,skewX:-3,skewY:177}},{t:this.instance_191},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.5,skewY:106.5}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.4,skewX:-73.5,skewY:106.5}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.7,y:297.4,skewX:-3.6,skewY:176.4}},{t:this.instance_192},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.2,skewY:106.8}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.5,skewX:-73.2,skewY:106.8}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.6,y:297.2,skewX:-4.3,skewY:175.7}},{t:this.instance_193},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-73,skewY:107}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.7,skewX:-73,skewY:107}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.5,y:296.9,skewX:-4.8,skewY:175.2}},{t:this.instance_194},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.3,skewX:-72.7,skewY:107.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.8,skewX:-72.7,skewY:107.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.4,y:296.7,skewX:-5.5,skewY:174.5}},{t:this.instance_195},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-72.4,skewY:107.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.9,skewX:-72.4,skewY:107.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.2,y:296.5,skewX:-6,skewY:174}},{t:this.instance_196},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-72,skewY:108}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:301.1,skewX:-72,skewY:108}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.4,y:296.8,skewX:-5.3,skewY:174.7}},{t:this.instance_197},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-72.4,skewY:107.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.9,skewX:-72.4,skewY:107.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.5,y:297,skewX:-4.8,skewY:175.2}},{t:this.instance_198},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-72.7,skewY:107.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.8,skewX:-72.7,skewY:107.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.6,y:297.2,skewX:-4,skewY:176}},{t:this.instance_199},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-73,skewY:107}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.7,skewX:-73,skewY:107}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.8,y:297.5,skewX:-3.3,skewY:176.7}},{t:this.instance_200},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.3,skewX:-73.4,skewY:106.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.5,y:300.5,skewX:-73.4,skewY:106.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:234.9,y:297.7,skewX:-2.6,skewY:177.4}},{t:this.instance_201},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-73.7,skewY:106.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.3,skewX:-73.7,skewY:106.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.1,y:297.9,skewX:-2,skewY:178}},{t:this.instance_202},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-74,skewY:106}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300.2,skewX:-74,skewY:106}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.2,y:298.2,skewX:-1.3,skewY:178.7}},{t:this.instance_203},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-74.4,skewY:105.6}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:300,skewX:-74.4,skewY:105.6}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:0,regY:0,x:221.4,y:288.9}},{t:this.instance_4,p:{regX:0,regY:0,x:235.3,y:298.5,skewX:-0.5,skewY:179.5}},{t:this.instance_204},{t:this.instance_2,p:{regX:0,regY:0,x:157.7,y:298.2,skewX:-74.7,skewY:105.3}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.8,skewX:-74.7,skewY:105.3}}]},1).to({state:[{t:this.instance_6,p:{regX:0,regY:0,x:580.6,y:0}},{t:this.shape},{t:this.instance_5,p:{regX:-246.8,regY:-179.8,x:331,y:265.7}},{t:this.instance_4,p:{regX:0,regY:0,x:235.4,y:298.7,skewX:0,skewY:180}},{t:this.instance_205},{t:this.instance_2,p:{regX:0,regY:0,x:157.8,y:298.2,skewX:-75,skewY:105}},{t:this.instance_1,p:{regX:0,regY:0,x:184.6,y:299.7,skewX:-75,skewY:105}}]},1).wait(1));

	// cup
	this.instance_206 = new lib.Group();
	this.instance_206.parent = this;
	this.instance_206.setTransform(202,203.1,0.342,0.342,0,0,0,320.2,516.9);
	this.instance_206.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance_206).wait(200));

	// l_arm
	this.instance_207 = new lib.l_entire_arm();
	this.instance_207.parent = this;
	this.instance_207.setTransform(422.4,298,0.444,0.444,75,0,0,11.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_207).wait(1).to({regX:21.6,regY:50.4,x:402.4,y:308},0).wait(26).to({rotation:75.9,x:402.2,y:307.7},0).wait(1).to({rotation:76.8,x:402,y:307.4},0).wait(1).to({rotation:77.7,x:401.9,y:307.1},0).wait(1).to({rotation:78.5,x:401.7,y:306.7},0).wait(1).to({rotation:79.4,x:401.6,y:306.4},0).wait(1).to({rotation:80.3,x:401.5,y:306.1},0).wait(1).to({rotation:81.2,x:401.3,y:305.8},0).wait(1).to({rotation:80.4,x:401.5,y:306},0).wait(1).to({rotation:79.6,x:401.6,y:306.3},0).wait(1).to({rotation:78.9,x:401.7,y:306.6},0).wait(1).to({rotation:78.1,x:401.8,y:306.9},0).wait(1).to({rotation:77.3,x:401.9,y:307.2},0).wait(1).to({rotation:76.5,x:402.1,y:307.5},0).wait(1).to({rotation:75.8,x:402.2,y:307.7},0).wait(1).to({rotation:75,x:402.4,y:308},0).wait(39).to({rotation:74.7,y:308.1},0).wait(1).to({rotation:74.4,y:308.2},0).wait(1).to({rotation:74.1,x:402.5,y:308.4},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:73.5,x:402.6,y:308.5},0).wait(1).to({rotation:73.2,y:308.6},0).wait(1).to({rotation:72.9,x:402.7,y:308.7},0).wait(1).to({rotation:72.6,y:308.8},0).wait(1).to({rotation:72.3,x:402.8,y:308.9},0).wait(1).to({rotation:72,y:309},0).wait(1).to({rotation:72.3,y:308.9},0).wait(1).to({rotation:72.7,x:402.7,y:308.8},0).wait(1).to({rotation:73,y:308.7},0).wait(1).to({rotation:73.3,x:402.6,y:308.6},0).wait(1).to({rotation:73.7,x:402.5,y:308.5},0).wait(1).to({rotation:74,y:308.3},0).wait(1).to({rotation:74.3,x:402.4},0).wait(1).to({rotation:74.7,y:308.1},0).wait(1).to({rotation:75,y:308},0).wait(40).to({rotation:75.9,x:402.2,y:307.7},0).wait(1).to({rotation:76.8,x:402,y:307.4},0).wait(1).to({rotation:77.7,x:401.9,y:307.1},0).wait(1).to({rotation:78.5,x:401.7,y:306.7},0).wait(1).to({rotation:79.4,x:401.6,y:306.4},0).wait(1).to({rotation:80.3,x:401.5,y:306.1},0).wait(1).to({rotation:81.2,x:401.3,y:305.8},0).wait(1).to({rotation:80.4,x:401.5,y:306},0).wait(1).to({rotation:79.6,x:401.6,y:306.3},0).wait(1).to({rotation:78.9,x:401.7,y:306.6},0).wait(1).to({rotation:78.1,x:401.8,y:306.9},0).wait(1).to({rotation:77.3,x:401.9,y:307.2},0).wait(1).to({rotation:76.5,x:402.1,y:307.5},0).wait(1).to({rotation:75.8,x:402.2,y:307.7},0).wait(1).to({rotation:75,x:402.4,y:308},0).wait(29).to({rotation:74.7,y:308.1},0).wait(1).to({rotation:74.4,y:308.2},0).wait(1).to({rotation:74.1,x:402.5,y:308.4},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:73.5,x:402.6,y:308.5},0).wait(1).to({rotation:73.2,y:308.6},0).wait(1).to({rotation:72.9,x:402.7,y:308.7},0).wait(1).to({rotation:72.6,y:308.8},0).wait(1).to({rotation:72.3,x:402.8,y:308.9},0).wait(1).to({rotation:72,y:309},0).wait(1).to({rotation:72.3,y:308.9},0).wait(1).to({rotation:72.7,x:402.7,y:308.8},0).wait(1).to({rotation:73,y:308.7},0).wait(1).to({rotation:73.3,x:402.6,y:308.6},0).wait(1).to({rotation:73.7,x:402.5,y:308.5},0).wait(1).to({rotation:74,y:308.3},0).wait(1).to({rotation:74.3,x:402.4},0).wait(1).to({rotation:74.7,y:308.1},0).wait(1).to({rotation:75,y:308},0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkwGTIiUkDIAvomIA3AHQBBALA0AQQCoA1gTBbQgPBFAJBKQAJBJAcAyICAijQAjgSCvAJQBYAEBRAIIg2F/IkdCSg");
	mask.setTransform(338.7,304.8);

	// r_arm
	this.instance_208 = new lib.r_entire_arm();
	this.instance_208.parent = this;
	this.instance_208.setTransform(331.3,302.4,0.444,0.444,-75,0,0,54.3,63.6);

	var maskedShapeInstanceList = [this.instance_208];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_208).wait(1).to({regX:47.1,regY:92.2,x:342.6,y:308.8},0).wait(26).to({rotation:-73.4,x:342.5,y:309.1},0).wait(1).to({rotation:-71.7,x:342.3,y:309.4},0).wait(1).to({rotation:-70.1,x:342.1,y:309.7},0).wait(1).to({rotation:-68.4,x:341.8,y:310},0).wait(1).to({rotation:-66.8,x:341.6,y:310.3},0).wait(1).to({rotation:-65.1,x:341.4,y:310.7},0).wait(1).to({rotation:-63.5,x:341.2,y:310.9},0).wait(1).to({rotation:-64.9,x:341.4,y:310.6},0).wait(1).to({rotation:-66.3,x:341.6,y:310.4},0).wait(1).to({rotation:-67.8,x:341.8,y:310.2},0).wait(1).to({rotation:-69.2,x:342,y:309.9},0).wait(1).to({rotation:-70.7,x:342.1,y:309.6},0).wait(1).to({rotation:-72.1,x:342.3,y:309.3},0).wait(1).to({rotation:-73.6,x:342.5,y:309.1},0).wait(1).to({rotation:-75,x:342.6,y:308.8},0).wait(39).to({rotation:-75.7,x:342.7,y:308.6},0).wait(1).to({rotation:-76.3,x:342.8,y:308.5},0).wait(1).to({rotation:-77,x:342.9,y:308.3},0).wait(1).to({rotation:-77.6,x:343,y:308.2},0).wait(1).to({rotation:-78.3,y:308},0).wait(1).to({rotation:-78.9,x:343.1,y:307.9},0).wait(1).to({rotation:-79.6,y:307.8},0).wait(1).to({rotation:-80.2,x:343.2,y:307.7},0).wait(1).to({rotation:-80.9,x:343.3,y:307.5},0).wait(1).to({rotation:-81.5,y:307.4},0).wait(1).to({rotation:-80.8,x:343.2,y:307.6},0).wait(1).to({rotation:-80.1,y:307.7},0).wait(1).to({rotation:-79.4,x:343.1,y:307.9},0).wait(1).to({rotation:-78.6,x:343,y:308},0).wait(1).to({rotation:-77.9,y:308.2},0).wait(1).to({rotation:-77.2,x:342.9,y:308.3},0).wait(1).to({rotation:-76.5,x:342.8,y:308.4},0).wait(1).to({rotation:-75.7,y:308.6},0).wait(1).to({rotation:-75,x:342.6,y:308.8},0).wait(40).to({rotation:-73.4,x:342.5,y:309.1},0).wait(1).to({rotation:-71.7,x:342.3,y:309.4},0).wait(1).to({rotation:-70.1,x:342.1,y:309.7},0).wait(1).to({rotation:-68.4,x:341.8,y:310},0).wait(1).to({rotation:-66.8,x:341.6,y:310.3},0).wait(1).to({rotation:-65.1,x:341.4,y:310.7},0).wait(1).to({rotation:-63.5,x:341.2,y:310.9},0).wait(1).to({rotation:-64.9,x:341.4,y:310.6},0).wait(1).to({rotation:-66.3,x:341.6,y:310.4},0).wait(1).to({rotation:-67.8,x:341.8,y:310.2},0).wait(1).to({rotation:-69.2,x:342,y:309.9},0).wait(1).to({rotation:-70.7,x:342.1,y:309.6},0).wait(1).to({rotation:-72.1,x:342.3,y:309.3},0).wait(1).to({rotation:-73.6,x:342.5,y:309.1},0).wait(1).to({rotation:-75,x:342.6,y:308.8},0).wait(29).to({rotation:-75.7,x:342.7,y:308.6},0).wait(1).to({rotation:-76.3,x:342.8,y:308.5},0).wait(1).to({rotation:-77,x:342.9,y:308.3},0).wait(1).to({rotation:-77.6,x:343,y:308.2},0).wait(1).to({rotation:-78.3,y:308},0).wait(1).to({rotation:-78.9,x:343.1,y:307.9},0).wait(1).to({rotation:-79.6,y:307.8},0).wait(1).to({rotation:-80.2,x:343.2,y:307.7},0).wait(1).to({rotation:-80.9,x:343.3,y:307.5},0).wait(1).to({rotation:-81.5,y:307.4},0).wait(1).to({rotation:-80.8,x:343.2,y:307.6},0).wait(1).to({rotation:-80.1,y:307.7},0).wait(1).to({rotation:-79.4,x:343.1,y:307.9},0).wait(1).to({rotation:-78.6,x:343,y:308},0).wait(1).to({rotation:-77.9,y:308.2},0).wait(1).to({rotation:-77.2,x:342.9,y:308.3},0).wait(1).to({rotation:-76.5,x:342.8,y:308.4},0).wait(1).to({rotation:-75.7,y:308.6},0).wait(1).to({rotation:-75,x:342.6,y:308.8},0).wait(1));

	// tie
	this.instance_209 = new lib.tie();
	this.instance_209.parent = this;
	this.instance_209.setTransform(366.4,308.9,1,1,0,0,0,21.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_209).wait(1).to({regY:10.3,y:309},0).wait(26).to({rotation:-1.3},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-5.1,y:308.9},0).wait(1).to({rotation:-6.4,y:309},0).wait(1).to({rotation:-7.7,y:308.9},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-7.9},0).wait(1).to({rotation:-6.7,y:309},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-4.5,y:308.9},0).wait(1).to({rotation:-3.4,y:309},0).wait(1).to({rotation:-2.2,y:308.9},0).wait(1).to({rotation:-1.1,y:309},0).wait(1).to({rotation:0},0).wait(39).to({rotation:0.6},0).wait(1).to({rotation:1.2,y:308.9},0).wait(1).to({rotation:1.9,y:309},0).wait(1).to({rotation:2.5,y:308.9},0).wait(1).to({rotation:3.1,y:309},0).wait(1).to({rotation:3.7,y:308.9},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:4.9,y:309},0).wait(1).to({rotation:5.6,y:308.9},0).wait(1).to({rotation:6.2,y:309},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:4.8},0).wait(1).to({rotation:4.1,y:308.9},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0,y:309},0).wait(40).to({rotation:-1.3},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-5.1,y:308.9},0).wait(1).to({rotation:-6.4,y:309},0).wait(1).to({rotation:-7.7,y:308.9},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-7.9},0).wait(1).to({rotation:-6.7,y:309},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-4.5,y:308.9},0).wait(1).to({rotation:-3.4,y:309},0).wait(1).to({rotation:-2.2,y:308.9},0).wait(1).to({rotation:-1.1,y:309},0).wait(1).to({rotation:0},0).wait(29).to({rotation:0.6},0).wait(1).to({rotation:1.2,y:308.9},0).wait(1).to({rotation:1.9,y:309},0).wait(1).to({rotation:2.5,y:308.9},0).wait(1).to({rotation:3.1,y:309},0).wait(1).to({rotation:3.7,y:308.9},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:4.9,y:309},0).wait(1).to({rotation:5.6,y:308.9},0).wait(1).to({rotation:6.2,y:309},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:4.8},0).wait(1).to({rotation:4.1,y:308.9},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0,y:309},0).wait(1));

	// mouth
	this.instance_210 = new lib.mouth();
	this.instance_210.parent = this;
	this.instance_210.setTransform(368.7,290.5,0.444,0.129,0,0,0,21.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_210).wait(200));

	// eyes
	this.instance_211 = new lib.eyes();
	this.instance_211.parent = this;
	this.instance_211.setTransform(371.7,278.5,0.444,0.444,0,0,0,51.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_211).wait(200));

	// r_brrow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("Ah5AhQgCgMAggUQAlgXAwgIQAvgHArALQAlAKABALQABAFgkgGQgygJgoAHQgoAGgtAWQgaAOgFAAIgCgBg");
	this.shape_1.setTransform(352.4,263.8,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(200));

	// l_brrow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("ABYAcQgogegngNQgmgNg0ADQglACABgEQAEgLAmgGQAugGAtAPQAuAPAgAdQAcAagEALIgBABQgFAAgYgTg");
	this.shape_2.setTransform(392.9,266.2,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(200));

	// body
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3753A").s().p("ApiNIQjlhsiZi9QCSCBC5BGQDABJDRAAQDYAADFhOQC+hLCTiKQCTiJBRiyQBUi4AAjJQAAjnhsjOQhqjHi7iLQEMCBCgDsQCkDzAAEfQAADMhXC7QhTC1iZCMQiYCMjGBMQjMBQjfAAQkLAAjshwg");
	this.shape_3.setTransform(382.9,293.4,0.444,0.444);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA983E").s().p("Ai9GdQhYgihDg+QhEg+glhRQgnhTAAhbQAAhaAnhUQAlhPBEg/QBDg+BYgiQBagjBjAAQBjAABbAjQBYAiBEA+QBDA/AlBPQAnBUAABaQAABbgnBTQglBRhDA+QhEA+hYAiQhbAjhjAAQhjAAhagjg");
	this.shape_4.setTransform(378.1,290.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AhGFHQgggBgxgJQhOgNBGgsQB3g+BFgoQAVgLAZjQQAdjvAIgbQAzABAGABQAYAFAAAVIgJGmIgCBfQgFBIgWANQgSAKgvAHQguAIgvAAQg1AAgOgBg");
	this.shape_5.setTransform(355.9,344.1,0.444,0.444);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AiLFOQhPgFBCgzQBwhJBBguQAUgOAFjRQAGjxAGgcQA0gDAFAAQAYADACAVIAfGlIAHBeQACBJgVAOQgRAMgtAMQgvAMguAFQgzAFgPABIgQAAQgcAAgmgDg");
	this.shape_6.setTransform(383.7,347,0.444,0.444);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E914D").s().p("AggBPIgIihIBRAPIgNCWg");
	this.shape_7.setTransform(385.9,244,0.444,0.444);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3E914D").s().p("AgJD2QkcghjXhjQjdhmAMhkQANhwBZghQBqgmEFAuQB1AUCVBCQAcANDfBtQCPBFBUAWQBzAfBRgeQA5gWg+AjQg+AjhiAkQj3BcjGAAQgwAAgrgFg");
	this.shape_8.setTransform(408.9,237.6,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367.6,226.5,348.3,353);
// library properties:
lib.properties = {
	id: 'F9058EAE758643DC847CEB984A5E9853',
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
an.compositions['F9058EAE758643DC847CEB984A5E9853'] = {
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