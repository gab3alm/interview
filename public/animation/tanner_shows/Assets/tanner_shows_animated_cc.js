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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_hand, new cjs.Rectangle(-1,-2.4,54,45.5), null);


(lib.r_brrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("Ah5AhQgCgMAggUQAlgXAwgIQAvgHArALQAlAKABALQABAFgkgGQgygJgoAHQgoAGgtAWQgaAOgFAAIgCgBg");
	this.shape.setTransform(12.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_brrow, new cjs.Rectangle(0,0,24.5,6.8), null);


(lib.r_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ACsDgQiXhChyhMQhbg9hriEQhuiJAggYQAXgRBpB4QCECWA4AjQAmAYBVAmICVBBQCvBPgTAmQgHAPgcAAQgyAAh2gzg");
	this.shape.setTransform(38.7,27.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_arm, new cjs.Rectangle(1,0,75.5,55), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C55C64").s().p("AAAB4QhSgBg5gkQg2gigMgxQgQg8AfgbQAtgmCSAHQCOAHAqAcQAmAZgQA9QgOAyg2AhQg4AihQAAIgDAAg");
	this.shape.setTransform(21.1,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C55C64").s().p("AgBB1QhKAAg1gfIgIgFQg0gggMgxIAAAAQgPg6AegbQAJgHALgFQAzgYBzAGQCKAHApAcQAeATgFAsQgBAKgDAKQgMAtgtAfIgIAFQg0AfhGACIgPAAg");
	this.shape_1.setTransform(21.1,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C55C64").s().p("AgBBzQhIgBg0geIgIgEQgygggMgwIAAAAQgOg4AdgaQAIgHAMgFQAxgYBwAGQCGAGApAcQAcATgEArQgBAKgDAJQgMAsgsAeIgIAGQgyAehFACIgOAAg");
	this.shape_2.setTransform(21.1,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C55C64").s().p("AgBBwQhGgBgygdIgIgFQgxgegLgvIAAAAQgOg3AdgZQAIgHALgFQAwgXBtAFQCCAGAnAcQAcATgFApQAAAKgDAJQgMArgrAdIgHAFQgxAehDACIgOAAg");
	this.shape_3.setTransform(21.1,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C55C64").s().p("AgBBtQhEAAgxgdIgIgFQgvgegLgtIAAAAQgNg1AcgZQAIgHAKgFQAvgXBqAFQB/AGAlAcQAbATgEAnIgEATQgLAqgpAcIgIAFQgvAdhBACIgOAAg");
	this.shape_4.setTransform(21.1,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C55C64").s().p("AgBBrQhCgBgwgcIgHgEQgvgegKgsIAAAAQgMgzAbgZQAIgGAKgFQAugXBmAFQB7AFAlAcQAZATgEAmIgDATQgLAogoAcIgIAFQguAcg/ACIgNAAg");
	this.shape_5.setTransform(21.1,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C55C64").s().p("AgBBoQhBAAgugcIgHgEQgtgdgKgrIAAAAQgMgxAbgYQAHgHAKgFQAtgWBjAFQB3AFAkAcQAYASgDAlIgEASQgKAngnAbIgHAFQgtAcg+ABIgMAAg");
	this.shape_6.setTransform(21.1,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C55C64").s().p("AgBBmQg/gBgsgbIgHgEQgsgcgJgqIAAAAQgLgwAagYQAHgGAKgEQArgXBgAFQBzAFAjAcQAXARgEAlQAAAIgDAJQgJAmgnAbIgHAEQgrAbg8ACIgMAAg");
	this.shape_7.setTransform(21,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C55C64").s().p("AgBBjQg9gBgrgaIgHgEQgqgbgJgpIAAAAQgLguAagXQAHgGAJgFQAqgWBdAFQBvAEAiAcQAWARgDAkQgBAIgCAIQgKAlglAaIgGAEQgrAbg6ABIgLAAg");
	this.shape_8.setTransform(21,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C55C64").s().p("AgCBhQg6gBgqgZIgHgEQgpgbgIgnIAAgBQgKgsAZgXQAGgFAKgFQApgWBZAEQBsAFAgAcQAVAQgDAjQAAAIgDAHQgJAlgkAZIgGAEQgpAZg4ACIgMAAg");
	this.shape_9.setTransform(21,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C55C64").s().p("AgCBeQg5gBgogYIgHgEQgngagIgmIAAgBQgJgrAYgWQAGgFAJgFQAogVBWADQBoAFAfAcQAVAQgDAhIgDAPQgJAkgiAYIgHAEQgnAYg3ACIgLAAg");
	this.shape_10.setTransform(21,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C55C64").s().p("AgCBbQg2gBgogYIgGgDQgmgZgHgmIAAAAQgJgpAYgVQAGgGAIgEQAngWBSAEQBlAEAeAcQATAQgDAgIgCAOQgIAjgiAXIgGAEQgmAYg1ABIgLAAg");
	this.shape_11.setTransform(21,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C55C64").s().p("AgCBZQg1gBgmgXIgGgEQgkgYgHgkIAAgBQgIgnAXgVQAGgGAIgEQAlgVBPADQBhAEAdAcQASAQgCAeIgDAPQgHAhghAWIgGAEQglAXgzACIgKAAg");
	this.shape_12.setTransform(21,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C55C64").s().p("AgCBWQgzgBglgWIgFgEQgkgXgGgjIAAgBQgHglAWgVQAFgFAIgEQAlgVBLADQBdADAcAcQASAQgDAdIgCAOQgIAggfAWIgFADQgkAXgyABIgJAAg");
	this.shape_13.setTransform(21,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C55C64").s().p("AgCBUQgygBgigWIgGgDQgigXgFgiIAAAAQgIgkAWgUQAGgFAHgEQAkgVBIADQBZADAbAcQAQAPgCAcIgCANQgHAfgeAVIgGAEQgjAWgvABIgJAAg");
	this.shape_14.setTransform(20.9,11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C55C64").s().p("AgCBRQgvgBgigVIgFgDQghgWgFghQgGgjAUgTQAGgFAHgEQAigUBFACQBWADAZAcQAPAOgCAcIgBAMQgHAegdAUIgFAEQgiAVgtABIgJAAg");
	this.shape_15.setTransform(20.9,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C55C64").s().p("AgDBPQgtgBgggVIgFgDQgfgVgFggIAAAAQgGghAVgTQAFgFAGgEQAhgTBCACQBSACAYAcQAPAPgCAZIgCANQgGAcgcAUIgFADQggAVgsABIgJAAg");
	this.shape_16.setTransform(20.9,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C55C64").s().p("AgDBMQgrgBgfgTIgFgDQgegVgEgeIAAgBQgFgfAUgSQAEgFAHgEQAggTA+ABQBOADAXAcQAOAOgCAYIgBAMQgGAcgbASIgFAEQgeATgrABIgIAAg");
	this.shape_17.setTransform(20.9,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C55C64").s().p("AgDBJQgpgBgegTIgEgDQgdgUgDgdQgFgdATgSIALgJQAfgTA6ACQBLACAWAcQAMANgBAYIgBALQgGAagZASIgFADQgdAUgpAAIgIAAg");
	this.shape_18.setTransform(20.9,11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C55C64").s().p("AgDBHQgngBgcgSIgFgDQgbgTgDgcIAAgBQgEgcASgRIALgIQAdgTA4ABQBGACAVAcQAMANgCAXIgBAKQgFAagYARIgFADQgcASgnABIgHAAg");
	this.shape_19.setTransform(20.9,11.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C55C64").s().p("AgDBEQgmgBgagSIgFgCQgZgTgDgbQgDgaASgRQADgEAHgEQAbgTA1ACQBDABATAcQALANgBAVIgBAKQgFAYgXARIgEADQgbASglAAIgHAAg");
	this.shape_20.setTransform(20.9,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C55C64").s().p("AgDBCQgjgCgagQIgEgDQgYgSgCgZIAAgBQgDgYARgRIAJgHQAbgTAxABQA/ABATAcQAKANgBAUIgBAJQgFAYgWAQIgDACQgaARgkABIgGAAg");
	this.shape_21.setTransform(20.8,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C55C64").s().p("AgDA/QgigBgYgQIgEgCQgXgSgBgYQgCgXAQgQQAEgEAFgDQAagTAtABQA8ABARAcQAJAMgBATIgBAJQgEAWgUAPIgEADQgYAQgiAAIgGAAg");
	this.shape_22.setTransform(20.8,11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C55C64").s().p("AgDA9QgggCgWgPIgEgDQgVgQgCgXQgBgWAQgPIAIgHQAYgSArAAQA4ABAQAcQAHAMAAARIgBAJQgEAVgTAOIgDACQgXAQggABIgGAAg");
	this.shape_23.setTransform(20.8,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C55C64").s().p("AgDA6QgegBgVgPIgEgCQgUgQAAgWQgBgUAPgPIAHgGQAYgSAnAAQA0AAAPAcQAHAMgBAQIAAAIQgEAUgSAOIgDACQgWAPgeAAIgFAAg");
	this.shape_24.setTransform(20.8,11.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C55C64").s().p("AgzAoQgWgPAAgXQAAgXAVgQQAXgSAjAAQBEABAAA2QAAAXgUAQQgWAQgeABQgfgBgWgPg");
	this.shape_25.setTransform(20.8,11.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C55C64").s().p("AgzAoQgWgQAAgWQAAgXAVgQQAXgRAjAAQBEgBAAA3QAAAXgUAQQgVAQggAAQgeAAgWgPg");
	this.shape_26.setTransform(20.8,11.2);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C55C64").s().p("AgxAqQgagPAAgYQgBgXAWgSQAYgSAlAAQBEAAABA2QABAYgUARQgUARggABIgCAAQgeAAgWgPg");
	this.shape_27.setTransform(20.7,11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C55C64").s().p("AgvAsQgegOgBgaQAAgYAWgSQAZgUAmAAQBFAAACA3QACAYgUASQgUASggABIgEABQgdAAgWgPg");
	this.shape_28.setTransform(20.6,11.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C55C64").s().p("AgtAvQghgOgCgbQgBgZAYgTQAZgVAoAAQBFAAAEA3QACAYgTAUQgUASghACIgGAAQgbAAgXgNg");
	this.shape_29.setTransform(20.6,11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C55C64").s().p("AgrAxQglgNgCgcQgCgaAZgUQAagWApAAQBGAAAFA2QADAZgTAVQgTATgiACIgIAAQgaAAgXgMg");
	this.shape_30.setTransform(20.5,11.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C55C64").s().p("AgpA0QgpgOgDgdQgCgbAagVQAbgWArgBQBGAAAGA3QAEAZgSAWQgTAUgiADIgKAAQgaAAgXgLg");
	this.shape_31.setTransform(20.5,11.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C55C64").s().p("AgnA2QgtgNgDgfQgCgcAagWQAcgXAsgBQBHAAAHA3QAFAagSAWQgTAVgiAEIgMABQgaAAgWgLg");
	this.shape_32.setTransform(20.4,11.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C55C64").s().p("AglA4QgxgNgEggQgCgcAbgXQAdgZAuAAQBHAAAIA2QAGAbgSAXQgSAWgjAEIgNABQgZAAgXgKg");
	this.shape_33.setTransform(20.4,11.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C55C64").s().p("AgjA6Qg1gMgEgiQgDgdAcgYQAfgZAvAAQBIgBAIA3QAIAbgSAZQgRAWgkAEIgRABQgYAAgWgJg");
	this.shape_34.setTransform(20.3,11.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C55C64").s().p("AghA8Qg5gLgFgjQgDgeAdgZQAfgbAxAAQBIAAAKA2QAIAcgRAaQgRAWglAGIgSABQgXAAgWgJg");
	this.shape_35.setTransform(20.3,11.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C55C64").s().p("AgfA+Qg9gLgFgkQgEgfAegaQAggcAyAAQBJAAALA2QAJAdgRAaQgQAYgmAGIgUACQgXAAgVgJg");
	this.shape_36.setTransform(20.2,11.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C55C64").s().p("AgdBBQhBgLgFgmQgEgfAegbQAhgdAzAAQBKAAAMA2QAKAdgQAbQgRAYglAHQgMACgLAAQgWAAgVgHg");
	this.shape_37.setTransform(20.2,11.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C55C64").s().p("AgcBDQhEgKgGgoQgEggAfgcQAigeA1AAQBKAAANA2QALAegQAdQgQAYgmAHQgNADgNAAQgVAAgVgHg");
	this.shape_38.setTransform(20.1,11.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C55C64").s().p("AgaBFQhIgKgHgoQgFghAhgdQAjgfA2AAQBKAAAPA2QAMAegQAeQgPAZgoAIQgOACgNAAQgUAAgVgGg");
	this.shape_39.setTransform(20.1,11.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C55C64").s().p("AgYBHQhMgJgHgqQgFgiAhgeQAkggA3AAQBLAAAQA2QANAfgQAfQgPAagnAIQgPADgPAAQgUAAgUgGg");
	this.shape_40.setTransform(20.1,11.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C55C64").s().p("AgWBJQhQgJgIgrQgFgjAigfQAlggA5gBQBLAAARA2QAOAfgPAgQgPAbgoAJQgQAEgQAAQgTAAgUgGg");
	this.shape_41.setTransform(20,11.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C55C64").s().p("AgVBMQhTgJgIgtQgGgjAjggQAmgiA6AAQBMAAASA2QAOAfgOAhQgPAcgpAKQgRADgRAAQgSAAgUgEg");
	this.shape_42.setTransform(20,11.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C55C64").s().p("AgTBOQhXgIgJguQgGglAkggQAngjA7gBQBNAAATA2QAPAggOAjQgOAcgpAKQgTAEgSAAQgSAAgTgEg");
	this.shape_43.setTransform(20,11.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C55C64").s().p("AgRBQQhbgIgJgwQgHglAlghQAogkA9gBQBNAAAUA2QAQAhgOAjQgNAdgqALQgUAFgUAAQgSAAgRgEg");
	this.shape_44.setTransform(19.9,11.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C55C64").s().p("AgPBSQhfgHgKgyQgHgmAmgiQAoglA/AAQBNgBAWA2QARAigOAkQgNAdgqAMQgVAFgWAAQgRAAgQgDg");
	this.shape_45.setTransform(19.9,11.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C55C64").s().p("AgOBUQhigHgLgyQgHgnAngkQApgmBAAAQBOAAAXA2QASAigNAlQgNAegrAMQgWAGgXAAQgRAAgQgDg");
	this.shape_46.setTransform(19.9,11.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C55C64").s().p("AgMBWQhngHgLg0QgHgnAnglQArgnBBAAQBPAAAXA2QAUAigOAmQgMAfgsANQgXAHgYAAQgQAAgPgDg");
	this.shape_47.setTransform(19.9,11.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C55C64").s().p("AgKBYQhrgGgLg1QgIgpAoglQAsgoBDAAQBPgBAYA2QAVAkgNAnQgMAfgsANQgZAHgZAAQgQAAgOgCg");
	this.shape_48.setTransform(19.8,11.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C55C64").s().p("AgJBaQhugFgMg3QgIgqApgmQAsgpBFAAQBPgBAaA2QAVAlgMAnQgMAggtAOQgZAIgcAAQgOAAgOgCg");
	this.shape_49.setTransform(19.8,11.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C55C64").s().p("AgHBcQhzgFgMg4QgJgqAqgnQAugqBGgBQBQAAAaA2QAXAlgMAoQgLAhguAPQgbAIgeAAIgZgCg");
	this.shape_50.setTransform(19.8,11.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C55C64").s().p("AgFBeQh2gEgNg6QgJgrArgoQAugrBHAAQBRgBAcA2QAXAmgMApQgLAiguAPQgcAIgeAAIgZgBg");
	this.shape_51.setTransform(19.8,11.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C55C64").s().p("AgEBgQh6gEgNg7QgKgsAsgpQAwgsBIAAQBRgBAdA2QAYAmgLArQgKAigvAQQgdAJghAAIgXgBg");
	this.shape_52.setTransform(19.8,11.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C55C64").s().p("AgCBiQh+gEgOg8QgKgtAtgqQAxgtBKAAQBRgBAeA2QAZAngLAsQgJAjgwAQQgeAKgiAAIgWgBg");
	this.shape_53.setTransform(19.7,11.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C55C64").s().p("AgBBkQiBgDgPg+QgKgtAugrQAxguBMgBQBSAAAfA2QAaAngLAtQgJAjgwARQggALglAAIgTgBg");
	this.shape_54.setTransform(19.7,11.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C55C64").s().p("AAABmQiEgDgPg/QgLguAvgsQAygvBNgBQBSAAAhA2QAbAngLAuQgIAlgxARQgiAMgnAAIgRgBg");
	this.shape_55.setTransform(19.7,11.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C55C64").s().p("AACBoQiIgCgQhBQgLgvAwgtQAzgwBOgBQBTAAAiA2QAbAogKAvQgIAlgyASQgiANgoAAIgQgBg");
	this.shape_56.setTransform(19.7,11.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C55C64").s().p("AADBqQiMgBgQhDQgLgvAwguQA0gyBQAAQBTAAAjA1QAdApgKAwQgIAmgyASQgjANgrAAIgOAAg");
	this.shape_57.setTransform(19.7,11.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C55C64").s().p("AAFBsQiQgBgQhEQgMgwAxgvQA1gzBRAAQBUAAAkA1QAeAqgJAxQgIAmgzATQglAOgsAAIgMAAg");
	this.shape_58.setTransform(19.6,11.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C55C64").s().p("AAHBuQiUgBgRhFQgMgxAygwQA2g0BSAAQBVAAAlA1QAeAqgJAyQgHAngzAUQgnAPguAAIgJAAg");
	this.shape_59.setTransform(19.6,11.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C55C64").s().p("AAJBwQiYgBgShGQgMgyAzgxQA3g0BUgBQBVAAAmA1QAfArgIAzQgHAog0AUQgoAQgxAAIgGAAg");
	this.shape_60.setTransform(19.6,11.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C55C64").s().p("AAKBxQicAAgRhHQgNgzAzgyQA5g1BVgBQBVAAAnA1QAhArgIA0QgHApg0AVQgpARgyAAIgGgBg");
	this.shape_61.setTransform(19.6,11.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C55C64").s().p("AimArQgOg0A1gyQA5g3BXgBQBWAAAoA1QAhAsgHA1QgGApg2AWQgqARg4AAIgCABQidAAgShJg");
	this.shape_62.setTransform(19.6,11.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C55C64").s().p("AipAsQgOg1A2gzQA6g4BYAAQBWgBAqA2QAiAsgIA2QgFAqg2AWQgrASg4AAIgEAAQifAAgThJg");
	this.shape_63.setTransform(19.6,12);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C55C64").s().p("AisAtQgOg2A3g0QA7g5BZAAQBXgBArA2QAjAsgHA4QgFAqg3AXQgrATg5AAIgHAAQihAAgThKg");
	this.shape_64.setTransform(19.5,12);
	this.shape_64._off = true;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C55C64").s().p("AAKByQicAAgShIQgNgzA0gyQA4g2BWAAQBVAAAoA1QAgArgIA0QgGApg1AVQgqARg0AAIgDAAg");
	this.shape_65.setTransform(19.6,11.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C55C64").s().p("AAFBsQiQgBgRhEQgMgwAygvQA1gzBRAAQBUgBAkA2QAeApgJAyQgHAmgzAUQglANgtAAIgMAAg");
	this.shape_66.setTransform(19.6,11.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C55C64").s().p("AABBmQiGgCgPhAQgKguAugtQAzgvBNAAQBTgBAgA2QAbAogKAuQgJAkgxASQghAMgnAAIgRgBg");
	this.shape_67.setTransform(19.7,11.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C55C64").s().p("AgDBhQh7gEgOg7QgJgsAsgqQAwgsBJgBQBRAAAdA2QAYAmgLArQgKAjgvAPQgeAKghAAIgWgBg");
	this.shape_68.setTransform(19.7,11.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C55C64").s().p("AgIBbQhwgFgMg4QgJgpAqgnQAtgqBFAAQBPAAAaA2QAWAkgMAoQgLAhguAOQgaAIgcAAQgOAAgNgCg");
	this.shape_69.setTransform(19.8,11.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C55C64").s().p("AgNBVQhlgGgKg0QgIgnAngkQArgmBAgBQBOAAAXA2QATAigNAmQgMAegsANQgXAGgXAAQgQAAgQgDg");
	this.shape_70.setTransform(19.9,11.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C55C64").s().p("AgSBPQhZgIgJgvQgHglAlghQAngkA8AAQBNAAAUA2QAQAggOAjQgOAdgqAKQgTAFgTAAQgSAAgSgEg");
	this.shape_71.setTransform(20,11.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C55C64").s().p("AgXBJQhOgJgIgrQgFgjAigeQAkggA4gBQBMAAAQA2QANAfgPAgQgPAagoAJQgPADgPAAQgUAAgUgFg");
	this.shape_72.setTransform(20.1,11.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C55C64").s().p("AgcBCQhDgKgGgnQgFggAggcQAhgdA0AAQBKAAANA2QALAdgQAcQgQAZgnAHQgMACgLAAQgWAAgVgHg");
	this.shape_73.setTransform(20.2,11.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C55C64").s().p("AgiA8Qg3gMgFgiQgDgeAdgZQAfgaAwgBQBIAAAKA3QAIAbgSAaQgRAWgkAFIgTACQgXAAgWgJg");
	this.shape_74.setTransform(20.3,11.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C55C64").s().p("AgnA1QgtgNgDgeQgCgcAagWQAcgXAsAAQBHAAAHA2QAFAagSAWQgTAVgjADIgMABQgZAAgWgLg");
	this.shape_75.setTransform(20.4,11.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C55C64").s().p("AgtAvQghgOgCgbQgBgZAYgTQAZgUAogBQBFAAADA3QADAYgTAUQgUASghACIgGAAQgcAAgWgNg");
	this.shape_76.setTransform(20.6,11.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C55C64").s().p("AgEA5QgcgBgVgPIgDgCQgUgPAAgWQgBgTAPgPIAHgHQAXgRAmAAQAyAAAPAcQAGALAAAQIAAAIQgEATgRAOIgDACQgWAPgdAAIgGAAg");
	this.shape_77.setTransform(20.8,11.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C55C64").s().p("AgDA7QgegCgWgPIgDgCQgVgQgBgWIAAAAQAAgUAPgPIAHgHQAYgSAoABQA1AAAPAcQAHALAAARIgBAIQgEAUgSAOIgDACQgWAQgfAAIgFAAg");
	this.shape_78.setTransform(20.8,11.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C55C64").s().p("AgDA8QgfgBgXgQIgDgCQgWgQgBgXQgBgVAPgQIAIgHQAZgSAqABQA3AAAQAcQAHAMAAARIgBAJQgDAUgUAPIgDACQgXAQggAAIgFAAg");
	this.shape_79.setTransform(20.8,11.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C55C64").s().p("AgDA+QgggCgYgPIgDgDQgXgQgBgYQgBgWAPgQIAJgHQAZgSAsAAQA5ABARAcQAIAMgBASIAAAJQgEAVgUAPIgEACQgXARghAAIgGAAg");
	this.shape_80.setTransform(20.8,11.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C55C64").s().p("AgDBAQgigCgYgQIgEgCQgXgSgBgYQgCgXAQgQQADgEAFgDQAagTAuABQA8ABARAcQAJAMgBATIgBAJQgEAWgUAPIgEADQgYAQgiABIgGAAg");
	this.shape_81.setTransform(20.8,11.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C55C64").s().p("AgDBBQgjgCgZgQIgEgDQgYgRgCgZIAAgBQgCgYARgQQADgEAGgDQAagTAwABQA+ABASAcQAKAMgBAUIgBAJQgFAXgVAQIgEACQgZARgjABIgGAAg");
	this.shape_82.setTransform(20.8,11.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C55C64").s().p("AgDBDQgkgCgagRIgEgCQgYgSgDgaQgCgZARgRIAJgIQAbgSAyABQBAABATAcQAKANgBAUIgBAJQgEAYgXAQIgDADQgaARgkABIgHAAg");
	this.shape_83.setTransform(20.8,11.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C55C64").s().p("AgDBEQglgBgbgRIgEgDQgagTgCgaQgDgaARgRIAKgIQAcgTA0ABQBCACAUAcQAKANgBAVIgBAJQgFAZgXAQIgEADQgaASglAAIgHAAg");
	this.shape_84.setTransform(20.9,11.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C55C64").s().p("AgDBGQgmgCgcgSIgEgCQgbgTgCgcQgEgbASgRIAKgIQAdgTA2ACQBEABAVAcQALANgBAWIgCAKQgFAZgXARIgEADQgcASgmABIgHAAg");
	this.shape_85.setTransform(20.9,11.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C55C64").s().p("AgDBHQgngBgdgSIgEgDQgbgTgEgcIAAgBQgDgcASgRQAEgFAGgDQAegTA4ABQBHACAVAcQALANgBAXIgBAKQgGAagYARIgEADQgcATgoAAIgHAAg");
	this.shape_86.setTransform(20.9,11.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C55C64").s().p("AgDBJQgogCgegSIgEgDQgcgUgEgdIAAAAQgEgdATgSIAKgIQAfgTA5ABQBKACAWAcQAMAOgCAXIgBALQgGAagYASIgFADQgdATgoABIgIAAg");
	this.shape_87.setTransform(20.9,11.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C55C64").s().p("AgDBKQgpgBgegTIgFgDQgdgUgEgeQgEgeATgSQAEgFAHgDQAfgUA7ACQBMACAXAcQAMAOgBAYIgCALQgFAbgaASIgFADQgeAUgpAAIgIAAg");
	this.shape_88.setTransform(20.9,11.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C55C64").s().p("AgDBMQgrgCgfgTIgFgDQgdgVgEgeQgFgfATgTIALgIQAggUA+ACQBOACAXAcQANAOgBAZIgCALQgGAcgaATIgFADQgfAUgqABIgIAAg");
	this.shape_89.setTransform(20.9,11.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C55C64").s().p("AgDBNQgsgBgggUIgFgDQgegVgFgfIAAAAQgFggAUgTQAFgFAGgEQAhgTBAACQBQACAYAcQAOAOgCAaIgBALQgHAdgbATIgFADQgfAUgrABIgJAAg");
	this.shape_90.setTransform(20.9,11.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C55C64").s().p("AgDBPQgtgBghgUIgFgEQgfgVgFggIAAAAQgFghAUgTQAFgFAHgEQAhgUBCACQBSADAZAcQAOAOgBAaIgCANQgHAcgbAUIgFADQghAVgsABIgJAAg");
	this.shape_91.setTransform(20.9,11.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C55C64").s().p("AgDBQQgugBghgVIgGgDQgggWgFggQgGgiAVgUQAFgFAHgEQAigUBEADQBVACAZAcQAPAPgCAbIgCAMQgGAegdAUIgFADQghAVguABIgJAAg");
	this.shape_92.setTransform(20.9,11.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C55C64").s().p("AgCBSQgwgBgigVIgGgDQghgXgFghIAAAAQgGgjAVgUQAFgFAHgEQAjgUBGACQBXADAaAcQAQAPgCAbIgCANQgHAegeAVIgFAEQgiAVguABIgJAAg");
	this.shape_93.setTransform(20.9,11.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C55C64").s().p("AgCBUQgxgBgjgWIgGgDQghgXgGgiIAAAAQgHgkAVgUQAGgFAHgEQAkgVBIADQBZADAbAcQAQAPgCAcIgCANQgHAfgeAVIgGAEQgiAWgwABIgJAAg");
	this.shape_94.setTransform(20.9,11.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C55C64").s().p("AgDBVQgxgBgkgWIgGgDQgjgYgGgiIAAgBQgHglAWgUQAFgFAIgEQAkgVBKADQBcADAbAcQARAPgCAdIgCAOQgIAfgeAWIgGAEQgjAWgxABIgKAAg");
	this.shape_95.setTransform(21,11.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C55C64").s().p("AgCBXQgzgBglgXIgGgDQgkgYgGgjIAAgBQgHgmAWgUQAFgFAIgFQAlgUBMADQBeADAcAcQASAPgDAeIgCAOQgIAggfAWIgGAEQgkAXgxABIgKAAg");
	this.shape_96.setTransform(21,11.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C55C64").s().p("AgCBYQg1gBglgXIgGgDQgkgZgHgjIAAgBQgIgnAXgVQAGgFAIgEQAlgVBOADQBgADAdAcQASAQgCAeIgDAPQgHAgghAXIgFAEQglAXgzABIgKAAg");
	this.shape_97.setTransform(21,11.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C55C64").s().p("AgCBaQg2gBgmgXIgGgEQglgZgHgkIAAgBQgJgoAYgVQAGgFAIgFQAmgVBQADQBjAEAdAcQATAQgDAfIgCAPQgIAhghAXIgGAEQgmAYg0ABIgKAAg");
	this.shape_98.setTransform(21,11.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C55C64").s().p("AgCBbQg3gBgngYIgGgDQgmgZgHgmIAAAAQgJgpAYgVQAGgGAIgEQAngWBSAEQBlAEAeAcQATAQgCAgIgDAOQgIAjgiAXIgGAEQgmAYg1ABIgLAAg");
	this.shape_99.setTransform(21,11.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C55C64").s().p("AgCBdQg4gBgogYIgGgEQgngagHgmIAAAAQgKgqAYgWQAHgFAIgFQAogVBUADQBnAEAfAcQAUARgDAgIgDAPQgIAjgiAYIgHAEQgnAYg2ACIgLAAg");
	this.shape_100.setTransform(21,11.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C55C64").s().p("AgBBfQg6gBgpgZIgGgEQgogagIgmIAAgBQgJgrAYgWQAHgGAJgEQAogWBWAEQBpAEAgAcQAUARgDAhIgCAPQgJAkgjAYIgGAEQgoAZg3ACIgLAAg");
	this.shape_101.setTransform(21,11.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C55C64").s().p("AgCBgQg6AAgqgaIgGgDQgpgbgIgnIAAgBQgKgsAZgWQAGgGAJgFQApgVBZAEQBrAEAgAcQAWARgEAiIgCAPQgJAlgkAYIgHAFQgoAZg4ABIgMAAg");
	this.shape_102.setTransform(21,11.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C55C64").s().p("AgCBiQg7gBgrgaIgGgEQgqgbgIgoIAAAAQgLgtAagXQAGgGAKgEQApgWBbAEQBtAEAhAcQAWARgDAjQgBAIgCAIQgJAlglAZIgGAEQgqAag5ACIgMAAg");
	this.shape_103.setTransform(21,11.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C55C64").s().p("AgBBjQg9AAgsgaIgGgEQgrgcgJgoIAAgBQgKguAagXQAGgGAKgFQAqgWBdAEQBwAFAhAcQAXARgEAkQAAAIgDAIQgJAmglAZIgHAFQgqAag7ABIgLAAg");
	this.shape_104.setTransform(21,11.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C55C64").s().p("AgBBlQg+gBgtgaIgGgEQgrgcgKgpIAAgBQgLgvAagXQAHgGAKgFQArgWBfAEQByAFAiAcQAXARgDAkIgDARQgKAmgmAaIgHAFQgrAag7ACIgMAAg");
	this.shape_105.setTransform(21,11.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C55C64").s().p("AgBBmQg/AAgtgbIgHgEQgsgdgKgqIAAAAQgLgwAagYQAHgGAKgFQAsgWBhAEQB0AFAjAcQAYASgEAlIgDARQgKAngnAaIgHAFQgrAbg9ABIgMAAg");
	this.shape_106.setTransform(21,11.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C55C64").s().p("AgBBoQhAgBgugbIgHgEQgtgdgKgrIAAAAQgMgxAbgYQAHgGAKgFQAtgXBiAFQB3AFAkAcQAYASgEAlQAAAJgDAJQgKAngnAbIgHAFQgtAbg9ACIgNAAg");
	this.shape_107.setTransform(21,11.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C55C64").s().p("AgBBqQhBgBgvgbIgHgFQgugdgKgrIAAgBQgMgyAbgYQAHgHALgFQAtgWBkAEQB6AGAkAcQAZASgEAmQgBAJgCAJQgLAogoAbIgHAFQguAcg+ACIgNAAg");
	this.shape_108.setTransform(21,11.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C55C64").s().p("AgBBrQhDAAgvgdIgIgEQgugdgLgtIAAAAQgMg0AcgYQAHgHAKgFQAugWBnAFQB7AFAlAcQAaASgEAnQgBAKgCAJQgLAogpAcIgHAFQgvAcg/ACIgNAAg");
	this.shape_109.setTransform(21.1,11.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C55C64").s().p("AgBBtQhEgBgwgcIgIgFQgvgegLgtIAAAAQgNg1AcgYQAIgHALgFQAugXBpAFQB+AGAlAcQAaASgEAoIgDATQgLApgpAcIgIAFQgvAdhBACIgNAAg");
	this.shape_110.setTransform(21.1,11.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C55C64").s().p("AgBBuQhFAAgxgdIgIgFQgwgegLguIAAAAQgNg2AcgZQAIgHALgFQAvgXBrAFQCAAGAmAcQAbATgEAoIgEATQgLAqgqAdIgIAFQgwAdhBACIgOAAg");
	this.shape_111.setTransform(21.1,11.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C55C64").s().p("AgBBwQhGgBgygdIgIgFQgxgegLgvIAAAAQgOg3AdgZQAIgHALgFQAwgXBtAFQCCAGAnAcQAcATgFApIgDATQgMArgrAdIgIAFQgwAehDACIgOAAg");
	this.shape_112.setTransform(21.1,11.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C55C64").s().p("AgBByQhHgBgzgeIgIgEQgygggMgvIAAAAQgOg4AegZQAIgHALgFQAwgYBvAGQCFAGAnAcQAdATgFAqQgBAKgDAJQgLAsgsAdIgIAGQgxAdhEADIgOAAg");
	this.shape_113.setTransform(21.1,11.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C55C64").s().p("AgBBzQhIAAg0geIgIgFQgzgggMgwIAAAAQgOg5AegaQAIgGALgGQAxgXBxAFQCHAHAoAcQAdATgFArQAAAKgDAJQgMAtgsAeIgJAFQgyAehEACIgPAAg");
	this.shape_114.setTransform(21.1,11.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C55C64").s().p("AgBB1QhJgBg1geIgIgFQg0gggMgxIAAAAQgPg6AegaQAJgHALgGQAygXBzAFQCJAHApAcQAeAUgFArIgEAUQgMAtgtAeIgIAGQgzAehGADIgPAAg");
	this.shape_115.setTransform(21.1,11.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C55C64").s().p("AAAB2QhLAAg2gfIgIgFQg0ghgNgxIAAAAQgPg7AegbQAJgGAMgGQAygYB1AGQCMAHApAcQAeAUgFAsQgBAKgDAKQgMAuguAfIgIAFQg0AfhHACIgOAAg");
	this.shape_116.setTransform(21.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(169).to({_off:false},0).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(26).to({_off:false},0).wait(19).to({_off:true},1).wait(70).to({_off:false},0).wait(12).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(84).to({_off:false},0).wait(18).to({_off:true},1).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,24);


(lib.leaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E914D").s().p("AgJD2QkcghjXhjQjdhmAMhkQANhwBZghQBqgmEFAuQB1AUCVBCQAcANDfBtQCPBFBUAWQBzAfBRgeQA5gWg+AjQg+AjhiAkQj3BcjGAAQgwAAgrgFg");
	this.shape.setTransform(71.9,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf, new cjs.Rectangle(0,0,143.8,50.3), null);


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


(lib.l_brrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("ABYAcQgogegngNQgmgNg0ADQglACABgEQAEgLAmgGQAugGAtAPQAuAPAgAdQAcAagEALIgBABQgFAAgYgTg");
	this.shape.setTransform(11.8,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_brrow, new cjs.Rectangle(0,0,23.7,9.3), null);


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
(lib.tanner_shows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l_arm
	this.instance = new lib.l_entire_arm();
	this.instance.parent = this;
	this.instance.setTransform(384.3,262.4,1,1,0,0,0,21.6,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:50.4,rotation:0.3,x:384.1,y:261.4},0).wait(1).to({rotation:0.6,x:384},0).wait(1).to({rotation:0.9,x:383.8},0).wait(1).to({rotation:1.2,x:383.7},0).wait(1).to({rotation:1.5,x:383.5},0).wait(1).to({rotation:1.7,x:383.3},0).wait(1).to({rotation:2,x:383.2},0).wait(1).to({rotation:2.3,x:383},0).wait(1).to({rotation:2.6,x:382.9},0).wait(1).to({rotation:2.9,x:382.7},0).wait(1).to({rotation:3.2,x:382.5},0).wait(1).to({rotation:3.5,x:382.4},0).wait(1).to({rotation:3.8,x:382.2},0).wait(1).to({rotation:4.1,x:382},0).wait(1).to({rotation:4.4,x:381.9},0).wait(1).to({rotation:4.7,x:381.7},0).wait(1).to({rotation:4.9,x:381.5},0).wait(1).to({rotation:5.2,x:381.4},0).wait(1).to({rotation:5.5,x:381.2},0).wait(1).to({rotation:5.8,x:381.1},0).wait(1).to({rotation:6.1,x:381},0).wait(1).to({rotation:6.4,x:380.8},0).wait(1).to({rotation:6.7,x:380.6},0).wait(1).to({rotation:7,x:380.4,y:261.5},0).wait(1).to({rotation:7.3,x:380.3,y:261.4},0).wait(1).to({rotation:7.6,x:380.1},0).wait(1).to({rotation:7.9,x:379.9},0).wait(1).to({rotation:8.1,x:379.8},0).wait(1).to({rotation:8.4,x:379.6},0).wait(1).to({rotation:8.7,x:379.5},0).wait(1).to({rotation:8.9,x:379.3},0).wait(1).to({rotation:9.2,x:379.1},0).wait(1).to({rotation:9.4,x:379},0).wait(1).to({rotation:9.7,x:378.8},0).wait(1).to({rotation:9.9,x:378.7},0).wait(1).to({rotation:10.1,x:378.5},0).wait(1).to({rotation:10.4,x:378.3},0).wait(1).to({rotation:10.6,x:378.2},0).wait(1).to({rotation:10.9,x:378},0).wait(1).to({rotation:11.1,x:377.9},0).wait(1).to({rotation:11.4,x:377.7},0).wait(1).to({rotation:11.6,x:377.5},0).wait(1).to({rotation:11.8,x:377.4,y:261.5},0).wait(1).to({rotation:12.1,x:377.2,y:261.4},0).wait(1).to({rotation:12.3,x:377},0).wait(1).to({rotation:12.6,x:376.9},0).wait(1).to({rotation:12.8,x:376.7},0).wait(1).to({rotation:13.1,x:376.5},0).wait(1).to({rotation:13.3,x:376.4},0).wait(1).to({rotation:13.5,x:376.2},0).wait(1).to({rotation:13.2,x:376.5},0).wait(1).to({rotation:12.8,x:376.7},0).wait(1).to({rotation:12.5,x:377},0).wait(1).to({rotation:12.1,x:377.1},0).wait(1).to({rotation:11.7,x:377.4},0).wait(1).to({rotation:11.4,x:377.6},0).wait(1).to({rotation:11,x:377.9},0).wait(1).to({rotation:10.6,x:378.1},0).wait(1).to({rotation:10.3,x:378.3},0).wait(1).to({rotation:9.9,x:378.6},0).wait(1).to({rotation:9.5,x:378.8},0).wait(1).to({rotation:9.2,x:379},0).wait(1).to({rotation:8.8,x:379.3},0).wait(1).to({rotation:8.4,x:379.5},0).wait(1).to({rotation:8.1,x:379.7},0).wait(1).to({rotation:7.7,x:380},0).wait(1).to({rotation:7.3,x:380.2},0).wait(1).to({rotation:7,x:380.5},0).wait(1).to({rotation:6.6,x:380.7},0).wait(1).to({rotation:6.2,x:380.9},0).wait(1).to({rotation:5.9,x:381.2},0).wait(1).to({rotation:5.5,x:381.4},0).wait(1).to({rotation:5.1,x:381.7},0).wait(1).to({rotation:4.8,x:381.9},0).wait(1).to({rotation:4.4,x:382.1},0).wait(1).to({rotation:4.1,x:382.4},0).wait(1).to({rotation:3.7,x:382.6},0).wait(1).to({rotation:3.3,x:382.8},0).wait(1).to({rotation:3,x:383},0).wait(1).to({rotation:2.6,x:383.3},0).wait(1).to({rotation:2.2,x:383.6},0).wait(1).to({rotation:1.9,x:383.8},0).wait(1).to({rotation:1.5,x:384},0).wait(1).to({rotation:1.1,x:384.2},0).wait(1).to({rotation:0.8,x:384.5},0).wait(1).to({rotation:0.4,x:384.7},0).wait(1).to({rotation:0,x:384.9},0).wait(1).to({rotation:-0.3,x:385.2},0).wait(1).to({rotation:-0.7,x:385.4},0).wait(1).to({rotation:-1.1,x:385.7},0).wait(1).to({rotation:-1.4,x:385.9},0).wait(1).to({rotation:-1.8,x:386.1},0).wait(1).to({rotation:-2.2,x:386.4},0).wait(1).to({rotation:-2.5,x:386.6},0).wait(1).to({rotation:-2.9,x:386.8},0).wait(1).to({rotation:-3.3,x:387},0).wait(1).to({rotation:-3.6,x:387.3},0).wait(1).to({rotation:-4,x:387.5},0).wait(1).to({rotation:-4.3,x:387.8},0).wait(1).to({rotation:-4.7,x:388},0).wait(1).to({rotation:-5.1,x:388.2},0).wait(1).to({rotation:-5.4,x:388.5},0).wait(1).to({rotation:-5.8,x:388.7},0).wait(1).to({rotation:-6.2,x:388.9},0).wait(1).to({rotation:-6.5,x:389.2},0).wait(1).to({rotation:-6.9,x:389.4},0).wait(1).to({rotation:-7.3,x:389.7},0).wait(1).to({rotation:-7.6,x:389.9},0).wait(1).to({rotation:-8,x:390.1},0).wait(1).to({x:390},0).wait(2).to({x:389.9},0).wait(1).to({x:389.8},0).wait(1).to({x:389.7},0).wait(1).to({x:389.6},0).wait(2).to({x:389.5},0).wait(1).to({x:389.4},0).wait(1).to({x:389.3},0).wait(1).to({x:389.2},0).wait(2).to({x:389.1},0).wait(1).to({x:389},0).wait(1).to({x:388.9},0).wait(1).to({x:388.8},0).wait(1).to({x:388.7},0).wait(2).to({x:388.6},0).wait(1).to({x:388.5},0).wait(1).to({x:388.4},0).wait(1).to({x:388.3},0).wait(2).to({x:388.2},0).wait(1).to({x:388.1},0).wait(1).to({rotation:-7.8,x:388},0).wait(1).to({rotation:-7.7},0).wait(1).to({rotation:-7.5,x:387.9},0).wait(1).to({rotation:-7.3,x:387.8},0).wait(1).to({rotation:-7.2,x:387.7},0).wait(1).to({rotation:-7,x:387.6},0).wait(1).to({rotation:-6.9},0).wait(1).to({rotation:-6.7,x:387.5},0).wait(1).to({rotation:-6.5,x:387.4},0).wait(1).to({rotation:-6.4,x:387.3},0).wait(1).to({rotation:-6.2,x:387.2},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-5.9,x:387.1},0).wait(1).to({rotation:-5.7,x:387},0).wait(1).to({rotation:-5.6,x:386.9},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-5.2,x:386.8},0).wait(1).to({rotation:-5.1,x:386.7},0).wait(1).to({rotation:-4.9,x:386.6},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-4.6,x:386.5},0).wait(1).to({rotation:-4.4,x:386.4},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4.1,x:386.3},0).wait(1).to({rotation:-3.9,x:386.2},0).wait(1).to({rotation:-3.8,x:386.1},0).wait(1).to({rotation:-3.6,x:386},0).wait(1).to({rotation:-3.4,x:385.9},0).wait(1).to({rotation:-3.3,x:385.8},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-2.9,x:385.7},0).wait(1).to({rotation:-2.8,x:385.6},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-2.4,x:385.5},0).wait(1).to({rotation:-2.3,x:385.4},0).wait(1).to({rotation:-2.1,x:385.3},0).wait(1).to({rotation:-2,x:385.2},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-1.6,x:385.1},0).wait(1).to({rotation:-1.5,x:385},0).wait(1).to({rotation:-1.3,x:384.9},0).wait(1).to({rotation:-1.1,x:384.8},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.8,x:384.7},0).wait(1).to({rotation:-0.7,x:384.6},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.3,x:384.5},0).wait(1).to({rotation:-0.2,x:384.4},0).wait(1).to({rotation:0,x:384.3},0).wait(18));

	// mouth
	this.instance_1 = new lib.mouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(262.3,197.9,1,1,0,0,0,21.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:21.1,x:261.7},0).wait(1).to({x:261.2,y:198},0).wait(1).to({x:260.8},0).wait(1).to({x:260.3,y:198.1},0).wait(1).to({x:259.8,y:198.2},0).wait(1).to({x:259.4},0).wait(1).to({x:258.9,y:198.3},0).wait(1).to({x:258.5},0).wait(1).to({x:258,y:198.4},0).wait(1).to({x:257.5,y:198.5},0).wait(1).to({x:257.1},0).wait(1).to({x:256.6,y:198.6},0).wait(1).to({x:256.2},0).wait(1).to({x:255.7,y:198.7},0).wait(1).to({x:255.2,y:198.8},0).wait(1).to({x:254.8},0).wait(1).to({x:254.3,y:198.9},0).wait(1).to({x:253.9},0).wait(1).to({x:253.4,y:199},0).wait(1).to({x:252.9,y:199.1},0).wait(1).to({x:252.5},0).wait(1).to({x:252},0).wait(1).to({x:251.6},0).wait(1).to({x:251.1},0).wait(1).to({x:250.6},0).wait(1).to({x:250.2},0).wait(1).to({x:249.7},0).wait(1).to({x:249.3},0).wait(1).to({x:248.8},0).wait(1).to({x:248.6},0).wait(1).to({x:248.3},0).wait(1).to({x:248.1},0).wait(1).to({x:247.8},0).wait(1).to({x:247.6},0).wait(1).to({x:247.4},0).wait(1).to({x:247.1,y:199},0).wait(1).to({x:246.9},0).wait(1).to({x:246.7},0).wait(1).to({x:246.4},0).wait(1).to({x:246.2,y:198.9},0).wait(1).to({x:245.9},0).wait(1).to({x:245.7},0).wait(1).to({x:245.5},0).wait(1).to({x:245.2},0).wait(1).to({x:245,y:198.8},0).wait(1).to({x:244.8},0).wait(1).to({x:244.5},0).wait(1).to({x:244.3},0).wait(1).to({x:244,y:198.7},0).wait(1).to({x:243.8},0).wait(1).to({x:244.6},0).wait(1).to({x:245.4},0).wait(1).to({x:246.2},0).wait(1).to({x:247,y:198.6},0).wait(1).to({x:247.8},0).wait(1).to({x:248.6},0).wait(1).to({x:249.4},0).wait(1).to({x:250.2,y:198.5},0).wait(1).to({x:251},0).wait(1).to({x:251.8},0).wait(1).to({x:252.6},0).wait(1).to({x:253.4},0).wait(1).to({x:254.2,y:198.4},0).wait(1).to({x:255},0).wait(1).to({x:255.8},0).wait(1).to({x:256.7},0).wait(1).to({x:257.5},0).wait(1).to({x:258.3,y:198.3},0).wait(1).to({x:259.1},0).wait(1).to({x:259.9},0).wait(1).to({x:260.7},0).wait(1).to({x:261.5},0).wait(1).to({x:262.3,y:198.2},0).wait(1).to({x:263.1},0).wait(1).to({x:263.9},0).wait(1).to({x:264.7},0).wait(1).to({x:265.5},0).wait(1).to({x:266.3,y:198.1},0).wait(1).to({x:267.1},0).wait(1).to({x:267.9},0).wait(1).to({x:268.7},0).wait(1).to({x:269.5},0).wait(1).to({x:270.3,y:198},0).wait(1).to({x:271.1},0).wait(1).to({x:271.9},0).wait(1).to({x:272.7},0).wait(1).to({x:273.5},0).wait(1).to({x:274.3},0).wait(1).to({x:275.1},0).wait(1).to({x:275.9},0).wait(1).to({x:276.7},0).wait(1).to({x:277.5},0).wait(1).to({x:278.3},0).wait(1).to({x:279.1},0).wait(1).to({x:279.9},0).wait(1).to({x:280.8},0).wait(1).to({x:281.6},0).wait(1).to({x:282.4},0).wait(1).to({x:283.2},0).wait(1).to({x:284},0).wait(1).to({x:284.8},0).wait(1).to({x:285.6},0).wait(1).to({x:286.4},0).wait(1).to({x:287.2},0).wait(1).to({x:288},0).wait(1).to({x:288.8},0).wait(1).to({x:289.6},0).wait(1).to({x:290.4},0).wait(1).to({x:291.2},0).wait(2).to({x:291.3},0).wait(3).to({x:291.4},0).wait(2).to({x:291.5},0).wait(3).to({x:291.6},0).wait(3).to({x:291.7},0).wait(2).to({x:291.8},0).wait(1).to({y:197.9},0).wait(2).to({x:291.9},0).wait(3).to({x:292},0).wait(3).to({x:292.1},0).wait(2).to({x:291.5},0).wait(1).to({x:290.9},0).wait(1).to({x:290.3},0).wait(1).to({x:289.7},0).wait(1).to({x:289.1},0).wait(1).to({x:288.5},0).wait(1).to({x:287.8},0).wait(1).to({x:287.2},0).wait(1).to({x:286.6},0).wait(1).to({x:286},0).wait(1).to({x:285.4},0).wait(1).to({x:284.8},0).wait(1).to({x:284.2},0).wait(1).to({x:283.6},0).wait(1).to({x:282.9},0).wait(1).to({x:282.3},0).wait(1).to({x:281.7},0).wait(1).to({x:281.1},0).wait(1).to({x:280.5},0).wait(1).to({x:279.9},0).wait(1).to({x:279.3},0).wait(1).to({x:278.7},0).wait(1).to({x:278.1},0).wait(1).to({x:277.4},0).wait(1).to({x:276.8},0).wait(1).to({x:276.2},0).wait(1).to({x:275.6},0).wait(1).to({x:275},0).wait(1).to({x:274.4},0).wait(1).to({x:273.8},0).wait(1).to({x:273.2},0).wait(1).to({x:272.5},0).wait(1).to({x:271.9},0).wait(1).to({x:271.3},0).wait(1).to({x:270.7},0).wait(1).to({x:270.1},0).wait(1).to({x:269.5},0).wait(1).to({x:268.9},0).wait(1).to({x:268.3},0).wait(1).to({x:267.7},0).wait(1).to({x:267},0).wait(1).to({x:266.4},0).wait(1).to({x:265.8},0).wait(1).to({x:265.2},0).wait(1).to({x:264.6},0).wait(1).to({x:264},0).wait(1).to({x:263.4},0).wait(1).to({x:262.8},0).wait(1).to({x:262.2},0).wait(18));

	// eyes
	this.instance_2 = new lib.eyes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(269.1,170.9,1,1,0,0,0,51.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:11,x:268.6},0).wait(1).to({x:268.1,y:171},0).wait(1).to({x:267.7},0).wait(1).to({x:267.2,y:171.1},0).wait(1).to({x:266.7,y:171.2},0).wait(1).to({x:266.3,y:171.3},0).wait(1).to({x:265.8,y:171.4},0).wait(1).to({x:265.4},0).wait(1).to({x:264.9,y:171.5},0).wait(1).to({x:264.4,y:171.6},0).wait(1).to({x:264,y:171.7},0).wait(1).to({x:263.5},0).wait(1).to({x:263.1,y:171.8},0).wait(1).to({x:262.6,y:171.9},0).wait(1).to({x:262.1,y:172},0).wait(1).to({x:261.7},0).wait(1).to({x:261.2},0).wait(1).to({x:260.8},0).wait(1).to({x:260.3},0).wait(1).to({x:259.8},0).wait(1).to({x:259.4},0).wait(1).to({x:258.9},0).wait(1).to({x:258.5},0).wait(1).to({x:258},0).wait(1).to({x:257.5},0).wait(1).to({x:257.1},0).wait(1).to({x:256.6},0).wait(1).to({x:256.2},0).wait(1).to({x:255.7},0).wait(1).to({x:255.5,y:171.9},0).wait(1).to({x:255.2},0).wait(1).to({x:255},0).wait(1).to({x:254.7,y:171.8},0).wait(1).to({x:254.5},0).wait(1).to({x:254.3},0).wait(1).to({x:254},0).wait(1).to({x:253.8,y:171.7},0).wait(1).to({x:253.6},0).wait(1).to({x:253.3},0).wait(1).to({x:253.1},0).wait(1).to({x:252.8,y:171.6},0).wait(1).to({x:252.6},0).wait(1).to({x:252.4},0).wait(1).to({x:252.1},0).wait(1).to({x:251.9,y:171.5},0).wait(1).to({x:251.7},0).wait(1).to({x:251.4},0).wait(1).to({x:251.2,y:171.4},0).wait(1).to({x:250.9},0).wait(1).to({x:250.7},0).wait(1).to({x:251.5},0).wait(1).to({x:252.3},0).wait(1).to({x:253.1,y:171.3},0).wait(1).to({x:253.9},0).wait(1).to({x:254.7},0).wait(1).to({x:255.5},0).wait(1).to({x:256.3,y:171.2},0).wait(1).to({x:257.1},0).wait(1).to({x:257.9},0).wait(1).to({x:258.7},0).wait(1).to({x:259.5,y:171.1},0).wait(1).to({x:260.3},0).wait(1).to({x:261.1},0).wait(1).to({x:261.9},0).wait(1).to({x:262.7},0).wait(1).to({x:263.6,y:171},0).wait(1).to({x:264.4},0).wait(1).to({x:265.2},0).wait(1).to({x:266},0).wait(1).to({x:266.8,y:170.9},0).wait(1).to({x:267.6},0).wait(1).to({x:268.4},0).wait(1).to({x:269.2},0).wait(1).to({x:270},0).wait(1).to({x:270.8},0).wait(1).to({x:271.6},0).wait(1).to({x:272.4},0).wait(1).to({x:273.2},0).wait(1).to({x:274},0).wait(1).to({x:274.8},0).wait(1).to({x:275.6},0).wait(1).to({x:276.4},0).wait(1).to({x:277.2},0).wait(1).to({x:278},0).wait(1).to({x:278.8},0).wait(1).to({x:279.6},0).wait(1).to({x:280.4},0).wait(1).to({x:281.2},0).wait(1).to({x:282},0).wait(1).to({x:282.8},0).wait(1).to({x:283.6},0).wait(1).to({x:284.4},0).wait(1).to({x:285.2},0).wait(1).to({x:286},0).wait(1).to({x:286.8},0).wait(1).to({x:287.7},0).wait(1).to({x:288.5},0).wait(1).to({x:289.3},0).wait(1).to({x:290.1},0).wait(1).to({x:290.9},0).wait(1).to({x:291.7},0).wait(1).to({x:292.5},0).wait(1).to({x:293.3},0).wait(1).to({x:294.1},0).wait(1).to({x:294.9},0).wait(1).to({x:295.7},0).wait(1).to({x:296.5},0).wait(1).to({x:297.3},0).wait(1).to({x:298.1},0).wait(2).to({x:298.2},0).wait(3).to({x:298.3},0).wait(2).to({x:298.4},0).wait(3).to({x:298.5},0).wait(3).to({x:298.6},0).wait(2).to({x:298.7},0).wait(3).to({x:298.8,y:170.8},0).wait(3).to({x:298.9},0).wait(3).to({x:299},0).wait(2).to({x:298.4},0).wait(1).to({x:297.8},0).wait(1).to({x:297.2},0).wait(1).to({x:296.6},0).wait(1).to({x:296},0).wait(1).to({x:295.4},0).wait(1).to({x:294.7},0).wait(1).to({x:294.1},0).wait(1).to({x:293.5},0).wait(1).to({x:292.9},0).wait(1).to({x:292.3},0).wait(1).to({x:291.7},0).wait(1).to({x:291.1},0).wait(1).to({x:290.5},0).wait(1).to({x:289.8},0).wait(1).to({x:289.2},0).wait(1).to({x:288.6},0).wait(1).to({x:288},0).wait(1).to({x:287.4},0).wait(1).to({x:286.8},0).wait(1).to({x:286.2},0).wait(1).to({x:285.6},0).wait(1).to({x:285},0).wait(1).to({x:284.3},0).wait(1).to({x:283.7},0).wait(1).to({x:283.1},0).wait(1).to({x:282.5},0).wait(1).to({x:281.9},0).wait(1).to({x:281.3},0).wait(1).to({x:280.7},0).wait(1).to({x:280.1},0).wait(1).to({x:279.4},0).wait(1).to({x:278.8},0).wait(1).to({x:278.2},0).wait(1).to({x:277.6},0).wait(1).to({x:277},0).wait(1).to({x:276.4},0).wait(1).to({x:275.8},0).wait(1).to({x:275.2},0).wait(1).to({x:274.6},0).wait(1).to({x:273.9},0).wait(1).to({x:273.3},0).wait(1).to({x:272.7},0).wait(1).to({x:272.1},0).wait(1).to({x:271.5},0).wait(1).to({x:270.9},0).wait(1).to({x:270.3},0).wait(1).to({x:269.7},0).wait(1).to({x:269.1},0).wait(18));

	// r_brrow
	this.instance_3 = new lib.r_brrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(225.5,141.7,1,1,0,0,0,12.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:224.9,y:141.5},0).wait(1).to({x:224.4,y:141.4},0).wait(1).to({x:223.9,y:141.2},0).wait(1).to({x:223.4,y:141},0).wait(1).to({x:222.9,y:140.8},0).wait(1).to({x:222.3,y:140.7},0).wait(1).to({x:221.8,y:140.5},0).wait(1).to({x:221.3,y:140.3},0).wait(1).to({x:220.8,y:140.1},0).wait(1).to({x:220.3,y:140},0).wait(1).to({x:219.8,y:139.8},0).wait(1).to({x:219.2,y:139.6},0).wait(1).to({x:218.7,y:139.5},0).wait(1).to({x:218.2,y:139.3},0).wait(1).to({x:217.7,y:139.1},0).wait(1).to({x:217.2,y:138.9},0).wait(1).to({x:216.7,y:138.8},0).wait(1).to({x:216.1,y:138.6},0).wait(1).to({x:215.6,y:138.4},0).wait(1).to({x:215.1,y:138.3},0).wait(1).to({x:214.6,y:138.1},0).wait(1).to({x:214.1,y:137.9},0).wait(1).to({x:213.6,y:137.7},0).wait(1).to({x:213,y:137.6},0).wait(1).to({x:212.5,y:137.4},0).wait(1).to({x:212,y:137.2},0).wait(1).to({x:211.5,y:137},0).wait(1).to({x:211,y:136.9},0).wait(1).to({x:210.5,y:136.7},0).wait(1).to({x:210.2},0).wait(1).to({x:210},0).wait(1).to({x:209.7},0).wait(1).to({x:209.5},0).wait(1).to({x:209.3},0).wait(1).to({x:209},0).wait(1).to({x:208.8},0).wait(1).to({x:208.5},0).wait(1).to({x:208.3},0).wait(1).to({x:208.1},0).wait(1).to({x:207.8},0).wait(1).to({x:207.6},0).wait(1).to({x:207.4},0).wait(1).to({x:207.1},0).wait(1).to({x:206.9},0).wait(1).to({x:206.6},0).wait(1).to({x:206.4},0).wait(1).to({x:206.2},0).wait(1).to({x:205.9},0).wait(1).to({x:205.7},0).wait(1).to({x:205.5},0).wait(1).to({x:206.6,y:137.3},0).wait(1).to({x:207.8,y:138},0).wait(1).to({x:209,y:138.6},0).wait(1).to({x:210.2,y:139.3},0).wait(1).to({x:211.4,y:139.9},0).wait(1).to({x:212.6,y:140.6},0).wait(1).to({x:213.8,y:141.2},0).wait(1).to({x:215,y:141.9},0).wait(1).to({x:216.2,y:142.5},0).wait(1).to({x:217.4,y:143.2},0).wait(1).to({x:218.6,y:143.8},0).wait(1).to({x:219.8,y:144.5},0).wait(1).to({x:221,y:145.1},0).wait(1).to({x:222.2,y:145.8},0).wait(1).to({x:223.4,y:146.4},0).wait(1).to({x:224.6,y:147},0).wait(1).to({x:225.8,y:147.7},0).wait(1).to({x:226},0).wait(1).to({x:226.3},0).wait(1).to({x:226.6},0).wait(1).to({x:226.9},0).wait(1).to({x:227.2},0).wait(1).to({x:227.5},0).wait(1).to({x:227.7},0).wait(1).to({x:228},0).wait(1).to({x:228.3},0).wait(1).to({x:228.6},0).wait(1).to({x:228.9},0).wait(1).to({x:229.1},0).wait(1).to({x:229.4},0).wait(1).to({x:229.7},0).wait(1).to({x:230},0).wait(1).to({x:230.3},0).wait(1).to({x:231.2,y:147.4},0).wait(1).to({x:232.1,y:147},0).wait(1).to({x:233,y:146.7},0).wait(1).to({x:234,y:146.4},0).wait(1).to({x:234.9,y:146},0).wait(1).to({x:235.8,y:145.7},0).wait(1).to({x:236.7,y:145.4},0).wait(1).to({x:237.6,y:145},0).wait(1).to({x:238.6,y:144.7},0).wait(1).to({x:239.5,y:144.4},0).wait(1).to({x:240.4,y:144.1},0).wait(1).to({x:241.3,y:143.7},0).wait(1).to({x:242.2,y:143.4},0).wait(1).to({x:243.2,y:143.1},0).wait(1).to({x:244.1,y:142.7},0).wait(1).to({x:245,y:142.4},0).wait(1).to({x:245.9,y:142.1},0).wait(1).to({x:246.8,y:141.7},0).wait(1).to({x:247.8,y:141.4},0).wait(1).to({x:248.7,y:141.1},0).wait(1).to({x:249.6,y:140.7},0).wait(1).to({x:250.5,y:140.4},0).wait(1).to({x:251.5,y:140.1},0).wait(1).to({x:252.4,y:139.7},0).wait(1).to({x:253.3,y:139.4},0).wait(1).to({x:254.2,y:139.1},0).wait(1).to({x:254.3},0).wait(3).to({x:254.4},0).wait(3).to({x:254.5},0).wait(2).to({x:254.6},0).wait(3).to({x:254.7},0).wait(3).to({x:254.8},0).wait(2).to({x:254.9},0).wait(3).to({x:255},0).wait(2).to({x:255.1},0).wait(3).to({x:255.2},0).wait(1).to({x:254.6,y:139.2},0).wait(1).to({x:254},0).wait(1).to({x:253.4,y:139.3},0).wait(1).to({x:252.7},0).wait(1).to({x:252.1,y:139.4},0).wait(1).to({x:251.5},0).wait(1).to({x:250.9,y:139.5},0).wait(1).to({x:250.3},0).wait(1).to({x:249.7,y:139.6},0).wait(1).to({x:249.1,y:139.7},0).wait(1).to({x:248.5},0).wait(1).to({x:247.9,y:139.8},0).wait(1).to({x:247.3},0).wait(1).to({x:246.7,y:139.9},0).wait(1).to({x:246.1},0).wait(1).to({x:245.5,y:140},0).wait(1).to({x:244.9},0).wait(1).to({x:244.3,y:140.1},0).wait(1).to({x:243.6},0).wait(1).to({x:243,y:140.2},0).wait(1).to({x:242.4},0).wait(1).to({x:241.8,y:140.3},0).wait(1).to({x:241.2},0).wait(1).to({x:240.6,y:140.4},0).wait(1).to({x:240},0).wait(1).to({x:239.4,y:140.5},0).wait(1).to({x:238.8},0).wait(1).to({x:238.2,y:140.6},0).wait(1).to({x:237.6,y:140.7},0).wait(1).to({x:237},0).wait(1).to({x:236.4,y:140.8},0).wait(1).to({x:235.8},0).wait(1).to({x:235.2,y:140.9},0).wait(1).to({x:234.5},0).wait(1).to({x:233.9,y:141},0).wait(1).to({x:233.3},0).wait(1).to({x:232.7,y:141.1},0).wait(1).to({x:232.1},0).wait(1).to({x:231.5,y:141.2},0).wait(1).to({x:230.9},0).wait(1).to({x:230.3,y:141.3},0).wait(1).to({x:229.7},0).wait(1).to({x:229.1,y:141.4},0).wait(1).to({x:228.5},0).wait(1).to({x:227.9,y:141.5},0).wait(1).to({x:227.3},0).wait(1).to({x:226.7,y:141.6},0).wait(1).to({x:226.1},0).wait(1).to({x:225.5,y:141.7},0).wait(18));

	// l_brrow
	this.instance_4 = new lib.l_brrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(316.7,143.3,1,1,0,0,0,11.8,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:316.1,y:143.1},0).wait(1).to({x:315.6,y:142.9},0).wait(1).to({x:315.1,y:142.7},0).wait(1).to({x:314.6,y:142.6},0).wait(1).to({x:314.1,y:142.4},0).wait(1).to({x:313.5,y:142.2},0).wait(1).to({x:313,y:142},0).wait(1).to({x:312.5,y:141.9},0).wait(1).to({x:312,y:141.7},0).wait(1).to({x:311.5,y:141.5},0).wait(1).to({x:311,y:141.4},0).wait(1).to({x:310.4,y:141.2},0).wait(1).to({x:309.9,y:141},0).wait(1).to({x:309.4,y:140.8},0).wait(1).to({x:308.9,y:140.7},0).wait(1).to({x:308.4,y:140.5},0).wait(1).to({x:307.9,y:140.3},0).wait(1).to({x:307.3,y:140.1},0).wait(1).to({x:306.8,y:140},0).wait(1).to({x:306.3,y:139.8},0).wait(1).to({x:305.8,y:139.6},0).wait(1).to({x:305.3,y:139.5},0).wait(1).to({x:304.8,y:139.3},0).wait(1).to({x:304.2,y:139.1},0).wait(1).to({x:303.7,y:138.9},0).wait(1).to({x:303.2,y:138.8},0).wait(1).to({x:302.7,y:138.6},0).wait(1).to({x:302.2,y:138.4},0).wait(1).to({x:301.7,y:138.3},0).wait(1).to({x:301.4},0).wait(1).to({x:301.2},0).wait(1).to({x:300.9},0).wait(1).to({x:300.7},0).wait(1).to({x:300.5},0).wait(1).to({x:300.2},0).wait(1).to({x:300},0).wait(1).to({x:299.7},0).wait(1).to({x:299.5},0).wait(1).to({x:299.3},0).wait(1).to({x:299},0).wait(1).to({x:298.8},0).wait(1).to({x:298.6},0).wait(1).to({x:298.3},0).wait(1).to({x:298.1},0).wait(1).to({x:297.8},0).wait(1).to({x:297.6},0).wait(1).to({x:297.4},0).wait(1).to({x:297.1},0).wait(1).to({x:296.9},0).wait(1).to({x:296.7},0).wait(1).to({x:297.8,y:138.9},0).wait(1).to({x:299,y:139.5},0).wait(1).to({x:300.2,y:140.2},0).wait(1).to({x:301.4,y:140.8},0).wait(1).to({x:302.6,y:141.5},0).wait(1).to({x:303.8,y:142.1},0).wait(1).to({x:305,y:142.8},0).wait(1).to({x:306.2,y:143.4},0).wait(1).to({x:307.4,y:144.1},0).wait(1).to({x:308.6,y:144.7},0).wait(1).to({x:309.8,y:145.4},0).wait(1).to({x:311,y:146},0).wait(1).to({x:312.2,y:146.7},0).wait(1).to({x:313.4,y:147.3},0).wait(1).to({x:314.6,y:147.9},0).wait(1).to({x:315.8,y:148.6},0).wait(1).to({x:317,y:149.2},0).wait(1).to({x:317.2},0).wait(1).to({x:317.5},0).wait(1).to({x:317.8},0).wait(1).to({x:318.1},0).wait(1).to({x:318.4},0).wait(1).to({x:318.7},0).wait(1).to({x:318.9},0).wait(1).to({x:319.2},0).wait(1).to({x:319.5},0).wait(1).to({x:319.8},0).wait(1).to({x:320.1},0).wait(1).to({x:320.3},0).wait(1).to({x:320.6},0).wait(1).to({x:320.9},0).wait(1).to({x:321.2},0).wait(1).to({x:321.5},0).wait(1).to({x:322.4,y:148.9},0).wait(1).to({x:323.3,y:148.6},0).wait(1).to({x:324.2,y:148.2},0).wait(1).to({x:325.2,y:147.9},0).wait(1).to({x:326.1,y:147.6},0).wait(1).to({x:327,y:147.3},0).wait(1).to({x:327.9,y:146.9},0).wait(1).to({x:328.8,y:146.6},0).wait(1).to({x:329.8,y:146.3},0).wait(1).to({x:330.7,y:145.9},0).wait(1).to({x:331.6,y:145.6},0).wait(1).to({x:332.5,y:145.3},0).wait(1).to({x:333.4,y:144.9},0).wait(1).to({x:334.4,y:144.6},0).wait(1).to({x:335.3,y:144.3},0).wait(1).to({x:336.2,y:143.9},0).wait(1).to({x:337.1,y:143.6},0).wait(1).to({x:338,y:143.3},0).wait(1).to({x:339,y:143},0).wait(1).to({x:339.9,y:142.6},0).wait(1).to({x:340.8,y:142.3},0).wait(1).to({x:341.7,y:142},0).wait(1).to({x:342.7,y:141.6},0).wait(1).to({x:343.6,y:141.3},0).wait(1).to({x:344.5,y:141},0).wait(1).to({x:345.4,y:140.6},0).wait(1).to({x:345.5},0).wait(3).to({x:345.6},0).wait(3).to({x:345.7},0).wait(2).to({x:345.8,y:140.7},0).wait(3).to({x:345.9},0).wait(3).to({x:346},0).wait(2).to({x:346.1},0).wait(3).to({x:346.2},0).wait(2).to({x:346.3},0).wait(3).to({x:346.4},0).wait(1).to({x:345.8},0).wait(1).to({x:345.2,y:140.8},0).wait(1).to({x:344.6},0).wait(1).to({x:343.9,y:140.9},0).wait(1).to({x:343.3},0).wait(1).to({x:342.7,y:141},0).wait(1).to({x:342.1},0).wait(1).to({x:341.5,y:141.1},0).wait(1).to({x:340.9,y:141.2},0).wait(1).to({x:340.3},0).wait(1).to({x:339.7,y:141.3},0).wait(1).to({x:339.1},0).wait(1).to({x:338.5,y:141.4},0).wait(1).to({x:337.9},0).wait(1).to({x:337.3,y:141.5},0).wait(1).to({x:336.7},0).wait(1).to({x:336.1,y:141.6},0).wait(1).to({x:335.5},0).wait(1).to({x:334.8,y:141.7},0).wait(1).to({x:334.2},0).wait(1).to({x:333.6,y:141.8},0).wait(1).to({x:333},0).wait(1).to({x:332.4,y:141.9},0).wait(1).to({x:331.8},0).wait(1).to({x:331.2,y:142},0).wait(1).to({x:330.6},0).wait(1).to({x:330,y:142.1},0).wait(1).to({x:329.4},0).wait(1).to({x:328.8,y:142.2},0).wait(1).to({x:328.2,y:142.3},0).wait(1).to({x:327.6},0).wait(1).to({x:327,y:142.4},0).wait(1).to({x:326.4},0).wait(1).to({x:325.7,y:142.5},0).wait(1).to({x:325.1},0).wait(1).to({x:324.5,y:142.6},0).wait(1).to({x:323.9},0).wait(1).to({x:323.3,y:142.7},0).wait(1).to({x:322.7},0).wait(1).to({x:322.1,y:142.8},0).wait(1).to({x:321.5},0).wait(1).to({x:320.9,y:142.9},0).wait(1).to({x:320.3},0).wait(1).to({x:319.7,y:143},0).wait(1).to({x:319.1},0).wait(1).to({x:318.5,y:143.1},0).wait(1).to({x:317.9},0).wait(1).to({x:317.3,y:143.2},0).wait(1).to({x:316.7,y:143.3},0).wait(18));

	// leaf
	this.instance_5 = new lib.leaf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300.9,88.2,1,1,0,0,0,20,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:71.9,regY:25.1,scaleX:1,x:353.1,y:78.7},0).wait(1).to({scaleX:1.01,x:353.3},0).wait(1).to({scaleX:1.01,x:353.6},0).wait(1).to({scaleX:1.02,x:353.8},0).wait(1).to({scaleX:1.02,x:354.1},0).wait(1).to({scaleX:1.03,x:354.3},0).wait(1).to({scaleX:1.03,x:354.5},0).wait(1).to({scaleX:1.04,x:354.8},0).wait(1).to({scaleX:1.04,x:355},0).wait(1).to({scaleX:1.05,x:355.3},0).wait(1).to({scaleX:1.05,x:355.5},0).wait(1).to({scaleX:1.06,x:355.8},0).wait(1).to({scaleX:1.06,x:356.1},0).wait(1).to({scaleX:1.07,x:356.3},0).wait(1).to({scaleX:1.07,x:356.6},0).wait(1).to({scaleX:1.08,x:356.8},0).wait(1).to({scaleX:1.08,x:357},0).wait(1).to({scaleX:1.09,x:357.3},0).wait(1).to({scaleX:1.09,x:357.5},0).wait(1).to({scaleX:1.1,x:357.8},0).wait(1).to({scaleX:1.1,x:358},0).wait(1).to({scaleX:1.11,x:358.3},0).wait(1).to({scaleX:1.11,x:358.5},0).wait(1).to({scaleX:1.12,x:358.8},0).wait(1).to({scaleX:1.12,x:359},0).wait(1).to({scaleX:1.13,x:359.3},0).wait(1).to({scaleX:1.13,x:359.6},0).wait(1).to({scaleX:1.14,x:359.8},0).wait(1).to({scaleX:1.14,x:360},0).wait(22).to({scaleX:1.13,x:359.5},0).wait(1).to({scaleX:1.12,x:358.9},0).wait(1).to({scaleX:1.11,x:358.3},0).wait(1).to({scaleX:1.1,x:357.7},0).wait(1).to({scaleX:1.09,x:357.1},0).wait(1).to({scaleX:1.07,x:356.6},0).wait(1).to({scaleX:1.06,x:356},0).wait(1).to({scaleX:1.05,x:355.4},0).wait(1).to({scaleX:1.04,x:354.8},0).wait(1).to({scaleX:1.03,x:354.2},0).wait(1).to({scaleX:1.02,x:353.7},0).wait(1).to({scaleX:1.01,x:353.1},0).wait(1).to({scaleX:1,x:352.5},0).wait(1).to({scaleX:0.99,x:351.9},0).wait(1).to({scaleX:0.98,x:351.3},0).wait(1).to({scaleX:0.97,x:350.7},0).wait(1).to({scaleX:0.96,x:350.2},0).wait(1).to({scaleX:0.94,x:349.6},0).wait(1).to({scaleX:0.93,x:349.1},0).wait(1).to({scaleX:0.92,x:348.5},0).wait(1).to({scaleX:0.91,x:347.9},0).wait(1).to({scaleX:0.9,x:347.3},0).wait(1).to({scaleX:0.89,x:346.7},0).wait(1).to({scaleX:0.88,x:346.1},0).wait(1).to({scaleX:0.87,x:345.6},0).wait(1).to({scaleX:0.86,x:345},0).wait(1).to({scaleX:0.85,x:344.4},0).wait(1).to({scaleX:0.84,x:343.8},0).wait(1).to({scaleX:0.82,x:343.2},0).wait(1).to({scaleX:0.81,x:342.7},0).wait(1).to({scaleX:0.8,x:342.1},0).wait(1).to({scaleX:0.79,x:341.5},0).wait(1).to({scaleX:0.78,x:340.9},0).wait(1).to({scaleX:0.77,x:340.3},0).wait(1).to({scaleX:0.76,x:339.8},0).wait(1).to({scaleX:0.75,x:339.2},0).wait(1).to({scaleX:0.74,x:338.6},0).wait(1).to({scaleX:0.73,x:338},0).wait(1).to({scaleX:0.72,x:337.4},0).wait(1).to({scaleX:0.71,x:336.8},0).wait(1).to({scaleX:0.69,x:336.3},0).wait(1).to({scaleX:0.68,x:335.7},0).wait(1).to({scaleX:0.67,x:335.2},0).wait(1).to({scaleX:0.66,x:334.6},0).wait(1).to({scaleX:0.65,x:334},0).wait(1).to({scaleX:0.64,x:333.4},0).wait(1).to({scaleX:0.63,x:332.8},0).wait(1).to({scaleX:0.62,x:332.2},0).wait(1).to({scaleX:0.61,x:331.7},0).wait(1).to({scaleX:0.6,x:331.1},0).wait(1).to({scaleX:0.59,x:330.5},0).wait(1).to({scaleX:0.57,x:329.9},0).wait(1).to({scaleX:0.56,x:329.3},0).wait(1).to({scaleX:0.55,x:328.8},0).wait(1).to({scaleX:0.54,x:328.2},0).wait(1).to({scaleX:0.53,x:327.6},0).wait(1).to({scaleX:0.52,x:327},0).wait(1).to({scaleX:0.51,x:326.4},0).wait(1).to({scaleX:0.5,x:325.9},0).wait(26).to({scaleX:0.51,x:326.4},0).wait(1).to({scaleX:0.52,x:327},0).wait(1).to({scaleX:0.53,x:327.5},0).wait(1).to({scaleX:0.54,x:328},0).wait(1).to({scaleX:0.55,x:328.6},0).wait(1).to({scaleX:0.56,x:329.2},0).wait(1).to({scaleX:0.57,x:329.7},0).wait(1).to({scaleX:0.58,x:330.2},0).wait(1).to({scaleX:0.59,x:330.8},0).wait(1).to({scaleX:0.6,x:331.4},0).wait(1).to({scaleX:0.61,x:331.9},0).wait(1).to({scaleX:0.62,x:332.4},0).wait(1).to({scaleX:0.63,x:333},0).wait(1).to({scaleX:0.64,x:333.6},0).wait(1).to({scaleX:0.65,x:334.1},0).wait(1).to({scaleX:0.66,x:334.7},0).wait(1).to({scaleX:0.67,x:335.2},0).wait(1).to({scaleX:0.68,x:335.8},0).wait(1).to({scaleX:0.69,x:336.3},0).wait(1).to({scaleX:0.7,x:336.9},0).wait(1).to({scaleX:0.71,x:337.4},0).wait(1).to({scaleX:0.72,x:337.9},0).wait(1).to({scaleX:0.73,x:338.5},0).wait(1).to({scaleX:0.74,x:339.1},0).wait(1).to({scaleX:0.75,x:339.6},0).wait(1).to({scaleX:0.77,x:340.1},0).wait(1).to({scaleX:0.78,x:340.7},0).wait(1).to({scaleX:0.79,x:341.3},0).wait(1).to({scaleX:0.8,x:341.8},0).wait(1).to({scaleX:0.81,x:342.3},0).wait(1).to({scaleX:0.82,x:342.9},0).wait(1).to({scaleX:0.83,x:343.5},0).wait(1).to({scaleX:0.84,x:344},0).wait(1).to({scaleX:0.85,x:344.5},0).wait(1).to({scaleX:0.86,x:345.1},0).wait(1).to({scaleX:0.87,x:345.7},0).wait(1).to({scaleX:0.88,x:346.2},0).wait(1).to({scaleX:0.89,x:346.8},0).wait(1).to({scaleX:0.9,x:347.3},0).wait(1).to({scaleX:0.91,x:347.8},0).wait(1).to({scaleX:0.92,x:348.4},0).wait(1).to({scaleX:0.93,x:349},0).wait(1).to({scaleX:0.94,x:349.5},0).wait(1).to({scaleX:0.95,x:350},0).wait(1).to({scaleX:0.96,x:350.6},0).wait(1).to({scaleX:0.97,x:351.2},0).wait(1).to({scaleX:0.98,x:351.7},0).wait(1).to({scaleX:0.99,x:352.2},0).wait(1).to({scaleX:1,x:352.8},0).wait(18));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3753A").s().p("ApiNIQjlhsiZi9QCSCBC5BGQDABJDRAAQDYAADFhOQC+hLCTiKQCTiJBRiyQBUi4AAjJQAAjnhsjOQhqjHi7iLQEMCBCgDsQCkDzAAEfQAADMhXC7QhTC1iZCMQiYCMjGBMQjMBQjfAAQkLAAjshwg");
	this.shape.setTransform(294.2,204.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA983E").s().p("AmrOiQjGhNiZiLQiYiMhTi2QhXi7AAjNQAAjMBXi7QBTi1CYiNQCZiLDGhNQDMhPDfAAQDgAADMBPQDGBNCYCLQCZCNBTC1QBXC7AADMQAADNhXC7QhTC2iZCMQiYCLjGBNQjMBPjgAAQjfAAjMhPg");
	this.shape_1.setTransform(283.4,198.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AhGFHQgggBgxgJQhOgNBGgsQB3g+BFgoQAVgLAZjQQAdjvAIgbQAzABAGABQAYAFAAAVIgJGmIgCBfQgFBIgWANQgSAKgvAHQguAIgvAAQg1AAgOgBg");
	this.shape_2.setTransform(233.5,318.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AiLFOQhPgFBCgzQBwhJBBguQAUgOAFjRQAGjxAGgcQA0gDAFAAQAYADACAVIAfGlIAHBeQACBJgVAOQgRAMgtAMQgvAMguAFQgzAFgPABIgQAAQgcAAgmgDg");
	this.shape_3.setTransform(296.1,325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E914D").s().p("AggBPIgIihIBRAPIgNCWg");
	this.shape_4.setTransform(301,93.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(201));

	// r_arm
	this.instance_6 = new lib.r_entire_arm();
	this.instance_6.parent = this;
	this.instance_6.setTransform(194.1,224.3,1,1,-105,0,0,58.8,58.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:44.9,regY:36.8,rotation:-104.7,x:176.3,y:243.2},0).wait(1).to({rotation:-104.3,x:176.2,y:243.1},0).wait(1).to({rotation:-104,x:176.1,y:243},0).wait(1).to({rotation:-103.6,x:176,y:242.9},0).wait(1).to({rotation:-103.3,x:175.9,y:242.8},0).wait(1).to({rotation:-102.9,x:175.7,y:242.7},0).wait(1).to({rotation:-102.6,x:175.6,y:242.6},0).wait(1).to({rotation:-102.2,x:175.5,y:242.5},0).wait(1).to({rotation:-101.9,x:175.4,y:242.3},0).wait(1).to({rotation:-101.6,x:175.3},0).wait(1).to({rotation:-101.2,x:175.2,y:242.1},0).wait(1).to({rotation:-100.9,x:175.1,y:242},0).wait(1).to({rotation:-100.5,x:175,y:241.9},0).wait(1).to({rotation:-100.2,x:174.8,y:241.8},0).wait(1).to({rotation:-99.8,y:241.7},0).wait(1).to({rotation:-99.5,x:174.7,y:241.6},0).wait(1).to({rotation:-99.1,x:174.6,y:241.4},0).wait(1).to({rotation:-98.8,x:174.5,y:241.3},0).wait(1).to({rotation:-98.4,x:174.4,y:241.2},0).wait(1).to({rotation:-98.1,x:174.3,y:241.1},0).wait(1).to({rotation:-97.8,x:174.2,y:241},0).wait(1).to({rotation:-97.4,x:174.1,y:240.9},0).wait(1).to({rotation:-97.1,x:174,y:240.7},0).wait(1).to({rotation:-96.7,x:173.9,y:240.6},0).wait(1).to({rotation:-96.4,x:173.7,y:240.5},0).wait(1).to({rotation:-96,y:240.4},0).wait(1).to({rotation:-95.7,x:173.6,y:240.2},0).wait(1).to({rotation:-95.3,x:173.5,y:240.1},0).wait(1).to({rotation:-95,x:173.4,y:240},0).wait(1).to({x:173.3,y:239.9},0).wait(1).to({rotation:-94.9,y:240},0).wait(2).to({rotation:-94.8,y:239.9},0).wait(2).to({rotation:-94.7},0).wait(2).to({rotation:-94.6},0).wait(1).to({y:239.8},0).wait(1).to({rotation:-94.5},0).wait(1).to({y:239.9},0).wait(1).to({rotation:-94.4,y:239.8},0).wait(1).to({x:173.2},0).wait(1).to({rotation:-94.3},0).wait(2).to({rotation:-94.2,y:239.7},0).wait(1).to({x:173.1},0).wait(1).to({rotation:-94.1},0).wait(1).to({y:239.6},0).wait(1).to({rotation:-94},0).wait(1).to({y:239.7},0).wait(1).to({rotation:-94.4,x:173.2,y:239.8},0).wait(1).to({rotation:-94.9,x:173.4,y:239.9},0).wait(1).to({rotation:-95.3,x:173.5,y:240.1},0).wait(1).to({rotation:-95.8,x:173.6,y:240.3},0).wait(1).to({rotation:-96.2,x:173.7,y:240.4},0).wait(1).to({rotation:-96.6,x:173.8,y:240.6},0).wait(1).to({rotation:-97.1,x:173.9,y:240.7},0).wait(1).to({rotation:-97.5,x:174.1,y:240.9},0).wait(1).to({rotation:-98,x:174.3,y:241.1},0).wait(1).to({rotation:-98.4,x:174.4,y:241.2},0).wait(1).to({rotation:-98.8,x:174.5,y:241.4},0).wait(1).to({rotation:-99.3,x:174.6,y:241.5},0).wait(1).to({rotation:-99.7,x:174.7,y:241.7},0).wait(1).to({rotation:-100.2,x:174.8,y:241.8},0).wait(1).to({rotation:-100.6,x:175,y:241.9},0).wait(1).to({rotation:-101.1,x:175.1,y:242.1},0).wait(1).to({rotation:-101.5,x:175.3,y:242.2},0).wait(1).to({rotation:-101.9,x:175.4,y:242.4},0).wait(1).to({rotation:-102.4,x:175.6,y:242.5},0).wait(1).to({rotation:-102.8,x:175.7,y:242.7},0).wait(1).to({rotation:-103.3,x:175.8,y:242.8},0).wait(1).to({rotation:-103.7,x:176,y:243},0).wait(1).to({rotation:-104.1,x:176.2,y:243.1},0).wait(1).to({rotation:-104.6,x:176.3,y:243.2},0).wait(1).to({rotation:-105,x:176.4,y:243.4},0).wait(1).to({rotation:-105.5,x:176.6,y:243.5},0).wait(1).to({rotation:-105.9,x:176.7,y:243.6},0).wait(1).to({rotation:-106.3,x:176.8,y:243.8},0).wait(1).to({rotation:-106.8,x:177.1,y:243.9},0).wait(1).to({rotation:-107.2,x:177.2,y:244},0).wait(1).to({rotation:-107.7,x:177.3,y:244.2},0).wait(1).to({rotation:-108.1,x:177.5},0).wait(1).to({rotation:-108.5,x:177.6,y:244.4},0).wait(1).to({rotation:-109,x:177.8,y:244.6},0).wait(1).to({rotation:-109.4,x:177.9},0).wait(1).to({rotation:-109.9,x:178.1,y:244.8},0).wait(1).to({rotation:-110.3,x:178.2,y:244.9},0).wait(1).to({rotation:-110.7,x:178.4,y:245},0).wait(1).to({rotation:-111.2,x:178.5,y:245.2},0).wait(1).to({rotation:-111.6,x:178.7,y:245.3},0).wait(1).to({rotation:-112.1,x:178.9,y:245.4},0).wait(1).to({rotation:-112.5,x:179.1,y:245.5},0).wait(1).to({rotation:-112.9,x:179.3,y:245.6},0).wait(1).to({rotation:-113.4,x:179.4,y:245.7},0).wait(1).to({rotation:-113.8,x:179.5,y:245.9},0).wait(1).to({rotation:-114.3,x:179.7},0).wait(1).to({rotation:-114.7,x:179.9,y:246},0).wait(1).to({rotation:-115.2,x:180,y:246.1},0).wait(1).to({rotation:-115.6,x:180.2,y:246.3},0).wait(1).to({rotation:-116,x:180.4,y:246.4},0).wait(1).to({rotation:-116.5,x:180.6,y:246.5},0).wait(1).to({rotation:-116.9,x:180.8,y:246.6},0).wait(1).to({rotation:-117.4,x:180.9,y:246.7},0).wait(1).to({rotation:-117.8,x:181.1,y:246.8},0).wait(1).to({rotation:-118.2,x:181.2,y:246.9},0).wait(1).to({rotation:-118.7,x:181.4,y:247},0).wait(1).to({rotation:-119.1,x:181.6,y:247.1},0).wait(1).to({rotation:-119.6,x:181.8,y:247.2},0).wait(1).to({rotation:-120,x:181.9,y:247.3},0).wait(26).to({rotation:-119.7,x:181.8,y:247.2},0).wait(1).to({rotation:-119.4,x:181.7},0).wait(1).to({rotation:-119.1,x:181.6,y:247},0).wait(1).to({rotation:-118.8,x:181.5},0).wait(1).to({rotation:-118.5,x:181.4,y:246.9},0).wait(1).to({rotation:-118.2,x:181.2},0).wait(1).to({rotation:-117.9,x:181.1,y:246.8},0).wait(1).to({rotation:-117.6,x:181},0).wait(1).to({rotation:-117.2,x:180.9,y:246.7},0).wait(1).to({rotation:-116.9,x:180.7,y:246.6},0).wait(1).to({rotation:-116.6,x:180.6,y:246.5},0).wait(1).to({rotation:-116.3,x:180.5},0).wait(1).to({rotation:-116,x:180.4,y:246.4},0).wait(1).to({rotation:-115.7,x:180.3,y:246.3},0).wait(1).to({rotation:-115.4,x:180.2,y:246.2},0).wait(1).to({rotation:-115.1,x:180},0).wait(1).to({rotation:-114.8,x:179.9,y:246.1},0).wait(1).to({rotation:-114.5,x:179.8,y:246},0).wait(1).to({rotation:-114.2,x:179.7,y:245.9},0).wait(1).to({rotation:-113.9,x:179.6,y:245.8},0).wait(1).to({rotation:-113.6,x:179.5},0).wait(1).to({rotation:-113.3,x:179.3,y:245.7},0).wait(1).to({rotation:-113,y:245.6},0).wait(1).to({rotation:-112.7,x:179.1,y:245.5},0).wait(1).to({rotation:-112.3,x:179,y:245.4},0).wait(1).to({rotation:-112,x:178.9},0).wait(1).to({rotation:-111.7,x:178.8,y:245.3},0).wait(1).to({rotation:-111.4,x:178.7,y:245.2},0).wait(1).to({rotation:-111.1,x:178.6,y:245.1},0).wait(1).to({rotation:-110.8,x:178.5,y:245},0).wait(1).to({rotation:-110.5,x:178.3},0).wait(1).to({rotation:-110.2,x:178.2,y:244.9},0).wait(1).to({rotation:-109.9,x:178.1,y:244.8},0).wait(1).to({rotation:-109.6,x:178,y:244.7},0).wait(1).to({rotation:-109.3,x:177.9,y:244.6},0).wait(1).to({rotation:-109,x:177.8},0).wait(1).to({rotation:-108.7,x:177.6,y:244.4},0).wait(1).to({rotation:-108.4,x:177.5},0).wait(1).to({rotation:-108.1,y:244.3},0).wait(1).to({rotation:-107.8,x:177.4,y:244.2},0).wait(1).to({rotation:-107.4,x:177.3,y:244.1},0).wait(1).to({rotation:-107.1,x:177.1,y:244},0).wait(1).to({rotation:-106.8,x:177,y:243.9},0).wait(1).to({rotation:-106.5,y:243.8},0).wait(1).to({rotation:-106.2,x:176.8,y:243.7},0).wait(1).to({rotation:-105.9,y:243.6},0).wait(1).to({rotation:-105.6,x:176.6,y:243.5},0).wait(1).to({rotation:-105.3,x:176.5},0).wait(1).to({rotation:-105,y:243.4},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,253.6,288.3,305.2);
// library properties:
lib.properties = {
	id: '27FBD9C0C7C14ED5AC42F294EC5594F7',
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
an.compositions['27FBD9C0C7C14ED5AC42F294EC5594F7'] = {
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