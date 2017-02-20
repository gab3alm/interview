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



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AjtCmQgPgSASgOQANgKAtgPQCJgwBAgrQBFguBRhhQAcghAMgIQAQgLAMAPQANAQhNBZQhXBlhmAzQhoA0g+ARQgcAIgPAAQgOAAgEgGg");
	this.shape.setTransform(0,0,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-15.8,45.1,31.7);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.3).p("ACQgLQAAgzgkgkQgkglgxADQgcABgVAXQgHAHgiAzQgOgbgKgHQgOgJgYAJQgNAEgBAXQgCAXALAaQALAZAUAZQgDACgDAEQgHAMAPATQAOAUAbAQQAbAPAYADQAXACAHgMQADgGgBgHIAAAAQA0gBAjgkQAjgjgBgxg");
	this.shape.setTransform(0,0,0.92,0.92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AgJCFQgYgDgbgPQgbgQgOgUQgPgTAHgMIAGgGQgUgZgLgZQgLgaACgXQABgXANgEQAYgJAOAJQAKAHAOAbQAigzAHgHQAVgXAcgBQAxgDAkAlQAkAkAAAzQABAxgjAjQgjAkg0ABIAAAAQABAHgDAGQgFAKgRAAIgIAAg");
	this.shape_1.setTransform(0,0,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-13.9,28.5,30.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3775B7").s().p("AjYBxQgKgqA1hPQA8haBQgSQBPgTBXA1QBMAtAJApQAEAPgSAAQgKAAgogIQhjgSg9ANQg+AOhTBCQgjAbgKAFQgGAEgFAAQgHAAgCgJg");
	this.shape.setTransform(11,-12.1,0.92,0.92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3775B7").s().p("AgQBDQgugLgigzQgeguAGgYQADgMAiAcQAwAnAjAJQAjAHA1gOQAlgLgDAMQgGAYgpAcQgkAZgiAAQgKAAgLgDg");
	this.shape_1.setTransform(20.1,-43.3,0.92,0.92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3775B7").s().p("AhYBfQgJgGAngVQA1gdAVgdQAXgdAJg1QAHgkAIAGQATAOAHAwQAHA1gcAlQgcAlg5AMQgXAEgQAAQgVAAgLgIg");
	this.shape_2.setTransform(-17.2,-34.8,0.92,0.92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3775B7").s().p("Ai8GVQhohohOi1Qg2h/gniaIgbiCQgBgJAFgIQAHgGAIAAIABAAQA6AABUgIQCZgOCQgjQBhgXCmhJQBTgkBBggQADgCAFAAQAFAAADABQAIAEADAIIAaBkQAdB5APByQAxF2hxC7QhNCCiVAcQgrAIgnAAQiiAAiDiFgAm8inQAmCYA2B/QCwGXEZAAQAnAAAngIQE0g8gVnqQgGiagniyIgliTQg/AghUAkQioBKhjAYQiSAkicAOQhUAIg6AAIgBAAg");
	this.shape_3.setTransform(0,-29,0.92,0.92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEF2F6").s().p("AlQCRQg+iGgrimIgeiMICEgGQCigOCXglQBjgYCohKQBUgkA/ggIAlCTQAnCyAGCaQAVHpk0A9QgpAIgnAAQkKAAitl2g");
	this.shape_4.setTransform(0,-29,0.92,0.92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3775B7").s().p("ABBFYQgLgHgEgNIijp3QgDgNAHgMQAHgLANgEQANgDALAHQAMAHADANICkJ3QADANgHAMQgHALgNAEIgIABQgJAAgIgFg");
	this.shape_5.setTransform(24.5,46.5,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.2,-78.5,90.5,157.1);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("Ag0B0QgQhbAOhJQAOhKAkgwQAZgiAVAAQAWABgDALQgBAGgUAeQg0BSgLBTQgGArAbBWQATBAgaADIgCAAQgZAAgQhZg");
	this.shape.setTransform(-0.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AgIDZQgHAAgGgGQgOgPgKgpIgGggQgRheAPhPIAAgBQAMhAAcgwIALgRQASgdAQgGQAHgCAFABQAHAAAEACQAIAEgCAIQgBAFgHAMIgNAWQgiA4gPA0QgLAigDAhQgFAtAXBPIAEALQAHAZABATQACARgHAGQgDADgGAAIgBAAg");
	this.shape_1.setTransform(-0.7,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AgHDlQgHAAgHgIQgOgQgKgqIgHgiQgQhfAQhXIAAAAQAMhCAcg1IALgSQATggAPgFQAHgCAGABQAGABAEADQAHAEgDAKQgBAFgHAMIgNAXQgjA+gOA0QgLAkgDAjQgEAyAXBQIADAMQAHAaADAUQACATgHAGQgDACgDAAIgEgBg");
	this.shape_2.setTransform(-0.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AgHDxQgGgCgHgHQgPgTgKgrIgHgjQgRhhASheIAAAAQANhEAcg5IAKgTQAUglAPgEQAHgBAGABQAGACADAEQAGAEgDALQgCAGgHAMIgNAZQgjBDgOA1QgKAlgDAlQgEA3AXBSIAEAMQAHAaAEAXQADAVgIAFQgDABgDAAIgGgBg");
	this.shape_3.setTransform(-0.6,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AgGD9QgHgDgHgIQgPgVgKgrQgFgSgDgTQgQhjAThlIAAAAQANhFAdg+IAJgUQAVgpAOgDQAIgBAFACQAHACACAFQAFAFgEAMIgIATIgNAaQglBJgNA1QgKAngDAnQgDA8AXBTIAEANQAGAaAGAZQADAXgIAEIgFABQgDAAgEgCg");
	this.shape_4.setTransform(-0.6,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AgFEJQgHgDgHgJQgQgXgKgtIgIgmQgRhlAVhsIAAAAQANhHAdhCIAJgVQAWgsANgDQAJgBAFADQAGACACAGQAEAGgEANIgJAUIgNAbQglBOgNA2QgKAogCAqQgDBBAXBUIAEAOQAHAaAGAcQAFAYgJADIgFABQgDAAgFgDg");
	this.shape_5.setTransform(-0.6,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AgEEVQgHgEgHgKQgQgZgLgtIgIgoQgRhnAWhzIAAAAQAOhIAdhHIAJgXQAWgvAMgCQAKgBAFADQAGADACAHQACAHgFAOQgCAIgGAMIgNAdQgmBTgMA2QgKArgCAsQgCBGAWBUIAEAPIAOA5QAGAZgKAEIgDAAQgGAAgEgEg");
	this.shape_6.setTransform(-0.6,7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AgEEhQgHgGgHgKQgRgagLgvQgFgUgDgVQgRhpAYh6QAOhKAdhMIAJgXQAXg0ALAAQAKgBAGAEQAGADAAAIQACAHgFAQIgJAVIgNAeQgmBZgMA2QgKAsgCAuQgCBLAXBWIAEAPIAPA8QAHAbgKADIgDAAQgGAAgGgFg");
	this.shape_7.setTransform(-0.5,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AgREcQgSgdgLgvQgfh7AeicQAPhLAehQQAdhQANAAQAWAAAAAQQABANgPAiQgyB1gNA/QgaB5AkCMIAUBOQAHAdgKACIgCAAQgMAAgPgXg");
	this.shape_8.setTransform(-0.5,10.3);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AgKEfQgUgcgOgwQgmh7AeicQAOhKAkhUQAihSAOAAQAWAAgCARQAAAMgSAkQg3B1gOBCQgaB6ArCJQAJAhAQAsQAKAdgKAEIgEAAQgMAAgPgWg");
	this.shape_9.setTransform(-1,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AgDEjQgWgcgRgvQgth9AeibQAOhJAphYQAnhVAOAAQAWABgDARQgBANgVAmQg8B0gOBFQgaB6AxCGQALAgATAtQAMAdgKAEIgEABQgMAAgQgUg");
	this.shape_10.setTransform(-1.6,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("AADElQgXgbgUgvQg0h+AdiaQAOhIAvhcQAshXAPAAQAVAAgEATQgCAMgYAoQhAB0gPBHQgaB7A4CEQAMAfAWAsQAOAegJAFQgCACgEAAQgLAAgSgUg");
	this.shape_11.setTransform(-2.1,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221F20").s().p("AAKEpQgZgbgWgvQg9h/AeiZQAOhIA0heQAxhbAPAAQAWABgGATQgEAMgaAqQhFB0gPBKQgbB7A/CBQAOAfAaAsQAQAdgJAHQgDACgEAAQgLAAgTgSg");
	this.shape_12.setTransform(-2.7,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F20").s().p("AAREsQgbgagZgvQhEiAAeiZQANhGA6hjQA2hdAQAAQAVABgHAUQgFALgdAsQhKB0gQBNQgaB8BEB+QARAfAdArQASAdgIAIQgEADgEAAQgLAAgUgRg");
	this.shape_13.setTransform(-3.2,11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221F20").s().p("AAZEvQgfgZgbgvQhLiBAeiZQANhFBAhmQA6hgAQAAQAVABgJAUQgFAMggAuQhPB0gQBQQgaB8BKB7QATAeAgArQAUAegIAIQgDAEgGAAQgLAAgTgQg");
	this.shape_14.setTransform(-3.8,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221F20").s().p("AAgEyQghgZgegvQhSiCAdiYQANhEBGhqQA/hiARAAQAVAAgLAWQgGALgjAwQhTB0gRBSQgbB9BSB4QAUAeAjAqQAXAegIAKQgDAFgHAAQgLAAgUgPg");
	this.shape_15.setTransform(-4.3,11.7);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(85).to({_off:false},0).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(55).to({_off:false},0).wait(7).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(22).to({_off:false},0).wait(42).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-20.4,12.3,41);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.3).p("ABvg1QgNgMgUgKQgTgKgSgDQAKgIAAgIQgBgMgagHQgagHgjAEQgkADgYALQgZAMABAMQACALAUAHQgzAiATBZQAKAwAyASQAqAQAygKQAqgIAPgZQAOgYgHguQAdAMAPgOQAMgMgGgUQgFgWgTgTg");
	this.shape.setTransform(0,0,0.92,0.92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AhHB3QgygSgKgwQgThZAzgiQgUgHgCgLQgBgMAZgMQAYgLAkgDQAjgEAaAHQAaAHABAMQAAAIgKAIQASADATAKQAUAKANAMQATATAFAWQAGAUgMAMQgPAOgdgMQAHAugOAYQgPAZgqAIQgUAEgSAAQgdAAgZgKg");
	this.shape_1.setTransform(0,0,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-13.3,27.2,26.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#977639").s().p("AgTCUQhJhKgDhOQgDhOBEhEQA4g7ArgCQAOAAgEAPQgCAHgRAjQgpBTACA/QADA8AvBcQAUAnADAKQAGASgPABIgCAAQgoAAg+hAg");
	this.shape.setTransform(18.6,0.7,0.92,0.92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#977639").s().p("Ag2B3QgLgBAVgeQAfgrAEgjQADgigUg4QgOgoAMABQAYADAfAqQAkAwgFArQgEAsguAhQghAagYAAIgFgBg");
	this.shape_1.setTransform(45.2,19.2,0.92,0.92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#977639").s().p("AgTBXQASgxgFgjQgEgigfgyQgWgjALgCQAVgDAmAiQArAmAGAsQAGArghAqQgcAkgWADIAAAAQgKAAAMggg");
	this.shape_2.setTransform(44.5,-19.7,0.92,0.92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B1833D").s().p("AAFGgQkQg2h4h/QhghkAJiOQAOkEEphuQDAhIEbAAQBUAAA6AFQAIABAGAHQAFAIgCAIIgZB9QgZCYgCCRQgBBhAcCsQAOBWAPBEQACAJgGAIQgGAHgIAAQgaABgpAAQjQAAixgigAidlnQkcBqgOD4QgPEEFeBtQDVBDEpAAIBCgBQgPhDgOhXQgdiuABhkQACiUAaiaIAZh8Qg4gGhUAAQkYAAi9BHg");
	this.shape_3.setTransform(29.9,0,0.92,0.92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F5EE").s().p("AgJGJQnOhhARktQARk7G+hUQDfgpDcAVIgZB8QgZCagCCVQgBBjAcCuQAPBXAOBDQgtACgtAAQi9AAi6gng");
	this.shape_4.setTransform(29.9,0,0.92,0.92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#977639").s().p("AlQAYQgJgKAAgNQAAgMAJgIQAKgKAMAAIJ0gDQANAAAJAJQAKAKAAANQAAAMgJAIQgKAKgNAAIpzADQgNAAgKgJg");
	this.shape_5.setTransform(-41.9,0.9,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-41.4,147.4,82.9);


// stage content:
(lib.Roleplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t_right_hand
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(206.5,328.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-26.8,x:215.8,y:328.1},8).to({regY:0.1,scaleX:1,scaleY:1,rotation:-63.9,x:242.8,y:328.8},7).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-81.7,x:257.6,y:330.9},7).to({startPosition:0},42).to({regX:0,scaleX:1,scaleY:1,rotation:-63.9,x:242.8,y:328.8},7).to({regY:0,scaleX:1,scaleY:1,rotation:-26.8,x:215.8,y:328.1},7).to({scaleX:1,scaleY:1,rotation:0,x:206.5,y:328.4},8).wait(54));

	// happy_mask
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.1,318,1,1,0,0,0,-33.4,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-33.5,scaleX:1,scaleY:1,rotation:-27.6,x:210.3,y:321.8},8).to({scaleX:1,scaleY:1,rotation:-65.6,x:235.1,y:327.8},7).to({scaleX:1,scaleY:1,rotation:-84.2,x:248.6,y:332.9},7).to({startPosition:0},42).to({scaleX:1,scaleY:1,rotation:-65.6,x:235.1,y:327.8},7).to({scaleX:1,scaleY:1,rotation:-27.6,x:210.3,y:321.8},7).to({regX:-33.4,scaleX:1,scaleY:1,rotation:0,x:203.1,y:318},8).wait(54));

	// t_right_arm
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.3,283.3,1,1,0,0,0,4.2,-19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-3.9,regY:11.7,rotation:-1.5,x:202.9,y:314.3,startPosition:1},0).wait(1).to({rotation:-2.9,x:203.7,y:314.5,startPosition:2},0).wait(1).to({rotation:-4.4,x:204.5,y:314.6,startPosition:3},0).wait(1).to({rotation:-5.9,x:205.3,y:314.8,startPosition:4},0).wait(1).to({rotation:-7.3,x:206.2,y:314.9,startPosition:5},0).wait(1).to({rotation:-8.8,x:207,y:315,startPosition:6},0).wait(1).to({rotation:-10.3,x:207.8,y:315.1,startPosition:7},0).wait(1).to({rotation:-11.7,x:208.6,startPosition:8},0).wait(1).to({rotation:-15,x:210.4,startPosition:9},0).wait(1).to({rotation:-18.2,x:212.2,startPosition:10},0).wait(1).to({rotation:-21.4,x:213.9,y:314.9,startPosition:11},0).wait(1).to({rotation:-24.6,x:215.7,y:314.7,startPosition:12},0).wait(1).to({rotation:-27.8,x:217.5,y:314.3,startPosition:13},0).wait(1).to({rotation:-31.1,x:219.2,y:313.9,startPosition:14},0).wait(1).to({rotation:-34.3,x:220.9,y:313.3,startPosition:15},0).wait(1).to({rotation:-35,x:221.3,y:313.2,startPosition:16},0).wait(1).to({rotation:-35.6,x:221.6,y:313,startPosition:17},0).wait(1).to({rotation:-36.3,x:222,startPosition:18},0).wait(1).to({rotation:-37,x:222.3,y:312.8,startPosition:19},0).wait(1).to({rotation:-37.7,x:222.7,y:312.7,startPosition:20},0).wait(1).to({rotation:-38.4,x:223,y:312.5,startPosition:21},0).wait(1).to({rotation:-39,x:223.3,y:312.4,startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({rotation:-38.4,x:223,y:312.5,startPosition:65},0).wait(1).to({rotation:-37.7,x:222.7,y:312.7,startPosition:66},0).wait(1).to({rotation:-37,x:222.3,y:312.8,startPosition:67},0).wait(1).to({rotation:-36.3,x:222,y:313,startPosition:68},0).wait(1).to({rotation:-35.6,x:221.6,startPosition:69},0).wait(1).to({rotation:-35,x:221.3,y:313.2,startPosition:70},0).wait(1).to({rotation:-34.3,x:220.9,y:313.3,startPosition:71},0).wait(1).to({rotation:-31.1,x:219.2,y:313.9,startPosition:72},0).wait(1).to({rotation:-27.8,x:217.5,y:314.3,startPosition:73},0).wait(1).to({rotation:-24.6,x:215.7,y:314.7,startPosition:74},0).wait(1).to({rotation:-21.4,x:213.9,y:314.9,startPosition:75},0).wait(1).to({rotation:-18.2,x:212.2,y:315.1,startPosition:76},0).wait(1).to({rotation:-15,x:210.4,startPosition:77},0).wait(1).to({rotation:-11.7,x:208.6,startPosition:78},0).wait(1).to({rotation:-10.3,x:207.8,startPosition:79},0).wait(1).to({rotation:-8.8,x:207,y:315,startPosition:80},0).wait(1).to({rotation:-7.3,x:206.2,y:314.9,startPosition:81},0).wait(1).to({rotation:-5.9,x:205.3,y:314.8,startPosition:82},0).wait(1).to({rotation:-4.4,x:204.5,y:314.6,startPosition:83},0).wait(1).to({rotation:-2.9,x:203.7,y:314.5,startPosition:84},0).wait(1).to({rotation:-1.5,x:202.9,y:314.3,startPosition:85},0).wait(1).to({rotation:0,x:202.2,y:314.1,startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1));

	// sad_mask
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(321.1,272.1,1,1,0,0,0,-17.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:77.9,x:321,y:272},22).to({startPosition:0},42).to({rotation:0,x:321.1,y:272.1},22).wait(54));

	// t_left_hand
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(321.2,272.1,1,1,0,0,0,-38.7,29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:29.1,rotation:77.9,x:321.1},22).to({startPosition:0},42).to({regY:29.2,rotation:0,x:321.2},22).wait(54));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B64F").s().p("AigA8QgZAAgSgRQgRgSAAgZQAAgYARgSQASgRAZAAIFBAAQAZAAASARQARASAAAYQAAAZgRASQgSARgZAAg");
	this.shape.setTransform(523.6,151.3,0.92,0.92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2B64F").s().p("AigA8QgYAAgSgRQgSgSAAgZQAAgYASgSQASgRAYAAIFAAAQAaAAASARQARASAAAYQAAAZgRASQgSARgaAAg");
	this.shape_1.setTransform(25.8,151.4,0.92,0.92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AF3033").s().p("EgIQggNINzAAIgIDbQgSEJgxDjQieLWmZBMQg2AKBfBJQAhAaBkBBQFnDqCyRXQBYIrARH9IwhAbg");
	this.shape_2.setTransform(58.5,199.2,0.92,0.92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C2D2A").s().p("AgnHUQs0gZknnKQhciPgdipQgIg1gCgyIAAgmMAoLAAAIgDAqQgGA1gOA5QgrC2hpCVQiSDRj4BzQkaCCmQAAIhOgBg");
	this.shape_3.setTransform(129.3,52.7,0.92,0.92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF3033").s().p("AoQfzQARn9BYorQCyxXFnjqQBphFAcgWQBfhJg2gKQmZhMierWQgxjjgSkJIgIjbINzAAMAAABAbg");
	this.shape_4.setTransform(489.7,199.2,0.92,0.92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9C2D2A").s().p("ArQFTQj3hziTjRQhpiVgri2QgOg5gGg1IgDgqMAoKAAAIABAmQgCAygJA1QgcCphcCPQkmHKs1AZIhOABQmPAAkbiCg");
	this.shape_5.setTransform(418.9,52.7,0.92,0.92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D2825").s().p("AgnHUQs0gZknnKQhciPgcipQgJg1gCgyIABgmMAoKAAAIgDAqQgGA1gOA5QgrC2hpCVQiSDRj4BzQkaCCmQAAIhOgBg");
	this.shape_6.setTransform(262.4,52.7,0.92,0.92);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C55C64").s().p("AhWAcQgjgXgJggQgFgSADgEQACgDAOADQA9ANA3gDIB5gNQAMgBABAEQABADgEARQgIAgghAXQgkAbgzAAIgCAAQgyAAglgZg");
	this.shape_7.setTransform(280.5,277,0.92,0.92);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AA5ANQgdgOgZgEQgZgEggAGQgXADABgCQABgHAXgHQAbgHAeAFQAeAEAYAPQAUANgCAHIgBAAQgEAAgPgIg");
	this.shape_8.setTransform(301.8,239.3,0.92,0.92);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AhKAdQgCgHARgQQAVgSAdgKQAcgJAdAEQAZAEACAHQABACgYgBQghgCgYAIQgYAIgaATQgPALgDAAIgBAAg");
	this.shape_9.setTransform(248.7,242.5,0.92,0.92);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AgaAeQgMgLgCgRQAAgPALgNQALgMARgBQAPgBANALQAMALABARQACAQgMAMQgLANgRABIgCAAQgPAAgLgLg");
	this.shape_10.setTransform(302.9,255.9,0.92,0.92);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("AgaAeQgNgLgBgRQAAgQALgMQALgNARgBQAPAAANALQANALAAARQABAPgLANQgLANgRAAIgCABQgPAAgLgLg");
	this.shape_11.setTransform(250,261.3,0.92,0.92);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3753A").s().p("AmoGgQjMi7AAkJQAAi1BoiaQBliVCqhRQh2BXhDB+QhFCDAACSQAAEDDFC4QDFC4EWAAQCEAAB6guQB1gtBdhRQhhB4iRBEQiWBGipAAQkfABjNi7g");
	this.shape_12.setTransform(261.8,278.1,0.92,0.92);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA983E").s().p("AnsHEQjMi7AAkJQAAkIDMi7QDNi7EfAAQEhAADMC7QDMC7AAEIQAAEJjMC7QjMC7khAAQkfAAjNi7g");
	this.shape_13.setTransform(268.1,274.8,0.92,0.92);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E914D").s().p("AgZgqIAzgJIgFBlIgmACg");
	this.shape_14.setTransform(257.9,213.4,0.92,0.92);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3E914D").s().p("AlNBkQg+gXgngWQgngWAkAOQAzAUBJgUQA1gPBbgrICfhNQBdgqBKgNQCmgdBDAZQA5AUAIBHQAHA/iLBBQiIA/i1AVQgaADgeAAQh+AAidg7g");
	this.shape_15.setTransform(227.7,204.9,0.92,0.92);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221F20").s().p("AACDQQgcAAgegFQgegFgLgGQgOgIgEguIgBg8IgFkLQgBgNAPgDQAFgBAggBQAFASASCXQAQCDANAHQAsAaBLAnQAsAcgxAIQgfAGgUABIgQAAIgbAAg");
	this.shape_16.setTransform(297.2,344.6,0.92,0.92);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221F20").s().p("AAlDVIgpgDQgegDgdgIQgdgIgLgHQgNgJABguIAFg8IATkKQACgOAPgBIAkACQADARAECZQAECEAMAJQApAdBHAuQApAggxAEQgWABgRAAIgNAAg");
	this.shape_17.setTransform(260.7,348.4,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(140));

	// t_left_arm
	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(321.1,272.1,1,1,0,0,0,-21.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-21,rotation:77.9},22).to({startPosition:0},42).to({regX:-21.1,rotation:0},22).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280.5,209.5,538.5,379.5);
// library properties:
lib.properties = {
	id: '5D994484550C4AC9967B6E7E98ED3343',
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
an.compositions['5D994484550C4AC9967B6E7E98ED3343'] = {
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