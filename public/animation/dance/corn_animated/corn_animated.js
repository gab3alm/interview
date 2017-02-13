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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(2).p("Ahgg3QATgYAcgMQgBgCAAgCQAAgJAXgHQAXgHAfAAQAhAAAXAHQAXAHAAAJQAAALgZAHQASARAJAWQAJAWgBAYQAAAugbAgQgcAhgnAAQg7AAgLgdQgEgMABgVQABgbAAgQQAAgKABgJQgPAQgQAHQgRAHgJgIQgMgIADgUQADgWAQgWg");
	this.shape.setTransform(-0.1,0,1,1,0,-95,85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8ECEE").s().p("AgwBaQgEgMABgVIABgrIABgTQgPAQgQAHQgRAHgJgIQgMgIADgUQADgWAQgWQATgYAcgMIgBgEQAAgJAXgHQAXgHAfAAQAhAAAXAHQAXAHAAAJQAAALgZAHQASARAJAWQAJAWgBAYQAAAugbAgQgcAhgnAAQg7AAgLgdg");
	this.shape_1.setTransform(-0.1,0,1,1,0,-95,85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-17.7,28.8,31.3);


(lib.corn_r_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(2).p("ABngpQgQgagcgQQACgCAAgBQABgKgWgJQgWgJgggEQgggDgXAEQgYAFgBAJQgBAKAXAKQgTAPgLAVQgLAWgCAYQgFAtAYAjQAYAjAnAFQA6AGAOgcQAGgLABgWQACgbABgPQABgLAAgJQAOATAPAIQAQAIAKgGQAMgHAAgWQgBgUgNgXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8ECEE").s().p("AghB3QgngFgYgjQgYgjAFgtQACgYALgWQALgVATgPQgXgKABgKQABgJAYgFQAXgEAgADQAgAEAWAJQAWAJgBAKIgCADQAcAQAQAaQANAXABAUQAAAWgMAHQgKAGgQgIQgPgIgOgTIgBAUIgDAqQgBAWgGALQgLAXgpAAIgUgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.corn_r_hand, new cjs.Rectangle(-12.7,-20.1,25.4,33.1), null);


// stage content:
(lib.corn_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r_hand
	this.instance = new lib.corn_r_hand();
	this.instance.parent = this;
	this.instance.setTransform(149.1,273.1,1,1,2,0,0,0.1,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-11,x:151,y:191.6},4).to({rotation:87,x:150.6,y:111.4},4).to({rotation:180,x:167.6,y:190.2},4).to({regX:0.2,regY:-12.1,rotation:59,x:174.9,y:306.5},4).to({regX:0.1,regY:-12,rotation:2,x:149.1,y:273.1},4).wait(1));

	// l_hand
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(403,115.3,1,1,-72,0,0,-13.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-82,x:391,y:207.6},4).to({regX:-13.8,rotation:-7,x:402,y:294.1},4).to({rotation:106,x:394.9,y:221.3},4).to({rotation:-6,x:402.3,y:99.6},4).to({regX:-13.7,rotation:-72,x:403,y:115.3},4).wait(1));

	// arm_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggFATeQlDmaAApFQAApEFDmbQFEmaHJgBQBmABgOAsQgJAbhIBGQhFBDgDAYQgGAlB0gKQEsgdCJG4QAvCZApD/IA/GVQBbIDBBDUQBvFlCOgJQB8gHhhAlQhXAhjYA0QoeCDjgAAQnJAAlEmcgAI8KlQiKizgZiWQgKhAAAhtQADiPAAhdQAAkOBzkpQBpkNCljXQA8hMBGh6QBQiLAYgjQA7hVA/goQBKgvBngBQG2ABE1GQQE2GRABI2QgBI2k2GQQk1GQm2AAQm2AAk2mQg");
	mask.setTransform(287.3,200.8);

	// long_arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").ss(5,1,1).p("AT2saQhUFgipDSQjGD1kXgDQkAgCjMgCQmHgFiZgFQijgHibBIQiNBEhzB9QhsB3g+CQQg9CQAACG");
	this.shape.setTransform(276,193.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(5,1,1).p("AzjJAQAIiTA6iLQAkhXAxhFQAsg9A3gpQAdgVAfgNQBfg1BtgCQCUgRCHAxQAJADALAEQBFAYCOADQB6ADC1gJQAHAAAHgBQB9gDCfgJQBZgFA6ALQAOAEAOAFQCSA7CAgoQBHgIBEgyQANgHANgKQBAgtA3hgQBViYA4jn");
	this.shape_1.setTransform(274.8,195.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(5,1,1).p("AzSFmQASigA2iGQAmhdAxhCQAyhBA8gcQAhgPAjgCQBhgUBsAxQCFAnBzBcQAIAFAJAGQA7AvCVAFQB5ADDBgVQAGAAAHAAQB6gLCqgSQBrgLAoAVQAKAKAKAJQBqB0BsAaQBCAmBEgRQAOAAAPgEQBKgSBDhnQBZiQA9j7");
	this.shape_2.setTransform(273.5,196.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").ss(5,1,1).p("AzAChQAaisAziBQAnhkAyg/QA3hFBDgPQAkgIAoAJQBhANBsBkQB2BgBfCFQAHAJAGAJQAxBECdAFQB4AEDMgfQAGgBAGgBQB3gRC1gcQB9gQAWAfQAGAPAHAPQBDCtBXBbQA8BVBEARQAQAGARABQBUAKBOhuQBdiJBCkN");
	this.shape_3.setTransform(272.3,195.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231F20").ss(5,1,1).p("ASwBmQhIEihhCBQhZB1heglQhagkhFimQhIiqgbkAQgFgqiOAWQjJAph2AWQjYArh3gEQilgHgmhaQhPi+hiiPQhximhogxQh6g5hfBxQhsCBhCFc");
	this.shape_4.setTransform(271,197.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(5,1,1).p("AzEkPQBxjsB6hCQA4gnA9AGQApAEAsAbQBiA9BnCfQA/BiA4B3QAZA2AiAzQAeAvBJASQArALA9ABQBhABCcgcQAkgGAngIQBngTCjgiQAWgEAXgEQBggOAaATQArEPBHCpQBACcBWAxQAdAPAdABQA5ACA6guQAqgdAqgyQAphVBfhj");
	this.shape_5.setTransform(272.2,198.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(5,1,1).p("AzZnkQCgh9CHgCQA4gMA4AUQAlANAoAeQBaBJBeCaQA6BgA1B2QAYA1ArAqQAkAmBJAOQArAHA7gBQBigCCWgcQAigFAngIQBngUCdggQAXgEAVgEQBigNATAZQAnEJBFCoQA7CQBSA/QAaASAaAHQA0ARA7gRQAtgHAxgWQAfg3CTgY");
	this.shape_6.setTransform(273.3,199.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").ss(5,1,1).p("Azuq4QDPgOCVA9QA4AQAyAhQAiAWAiAiQBUBVBTCUQA2BgAzB0QAXA1A0AhQAqAbBIAJQArAEA6gCQBigGCQgaQAhgGAmgIQBngUCYgfQAWgEAUgDQBkgLALAdQAjEEBFCmQA2CGBOBLQAWAVAXANQAxAgA7ANQAwAOA4AHQAUgZDIAz");
	this.shape_7.setTransform(274.4,200.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#231F20").ss(5,1,1).p("AUFOJQj8h+gJgFQiIhMhUhUQjRjVgynMQgFgqiOAWQjJAph2AXQjYArh3gFQilgHgmhaQiTlgigimQivi1lXiD");
	this.shape_8.setTransform(275.5,200.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(5,1,1).p("AzerVQCeCGB9B0QBSBUBJA3QBOA6BLArQBdBHBUBXQAHAHAJAFQAwAMB2gIQAogIAxABQAzAABBAIQA1AABHAKQBYANBRgEQBDAGBKgHQCCgKAZAQQAXAwAZAgQBDBgBYBaQBBAxBEBBQAHAHAHAHQBBBBBSBSQAXAVAZAXQANAmC+CL");
	this.shape_9.setTransform(277.1,201.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(5,1,1).p("Ay3oiQBnC6BnCFQBJBrBQApQBVAqBVgSQBhABBVgaQAHgBAIgDQAwgoBjgWQAogRAxAFQAyAEBBAZQAtAJBKAjQBZAqBGAMQBGAZBGABQB2ADAugMQAkARAlgIQBegOBmAhQBRAIBKBBQAIAHAIAIQBBBABFBnQASAbATAcQASBGB/CZ");
	this.shape_10.setTransform(278.6,203);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(5,1,1).p("AyRluQAxDtBRCVQA/CBBWAbQBcAaBghOQBlhFBXiLQAGgJAGgKQAxhdBPgjQAqgaAxAJQAwAJBBAqQAmASBLA6QBbBJA8AaQBIArBDAKQBqAPBDgmQAygNAwgzQB6h7BxgXQBjgfBQBAQAJAHAJAIQBBBAA2B7QAOAgAOAhQAWBoBBCl");
	this.shape_11.setTransform(280.2,204.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(5,1,1).p("ARsDJQgEjmgrihQgtimhQg7QhXg/hzBIQh+BOiVDoQiQDfihgvQhAgThLg+QgwgphQhXQhYhgghgdQhAg8gvgMQh2gghSD3QhcEWhxCUQhpCLhggJQhggKg3icQg6imAFkh");
	this.shape_12.setTransform(281.7,204.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(5,1,1).p("AxtCRQAtCjBEBYQA/BUBSgWQBOgJBWiQQBdiZBPjxQBQj4B2AgQAvAMBAA8QAgAdBZBgQBQBXAxApQBKA/BBASQChAvCQjeQCPjeB1hkQBthfBFAqQBHAaA2BpQA0BmA3CC");
	this.shape_13.setTransform(283.6,202.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(5,1,1).p("AxvHFQBfAlBPAJQBHANBEg2QA7gdBDiUQBJifBCjLQBPj4B1AfQAvANBAA7QAgAeBaBgQBQBXAxAoQBLA/BAATQCiAvCQjeQCIjTBsh6QBoh3AyAVQA/gHBAAsQA8ArBpAe");
	this.shape_14.setTransform(285.4,201.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(5,1,1).p("AxxLVQCRhZBZhFQBPg7A1hVQAqgwAwiaQA1ijA0inQBOj4B1AfQAuANBBA7QAgAdBZBhQBRBXAyApQBKA/BBASQCjAwCQjfQCBjIBjiQQBiiPAgAAQA2gnBJgSQBFgPCchH");
	this.shape_15.setTransform(287.2,204);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#231F20").ss(5,1,1).p("AR0wFQjOCrhOBLQhSBOguBJQgNAUhcCnQhbCmh6C+QiQDeikgvQhBgThKg/QgygphRhXQhahhgggdQhBg7gugNQh1gfhMD5QgnCBghCpQgdCegXBDQgoB2hXCBQhjCUjDDY");
	this.shape_16.setTransform(289,203.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#231F20").ss(5,1,1).p("AyTPLQBbiHBPh1QAshAAlg4QA5hYAshQQASgiAPggQAkhEAsiDQAKgZAKgYQAvhxAzhTQAcgxAeghQBBhiBgASQAwAJBBAtQApAWBYBJQAjAaAfAVQAqAfAgASQBLAvBDAPQB2AaBwhVQArgcApguQCIiVBnihQAZgnAUghQAxhUAPgYQAuhIBHhQQBJhaClir");
	this.shape_17.setTransform(285.8,201.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#231F20").ss(5,1,1).p("Ay0OQQA9iHBJh+QAnhAAkg4QA1hTAyhMQAUgfASgdQAxhFA6hoQAOgVAPgUQBChcBGg7QAkgjAngVQBChBBoANQAyAHBBAeQAzAPBWAxQAlASAjAOQApAVAmALQBIAhBGAJQBzASByg4QAvgTAsghQCWhuB0ibQAZgkAWggQAthGAWgiQAthIA7hRQBFhpB8is");
	this.shape_18.setTransform(282.5,198.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#231F20").ss(5,1,1).p("AzUNUQAeiGBDiHQAhg/Ajg5QAyhQA4hIQAWgbAUgaQA/hHBIhMQAUgRASgQQBVhGBZgkQAsgUAugKQBFgfBwAIQA1AEBAAQQA8AIBUAZQAnAJAmAHQArALApAGQBIAQBIAFQBuAJB2gbQAygJAwgVQCkhGCAiVQAbggAXghQApg5AbgrQAshHAxhSQBBh5BSir");
	this.shape_19.setTransform(279.3,196.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// eyes
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AChAhQgKgKAAgOQAAgNAKgKQAKgLAPABQAOgBAKALQAKAKAAANQAAAOgKAKQgKAKgOAAQgPAAgKgKgAjRAPQgKgJAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKAJQgKAKgPAAQgOAAgKgKg");
	this.shape_20.setTransform(275.7,90.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(21));

	// mouth
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhyAHQgfgdgIgeIAwALQA5AJAsgCQBHgDBWgQQAFAWgiAkQgsAvhKACIgEAAQhGAAgugvg");
	this.shape_21.setTransform(277.1,109.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(21));

	// corn_body
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AA3AiQgpgagOgHQgLgFgugUQgZgKADgFQADgHAaAIQAZAHAgARQAiARAVAQQAVARgDAGQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgGAAgQgJg");
	this.shape_22.setTransform(299,69.4,0.51,0.51);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AhQAmQgDgGAVgQQAWgQAigPQAhgPAagGQAagGADAGQACAFgZAKQgsAQgPAGQgNAGgqAYQgQAJgGAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_23.setTransform(258.9,67.6,0.51,0.51);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CAD86E").s().p("ACzQcQhLiLhDknQgrjHg8lyQhEmggXhzQhTmgiXiLQg4g0hGgQQgogKhIAAQgYAAATgPQAUgPAvgPQCGgpCgAYQDbAgC8CYQDwDBCnFyQBMCnAUEOQASD2gfEMQgeEEhAC1QhEC+hQAbQgVAIgVAAQhXAAhKiHg");
	this.shape_24.setTransform(229.1,224);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B5C962").s().p("EgJXAoKQhMgWhWiiQhSibhPkBQilohhBqXQhIrgBlngQB2o1FPg6QM+iSGjkjQFIjkA8kyQAojPhVjaQgVg4gdgzIgIgQIALAOQDMD9BDFTQA8EogmGWQgdEvhlHzIi3N7QhXHRiJGWQiRGvi1EuQjEFIjaCQQijBsiqAAQhOAAhPgXg");
	this.shape_25.setTransform(291.8,212.5,0.51,0.51);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEE96B").s().p("AsmK7QgxgJgngfQgngfgUgvQgfhKAfhLQAfhLBLggQgug/AKhNQAKhOA8gxQgbg5AMg8QALg+AugsQgVhHAfhDQAghDBEgeIgGgJQgmhHAYhNQAXhOBHgmQgbhMAjhIQAihJBMgbQgWgngDgvQgDhRA2g8QA3g7BRgEQgHgiAGgkQAOhQBCguQBCgvBPAOQANgmAageQAbgeAjgRQAjARAaAdQAbAeAMAlIARgBQATAAASADQBPAPAuBDQAtBDgPBPQAzACArAaQBGApAUBPQATBOgpBGQBHAgAeBIQAeBJgdBJQA/AnAVBHQAUBHgfBDIABACQA/AzAJBQQAIBRgyA+QA8AtAPBKQAPBJgnBBIAFAUQBEAjAZBJQAZBIgfBGIAMAJQA/A0AIBQQAIBRgzA+QAYAQAWAYQA0A+gHBRQgHBRg+A0QAXCdAZDEQjigbjdAAIioAAQlZAAlNBAQlEA+ksB3QAtjjB2p2g");
	this.shape_26.setTransform(279.9,95,0.51,0.51);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFD469").s().p("AvJRpIBXnNQgxgIgnggQgogfgTguQgfhLAehLQAghLBKgfQgug/AKhOQAKhNA9gxQgbg4ALg+QAMg+AtgrQgVhHAghEQAfhDBEgdIgFgJQgmhHAXhOQAYhNBGgnQgahLAjhJQAhhIBMgcQgXgogBgtQgDhRA2g8QA3g8BQgEQgGgjAFgiQAOhQBDgvQBCgvBPAOQAOgrAhghQAgggArgPQBMgbBIAkQBKAjAZBNIARgBQAUAAARAEQBPAPAuBDQAuBDgQBPQAzACAsAaQBGApATBPQAUBOgqBGQBHAgAfBIQAdBJgdBJQA/AnAVBHQAVBIggBDIABABQA/AzAJBQQAJBRgzA/QA8AsAQBKQAOBIgmBBIAEAUQBEAkAZBIQAZBIgeBGIAMAJQA+A0AIBQQAJBRg0A+QArAbAYAsQAZAtAAAyQAAArgSAoQgSAngiAcQAaCwAaDLQkxg1k6AAQmQAAl+BWQlzBSlNCeQAojKA0kTg");
	this.shape_27.setTransform(283.2,96.5,0.51,0.51);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AguK3QhqgHgvgTQiFg0FphvQANgSAPhwQAejgALnUQABg+AFgOQAJgZAkACIBEkbQAgADgWB1QgLA/gVBmIAAGlQAHHEAdCcQAHAqgrAWQgeAPgsACQggACghAAQgyAAg0gEg");
	this.shape_28.setTransform(254,354.6,0.51,0.51);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AjCKwQiIgqFhiHQALgUAIhxQAOjigVnTQgDg+AEgOQAIgaAjABIAxkfQAhAAgOB3IgVCmIAdGkQAkHEAoCYQAKAqgpAZQgdARgsAFQhQAJhWAAQhqAAgxgQg");
	this.shape_29.setTransform(279.9,355.2,0.51,0.51);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#34B2E6").s().p("AotBNQjoggAAgtQAAgsDoggQDngfFGAAQFHAADoAfQDnAgAAAsQAAAtjnAgQjnAflIAAQlGAAjngfg");
	this.shape_30.setTransform(253,388.5,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(410.5,214.6,280.6,379.4);
// library properties:
lib.properties = {
	id: '424369EA91F44259840699222AC0C6E4',
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
an.compositions['424369EA91F44259840699222AC0C6E4'] = {
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