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
(lib.welcome_page = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D4625").s().p("AvUEnQi1hEhzhBQgsgYgEgIQgDgIAqAQQCVA5DVg5QCcgqEJiBQGejLAzgWQEUh6DYgmQHjhVDEBHQBcAhAuBGQAoA+AMBnQALBdhqBjQhlBfi+BYQmOC4oPA9QhSAKhXAAQlwAAnIirg");
	this.shape.setTransform(547.7,1093.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D4625").s().p("ApdGqQhrgIh/AAQiIAAhjAJQhUAIhTADIhAACICFhbQCThkBBgjIBWgwICihbQC9hoBYgnIDyhsIBQgjQDqhkB9ghQDAgyCxgeQDvgoCYAHQCbAIBIBIQA2A3AOBkQADAYABAWQAGBVgYA0QgyBsi5BhIgNAGQjqB3j/BRQkSBWiuABIgPAAQj2AAm+ghgA0ZG4IAAAAIAAAAg");
	this.shape_1.setTransform(548.4,1091.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D4625").s().p("Ax7FrQBjjxDGimQDUiyGHiZQE3h5DfgmQDjgnDhAEQEjAEBGBWQBDBQAaA+QANAfAAAOQANBzhPBpQhMBkiOBFQjRBmhbAjQi2BFiOAAQj/ABnQgdQitgKiUAYQiuAchVBHQh6BlhUBRQAKhXAyh4g");
	this.shape_2.setTransform(558.2,1098.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D4625").s().p("Ax2JpQhLhnAXhnQAiiVBhieQBsiuCdiJQIFnCKvgnQEJgPDrCDQDoCBAxC3QATBlgHA4QgKBIg0AnQhcBFiFBMQiyBlhCgFQgjgDiwAEQiiADhZgMQjFgjh9gSQjoggh9AaQiRAeiFAvQjPBLhTBZQhABEAQBzQAHA5AVAsQgrgfgmgzg");
	this.shape_3.setTransform(559.3,1093.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D4625").s().p("AxsH7QhQivBrkWQA/ihCqiSQCiiLDhhfQDihgDsgdQD4gfDQAyQDWA0B/A0QB9A0BKBEQBDA9AvBfQAfBBAyCVQgSCwh1BwQhFBDh3A6QiOBGhtgDQiIgDh5giQiigtk+iMQk1iIkpA9Qh2AYhVAyQhPAvgWAyQgiBPAZBoQAMAzATAkQg9gfgohXg");
	this.shape_4.setTransform(562,1069);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D4625").s().p("AIUH8QikgTichHQhzg0iAhZQhghDkig1QkLgxhxALQhSAIi9AlIitAkQAsg+BUhYQCniuDKiCQEZi2Ezg/QGAhQGTBuQE6BWCmDlQBkCJAgCfQgjCDhEBTQgzA+hhBAQhMAxhpACIgFAAQhCAAjQgZg");
	this.shape_5.setTransform(554.2,1057);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#990033").ss(0.1,1,1).p("ASZCbQgMCXi4CPQisCGiiAOQh6ALkOiEQkqifh1gwQiTg9nDjeQmrjVAGAAQAAAABIgiQBdgrBmgpQFHiDEvhBQGphbE+A4QGNBFDQEnQBYB/AUBZQALAzgIBkg");
	this.shape_6.setTransform(560.7,1056.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D4625").s().p("AD/HcQkqifh1gwQiTg9nDjeQmrjVAGAAIBIgiQBdgrBmgpQFHiDEvhBQGphbE+A4QGNBFDQEnQBYB/AUBZQALAzgIBkQgMCXi4CPQisCGiiAOIgTABQh7AAj6h6g");
	this.shape_7.setTransform(560.7,1056.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D4625").s().p("AHbI0QhEgGilhBQiihAjBhgQnTjmjUi6Qi9imhaivQgcg2gPgxIgKgmIAnAhQAzAmA+AeQDFBfDjgYQD5gbF0AWQE8ATDNAmQDwAsB+BSQC/B7geDaQgYBhhKBbQhFBUhYAyQh7BHguARQhQAehaAAQgaAAgagCg");
	this.shape_8.setTransform(565.9,1060.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D4625").s().p("ACUHdQoBgll8jJQlwjCgRkbQgFhZAfhXIAfhFIAUBSQAgBgA6BGQC3DfF1h1QGUiAE6gyQD0goCLANQBnAKAYAEQBQAMA3AaQCZBHAUDDQAUDBi+COQhyBVijAzQg0AQiGAIQhKAFhOAAQhfAAhlgHg");
	this.shape_9.setTransform(565,1070.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D4625").s().p("AjIGxQkLgckGiSQjoiChxiVQhVhxAVhqQAHggAQgdIAPgVIgFArQgBA0ARAqQA1CFDZgTQBygKDRg+QBigdEphjQD+hVCGgjQDIg1BrACQCeAEAzAEQBhAJA6AYQCBA2A4DIQgLCuiRB9QhwBgixA2Qj6BNiBAaQi3AkirAAQhUAAhRgJg");
	this.shape_10.setTransform(563.6,1086.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D4625").s().p("AgSHQQjBgMlKhSQlNhTh2hDQhkg5hah+QgcgngYgpIgSgiIAnAXQAxAcAzAXQCkBKB5ACQByACGNi3IEmiLQCXhHA6gRQDhhDDKgjQEvg1BsAzQCEA+AeAjQAmAuAaCSQAZCGjhCQQioBti+A4QjJBIh9AnQjHA9iSAAIgngBg");
	this.shape_11.setTransform(553.1,1091.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).wait(2));

	// stem
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D4625").s().p("AhKh9ICVgbIgPErIhwAGg");
	this.shape_12.setTransform(643,1120.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(13));

	// tang
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D4625").s().p("AhAATQAYgkABgjQAAgYgKgVQgJgSgPgKICTgbIgPErIhwAGg");
	this.shape_13.setTransform(643.2,1120.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAFJfQhWAAhXgOQhWgOgigTQgpgXgKiGIgDivIgQsOQgBgoAsgIQALgCBfgDQAOAxAUCXIAjEmQAvGBAmAVQA3AgCLBHQBwA5ArAcQBAApABAYQABAchQANQhbAQg7ADQgVACg8AAIgsgBg");
	this.shape_14.setTransform(757.4,1542.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(3.7).p("AlDidQAjgkA8gcQA6gcA0gJQgggYACgYQAEglBMgTQBLgTBpAKQBoAKBHAhQBIAhgEAlQgDAgg8ATQCWBjg5EHQgeCLiRA1Qh7AuiUgdQh6gXgrhIQgrhHAViHQgnARgigBQgjgBgVgVQghgiAPg9QAQg/A4g4g");
	this.shape_15.setTransform(860.1,1480.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8ECEE").s().p("Ag9FsQh6gXgrhIQgrhHAViHQgnARgigBQgjgBgVgVQghgiAPg9QAQg/A4g4QAjgkA8gcQA6gcA0gJQgggYACgYQAEglBMgTQBLgTBpAKQBoAKBHAhQBIAhgEAlQgDAgg8ATQCWBjg5EHQgeCLiRA1QhLAchVAAQg1AAg6gLg");
	this.shape_16.setTransform(860.1,1480.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgfMGQgGg4ASiVQAcjiAGhMQAQjFgPijQgPilg0imQgahTg/iZQgthrABgiQABgvBFgBQAwgBA/CRQBJCqBMFNQBLFGhEGBQgaCQglBlQgjBfgWAAIgCABQg2AAgIhMg");
	this.shape_17.setTransform(861.5,1418.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#231F20").ss(3.7).p("AFEidQgjgjg8gdQg6gcg0gJQAfgYgCgYQgDglhMgTQhLgThpAKQhoAKhHAhQhIAgAEAlQADAgA8AUQiWBiA5EIQAdCLCRA1QB7AuCVgdQB6gYArhIQArhGgViHQAnARAigBQAjgBAVgVQAhgigQg9QgPg/g4g4g");
	this.shape_18.setTransform(483.9,1479.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8ECEE").s().p("AjSFbQiRg1gdiLQg5kICWhiQg8gUgDggQgEglBIggQBHghBogKQBpgKBLATQBMATADAlQACAYgfAYQA0AJA6AcQA8AdAjAjQA4A4APA/QAQA9ghAiQgVAVgjABQgiABgngRQAVCHgrBGQgrBIh6AYQg6ALg1AAQhVAAhMgcg");
	this.shape_19.setTransform(483.9,1479.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49331").s().p("AHqX4QE9jeB5kOQC3mXAWmNQAUl+iFlWQiClSkKkIQkMkLl8inQluigmIgVQl7gSlgByQDghzD2g7QD+g+EKAAQGfAAF6CTQFtCOEaECQEaEDCbFPQCgFbAAF7QAAFOh9E2Qh4EsjgD3QjdD2kqCkQkvCnlZBAQF0iZDwipg");
	this.shape_20.setTransform(728,1314.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EF6E31").s().p("AsZa5QltiOkakCQkakDiblPQiglbAAl8QAAl7CglbQCblPEakDQEakCFtiOQF8iTGdAAQGfAAF7CTQFtCOEaECQEaEDCbFPQCgFbAAF7QAAF8igFbQibFPkaEDQkaECltCOQl7CSmfAAQmdAAl8iSg");
	this.shape_21.setTransform(675.6,1315.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AggNRQgWAAgjhfQglhlgaiQQhEmBBLlGQBMlNBJiqQA/iQAwAAQBFABABAvQAAAigsBrQg/CZgbBTQgzCmgPClQgPCjAQDFQAGBMAbDhQATCXgGA3QgIBMg2AAIgCgBg");
	this.shape_22.setTransform(482.4,1417.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("ABrJvQgcgBhfgKQhXgIhVgXQhVgWgfgWQgngbADiGIAOiuIA6sMQADgoAtgEQALgCBeAHQAKAyAFCZQADBZAEDOQAKGEAkAZQAzAkCEBUQBqBEApAgQA8AvgCAYQgCAchRAGQhGAFgzAAIgegBg");
	this.shape_23.setTransform(636.7,1542.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2162.2,1906.3,489.1,558);
// library properties:
lib.properties = {
	width: 3494,
	height: 1718,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;