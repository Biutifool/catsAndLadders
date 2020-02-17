(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"catsAndLadders_atlas_", frames: [[2150,4767,512,512],[0,0,2148,2324],[0,2326,2148,2324],[0,4652,2148,2324],[2150,1703,639,900],[1900,6978,800,801],[2150,4047,540,718],[1282,6978,616,1102],[2150,2605,542,719],[2150,0,800,800],[0,6978,1280,960],[2150,802,675,899],[2150,3326,542,719]]}
];


// symbols:



(lib.angry = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cat_angry = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cat_happy = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cat_sad = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dayan = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.earth = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.FIR = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fireman_normal = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.food2 = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jupiter = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.kotel = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.masada = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.sad = function() {
	this.initialize(ss["catsAndLadders_atlas_"]);
	this.gotoAndStop(12);
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


(lib.upperarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDC00").s().p("AhtAtIC4iHIAjAuIi4CHg");
	this.shape.setTransform(6.3986,8.3335,1.3748,1.3748);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEDC00").s().p("AhuAtIC5iHIAjAtIi5CIg");
	this.shape_1.setTransform(0.0401,0.0503,1.3748,1.3748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3B").s().p("ABgD8QgrgDgegfIjbkdQgdgmAGguQAGgvAlgdIACgBQAmgdAvAGQAuAGAdAmIDTESIAGAJQAXAlgHAsQgIArgjAbIgCACQgfAYgmAAIgJgBg");
	this.shape_2.setTransform(0.0023,0.0079,1.375,1.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upperarm, new cjs.Rectangle(-30.3,-34.7,60.7,69.5), null);


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F1C0F").s().p("EAVQA2nMAAAhtNIDwAAMAAABtNgEgY/A2nMAAAhtNIDwAAMAAABtNg");
	this.shape.setTransform(122.025,379.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7481A").s().p("Eg0yA6AQhbgJjKg1Qi7gxhqgFQhbgFicAVIgBABIgGAGQgKAIgMABQgNABgHgJQgGgHACgWQAbjLgPjNQgEg9gNhnIgSilQgLhrgHjYQgLlRgEkOQgChZABgtQAChKAHg6QAGgpAPhQQAQhSAGgoQAHg1AChDQACgkABhWQACj1gCh7QgDikgKiKQgDgGgBgIQgThVAIm1QAIm7AYhuQAOg/AEhQQADg2gBhbQgBhLgUqfQgNnDAMkmIAFimQAChfgJhIQgGg0gjifQgciEgChRQACg7gBgdQgBgzgMgjQgHgUgRgiQgUglgHgQQgSgtgCg+QgCgnAFhHQACgSAHgNIAGgGQgDgKAEgMQAGgRAPgJQAUgMAvAAIZKAIQBgABA0ADQBRAFBAAPQAtAKBTAdQBVAdAqAKQBXAWCGAGQBjAEDFgCMAg4gAXQHGgFDiABQFcADD9AOIDRALQB3AGBZgDIN7gYQJOgOBAAGQByALDBgTQDigXBRABQAOAAALAEIAAAAQAZAAAHArQAfCxgKC0QgCAcgIALQgPAUgxgCQi3gGibAXQgtAHllgIQlUgHhQgGQgzgEhmAAI7IACQivAAhXABQhpACmvASQlJAOjNgEQhQgCikgHIqLgdQh/gFhAABQhqABhTAPQgfAFhHARQhAAQglAGQgwAHhJAEIh5AGQj5ARjsBWQgMAFgLABQgCAYgIAeQgTBKgBAMQgDAZABAlIABA+QgBAegGAuIgKBMQgHA6ABBpIACH+QABAWgGAMQgEAIgIAEIgDACIAAADQADDbg9DQIgbBZQgQA1gHAlQgJAsgDA3QgBAegBBGQgFIMANF8QAQHnAvGdQAKBWAUDYQAdE5AECMQACBAA5FEQAbCigGCmIgFCLQAABPARA4QALAkAZAvIAsBPQAbA0AaBFQAPAoAcBUIBKDcQAaBOAVAnQAhA+AtAhQARANAmAVQAgAVAOAXQANAXABAiQAAAVgGAnQgDAVgIAGQgJAIgJgEQgCAFgDAGQgIALgOAJQhPA2h3AVQhKANiNAFIuMAeQhOADgsAAQhEAAg2gGg");
	this.shape_1.setTransform(441.2703,371.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(-38,0,920.6,743.7), null);


(lib.timeOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBBIAAg/QAAgTgFgIQgEgKgLgFQgLgEgUAAQgRAAgUADIgCgTQAWgEAVgBQAnAAAQAPQAPAPAAAfIAABFgAg3BBIAAhHIAXAAIAABHg");
	this.shape.setTransform(69.775,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBBIAAgTIAqAAIAAgmQAAgUgCgKQgBgKgGgGQgGgHgIABQgOAAgJANQgJAOgHAjIgJAvIgYAAIALgyIAGgYIgUg2IAWAAIAKAdQAGgNAMgJQALgIAOgBQAPAAALAIQALAIAEAPQAFAOAAAdIAAA4g");
	this.shape_1.setTransform(54.275,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA4QgQgMgHgUQgIgUAAgiIgCgkIAYAAIABAVQAAAhACAMQANAAALgGQAKgHAAgRIADgkIAWAAIgDAqIgCAPQgCAFgFAGQgEAFgKAFQgLAEgSABQADAOALAIQALAIAQAAQAOAAALgHQALgIAFgKQAFgMACgUIAFg4IAYAAIgFAwQgCAagHASQgHATgQALQgQAKgZABQgXgBgPgKg");
	this.shape_2.setTransform(38.475,37.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBbIAAhxQAAgVgFgJQgGgJgLgEQgKgEgPAAQgNAAgSACIgCgUQASgDAQAAQAjAAARAPQARANAAAhIAAB4g");
	this.shape_3.setTransform(22.775,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A2C53").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_4.setTransform(49.575,36.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_5.setTransform(49.575,36.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-10.9,104,84);


(lib.Timeout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBBIgxhFQgLAFgCATIgGAtIgXAAIAEgtQAEgeAWgLIgegrIAdAAIAoA6QAHgFAEgGQADgGABgPIADgaIAYAAIgCAbQgCARgGALQgGAKgOAJIAmA3g");
	this.shape.setTransform(722.05,289.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpA4QgQgMgHgUQgIgVAAghIgCgkIAYAAIABAWQAAAgACAMQANAAALgGQAKgGAAgTIADgjIAWAAIgDAqIgCAPQgCAFgFAGQgEAFgKAFQgLAEgSACQADANALAIQALAIAQAAQAOAAALgIQALgGAFgMQAFgLACgUIAFg4IAYAAIgFAxQgCAZgHATQgHARgQAMQgQALgZgBQgXABgPgLg");
	this.shape_1.setTransform(706.025,289.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_2.setTransform(694.275,289.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BBIAAgTIBPAAIAAgsQAAgSgEgJQgEgJgKgFQgKgFgWAAIgZABIgCgTQARgCASAAQAiAAAQAOQAPAQAAAeIAAAyIAVAAIAAATg");
	this.shape_3.setTransform(684.45,289.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBBIAAgTIAqAAIAAgmQAAgUgCgKQgBgKgGgGQgGgGgIAAQgOgBgJAOQgJAOgHAjIgJAvIgYAAIALgyIAGgYIgUg2IAWAAIAKAcQAGgMAMgIQALgJAOAAQAPgBALAIQALAIAEAOQAFAPAAAdIAAA4g");
	this.shape_4.setTransform(662.775,289.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBBIAAhFQAAgOgDgIQgDgJgKgEQgJgFgRAAIgXABIAABsIgYAAIAAh9QAbgFAVABQAXAAAPAGQAOAIAHAMQAFALABAVIAABHg");
	this.shape_5.setTransform(648.25,289.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBBIAAg/QAAgRgEgJQgDgJgLgFQgLgGgSAAQgNAAgSACIgCgUQASgCAQAAQAmAAAQAPQAPAPAAAeIAABFg");
	this.shape_6.setTransform(633.675,289.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4AyQAXgDANgEIgWhxIAYAAIASBqQAVgIAFgQQAGgOAAgXIABgtIAYAAIgCAjIgCAiQgBAJgFAMQgGAMgJAJQgKAJgUAHQgSAIgkAGg");
	this.shape_7.setTransform(613.7,289.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3BBIAAh9QAZgFAWABQAYAAAOAGQAOAIAHAMQAFALAAAVIAABHgAghgrIAABZIBCAAIAAgyQAAgOgDgIQgDgJgKgEQgJgFgRAAIgYABg");
	this.shape_8.setTransform(600.35,289.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguA/IADgVQALAEAMAAQAOAAAJgGQAJgGAFgKQAFgKAAgOQAAgTgLgNQgLgNgUAAQgMAAgLAEIgDgVQAOgEALAAQAfAAATATQASATAAAcQAAATgHAPQgJAOgPAKQgOAJgXAAQgLAAgOgEg");
	this.shape_9.setTransform(580.05,289.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_10.setTransform(571.275,289.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAhBBIAAhFQAAgOgDgIQgDgJgJgEQgKgFgRAAIgXABIAABsIgYAAIAAh9QAagFAXABQAWAAAPAGQAOAIAGAMQAHALAAAVIAABHg");
	this.shape_11.setTransform(560.8,289.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_12.setTransform(550.175,289.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEA+IAEgSQAGADAIAAQAIAAAEgEQACgEAAgJIAAhKQgKAAgQACIgCgTQAcgEAdAAQAcAAAQAFQAPAFAJANQAIANAAAZIAABFIgYAAIAAg/QAAgTgCgIQgDgJgKgGQgKgFgVAAIgLAAIAABNQAAAMgCAHQgDAHgHAEQgHAEgPAAQgLAAgLgEg");
	this.shape_13.setTransform(538.45,289.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBBIAAgTIAqAAIAAgmQAAgUgCgKQgBgKgGgGQgGgGgIAAQgOgBgJAOQgJAOgHAjIgJAvIgYAAIALgyIAGgYIgUg2IAWAAIAKAcQAGgMAMgIQALgJAOAAQAPgBALAIQALAIAEAOQAFAPAAAdIAAA4g");
	this.shape_14.setTransform(516.175,289.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhBBIAAhFQAAgOgDgIQgDgJgKgEQgJgFgRAAIgXABIAABsIgYAAIAAh9QAbgFAVABQAXAAAPAGQAPAIAGAMQAFALABAVIAABHg");
	this.shape_15.setTransform(501.65,289.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_16.setTransform(491.025,289.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AANBBIAAhtIhGAAIAAgUIBzAAIAAAUIgWAAIAABtg");
	this.shape_17.setTransform(481.6,289.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpA4QgQgMgHgUQgIgVAAghIgCgkIAYAAIABAWQAAAgACAMQANAAALgGQAKgGAAgTIADgjIAWAAIgDAqIgCAPQgCAFgFAGQgEAFgKAFQgLAEgSACQADANALAIQALAIAQAAQAOAAALgIQALgGAFgMQAFgLACgUIAFg4IAYAAIgFAxQgCAZgHATQgHARgQAMQgQALgZgBQgXABgPgLg");
	this.shape_18.setTransform(466.575,289.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLAiIAAhDIAXAAIAABDg");
	this.shape_19.setTransform(454.825,286.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4BBIAAh9QAagFAXABQAWAAAPAGQAPAIAFAMQAHALgBAVIAABHgAghgrIAABZIBCAAIAAgyQAAgOgDgIQgDgJgJgEQgKgFgRAAIgYABg");
	this.shape_20.setTransform(444.35,289.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAiBBIAAg/QAAgTgFgJQgEgJgLgEQgLgFgUAAQgRAAgUADIgCgUQAWgDAVAAQAngBAQAQQAPAOAAAgIAABEgAg3BBIAAhIIAXAAIAABIg");
	this.shape_21.setTransform(721.275,259.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDBZIAAgRQAAgQADgHQACgJAGgIIAIgJQAFgGACgGQABgGAAgHIAAgSIhHAAIAAhEIAYAAIAAAxIBHAAIAAAgQgBANgDAIQgCAJgGAJIgHAJQgKANAAAOIAAAVg");
	this.shape_22.setTransform(707.65,256.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAhIAAhBIAXAAIAABBg");
	this.shape_23.setTransform(699.075,256.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDBZIAAgRQAAgQADgHQADgJAFgIIAHgJQAGgGABgGQACgGAAgHIAAgSIhHAAIAAhEIAYAAIAAAxIBHAAIAAAgQAAANgDAIQgDAJgGAJIgHAJQgJANAAAOIAAAVg");
	this.shape_24.setTransform(689.95,256.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAiBBIAAg/QAAgTgFgJQgEgJgLgEQgLgFgUAAQgRAAgUADIgCgUQAWgDAVAAQAngBAQAQQAPAOAAAgIAABEgAg3BBIAAhIIAXAAIAABIg");
	this.shape_25.setTransform(676.975,259.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAhIAAhBIAXAAIAABBg");
	this.shape_26.setTransform(659.375,256.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAdBBIAAg/QAAgRgEgJQgDgJgLgFQgLgGgSAAQgNAAgSACIgCgUQASgDAQABQAmAAAQAPQAPAPAAAfIAABEg");
	this.shape_27.setTransform(649.275,259.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AANBBIAAhtIhGAAIAAgUIBzAAIAAAUIgWAAIAABtg");
	this.shape_28.setTransform(637.2,259.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_29.setTransform(620.825,259.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiBBIAAg/QAAgTgFgJQgEgJgLgEQgLgFgUAAQgRAAgUADIgCgUQAWgDAVAAQAngBAQAQQAPAOAAAgIAABEgAg3BBIAAhIIAXAAIAABIg");
	this.shape_30.setTransform(610.275,259.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBBIAAhEQAAgPgDgIQgDgIgJgFQgKgFgRAAIgYABIAABsIgWAAIAAh9QAZgEAXAAQAXgBAOAIQAOAGAHANQAFALAAAVIAABHg");
	this.shape_31.setTransform(595.3,259.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhEA+IAEgRQAHACAGAAQAJgBAEgDQADgEAAgJIAAhKQgLAAgQACIgBgTQAbgEAdAAQAcAAAQAFQAQAFAIANQAIANAAAZIAABFIgYAAIAAg/QAAgTgCgIQgDgJgKgGQgKgFgUAAIgNAAIAABNQAAAMgCAHQgCAGgHAFQgHAEgOAAQgMAAgLgEg");
	this.shape_32.setTransform(579.1,259.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDBZIAAgRQAAgQADgHQACgJAGgIIAHgJQAGgGABgGQACgGAAgHIAAgSIhHAAIAAhEIAYAAIAAAxIBHAAIAAAgQAAANgEAIQgCAJgGAJIgHAJQgJANAAAOIAAAVg");
	this.shape_33.setTransform(565.65,256.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhEA+IAEgRQAGACAIAAQAIgBAEgDQACgEAAgJIAAhKQgKAAgQACIgCgTQAdgEAcAAQAcAAAQAFQAPAFAJANQAIANAAAZIAABFIgYAAIAAg/QAAgTgCgIQgDgJgKgGQgKgFgVAAIgLAAIAABNQAAAMgCAHQgDAGgHAFQgHAEgPAAQgLAAgLgEg");
	this.shape_34.setTransform(551.5,259.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_35.setTransform(541.025,259.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDBZIAAgRQAAgQADgHQACgJAGgIIAHgJQAGgGABgGQACgGAAgHIAAgSIhHAAIAAhEIAYAAIAAAxIBHAAIAAAgQAAANgEAIQgCAJgGAJIgHAJQgJANAAAOIAAAVg");
	this.shape_36.setTransform(531.9,256.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeBBIAAgTIAmAAIAAg/QAAgKgCgGQgBgFgFgDQgFgDgIgBQgIABgGABIgBgTQAIgDAMABQAPgBAJAHQAJAGADAJQADAJAAARIAABSg");
	this.shape_37.setTransform(514.525,259.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLBBIAAiBIAXAAIAACBg");
	this.shape_38.setTransform(507.575,259.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhEA+IAEgRQAHACAGAAQAJgBAEgDQADgEAAgJIAAhKQgLAAgPACIgCgTQAbgEAdAAQAcAAAQAFQAQAFAIANQAIANAAAZIAABFIgYAAIAAg/QAAgTgCgIQgDgJgKgGQgKgFgUAAIgNAAIAABNQAAAMgCAHQgCAGgHAFQgHAEgOAAQgMAAgLgEg");
	this.shape_39.setTransform(495.85,259.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAdBBIAAg/QAAgRgEgJQgDgJgLgFQgLgGgSAAQgNAAgSACIgCgUQASgDAQABQAmAAAQAPQAPAPAAAfIAABEg");
	this.shape_40.setTransform(481.425,259.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag4AyQAXgDANgEIgWhxIAYAAIATBqQAUgIAGgQQAEgOAAgXIACgtIAYAAIgCAjIgCAiQgBAJgFAMQgFAMgLAJQgKAJgTAHQgSAIgkAGg");
	this.shape_41.setTransform(461.45,260.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgDBZIAAgRQAAgQADgHQACgJAGgIIAHgJQAGgGACgGQABgGAAgHIAAgSIhHAAIAAhEIAYAAIAAAxIBHAAIAAAgQAAANgEAIQgCAJgGAJIgHAJQgKANABAOIAAAVg");
	this.shape_42.setTransform(449.45,256.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAiBBIAAg/QAAgTgFgJQgEgJgLgEQgLgFgUAAQgRAAgUADIgCgUQAWgDAVAAQAngBAQAQQAPAOAAAgIAABEgAg3BBIAAhIIAXAAIAABIg");
	this.shape_43.setTransform(429.525,259.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag4AyQAXgDANgEIgWhxIAYAAIATBqQAUgIAGgQQAEgOAAgXIACgtIAXAAIgBAjIgCAiQgBAJgFAMQgFAMgLAJQgKAJgTAHQgSAIgkAGg");
	this.shape_44.setTransform(414.65,260.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLBaIAAhiIgnhRIAZAAIAeBBQAJgGAEgHQAEgHACgMIADghIAYAAIgEAmQgDAhghAMIAABgg");
	this.shape_45.setTransform(402.575,261.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_46.setTransform(393.7,264.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgMAMIAAgXIAYAAIAAAXg");
	this.shape_47.setTransform(386.75,264.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhKCdIAAgvIBdAAIAAiXQAAgZgEgNQgDgNgMgIQgMgIgVAAQgSAAgOADIgEgtQATgGAdAAQAmAAAWAPQAVAPAIAWQAHAVAAAoIAADIg");
	this.shape_48.setTransform(720,210.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAyCdIgVhMQgjAAgYAsIgRAgIg5AAIAYgwQAWgrAdgNQAdgNAVAAIAAhRQAAgZgEgNQgEgNgMgIQgMgIgVAAQgSAAgOADIgEgtQAUgGAcAAQAnAAAVAPQAVAPAIAWQAIAVAAAoIAABfIAcBpg");
	this.shape_49.setTransform(698.075,210.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMCdIAAgvIBnAAIAAhbQAAgygDgYQgEgXgOgPQgOgPgVAAQghAAgVAiQgYAigQBSIgWBzIg4AAIAYh5IAPg7IgwiCIA2AAIAXBFQAOgeAdgVQAdgVAhAAQAkAAAaASQAaATAMAjQALAjAABFIAACJg");
	this.shape_50.setTransform(667.825,210.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABGCdIAAiZQAAgpgJgWQgJgWgagNQgagNgtAAQgfAAgsAFIgFgwQAugGAlAAQBeAAAlAlQAlAkAABJIAACng");
	this.shape_51.setTransform(633.925,210.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ABRCdIAAiZQAAgtgLgWQgLgWgagLQgbgLgxAAQgoAAgxAIIgEgwQA1gJAxAAQBhAAAlAkQAmAkgBBKIAACngAiFCdIAAiuIA4AAIAACug");
	this.shape_52.setTransform(585.6,210.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AguCbIAAgyQgBgggFhAQgCgUAAgPQAAgxAnggIhOAAIAAgvIC7AAIAAAnQgsAAgaAaQgZAZABAsQAAAIABAXQAIBHAAAeIAAArg");
	this.shape_53.setTransform(556.7,211);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMCdIAAgvIBnAAIAAhbQAAgygDgYQgEgXgOgPQgOgPgVAAQghAAgVAiQgYAigQBSIgWBzIg4AAIAYh5IAPg7IgwiCIA2AAIAXBFQAOgeAdgVQAdgVAhAAQAkAAAaASQAaATAMAjQALAjAABFIAACJg");
	this.shape_54.setTransform(525.525,210.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbDXIAAmtIA4AAIAAGtg");
	this.shape_55.setTransform(501.05,216.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_56.setTransform(485.45,223.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_57.setTransform(468.8,223.55);

	this.instance = new lib.sad();
	this.instance.setTransform(20.9,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BA7038").s().p("Eg9QAfIMAAAg+PMB6hAAAMAAAA+Pg");
	this.shape_58.setTransform(392.075,340.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.instance},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Timeout, new cjs.Rectangle(0,0,821.2,719), null);


(lib.takeaBreak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhiBpIAAgfIB+AAIAAhHQABgcgHgPQgGgOgQgJQgRgIgkAAQgNAAgaACIgDgfQAbgEAdAAQA3AAAZAYQAZAZAAAxIAABQIAhAAIAAAfg");
	this.shape.setTransform(374.35,472.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgSA2IAAhrIAlAAIAABrg");
	this.shape_1.setTransform(358.55,467.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhFBQQgbgeAAgxQAAgxAbgeQAagfArAAQAaAAAVAMQAVAMAPAZQAOAZAAAkQAAAegLAZQgLAYgWAOQgWAQgfAAQgrAAgagegAgpg4QgOAXAAAiQAAAlAOAUQAPAVAagBQAdABAOgXQAOgWAAghQAAglgPgVQgPgVgbAAQgbAAgOAWg");
	this.shape_2.setTransform(342.125,472.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhtBjIAGgcQAKAEAMgBQAOABAFgGQAFgGAAgQIAAh3QgRABgYADIgEgfQAtgGAuAAQAtAAAZAIQAZAIANAVQANAUAAApIAABvIglAAIAAhmQAAgdgEgPQgFgOgPgIQgQgJgiAAIgTABIAAB8QAAAUgEAKQgDAKgMAHQgLAGgXABQgSgBgSgGg");
	this.shape_3.setTransform(367.325,425.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSCPIAAkdIAlAAIAAEdg");
	this.shape_4.setTransform(350.6,429.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CBA741").ss(10,2,1).p("AmPBmIAAjLIAeAAIMBAAIAADL");
	this.shape_5.setTransform(345.925,363.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D3B55F").ss(10,2,1).p("AmPBmIAAikIAAgnIMfAAIAADL");
	this.shape_6.setTransform(348.975,359.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CBA741").s().p("AsWKtIAA1ZIBGAAIAATlIXnAAIAAB0g");
	this.shape_7.setTransform(350.025,455.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3B55F").s().p("ALRKtI3nAAIAAzlIAAh0IYtAAIAAVZg");
	this.shape_8.setTransform(357.025,443.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABRCdIAAiZQABgtgLgWQgMgWgagLQgbgLgxAAQgoAAgxAIIgEgwQA0gJAyAAQBhAAAlAkQAlAkAABKIAACngAiFCdIAAiuIA4AAIAACug");
	this.shape_9.setTransform(728.95,203.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiFCMIAOgvQAcATAtAAQAwAAAlgdQAkgcAAg5QAAgygdgfQgcgeguAAQgZAAgYAFIAAA5QAAAkAkAAQAPAAAKgDIAGAnQgSAIgWAAQgmAAgVgVQgWgUAAgoIAAhcQAzgPA3AAQBDAAAvAoQAtAoAABMQAABKgvAtQgvAshTAAQg5AAghgUg");
	this.shape_10.setTransform(694.75,203.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhpB4QgogtAAhKQAAhJAoguQAogtBBAAQAnAAAgARQAgARAVAmQAWAlAAA3QAAAugQAkQgRAlghAWQghAWgvAAQhBAAgogsgAg/hTQgVAhAAAzQAAA3AXAfQAWAeAnAAQArAAAVghQAVghAAgyQAAg4gWgfQgXgfgoAAQgpAAgWAig");
	this.shape_11.setTransform(660.775,203.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah5DXIAAklIA1AAIAAElgAAEBgIAAgqQAAggAGgUQAFgTASgWIASgXQAMgQAEgNQAEgNAAgVIAAgqIjFAAIAAgvID9AAIAABNQAAAhgGAVQgGATgQAWIgPAVQgYAfAAAkIAAAyg");
	this.shape_12.setTransform(627.625,209.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AilCUIAKgpQAPAFASAAQAUAAAIgJQAIgJAAgXIAAiyQgaAAgkAEIgFguQBDgJBFAAQBEABAmALQAlAMAUAfQAUAgAAA8IAACnIg4AAIAAiZQAAgtgHgUQgHgWgXgMQgXgOg1AAIgcAAIAAC8QAAAegFAPQgFAPgRAKQgSAKgiAAQgbAAgcgKg");
	this.shape_13.setTransform(589.725,203.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABMCcIh1inQgcAOgFAtIgMBsIg6AAIAMhsQAJhKA0gbIhIhmIBFAAIBiCMQASgMAIgPQAHgPAEgjIAHg/IA6AAIgHBBQgFApgNAbQgOAZgjAVIBdCEg");
	this.shape_14.setTransform(539.175,203.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcCcIAAk3IA4AAIAAE3g");
	this.shape_15.setTransform(514.15,203.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhwCYIAHgzQAcAJAdAAQAhAAAWgNQAWgOAMgZQAMgZAAghQAAgvgagfQgbgfgwAAQgdAAgcAJIgHgzQAigIAbAAQBNAAAsAtQArAtAABFQAAAugSAjQgTAjgkAWQgkAWg3AAQgbAAgigIg");
	this.shape_16.setTransform(492.775,203.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIDXIAAgqQAAgmAHgTQAHgTAPgSIARgXQAMgQAFgNQADgOAAgTIAAgqIirAAIAAimIA3AAIAAB3ICsAAIAABNQAAAggGAVQgGAUgQAVIgQAVQgXAgAAAkIAAAyg");
	this.shape_17.setTransform(464.5,197.725);

	this.instance = new lib.food2();
	this.instance.setTransform(21.9,0);

	this.text = new cjs.Text(" ןת\nסיב", "40px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(357.9,399.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#D3B55F").ss(10,2,1).p("AmPBmIAAikIAAgnIMfAAIAADL");
	this.shape_18.setTransform(348.975,359.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CBA741").ss(10,2,1).p("AmPBmIAAjLIAeAAIMBAAIAADL");
	this.shape_19.setTransform(345.925,363.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D3B55F").s().p("ALRKtI3nAAIAAzlIAAh0IYtAAIAAVZg");
	this.shape_20.setTransform(357.025,443.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CBA741").s().p("AsWKtIAA1ZIBGAAIAATlIXnAAIAAB0g");
	this.shape_21.setTransform(350.025,455.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BA7038").s().p("Eg9QAfIMAAAg+PMB6hAAAMAAAA+Pg");
	this.shape_22.setTransform(392.075,338.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.text},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.takeaBreak, new cjs.Rectangle(0,0,824.2,719), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("בחר", "bold 17px 'Verdana'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AoWCgIAAk/IQtAAIAAE/g");
	this.shape.setTransform(52.5,17.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,1.1,107,32), null);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE701").s().p("ABTFGIAHgDQgvAOg1AAQgoAAgjgHIj3DbIBqkmIgNgMQhHhHgSheIgIgEIj2hRID/gtQAThbBFhGQANgMANgLIg/k4IDPD1QAcgEAfAAQAbAAAyAJIDTj6IhEFIIAIAHQA7A8AWBLIAGAWIAHABIEOAwIj1BRIgdAKIgDABIgCAJQgVBUhABBIgGAGIAKgHIBwEzg");
	this.shape.setTransform(-0.75,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(-59,-55,116.5,109.7), null);


(lib.speechbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ECB512").ss(4,1,1).p("EgomgP8MBRNAAAIAAPIIsrAAIgKQxI0WwxMgwCAAAg");
	this.shape.setTransform(259.9,102.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHbgzMgwBAAAIAAvJMBRNAAAIAAPJIsrAAIgKQwg");
	this.shape_1.setTransform(259.9,102.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speechbubble, new cjs.Rectangle(-2,-2,523.8,208.1), null);


(lib.resume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCBBIAAgNQAAgLACgGQABgGAFgGIAGgGIAEgJIABgJIAAgNIgyAAIAAgxIAQAAIAAAjIAzAAIAAAXQAAAJgBAHQgCAFgFAHIgFAGQgHAJAAALIAAAQg");
	this.shape.setTransform(70.9,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape_1.setTransform(61.275,48.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAoQgLgIgFgOQgGgPABgYIgBgaIAQAAIAAAPQABAXACAJQAJAAAIgEQAHgFAAgNIACgZIAPAAIgCAeIgBALQgBAEgDADQgEAFgHADQgIADgNABQADAJAHAGQAJAGALAAQAKAAAHgGQAJgEADgIQAEgIABgPIAEgoIAQAAIgDAjQgCASgEANQgFANgLAIQgMAIgSAAQgRAAgLgIg");
	this.shape_2.setTransform(49.95,48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_3.setTransform(38.325,48.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkBBIAAhYIAQAAIAABYgAABAdIAAgNQAAgJACgGQACgFAFgHIAFgHIAFgIIABgLIAAgMIg6AAIAAgPIBLAAIAAAYQAAAKgCAGQgCAGgEAGIgFAGQgHAJAAALIAAAPg");
	this.shape_4.setTransform(28.125,50.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_5.setTransform(62.625,26.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAvIAAgQIgCgcIgBgKQAAgPAMgJIgXAAIAAgPIA3AAIAAAMQgNAAgIAIQgHAIAAANIAAAJIADAeIAAANg");
	this.shape_6.setTransform(53.975,26.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAvIAAguQAAgLgDgHQgCgGgIgEQgIgEgNAAIgWABIgCgOQAOgCALAAQAbAAAMALQALALAAAWIAAAxg");
	this.shape_7.setTransform(45.275,26.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_8.setTransform(35.725,26.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A2C53").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_9.setTransform(49.575,36.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_10.setTransform(49.575,36.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,104,73.1);


(lib.progress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["catsAndLadders_atlas_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.036,0.021,-0.021,0.036,-42.3,-55.3)).s().p("AhqFqQgOgIgMgIQgigYgfgaIAGgEIAEgEIACgDIACgDQABAAAAABQABAAAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgBIADAAQAEgCABgEIAAgGIAAgCQACgFgCgGQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIADgDIABgDIgBgCQAAgDgCgCIgDAAQhfg7gPhMIAAgBQABgFgDgCIgEgDIgDAAIAAgHQACgXgMgSIACgJQgFgJAAgJIABgJIgJgKQACgKgFgJIgCgDIABgJIgFgNIABgIIgDgaIgHgLQAFgUAAgWIAAgPQgGgOACgRQAGgtAegoIAIgCIAYgeIAMgGQAEgIAGgFQAWgRAWgOIAugIIAhABIgKgFIAEAAQAKgBAIgDIAHACIGCDfIgBAIIAVAcIACAJQAIAFABAHIADAFIABAJIAAAIIgBAOIi1E5IgJAHIgKAAIgGAKIgLADIgIAIIgOABIguAlIgNABQgvAhgzAAQgSAAgSgEg")
	}.bind(this);
	this.shape.setTransform(17.75,-46.2981);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["catsAndLadders_atlas_"],2);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(0.155,0,0,0.155,-318.9,-11.6)).s().p("AB4BGQgPgagWgZQgKgFgHgIQgRgTgkACIgTgeIh5gyIgMgYIEXAAIAADnQgIgZgMgVg")
	}.bind(this);
	this.shape_1.setTransform(45.9125,-138.3625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDD3D2").s().p("Agde8QghAAgYgXQgXgXAAghMAAAg7ZQAAggAXgYQAYgXAhgBIA7AAQAhABAYAXQAXAYAAAgMAAAA7ZQAAAhgXAXQgYAXghAAg");
	this.shape_2.setTransform(11,198.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progress, new cjs.Rectangle(-15,-150,74.9,546.1), null);


(lib.playAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAoQgLgIgFgOQgGgPABgYIgBgaIAQAAIAAAPQABAXACAJQAJAAAIgEQAHgFAAgNIACgZIAPAAIgCAeIgBALQgBAEgDADQgEAFgHADQgIADgNABQADAJAHAGQAJAGALAAQAKAAAHgGQAJgEADgIQAEgIABgPIAEgoIAQAAIgDAjQgCASgEANQgFANgLAIQgMAIgSAAQgRAAgLgIg");
	this.shape.setTransform(56.25,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_1.setTransform(47.775,48.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAvIAAgOIA4AAIAAggQAAgMgDgGQgDgHgHgEQgHgDgQAAIgSABIgBgOQALgCAOAAQAYAAAMALQALALAAAWIAAAjIAPAAIAAAOg");
	this.shape_2.setTransform(40.7,48.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBAIAAgMQAAgLACgGQABgGAFgFIAGgHIAEgJIABgJIAAgMIgyAAIAAgzIAQAAIAAAkIAzAAIAAAYQAAAIgBAGQgCAHgFAGIgFAGQgHAKAAALIAAAOg");
	this.shape_3.setTransform(65.5,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAoQgLgIgFgPQgGgPABgXIgBgaIAQAAIAAAQQABAXACAIQAJAAAIgEQAHgEAAgNIACgaIAPAAIgCAdIgBAMQgBAEgDADQgEAEgHADQgIAEgMABQACAJAHAGQAJAGALAAQAKAAAHgGQAJgEADgIQAEgJABgOIAEgoIAQAAIgDAjQgCASgEANQgFANgLAIQgMAIgSAAQgRAAgLgIg");
	this.shape_4.setTransform(55.35,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_5.setTransform(43.725,26.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBBIAAhYIAQAAIAABYgAABAdIAAgNQAAgJACgGQACgFAFgHIAFgHIAFgIIABgLIAAgMIg6AAIAAgPIBLAAIAAAYQAAAKgCAGQgCAGgEAGIgFAGQgHAJAAALIAAAPg");
	this.shape_6.setTransform(33.525,28.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A2C53").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_7.setTransform(49.575,36.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_8.setTransform(49.575,36.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,104,73.1);


(lib.plank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78481A").s().p("A7KB2IGMjqMAwJgABImJDqMgwCAAAIAAABg");
	this.shape.setTransform(173.875,11.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D5E10").s().p("A7FCUIAAg9IAAgBMAwCAAAIGJjqIgCBMImHDcg");
	this.shape_1.setTransform(174.375,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plank, new cjs.Rectangle(0,0,347.8,29.7), null);


(lib.pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape.setTransform(65.425,48.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAoQgLgIgFgOQgGgPABgYIgBgaIARAAIAAAPQAAAXACAJQAJAAAIgEQAHgFAAgNIACgZIAQAAIgDAeIgBALQgBAEgDADQgEAFgHADQgIADgNABQADAJAHAGQAJAGALAAQAKAAAHgGQAJgEADgIQAEgIABgPIAEgoIARAAIgEAjQgCASgEANQgFANgLAIQgNAIgRAAQgQAAgMgIg");
	this.shape_1.setTransform(54.1,48.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_2.setTransform(42.475,48.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkBBIAAhYIAQAAIAABYgAABAdIAAgNQAAgJACgGQACgFAFgHIAFgHIAFgIIABgLIAAgMIg6AAIAAgPIBLAAIAAAYQAAAKgCAGQgCAGgEAGIgFAGQgHAJAAALIAAAPg");
	this.shape_3.setTransform(32.275,50.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_4.setTransform(71.025,26.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAoQgLgIgFgPQgGgPABgXIgBgaIAQAAIAAAQQABAXACAIQAJAAAIgEQAHgEAAgNIACgaIAPAAIgCAdIgBAMQgBAEgDADQgEAEgHADQgIAEgMABQACAJAHAGQAJAGALAAQAKAAAHgGQAJgEADgIQAEgJABgOIAEgoIAQAAIgDAjQgCASgEANQgFANgLAIQgMAIgSAAQgRAAgLgIg");
	this.shape_5.setTransform(59.4,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_6.setTransform(47.725,26.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAYIAAgvIARAAIAAAvg");
	this.shape_7.setTransform(40.075,24.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAYIAAgvIARAAIAAAvg");
	this.shape_8.setTransform(35.625,24.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxAtIADgNQAFACAFAAQAGAAACgDQADgDAAgHIAAg1IgTACIgBgOQAUgDAUAAQAUAAAMAEQALADAGAKQAGAJAAASIAAAyIgRAAIAAguQAAgNgCgGQgCgGgHgEQgHgEgPAAIgJAAIAAA3QAAAKgBAEQgCAFgFADQgFADgKAAQgJgBgIgCg");
	this.shape_9.setTransform(27.175,26.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0A2C53").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_10.setTransform(49.575,36.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_11.setTransform(49.575,36.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,104,73.1);


(lib.opac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EhkxA4QMAAAhwfMDJjAAAMAAABwfg");
	this.shape.setTransform(645,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.opac, new cjs.Rectangle(0,0,1290,720), null);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape.setTransform(64.525,48.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsAvIAAgOIA5AAIAAggQAAgMgDgGQgDgHgHgEQgHgDgQAAIgSABIgBgOQAMgCANAAQAYAAALALQAMALAAAWIAAAjIAOAAIAAAOg");
	this.shape_1.setTransform(54.25,48.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAvIgjgyQgIAEgBANIgEAhIgSAAIAEghQADgVAQgIIgWgfIAUAAIAdAqQAGgDACgFQACgEABgLIADgTIARAAIgCAUQgCAMgEAIQgEAHgKAGIAcAog");
	this.shape_2.setTransform(44.475,48.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_3.setTransform(33.775,48.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBAIAAgMQAAgLACgGQACgGAEgFIAFgHIAGgJIAAgJIAAgMIgyAAIAAgzIAQAAIAAAkIAzAAIAAAYQAAAIgBAGQgCAHgFAGIgFAGQgHAKAAALIAAAOg");
	this.shape_4.setTransform(69.8,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAoQgMgIgFgPQgGgPAAgXIgBgaIARAAIAAAQQABAXABAIQAKAAAHgEQAIgEAAgNIACgaIAPAAIgCAdIgBAMQgBAEgEADQgDAEgHADQgHAEgNABQABAJAJAGQAHAGAMAAQAKAAAHgGQAJgEADgIQAEgJABgOIAEgoIAQAAIgCAjQgCASgFANQgFANgMAIQgMAIgRAAQgQAAgLgIg");
	this.shape_5.setTransform(59.65,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXAvIgjgyQgIAEgBANIgEAhIgSAAIAEghQADgVAQgIIgWgfIAUAAIAdAqQAGgDACgFQACgEABgLIADgTIARAAIgCAUQgCAMgEAIQgEAHgKAGIAcAog");
	this.shape_6.setTransform(48.525,26.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCBAIAAgMQAAgLACgGQABgGAFgFIAFgHIAFgJIABgJIAAgMIgyAAIAAgzIAQAAIAAAkIAzAAIAAAYQAAAIgBAGQgCAHgFAGIgFAGQgHAKAAALIAAAOg");
	this.shape_7.setTransform(38.85,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_8.setTransform(29.475,26.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A2C53").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_9.setTransform(49.575,36.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.next, new cjs.Rectangle(-2.8,0,104,73.1), null);


(lib.newgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape.setTransform(59.975,48.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAvIAAhOIgyAAIAAgPIBTAAIAAAPIgQAAIAABOg");
	this.shape_1.setTransform(49.975,48.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAoQgLgIgGgOQgFgPgBgYIgBgaIARAAIAAAPQABAXABAJQAKAAAHgEQAIgFAAgNIACgZIAPAAIgBAeIgCALQgBAEgEADQgCAFgIADQgHADgNABQABAJAJAGQAHAGAMAAQAKAAAIgGQAHgEAEgIQAEgIABgPIAEgoIAQAAIgCAjQgCASgFANQgFANgMAIQgLAIgSAAQgRAAgKgIg");
	this.shape_2.setTransform(39.2,48.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape_3.setTransform(65.425,26.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAoQgLgIgFgPQgGgPABgXIgBgaIARAAIAAAQQAAAXACAIQAJAAAIgEQAHgEAAgNIACgaIAQAAIgDAdIgBAMQgBAEgDADQgEAEgHADQgIAEgNABQADAJAHAGQAJAGALAAQAKAAAHgGQAJgEADgIQAEgJABgOIAEgoIARAAIgEAjQgCASgEANQgFANgLAIQgNAIgRAAQgQAAgMgIg");
	this.shape_4.setTransform(54.1,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_5.setTransform(42.475,26.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBBIAAhYIAQAAIAABYgAABAdIAAgNQAAgJACgGQACgFAFgHIAFgHIAFgIIABgLIAAgMIg6AAIAAgPIBLAAIAAAYQAAAKgCAGQgCAGgEAGIgFAGQgHAJAAALIAAAPg");
	this.shape_6.setTransform(32.275,28.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A2C53").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_7.setTransform(49.575,36.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AnvFtIAAraIPfAAIAALag");
	this.shape_8.setTransform(49.575,36.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,104,73.1);


(lib.mc_couple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10,2,1).p("AjkywQAXgVAXgWQCjiXCUiGQAigeAggdIAAAAQD5jdDUisQLIpCEWgJIAPAAQC4AEAAEGQgBD0iyIDQg9CyhSDRQhgD0h8EeQjwItlcLPQguBggxBjQl5MFnsO1UgRNgWTgGQggKQhNmNgOkRQgJiyASh9QAsk3DWAAQEoAAKSJmQC2CqDSDZg");
	this.shape.setTransform(184.45,256.8);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["catsAndLadders_atlas_"],2);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(-0.09,-0.024,-0.024,0.09,140.9,-69.9)).s().p("Aw+NsIHV7UQCiiXCWiGIVwF1QhfD0h8EeQjxIslbLPIhgDEgAoNzAIDcA7QiWCGiiCXgAkxyFg")
	}.bind(this);
	this.shape_1.setTransform(228.025,219.7125);

	this.shape_2 = new cjs.Shape();
	var sprImg_shape_2 = cjs.SpriteSheetUtils.extractFrame(ss["catsAndLadders_atlas_"],6);
	sprImg_shape_2.onload = function(){
		this.shape_2.graphics.bf(sprImg_shape_2, null, new cjs.Matrix2D(0.673,0,0,0.673,-187.9,-207.8)).s().p("A5+1/QhOmNgNkRITEAAQC2CqDTDaQDfjSDIiyIAAAAIW/AAIAAAuQiFF/jmIWQjxIslbLOQmZNOorQwUgRNgWTgGQggKg")
	}.bind(this);
	this.shape_2.setTransform(175.7,305.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(10,2,1).p("AjkywQDhjSDHixIAAAAQD5jdDTisQLIpCEXgJIAOAAQC4AEAAEGQgBD0ixIDQiFGAjmIVQjxItlbLPQmZNNosQwUgRMgWTgGRggKQhNmNgNkRQgJiyARh9QAsk3DWAAQEoAAKSJmQC2CqDSDZg");
	this.shape_3.setTransform(184.45,256.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("A7WuUQhNmOgOkRQgIixARh9QAtk4DVAAQEoAAKSJmQC2CqDSDZQDhjRDHiyIAAAAQD4jdDUirQLIpDEXgJIAOAAQC4AEAAEGQgBD1iyICQiEGAjmIVQjxItlcLOQmZNOorQwUgRMgWTgGRggJg");
	this.shape_4.setTransform(184.45,256.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_couple, new cjs.Rectangle(-5,-5.1,378.9,525.7), null);


(lib.masada_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.masada();
	this.instance.setTransform(-121.45,-161.75,0.3598,0.3598);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.masada_1, new cjs.Rectangle(-121.4,-161.7,242.9,323.5), null);


(lib.magnify = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgtYAdsMAAAg7XMBaxAAAMAAAA7Xg");
	this.shape.setTransform(-0.05,-0.929,0.7189,0.7189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA7038").s().p("EgukAfIMAAAg+PMBdJAAAMAAAA+PgEgtXAdtMBaxAAAMAAAg7YMhaxAAAg");
	this.shape_1.setTransform(-0.1039,-0.965,0.7189,0.7189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.magnify, new cjs.Rectangle(-214.4,-144.2,428.6,286.5), null);


(lib.lowerarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDC00").s().p("AhyAJIDUhHIARA3IjSBGg");
	this.shape.setTransform(4.0674,14.2205,1.3748,1.3748);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEDC00").s().p("AhyAJIDVhIIARA3IjUBHg");
	this.shape_1.setTransform(0.8366,4.2875,1.3748,1.3748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3B").s().p("AgXD5QgRgIgFgRIhxlJQgMgnAQgmQAKgXATgRQATgRAYgIIAWgFQAzgFAmAiQAXAVAKAfIBkFDQAFARgIAQQgIAPgQAGIh+AtQgHACgGAAQgKAAgJgEg");
	this.shape_2.setTransform(-0.012,0.0029,1.375,1.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lowerarm, new cjs.Rectangle(-22.5,-34.8,45,69.69999999999999), null);


(lib.kotel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kotel();
	this.instance.setTransform(-179,-134,0.279,0.279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kotel_1, new cjs.Rectangle(-179,-134,357.1,267.8), null);


(lib.jupiter_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.jupiter();
	this.instance.setTransform(-138,-138,0.3449,0.3449);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jupiter_1, new cjs.Rectangle(-138,-138,275.9,275.9), null);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A48A7B").s().p("Ag2BoQgIgFgDgIIgfhgQgIgaAMgYQANgZAagIIArgOQAZgJAZANQAYANAIAaIAbBRQACAIgDAIQgEAHgIADIAAAAQgIACgIgDQgGgEgDgGIACAFQACAJgEAIQgEAJgJACIAAABQgJACgJgEQgHgEgDgIIABAFQADAJgEAJQgFAIgIADIgBAAQgIADgIgEQgIgEgDgJQACAJgEAIQgEAIgJADIgHABQgFAAgGgCg");
	this.shape.setTransform(4.9107,3.6822,1.3748,1.3748,0,-44.9982,135.0018);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A48A7B").s().p("AhggzICQgvIAxCXIiRAvg");
	this.shape_1.setTransform(-1.6021,-9.4514,1.3748,1.3748,0,-44.9982,135.0018);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B6A58").s().p("AAJBMQgHgEgCgIIgmhzQgCgIAEgHQADgHAIgDIABAAQAIgDAHAEQAHAEACAIIAmBzQADAIgEAHQgEAIgIACIAAAAIgHABQgEAAgFgCg");
	this.shape_2.setTransform(1.4349,17.4113,1.3748,1.3748,0,-44.9982,135.0018);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B6A58").s().p("AARBsQgIgFgDgJIg3itQgDgJAEgIQAFgJAJgDIAAAAQAJgDAJAFQAIAEADAJIA3CtQADAJgEAIQgEAJgKADIAAAAIgIABQgFAAgFgCg");
	this.shape_3.setTransform(6.6643,14.613,1.3748,1.3748,0,-44.9982,135.0018);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B6A58").s().p("AAQBsQgIgFgDgIIg3iuQgDgJAEgIQAFgJAKgDIAAAAQAKgDAJAEQAIAEADAJIA3CuQADAJgFAIQgEAJgKADIAAAAIgIABQgFAAgGgCg");
	this.shape_4.setTransform(13.0519,12.8835,1.3748,1.3748,0,-44.9982,135.0018);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B6A58").s().p("AAKBVQgIgFgCgJIgqh/QgDgJAFgIQAEgJAJgDIAAAAQAJgDAJAFQAIAEACAJIApB/QADAJgEAIQgEAJgJADIgBAAIgHABQgFAAgFgCg");
	this.shape_5.setTransform(19.0306,10.6076,1.3748,1.3748,0,-44.9982,135.0018);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7B6A58").s().p("AgiBmIAAAAQgJgFgEgJQgDgKAEgJQAghJAOhOQADgLAIgHQAIgFAKACIAAAAQAKADAGAJQAGALgCALQgRBSghBMQgEALgKADIgJACQgFAAgFgDg");
	this.shape_6.setTransform(13.5821,-4.4154,1.3748,1.3748,0,-44.9982,135.0018);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-16,-23.9,43.1,52.9), null);


(lib.greenbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF66").s().p("Agde8QghABgYgYQgXgXAAgiMAAAg7XQAAgiAXgXQAYgYAhAAIA7AAQAhAAAYAYQAXAXAAAiMAAAA7XQAAAigXAXQgYAYghgBg");
	this.shape.setTransform(-0.5,-197.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greenbar, new cjs.Rectangle(-11.5,-396,22,396.1), null);


(lib.glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhLBMQgfgfAAgtQAAgrAfggQAfgfAsgBQAsABAgAfQAfAgABArQgBAtgfAfQggAfgsAAQgsAAgfgfg");
	this.shape.setTransform(-4.2,-5.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAfBFQgfATgoAAQg5AAgpgoQgpgoAAg5QAAg5ApgpQApgpA5AAQA5AAAoApQApApAAA5QAAA1gkAnIB2B2IgcAcg");
	this.shape_1.setTransform(0.025,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glass, new cjs.Rectangle(-17.9,-19,35.9,37.8), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPB7QgbAAgjgEIhCgJQgagGgSgSQgTgUgDgaIgPhVQgIgzgDgbIASAAIAZAnIGBAAIAZgnIASAAQgDAagIA0IgOBVQgEAagTAUQgSASgaAGQhHANhJAAg");
	this.shape.setTransform(23.575,12.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,47.2,24.7), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnBkICOjLIBAAAIiPDPQgbAAgkgEg");
	this.shape.setTransform(10.35,10.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,20.7,20.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAdB5QgNgPgcgqQgUgegNg8IgBgMIAAAAQAAg4gFgcQAJAkAeASQAdATAjgGQgTARgJAbQgJAZABAcQAAAgAOAwg");
	this.shape.setTransform(5.225,12.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,10.5,24.5), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgfAnIgFgCIAAgPQAWAEAUgPQAUgOAIgaIADgKQABANgEAOQgIAagTAPQgNALgPAAIgKgBg");
	this.shape.setTransform(3.685,4.047);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,7.4,8.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgGAdQgTgPgIgaQgEgOABgNIADAKQAIAaAUAOQAUAPAWgEIAAAPIgFACIgKABQgOAAgOgLg");
	this.shape.setTransform(3.665,4.047);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,7.4,8.1), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBiICKjHIAYAAIiMDLg");
	this.shape.setTransform(8.15,10.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,16.3,20.3), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgPAqQABgcgJgZQgJgbgTgRQAjAGAdgTQAegSAJgkQgFAcAAA4IAAAAIgBAMQgNA8gUAeQgeAtgLAMIgBABQAOgwAAggg");
	this.shape.setTransform(5.225,12.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,10.5,24.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAnQgEgCAAgCIgBgOIABgYIAAgkIAUBHQABAHgLABIgBAAIgFgBg");
	this.shape.setTransform(1.071,4.0313);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,2.2,8.1), null);


(lib.fireman_happyMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fireman_normal();
	this.instance.setTransform(-105.75,-189.25,0.3434,0.3434);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fireman_happyMC, new cjs.Rectangle(-105.7,-189.2,211.5,378.5), null);


(lib.endgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDC00").s().p("Eg3TAcuMAAAg5bMBunAAAMAAAA5bg");
	this.shape.setTransform(-0.225,0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endgame, new cjs.Rectangle(-354.2,-183.4,708,367.5), null);


(lib.earth_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.earth();
	this.instance.setTransform(-142,-142,0.3557,0.3557);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.earth_1, new cjs.Rectangle(-142,-142,284.6,284.9), null);


(lib.drag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C5430").ss(3,1,1).p("A4MkNMAwZAAAIAAIbMgwZAAAg");
	this.shape.setTransform(-0.1,-0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4MEOIAAobMAwZAAAIAAIbg");
	this.shape_1.setTransform(-0.1,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag, new cjs.Rectangle(-156.5,-29,312.8,57), null);


(lib.dayan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dayan();
	this.instance.setTransform(-129,-183,0.4053,0.4053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dayan_1, new cjs.Rectangle(-129,-183,259,364.8), null);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.comboBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDC00").s().p("Eg0TAWqQhQAAAAhQMAAAgqzQAAhQBQAAMBonAAAQBQAAAABQMAAAAqzQAABQhQAAg");
	this.shape.setTransform(-17.6092,-14.975,0.7129,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.comboBg, new cjs.Rectangle(-262,-160,488.8,290.1), null);


(lib.check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrAvIAAgOIA4AAIAAggQAAgMgDgGQgDgHgHgEQgHgDgQAAIgSABIgBgOQALgCAOAAQAYAAAMALQALALAAAWIAAAjIAPAAIAAAOg");
	this.shape.setTransform(127.1,28.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJAvIAAhOIgyAAIAAgPIBTAAIAAAPIgQAAIAABOg");
	this.shape_1.setTransform(117.625,28.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAYIAAgvIARAAIAAAvg");
	this.shape_2.setTransform(110.825,26.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkBBIAAhYIAQAAIAABYgAABAdIAAgNQAAgJACgGQACgFAFgHIAFgHIAFgIIABgLIAAgMIg6AAIAAgPIBLAAIAAAYQAAAKgCAGQgCAGgEAGIgFAGQgHAJAAALIAAAPg");
	this.shape_3.setTransform(103.825,30.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxAtIADgNQAFACAFAAQAGAAACgDQADgCAAgIIAAg1IgTACIgBgOQAUgCAUAAQAUAAAMADQALAEAGAJQAGAKAAARIAAAyIgRAAIAAguQAAgMgCgHQgCgGgHgEQgHgEgPAAIgJAAIAAA3QAAAKgBAEQgCAFgFADQgFACgKAAQgJABgIgDg");
	this.shape_4.setTransform(92.475,28.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgxAtIADgNQAFACAFAAQAGAAACgDQADgCAAgIIAAg1IgTACIgBgOQAUgCAUAAQAUAAAMADQALAEAGAJQAGAKAAARIAAAyIgRAAIAAguQAAgMgCgHQgCgGgHgEQgHgEgPAAIgJAAIAAA3QAAAKgBAEQgCAFgFADQgFACgKAAQgJABgIgDg");
	this.shape_5.setTransform(75.925,28.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAoQgLgIgGgPQgFgPgBgXIgBgaIARAAIAAAQQABAXABAIQAKAAAHgEQAIgEAAgOIACgZIAPAAIgBAdIgCAMQgBAEgEADQgCAEgIADQgHAEgNABQABAKAJAFQAHAGAMAAQAKAAAIgFQAHgGAEgIQAEgHABgPIAEgoIAQAAIgCAjQgCASgFANQgFANgMAIQgLAIgSAAQgRAAgKgIg");
	this.shape_6.setTransform(64.4,28.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_7.setTransform(55.925,28.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsAvIAAgOIA5AAIAAggQAAgMgDgGQgDgHgHgEQgHgDgQAAIgSABIgBgOQAMgCANAAQAYAAALALQAMALAAAWIAAAjIAOAAIAAAOg");
	this.shape_8.setTransform(48.85,28.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_9.setTransform(38.525,28.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEDC00").s().p("AtCETIAAolIaFAAIAAIlg");
	this.shape_10.setTransform(83.5,27.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check, new cjs.Rectangle(0,0,167,55.1), null);


(lib.catarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C5430").ss(1,1,1).p("AAAAsIAAhX");
	this.shape.setTransform(4.1,85.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8C5430").ss(1,1,1).p("AAAAsIAAhX");
	this.shape_1.setTransform(-3.4,85.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C78D74").s().p("AhAGoQgbgbAAgmIAArNQAAgnAbgaQAbgcAlAAQAmAAAbAcQAbAaAAAnIAALNQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape_2.setTransform(0.1527,45.1488);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.catarm, new cjs.Rectangle(-9.1,0,18.5,90.6), null);


(lib.cat_sadMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cat_sad();
	this.instance.setTransform(109.45,-53.4,0.077,0.077,106.721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cat_sadMc, new cjs.Rectangle(-109.4,-104.8,218.9,209.7), null);


(lib.cat_happyMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAB5A0").s().p("AkIi9QgVhAgRhIQFnDED1FqQggArgOAyQlxg8iXnHg");
	this.shape.setTransform(-44.25,-10.75);

	this.shape_1 = new cjs.Shape();
	var sprImg_shape_1 = cjs.SpriteSheetUtils.extractFrame(ss["catsAndLadders_atlas_"],2);
	sprImg_shape_1.onload = function(){
		this.shape_1.graphics.bf(sprImg_shape_1, null, new cjs.Matrix2D(-0.02,0.074,-0.074,-0.02,107.4,-56.5)).s().p("AwxI1IDLpoIBDAAIAAg5IIkF4QAtgTAPAbQABgeAIgbQAPgyAggrQj2lrlnjEQARBIAVBAIhPgTIAph1IAAAAIhGAfICnpwIa5HOImqY3gAtYhzIAIgYIAjAYg")
	}.bind(this);
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cat_happyMC, new cjs.Rectangle(-107.4,-102.6,214.9,205.3), null);


(lib.area = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AYQEdQgEAAgDgDQgDgDAAgEQAAgDACgDIAAg1QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAgAWYEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAUgEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgASoEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAQwEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAO4EdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgANAEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgALIEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAJQEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAHYEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAFgEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgADoEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgABwEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAgHEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAh/EdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAj3EdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAlvEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnnEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgApfEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgArXEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAtPEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAvHEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAw/EdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAy3EdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgA0vEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgA2nEdQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgA4REdQgEAAgDgDQgDgDAAgEIAAgNQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAADIAkAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgA4YDRQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAYLCjQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgA4YBZQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAYLArQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgA4YgeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAYLhMQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgA4YiWQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAYLjEQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAWmkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAUukIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAS2kIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAQ+kIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAPGkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgANOkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgALWkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAJekIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAHmkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAFukIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAD2kIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAB+kIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAAGkIQgEAAgCgDQgDgDAAgEQAAgEADgDQACgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAhxkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAjpkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAlhkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnZkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgApRkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgArJkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAtBkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAu5kIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAwxkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAypkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgA0hkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgA2ZkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgA4RkIQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(-0.075,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(254,255,251,0.4)").s().p("AXeETQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg7AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIg8AAQgEAAgDADQgDADAAAEIgoAAQAAgEgDgDQgDgDgEAAIgkAAIAAgDQAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgnQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAgoQAEAAADgDQADgDAAgEIAAg8QAAgEgDgDQgDgDgEAAIAAglIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQACADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAoAAQAAAEADADQADADAEAAIA8AAQAEAAADgDQADgDAAgEIAmAAIAAABQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA7QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA8QAAAEADADQADADAEAAIAAAoQgEAAgDADQgDADAAAEIAAA1QgCADAAADg");
	this.shape_1.setTransform(-0.075,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.area, new cjs.Rectangle(-156.5,-29,312.9,57), null);


(lib.angry_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.angry();
	this.instance.setTransform(-256,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angry_1, new cjs.Rectangle(-256,-256,512,512), null);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.startbtn = new lib.Symbol1();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(-45.25,10.5,0.7365,0.6049,0,0,0,52.5,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, החלל החיצון, 1, מורשת ישראל, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(50,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-84.6,-0.5,185.1,23), null);


(lib.fireman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_143 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(49).call(this.frame_143).wait(1));

	// Armature_1
	this.ikNode_1 = new lib.upperarm();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(142.9,109.6,1,1,0,0,0,-14,-18);

	this.ikNode_2 = new lib.lowerarm();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(176.85,146.8,1,1,0,0,0,-4,-22);

	this.ikNode_3 = new lib.hand();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.setTransform(190.5,195.6,1,1,0,-44.9994,135.0006,-4.7,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_3},{t:this.ikNode_2},{t:this.ikNode_1}]},1).wait(143));

	// Layer_1
	this.instance = new lib.fireman_happyMC();
	this.instance.setTransform(107.35,189.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E94E1B").s().p("AAAAJQgZAAgVAOIgSgaQAdgTAjAAQAjAAAeATIgSAaQgVgOgaAAg");
	this.shape.setTransform(107.5445,15.3626,1.3747,1.3747);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E94E1B").s().p("AgmAOIAAgaIBNAAIAAAag");
	this.shape_1.setTransform(107.5445,37.4613,1.3747,1.3747);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAvIAVhQIgcAAIAAgNIArAAIAAANIgWBQg");
	this.shape_2.setTransform(114.8855,26.7695,1.3746,1.3746);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAwIAAgMQAAgOAPgQQANgPAAgOQAAgKgHAAQgHAAAAAJIAAAKIgOAAIAAgJQAAgYAVAAQAWAAAAAYQAAARgOAPQgOARAAAGIAAACIAbAAIAAAOg");
	this.shape_3.setTransform(107.6004,26.7008,1.3746,1.3746);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAZIAAgIIAOAAIAAAJQAAAJAHAAQAHAAABgLIAAgHQgBgMgIAAIgFAAIAAgNIAGAAQAHAAABgKIAAgFQgBgLgHAAQgHAAAAAJIAAAHIgOAAIAAgGQAAgXAVAAQAWAAAAAXIAAADQAAAPgKAEQAKAEAAAPIAAAIQAAAXgWAAQgVAAAAgXg");
	this.shape_4.setTransform(100.1434,26.7695,1.3746,1.3746);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#575756").s().p("AgwB9QgJgkgagVQAChSgMg1QA3gYAmghQAlAfA5AaQgMA4ADBQQgbAVgIAjg");
	this.shape_5.setTransform(107.5102,23.8171,1.3747,1.3747);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3B").s().p("Ag8CLQgGgmgagWQgFgEAAgHQAChPgMg2QgCgKAJgEQA2gYAnggQAEgDADAAQAFAAADADQAnAgA2AYQAJAEgCAKQgMA0ACBRQAAAHgFAEQgZAVgIAng");
	this.shape_6.setTransform(107.5337,23.8171,1.3747,1.3747);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AhHCZQgDgWgGgNQgHgRgOgLQgKgIAAgOQAChQgLgyQgCgJAEgIQAEgIAJgFQA1gXAkgeQAHgGAJAAQAJAAAIAGQAkAeA1AXQAJAEAEAJQAEAIgCAJQgLAyACBQQAAANgKAJQgZAUgFArg");
	this.shape_7.setTransform(107.5445,23.7827,1.3747,1.3747);

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(103.25,62.35,1.3747,1.3747,0,0,0,8.4,10.6);
	this.instance_1.alpha = 0.3984;

	this.instance_2 = new lib.Path_1_2();
	this.instance_2.setTransform(111,62.65,1.3747,1.3747,0,0,0,10.6,10.8);
	this.instance_2.alpha = 0.3984;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAAQAAgLAEAAQAFAAAAALQAAAMgFAAQgEAAAAgMg");
	this.shape_8.setTransform(138.0842,46.4267,1.3746,1.3746);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAAQAAgLAEAAQAFAAAAALQAAAMgFAAQgEAAAAgMg");
	this.shape_9.setTransform(76.8463,46.4267,1.3746,1.3746);

	this.instance_3 = new lib.Path_4();
	this.instance_3.setTransform(107.5,59.95,1.3747,1.3747,0,0,0,23.9,12.6);
	this.instance_3.alpha = 0.3008;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3B").s().p("AlJAYQgEgDgBgHIgDgSQFRgrFSApIgDATQAAAGgFAEQgFAEgGgBQk/glk9AmIgDAAQgFAAgEgDg");
	this.shape_10.setTransform(107.534,47.6252,1.3746,1.3746);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#575756").s().p("AlRANQgBgGAEgFQAEgEAGgBQFEgoFFAnQAGABAEADQAEAFgBAHIgBAKQlRgolQAqg");
	this.shape_11.setTransform(107.5434,44.8197,1.3746,1.3746);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#575756").s().p("AihCfQAAh6AvhjQAxhpBBAAQBAgBAyBpQAvBkABB5IgBAJIlBABg");
	this.shape_12.setTransform(107.5594,23.1673,1.3749,1.3749);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DEDC00").s().p("AjiAyQALgwAWgqQDBgSDCASQAWAqAKAwQjigajiAag");
	this.shape_13.setTransform(107.5254,26.3298,1.3749,1.3749);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3B").s().p("AjsCfQAAgqAKgsQALgwAWgqQAhhDAxgoQA1grA6AAQA6gBA1ArQAyApAhBDQAWAqAKAwQAKAqABArIgBAJInXABg");
	this.shape_14.setTransform(107.5598,23.1671,1.3749,1.3749);

	this.instance_4 = new lib.Path();
	this.instance_4.setTransform(126.1,76.2,1.3747,1.3747,0,0,0,5.6,12.6);
	this.instance_4.alpha = 0.0703;

	this.instance_5 = new lib.Path_1_1();
	this.instance_5.setTransform(89,76.2,1.3747,1.3747,0,0,0,5.4,12.6);
	this.instance_5.alpha = 0.0703;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBA97B").s().p("AABAJQgNABgNgHQgMgEABgDQABgFAjAAQAlAAAAAFQABADgLAEQgLAHgNAAIgCgBg");
	this.shape_15.setTransform(107.554,84.2806,1.3748,1.3748);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C4986E").s().p("AAAAQQgvADgXgJIgQgHIgMgHQgLgJAAgCQABgBAKACIAaAHQAMABAWgBIAmgDIAoADQAVABAMgBIAagHQALgDAAACQAAADgLAIIgMAHIgQAHQgRAHggAAIgWgBg");
	this.shape_16.setTransform(107.475,79.8354);

	this.instance_6 = new lib.Group();
	this.instance_6.setTransform(106.35,63.7,1.3747,1.3747,0,0,0,1.2,4.5);
	this.instance_6.alpha = 0.3008;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBA97B").s().p("AgTA5QAYgGAEgWQAFgZgQg8QANATAGAaQAHAfgHAjIgUACIgOABQgBAAAAgBQgBAAAAAAQgBAAABAAQAAAAAAAAg");
	this.shape_17.setTransform(109.9541,63.1623,1.3746,1.3746);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DBA97B").s().p("AgUAEQgLgGAAgDQAAgEAKABIAVABIAVgDQAJgCACAEQACADgHAHQgJAJgNAAIgBAAQgLAAgNgHg");
	this.shape_18.setTransform(107.8282,71.5529,1.3746,1.3746);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7D4E24").s().p("AgIAAQACghAPgcQgMAxAGBKQgMgdABghg");
	this.shape_19.setTransform(80.4935,35.4367,1.3748,1.3748);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7D4E24").s().p("AgUgDQAJg3AigpIgHASQgQA9gEAcQgJA0AGAoQgVgxAIg2g");
	this.shape_20.setTransform(80.4385,35.6085,1.3748,1.3748);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7D4E24").s().p("AAegWQAOgCAJAFQgHABgTAGIggAMQghAOgOAJQAhgmAxgHg");
	this.shape_21.setTransform(92.6368,19.5493,1.3748,1.3748);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7D4E24").s().p("AgjhcQAIgBAJAJQAhAiAOAxQANAwgMAvQAAhihBhYg");
	this.shape_22.setTransform(132.5081,34.0944,1.3748,1.3748);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7D4E24").s().p("AhEAIQA8AHAjgNQAPgFAbgRQgJAQgRAKQgQALgUADQgIABgKAAQgcAAgdgNg");
	this.shape_23.setTransform(104.0824,33.3187,1.3748,1.3748);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7D4E24").s().p("AguAmQgfgFgcgOIA0AFQAaAAAggLQA4gRAtgjQgLAcgZATQgYATgfAIQgRAFgUAAQgMAAgMgCg");
	this.shape_24.setTransform(99.6829,35.0028,1.3748,1.3748);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjGAWQgFgJAkgUQAkgUApAKQApALAGAGQAGAFgCAHQgCAGgHACQgIADgfgRQgfgPglATQgbAPgKAAQgEAAgCgDgAChADQgigZgiAXQgjAYgIgEQgIgDgCgGQgCgHAGgFQAHgFAugOQAugNAfAXQAeAWgFAIQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgJAAgZgUg");
	this.shape_25.setTransform(108.1607,61.4011);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#936037").s().p("ACBANQgqgKgsAGQgGABgGgDQgFgCgCgFQgCgEAFgDQAEgEAIgBQA0gCAuAOQAGABgDAHQgEAFgFAAIgCAAgAiLAIQgDgHAGgBQAugOA0ACQAIABAEAEQAFADgCAEQgCAFgFACQgGADgGgBQgsgGgqAKIgCAAQgFAAgEgFg");
	this.shape_26.setTransform(107.4805,54.5284,1.3748,1.3748);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DBA97B").s().p("AgZAuIADgFQAEgFACgGIAAgJIgEgXIAAgPQABgJADgGQAFgIAHgDQANgGALALQAGAGAAAJQAAAGgCAAIgCgGQgCgGgFgEQgIgGgHAFQgJAEgBAOQgBAFACAPIABAAQAIgEAGAHQAHAIgEAHQgDAHgCgDIgCgFQAAgDgCgEQgDgCgEgBIgBgBIABALIgDALQgDAJgGADIgFACIgBAAg");
	this.shape_27.setTransform(136.9277,59.9096,1.3744,1.3744);

	this.instance_7 = new lib.Path_1_0();
	this.instance_7.setTransform(137.45,63.4,1.3746,1.3746,0,0,0,4,4.6);
	this.instance_7.alpha = 0.0508;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFD2A1").s().p("AgfBBIgFgCIAAhzQATgSATAGIACAAQAUAFAJAXQAIAXgHAaQgIAbgTAPQgNAMgPAAIgKgCg");
	this.shape_28.setTransform(137.3411,59.7589,1.3744,1.3744);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DBA97B").s().p("AAVAsQgGgCgEgKIgDgLIABgLIgBABQgEABgDACIgCAHIgCAFQgCADgDgHQgDgIAGgHQAGgHAIAEIABAAQACgQAAgEQgCgPgJgDQgHgFgIAGQgFAEgCAGIgCAGQgBAAgBgGQAAgIAGgHQALgLANAGQAIAEAEAHQADAFABAKIAAAPIgEAXIAAAJQACAGAEAFIADAFIgBAAg");
	this.shape_29.setTransform(77.972,59.9096,1.3744,1.3744);

	this.instance_8 = new lib.Path_1();
	this.instance_8.setTransform(77.5,63.4,1.3746,1.3746,0,0,0,4,4.6);
	this.instance_8.alpha = 0.0508;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD2A1").s().p("AgGA3QgTgPgIgbQgHgaAIgXQAJgXAUgFIACAAQATgFAUARIgBBzIgFACIgKACQgPAAgNgMg");
	this.shape_30.setTransform(77.5887,59.7712,1.3744,1.3744);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#936037").s().p("AgLBAQAIgLADgPQg3A3iBg2QAKgkAJgRIABAAQAFgKAHgJQAYgaArgJQAbgHAzACQBxAFBFAhQAIAEACAEQABADgBADIgBAFQgEAKgPANQg9A0hvAOIgLABIAHgKg");
	this.shape_31.setTransform(107.9939,34.9919,1.3748,1.3748);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#936037").s().p("AClAiIgGgIIgCgCQgiAPh7AAQh6AAgigPIgCACIgFAIQgPAdgGBLQgHgIgHgCQgHgDgLACQgGggAAgnQgChOAZgnQAagqA8gUQAzgRA+ADQA/gDAzARQA8AUAaAqQAZAngCBOQAAAngGAgQgLgCgHADQgHACgHAIQgGhLgOgdg");
	this.shape_32.setTransform(107.4852,33.2836,1.3748,1.3748);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFD2A1").s().p("AgDEFQgnAAgVgHQgVgIgTgWIgBgCQgNgPgdgqQgVgegNg9IgMjOQAAg1AmgmQAlglA1AAICAAAQA2AAAmAlQAlAmAAA1IgMDDIgBALQgMA9gVAeQgfAtgLAMIgBACQgUAWgVAIQgUAHgnAAg");
	this.shape_33.setTransform(107.5195,62.315,1.3748,1.3748);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363635").s().p("AirguQAZgdAJgPQBCAbBHAAQBHAABCgbQAJAPAZAdQg0Buh3AbQh2gbg1hug");
	this.shape_34.setTransform(107.5313,95.8031,1.375,1.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3C3C3B").s().p("AgjAWIAAgrIBHAAIAAArg");
	this.shape_35.setTransform(107.5481,198.8606,1.3748,1.3748);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#634E42").s().p("AgpAyQgJAAgGgGQgGgHAAgJIAAg3QAAgJAGgGQAGgHAJAAIBTAAQAJAAAGAHQAGAGAAAJIAAA3QAAAJgGAHQgGAGgJAAg");
	this.shape_36.setTransform(107.5481,198.8606,1.3748,1.3748);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7B6A58").s().p("Al5AjIADhEILtAAIADBEg");
	this.shape_37.setTransform(107.5481,198.8606,1.3748,1.3748);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#634E42").s().p("AkMmGIA0gOQCaFRFLG8IgsAcQlKm/ijlcg");
	this.shape_38.setTransform(113.7531,144.9594,1.375,1.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#575756").s().p("AhVAlQgMgMgBgRIgBgxIC2gGQAGAAAFAFQAEAEABAGIABAiQAAARgMAMQgLANgRAAIhzAEIgBAAQgRAAgMgLg");
	this.shape_39.setTransform(148.1395,211.888,1.3748,1.3748);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#706F6F").s().p("AhmhvIDGgGIAHDWQgBAGgEAFQgEAEgHAAIi1AGg");
	this.shape_40.setTransform(148.6193,225.9436,1.3748,1.3748);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#363635").s().p("Ahmh/IDFgGIAIEFIjFAGg");
	this.shape_41.setTransform(144.1513,223.8471,1.3748,1.3748);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#575756").s().p("AA4AwIhzgEQgRAAgLgNQgMgMAAgRIABgiQABgGAEgEQAFgFAGAAIC2AGIgBAxQgBARgMAMQgMALgRAAIgBAAg");
	this.shape_42.setTransform(66.9566,211.888,1.3748,1.3748);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#706F6F").s().p("AhWBwQgHAAgEgEQgEgFgBgGIAHjWIDFAGIgHDlg");
	this.shape_43.setTransform(66.4768,225.9436,1.3748,1.3748);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#363635").s().p("AhmCAIAIkFIDFAGIgIEFg");
	this.shape_44.setTransform(70.9448,223.8471,1.3748,1.3748);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#575756").s().p("AggJgIAAy/IBBAAIAAS/g");
	this.shape_45.setTransform(107.5656,176.5156,1.375,1.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DEDC00").s().p("Al0AxIAFhhILfAAIAFBhg");
	this.shape_46.setTransform(107.5656,183.1844,1.375,1.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DEDC00").s().p("AltAxIAGhhILPAAIAGBhg");
	this.shape_47.setTransform(107.5656,165.5156,1.375,1.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DEDC00").s().p("AiUAdIABg5IEnAAIABA5g");
	this.shape_48.setTransform(131.9031,332.0969,1.375,1.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DEDC00").s().p("AiUAdIABg5IEnAAIABA5g");
	this.shape_49.setTransform(83.2281,332.0969,1.375,1.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DEDC00").s().p("AiTAdIABg5IElAAIABA5g");
	this.shape_50.setTransform(131.8688,321.6469,1.375,1.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DEDC00").s().p("AiTAdIABg5IEmAAIAAA5g");
	this.shape_51.setTransform(83.2625,321.6469,1.375,1.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3C3C3B").s().p("AgLCFQgRAAgNgNQgMgNAAgRIAAizQAAgRAMgNQANgNARAAIA+AAIAEEJg");
	this.shape_52.setTransform(144.5875,295.9688,1.375,1.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3C3C3B").s().p("Ag2CFIAEkJIA+AAQARAAANANQAMANAAARIAACzQAAARgMANQgNANgRAAg");
	this.shape_53.setTransform(70.5438,295.9688,1.375,1.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3C3C3B").s().p("AggKEQiLgCiOgZQgkgHgXgdQgXgdACgkIA3vmQACggAUgZQAVgZAegIIEJhHIEKBHQAeAIAVAZQAUAZACAgIA3PmQACAkgXAdQgXAdgkAHQiOAZiLACg");
	this.shape_54.setTransform(107.5656,171.5656,1.375,1.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#575756").s().p("AkvDcQgGjPA/j4QB9gfB5gBQB6ABB9AfQA/D4gGDPQidAviTABQiSgBidgvg");
	this.shape_55.setTransform(107.5656,77.55,1.375,1.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#575756").s().p("Ah7FuQgagWABgiIADoiQgBg7AqgrQAqgqA7gBIADAAQA6AAArApQAqAqABA7IAFIGQABAagRAUQgQAUgZAFIibAeQgIACgIAAQgYAAgUgQg");
	this.shape_56.setTransform(131.9035,308.6678,1.375,1.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#575756").s().p("ABAF8IibgeQgZgFgQgUQgRgUABgaIAFoGQABg7AqgqQArgpA6AAIADAAQA7ABAqAqQAqArgBA7IADIiQABAigaAWQgUAQgYAAQgIAAgIgCg");
	this.shape_57.setTransform(83.2278,308.6678,1.375,1.375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#575756").s().p("AhPE0QgtgmgEg8IgfmOQgEg7AmgtQAngtA7gFIADAAQA7gEAtAmQAtAnAEA7IAfGOQAEA7gnAuQgmAtg8AEIgCAAIgNABQgyAAgpgjg");
	this.shape_58.setTransform(129.7715,244.6192,1.375,1.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#575756").s().p("AgYFWIgCAAQg8gEgmgtQgnguAEg7IAfmOQAEg7AtgnQAtgmA7AEIADAAQA7AFAnAtQAmAtgEA7IgfGOQgEA8gtAmQgpAjgyAAIgNgBg");
	this.shape_59.setTransform(85.3597,244.6192,1.375,1.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3C3C3B").s().p("AguARIgHgBIgWgIIAAAJIiMAAIAAghIGvAAIAAAhg");
	this.shape_60.setTransform(146.6603,376.3436,1.3748,1.3748);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3C3C3B").s().p("AgDAPQgDgBgCgDQgBgCABgDIAFgQQABgCACgCIAFAAQAGACgCAGIgFAQQgCAFgDAAIgCAAg");
	this.shape_61.setTransform(153.704,358.3433,1.3748,1.3748);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3C3C3B").s().p("AgJAMIAAAAQgCgCAAgDQgBAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAIAKgNQAEgFAGAEQAFAEgEAFIgLANQgCADgDAAIgEgCg");
	this.shape_62.setTransform(150.1207,356.7813,1.3748,1.3748);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3C3C3B").s().p("AgMAIQgEgHAGgCIAPgIQAGgDADAFQADAHgGABIgOAJIgEABQgDAAgCgDg");
	this.shape_63.setTransform(147.1071,354.416,1.3748,1.3748);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3C3C3B").s().p("AgOAFIAAgBQgBgFAGgCIAPgFQADgBACABQADABABADIAAAAQACAFgGADIgQAFIgDABQgEAAgCgFg");
	this.shape_64.setTransform(145.2439,351.1299,1.3748,1.3748);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3C3C3B").s().p("AgOACQgBgFAGgBIARgDQAGgBABAGQACAGgHABIgQADIgDAAQgFAAAAgGg");
	this.shape_65.setTransform(143.793,347.6994,1.3748,1.3748);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3C3C3B").s().p("AgPADQAAgGAGgBIARgDQAGgCABAIQACAFgHABIgQADIgCAAQgFAAgCgFg");
	this.shape_66.setTransform(142.7078,344.0167,1.3748,1.3748);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3C3C3B").s().p("AgmAiIAAgBQAAgcAUgTQATgTAcAAIADAAQAHATAAARIAAAfg");
	this.shape_67.setTransform(169.8939,370.054,1.3748,1.3748);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3C3C3B").s().p("Ag4A0IAAhKIABgdIAFAAQAtAAAeAZQAgAZAAAiIAAATg");
	this.shape_68.setTransform(125.8669,367.7169,1.3748,1.3748);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#706F6F").s().p("AhdBrIAAhMIABgdIABgOQADgdACgNIAIgxIAZgCQAlgEAeAVQAfAVAKAkIAnCKg");
	this.shape_69.setTransform(130.9192,360.2244,1.3748,1.3748);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3C3C3B").s().p("AhrAsQAAgqAHgsIALhJIAogDQAngEAfAWQAhAXAKAmIAsCeIjXAAg");
	this.shape_70.setTransform(132.9126,358.4729,1.3748,1.3748);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#706F6F").s().p("Ah7BAIAGhSQA4AEAXgHQAfgJADghIAfAAQAeAAAYAQQAYARALAbQAIASAAASIAAAfg");
	this.shape_71.setTransform(158.2427,365.9641,1.3748,1.3748);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#575756").s().p("AjPB9IAAhLQAAgqAHgsIALhJIClgPIAQA7QAHAcAWARQAXARAdAAIAnAAQAoAAAcAcQAcAcAAAoIAAAgg");
	this.shape_72.setTransform(146.6603,357.6811,1.3748,1.3748);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3C3C3B").s().p("ABMARIAAgJIgWAIIgHABIkGAAIAAghIGvAAIAAAhg");
	this.shape_73.setTransform(68.4358,376.3436,1.3748,1.3748);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3C3C3B").s().p("AgDALIgFgQQgCgHAGgCQAGgCACAHIAFAQQABACgBADQgCADgDAAIgCAAQgDAAgCgEg");
	this.shape_74.setTransform(61.3921,358.3224,1.3748,1.3748);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3C3C3B").s().p("AAAALIgKgNQgEgFAFgEQAGgEADAFIALANQAAAAABABQAAAAAAABQAAAAABABQAAABgBAAQAAADgCACIAAAAIgEACQgDAAgDgDg");
	this.shape_75.setTransform(64.9754,356.7813,1.3748,1.3748);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3C3C3B").s().p("AAEAKIgOgJQgGgBADgHQADgFAGADIAPAIQAGACgEAHQgCADgDAAIgEgBg");
	this.shape_76.setTransform(67.989,354.416,1.3748,1.3748);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3C3C3B").s().p("AAGAJIgQgFQgGgDACgFIAAAAQABgDADgBQACgBADABIAPAFQAGACgBAFIAAABQgCAFgEAAIgDgBg");
	this.shape_77.setTransform(69.8522,351.1299,1.3748,1.3748);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3C3C3B").s().p("AAHAIIgQgDQgHgBACgGQABgGAGABIARADQAGABgBAFQAAAGgFAAIgDAAg");
	this.shape_78.setTransform(71.3031,347.6994,1.3748,1.3748);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3C3C3B").s().p("AAHAIIgQgDQgHgBACgFQAAgIAIACIAQADQAGABgBAGQgBAFgFAAIgCAAg");
	this.shape_79.setTransform(72.3883,344.0167,1.3748,1.3748);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3C3C3B").s().p("AgmAiIAAgfQAAgRAHgTIADAAQAcAAATATQAUATAAAcIAAABg");
	this.shape_80.setTransform(45.2022,370.054,1.3748,1.3748);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3C3C3B").s().p("Ag4A0IAAgTQAAgiAggZQAegZAsAAIAGAAIABAdIAABKg");
	this.shape_81.setTransform(89.2292,367.7169,1.3748,1.3748);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#706F6F").s().p("AhdBrIAniKQAKgkAfgVQAegVAlAEIAZACIAIAxQADASACAYIABAOIABAdIAABMg");
	this.shape_82.setTransform(84.1769,360.2244,1.3748,1.3748);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3C3C3B").s().p("AhrB3IAsieQAKgmAhgXQAfgWAnAEIAoADIALBJQAHAsAAAqIAABLg");
	this.shape_83.setTransform(82.1835,358.4729,1.3748,1.3748);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#706F6F").s().p("Ah7BAIAAgfQAAgSAIgSQALgbAYgRQAYgQAeAAIAfAAQAEAhAdAJQAYAHA4gEIAGBSg");
	this.shape_84.setTransform(56.8534,365.9641,1.3748,1.3748);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#575756").s().p("AjPB9IAAggQAAgoAcgcQAdgcAnAAIAnAAQAdAAAXgRQAWgRAHgcIAQg7IClAPIALBJQAHAsAAAqIAABLg");
	this.shape_85.setTransform(68.4358,357.6811,1.3748,1.3748);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3C3C3B").s().p("AlAAcQiGgmgGg5IOZAAQgGA5iGAmQiFAoi7AAQi6AAiHgog");
	this.shape_86.setTransform(107.65,56.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#936037").s().p("ACLAeQgmgYgpgIQgHgBgEgEQgFgEAAgFIAAgBQAAgFAGgCQAGgCAHADQAwAOAoAdQAGAEgGAFQgEACgDAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAgAiWAXQgDgCAAgDQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQApgdAvgOQAIgDAGACQAFACAAAFIAAABQAAAFgEAEQgFAEgGABQgrAJglAXQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgEAAgDgCg");
	this.shape_87.setTransform(107.2774,54.3071);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgFAHQgCgDgBgDQAAgIAIgBQADAAADADQADACAAADQAAADgCADQgDADgDAAIgBAAQgCAAgDgCg");
	this.shape_88.setTransform(117.2292,58.0792);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgFAAQAAgEAFgBQAGAAAAAFQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIAAAAQgEAAgBgGg");
	this.shape_89.setTransform(114.6563,60.5067);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3C3C3B").s().p("AgKAMQgGgFAAgGQgBgGAFgFQAFgFAHAAQAGgBAGAFQAFAEAAAHQABAGgFAFQgFAFgHAAIgBAAQgGAAgEgEg");
	this.shape_90.setTransform(116.125,59.425);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4DA9D6").s().p("AgUAVQgKgIgBgLQAAgLAIgIQAJgJANgBQAMAAAKAHQAKAIABALQABALgJAIQgJAJgNABIgCAAQgLAAgJgHg");
	this.shape_91.setTransform(116.1286,59.329);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgDQAAgDACgDQADgCADgBQAIAAABAIQAAADgDADQgCADgEAAIAAAAQgDAAgCgCg");
	this.shape_92.setTransform(99.8708,58.0792);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgDAFQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBgEAGgBQAFAAABAFQAAAGgGAAIAAAAIgDgBg");
	this.shape_93.setTransform(97.2933,60.5063);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3C3C3B").s().p("AgLAMQgFgEAAgHQgBgGAFgFQAFgFAHAAQAGgBAFAFQAFAEABAHQAAAGgEAFQgFAFgHAAIgBAAQgGAAgFgEg");
	this.shape_94.setTransform(98.7502,59.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4DA9D6").s().p("AgVAVQgJgIgBgLQgBgLAKgIQAIgJANgBQAMAAALAHQAKAIAAALQABALgKAIQgIAJgNABIgCAAQgMAAgJgHg");
	this.shape_95.setTransform(98.75,59.329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_86},{t:this.shape_85,p:{x:68.4358,y:357.6811}},{t:this.shape_84,p:{x:56.8534,y:365.9641}},{t:this.shape_83,p:{x:82.1835,y:358.4729}},{t:this.shape_82,p:{x:84.1769,y:360.2244}},{t:this.shape_81,p:{x:89.2292,y:367.7169}},{t:this.shape_80,p:{x:45.2022,y:370.054}},{t:this.shape_79,p:{x:72.3883,y:344.0167}},{t:this.shape_78,p:{x:71.3031,y:347.6994}},{t:this.shape_77,p:{x:69.8522,y:351.1299}},{t:this.shape_76,p:{x:67.989,y:354.416}},{t:this.shape_75,p:{x:64.9754,y:356.7813}},{t:this.shape_74,p:{x:61.3921,y:358.3224}},{t:this.shape_73,p:{x:68.4358,y:376.3436}},{t:this.shape_72,p:{x:146.6603,y:357.6811}},{t:this.shape_71,p:{x:158.2427,y:365.9641}},{t:this.shape_70,p:{x:132.9126,y:358.4729}},{t:this.shape_69,p:{x:130.9192,y:360.2244}},{t:this.shape_68,p:{x:125.8669,y:367.7169}},{t:this.shape_67,p:{x:169.8939,y:370.054}},{t:this.shape_66,p:{x:142.7078,y:344.0167}},{t:this.shape_65,p:{x:143.793,y:347.6994}},{t:this.shape_64,p:{x:145.2439,y:351.1299}},{t:this.shape_63,p:{x:147.1071,y:354.416}},{t:this.shape_62,p:{x:150.1207,y:356.7813}},{t:this.shape_61,p:{x:153.704,y:358.3433}},{t:this.shape_60,p:{x:146.6603,y:376.3436}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:70.9448,y:223.8471}},{t:this.shape_43,p:{x:66.4768,y:225.9436}},{t:this.shape_42,p:{x:66.9566,y:211.888}},{t:this.shape_41,p:{x:144.1513,y:223.8471}},{t:this.shape_40,p:{x:148.6193,y:225.9436}},{t:this.shape_39,p:{x:148.1395,y:211.888}},{t:this.shape_38},{t:this.shape_37,p:{x:107.5481,y:198.8606}},{t:this.shape_36,p:{x:107.5481,y:198.8606}},{t:this.shape_35,p:{x:107.5481,y:198.8606}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{scaleX:1.3744,scaleY:1.3744,x:77.5887,y:59.7712}},{t:this.instance_8,p:{regX:4,regY:4.6,x:77.5}},{t:this.shape_29,p:{scaleX:1.3744,scaleY:1.3744,x:77.972,y:59.9096}},{t:this.shape_28,p:{scaleX:1.3744,scaleY:1.3744,x:137.3411,y:59.7589}},{t:this.instance_7,p:{regX:4,regY:4.6,x:137.45}},{t:this.shape_27,p:{scaleX:1.3744,scaleY:1.3744,x:136.9277,y:59.9096}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:107.8282,y:71.5529}},{t:this.shape_17,p:{x:109.9541,y:63.1623}},{t:this.instance_6,p:{y:63.7}},{t:this.shape_16,p:{skewX:0,y:79.8354}},{t:this.shape_15,p:{skewX:0,y:84.2806}},{t:this.instance_5,p:{y:76.2}},{t:this.instance_4,p:{regX:5.6,x:126.1,y:76.2}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:107.5434,y:44.8197}},{t:this.shape_10,p:{x:107.534,y:47.6252}},{t:this.instance_3,p:{regX:23.9,x:107.5,y:59.95}},{t:this.shape_9,p:{x:76.8463,y:46.4267}},{t:this.shape_8,p:{x:138.0842,y:46.4267}},{t:this.instance_2,p:{regY:10.8,y:62.65}},{t:this.instance_1,p:{regX:8.4,x:103.25,y:62.35}},{t:this.shape_7,p:{scaleX:1.3747,scaleY:1.3747,x:107.5445,y:23.7827}},{t:this.shape_6,p:{scaleX:1.3747,scaleY:1.3747,x:107.5337,y:23.8171}},{t:this.shape_5,p:{scaleX:1.3747,scaleY:1.3747,x:107.5102,y:23.8171}},{t:this.shape_4,p:{x:100.1434,y:26.7695}},{t:this.shape_3,p:{x:107.6004,y:26.7008}},{t:this.shape_2,p:{x:114.8855,y:26.7695}},{t:this.shape_1,p:{scaleX:1.3747,scaleY:1.3747,x:107.5445,y:37.4613}},{t:this.shape,p:{scaleX:1.3747,scaleY:1.3747,x:107.5445,y:15.3626}}]},1).to({state:[{t:this.shape_86},{t:this.shape_85,p:{x:68.4373,y:357.689}},{t:this.shape_84,p:{x:56.8546,y:365.9722}},{t:this.shape_83,p:{x:82.1853,y:358.4809}},{t:this.shape_82,p:{x:84.1788,y:360.2324}},{t:this.shape_81,p:{x:89.2312,y:367.7251}},{t:this.shape_80,p:{x:45.2031,y:370.0622}},{t:this.shape_79,p:{x:72.3898,y:344.0243}},{t:this.shape_78,p:{x:71.3046,y:347.7071}},{t:this.shape_77,p:{x:69.8537,y:351.1377}},{t:this.shape_76,p:{x:67.9905,y:354.4239}},{t:this.shape_75,p:{x:64.9768,y:356.7892}},{t:this.shape_74,p:{x:61.3935,y:358.3303}},{t:this.shape_73,p:{x:68.4373,y:376.3519}},{t:this.shape_72,p:{x:146.6635,y:357.689}},{t:this.shape_71,p:{x:158.2462,y:365.9722}},{t:this.shape_70,p:{x:132.9155,y:358.4809}},{t:this.shape_69,p:{x:130.922,y:360.2324}},{t:this.shape_68,p:{x:125.8696,y:367.7251}},{t:this.shape_67,p:{x:169.8976,y:370.0622}},{t:this.shape_66,p:{x:142.7109,y:344.0243}},{t:this.shape_65,p:{x:143.7962,y:347.7071}},{t:this.shape_64,p:{x:145.2471,y:351.1377}},{t:this.shape_63,p:{x:147.1103,y:354.4239}},{t:this.shape_62,p:{x:150.124,y:356.7892}},{t:this.shape_61,p:{x:153.7073,y:358.3512}},{t:this.shape_60,p:{x:146.6635,y:376.3519}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:70.9463,y:223.8521}},{t:this.shape_43,p:{x:66.4782,y:225.9486}},{t:this.shape_42,p:{x:66.958,y:211.8927}},{t:this.shape_41,p:{x:144.1545,y:223.8521}},{t:this.shape_40,p:{x:148.6226,y:225.9486}},{t:this.shape_39,p:{x:148.1428,y:211.8927}},{t:this.shape_38},{t:this.shape_37,p:{x:107.5504,y:198.8651}},{t:this.shape_36,p:{x:107.5504,y:198.8651}},{t:this.shape_35,p:{x:107.5504,y:198.8651}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{scaleX:1.3745,scaleY:1.3745,x:77.5971,y:59.7778}},{t:this.instance_8,p:{regX:4.1,regY:4.7,x:77.55}},{t:this.shape_29,p:{scaleX:1.3745,scaleY:1.3745,x:77.9804,y:59.9162}},{t:this.shape_28,p:{scaleX:1.3745,scaleY:1.3745,x:137.3561,y:59.7655}},{t:this.instance_7,p:{regX:4.1,regY:4.7,x:137.5}},{t:this.shape_27,p:{scaleX:1.3745,scaleY:1.3745,x:136.9427,y:59.9162}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:107.8329,y:71.5561}},{t:this.shape_17,p:{x:109.9589,y:63.1651}},{t:this.instance_6,p:{y:63.65}},{t:this.shape_16,p:{skewX:180,y:79.7646}},{t:this.shape_15,p:{skewX:180,y:84.2194}},{t:this.instance_5,p:{y:76.1}},{t:this.instance_4,p:{regX:5.7,x:126.2,y:76.1}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:107.5481,y:44.8217}},{t:this.shape_10,p:{x:107.5387,y:47.6273}},{t:this.instance_3,p:{regX:24.1,x:107.7,y:59.9}},{t:this.shape_9,p:{x:76.8496,y:46.4288}},{t:this.shape_8,p:{x:138.0903,y:46.4288}},{t:this.instance_2,p:{regY:10.9,y:62.75}},{t:this.instance_1,p:{regX:8.6,x:103.4,y:62.3}},{t:this.shape_7,p:{scaleX:1.3748,scaleY:1.3748,x:107.5481,y:23.7835}},{t:this.shape_6,p:{scaleX:1.3748,scaleY:1.3748,x:107.5372,y:23.8179}},{t:this.shape_5,p:{scaleX:1.3748,scaleY:1.3748,x:107.5137,y:23.8179}},{t:this.shape_4,p:{x:100.1467,y:26.7704}},{t:this.shape_3,p:{x:107.6039,y:26.7017}},{t:this.shape_2,p:{x:114.8893,y:26.7704}},{t:this.shape_1,p:{scaleX:1.3748,scaleY:1.3748,x:107.5481,y:37.4625}},{t:this.shape,p:{scaleX:1.3748,scaleY:1.3748,x:107.5481,y:15.3631}}]},94).wait(49));

	// Armature_5
	this.ikNode_1_1 = new lib.upperarm();
	this.ikNode_1_1.name = "ikNode_1_1";
	this.ikNode_1_1.setTransform(65.8,107.7,1,1,0,0,180,-10.1,-19.9);

	this.ikNode_2_1 = new lib.lowerarm();
	this.ikNode_2_1.name = "ikNode_2_1";
	this.ikNode_2_1.setTransform(35.75,146.8,1,1,0,0,180,-4,-22);

	this.ikNode_3_1 = new lib.hand();
	this.ikNode_3_1.name = "ikNode_3_1";
	this.ikNode_3_1.setTransform(22.2,195.6,1,1,0,0,180,-4.6,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:0,skewY:180,x:22.2,y:195.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0,skewY:180,x:35.75,y:146.8}},{t:this.ikNode_1_1,p:{skewX:0,skewY:180,x:65.8,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:6.0032,skewY:-173.9968,x:13.7,y:191.2,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-21.9,skewX:6.2301,skewY:-173.7699,x:32.7,y:144.3}},{t:this.ikNode_1_1,p:{skewX:4.7501,skewY:-175.2499,x:65.7,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:12.0074,skewY:-167.9926,x:6,y:186,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:12.4602,skewY:-167.5398,x:29.65,y:141.15}},{t:this.ikNode_1_1,p:{skewX:9.5014,skewY:-170.4986,x:65.75,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:18.0114,skewY:-161.9886,x:-1.45,y:180.05,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:18.6904,skewY:-161.3096,x:27,y:138.2}},{t:this.ikNode_1_1,p:{skewX:14.2521,skewY:-165.7479,x:65.75,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:24.0158,skewY:-155.9842,x:-8.1,y:173.3,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:24.9196,skewY:-155.0804,x:24.6,y:134.9}},{t:this.ikNode_1_1,p:{skewX:19.0025,skewY:-160.9975,x:65.75,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:30.0196,skewY:-149.9804,x:-14.25,y:166.15,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:31.15,skewY:-148.85,x:22.5,y:131.3}},{t:this.ikNode_1_1,p:{skewX:23.7535,skewY:-156.2465,x:65.7,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:36.0234,skewY:-143.9766,x:-19.65,y:158.25,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:37.3805,skewY:-142.6195,x:20.7,y:127.7}},{t:this.ikNode_1_1,p:{skewX:28.5043,skewY:-151.4957,x:65.75,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:42.0276,skewY:-137.9724,x:-24.2,y:149.95,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:43.6101,skewY:-136.3899,x:19.15,y:123.85}},{t:this.ikNode_1_1,p:{skewX:33.2548,skewY:-146.7452,x:65.7,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:48.0312,skewY:-131.9688,x:-27.85,y:141,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:49.8401,skewY:-130.1599,x:18.1,y:120}},{t:this.ikNode_1_1,p:{skewX:38.0062,skewY:-141.9938,x:65.6,y:107.7,regX:-10,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:54.0354,skewY:-125.9646,x:-30.9,y:131.9,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:56.0704,skewY:-123.9296,x:17.25,y:115.9}},{t:this.ikNode_1_1,p:{skewX:42.7566,skewY:-137.2434,x:65.7,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:60.0392,skewY:-119.9608,x:-32.8,y:122.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:62.3006,skewY:-117.6994,x:16.75,y:111.9}},{t:this.ikNode_1_1,p:{skewX:47.5076,skewY:-132.4924,x:65.7,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:66.0437,skewY:-113.9563,x:-33.85,y:112.95,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:68.5308,skewY:-111.4692,x:16.5,y:107.8}},{t:this.ikNode_1_1,p:{skewX:52.2586,skewY:-127.7414,x:65.75,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:72.0475,skewY:-107.9525,x:-34,y:103.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:74.7608,skewY:-105.2392,x:16.7,y:103.7}},{t:this.ikNode_1_1,p:{skewX:57.0093,skewY:-122.9907,x:65.65,y:107.7,regX:-10.1,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:78.0514,skewY:-101.9486,x:-33.15,y:93.95,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:80.9911,skewY:-99.0089,x:17.3,y:99.7}},{t:this.ikNode_1_1,p:{skewX:61.7601,skewY:-118.2399,x:65.75,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:84.0557,skewY:-95.9443,x:-31.4,y:84.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:87.2213,skewY:-92.7787,x:17.95,y:95.7}},{t:this.ikNode_1_1,p:{skewX:66.5107,skewY:-113.4893,x:65.75,y:107.6,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:90.0586,skewY:-89.9414,x:-28.75,y:75.3,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:93.4502,skewY:-86.5498,x:19.1,y:91.75}},{t:this.ikNode_1_1,p:{skewX:71.2618,skewY:-108.7382,x:65.65,y:107.5,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:96.0621,skewY:-83.9379,x:-25.25,y:66.4,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:99.6805,skewY:-80.3195,x:20.65,y:88}},{t:this.ikNode_1_1,p:{skewX:76.0121,skewY:-103.9879,x:65.7,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:102.0666,skewY:-77.9334,x:-20.8,y:57.9,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:105.91,skewY:-74.09,x:22.3,y:84.3}},{t:this.ikNode_1_1,p:{skewX:80.7636,skewY:-99.2364,x:65.7,y:107.5,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:108.0703,skewY:-71.9297,x:-15.6,y:49.75,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:112.1406,skewY:-67.8594,x:24.4,y:80.8}},{t:this.ikNode_1_1,p:{skewX:85.5139,skewY:-94.4861,x:65.7,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:114.0741,skewY:-65.9259,x:-9.75,y:42.35,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:118.3709,skewY:-61.6291,x:26.7,y:77.45}},{t:this.ikNode_1_1,p:{skewX:90.264,skewY:-89.736,x:65.7,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:120.0783,skewY:-59.9217,x:-3,y:35.45,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:124.6004,skewY:-55.3996,x:29.35,y:74.35}},{t:this.ikNode_1_1,p:{skewX:95.0142,skewY:-84.9858,x:65.55,y:107.65,regX:-10.1,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:126.0823,skewY:-53.9177,x:4.3,y:29.2,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:130.8309,skewY:-49.1691,x:32.25,y:71.5}},{t:this.ikNode_1_1,p:{skewX:99.7656,skewY:-80.2344,x:65.65,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:132.0864,skewY:-47.9136,x:12,y:23.85,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.0609,skewY:-42.9391,x:35.35,y:68.8}},{t:this.ikNode_1_1,p:{skewX:104.5165,skewY:-75.4835,x:65.65,y:107.7,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:126.0891,skewY:-53.9109,x:12.1,y:23.75,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.0919,skewY:-42.9081,x:35.35,y:68.75}},{t:this.ikNode_1_1,p:{skewX:104.5462,skewY:-75.4538,x:65.6,y:107.65,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:120.0924,skewY:-59.9076,x:12.1,y:23.75,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.1228,skewY:-42.8772,x:35.3,y:68.7}},{t:this.ikNode_1_1,p:{skewX:104.5761,skewY:-75.4239,x:65.6,y:107.6,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:114.0952,skewY:-65.9048,x:12.1,y:23.7,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.1531,skewY:-42.8469,x:35.35,y:68.75}},{t:this.ikNode_1_1,p:{skewX:104.6069,skewY:-75.3931,x:65.6,y:107.55,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:108.0979,skewY:-71.9021,x:12.2,y:23.7,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.184,skewY:-42.816,x:35.35,y:68.7}},{t:this.ikNode_1_1,p:{skewX:104.6365,skewY:-75.3635,x:65.5,y:107.5,regX:-10,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:102.1014,skewY:-77.8986,x:12.5,y:23.7,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.215,skewY:-42.785,x:35.35,y:68.65}},{t:this.ikNode_1_1,p:{skewX:104.6664,skewY:-75.3336,x:65.6,y:107.55,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:96.1043,skewY:-83.8957,x:12.4,y:23.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.2459,skewY:-42.7541,x:35.35,y:68.6}},{t:this.ikNode_1_1,p:{skewX:104.6963,skewY:-75.3037,x:65.55,y:107.5,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:102.3715,skewY:-77.6285,x:12.75,y:23.3,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.6815,skewY:-42.3185,x:35.45,y:68.55}},{t:this.ikNode_1_1,p:{skewX:104.8454,skewY:-75.1546,x:65.55,y:107.5,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:108.6387,skewY:-71.3613,x:13.2,y:23.05,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:138.1173,skewY:-41.8827,x:35.6,y:68.5}},{t:this.ikNode_1_1,p:{skewX:104.9939,skewY:-75.0061,x:65.5,y:107.5,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:114.9062,skewY:-65.0938,x:13.6,y:22.8,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:138.5533,skewY:-41.4467,x:35.55,y:68.45}},{t:this.ikNode_1_1,p:{skewX:105.1423,skewY:-74.8577,x:65.4,y:107.45,regX:-10.1,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:121.1735,skewY:-58.8265,x:13.95,y:22.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:138.9894,skewY:-41.0106,x:35.75,y:68.25}},{t:this.ikNode_1_1,p:{skewX:105.291,skewY:-74.709,x:65.5,y:107.5,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:127.441,skewY:-52.559,x:14.5,y:22.25,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:139.4252,skewY:-40.5748,x:35.75,y:68.25}},{t:this.ikNode_1_1,p:{skewX:105.4397,skewY:-74.5603,x:65.5,y:107.5,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:133.7085,skewY:-46.2915,x:14.9,y:22.15,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:139.8612,skewY:-40.1388,x:35.95,y:68.15}},{t:this.ikNode_1_1,p:{skewX:105.5875,skewY:-74.4125,x:65.5,y:107.5,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:134.2037,skewY:-45.7963,x:14.2,y:22.3,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:138.6307,skewY:-41.3693,x:36.15,y:67.9}},{t:this.ikNode_1_1,p:{skewX:105.9681,skewY:-74.0319,x:65.5,y:107.3,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:134.6983,skewY:-45.3017,x:13.45,y:22.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:137.4012,skewY:-42.5988,x:36.4,y:67.7}},{t:this.ikNode_1_1,p:{skewX:106.3496,skewY:-73.6504,x:65.45,y:107.45,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:135.1935,skewY:-44.8065,x:12.8,y:22.85,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:136.171,skewY:-43.829,x:36.65,y:67.45}},{t:this.ikNode_1_1,p:{skewX:106.73,skewY:-73.27,x:65.35,y:107.3,regX:-10,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:135.6887,skewY:-44.3113,x:12.05,y:23.2,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:134.9413,skewY:-45.0587,x:36.85,y:67.3}},{t:this.ikNode_1_1,p:{skewX:107.1108,skewY:-72.8892,x:65.45,y:107.4,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:136.1827,skewY:-43.8173,x:11.4,y:23.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:133.7109,skewY:-46.2891,x:37.15,y:67.1}},{t:this.ikNode_1_1,p:{skewX:107.491,skewY:-72.509,x:65.45,y:107.45,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:136.6787,skewY:-43.3213,x:10.7,y:23.9,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-21.9,skewX:132.4812,skewY:-47.5188,x:37.3,y:66.9}},{t:this.ikNode_1_1,p:{skewX:107.8718,skewY:-72.1282,x:65.4,y:107.35,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:136.3391,skewY:-43.6609,x:14.65,y:21.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:136.4115,skewY:-43.5885,x:38.25,y:66.35}},{t:this.ikNode_1_1,p:{skewX:109.2005,skewY:-70.7995,x:65.45,y:107.4,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:136.0009,skewY:-43.9991,x:18.75,y:19.4,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:140.3429,skewY:-39.6571,x:39.3,y:65.65}},{t:this.ikNode_1_1,p:{skewX:110.5288,skewY:-69.4712,x:65.45,y:107.3,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:135.6621,skewY:-44.3379,x:22.9,y:17.45,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:144.2734,skewY:-35.7266,x:40.25,y:65}},{t:this.ikNode_1_1,p:{skewX:111.8577,skewY:-68.1423,x:65.35,y:107.35,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:135.3227,skewY:-44.6773,x:27.25,y:15.9,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:148.2041,skewY:-31.7959,x:41.2,y:64.4}},{t:this.ikNode_1_1,p:{skewX:113.1857,skewY:-66.8143,x:65.35,y:107.4,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:134.9839,skewY:-45.0161,x:31.5,y:14.4,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:152.1344,skewY:-27.8656,x:42.2,y:63.85}},{t:this.ikNode_1_1,p:{skewX:114.5143,skewY:-65.4857,x:65.35,y:107.35,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:134.6452,skewY:-45.3548,x:35.95,y:13.25,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:156.0657,skewY:-23.9343,x:43.15,y:63.25}},{t:this.ikNode_1_1,p:{skewX:115.8429,skewY:-64.1571,x:65.2,y:107.3,regX:-10.1,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:128.1781,skewY:-51.8219,x:26.2,y:16.7,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:149.6032,skewY:-30.3968,x:39.05,y:65.75}},{t:this.ikNode_1_1,p:{skewX:110.1914,skewY:-69.8086,x:65.35,y:107.35,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:121.7103,skewY:-58.2897,x:16.8,y:21.25,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:143.142,skewY:-36.858,x:35,y:68.5}},{t:this.ikNode_1_1,p:{skewX:104.5398,skewY:-75.4602,x:65.3,y:107.35,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:115.243,skewY:-64.757,x:7.95,y:26.85,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:136.6799,skewY:-43.3201,x:31.35,y:71.65}},{t:this.ikNode_1_1,p:{skewX:98.8885,skewY:-81.1115,x:65.35,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:108.7761,skewY:-71.2239,x:-0.3,y:33.3,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:130.2189,skewY:-49.7811,x:28,y:75.15}},{t:this.ikNode_1_1,p:{skewX:93.2365,skewY:-86.7635,x:65.35,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:102.3089,skewY:-77.6911,x:-7.8,y:40.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:123.757,skewY:-56.243,x:25.05,y:79}},{t:this.ikNode_1_1,p:{skewX:87.5854,skewY:-92.4146,x:65.4,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:95.8415,skewY:-84.1585,x:-14.4,y:48.75,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:117.2954,skewY:-62.7046,x:22.4,y:83.1}},{t:this.ikNode_1_1,p:{skewX:81.9336,skewY:-98.0664,x:65.35,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:89.3749,skewY:-90.6251,x:-20.3,y:57.35,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:110.8338,skewY:-69.1662,x:20.25,y:87.4}},{t:this.ikNode_1_1,p:{skewX:76.2822,skewY:-103.7178,x:65.4,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:82.9073,skewY:-97.0927,x:-25.15,y:66.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:104.3721,skewY:-75.6279,x:18.6,y:91.9}},{t:this.ikNode_1_1,p:{skewX:70.6308,skewY:-109.3692,x:65.35,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:76.4406,skewY:-103.5594,x:-29,y:76.4,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:97.9101,skewY:-82.0899,x:17.35,y:96.65}},{t:this.ikNode_1_1,p:{skewX:64.9791,skewY:-115.0209,x:65.35,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:69.9735,skewY:-110.0265,x:-31.75,y:86.5,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:91.4488,skewY:-88.5512,x:16.55,y:101.4}},{t:this.ikNode_1_1,p:{skewX:59.3273,skewY:-120.6727,x:65.35,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:63.5057,skewY:-116.4943,x:-33.6,y:96.85,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:84.9884,skewY:-95.0116,x:16.2,y:106.35}},{t:this.ikNode_1_1,p:{skewX:53.6757,skewY:-126.3243,x:65.4,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:57.0388,skewY:-122.9612,x:-34.1,y:107.45,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:78.5265,skewY:-101.4735,x:16.3,y:111.05}},{t:this.ikNode_1_1,p:{skewX:48.0244,skewY:-131.9756,x:65.35,y:107.25,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:50.5708,skewY:-129.4292,x:-33.6,y:117.95,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:72.0649,skewY:-107.9351,x:17,y:116}},{t:this.ikNode_1_1,p:{skewX:42.3723,skewY:-137.6277,x:65.35,y:107.25,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:44.1042,skewY:-135.8958,x:-31.95,y:128.35,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:65.6027,skewY:-114.3973,x:18.05,y:120.6}},{t:this.ikNode_1_1,p:{skewX:36.7206,skewY:-143.2794,x:65.4,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:37.6367,skewY:-142.3633,x:-29.25,y:138.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22.1,skewX:59.1418,skewY:-120.8582,x:19.7,y:125.2}},{t:this.ikNode_1_1,p:{skewX:31.0692,skewY:-148.9308,x:65.35,y:107.25,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:31.1692,skewY:-148.8308,x:-25.35,y:148.45,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:52.68,skewY:-127.32,x:21.5,y:129.65}},{t:this.ikNode_1_1,p:{skewX:25.417,skewY:-154.583,x:65.35,y:107.3,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:24.702,skewY:-155.298,x:-20.6,y:157.7,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:46.218,skewY:-133.782,x:23.9,y:133.85}},{t:this.ikNode_1_1,p:{skewX:19.7654,skewY:-160.2346,x:65.3,y:107.2,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:18.2351,skewY:-161.7649,x:-14.95,y:166.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-21.9,skewX:39.7571,skewY:-140.2429,x:26.6,y:137.85}},{t:this.ikNode_1_1,p:{skewX:14.1141,skewY:-165.8859,x:65.35,y:107.2,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:11.7672,skewY:-168.2328,x:-8.1,y:174.7,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:33.2946,skewY:-146.7054,x:30,y:141.4}},{t:this.ikNode_1_1,p:{skewX:8.4622,skewY:-171.5378,x:65.4,y:107.2,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:5.3004,skewY:-174.6996,x:-0.55,y:181.95,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:26.8329,skewY:-153.1671,x:33.45,y:144.75}},{t:this.ikNode_1_1,p:{skewX:2.811,skewY:-177.189,x:65.4,y:107.2,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-1.1664,skewY:178.8336,x:7.6,y:188.65,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:20.3714,skewY:-159.6286,x:37.3,y:147.8}},{t:this.ikNode_1_1,p:{skewX:-2.8399,skewY:177.1601,x:65.4,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-7.6331,skewY:172.3669,x:16.5,y:194.3,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:13.9103,skewY:-166.0897,x:41.45,y:150.2}},{t:this.ikNode_1_1,p:{skewX:-8.4922,skewY:171.5078,x:65.4,y:107.1,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-14.1005,skewY:165.8995,x:25.95,y:198.95,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-21.9,skewX:7.4488,skewY:-172.5512,x:45.75,y:152.5}},{t:this.ikNode_1_1,p:{skewX:-14.1437,skewY:165.8563,x:65.4,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9871,skewY:-179.0129,x:50.35,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.2,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9871,skewY:-179.0129,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5681,skewY:159.4319,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154.05}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.795,skewY:160.205,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.85,y:202.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9862,skewY:-179.0138,x:50.3,y:154}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-20.5673,skewY:159.4327,x:35.8,y:202.45,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:0.9853,skewY:-179.0147,x:50.3,y:153.95}},{t:this.ikNode_1_1,p:{skewX:-19.7942,skewY:160.2058,x:65.35,y:107.1,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-11.5512,skewY:168.4488,x:25.6,y:198.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:9.9954,skewY:-170.0046,x:47.45,y:153}},{t:this.ikNode_1_1,p:{skewX:-16.3222,skewY:163.6778,x:65.35,y:107.05,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:-2.5345,skewY:177.4655,x:16.1,y:193.45,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:19.0045,skewY:-160.9955,x:44.7,y:151.8}},{t:this.ikNode_1_1,p:{skewX:-12.85,skewY:167.15,x:65.3,y:107.1,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:6.4808,skewY:-173.5192,x:7.1,y:187.1,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:28.0138,skewY:-151.9862,x:42.1,y:150.6}},{t:this.ikNode_1_1,p:{skewX:-9.3781,skewY:170.6219,x:65.2,y:107.05,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:15.4976,skewY:-164.5024,x:-0.65,y:179.7,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:37.0236,skewY:-142.9764,x:39.5,y:149.05}},{t:this.ikNode_1_1,p:{skewX:-5.9056,skewY:174.0944,x:65.35,y:107.05,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:24.5143,skewY:-155.4857,x:-7.4,y:171.3,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:46.0331,skewY:-133.9669,x:37,y:147.4}},{t:this.ikNode_1_1,p:{skewX:-2.4338,skewY:177.5662,x:65.35,y:107.05,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:33.5308,skewY:-146.4692,x:-12.95,y:162.4,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:55.0421,skewY:-124.9579,x:34.6,y:145.55}},{t:this.ikNode_1_1,p:{skewX:1.0378,skewY:-178.9622,x:65.3,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:42.5475,skewY:-137.4525,x:-17.25,y:152.65,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:64.0523,skewY:-115.9477,x:32.3,y:143.6}},{t:this.ikNode_1_1,p:{skewX:4.5097,skewY:-175.4903,x:65.15,y:107.1,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:51.5636,skewY:-128.4364,x:-20.3,y:142.7,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22.1,skewX:73.0618,skewY:-106.9382,x:30.25,y:141.55}},{t:this.ikNode_1_1,p:{skewX:7.9816,skewY:-172.0184,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:60.5803,skewY:-119.4197,x:-21.85,y:132.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:82.0713,skewY:-97.9287,x:28.15,y:139.3}},{t:this.ikNode_1_1,p:{skewX:11.454,skewY:-168.546,x:65.3,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:69.5962,skewY:-110.4038,x:-22.1,y:122.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:91.0798,skewY:-88.9202,x:26.25,y:137.05}},{t:this.ikNode_1_1,p:{skewX:14.926,skewY:-165.074,x:65.3,y:107.1,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:78.6129,skewY:-101.3871,x:-20.95,y:112.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:100.0887,skewY:-79.9113,x:24.5,y:134.65}},{t:this.ikNode_1_1,p:{skewX:18.3979,skewY:-161.6021,x:65.3,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:87.6292,skewY:-92.3708,x:-18.5,y:103.3,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:109.0988,skewY:-70.9012,x:22.9,y:132.15}},{t:this.ikNode_1_1,p:{skewX:21.8699,skewY:-158.1301,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:96.6454,skewY:-83.3546,x:-14.95,y:94.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:118.1081,skewY:-61.8919,x:21.45,y:129.5}},{t:this.ikNode_1_1,p:{skewX:25.3424,skewY:-154.6576,x:65.3,y:107.1,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:105.662,skewY:-74.338,x:-10.25,y:86.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22.1,skewX:127.1171,skewY:-52.8829,x:20.25,y:126.95}},{t:this.ikNode_1_1,p:{skewX:28.8142,skewY:-151.1858,x:65.3,y:107.1,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:114.6778,skewY:-65.3222,x:-4.75,y:79.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:136.1271,skewY:-43.8729,x:19.1,y:124}},{t:this.ikNode_1_1,p:{skewX:32.2865,skewY:-147.7135,x:65.3,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:123.6947,skewY:-56.3053,x:1.65,y:73.5,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:145.1363,skewY:-34.8637,x:18.15,y:121.25}},{t:this.ikNode_1_1,p:{skewX:35.7586,skewY:-144.2414,x:65.3,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:132.7114,skewY:-47.2886,x:8.45,y:68.6,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:154.1458,skewY:-25.8542,x:17.4,y:118.35}},{t:this.ikNode_1_1,p:{skewX:39.2311,skewY:-140.7689,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:141.7273,skewY:-38.2727,x:15.8,y:64.8,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-21.9,skewX:163.155,skewY:-16.845,x:16.75,y:115.3}},{t:this.ikNode_1_1,p:{skewX:42.7028,skewY:-137.2972,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:150.744,skewY:-29.256,x:23.25,y:62.4,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:172.1649,skewY:-7.8351,x:16.4,y:112.5}},{t:this.ikNode_1_1,p:{skewX:46.1753,skewY:-133.8247,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:159.7602,skewY:-20.2398,x:30.9,y:61.15,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-178.8267,skewY:1.1733,x:16.15,y:109.5}},{t:this.ikNode_1_1,p:{skewX:49.6472,skewY:-130.3528,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:168.777,skewY:-11.223,x:38.1,y:61.15,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-169.8171,skewY:10.1829,x:16.05,y:106.55}},{t:this.ikNode_1_1,p:{skewX:53.1194,skewY:-126.8806,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:177.7937,skewY:-2.2063,x:45.05,y:62.2,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-160.8078,skewY:19.1922,x:16.15,y:103.6}},{t:this.ikNode_1_1,p:{skewX:56.5917,skewY:-123.4083,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:-173.1909,skewY:6.8091,x:51.65,y:64.15,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-151.7988,skewY:28.2012,x:16.55,y:100.6}},{t:this.ikNode_1_1,p:{skewX:60.0635,skewY:-119.9365,x:65.25,y:107.15,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.7,skewX:-164.1745,skewY:15.8255,x:57.15,y:67.1,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-142.7886,skewY:37.2114,x:16.95,y:97.6}},{t:this.ikNode_1_1,p:{skewX:63.5358,skewY:-116.4642,x:65.2,y:107.1,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.5,skewX:-159.3843,skewY:20.6157,x:60.35,y:68.05,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-137.9984,skewY:42.0016,x:17.65,y:95.05}},{t:this.ikNode_1_1,p:{skewX:66.6251,skewY:-113.3749,x:65.2,y:107.05,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-154.5935,skewY:25.4065,x:63.05,y:69.25,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-133.2075,skewY:46.7925,x:18.3,y:92.55}},{t:this.ikNode_1_1,p:{skewX:69.7135,skewY:-110.2865,x:65.2,y:107.05,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-149.8033,skewY:30.1967,x:65.7,y:70.5,regY:-14.2}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-128.4165,skewY:51.5835,x:19.1,y:89.95}},{t:this.ikNode_1_1,p:{skewX:72.8032,skewY:-107.1968,x:65.1,y:107.1,regX:-10.1,regY:-19.8}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-145.0126,skewY:34.9874,x:68.2,y:71.9,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-123.6265,skewY:56.3735,x:20.15,y:87.55}},{t:this.ikNode_1_1,p:{skewX:75.8923,skewY:-104.1077,x:65.15,y:107.05,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-140.2224,skewY:39.7776,x:70.5,y:73.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-21.9,skewX:-118.8361,skewY:61.1639,x:21.3,y:85.05}},{t:this.ikNode_1_1,p:{skewX:78.9819,skewY:-101.0181,x:65.15,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-144.6669,skewY:35.3331,x:69.45,y:69.75,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-21.9,skewX:-123.2795,skewY:56.7205,x:21.3,y:85}},{t:this.ikNode_1_1,p:{skewX:79.0284,skewY:-100.9716,x:65.1,y:106.9,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-149.1105,skewY:30.8895,x:68.1,y:66,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-127.7239,skewY:52.2761,x:21.25,y:85.05}},{t:this.ikNode_1_1,p:{skewX:79.0755,skewY:-100.9245,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-153.5546,skewY:26.4454,x:66.5,y:62.35,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-21.9,skewX:-132.1675,skewY:47.8325,x:21.3,y:84.9}},{t:this.ikNode_1_1,p:{skewX:79.1227,skewY:-100.8773,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-157.9991,skewY:22.0009,x:64.55,y:58.85,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4,regY:-22,skewX:-136.6119,skewY:43.3881,x:21.3,y:84.95}},{t:this.ikNode_1_1,p:{skewX:79.1698,skewY:-100.8302,x:65.1,y:106.85,regX:-10,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).to({state:[{t:this.ikNode_3_1,p:{regX:-4.6,skewX:-162.4431,skewY:17.5569,x:62.45,y:55.55,regY:-14.1}},{t:this.ikNode_2_1,p:{regX:-4.1,regY:-22,skewX:-141.0561,skewY:38.9439,x:21.2,y:84.8}},{t:this.ikNode_1_1,p:{skewX:79.217,skewY:-100.783,x:65.1,y:107,regX:-10.1,regY:-19.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,0,229.9,378.7);


(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_116 = function() {
		this.stop();
	}
	this.frame_171 = function() {
		this.stop();
	}
	this.frame_172 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(116).call(this.frame_116).wait(55).call(this.frame_171).wait(1).call(this.frame_172).wait(10));

	// sad cat
	this.instance = new lib.cat_sadMc();
	this.instance.setTransform(108.8,102.85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).wait(1).to({y:115.8279},0).wait(1).to({y:127.975},0).wait(1).to({y:139.2779},0).wait(1).to({y:149.7433},0).wait(1).to({y:159.3779},0).wait(1).to({y:168.175},0).wait(1).to({y:176.1279},0).wait(1).to({y:183.25},0).wait(1).to({y:189.5279},0).wait(1).to({y:194.975},0).wait(1).to({y:199.5779},0).wait(1).to({y:203.35},0).wait(1).to({y:206.2779},0).wait(1).to({y:208.375},0).wait(1).to({y:209.6279},0).wait(1).to({y:210.05},0).wait(26).to({y:172.7167},0).wait(1).to({y:135.3833},0).wait(1).to({y:98.05},0).to({_off:true},1).wait(10));

	// happy cat
	this.instance_1 = new lib.cat_happy();
	this.instance_1.setTransform(214.85,46.15,0.0767,0.0767,104.9982);

	this.instance_2 = new lib.cat_happyMC();
	this.instance_2.setTransform(107.4,104.25);
	this.instance_2._off = true;

	this.instance_3 = new lib.cat_angry();
	this.instance_3.setTransform(218.25,46.65,0.0809,0.0809,104.9927);

	this.instance_4 = new lib.cat_sad();
	this.instance_4.setTransform(218.25,49.45,0.077,0.077,106.721);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},46).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},55).to({state:[]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(1).to({y:116.8621},0).wait(1).to({y:128.9371},0).wait(1).to({y:140.4678},0).wait(1).to({y:151.4469},0).wait(1).to({y:161.8818},0).wait(1).to({y:171.7724},0).wait(1).to({y:181.1187},0).wait(1).to({y:189.9135},0).wait(1).to({y:198.1712},0).wait(1).to({y:205.8774},0).wait(1).to({y:213.0393},0).wait(1).to({y:219.6569},0).wait(1).to({y:225.7231},0).wait(1).to({y:231.2521},0).wait(1).to({y:236.2296},0).wait(1).to({y:240.6628},0).wait(1).to({y:244.5517},0).wait(1).to({y:247.8963},0).wait(1).to({y:250.6895},0).wait(1).to({y:252.9383},0).wait(1).to({y:254.65},0).wait(48).to({y:241.8947},0).wait(1).to({y:229.4043},0).wait(1).to({y:217.1789},0).wait(1).to({y:205.2185},0).wait(1).to({y:193.5303},0).wait(1).to({y:182.0999},0).wait(1).to({y:170.9417},0).wait(1).to({y:160.0484},0).wait(1).to({y:149.4201},0).wait(1).to({y:139.064},0).wait(1).to({y:128.9729},0).wait(1).to({y:119.1468},0).wait(1).to({y:109.5856},0).wait(1).to({y:104.25},0).wait(29).to({_off:true},1).wait(65));

	// wave
	this.instance_5 = new lib.catarm();
	this.instance_5.setTransform(104.5,262.65,0.9999,0.9999,143.2118,0,0,-14.6,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).wait(1).to({regX:0.2,regY:45.1,rotation:121.972,x:52.9,y:247.95},0).wait(1).to({rotation:103.222,x:46.85,y:260.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:86.9619,x:45.65,y:271.05},0).wait(1).to({rotation:73.2219,x:47.45,y:278.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:61.9719,x:50.6,y:284.25},0).wait(1).to({rotation:53.2119,x:53.95,y:287.45},0).wait(1).to({regX:-14.1,regY:0,rotation:53.2123,x:81.3,y:248.6},0).wait(1).to({regX:0.2,regY:45.1,rotation:44.1232,x:60.15,y:290.9},0).wait(1).to({rotation:37.305,x:65.3,y:293.1},0).wait(1).to({rotation:32.7573,x:68.9,y:294.2},0).wait(1).to({regX:-13.9,regY:0,scaleX:0.9998,scaleY:0.9998,rotation:32.7566,x:81.3,y:248.65},0).wait(1).to({regX:0.2,regY:45.1,rotation:40.7296,x:62.55,y:291.95},0).wait(1).to({rotation:47.2528,x:57.75,y:289.55},0).wait(1).to({rotation:52.3265,x:54.2,y:287.3},0).wait(1).to({rotation:55.9505,x:51.8,y:285.5},0).wait(1).to({regX:-13.7,regY:0,x:81.25,y:248.7},0).wait(1).to({regX:0.2,regY:45.1,rotation:42.6199,x:60.9,y:291.3},0).wait(1).to({rotation:32.6198,x:68.6,y:294.15},0).wait(1).to({rotation:25.9498,x:73.95,y:295.3},0).wait(1).to({regX:-12.8,regY:0.2,scaleX:0.9997,scaleY:0.9997,rotation:25.9487,x:81.25,y:248.75},0).wait(1).to({regX:0.2,regY:45.1,rotation:54.2685,x:52.35,y:285.5},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:79.2687,x:39.55,y:269.85},0).wait(1).to({rotation:100.9488,x:34.7,y:252.95},0).wait(1).to({rotation:119.2689,x:35.7,y:238.05},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:134.2689,x:40,y:226.7},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:145.949,x:45.35,y:218.8},0).wait(1).to({regX:-13.5,regY:0.1,scaleX:0.9997,scaleY:0.9997,rotation:145.9502,x:81.2,y:248.55},0).to({_off:true},8).wait(109));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-6.8,228.9,364.1);


// stage content:
(lib.catsAndLadders = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		stage.enableMouseOver(24);
		
		// טקסט מימין לשמאל
		document.getElementById("canvas").style.direction = "rtl";
		
		// יצירת קונטיינר לאלמנטים ברקע
		var bgcont = new createjs.Container
		stage.addChild(bgcont);
		
		// יצירת קונטיינר למסיחים, אזורי גרירה ובועת דיבור
		var qcont = new createjs.Container
		stage.addChild(qcont);
		
		// יצירת קונטיינר למשוב סולם אמיתי
		var laddercont = new createjs.Container
		stage.addChild(laddercont);
		
		// יצירת קונטיינר לפופאפים
		var popupcont = new createjs.Container
		stage.addChild(popupcont);
		
		/*---- משתנים גלובליים ---- */
		var mychoice = 0;
		var forcombo;
		var myGame; //המערך של כל המשחק
		// אורך ורוחב במה
		var stageH = 1280;
		var stageW = 720;
		
		//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
		$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		var answered = 0; // משתנה ששומר על כמה שאלות ענינו נכון
		var totalQ; // משתנה שישמור כמה שאלות יהיו בסך הכל
		
		var qNum; // משתנה ששומר כל פעם את אינדקס השאלה שמגרילים (אינדקס = מיקום במערך המשחק הכללי)
		var currQuestionText = ""; // משתנה ששומר את גזע השאלה הנוכחית
		var placedAnswers = 0; // משתנה ששומר כמה מסיחים נמצאים על אזורי גרירה
		var dragareaArr = [0, 0, 0, 0, 0, 0]; // משתנה ששומר האם יש על איזורי הגרירה מסיח
		
		/* מערך ששומר את פרטי המסיח: אינדקס, מיקום איקס, מיקום ואי, על איזה איזור גרירה הוא מונח
		מינוס 1 מייצג את זה שבהתחלה לא מונח על שום מסיח
		inner array: [ index, x loc, y loc, drea area index,  ] */
		var detailsArr = [
			[0, 0, 0, -1],
			[0, 0, 0, -1],
			[0, 0, 0, -1],
			[0, 0, 0, -1],
			[0, 0, 0, -1],
			[0, 0, 0, -1]
		];
		
		// משתני ניקוד
		var totalPoints = 0; // ניקוד כולל
		var pointsPerQ = 0; // ניקוד לכל שאלה
		var mistakes = 0; // מספר שגיאות במהלך המשחק - גם תשובה נכונה חלקית נחשבת לשגיאה
		
		// משתני זמן
		var timer = 30; // הגבלת שניות לכל שאלה
		var totalTime = 0; // משתנה מספרי - כמה זמן לקח לענות על כל השאלות
		var timerInterval; // משתנה שישמור את האינטרבל של הטיימר
		
		// משתנים ששומרים מיקומים של אלמנטים
		var dragX = 868.2; // מיקום איקס של המסיחים
		var dragY = 265.95; // מיקום ואי של המסיח הגבוה ביותר
		var dragGap = 75; // רווח בין מסיחים
		var areaX = 523.65; // מיקום איקס של אזורי הגרירה
		var areaY = 100; // מיקום ואי של אזור הגרירה הגבוה ביותר
		var areaGap = 100; // רווח אנכי בין אזורי גרירה
		var plankX = 340; // מיקום איקס של קרשים אמיתיים
		var plankY = 650; // מיקום ואי הנמוך ביותר לקרשים אמיתיים
		var plankGap = 70; // רווח בין קרשים אמיתיים
		var scalePic = 250; // רוחב/אורך מקסימליים של תמונה בפופאפ הגדלה
		
		/*---- סוף סגמנט משתנים גלובליים ---- */
		
		createStartScreen();
		
		/* ---   פונקציות מסך פתיחה --- */
		
		// יצירה של מסך פתיחה
		function createStartScreen() {
			// יצירת אלמנטים של מסך פתיחה
			var comboBg = new lib.comboBg();
			var comboBg = new lib.comboBg();
			comboBg.x = stageH / 2;
			comboBg.y = stageW / 2;
			bgcont.addChild(comboBg);
		
			//הוספת הקומבו לבמה
			forcombo = new lib.forcomb();
			forcombo.x = stageH / 2;
			forcombo.y = stageW / 2;
			forcombo.name = "combo";
			bgcont.addChild(forcombo);
		
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.3;
		}
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			//שמירת הערך שנבחר בקומבו
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			if (mychoice == 1) { // פסיכולוגיה
				firstGameFunc();
			} else if (mychoice == 2) { // מורשת ישראל
				secondGameFunc();
			}
		}
		/* --- סוף סגמנט פונקציות מסך פתיחה ---*/
		
		/*---- פונקציות אתחול משחק ---- */
		
		function firstGameFunc() {
			//יש להכניס אל המערך את התוכן של המשחק הראשון
			myGame = [
				["החלל החיצון"], // תא אפס - נושא המשחק
				[
					// format: [ question text, bottom range, top range, is answered correctly, attempts to answer ]
					["סדרו את כוכבי הלכת הבאים לפי מרחקם מהשמש", "קרוב", "רחוק", false, 1],
					// format: [ answer text, index, is picture ]
					["חמה", 0, ""],
					["נוגה", 1, ""],
					["כדור הארץ", 2, ""],
					["מאדים", 3, ""],
					[lib.jupiter, 4, "pic"],
					["שבתאי", 5, ""]
				],
				[
					["סדרו את כוכבי הלכת במערכת השמש שלנו לפי מסתם", "קל", "כבד", false, 1],
					["ונוס", 0, ""],
					[lib.earth, 1, "pic"],
					["נפטון", 2, ""],
					["אורנוס", 3, ""],
					["סאטורן", 4, ""],
					["יופיטר", 5, ""]
				],
				[
					["סדרו בסדר כרונולוגי את השלבים במחזור החיים של כוכב", "ראשון", "אחרון", false, 1],
					["קדם כוכב", 0, ""],
					["כוכב מהסדרה הראשית", 1, ""],
					["ענק אדום", 2, ""],
					["ננס לבן", 3, ""]
				],
				[
					["סדרו בסדר כרונולוגי את המשימות המאוישות של תוכנית החלל האמריקאית", "ראשונה", "אחרונה", false, 1],
					["פרידום 7", 0, ""],
					["אורורה 7", 1, ""],
					["ג'מיני 6", 2, ""],
					["אפולו 11", 3, ""]
				],
				[
					["מערכת השמש שלנו נמצאת בגלקסיית שביל החלב. זוהי גלקסיה ספירלית, המורכבת ממרכז דחוס ושש זרועות שמסתעפות ממנו. סדרו את הזרועות של שביל החלב לפי מרחקן מהמרכז.", "פנימית", "חיצונית", false, 1],
					["זרוע ברבור", 0, ""],
					["זרוע פרסאוס", 1, ""],
					["זרוע אוריון", 2, ""],
					["זרוע קשת", 3, ""],
					["זרוע מגן קנטאור", 4, ""],
					["זרוע סרגל", 5, ""]
				],
				[
					["סדרו את המודלים של מערכת השמש שלנו בסדר כרונולוגי", "עתיק", "חדש", false, 1],
					["מודל הגליל המרחף של אנכסימנדרוס", 0, ""],
					["המודל הגיאוצנטרי של אריסטו", 1, ""],
					["המודל הגיאוצנטרי של תלמי", 2, ""],
					["המודל ההליוצנטרי של ניקולאוס קופרניקוס", 3, ""],
					["המודל ההליוצנטרי של יוהנס קפלר", 4, ""]
				],
				[
					["סדרו את כוכבי הלכת במערכת השמש שלנו לפי מספר הירחים שלהם", "מעט ירחים", "הרבה ירחים", false, 1],
					["חמה", 0, ""],
					["כדור הארץ", 1, ""],
					["מאדים", 2, ""],
					["נפטון", 3, ""],
					["אורנוס", 4, ""],
					["צדק", 5, ""]
				],
				[
					["סדרו את המעבורות של נאסא לפי תאריך שיגורן הראשון", "מוקדם", "מאוחר", false, 1],
					["קולומביה", 0, ""],
					["צ'לנג'ר", 1, ""],
					["דיסקברי", 2, ""],
					["אטלנטיס", 3, ""],
					["אנדוור", 4, ""]
				]
			];
		
			startGame();
		}
		
		function secondGameFunc() {
			//יש להכניס אל המערך את התוכן של המשחק השני
			myGame = [
				["מורשת ישראל"], // תא אפס - נושא המשחק
				[
					// format: [ question text, bottom range, top range, is answered correctly, attempts to answer ]
					["סדרו בסדר כרונולוגי את האימפריות ששלטו בארץ ישראל לפני קום המדינה.", "עתיקה", "חדשה", false, 1],
					// format: [ answer text, index, is picture ]
					["ביזנטים", 0, ""],
					["מוסלמים", 1, ""],
					["צלבנים", 2, ""],
					["ממלוכים", 3, ""],
					["עות'מנים", 4, ""],
					["בריטים", 5, ""]
				],
				[
					["ממלכת החשמונאים שלטה בארץ ישראל כמאה שנה, ולאחר נפילתה לא קמה עוד יישות יהודית עצמאית בארץ עד להקמת מדינת ישראל. סדרו את מלכי בית חשמונאי בסדר כרונולוגי.", "ראשון", "אחרון", false, 1],
					["יהודה אריסטובולוס הראשון", 0, ""],
					["אלכסנדר ינאי", 1, ""],
					["שלומציון אלכסנדרה", 2, ""],
					["יהודה אריסטובולוס השני", 3, ""],
					["יוחנן הורקנוס השני", 4, ""],
					["מתתיהו אנטיגונוס השני", 5, ""]
				],
				[
					["סדרו את מלחמות ישראל בסדר כרונולוגי", "ראשונה", "אחרונה", false, 1],
					["מלחמת העצמאות", 0, ""],
					["מלחמת סיני", 1, ""],
					["מלחמת ששת הימים", 2, ""],
					["מלחמת ההתשה", 3, ""],
					["מלחמת יום הכיפורים", 4, ""],
					["מלחמת לבנון הראשונה (ידועה רשמית כ'מבצע שלום הגליל')", 5, ""]
				],
				[
					["סדרו את הרמטכלים לפי סדר כרונולוגי", "ראשון", "אחרון", false, 1],
					["יעקב דורי", 0, ""],
					["יגאל ידין", 1, ""],
					["מרדכי מקלף", 2, ""],
					[lib.dayan, 3, "pic"],
					["חיים לסקוב", 4, ""],
					["צבי צור", 5, ""]
				],
				[
					["סדרו לפי סדר כרונולוגי את גלי העלייה שהתרחשו לאחר קום המדינה", "ראשון", "אחרון", false, 1],
					["העלייה ההמונית", 0, ""],
					["מבצע על כנפי נשרים", 1, ""],
					["מבצע עזרא ונחמיה", 2, ""],
					["עליית גומולקה", 3, ""]
				],
				[
					["סדרו את האתרים ההיסטוריים הבאים מצפון לדרום", "דרום", "צפון", false, 1],
					[lib.masada, 0, "pic"],
					["קומראן", 1, ""],
					[lib.kotel, 2, "pic"],
					["קיסריה", 3, ""],
					["ציפורי", 4, ""],
					["גמלא", 5, ""]
				],
				[
					["סדרו בסדר כרונולוגי את מלכי יהודה ששלטו לפני חורבן בית ראשון", "ראשון", "אחרון", false, 1],
					["יאשיהו", 0, ""],
					["יהואחז", 1, ""],
					["יהויקים", 2, ""],
					["יהויכין", 3, ""],
					["צדקיהו", 4, ""]
				],
				[
					["סדרו את יישובי חומה ומגדל הבאים מצפון לדרום", "דרום", "צפון", false, 1],
					["כפר מנחם", 0, ""],
					["מעלה החמישה", 1, ""],
					["כפר נטר", 2, ""],
					["גינוסר", 3, ""],
					["חניתה", 4, ""]
				]
			];
		
			startGame();
		}
		
		// הפונקציה שמתחילה את המשחק, מכאן והלאה השתמשו במערך בלבד באופן דינמי
		function startGame() {
			console.log(myGame);
			// הסרת כל האלמנטים של מסך הפתיחה
			bgcont.removeAllChildren();
		
			// יצירת אלמנטים קבועים במהלך המשחק
			createElements();
		
			// שמירת מספר השאלות הכולל
			totalQ = myGame.length - 1;
		
			// הגדרת הניקוד שכל שאלה מקבלת
			pointsPerQ = 100 / totalQ;
		
			// יצירה שדה טקסט שיכיל את השם המשחק
			var gamename = createText("white", "24px Arial", "gamename", myGame[0], bgcont);
			gamename.x = 1125;
			gamename.y = 20;
		
			randomizeQuestion(); // הגרלת השאלה הראשונה
		}
		
		// פונקציה שיוצרת בתחילת המשחק את כל האלמנטים הקבועים על הבמה
		function createElements() {
			createDynamic(lib.fireman, 1045, 304, "fireman", bgcont); // כבאי
			createDynamic(lib.tree, 400.05, 0, "tree", bgcont); // עץ
			createDynamic(lib.cat, 122.2, -195.1, "cat", bgcont); // חתול
			bgcont.getChildByName("cat").visible = false; // החתול בלתי נראה במהלך שאלה
		
			createDynamic(lib.progress, 78.05, 286.05, "progress", bgcont); // בר התקדמות
			createDynamic(lib.greenbar, 89.55, 682.05, "greenbar", bgcont); // מילוי ירוק לבר ההתקדמות
			bgcont.getChildByName("greenbar").scaleY = 0; // בהתחלה בר ההתקדמות לא נראה כי עוד לא ענו על אף שאלה
		
			createDynamic(lib.sun, 92.2, 72.55, "sun", bgcont); // שמש
			var timerText = createText("black", "22px Arial", "timer", timer, bgcont.getChildByName("sun")); // הצמדת שדה טקסט עם טיימר לשמש
			timerText.textAlign = "center"; // מרכוז אופקי של הטקסט בתוך התיבה
			timerText.textBaseline = "middle"; // מרכוז אנכי של הטקסט בתוך התיב
			timeInterval = setInterval(questionTimer, 1000); // מונה השניות מתחיל לרוץ
			createDynamic(lib.pause, 178.25, 42.1, "pauseBtn", bgcont); // כפתור השהיית משחק
			bgcont.getChildByName("pauseBtn").addEventListener("click", pauseGame); // הצמדת מאזין
		
			createDynamic(lib.next, 200, 600, "nextBtn", bgcont); // כפתור לשאלה הבאה
			bgcont.getChildByName("nextBtn").visible = false; // בלתי נראה אלא אם כן סיימנו שאלה
			bgcont.getChildByName("nextBtn").addEventListener("click", nextFunc); // הצמדת מאזין לכפתור שאלה הבאה
		
			createDynamic(lib.check, 790.4, 172, "checkBtn", bgcont); // כפתור בדיקת תשובה
			bgcont.getChildByName("checkBtn").visible = false; // העלמת הכפתור
			bgcont.getChildByName("checkBtn").addEventListener("click", checkAnswers); // הצמדת מאזין
		}
		
		// פונקציה שמאתחלת את משתני המשחק לקראת משחק חדש
		function initializeGameInfo() {
			// ניקוי המסך מכל האלמנטים שטרם נוקו
			bgcont.removeAllChildren();
			laddercont.removeAllChildren();
		
			answered = 0; // איפוס מספר תשובות נכונות
			mistakes = 0; // איפוס מונה טעויות
			placedAnswers = 0; // בהתחלה אין מסיחים מונחים על אזורי גרירה
			dragareaArr = [0, 0, 0, 0, 0, 0];
			detailsArr = [
				[0, 0, 0, -1],
				[0, 0, 0, -1],
				[0, 0, 0, -1],
				[0, 0, 0, -1],
				[0, 0, 0, -1],
				[0, 0, 0, -1]
			];
			totalPoints = 0; // ניקוד כולל
			totalTime = 0; // איפוס זמן כולל
		}
		
		// פונקציה שמתחילה את אותו משחק מחדש
		function restartCurrGame() {
			initializeGameInfo();
			fl_ClickToPosition();
		}
		
		// פונקציה שמחזירה את השחקן למסך הראשי כדי לבחור משחק חדש
		function chooseNewGame() {
			initializeGameInfo();
			createStartScreen();
		}
		
		/*---- סוף סגמנט פונקציות אתחול משחק ---- */
		
		/*---- פונקציות כלליות - תבניות שיוצרות דברים ---- */
		
		// פונקציה שיוצרת משהו בצורה דינאמית
		function createDynamic(linkage, x, y, objName, container) {
			var object = new linkage;
			object.x = x;
			object.y = y;
			object.name = objName;
			container.addChild(object);
			return (object);
		}
		
		// פונקציה שיוצרת טקסט בצורה דינאמי
		function createText(mycolor, myfont, myname, txt, myparent) {
			var mytext = new createjs.Text();
			mytext.color = mycolor;
			mytext.font = myfont;
			mytext.text = txt;
			mytext.name = myname;
			myparent.addChild(mytext);
			return mytext;
		}
		
		// פונקציה שמתאימה את גודל ומיקום התמונה למה שמכיל אותה
		function adjustPicScale(pic, w, h, scale) {
			// מרכוז התמונה ביחס להורה
			pic.regX += w / 2;
			pic.regY += h / 2;
		
			// התאמת גודל תמונה להורה
			if (w >= h) {
				pic.scaleX = scale / w;
				pic.scaleY = scale / w;
			} else {
				pic.scaleX = scale / h;
				pic.scaleY = scale / h;
			}
		}
		/*---- סוף סגמנט פונקציות כלליות ---- */
		
		/*---- פונקציות של שאלה ---- */
		
		// פונקציה שמגרילה שאלה חדשה ממערך המשחק
		function randomizeQuestion() {
			//הגרלת אינדקס של שאלה ממערך המשחק
			qNum = Math.floor(Math.random() * (myGame.length - 1)) + 1;
			console.log("what :" + myGame[qNum][0][3]);
		
			// אם הגרלנו שאלה שכבר ענו עליה, נרגיל שוב
			while (myGame[qNum][0][3]) {
				qNum = Math.floor(Math.random() * (myGame.length - 1)) + 1;
			}
			//qNum = 3;
		
			var tempAnswersArr = myGame[qNum].slice(1); // העתקת המסיחים למערך זמני
		
			console.log("qNum is " + qNum + " mygame is " + myGame[qNum]);
		
			// טעינת טקסט גזע השאלה לבועית דיבור
			createDynamic(lib.speechbubble, 715, 76.25, "speechbubble", qcont); // יצירת הבועה
			var speech = qcont.getChildByName("speechbubble"); // שומר את בועת הדיבור על הבמה
			console.log(speech);
			var qtext = createText("black", "18px Arial", "qtext", myGame[qNum][0][0], speech);
			qtext.lineWidth = 500; // גלישת שורה
			qtext.textAlign = "center"; // מרכוז אופקי של הטקסט בתוך התיבה
			qtext.textBaseline = "middle"; // מרכוז אנכי של הטקסט בתוך התיבה
			qtext.x = speech.nominalBounds.width / 2; // מרכוז אופקי לבועה
			qtext.y = speech.nominalBounds.y + 50; // מרכוז אנכי לבועה*/
		
			// יצירת טווחי השאלה
			var bottomRange = createText("white", "20px Arial", "bottom", myGame[qNum][0][1], qcont);
			bottomRange.x = 500;
			bottomRange.y = 680;
			var topRange = createText("white", "20px Arial", "top", myGame[qNum][0][2], qcont);
			topRange.x = 500;
			topRange.y = 30;
		
			// לולאה 1 - יוצרת אזורי גרירה
			for (var i = 0; i < myGame[qNum].length - 1; i++) {
				var myArea = new lib.area; // create instance from linkage in library
				myArea.x = areaX; // מיקום איקס
				myArea.y = i * areaGap + areaY; // מיקום ואי
				myArea.name = ("area" + (myGame[qNum].length - 2 - i)); // נתינת שם לאיזור גרירה - אינדקס גדל מלמטה למעלה
		
				// יצירת טקסט להצגת השם - לא יופיע במשחק, כרגע קיים לצורך הבחנה
				var areatext = new createjs.Text();
				areatext.color = "black";
				areatext.font = "18px Arial";
				areatext.text = tempAnswersArr[parseInt(myArea.name.charAt(4))][0];
				myArea.addChild(areatext);
		
				qcont.addChild(myArea); // יצירת המסיח על הבמה
				myArea.alpha = 0.5;
			}
		
			// לולאה 2 - יוצרת מסיחים בסדר אקראי
			for (var i = 0; i < myGame[qNum].length - 1; i++) {
				// יצירת מסיחים בסדר אקראי
				var rnd = Math.floor(Math.random() * tempAnswersArr.length);
				var qIndex = tempAnswersArr[rnd][1] // שליפת אינדקס המסיח
				var myBox = new lib.drag; // יצירה מהלינקג' בספריה
				myBox.x = dragX; // מיקום איקס
				myBox.y = i * dragGap + dragY; // מיקום ואי
				myBox.name = ("drag" + qIndex); //שם למסיח, שונה מהטקסט שבתוכו 
		
				qcont.addChild(myBox); // יצירת מסיח על הבמה
		
				// שמירת פרטי המסיח במערך - השמירה נעשית לפי מספר המסיח, כלומר מסיח 0 במיקום 0 וכן הלאה
				detailsArr[qIndex][0] = qIndex; //אינדקס
				detailsArr[qIndex][1] = myBox.x; // מיקום איקס
				detailsArr[qIndex][2] = myBox.y; // מיקום ואי
		
				// אם יש תמונה במסיח
				if (tempAnswersArr[rnd][2] == "pic") {
					//יצירת התמונה בתוך המסיח
					createDynamic(tempAnswersArr[rnd][0], 0, 0, ("pic" + qIndex), myBox);
					var pic = myBox.getChildByName("pic" + qIndex);
					adjustPicScale(pic, pic.getBounds().width, pic.getBounds().height, 0.1 * myBox.nominalBounds.width);
					// יצירת זכוכית מגדלת
					createDynamic(lib.glass, (0 + myBox.nominalBounds.width / 3), 0, ("glass" + qIndex), myBox);
					// הצמדת מאזינים לזכוכית מגדלה
					myBox.getChildByName("glass" + qIndex).addEventListener("mouseover", magnifyPic);
					myBox.getChildByName("glass" + qIndex).addEventListener("mouseout", exitMagnifyPic);
				}
				// אם יש טקסט במסיח
				else {
					//יצירת תיבת טקסט שתכיל את התוכן של המסיח
					var dragtext = createText("black", "18px Arial", ("dragtext" + qIndex), tempAnswersArr[rnd][0], myBox);
					dragtext.textAlign = "center"; // מרכוז אופקי של הטקסט בתוך התיבה
					dragtext.textBaseline = "middle"; // מרכוז אנכי של הטקסט בתוך התיבה
					dragtext.lineWidth = 300;
					//dragtext.x = myBox.nominalBounds.width / 2; // מרכוז אופקי של תיבת הטקסט לסיח
					//dragtext.y = myBox.nominalBounds.height / 2; // מרכוז אנכי של תיבת הטקסט למסיח
				}
				// הצמדת מאזיני פונקציות גרירה למסיחים
				myBox.addEventListener("pressmove", dragFunc);
				myBox.addEventListener("pressup", releaseDrag);
		
				tempAnswersArr.splice(rnd, 1); //לאחר שהמסיח נוצר על הבמה במיקום אקראי נמחק את התא שלו מהמערך הזמני
			}
		}
		
		//פונקציית גרירה - מופעלת בלחיצה על מסיח
		function dragFunc(evt) {
			//היכן בוצעה הלחיצה ביחס לבמה כולה
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		
			// שליפת מספר המסיח שגוררים
			var currNum = evt.currentTarget.name.charAt(4);
		
			//אם המסיח היה על איזור גרירה
			if (detailsArr[currNum][3] != -1) {
				dragareaArr[detailsArr[currNum][3]] = 0; // נסמן את איזור הגרירה כפנוי
				placedAnswers--; // המונה יורד
				bgcont.getChildByName("checkBtn").visible = false; // הסרת כפתור בדיקה
				detailsArr[currNum][3] = -1; // נסמן שהמסיח כבר לא על איזור גרירה
			}
		}
		
		// פונקציה של שחרור הגרירה
		function releaseDrag(evt) {
			var objNum = evt.currentTarget.name.charAt(4); // שליפת מספר המסיח
			var target; // משתנה שישמור כל אזור גרירה בתורות
			var hitArea = -1 // משתנה שישמור את מספר איזור הגרירה במקרה של פגיעה
			var hitX; // משתנה שישמור מיקום איקס של איור הגרירה במקרה של פגיעה
			var hitY; // משתנה שישמור את מיקום ואי של איזור הגרירה במקרה של פגיעה
		
			// רצים על כל אזורי הגרירה ובודקים אם הייתה פגיעה
			for (i = 0; i < myGame[qNum].length - 1; i++) {
				// שמירת איזור גרירה נוכחי
				target = qcont.getChildByName("area" + i);
		
				// הייתה פגיעה וגם איזור הגרירה פנוי
				if (intersect(evt.currentTarget, target) && dragareaArr[i] == 0) {
					// שמירת פרטי המסיח שבו פגענו
					hitArea = i;
					hitX = target.x;
					hitY = target.y;
					// עדכון מערך המסיחים - על מי המסיח יושב עכשיו
					detailsArr[objNum][3] = i;
					// סימון המסיח כמלא
					dragareaArr[i] = 1;
					break;
				}
			}
		
			// אם הייתה פגיעה
			if (hitArea != -1) {
				// המסיח מתיישב על איזור הגרירה
				evt.currentTarget.x = hitX;
				evt.currentTarget.y = hitY;
		
				// המונה עולה
				placedAnswers++;
			} else { //אם אין פגיעה המסיח חוזר למיקומו המקורי	
				evt.currentTarget.x = detailsArr[objNum][1];
				evt.currentTarget.y = detailsArr[objNum][2];
			}
			// אם כל המסיחים יושבים על אזורי גרירה, יוצרים את כפתור בדיקה
			if (placedAnswers == myGame[qNum].length - 1) {
				bgcont.getChildByName("checkBtn").visible = true; // הצגת הכפתור על הבמה
			}
		}
		
		//--- בדיקת חפיפה בין שני אובייקטים
		function intersect(obj1, obj2) {
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			} else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
		// בדיקת תשובה - האם המסיחים במקום הנכון
		function checkAnswers() {
			var correct = 0; // משתנה ששומר את מס' המסיחים שנגררו למקום הנכון
			clearInterval(timeInterval); // עצירת הטיימר
			for (var i = 0; i < myGame[qNum].length - 1; i++) {
				// אם המסיח תואם לאיזור הגרירה
				if (detailsArr[i][0] == detailsArr[i][3]) {
					correct++; // מונה מסיחים במקום הנכון עולה
				} else { // אם המסיח על אזור גרירה לא נכון
					// המסיח חוזר למיקומו המקורי
					qcont.getChildByName("drag" + i).x = detailsArr[i][1];
					qcont.getChildByName("drag" + i).y = detailsArr[i][2];
				}
		
				// הסרת כל המאזינים מהמסיחים
				qcont.getChildByName("drag" + i).removeEventListener("pressmove", dragFunc);
				qcont.getChildByName("drag" + i).removeEventListener("pressup", releaseDrag);
			}
		
			// העלמת כפתור בדיקה
			bgcont.getChildByName("checkBtn").visible = false;
		
			// הסרת מאזין מכפתור השהיה
			//bgcont.getChildByName("pauseBtn").removeEventListener("click", pauseGame);
			//bgcont.getChildByName("pauseBtn").gotoAndStop(1);
			bgcont.getChildByName("pauseBtn").visible = false;
		
			// משוב - כבאי וחתול
			bgcont.getChildByName("cat").visible = true; // בכל מקרה מראים את החתול
		
			//אם התשובה נכונה
			if (correct == myGame[qNum].length - 1) {
				console.log("correct!");
				answered++; // מונה שאלות שנענו נכון עולה
				myGame[qNum][0][3] = true; // סימון השאלה כפתורה
				bgcont.getChildByName("fireman").gotoAndPlay(1); // הכבאי שמח
				bgcont.getChildByName("cat").gotoAndPlay(1); // החתול שמח
		
				// מילוי בר התקדמות - הקפיצה מחושבת לפי מס' שאלות שנפתרו נכון חלקי מס' שאלות כולל
				bgcont.getChildByName("greenbar").scaleY = answered / totalQ;
		
				setTimeout(showRealLadder, 5000); // אחרי 5 שניות מעלימים את פרטי השאלה ויוצרים קרש אמיתי
		
				// ניקוד עבור תשובה נכונה: בכל פעם מגדילים בניקוד פר שאלה כפול ניסיונות המענה לשאלה
				totalPoints = totalPoints + 100 / ((myGame.length - 1) * myGame[qNum][0][4]);
				console.log(totalPoints);
			}
			//אם התשובה לא נכונה	
			else {
				console.log("at least one mistake...");
				bgcont.getChildByName("fireman").gotoAndPlay(95); // הכבאי עצוב
				// גם החתול עצוב
				setTimeout(function () {
					bgcont.getChildByName("cat").gotoAndPlay(117);
				}, 2000);
		
				bgcont.getChildByName("nextBtn").visible = true; // הצגת כפתור לשאלה הבאה
				myGame[qNum][0][4]++; // הגדלת מס' ניסיונות המענה לשאלה
				mistakes++; // הגדלת מונה השגיאות
			}
		}
		
		// אחרי האנימציה של הכבאי והחתול, פונקציה זו מעלימה את המסיחים ואזורי הגרירה ויוצרת קרש אמיתי 
		function showRealLadder() {
			console.log(answered);
			// הסרת אזורי גרירה ומסיחים מהמסך
			qcont.removeAllChildren();
		
			// הוספת קרש אמיתי
			for (var i = 0; i < answered; i++) {
				createDynamic(lib.plank, plankX, plankY - plankGap * (answered - 1), ("plank" + answered), laddercont);
			}
		
			// הסרת בר התקדמות
			bgcont.getChildByName("progress").visible = false;
			bgcont.getChildByName("greenbar").visible = false;
		
			// הצגת הסולם האמיתי
			laddercont.visible = true;
			console.log(answered);
		
			// הצגת כפתור לשאלה הבאה
			bgcont.getChildByName("nextBtn").visible = true;
		}
		
		// מעבר לשאלה הבאה
		function nextFunc() {
			//מחזירה את כפתור הפאוז להיות פעיל ולהראות פעיל
			//bgcont.getChildByName("pauseBtn").addEventListener("click", pauseGame);
			//bgcont.getChildByName("pauseBtn").gotoAndStop(0);
		
			bgcont.getChildByName("pauseBtn").visible = true;
		
			// בכל מקרה עוצרים את הזמן ומאתחלים את הטיימר
			clearInterval(timeInterval);
			timer = 30;
		
			// בכל מקרה מנקים את המסך מפרטי שאלה
			qcont.removeAllChildren();
		
			// בכל מקרה מסתירים את כפתור השאלה הבאה
			bgcont.getChildByName("nextBtn").visible = false;
		
			// בכל מקרה מסתירים את הסולם האמיתי
			laddercont.visible = false;
		
			// אם הלומד ענה  על כל השאלות עוברים למסך סיכום
			if (answered == totalQ) {
				console.log("finished!");
				// ניקוי המסך מכל האלמנטים שנשארו
				bgcont.removeAllChildren();
		
				// הצגת מסך סיום
				createDynamic(lib.endgame, 648.45, 356.65, "endgame", bgcont); // מסך הסיום
				var finalText = "סיימת את המשחק! \n כל הכבוד! עזרת לכבאי להגיע לחתלתול הכלוא \n ועכשיו הם מאושרים כל כך - תראו!\n\n ציון: " + parseInt(totalPoints) + "\n זמן (בשניות): " + totalTime + "\n מספר שגיאות: " + mistakes;
				var messageFinal = createText("black", "26px Arial", "endtext", finalText, bgcont.getChildByName("endgame"));
				messageFinal.textAlign = "center"; // מרכוז אופקי של הטקסט בתוך התיבה
				messageFinal.y = -100;
				createDynamic(lib.newgame, 731.05, 415.6, "newgame", bgcont); // יצירת כפתור משחק חדש
				bgcont.getChildByName("newgame").addEventListener("click", chooseNewGame);
				createDynamic(lib.playAgain, 453.9, 415.6, "playagain", bgcont); // יצירת כפתור שחק שוב
				bgcont.getChildByName("playagain").addEventListener("click", restartCurrGame);
			}
			// אם הלומד לא סיים, עוברים לשאלה הבאה
			else {
				// אתחול מערכים של מסיחים ואזורי גרירה
				detailsArr = [
					[0, 0, 0, -1],
					[0, 0, 0, -1],
					[0, 0, 0, -1],
					[0, 0, 0, -1],
					[0, 0, 0, -1],
					[0, 0, 0, -1]
				];
				dragareaArr = [0, 0, 0, 0, 0, 0];
				placedAnswers = 0; // איפוס המונה של כמה מסיחים נמצאים על איזור גרירה
		
				// החזרת כבאי וחתול למצב התחלתי
				bgcont.getChildByName("fireman").gotoAndStop(0);
				bgcont.getChildByName("cat").gotoAndStop(0);
				bgcont.getChildByName("cat").visible = false;
		
				// הצגת בר התקדמות
				bgcont.getChildByName("progress").visible = true;
				bgcont.getChildByName("greenbar").visible = true;
		
				// הטיימר ממשיך לרוץ
				timeInterval = setInterval(questionTimer, 1000);
		
				// הגרלת שאלה חדשה
				randomizeQuestion();
			}
		}
		
		// פונקציה שמגדילה תמונה במעבר עכבר
		function magnifyPic(evt) {
			// שליפת האינדקס של המסיח בו נמצאת התמונה
			var index = parseInt(evt.currentTarget.name.charAt(5));
			console.log(index);
		
			// יצירת הפופאפ לתמונה
			createDynamic(lib.magnify, 424.2, 360.95, "magnify", popupcont);
		
			// הכנסת התמונה
			createDynamic(myGame[qNum][index + 1][0], 0, 0, "bigpic", popupcont.getChildByName("magnify"));
			var pic = popupcont.getChildByName("magnify").getChildByName("bigpic");
		
			// התאמת גודל התמונה לפופאפ
			adjustPicScale(pic, pic.getBounds().width, pic.getBounds().height, scalePic);
		}
		
		// פונקציה שיוצאת מהגדלת תמונה
		function exitMagnifyPic() {
			popupcont.removeAllChildren();
		}
		
		/*---- סוף סגמנט פונקציות של שאלה ---- */
		
		/*---- פונקציות שקשורות לזמן ---- */
		
		// פונקציה שסופרת כמה שניות נשארו לענות על השאלה
		function questionTimer() {
			// מעבר זמן בתוך תיבת הטקסט
			bgcont.getChildByName("sun").getChildByName("timer").text = timer;
		
			//כאשר השחקן נמצא במשחק 15 שניות ולא הניח אף תשובה על איזור הגרירה (לא שיחק) החתול מציץ כועס
			//תזכורת לכך שטרם נקלט מענה
			if (timer == 15 && placedAnswers == 0) {
				console.log("youre in");
				console.log("answered" + placedAnswers);
				bgcont.getChildByName("cat").gotoAndStop(2);
				bgcont.getChildByName("cat").visible = true;
				setTimeout(function () {
					bgcont.getChildByName("cat").visible = false; //לאחר 2.5 שניות החתלתול נעלם
				}, 2500);
			}
		
			// נגמר הזמן
			if (timer == 0) {
				// ניקוי האינטרבל והפסקת הטיימר
				clearInterval(timeInterval);
				timer = 30;
		
				// מסך חצי שקוף + פופאפ נגמר הזמן
				createDynamic(lib.opac, 0, 0, "opac", popupcont);
				createDynamic(lib.Timeout, 250, 50, "Timeout", popupcont);
		
				// הסרת מאזינים מכל מה שלחיץ
				for (var i = 0; i < myGame[qNum].length - 1; i++) {
					qcont.getChildByName("drag" + i).removeEventListener("pressmove", dragFunc);
					qcont.getChildByName("drag" + i).removeEventListener("pressup", releaseDrag);
				}
		
				// הסרת כל האלמנטים של שאלה - מסיחים, אזורי גרירה, בועת דיבור
				qcont.removeAllChildren();
				// הסתרת כל האלמנטים
				bgcont.visible = false;
		
				// יצירת כפתור נגמר הזמן והצמדת מאזין
				createDynamic(lib.timeOver, 800, 450, "timeOver", popupcont);
				popupcont.getChildByName("timeOver").addEventListener("click", continueFunc);
		
			} else {
				timer--; //מוריד שניות
				totalTime++; //מוסיף לסך השניות במשחק
			}
		}
		
		// פונקציה שמשהה את המשחק
		function pauseGame() {
			// ניקוי האינטרבל והפסקת הטיימר
			clearInterval(timeInterval);
		
			// מסך חצי שקוף + פופאפ הפסקת אוכל
			createDynamic(lib.opac, 0, 0, "opac", popupcont);
			createDynamic(lib.takeaBreak, 250, 50, "takeaBreak", popupcont);
		
			//כפתור חזרה למשחק
			createDynamic(lib.resume, 800, 450, "resume", popupcont);
			popupcont.getChildByName("resume").addEventListener("click", resumeGame);
		
			// הסתרת תוכן
			qcont.visible = false;
			bgcont.visible = false;
		}
		
		// פונקציה שממשיכה את המשחק לאחר יציאה ממסך תם הזמן
		function continueFunc() {
			// הסרת המסך הלבן והחזרת אלמנטים שהוסתרו
			popupcont.removeAllChildren();
			bgcont.visible = true;
		
			// הגדלת מס' ניסיונות המענה לשאלה
			myGame[qNum][0][4]++;
		
			// הגדלת מונה השגיאות
			mistakes++;
		
			// מעבר לשאלה הבאה
			nextFunc();
		}
		
		// פונקציה "חזרה למשחק" לאחר השהיה
		function resumeGame() {
			// הסרת כל הפופאפים וכפתורי פופאפים
			popupcont.removeAllChildren();
		
			// הטיימר ממשיך לרוץ
			timeInterval = setInterval(questionTimer, 1000);
		
			// החזרת אלמנטים שהוסתרו
			qcont.visible = true;
			bgcont.visible = true;
		}
		
		/*---- סוף סגמנט פונקציות של זמן---- */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcamQgigIgTgbQgdAIgtgVQg4gbgTgCQgZgCgrANQgwAPgVABQgxABg6gsQghgZgLgHQgagQgYABQgOAAgTAHQgVAIgLADQgnANgqgKQgqgJgegcQgcgbgUgtQgMgdgPg4QgJgkgBgXQgBggAPgVQAJgMASgLIAfgTQAOgIAYgVQAZgVANgIQAigWAqgHQApgHAoAKQAShEAfhFQA5ADARgZQAEgGAEgNQAFgOAEgGQAKgPAUgEQAUgEASAIQAQAHAQAOIAbAbQATAUAPABQALAAANgHIAVgOQAhgUArAIQApAHAgAcQAaAXAXAnQAOAYAWAwQAUgaAoAFQAjAEAhAXIA7ArQAjAVAegDQAXgBAZgRQAPgKAagYIBShMQAWgUANgLQAVgPAUgHQAfgLAkAIQAiAIAcAWQAvAmAeBKQBtgMCCB0QATAQAEANQAFAQgJAeIhNENQgHAbgGANQgKAVgPALQgRANgYABQgWABgXgJQgRgGgYgNIgngXQg1gbg8gHQg9gGg5AQQhDAXghAIQg6AOglgVQgKgFglggQgcgYgXgCQglgDgmAsIgcAjQgRATgQAKQgTALgXAAQgKAAgMgDgAGUrwQgjgEgegTQgygggmhIQhiAWh/hTQgZAMgdgGIgQA5QgIAbgGANQgKAVgOALQgRANgZABQgWABgXgJQgRgGgXgNIgngXQg1gbg9gHQg8gGg6AQQhCAXghAIQg6AOgmgVQgJgFgmggQgbgYgXgCQglgDgmAsIgcAjQgRATgQAKQgdAQgkgIQgjgIgTgbQgcAIgugVQg4gbgTgCQgZgCgrANQgvAPgVABQgyABg5gsQghgZgMgHQgagQgXABQgOAAgTAHQgVAIgLADQgnANgqgKQgqgJgegcQgdgbgTgtQgMgdgPg4QgKgkgBgXQgBggAQgVQAJgMARgLIAfgTQAOgIAZgVQAZgVANgIQAigWApgHQApgHAoAKQAShEAghFQA4ADARgZQAEgGAFgNQAEgOAEgGQAKgPAVgEQATgEATAIQAPAHAQAOIAbAbQAUAUAPABQAKAAANgHIAWgOQAggUAsAIQAoAHAgAcQAbAXAXAnQAPAYAVAwQAVgaAoAFIAQADQAIgIALgHIAfgTQAOgIAZgVQAZgVANgIQAigWApgHQApgHAoAKQAShEAghFQA4ADARgZQAEgGAFgNQAEgOAEgGQAKgPAVgEQATgEATAIQAPAHAQAOIAbAbQAUAUAPABQAKAAANgHIAWgOQAggUAsAIQAoAHAgAcQAbAXAXAnQAPAYAUAwQAVgaAoAFQAjAEAgAXIA7ArQAjAVAegDQAYgBAYgRQAQgKAagYIBShMQAVgUAOgLQAUgPAUgHQAggLAjAIQAiAIAcAWQAvAmAeBKQA/gHBFAjQAPgUAOgLQAbgUAkAEQAkAFAVAZQAcgLAwARQA6AUATAAQAaAAApgSQAugUAUgCQAxgHA+AmQAkAWAMAFQAbANAXgDQAOgCATgIIAegPQAmgQArAFQAqAFAhAYQAfAYAYArQAPAbAVA2QANAjADAXQAFAggOAXQgHAMgRANIgcAWQgNAKgXAXQgWAXgNAKQgfAZgpAMQgnAKgpgFQgLBFgYBIQg5ADgOAaQgDAHgDAOQgDAOgEAHQgIAQgUAGQgTAFgUgGQgPgFgSgNQgIgFgWgSQgVgSgPABQgKAAgNAJIgUAPQgeAYgsgDQgpgDgjgYQgdgVgbgkQgRgWgbguQgRAcgoAAQgkgBgigUIgdgQQgNgBgOgGQgRgGgXgNIgLgGQgMgBgLACQgXADgXAUQgOALgYAaIhJBUQgUAXgMAMQgSASgUAIQgXAMgaAAIgRgCg");
	this.shape.setTransform(329.3532,237.6524);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77C5E6").s().p("EhkxAqQMAAAhUfMDJjAAAMAAABUfgEgw3AVfQAjAIAdgQQAQgKARgTIAcgjQAmgsAlADQAXACAbAYQAmAgAKAFQAlAVA6gOQAhgIBCgXQA6gQA8AGQA9AHA1AbIAnAXQAYANARAGQAXAJAWgBQAYgBARgNQAOgLAKgVQAHgNAHgbIBNkNQAJgegFgQQgFgNgSgQQiCh0htAMQgfhKgvgmQgbgWgjgIQgjgIgfALQgVAHgUAPQgOALgVAUIhSBMQgaAYgPAKQgZARgYABQgdADgkgVIg7grQgggXgjgEQgogFgVAaQgVgwgPgYQgWgngbgXQghgcgogHQgsgIggAUIgVAOQgOAHgKAAQgPgBgUgUIgbgbQgQgOgPgHQgSgIgUAEQgUAEgLAPQgEAGgEAOQgFANgEAGQgQAZg5gDQggBFgRBEQgogKgpAHQgqAHgiAWQgNAIgZAVQgYAVgOAIIggATQgRALgJAMQgPAVABAgQABAXAJAkQAPA4AMAdQAUAtAcAbQAeAcAqAJQAqAKAngNQALgDAVgIQATgHAOAAQAYgBAZAQQAMAHAhAZQA6AsAxgBQAVgBAvgPQAsgNAZACQASACA4AbQAuAVAdgIQASAbAkAIgEgsBgROQAfATAjAEQAjAFAfgPQAUgIASgSQAMgMATgXIBKhUQAYgaAOgLQAWgUAYgDQALgCAMAAIALAHQAXANARAGQAOAFANACIAcAQQAjAUAjABQApAAARgcQAbAuAQAWQAbAkAeAVQAjAYApADQAsADAegYIAUgPQAMgJAKAAQAPgBAWASQAWASAHAFQASANAQAFQAUAGASgFQAUgGAJgQQADgHADgOQADgOAEgHQAOgaA5gDQAYhIALhFQApAFAngKQApgMAfgZQAMgKAXgXQAXgXAMgKIAdgWQAQgNAIgMQANgXgEggQgDgXgOgjQgUg2gPgbQgZgrgegYQghgYgrgFQgqgFgnAQIgdAPQgTAIgOACQgYADgbgNQgLgFglgWQg9gmgxAHQgUACgvAUQgpASgZAAQgTAAg7gUQgvgRgcALQgVgZgkgFQgkgEgbAUQgPAKgOAVQhFgjg/AHQgehKgvgmQgcgWgigIQgjgIggALQgUAHgVAPQgNALgVAUIhTBMQgZAYgQAKQgZARgXABQgeADgjgVIg7grQgggXgkgEQgogFgUAaQgWgwgOgYQgXgngbgXQgggcgogHQgsgIghAUIgVAOQgNAHgLAAQgOgBgUgUIgbgbQgQgOgQgHQgSgIgTAEQgVAEgKAPQgEAGgEAOQgFANgEAGQgRAZg5gDQgfBFgSBEQgogKgpAHQgqAHghAWQgNAIgaAVQgYAVgOAIIgfATQgMAHgHAIIgQgDQgogFgVAaQgVgwgPgYQgXgngbgXQgggcgpgHQgrgIggAUIgWAOQgNAHgKAAQgPgBgUgUIgbgbQgQgOgPgHQgTgIgUAEQgUAEgKAPQgEAGgFAOQgEANgEAGQgRAZg4gDQggBFgSBEQgogKgpAHQgpAHgjAWQgMAIgZAVQgZAVgOAIIgfATQgSALgJAMQgPAVABAgQABAXAKAkQAPA4AMAdQATAtAcAbQAeAcAqAJQAqAKAngNQAMgDAVgIQASgHAOAAQAYgBAaAQQALAHAiAZQA5AsAygBQAUgBAwgPQArgNAZACQATACA4AbQAuAVAcgIQATAbAjAIQAjAIAdgQQARgKAQgTIAcgjQAngsAlADQAWACAcAYQAlAgAKAFQAmAVA6gOQAggIBDgXQA5gQA9AGQA8AHA2AbIAmAXQAYANARAGQAXAJAWgBQAZgBAQgNQAPgLAKgVQAGgNAHgbIARg5QAeAGAYgMQB/BTBigWQAmBIAyAgg");
	this.shape_1.setTransform(645,270.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#789649").s().p("EhljAOAIAA7/IBkAAMDJjAAAIAAb/g");
	this.shape_2.setTransform(640,630.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(630,360,660,360);
// library properties:
lib.properties = {
	id: 'D6121081ADF0354D90C6E124D57038E7',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/catsAndLadders_atlas_.png?1581973181115", id:"catsAndLadders_atlas_"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1581973181233", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1581973181233", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1581973181233", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['D6121081ADF0354D90C6E124D57038E7'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;