
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/filter/src/laya/filters/FilterAction.as=======199.999852/199.999852
//class laya.filters.FilterAction
var FilterAction=(function(){
	function FilterAction(){
		this.data=null;
	}

	__class(FilterAction,'laya.filters.FilterAction',true);
	var __proto=FilterAction.prototype;
	Laya.imps(__proto,{"laya.filters.IFilterAction":true})
	__proto.apply=function(data){
		return null;
	}

	return FilterAction;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/filter/src/laya/filters/WebGLFilter.as=======199.999851/199.999851
//class laya.filters.WebGLFilter
var WebGLFilter=(function(){
	function WebGLFilter(){}
	__class(WebGLFilter,'laya.filters.WebGLFilter',true);
	WebGLFilter.enable=function(){
		if (WebGLFilter.isInit)return;
		WebGLFilter.isInit=true;
		if (!Render.isWebGL)return;
		RunDriver.createFilterAction=function (type){
			var action;
			switch (type){
				case /*laya.filters.Filter.COLOR*/0x20:
					action=new ColorFilterActionGL();
					break ;
				case /*laya.filters.Filter.BLUR*/0x10:
					action=new BlurFilterActionGL();
					break ;
				case /*laya.filters.Filter.GLOW*/0x08:
					action=new GlowFilterActionGL();
					break ;
				}
			return action;
		}
	}

	WebGLFilter.isInit=false;
	WebGLFilter.__init$=function(){
		BlurFilterActionGL;
		ColorFilterActionGL;
		GlowFilterActionGL;
		Render;
		RunDriver;{
			RunDriver.createFilterAction=function (type){
				var action;
				switch (type){
					case /*laya.filters.Filter.BLUR*/0x10:
						action=new FilterAction();
						break ;
					case /*laya.filters.Filter.GLOW*/0x08:
						action=new FilterAction();
						break ;
					case /*laya.filters.Filter.COLOR*/0x20:
						action=new ColorFilterAction();
						break ;
					}
				return action;
			}
		}
	}

	return WebGLFilter;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/filter/src/laya/filters/BlurFilter.as=======98.999847/98.999847
//class laya.filters.BlurFilter extends laya.filters.Filter
var BlurFilter=(function(_super){
	function BlurFilter(strength){
		this.strength=NaN;
		this.strength_sig2_2sig2_gauss1=[];
		BlurFilter.__super.call(this);
		(strength===void 0)&& (strength=4);
		if (Render.isWebGL)WebGLFilter.enable();
		this.strength=strength;
		this._action=RunDriver.createFilterAction(0x10);
		this._action.data=this;
	}

	__class(BlurFilter,'laya.filters.BlurFilter',false,_super);
	var __proto=BlurFilter.prototype;
	__proto.callNative=function(sp){
		sp.conchModel &&sp.conchModel.blurFilter&&sp.conchModel.blurFilter(this.strength);
	}

	__getset(0,__proto,'type',function(){
		return 0x10;
	});

	__getset(0,__proto,'action',function(){
		return this._action;
	});

	return BlurFilter;
})(Filter)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/filter/src/laya/filters/GlowFilter.as=======98.999846/98.999846
//class laya.filters.GlowFilter extends laya.filters.Filter
var GlowFilter=(function(_super){
	function GlowFilter(color,blur,offX,offY){
		this._color=null;
		GlowFilter.__super.call(this);
		this._elements=new Float32Array(9);
		(blur===void 0)&& (blur=4);
		(offX===void 0)&& (offX=6);
		(offY===void 0)&& (offY=6);
		if (Render.isWebGL){
			WebGLFilter.enable();
		}
		this._color=new Color(color);
		this.blur=Math.min(blur,20);
		this.offX=offX;
		this.offY=offY;
		this._action=RunDriver.createFilterAction(0x08);
		this._action.data=this;
	}

	__class(GlowFilter,'laya.filters.GlowFilter',false,_super);
	var __proto=GlowFilter.prototype;
	__proto.getColor=function(){
		return this._color._color;
	}

	__proto.callNative=function(sp){
		sp.conchModel &&sp.conchModel.glowFilter&&sp.conchModel.glowFilter(this._color.strColor,this._elements[4],this._elements[5],this._elements[6]);
	}

	__getset(0,__proto,'blur',function(){
		return this._elements[4];
		},function(value){
		this._elements[4]=value;
	});

	__getset(0,__proto,'offY',function(){
		return this._elements[6];
		},function(value){
		this._elements[6]=value;
	});

	__getset(0,__proto,'offX',function(){
		return this._elements[5];
		},function(value){
		this._elements[5]=value;
	});

	__getset(0,__proto,'action',function(){
		return this._action;
	});

	__getset(0,__proto,'type',function(){
		return 0x08;
	});

	return GlowFilter;
})(Filter)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/filter/src/laya/filters/webgl/GlowFilterActionGL.as=======98.999695/98.999695
//class laya.filters.webgl.GlowFilterActionGL extends laya.filters.webgl.FilterActionGL
var GlowFilterActionGL=(function(_super){
	function GlowFilterActionGL(){
		this.data=null;
		this._initKey=false;
		this._textureWidth=0;
		this._textureHeight=0;
		GlowFilterActionGL.__super.call(this);
	}

	__class(GlowFilterActionGL,'laya.filters.webgl.GlowFilterActionGL',false,_super);
	var __proto=GlowFilterActionGL.prototype;
	Laya.imps(__proto,{"laya.filters.IFilterActionGL":true})
	__proto.setValueMix=function(shader){}
	__proto.apply3d=function(scope,sprite,context,x,y){
		var b=scope.getValue("bounds");
		scope.addValue("color",this.data.getColor());
		var w=b.width,h=b.height;
		this._textureWidth=w;
		this._textureHeight=h;
		var shaderValue;
		var mat=Matrix.TEMP;
		mat.identity();
		shaderValue=Value2D.create(/*laya.webgl.shader.d2.ShaderDefines2D.TEXTURE2D*/0x01,0);
		shaderValue.setFilters([this.data]);
		context.ctx.drawTarget(scope,0,0,this._textureWidth,this._textureHeight,mat,"src",shaderValue,null);
		shaderValue=Value2D.create(/*laya.webgl.shader.d2.ShaderDefines2D.TEXTURE2D*/0x01,0);
		context.ctx.drawTarget(scope,0,0,this._textureWidth,this._textureHeight,mat,"src",shaderValue);
		return null;
	}

	__proto.setSpriteWH=function(sprite){
		this._textureWidth=sprite.width;
		this._textureHeight=sprite.height;
	}

	__proto.setValue=function(shader){
		shader.u_offsetX=this.data.offX;
		shader.u_offsetY=-this.data.offY;
		shader.u_strength=1.0;
		shader.u_blurX=this.data.blur;
		shader.u_blurY=this.data.blur;
		shader.u_textW=this._textureWidth;
		shader.u_textH=this._textureHeight;
		shader.u_color=this.data.getColor();
	}

	__getset(0,__proto,'typeMix',function(){return /*laya.filters.Filter.GLOW*/0x08;});
	GlowFilterActionGL.tmpTarget=function(scope,sprite,context,x,y){
		var b=scope.getValue("bounds");
		var out=scope.getValue("out");
		out.end();
		var tmpTarget=RenderTarget2D.create(b.width,b.height);
		tmpTarget.start();
		var color=scope.getValue("color");
		if (color){
			tmpTarget.clear(color[0],color[1],color[2],0);
		}
		scope.addValue("tmpTarget",tmpTarget);
	}

	GlowFilterActionGL.startOut=function(scope,sprite,context,x,y){
		var tmpTarget=scope.getValue("tmpTarget");
		tmpTarget.end();
		var out=scope.getValue("out");
		out.start();
		var color=scope.getValue("color");
		if (color){
			out.clear(color[0],color[1],color[2],0);
		}
	}

	GlowFilterActionGL.recycleTarget=function(scope,sprite,context,x,y){
		var src=scope.getValue("src");
		var tmpTarget=scope.getValue("tmpTarget");
		tmpTarget.recycle();
	}

	return GlowFilterActionGL;
})(FilterActionGL)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/filter/src/laya/filters/webgl/BlurFilterActionGL.as=======98.999693/98.999693
//class laya.filters.webgl.BlurFilterActionGL extends laya.filters.webgl.FilterActionGL
var BlurFilterActionGL=(function(_super){
	function BlurFilterActionGL(){
		this.data=null;
		BlurFilterActionGL.__super.call(this);
	}

	__class(BlurFilterActionGL,'laya.filters.webgl.BlurFilterActionGL',false,_super);
	var __proto=BlurFilterActionGL.prototype;
	__proto.setValueMix=function(shader){
		shader.defines.add(this.data.type);
		var o=shader;
	}

	__proto.apply3d=function(scope,sprite,context,x,y){
		var b=scope.getValue("bounds");
		var shaderValue=Value2D.create(/*laya.webgl.shader.d2.ShaderDefines2D.TEXTURE2D*/0x01,0);
		shaderValue.setFilters([this.data]);
		var tMatrix=Matrix.EMPTY;
		tMatrix.identity();
		context.ctx.drawTarget(scope,0,0,b.width,b.height,Matrix.EMPTY,"src",shaderValue);
		shaderValue.setFilters(null);
	}

	__proto.setValue=function(shader){
		shader.strength=this.data.strength;
		var sigma=this.data.strength/3.0;
		var sigma2=sigma*sigma;
		this.data.strength_sig2_2sig2_gauss1[0]=this.data.strength;
		this.data.strength_sig2_2sig2_gauss1[1]=sigma2;
		this.data.strength_sig2_2sig2_gauss1[2]=2.0*sigma2;
		this.data.strength_sig2_2sig2_gauss1[3]=1.0/(2.0*Math.PI*sigma2);
		shader.strength_sig2_2sig2_gauss1=this.data.strength_sig2_2sig2_gauss1;
	}

	__getset(0,__proto,'typeMix',function(){return /*laya.filters.Filter.BLUR*/0x10;});
	return BlurFilterActionGL;
})(FilterActionGL)


	Laya.__init([WebGLFilter]);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}