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



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.8).p("ACih3Qghglg6gTIABgHQgCgRgqgIQgpgIg5AGQg6AGgnARQgoAQACASQACARAsAIQgaAfgMApQgMArAFAsQAIBSA4A1QA3A1BFgIQBqgLANg2QAFgVgFgnQgHgvgDgcQgBgMgEgWQAeAaAeAJQAeAJAQgPQATgQgKglQgJglgggkg");
	this.shape.setTransform(0.5,-0.2,1,1,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AiMCnQg4g1gIhSQgFgsAMgrQAMgpAagfQgsgIgCgRQgCgSAogQQAngRA6gGQA5gGApAIQAqAIACARIgBAHQA6ATAhAlQAgAkAJAlQAKAlgTAQQgQAPgegJQgegJgegaQAEAWABAMQADAcAHAvQAFAngFAVQgNA2hqALIgRABQg7AAgwgug");
	this.shape_1.setTransform(0.5,-0.2,1,1,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCFFCC").s().p("AirBJIgBAAQAOglAageIAQgRQAVgVAXgOQAagQAdgGQA0gMA4AXIAKAFQAQAHAQALIAUAOIAUAQQgSAMg+AUQg0AQgmAIQgnAIgtAHQgvAGgdAAIgOAAg");
	this.shape_2.setTransform(113,8.6,1,1,105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993333").s().p("AjzCgQgOglgLgrIgFgXIABAAIA1iCIDsBlIBPi7IChBGIAAAAQAMApAEAhIABAEIiOg7IhPC7IjthlQg5CQgCAAIAAAAg");
	this.shape_3.setTransform(76.5,6.7,1,1,105);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("ABaG4QgXhYgnizQgbh7gFgBQhNgLhLhLQhMhOgqhyQABACA6iSIDtBmIBPi9ICOA7IgBgEIADAQQAWCTgsB5QgiBhg/ApQgFAEAqB0QA/CuAaBQQB3FyhaAfQgHACgHAAQhUAAhdligAkiqFIALgcQAeACA8gIQAugHAogIQAlgIA1gQQA9gUASgNIgUgQQAWAQAVAWQBgBhApCZIihhGIhOC8IjthlIg1CCQglitAyiMgAizsZQgXAOgVAVIgQASQAagiAigTg");
	this.shape_4.setTransform(38.1,-0.4,1,1,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-22.3,165.9,56.2);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(1.8).p("Ai2hKQAYgsA1geIgDgGQgCgSAogQQAngRA5gGQA6gGAqAIQAqAIABASQACARgpARQAgAZAUAmQAVAnAFAtQAIBRgrA/QgrA/hGAIQhpALgZgyQgJgUgDgnQgCgwgDgbQgCgMgBgYQgXAhgcAPQgbAPgTgLQgWgNABgmQACgmAYgpg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9ECEE").s().p("AhGCuQgJgUgDgnQgCgwgDgbIgDgkQgXAhgcAPQgbAPgTgLQgWgNABgmQACgmAYgpQAYgsA1geIgDgGQgCgSAogQQAngRA5gGQA6gGAqAIQAqAIABASQACARgpARQAgAZAUAmQAVAnAFAtQAIBRgrA/QgrA/hGAIQgTACgRAAQhKAAgUgpg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCFFCC").s().p("AirBJIgBAAQAOglAageIAQgRQAVgVAXgOQAagQAdgGQA0gMA4AXIAKAFQAQAHAQALIAUAOIAUAQQgSAMg+AUQg0AQgmAIQgnAIgtAHQgvAGgdAAIgOAAg");
	this.shape_2.setTransform(-111.9,23.6,1,1,-85.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993333").s().p("AjzCgQgOglgLgrIgFgXIABAAIA1iCIDsBlIBPi7IChBGIAAAAQAMApAEAhIABAEIiOg7IhPC7IjthlQg5CQgCAAIAAAAg");
	this.shape_3.setTransform(-75.7,18.7,1,1,-85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("ABaG4QgXhYgnizQgbh7gFgBQhNgLhLhLQhMhOgqhyQABACA6iSIDtBmIBPi9ICOA7IgBgEIADAQQAWCTgsB5QgiBhg/ApQgFAEAqB0QA/CuAaBQQB3FyhaAfQgHACgHAAQhUAAhdligAkiqFIALgcQAeACA8gIQAugHAogIQAlgIA1gQQA9gUASgNIgUgQQAWAQAVAWQBgBhApCZIihhGIhOC8IjthlIg1CCQglitAyiMgAizsZQgXAOgVAVIgQASQAagiAigTg");
	this.shape_4.setTransform(-36.6,18.5,1,1,-85.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-23,163.8,70.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r_hand
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-115.3,83.5,1,1,-100.5,0,0,-5.8,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:-173.9,y:112.7},5).to({_off:true},1).wait(26));

	// r_arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AjqF8QhsgtgBh6QgCjyAmjGQAiixAeAAQAiAAAEApQAEAggNBSIgcCoQgPBvAABdQABDgEsgyIDOguQBegWABAaQAAAihrAuQhuAvh+ARQgyAGgrAAQhUAAg7gZg");
	this.shape.setTransform(-142.3,58.6,1,1,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AAMGcIgDAAQh4AEhLgxQhcgwgIh2IAAgBQgRjoAbjHQAGgsAHgiQARhbAUgKQAbgHAJAYIABAEQAIAIAAArQADANAAATIgCAgQgIBWgGAoIgCAKQgLBtADBZQAECHBiAlQA6AaBagDQAHAPChgcQA5gJAQAQQAFADABAGQAFAqhQAwIgDADQgiAagnAUQgUALgVABQgbAEgdAAIghgBg");
	this.shape_1.setTransform(-147.8,62.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("ABVG5QglgBgngSIgDgBQhggUg9hCQhIg6gIhyIAAgBQgRjfAejHQAGgpAHgjQAQhSATgTQAWgLAJANIACABQALgGADAgQAHAJACASQABAPgBAQQgGBIgLA0IgCALQgOBqAABYQgBCABKAwQAtAlBHAUQAHAgB9ACQAtAEAOAVQAEAEABAGQAHAyg8AtIgCADQgZAggiAXQgMAJgOAAQgGAAgHgCg");
	this.shape_2.setTransform(-154.4,67.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("ABFHfQgfgJghghIgCgCQhJgqgvhUQg0hEgIhuIAAgCQgQjXAgjFQAGgnAIgjQAPhKARgbQASgQAJACIABgBQAPgVAHAVQALAGAEARQACANgBARQgEA5gPBCIgCAKQgRBngFBVQgGB8A0A7QAgAwAyArQAJAwBZAiQAgAOAMAcQADAFABAFQAJA6gnAqIgCADQgQAlgdAaQgJAJgKAAQgIAAgJgFg");
	this.shape_3.setTransform(-161,71.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AAzIMQgYgSgaguIgBgDQgzhCghhlQgghOgIhqIAAgDQgPjNAijFQAGglAIgjQAOhBARgkQANgUAJgKIABgDQATgjAJAJQAPADAFAPQAEAMAAASQgDAqgSBPIgCALQgUBjgJBUQgLB2AdBHQASA6AfBCQAKBBA1BAQATAaAKAjIADAKQAMBCgUAmIgBAEQgHAqgYAeQgGAJgJAAQgIAAgLgKg");
	this.shape_4.setTransform(-167.5,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AgUI6QgSgbgQhCQgmifgCj1QgCjqBFjiQAahWAbg5QAbg2ANAAQAhAAgEAsQgCAcgdBaQhJDsABCQQABCfAeEAQALBTgCAmQgCAzgUAfQgGAJgGAAQgIAAgKgPg");
	this.shape_5.setTransform(-172.1,78.5,1,1,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(26));

	// l_hand
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(217.3,78.9,1,1,0,0,0,0,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,rotation:114.5,x:150.9,y:81.7},5).to({_off:true},1).wait(26));

	// body
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("Ah9BDQgGgKAigbQAhgbA0gaQA0gbAogMQApgMAGALQAEAIgnAQQhGAegWALQgVALhAAoQgaAQgKAAQgDAAgBgCg");
	this.shape_6.setTransform(-38.7,-79.8,1,1,-3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("ABXA1QhBgogWgLQgUgKhHgfQgngQAFgIQAFgLApAMQAoAMA0AbQA1AbAhAaQAhAbgGAKQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgJAAgagQg");
	this.shape_7.setTransform(106.4,-96.6,1,1,-3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBA8A7").s().p("A7cGXQnAmdkBrEIC/ABQgIDBBoBeQA3AxBRAQQBOAQBhgRQghCdAXB2QAXB5BQBBQBBA1BeAIQBdAHBwgiQgPCZAiBvQAkBzBTA3QBVA4B5gOQB1gNCJhMQAUBoAtBHQAvBKBGAhQBuA1CSg1QCOg0CWiNQAyBvBDBCQBGBEBVANQCBAWCIhuQCDhpBtjNQBRBdBVArQBYAtBWgMQCLgUBjifQBgibAmj5QByAyBgADQBlADBIgxQBrhGAailQAaigg2jYQBdgBBHgcQBIgcAtg3QBchygrjFIDpgYQjTLenYHzQqnLOw5AnQhAADhBAAQvxAAp9pOg");
	this.shape_8.setTransform(13.7,-36.5,1,1,-3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AiIAnQhBgigDgfIBBAlQBPAkBFgIQBHgHBGgzQAigaAVgYQADAfg3AuQg/A1hOAIIgZABQg/AAg8gfg");
	this.shape_9.setTransform(47.2,-27.5,1,1,-3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AgyAzQgWgVAAgeQAAgdAWgWQAUgVAeAAQAeAAAVAVQAWAWAAAdQAAAegWAVQgVAWgeAAQgeAAgUgWg");
	this.shape_10.setTransform(104.3,-67.5,1,1,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("AgyAzQgWgVAAgeQAAgeAWgUQAUgWAeAAQAfAAAUAWQAWAUAAAeQAAAegWAVQgUAWgfAAQgeAAgUgWg");
	this.shape_11.setTransform(-29.9,-46.5,1,1,-3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E99A95").s().p("A7dGXQm/mckBrFQRvAMcJh9QTGhVL9hUQjULenXHzQqnLOw5AoQhAACg/AAQvyAAp/pOg");
	this.shape_12.setTransform(12.6,-37.1,1,1,-3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#89C49E").s().p("AzrStQkKjriQkdQiUkmAAk8QAAkbB5kMQB0kDDcjfQPsgzSihsQJSg2GJgtQAFAYgQBpQgVCCgpCYQh4G4jkF5Qk1IAnMEvQo7F4r+AcQg/ACg+AAQjaAAjOgcg");
	this.shape_13.setTransform(87.3,-20,1,1,-3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#76B286").s().p("A01OXQnvkLlWniQj/lmh/mVQgtiSgPhrQgNhhASABUASzAA5AhSgCkQQqhSM5hdQAGAXgRBqQgUCCgpCYQh4G4jkF5Qk1IAnNEvQo6F4sAAcQhBACg+AAQrYAAo3kyg");
	this.shape_14.setTransform(6.3,-14.7,1,1,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},6).wait(26));

	// l_arm
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221F20").s().p("ACKIvQgagbgNgxQgJglgHhTQgWkBghicQgciNh6jXQguhSgJgcQgNgpAhgHQANgDAlAvQAoAyArBPQBxDPAvDkQAxDxgECjQgCBEgMAeQgHATgKAAQgFAAgHgGg");
	this.shape_15.setTransform(204.2,48.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221F20").s().p("ABPIsIgDgDQgLgRAKgQIAEgXQAMgSAHgqQAGgPAGgSQAmhvgCiLQgFh2gpheQgohohhh/Qgtg+hBhHIgjgnQgwgwgCgRIAAgDQgHgiAugBQAPAAAZAWIAZAUQA9AwA7BLIAYAdQC0DMAgDzIADAnQAJB/gSBaQgNBMgeAyIgSAgQgQAigTARQgHAIgGAGQgKAJgJAAQgIAAgHgJg");
	this.shape_16.setTransform(195.2,44);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221F20").s().p("AADIpIgBgFQgHgQAegHQAJgGAJgIQAggKASgfQAPgMANgPQBYhbAJixQADiEhBhuQg8hxiHiAQg8g9hZhGQgYgUgYgSQhIgyAFgPIAAgCQgBgaA8AFQASACAeATIAeATQBTAvBNBHIAfAcQECDWAUERIABAuQgCCXgtBdQgkBNg9AlQgRAMgSAJQgeAWggAEIgUAGIgNABQgSAAgJgNg");
	this.shape_17.setTransform(187.8,39.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#221F20").s().p("AAAI8IgbgDQgjgFgKgTIgBgFQgEgQA0ABQARgBAOgEQAygCAggVQAXgHAUgMQCJhJAWjUQALiShaiAQhRh6isiBQhMg7hwhFIg9glQhfg1AKgLIAAgCQAHgTBIAMQAYAEAgARQATAHATAKQBnAtBdBCIApAdQFQDgAIEwQAAAZgCAaQgNCwhIBfQg6BPhbAWQgbAIgaADQgZAFgZAAQgUAAgTgDg");
	this.shape_18.setTransform(180.4,35.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#221F20").s().p("AA0JUQg6gBg7gVIghgMQgrgRgHgSIgBgHQAAgPBJAKQAYACAWABQBEAGAsgKQAfgDAcgJQC6g2Aij5QATighyiQQhliEjSiCQhbg6iJhEIhJgkQh3g3ARgIIgBgBQAOgLBWASQAbAGAlAOIArAQQB9AsBuA9IAxAcQGeDrgEFOQgBAdgDAdQgYDHhkBiQhQBRh6AIIgjACQgSAAgRgCg");
	this.shape_19.setTransform(173.1,32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#221F20").s().p("ABmJ0Qh2gEhyg1QhmgwAHgbQAEgPBdATQCBAaBLABQEvABA0lHQA0lGoUkZQiGhHjahYQiQg5AXgFQAbgFClAsQDQA5CrBVQIXEKhBGYQgjDgh/BkQhfBNiLAAIgVgBg");
	this.shape_20.setTransform(165.9,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.9,-154,522.8,301.3);


// stage content:
(lib.watermelon_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(260.9,181.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7},5).to({startPosition:0},6).to({rotation:12.5},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:11,x:261,y:181.5,startPosition:1},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:9.7,x:260.9,y:181.4,startPosition:0},1).to({rotation:0},5).to({startPosition:1},1).to({startPosition:0},4).to({rotation:-3.7},3).to({rotation:0},2).wait(1));

	// l_leg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVAHgrQAZifgFnNIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaQAFANAEA/QAWHcAkDlQASByAOASQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape.setTransform(346.8,283.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVAdhVQAtixgvmRIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaQAFANAVBpQAkGyAZDZQAMB+AAASQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_1.setTransform(346.8,283.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVA0h+QA/jDhYlWIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaQAFANAmCSQAxGJAQDOQAECJgNASQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_2.setTransform(346.8,283.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVBLinQBSjWiCkaIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaQAFANA3C7QA+FgAFDDQgDCUgZASQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_3.setTransform(346.8,283.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVBhjRQBljoirjeIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaIBODyQBLE2gGC3QgJCggnASQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_4.setTransform(346.8,283.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVB4j6QB3j7jUiiIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaIBfEbQBYENgQCsQgQCrg0ASQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_5.setTransform(346.8,283.4);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVCGj8QCGj8jxifIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaIBnEaQBgEMgRCsQgRCrhCAUQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_6.setTransform(346.8,283.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVCVj9QCUj+kOicIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaIBvEaQBoELgSCrQgSCshQAVQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_7.setTransform(346.8,283.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVCkj/QCjj/ksiZIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaIB2EZQBxEKgTCsQgTCrheAXQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_8.setTransform(346.8,283.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F20").s().p("AhpLGQgsgBgggPQgsgVCOj8QCNj9kAieIgKmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaIBrEaQBkEMgRCrQgSCshJAUQFzBoiGA4QgxAUhrAKQhIAHhCAAIggAAg");
	this.shape_9.setTransform(346.8,283.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221F20").s().p("AhhLGQgtgBgfgPQgtgVAHgrQAaifgNnNIgRmtQgYhpgNg/QgZh3AggDIBNEeQAkgDAKAaQAFANADA/QAXHcArDlQAWByARASQFzBoiGA4QgwAUhsAKQhIAHhCAAIgfAAg");
	this.shape_10.setTransform(346.1,283.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221F20").s().p("AhaLGQgsgBgggPQgsgVAHgrQAZifgUnNIgZmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaQAFANAEA/QAWHcAzDlQAaByAVASQFzBoiGA4QgxAUhrAKQhJAHhBAAIggAAg");
	this.shape_11.setTransform(345.3,283.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221F20").s().p("AhSLGQgtgBgfgPQgtgVAHgrQAaifgcnNIggmtQgYhpgNg/QgZh3AggDIBNEeQAkgDAKAaQAFANADA/QAXHcA6DlQAeByAXASQF0BoiGA4QgwAUhsAKQhIAHhCAAIgfAAg");
	this.shape_12.setTransform(344.6,283.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F20").s().p("AhdLGQgtgBgfgPQgtgVAHgrQAaifgQnNIgWmtQgYhpgNg/QgZh3AhgDIBMEeQAkgDAKAaQAFANAEA/QAWHcAwDlQAXByATASQFzBoiGA4QgwAUhsAKQhIAHhCAAIgfAAg");
	this.shape_13.setTransform(345.7,283.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(20).to({_off:false},0).wait(5).to({_off:true},1).wait(4).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).wait(6).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(15));

	// r_leg
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221F20").s().p("AApKKQhZgBhRgKQgsgGgegRQgqgaALgqQBTi1AjhrQAmhzAIhkQAHhZgNiGIgok9QASjgAQBnQAIA0AFBhQBIAQAsBGQAxBOgHB7QgDA6ABCiQABBwgOBDQgNBDguBYQgmBKACAEQFmCOiKAqQgvAOhiAAIgNAAg");
	this.shape_14.setTransform(255.6,293.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221F20").s().p("AhtJuIgTgCQglgFgagNIgJgFQgogZALgqQBHijAhh9QAhhtAIhmQAFg+gChRIgFhLQAAgygbkBQAEg8AFgnQALgpAKAEQAGADAGAbQAJAdACAoIADBKQA5AbAjBFQAmBRgFBzQgDBDABCSQAABlgJBCIgBAHQgJBIgeBEIgDALQgWA+AIAGQDvBhgHAvQAFAWgtANQgoAKhJABIgpABQhMgChHgIg");
	this.shape_15.setTransform(255.2,295);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221F20").s().p("AhvJcIgSgCQglgGgagNIgHgFQgngZAKgpIAAAAQA8iRAfiOQAbhoAJhoQAFg+AAhOIgChKQADhGgSjiIAJhiQAOgbANAGQAIAFAHAWQAMAdACAmIABBIQArAlAYBDQAcBVgFBrQgDBMABCDQAABggGBBIAAAHQgFBRgUA4IABAJQgIAzAPAIQDzBlgjAsQgBATgqAKQgpAJhGAAIgoABQhKgChFgIg");
	this.shape_16.setTransform(255,296.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221F20").s().p("AAZJVQhJgChEgIIgRgCQgjgGgagOIgHgEQgmgZALgoIAAgBQAvh/AdigQAWhiAKhpQAGg+ABhMIABhHQAFhcgJjDIAJhgQARgOARAJQAKAGAHATQAQAcABAjIAABGQAbAvAPBCQARBZgEBjQgDBVABByQABBcgDBBIgBAHQAABagKAsIAEAHQAJAnAUALQD4Bog/AqQgIAOgnAIQgqAIhDAAIgmAAg");
	this.shape_17.setTransform(255.1,298.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#221F20").s().p("AAPJGQhGgChCgIIgRgCQgjgGgZgOIgGgEQgkgaAKgmIAAgBQAkhtAbiyQAQhdAKhqQAGg+AEhJIADhGQAIhwABilIAIhfQAVAAAUAMQALAHAIAPQAUAbAAAhIgCBEQAMA6AGBAQAHBcgDBbQgDBfABBiIABCXIAAAHIADCDIAIAGQAXAbAbANQD8BshcAoQgOAKgkAGQgqAGhAAAIgmgBg");
	this.shape_18.setTransform(255.3,299.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#221F20").s().p("AApI9QhZgBhRgKQgsgGgegRQgqgaALgqQAqicAqnKIAimtIAvAcQAuAkgCApQgaHcAMDnQAHBzALAUQFmCOiKAqQgvAOhiAAIgNAAg");
	this.shape_19.setTransform(255.6,300.9);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#221F20").s().p("AAtJCIgMAAQhTgBhNgJIgFgBQgqgGgcgQIgDgCQgngZAKgpIAAgBQAqibA0nRIAAgBIArmwIAFAAIApAYIAFAEQAqAigBAnIAAADQgbHiAEDkQACBsAGAdIARAOQFICEh4AqQgIADgJACQgvALhYAAIgIAAg");
	this.shape_20.setTransform(255.6,300.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#221F20").s().p("AAxJJIgMAAQhUgBhOgJIgGgBQgpgFgdgQIgDgCQgogZAKgqIAAgBQAqibA+nYIAAgBIA1m0IADgEIApAZIAFADQArAjgBAnIAAADQgaHpgGDiQgCBmABAlIAHARQFJCDhqAtIgSAGQguANhbAAIgHgBg");
	this.shape_21.setTransform(255.6,299.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#221F20").s().p("AApJRQhZgBhRgKQgsgGgegRQgqgaALgqQAqicBIneIBAnBIAvAcQAtAkgCApQgpL7gOB3QFmCOiKAqQgvAOhiAAIgNAAg");
	this.shape_22.setTransform(255.6,298.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#221F20").s().p("AAvJGIgMAAQhTgBhOgKIgFgBQgqgFgcgQIgDgCQgogZAKgqIAAAAQAqicA5nUIAAgBIAwmyIAEgCIApAYIAFAEQAqAigBAoIAAADQgaHlgBDjQAABpADAhIANAQQFICDhxArIgRAGQgvAMhZAAIgIAAg");
	this.shape_23.setTransform(255.6,300);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#221F20").s().p("AAoKKQhYgBhRgKQgxgGgYgOQgpgXAJgwQBdjBAmhvQAoh0AFhiQAEhQgSiGQgPhNgejqQASjgAQBnQAJA0AEBhQBJAQAsBGQAwBOgGB7QgDA1AACsQAAB0gOBEQgNBEguBSQgkBFACAEQFmCOiLAqQgvAOhhAAIgOAAg");
	this.shape_24.setTransform(255.7,293.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#221F20").s().p("AAoKKQhZgBhRgKQg1gHgSgKQgogVAGg1QBojNAph0QAphzAChgQAChHgYiGQgZh/gXizQASjgAQBnQAIA0AFBhQBIAQAsBGQAxBOgHB7QgCAwgBC2QgCB5gNBEQgOBEgsBNQgkBBACADQFmCOiKAqQgvAOhiAAIgNAAg");
	this.shape_25.setTransform(255.7,293.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#221F20").s().p("AAoKKQhZgBhRgKQg5gHgMgGQgogUAEg6QBzjZArh4QArh0gBhdQgBg/gciGQglivgQh9QASjgAQBnQAIA0AFBhQBIAQAsBGQAxBOgHB7QgCArgCDAQgCB+gOBEQgNBEgsBIQgjA8ACADQFmCOiKAqQgvAOhiAAIgNAAg");
	this.shape_26.setTransform(255.7,293.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#221F20").s().p("AAoKKQhYgBhRgKQgzgGgVgMQgpgXAIgyQBijHAohxQAoh0AEhhQADhLgViGQgUhmgbjPQASjgAQBnQAJA0AEBhQBJAQAsBGQAwBOgGB7QgDAzAACwQgBB3gOBEQgNBEgtBQQgkBDACADQFmCOiLAqQgvAOhiAAIgNAAg");
	this.shape_27.setTransform(255.7,293.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_14}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},1).wait(20).to({_off:false},0).wait(5).to({_off:true},1).wait(4).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(5).to({_off:false},0).wait(6).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,227.4,522.8,330.8);
// library properties:
lib.properties = {
	id: 'A9C090E601E64049A71DD44D0680A8DC',
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
an.compositions['A9C090E601E64049A71DD44D0680A8DC'] = {
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