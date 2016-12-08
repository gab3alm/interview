(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
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



// stage content:
(lib.Untitled4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D4625").s().p("ApHFcIiOgQIhFgPIACgBIB6gPIAjgIIA2gXIAcgVIBdhQICZh1IB/hoICdhqIB6hEIB0gzIBkggIBRgTICggYQCJgRBSB3QAZAogHAyQgOBAgzAvIg4ApIg+AeIibBFIhcBBIgyAfIhJAkIh9A1IhzAgIivAjIh0AJIhmAEg");
	this.shape.setTransform(189.7,69.2,1,1,0,0,0,-3.9,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D4625").s().p("ArpFrIgpgFIACgCIBjgWIA5gTIAtgaICaiPIC7iiIBbhKIBDgvIB4hLIBFgkIB9g0IByghICMgYIBFgGQB/gMBYB9QAXAmgGA6QgRBKgtAoIgbAXIhYAxIirBJIiNBLIiuBOIhBAVIiqArIhcASIh6ANIjWAMg");
	this.shape_1.setTransform(194.3,72.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D4625").s().p("AsOF0IAEgDIBZgcIBAgbIApgbICaicIDTi/IBjhMIB5hOIA+giIBugzIA7gVIBngcIBwgSIBwgGQB0gDBSBwQAbAvgBAgQAAA8gdAwIgTAbIgOAPIgfAbIgdATIh9A7Ij2BeIiqBIIkDBIIg+ANIi+AaIldAag");
	this.shape_2.setTransform(194.7,71.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D4625").s().p("AsTFpIABgCIB3gmIAfgPIAvgeICZiYIDhjGICIhfIBUgzICNhDIBPgcICGghIBDgJIB/gEQBvgCBXBtIAHAIIAGANQAyBphMBnIgLANIgiAeIg+AmIiMA9IgwARIh5AaIj7BZIj1A8IjlAeIlWAXg");
	this.shape_3.setTransform(194.2,69.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D4625").s().p("AqaFIIiGgKIABgCIBdgTIA+gSIAzgcIAdgWIBUhNIE1jyIBeg8ICDhGIB8g0IBNgYIBjgWICTgMIBGABQBuADBVBqIAKALIAGAQQAxBqhNBqIghAiIgtAgIgcAPIigBEIgxANIhiAIIgxAJIjnBGIj5AwIixANIh0ACg");
	this.shape_4.setTransform(192.8,64.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D4625").s().p("AmhEuIhigJIkHgtIgkgMIABgBIB9gIIA9gOIA6geIBTg9ICyhyIBzhQIBEgqICthZIB5gwIBIgWIBegVIA/gIIBNgFIB1AEQBoAGBVBqIAJALIAHASQAvBqhKBpIgNAPIgkAhIg7AkIhyAyIg8AWIgnAGIhkABIhAAHIi/AyIh8AUIiuATg");
	this.shape_5.setTransform(191.3,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D4625").s().p("AkhEeIiBgTIifghIjUhFIgigQIAFgBIBZAIIBGgBIAUgDIAhgJIAggOIBwg/ICehPICxhmIBngzIB/g0IB5gmICIgcICJgHIAxABIBLAJQBoATBCBeIAKALIAGARQAuBwhMBkIggAiIgsAgIgeAQIieBCIgXAHIgmAEIiFgDIhMAKIiYAgIhgAMIi7AKg");
	this.shape_6.setTransform(190.4,59.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D4625").s().p("AjpETIh4gTIhCgPIieguIjWhZIgkgUIACgBIBdAQIBHAEIATgBIAggGIAfgKIDehhIC5hbICvhOIBPgdIC1gzIBAgMIBBgHIBbgCIBUAEIBIAKQBUANBNBpIAGAHIAGAOQAtBuhMBlQgeAnhAAjIiYBCIgvAOIggADIhRgEIhfABIjKAfIhYAHIhrADg");
	this.shape_7.setTransform(189.9,58.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D4625").s().p("AigEMIhZgKIg5gKIiBglIiog/IjEhkIgegUIgBgCIAFAAIBiAZIA4AIIAzgDIBIgVIA/gaIC/hBICihIIB5gvIBZgeIC7gwIB/gQIBZgCIBZAFIBLALQBqAcA4BjIAGALQA0BmhhB3IgdAaIg+AmIiGA6IgjAMIgoAIIi5gCIkGAcg");
	this.shape_8.setTransform(189.8,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D4625").s().p("AhAEIIhngIIiAgXIg/gSIhkglIiFg7Ih7hGIhzhKIABgBIBaAbIBDAPIA0AAIAkgGIBjgfIDAg2IC+hKIBkgiID3hAIBEgLIBOgHICIAAIB5AOIAbAIQBxAtAlBzQAbBkhlBhIgNALIhMAsIiHA5IgkALIgyAHIi8ACIjjAUg");
	this.shape_9.setTransform(189.7,58.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D4625").s().p("AhVEEIhYgLIh/gbIhhgiIhRglIiUhOIhvhJIhahAIADgBIBuAnIAnAJIA3AFIAlgFIBcgZIDFgsIDJhFICjgxIDIgtIBjgMIBAgCIB2ACIBBAEIA+AOQAvAQAsAtQA1A7AFAzIABANIgBAgIgKAmQgUA1g4AuIhQAwIiIA5IgqANIg/ALImUAZg");
	this.shape_10.setTransform(189.9,59.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D4625").s().p("Ag3EGIh/gQIh4gdIg5gUIhPgkIibhSIjOiSIgagXIABgBIAEABIBWAjIA9ATIAcAFIAeABIAigDIBigXICyghIEGhSIEjhIIBXgOIB9gHICXADIA/AMQBnAiArBxQAaBdhgBbIgRAOIhaAyIihBBIhEARIkRAeIiNAHg");
	this.shape_11.setTransform(190.2,61.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D4625").s().p("Ag6EMIhmgMIhbgTIhzgmIhigvIiGhLIiAhcIhhhPQABgCAJAEIBaAnIAvAPIA5AIIAmgCIBkgWICFgVIBCgPIEHhTIEjhJIBcgNIDWgJQA5gDA8AXQBoA1AWBcQAVBGhgBgIgrAeIg5AdIiGA5IhiAjIiPAfIiGARIhrAIg");
	this.shape_12.setTransform(190.5,63.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D4625").s().p("AhRETIhegMIiEgeIg+gXIhZgpIiIhLIjHiRIgcgbQACgBAKAEIBXAnIAwAPIAaAFIAiACIAkgCIBkgXICIgWIA3gOIFHhtIDyg/IBUgNIDpgRIAtADIAVAFIAfAJQBtA7AOBSIADARIgDAZIgHAdQgKAlg6A0IgjAYIhGAlIjsBnIhtAiIirAeIiSAJg");
	this.shape_13.setTransform(190.7,66);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D4625").s().p("AhjEfIiGgSIhCgPIhQgcIhlgsIhzg8IjBiGIgfgdQABgBALAEIBhAmIAoAMIA0AGIArgEIBlgZIB9gZIA7gQIE4h1IDthHICRgaICLgQQCpghBYCGQAiA0gZBAQgQA4hgA9Ig9AfIiIA6IhZAwIhaApIhUAZIhJAPIhnAQIhzAEg");
	this.shape_14.setTransform(190.9,68);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D4625").s().p("Ah3EsIhjgKIhZgSIhcgeIh/gzIhdgxIijhpIgjgdIAFAAIBkAkIArALIAgAEIAfAAIBHgQIA+gVICzgxIE3iFIDohPIB+gdICYgYQBxgRAtATQBCAVAvBGQAiA3gZA7QgRA4hdA7IjLBdIiRBaIgvAVIhFAXIhiAYIhAALIhxAJg");
	this.shape_15.setTransform(191.2,70.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D4625").s().p("AjDE1IhlgOIgzgMIjZhJIiihVIhYg6IACgBIBPAYIBOAQIA1gBIAigIIEIhhIE/iaICWg9IB+gpIDSgrIBVgNIBAAAQBmAWArBJQAjA3gZA5QgSA6hfA7IgrAXIikBJIgaARIhOA8IgtAdIg7AbIhwAlIiOAdIhrAGg");
	this.shape_16.setTransform(191.5,71.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D4625").s().p("AkXE+IhDgLIiPghIhEgVIhEgbIidhLIgdgUQC6AxA8glIEHh5IDWh6IBhgxIBqgxICZg5ICIgkICOgbIA4gGIAtACQByAbAgBCQAgAqgXBFQgUA7haA5IjPBfIgZAQIhdBOIglAYIhAAgIhMAdIhrAdIgfAGIgMADIhiAMIiWADg");
	this.shape_17.setTransform(191.8,73.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D4625").s().p("Ak2FKIiSgUIh8gcIjEhFIgfgRIASABIBqAMIAjAAIA0gKIAkgPIBWg0ICsheICuhyICOhSICPhDIBPgfIB7glIDZgoIA6gCQAlACAkATIAeATIAbAYIAJAKIAOATQA5BOhgBpIgUASIgtAeIg2AaIh3AzIgpAXIgXAQIg/A5IgzAmIhbAtIhpAoIhJASIgMAFIiCAUIhqAIg");
	this.shape_18.setTransform(192.3,74.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D4625").s().p("Am/FRIiWgVIisgqIghgOQCSAKBHghIA3giIBbhBIBcg8IDhihIBshDICuhZICmg6IBvgZIBjgRIBIgFQBegHBQBoQA5BLhlByIgYAVIgmAYIjSBhIgTAMIhKA/IgUAPIhFApIhYApIiKAuIg5ANIi2AcIh0ACg");
	this.shape_19.setTransform(192.9,74.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D4625").s().p("AhKh9ICVgbIgPErIhwAGg");
	this.shape_20.setTransform(250.4,82.3,0.623,0.623);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AAFJfQhWAAhXgOQhWgOgigTQgpgXgKiGIgDivIgQsOQgBgoAsgIQAKgCBggDQAPAxATCXIAjEmQAvGBAmAVQA3AgCLBHQBwA5ArAcQBAApABAYQABAchQANQhbAQg7ADQgVACg8AAIgsgBg");
	this.shape_21.setTransform(321.6,344.9,0.623,0.623);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#231F20").ss(3.7).p("AlDidQAjgkA8gcQA6gcA0gJQgggYACgYQAEglBMgTQBLgTBpAKQBoAKBHAhQBIAhgEAlQgDAgg8ATQCWBjg5EHQgeCLiRA1Qh7AuiUgdQh6gXgrhIQgrhHAViHQgnARgigBQgjgBgVgVQghgiAPg9QAQg/A4g4g");
	this.shape_22.setTransform(385.6,306.6,0.623,0.623);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8ECEE").s().p("Ag9FsQh6gXgrhIQgrhHAViHQgnARgigBQgjgBgVgVQghgiAPg9QAQg/A4g4QAjgkA8gcQA6gcA0gJQgggYACgYQAEglBMgTQBLgTBpAKQBoAKBHAhQBIAhgEAlQgDAgg8ATQCWBjg5EHQgeCLiRA1QhLAchVAAQg1AAg6gLg");
	this.shape_23.setTransform(385.6,306.6,0.623,0.623);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgfMGQgGg4ASiWQAcjhAGhMQAQjFgPijQgPilg0imQgahTg/iZQgthrABgiQABgvBFgBQAwgBA/CRQBJCqBMFNQBLFGhEGBQgaCQglBlQgjBfgWAAIgCABQg2AAgIhMg");
	this.shape_24.setTransform(386.6,267.7,0.623,0.623);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#231F20").ss(3.7).p("AFEidQgjgjg8gdQg6gcg0gJQAfgYgCgYQgDglhMgTQhLgThpAKQhoAKhHAhQhIAgAEAlQADAgA8AUQiWBiA5EIQAdCLCRA1QB7AuCVgdQB6gYArhIQArhGgViHQAnARAigBQAjgBAVgVQAhgigQg9QgPg/g4g4g");
	this.shape_25.setTransform(151.2,306,0.623,0.623);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E8ECEE").s().p("AjSFbQiRg1gdiLQg5kICWhiQg8gUgDggQgEglBIggQBHghBogKQBpgKBLATQBMATADAlQACAYgfAYQA0AJA6AcQA8AdAjAjQA4A4APA/QAQA9ghAiQgVAVgjABQgiABgngRQAVCHgrBGQgrBIh6AYQg6ALg1AAQhVAAhMgcg");
	this.shape_26.setTransform(151.2,306,0.623,0.623);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F49331").s().p("AHqX4QE9jeB5kNQC4mYAUmNQAVl+iFlWQiClRkKkJQkMkLl8inQluihmIgTQl7gTlgBxQDfhxD3g8QD+g9EKgBQGfAAF6CTQFtCOEaEDQEaECCbFPQCgFbAAF7QAAFOh9E2Qh4EsjfD3QjfD1kpCkQkvColZBAQFziZDxipg");
	this.shape_27.setTransform(303.3,202.8,0.623,0.623);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF6E31").s().p("AsZa5QltiOkakDQkakCiblPQiglbAAl8QAAl7CglbQCblPEakCQEakDFtiOQF7iTGeAAQGfAAF7CTQFtCOEaEDQEaECCbFPQCgFbAAF7QAAF8igFbQibFPkaECQkaEDltCOQl7CSmfAAQmeAAl7iSg");
	this.shape_28.setTransform(270.7,203.9,0.623,0.623);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AggNRQgWAAgjheQglhmgaiQQhEmBBLlGQBMlNBJiqQA/iRAwABQBFABABAvQAAAigsBrQg/CagbBSQgzCmgPClQgPCjAQDFQAGBMAbDhQATCWgGA4QgIBMg2AAIgCgBg");
	this.shape_29.setTransform(150.3,267.1,0.623,0.623);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("ABrJvQgcgBhfgKQhXgIhVgXQhVgWgfgWQgngbADiGIAOiuIA6sMQADgoAtgEQALgCBeAHQAKAyAFCZQADBZAEDOQAKGEAkAZQAzAkCEBUQBqBEApAgQA8AvgCAYQgCAchRAGQhGAFg0AAIgdgBg");
	this.shape_30.setTransform(246.4,345.4,0.623,0.623);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(389.2,238.5,301,345.8);
// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;