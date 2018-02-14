(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"TestUIPP_atlas_", frames: [[0,276,622,67],[358,0,200,200],[0,0,356,274]]}
];



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



(lib.Path = function() {
	this.spriteSheet = ss["TestUIPP_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgworld3 = function() {
	this.spriteSheet = ss["TestUIPP_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["TestUIPP_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.tiled_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.333)","rgba(0,0,0,0)"],[0,1],-400,0,400,0).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.bgworld3();
	this.instance.parent = this;
	this.instance.setTransform(600,400);

	this.instance_1 = new lib.bgworld3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,400);

	this.instance_2 = new lib.bgworld3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(200,400);

	this.instance_3 = new lib.bgworld3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,400);

	this.instance_4 = new lib.bgworld3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(600,200);

	this.instance_5 = new lib.bgworld3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(400,200);

	this.instance_6 = new lib.bgworld3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(200,200);

	this.instance_7 = new lib.bgworld3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,200);

	this.instance_8 = new lib.bgworld3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(600,0);

	this.instance_9 = new lib.bgworld3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(400,0);

	this.instance_10 = new lib.bgworld3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(200,0);

	this.instance_11 = new lib.bgworld3();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tiled_bg, new cjs.Rectangle(0,0,800,600), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3B02D").s().p("Ego1ASDMAINgj4MA96gAPUALFAieAAfABLUAAAAAdgo2AADIvtAAQskAAskgCg");
	this.shape.setTransform(261.4,115.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(227,176,45,0.686)").s().p("Ego1ASDMAINgj4MA96gAPUALFAieAAfABLUAAAAAdgo2AADIvtAAQskAAskgCg");
	this.shape_1.setTransform(261.4,115.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522.8,231.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C18E00").s().p("AwVFvQhHAAgygfQgxgfAAgsIAAoJQAAgsAxgfQAygfBHAAMAgrAAAQBHAAAyAfQAyAfgBAsIAAIJQABAsgyAfQgyAfhHAAgAyIlGQgtAcAAAmIAAIJQAAAmAtAcQAvAeBEAAMAgrAAAQBEAAAvgeQAtgcAAgmIAAoJQAAgmgtgcQgvgehEAAMggrAAAQhEAAgvAeg");
	this.shape.setTransform(149.6,45.1,1.23,1.23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EFBB00","#CC9900"],[0,1],0,-36.6,0,36.7).s().p("AwVFvQhHAAgygfQgxgfAAgsIAAoJQAAgsAxgfQAygfBHAAMAgrAAAQBHAAAyAfQAyAfgBAsIAAIJQABAsgyAfQgyAfhHAAg");
	this.shape_1.setTransform(149.6,45.1,1.23,1.23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C18E00").s().p("AwVJOQhHAAgxgyQgzgyAAhGIAAtHQAAhHAzgxQAxgyBHAAMAgrAAAQBHAAAyAyQAxAxAABHIAANHQAABGgxAyQgyAyhHAAgAyHoUQguAvgBBCIAANHQABBCAuAvQAvAvBDAAMAgrAAAQBDAAAugvQAvgvAAhCIAAtHQAAhCgvgvQgugvhDAAMggrAAAQhDAAgvAvg");
	this.shape_2.setTransform(149.6,44.5,1.23,0.755);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDF400","#F7CD00"],[0,1],0,-59,0,59).s().p("AwVJOQhHAAgxgyQgzgyAAhGIAAtHQAAhHAzgxQAxgyBHAAMAgrAAAQBHAAAyAyQAxAxAABHIAANHQAABGgxAyQgyAyhHAAg");
	this.shape_3.setTransform(149.6,44.5,1.23,0.755);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.3,90.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C18E00").s().p("AwVJOQhHAAgxgyQgzgyAAhGIAAtHQAAhHAzgxQAxgyBHAAMAgrAAAQBHAAAyAyQAxAxAABHIAANHQAABGgxAyQgyAyhHAAgAyHoUQguAvgBBCIAANHQABBCAuAvQAvAvBDAAMAgrAAAQBDAAAugvQAvgvAAhCIAAtHQAAhCgvgvQgugvhDAAMggrAAAQhDAAgvAvg");
	this.shape.setTransform(149.6,72.5,1.23,1.23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EFBB00","#B18000"],[0,1],0,-59,0,59).s().p("AwVJOQhHAAgxgyQgzgyAAhGIAAtHQAAhHAzgxQAxgyBHAAMAgrAAAQBHAAAyAyQAxAxAABHIAANHQAABGgxAyQgyAyhHAAg");
	this.shape_1.setTransform(149.6,72.5,1.23,1.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,299.2,145.1), null);


(lib.mummy_leg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("Ag7jMQAIAGAKAEQATAKAZAFQARADAVACQAGAAAGAAQAsABAYgJAhgCTQADABAEAAQAcAFAUAAQANAAAKgBQALgBAJgCQARgCAMgEQAUgHAUgOQACgCABgBAg9hXQAEAFAJAEQAOAHAYAFQAKACANACQAMABAKABQAvACAYgPAh1C7QACAAACAAQABAAABABQAFABAIADQAAAAABABQAOAGAEABQASAEAZABQALAAANgBQAIAAAHgBQAtgDAYgN");
	this.shape.setTransform(25.9,83.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABVmhQAAABABABIAAACQADAFACAIIACAKIAaCDAicouQgDACADAAQAAACAAADQACAnAQBFQACAMADANIAHAaQACAKADAKQAKAGAMAEQAeALAvgCQAFgBAEAAQAPgBANgCQA1gJAZgYAh5l0QAIAfAKAiQACAGACAGIAFASQAEAMADAMIAnCQQACAKADAKIAAAEQAHAiADAYQACAQAAALQAAAPgCAWQAAABAAAAQgEAwgLBPQgBAGgBAFIgGAnQgMBMgLApQgBAEgBAEIgGAZIgIAmQgBAFgBAFQgEAVgCASQgEAyAOAYIADAFIABACQABABACACQAQAPAuAFQAIABAJABQABAAACAAIAHAAACAjEQgQAJgfADQgCAAgeAAQgIAAgIAAQgOAAgLgBQgOAAgLgCQgPgBgTgEQgIgBgIgCAB5j1QAAAEABADQABAIABAIQAAADABADQAAADABADQABAHABAHQATCHAAA5QAAAJAAAHQgBAWgOBGQgJArgOA9QgJA1gDAnQgDAnAEAaQADAUAIALQApA3AFAQQALAfgaAlQgRAYhdAAQgBAAAAAA");
	this.shape_1.setTransform(23.3,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECECEC").s().p("Ag2HqIgUAAQAeAAARgFQAUgxgUgqQgZgkAAgMIgBgiQAtgDAXgNQgXANgtADIgBgrIAAgLQARgCAMgEQAUgHATgOQgDAnAEAaQADAUAIALQApA3AFAQQALAfgaAlQgRAYhcAAIgCAAgAg2ECQgBgpADgYQADgcAch1IAAAAQAQhDABguQABgRgBgNQgFgzgQhHIgJgkIgShVQgMgugCgXIgBgTQAAgbAPgTQAOgSALABQAIACAVALIADAAIADAHIACAKQgZAZg0AIQA0gIAZgZIAZCDIABAFIABAJIABAHIADAQIABAGIABAGIACAOQgQAKgeACIghAAIAhAAQAegCAQgKQATCHAAA5QgVAIglAAIAAAAIgCAAIAAAAIgBAAIAAAAIgBAAIAAAAIgGAAIAGAAIAAAAIABAAIAAAAIABAAIAAAAIACAAIAAAAQAlAAAVgIIAAARQgCAWgOBFIgCABQgUAMghAAIgBAAIAAAAIgNAAIANAAIAAAAIABAAQAhAAAUgMIACgBIgWBoQgJA1gDAnQgTAOgUAHQgMAEgRACIAAAAgAAODnIAAAAgABAhJIAAAAg");
	this.shape_2.setTransform(31.6,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6B5B").s().p("AAbIjQgPgEgKgNIADADQAQAQAuAFQgXgCgRgFgAgEIGIgCgFIgCgFQgIgYAEgiQABgQAGgYQgEAWgCARQgEAzAOAYIgDgGgAA3giQgCgZgFgcQAIAiACAYQACAQAAALIgCAlQABgjgEgigAgaljIgIgnIAFAUIASBBQgLgdgEgRgAgwnCIgGgRQgJgZgDgdQgCgXAEgJQACAnAQBFIgCgFg");
	this.shape_3.setTransform(14.1,65.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9E9983").s().p("Ag7HfIAJgmIAFgZIADgIIAAgBIAAABQgCAMgFAWIgBgBIABABIgHAaIgEATIABgIgAgxG6IAAAAgAgTEjIAGgnIABgKQAMhQACgwQAAAZgCAbIAAAEQgEBBgPA6IgBAEIABgGgAgMghIgmiQIgHgXIgGgTIgDgLIABACQAOAhAEAOIAQA+IAMAxQAHAcAEAZIgEgQgAhglWIgGgZIAJAiIADARgAB2lXIACACIABAAIABACIgEgEgAholzIACAEIAGAZIgIgdgAh4niIACgBQAIgGgFAIIgFABIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBg");
	this.shape_4.setTransform(19.6,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B2B2").s().p("AAqIvIgFgBIgHAAIgEAAIgRgCQgtgFgQgPIgDgDIgBgCIgDgFQgOgXAFgzQABgRAEgWIABgCIAEgTIAHgaQAFgWACgMIAAgBQAKgnAMhHIABgEQAPg6AFhBIAAgEQABgbAAgZIAAgBIACglQAAgLgCgPQAJAGAJAEQgJgEgJgGQgBgZgHgiIgBgEIgBgEQgEgZgHgcIgMgxIAQADIgQgDIgQg+QgEgOgOghIgBgCIAAgBIgShBQAJAHAMAEIAGAWQADARAnCCIAGAUQAaBaADBCIABAQQgBAsgHA3QgIgEgEgFQAEAFAIAEQgFAkgGAoIgdCXIgGgBIAGABIgEAUIgEAZIgBgBIgNgEIANAEIABABIgLBEQgIBBASAZQAKAOAUAEQARADASgEQAXgFADgNQACgIgHgeIgThLIgGggIAEAAIAAAAIACAAIALgBIAHAAIARgBIgRABIgHAAIgLABIgCAAIAAAAIgEAAQgEgZAAgWIAAgFQgCheAUhMQAHgZAFgZQALg3ADg5IABgMQABglgGgtIgPhRIgCgJIAZABIAQAAIgQAAIgZgBQgUhrgLg9IAKgBIAcgDIABATQADAXALAuIATBVIAIAkQAQBHAFAzQABANAAAQIgMAAQgUgBgSgDQASADAUABIAMAAQgCAugQBEIgVgCIgZgEIAZAEIAVACIAAAAQgcB1gDAcQgCAYAAApIABALIABArIAAAiQAAAMAZAkQAVAqgVAxQgPAFgaAAIgGAAgAAXFLIAPAAIADgBIAVgDIgVADIgDABIgPAAIAAAAIAAAAIgCAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIACAAIAAAAIAAAAgAAXF/IAAAAgAAAgaIAAAAgAAqi5IAAAAgAghjDIAAAAgAALlhQgLhEABgMQACgTAJgSQAGgNAGAAIAIAFQBCAqASARIAEAEIABACIACAGIgDAAQgWgLgIgCQgLgBgPASQgOATgBAbIgcADIgKABIAAAAgAAxllIAAAAgAhWl0IgGgUIgDgRIgJgiQgQhFgCgnQACgEADgCQAIgFA2AeQgKAEgIALQgQAZAKA/QAEAbAKApQgMgEgJgHg");
	this.shape_5.setTransform(19.8,65.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AABIcQgTgEgKgNQgSgaAIhAIALhFIAEgYIAEgUIAciYQAHgoAFgkQAHg3ABgrIgBgQQAUAKAZAFQgDA5gLA2QgYgEgOgIQAOAIAYAEQgFAagHAYQgUBMACBfQgVgBgbgEQAbAEAVABIAAAFQAAAVAEAZIAGAgIATBMQAHAegCAIQgDANgXAFQgKACgJAAQgJAAgIgCgAgIFzQAQAFAZAAQgZAAgQgFIgTgHIATAHgAAcgWQgDhCgahaIgGgUIAhAFIAaACIgagCIghgFQgniDgDgRIgGgWIABAAIACABQAYAHAhAAIABAAIAAAAIALAAIAFAAIgFAAIgLAAIAAAAIgBAAQghAAgYgHIgCgBIgBAAQgJgpgFgbQgKg/AQgYQAIgMAKgDQAVgJAdAYQAWAQAPAXIgIgGQgGAAgGAOQgJASgCATQgBAMAMBDQAKA9AUBsIACAJIAPBQQAGAugBAlIgBAMQgZgFgUgKgAAcgWIAAAAgAgHjGIAAAAgAg3lwIAAAAg");
	this.shape_6.setTransform(18.8,66.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mummy_leg2, new cjs.Rectangle(6.4,8.7,33.7,113.8), null);


(lib.mummy_leg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABWjeQgKgggMgmQgDgKgEgKIgnhxQgNgggJgUQgDgHgDgFAjVnUIAZBUQAGARAHASQARAnAWAvQABACABABQAeA8ASAuQANAhAIAaQAGAVADAQQAFAZACAoIABAAQACAAACABQAPADAPADQAPACAPAAQAMAAAMgBQAZgCAVgIQAVgGAQgNQgBAygEBXQAAAaAAAWAh2jkQACAAACAAQAGgBAIgBQAMgBAPgCQARgCAOgDQAHgBAHgDQAVgFAZgQQACgBABgBQAPgJAYgRAhhi9QALABAJAAQAfABAAAAQANgBAMgBQAOgCALgEQAKgCAbgJQASgGAbgKQAgBqAEApQACARgBAsQABAAAAgBAgxAHQADApABA8QABAOAAANQAAAdAAAYQANAFANACQALACAKAAQAQABASgCQAVgCASgFQAXgGATgMAgsC8QAAA4gDAhQgBAUgBASQgBAIAAAHQgCAqACAcQABAIABAGQABANADALQAFATAIALIAGAGIABABQACACACACQAbATBcgPQBbgQANgbQATgogQgdQgHgPgxgvQgJgIgGgQQgOgkgDhOAgxE7QALADAMACQAYADAbgEQALgCALgDQALgCAigMQASgGAZgJACIEdIgBAA");
	this.shape.setTransform(29.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AABGUQgTgUgEgnQgDgaAFgpIACgYIADguIAFhHIAAgIQAGg4AAg4QAAgcgCgoQAPACAPAAIAAADIgNCGQgBAWABAWQACA1ANAxQADAKAEAJQAJARAQANQAOAMAhAYQAZAWAIAaQAJAfgdALIgBABQgeALgbABIgEABIgDAAQgiAAgSgTgAADEAQAOAAAQgDQgQADgOAAIAAAAIgBAAIgUgCIAUACIABAAIAAAAgAALCEIgVgDIAVADgAgGgzIgDg1QgCgkgWgwIgkhCIAgABIAYgCIgYACIgggBIgHgNIgQgdIAbgDQARgBAOgEQgOAEgRABIgbADIgWgtQgcg8AEgMQARAGA3gPQACAxAeBFIACAEIATAtQAXA3AFASQAPA2gGBPQgPAAgPgCgAgGgzIAAAAgAhFj+IAAAAg");
	this.shape_1.setTransform(28.6,67.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6B5B").s().p("AA9F1IAAgDIAEAYQgDgKgBgLgAA7EWIAFiAIABg8IABA2QgBA4gDAhIgCAmIgBAPIAAgIgAAci4IgFgOQANAgAIAaIgQgsgAg2lkQgKgVgBgQQARAnAXAvQgUgegJgTg");
	this.shape_2.setTransform(18.5,65.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9983").s().p("Ag6HfIgFgEIAEAEQAcATBbgPQBbgQANgbQATgogQgdQgHgPgxgvQgJgIgGgQIAAAAQAHAQAIAIQAxAvAIAPQAQAdgUAoQgMAbhcAQQgpAHgbAAQgjAAgPgLgAhYGQQgCgYABglIABBFIAAgIgABPCrIAAgwQAEhXABgyQABgsgCgRQgEgpgghqIgWhGIgHgUIANAmQAvCWAGAxQABARAAArIgBABIABgBQgBAygFBYQgBBzASAvIAAAAQgOgkgDhOgABgEdIAAAAgAhTBsQgCg7gCgqIADABIgDgBQgDgogEgYQgDgPgFgTIABADQAKAdADAYQADAUABAXQACAgAAAnIgBAtIAAgQgAhXAHIAAAAgABVgPIAAAAgAidjkIAEAAIgEAAIgPgfIgCgDIAMARIAJARQAIAQAHATIABAEIALAhQgNghgSgngAgxnpIAEAHIAFADIgDACIgGgMg");
	this.shape_3.setTransform(33.4,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B2B2").s().p("AgPGxQgUgNgIgSIgBgDIgEgYIAAgGIgChFIAAgKIABgOIACgmQADghAAg4QANAEANADQgNgDgNgEIAAg2IAAgKIABgtQABgngCggIAeAGIgegGQgCgXgDgUQgDgYgKgdIgBgDIgCgFQgIgagNggIAAgCIgLghIAUABIgUgBIgCgEQgHgTgIgQIAOgCIgOACIgJgRIgMgRIgBgCQgWgugRgnIAAgBQAAgTAMgLQAVgSA+gJQBEgJAIAbIgNgCQAEASAiBsIANAmIAHAUQAlBzACATQAFAtABAiQABAXgBARIgJCBIgBAOQgSAFgVACIgBAAIgKABIgCAAIgLAAIAAAAIgBAAIgEAAIgFAAQgBgVABgWIAMiHIABgCQAGhPgQg3QgEgRgXg3QAOgCALgEIAlgMIglAMQgLAEgOACIgUgtIgBgEIAOgEQAVgFAZgQIADgCIgDACQgZAQgVAFIgOAEQgehGgCgwQg3APgSgGQgEAMAcA7IAXAuIAQAdIAHANIAkBBQAWAwACAlIADA0QACAngBAdQABA4gGA5IgBAHIgFBHIgCAvQgMgCgLgDQALADAMACIgDAYQgEAoADAaQAEAnATAVQASATAlgBIADAAIgBAAIgKABQgfAAgYgRgAAVgWIAJAAIAKgBQAZgCAVgIQgVAIgZACIgKABIgJAAIgBAAIAAAAIgCAAIgCAAIACAAIACAAIAAAAIABAAgACBGJQgIgZgZgXQghgXgOgMQgQgOgIgQIAWgFQAKgCAjgMQgjAMgKACIgWAFQgFgJgCgKQgNgxgCg2IAFAAIAEAAIABAAIAAAAIALAAIACAAIAKgBIABAAQAVgCASgFQAAAYACAaQAEAkAKAZIAAABQAIAVARAOIAkAdQAUASACAhQADAjgZAOQgIAFgUADIgPACQAdgMgKgfgABMCWIAAAAgAgsgfIAAAAgAhhjkIAAAAg");
	this.shape_4.setTransform(29.5,64.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECECEC").s().p("AgUH5IgEgDIgBgBIgGgHQgHgKgFgRQAIATAUANQAcATAlgDIABAAQAcgCAdgLIACAAIAPgDQAUgDAIgEQAZgOgDgkQgCghgUgSIgkgdQgRgNgIgWIAAAAIArgPIgrAPQgKgZgEglQgCgZAAgZIABgNIAJiBQABgSgBgXQAVgIAQgNQgBAzgEBXIAAAxQgTALgXAGQAXgGATgLQADBNAOAlQAGAPAJAIQAxAvAHAPQAQAdgTApQgNAbhbAPQgpAHgcAAQgiAAgQgLgABWAgQgBghgFgtQgCgTglhzIAtgPQAgBqAEApQACAQgBArQgQANgVAIIAAAAgAApi0IgHgVIgNglIAngbIgnAbQgihsgEgTIANADQgIgchEAJQg+AJgVATQgMALAAATIgNgiIgZhVIADAAQgCgJAGgPQATgrApgFQArgFAlANQAnAOARAeIAGALQAJAUANAhIAnBwIAHAVIAWBGIgtAPIAAAAg");
	this.shape_5.setTransform(29.5,58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mummy_leg1, new cjs.Rectangle(7.1,6.7,44.7,104.3), null);


(lib.mummy_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D1D1B").ss(1,0,0,4).p("Ak6iaIAADfQANgZAdgaQA6gyBQAAQBQAABgA8QAwAeAgAfIC0BgIANjAQgfgtg3gtQhvhah8AAQh8AAhoARQg0AIgcAIg");
	this.shape.setTransform(-7.7,20.1,0.606,0.606);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("ADNBWQhwg9gqglQg4gzhxgNQg/gJhFA3QgjAbgWAcIgBh2QATgPAKgNQAGgJBrgFQBYgEBcAAQA+gBB7BrQA9A0AxA1IAABEQgwgXg4gfg");
	this.shape_1.setTransform(-8.1,22.7,0.606,0.606);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D1D1B").ss(1,0,0,4).p("Ak6iaIAADfQANgZAdgaQA6gyBQAAQBQAABgA8QAwAeAgAfIC0BgIANjAQgfgtg3gtQhvhah8AAQh8AAhoARQg0AIgcAIg");
	this.shape_2.setTransform(-7.7,20.1,0.606,0.606);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDED").s().p("AB6BaQgggegwgfQhgg8hQAAQhQAAg6AzQgdAZgNAaIAAjgQAcgIA0gIQBogQB8AAQB8AABvBaQA3AtAfAtIgNC/g");
	this.shape_3.setTransform(-7.7,20,0.606,0.606);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAgQgMgNAAgTQAAgSAMgNQANgNAQAAQARAAAMANQANAOAAARQAAATgNANQgMAOgRAAQgQAAgNgOg");
	this.shape_4.setTransform(31.6,25.9,0.606,0.606);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("Ag/BKQgbgfAAgrQAAgrAbgeQAageAlgBQAmABAbAeQAaAeAAArQAAArgaAfQgbAfgmgBQglABgagfg");
	this.shape_5.setTransform(29.3,30.5,0.606,0.606);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#020303").ss(1,0,0,4).p("AhjBMQAYAKAhgCQAmgDAegQQBRgsgLht");
	this.shape_6.setTransform(50.5,15.6,0.606,0.606);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#020303").ss(2,0,0,4).p("AGhAxQAAD1heB8QhmCHjdAAQjuAAhciMQhGhqgOkLQgPkiB1idQBsiRDEAAQDVAABoCPQBsCTAAE3g");
	this.shape_7.setTransform(36.3,33.1,0.606,0.606);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7ECEB").s().p("AhIBeQgfgnAAg3QAAg2AfgnQAegnAqABQArgBAeAnQAfAnAAA2QAAA3gfAnQgeAmgrAAQgqAAgegmg");
	this.shape_8.setTransform(27.7,30.8,0.606,0.606);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#020303").ss(1,0,0,4).p("AlGAkQCHAJAxAAQAeAAAugGQBDgJAHAAQBAgGBCgPQAngJBWgVQAogJAVgO");
	this.shape_9.setTransform(38,58.2,0.606,0.606);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#020303").ss(1,0,0,4).p("AmdhsQArBMBsBDQBeA9AxACQB7AHAiABQBbACBDgHQBGgHApgCQASgCAjgIQAjgJASgC");
	this.shape_10.setTransform(35.7,33.2,0.606,0.606);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#020303").ss(1,0,0,4).p("ACpgkQhpAAhAAKQh1ARgvAv");
	this.shape_11.setTransform(21.3,24.6,0.606,0.606);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1D1B").ss(1,0,0,4).p("AlejAICrDUQC4DbBHAkQArAVB5AKQA9AEA0ABIgNj5Qg2AKhDgGQiGgKg9hLQhBhRglhwQgTg4gGgoIidApg");
	this.shape_12.setTransform(40,18.4,0.606,0.606,0,0,0,0.2,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AhvCKQg+gIhAglIg1gjIiCh8QgEgCAagOQAdgQApgOQB2gqBvAMQAbACA9BFQBIBRApAZQA6AkBnALQCJAOAOAEQAtAMjbAVQh9AMhfAAQhLAAg4gHg");
	this.shape_13.setTransform(36.2,31.1,0.606,0.606);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#020303").ss(1,0,0,4).p("AhaASQAqgNAxgIQAfgGA8gI");
	this.shape_14.setTransform(18.7,15.2,0.606,0.606);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AC1IMQhWAAhIggQhQgjgthFQhaiIAAixQgEhiAAgqQAAhCAVh+QAPhfBHhNQBOhUBkgKQgoAaglAoQgpArgVAoQgVApgGA4QgDAggDBDQgOCXgBA8QgDB7AWBXQAiCIBABCQAOAOAXAPIApAXQATALAfAFQAlAGANAFg");
	this.shape_15.setTransform(25.2,34.6,0.606,0.606);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#020303").ss(1,0,0,4).p("AEIgRQgnAChYANQhVALgsADQhQAFi/AB");
	this.shape_16.setTransform(35,4.8,0.606,0.606);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B2B2B2").s().p("AA5IrQhVgEhJgYQhMgYgjglQhWhdgdi2QgWiLAOigQALh7ASg6QAahSBEhLQAjgmAggRQAUgKA/gVQBOgbBaAFQB2AHBbBBQhwAAhZAwQhqA6gIBlQgNCLAND6QABAtACBJQACA5AMAhQAaBTB/BFQAjATAzgCQArgBAqgQQhJBSiuAAIglgBg");
	this.shape_17.setTransform(31.8,33,0.606,0.606);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EDEDED").s().p("AlKGdQhGhrgOkKQgPkiB1idQBriRDEAAQDWAABoCPQBsCTAAE3QAAD1heB8QhmCHjdAAQjvAAhbiMg");
	this.shape_18.setTransform(36.4,33.1,0.606,0.606);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D1D1B").ss(1,0,0,4).p("AgejJIh6CnIEaDsIAYhqg");
	this.shape_19.setTransform(3.9,10.7,0.606,0.606,0,0,0,0,0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B2B2B2").s().p("AiTgrIAuhJIAYgKQAegIAUAKQAVALBPBjQAoAxAkAvIgXAxg");
	this.shape_20.setTransform(3.8,11.7,0.606,0.606);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EDEDED").s().p("AiYgiIB6inIC3EpIgXBqg");
	this.shape_21.setTransform(3.9,10.5,0.606,0.606);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mummy_head, new cjs.Rectangle(-27.7,-2.8,90.3,70.4), null);


(lib.mummy_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AktgPQCdBDDPgWQCvgSA/gv");
	this.shape.setTransform(42.2,90.9,0.966,0.966,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("AkkgmQAaAaAhAJQAUAEArAIQA1APBwAKQBIAHBRgKQBQgKBDgY");
	this.shape_1.setTransform(40.1,81,0.966,0.966,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("AERggQhXAghCAPQhSAThOgBQgvAAhHgMQhegQgVgC");
	this.shape_2.setTransform(36.2,65.1,0.966,0.966,-11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,4).p("AjsgZQCOAmBSAIQA3AFBCAAQBSgBAvgJ");
	this.shape_3.setTransform(32.9,45.2,0.966,0.966,-11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,4).p("AjhgJQAPgDAfAGQAqAIAFABQAdADAtABQBDACAHABQBpAEBugO");
	this.shape_4.setTransform(31.1,41.1,0.966,0.966,-11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,0,0,4).p("AC/gdQiNBMjygX");
	this.shape_5.setTransform(28.1,26.6,0.966,0.966,-11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,0,0,4).p("ACcn3QgWgZhugDQhrgCg0AVQgWARgkBzQgcBcgMA+QgiCwgCAPQgWB7gBAxQgBAwgNBiQgEBVApAyQA7BHBQAZQA5ASBmAAQBkAABahFQBahGgChPQgBgmgNiBQgOiDgIgoQgpjZgLgxQgoi5gXgcg");
	this.shape_6.setTransform(36.6,64.4,0.966,0.966,-11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAZH1QgrgDgigOQgtgTgMgHQgRgJgXgUQgpgjgPgmQgTguADhJQAEhQAPhtQAOhgAThbQAQhjAJgrQAQhJAjg/QAbgyAKgLQAXgYAnACQBuAFA1gDIAIgBQg3AYg+AwQg1ApgkBTQgPAggLAxQgGAbgJA6IgPBcQgLA4gDAjIgMBwQgDBBAPAuQALAjAYAhQAQAWAiAkQAUAOAgAMIA2ATQApAOAWAEQAnAHAcgIQgJADgRAKQgSAJgKADQgSAFgsAIQgeAGgfAAIgUAAg");
	this.shape_7.setTransform(32.1,66,0.966,0.966,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AALgDIgKAGIgLABg");
	this.shape_8.setTransform(40,14.7,0.966,0.966,-11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B2B2").s().p("AgZIBQhmgBhEgwQg5gogWhSQgIgigNh4IgJhRQgFgwgBghQAAgWADg2QADgxgBgcQgCgzAGhjQAHh2ALgjQAIgZApgMQAJgDBGgPQATgEBAgHQA1gHAbgJQAWAWARAxQgOAOgsAYQgvAagOANQgPANACAjQABATAFAkIAICGQACAdAABZQABBEAGAwQAIA5AVA5QAVA7AaAgQAdAjAxAIQAnAEA1gNQAogJAngaQAugfgBgdQANAxgzBJQg0BMhHAeQhRAihWAAIgFAAg");
	this.shape_9.setTransform(40.9,64.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECECEC").s().p("AiCICQhQgZg7hHQgpgyAEhVQANhiABgwQABgxAWh7IAki/QAMg+AchcQAkhzAWgRQA0gVBrACQBuADAWAZQAXAcAoC5QALAxApDZQAIAoAOCDQANCBABAmQACBPhaBGQhaBFhkAAQhmAAg5gSg");
	this.shape_10.setTransform(36.5,64.3,0.966,0.966,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mummy_body, new cjs.Rectangle(8.5,11.6,64.8,105.1), null);


(lib.mummy_arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADrhIQAOAEAMAEQAPAFAOAFQApARAjAXQA5AkAVAtQACAFABAFQABABAAABQAMAlgTAaQgKALgMAGQgLAFgPAAQgKABgNgCQg4gKgegaQgGgFgYgaQgRgSgOgJABAAGQACAFACADQACADACACQABABACABQgbgEghgEQhKgKiCANQgRACgQABQgVACgUABQhVAHgsgEQgJAAgVgJQgQgGgNgGADrhIQgWAQgRAcQgCADgBADQgHAMgEAKAEig2QgfACgTAqQgCADgBAEQgDAHgDAIAjmiKQBHAFBCALQAGABCrAVQBaAMA9AQAg5giQABgLACgMQAAgEABgDQAHghAPgMAg4gKIgBgYAgzADQgCgEgBgGAA8hiQgGADgCAXQAAAHAAAGQAAALABAKQABAFABAHADgAxQgBAGAAAHQAAABAAACQAAACAAACQgBgBgBAAQgkgXg/gPQgUgEgbgFACyAsQAAgBAAgBQgBgGAAgGADfAwIAIgkACxAaIAGgaAA/AFIgIgfAnEijQAeAOAuAFQACAAADAAQAdACA4ABQAMAAALABQgQAmgDAgQAAAGAAAGQAAAPAEASQAAABAAABAkWgZIACACIAKAfAjmiKQgCANgCAaQgCARACAOQABAFABAEQADARAEAOAjSAFQAEAGAFAFQAAAAAAAAAjTAFIgLghAkHiMQAQAAARACAkMAIQACAHADAH");
	this.shape.setTransform(55.2,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AGGCOQgUgDgngoQgXgZgXgOIgBgBIAIgkIgIAkQgQgKgQgEIgOgEQgigJg6gMIgUgEIgCAAIgIgfIAIAfQhMgPgdABIgNABQhaAJhBAEIgBAAIgLghIALAhIg3ADIgKgfIAKAfIgCAAQgrACgagCQhsgEgjg5QgFgIgEgKIgGgEQgFgdAJgWIADgFQAHgOAJgFQAKgFAPACQASAEAEAKIAAAaQAAAwAcAVQAOALAPAAIAAABQAkAMA2gDIACAAIAjgEIAQgBIADAAQAxgFBQgCIAjAAIABAAQA7ABA1AIIAAAAQAmAFAjAJIA3AMIABAAIAmAIIAJAEIAAAAQAsATAyAzIAcAQQAWANABAFQABAMgUADIgPABQgHAAgGgBgADuAlIAHgagAAEAAIgBgYgAiWAQg");
	this.shape_1.setTransform(49.1,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6B5B").s().p("AFPCcQgggLgRgTQAeAbA4AJQANACALAAIgCAAIgMABQgWAAgZgJgAHCBMIAAAAIAAADIAAgDgAljAbQgrgBgYgGQgFgBgHgEIgBAAIgFgDQgEgDgEgFQAMAGAQAGQAVAIAJABQAtADBVgGIAogDIgQACQgzAGgxAAIgTAAgAnBikIACABIAKACIAOADQAuANAMgCIgEABIgFABQgugFgdgOg");
	this.shape_2.setTransform(55,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3B2B2").s().p("AGHCjQg4gJgegbIgggmIgCgCQgNgQgOgJIABgNIgBANIgMgGQgMgHgVgGIgBgLIAAgBIAAABIABALIgOgEIgxgNQgVgHgagEIgEgJIAEAJQgegGgmgBIgXAAQgYgBgcABIgngBQgZgBglAGIgZAEQgFgEgEgGQAEAGAFAEIgGABIgPADIgpADIgFgOIACAAIA3gDIABAAQBBgFBbgHIANgBQAcgBBMAOIABAAIAVAEQA6AMAiAJIAOAEQAQAEAQAKIABAAQAXAPAXAZQAnAoAUADQANADAPgDQAUgDgBgMQgBgFgWgNIgcgQQgygzgsgTIAGgQIADgGIgDAGIgGAQIAAAAIgJgEIgngIIgBAAQAEgLAHgLIADgHIgDAHQgHALgEALIg2gMQgjgJgmgFIAAAAIgCgMIgBgVIABAVIACAMQg1gIg7gBQABgLACgMIABgGIgBAGQgCAMgBALIAAAAIgkAAQhQACgxAEIgDABQgEgOgDgSIgCgIIACAIQADASAEAOIgQABIgjAEIgCgDQgEgRAAgPIAAgMIAAAMQAAAPAEARIAAADQg2ADgkgMIAAgBQgPAAgOgLQgcgVAAgwIAAgaQgEgKgSgEQgPgCgKAFQgJAFgHAOIgDAFQACgWAMgNQAGgGATADQAeAOAuAFQgbAJAGAUQAHAUAfAPQAOAHA/AEIAwACIAwABICFADQBGABAKACIAZACQA7AGA3APIAeAJQAZAJATAKQAgAPAPAUQAdAlA9ASQA7ARALgVIABADQAGAdgLAWQgLAZgdAHIgKACIgEAAQgJAAgKgCgAgeADIgDgJIADAJgAlzAaQgJgBgVgIQgQgGgNgGQgLgNgMgdIgGgPQAjA5BsAEQAaABArgBIAFAOQg2AEgmAAIglgBgAj3AJIAAAAgAkBgWIAAgDIACADIgCAAgAkBgWIAAAAgAkBgZg");
	this.shape_3.setTransform(53.1,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECECEC").s().p("AFhBtQg9gSgdglQgQgUgfgQQATgpAfgCQgfACgTApQgTgKgZgIIgegJQg3gPg7gGIAAgDIAAgLQABgWAGgEQgGAEgBAWIAAALIAAADIgZgCQgJgBhHgCQAGghAQgMQgQAMgGAhIiGgDIgvgBIgwgCQADggAQgnIAgACIgDAoIgBAMIABATIgBgTIABgMIADgoQBHAGBCALICyAWQBaALA9ARQgWAQgRAbQARgbAWgQIAaAHIAdALQApARAiAVQA6AmAUAtIAEAJQgGAMgUAAQgRAAgbgIgAl/g0QgfgPgHgUQgGgUAbgJIAEABQAeACA4AAIAXABQgQAngDAgQg/gEgOgHg");
	this.shape_4.setTransform(57.6,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E9983").s().p("AG4CFQALgWgGgeQAFAOAAANQAAAUgMAQQgJALgNAGQgHACgIABQAcgHALgYgAG2CQQAMgQAAgUQAAgNgFgOIAAgDIAAABIgEgKQgVgtg5gkQgigXgqgRIgdgKIgZgIQg+gQhagMIixgWQhCgLhHgFIghgCIgXgBQg4gBgdgCIgFAAIAFgCIADABQAdACA5AAQBlAEBbAQICyAWQBtAOBDAVQA7AUAuAeQA6AlAUAtQAUAsgXAeQgKANgPAGQANgGAJgLgADeBEIgCgBIAAgBIAAgCIAAACIAAABQgTgLgagKIAAgCIAAACQgXgIgegHQgWgFgfgFIg2gIQgSgCgXgBIAYAAQAlABAfAFIADAFIgDgFQAZAEAVAHIAxAOIAOADQAVAHAMAGIAMAHQAOAJANAPIACACQgPgOgMgIgAjMASIAZgFQAlgGAZABIAnABQgxACg9AGIgQABIAAAAIAAAAIgFABIAFgBgAjMASIAAAAgABCAQIAAAAgAnEihIAAgCIAKAEIgKgCg");
	this.shape_5.setTransform(55.5,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mummy_arm2, new cjs.Rectangle(5.4,5.6,96.1,34.9), null);


(lib.mummy_arm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEFBFQACgGADgGQAJgUAOgQQAPgRAVgKQAPgIAPgFQAZgIAcAAAD2hcQgZAAgUAZQgKANgIAUQgFAMgEAKQgHAVABAOQAAALAEAIAhaAKQBAgBAsAFQBPAKAtALQARADAPAEQA0APAhAUQARALAVAWQASATAJAJQAFAFADACQAiAfBDAMQA3AJAagjQAPgTgBgZQAAgTgLgXQgYg1hDgrQg1gihFgXQgagIgggHQg/gPhVgKQhDgIgtgFQgOAPgHAQQgIARABATQAAAIACANQACAPAFAWQACAFABAGAhUiBQgJAKgGAOQgIAVABAdQAAAFAAAFQABAYAGARQACAEACADQABACABABQABACACACQg5AChIAHQikARhJgFQgWgBgPgGQgEgCgDgCAoPi9QAMADAMACQAqAJArAFQAqAFArACQB6AFBmAQQAEABBbAL");
	this.shape.setTransform(65.9,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6B5B").s().p("AAtAZQghgbgUgOQgdgTgjgLIgCgBQA0APAgAUQARAKAVAWIAbAcQgOgKgQgNg");
	this.shape_1.setTransform(90.8,31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E9983").s().p("AGxC8Qg5gKghgYIAEACQAaAOAhAJIAqALIgPgCgAIFBQQgYg1hDgqQg1gjhFgWQgagIgfgIQg/gOhWgKIhwgOIhfgLQhmgRh6gFQgrgBgqgFQAgABA1ABQB0AEBsARIDPAZQCAAPBOAZQBFAXA1AiQBDArAYA1QAMAZgBAWQAAgUgLgXgAn0AZIAIADIgCABIgGgEgAhnAIIAJAAQAdgBAjADIAGABQgfgCgmABIgBgCIABACIgoACIAegEgAhdAKIAAAAgAoPi4IgBgFQAMAGANAEIgYgFg");
	this.shape_2.setTransform(65.9,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AGHBqQgIAHg6g1QhEg8gGgEIgCgCQglgUg1gNIgJgBIAAgBQAAgOAHgVIASAFQA5AOAdALIALAEQgOAQgJAUQAJgUAOgQQAkAPAhAYQAjAYATAaQAdAmgTAbgAA8g5QgygKg8gCIgHglIAHAlIgyAAIgQABQgGgRgBgYQABAYAGARQhdAEg3AAQgNAAgyAJQgwAJgOgBQgcgBAGgRQAGgRAlgPQAfgMA1gCQAdgBA5ACIBLABIBCADQBzAJBjAVQgHAVAAAOIAAABIhagRgACdhMIAAAAg");
	this.shape_3.setTransform(67.7,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B2B2").s().p("AG7CTIgpgKQghgJgbgOIgEgDIgTgLIgagcQgVgWgSgLQghgUg0gPIgBAAQgcgIgmgHIhGgMQgggFgcgDIgGAAIgDgMIADAMQgjgEgeABIgEgIIAEAIIgIABIgfADIgzAIQg8AJgcgEIAAAAIgGABQgrAEgmABQgqABgkgCQgagCgNgKQgQgNAFgYQAFgVAVgQQAQgOAYgIQAogOAhgGQAkgGAtAAQA4gHBxAKIAIABIA3AFQAxAFAZAFICSAUIARACQgKANgJAUIgIAWQhkgVhzgJQgCgNAAgIIAAgBQAAgTAHgQQgHAQAAATIAAABQAAAIACANIhCgDIAAgKIAAgCQAAgcAIgUQgIAUAAAcIAAACIAAAKIhKgBQg5gCgdABQg1ACgfAMQglAPgGARQgGARAcABQAOABAwgJQAygJANAAQA3AABdgEIAQgBIAyAAQA8ACAyAKIBaARQABALAEAHQgEgHgBgLIAJABQA1ANAkATIgEAMIAEgMIADACQAGAEBEA9QA6A1AIgHIAOAGQATgbgdgmQgTgagjgZQghgXgkgPIgLgEQgdgLg5gOIgSgFIAIgWQAJgUAKgNQBFAKAtATQAUAIAUALQgQAFgOAIQgVALgPARQAPgRAVgLQAOgIAQgFQAoAWAmAgQBCA4gBAuQAAAegMAMQgIAIgLABIgCAAQgFAAgNgDgAEFATIAAAAgAhjgiIAAAAgADFhpIAAAAg");
	this.shape_4.setTransform(66.4,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECECEC").s().p("AH/COQAAguhCg5QglgggpgVQgUgLgUgIQgtgShFgLIgQgCIiSgUQgZgFgygFQAHgQAPgPIBwANQBVAKA/APIAAAAIAAAAQgZAAgTAYIgBABIABgBQATgYAZAAIAAAAIAAAAQAgAHAZAIQBGAXA1AiQBDArAYA1QAKAXABATQgBAWgNASQgLAPgRAHQAMgNABgegAFvgOIADgBQAXgHAYAAIABAAIACAAIgCAAIgBAAQgYAAgXAHIgDABgAm8AgQgSgBgPgEIgEACIgHgEQgTgPgOgdQgNgegDggQgDggACgaQADguAUACIAAgBIAYAGQAeAJAoADIAPABQAqAFArACQB6AFBmAQIBfAMQgPAPgHAQIg3gFIgIgBQAGgOAJgKQgJAKgGAOQhxgJg4AGQgtAAgkAGQghAGgoAOQgXAIgRAOQgVAQgEAVQgGAXAQANQAOAKAaACQAkACApgBIg6ACIgmgBg");
	this.shape_5.setTransform(64.8,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mummy_arm1, new cjs.Rectangle(10.8,2.3,109,40), null);


(lib.lassoloop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("ABOklQBQAHA7BPQBBBYAAB8QAAB8hBBYQhABYhbAAQg+AAgwgoQgYgUgVgcQgQgXgMgYQgUAAgWgCQgUgCgQgDQgmgIgUgQQgegWAIgoQAHgnAPguQAOgvAWg2QAqhtBbg1QBWgzBQAdQADABAEABQBVAhgIA4QgHAsgjBJQgJATgKAUQg1BkgpA/QghA0hfABQgkhJAAhcQAAh8BAhYQAug+A6gSQABAAABAAQBbAAAMA7QALAxgHBeQgBARgCASQgMB4gPBOQgQBOh6AnQgBAAgBAAQh+AngPhTQgFgbgDgfQgHhCAAhVQAAh7BAhYQBAhXBZgBQAYgHAbAAQAIAAAIABg");
	this.shape.setTransform(28.2,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lassoloop, new cjs.Rectangle(-2.1,-2.1,60.7,65.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egr5AI9IAAx5MBXzAAAIAAR5g");
	mask.setTransform(359.2,57.3);

	// Layer 3
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,32.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(78.2,32.6,543.8,67), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+Kc/MAAAg59MA8VAAAMAAAA59g");
	mask.setTransform(193.1,185.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#929292").p("AA3A9IAAh5IhoA8g");
	this.shape.setTransform(76.7,298,1,1,0,0,0,0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#929292").s().p("Ag0AAIBpg8IAAB5g");
	this.shape_1.setTransform(77,298.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#929292").ss(2).p("AnXgDIOvAH");
	this.shape_2.setTransform(121.7,298.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#605F5F").ss(2).p("Ak/jRIJ/Gj");
	this.shape_3.setTransform(88.7,170);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#605F5F").ss(2).p("AkcCbII5k1");
	this.shape_4.setTransform(287.2,162.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#929292").p("Ag2g8IAAB5IBog9g");
	this.shape_5.setTransform(314.9,303.3,1,1,0,0,0,0,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#929292").s().p("Ag0g8IBpA8IhpA9g");
	this.shape_6.setTransform(314.7,303.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#929292").ss(2).p("AHYAEIuvgH");
	this.shape_7.setTransform(269.9,302.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(55.7,146,265.3,164.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+Kc/MAAAg59MA8VAAAMAAAA59g");
	mask.setTransform(193.1,185.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5).p("Au6Z3MAd1gzt");
	this.shape.setTransform(97.7,177);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAgAfQAeAfAAAqQAAArgeAfQggAfgrAAQgqAAgfgfg");
	this.shape_1.setTransform(194.2,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#605F5F").ss(2).p("AAAD/IAAn9");
	this.shape_2.setTransform(194.7,345.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#605F5F").ss(2).p("AAA5zMgd4AzxMA7xAAAg");
	this.shape_3.setTransform(193.2,177,1,1,0,0,0,0,0.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,386.2,371), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A+2etMAAAg9ZMA9tAAAMAAAA9Zg");
	mask_1.setTransform(197.5,196.5);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#929292").p("ABGBOIAAibIiGBNg");
	this.shape_8.setTransform(22.9,230.4,1,1,0,0,0,0,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#929292").s().p("AhCAAICFhNIAACbg");
	this.shape_9.setTransform(23.1,230.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#929292").ss(2).p("ArjgEIXHAJ");
	this.shape_10.setTransform(94,231.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#929292").p("AhFhNIAACbICGhOg");
	this.shape_11.setTransform(371.2,232.7,1,1,0,0,0,0,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#929292").s().p("AhChNICFBNIiFBOg");
	this.shape_12.setTransform(370.9,232.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#929292").ss(2).p("ALkAFI3HgJ");
	this.shape_13.setTransform(300,231.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(5).p("AvYgOIexAd");
	this.shape_14.setTransform(99.5,193.5);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,189.5,378.7,51.8), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A+2etMAAAg9ZMA9tAAAMAAAA9Zg");
	mask_1.setTransform(197.5,196.5);

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAfAAAqQAAArgfAfQgeAfgsAAQgqAAgfgfg");
	this.shape_4.setTransform(198.5,195.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#605F5F").ss(2).p("A+xgOMA9jAAd");
	this.shape_5.setTransform(198,193.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#605F5F").ss(2).p("AejAAQAAGOiaFrQiUFfkOEPQkPEOlfCUQlrCamOAAQmNAAlriaQlfiUkPkOQkOkPiVlfQiZlrAAmOQAAmNCZlrQCVlfEOkPQEPkOFfiVQFriZGNAAQGOAAFrCZQFfCVEPEOQEOEPCUFfQCaFrAAGNg");
	this.shape_6.setTransform(196.5,196.5);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,395.1,393), null);


(lib.button_entrance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3B02D").s().p("A9GsjIGPgEMAlegAEIOgZAMgx3AAXg");
	this.shape.setTransform(186.3,81.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(227,176,45,0.8)").s().p("A9GsjIGPgEMAlegAEIOgZAMgx3AAXg");
	this.shape_1.setTransform(186.3,81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.6,162.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_arm2();
	this.instance.parent = this;
	this.instance.setTransform(49.6,75.1,0.928,0.928,0,68.2,67.9,10,11.2);

	this.instance_1 = new lib.mummy_head();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.9,60.5,0.93,0.93,0,3,3.7,39.5,59.1);

	this.instance_2 = new lib.mummy_leg2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39,139,0.93,0.93,0,5.7,6.2,20,12.2);

	this.instance_3 = new lib.mummy_body();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61,105.9,0.93,0.93,13.2,0,0,41.1,58);

	this.instance_4 = new lib.mummy_leg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(69.3,145.6,0.873,0.93,0,3,4.7,19.9,9.3);
	this.instance_4.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 0, 0, 0, 0)];
	this.instance_4.cache(5,5,49,108);

	this.instance_5 = new lib.mummy_arm1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(51.4,63.6,0.847,0.848,0,54.9,56.4,8.7,11.3);
	this.instance_5.filters = [new cjs.ColorFilter(0.66, 0.66, 0.66, 1, 0, 0, 0, 0)];
	this.instance_5.cache(9,0,113,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(1.2,0.4,107.9,242.1), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(54.2,120.8,1,1,0,0,0,54.2,120.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regY:244.1,y:244.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.4,107.9,242.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(54.2,242.6,1,1,0,0,0,54.2,242.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.2,x:54.3,y:242.7},23).to({rotation:0,x:54.2,y:242.6},24).to({rotation:-3.2,x:54.3,y:242.7},24).to({rotation:0,x:54.2,y:242.6},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.4,107.9,242.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arm2
	this.instance = new lib.mummy_arm2();
	this.instance.parent = this;
	this.instance.setTransform(-308.5,-49.7,0.928,0.928,0,-64.9,115.1,10.1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:11.2,skewX:-32.4,skewY:147.6,x:-308.6,y:-49.8},8).wait(1).to({regY:11.3,skewX:-64.9,skewY:115.1,x:-308.5,y:-49.7},8).wait(1));

	// Head
	this.instance_1 = new lib.mummy_head();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-296.3,-64.5,0.93,0.93,0,3,3.7,39.5,59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:9,skewY:9.7,x:-292.3,y:-65.5},8).wait(1).to({skewX:3,skewY:3.7,x:-296.3,y:-64.5},8).wait(1));

	// JoiningLoop
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AFPCbQiHACiXglQkuhLhRjH");
	this.shape.setTransform(-345.7,-169.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AkHjFQBFDIDqBsQB2A6BqAd");
	this.shape_1.setTransform(-326.6,-170);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AjAjvQA5DKCmCKQBVBQBNA7");
	this.shape_2.setTransform(-307.4,-170.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("Ah4kaQAsDLBiCrQA0BkAvBb");
	this.shape_3.setTransform(-288.3,-171.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AAyFFIhjqJ");
	this.shape_4.setTransform(-269.2,-172.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AgxFKIBjqT");
	this.shape_5.setTransform(-248.2,-169.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AhhFCQA3h2AxiBQBejSgDi6");
	this.shape_6.setTransform(-230.4,-165.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AiVE5QBahmBQh9QCejggkiu");
	this.shape_7.setTransform(-212.2,-161.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AjKExQB9hXBuh4QDfjwhFii");
	this.shape_8.setTransform(-193.9,-157.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AigEXQBihWBWhuQCtjRguiY");
	this.shape_9.setTransform(-207.9,-157.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("Ah2D9QBGhVA/hkQB7izgWiN");
	this.shape_10.setTransform(-221.8,-157);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AhODiQAshSAmhbQBKiUABiC");
	this.shape_11.setTransform(-235.6,-156.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AgnDIIBPmP");
	this.shape_12.setTransform(-249.2,-156.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AAeC0Ig7ln");
	this.shape_13.setTransform(-267.2,-157.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AhpitQAiCHBZBmQAuA8AqAy");
	this.shape_14.setTransform(-286.8,-160.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("Ai2inQAzCdCfBdQBRA0BKAh");
	this.shape_15.setTransform(-306.4,-163.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AkCigQBCCxDnBUQB0AtBoAP");
	this.shape_16.setTransform(-326.1,-166.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Loop
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AQJAAQAAA3kuAmQkvAnmsAAQmrAAkugnQkvgmAAg3QAAg1EvgnQEugnGrAAQGsAAEvAnQEuAnAAA1g");
	this.shape_17.setTransform(-278.6,-189.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(18));

	// Rope2
	this.instance_2 = new lib.lassoloop();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-320.7,28.4,1,1,0,0,0,28.2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-362.7,y:4.4},8).wait(1).to({x:-364.5,y:8.9},0).to({x:-319.7,y:26.4},8).wait(1));

	// Rope1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AkeOYQBigmBxhLQDhiVBTiyQAMgYAJgaQAsh/gPijQgWjtiUk6QiGkeilje");
	this.shape_18.setTransform(-294.6,-61.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("Ak2N5QBjgkByhFQAsgbAogbQClhzBMiCQAOgXALgXQAkhKAMhVQAJgzABg6QAAjfhwlAQgHgUgHgUQhjkHh9jV");
	this.shape_19.setTransform(-296.8,-61.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AlTNbQBkgjB0g/QAtgYAqgZQCphpBWh2QAPgUANgVQAthCAUhNQAPguAIg3QAVjShLlHQgFgVgFgVQhGkIhkjb");
	this.shape_20.setTransform(-298.5,-60.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("Al2M8QBlggB2g6QAugWArgXQCthfBhhoQARgSAOgTQA2g7AchEQAVgpAPg1QAqjFgmlOQgDgVgDgWQgpkIhKjh");
	this.shape_21.setTransform(-299.7,-60.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AmkMdQBmgeB4g0QAugUAtgUQCyhWBqhbQATgPAQgRQA+g1Alg6QAagkAWg0QBAi3gClVQAAgVgBgWQgNkJgwjn");
	this.shape_22.setTransform(-299.7,-60.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AnhL/QBogcB5guQAvgSAvgSQC2hMB0hNQAVgOASgOQBGguAtgyQAggfAegxQBViqAilcQACgWACgWQAPkLgVjs");
	this.shape_23.setTransform(-298.3,-59.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AovLgQBogaB7goQAwgPAxgRQC8hBB8hBQAWgLAVgLQBOgoA1goQAmgbAlgvQBricBGljQAFgXAEgXQArkLAFjz");
	this.shape_24.setTransform(-295,-59.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AqELCQBqgYB9gjQAwgNAxgOQDBg3CHg0QAYgJAWgJQBXghA9gfQAtgWAqgtQCBiPBrlpQAGgXAHgYQBIkMAfj6");
	this.shape_25.setTransform(-291.2,-59.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("ArZKjQCVgeC5grQFxhWC7g8QDVhFDHoZQBkkNA5j/");
	this.shape_26.setTransform(-287.3,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// Leg2
	this.instance_3 = new lib.mummy_leg2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-319.1,14,0.93,0.93,0,5.7,6.2,20,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:20.1,skewX:9.7,skewY:10.2,x:-319},8).wait(1).to({regX:20,skewX:5.7,skewY:6.2,x:-319.1},8).wait(1));

	// Body
	this.instance_4 = new lib.mummy_body();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-297.2,-19,0.93,0.93,12.4,0,0,41.1,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:22.2,x:-297.1,y:-19.1},8).wait(1).to({rotation:12.4,x:-297.2,y:-19},8).wait(1));

	// Leg1
	this.instance_5 = new lib.mummy_leg1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-288.7,20.6,0.872,0.929,0,-7.1,-5.3,20,9.3);
	this.instance_5.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 0, 0, 0, 0)];
	this.instance_5.cache(5,5,49,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.87,scaleY:0.93,skewX:-7.2,skewY:-5.5,x:-288.8},8).wait(1).to({scaleX:0.87,scaleY:0.93,skewX:-7.1,skewY:-5.3,x:-288.7},8).wait(1));

	// Arm1
	this.instance_6 = new lib.mummy_arm1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-296.7,-35.3,1.125,0.848,0,90.4,-91.1,8.6,11.1);
	this.instance_6.filters = [new cjs.ColorFilter(0.66, 0.66, 0.66, 1, 0, 0, 0, 0)];
	this.instance_6.cache(9,0,113,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:142.6,skewY:-38.9},8).wait(1).to({skewX:90.4,skewY:-91.1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-204.9,210.9,322.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(149.6,72.5,1,1,0,0,0,149.6,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.2,145.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C18E00").s().p("AwVJOQhHAAgygxQgxgzAAhGIAAtHQAAhHAxgxQAygyBHAAMAgrAAAQBHAAAyAyQAyAxgBBHIAANHQABBGgyAzQgyAxhHAAgAyHoUQguAvAABCIAANHQAABDAuAuQAvAvBDAAMAgrAAAQBDAAAvgvQAuguAAhDIAAtHQAAhCgugvQgvgvhDAAMggrAAAQhDAAgvAvg");
	this.shape.setTransform(149.6,72.6,1.23,1.23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EFBB00","#CC9900"],[0,1],0,-59,0,59).s().p("AwVJOQhHAAgygxQgxgzAAhGIAAtHQAAhHAxgxQAygyBHAAMAgrAAAQBHAAAyAyQAyAxgBBHIAANHQABBGgyAzQgyAxhHAAg");
	this.shape_1.setTransform(149.6,72.6,1.23,1.23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C18E00").s().p("AwVJOQhHAAgxgyQgzgyAAhGIAAtHQAAhHAzgxQAxgyBHAAMAgrAAAQBHAAAyAyQAxAxAABHIAANHQAABGgxAyQgyAyhHAAgAyHoUQguAvgBBCIAANHQABBCAuAvQAvAvBDAAMAgrAAAQBDAAAugvQAvgvAAhCIAAtHQAAhCgvgvQgugvhDAAMggrAAAQhDAAgvAvg");
	this.shape_2.setTransform(149.6,72.5,1.23,1.23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDF400","#F7CD00"],[0,1],0,-59,0,59).s().p("AwVJOQhHAAgxgyQgzgyAAhGIAAtHQAAhHAzgxQAxgyBHAAMAgrAAAQBHAAAyAyQAxAxAABHIAANHQAABGgxAyQgyAyhHAAg");
	this.shape_3.setTransform(149.6,72.5,1.23,1.23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EFBB00","#B18000"],[0,1],0,-59,0,59).s().p("AwVJOQhHAAgxgyQgzgyAAhGIAAtHQAAhHAzgxQAxgyBHAAMAgrAAAQBHAAAyAyQAxAxAABHIAANHQAABGgxAyQgyAyhHAAg");
	this.shape_4.setTransform(149.6,72.5,1.23,1.23);

	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(149.6,72.5,1,1,0,0,0,149.6,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.3,145.2);


(lib.mummy_standing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_arm2();
	this.instance.parent = this;
	this.instance.setTransform(32.5,70,0.928,0.928,0,68.2,67.9,10,11.2);

	this.instance_1 = new lib.mummy_head();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.7,55.4,0.93,0.93,0,3,3.7,39.5,59.1);

	this.instance_2 = new lib.mummy_leg2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.9,133.9,0.93,0.93,0,5.7,6.2,20,12.2);

	this.instance_3 = new lib.mummy_body();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.9,100.8,0.93,0.93,13.2,0,0,41.1,58);

	this.instance_4 = new lib.mummy_leg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.2,140.5,0.873,0.93,0,3,4.7,19.9,9.3);
	this.instance_4.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 0, 0, 0, 0)];
	this.instance_4.cache(5,5,49,108);

	this.instance_5 = new lib.mummy_arm1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(34.2,58.5,0.847,0.848,0,54.9,56.4,8.7,11.3);
	this.instance_5.filters = [new cjs.ColorFilter(0.66, 0.66, 0.66, 1, 0, 0, 0, 0)];
	this.instance_5.cache(9,0,113,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mummy_standing, new cjs.Rectangle(-16,-4.7,107.9,242.1), null);


(lib.mummy_leg_mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_leg1();
	this.instance.parent = this;
	this.instance.setTransform(25.1,14.5,0.949,0.949,-23.3,0,0,20,9.4);
	this.instance.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 0, 0, 0, 0)];
	this.instance.cache(5,5,49,108);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.1,regY:9.5,scaleX:0.95,scaleY:0.97,rotation:14.8},11).to({scaleX:0.9,scaleY:0.83,rotation:-4.5},6).to({regX:20,regY:9.4,scaleX:0.95,scaleY:0.95,rotation:-23.3},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.2,0.4,77,106.9);


(lib.mummy_leg_mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_leg2();
	this.instance.parent = this;
	this.instance.setTransform(20,12,0.999,0.999,-3.6,0,0,19.9,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:0.89,rotation:-21.9,x:19.9,y:11.9},6).to({regY:12,scaleY:1.04,rotation:-36.8,x:20},5).to({regY:11.9,scaleY:0.98,rotation:-18.6,x:19.9},6).to({regY:12.1,scaleX:1,scaleY:1,rotation:-0.6,x:20,y:12.1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,7.8,39.7,114.6);


(lib.mummy_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_head();
	this.instance.parent = this;
	this.instance.setTransform(42.3,63.9,0.999,0.999,-9.8,0,0,39.5,59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.2,x:42.2},5).to({rotation:-9.8,x:42.3},6).to({rotation:-5.2,x:42.2},6).to({rotation:-9.8,x:42.3},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,0.3,98.4,77);


(lib.mummy_arms_mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_arm1();
	this.instance.parent = this;
	this.instance.setTransform(9.5,20.5,0.998,0.998,-19.3,0,0,8.6,11.3);
	this.instance.filters = [new cjs.ColorFilter(0.66, 0.66, 0.66, 1, 0, 0, 0, 0)];
	this.instance.cache(9,0,113,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.6},11).to({rotation:-19.3},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.7,-24.1,115,72.6);


(lib.mummy_arms_mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_arm2();
	this.instance.parent = this;
	this.instance.setTransform(11,11.6,1.097,0.998,1.7,0,0,10.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10,scaleX:1.08,rotation:-27.9},11).to({regX:10.1,scaleX:1.1,rotation:1.7},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,6.4,105.8,36.9);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A+Kc/MAAAg59MA8VAAAMAAAA59g");
	mask_1.setTransform(193.1,185.5);

	// Layer 3
	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193.1,185.5,1,1,0,0,0,193.1,185.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929292").s().p("AhJCPIB7j8IAAgBIiLAAIAAggICzAAIAAAaIh7EDg");
	this.shape.setTransform(199.6,298.5);

	this.instance_2 = new lib.ClipGroup_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193,186,1,1,0,0,0,193,186);

	var maskedShapeInstanceList = [this.instance_1,this.shape,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,386.3,371), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A+2etMAAAg9ZMA9tAAAMAAAA9Zg");
	mask_2.setTransform(197.5,196.5);

	// Layer 3
	this.instance_3 = new lib.ClipGroup_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(196.8,196.5,1,1,0,0,0,196.8,196.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#929292").s().p("AhaCRIAAgYIAegdIAwgvQATgVANgRQANgQAGgQQAGgPABgQQAAgMgDgJQgDgLgHgHQgHgIgKgFQgMgEgOAAQgSAAgRAIQgNAGgNAKIgMgbQAQgNATgIQAWgIAYAAQAVAAARAHQARAHALAMQAKALAFAQQAFAOAAAQQAAATgHATQgGASgNASQgMARgTAUIgoApIgXAVIAAABIB/AAIAAAgg");
	this.shape_1.setTransform(206,232.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#929292").s().p("AAKCPIAAj5IAAAAIgxAbIgIgeIA+ghIAhAAIAAEdg");
	this.shape_2.setTransform(181.8,232.5);

	this.instance_4 = new lib.ClipGroup_0_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(198,196.5,1,1,0,0,0,198,196.5);

	var maskedShapeInstanceList = [this.instance_3,this.shape_1,this.shape_2,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,395.1,393), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mummy_standing();
	this.instance.parent = this;
	this.instance.setTransform(60.2,239.2,1,1,0,0,0,43,234.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.1,rotation:3.7},26).to({regX:43,rotation:0},24).to({regX:43.1,rotation:3.7},24).to({regX:43,rotation:0},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.4,107.9,242.1);


(lib.mummy_whole_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arms_mc1
	this.instance = new lib.mummy_arms_mc1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.8,69.4,0.93,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// head_mc
	this.instance_1 = new lib.mummy_head_mc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// leg_mc1
	this.instance_2 = new lib.mummy_leg_mc1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.3,135.6,0.93,0.93);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

	// body
	this.instance_3 = new lib.mummy_body();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.3,109.1,0.93,0.93,0,0,0,41,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// leg_mc2
	this.instance_4 = new lib.mummy_leg_mc2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(49.8,131.3,0.9,0.93);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

	// arms_mc2
	this.instance_5 = new lib.mummy_arms_mc2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(30.9,56.8,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,4.2,166,244.7);


(lib.mummy_walking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.lassoloop();
	this.instance.parent = this;
	this.instance.setTransform(60.9,123.4,1,1,0,0,0,28.2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:44.3,y:127.2},6).to({x:65.2,y:125.2},5).to({x:41.4,y:128.9},6).to({x:60.9,y:123.4},6).wait(1));

	// Layer 1
	this.instance_1 = new lib.mummy_whole_body("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.6,-8,0.996,0.958,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.96,rotation:5.5,x:23.2,y:-2.3,startPosition:6},6).to({scaleY:0.96,rotation:16.3,x:66.6,y:-8,startPosition:11},5).to({scaleY:0.96,rotation:5.5,x:23.2,y:-2.3,startPosition:17},6).to({scaleY:0.96,rotation:16.3,x:66.6,y:-8,startPosition:23},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.8,-1.2,150.9,237.2);


// stage content:
(lib.TestUI = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(1);
		}
		this.stop()
	}
	this.frame_1 = function() {
		this.button_2.addEventListener("click", fl_ClickToPosition.bind(this));
		
		function fl_ClickToPosition()
		{
			this.count = 0;
		
			if(this.mummy.x < 400)
			{
				this.count = 400 - this.mummy.x;
			}
			else if (this.mummy.x > 400)
			{
				this.count = this.mummy.x - 400;
		
			}
			
			for(var i = 0; i < this.count; i ++)
			{
				if(this.mummy.x <= 400)
					{		
						this.mummy.x += 1;
					}
				else if (this.mummy.x >= 400)
					{		
					this.mummy.x -=1;
				}
			}
			
			console.log(this.count);
		}
		
		this.button_3.addEventListener("click", fl_ClickToPosition_2.bind(this));
		
		function fl_ClickToPosition_2()
		{
			this.mummy.x = 800;
		}
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B4B4B4").ss(0.5).p("ABOBQQAAAXgQAOQgPAOgcAAQgHAAgHgCIgegHQgJgDgEgEQgKgJgIgOIgOgYQgHgLAAgDQAAgGAIgDQAEgBAFAAQALAAAUADQATACABACQACACADAWQADAUAFAAQAKAAAAgaQAAgigRgIQgpgTgLgNQgQgSAAglQAAgYAMgVQAMgVASgEQAJgCAnASIAWAEQANACAGAHQAIAKABAVIAAAfIADAQQAAAMgMACQgFAAgRgFQgTgGgFgHQgBgCgCgdQgBgcgFAAQgFAAgFAQQgGARAAARQAAAWAKAGIAoAWQAVAMAHAMQALAQAAAag");
	this.shape.setTransform(393.5,207.5,0.69,0.69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFCBIgegHQgIgDgFgEQgKgJgIgOIgOgYQgHgLABgDQAAgGAHgDIAIgBQANAAATADQATACABACQACACAEAWQACAUAFAAQAKAAAAgaQAAgigRgIQgogTgMgNQgQgSAAglQAAgYANgVQALgVASgEQAIgCAnASIAXAEQAMACAHAHQAIAKABAVIAAAfIADAQQAAAMgLACQgGAAgSgFQgSgGgFgHQgBgCgCgdQgBgcgEAAQgGAAgGAQQgFARAAARQAAAWAKAGIAnAWQAWAMAHAMQALAQAAAaQAAAXgQAOQgQAOgbAAQgHAAgHgCg");
	this.shape_1.setTransform(393.5,207.5,0.69,0.69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B4B4B4").ss(0.5).p("AAKhSQgGgBgMAXQgNAXgCAWQATAAAKgIQAHgGAAgkQAAgQgDgBgABVAtQAEAHgUAfQgWAggVANIgIABQgRAAgYgKQgbgKgKgMQgZggAAg4QAAgyAWgqQAXgrAjgCQAOAAARAHQAWAJAPAPQAEAEADATQAFAVAAASQAAAcgKALQgpANguACQgBAWAGAWQAGAWAGAAQAIAAAMgOQAJgLAEgJQADgNAFgNQAGgBAUAIQATAHAEAGg");
	this.shape_2.setTransform(380.1,207.7,0.69,0.69);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXB2QgbgJgKgMQgZggAAg4QAAgyAWgqQAXgrAjgCQAOAAARAIQAWAIAPAPQAEAFADASQAFAVAAASQAAAcgKALQgpANguACQgBAWAGAVQAGAXAGABQAIgBAMgOQAJgLAEgJQADgOAFgMQAGAAAUAHQATAHAEAGQAEAHgUAeQgWAigVALIgIACQgRAAgYgLgAgIg7QgNAWgCAXQATgBAKgIQAHgGAAgkQAAgQgDgBIAAAAQgHAAgLAXg");
	this.shape_3.setTransform(380.1,207.7,0.69,0.69);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B4B4B4").ss(0.5).p("AAnigIgCAIIgCAGQgDAMgCAOIAAEAQAAAFACAEQADAEAAADQAAAagKADQgEAAgWgGQgXgGgEgEQgKgIAAgHQAAgCACgCQACgCAAgFIAAkmQAAgDgCgCQgBgDAAgDQABgJAOgEQAFgBANABQAQABAKAEQARAEAAAKg");
	this.shape_4.setTransform(369.5,204.5,0.69,0.69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBCvQgXgGgEgEQgKgIAAgHQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQACgCAAgFIAAkmIgCgFIgBgGQABgJAOgEIASAAQAQABAKAEQARAEAAAKIgCAIIgCAGIgFAaIAAEAQAAAFACAEQADAEAAADQAAAagKADIgBAAQgFAAgUgGg");
	this.shape_5.setTransform(369.5,204.5,0.69,0.69);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B4B4B4").ss(0.5).p("ABaArQAAAIgOANQgLAagJAKQgUAZgbAFIgLABQgXAAgigXQgegUAAhJQAAg0AQgsQASgvAagCQAVgBAdAMQAdAMALAPQAJANAAATIgCAeIABALIAAABQAAANgNgBQgPAAgNgFQgSgGgEgLQgBgEAEgGQAFgGgBgFQABgDAAgLQAAgZgJgBQgMgBgJApQgJAnAAApQAAAzANADQAJACAPgXQANgUABgGIACgOQADgMAMABQAHAAATAKQATAIABAFg");
	this.shape_6.setTransform(358.4,207.3,0.69,0.69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BsQgegUAAhJQAAg0AQgsQASgvAagCQAVgBAdAMQAdAMALAPQAJANAAATIgCAeIABALIAAABQAAANgNgBQgPAAgNgFQgSgGgEgLQgBgEAEgGQAFgGgBgFQABgDAAgLQAAgZgJgBQgMgBgJApQgJAnAAApQAAAzANADQAJACAPgXQANgUABgGIACgOQADgMAMABQAHAAATAKQATAIABAFIABAHQAAAIgOANQgLAagJAKQgUAZgbAFIgLABQgXAAgigXg");
	this.shape_7.setTransform(358.4,207.3,0.69,0.69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B4B4B4").ss(0.5).p("ABPhiQACAGgGAFIgKAFIhHBsQAABDABABIADALQACAJAAAFQAAAIgHADQgGACgGAAQgQAAgTgIQgZgIAAgNQAAgEAEgIQADgKAAgEIAAilIgFgYQAAgNAMgDQAGgCAGAAQAQAAAPAFQAQAFADAFIABAFIgGAUIAAAUIATgkQANgXAGgBQAKgCASANQATANACAIg");
	this.shape_8.setTransform(346.3,207.4,0.69,0.69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2B8QgZgIAAgNQAAgEAEgIQADgKAAgEIAAilIgFgYQAAgNAMgDQAGgCAGAAQAQAAAPAFQAQAFADAFIABAFIgGAUIAAAUIATgkQANgXAGgBQAKgCASANQATANACAIQACAGgGAFIgKAFIhHBsIABBEIADALQACAJAAAFQAAAIgHADQgGACgGAAQgQAAgTgIg");
	this.shape_9.setTransform(346.3,207.4,0.69,0.69);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B4B4B4").ss(0.5).p("AAqiNIAAAEQAAAKgEAOQgEAQgEABQgEACgfgLQgfgKgDgFQgBgCAAgEQAAgLAGgNQAHgPAIgBQAKgCAWAJQAYAJAFAJgAAoCUQACAPgMAEIgGAAQgQAAgUgGQgZgHgDgHQgCgEAFgJQAEgHAAgQIAAivQgFgPAAgHQAAgFAQAAQANAAAVAIQAWAHAFAGIABAEQAAAEgFAJQgFAJAAAFIAACnQAAAFAFAGQAEAFABAEg");
	this.shape_10.setTransform(335.4,205.1,0.69,0.69);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMChQgZgHgDgHQgCgEAFgJQAEgHAAgQIAAivQgFgPAAgHQAAgFAQAAQANAAAVAIQAWAHAFAGIABAEQAAAEgFAJQgFAJAAAFIAACnQAAAFAFAGQAEAFABAEQACAPgMAEIgGAAQgQAAgUgGgAgFhpQgfgKgDgFQgBgCAAgEQAAgLAGgNQAHgPAIgBQAKgCAWAJQAYAJAFAJIAAAEQAAAKgEAOQgEAQgEABIgBABQgHAAgbgKg");
	this.shape_11.setTransform(335.4,205.1,0.69,0.69);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B4B4B4").ss(0.5).p("ABtBSQgBAKgHAHQgMAagZAaQgbAcgRAAIgFAAQgTgGgVgJQgpgQgWgwQgUgqAAg5QAAhEAbg1QAcg4AqgCQAQgBAfASQAgARAKASQAKARAEA7QABAMgFANQgEAQgJgCQgPgCgWgHQgbgJgBgGIgBgDQAAgEADgGQAEgFAAgEQACgQAAgQQAAgWgFgJQgZAUgMAqQgLAmAAAsQAAAkAGAbQAGAcAJAGQAFACASgTQASgTAGgMIAEgOQACgHAFgCQAGgCAeAOQAdAPAAAFg");
	this.shape_12.setTransform(323.3,204.3,0.69,0.69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPCzIgogPQgpgQgWgwQgUgqAAg5QAAhEAbg1QAcg4AqgCQAQgBAfASQAgARAKASQAKARAEA7QABAMgFANQgEAQgJgCQgPgCgWgHQgbgJgBgGIgBgDQAAgEADgGQAEgFAAgEQACgQAAgQQAAgWgFgJQgZAUgMAqQgLAmAAAsQAAAkAGAbQAGAcAJAGQAFACASgTQASgTAGgMIAEgOQACgHAFgCQAGgCAeAOQAdAPAAAFQgBAKgHAHQgMAagZAaQgbAcgRAAg");
	this.shape_13.setTransform(323.3,204.3,0.69,0.69);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#9A9999").p("AAkgIQAEAOgIANQgIAOgPADQgOAEgOgHQgNgIgEgQQgDgOAHgNQAIgNAPgEQAOgEAOAIQANAIAEAPg");
	this.shape_14.setTransform(338.7,349.9,0.915,0.915);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9A9999").s().p("AgTAhQgNgIgEgQQgDgOAHgNQAIgNAPgEQAOgEAOAIQANAIAEAPQAEAOgIANQgIAOgPADIgJACQgKAAgJgFg");
	this.shape_15.setTransform(338.7,349.9,0.915,0.915);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9A9999").p("AAkgJQAEAOgIAOQgIANgPAEQgOAEgNgIQgNgIgEgPQgEgOAIgOQAIgNAPgEQAOgDANAHQAOAIADAPg");
	this.shape_16.setTransform(451.1,349.9,0.915,0.915);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9A9999").s().p("AgSAgQgNgIgEgPQgEgOAIgOQAIgNAPgEQAOgDANAHQAOAIADAPQAEAOgIAOQgIANgPAEIgJACQgJAAgJgGg");
	this.shape_17.setTransform(451.1,349.9,0.915,0.915);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#9A9999").p("ApuAAITdAA");
	this.shape_18.setTransform(395,349.9,0.915,0.915);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E60053").p("AFlgGIrJAM");
	this.shape_19.setTransform(362.7,337.3,0.915,0.915);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E60053").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_20.setTransform(395.3,336.7,0.915,0.915);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#9A9999").p("Aq9AAIV7AA");
	this.shape_21.setTransform(394.2,337.3,0.915,0.915);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#9A9999").p("ALEAAQAACQg4CDQg2B/hiBiQhiBih/A2QiDA4iQAAQiPAAiEg4Qh/g2hihiQhihig1h/Qg4iDAAiQQAAiPA4iEQA2h+BhhiQDQjQEkAAQCQAACDA4QB/A2BiBiQBiBiA2B+QA4CEAACPg");
	this.shape_22.setTransform(395.3,334.4,0.915,0.915);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#56390A").s().p("AACAwIgFgBIgGgCQgDAAgCgCIgGgJIgFgJIgDgFQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIADgBIAMACQAHAAABABIABAJQABAHABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgHQAAgNgGgDIgMgGQgFgDgCgCQgDgDgBgGQgCgFAAgGQAAgJAFgIIAFgGQADgDADAAQADgBAOAHIAIABQAFABACADQADADAAAIIABALIABAHQAAAEgFAAQgCABgGgCQgHgDgCgCIgBgMQAAgKgCAAQgCAAgBAGQgCAGAAAHIAAAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAOAHQAIAFADAEIADAHIABAJQAAAIgGAGQgDACgEACIgJABg");
	this.shape_23.setTransform(482.3,630.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#56390A").s().p("AAQAvQgHgCgCgBIAAgCIACgGIADgFIgCg9QgCgBgIAPQgIAQAAAHIAAAdQACACAAADQAAADgCACQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAIgCAAIgNgCQgHgCgCgBIgBgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIACgCIAAhIIgBgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgEAEgBQADAAAIACQAKADABACIAAAFIgCAHIABADQACgHAEgGQAEgIAFAAQAGAAAIAEQAJAEABADQACAEABATQACARgBAgIABAGQABAEgEACIgEABIgNgCg");
	this.shape_24.setTransform(474.6,630);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#56390A").s().p("AAJA+QgGAAgHgCQgJgDgBgDQgBgBACgEQACgCAAgGIAAhAIgCgIQAAgCAGAAQAEAAAHADQAJADABACIABABIgCAFIgCAFIAAA9QAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIACAEQABAFgFACgAgBgmQgMgEgBgCIAAgCQAAgEACgFQADgFADgBQADgBAIAEQAJADACAEIAAABIgCAJQgBAFgCABIAAAAIgMgDg");
	this.shape_25.setTransform(468,628.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#56390A").s().p("AAmAvQgHgCgBgBIgBgCIACgGIADgFIgBg9QgDgBgIANQgIAPAAAJIAAAfIABAFQAAAEgEACIgEABIgLgCQgIgCgBgBIgBgCIADgFIACgGIgBg9QgCgBgJAPQgJAQAAAHIAAAdQACACAAADQAAADgBACQgBACgDABIgCAAIgMgCQgIgCgBgBIgBgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIABgCIAAhIIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEAEgBQADAAAJACQAKADABACIgBAFIgBAHIAAADQACgHAFgGQAFgIAFAAQAFAAAIAEQAHAEACADQACABABAKIAIgOQAFgIAFAAQAFAAAIAEQAJAEABADQACAEABATIABAxIABAGQAAAEgDACIgEABIgNgCg");
	this.shape_26.setTransform(459.2,630);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#56390A").s().p("AAABCIgHgDIgOgFQgIgDgEgUQgFgSAAgVQAAgYAFgQQAFgSAKgEIABAAIADABIACAAQAFgBAEAAQAFAAAIACIANAEQAEABADAEQADAEACAHQAEAOAAATQAAAXgHAWQgEARgHAIQgHAIgIAAIgGgBgAgHgiQgEAOAAASQAAANAEARIADAMQACAEABAAQACAAACgEQADgGACgJQADgRAAgUQAAgQgBgLIgEgIQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgGAAgEAQg");
	this.shape_27.setTransform(448.3,628.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#56390A").s().p("AgfA+IgHgFQgCgBAAgDIANgVQARgXAIgPQANgZACgOQgNAFgLARIgBACIgBAEQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgFAAgIgGIgGgDQgDgCAAgBQgBgEAJgLQAIgKAKgIQANgJAJAAQADAAAEACIAGAFQANAJAEAIIAAADQAAAMgLAYQgMAWgMARIANgEIAEgCIACgBQAEAAAHAJQAHAIAAADIgBADIgFADIgFAAIgSAEIgYAJIgDADIgDACQgCAAgLgIg");
	this.shape_28.setTransform(438.3,628.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#56390A").s().p("AgDAvQgIgEgBgCQgBgBADgHIAEgKQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAIACQAGABABADQAAABgCAFQgCAEAAADIAAAEQgBAEgCABIgBAAQgDAAgFgDgAgDgXQgIgEgBgCQgBgBADgIIAEgJQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAIACQAGABABADQAAACgCAEQgCAFAAADIAAADQgBAFgCABIgBAAQgDAAgFgDg");
	this.shape_29.setTransform(427.7,630.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALQgEAHgEAEIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_30.setTransform(422.6,630.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#56390A").s().p("AAmAvQgHgCgBgBIgBgCIACgGIADgFIgBg9QgDgBgIANQgIAPAAAJIAAAfIABAFQAAAEgEACIgEABIgLgCQgIgCgBgBIgBgCIADgFIACgGIgBg9QgCgBgJAPQgJAQAAAHIAAAdQACACAAADQAAADgBACQgBACgDABIgCAAIgMgCQgIgCgBgBIgBgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIABgCIAAhIIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEAEgBQADAAAJACQAKADABACIgBAFIgBAHIAAADQACgHAFgGQAFgIAFAAQAFAAAIAEQAHAEACADQACABABAKIAIgOQAFgIAFAAQAFAAAIAEQAJAEABADQACAEABATIABAxIABAGQAAAEgDACIgEABIgNgCg");
	this.shape_31.setTransform(412.3,630);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#56390A").s().p("AAJA+QgGAAgHgCQgJgDgBgDQgBgBACgEQACgCAAgGIAAhAIgCgIQAAgCAGAAQAEAAAHADQAJADABACIABABIgCAFIgCAFIAAA9QAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIACAEQABAFgFACgAgBgmQgMgEgBgCIAAgCQAAgEACgFQADgFADgBQADgBAIAEQAJADACAEIAAABIgCAJQgBAFgCABIAAAAIgMgDg");
	this.shape_32.setTransform(403.6,628.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#56390A").s().p("AAMBDIgNgCQgKgCgCgCQgCgDACgFIACgGIAAhLIgLADIgCABIgEABQgDgBgGgJQgHgIABgDQABgDAHgCIAEAAIADAAIA1gOIAFgCIAEgBQAFABABADIADAHIABAKIgBAFQAAACgFAAIgEgBIgDAAIgQAEIAABRQAAAEACAFIAAAGQgBAFgCABIgCAAg");
	this.shape_33.setTransform(396.7,628.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#56390A").s().p("AAABBQgIgDgCgBQgDgDAAgDIAAgBIABgDIAAhsIgBgCIAAgCQAAgEAGgBIAGAAIAJACQAGACAAADIAAADIgBACIgCAKIAABeIABAEIABACQAAAKgEABIAAAAIgJgCg");
	this.shape_34.setTransform(386.8,628.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#56390A").s().p("AgTAuIgGgGIgIgJQgDgEAAgEIAAgDQACgHAFgGQAEgHAIgFQALgJATgKQAAgFgCgBQgCgBgJAEQgIAFgEADIgEADQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAgBgBQgCAAgFgFIgGgHQgBgEADgDIAHgCIALgGIALgEIAJgCQADAAAFAEIAIAHIAIAHQAFAEAAAEIAAA6IACAFIgCAEQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgKgBgFgCQgFgCgBgCIgBgCIABgBIABgCIAAgBIABgGIgGAIQgEAGgCADQgFAFgGAAQgEAAgEgDgAAAAFIgIAKQgEADgCAFQgDAGAAACIABABQABAAAEgEIAJgKIAJgMIAFgJQgIADgEAFg");
	this.shape_35.setTransform(380.3,630.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#56390A").s().p("AgDA4QgJgDgBgCIABgFIACgGIAAg2IgGAAQgDAAgEgEQgEgFgBgEIACgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIALAAIAAgOQgDgDAAgDQAAgEADgBIADAAQAHAAAGACQAIABACADIABABQAAADgCADIgDADIAAAJIAFAAQABAAAGAGQAEAFAAADQAAACgCACQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAIgKAAIAAA8IABACIABAFQAAAFgGAAQgEAAgHgDg");
	this.shape_36.setTransform(372.8,629.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#56390A").s().p("AAIAxIgMgDIgLgCQgFgBgDgEQgEgEgCgGIgEgNIgBgPQAAgHABgHQABgHADgHIAGgMQAEgFAFgDIAFgBIALACIAQACQAEACADAEQAEAEACAGQAEALAAAQQAAAJgCAJQgCAJgDAIQgEAIgFAEQgEADgEAAIgDAAgAgDgcQgCADgBAFQgEANAAAHQABANACAIQADALADABQAEABAEgMQAEgMAAgNQAAgIgCgIQgDgLgGAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAg");
	this.shape_37.setTransform(365.9,630.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#56390A").s().p("AAMBDIgNgCQgKgCgCgCQgCgDACgFIACgGIAAhLIgLADIgCABIgEABQgDgBgGgJQgHgIABgDQABgDAHgCIAEAAIADAAIA1gOIAFgCIAEgBQAFABABADIADAHIABAKIgBAFQAAACgFAAIgEgBIgDAAIgQAEIAABRQAAAEACAFIAAAGQgBAFgCABIgCAAg");
	this.shape_38.setTransform(359.5,628.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#56390A").s().p("AAABBIgHgCIgOgGQgIgCgFgUQgEgRAAgXQAAgXAEgQQAGgTAKgDIABAAIADABIACABQAEgCAGAAQAEAAAIACIANAEQADABADAEQADAEADAHQAEANAAAVQAAAWgGAXQgFAPgHAJQgGAIgJAAIgGgCgAgHgiQgDAOAAASQAAANADARIADAMQAAABABABQAAAAAAABQABAAAAABQABAAAAAAQACAAACgFQADgEACgJQADgSAAgUQAAgRgCgKIgCgIQgBgBAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgGAAgEAQg");
	this.shape_39.setTransform(459,607.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#56390A").s().p("AAPBDQgDAAgKgGQgIgHAAgCIAAgDIABgDIAAhAQAAgDgHgCQgIgCgBgDIgBgDQAAgEAEgEIAFgJIAEgMQACgHAHAAQAGAAAGAEQAIAFAAAGIAABmIABAEIACAEQAAAEgDADQgBADgDAAIgBgBg");
	this.shape_40.setTransform(448.4,607.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#56390A").s().p("AgdBDQgCAAgHgFQgGgFgBgCQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIAfgyQAbgvAKgNIABgDQAEgDACAAIACAAQACAAAGAHQAGAHABACIAAABQgLAHgdAvIgUAjIgIAQIgBACIAAADQAAADgCACIgEABIgBAAg");
	this.shape_41.setTransform(441.7,607.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#56390A").s().p("AAABBIgHgCIgOgGQgHgCgFgUQgFgRAAgXQAAgXAFgQQAFgTAKgDIABAAIADABIACABQAFgCAEAAQAFAAAIACIANAEQADABAEAEQADAEACAHQAEANAAAVQAAAWgGAXQgFAPgGAJQgIAIgIAAIgGgCgAgIgiQgDAOAAASQAAANADARIAEAMQACAEABAAQACAAADgFQACgEACgJQADgSAAgUQAAgRgCgKIgDgIQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgHAAgFAQg");
	this.shape_42.setTransform(433.3,607.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#56390A").s().p("AAPBDQgDAAgKgGQgIgHAAgCIAAgDIABgDIAAhAQAAgDgHgCQgIgCgBgDIgBgDQAAgEAEgEIAFgJIAEgMQACgHAHAAQAGAAAGAEQAIAFAAAGIAABmIABAEIACAEQAAAEgDADQgBADgDAAIgBgBg");
	this.shape_43.setTransform(422.7,607.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#56390A").s().p("AgDAvQgIgEgBgCQgBgBADgHIAEgKQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAIACQAGABABADQAAABgCAFQgCAEAAADIAAAEQgBAEgCABIgBAAQgDAAgFgDgAgDgXQgIgEgBgCQgBgBADgIIAEgJQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAIACQAGABABADQAAACgCAEQgCAFAAADIAAADQgBAFgCABIgBAAQgDAAgFgDg");
	this.shape_44.setTransform(412.6,609.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#56390A").s().p("AAVBCIgJgCQgCAAgCgDIAAgCIACgTIgHAOQgEAKgEgBQgQgDgHgJQgIgKAAgPQAAgSAKgRQAJgSAMgGIACgBQADAAAKAKIAAgeIgBgFIgCgEQAAgDAFAAIALACIAJACQAEABABAFIgCAFIgBAGIAABjQAAAFABACQACAEgBABIgEACIgLgCgAgFAAQgEAGgBAGQgCAGAAAGQAAANAKABQAEABAIg4QgJAEgGANg");
	this.shape_45.setTransform(406.8,607.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALQgEAHgEAEIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_46.setTransform(398.8,609.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#56390A").s().p("AATAvQgLgCAAgDIAAgFIABgGIAAgEQgCAIgFAGIgDAFIgGACQgFAAgIgEQgJgDgBgDQgEgKgBg/IAAgFQAAgFADgCIAEAAIAMABQAIACABACIABACIgCAFQgCAEAAACQgBA8ACAAQAAAAAAAAQAAAAABAAQAAgBABgBQAAAAABgBIAGgLIAHgNQACgFAAgEIAAgdQgCgCAAgDQAAgDACgCQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAIACgBIANACIAJADIAAADIgBAEIgCADIAABHIABADIABAEQAAACgFACIgBAAIgKgCg");
	this.shape_47.setTransform(391,609.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#56390A").s().p("AgVAoQgGgEgDgIQgCgJAAgNQAAgTAGgQQAGgSAKAAQAIgBAKAFQALAEADAGQAEAEAAAIIgBAFIAAAGIABAEQAAAFgFgBQgGAAgFgBQgGgDgCgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgGIgBgHQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgEgBgDAQQgDASAAALIABAOQABAFACABQAEABAEgJQAFgHABgDIAAgFQABgEAFAAIAKAEQAHADAAABIAAADQAAADgFAFIgHANQgEAFgEADQgFACgFABIgDABQgJAAgMgJg");
	this.shape_48.setTransform(382.9,609.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#56390A").s().p("AACAwIgFgBIgGgCQgDAAgCgCIgGgJIgFgJIgDgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIADgBIAMACQAHAAABABIABAJQABAHABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgHQAAgNgGgDIgMgGQgFgDgCgCQgDgDgBgGQgCgFAAgGQAAgJAFgIIAFgGQADgDADAAQADgBAOAHIAIABQAFABACADQADADAAAIIABALIABAHQAAAEgFAAQgCABgGgCQgHgDgCgCIgBgMQAAgKgCAAQgCAAgBAGQgCAGAAAHIAAAGQABABAAAAQAAABAAAAQABABAAAAQABAAAAABIAOAHQAIAFADAEIADAHIABAJQAAAIgGAGQgDACgEACIgJABg");
	this.shape_49.setTransform(375.6,609.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALIgIALIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_50.setTransform(368.3,609.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#56390A").s().p("AghBBQgJgCAAgDIAAgCIAAgDIAAhrIAAgCIgBgCQABgEAGgBQACAAAGACQAHACADgBQACAAAIgEQAIgEAFAAIAFABQAFAAADAEIAHAGIAJAIQAEAFAAAGQABASggAbIAdAdIAEABIAEADQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgFAJQgHAKgEAAQgFAAgDgFIgDgFIgfgeIAAAcIABAFIABADQAAAFgGABIgCAAIgMgCgAgPgdIAAAYQAGgDAKgNIAIgMQADgFAAgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgIAAgRAPg");
	this.shape_51.setTransform(359.9,607.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#56390A").s().p("AACAwIgFgBIgGgCQgDAAgCgCIgGgJIgFgJIgDgFQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIADgBIAMACQAHAAABABIABAJQABAHABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgHQAAgNgGgDIgMgGQgFgDgCgCQgDgDgBgGQgCgFAAgGQAAgJAFgIIAFgGQADgDADAAQADgBAOAHIAIABQAFABACADQADADAAAIIABALIABAHQAAAEgFAAQgCABgGgCQgHgDgCgCIgBgMQAAgKgCAAQgCAAgBAGQgCAGAAAHIAAAGQABABAAAAQAAABABAAQAAABAAAAQABAAAAABIAOAHQAIAFADAEIADAHIABAJQAAAIgGAGQgDACgEACIgJABg");
	this.shape_52.setTransform(457.7,588.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#56390A").s().p("AgDA4QgJgDgBgDIABgEIABgGIAAg1IgFAAQgDAAgEgGQgFgFABgDIABgEQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIALAAIAAgOQgCgDAAgEQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABgBIAEAAQAFAAAHACQAIABACADIACACQAAACgDACIgDAFIAAAIIAFAAQABAAAFAFQAGAGAAACQAAADgCADQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgBAAIgKAAIAAA8IABADIABAEQAAAEgGABQgEAAgHgDg");
	this.shape_53.setTransform(451.1,587.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#56390A").s().p("AgWBCIgJgDQgEgCAAgDIABgGIABgFIAAhkQAAgGgBgBQgCgEABgCIAEgBIALACIAJABQACABACAEIAAABIgCATIAHgOQAEgKAEABQAQADAHAJQAIAKAAAQQAAASgKARQgEAJgGAFQgFAHgGACIgCABQgCAAgDgDIgIgHIAAAfIABAEIACAFQAAACgFAAIgLgBgAgJASQAJgEAGgNQAHgMAAgMQAAgNgKgBIAAAAQgFAAgHA3g");
	this.shape_54.setTransform(444,589.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#56390A").s().p("AAABBIgHgCIgOgGQgIgCgEgTQgFgTAAgWQAAgXAFgQQAFgTAKgDIABAAIADABIACABQAFgCAEAAQAFAAAIACIANAEQAEABADAEQADAEACAHQAEANAAAVQAAAWgHAXQgEAPgHAJQgHAIgIAAIgGgCgAgHghQgEANAAASQAAANAEARIADAMQAAABABABQAAAAABABQAAAAAAABQABAAAAAAQACAAADgFQACgFACgIQADgSAAgVQAAgPgBgLIgEgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgHAAgEARg");
	this.shape_55.setTransform(435.3,586.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#56390A").s().p("AAABBIgHgCIgOgGQgHgCgFgTQgFgTAAgWQAAgXAFgQQAFgTAKgDIABAAIADABIACABQAFgCAEAAQAFAAAIACIANAEQADABAEAEQADAEACAHQAEANAAAVQAAAWgHAXQgEAPgGAJQgIAIgIAAIgGgCgAgIghQgDANAAASQAAANADARIAEAMQACAEABAAQACAAADgFQACgFACgIQADgSAAgVQAAgPgCgLIgDgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgHAAgFARg");
	this.shape_56.setTransform(425.2,586.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#56390A").s().p("AAABBIgHgCIgOgGQgIgCgEgTQgFgTAAgWQAAgXAFgQQAFgTAKgDIABAAIADABIACABQAEgCAFAAQAFAAAIACIANAEQAEABACAEQADAEADAHQAEANAAAVQAAAWgHAXQgEAPgHAJQgGAIgJAAIgGgCgAgHghQgDANgBASQABANADARIADAMQAAABABABQAAAAABABQAAAAAAABQABAAAAAAQACAAACgFQADgFACgIQADgSAAgVQAAgPgBgLIgEgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgGAAgEARg");
	this.shape_57.setTransform(415.1,586.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#56390A").s().p("AgXA8QgQgLgBgGQAAgEABgDQACgDAEAAQAFAAAIAHIAKAJQAEgCAEgFQAEgFADgIIAHgMQABgHABgDQAAgGgGAAIgFACIgGAFIgJAGQgDAAgIgDQgJgEgDgEIgBgDIAAgCIAAgEIAAguQABgCADgDQADgCADgBIADABIABAAIACAAQALgGAOgDQALgBAEAAIADgBIADABQAEADAFAGQAFAHABAEIgBAEQgCACgDABQgCABgDgCIgHgCQgGgBgJADQgFABgDACIgIAGIAAARQAGgDAGAAQAEAAAGACIALAIQANAJAAAIQAAAXgMAVQgGAKgHAFQgHAFgGAAQgIAAgPgLg");
	this.shape_58.setTransform(405,586.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#56390A").s().p("AgDAvQgIgEgBgCQgBgBADgHIAEgKQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAIACQAGABABADQAAABgCAFQgCAEAAADIAAAEQgBAEgCABIgBAAQgDAAgFgDgAgDgXQgIgEgBgCQgBgBADgIIAEgJQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAIACQAGABABADQAAACgCAEQgCAFAAADIAAADQgBAFgCABIgBAAQgDAAgFgDg");
	this.shape_59.setTransform(394.5,588.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALQgEAHgEAEIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_60.setTransform(389.4,588.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#56390A").s().p("AgUAuQgJgDAAgFIACgEIABgGIAAg8IgCgJQAAgFAEgBIAFgBQAFAAAGACQAGACACACIAAACIgCAHIAAAHIAGgNQAFgIACgBQADAAAHAEQAHAFABADQABABAAAAQgBABAAABQAAAAAAAAQgBABgBAAIgDACIgaAnIABAaIABAEIAAAFQAAABAAAAQAAABAAAAQAAABAAAAQgBABgBAAIgFABQgFAAgIgDg");
	this.shape_61.setTransform(382.9,588.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#56390A").s().p("AAIAxIgMgDIgLgCQgFgBgDgEQgEgEgCgGIgEgNIgBgPQAAgHABgHQABgHADgHIAGgMQAEgFAFgDIAFgBIALACIAQACQAEACADAEQAEAEACAGQAEALAAAQQAAAJgCAJQgCAJgDAIQgEAIgFAEQgEADgEAAIgDAAgAgDgcQgCADgBAFQgEANAAAHQABANACAIQADALADABQAEABAEgMQAEgMAAgNQAAgIgCgIQgDgLgGAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAg");
	this.shape_62.setTransform(375.3,588.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#56390A").s().p("AgVAoQgGgEgDgIQgCgJAAgNQAAgTAGgQQAGgSAKAAQAIgBAKAFQALAEADAGQAEAEAAAIIgBAFIAAAGIABAEQAAAFgFgBQgGAAgFgBQgGgDgCgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgGIgBgHQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgEgBgDAQQgDASAAALIABAOQABAFACABQAEABAEgJQAFgHABgDIAAgFQABgEAFAAIAKAEQAHADAAABIAAADQAAADgFAFIgHANQgEAFgEADQgFACgFABIgDABQgJAAgMgJg");
	this.shape_63.setTransform(367.3,588.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#56390A").s().p("AAABCIgGgCIgHgCQgEAAgDgDQgEgEgDgIIgFgMIgDgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAEAAIANABIAJACQABABABAKQACAKABABIACAAQADAAACgFQACgFAAgGQAAgHgCgEQgCgFgFgCIgPgKQgHgEgDgEQgJgKAAgOQABgMAIgMQAIgMAIgCQAEAAARAHIAJAEQAEACADADQACADACAFIABALIgBAHIAAAGIABAEIABADQAAAHgGABQgDAAgIgDQgKgDgCgDIAAgDIAAgLIABgMQAAgGgCAAQgEAAgDAHQgDAGAAAJQAAAHACAFQACAFADADIATAKQAJAGADAGIADAJIABAMQAAAFgBAFQgCAFgEADQgIAIgNAAIgIgBg");
	this.shape_64.setTransform(359,586.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#362106").s().p("AgnBMQgLgDAAgDIAAgCIABgEIAAh+IgBgCIAAgBQAAgFAHgBQACgBAIACIALACQADAAAJgFQAKgEAGAAIAGAAQAFABAEAEIAIAHIAKAKQAFAFAAAHQABAVglAgIAiAiIAFACIAEADQABABgCAEIgGAKQgIAMgFAAQgGgBgDgFIgDgGIglgjIAAAhIABAFIACAFQAAAFgHABIgCAAQgGAAgJgCgAgSgiIAAAcQAHgDAMgQIAKgNQADgGAAgEQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgJAAgUASg");
	this.shape_65.setTransform(488.2,552.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#362106").s().p("AgbBJQgMgFAAgDIAAiHQAAgBAEgDIAHgCIAIADQAHADAEAAQAFAAAIgFQAIgFACABQAEABAJAIQAIAIABAEQAAACgDADQgDAEgDAAIgDAAIgBAAIgNADQgMAFgGAFIAAAeQAGgDAKgEQACAAAJAIQAKAIAAADQAAACgCADQgDADgDAAIgGABQgNAEgKAHIAAATIAOgHIALgFQADAAAKAIQAKAIAAACQgBADgDAEIgEAEIgCgBIgDAAIAAAAIgLAEIgNAHIgLAJg");
	this.shape_66.setTransform(478,552);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#362106").s().p("AgKBPQgGgBgOgHQgNgHgBgDIgBgCIABgCIABgDIAAh1QAAgDAIAAIAGABQAIgFANgEQAIgDAOgCQAFAAADACQADABADAEIAEAHIAGAFQADACABADIABAFQAAAOgTARQATAPACALIABAFQAAAIgEAIQgDAIgGAJQgLAOgPALQgMAKgFAAIAAgBgAAEAGQgLAFgFAFIAAAiQAFgCAGgFQAFgFAGgIQALgRgBgLQgFAAgLAEgAAAgvQgJAEgDAEIAAATQALgJAIgKQAIgKgBgCIgCgBQgFAAgHAFg");
	this.shape_67.setTransform(467.9,551.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#362106").s().p("AhDBLQgKgCgCgCIgBgEIABgDIAAgEIAAiAQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgFQAEAAAUAFQAWAGABAEIAAAEIAAAFIAAACIAZBCIARhBIAGgUQADgGACgBIADAAIAKACIALACIARACQAIABABAFIABADIgBAEIgBAGIAABtIACAGQADADgBADQgBAHgDABQgEABgNgEIgKgDQgEgCgBgCIAAgDIAAgDIABgEIAAhSQgJARgOA5IAAADIABAFIAAAFIAAAIQgBADgDABIgGAAQgXAAgJgIQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgGIgMgkQgMgkgEgIIAABIIABAGIACAHIABAJQgBAFgCACIgEABQgHAAgJgDg");
	this.shape_68.setTransform(453.9,552.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#362106").s().p("AAmBKQgKgDgDgEQgCgCgBgJIgFgUQgGABgNAEQgNAEgEADIgHATIgBAFQgBACgDACIgBAAQgEAAgLgFQgKgEAAgCQgBgCAEgKIAHgSQgEgEAAgDIAAgCQABgDAKgFIAYhPIAAgIQgBgFACgBQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAJAAAPAEIAMAEIAGAEQABAUAIAoQAJAxAJATIgBAIQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgDABQgGAAgJgDgAgCgGIgGAUIATgFIgDgOQgCgNgBgNg");
	this.shape_69.setTransform(438.6,552);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#362106").s().p("AASBLIgJgFQgDgCgBgDIgBgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIACgDIAAgkIgNACIgNAEIAAAlIABADIACACIgCAGIgCADQgDABgNgFQgNgEgBgDIAAgEIAAgFIAAhzIACgKQAAgCAGgEIACAAQAHAAAHACQAKADAAAFQABACgCAEIgCAGIAAAtIAagHIAAgyIgBgDIAAgEQABgDAFgBIAHgBQAEAAAIACQAIADABAEQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBAGIAAAyIAIAHQAFAEAAACQAAACgEAEQgEAEgCAAIgDAAIAAAuIACAGQABAMgEACIgDAAQgGAAgKgEg");
	this.shape_70.setTransform(427.4,552);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#362106").s().p("AAGBOIgRgHQgSgHgJgUQgIgTAAgYQAAgdALgXQAMgZATAAQADgBAEACIAMAGIAMAHQAEAEACAEQAFAIABAZQABAFgCAGQgCAHgEgBIgQgEQgLgEgBgCIgBgCIACgEIABgEIABgOQAAgJgCgEQgFAEgDAHQgEAGgDAKQgDAIgBAIQgBAIAAAKQAAAQADAMQACAMAEACQACABAHgIQAJgIACgGIACgFQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAEgBAMAGQANAGAAADQgBAEgDADIgGALIgKAMQgGAGgFADQgEADgEAAg");
	this.shape_71.setTransform(416.4,552);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#362106").s().p("AgNBJIgQgFQgKgFgGgTIgEgSQgCgKAAgLQAAgdAJgXQAEgOAGgGQAGgIAIgBIADAAQAJAAAMAFQAOAHAFAHQAEAGABAJIACAMIABAHIgBAFIgEAFQgDAAgLgDQgMgDgCgDQgDgCABgGIABgCIABgDQAAgNgDAAQgHAAgEAVQgFATAAAXQAAARADAKQACAKAFACQABAAAAAAQAAAAABAAQAAAAABAAQAAgBAAgBIAFgIQAEgLABgKIgKgGQgHgCAAgCQgBgDACgFQADgFADgBIAHgBIAIAAIAKgEIAJgCIACAAQAEABAJAHQAJAHgBACQAAAHgGACIgCAAIgDgBIgCAAQgFATgGARQgEAKgFAFQgEAGgGACIgGABQgDAAgMgEg");
	this.shape_72.setTransform(401.8,552.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#362106").s().p("AAhBOQgGgBgJgDQgLgDgBgEIAAgIIgXg7IAAA2IABAEIACADIABAGQAAADgCACQgBACgEAAQgGAAgMgEQgLgDgBgCQgCgDACgFIACgFIAAhxIAAgDIgBgEQACgGAGgCIAEgBQAHAAAHACQAKACAEAEQACADADAIIAHAXQAGAWAJAXIAAhHIAAgEIgBgEIAAgCQABgDAGgBQAFgCAEABIAKACQAJACAAADIgBAEIgCAFIAAB3IABAHQABAIgDACQgCACgHAAIgGAAg");
	this.shape_73.setTransform(390.1,552.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#362106").s().p("AAABMQgLgDgCgCQgEgDAAgDIAAgCIABgDIAAh/IAAgCIgBgCQAAgFAHgBIAIAAIAMACQAIACAAAEIgBADIgBADIgCALIAABvIABAEIABACQAAAMgEABIgBAAIgLgCg");
	this.shape_74.setTransform(381.6,552.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#362106").s().p("AAOBOQgGAAgJgCQgMgDgDgCQgCgDADgGIACgHIAAhYIgNADIgDABIgDACQgFgCgHgKQgHgJABgDQABgFAHgCIAFAAIAFAAIA+gRIAFgCIAFgBQAFABACADIADAIQACAIAAAFIgBAGQgBADgGAAIgEgCIgEgBIgTAFIAABfQAAAFADAHQABABgCAGQgBAFgCABIgCAAg");
	this.shape_75.setTransform(373.6,551.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#362106").s().p("AAABNIgIgDIgIgBQgFgBgDgEQgFgEgDgKQgEgLgCgDIgDgFQgBgDACgCQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAEAAIAQABQAJACABABIADANQACALACABIACABQADAAACgGQADgGAAgHQAAgIgDgFQgCgFgFgDQgKgGgIgGQgIgEgEgFQgLgMABgRQABgNAJgOQAJgOAKgCQAEgBAUAJIALAEQAFACAEAEQACADABAGQACAFAAAIIgBAJIAAAGIACAFIAAAEQAAAIgGABQgEAAgKgDQgLgEgDgEIAAgDIABgNIAAgOQAAgHgCAAQgEAAgEAIQgEAIAAAJQAAAJADAFQACAGAEAEIAWAMQAKAHAEAHQADAEABAGQABAGAAAIQAAAHgCAFQgCAGgFAEQgJAJgPAAIgJgBg");
	this.shape_76.setTransform(363.8,552);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#362106").s().p("AgbBJQgMgFAAgDIAAiHQAAgBAEgDIAHgCIAIADQAHADAEAAQAFAAAIgFQAIgFACABQAEABAJAIQAIAIABAEQAAACgDADQgDAEgDAAIgDAAIgBAAIgNADQgMAFgGAFIAAAeQAGgDAKgEQACAAAJAIQAKAIAAADQAAACgDADQgCADgDAAIgGABQgNAEgKAHIAAATIAOgHIALgFQADAAAKAIQAKAIAAACQgBADgDAEIgEAEIgCgBIgDAAIAAAAIgLAEIgNAHIgLAJg");
	this.shape_77.setTransform(355.1,552);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#362106").s().p("AgnBMQgLgDAAgDIAAgCIABgEIAAh+IgBgCIAAgBQAAgFAHgBQACgBAIACIALACQADAAAJgFQAKgEAGAAIAGAAQAFABAEAEIAIAHIAKAKQAFAFAAAHQABAVglAgIAiAiIAFACIAEADQABABgCAEIgGAKQgIAMgFAAQgGgBgDgFIgDgGIglgjIAAAhIABAFIACAFQAAAFgHABIgCAAQgFAAgKgCgAgSgiIAAAcQAHgDAMgQIAKgNQADgGAAgEQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgJAAgUASg");
	this.shape_78.setTransform(344.6,552.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 23
	this.mummy = new lib.mummy_walking();
	this.mummy.parent = this;
	this.mummy.setTransform(147.3,559.9,1.13,1.13,6.3,0,0,96.2,232.6);
	this.mummy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mummy).wait(1).to({_off:false},0).wait(1));

	// Layer 26
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#56390A").s().p("Ag8BeQgagnAAg3QAAg2AagnQAZgnAjAAQAlAAAZAnQAZAnAAA2QAAA3gZAnQgZAnglAAQgjAAgZgng");
	this.shape_79.setTransform(514.8,395.4);
	this.shape_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(1).to({_off:false},0).wait(1));

	// FlashAICB
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#E60053").p("AAAqkIAAVJ");
	this.shape_80.setTransform(663.2,326.4,0.839,0.839);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E60053").s().p("Ag4A5QgYgXAAgiQAAggAYgYQAYgYAgAAQAiAAAYAYQAXAXAAAhQAAAigXAXQgYAYgiAAQggAAgYgYg");
	this.shape_81.setTransform(663.7,270.2,0.839,0.839);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#9A9999").p("AAkgIQAEAOgIANQgIAOgPADQgOAEgOgHQgNgIgEgQQgDgOAHgNQAIgNAPgEQAOgEAOAIQANAIAEAPg");
	this.shape_82.setTransform(675.4,373.2,0.839,0.839);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9A9999").s().p("AgTAhQgNgIgEgQQgDgOAHgNQAIgNAPgEQAOgEAOAIQANAIAEAPQAEAOgIANQgIAOgPADIgJACQgKAAgJgFg");
	this.shape_83.setTransform(675.4,373.2,0.839,0.839);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#9A9999").p("AAkgJQAEAOgHAOQgIANgQAEQgOAEgNgIQgNgIgEgPQgEgOAIgOQAIgNAPgEQAOgDANAHQAOAIADAPg");
	this.shape_84.setTransform(778.4,373.2,0.839,0.839);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9A9999").s().p("AgSAgQgNgIgEgPQgEgOAIgOQAIgNAPgEQAOgDANAHQAOAIADAPQAEAOgHAOQgIANgQAEIgJACQgJAAgJgGg");
	this.shape_85.setTransform(778.4,373.2,0.839,0.839);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#9A9999").p("ApuAAITdAA");
	this.shape_86.setTransform(729.3,406.1,0.839,0.839);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#9A9999").p("ALXKYI2tAAIAA0vIWtAAg");
	this.shape_87.setTransform(724.1,326.4,0.839,0.839);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAEBpIgMgEIgMgDQgGgBgEgEQgIgGgHgMIgLgUIgGgLQAAgFAHgCIAHgBIAZACQAPACACACQABABACASQADAQAEAAQADAAACgGQACgFAAgKQAAgbgNgHIgbgOQgKgHgGgFQgGgHgDgLQgDgLAAgPQAAgTAKgRQAFgIAGgGQAGgFAHgCQAGgBAgAOIASAEQAKACAFAFQAGAIACARIAAAZIACANQAAAKgJABQgFABgNgEQgQgGgEgFIgCgZQgBgXgDAAQgFAAgEANQgFANAAAPQAAAIADAGQACAGADACIAgASQARAJAGAKQAEAGACAJQACAIAAALQAAATgMALQgGAGgJACQgIADgMAAg");
	this.shape_88.setTransform(810.8,229.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgSBgQgXgJgHgJQgUgZAAgtQAAgqARggQAKgSALgJQAMgJAPAAQAJgBAPAGIARAIQAHAFAGAGQADADADAPQADARAAAPQAAAMgCAIQgBAIgEADQgSAGgRADQgSADgRABQgBAQAFASQAFATAFAAQAFAAAKgLQAIgKACgHIAHgVQAFAAAQAGQAQAGADAEQADAGgQAZQgJANgJAJQgIAJgJAFIgGABQgNAAgUgIgAgGgwIgJATQgDAJAAAIQAPAAAIgHQADgCABgIIABgYQAAgMgBgBIgBAAQgGAAgIASg");
	this.shape_89.setTransform(795,229.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgBCNQgSgFgEgDQgHgHAAgFIABgDIABgGIAAjtIgBgEIgBgFQABgIAMgCIAOAAQALABAJACQAOAEAAAIIgBAGIgCAFIgEAVIAADPQAAAEACADIACAFQAAAWgIABIgCAAQgEAAgPgEg");
	this.shape_90.setTransform(782.8,226.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgdCDQgKgEgJgIIgQgSIgGgGQgEgEAAgEQAAgFAKgDIAEAAQAIAAAKADQAKADAFAEIALAOQAGAHAHABQAGAAAFgEQAEgFACgKQACgKAAgZIgGAJIgHAIQgDADgEAAQgJAAgHgCQgIgDgGgFQgSgPgJgWQgJgXAAgcQAAgTAEgRQAEgRAIgPQAIgPALgKQALgKANgEIAEgBQAFAAAGAFIALAJIAFgLQACgGAFgBQAHAAASAFQASAGACAEQAEAGgCAGIgEAHIgCAHIAACTQAAA4gpAQQgUAHgPAAQgLAAgKgDgAgIhEQgKAbAAAWQAAAnAJAXQATgfAEgjQADgXAAgPQAAgcgJgDIgBAAQgHAAgIAYg");
	this.shape_91.setTransform(769.2,232.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("Ag5BmQgRgEgCgDQgCgDAAgDQAAgDAEgFIADgGIAAicIgCgHQgDgFABgDQACgHAIgCQAGgBAUAFQAVAFACAGQACAEgDAHIgDAOIABAIQAFgRAJgNQALgQALAAQALAAASAIQATAIACAGQAFALACAoQADAnAABFQACAGAAAHQAAAKgHAEIgJABQgLAAgQgEQgQgDgDgEIgCgEQAAgEAFgIQAFgIAAgEQAAhYgCgtQgFgCgSAgQgTAiAAAQIAAA/QAFAFAAAGQAAAHgDAEQgDAEgGADIgEAAQgJAAgSgEg");
	this.shape_92.setTransform(751.5,229.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgpBkIgOgNIgRgUQgHgJAAgJIABgFQADgPAKgOQAKgOAQgNQAZgTArgWQAAgKgFgDQgDgCgVAJQgTAKgIAGIgJAIQgGADgEgBQgEgBgMgLQgNgLAAgEQgDgJAIgFIAOgEIAZgOIAYgJQAKgEAJAAQAIgBAKAJIASAPIASAPQALAJAAAJIAAB/QADAJAAADQAAAEgEAEQgEADgEAAQgVgDgMgEQgMgEgCgFIgBgDIACgEIABgDIACgDIAAgMQgEADgIANQgIAPgGAFQgLALgOAAQgIAAgHgHgAgBALIgSAVQgHAHgGALQgHAMAAAFQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAQAEAAAIgIIAUgXIATgbQAIgMAEgIQgRAGgKANg");
	this.shape_93.setTransform(732.5,229.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgIB7QgVgHAAgGQgCgCAEgIQACgIAAgEIAAh2IgLAAQgGAAgKgMQgJgLAAgHQAAgFAEgEQADgEAGAAIAXAAIAAgeQgEgHAAgIQgBgHAHgCIAIAAQANAAAQAEQAQAEAFAEQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQABAEgGAHQgFAGgBADIAAASIALAAQAEAAAKAMQALAMAAAGQAAAGgEAEQgDAFgFAAIgCAAQgFgCgRAAIAACFIACAFIADAKQAAAKgOAAIgBAAQgHAAgRgFg");
	this.shape_94.setTransform(716.2,227.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgwBXQgMgIgGgTQgGgSAAgeQAAgqANgjQAPgmAVgBQARgBAWAJQAZAKAIAMQAHAKAAAQIgBANIAAALIABAJQAAAKgLAAQgMAAgLgDQgOgGgDgIQgBgDAEgFQAEgGgBgDIABgMQAAgKgCgFQgCgFgEgBQgJAAgIAhQgHApAAAXQAAAVADALQACALAFABQAIACALgTQALgQABgGIABgLQADgJAJAAQAHABAPAHQAPAHABAEIABAGQAAAGgLALQgKAUgHAJQgIAKgJAGQgKAGgLACIgIAAQgTAAgcgSg");
	this.shape_95.setTransform(701.9,229.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSBgQgXgJgHgJQgUgZAAgtQAAgqARggQAKgSALgJQAMgJAPAAQAJgBAPAGIARAIQAHAFAGAGQADADADAPQADARAAAPQAAAMgCAIQgBAIgEADQgSAGgRADQgSADgRABQgBAQAFASQAFATAFAAQAFAAAKgLQAIgKACgHIAHgVQAFAAAQAGQAQAGADAEQADAGgQAZQgJANgJAJQgIAJgJAFIgGABQgNAAgUgIgAgGgwIgJATQgDAJAAAIQAPAAAIgHQADgCABgIIABgYQAAgMgBgBIgBAAQgGAAgIASg");
	this.shape_96.setTransform(685.1,229.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhJCNQgVgEAAgGIABgEIAAgIIAAjqIAAgFIgBgCQAAgKANgBQAEgBAOAEQAPAEAGgBQAGAAARgJQATgJAMAAIAKABQAKACAHAHIAPAOIATASQAJAKABANQABAnhEA8IA+A/IAJAEIAIAFQACADgDAHIgLASQgPAXgKgBQgLAAgGgLIgGgKIhGhCIAAA+QAAAEADAFIADAJQAAAKgNABIgEABQgKAAgRgFgAgjhAIAAA0QAOgGAXgdQAMgOAGgLQAGgLAAgHQAAgHgGAAQgQAAgnAhg");
	this.shape_97.setTransform(666.9,226.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgxCIQgLgFgOgJQgWgQgGgQQgCgFAAgGQAAgPAOgUQAIgKAVgWQgVgMgFgDQgMgKgBgTQgCgRAqgtQAUgXAQgLQAPgLAJAAQAUAAAWAWQAKAJAFAIQAFAIAAAGQAAAGgEAEQgEAFgGAAQgDAAgKgJQgJgKgGAAQgJAAgbAeQgdAdAEAGIACABIAQgIQAOgGAIABQAGABANAMQAOALABAFIABAIQgBAFgEACQgZAMgbAfQgOAPgHAKQgHALAAAGQAAAGAHAAQAMAAAagTQALgKAHgIQAGgHAAgGQAAgEgFgFQgFgFABgEQADgLANgBIAZgEIAQgFIANgCIAGABQAIAEAHATQAGARgBAGQgDAIgJACIgHgBQgDAAgDACIgbAeQgZAYgLAHQgVAOgXAAQgKAAgMgEg");
	this.shape_98.setTransform(793.7,184.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AADBpIgKgEIgNgDQgGgBgFgEQgHgGgHgMIgLgUIgFgLQAAgFAGgCIAGgBIAZACQAQACABACQACABACASQADAQADAAQAEAAACgGQACgFAAgKQAAgbgNgHIgbgOQgLgHgEgFQgHgHgDgLQgDgLAAgPQAAgTAKgRQAFgIAGgGQAGgFAHgCQAGgBAgAOIASAEQAKACAFAFQAGAIABARIAAAZIADANQAAAKgJABQgFABgOgEQgPgGgEgFIgCgZQgBgXgEAAQgEAAgEANQgFANABAPQAAAIABAGQACAGAFACIAfASQARAJAGAKQAEAGADAJQACAIAAALQAAATgNALQgGAGgIACQgKADgKAAg");
	this.shape_99.setTransform(767.6,187.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgSBgQgXgJgHgJQgUgZAAgtQAAgqARggQAKgSALgJQAMgJAPAAQAJgBAPAGIARAIQAHAFAGAGQADADADAPQADARAAAPQAAAMgCAIQgBAIgEADQgSAGgRADQgSADgRABQgBAQAFASQAFATAFAAQAFAAAKgLQAIgKACgHIAHgVQAFAAAQAGQAQAGADAEQADAGgQAZQgJANgJAJQgIAJgJAFIgGABQgNAAgUgIgAgGgwIgJATQgDAJAAAIQAPAAAIgHQADgCABgIIABgYQAAgMgBgBIgBAAQgGAAgIASg");
	this.shape_100.setTransform(751.8,188.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgsBlQgTgHAAgLIACgKQADgGAAgFIAAiFIgEgTQAAgLAKgCIAJgBQAMAAANAEQANADADAFIAAADIgEAQIAAARIAOgdQALgTAFgBQAHgBAQAKQAPAKACAHQABAGgFADIgIAEIg5BXIABA3IACAJIACALQAAAGgFADQgEABgGAAQgNAAgQgFg");
	this.shape_101.setTransform(737.6,187.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgpBkIgOgNIgRgUQgHgJAAgJIABgFQADgPAKgOQAKgOAQgNQAZgTArgWQAAgKgFgDQgDgCgVAJQgTAKgIAGIgJAIQgGADgEgBQgEgBgMgLQgNgLAAgEQgDgJAIgFIAOgEIAZgOIAYgJQAKgEAJAAQAIgBAKAJIASAPIASAPQALAJAAAJIAAB/QADAJAAADQAAAEgEAEQgEADgEAAQgVgDgMgEQgMgEgCgFIgBgDIACgEIABgDIACgDIAAgMQgEADgIANQgIAPgGAFQgLALgOAAQgIAAgHgHgAgBALIgSAVQgHAHgGALQgHAMAAAFQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAQAEAAAIgIIAUgXIATgbQAIgMAEgIQgRAGgKANg");
	this.shape_102.setTransform(720.2,188);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAoBmQgVgFgCgGQgCgEADgHIADgMIgBgJQgFARgJANQgGAIgEAEQgGADgFAAQgMAAgSgHQgSgIgDgHQgKgVAAiJQgCgHAAgGQAAgLAHgDIAJgCQALAAAQAEQAQAEAEADIABAFQAAADgFAJQgFAIAAAEQgBCEADABQACABAGgIIAPgYQAJgRAFgMQAFgMAAgIIAAhAQgEgEAAgHQAAgGADgFQACgEAGgDIAEAAQAJAAASAEQARAEACADQACADAAADQAAAEgDAFIgEAGIAACcIACAHIACAHQAAAGgKADIgCAAQgHAAgRgEg");
	this.shape_103.setTransform(702.1,187.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAjCBQgWgIABgIIACgLIAEgKIAAgfQgNAOgKAGQgLAGgJgBQgMgBgMgKQgIgGgFgGQgFgGgEgIQgEgIgCgKQgCgKAAgMQAAgeAMglQAMgjAQgTQADgLAEgEQAEgDALAAQAKAAAJAGIAPAMIgDgNQABgIAIgBQAIAAAUAGQAVAGADAFQACADgGAIQgBAEAAALIAADJIADAGQADAGAAADQAAAHgKADIgEAAQgKAAgTgGgAgPgsQgIAbgEAVQgDAWAAARIABALQAMgFAQgPQAQgQAEgKIAAhhIgIgGIgBgBQgKAAgPA0g");
	this.shape_104.setTransform(683.4,190.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAACQIgPgFIgQgDQgJgCgGgGQgJgIgGgSQgHgWgDgFIgHgJQgBgFADgFQADgFAEgCIAHAAQAMAAARADQARADACACQACACAEAWQADAUAFADIADABQAGAAAFgLQAFgLAAgNQAAgPgFgKQgFgKgJgFQgUgLgOgKQgPgKgJgJQgTgXACgeQACgZAQgaQARgaATgFQAHgBAnAQIAUAIQAKAEAGAIQAEAGADAKQACAKAAAPIAAAQIgBANIADAHQACAEgBAEQgBAPgLABQgHABgSgGQgVgGgFgIIgBgGIACgXIABgaQAAgPgEAAQgJABgHAOQgHAPAAASQAAAPAEALQAFALAIAGIAoAZQAUAMAHANQAFAIACALQADAMAAAOQAAANgFAKQgEAKgIAIQgQAQgeABQgHAAgJgCg");
	this.shape_105.setTransform(665,184);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#56390A").s().p("AACAwIgFgBIgGgCQgDAAgCgCIgGgJIgFgJIgDgFQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIADgBIAMACQAHAAABABIABAJQABAHABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgHQAAgNgGgDIgMgGQgFgDgCgCQgDgDgBgGQgCgFAAgGQAAgJAFgIIAFgGQADgDADAAQADgBAOAHIAIABQAFABACADQADADAAAIIABALIABAHQAAAEgFAAQgCABgGgCQgHgDgCgCIgBgMQAAgKgCAAQgCAAgBAGQgCAGAAAHIAAAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAOAHQAIAFADAEIADAHIABAJQAAAIgGAGQgDACgEACIgJABg");
	this.shape_106.setTransform(840.6,630.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#56390A").s().p("AARAvQgIgCgBgBIgBgCIACgGIACgFIgBg9QgBgBgJAPQgIAQAAAHIAAAdQACACAAADQAAADgCACQAAAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAIgDAAIgLgCQgJgCgBgBIAAgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIACgCIAAhIIgBgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgEAEgBQACAAAKACQAKADAAACIAAAFIgBAHIAAADQACgHAFgGQADgIAGAAQAFAAAIAEQAIAEACADQACAEABATQABARABAgIAAAGQAAAEgDACIgEABIgMgCg");
	this.shape_107.setTransform(832.9,630.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#56390A").s().p("AAJA+QgGAAgHgCQgJgDgBgDQgBgBACgEQACgCAAgGIAAhAIgCgIQAAgCAGAAQAEAAAHADQAJADABACIABABIgCAFIgCAFIAAA9QAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIACAEQABAFgFACgAgBgmQgMgEgBgCIAAgCQAAgEACgFQADgFADgBQADgBAIAEQAJADACAEIAAABIgCAJQgBAFgCABIAAAAIgMgDg");
	this.shape_108.setTransform(826.4,628.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#56390A").s().p("AAmAvQgHgCgBgBIgBgCIACgGIADgFIgBg9QgDgBgIANQgIAPAAAJIAAAfIABAFQAAAEgEACIgEABIgLgCQgIgCgBgBIgBgCIADgFIACgGIgBg9QgCgBgJAPQgJAQAAAHIAAAdQACACAAADQAAADgBACQgBACgDABIgCAAIgMgCQgIgCgBgBIgBgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIABgCIAAhIIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEAEgBQADAAAJACQAKADABACIgBAFIgBAHIAAADQACgHAFgGQAFgIAFAAQAFAAAIAEQAHAEACADQACABABAKIAIgOQAFgIAFAAQAFAAAIAEQAJAEABADQACAEABATIABAxIABAGQAAAEgDACIgEABIgNgCg");
	this.shape_109.setTransform(817.6,630.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#56390A").s().p("AAABBIgHgCIgOgGQgHgCgGgTQgEgTAAgWQAAgXAEgQQAGgTAKgDIABAAIADABIACABQAFgCAFAAQAEAAAIACIANAEQAEABADAEQACAEADAHQAEANAAAVQAAAWgGAXQgFAPgGAJQgIAIgIAAIgGgCgAgIgiQgCAOAAASQAAANACARIAEAMQABAEACAAQACAAADgFQACgFACgIQADgSAAgVQAAgPgCgLIgDgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgHAAgFAQg");
	this.shape_110.setTransform(806.7,628.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#56390A").s().p("AgDAvQgIgEgBgCQgBgBADgHIAEgKQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAIACQAGABABADQAAABgCAFQgCAEAAADIAAAEQgBAEgCABIgBAAQgDAAgFgDgAgDgXQgIgEgBgCQgBgBADgIIAEgJQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAIACQAGABABADQAAACgCAEQgCAFAAADIAAADQgBAFgCABIgBAAQgDAAgFgDg");
	this.shape_111.setTransform(796.1,630.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALQgEAHgEAEIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_112.setTransform(791,630.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#56390A").s().p("AAmAvQgHgCgBgBIgBgCIACgGIADgFIgBg9QgDgBgIANQgIAPAAAJIAAAfIABAFQAAAEgEACIgEABIgLgCQgIgCgBgBIgBgCIADgFIACgGIgBg9QgCgBgJAPQgJAQAAAHIAAAdQACACAAADQAAADgBACQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgCAAIgMgCQgIgCgBgBIgBgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIABgCIAAhIIgBgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEAEgBQADAAAJACQAKADABACIgBAFIgBAHIAAADQACgHAFgGQAFgIAFAAQAFAAAIAEQAHAEACADQACABABAKIAIgOQAFgIAFAAQAFAAAIAEQAJAEABADQACAEABATIABAxIABAGQAAAEgDACIgEABIgNgCg");
	this.shape_113.setTransform(780.7,630.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#56390A").s().p("AAJA+QgGAAgHgCQgJgDgBgDQgBgBACgEQACgCAAgGIAAhAIgCgIQAAgCAGAAQAEAAAHADQAJADABACIABABIgCAFIgCAFIAAA9QAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIACAEQABAFgFACgAgBgmQgMgEgBgCIAAgCQAAgEACgFQADgFADgBQADgBAIAEQAJADACAEIAAABIgCAJQgBAFgCABIAAAAIgMgDg");
	this.shape_114.setTransform(772,628.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#56390A").s().p("AAMBDIgNgCQgKgCgCgCQgCgDACgFIACgGIAAhLIgLADIgCABIgEABQgDgBgGgJQgHgIABgDQABgDAHgCIAEAAIADAAIA1gOIAFgCIAEgBQAFABABADIADAHIABAKIgBAFQAAACgFAAIgEgBIgDAAIgQAEIAABRQAAAEACAFIAAAGQgBAFgCABIgCAAg");
	this.shape_115.setTransform(765.1,628.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#56390A").s().p("AAABBQgIgDgCgBQgDgDAAgDIAAgBIABgDIAAhsIgBgCIAAgCQAAgEAGgBIAGAAIAJACQAGACAAADIAAADIgBACIgCAKIAABeIABAEIABACQAAAKgEABIAAAAIgJgCg");
	this.shape_116.setTransform(755.2,628.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#56390A").s().p("AgTAuIgGgGIgIgJQgDgEAAgFIAAgCQACgHAFgGQAEgGAIgGQALgIATgLQAAgEgCgCQgCgBgJAFQgIAEgEADIgEAEQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBgBQgCAAgFgFIgGgHQgBgEADgCIAHgCIALgGIALgFIAJgCQADAAAFAEIAIAHIAIAGQAFAFAAAEIAAA6IACAFIgCAEQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgKgBgFgCQgFgCgBgCIgBgBIABgCIABgBIAAgCIABgFIgGAHQgEAGgCAEQgFAEgGAAQgEAAgEgDgAAAAFIgIAJQgEAEgCAFQgDAFAAADIABABQABAAAEgDIAJgLIAJgNIAFgIQgIADgEAFg");
	this.shape_117.setTransform(748.7,630.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#56390A").s().p("AgDA4QgKgDAAgDIABgEIABgGIAAg1IgFAAQgDAAgEgGQgFgFAAgDIACgEQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIALAAIAAgOQgCgDAAgEQAAgDADgBIAEAAQAFAAAHACQAIABACADIABACQAAABgCADIgDAFIAAAIIAFAAQACAAAEAFQAFAGABACQAAADgDADQAAAAAAAAQgBABAAAAQgBAAAAAAQAAABgBgBIgBAAIgKAAIAAA8IABACIABAFQAAAEgGABQgEAAgHgDg");
	this.shape_118.setTransform(741.2,629.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#56390A").s().p("AAIAxIgMgDIgLgCQgFgBgDgEQgEgEgCgGIgEgNIgBgPQAAgHABgHQABgHADgHIAGgMQAEgFAFgDIAFgBIALACIAQACQAEACADAEQAEAEACAGQAEALAAAQQAAAJgCAJQgCAJgDAIQgEAIgFAEQgEADgEAAIgDAAgAgDgcQgCADgBAFQgEANAAAHQABANACAIQADALADABQAEABAEgMQAEgMAAgNQAAgIgCgIQgDgLgGAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAg");
	this.shape_119.setTransform(734.3,630.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#56390A").s().p("AAMBDIgNgCQgKgCgCgCQgCgDACgFIACgGIAAhLIgLADIgCABIgEABQgDgBgGgJQgHgIABgDQABgDAHgCIAEAAIADAAIA1gOIAFgCIAEgBQAFABABADIADAHIABAKIgBAFQAAACgFAAIgEgBIgDAAIgQAEIAABRQAAAEACAFIAAAGQgBAFgCABIgCAAg");
	this.shape_120.setTransform(727.9,628.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#56390A").s().p("AAABCIgHgDIgOgGQgHgCgGgTQgEgTAAgWQAAgXAEgQQAGgSAKgEIABAAIADABIACAAQAEgBAGAAQAEAAAIACIANAEQADABADAEQAEAEACAHQAEAOAAATQAAAXgGAWQgFARgHAIQgGAIgJAAIgGgBgAgIghQgCANAAASQAAAOACAQIAEAMQAAABABABQAAABAAAAQABABAAAAQABAAAAAAQACAAACgFQADgEACgKQADgQAAgWQAAgQgCgKIgCgJQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgGAAgFARg");
	this.shape_121.setTransform(817.3,607.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#56390A").s().p("AAPBDQgDAAgKgGQgIgHAAgCIAAgDIABgDIAAhAQAAgDgHgCQgIgCgBgDIgBgDQAAgEAEgEIAFgJIAEgMQACgHAHAAQAGAAAGAEQAIAFAAAGIAABmIABAEIACAEQAAAEgDADQgBADgDAAIgBgBg");
	this.shape_122.setTransform(806.8,607.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#56390A").s().p("AgdBDQgCAAgHgFQgGgFgBgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAfgyQAcgvAJgNIABgDQAEgDADAAIABAAQACAAAGAHQAHAHAAACIAAABQgKAHgeAvIgUAjIgIAQIAAACIgBADQgBADgBACIgEABIgBAAg");
	this.shape_123.setTransform(800,607.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#56390A").s().p("AAABCIgHgDIgOgGQgIgCgEgTQgFgTAAgWQAAgXAFgQQAFgSAKgEIABAAIADABIACAAQAFgBAEAAQAFAAAIACIANAEQAEABADAEQADAEACAHQAEAOAAATQAAAXgHAWQgEARgGAIQgIAIgIAAIgGgBgAgHghQgEANAAASQAAAOAEAQIADAMQACAEABAAQACAAADgFQACgEACgKQADgQAAgWQAAgQgBgKIgEgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgHAAgEARg");
	this.shape_124.setTransform(791.6,607.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#56390A").s().p("AgDAvQgIgEgBgCQgBgBADgHIAEgKQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAIACQAGABABADQAAABgCAFQgCAEAAADIAAAEQgBAEgCABIgBAAQgDAAgFgDgAgDgXQgIgEgBgCQgBgBADgIIAEgJQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAIACQAGABABADQAAACgCAEQgCAFAAADIAAADQgBAFgCABIgBAAQgDAAgFgDg");
	this.shape_125.setTransform(781,609.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#56390A").s().p("AAVBCIgJgBQgCgBgCgDIAAgCIACgTIgHAPQgEAJgEgBQgQgDgHgKQgIgIAAgRQAAgRAKgSQAJgRAMgGIACAAQADAAAKAJIAAgeIgBgFIgCgFQAAgDAFAAIALACIAJAEQAEABABADIgCAHIgBAEIAABlQAAAFABABQACAEgBABIgEABIgLgBgAgFAAQgEAGgBAGQgCAGAAAGQAAANAKACQAEAAAIg3QgJADgGANg");
	this.shape_126.setTransform(775.2,607.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALQgEAHgEAEIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_127.setTransform(767.2,609.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#56390A").s().p("AASAvQgJgCgCgDIABgFIABgGIAAgEQgCAIgEAGIgFAFIgFACQgFAAgIgEQgJgDgBgDQgFgKAAg/IgBgFQABgFADgCIAEAAIAMABQAIACABACIABACIgCAFQgCAEAAACQgBA8ABAAQABAAAAAAQAAAAABAAQAAgBABgBQAAAAABgBIAGgLIAHgNQACgFAAgEIAAgdQgCgCAAgDQAAgDABgCQABgCAEgBIABgBIAMACIAJADIABADIgCAEIgBADIAABHIABADIABAEQAAACgFACIgBAAIgLgCg");
	this.shape_128.setTransform(759.4,609.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#56390A").s().p("AgVAoQgGgEgDgIQgCgJAAgNQAAgTAGgQQAGgSAKAAQAIgBAKAFQALAEADAGQAEAEAAAIIgBAFIAAAGIABAEQAAAFgFgBQgGAAgFgBQgGgDgCgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgGIgBgHQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEgBgDAQQgDASAAALIABAOQABAFACABQAEABAEgJQAFgHABgDIAAgFQABgEAFAAIAKAEQAHADAAABIAAADQAAADgFAFIgHANQgEAFgEADQgFACgFABIgDABQgJAAgMgJg");
	this.shape_129.setTransform(751.3,609.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#56390A").s().p("AACAwIgFgBIgGgCQgDAAgCgCIgGgJIgFgJIgDgFQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIADgBIAMACQAHAAABABIABAJQABAHABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgHQAAgNgGgDIgMgGQgFgDgCgCQgDgDgBgGQgCgFAAgGQAAgJAFgIIAFgGQADgDADAAQADgBAOAHIAIABQAFABACADQADADAAAIIABALIABAHQAAAEgFAAQgCABgGgCQgHgDgCgCIgBgMQAAgKgCAAQgCAAgBAGQgCAGAAAHIAAAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAOAHQAIAFADAEIADAHIABAJQAAAIgGAGQgDACgEACIgJABg");
	this.shape_130.setTransform(744,609.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALQgEAHgEAEIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_131.setTransform(736.7,609.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#56390A").s().p("AghBBQgJgCAAgDIAAgCIAAgDIAAhrIAAgCIgBgCQABgEAGgBQACAAAGACQAHACADgBQACAAAIgEQAIgEAFAAIAFABQAFAAADAEIAHAGIAJAIQAEAFAAAGQABASggAbIAdAdIAEABIAEADQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgFAJQgHAKgEAAQgFAAgDgFIgDgFIgfgeIAAAcIABAFIABADQAAAFgGABIgCAAIgMgCgAgPgdIAAAYQAGgDAKgNIAIgMQADgFAAgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgIAAgRAPg");
	this.shape_132.setTransform(728.3,607.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#56390A").s().p("AACAwIgFgBIgGgCQgDAAgCgCIgGgJIgFgJIgDgFQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIADgBIAMACQAHAAABABIABAJQABAHABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIABgHQAAgNgGgDIgMgGQgFgDgCgCQgDgDgBgGQgCgFAAgGQAAgJAFgIIAFgGQADgDADAAQADgBAOAHIAIABQAFABACADQADADAAAIIABALIABAHQAAAEgFAAQgCABgGgCQgHgDgCgCIgBgMQAAgKgCAAQgCAAgBAGQgCAGAAAHIAAAGQAAABABAAQAAABAAAAQABABAAAAQABAAAAABIAOAHQAIAFADAEIADAHIABAJQAAAIgGAGQgDACgEACIgJABg");
	this.shape_133.setTransform(795.9,588.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#56390A").s().p("AgDA4QgKgDAAgCIABgFIABgFIAAg3IgFAAQgDAAgEgEQgFgGAAgDIACgEQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIALAAIAAgOQgCgDAAgEQAAgDADAAIAEgBQAFAAAHACQAIABACACIABACQAAACgCAEIgDADIAAAJIAFAAQACAAAEAGQAFAFABADQAAACgDACQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAIgBAAIgKgBIAAA8IABADIABAEQAAAEgGABQgDAAgIgDg");
	this.shape_134.setTransform(789.3,587.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#56390A").s().p("AgWBBIgJgDQgEgBAAgDIABgGIABgGIAAhkQAAgEgBgCQgCgEABgBIAEgBIALABIAJACQACAAACADIAAADIgCATIAHgQQAEgJAEABQAQADAHAKQAIAJAAAQQAAARgKASQgEAJgGAGQgFAFgGADIgCABQgCAAgDgCIgIgHIAAAdIABAFIACAEQAAAEgFAAIgLgDgAgJASQAJgEAGgNQAHgNAAgKQAAgOgKgBIAAAAQgFAAgHA3g");
	this.shape_135.setTransform(782.2,589.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#56390A").s().p("AAABCIgHgDIgOgFQgHgDgFgUQgFgSAAgVQAAgYAFgQQAFgSAKgEIABAAIADABIACAAQAFgBAEAAQAFAAAIACIANAEQADABAEAEQADAEACAHQAEAOAAATQAAAXgGAWQgFARgGAIQgIAIgIAAIgGgBgAgIghQgDANAAASQAAAOADAQIAEAMQABAEACAAQACAAADgEQACgGACgJQADgRAAgUQAAgQgCgLIgDgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgHAAgFARg");
	this.shape_136.setTransform(773.5,586.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#56390A").s().p("AgDAvQgIgEgBgCQgBgBADgHIAEgKQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAIACQAGABABADQAAABgCAFQgCAEAAADIAAAEQgBAEgCABIgBAAQgDAAgFgDgAgDgXQgIgEgBgCQgBgBADgIIAEgJQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAIACQAGABABADQAAACgCAEQgCAFAAADIAAADQgBAFgCABIgBAAQgDAAgFgDg");
	this.shape_137.setTransform(762.9,588.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#56390A").s().p("AgIAsQgLgEgDgEQgJgMAAgUQAAgTAIgPQAEgIAGgEQAFgEAHgBQAEAAAGADIAIAEIAGAFQACABABAHIABAPIAAAJQgBADgCABIgQAEIgQACQAAAIACAIQACAIADABQACAAAEgGQAEgEABgDIADgKQADAAAHADQAHACABADQACACgIALQgEAHgEAEIgIAGIgCABQgGAAgJgEgAgDgVIgDAIIgCAIQAHAAADgDIACgFIAAgLIAAgGIAAAAQgDAAgEAJg");
	this.shape_138.setTransform(757.8,588.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#56390A").s().p("AgUAuQgJgDAAgFIACgEIABgGIAAg8IgCgJQAAgFAEgBIAFgBQAFAAAGACQAGACACACIAAACIgCAHIAAAHIAGgNQAFgIACgBQADAAAHAEQAHAFABADQABABAAAAQgBABAAABQAAAAAAAAQgBABgBAAIgDACIgaAnIABAaIABAEIAAAFQAAABAAAAQAAABAAAAQAAABAAAAQgBABgBAAIgFABQgFAAgIgDg");
	this.shape_139.setTransform(751.3,588.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#56390A").s().p("AAIAxIgMgDIgLgCQgFgBgDgEQgEgEgCgGIgEgNIgBgPQAAgHABgHQABgHADgHIAGgMQAEgFAFgDIAFgBIALACIAQACQAEACADAEQAEAEACAGQAEALAAAQQAAAJgCAJQgCAJgDAIQgEAIgFAEQgEADgEAAIgDAAgAgDgcQgCADgBAFQgEANAAAHQABANACAIQADALADABQAEABAEgMQAEgMAAgNQAAgIgCgIQgDgLgGAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAABgBAAg");
	this.shape_140.setTransform(743.7,588.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#56390A").s().p("AgVAoQgGgEgDgIQgCgJAAgNQAAgTAGgQQAGgSAKAAQAIgBAKAFQALAEADAGQAEAEAAAIIgBAFIAAAGIABAEQAAAFgFgBQgGAAgFgBQgGgDgCgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAgGIgBgHQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEgBgDAQQgDASAAALIABAOQABAFACABQAEABAEgJQAFgHABgDIAAgFQABgEAFAAIAKAEQAHADAAABIAAADQAAADgFAFIgHANQgEAFgEADQgFACgFABIgDABQgJAAgMgJg");
	this.shape_141.setTransform(735.7,588.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#56390A").s().p("AAABCIgGgCIgHgCQgEAAgDgDQgEgEgDgIIgFgMIgDgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAEAAIANABIAJACQABABABAKQACAKABABIACAAQADAAACgFQACgFAAgGQAAgHgCgEQgCgFgFgCIgPgKQgHgEgDgEQgJgKAAgOQABgMAIgMQAIgMAIgCQAEAAARAHIAJAEQAEACADADQACADACAFIABALIgBAHIAAAGIABAEIABADQAAAHgGABQgDAAgIgDQgKgDgCgDIAAgDIAAgLIABgMQAAgGgCAAQgEAAgDAHQgDAGAAAJQAAAHACAFQACAFADADIATAKQAJAGADAGIADAJIABAMQAAAFgBAFQgCAFgEADQgIAIgNAAIgIgBg");
	this.shape_142.setTransform(727.4,586.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#362106").s().p("AgVBLQgNgEgDgEQgCgCABgHIAAgEIAAh5IgBgDIgBgCQAAgEAGgBQAEgBANADQAOAFAAAFIgCAFIgCAEIAABjIASgIIAGgDQADgBALAIQALAJgBACQgCAJgFABIgEABIgDAAIgbALIgCADIgCADIgDAAQgFAAgJgDg");
	this.shape_143.setTransform(825.5,552.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#362106").s().p("AgVBLQgNgEgDgEQgCgCABgHIAAgEIAAh5IgBgDIgBgCQAAgEAGgBQAEgBANADQAOAFAAAFIgCAFIgCAEIAABjIASgIIAGgDQADgBALAIQALAJgBACQgCAJgFABIgEABIgDAAIgbALIgCADIgCADIgDAAQgFAAgJgDg");
	this.shape_144.setTransform(816.8,552.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#362106").s().p("AAmBKQgKgDgDgEQgCgCgBgJIgFgUQgGABgNAEQgNAEgEADIgHATIgBAFQgBACgDACIgBAAQgEAAgLgFQgKgEAAgCQgBgCAEgKIAHgSQgEgEAAgDIAAgCQABgDAKgFIAYhPIAAgIQgBgFACgBQAAgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAJAAAPAEIAMAEIAGAEQABAUAIAoQAJAxAJATIgBAIQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABQgGAAgJgDgAgCgGIgGAUIATgFIgDgOQgCgNgBgNg");
	this.shape_145.setTransform(805.7,552.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#362106").s().p("AASBLIgJgFQgDgCgBgDIgBgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIACgDIAAgkIgNACIgNAEIAAAlIABADIACACIgCAGIgCADQgDABgNgFQgNgEgBgDIAAgEIAAgFIAAhzIACgKQAAgCAGgEIACAAQAHAAAHACQAKADAAAFQABACgCAEIgCAGIAAAtIAagHIAAgyIgBgDIAAgEQABgDAFgBIAHgBQAEAAAIACQAIADABAEQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBAGIAAAyIAIAHQAFAEAAACQAAACgEAEQgEAEgCAAIgDAAIAAAuIACAGQABAMgEACIgDAAQgGAAgKgEg");
	this.shape_146.setTransform(794.5,552.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#362106").s().p("AgbBJQgMgFAAgDIAAiHQAAgBAFgDIAGgCIAIADQAHADAEAAQAGAAAHgFQAIgFACABQAFABAIAIQAJAIAAAEQAAACgDADQgDAEgDAAIgDAAIgCAAIgMADQgMAFgGAFIAAAeQAGgDAKgEQACAAAJAIQAKAIAAADQAAACgCADQgDADgDAAIgGABQgNAEgKAHIAAATIAOgHIALgFQACAAALAIQAKAIAAACQgBADgDAEIgEAEIgCgBIgCAAIgBAAIgLAEIgNAHIgLAJg");
	this.shape_147.setTransform(780.3,552.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#362106").s().p("AAGBOIgRgHQgSgHgJgUQgIgTAAgYQAAgdALgXQAMgZATAAQADgBAEACIAMAGIAMAHQAEAEACAEQAFAIABAZQABAFgCAGQgCAHgEgBIgQgEQgLgEgBgCIgBgCIACgEIABgEIABgOQAAgJgCgEQgFAEgDAHQgEAGgDAKQgDAIgBAIQgBAIAAAKQAAAQADAMQACAMAEACQACABAHgIQAJgIACgGIACgFQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAEgBAMAGQANAGAAADQgBAEgDADIgGALIgKAMQgGAGgFADQgEADgEAAg");
	this.shape_148.setTransform(770.2,552.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#362106").s().p("AAhBOQgGgBgJgDQgLgDgBgEIAAgIIgXg7IAAA2IABAEIACADIABAGQAAADgCACQgBACgEAAQgGAAgMgEQgLgDgBgCQgCgDACgFIACgFIAAhxIAAgDIgBgEQACgGAGgCIAEgBQAHAAAHACQAKACAEAEQACADADAIIAHAXQAGAWAJAXIAAhHIAAgEIgBgEIAAgCQABgDAGgBQAFgCAEABIAKACQAJACAAADIgBAEIgCAFIAAB3IABAHQABAIgDACQgCACgHAAIgGAAg");
	this.shape_149.setTransform(759,552.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#362106").s().p("AAmBKQgKgDgDgEQgCgCgBgJIgFgUQgGABgNAEQgNAEgEADIgHATIgBAFQgBACgDACIgBAAQgEAAgLgFQgKgEAAgCQgBgCAEgKIAHgSQgEgEAAgDIAAgCQABgDAKgFIAYhPIAAgIQgBgFACgBQAAgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAJAAAPAEIAMAEIAGAEQABAUAIAoQAJAxAJATIgBAIQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABQgGAAgJgDgAgCgGIgGAUIATgFIgDgOQgCgNgBgNg");
	this.shape_150.setTransform(746.6,552.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#362106").s().p("AgnBMQgLgDAAgDIAAgCIABgEIAAh+IgBgCIAAgBQAAgFAHgBQACgBAIACIALACQADAAAJgFQAKgEAGAAIAGAAQAFABAEAEIAIAHIAKAKQAFAFAAAHQABAVglAgIAiAiIAFACIAEADQABABgCAEIgGAKQgIAMgFAAQgGgBgDgFIgDgGIglgjIAAAhIABAFIACAFQAAAFgHABIgCAAQgGAAgJgCgAgSgiIAAAcQAHgDAMgQIAKgNQADgGAAgEQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgJAAgUASg");
	this.shape_151.setTransform(734.9,552.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#362106").s().p("AgcBJQgLgFAAgDIAAiHQAAgBAEgDIAHgCIAIADQAGADAFAAQAFAAAIgFQAIgFACABQAFABAIAIQAIAIABAEQABACgEADQgDAEgDAAIgDAAIgBAAIgNADQgMAFgGAFIAAAeQAGgDAJgEQADAAAJAIQAKAIAAADQAAACgDADQgCADgCAAIgHABQgNAEgKAHIAAATIAOgHIALgFQACAAALAIQAKAIAAACQgBADgDAEIgEAEIgCgBIgDAAIAAAAIgLAEIgNAHIgLAJg");
	this.shape_152.setTransform(724.7,552.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#362106").s().p("AAOBOQgGAAgJgCQgMgCgDgDQgCgEADgFIACgHIAAhZIgNAEIgDABIgDABQgFgBgHgJQgHgKABgEQABgEAHgCIAFAAIAFAAIA+gQIAFgCIAFgBQAFABACACIADAJQACAHAAAFIgBAGQgBADgGgBIgEgBIgEAAIgTAFIAABeQAAAFADAGQABACgCAFQgBAGgCABIgCAAg");
	this.shape_153.setTransform(714.2,552);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#362106").s().p("AAhBOQgGgBgJgDQgLgDgBgEIAAgIIgXg7IAAA2IABAEIACADIABAGQAAADgCACQgBACgEAAQgGAAgMgEQgLgDgBgCQgCgDACgFIACgFIAAhxIAAgDIgBgEQACgGAGgCIAEgBQAHAAAHACQAKACAEAEQACADADAIIAHAXQAGAWAJAXIAAhHIAAgEIgBgEIAAgCQABgDAGgBQAFgCAEABIAKACQAJACAAADIgBAEIgCAFIAAB3IABAHQABAIgDACQgCACgHAAIgGAAg");
	this.shape_154.setTransform(703.4,552.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#362106").s().p("AgcBJQgLgFAAgDIAAiHQAAgBAEgDIAHgCIAIADQAGADAFAAQAFAAAIgFQAIgFACABQAFABAIAIQAIAIABAEQABACgEADQgDAEgDAAIgDAAIgBAAIgNADQgMAFgGAFIAAAeQAGgDAJgEQADAAAJAIQAKAIAAADQAAACgDADQgCADgCAAIgHABQgNAEgKAHIAAATIAOgHIALgFQACAAALAIQAKAIAAACQgBADgDAEIgEAEIgCgBIgDAAIAAAAIgLAEIgNAHIgLAJg");
	this.shape_155.setTransform(693.2,552.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#362106").s().p("AmXoNQATiVBAiWQCAkrDiAAQDjAABbFCQAtChAAChIAcYvItJAUg");
	this.shape_156.setTransform(537.2,515.6,1.21,1.192,0,0,0,1.6,114.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0C0905").s().p("AmXoNQATiVBAiWQCAkrDiAAQDjAABbFCQAtChAAChIAcYvItJAUg");
	this.shape_157.setTransform(507.1,515.6,0.939,1.192,0,0,0,1.5,114.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF6699").s().p("AmXoNQATiVBAiWQCAkrDiAAQDjAABbFCQAtChAAChIAcYvItJAUg");
	this.shape_158.setTransform(869.9,514.8,1.266,1.192,0,0,0,1.5,114.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0C0905").s().p("AmXoNQATiVBAiWQCAkrDiAAQDjAABbFCQAtChAAChIAcYvItJAUg");
	this.shape_159.setTransform(852,514.8,1.266,1.192,0,0,0,1.5,114.2);

	this.button_3 = new lib.button_entrance();
	this.button_3.parent = this;
	this.button_3.setTransform(811.5,591.2,1,1,0,0,0,186.3,81.2);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("rgba(227,176,45,0.498)").p("AEW7VIAAgMMAq4AAAIAAAMEAvOAI5IAABCIAAQ4EgvNgaxMAq4AAAMAAAA2TIAAABMgq4AAAIAAgBg");
	this.shape_160.setTransform(603,337.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(4.4,1,1).p("AgBggQADAQAAAQQAAARgDAQ");
	this.shape_161.setTransform(905.4,397.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(30,10,2,0.498)").s().p("EgvNAbcMAAAg2TMAq4AAAMAAAA2TgAEWa4MAAAg2TMAq4AAAMAAAAkOIAABCIAAQ4IAAALMgliAAEg");
	this.shape_162.setTransform(603,337.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#1B0F06").s().p("AgBggQADAQAAAQQAAARgDAQg");
	this.shape_163.setTransform(905.4,397.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.button_3},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).wait(1));

	// Layer 27
	this.button_2 = new lib.Symbol12();
	this.button_2.parent = this;
	this.button_2.setTransform(446.7,592.6,0.69,0.69,0,0,0,261.4,115.8);
	this.button_2._off = true;
	new cjs.ButtonHelper(this.button_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(1).to({_off:false},0).wait(1));

	// FlashAICB
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AhJCvIgXgXIgegjQgNgRAAgOIACgKQAFgaASgYQARgZAdgWQArgiBMgmQAAgTgJgFQgGgDgjAQQgjARgOAMIgPANQgKAGgJgCQgGgCgVgUQgVgTgCgHQgFgQAPgIIAXgIIAsgXIArgRQASgGAQgBQAOgBARAPIAfAbIAgAaQATAQAAAQIAADeQAFAPAAAFQgBAJgGAFQgHAGgIgBQgkgFgVgHQgUgHgEgIIgBgFIACgHIADgGIADgFIABgVQgIAGgOAXQgOAZgLAKQgTASgYAAQgOAAgOgLgAgDASIgfAlQgMANgLAUQgLATAAAKQAAAEAEAAQAGAAAOgNIAjgoIAjgwQANgUAHgPQgdALgUAWg");
	this.shape_164.setTransform(736.4,87.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AghCnQgogOgMgRQgigsAAhOQAAhKAeg5QAQgeAVgQQAUgQAZgBQASAAAaAKIAdAPQANAIAKALQAFAFAFAaQAGAdAAAbQAAAUgDAOQgDAOgHAGQgeAKgfAFQgfAGgfABQgBAdAIAgQAIAgAJAAQALABARgUQAPgRADgMIALglQAKgBAbALQAcAKAFAJQAFAJgcArQgQAXgPAQQgPAQgOAIIgLACQgXAAgkgOgAgMhUIgPAgQgFAQgBAPQAagBAPgMQAFgDACgPIADgpQAAgWgDgBIgBAAQgKAAgQAgg");
	this.shape_165.setTransform(706.1,87.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AhNCvQgigLAAgTIAEgRQAFgMAAgHIAAjpIgGgiQAAgTAQgEIARgCQAVAAAXAHQAWAGAFAIIABAGIgIAcIAAAdIAagzQATggAIgCQANgCAbASQAbARACAMQADAKgJAFIgOAIIhkCYIABBhIAFAPIADATQAAALgKAEQgGADgLAAQgXAAgbgKg");
	this.shape_166.setTransform(681.4,87.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AB8DxQgfgJgMgNQgEgGgFgeQgGgogJgaQgWAEgqANQgrANgNAJIgYA/IgEAPQgCAHgIAFIgFACQgOgBgigPQghgOgBgFQgDgIAOghIAWg6QgNgMAAgNIABgFQABgIAjgSIBMkDIABgaQgCgQAFgEQADgDALAAQAcAAAyAOIApANQAQAGAFAHQADBAAXCEQAeCgAeA+IgCAZQAAALgFAFIgKACQgTAAgdgKgAgJgVQgSA1gBANQALgFA1gMIgKgwQgHgngCgqg");
	this.shape_167.setTransform(646.3,80.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AhkCyQgfgHgDgFQgDgFgBgFQABgGAGgIIAHgLIAAkRIgFgNQgFgIADgFQADgMAPgEQAJgCAjAJQAmAJADAKQADAHgFANIgGAXIADAOQAIgdAQgXQASgcAUAAQAUAAAgAOQAgAOAFALQAHATAFBGQAEBEAAB5QAEALAAAMQAAARgNAHIgOABQgVAAgbgGQgcgGgGgGIgDgHQAAgHAJgPQAJgOgBgGQACiagFhPQgIgEggA5QgiA7ABAdIAABuQAHAIAAALQAAALgFAIQgFAHgKAEIgHACQgQAAgfgIg");
	this.shape_168.setTransform(597.3,87);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AhJCvIgXgXIgegjQgNgRAAgOIACgKQAFgaASgYQARgZAdgWQArgiBMgmQAAgTgJgFQgGgDgjAQQgjARgOAMIgPANQgKAGgJgCQgGgCgVgUQgVgTgCgHQgFgQAPgIIAXgIIAsgXIArgRQASgGAQgBQAOgBARAPIAfAbIAgAaQATAQAAAQIAADeQAFAPAAAFQgBAJgGAFQgHAGgIgBQgkgFgVgHQgUgHgEgIIgBgFIACgHIADgGIADgFIABgVQgIAGgOAXQgOAZgLAKQgTASgYAAQgOAAgOgLgAgDASIgfAlQgMANgLAUQgLATAAAKQAAAEAEAAQAGAAAOgNIAjgoIAjgwQANgUAHgPQgdALgUAWg");
	this.shape_169.setTransform(564.1,87.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgODWQglgMgCgKQgBgEAGgOQAFgNAAgHIAAjQIgVAAQgKAAgRgTQgQgUgBgMQAAgJAHgHQAHgHAJAAIAqAAIAAg1QgJgMAAgOQAAgMALgDIAOgBQAWAAAcAHQAeAHAIAHQAFADAAAFQAAAGgKAMQgKALAAAFIAAAgIATAAQAGAAASAVQAUAVAAAJQgBALgGAIQgHAIgIAAIgEAAQgIgDgdAAIAADoIAEAJIADASQAAARgXABIgBAAQgNAAgegKg");
	this.shape_170.setTransform(522.9,83.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AhUCYQgVgOgKghQgLggAAgzQAAhLAXg9QAahDAkgCQAdgCApARQAqASAPAUQAMARAAAcIgBAXIgBAUIACAPQAAATgTgBQgVgBgTgFQgZgJgFgQQgCgFAGgJQAHgJgBgGIABgUQAAgSgDgJQgDgJgGgBQgSgBgNA6QgMBIAAApQAAAkAFATQAEATAIACQAOADAVggQASgcACgKIACgTQAEgRARABQALACAbAMQAaAMACAGIABALQAAALgTATQgQAjgNAPQgNASgRAKQgRALgTADIgPABQghAAgxggg");
	this.shape_171.setTransform(497.9,86.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AghCnQgogOgMgRQgigsAAhOQAAhKAeg5QAQgeAVgQQAUgQAZgBQASAAAaAKIAdAPQANAIAKALQAFAFAFAaQAGAdAAAbQAAAUgDAOQgDAOgHAGQgeAKgfAFQgfAGgfABQgBAdAIAgQAIAgAJAAQALABARgUQAPgRADgMIALglQAKgBAbALQAcAKAFAJQAFAJgcArQgQAXgPAQQgPAQgOAIIgLACQgXAAgkgOgAgMhUIgPAgQgFAQgBAPQAagBAPgMQAFgDACgPIADgpQAAgWgDgBIgBAAQgKAAgQAgg");
	this.shape_172.setTransform(468.7,87.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgCD2QgggJgHgGQgNgLAAgJIADgGIACgKIAAmeIgCgIIgCgHQABgPAVgEIAZAAQAVACAPAEQAZAHAAANIgDAMIgDAJIgHAkIAAFpQAAAHADAGIAEAJQAAAmgPADIgBAAQgHAAgcgIg");
	this.shape_173.setTransform(447.2,81.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AghCnQgogOgMgRQgigsAAhOQAAhKAeg5QAQgeAVgQQAUgQAZgBQASAAAaAKIAdAPQANAIAKALQAFAFAFAaQAGAdAAAbQAAAUgDAOQgDAOgHAGQgeAKgfAFQgfAGgfABQgBAdAIAgQAIAgAJAAQALABARgUQAPgRADgMIALglQAKgBAbALQAcAKAFAJQAFAJgcArQgQAXgPAQQgPAQgOAIIgLACQgXAAgkgOgAgMhUIgPAgQgFAQgBAPQAagBAPgMQAFgDACgPIADgpQAAgWgDgBIgBAAQgKAAgQAgg");
	this.shape_174.setTransform(425,87.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AABD7IgbgIIgdgGQgOgDgLgKQgQgPgKggQgMglgHgJIgLgRQgCgIAFgJQAFgJAHgCIANgBQAVAAAeAFQAeAFADAEQAEAEAGAmQAFAkAJAEIAGABQALAAAIgSQAIgTAAgXQAAgagIgRQgIgRgQgJQgkgUgZgSQgagRgPgRQgignAEg1QADgsAdgtQAdguAhgHQANgDBEAdIAiANQASAHALAOQAIAKAEASQAEASAAAZIAAAcIgBAWIAEAOQADAHAAAGQgCAagUADQgMACgggLQgkgLgJgNIgBgMIACgoIACgtQAAgagGABQgRABgMAZQgMAZAAAgQAAAbAIASQAHATAPALIBHAsQAhAWANAWQAJAOAEAUQAEAUAAAZQAAAWgHASQgIASgOAOQgdAcgzABQgNAAgPgEg");
	this.shape_175.setTransform(394.7,80.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#362106").p("AjVrJIGpK+ImcLV");
	this.shape_176.setTransform(1007.2,357.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AjUrJIGpK9ImcLWg");
	this.shape_177.setTransform(1007.2,357.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#362106").p("EgiOgHYMBEdAAAIAAOxMhEdAAAg");
	this.shape_178.setTransform(564.3,85.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E3B02D").s().p("EgiOAHZIAAuxMBEdAAAIAAOxg");
	this.shape_179.setTransform(564.3,85.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(227,176,45,0.498)").s().p("EhIhAsdMAAAhY5MCRDAAAMAAABY5g");
	this.shape_180.setTransform(533.6,384.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164}]},1).wait(1));

	// Layer 22
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.rf(["#342412","rgba(52,36,18,0.996)","rgba(52,36,18,0.996)","rgba(52,36,18,0)"],[0,0.42,0.49,1],0,0,0,0,0,140).s().p("A1bEXQkNg2iThIQiYhIAAhRQAAhQCYhJQCThHENg3QI4hzMjAAQMjAAI4BzQENA3CUBHQCYBJAABQQAABRiYBIQiUBIkNA2Qo4B0sjAAQsjAAo4h0g");
	this.shape_181.setTransform(99.6,562.9,1.342,1.342);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#563900","rgba(67,47,6,0.624)","rgba(49,38,22,0.275)","rgba(39,32,30,0.063)","rgba(36,31,32,0)"],[0,0.176,0.416,0.675,1],0,27.4,0,-27.3).s().p("Eg+fAESIAAojMB8/AAAIAAIjg");
	this.shape_182.setTransform(522.2,497.8,1.305,2.102);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#563900").s().p("Eg+fAH4IAAvwMB8/AAAIAAPwg");
	this.shape_183.setTransform(522.2,660.5,1.305,2.102);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["rgba(2,3,3,0)","#1D1D1B"],[0,1],423.1,273.2,-347.5,-224.4).s().p("EhCyAuaMAAAhczMCFlAAAMAAABczg");
	this.shape_184.setTransform(522.2,384,1.222,1.293);

	this.instance = new lib.tiled_bg();
	this.instance.parent = this;
	this.instance.setTransform(522.2,384.2,1.305,1.28,0,0,0,400,300.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181}]},1).wait(1));

	// Layer 20
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.6,574.5,1,1,0,0,0,54.2,120.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// FlashAICB
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.7,584.7,1,1,0,0,0,54.2,120.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#56390A").s().p("Ah+A4IBJicIgNACIgMADIAShKQAYgGAbgCIA4gDQCJAAAABCQAAAXgQAaQgjA8g+AkQgfASggALQgfAMgkAEIgtBjIhPAGgAATheIgtBhQAigEAdgRQAkgTAKgbIAEgOQAAgag2AAIgGABIgIAAIgIAAIgGAAg");
	this.shape_185.setTransform(882.2,676.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#56390A").s().p("AhnCyIgMAAQBAi4BTirIBTAAQgjBMgdBDIgzB9IAIAAIArgCIAxgGIgnBTIhUAJQgjADgiAAIgLAAg");
	this.shape_186.setTransform(853.9,676.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#56390A").s().p("Ah9AqQAdhEAfhFIgdAAIAdhKIB/gFIB3gJIgkBOQgjAAgfACIg8AGIgLAaIgMAgIA3gEIA3gDIggBOIgNAAIgwACIgyAGIgNAcIgLAfIA+gFIBAgDIghBPIhnAFIhtAJg");
	this.shape_187.setTransform(834.5,675.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#56390A").s().p("Aj5DiIAphmIA3iBIAzh2IAphYIBmAAIhNCtIBfAEIAfhDIA5h8IBnAAIg1ByIgwBvIgqBqIgnBqIhlAAIA0iRIhhgFIgkBQIgfBUg");
	this.shape_188.setTransform(800.4,679.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#56390A").s().p("Ak0FXIA1iNIAxhzIgEguIgCgzIAFigQAFhLAKhEICrgbIgEAbIgKBGIgGA2IgDAsIABAXIACASQA4hRAxg7QAwg7AsgnICZASIiTClIiWC1QhBBSggBOIgfBMIggBVg");
	this.shape_189.setTransform(931,519.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#56390A").s().p("AjoDIIBlikIB0i0ICCjKIDOgBQhREkgzFxIilAKIARhcQgggFgmgBIghABIghAEIg6BqIinALgAA0BcIAVACIARhaIAah9Ig5BZIhOB+IAUgCIAaAAg");
	this.shape_190.setTransform(870.6,520.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#56390A").s().p("AjHFWIgWAAQB6liCflIICigBQhGCTg2CBIhiDwIAPAAIBSgEIBggMIhNChIihARQhHAFhGAAIgNAAg");
	this.shape_191.setTransform(826.2,520.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#56390A").s().p("AksCFICtl8IgfAGIgdAHIAqitQAzgMBAgGQA/gFBOAAQFJAAAACWQAAA3goBDQhWCOiTBaQiQBWipAUIhsDwIi5AMgAAqjlIhuDvQBOgKBNgpQBagxAYhBIAIgjQgBhAiCAAIgRAAIgKAAIgEABIgGAAIgHABIgGAAIgLAAIgMAAg");
	this.shape_192.setTransform(773.5,528.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.instance_2}]}).to({state:[]},1).wait(1));

	// FlashAICB
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(539.8,438.1,1.748,1.748,0,0,0,-285.1,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1));

	// Layer 18
	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(714.6,214.9,0.613,0.613,0,0,0,193,186.1);

	this.instance_5 = new lib.ClipGroup_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(922.2,120.4,0.532,0.532,0,0,0,197.3,196.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[]},1).wait(1));

	// FlashAICB
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(842.8,677.9,1,1,0,0,0,149.6,45.1);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2);

	this.button_1 = new lib.Symbol1();
	this.button_1.parent = this;
	this.button_1.setTransform(842.8,526.2,1,1,0,0,0,149.6,72.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1},{t:this.instance_6}]}).to({state:[]},1).wait(1));

	// Layer 5
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(50,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(1));

	// FlashAICB
	this.instance_8 = new lib.ClipGroup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(287.2,700.1,1.187,1.187,0,0,0,320.1,57.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#563900","rgba(67,47,6,0.624)","rgba(49,38,22,0.275)","rgba(39,32,30,0.063)","rgba(36,31,32,0)"],[0,0.176,0.416,0.675,1],0,27.4,0,-27.3).s().p("Eg+fAESIAAojMB8/AAAIAAIjg");
	this.shape_193.setTransform(522.2,616.3,1.305,1.187);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#563900").s().p("Eg+fAH4IAAvwMB8/AAAIAAPwg");
	this.shape_194.setTransform(522.2,708.1,1.305,1.187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.instance_8}]}).to({state:[]},1).wait(1));

	// FlashAICB
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["rgba(2,3,3,0)","#1D1D1B"],[0,1],423.1,273.2,-347.5,-224.4).s().p("EhCyAuaMAAAhczMCFlAAAMAAABczg");
	this.shape_195.setTransform(522.2,384,1.222,1.293);

	this.instance_9 = new lib.tiled_bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(522.2,384.2,1.305,1.28,0,0,0,400,300.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_195}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(429.3,384,1137.2,768.1);
// library properties:
lib.properties = {
	id: 'E52BE14A3F3F4E3787716C96C6D87B34',
	width: 1044,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/TestUIPP_atlas_.png", id:"TestUIPP_atlas_"}
	],
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
an.compositions['E52BE14A3F3F4E3787716C96C6D87B34'] = {
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