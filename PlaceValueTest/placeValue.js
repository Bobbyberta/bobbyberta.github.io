(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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


(lib.UIBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("EgpPgD+MBSfAAAIAAH9MhSfAAAg");
	this.shape.setTransform(264,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgpPAD/IAAn9MBSfAAAIAAH9g");
	this.shape_1.setTransform(264,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,532,55);


(lib.startPrompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTEXQgvgQgDgNQgBgFAGgSQAIgRgBgJIAAkQIgaAAQgPAAgVgZQgVgaAAgPQgBgMAJgJQAJgKALAAIA3AAIAAhFQgLgPAAgSQAAgQANgEIATgCQAdAAAlAJQAmAJAMAJQAFAFABAGQAAAIgNAPQgMAQgBAGIAAApIAZAAQAHAAAZAcQAZAcgBALQAAAOgJALQgIALgKAAIgGgBQgKgEgmAAIAAEvIAFAMIAFAYQAAAWgeABIgDABQgRAAgngOg");
	this.shape.setTransform(473.3,-36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhkDlQgtgQAAgYIAGgWQAGgPAAgKIAAkwIgIgtQAAgYAVgGIAXgCQAaAAAeAJQAeAIAFALIACAHIgLAlIAAAlIAjhCQAYgqALgCQARgDAjAXQAjAXAEAQQADAMgMAIIgSAKIiCDGIABB+IAGAUIAEAZQAAAPgNAFQgIAEgPAAQgdAAgjgNg");
	this.shape_1.setTransform(443,-31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhfDkIgegeIgogtQgQgWAAgTIABgMQAHgiAXghQAXggAmgdQA3gsBlgxQAAgZgMgHQgIgEguAVQgtAWgTAQIgUARQgNAHgLgDQgIgCgcgZQgcgagCgIQgGgVATgMIAfgJIA5gfIA3gWQAZgHAVgCQARAAAWATIApAjIAqAiQAZAVAAAUIAAEiQAHAUgBAHQAAALgJAIQgIAHgLgBQgwgHgagJQgbgJgFgLIgCgHIAEgIIAEgIIADgHIABgbQgKAHgSAeQgTAhgOAOQgZAXgfAAQgTAAgRgPgAgEAYIgoAxQgRAQgOAaQgOAZAAANQAAAGAFAAQAIAAASgSIAug0IAtg+QASgbAIgUQgmAPgZAdg");
	this.shape_2.setTransform(407,-31.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTEXQgvgQgDgNQgCgFAIgSQAGgRAAgJIAAkQIgaAAQgOAAgWgZQgWgaAAgPQAAgMAJgJQAJgKALAAIA3AAIAAhFQgLgPgBgSQABgQAOgEIATgCQAdAAAkAJQAnAJALAJQAGAFgBAGQAAAIgMAPQgNAQAAAGIAAApIAYAAQAJAAAYAcQAZAcAAALQgBAOgIALQgJALgKAAIgFgBQgLgEgmAAIAAEvIAFAMIAFAYQAAAWgfABIgCABQgRAAgngOg");
	this.shape_3.setTransform(372.5,-36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABFHIgkgKIglgIQgTgFgOgNQgVgSgNgqQgQgwgIgMIgPgWQgCgLAGgMQAHgLAJgDIARgCQAbAAAnAHQAnAHAEAFQAFAFAIAyQAGAuANAGIAHACQAPAAAKgZQALgYAAgfQAAghgLgXQgKgWgVgLQgvgaghgYQgigXgTgWQgtgyAFhGQAEg6Amg6QAmg7AqgKQASgEBZAlIAtASQAXAKAOARQALAOAFAXQAFAXAAAhIAAAlIgBAdIAFASQAEAIAAAIQgCAigbAEQgPADgqgOQgugPgMgRIgCgPIADg1IACg7QAAghgIABQgWABgQAhQgQAhAAApQAAAjAKAYQAKAZAUAPIBcA5QAsAdARAcQALATAFAaQAGAZAAAhQAAAdgKAXQgJAYgTASQgmAlhDABQgRAAgTgFg");
	this.shape_4.setTransform(337.2,-40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AApDyIg/gNQgggEgZgIQgWgGgSgSQgRgTgNgfQgMgegGgiQgGgiAAgoQAAgmAGgkQAGgkAMghQAOgjAUgZQATgZAZgOQAJgEAOAAQAQAAAsAJQAdAAAvAJQAVAKARAUQAQAUAMAfQAUA3AABMQAAAzgIAtQgJAtgSAmQgTApgZASQgUAPgXAAIgLAAgAgRiNQgJAMgJAaQgSBBAAAfQAEBJAJAkQAPA6ATAFQAYAFATg9QASg6AAhGQAAgngKgnQgOg5gdAAQgJAAgKANg");
	this.shape_5.setTransform(280,-30.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTEXQgvgQgDgNQgCgFAIgSQAGgRABgJIAAkQIgbAAQgOAAgWgZQgVgagBgPQAAgMAJgJQAJgKALAAIA4AAIAAhFQgNgPAAgSQAAgQAPgEIATgCQAcAAAlAJQAnAJALAJQAGAFAAAGQAAAIgNAPQgNAQAAAGIAAApIAYAAQAJAAAYAcQAYAcABALQgBAOgIALQgJALgKAAIgGgBQgKgEgmAAIAAEvIAFAMIAFAYQAAAWgfABIgCABQgRAAgngOg");
	this.shape_6.setTransform(246.2,-36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiUE+QgggNAAgRIAAo6QAAgMAIgOQAHgQAKgDIAHgBQAUAAAjAOQAkANAEAKIACAJIgGAQQgGAJAAAJIAAEKIBxibQAKgOAPgBQAPAAAaATQAdAWABAUQABAJglAzIhDBgIBkCKQAFAIARAIQAOAHABAIQACAPgfAmQgfAngRgDQghgEhqivIgaAbIAABbIACAOIACAPQADAagNAHQgHAFgQAAQgdAAgcgLg");
	this.shape_7.setTransform(193,-40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhuDHQgbgTgOgqQgOgrAAhCQABhiAdhQQAhhXAwgDQAmgCA2AWQA2AWAUAbQAQAXAAAlIgCAcIgBAbIACATQAAAZgYgBQgcgBgZgHQgggMgHgUQgDgHAJgLQAJgMgCgIIACgbQAAgXgEgLQgEgNgIAAQgYgCgRBMQgPBeAAA1QAAAwAGAZQAFAZALACQARAEAdgqQAYgkABgNIADgaQAGgWAWACQAOACAjAQQAiAQADAIIACANQgBAPgZAZQgVAtgQAUQgSAXgWAOQgVAOgaAEIgTABQgsAAg/gpg");
	this.shape_8.setTransform(155.2,-32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYEoQgsgNgHgOQgEgGAKgRQAIgMAAgfIAAlCQgKgdAAgLQAAgJAdAAQAXAAAoAOQApAOAJALIACAIIgJAXQgJAQAAAJIAAE1QAAAHAJAMIAKARQADAbgWAIIgLAAQgcAAgogLgAgKjCQg7gTgDgIIgDgMQAAgVALgXQAMgaAQgDQASgDAqAQQAsARAIARIABAGQAAARgHAbQgIAdgHADIgDABQgNgBgxgRg");
	this.shape_9.setTransform(128.4,-37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDFBQgqgMgIgHQgRgPAAgMIADgHIADgNIAAoeIgDgJIgCgKQABgSAbgHIAhAAQAbADAVAGQAfAJAAARIgDAPIgEALIgJAwIAAHYQAAAJAEAHIAFAMQAAAygTADIgCABQgKAAgkgLg");
	this.shape_10.setTransform(110.5,-39.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbFJIhLgbQhMgfgohXQgjhPAAhoQAAh+AwhhQA0hnBOgEQAPAAAVAHQAWAIAdAQQAdAQATAQQATAQAJARQATAgAHBrQABAXgHAYQgJAdgPgDQgbgDgpgOQgxgQgEgLIgCgGQAAgHAHgLQAGgKAAgHIAEg7QAAgpgJgPQgXARgQAdQgSAcgMAnQgKAigFAmQgFAlAAAqQAABBAMA0QALAzAQALQAIAEAigkQAjgjAKgWIAHgZQAFgNAHgDQANgFA3AaQA2AbgBALQgDATgMAMQgLAYgSAYIgoAwQgZAagUAMQgUAOgQAAg");
	this.shape_11.setTransform(81,-39.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Egq8Au0MAAAhdnMBV5AAAMAAABdng");
	this.shape_12.setTransform(275.1,-14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.startPrompt, new cjs.Rectangle(0,-313.8,550,599.2), null);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.cardNumber = new cjs.Text("1", "bold 96px 'Marker Felt'");
	this.cardNumber.name = "cardNumber";
	this.cardNumber.lineHeight = 114;
	this.cardNumber.lineWidth = 74;
	this.cardNumber.parent = this;
	this.cardNumber.setTransform(9.7,14.1);

	this.timeline.addTween(cjs.Tween.get(this.cardNumber).wait(1));

	// Base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AnVqJIOrAAIAAUTIurAAg");
	this.shape.setTransform(47,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AnVKKIAA0TIOrAAIAAUTg");
	this.shape_1.setTransform(47,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,98,134);


(lib.Bucket_Gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7.1).p("AHvpaIAASRIvdAAIAAyR");
	this.shape.setTransform(49.5,60.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AnuJJIAAyRIPdAAIAASRg");
	this.shape_1.setTransform(49.5,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,106,124);


(lib.Arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AltC3IC+gvIAIqjIDfAIIBOKjIDoAXImTF1g");
	this.shape.setTransform(36.6,54);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(0,0,73.2,108.1), null);


// stage content:
(lib.placeValue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
		function Question() {
			randomNumber = Math.floor(Math.random() * 99998) + 1;
			evenOdd = Math.floor(Math.random() * 2);
		
			if (evenOdd == 1) {
				typeText = 'bigger'
			} else {
				typeText = 'smaller'
			}
			
			console.log(evenOdd);
		
			exportRoot.randomNumber.text = randomNumber;
			exportRoot.biggerSmaller.text = typeText;
		
		}
		
		var question = new Question();
		function Card() {
		
			randomNumber1 = Math.floor(Math.random() * 9) + 1;
			exportRoot.card01.cardNumber.text = randomNumber1;
		
			randomNumber2 = Math.floor(Math.random() * 9) + 1;
			exportRoot.card02.cardNumber.text = randomNumber2;
		
			randomNumber3 = Math.floor(Math.random() * 9) + 1;
			exportRoot.card03.cardNumber.text = randomNumber3;
		
			randomNumber4 = Math.floor(Math.random() * 9) + 1;
			exportRoot.card04.cardNumber.text = randomNumber4;
		
			randomNumber5 = Math.floor(Math.random() * 9) + 1;
			exportRoot.card05.cardNumber.text = randomNumber5;
		}
		
		Card.prototype.update = function (evt) {
		
		}
		
		Card.prototype.move = function (evt) {
			if (exportRoot.card01.y < 500) {
				exportRoot.card01.y += 2;
			}
			if (exportRoot.card01.y > 500 && exportRoot.card02.y < 500) {
				exportRoot.card02.y += 2;
			}
			if (exportRoot.card02.y > 500 && exportRoot.card03.y < 500) {
				exportRoot.card03.y += 2;
			}
			if (exportRoot.card03.y > 500 && exportRoot.card04.y < 500) {
				exportRoot.card04.y += 2;
			}
			if (exportRoot.card04.y > 450 && exportRoot.card05.y < 500) {
				exportRoot.card05.y += 2;
			}
		}
		
		stage.canvas.style.cursor = "none";
		this.arrow.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
			this.arrow.x = stage.mouseX;
		
			if (exportRoot.card01.y < 450) {
				exportRoot.card01.x = this.arrow.x;
			} 
			if (exportRoot.card02.y < 450) {
				exportRoot.card02.x = this.arrow.x;
			} 
			if (exportRoot.card03.y < 450) {
				exportRoot.card03.x = this.arrow.x;
			} 
			if (exportRoot.card04.y < 450) {
				exportRoot.card04.x = this.arrow.x;
			} if
			(exportRoot.card05.y < 450) {
				exportRoot.card05.x = this.arrow.x;
			}
		}
		
		var card = new Card();
		function Main() {
		
			this.card = new Card();
			this.question = new Question();
		
			exportRoot.card01.visible = false;
			createjs.Ticker.addEventListener("tick", this.update.bind(this));
		
			canvas.onmousedown = this.userPressed.bind(this);
			window.onkeydown = this.userPressed.bind(this);
		}
		
		
		Main.prototype.update = function (evt) {
			if (this.cardMove == true) {
				this.card.move();
			}
		}
		
		Main.prototype.userPressed = function (evt) {
			exportRoot.startPrompt.visible = false;
			exportRoot.card01.visible = true;
			this.cardMove = true;
		}
		
		var main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Cards
	this.card05 = new lib.card();
	this.card05.parent = this;
	this.card05.setTransform(266.7,-66,1,1,0,0,0,47,65);

	this.card04 = new lib.card();
	this.card04.parent = this;
	this.card04.setTransform(266.7,-66,1,1,0,0,0,47,65);

	this.card03 = new lib.card();
	this.card03.parent = this;
	this.card03.setTransform(266.7,-64.9,1,1,0,0,0,47,65);

	this.card02 = new lib.card();
	this.card02.parent = this;
	this.card02.setTransform(266.7,-64.9,1,1,0,0,0,47,65);

	this.card01 = new lib.card();
	this.card01.parent = this;
	this.card01.setTransform(266.7,-64.9,1,1,0,0,0,47,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card01},{t:this.card02},{t:this.card03},{t:this.card04},{t:this.card05}]}).wait(1));

	// UI
	this.startPrompt = new lib.startPrompt();
	this.startPrompt.parent = this;
	this.startPrompt.setTransform(281.1,401.9,1,1,0,0,0,275,87.2);

	this.biggerSmaller = new cjs.Text("smaller", "bold 23px 'Marker Felt'", "#339900");
	this.biggerSmaller.name = "biggerSmaller";
	this.biggerSmaller.lineHeight = 30;
	this.biggerSmaller.lineWidth = 72;
	this.biggerSmaller.parent = this;
	this.biggerSmaller.setTransform(260.4,26.3);

	this.randomNumber = new cjs.Text("000000", "bold 23px 'Marker Felt'", "#FF0000");
	this.randomNumber.name = "randomNumber";
	this.randomNumber.lineHeight = 30;
	this.randomNumber.parent = this;
	this.randomNumber.setTransform(396.2,26.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgmBEQgLgDgBgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgCADgDIACgEIAAhoIgCgEQgBgDABgCQABgFAGgBQADgBAOADQAOAEABADQABADgCAFIgCAJIABAFQAEgLAFgJQAHgKAHAAQAIAAAMAFQAMAFACAFQADAHABAaQACAaAAAuQACAEAAAEQAAAHgFADIgGAAQgIAAgKgCQgLgCgCgDIgBgDQAAgCAEgGIACgHQABg7gCgeQgDgBgMAVQgMAXAAAKIAAAqQADADAAAFQAAAEgCADQgCADgEABIgDABQgFAAgNgDg");
	this.shape.setTransform(382.5,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbBCIgJgIIgMgNQgEgHAAgFIAAgEQADgKAGgKQAHgJALgIQAQgMAdgPQAAgHgEgCQgCgBgNAGQgNAGgGAFIgFAFQgFACgCgBQgDAAgIgIIgJgKQgCgGAGgDIAJgDIAQgJIARgHIAMgCQAGAAAGAGIAMAKIAMAKQAHAGAAAFIAABVIACAIQAAADgDACQgCADgDgBQgOgCgIgDQgHgDgCgDIAAgCIAAgCIABgDIABgCIABgHQgDACgFAJQgGAJgDAEQgIAHgIAAQgGAAgFgFgAgBAHIgMAOQgEAFgEAIQgFAHABAEQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQACAAAGgFIANgPIANgSQAFgIACgFQgKAEgIAIg");
	this.shape_1.setTransform(369.9,40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmBfQgLgDgBgBQgDgEACgEIACgDIACgDIAAieIgCgFQgBgDAAgCQACgFAFgBQAEgBANAEQAOADACAEQABACgCAFQgBAFAAAIIAAAqQAMgQALAAQAIAAAMAFQAMAFACAFQADAHABAZQACAbAAAuQACAFAAAEQgCAHgDACIgGAAQgIAAgKgCQgLgCgCgDIgBgCIACgHIADgEQABgCAAgDQABg8gCgdQgDgBgMASQgMARAAAMIAAAxQADAEgBAGQgBAHgGACIgDABQgGAAgMgDg");
	this.shape_2.setTransform(357.6,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFBRQgOgEgBgEQAAgBACgFIACgIIAAhPIgHAAQgFAAgGgIQgHgHABgEQgBgEADgCQADgDADAAIAQAAIAAgVQgDgEgBgFQABgFAEgBIAFAAQAJAAAKACQALADADADIACADQAAACgDAFQgFAEAAABIAAANIAIAAQACAAAHAIQAHAIAAAEQAAADgCAEQgDACgDAAIgBAAQgDAAgMAAIAABXIACADIACAIQgBAGgIABQgGAAgLgFg");
	this.shape_3.setTransform(346.9,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdBDQgNgFAAgHIACgGQACgFAAgDIAAhYIgDgNQAAgHAGgCIAHAAQAIAAAJACQAIADACADIAAACIgDALIAAALIAKgUQAHgMADgBQAFAAAKAGQAKAHABAFQABADgDACIgFADIgmA6IAAAlIACAFIABAIQAAAEgDABQgDACgEAAQgJAAgKgEg");
	this.shape_4.setTransform(248.4,40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMA/QgPgFgFgGQgNgRAAgeQAAgcAMgVQAGgLAIgHQAIgFAJgBQAGAAAKAEIALAFIAJAHQACACACALQACAKAAALQAAAIgBAEQgBAGgDACQgLAEgMACQgMACgLAAQgBALAEANQADAMADAAQAEAAAGgIQAGgGABgFIAEgNQAEgBAKAEQALAEACADQACADgLARQgGAJgGAGQgFAGgGAEIgEAAQgJAAgNgGgAgEggIgFANIgDALQAKAAAFgEQACgCABgFIABgQQAAgIgBgBIgBAAQgEAAgFAMg");
	this.shape_5.setTransform(237.9,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjBeQgNgEgCgDQgCgCAEgGQABgCAAgHIAAiWIgCgFQgCgDAAgCQABgHAIAAQAIAAAMAEQAMAEACAFQABACgDAFIgCAJIAAAkQARgSALACQAIABAIAGQAFAEAEAEIAGAJQAFALAAAPQAAALgCALQgCALgEANIgJAUQgFAJgFAHIgBAEIgDAEQgDADgIAAQgGAAgFgEIgLgIIACAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgCAFgEABIgBAAQgGAAgMgEgAABgJQgKAKgDAHIAAA8IAGAEQADABAEgIQAEgJAGgRQAFgQACgOQADgNAAgLIgBgHQgIADgLAKg");
	this.shape_6.setTransform(226.5,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhFBEQgMgDgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgCADgDIADgEIAAhoIgCgEQgCgDABgCQABgFAGgBQADgBAOADQAOAEABADQABADgBAFIgDAJIABAFQAEgLAGgJQAHgKAHAAQAIAAAMAFQAKAGADAEQACACADAOIAKgUQAIgLAHAAQAHAAANAFQAMAFACAFQADAHABAaQACAaAAAuQACAEAAAEQAAAHgGADIgFAAQgIAAgKgCQgLgCgCgDIgBgDQAAgCADgGIADgHQABg7gCgeQgDgBgMATQgMAVAAAOIAAAsIACAIQAAAGgGADIgGAAQgHAAgKgCQgKgCgDgDIAAgCQAAgCADgGQADgGAAgCQAAg7gBgeQgEgBgMAVQgNAXAAAKIAAAqQADADAAAFQAAAEgCADQgCADgEABIgCABQgGAAgMgDg");
	this.shape_7.setTransform(210.8,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbBEQgPgEgBgDQgBgDACgFIACgIIAAgGQgEALgGAJQgEAFgDADQgDACgEAAQgIAAgMgFQgMgFgCgEQgGgPAAhbQgCgEAAgEQAAgHAFgDIAGAAQAHAAALACQAKACADADIABADQAAACgDAGQgDAFAAADQgBBXACABQABABAEgGIAJgQQAHgLADgIQADgHABgGIAAgqQgDgDAAgEQAAgFACgDQABgDAEgBIADgBQAGAAAMADQALADABABIACAFQAAACgCADIgDAEIAABoIABAFIACAFQAAAEgIACIgBAAQgEAAgLgDg");
	this.shape_8.setTransform(195.2,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmBEQgLgDgBgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgCADgDIACgEIAAhoIgCgEQgBgDAAgCQACgFAGgBQADgBAOADQAOAEABADQABADgCAFIgCAJIABAFQAEgLAFgJQAHgKAHAAQAIAAAMAFQAMAFACAFQADAHABAaQACAaAAAuQACAEAAAEQAAAHgFADIgGAAQgIAAgKgCQgKgCgDgDIgBgDQAAgCADgGIAEgHQAAg7gCgeQgDgBgMAVQgMAXAAAKIAAAqQADADAAAFQAAAEgCADQgCADgEABIgDABQgGAAgMgDg");
	this.shape_9.setTransform(182.9,40.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbBCIgJgIIgMgNQgEgHgBgFIABgEQADgKAGgKQAHgJAKgIQARgMAdgPQAAgHgEgCQgCgBgOAGQgMAGgGAFIgFAFQgFACgCgBQgDAAgIgIIgJgKQgCgGAGgDIAJgDIARgJIAQgHIAMgCQAGAAAGAGIAMAKIAMAKQAHAGAAAFIAABVIACAIQAAADgCACQgDADgDgBQgOgCgHgDQgIgDgCgDIAAgCIAAgCIABgDIABgCIABgHQgDACgFAJQgGAJgDAEQgIAHgJAAQgFAAgFgFgAgBAHIgLAOQgFAFgEAIQgFAHAAAEQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAQACAAAFgFIAOgPIAMgSQAGgIACgFQgKAEgIAIg");
	this.shape_10.setTransform(166,40.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMA/QgPgFgFgGQgNgRAAgeQAAgcAMgVQAGgLAIgHQAIgFAJgBQAGAAAKAEIALAFIAJAHQACACACALQACAKAAALQAAAIgBAEQgBAGgDACQgLAEgMACQgMACgLAAQgBALAEANQADAMADAAQAEAAAGgIQAGgGABgFIAEgNQAEgBAKAEQALAEACADQACADgLARQgGAJgGAGQgFAGgGAEIgEAAQgJAAgNgGgAgEggIgFANIgDALQAKAAAFgEQACgCABgFIABgQQAAgIgBgBIgBAAQgEAAgFAMg");
	this.shape_11.setTransform(149.7,40.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhFBEQgMgDgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgCADgDIADgEIAAhoIgCgEQgCgDABgCQABgFAGgBQADgBAOADQAOAEABADQABADgBAFIgDAJIABAFQAEgLAGgJQAHgKAHAAQAIAAAMAFQAKAGADAEQACACADAOIAKgUQAIgLAHAAQAHAAANAFQAMAFACAFQADAHABAaQACAaAAAuQACAEAAAEQAAAHgGADIgFAAQgIAAgKgCQgLgCgCgDIgBgDQAAgCADgGIADgHQABg7gCgeQgDgBgMATQgMAVAAAOIAAAsIACAIQAAAGgGADIgGAAQgHAAgKgCQgKgCgDgDIAAgCQAAgCADgGQADgGAAgCQAAg7gBgeQgEgBgMAVQgNAXAAAKIAAAqQADADAAAFQAAAEgCADQgCADgEABIgCABQgGAAgMgDg");
	this.shape_12.setTransform(134.9,40.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMA/QgPgFgFgGQgNgRAAgeQAAgcAMgVQAGgLAIgHQAIgFAJgBQAGAAAKAEIALAFIAJAHQACACACALQACAKAAALQAAAIgBAEQgBAGgDACQgLAEgMACQgMACgLAAQgBALAEANQADAMADAAQAEAAAGgIQAGgGABgFIAEgNQAEgBAKAEQALAEACADQACADgLARQgGAJgGAGQgFAGgGAEIgEAAQgJAAgNgGgAgEggIgFANIgDALQAKAAAFgEQACgCABgFIABgQQAAgIgBgBIgBAAQgEAAgFAMg");
	this.shape_13.setTransform(115.6,40.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgqBdQgKgEAAgFIAAimQAAgDADgFQACgEADgBIACAAQAFAAALAEQAKAEACADIAAACIgCAFIgBAFIAABNIAggsQADgEAEgBQAFAAAHAGQAJAGAAAGQAAADgLAPIgTAbIAdAoQACADAFACQAEACAAACQAAAFgJALQgJALgFgBQgJgBgegzIgIAIIAAAbIAAAEIABAEQABAIgEACQgCABgFAAQgIAAgIgDg");
	this.shape_14.setTransform(104.5,37.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbBCIgJgIIgMgNQgEgHAAgFIAAgEQACgKAHgKQAHgJALgIQAQgMAdgPQgBgHgDgCQgCgBgNAGQgNAGgFAFIgGAFQgEACgEgBQgCAAgIgIIgJgKQgCgGAGgDIAJgDIAQgJIARgHIANgCQAFAAAGAGIAMAKIAMAKQAIAGgBAFIAABVIADAIQgBADgDACQgCADgDgBQgOgCgIgDQgHgDgCgDIgBgCIABgCIABgDIABgCIABgHQgDACgFAJQgGAJgDAEQgIAHgIAAQgGAAgFgFgAgBAHIgMAOQgEAFgEAIQgFAHABAEQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQADAAAFgFIANgPIANgSQAFgIADgFQgLAEgIAIg");
	this.shape_15.setTransform(91.9,40.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhTBdQgNgCgCgEIgBgEIABgEIABgFIAAifQAAgCACgDQACgEADgBQAEgCAaAIQAaAGACAFIAAAGIgBAFIABAEIAeBRIAWhQIAIgZQADgIADAAIAEAAIAMABIAOADIAVACQAKACABAGIABADIgBAHIgBAFIAACKIACAGQADAEAAADQgCAJgEABQgFABgPgDIgNgFQgFgCgBgDIAAgDIAAgFIABgEIAAhmQgLAVgRBIIAAACIABAHIAAAGIAAAJQgBAEgEACIgIAAQgcAAgLgKQgCgBAAgFIAAgGIgOgtQgQgugFgIIAABYIACAIIACAIQABAFAAAGQgBAIgCABIgFABQgJAAgLgDg");
	this.shape_16.setTransform(75.2,38);

	this.instance = new lib.UIBox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(270,38.3,1,1,0,0,0,263.9,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.randomNumber},{t:this.biggerSmaller},{t:this.startPrompt}]}).wait(1));

	// Arrow
	this.arrow = new lib.Arrow();
	this.arrow.parent = this;
	this.arrow.setTransform(277.1,434.3,1,1,0,0,0,36.6,54);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// PlaceValue Box's
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AACBGIgGgCIgJgCQgEgBgDgDQgFgEgEgIIgIgNIgDgIQgBgDAFgCIAEAAIARABQAKACABABQABABACAMQABAKACAAQADAAABgDQABgEABgHQgBgSgIgEIgSgKIgKgHQgFgFgCgHQgCgIABgJQAAgNAGgLQADgGAEgDQAFgEAEgBQAEgBAVAJIAMADQAHABADAEQAEAFABALIAAARIABAJQAAAGgFABQgDAAgKgCQgKgEgCgEIgCgQQgBgPgCAAQgDAAgCAIQgDAJgBAKQAAAFACAEQABAEADACIAUALQALAGAFAHQADAEABAGQABAFABAIQgBAMgHAHQgEAEgGACQgHACgHAAg");
	this.shape_17.setTransform(91.5,586.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAMAfQgGAAgHgFQgJgFgHgHQgCgDACgIIADgHIAAgSQAAgDADgDQAEgCADAAQAFAAAHADQAHACACADIABANIAAAXIAAAEIABAEQgBAIgDABg");
	this.shape_18.setTransform(84.5,577.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_19.setTransform(75.3,583.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_20.setTransform(60.7,583.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_21.setTransform(46.1,583.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAaQgJgEAAgHQAAgGAEABIACABQAHAAAHgGQAIgGAAgIIgBgEIgBgFQAAgHAFgCQADgBAJADQAKADACADQACAEAAAFQAAAHgDAFQgCAGgFAGQgLAOgOAAIgCAAQgGAAgFgCg");
	this.shape_22.setTransform(36.8,592.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_23.setTransform(30,583.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAEBYQgNgJgBgDIABgFIABgDIAAheQAAgGgKgCQgMgCgBgFIgBgFQAAgEAFgHIAIgNIAFgRQAEgKAKAAQAIAAAKAGQALAGAAAJIAACUQAAADACADQACAEAAACQAAAFgDAFQgEAEgFAAQgDAAgOgKg");
	this.shape_24.setTransform(14.8,583.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AACBGIgGgCIgJgCQgEgBgDgDQgFgEgEgIIgIgNIgDgIQgBgDAFgCIAEAAIARABQAKACABABQABABACAMQABAKACAAQADAAABgDQABgEAAgHQAAgSgIgEIgSgKIgKgHQgFgFgCgHQgCgIABgJQAAgNAGgLQADgGAEgDQAFgEAEgBQAEgBAVAJIAMADQAHABADAEQAEAFABALIAAARIABAJQAAAGgFABQgDAAgKgCQgKgEgDgEIgBgQQgBgPgCAAQgDAAgCAIQgDAJgBAKQAAAFACAEQABAEADACIAUALQALAGAFAHQADAEABAGQABAFABAIQgBAMgHAHQgEAEgGACQgHACgHAAg");
	this.shape_25.setTransform(198.2,586.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAMAfQgGAAgHgFQgJgFgHgHQgCgDACgIIADgHIAAgSQAAgDADgDQAEgCADAAQAFAAAHADQAHACACADIABANIAAAXIAAAEIABAEQgBAIgDABg");
	this.shape_26.setTransform(191.2,577.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_27.setTransform(181.9,583.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_28.setTransform(167.3,583.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_29.setTransform(152.7,583.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAaQgJgEAAgHQAAgGAEABIACABQAHAAAHgGQAIgGAAgIIgBgEIgBgFQAAgHAFgCQADgBAJADQAKADACADQACAEAAAFQAAAHgDAFQgCAGgFAGQgLAOgOAAIgCAAQgGAAgFgCg");
	this.shape_30.setTransform(143.4,592.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAEBYQgNgJgBgDIABgFIABgDIAAheQAAgGgKgCQgMgCgBgFIgBgFQAAgEAFgHIAIgNIAFgRQAEgKAKAAQAIAAAKAGQALAGAAAJIAACUQAAADACADQACAEAAACQAAAFgDAFQgEAEgFAAQgDAAgOgKg");
	this.shape_31.setTransform(136,583.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AADBGIgHgCIgJgCQgEgBgDgDQgFgEgFgIIgHgNIgEgIQABgDAEgCIAEAAIARABQAKACABABQABABABAMQACAKACAAQADAAABgDQABgEAAgHQABgSgJgEIgSgKIgLgHQgEgFgCgHQgCgIAAgJQAAgNAHgLQAEgGAEgDQADgEAFgBQAEgBAVAJIAMADQAHABADAEQAEAFABALIAAARIACAJQAAAGgHABQgCAAgKgCQgKgEgDgEIgBgQQAAgPgDAAQgDAAgDAIQgCAJAAAKQgBAFACAEQABAEADACIAVALQALAGAEAHQACAEACAGQACAFgBAIQABAMgJAHQgDAEgHACQgGACgGAAg");
	this.shape_32.setTransform(295.3,586.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAMAfQgGAAgHgFQgJgFgHgHQgCgDACgIIADgHIAAgSQAAgDADgDQAEgCADAAQAFAAAHADQAHACACADIABANIAAAXIAAAEIABAEQgBAIgDABg");
	this.shape_33.setTransform(288.3,577.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_34.setTransform(279.1,583.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAABgIgKgFIgUgHQgMgEgHgcQgHgbAAggQAAgiAHgYQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAQAGgCAHAAQAHAAALADIATAFQAGACAEAFQAFAHADAKQAGATAAAdQAAAigJAgQgHAYgKAMQgJALgNAAIgJgBgAgLgwQgFATAAAaQAAAUAFAYIAFASQACAFACAAQAEAAADgGQAEgIADgNQAEgZAAgfQAAgXgCgOQgCgJgCgEQgCgEgDAAQgKAAgGAZg");
	this.shape_35.setTransform(264.5,583.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAEBYQgNgJgBgDIABgFIABgDIAAheQAAgGgKgCQgMgCgBgFIgBgFQAAgEAFgHIAIgNIAFgRQAEgKAKAAQAIAAAKAGQALAGAAAJIAACUQAAADACADQACAEAAACQAAAFgDAFQgEAEgFAAQgDAAgOgKg");
	this.shape_36.setTransform(249.3,583.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AACBGIgHgCIgIgCQgEgBgDgDQgFgEgEgIIgIgNIgEgIQAAgDAFgCIAEAAIARABQAKACABABQABABACAMQABAKACAAQADAAABgDQABgEABgHQAAgSgJgEIgSgKIgKgHQgEgFgDgHQgCgIABgJQAAgNAGgLQADgGAEgDQAEgEAFgBQAEgBAVAJIAMADQAHABADAEQAEAFABALIAAARIABAJQAAAGgFABQgEAAgJgCQgKgEgCgEIgCgQQgBgPgCAAQgDAAgCAIQgEAJAAAKQAAAFACAEQABAEADACIAUALQALAGAFAHQADAEABAGQACAFAAAIQgBAMgHAHQgFAEgFACQgGACgIAAg");
	this.shape_37.setTransform(405.5,586.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAMAfQgGAAgHgFQgJgFgHgHQgCgDACgIIADgHIAAgSQAAgDADgDQAEgCADAAQAFAAAHADQAHACACADIABANIAAAXIAAAEIABAEQgBAIgDABg");
	this.shape_38.setTransform(398.5,577.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAABfIgKgDIgUgIQgMgEgHgcQgHgaAAghQAAghAHgZQAIgaAPgFIABAAIAEABQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAGgCAHAAQAHAAALADIATAGQAGABAEAGQAFAFADALQAGATAAAeQAAAggJAhQgHAYgKALQgJAMgNAAIgJgCgAgLgxQgFAUAAAaQAAATAFAYIAFASQACAHACAAQAEAAADgIQAEgGADgOQAEgYAAgfQAAgYgCgPQgCgIgCgEQgCgEgDAAQgKAAgGAYg");
	this.shape_39.setTransform(389.3,583.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAEBYQgNgJgBgEIABgDIABgFIAAhdQAAgFgKgCQgMgDgBgFIgBgFQAAgEAFgIIAIgLIAFgSQAEgKAKAAQAIAAAKAGQALAGAAAJIAACUQAAACACAEQACADAAADQAAAFgDAFQgEAEgFAAQgDAAgOgKg");
	this.shape_40.setTransform(374.1,583.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AADBGIgIgCIgIgCQgEgBgDgDQgFgEgFgIIgHgNIgEgIQABgDAEgCIAEAAIARABQAKACABABQABABABAMQACAKACAAQADAAABgDQACgEAAgHQAAgSgJgEIgSgKIgLgHQgEgFgCgHQgCgIAAgJQAAgNAHgLQAEgGADgDQAEgEAFgBQAEgBAVAJIAMADQAHABADAEQAEAFABALIAAARIACAJQAAAGgHABQgDAAgJgCQgKgEgCgEIgCgQQAAgPgDAAQgDAAgDAIQgDAJAAAKQABAFABAEQABAEADACIAUALQAMAGAEAHQACAEACAGQABAFAAAIQAAAMgIAHQgDAEgHACQgGACgGAAg");
	this.shape_41.setTransform(500.6,586.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAMAfQgGAAgHgFQgJgFgHgHQgCgDACgIIADgHIAAgSQAAgDADgDQAEgCADAAQAFAAAHADQAHACACADIABANIAAAXIAAAEIABAEQgBAIgDABg");
	this.shape_42.setTransform(493.6,577.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAEBYQgNgJgBgDIABgFIABgDIAAheQAAgGgKgCQgMgCgBgFIgBgFQAAgEAFgHIAIgNIAFgRQAEgKAKAAQAIAAAKAGQALAGAAAJIAACUQAAADACADQACAEAAACQAAAFgDAFQgEAEgFAAQgDAAgOgKg");
	this.shape_43.setTransform(486.8,583.8);

	this.instance_1 = new lib.Bucket_Gr("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(495,532.2,1,0.583,0,0,0,49.5,58.6);

	this.instance_2 = new lib.Bucket_Gr("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(384,532.2,1,0.583,0,0,0,49.5,58.6);

	this.instance_3 = new lib.Bucket_Gr("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,532.2,1,0.583,0,0,0,49.5,58.6);

	this.instance_4 = new lib.Bucket_Gr("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(166.1,532.2,1,0.583,0,0,0,49.5,58.6);

	this.instance_5 = new lib.Bucket_Gr("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(55.6,532.2,1,0.583,0,0,0,49.5,58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Background
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("Egq9Au4MAAAhdvMBV7AAAMAAABdvg");
	this.shape_44.setTransform(275,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,167,556.1,733.1);
// library properties:
lib.properties = {
	id: '3365FF4F6C5248B89555C969C690C392',
	width: 550,
	height: 600,
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
an.compositions['3365FF4F6C5248B89555C969C690C392'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;