
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/IItem.as=======1100000100.000119/1100000100.000119
Laya.interface('laya.ui.IItem');
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/IRender.as=======1100000100.000087/1100000100.000087
Laya.interface('laya.ui.IRender');
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/ISelect.as=======1100000100.000087/1100000100.000087
Laya.interface('laya.ui.ISelect');
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/IComponent.as=======1100000100.000058/1100000100.000058
Laya.interface('laya.ui.IComponent');
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/IBox.as=======1100000000.000142/1100000000.000142
Laya.interface('laya.ui.IBox','laya.ui.IComponent');
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/UIConfig.as=======199.999807/199.999807
//class UIConfig
var UIConfig=(function(){
	function UIConfig(){}
	__class(UIConfig,'UIConfig',true);
	UIConfig.touchScrollEnable=true;
	UIConfig.mouseWheelEnable=true;
	UIConfig.showButtons=true;
	UIConfig.popupBgColor="#000000";
	UIConfig.popupBgAlpha=0.5;
	UIConfig.closeDialogOnSide=true;
	return UIConfig;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Styles.as=======199.999798/199.999798
//class laya.ui.Styles
var Styles=(function(){
	function Styles(){}
	__class(Styles,'laya.ui.Styles',true);
	Styles.labelColor="#000000";
	Styles.buttonStateNum=3;
	Styles.scrollBarMinNum=15;
	Styles.scrollBarDelayTime=500;
	__static(Styles,
	['defaultSizeGrid',function(){return this.defaultSizeGrid=[4,4,4,4,0];},'labelPadding',function(){return this.labelPadding=[2,2,2,2];},'inputLabelPadding',function(){return this.inputLabelPadding=[1,1,1,3];},'buttonLabelColors',function(){return this.buttonLabelColors=["#32556b","#32cc6b","#ff0000","#C0C0C0"];},'comboBoxItemColors',function(){return this.comboBoxItemColors=["#5e95b6","#ffffff","#000000","#8fa4b1","#ffffff"];}
	]);
	return Styles;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/UIUtils.as=======199.999785/199.999785
//class laya.ui.UIUtils
var UIUtils=(function(){
	function UIUtils(){}
	__class(UIUtils,'laya.ui.UIUtils',true);
	UIUtils.fillArray=function(arr,str,type){
		var temp=arr.concat();
		if (str){
			var a=str.split(",");
			for (var i=0,n=Math.min(temp.length,a.length);i < n;i++){
				var value=a[i];
				temp[i]=(value=="true" ? true :(value=="false" ? false :value));
				if (type !=null)temp[i]=type(value);
			}
		}
		return temp;
	}

	UIUtils.toColor=function(color){
		return Utils.toHexColor(color);
	}

	UIUtils.gray=function(traget,isGray){
		(isGray===void 0)&& (isGray=true);
		if (isGray){
			UIUtils.addFilter(traget,UIUtils.grayFilter);
			}else {
			UIUtils.clearFilter(traget,ColorFilter);
		}
	}

	UIUtils.addFilter=function(target,filter){
		var filters=target.filters || [];
		filters.push(filter);
		target.filters=filters;
	}

	UIUtils.clearFilter=function(target,filterType){
		var filters=target.filters;
		if (filters !=null && filters.length > 0){
			for (var i=filters.length-1;i >-1;i--){
				var filter=filters[i];
				if (Laya.__typeof(filter,filterType))filters.splice(i,1);
			}
			target.filters=filters;
		}
	}

	UIUtils._getReplaceStr=function(word){
		return UIUtils.escapeSequence[word];
	}

	UIUtils.adptString=function(str){
		return str.replace(/\\(\w)/g,UIUtils._getReplaceStr);
	}

	UIUtils.getBindFun=function(value){
		var fun=UIUtils._funMap.get(value);
		if (fun==null){
			var temp="\""+value+"\"";
			temp=temp.replace(/^"\${|}"$/g,"").replace(/\${/g,"\"+").replace(/}/g,"+\"");
			var str="(function(data){if(data==null)return;with(data){try{\nreturn "+temp+"\n}catch(e){}}})";
			fun=Laya._runScript(str);
			UIUtils._funMap.set(value,fun);
		}
		return fun;
	}

	__static(UIUtils,
	['grayFilter',function(){return this.grayFilter=new ColorFilter([0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0.3086,0.6094,0.082,0,0,0,0,0,1,0]);},'escapeSequence',function(){return this.escapeSequence={"\\n":"\n","\\t":"\t"};},'_funMap',function(){return this._funMap=new WeakObject();}
	]);
	return UIUtils;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/LayoutStyle.as=======199.999779/199.999779
//class laya.ui.LayoutStyle
var LayoutStyle=(function(){
	function LayoutStyle(){
		this.enable=false;
		this.top=NaN;
		this.bottom=NaN;
		this.left=NaN;
		this.right=NaN;
		this.centerX=NaN;
		this.centerY=NaN;
		this.anchorX=NaN;
		this.anchorY=NaN;
	}

	__class(LayoutStyle,'laya.ui.LayoutStyle',true);
	__static(LayoutStyle,
	['EMPTY',function(){return this.EMPTY=new LayoutStyle();}
	]);
	return LayoutStyle;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/AutoBitmap.as=======98.999693/98.999693
//class laya.ui.AutoBitmap extends laya.display.Graphics
var AutoBitmap=(function(_super){
	function AutoBitmap(){
		this.autoCacheCmd=true;
		this._width=0;
		this._height=0;
		this._source=null;
		this._sizeGrid=null;
		this._isChanged=false;
		this._offset=null;
		AutoBitmap.__super.call(this);
	}

	__class(AutoBitmap,'laya.ui.AutoBitmap',false,_super);
	var __proto=AutoBitmap.prototype;
	__proto.destroy=function(){
		_super.prototype.destroy.call(this);
		this._source=null;
		this._sizeGrid=null;
		this._offset=null;
	}

	__proto._setChanged=function(){
		if (!this._isChanged){
			this._isChanged=true;
			Laya.timer.callLater(this,__bind(this,this.changeSource));
		}
	}

	__proto.changeSource=function(){
		this._isChanged=false;
		var source=this._source;
		if (!source || !source.bitmap)return;
		var width=this.width;
		var height=this.height;
		var sizeGrid=this._sizeGrid;
		var sw=source.sourceWidth;
		var sh=source.sourceHeight;
		if (!sizeGrid || (sw==width && sh==height)){
			this.cleanByTexture(source,this._offset ? this._offset[0] :0,this._offset ? this._offset[1] :0,width,height);
			}else {
			source.$_GID || (source.$_GID=Utils.getGID());
			var key=source.$_GID+"."+width+"."+height+"."+sizeGrid.join(".");
			if (Utils.isOKCmdList(WeakObject.I.get(key))){
				this.cmds=WeakObject.I.get(key);
				return;
			}
			this.clear();
			var top=sizeGrid[0];
			var right=sizeGrid[1];
			var bottom=sizeGrid[2];
			var left=sizeGrid[3];
			var repeat=sizeGrid[4];
			var needClip=false;
			if (width==sw){
				left=right=0;
			}
			if (height==sh){
				top=bottom=0;
			}
			if (left+right > width){
				var clipWidth=width;
				needClip=true;
				width=left+right;
				this.save();
				this.clipRect(0,0,clipWidth,height);
			}
			left && top && this.drawTexture(AutoBitmap.getTexture(source,0,0,left,top),0,0,left,top);
			right && top && this.drawTexture(AutoBitmap.getTexture(source,sw-right,0,right,top),width-right,0,right,top);
			left && bottom && this.drawTexture(AutoBitmap.getTexture(source,0,sh-bottom,left,bottom),0,height-bottom,left,bottom);
			right && bottom && this.drawTexture(AutoBitmap.getTexture(source,sw-right,sh-bottom,right,bottom),width-right,height-bottom,right,bottom);
			top && this.drawBitmap(repeat,AutoBitmap.getTexture(source,left,0,sw-left-right,top),left,0,width-left-right,top);
			bottom && this.drawBitmap(repeat,AutoBitmap.getTexture(source,left,sh-bottom,sw-left-right,bottom),left,height-bottom,width-left-right,bottom);
			left && this.drawBitmap(repeat,AutoBitmap.getTexture(source,0,top,left,sh-top-bottom),0,top,left,height-top-bottom);
			right && this.drawBitmap(repeat,AutoBitmap.getTexture(source,sw-right,top,right,sh-top-bottom),width-right,top,right,height-top-bottom);
			this.drawBitmap(repeat,AutoBitmap.getTexture(source,left,top,sw-left-right,sh-top-bottom),left,top,width-left-right,height-top-bottom);
			if (needClip)this.restore();
			if (this.autoCacheCmd && !Render.isConchApp)WeakObject.I.set(key,this.cmds);
		}
		this._repaint();
	}

	__proto.drawBitmap=function(repeat,tex,x,y,width,height){
		(width===void 0)&& (width=0);
		(height===void 0)&& (height=0);
		if (width < 0.1 || height < 0.1)return;
		if (repeat && (tex.width !=width || tex.height !=height))this.fillTexture(tex,x,y,width,height);
		else this.drawTexture(tex,x,y,width,height);
	}

	__proto.clear=function(recoverCmds){
		(recoverCmds===void 0)&& (recoverCmds=true);
		_super.prototype.clear.call(this,false);
	}

	__getset(0,__proto,'source',function(){
		return this._source;
		},function(value){
		if (value){
			this._source=value
			this._setChanged();
			}else {
			this._source=null;
			this.clear();
		}
	});

	__getset(0,__proto,'height',function(){
		if (this._height)return this._height;
		if (this._source)return this._source.sourceHeight;
		return 0;
		},function(value){
		if (this._height !=value){
			this._height=value;
			this._setChanged();
		}
	});

	__getset(0,__proto,'width',function(){
		if (this._width)return this._width;
		if (this._source)return this._source.sourceWidth;
		return 0;
		},function(value){
		if (this._width !=value){
			this._width=value;
			this._setChanged();
		}
	});

	__getset(0,__proto,'sizeGrid',function(){
		return this._sizeGrid;
		},function(value){
		this._sizeGrid=value;
		this._setChanged();
	});

	AutoBitmap.getTexture=function(tex,x,y,width,height){
		if (width <=0)width=1;
		if (height <=0)height=1;
		tex.$_GID || (tex.$_GID=Utils.getGID())
		var key=tex.$_GID+"."+x+"."+y+"."+width+"."+height;
		var texture=WeakObject.I.get(key);
		if (!texture||!texture.source){
			texture=Texture.createFromTexture(tex,x,y,width,height);
			WeakObject.I.set(key,texture);
		}
		return texture;
	}

	return AutoBitmap;
})(Graphics)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/UIEvent.as=======98.999679/98.999679
//class laya.ui.UIEvent extends laya.events.Event
var UIEvent=(function(_super){
	function UIEvent(){
		UIEvent.__super.call(this);;
	}

	__class(UIEvent,'laya.ui.UIEvent',false,_super);
	UIEvent.SHOW_TIP="showtip";
	UIEvent.HIDE_TIP="hidetip";
	return UIEvent;
})(Event)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Component.as=======96.999683/96.999683
//class laya.ui.Component extends laya.display.Sprite
var Component=(function(_super){
	function Component(){
		this._comXml=null;
		this._dataSource=null;
		this._toolTip=null;
		this._tag=null;
		this._disabled=false;
		this._gray=false;
		this.layoutEnabled=true;
		Component.__super.call(this);
		this._layout=LayoutStyle.EMPTY;
		this.preinitialize();
		this.createChildren();
		this.initialize();
	}

	__class(Component,'laya.ui.Component',false,_super);
	var __proto=Component.prototype;
	Laya.imps(__proto,{"laya.ui.IComponent":true})
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._dataSource=this._layout=null;
		this._tag=null;
		this._toolTip=null;
	}

	__proto.preinitialize=function(){}
	__proto.createChildren=function(){}
	__proto.initialize=function(){}
	__proto.callLater=function(method,args){
		Laya.timer.callLater(this,method,args);
	}

	__proto.runCallLater=function(method){
		Laya.timer.runCallLater(this,method);
	}

	__proto.commitMeasure=function(){}
	__proto.changeSize=function(){
		this.event(/*laya.events.Event.RESIZE*/"resize");
	}

	__proto.getLayout=function(){
		this._layout==LayoutStyle.EMPTY && (this._layout=new LayoutStyle());
		return this._layout;
	}

	__proto._setLayoutEnabled=function(value){
		if (this._layout && this._layout.enable !=value){
			this._layout.enable=value;
			this.on(/*laya.events.Event.ADDED*/"added",this,__bind(this,this.onAdded));
			this.on(/*laya.events.Event.REMOVED*/"removed",this,__bind(this,this.onRemoved));
			if (this.parent){
				this.onAdded();
			}
		}
	}

	__proto.onRemoved=function(){
		this.parent.off(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onCompResize));
	}

	__proto.onAdded=function(){
		this.parent.on(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onCompResize));
		this.resetLayoutX();
		this.resetLayoutY();
	}

	__proto.onCompResize=function(){
		if (this._layout && this._layout.enable){
			this.resetLayoutX();
			this.resetLayoutY();
		}
	}

	__proto.resetLayoutX=function(){
		var layout=this._layout;
		if (!isNaN(layout.anchorX))this.pivotX=layout.anchorX *this.width;
		if (!this.layoutEnabled)return;
		var parent=this.parent;
		if (parent){
			if (!isNaN(layout.centerX)){
				this.x=Math.round((parent.width-this.displayWidth)*0.5+layout.centerX+this.pivotX *this.scaleX);
				}else if (!isNaN(layout.left)){
				this.x=Math.round(layout.left+this.pivotX *this.scaleX);
				if (!isNaN(layout.right)){
					this.width=(parent._width-layout.left-layout.right)/ (this.scaleX || 0.01);
				}
				}else if (!isNaN(layout.right)){
				this.x=Math.round(parent.width-this.displayWidth-layout.right+this.pivotX *this.scaleX);
			}
		}
	}

	__proto.resetLayoutY=function(){
		var layout=this._layout;
		if (!isNaN(layout.anchorY))this.pivotY=layout.anchorY *this.height;
		if (!this.layoutEnabled)return;
		var parent=this.parent;
		if (parent){
			if (!isNaN(layout.centerY)){
				this.y=Math.round((parent.height-this.displayHeight)*0.5+layout.centerY+this.pivotY *this.scaleY);
				}else if (!isNaN(layout.top)){
				this.y=Math.round(layout.top+this.pivotY *this.scaleY);
				if (!isNaN(layout.bottom)){
					this.height=(parent._height-layout.top-layout.bottom)/ (this.scaleY || 0.01);
				}
				}else if (!isNaN(layout.bottom)){
				this.y=Math.round(parent.height-this.displayHeight-layout.bottom+this.pivotY *this.scaleY);
			}
		}
	}

	__proto.onMouseOver=function(e){
		Laya.stage.event(/*laya.ui.UIEvent.SHOW_TIP*/"showtip",this._toolTip);
	}

	__proto.onMouseOut=function(e){
		Laya.stage.event(/*laya.ui.UIEvent.HIDE_TIP*/"hidetip",this._toolTip);
	}

	__getset(0,__proto,'disabled',function(){
		return this._disabled;
		},function(value){
		if (value!=this._disabled){
			this.gray=this._disabled=value;
			this.mouseEnabled=!value;
		}
	});

	__getset(0,__proto,'gray',function(){
		return this._gray;
		},function(value){
		if (value!=this._gray){
			this._gray=value;
			UIUtils.gray(this,value);
		}
	});

	__getset(0,__proto,'tag',function(){
		return this._tag;
		},function(value){
		this._tag=value;
	});

	__getset(0,__proto,'anchorY',function(){
		return this._layout.anchorY;
		},function(value){
		if (value !=this._layout.anchorY){
			this.getLayout().anchorY=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutY();
	});

	__getset(0,__proto,'toolTip',function(){
		return this._toolTip;
		},function(value){
		if (this._toolTip !=value){
			this._toolTip=value;
			if (value !=null){
				this.on(/*laya.events.Event.MOUSE_OVER*/"mouseover",this,__bind(this,this.onMouseOver));
				this.on(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.onMouseOut));
				}else {
				this.off(/*laya.events.Event.MOUSE_OVER*/"mouseover",this,__bind(this,this.onMouseOver));
				this.off(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.onMouseOut));
			}
		}
	});

	__getset(0,__proto,'anchorX',function(){
		return this._layout.anchorX;
		},function(value){
		if (value !=this._layout.anchorX){
			this.getLayout().anchorX=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutX();
	});

	__getset(0,__proto,'centerY',function(){
		return this._layout.centerY;
		},function(value){
		if (value !=this._layout.centerY){
			this.getLayout().centerY=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutY();
	});

	__getset(0,__proto,'right',function(){
		return this._layout.right;
		},function(value){
		if (value !=this._layout.right){
			this.getLayout().right=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutX();
	});

	__getset(0,__proto,'dataSource',function(){
		return this._dataSource;
		},function(value){
		this._dataSource=value;
		for (var prop in this._dataSource){
			if (this.hasOwnProperty(prop)&& !((typeof (this[prop])=='function'))){
				this[prop]=this._dataSource[prop];
			}
		}
	});

	__getset(0,__proto,'scaleY',_super.prototype._$get_scaleY,function(value){
		if (Laya.superGet(Sprite,this,'scaleY')!=value){
			Laya.superSet(Sprite,this,'scaleY',value);
			this.callLater(__bind(this,this.changeSize));
			this._layout.enable && this.resetLayoutY();
		}
	});

	__getset(0,__proto,'left',function(){
		return this._layout.left;
		},function(value){
		if (value !=this._layout.left){
			this.getLayout().left=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutX();
	});

	__getset(0,__proto,'bottom',function(){
		return this._layout.bottom;
		},function(value){
		if (value !=this._layout.bottom){
			this.getLayout().bottom=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutY();
	});

	__getset(0,__proto,'top',function(){
		return this._layout.top;
		},function(value){
		if (value !=this._layout.top){
			this.getLayout().top=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutY();
	});

	__getset(0,__proto,'scaleX',_super.prototype._$get_scaleX,function(value){
		if (Laya.superGet(Sprite,this,'scaleX')!=value){
			Laya.superSet(Sprite,this,'scaleX',value);
			this.callLater(__bind(this,this.changeSize));
			this._layout.enable && this.resetLayoutX();
		}
	});

	__getset(0,__proto,'comXml',function(){
		return this._comXml;
		},function(value){
		this._comXml=value;
	});

	__getset(0,__proto,'measureHeight',function(){
		var max=0;
		this.commitMeasure();
		for (var i=this.numChildren-1;i >-1;i--){
			var comp=this.getChildAt(i);
			if (comp.visible){
				max=Math.max(comp.y+comp.height *comp.scaleY,max);
			}
		}
		return max;
	});

	__getset(0,__proto,'displayWidth',function(){
		return this.width *this.scaleX;
	});

	__getset(0,__proto,'centerX',function(){
		return this._layout.centerX;
		},function(value){
		if (value !=this._layout.centerX){
			this.getLayout().centerX=value;
			this._setLayoutEnabled(true);
		}
		this.resetLayoutX();
	});

	__getset(0,__proto,'measureWidth',function(){
		var max=0;
		this.commitMeasure();
		for (var i=this.numChildren-1;i >-1;i--){
			var comp=this.getChildAt(i);
			if (comp.visible){
				max=Math.max(comp.x+comp.width *comp.scaleX,max);
			}
		}
		return max;
	});

	__getset(0,__proto,'displayHeight',function(){
		return this.height *this.scaleY;
	});

	__getset(0,__proto,'height',function(){
		if (this._height)return this._height;
		return this.measureHeight;
		},function(value){
		if (this._height !=value){
			this._height=value;
			this.conchModel && this.conchModel.size(this._width,this._height);
			this.callLater(__bind(this,this.changeSize));
			if (this._layout.enable && (!isNaN(this._layout.centerY)|| !isNaN(this._layout.bottom)|| !isNaN(this._layout.anchorY)))this.resetLayoutY();
		}
	});

	__getset(0,__proto,'width',function(){
		if (this._width)return this._width;
		return this.measureWidth;
		},function(value){
		if (this._width !=value){
			this._width=value;
			this.conchModel && this.conchModel.size(this._width,this._height);
			this.callLater(__bind(this,this.changeSize));
			if (this._layout.enable && (!isNaN(this._layout.centerX)|| !isNaN(this._layout.right)|| !isNaN(this._layout.anchorX)))this.resetLayoutX();
		}
	});

	return Component;
})(Sprite)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/DialogManager.as=======96.999642/96.999642
//class laya.ui.DialogManager extends laya.display.Sprite
var DialogManager=(function(_super){
	function DialogManager(){
		this.lockLayer=null;
		this.popupEffect=function(dialog){
			dialog.scale(1,1);
			Tween.from(dialog,{x:Laya.stage.width / 2,y:Laya.stage.height / 2,scaleX:0,scaleY:0},300,Ease.backOut,Handler.create(this,__bind(_$this,_$this.doOpen),[dialog]));
		}
		this.closeEffect=function(dialog,type){
			Tween.to(dialog,{x:Laya.stage.width / 2,y:Laya.stage.height / 2,scaleX:0,scaleY:0},300,Ease.strongOut,Handler.create(this,__bind(_$this,_$this.doClose),[dialog,type]));
		}
		DialogManager.__super.call(this);
		this.maskLayer=new Sprite();
		this.popupEffectHandler=new Handler(this,this.popupEffect);
		this.closeEffectHandler=new Handler(this,this.closeEffect);
		this.mouseEnabled=this.maskLayer.mouseEnabled=true;
		this.zOrder=1000;
		Laya.stage.addChild(this);
		Laya.stage.on(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this._onResize));
		if (UIConfig.closeDialogOnSide)this.maskLayer.on("click",this,__bind(this,this._closeOnSide));
		this._onResize(null);
	}

	__class(DialogManager,'laya.ui.DialogManager',false,_super);
	var __proto=DialogManager.prototype;
	__proto._closeOnSide=function(){
		var dialog=this.getChildAt(this.numChildren-1);
		if ((dialog instanceof laya.ui.Dialog ))dialog.close("side");
	}

	__proto.setLockView=function(value){
		if (!this.lockLayer){
			this.lockLayer=new Box();
			this.lockLayer.mouseEnabled=true;
			this.lockLayer.size(Laya.stage.width,Laya.stage.height);
		}
		this.lockLayer.removeChildren();
		if (value){
			value.centerX=value.centerY=0;
			this.lockLayer.addChild(value);
		}
	}

	__proto._onResize=function(e){
		var width=this.maskLayer.width=Laya.stage.width;
		var height=this.maskLayer.height=Laya.stage.height;
		if (this.lockLayer)this.lockLayer.size(width,height);
		this.maskLayer.graphics.clear();
		this.maskLayer.graphics.drawRect(0,0,width,height,UIConfig.popupBgColor);
		this.maskLayer.alpha=UIConfig.popupBgAlpha;
		for (var i=this.numChildren-1;i >-1;i--){
			var item=this.getChildAt(i);
			if (item.popupCenter)this._centerDialog(item);
		}
	}

	__proto._centerDialog=function(dialog){
		dialog.x=Math.round(((Laya.stage.width-dialog.width)>> 1)+dialog.pivotX);
		dialog.y=Math.round(((Laya.stage.height-dialog.height)>> 1)+dialog.pivotY);
	}

	__proto.open=function(dialog,closeOther,showEffect){
		(closeOther===void 0)&& (closeOther=false);
		(showEffect===void 0)&& (showEffect=false);
		if (closeOther)this._closeAll();
		if (dialog.popupCenter)this._centerDialog(dialog);
		this.addChild(dialog);
		if (dialog.isModal || this._$P["hasZorder"])this.timer.callLater(this,__bind(this,this._checkMask));
		if (showEffect && dialog.popupEffect !=null)dialog.popupEffect.runWith(dialog);
		else this.doOpen(dialog);
		this.event(/*laya.events.Event.OPEN*/"open");
	}

	__proto.doOpen=function(dialog){
		dialog.onOpened();
	}

	__proto.lock=function(value){
		if (this.lockLayer){
			if (value)this.addChild(this.lockLayer);
			else this.lockLayer.removeSelf();
		}
	}

	__proto.close=function(dialog,type,showEffect){
		(showEffect===void 0)&& (showEffect=false);
		if (showEffect && dialog.closeEffect !=null)dialog.closeEffect.runWith([dialog,type]);
		else this.doClose(dialog,type);
		this.event(/*laya.events.Event.CLOSE*/"close");
	}

	__proto.doClose=function(dialog,type){
		dialog.removeSelf();
		dialog.isModal && this._checkMask();
		dialog.closeHandler && dialog.closeHandler.runWith(type);
		dialog.onClosed(type);
	}

	__proto.closeAll=function(){
		this._closeAll();
		this.event(/*laya.events.Event.CLOSE*/"close");
	}

	__proto._closeAll=function(){
		for (var i=this.numChildren-1;i >-1;i--){
			var item=this.getChildAt(i);
			if (item && item.close !=null){
				this.doClose(item);
			}
		}
	}

	__proto.getDialogsByGroup=function(group){
		var arr=[];
		for (var i=this.numChildren-1;i >-1;i--){
			var item=this.getChildAt(i);
			if (item && item.group==group){
				arr.push(item);
			}
		}
		return arr;
	}

	__proto.closeByGroup=function(group){
		var arr=[];
		for (var i=this.numChildren-1;i >-1;i--){
			var item=this.getChildAt(i);
			if (item && item.group==group){
				item.close();
				arr.push(item);
			}
		}
		return arr;
	}

	__proto._checkMask=function(){
		this.maskLayer.removeSelf();
		for (var i=this.numChildren-1;i >-1;i--){
			var dialog=this.getChildAt(i);
			if (dialog && dialog.isModal){
				this.addChildAt(this.maskLayer,i);
				return;
			}
		}
	}

	return DialogManager;
})(Sprite)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Box.as=======95.999488/95.999488
//class laya.ui.Box extends laya.ui.Component
var Box=(function(_super){
	function Box(){
		Box.__super.call(this);;
	}

	__class(Box,'laya.ui.Box',false,_super);
	var __proto=Box.prototype;
	Laya.imps(__proto,{"laya.ui.IBox":true})
	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		for (var name in value){
			var comp=this.getChildByName(name);
			if (comp)comp.dataSource=value[name];
			else if (this.hasOwnProperty(name)&& !((typeof (this[name])=='function')))this[name]=value[name];
		}
	});

	return Box;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Slider.as=======95.999485/95.999485
//class laya.ui.Slider extends laya.ui.Component
var Slider=(function(_super){
	function Slider(skin){
		this.changeHandler=null;
		this.isVertical=true;
		this.showLabel=true;
		this._allowClickBack=false;
		this._max=100;
		this._min=0;
		this._tick=1;
		this._value=0;
		this._skin=null;
		this._bg=null;
		this._progress=null;
		this._bar=null;
		this._tx=NaN;
		this._ty=NaN;
		this._maxMove=NaN;
		this._globalSacle=null;
		Slider.__super.call(this);
		this.skin=skin;
	}

	__class(Slider,'laya.ui.Slider',false,_super);
	var __proto=Slider.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._bg && this._bg.destroy(destroyChild);
		this._bar && this._bar.destroy(destroyChild);
		this._progress && this._progress.destroy(destroyChild);
		this._bg=null;
		this._bar=null;
		this._progress=null;
		this.changeHandler=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._bg=new Image$2());
		this.addChild(this._bar=new Button());
	}

	__proto.initialize=function(){
		this._bar.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onBarMouseDown));
		this._bg.sizeGrid=this._bar.sizeGrid="4,4,4,4,0";
		if (this._progress)this._progress.sizeGrid=this._bar.sizeGrid;
		this.allowClickBack=true;
	}

	__proto.onBarMouseDown=function(e){
		this._globalSacle || (this._globalSacle=new Point());
		this._globalSacle.setTo(this.globalScaleX || 0.01,this.globalScaleY || 0.01);
		this._maxMove=this.isVertical ? (this.height-this._bar.height):(this.width-this._bar.width);
		this._tx=Laya.stage.mouseX;
		this._ty=Laya.stage.mouseY;
		Laya.stage.on(/*laya.events.Event.MOUSE_MOVE*/"mousemove",this,__bind(this,this.mouseMove));
		Laya.stage.once(/*laya.events.Event.MOUSE_UP*/"mouseup",this,__bind(this,this.mouseUp));
		Laya.stage.once(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.mouseUp));
		this.showValueText();
	}

	__proto.showValueText=function(){
		if (this.showLabel){
			var label=laya.ui.Slider.label;
			this.addChild(label);
			label.textField.changeText(this._value+"");
			if (this.isVertical){
				label.x=this._bar.x+20;
				label.y=(this._bar.height-label.height)*0.5+this._bar.y;
				}else {
				label.y=this._bar.y-20;
				label.x=(this._bar.width-label.width)*0.5+this._bar.x;
			}
		}
	}

	__proto.hideValueText=function(){
		laya.ui.Slider.label && laya.ui.Slider.label.removeSelf();
	}

	__proto.mouseUp=function(e){
		Laya.stage.off(/*laya.events.Event.MOUSE_MOVE*/"mousemove",this,__bind(this,this.mouseMove));
		Laya.stage.off(/*laya.events.Event.MOUSE_UP*/"mouseup",this,__bind(this,this.mouseUp));
		Laya.stage.off(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.mouseUp));
		this.sendChangeEvent(/*laya.events.Event.CHANGED*/"changed");
		this.hideValueText();
	}

	__proto.mouseMove=function(e){
		var oldValue=this._value;
		if (this.isVertical){
			this._bar.y+=(Laya.stage.mouseY-this._ty)/ this._globalSacle.y;
			if (this._bar.y > this._maxMove)this._bar.y=this._maxMove;
			else if (this._bar.y < 0)this._bar.y=0;
			this._value=this._bar.y / this._maxMove *(this._max-this._min)+this._min;
			if(this._progress)this._progress.height=this._bar.y+0.5*this._bar.height;
			}else {
			this._bar.x+=(Laya.stage.mouseX-this._tx)/ this._globalSacle.x;
			if (this._bar.x > this._maxMove)this._bar.x=this._maxMove;
			else if (this._bar.x < 0)this._bar.x=0;
			this._value=this._bar.x / this._maxMove *(this._max-this._min)+this._min;
			if(this._progress)this._progress.width=this._bar.x+0.5*this._bar.width;
		}
		this._tx=Laya.stage.mouseX;
		this._ty=Laya.stage.mouseY;
		var pow=Math.pow(10,(this._tick+"").length-1);
		this._value=Math.round(Math.round(this._value / this._tick)*this._tick *pow)/ pow;
		if (this._value !=oldValue){
			this.sendChangeEvent();
		}
		this.showValueText();
	}

	__proto.sendChangeEvent=function(type){
		(type===void 0)&& (type=/*laya.events.Event.CHANGE*/"change");
		this.event(type);
		this.changeHandler && this.changeHandler.runWith(this._value);
	}

	__proto.setBarPoint=function(){
		if (this.isVertical)this._bar.x=Math.round((this._bg.width-this._bar.width)*0.5);
		else this._bar.y=Math.round((this._bg.height-this._bar.height)*0.5);
	}

	__proto.changeSize=function(){
		_super.prototype.changeSize.call(this);
		if (this.isVertical)this._bg.height=this.height;
		else this._bg.width=this.width;
		this.setBarPoint();
		this.changeValue();
	}

	__proto.setSlider=function(min,max,value){
		this._value=-1;
		this._min=min;
		this._max=max > min ? max :min;
		this.value=value < min ? min :value > max ? max :value;
	}

	__proto.changeValue=function(){
		var pow=Math.pow(10,(this._tick+"").length-1);
		this._value=Math.round(Math.round(this._value / this._tick)*this._tick *pow)/ pow;
		this._value=this._value > this._max ? this._max :this._value < this._min ? this._min :this._value;
		var num=this._max-this._min;
		if (num==0)num=1;
		if (this.isVertical){
			this._bar.y=(this._value-this._min)/ num *(this.height-this._bar.height);
			if(this._progress)this._progress.height=this._bar.y+0.5*this._bar.height;
		}
		else{
			this._bar.x=(this._value-this._min)/ num *(this.width-this._bar.width);
			if(this._progress)this._progress.width=this._bar.x+0.5*this._bar.width;
		}
	}

	__proto.onBgMouseDown=function(e){
		var point=this._bg.getMousePoint();
		if (this.isVertical)this.value=point.y / (this.height-this._bar.height)*(this._max-this._min)+this._min;
		else this.value=point.x / (this.width-this._bar.width)*(this._max-this._min)+this._min;
	}

	__getset(0,__proto,'bar',function(){
		return this._bar;
	});

	__getset(0,__proto,'allowClickBack',function(){
		return this._allowClickBack;
		},function(value){
		if (this._allowClickBack !=value){
			this._allowClickBack=value;
			if (value)this._bg.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onBgMouseDown));
			else this._bg.off(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onBgMouseDown));
		}
	});

	__getset(0,__proto,'min',function(){
		return this._min;
		},function(value){
		if (this._min !=value){
			this._min=value;
			this.callLater(__bind(this,this.changeValue));
		}
	});

	__getset(0,__proto,'max',function(){
		return this._max;
		},function(value){
		if (this._max !=value){
			this._max=value;
			this.callLater(__bind(this,this.changeValue));
		}
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if ((typeof value=='number')|| (typeof value=='string'))this.value=Number(value);
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'value',function(){
		return this._value;
		},function(num){
		if (this._value !=num){
			var oldValue=this._value;
			this._value=num;
			this.changeValue();
			if (this._value !=oldValue){
				this.sendChangeEvent();
			}
		}
	});

	__getset(0,__proto,'measureHeight',function(){
		return Math.max(this._bg.height,this._bar.height);
	});

	__getset(0,__proto,'measureWidth',function(){
		return Math.max(this._bg.width,this._bar.width);
	});

	__getset(0,__proto,'tick',function(){
		return this._tick;
		},function(value){
		if (this._tick !=value){
			this._tick=value;
			this.callLater(__bind(this,this.changeValue));
		}
	});

	__getset(0,__proto,'sizeGrid',function(){
		return this._bg.sizeGrid;
		},function(value){
		this._bg.sizeGrid=value;
		this._bar.sizeGrid=value;
		if (this._progress)this._progress.sizeGrid=this._bar.sizeGrid;
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			this._bg.skin=this._skin;
			this._bar.skin=this._skin.replace(".png","$bar.png");
			var progressSkin=this._skin.replace(".png","$progress.png");
			if (Loader.getRes(progressSkin)){
				if (!this._progress){
					this.addChild(this._progress=new Image$2());
					this._progress.sizeGrid=this._bar.sizeGrid;
					this.setChildIndex(this._progress,1);
				}
				this._progress.skin=progressSkin;
			}
			this.setBarPoint();
			this.callLater(__bind(this,this.changeValue));
		}
	});

	__static(Slider,
	['label',function(){return this.label=new Label();}
	]);
	return Slider;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Label.as=======95.999484/95.999484
//class laya.ui.Label extends laya.ui.Component
var Label=(function(_super){
	function Label(text){
		this._tf=null;
		Label.__super.call(this);
		(text===void 0)&& (text="");
		Font.defaultColor=Styles.labelColor;
		this.text=text;
	}

	__class(Label,'laya.ui.Label',false,_super);
	var __proto=Label.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._tf=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._tf=new Text());
	}

	__proto.changeText=function(text){
		this._tf.changeText(text);
	}

	__getset(0,__proto,'bgColor',function(){
		return this._tf.bgColor
		},function(value){
		this._tf.bgColor=value;
	});

	__getset(0,__proto,'underline',function(){
		return this._tf.underline;
		},function(value){
		this._tf.underline=value;
	});

	__getset(0,__proto,'leading',function(){
		return this._tf.leading;
		},function(value){
		this._tf.leading=value;
	});

	__getset(0,__proto,'measureWidth',function(){
		return this._tf.width;
	});

	__getset(0,__proto,'overflow',function(){
		return this._tf.overflow;
		},function(value){
		this._tf.overflow=value;
	});

	__getset(0,__proto,'measureHeight',function(){
		return this._tf.height;
	});

	__getset(0,__proto,'stroke',function(){
		return this._tf.stroke;
		},function(value){
		this._tf.stroke=value;
	});

	__getset(0,__proto,'width',function(){
		if (this._width || this._tf.text)return Laya.superGet(Component,this,'width');
		return 0;
		},function(value){
		Laya.superSet(Component,this,'width',value);
		this._tf.width=value;
	});

	__getset(0,__proto,'textField',function(){
		return this._tf;
	});

	__getset(0,__proto,'text',function(){
		return this._tf.text;
		},function(value){
		if (this._tf.text !=value){
			if(value)
				value=UIUtils.adptString(value+"");
			this._tf.text=value;
			this.event(/*laya.events.Event.CHANGE*/"change");
			if (!this._width || !this._height)this.onCompResize();
		}
	});

	__getset(0,__proto,'valign',function(){
		return this._tf.valign;
		},function(value){
		this._tf.valign=value;
	});

	__getset(0,__proto,'borderColor',function(){
		return this._tf.borderColor
		},function(value){
		this._tf.borderColor=value;
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if ((typeof value=='number')|| (typeof value=='string'))this.text=value+"";
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'strokeColor',function(){
		return this._tf.strokeColor;
		},function(value){
		this._tf.strokeColor=value;
	});

	__getset(0,__proto,'bold',function(){
		return this._tf.bold;
		},function(value){
		this._tf.bold=value;
	});

	__getset(0,__proto,'padding',function(){
		return this._tf.padding.join(",");
		},function(value){
		this._tf.padding=UIUtils.fillArray(Styles.labelPadding,value,Number);
	});

	__getset(0,__proto,'align',function(){
		return this._tf.align;
		},function(value){
		this._tf.align=value;
	});

	__getset(0,__proto,'color',function(){
		return this._tf.color;
		},function(value){
		this._tf.color=value;
	});

	__getset(0,__proto,'fontSize',function(){
		return this._tf.fontSize;
		},function(value){
		this._tf.fontSize=value;
	});

	__getset(0,__proto,'font',function(){
		return this._tf.font;
		},function(value){
		this._tf.font=value;
	});

	__getset(0,__proto,'underlineColor',function(){
		return this._tf.underlineColor;
		},function(value){
		this._tf.underlineColor=value;
	});

	__getset(0,__proto,'italic',function(){
		return this._tf.italic;
		},function(value){
		this._tf.italic=value;
	});

	__getset(0,__proto,'wordWrap',function(){
		return this._tf.wordWrap;
		},function(value){
		this._tf.wordWrap=value;
	});

	__getset(0,__proto,'height',function(){
		if (this._height || this._tf.text)return Laya.superGet(Component,this,'height');
		return 0;
		},function(value){
		Laya.superSet(Component,this,'height',value);
		this._tf.height=value;
	});

	return Label;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/ScrollBar.as=======95.999482/95.999482
//class laya.ui.ScrollBar extends laya.ui.Component
var ScrollBar=(function(_super){
	function ScrollBar(skin){
		this.rollRatio=0.95;
		this.changeHandler=null;
		this.scaleBar=true;
		this.autoHide=false;
		this.elasticDistance=0;
		this.elasticBackTime=500;
		this.upButton=null;
		this.downButton=null;
		this.slider=null;
		this._scrollSize=1;
		this._skin=null;
		this._thumbPercent=1;
		this._target=null;
		this._lastPoint=null;
		this._lastOffset=0;
		this._checkElastic=false;
		this._isElastic=false;
		this._value=NaN;
		this._hide=false;
		this._clickOnly=true;
		this._offsets=null;
		ScrollBar.__super.call(this);
		this._showButtons=UIConfig.showButtons;
		this._touchScrollEnable=UIConfig.touchScrollEnable;
		this._mouseWheelEnable=UIConfig.mouseWheelEnable;
		this.skin=skin;
		this.max=1;
	}

	__class(ScrollBar,'laya.ui.ScrollBar',false,_super);
	var __proto=ScrollBar.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this.stopScroll();
		this.target=null;
		_super.prototype.destroy.call(this,destroyChild);
		this.upButton && this.upButton.destroy(destroyChild);
		this.downButton && this.downButton.destroy(destroyChild);
		this.slider && this.slider.destroy(destroyChild);
		this.upButton=this.downButton=null;
		this.slider=null;
		this.changeHandler=null;
		this._offsets=null;
	}

	__proto.createChildren=function(){
		this.addChild(this.slider=new Slider());
		this.addChild(this.upButton=new Button());
		this.addChild(this.downButton=new Button());
	}

	__proto.initialize=function(){
		this.slider.showLabel=false;
		this.slider.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onSliderChange));
		this.slider.setSlider(0,0,0);
		this.upButton.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onButtonMouseDown));
		this.downButton.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onButtonMouseDown));
	}

	__proto.onSliderChange=function(){
		if(this._value !=this.slider.value)this.value=this.slider.value;
	}

	__proto.onButtonMouseDown=function(e){
		var isUp=e.currentTarget==this.upButton;
		this.slide(isUp);
		Laya.timer.once(Styles.scrollBarDelayTime,this,__bind(this,this.startLoop),[isUp]);
		Laya.stage.once(/*laya.events.Event.MOUSE_UP*/"mouseup",this,__bind(this,this.onStageMouseUp));
	}

	__proto.startLoop=function(isUp){
		Laya.timer.frameLoop(1,this,__bind(this,this.slide),[isUp]);
	}

	__proto.slide=function(isUp){
		if (isUp)this.value-=this._scrollSize;
		else this.value+=this._scrollSize;
	}

	__proto.onStageMouseUp=function(e){
		Laya.timer.clear(this,__bind(this,this.startLoop));
		Laya.timer.clear(this,__bind(this,this.slide));
	}

	__proto.changeScrollBar=function(){
		this.upButton.visible=this._showButtons;
		this.downButton.visible=this._showButtons;
		if (this._showButtons){
			this.upButton.skin=this._skin.replace(".png","$up.png");
			this.downButton.skin=this._skin.replace(".png","$down.png");
		}
		if (this.slider.isVertical)this.slider.y=this._showButtons ? this.upButton.height :0;
		else this.slider.x=this._showButtons ? this.upButton.width :0;
		this.resetPositions();
		this.repaint();
	}

	__proto.changeSize=function(){
		_super.prototype.changeSize.call(this);
		this.repaint();
		this.resetPositions();
		this.event(/*laya.events.Event.CHANGE*/"change");
		this.changeHandler && this.changeHandler.runWith(this.value);
	}

	__proto.resetPositions=function(){
		if (this.slider.isVertical)this.slider.height=this.height-(this._showButtons ? (this.upButton.height+this.downButton.height):0);
		else this.slider.width=this.width-(this._showButtons ? (this.upButton.width+this.downButton.width):0);
		this.resetButtonPosition();
	}

	__proto.resetButtonPosition=function(){
		if (this.slider.isVertical)this.downButton.y=this.slider.y+this.slider.height;
		else this.downButton.x=this.slider.x+this.slider.width;
	}

	__proto.setScroll=function(min,max,value){
		this.runCallLater(__bind(this,this.changeSize));
		this.slider.setSlider(min,max,value);
		this.slider.bar.visible=max > 0;
		if (!this._hide && this.autoHide)this.visible=false;
	}

	__proto.onTargetMouseWheel=function(e){
		this.value-=e.delta *this._scrollSize;
		this.target=this._target;
	}

	__proto.onTargetMouseDown=function(e){
		this._clickOnly=true;
		this._lastOffset=0;
		this._checkElastic=false;
		this._lastPoint || (this._lastPoint=new Point());
		this._lastPoint.setTo(Laya.stage.mouseX,Laya.stage.mouseY);
		Laya.timer.clear(this,__bind(this,this.tweenMove));
		Tween.clearTween(this);
		Laya.stage.once(/*laya.events.Event.MOUSE_UP*/"mouseup",this,__bind(this,this.onStageMouseUp2));
		Laya.stage.once(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.onStageMouseUp2));
		Laya.timer.frameLoop(1,this,__bind(this,this.loop));
	}

	__proto.loop=function(){
		var mouseY=Laya.stage.mouseY;
		var mouseX=Laya.stage.mouseX;
		this._lastOffset=this.isVertical ? (mouseY-this._lastPoint.y):(mouseX-this._lastPoint.x);
		if (this._clickOnly){
			if (Math.abs(this._lastOffset *(this.isVertical ? Laya.stage._canvasTransform.getScaleY():Laya.stage._canvasTransform.getScaleX()))> 1){
				this._clickOnly=false;
				this._offsets || (this._offsets=[]);
				this._offsets.length=0;
				this._target.mouseEnabled=false;
				if (!this.hide && this.autoHide){
					this.alpha=1;
					this.visible=true;
				}
				this.event(/*laya.events.Event.START*/"start");
			}else return;
		}
		this._offsets.push(this._lastOffset);
		this._lastPoint.x=mouseX;
		this._lastPoint.y=mouseY;
		if (this._lastOffset==0)return;
		if (!this._checkElastic){
			if (this.elasticDistance > 0){
				if (!this._checkElastic && this._lastOffset !=0){
					if ((this._lastOffset > 0 && this._value <=this.min)|| (this._lastOffset < 0 && this._value >=this.max)){
						this._isElastic=true;
						this._checkElastic=true;
						}else {
						this._isElastic=false;
					}
				}
				}else {
				this._checkElastic=true;
			}
		}
		if (this._isElastic){
			if (this._value <=this.min){
				this.value-=this._lastOffset *Math.max(0,(1-((this.min-this._value)/ this.elasticDistance)));
				}else if (this._value >=this.max){
				this.value-=this._lastOffset *Math.max(0,(1-((this._value-this.max)/ this.elasticDistance)));
			}
			}else {
			this.value-=this._lastOffset;
		}
	}

	__proto.onStageMouseUp2=function(e){
		Laya.stage.off(/*laya.events.Event.MOUSE_UP*/"mouseup",this,__bind(this,this.onStageMouseUp2));
		Laya.stage.off(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.onStageMouseUp2));
		Laya.timer.clear(this,__bind(this,this.loop));
		if (this._clickOnly){
			if(this._value>=this.min&&this._value<=this.max)
				return;
		}
		this._target.mouseEnabled=true;
		if (this._isElastic){
			if (this._value < this.min){
				Tween.to(this,{value:this.min},this.elasticBackTime,Ease.sineOut,Handler.create(this,__bind(this,this.elasticOver)));
				}else if (this._value > this.max){
				Tween.to(this,{value:this.max},this.elasticBackTime,Ease.sineOut,Handler.create(this,__bind(this,this.elasticOver)));
			}
			}else {
			if (!this._offsets)return;
			if (this._offsets.length < 1){
				this._offsets[0]=this.isVertical ? Laya.stage.mouseY-this._lastPoint.y :Laya.stage.mouseX-this._lastPoint.x;
			};
			var offset=0;
			var n=Math.min(this._offsets.length,3);
			for (var i=0;i < n;i++){
				offset+=this._offsets[this._offsets.length-1-i];
			}
			this._lastOffset=offset / n;
			offset=Math.abs(this._lastOffset);
			if (offset < 2){
				this.event(/*laya.events.Event.END*/"end");
				return;
			}
			if (offset > 60)this._lastOffset=this._lastOffset > 0 ? 60 :-60;
			var dis=Math.round(Math.abs(this.elasticDistance *(this._lastOffset / 240)));
			Laya.timer.frameLoop(1,this,__bind(this,this.tweenMove),[dis]);
		}
	}

	__proto.elasticOver=function(){
		this._isElastic=false;
		if (!this.hide && this.autoHide){
			Tween.to(this,{alpha:0},500);
		}
		this.event(/*laya.events.Event.END*/"end");
	}

	__proto.tweenMove=function(maxDistance){
		this._lastOffset *=this.rollRatio;
		var tarSpeed=NaN;
		if (maxDistance > 0){
			if (this._lastOffset > 0 && this.value <=this.min){
				this._isElastic=true;
				tarSpeed=-(this.min-maxDistance-this.value)*0.5;
				if (this._lastOffset > tarSpeed)this._lastOffset=tarSpeed;
				}else if (this._lastOffset < 0 && this.value >=this.max){
				this._isElastic=true;
				tarSpeed=-(this.max+maxDistance-this.value)*0.5;
				if (this._lastOffset < tarSpeed)this._lastOffset=tarSpeed;
			}
		}
		this.value-=this._lastOffset;
		if (Math.abs(this._lastOffset)< 1){
			Laya.timer.clear(this,__bind(this,this.tweenMove));
			if (this._isElastic){
				if (this._value < this.min){
					Tween.to(this,{value:this.min},this.elasticBackTime,Ease.sineOut,Handler.create(this,__bind(this,this.elasticOver)));
					}else if (this._value > this.max){
					Tween.to(this,{value:this.max},this.elasticBackTime,Ease.sineOut,Handler.create(this,__bind(this,this.elasticOver)));
					}else {
					this.elasticOver();
				}
				return;
			}
			this.event(/*laya.events.Event.END*/"end");
			if (!this.hide && this.autoHide){
				Tween.to(this,{alpha:0},500);
			}
		}
	}

	__proto.stopScroll=function(){
		this.onStageMouseUp2(null);
		Laya.timer.clear(this,__bind(this,this.tweenMove));
		Tween.clearTween(this);
	}

	__getset(0,__proto,'mouseWheelEnable',function(){
		return this._mouseWheelEnable;
		},function(value){
		this._mouseWheelEnable=value;
	});

	__getset(0,__proto,'touchScrollEnable',function(){
		return this._touchScrollEnable;
		},function(value){
		this._touchScrollEnable=value;
		this.target=this._target;
	});

	__getset(0,__proto,'hide',function(){
		return this._hide;
		},function(value){
		this._hide=value;
		this.visible=!value;
	});

	__getset(0,__proto,'showButtons',function(){
		return this._showButtons;
		},function(value){
		this._showButtons=value;
		this.callLater(__bind(this,this.changeScrollBar));
	});

	__getset(0,__proto,'max',function(){
		return this.slider.max;
		},function(value){
		this.slider.max=value;
	});

	__getset(0,__proto,'thumbPercent',function(){
		return this._thumbPercent;
		},function(value){
		this.runCallLater(__bind(this,this.changeScrollBar));
		this.runCallLater(__bind(this,this.changeSize));
		value=value >=1 ? 0.99 :value;
		this._thumbPercent=value;
		if (this.scaleBar){
			if (this.slider.isVertical)this.slider.bar.height=Math.max(this.slider.height *value,Styles.scrollBarMinNum);
			else this.slider.bar.width=Math.max(this.slider.width *value,Styles.scrollBarMinNum);
		}
	});

	__getset(0,__proto,'scrollSize',function(){
		return this._scrollSize;
		},function(value){
		this._scrollSize=value;
	});

	__getset(0,__proto,'sizeGrid',function(){
		return this.slider.sizeGrid;
		},function(value){
		this.slider.sizeGrid=value;
	});

	__getset(0,__proto,'tick',function(){
		return this.slider.tick;
		},function(value){
		this.slider.tick=value;
	});

	__getset(0,__proto,'target',function(){
		return this._target;
		},function(value){
		if (this._target){
			this._target.off(/*laya.events.Event.MOUSE_WHEEL*/"mousewheel",this,__bind(this,this.onTargetMouseWheel));
			this._target.off(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onTargetMouseDown));
		}
		this._target=value;
		if (value){
			this._mouseWheelEnable && this._target.on(/*laya.events.Event.MOUSE_WHEEL*/"mousewheel",this,__bind(this,this.onTargetMouseWheel));
			this._touchScrollEnable && this._target.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onTargetMouseDown));
		}
	});

	__getset(0,__proto,'isVertical',function(){
		return this.slider.isVertical;
		},function(value){
		this.slider.isVertical=value;
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if ((typeof value=='number')|| (typeof value=='string'))this.value=Number(value);
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'value',function(){
		return this._value;
		},function(v){
		if (v!=this._value){
			this._value=v;
			if (!this._isElastic){
				if (this.slider._value !=v){
					this.slider._value=v;
					this.slider.changeValue();
				}
				this._value=this.slider._value;
			}
			this.event(/*laya.events.Event.CHANGE*/"change");
			this.changeHandler && this.changeHandler.runWith(this._value);
		}
	});

	__getset(0,__proto,'measureHeight',function(){
		if (this.slider.isVertical)return 100;
		return this.slider.height;
	});

	__getset(0,__proto,'min',function(){
		return this.slider.min;
		},function(value){
		this.slider.min=value;
	});

	__getset(0,__proto,'measureWidth',function(){
		if (this.slider.isVertical)return this.slider.width;
		return 100;
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			this.slider.skin=this._skin;
			this.callLater(__bind(this,this.changeScrollBar));
		}
	});

	return ScrollBar;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Button.as=======95.999479/95.999479
//class laya.ui.Button extends laya.ui.Component
var Button=(function(_super){
	function Button(skin,label){
		this.toggle=false;
		this._bitmap=null;
		this._text=null;
		this._strokeColors=null;
		this._state=0;
		this._selected=false;
		this._skin=null;
		this._autoSize=true;
		this._sources=null;
		this._clickHandler=null;
		this._stateChanged=false;
		Button.__super.call(this);
		this._labelColors=Styles.buttonLabelColors;
		this._stateNum=Styles.buttonStateNum;
		(label===void 0)&& (label="");
		this.skin=skin;
		this.label=label;
	}

	__class(Button,'laya.ui.Button',false,_super);
	var __proto=Button.prototype;
	Laya.imps(__proto,{"laya.ui.ISelect":true})
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._bitmap && this._bitmap.destroy();
		this._text && this._text.destroy(destroyChild);
		this._bitmap=null;
		this._text=null;
		this._clickHandler=null;
		this._labelColors=this._sources=this._strokeColors=null;
	}

	__proto.createChildren=function(){
		this.graphics=this._bitmap=new AutoBitmap();
	}

	__proto.createText=function(){
		if (!this._text){
			this._text=new Text();
			this._text.overflow=Text.HIDDEN;
			this._text.align="center";
			this._text.valign="middle";
			this._text.width=this._width;
			this._text.height=this._height;
		}
	}

	__proto.initialize=function(){
		if (this._mouseEnableState!=1){
			this.mouseEnabled=true;
			this._setBit(/*laya.display.Node.MOUSEENABLE*/0x2,true);
		}
		this._createListener(/*laya.events.Event.MOUSE_OVER*/"mouseover",this,__bind(this,this.onMouse),null,false,false);
		this._createListener(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.onMouse),null,false,false);
		this._createListener(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onMouse),null,false,false);
		this._createListener(/*laya.events.Event.MOUSE_UP*/"mouseup",this,__bind(this,this.onMouse),null,false,false);
		this._createListener(/*laya.events.Event.CLICK*/"click",this,__bind(this,this.onMouse),null,false,false);
	}

	__proto.onMouse=function(e){
		if (this.toggle==false && this._selected)return;
		if (e.type==/*laya.events.Event.CLICK*/"click"){
			this.toggle && (this.selected=!this._selected);
			this._clickHandler && this._clickHandler.run();
			return;
		}
		!this._selected && (this.state=Button.stateMap[e.type]);
	}

	__proto.changeClips=function(){
		var img=Loader.getRes(this._skin);
		if (!img){
			console.log("lose skin",this._skin);
			return;
		};
		var width=img.sourceWidth;
		var height=img.sourceHeight / this._stateNum;
		img.$_GID || (img.$_GID=Utils.getGID());
		var key=img.$_GID+"-"+this._stateNum;
		var clips=WeakObject.I.get(key);
		if (!Utils.isOkTextureList(clips)){
			clips=null;
		}
		if (clips)this._sources=clips;
		else {
			this._sources=[];
			if (this._stateNum==1){
				this._sources.push(img);
				}else {
				for (var i=0;i < this._stateNum;i++){
					this._sources.push(Texture.createFromTexture(img,0,height *i,width,height));
				}
			}
			WeakObject.I.set(key,this._sources);
		}
		if (this._autoSize){
			this._bitmap.width=this._width || width;
			this._bitmap.height=this._height || height;
			if (this._text){
				this._text.width=this._bitmap.width;
				this._text.height=this._bitmap.height;
			}
			}else {
			this._text && (this._text.x=width);
		}
	}

	__proto.changeState=function(){
		this._stateChanged=false;
		this.runCallLater(__bind(this,this.changeClips));
		var index=this._state < this._stateNum ? this._state :this._stateNum-1;
		this._sources && (this._bitmap.source=this._sources[index]);
		if (this.label){
			this._text.color=this._labelColors[index];
			if (this._strokeColors)this._text.strokeColor=this._strokeColors[index];
		}
	}

	__proto._setStateChanged=function(){
		if (!this._stateChanged){
			this._stateChanged=true;
			this.callLater(__bind(this,this.changeState));
		}
	}

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if ((typeof value=='number')|| (typeof value=='string'))this.label=value+"";
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Component,this,'width',value);
		if (this._autoSize){
			this._bitmap.width=value;
			this._text && (this._text.width=value);
		}
	});

	__getset(0,__proto,'labelBold',function(){
		this.createText();
		return this._text.bold;
		},function(value){
		this.createText();
		this._text.bold=value;
	});

	__getset(0,__proto,'labelStrokeColor',function(){
		this.createText();
		return this._text.strokeColor;
		},function(value){
		this.createText();
		this._text.strokeColor=value
	});

	__getset(0,__proto,'clickHandler',function(){
		return this._clickHandler;
		},function(value){
		this._clickHandler=value;
	});

	__getset(0,__proto,'labelStroke',function(){
		this.createText();
		return this._text.stroke;
		},function(value){
		this.createText();
		this._text.stroke=value
	});

	__getset(0,__proto,'measureWidth',function(){
		this.runCallLater(__bind(this,this.changeClips));
		if (this._autoSize)return this._bitmap.width;
		this.runCallLater(__bind(this,this.changeState));
		return this._bitmap.width+(this._text ? this._text.width :0);
	});

	__getset(0,__proto,'labelPadding',function(){
		this.createText();
		return this._text.padding.join(",");
		},function(value){
		this.createText();
		this._text.padding=UIUtils.fillArray(Styles.labelPadding,value,Number);
	});

	__getset(0,__proto,'selected',function(){
		return this._selected;
		},function(value){
		if (this._selected !=value){
			this._selected=value;
			this.state=this._selected ? 2 :0;
			this.event(/*laya.events.Event.CHANGE*/"change");
		}
	});

	__getset(0,__proto,'iconOffset',function(){
		return this._bitmap._offset ? this._bitmap._offset.join(","):null;
		},function(value){
		if (value)this._bitmap._offset=UIUtils.fillArray([1,1],value,Number);
		else this._bitmap._offset=[];
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Component,this,'height',value);
		if (this._autoSize){
			this._bitmap.height=value;
			this._text && (this._text.height=value);
		}
	});

	__getset(0,__proto,'text',function(){
		this.createText();
		return this._text;
	});

	__getset(0,__proto,'strokeColors',function(){
		return this._strokeColors ? this._strokeColors.join(","):"";
		},function(value){
		this._strokeColors=UIUtils.fillArray(Styles.buttonLabelColors,value,String);
		this._setStateChanged();
	});

	__getset(0,__proto,'labelColors',function(){
		return this._labelColors.join(",");
		},function(value){
		this._labelColors=UIUtils.fillArray(Styles.buttonLabelColors,value,String);
		this._setStateChanged();
	});

	__getset(0,__proto,'label',function(){
		return this._text ? this._text.text :null;
		},function(value){
		if (!this._text && !value)return;
		this.createText();
		if (this._text.text !=value){
			value && !this._text.parent && this.addChild(this._text);
			this._text.text=(value+"").replace(/\\n/g,"\n");
			this._setStateChanged();
		}
	});

	__getset(0,__proto,'sizeGrid',function(){
		if (this._bitmap.sizeGrid)return this._bitmap.sizeGrid.join(",");
		return null;
		},function(value){
		this._bitmap.sizeGrid=UIUtils.fillArray(Styles.defaultSizeGrid,value,Number);
	});

	__getset(0,__proto,'state',function(){
		return this._state;
		},function(value){
		if (this._state !=value){
			this._state=value;
			this._setStateChanged();
		}
	});

	__getset(0,__proto,'labelAlign',function(){
		this.createText()
		return this._text.align;
		},function(value){
		this.createText()
		this._text.align=value;
	});

	__getset(0,__proto,'measureHeight',function(){
		this.runCallLater(__bind(this,this.changeClips));
		return this._text ? Math.max(this._bitmap.height,this._text.height):this._bitmap.height;
	});

	__getset(0,__proto,'labelSize',function(){
		this.createText();
		return this._text.fontSize;
		},function(value){
		this.createText();
		this._text.fontSize=value
	});

	__getset(0,__proto,'labelFont',function(){
		this.createText();
		return this._text.font;
		},function(value){
		this.createText();
		this._text.font=value;
	});

	__getset(0,__proto,'stateNum',function(){
		return this._stateNum;
		},function(value){
		if ((typeof value=='string')){
			value=parseInt(value);
		}
		if (this._stateNum !=value){
			this._stateNum=value < 1 ? 1 :value > 3 ? 3 :value;
			this.callLater(__bind(this,this.changeClips));
		}
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			this.callLater(__bind(this,this.changeClips));
			this._setStateChanged();
		}
	});

	__static(Button,
	['stateMap',function(){return this.stateMap={"mouseup":0,"mouseover":1,"mousedown":2,"mouseout":0};}
	]);
	return Button;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/ProgressBar.as=======95.999474/95.999474
//class laya.ui.ProgressBar extends laya.ui.Component
var ProgressBar=(function(_super){
	function ProgressBar(skin){
		this.changeHandler=null;
		this._bg=null;
		this._bar=null;
		this._skin=null;
		this._value=0.5;
		ProgressBar.__super.call(this);
		this.skin=skin;
	}

	__class(ProgressBar,'laya.ui.ProgressBar',false,_super);
	var __proto=ProgressBar.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._bg && this._bg.destroy(destroyChild);
		this._bar && this._bar.destroy(destroyChild);
		this._bg=this._bar=null;
		this.changeHandler=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._bg=new Image$2());
		this.addChild(this._bar=new Image$2());
		this._bar._bitmap.autoCacheCmd=false;
	}

	__proto.changeValue=function(){
		if (this.sizeGrid){
			var grid=this.sizeGrid.split(",");
			var left=Number(grid[3]);
			var right=Number(grid[1]);
			var max=this.width-left-right;
			var sw=max *this._value;
			this._bar.width=left+right+sw;
			this._bar.visible=this._bar.width > left+right;
			}else {
			this._bar.width=this.width *this._value;
		}
	}

	__getset(0,__proto,'sizeGrid',function(){
		return this._bg.sizeGrid;
		},function(value){
		this._bg.sizeGrid=this._bar.sizeGrid=value;
	});

	__getset(0,__proto,'bg',function(){
		return this._bg;
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if ((typeof value=='number')|| (typeof value=='string'))this.value=Number(value);
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'value',function(){
		return this._value;
		},function(num){
		if (this._value !=num){
			num=num > 1 ? 1 :num < 0 ? 0 :num;
			this._value=num;
			this.callLater(__bind(this,this.changeValue));
			this.event(/*laya.events.Event.CHANGE*/"change");
			this.changeHandler && this.changeHandler.runWith(num);
		}
	});

	__getset(0,__proto,'measureHeight',function(){
		return this._bg.height;
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Component,this,'height',value);
		this._bg.height=this._height;
		this._bar.height=this._height;
	});

	__getset(0,__proto,'bar',function(){
		return this._bar;
	});

	__getset(0,__proto,'measureWidth',function(){
		return this._bg.width;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Component,this,'width',value);
		this._bg.width=this._width;
		this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			this._bg.skin=this._skin;
			this._bar.skin=this._skin.replace(".png","$bar.png");
			this.callLater(__bind(this,this.changeValue));
		}
	});

	return ProgressBar;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Image.as=======95.999470/95.999470
//class laya.ui.Image extends laya.ui.Component
var Image$2=(function(_super){
	function Image(skin){
		this._bitmap=null;
		this._skin=null;
		this._group=null;
		Image.__super.call(this);
		this.skin=skin;
	}

	__class(Image,'laya.ui.Image',false,_super,'Image$2');
	var __proto=Image.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,true);
		this._bitmap && this._bitmap.destroy();
		this._bitmap=null;
	}

	__proto.dispose=function(){
		this.destroy(true);
		Laya.loader.clearRes(this._skin);
	}

	__proto.createChildren=function(){
		this.graphics=this._bitmap=new AutoBitmap();
		this._bitmap.autoCacheCmd=false;
	}

	__proto.setSource=function(url,img){
		if (url==this._skin && img){
			this.source=img
			this.onCompResize();
		}
	}

	__getset(0,__proto,'sizeGrid',function(){
		if (this._bitmap.sizeGrid)return this._bitmap.sizeGrid.join(",");
		return null;
		},function(value){
		this._bitmap.sizeGrid=UIUtils.fillArray(Styles.defaultSizeGrid,value,Number);
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Component,this,'height',value);
		this._bitmap.height=value==0 ? 0.0000001 :value;
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if ((typeof value=='string'))this.skin=value;
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'source',function(){
		return this._bitmap.source;
		},function(value){
		if (!this._bitmap)return;
		this._bitmap.source=value;
		this.event(/*laya.events.Event.LOADED*/"loaded");
		this.repaint();
	});

	__getset(0,__proto,'measureHeight',function(){
		return this._bitmap.height;
	});

	__getset(0,__proto,'measureWidth',function(){
		return this._bitmap.width;
	});

	__getset(0,__proto,'group',function(){
		return this._group;
		},function(value){
		if (value && this._skin)Loader.setGroup(this._skin,value);
		this._group=value;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Component,this,'width',value);
		this._bitmap.width=value==0 ? 0.0000001 :value;
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			if (value){
				var source=Loader.getRes(value);
				if (source){
					this.source=source;
					this.onCompResize();
				}else Laya.loader.load(this._skin,Handler.create(this,__bind(this,this.setSource),[this._skin]),null,/*laya.net.Loader.IMAGE*/"image",1,true,this._group);
				}else {
				this.source=null;
			}
		}
	});

	return Image;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Clip.as=======95.999467/95.999467
//class laya.ui.Clip extends laya.ui.Component
var Clip=(function(_super){
	function Clip(url,clipX,clipY){
		this._sources=null;
		this._bitmap=null;
		this._skin=null;
		this._clipX=1;
		this._clipY=1;
		this._clipWidth=0;
		this._clipHeight=0;
		this._autoPlay=false;
		this._interval=50;
		this._complete=null;
		this._isPlaying=false;
		this._index=0;
		this._clipChanged=false;
		this._group=null;
		this._toIndex=-1;
		Clip.__super.call(this);
		(clipX===void 0)&& (clipX=1);
		(clipY===void 0)&& (clipY=1);
		this._clipX=clipX;
		this._clipY=clipY;
		this.skin=url;
	}

	__class(Clip,'laya.ui.Clip',false,_super);
	var __proto=Clip.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,true);
		this._bitmap && this._bitmap.destroy();
		this._bitmap=null;
		this._sources=null;
	}

	__proto.dispose=function(){
		this.destroy(true);
		Laya.loader.clearRes(this._skin);
	}

	__proto.createChildren=function(){
		this.graphics=this._bitmap=new AutoBitmap();
	}

	__proto._onDisplay=function(e){
		if (this._isPlaying){
			if (this._displayedInStage)this.play();
			else this.stop();
			}else if (this._autoPlay){
			this.play();
		}
	}

	__proto.changeClip=function(){
		this._clipChanged=false;
		if (!this._skin)return;
		var img=Loader.getRes(this._skin);
		if (img){
			this.loadComplete(this._skin,img);
			}else {
			Laya.loader.load(this._skin,Handler.create(this,__bind(this,this.loadComplete),[this._skin]));
		}
	}

	__proto.loadComplete=function(url,img){
		if (url==this._skin && img){
			var w=this._clipWidth || Math.ceil(img.sourceWidth / this._clipX);
			var h=this._clipHeight || Math.ceil(img.sourceHeight / this._clipY);
			var key=this._skin+w+h;
			var clips=WeakObject.I.get(key);
			if (!Utils.isOkTextureList(clips)){
				clips=null;
			}
			if (clips)this._sources=clips;
			else {
				this._sources=[];
				for (var i=0;i < this._clipY;i++){
					for (var j=0;j < this._clipX;j++){
						this._sources.push(Texture.createFromTexture(img,w *j,h *i,w,h));
					}
				}
				WeakObject.I.set(key,this._sources);
			}
			this.index=this._index;
			this.event(/*laya.events.Event.LOADED*/"loaded");
			this.onCompResize();
		}
	}

	__proto.play=function(from,to){
		(from===void 0)&& (from=0);
		(to===void 0)&& (to=-1);
		this._isPlaying=true;
		this.index=from;
		this._toIndex=to;
		this._index++;
		Laya.timer.loop(this.interval,this,__bind(this,this._loop));
		this.on(/*laya.events.Event.DISPLAY*/"display",this,__bind(this,this._onDisplay));
		this.on(/*laya.events.Event.UNDISPLAY*/"undisplay",this,__bind(this,this._onDisplay));
	}

	__proto._loop=function(){
		if (this._style.visible && this._sources){
			this._index++;
			if (this._toIndex >-1 && this._index >=this._toIndex)this.stop();
			else if (this._index >=this._sources.length)this._index=0;
			this.index=this._index;
		}
	}

	__proto.stop=function(){
		this._isPlaying=false;
		Laya.timer.clear(this,__bind(this,this._loop));
		this.event(/*laya.events.Event.COMPLETE*/"complete");
	}

	__proto._setClipChanged=function(){
		if (!this._clipChanged){
			this._clipChanged=true;
			this.callLater(__bind(this,this.changeClip));
		}
	}

	__getset(0,__proto,'bitmap',function(){
		return this._bitmap;
	});

	__getset(0,__proto,'interval',function(){
		return this._interval;
		},function(value){
		if (this._interval !=value){
			this._interval=value;
			if (this._isPlaying)this.play();
		}
	});

	__getset(0,__proto,'total',function(){
		this.runCallLater(__bind(this,this.changeClip));
		return this._sources ? this._sources.length :0;
	});

	__getset(0,__proto,'sizeGrid',function(){
		if (this._bitmap.sizeGrid)return this._bitmap.sizeGrid.join(",");
		return null;
		},function(value){
		this._bitmap.sizeGrid=UIUtils.fillArray(Styles.defaultSizeGrid,value,Number);
	});

	__getset(0,__proto,'measureWidth',function(){
		this.runCallLater(__bind(this,this.changeClip));
		return this._bitmap.width;
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Component,this,'height',value);
		this._bitmap.height=value;
	});

	__getset(0,__proto,'clipWidth',function(){
		return this._clipWidth;
		},function(value){
		this._clipWidth=value;
		this._setClipChanged()
	});

	__getset(0,__proto,'group',function(){
		return this._group;
		},function(value){
		if (value && this._skin)Loader.setGroup(this._skin,value);
		this._group=value;
	});

	__getset(0,__proto,'clipHeight',function(){
		return this._clipHeight;
		},function(value){
		this._clipHeight=value;
		this._setClipChanged()
	});

	__getset(0,__proto,'index',function(){
		return this._index;
		},function(value){
		this._index=value;
		this._bitmap && this._sources && (this._bitmap.source=this._sources[value]);
		this.event(/*laya.events.Event.CHANGE*/"change");
	});

	__getset(0,__proto,'sources',function(){
		return this._sources;
		},function(value){
		this._sources=value;
		this.index=this._index;
		this.event(/*laya.events.Event.LOADED*/"loaded");
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if (((typeof value=='number')&& Math.floor(value)==value)|| (typeof value=='string'))this.index=parseInt(value);
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'clipY',function(){
		return this._clipY;
		},function(value){
		this._clipY=value || 1;
		this._setClipChanged()
	});

	__getset(0,__proto,'measureHeight',function(){
		this.runCallLater(__bind(this,this.changeClip));
		return this._bitmap.height;
	});

	__getset(0,__proto,'clipX',function(){
		return this._clipX;
		},function(value){
		this._clipX=value || 1;
		this._setClipChanged()
	});

	__getset(0,__proto,'autoPlay',function(){
		return this._autoPlay;
		},function(value){
		if (this._autoPlay !=value){
			this._autoPlay=value;
			value ? this.play():this.stop();
		}
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Component,this,'width',value);
		this._bitmap.width=value;
	});

	__getset(0,__proto,'isPlaying',function(){
		return this._isPlaying;
		},function(value){
		this._isPlaying=value;
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			if (value){
				this._setClipChanged()
				}else {
				this._bitmap.source=null;
			}
		}
	});

	return Clip;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/TipManager.as=======95.999465/95.999465
//class laya.ui.TipManager extends laya.ui.Component
var TipManager=(function(_super){
	function TipManager(){
		this._tipBox=null;
		this._tipText=null;
		this._defaultTipHandler=null;
		TipManager.__super.call(this);
		this._tipBox=new Component();
		this._tipBox.addChild(this._tipText=new Text());
		this._tipText.x=this._tipText.y=5;
		this._tipText.color=TipManager.tipTextColor;
		this._defaultTipHandler=this._showDefaultTip;
		Laya.stage.on(/*laya.ui.UIEvent.SHOW_TIP*/"showtip",this,__bind(this,this._onStageShowTip));
		Laya.stage.on(/*laya.ui.UIEvent.HIDE_TIP*/"hidetip",this,__bind(this,this._onStageHideTip));
		this.zOrder=1100
	}

	__class(TipManager,'laya.ui.TipManager',false,_super);
	var __proto=TipManager.prototype;
	__proto._onStageHideTip=function(e){
		Laya.timer.clear(this,__bind(this,this._showTip));
		this.closeAll();
		this.removeSelf();
	}

	__proto._onStageShowTip=function(data){
		Laya.timer.once(TipManager.tipDelay,this,__bind(this,this._showTip),[data],true);
	}

	__proto._showTip=function(tip){
		if ((typeof tip=='string')){
			var text=String(tip);
			if (Boolean(text)){
				this._defaultTipHandler(text);
			}
			}else if ((tip instanceof laya.utils.Handler )){
			(tip).run();
			}else if ((typeof tip=='function')){
			(tip).apply();
		}
		if (true){
			Laya.stage.on(/*laya.events.Event.MOUSE_MOVE*/"mousemove",this,__bind(this,this._onStageMouseMove));
			Laya.stage.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this._onStageMouseDown));
		}
		this._onStageMouseMove(null);
	}

	__proto._onStageMouseDown=function(e){
		this.closeAll();
	}

	__proto._onStageMouseMove=function(e){
		this._showToStage(this,TipManager.offsetX,TipManager.offsetY);
	}

	__proto._showToStage=function(dis,offX,offY){
		(offX===void 0)&& (offX=0);
		(offY===void 0)&& (offY=0);
		var rec=dis.getBounds();
		dis.x=Laya.stage.mouseX+offX;
		dis.y=Laya.stage.mouseY+offY;
		if (dis.x+rec.width > Laya.stage.width){
			dis.x-=rec.width+offX;
		}
		if (dis.y+rec.height > Laya.stage.height){
			dis.y-=rec.height+offY;
		}
	}

	__proto.closeAll=function(){
		Laya.timer.clear(this,__bind(this,this._showTip));
		Laya.stage.off(/*laya.events.Event.MOUSE_MOVE*/"mousemove",this,__bind(this,this._onStageMouseMove));
		Laya.stage.off(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this._onStageMouseDown));
		this.removeChildren();
	}

	__proto.showDislayTip=function(tip){
		this.addChild(tip);
		this._showToStage(this);
		Laya._currentStage.addChild(this);
	}

	__proto._showDefaultTip=function(text){
		this._tipText.text=text;
		var g=this._tipBox.graphics;
		g.clear();
		g.drawRect(0,0,this._tipText.width+10,this._tipText.height+10,TipManager.tipBackColor);
		this.addChild(this._tipBox);
		this._showToStage(this);
		Laya._currentStage.addChild(this);
	}

	__getset(0,__proto,'defaultTipHandler',function(){
		return this._defaultTipHandler;
		},function(value){
		this._defaultTipHandler=value;
	});

	TipManager.offsetX=10;
	TipManager.offsetY=15;
	TipManager.tipTextColor="#ffffff";
	TipManager.tipBackColor="#111111";
	TipManager.tipDelay=200;
	return TipManager;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/ColorPicker.as=======95.999461/95.999461
//class laya.ui.ColorPicker extends laya.ui.Component
var ColorPicker=(function(_super){
	function ColorPicker(){
		this.changeHandler=null;
		this._gridSize=11;
		this._bgColor="#ffffff";
		this._borderColor="#000000";
		this._inputColor="#000000";
		this._inputBgColor="#efefef";
		this._colorPanel=null;
		this._colorTiles=null;
		this._colorBlock=null;
		this._colorInput=null;
		this._colorButton=null;
		this._colors=[];
		this._selectedColor="#000000";
		this._panelChanged=false;
		ColorPicker.__super.call(this);
	}

	__class(ColorPicker,'laya.ui.ColorPicker',false,_super);
	var __proto=ColorPicker.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._colorPanel && this._colorPanel.destroy(destroyChild);
		this._colorButton && this._colorButton.destroy(destroyChild);
		this._colorPanel=null;
		this._colorTiles=null;
		this._colorBlock=null;
		this._colorInput=null;
		this._colorButton=null;
		this._colors=null;
		this.changeHandler=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._colorButton=new Button());
		this._colorPanel=new Box();
		this._colorPanel.size(230,166);
		this._colorPanel.addChild(this._colorTiles=new Sprite());
		this._colorPanel.addChild(this._colorBlock=new Sprite());
		this._colorPanel.addChild(this._colorInput=new Input());
	}

	__proto.initialize=function(){
		this._colorButton.on(/*laya.events.Event.CLICK*/"click",this,__bind(this,this.onColorButtonClick));
		this._colorBlock.pos(5,5);
		this._colorInput.pos(60,5);
		this._colorInput.size(60,20);
		this._colorInput.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onColorInputChange));
		this._colorInput.on(/*laya.events.Event.KEY_DOWN*/"keydown",this,__bind(this,this.onColorFieldKeyDown));
		this._colorTiles.pos(5,30);
		this._colorTiles.on(/*laya.events.Event.MOUSE_MOVE*/"mousemove",this,__bind(this,this.onColorTilesMouseMove));
		this._colorTiles.on(/*laya.events.Event.CLICK*/"click",this,__bind(this,this.onColorTilesClick));
		this._colorTiles.size(20 *this._gridSize,12 *this._gridSize);
		this._colorPanel.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onPanelMouseDown));
		this.bgColor=this._bgColor;
	}

	__proto.onPanelMouseDown=function(e){
		e.stopPropagation();
	}

	__proto.changePanel=function(){
		this._panelChanged=false;
		var g=this._colorPanel.graphics;
		g.clear();
		g.drawRect(0,0,230,166,this._bgColor,this._borderColor);
		this.drawBlock(this._selectedColor);
		this._colorInput.borderColor=this._borderColor;
		this._colorInput.bgColor=this._inputBgColor;
		this._colorInput.color=this._inputColor;
		g=this._colorTiles.graphics;
		g.clear();
		var mainColors=[0x000000,0x333333,0x666666,0x999999,0xCCCCCC,0xFFFFFF,0xFF0000,0x00FF00,0x0000FF,0xFFFF00,0x00FFFF,0xFF00FF];
		for (var i=0;i < 12;i++){
			for (var j=0;j < 20;j++){
				var color=0;
				if (j==0)color=mainColors[i];
				else if (j==1)color=0x000000;
				else color=(((i *3+j / 6)% 3 << 0)+((i / 6)<< 0)*3)*0x33 << 16 | j % 6 *0x33 << 8 | (i << 0)% 6 *0x33;
				var strColor=UIUtils.toColor(color);
				this._colors.push(strColor);
				var x=j *this._gridSize;
				var y=i *this._gridSize;
				g.drawRect(x,y,this._gridSize,this._gridSize,strColor,"#000000");
			}
		}
	}

	__proto.onColorButtonClick=function(e){
		if (this._colorPanel.parent)this.close();
		else this.open();
	}

	__proto.open=function(){
		var p=this.localToGlobal(new Point());
		var px=p.x+this._colorPanel.width <=Laya.stage.width ? p.x :Laya.stage.width-this._colorPanel.width;
		var py=p.y+this._colorButton.height;
		py=py+this._colorPanel.height <=Laya.stage.height ? py :p.y-this._colorPanel.height;
		this._colorPanel.pos(px,py);
		this._colorPanel.zOrder=1001;
		Laya._currentStage.addChild(this._colorPanel);
		Laya.stage.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.removeColorBox));
	}

	__proto.close=function(){
		Laya.stage.off(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.removeColorBox));
		this._colorPanel.removeSelf();
	}

	__proto.removeColorBox=function(e){
		this.close();
	}

	__proto.onColorFieldKeyDown=function(e){
		if (e.keyCode==13){
			if (this._colorInput.text)this.selectedColor=this._colorInput.text;
			else this.selectedColor=null;
			this.close();
			e.stopPropagation();
		}
	}

	__proto.onColorInputChange=function(e){
		if (this._colorInput.text)this.drawBlock(this._colorInput.text);
		else this.drawBlock("#FFFFFF");
	}

	__proto.onColorTilesClick=function(e){
		this.selectedColor=this.getColorByMouse();
		this.close();
	}

	__proto.onColorTilesMouseMove=function(e){
		this._colorInput.focus=false;
		var color=this.getColorByMouse();
		this._colorInput.text=color;
		this.drawBlock(color);
	}

	__proto.getColorByMouse=function(){
		var point=this._colorTiles.getMousePoint();
		var x=Math.floor(point.x / this._gridSize);
		var y=Math.floor(point.y / this._gridSize);
		return this._colors[y *20+x];
	}

	__proto.drawBlock=function(color){
		var g=this._colorBlock.graphics;
		g.clear();
		var showColor=color ? color :"#ffffff";
		g.drawRect(0,0,50,20,showColor,this._borderColor);
		color || g.drawLine(0,0,50,20,"#ff0000");
	}

	__proto.changeColor=function(){
		var g=this.graphics;
		g.clear();
		var showColor=this._selectedColor || "#000000";
		g.drawRect(0,0,this._colorButton.width,this._colorButton.height,showColor);
	}

	__proto._setPanelChanged=function(){
		if (!this._panelChanged){
			this._panelChanged=true;
			this.callLater(__bind(this,this.changePanel));
		}
	}

	__getset(0,__proto,'inputBgColor',function(){
		return this._inputBgColor;
		},function(value){
		this._inputBgColor=value;
		this._setPanelChanged();
	});

	__getset(0,__proto,'inputColor',function(){
		return this._inputColor;
		},function(value){
		this._inputColor=value;
		this._setPanelChanged();
	});

	__getset(0,__proto,'bgColor',function(){
		return this._bgColor;
		},function(value){
		this._bgColor=value;
		this._setPanelChanged();
	});

	__getset(0,__proto,'skin',function(){
		return this._colorButton.skin;
		},function(value){
		this._colorButton.skin=value;
		this.changeColor();
	});

	__getset(0,__proto,'borderColor',function(){
		return this._borderColor;
		},function(value){
		this._borderColor=value;
		this._setPanelChanged();
	});

	__getset(0,__proto,'selectedColor',function(){
		return this._selectedColor;
		},function(value){
		if (this._selectedColor !=value){
			this._selectedColor=this._colorInput.text=value;
			this.drawBlock(value);
			this.changeColor();
			this.changeHandler && this.changeHandler.runWith(this._selectedColor);
			this.event(/*laya.events.Event.CHANGE*/"change",Event.EMPTY.setTo(/*laya.events.Event.CHANGE*/"change",this,this));
		}
	});

	return ColorPicker;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/ComboBox.as=======95.999454/95.999454
//class laya.ui.ComboBox extends laya.ui.Component
var ComboBox=(function(_super){
	function ComboBox(skin,labels){
		this._visibleNum=6;
		this._button=null;
		this._list=null;
		this._isOpen=false;
		this._itemSize=12;
		this._labels=[];
		this._selectedIndex=-1;
		this._selectHandler=null;
		this._itemHeight=NaN;
		this._listHeight=NaN;
		this._listChanged=false;
		this._itemChanged=false;
		this._scrollBarSkin=null;
		this._isCustomList=false;
		this.itemRender=null;
		ComboBox.__super.call(this);
		this._itemColors=Styles.comboBoxItemColors;
		this.skin=skin;
		this.labels=labels;
	}

	__class(ComboBox,'laya.ui.ComboBox',false,_super);
	var __proto=ComboBox.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._button && this._button.destroy(destroyChild);
		this._list && this._list.destroy(destroyChild);
		this._button=null;
		this._list=null;
		this._itemColors=null;
		this._labels=null;
		this._selectHandler=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._button=new Button());
		this._button.text.align="left";
		this._button.labelPadding="0,0,0,5";
		this._button.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onButtonMouseDown));
	}

	__proto._createList=function(){
		this._list=new List();
		if (this._scrollBarSkin)this._list.vScrollBarSkin=this._scrollBarSkin;
		this._setListEvent(this._list);
	}

	__proto._setListEvent=function(list){
		this._list.selectEnable=true;
		this._list.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onListDown));
		this._list.mouseHandler=Handler.create(this,__bind(this,this.onlistItemMouse),null,false);
		if (this._list.scrollBar)this._list.scrollBar.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onScrollBarDown));
	}

	__proto.onListDown=function(e){
		e.stopPropagation();
	}

	__proto.onScrollBarDown=function(e){
		e.stopPropagation();
	}

	__proto.onButtonMouseDown=function(e){
		this.callLater(__bind(this,this.switchTo),[!this._isOpen]);
	}

	__proto.changeList=function(){
		this._listChanged=false;
		var labelWidth=this.width-2;
		var labelColor=this._itemColors[2];
		this._itemHeight=this._itemSize+6;
		this._list.itemRender=this.itemRender || {type:"Box",child:[{type:"Label",props:{name:"label",x:1,padding:"3,3,3,3",width:labelWidth,height:this._itemHeight,fontSize:this._itemSize,color:labelColor}}]};
		this._list.repeatY=this._visibleNum;
		this._list.refresh();
	}

	__proto.onlistItemMouse=function(e,index){
		var type=e.type;
		if (type==/*laya.events.Event.MOUSE_OVER*/"mouseover" || type==/*laya.events.Event.MOUSE_OUT*/"mouseout"){
			if (this._isCustomList)return;
			var box=this._list.getCell(index);
			if (!box)return;
			var label=box.getChildByName("label");
			if (label){
				if (type==/*laya.events.Event.ROLL_OVER*/"mouseover"){
					label.bgColor=this._itemColors[0];
					label.color=this._itemColors[1];
					}else {
					label.bgColor=null;
					label.color=this._itemColors[2];
				}
			}
			}else if (type==/*laya.events.Event.CLICK*/"click"){
			this.selectedIndex=index;
			this.isOpen=false;
		}
	}

	__proto.switchTo=function(value){
		this.isOpen=value;
	}

	__proto.changeOpen=function(){
		this.isOpen=!this._isOpen;
	}

	__proto.changeItem=function(){
		this._itemChanged=false;
		this._listHeight=this._labels.length > 0 ? Math.min(this._visibleNum,this._labels.length)*this._itemHeight :this._itemHeight;
		if (!this._isCustomList){
			var g=this._list.graphics;
			g.clear();
			g.drawRect(0,0,this.width-1,this._listHeight,this._itemColors[4],this._itemColors[3]);
		};
		var a=this._list.array || [];
		a.length=0;
		for (var i=0,n=this._labels.length;i < n;i++){
			a.push({label:this._labels[i]});
		}
		this._list.height=this._listHeight;
		this._list.array=a;
	}

	__proto.changeSelected=function(){
		this._button.label=this.selectedLabel;
	}

	__proto._onStageMouseWheel=function(e){
		if(!this._list||this._list.contains(e.target))return;
		this.removeList(null);
	}

	__proto.removeList=function(e){
		Laya.stage.off(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.removeList));
		Laya.stage.off(/*laya.events.Event.MOUSE_WHEEL*/"mousewheel",this,__bind(this,this._onStageMouseWheel));
		this.isOpen=false;
	}

	__getset(0,__proto,'stateNum',function(){
		return this._button.stateNum;
		},function(value){
		this._button.stateNum=value
	});

	__getset(0,__proto,'labelFont',function(){
		return this._button.text.font;
		},function(value){
		this._button.text.font=value
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Component,this,'height',value);
		this._button.height=this._height;
	});

	__getset(0,__proto,'labelBold',function(){
		return this._button.text.bold;
		},function(value){
		this._button.text.bold=value
	});

	__getset(0,__proto,'labelSize',function(){
		return this._button.text.fontSize;
		},function(value){
		this._button.text.fontSize=value
	});

	__getset(0,__proto,'list',function(){
		this._list || this._createList();
		return this._list;
		},function(value){
		if (value){
			value.removeSelf();
			this._isCustomList=true;
			this._list=value;
			this._setListEvent(value);
			this._itemHeight=value.getCell(0).height+value.spaceY;
		}
	});

	__getset(0,__proto,'isOpen',function(){
		return this._isOpen;
		},function(value){
		if (this._isOpen !=value){
			this._isOpen=value;
			this._button.selected=this._isOpen;
			if (this._isOpen){
				this._list || this._createList();
				this._listChanged && !this._isCustomList && this.changeList();
				this._itemChanged && this.changeItem();
				var p=this.localToGlobal(Point.TEMP.setTo(0,0));
				var py=p.y+this._button.height;
				py=py+this._listHeight <=Laya.stage.height ? py :p.y-this._listHeight;
				this._list.pos(p.x,py);
				this._list.zOrder=1001;
				Laya._currentStage.addChild(this._list);
				Laya.stage.once(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.removeList));
				Laya.stage.on(/*laya.events.Event.MOUSE_WHEEL*/"mousewheel",this,__bind(this,this._onStageMouseWheel));
				this._list.selectedIndex=this._selectedIndex;
				}else {
				this._list && this._list.removeSelf();
			}
		}
	});

	__getset(0,__proto,'button',function(){
		return this._button;
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if (((typeof value=='number')&& Math.floor(value)==value)|| (typeof value=='string'))this.selectedIndex=parseInt(value);
		else if ((value instanceof Array))this.labels=(value).join(",");
		else Laya.superSet(Component,this,'dataSource',value);
	});

	__getset(0,__proto,'scrollBar',function(){
		return this.list.scrollBar;
	});

	__getset(0,__proto,'selectedIndex',function(){
		return this._selectedIndex;
		},function(value){
		if (this._selectedIndex !=value){
			this._selectedIndex=value;
			if (this._labels.length > 0)this.changeSelected();
			else this.callLater(__bind(this,this.changeSelected));
			this.event(/*laya.events.Event.CHANGE*/"change",[Event.EMPTY.setTo(/*laya.events.Event.CHANGE*/"change",this,this)]);
			this._selectHandler && this._selectHandler.runWith(this._selectedIndex);
		}
	});

	__getset(0,__proto,'itemSize',function(){
		return this._itemSize;
		},function(value){
		this._itemSize=value;
		this._listChanged=true;
	});

	__getset(0,__proto,'sizeGrid',function(){
		return this._button.sizeGrid;
		},function(value){
		this._button.sizeGrid=value;
	});

	__getset(0,__proto,'labelColors',function(){
		return this._button.labelColors;
		},function(value){
		if (this._button.labelColors !=value){
			this._button.labelColors=value;
		}
	});

	__getset(0,__proto,'visibleNum',function(){
		return this._visibleNum;
		},function(value){
		this._visibleNum=value;
		this._listChanged=true;
	});

	__getset(0,__proto,'selectHandler',function(){
		return this._selectHandler;
		},function(value){
		this._selectHandler=value;
	});

	__getset(0,__proto,'selectedLabel',function(){
		return this._selectedIndex >-1 && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] :null;
		},function(value){
		this.selectedIndex=this._labels.indexOf(value);
	});

	__getset(0,__proto,'measureHeight',function(){
		return this._button.height;
	});

	__getset(0,__proto,'labels',function(){
		return this._labels.join(",");
		},function(value){
		if (this._labels.length > 0)this.selectedIndex=-1;
		if (value)this._labels=value.split(",");
		else this._labels.length=0;
		this._itemChanged=true;
	});

	__getset(0,__proto,'measureWidth',function(){
		return this._button.width;
	});

	__getset(0,__proto,'scrollBarSkin',function(){
		return this._scrollBarSkin;
		},function(value){
		this._scrollBarSkin=value;
	});

	__getset(0,__proto,'itemColors',function(){
		return String(this._itemColors)
		},function(value){
		this._itemColors=UIUtils.fillArray(this._itemColors,value,String);
		this._listChanged=true;
	});

	__getset(0,__proto,'labelPadding',function(){
		return this._button.text.padding.join(",");
		},function(value){
		this._button.text.padding=UIUtils.fillArray(Styles.labelPadding,value,Number);
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Component,this,'width',value);
		this._button.width=this._width;
		this._itemChanged=true;
		this._listChanged=true;
	});

	__getset(0,__proto,'skin',function(){
		return this._button.skin;
		},function(value){
		if (this._button.skin !=value){
			this._button.skin=value;
			this._listChanged=true;
		}
	});

	return ComboBox;
})(Component)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/ViewStack.as=======94.999294/94.999294
//class laya.ui.ViewStack extends laya.ui.Box
var ViewStack=(function(_super){
	function ViewStack(){
		this._items=null;
		this._selectedIndex=0;
		ViewStack.__super.call(this);
		this._setIndexHandler=Handler.create(this,__bind(this,this.setIndex),null,false);
	}

	__class(ViewStack,'laya.ui.ViewStack',false,_super);
	var __proto=ViewStack.prototype;
	Laya.imps(__proto,{"laya.ui.IItem":true})
	__proto.setItems=function(views){
		this.removeChildren();
		var index=0;
		for (var i=0,n=views.length;i < n;i++){
			var item=views[i];
			if (item){
				item.name="item"+index;
				this.addChild(item);
				index++;
			}
		}
		this.initItems();
	}

	__proto.addItem=function(view){
		view.name="item"+this._items.length;
		this.addChild(view);
		this.initItems();
	}

	__proto.initItems=function(){
		this._items=[];
		for (var i=0;i < 10000;i++){
			var item=this.getChildByName("item"+i);
			if (item==null){
				break ;
			}
			this._items.push(item);
			item.visible=(i==this._selectedIndex);
		}
	}

	__proto.setSelect=function(index,selected){
		if (this._items && index >-1 && index < this._items.length){
			this._items[index].visible=selected;
		}
	}

	__proto.setIndex=function(index){
		this.selectedIndex=index;
	}

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if (((typeof value=='number')&& Math.floor(value)==value)|| (typeof value=='string')){
			this.selectedIndex=parseInt(value);
			}else {
			for (var prop in this._dataSource){
				if (this.hasOwnProperty(prop)){
					this[prop]=this._dataSource[prop];
				}
			}
		}
	});

	__getset(0,__proto,'items',function(){
		return this._items;
	});

	__getset(0,__proto,'setIndexHandler',function(){
		return this._setIndexHandler;
		},function(value){
		this._setIndexHandler=value;
	});

	__getset(0,__proto,'selection',function(){
		return this._selectedIndex >-1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] :null;
		},function(value){
		this.selectedIndex=this._items.indexOf(value);
	});

	__getset(0,__proto,'selectedIndex',function(){
		return this._selectedIndex;
		},function(value){
		if (this._selectedIndex !=value){
			this.setSelect(this._selectedIndex,false);
			this._selectedIndex=value;
			this.setSelect(this._selectedIndex,true);
		}
	});

	return ViewStack;
})(Box)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/HSlider.as=======94.999288/94.999288
//class laya.ui.HSlider extends laya.ui.Slider
var HSlider=(function(_super){
	function HSlider(skin){
		HSlider.__super.call(this,skin);
		this.isVertical=false;
	}

	__class(HSlider,'laya.ui.HSlider',false,_super);
	return HSlider;
})(Slider)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/LayoutBox.as=======94.999283/94.999283
//class laya.ui.LayoutBox extends laya.ui.Box
var LayoutBox=(function(_super){
	function LayoutBox(){
		this._space=0;
		this._align="none";
		this._itemChanged=false;
		LayoutBox.__super.call(this);
	}

	__class(LayoutBox,'laya.ui.LayoutBox',false,_super);
	var __proto=LayoutBox.prototype;
	__proto.addChild=function(child){
		child.on(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setItemChanged();
		return laya.display.Node.prototype.addChild.call(this,child);
	}

	__proto.onResize=function(e){
		this._setItemChanged();
	}

	__proto.addChildAt=function(child,index){
		child.on(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setItemChanged();
		return laya.display.Node.prototype.addChildAt.call(this,child,index);
	}

	__proto.removeChild=function(child){
		child.off(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setItemChanged();
		return laya.display.Node.prototype.removeChild.call(this,child);
	}

	__proto.removeChildAt=function(index){
		this.getChildAt(index).off(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setItemChanged();
		return laya.display.Node.prototype.removeChildAt.call(this,index);
	}

	__proto.refresh=function(){
		this._setItemChanged();
	}

	__proto.changeItems=function(){
		this._itemChanged=false;
	}

	__proto.sortItem=function(items){
		if (items)items.sort(function(a,b){return a.y-b.y;});
	}

	__proto._setItemChanged=function(){
		if (!this._itemChanged){
			this._itemChanged=true;
			this.callLater(__bind(this,this.changeItems));
		}
	}

	__getset(0,__proto,'align',function(){
		return this._align;
		},function(value){
		this._align=value;
		this._setItemChanged();
	});

	__getset(0,__proto,'space',function(){
		return this._space;
		},function(value){
		this._space=value;
		this._setItemChanged();
	});

	return LayoutBox;
})(Box)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/View.as=======94.999282/94.999282
//class laya.ui.View extends laya.ui.Box
var View=(function(_super){
	var DataWatcher;
	function View(){
		this._idMap=null;
		this._aniList=null;
		this._watchMap={};
		View.__super.call(this);
	}

	__class(View,'laya.ui.View',false,_super);
	var __proto=View.prototype;
	__proto.createView=function(uiView){
		if (uiView.animations && !this._idMap)this._idMap={};
		View.createComp(uiView,this,this);
		if (uiView.animations){
			var anilist=[];
			var animations=uiView.animations;
			var i=0,len=animations.length;
			var tAni;
			var tAniO;
			for (i=0;i < len;i++){
				tAni=new FrameAnimation();
				tAniO=animations[i];
				tAni._setUp(this._idMap,tAniO);
				this[tAniO.name]=tAni;
				tAni._setControlNode(this);
				switch (tAniO.action){
					case 1:
						tAni.play(0,false);
						break ;
					case 2:
						tAni.play(0,true);
						break ;
					}
				anilist.push(tAni);
			}
			this._aniList=anilist;
		}
		if (this._width > 0 && uiView.props.hitTestPrior==null && !this.mouseThrough)this.hitTestPrior=true;
	}

	__proto.onEvent=function(type,event){}
	__proto.loadUI=function(path){
		var uiView=View.uiMap[path];
		uiView && this.createView(uiView);
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		if (this._aniList)this._aniList.length=0;
		this._idMap=null;
		this._aniList=null;
		this._watchMap=null;
		laya.ui.Component.prototype.destroy.call(this,destroyChild);
	}

	__proto.changeData=function(key){
		var arr=this._watchMap[key];
		if (!arr)return;
		console.log("change",key);
		for (var i=0,n=arr.length;i < n;i++){
			var watcher=arr[i];
			watcher.exe(this);
		}
	}

	View._regs=function(){
		for (var key in View.uiClassMap){
			ClassUtils.regClass(key,View.uiClassMap[key]);
		}
	}

	View.createComp=function(uiView,comp,view,dataMap){
		comp=comp || View.getCompInstance(uiView);
		if (!comp){
			console.warn("can not create:"+uiView.type);
			return null;
		};
		var child=uiView.child;
		if (child){
			var isList=(comp instanceof laya.ui.List );
			for (var i=0,n=child.length;i < n;i++){
				var node=child[i];
				if (comp.hasOwnProperty("itemRender")&& (node.props.name=="render" || node.props.renderType=="render")){
					(comp).itemRender=node;
					}else if (node.type=="Graphic"){
					ClassUtils.addGraphicsToSprite(node,comp);
					}else if (ClassUtils.isDrawType(node.type)){
					ClassUtils.addGraphicToSprite(node,comp,true);
					}else {
					if (isList){
						var arr=[];
						var tChild=View.createComp(node,null,view,arr);
						if (arr.length)tChild["_$bindData"]=arr;
						}else {
						tChild=View.createComp(node,null,view,dataMap);
					}
					if (node.type=="Script"){
						if ("owner" in tChild){
							tChild["owner"]=comp;
							}else if ("target" in tChild){
							tChild["target"]=comp;
						}
						}else if (node.props.renderType=="mask" || node.props.name=="mask"){
						comp.mask=tChild;
						}else {(
						tChild instanceof laya.display.Sprite )&& comp.addChild(tChild);
					}
				}
			}
		};
		var props=uiView.props;
		for (var prop in props){
			var value=props[prop];
			if (View.eventDic[prop]){
				if (value&&view){
					(comp).on(prop,view,view.onEvent,[value]);
				}
			}else
			View.setCompValue(comp,prop,value,view,dataMap);
		}
		if (Laya.__typeof(comp,'laya.ui.IItem'))(comp).initItems();
		if (uiView.compId && view && view._idMap){
			view._idMap[uiView.compId]=comp;
		}
		return comp;
	}

	View.setCompValue=function(comp,prop,value,view,dataMap){
		if ((typeof value=='string')&& value.indexOf("${")>-1){
			View._sheet || (View._sheet=ClassUtils.getClass("laya.data.Table"));
			if (!View._sheet){
				console.warn("Can not find class Sheet");
				return;
			}
			if (dataMap){
				dataMap.push(comp,prop,value);
				}else if (view){
				if (value.indexOf("].")==-1){
					value=value.replace(".","[0].");
				};
				var watcher=new DataWatcher(comp,prop,value);
				watcher.exe(view);
				var one,temp;
				var str=value.replace(/\[.*?\]\./g,".");
				while ((one=View._parseWatchData.exec(str))!=null){
					var key1=one[1];
					while ((temp=View._parseKeyWord.exec(key1))!=null){
						var key2=temp[0];
						var arr=(view._watchMap[key2] || (view._watchMap[key2]=[]));
						arr.push(watcher);
						View._sheet.I.notifer.on(key2,view,view.changeData,[key2]);
					}
					arr=(view._watchMap[key1] || (view._watchMap[key1]=[]));
					arr.push(watcher);
					View._sheet.I.notifer.on(key1,view,view.changeData,[key1]);
				}
			}
			return;
		}
		if (prop=="var" && view){
			view[value]=comp;
			}else if (prop=="onClick"){
			var fun=Laya._runScript("(function(){"+value+"})");
			comp.on(/*laya.events.Event.CLICK*/"click",view,fun);
			}else {
			comp[prop]=(value=="true" ? true :(value=="false" ? false :value));
		}
	}

	View.getCompInstance=function(json){
		var runtime=json.props ? json.props.runtime :null;
		var compClass;
		compClass=runtime ? (View.viewClassMap[runtime] || View.uiClassMap[runtime]|| Laya["__classmap"][runtime]):View.uiClassMap[json.type];
		if (json.props && json.props.hasOwnProperty("renderType")&& json.props["renderType"]=="instance")return compClass["instance"];
		return compClass ? new compClass():null;
	}

	View.regComponent=function(key,compClass){
		View.uiClassMap[key]=compClass;
		ClassUtils.regClass(key,compClass);
	}

	View.regViewRuntime=function(key,compClass){
		View.viewClassMap[key]=compClass;
	}

	View.uiMap={};
	View.viewClassMap={};
	View._sheet=null;
	__static(View,
	['uiClassMap',function(){return this.uiClassMap={"ViewStack":ViewStack,"LinkButton":Button,"TextArea":TextArea,"ColorPicker":ColorPicker,"Box":Box,"Button":Button,"CheckBox":CheckBox,"Clip":Clip,"ComboBox":ComboBox,"Component":Component,"HScrollBar":HScrollBar,"HSlider":HSlider,"Image":Image$2,"Label":Label,"List":List,"Panel":Panel,"ProgressBar":ProgressBar,"Radio":Radio,"RadioGroup":RadioGroup,"ScrollBar":ScrollBar,"Slider":Slider,"Tab":Tab,"TextInput":TextInput,"View":View,"VScrollBar":VScrollBar,"VSlider":VSlider,"Tree":Tree,"HBox":HBox,"VBox":VBox,"Sprite":Sprite,"Animation":Animation,"Text":Text,"FontClip":FontClip};},'eventDic',function(){return this.eventDic={"mousedown":true,"mouseup":true,"mousemove":true,"mouseover":true,"mouseout":true,"click":true,"doubleclick":true,"rightmousedown":true,"rightmouseup":true,"rightclick":true };},'_parseWatchData',function(){return this._parseWatchData=/\${(.*?)}/g;},'_parseKeyWord',function(){return this._parseKeyWord=/[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;}
	]);
	View.__init$=function(){
		View._regs()
		//class DataWatcher
		DataWatcher=(function(){
			function DataWatcher(comp,prop,value){
				this.comp=null;
				this.prop=null;
				this.value=null;
				this.comp=comp;
				this.prop=prop;
				this.value=value;
			}
			__class(DataWatcher,'',true);
			var __proto=DataWatcher.prototype;
			__proto.exe=function(view){
				var fun=UIUtils.getBindFun(this.value);
				this.comp[this.prop]=fun.call(this,view);
			}
			return DataWatcher;
		})()
	}

	return View;
})(Box)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/HScrollBar.as=======94.999282/94.999282
//class laya.ui.HScrollBar extends laya.ui.ScrollBar
var HScrollBar=(function(_super){
	function HScrollBar(){
		HScrollBar.__super.call(this);;
	}

	__class(HScrollBar,'laya.ui.HScrollBar',false,_super);
	var __proto=HScrollBar.prototype;
	__proto.initialize=function(){
		_super.prototype.initialize.call(this);
		this.slider.isVertical=false;
	}

	return HScrollBar;
})(ScrollBar)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/VSlider.as=======94.999277/94.999277
//class laya.ui.VSlider extends laya.ui.Slider
var VSlider=(function(_super){
	function VSlider(){
		VSlider.__super.call(this);;
	}

	__class(VSlider,'laya.ui.VSlider',false,_super);
	return VSlider;
})(Slider)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/UIGroup.as=======94.999276/94.999276
//class laya.ui.UIGroup extends laya.ui.Box
var UIGroup=(function(_super){
	function UIGroup(labels,skin){
		this.selectHandler=null;
		this._items=null;
		this._selectedIndex=-1;
		this._skin=null;
		this._direction="horizontal";
		this._space=0;
		this._labels=null;
		this._labelColors=null;
		this._labelFont=null;
		this._labelStrokeColor=null;
		this._strokeColors=null;
		this._labelStroke=NaN;
		this._labelSize=0;
		this._labelBold=false;
		this._labelPadding=null;
		this._labelAlign=null;
		this._stateNum=0;
		this._labelChanged=false;
		UIGroup.__super.call(this);
		this.skin=skin;
		this.labels=labels;
	}

	__class(UIGroup,'laya.ui.UIGroup',false,_super);
	var __proto=UIGroup.prototype;
	Laya.imps(__proto,{"laya.ui.IItem":true})
	__proto.preinitialize=function(){
		this.mouseEnabled=true;
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		laya.ui.Component.prototype.destroy.call(this,destroyChild);
		this._items && (this._items.length=0);
		this._items=null;
		this.selectHandler=null;
	}

	__proto.addItem=function(item,autoLayOut){
		(autoLayOut===void 0)&& (autoLayOut=true);
		var display=item;
		var index=this._items.length;
		display.name="item"+index;
		this.addChild(display);
		this.initItems();
		if (autoLayOut && index > 0){
			var preItem=this._items [index-1];
			if (this._direction=="horizontal"){
				display.x=preItem.x+preItem.width+this._space;
				}else {
				display.y=preItem.y+preItem.height+this._space;
			}
			}else {
			if (autoLayOut){
				display.x=0;
				display.y=0;
			}
		}
		return index;
	}

	__proto.delItem=function(item,autoLayOut){
		(autoLayOut===void 0)&& (autoLayOut=true);
		var index=this._items.indexOf(item);
		if (index !=-1){
			var display=item;
			this.removeChild(display);
			for (var i=index+1,n=this._items.length;i < n;i++){
				var child=this._items [i];
				child.name="item"+(i-1);
				if (autoLayOut){
					if (this._direction=="horizontal"){
						child.x-=display.width+this._space;
						}else {
						child.y-=display.height+this._space;
					}
				}
			}
			this.initItems();
			if (this._selectedIndex >-1){
				var newIndex=0;
				newIndex=this._selectedIndex < this._items.length ? this._selectedIndex :(this._selectedIndex-1);
				this._selectedIndex=-1;
				this.selectedIndex=newIndex;
			}
		}
	}

	__proto.initItems=function(){
		this._items || (this._items=[]);
		this._items.length=0;
		for (var i=0;i < 10000;i++){
			var item=this.getChildByName("item"+i);
			if (item==null)break ;
			this._items.push(item);
			item.selected=(i==this._selectedIndex);
			item.clickHandler=Handler.create(this,__bind(this,this.itemClick),[i],false);
		}
	}

	__proto.itemClick=function(index){
		this.selectedIndex=index;
	}

	__proto.setSelect=function(index,selected){
		if (this._items && index >-1 && index < this._items.length)this._items[index].selected=selected;
	}

	__proto.createItem=function(skin,label){
		return null;
	}

	__proto.changeLabels=function(){
		this._labelChanged=false;
		if (this._items){
			var left=0
			for (var i=0,n=this._items.length;i < n;i++){
				var btn=this._items [i];
				this._skin && (btn.skin=this._skin);
				this._labelColors && (btn.labelColors=this._labelColors);
				this._labelSize && (btn.labelSize=this._labelSize);
				this._labelStroke && (btn.labelStroke=this._labelStroke);
				this._labelStrokeColor && (btn.labelStrokeColor=this._labelStrokeColor);
				this._strokeColors && (btn.strokeColors=this._strokeColors);
				this._labelBold && (btn.labelBold=this._labelBold);
				this._labelPadding && (btn.labelPadding=this._labelPadding);
				this._labelAlign && (btn.labelAlign=this._labelAlign);
				this._stateNum && (btn.stateNum=this._stateNum);
				this._labelFont && (btn.labelFont=this._labelFont);
				if (this._direction=="horizontal"){
					btn.y=0;
					btn.x=left;
					left+=btn.width+this._space;
					}else {
					btn.x=0;
					btn.y=left;
					left+=btn.height+this._space;
				}
			}
		}
		this.changeSize();
	}

	__proto.commitMeasure=function(){
		this.runCallLater(__bind(this,this.changeLabels));
	}

	__proto._setLabelChanged=function(){
		if (!this._labelChanged){
			this._labelChanged=true;
			this.callLater(__bind(this,this.changeLabels));
		}
	}

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if (((typeof value=='number')&& Math.floor(value)==value)|| (typeof value=='string'))this.selectedIndex=parseInt(value);
		else if ((value instanceof Array))this.labels=(value).join(",");
		else Laya.superSet(Box,this,'dataSource',value);
	});

	__getset(0,__proto,'items',function(){
		return this._items;
	});

	__getset(0,__proto,'space',function(){
		return this._space;
		},function(value){
		this._space=value;
		this._setLabelChanged();
	});

	__getset(0,__proto,'selection',function(){
		return this._selectedIndex >-1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] :null;
		},function(value){
		this.selectedIndex=this._items.indexOf(value);
	});

	__getset(0,__proto,'direction',function(){
		return this._direction;
		},function(value){
		this._direction=value;
		this._setLabelChanged();
	});

	__getset(0,__proto,'labelPadding',function(){
		return this._labelPadding;
		},function(value){
		if (this._labelPadding !=value){
			this._labelPadding=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'labels',function(){
		return this._labels;
		},function(value){
		if (this._labels !=value){
			this._labels=value;
			this.removeChildren();
			this._setLabelChanged();
			if (this._labels){
				var a=this._labels.split(",");
				for (var i=0,n=a.length;i < n;i++){
					var item=this.createItem(this._skin,a[i]);
					item.name="item"+i;
					this.addChild(item);
				}
			}
			this.initItems();
		}
	});

	__getset(0,__proto,'stateNum',function(){
		return this._stateNum;
		},function(value){
		if (this._stateNum !=value){
			this._stateNum=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'labelFont',function(){
		return this._labelFont;
		},function(value){
		if (this._labelFont !=value){
			this._labelFont=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'labelStrokeColor',function(){
		return this._labelStrokeColor;
		},function(value){
		if (this._labelStrokeColor !=value){
			this._labelStrokeColor=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'strokeColors',function(){
		return this._strokeColors;
		},function(value){
		if (this._strokeColors !=value){
			this._strokeColors=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'labelColors',function(){
		return this._labelColors;
		},function(value){
		if (this._labelColors !=value){
			this._labelColors=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'labelStroke',function(){
		return this._labelStroke;
		},function(value){
		if (this._labelStroke !=value){
			this._labelStroke=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'labelSize',function(){
		return this._labelSize;
		},function(value){
		if (this._labelSize !=value){
			this._labelSize=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'labelBold',function(){
		return this._labelBold;
		},function(value){
		if (this._labelBold !=value){
			this._labelBold=value;
			this._setLabelChanged();
		}
	});

	__getset(0,__proto,'selectedIndex',function(){
		return this._selectedIndex;
		},function(value){
		if (this._selectedIndex !=value){
			this.setSelect(this._selectedIndex,false);
			this._selectedIndex=value;
			this.setSelect(value,true);
			this.event(/*laya.events.Event.CHANGE*/"change");
			this.selectHandler && this.selectHandler.runWith(this._selectedIndex);
		}
	});

	return UIGroup;
})(Box)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Radio.as=======94.999276/94.999276
//class laya.ui.Radio extends laya.ui.Button
var Radio=(function(_super){
	function Radio(skin,label){
		this._value=null;
		(label===void 0)&& (label="");
		Radio.__super.call(this,skin,label);
	}

	__class(Radio,'laya.ui.Radio',false,_super);
	var __proto=Radio.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._value=null;
	}

	__proto.preinitialize=function(){
		laya.ui.Component.prototype.preinitialize.call(this);
		this.toggle=false;
		this._autoSize=false;
	}

	__proto.initialize=function(){
		_super.prototype.initialize.call(this);
		this.createText();
		this._text.align="left";
		this._text.valign="top";
		this._text.width=0;
		this.on(/*laya.events.Event.CLICK*/"click",this,__bind(this,this.onClick));
	}

	__proto.onClick=function(e){
		this.selected=true;
	}

	__getset(0,__proto,'value',function(){
		return this._value !=null ? this._value :this.label;
		},function(obj){
		this._value=obj;
	});

	return Radio;
})(Button)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Panel.as=======94.999269/94.999269
//class laya.ui.Panel extends laya.ui.Box
var Panel=(function(_super){
	function Panel(){
		this._content=null;
		this._vScrollBar=null;
		this._hScrollBar=null;
		this._scrollChanged=false;
		Panel.__super.call(this);
		this.width=this.height=100;
	}

	__class(Panel,'laya.ui.Panel',false,_super);
	var __proto=Panel.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		laya.ui.Component.prototype.destroy.call(this,destroyChild);
		this._content && this._content.destroy(destroyChild);
		this._vScrollBar && this._vScrollBar.destroy(destroyChild);
		this._hScrollBar && this._hScrollBar.destroy(destroyChild);
		this._vScrollBar=null;
		this._hScrollBar=null;
		this._content=null;
	}

	__proto.destroyChildren=function(){
		this._content.destroyChildren();
	}

	__proto.createChildren=function(){
		laya.display.Node.prototype.addChild.call(this,this._content=new Box());
	}

	__proto.addChild=function(child){
		child.on(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setScrollChanged();
		return this._content.addChild(child);
	}

	__proto.onResize=function(){
		this._setScrollChanged();
	}

	__proto.addChildAt=function(child,index){
		child.on(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setScrollChanged();
		return this._content.addChildAt(child,index);
	}

	__proto.removeChild=function(child){
		child.off(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setScrollChanged();
		return this._content.removeChild(child);
	}

	__proto.removeChildAt=function(index){
		this.getChildAt(index).off(/*laya.events.Event.RESIZE*/"resize",this,__bind(this,this.onResize));
		this._setScrollChanged();
		return this._content.removeChildAt(index);
	}

	__proto.removeChildren=function(beginIndex,endIndex){
		(beginIndex===void 0)&& (beginIndex=0);
		(endIndex===void 0)&& (endIndex=0x7fffffff);
		for (var i=this._content.numChildren-1;i >-1;i--){
			this._content.removeChildAt(i);
		}
		this._setScrollChanged();
		return this;
	}

	__proto.getChildAt=function(index){
		return this._content.getChildAt(index);
	}

	__proto.getChildByName=function(name){
		return this._content.getChildByName(name);
	}

	__proto.getChildIndex=function(child){
		return this._content.getChildIndex(child);
	}

	__proto.changeScroll=function(){
		this._scrollChanged=false;
		var contentW=this.contentWidth || 1;
		var contentH=this.contentHeight || 1;
		var vscroll=this._vScrollBar;
		var hscroll=this._hScrollBar;
		var vShow=vscroll && contentH > this._height;
		var hShow=hscroll && contentW > this._width;
		var showWidth=vShow ? this._width-vscroll.width :this._width;
		var showHeight=hShow ? this._height-hscroll.height :this._height;
		if (vscroll){
			vscroll.x=this._width-vscroll.width;
			vscroll.y=0;
			vscroll.height=this._height-(hShow ? hscroll.height :0);
			vscroll.scrollSize=Math.max(this._height *0.033,1);
			vscroll.thumbPercent=showHeight / contentH;
			vscroll.setScroll(0,contentH-showHeight,vscroll.value);
		}
		if (hscroll){
			hscroll.x=0;
			hscroll.y=this._height-hscroll.height;
			hscroll.width=this._width-(vShow ? vscroll.width :0);
			hscroll.scrollSize=Math.max(this._width *0.033,1);
			hscroll.thumbPercent=showWidth / contentW;
			hscroll.setScroll(0,contentW-showWidth,hscroll.value);
		}
	}

	__proto.changeSize=function(){
		laya.ui.Component.prototype.changeSize.call(this);
		this.setContentSize(this._width,this._height);
	}

	__proto.setContentSize=function(width,height){
		var content=this._content;
		content.width=width;
		content.height=height;
		content.scrollRect || (content.scrollRect=new Rectangle());
		content.scrollRect.setTo(0,0,width,height);
		content.scrollRect=content.scrollRect;
	}

	__proto.onScrollBarChange=function(scrollBar){
		var rect=this._content.scrollRect;
		if (rect){
			var start=Math.round(scrollBar.value);
			scrollBar.isVertical ? rect.y=start :rect.x=start;
			this._content.scrollRect=rect;
		}
	}

	__proto.scrollTo=function(x,y){
		(x===void 0)&& (x=0);
		(y===void 0)&& (y=0);
		if (this.vScrollBar)this.vScrollBar.value=y;
		if (this.hScrollBar)this.hScrollBar.value=x;
	}

	__proto.refresh=function(){
		this.changeScroll();
	}

	__proto.onScrollStart=function(){
		this._$P.cacheAs || (this._$P.cacheAs=Laya.superGet(Box,this,'cacheAs'));
		Laya.superSet(Box,this,'cacheAs',"none");
		this._hScrollBar && this._hScrollBar.once(/*laya.events.Event.END*/"end",this,__bind(this,this.onScrollEnd));
		this._vScrollBar && this._vScrollBar.once(/*laya.events.Event.END*/"end",this,__bind(this,this.onScrollEnd));
	}

	__proto.onScrollEnd=function(){
		Laya.superSet(Box,this,'cacheAs',this._$P.cacheAs);
	}

	__proto._setScrollChanged=function(){
		if (!this._scrollChanged){
			this._scrollChanged=true;
			this.callLater(__bind(this,this.changeScroll));
		}
	}

	__getset(0,__proto,'cacheAs',_super.prototype._$get_cacheAs,function(value){
		Laya.superSet(Box,this,'cacheAs',value);
		this._$P.cacheAs=null;
		if (value!="none"){
			this._hScrollBar && this._hScrollBar.on(/*laya.events.Event.START*/"start",this,__bind(this,this.onScrollStart));
			this._vScrollBar && this._vScrollBar.on(/*laya.events.Event.START*/"start",this,__bind(this,this.onScrollStart));
			}else {
			this._hScrollBar && this._hScrollBar.off(/*laya.events.Event.START*/"start",this,__bind(this,this.onScrollStart));
			this._vScrollBar && this._vScrollBar.off(/*laya.events.Event.START*/"start",this,__bind(this,this.onScrollStart));
		}
	});

	__getset(0,__proto,'content',function(){
		return this._content;
	});

	__getset(0,__proto,'hScrollBar',function(){
		return this._hScrollBar;
	});

	__getset(0,__proto,'hScrollBarSkin',function(){
		return this._hScrollBar ? this._hScrollBar.skin :null;
		},function(value){
		if (this._hScrollBar==null){
			laya.display.Node.prototype.addChild.call(this,this._hScrollBar=new HScrollBar());
			this._hScrollBar.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onScrollBarChange),[this._hScrollBar]);
			this._hScrollBar.target=this._content;
			this._setScrollChanged();
		}
		this._hScrollBar.skin=value;
	});

	__getset(0,__proto,'vScrollBarSkin',function(){
		return this._vScrollBar ? this._vScrollBar.skin :null;
		},function(value){
		if (this._vScrollBar==null){
			laya.display.Node.prototype.addChild.call(this,this._vScrollBar=new VScrollBar());
			this._vScrollBar.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onScrollBarChange),[this._vScrollBar]);
			this._vScrollBar.target=this._content;
			this._setScrollChanged();
		}
		this._vScrollBar.skin=value;
	});

	__getset(0,__proto,'contentHeight',function(){
		var max=0;
		for (var i=this._content.numChildren-1;i >-1;i--){
			var comp=this._content.getChildAt(i);
			max=Math.max(comp.y+comp.height *comp.scaleY,max);
		}
		return max;
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Box,this,'height',value);
		this._setScrollChanged();
	});

	__getset(0,__proto,'vScrollBar',function(){
		return this._vScrollBar;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Box,this,'width',value);
		this._setScrollChanged();
	});

	__getset(0,__proto,'contentWidth',function(){
		var max=0;
		for (var i=this._content.numChildren-1;i >-1;i--){
			var comp=this._content.getChildAt(i);
			max=Math.max(comp.x+comp.width *comp.scaleX,max);
		}
		return max;
	});

	__getset(0,__proto,'numChildren',function(){
		return this._content.numChildren;
	});

	return Panel;
})(Box)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/List.as=======94.999268/94.999268
//class laya.ui.List extends laya.ui.Box
var List=(function(_super){
	function List(){
		this.selectHandler=null;
		this.renderHandler=null;
		this.mouseHandler=null;
		this.selectEnable=false;
		this.totalPage=0;
		this._content=null;
		this._scrollBar=null;
		this._itemRender=null;
		this._repeatX=0;
		this._repeatY=0;
		this._repeatX2=0;
		this._repeatY2=0;
		this._spaceX=0;
		this._spaceY=0;
		this._array=null;
		this._startIndex=0;
		this._selectedIndex=-1;
		this._page=0;
		this._isVertical=true;
		this._cellSize=20;
		this._cellOffset=0;
		this._isMoved=false;
		this.cacheContent=false;
		this._createdLine=0;
		this._cellChanged=false;
		List.__super.call(this);
		this._cells=[];
		this._offset=new Point();
	}

	__class(List,'laya.ui.List',false,_super);
	var __proto=List.prototype;
	Laya.imps(__proto,{"laya.ui.IItem":true,"laya.ui.IRender":true})
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this._content && this._content.destroy(destroyChild);
		this._scrollBar && this._scrollBar.destroy(destroyChild);
		laya.ui.Component.prototype.destroy.call(this,destroyChild);
		this._content=null;
		this._scrollBar=null;
		this._itemRender=null;
		this._cells=null;
		this._array=null;
		this.selectHandler=this.renderHandler=this.mouseHandler=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._content=new Box());
	}

	__proto.onScrollStart=function(){
		this._$P.cacheAs || (this._$P.cacheAs=Laya.superGet(Box,this,'cacheAs'));
		Laya.superSet(Box,this,'cacheAs',"none");
		this._scrollBar.once(/*laya.events.Event.END*/"end",this,__bind(this,this.onScrollEnd));
	}

	__proto.onScrollEnd=function(){
		Laya.superSet(Box,this,'cacheAs',this._$P.cacheAs);
	}

	__proto._removePreScrollBar=function(){
		var preNode=this.removeChildByName("scrollBar");
		if (preNode)preNode.destroy(true);
	}

	__proto.changeCells=function(){
		this._cellChanged=false;
		if (this._itemRender){
			this.scrollBar=this.getChildByName("scrollBar");
			var cell=this._getOneCell();
			var cellWidth=(cell.width+this._spaceX)|| 1;
			var cellHeight=(cell.height+this._spaceY)|| 1;
			if (this._width > 0)this._repeatX2=this._isVertical ? Math.round(this._width / cellWidth):Math.ceil(this._width / cellWidth);
			if (this._height > 0)this._repeatY2=this._isVertical ? Math.ceil(this._height / cellHeight):Math.round(this._height / cellHeight);
			var listWidth=this._width ? this._width :(cellWidth *this.repeatX-this._spaceX);
			var listHeight=this._height ? this._height :(cellHeight *this.repeatY-this._spaceY);
			this._cellSize=this._isVertical ? cellHeight :cellWidth;
			this._cellOffset=this._isVertical ? (cellHeight *Math.max(this._repeatY2,this._repeatY)-listHeight-this._spaceY):(cellWidth *Math.max(this._repeatX2,this._repeatX)-listWidth-this._spaceX);
			if (this._isVertical && this._scrollBar)this._scrollBar.height=listHeight;
			else if (!this._isVertical && this._scrollBar)this._scrollBar.width=listWidth;
			this.setContentSize(listWidth,listHeight);
			var numX=this._isVertical ? this.repeatX :this.repeatY;
			var numY=(this._isVertical ? this.repeatY :this.repeatX)+(this._scrollBar ? 1 :0);
			this._createItems(0,numX,numY);
			this._createdLine=numY;
			if (this._array){
				this.array=this._array;
				this.runCallLater(__bind(this,this.renderItems));
			}
		}
	}

	__proto._getOneCell=function(){
		if (this._cells.length==0){
			var item=this.createItem();
			this._offset.setTo(item.x,item.y);
			if (this.cacheContent)return item;
			this._cells.push(item);
		}
		return this._cells[0];
	}

	__proto._createItems=function(startY,numX,numY){
		var box=this._content;
		var cell=this._getOneCell();
		var cellWidth=cell.width+this._spaceX;
		var cellHeight=cell.height+this._spaceY;
		if (this.cacheContent){
			var cacheBox=new Box();
			cacheBox.cacheAsBitmap=true;
			cacheBox.pos((this._isVertical ? 0 :startY)*cellWidth,(this._isVertical ? startY :0)*cellHeight);
			this._content.addChild(cacheBox);
			this._content.optimizeScrollRect=true;
			box=cacheBox;
			}else {
			var arr=[];
			for (var i=this._cells.length-1;i >-1;i--){
				var item=this._cells[i];
				item.removeSelf();
				arr.push(item);
			}
			this._cells.length=0;
		}
		for (var k=startY;k < numY;k++){
			for (var l=0;l < numX;l++){
				if (arr && arr.length){
					cell=arr.pop();
					}else {
					cell=this.createItem();
				}
				cell.x=(this._isVertical ? l :k)*cellWidth-box.x;
				cell.y=(this._isVertical ? k :l)*cellHeight-box.y;
				cell.name="item"+(k *numX+l);
				box.addChild(cell);
				this.addCell(cell);
			}
		}
	}

	__proto.createItem=function(){
		var arr=[];
		if ((typeof this._itemRender=='function')){
			var box=new this._itemRender();
			}else {
			box=View.createComp(this._itemRender,null,null,arr)
		}
		if (arr.length==0 && box._watchMap){
			var watchMap=box._watchMap;
			for (var name in watchMap){
				var a=watchMap[name];
				for (var i=0;i < a.length;i++){
					var watcher=a[i];
					arr.push(watcher.comp,watcher.prop,watcher.value)
				}
			}
		}
		if (arr.length)box["_$bindData"]=arr;
		return box;
	}

	__proto.addCell=function(cell){
		cell.on(/*laya.events.Event.CLICK*/"click",this,__bind(this,this.onCellMouse));
		cell.on(/*laya.events.Event.RIGHT_CLICK*/"rightclick",this,__bind(this,this.onCellMouse));
		cell.on(/*laya.events.Event.MOUSE_OVER*/"mouseover",this,__bind(this,this.onCellMouse));
		cell.on(/*laya.events.Event.MOUSE_OUT*/"mouseout",this,__bind(this,this.onCellMouse));
		cell.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this.onCellMouse));
		cell.on(/*laya.events.Event.MOUSE_UP*/"mouseup",this,__bind(this,this.onCellMouse));
		this._cells.push(cell);
	}

	__proto.initItems=function(){
		if (!this._itemRender && this.getChildByName("item0")!=null){
			this.repeatX=1;
			var count=0;
			count=0;
			for (var i=0;i < 10000;i++){
				var cell=this.getChildByName("item"+i);
				if (cell){
					this.addCell(cell);
					count++;
					continue ;
				}
				break ;
			}
			this.repeatY=count;
		}
	}

	__proto.setContentSize=function(width,height){
		this._content.width=width;
		this._content.height=height;
		if (this._scrollBar || this._offset.x !=0 || this._offset.y !=0){
			this._content.scrollRect || (this._content.scrollRect=new Rectangle());
			this._content.scrollRect.setTo(-this._offset.x,-this._offset.y,width,height);
			this._content.scrollRect=this._content.scrollRect;
		}
		this.event(/*laya.events.Event.RESIZE*/"resize");
	}

	__proto.onCellMouse=function(e){
		if (e.type==/*laya.events.Event.MOUSE_DOWN*/"mousedown")this._isMoved=false;
		var cell=e.currentTarget;
		var index=this._startIndex+this._cells.indexOf(cell);
		if (index < 0)return;
		if (e.type==/*laya.events.Event.CLICK*/"click" || e.type==/*laya.events.Event.RIGHT_CLICK*/"rightclick"){
			if (this.selectEnable && !this._isMoved)this.selectedIndex=index;
			else this.changeCellState(cell,true,0);
			}else if ((e.type==/*laya.events.Event.MOUSE_OVER*/"mouseover" || e.type==/*laya.events.Event.MOUSE_OUT*/"mouseout")&& this._selectedIndex!=index){
			this.changeCellState(cell,e.type==/*laya.events.Event.MOUSE_OVER*/"mouseover",0);
		}
		this.mouseHandler && this.mouseHandler.runWith([e,index]);
	}

	__proto.changeCellState=function(cell,visable,index){
		var selectBox=cell.getChildByName("selectBox");
		if (selectBox){
			this.selectEnable=true;
			selectBox.visible=visable;
			selectBox.index=index;
		}
	}

	__proto.changeSize=function(){
		laya.ui.Component.prototype.changeSize.call(this);
		this.setContentSize(this.width,this.height);
		if (this._scrollBar)this.callLater(__bind(this,this.onScrollBarChange));
	}

	__proto.onScrollBarChange=function(e){
		this.runCallLater(__bind(this,this.changeCells));
		var scrollValue=this._scrollBar.value;
		var lineX=(this._isVertical ? this.repeatX :this.repeatY);
		var lineY=(this._isVertical ? this.repeatY :this.repeatX);
		var scrollLine=Math.floor(scrollValue / this._cellSize);
		if (!this.cacheContent){
			var index=scrollLine *lineX;
			var num=0;
			if (index > this._startIndex){
				num=index-this._startIndex;
				var down=true;
				var toIndex=this._startIndex+lineX *(lineY+1);
				this._isMoved=true;
				}else if (index < this._startIndex){
				num=this._startIndex-index;
				down=false;
				toIndex=this._startIndex-1;
				this._isMoved=true;
			}
			for (var i=0;i < num;i++){
				if (down){
					var cell=this._cells.shift();
					this._cells[this._cells.length]=cell;
					var cellIndex=toIndex+i;
					}else {
					cell=this._cells.pop();
					this._cells.unshift(cell);
					cellIndex=toIndex-i;
				};
				var pos=Math.floor(cellIndex / lineX)*this._cellSize;
				this._isVertical ? cell.y=pos :cell.x=pos;
				this.renderItem(cell,cellIndex);
			}
			this._startIndex=index;
			this.changeSelectStatus();
			}else {
			num=(lineY+1);
			if (this._createdLine-scrollLine < num){
				this._createItems(this._createdLine,lineX,this._createdLine+num);
				this.renderItems(this._createdLine *lineX,0);
				this._createdLine+=num;
			}
		};
		var r=this._content.scrollRect;
		if (this._isVertical){
			r.y=scrollValue-this._offset.y;
			r.x=-this._offset.x;
			}else {
			r.y=-this._offset.y;
			r.x=scrollValue-this._offset.x;
		}
		this._content.scrollRect=r;
	}

	__proto.posCell=function(cell,cellIndex){
		if (!this._scrollBar)return;
		var lineX=(this._isVertical ? this.repeatX :this.repeatY);
		var lineY=(this._isVertical ? this.repeatY :this.repeatX);
		var pos=Math.floor(cellIndex / lineX)*this._cellSize;
		this._isVertical ? cell.y=pos :cell.x=pos;
	}

	__proto.changeSelectStatus=function(){
		for (var i=0,n=this._cells.length;i < n;i++){
			this.changeCellState(this._cells[i],this._selectedIndex==this._startIndex+i,1);
		}
	}

	__proto.renderItems=function(from,to){
		(from===void 0)&& (from=0);
		(to===void 0)&& (to=0);
		for (var i=from,n=to || this._cells.length;i < n;i++){
			this.renderItem(this._cells[i],this._startIndex+i);
		}
		this.changeSelectStatus();
	}

	__proto.renderItem=function(cell,index){
		if (this._array && index >=0 && index < this._array.length){
			cell.visible=true;
			if (cell._$bindData){
				cell._dataSource=this._array[index];
				this._bindData(cell,this._array[index]);
			}else cell.dataSource=this._array[index];
			if (!this.cacheContent){
				this.posCell(cell,index);
			}
			if (this.hasListener(/*laya.events.Event.RENDER*/"render"))this.event(/*laya.events.Event.RENDER*/"render",[cell,index]);
			if (this.renderHandler)this.renderHandler.runWith([cell,index]);
			}else {
			cell.visible=false;
			cell.dataSource=null;
		}
	}

	__proto._bindData=function(cell,data){
		var arr=cell._$bindData;
		for (var i=0,n=arr.length;i < n;i++){
			var ele=arr[i++];
			var prop=arr[i++];
			var value=arr[i];
			var fun=UIUtils.getBindFun(value);
			ele[prop]=fun.call(this,data);
		}
	}

	__proto.refresh=function(){
		this.array=this._array;
	}

	__proto.getItem=function(index){
		if (index >-1 && index < this._array.length){
			return this._array[index];
		}
		return null;
	}

	__proto.changeItem=function(index,source){
		if (index >-1 && index < this._array.length){
			this._array[index]=source;
			if (index >=this._startIndex && index < this._startIndex+this._cells.length){
				this.renderItem(this.getCell(index),index);
			}
		}
	}

	__proto.setItem=function(index,source){
		this.changeItem(index,source);
	}

	__proto.addItem=function(souce){
		this._array.push(souce);
		this.array=this._array;
	}

	__proto.addItemAt=function(souce,index){
		this._array.splice(index,0,souce);
		this.array=this._array;
	}

	__proto.deleteItem=function(index){
		this._array.splice(index,1);
		this.array=this._array;
	}

	__proto.getCell=function(index){
		this.runCallLater(__bind(this,this.changeCells));
		if (index >-1 && this._cells){
			return this._cells[(index-this._startIndex)% this._cells.length];
		}
		return null;
	}

	__proto.scrollTo=function(index){
		if (this._scrollBar){
			var numX=this._isVertical ? this.repeatX :this.repeatY;
			this._scrollBar.value=Math.floor(index / numX)*this._cellSize;
			}else {
			this.startIndex=index;
		}
	}

	__proto.tweenTo=function(index,time,complete){
		(time===void 0)&& (time=200);
		if (this._scrollBar){
			var numX=this._isVertical ? this.repeatX :this.repeatY;
			Tween.to(this._scrollBar,{value:Math.floor(index / numX)*this._cellSize},time,null,complete,0,true);
			}else {
			this.startIndex=index;
			if (complete)complete.run();
		}
	}

	__proto._setCellChanged=function(){
		if (!this._cellChanged){
			this._cellChanged=true;
			this.callLater(__bind(this,this.changeCells));
		}
	}

	__proto.commitMeasure=function(){
		this.runCallLater(__bind(this,this.changeCells));
	}

	__getset(0,__proto,'length',function(){
		return this._array ? this._array.length :0;
	});

	__getset(0,__proto,'startIndex',function(){
		return this._startIndex;
		},function(value){
		this._startIndex=value > 0 ? value :0;
		this.callLater(__bind(this,this.renderItems));
	});

	__getset(0,__proto,'array',function(){
		return this._array;
		},function(value){
		this.runCallLater(__bind(this,this.changeCells));
		this._array=value || [];
		var length=this._array.length;
		this.totalPage=Math.ceil(length / (this.repeatX *this.repeatY));
		this._selectedIndex=this._selectedIndex < length ? this._selectedIndex :length-1;
		this.startIndex=this._startIndex;
		if (this._scrollBar){
			this._scrollBar.stopScroll();
			var numX=this._isVertical ? this.repeatX :this.repeatY;
			var numY=this._isVertical ? this.repeatY :this.repeatX;
			var lineCount=Math.ceil(length / numX);
			var total=this._cellOffset > 0 ? this.totalPage+1 :this.totalPage;
			if (total > 1){
				this._scrollBar.scrollSize=this._cellSize;
				this._scrollBar.thumbPercent=numY / lineCount;
				this._scrollBar.setScroll(0,(lineCount-numY)*this._cellSize+this._cellOffset,this._scrollBar.value);
				this._scrollBar.target=this._content;
				}else {
				this._scrollBar.setScroll(0,0,0);
				this._scrollBar.target=this._content;
			}
		}
	});

	__getset(0,__proto,'selection',function(){
		return this.getCell(this._selectedIndex);
		},function(value){
		this.selectedIndex=this._startIndex+this._cells.indexOf(value);
	});

	__getset(0,__proto,'selectedItem',function(){
		return this._selectedIndex !=-1 ? this._array[this._selectedIndex] :null;
		},function(value){
		this.selectedIndex=this._array.indexOf(value);
	});

	__getset(0,__proto,'cells',function(){
		this.runCallLater(__bind(this,this.changeCells));
		return this._cells;
	});

	__getset(0,__proto,'spaceY',function(){
		return this._spaceY;
		},function(value){
		this._spaceY=value;
		this._setCellChanged();
	});

	__getset(0,__proto,'page',function(){
		return this._page;
		},function(value){
		this._page=value
		if (this._array){
			this._page=value > 0 ? value :0;
			this._page=this._page < this.totalPage ? this._page :this.totalPage-1;
			this.startIndex=this._page *this.repeatX *this.repeatY;
		}
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		if (value !=this._height){
			Laya.superSet(Box,this,'height',value);
			this._setCellChanged();
		}
	});

	__getset(0,__proto,'repeatY',function(){
		return this._repeatY > 0 ? this._repeatY :this._repeatY2 > 0 ? this._repeatY2 :1;
		},function(value){
		this._repeatY=value;
		this._setCellChanged();
	});

	__getset(0,__proto,'repeatX',function(){
		return this._repeatX > 0 ? this._repeatX :this._repeatX2 > 0 ? this._repeatX2 :1;
		},function(value){
		this._repeatX=value;
		this._setCellChanged();
	});

	__getset(0,__proto,'spaceX',function(){
		return this._spaceX;
		},function(value){
		this._spaceX=value;
		this._setCellChanged();
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		if (value !=this._width){
			Laya.superSet(Box,this,'width',value);
			this._setCellChanged();
		}
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if (((typeof value=='number')&& Math.floor(value)==value)|| (typeof value=='string'))this.selectedIndex=parseInt(value);
		else if ((value instanceof Array))this.array=value
		else Laya.superSet(Box,this,'dataSource',value);
	});

	__getset(0,__proto,'scrollBar',function(){
		return this._scrollBar;
		},function(value){
		if (this._scrollBar !=value){
			this._scrollBar=value;
			if (value){
				this._isVertical=this._scrollBar.isVertical;
				this.addChild(this._scrollBar);
				this._scrollBar.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onScrollBarChange));
			}
		}
	});

	__getset(0,__proto,'cacheAs',_super.prototype._$get_cacheAs,function(value){
		Laya.superSet(Box,this,'cacheAs',value);
		if (this._scrollBar){
			this._$P.cacheAs=null;
			if (value!="none")this._scrollBar.on(/*laya.events.Event.START*/"start",this,__bind(this,this.onScrollStart));
			else this._scrollBar.off(/*laya.events.Event.START*/"start",this,__bind(this,this.onScrollStart));
		}
	});

	__getset(0,__proto,'itemRender',function(){
		return this._itemRender;
		},function(value){
		if (this._itemRender !=value){
			this._itemRender=value;
			for (var i=this._cells.length-1;i >-1;i--){
				this._cells[i].destroy();
			}
			this._cells.length=0;
			this._setCellChanged();
		}
	});

	__getset(0,__proto,'content',function(){
		return this._content;
	});

	__getset(0,__proto,'hScrollBarSkin',function(){
		return this._scrollBar ? this._scrollBar.skin :null;
		},function(value){
		this._removePreScrollBar();
		var scrollBar=new HScrollBar();
		scrollBar.name="scrollBar";
		scrollBar.bottom=0;
		if (value && value !=" ")
			scrollBar.skin=value;
		this.scrollBar=scrollBar;
		this.addChild(scrollBar);
		this._setCellChanged();
	});

	__getset(0,__proto,'selectedIndex',function(){
		return this._selectedIndex;
		},function(value){
		if (this._selectedIndex !=value){
			this._selectedIndex=value;
			this.changeSelectStatus();
			this.event(/*laya.events.Event.CHANGE*/"change");
			this.selectHandler && this.selectHandler.runWith(value);
			this.startIndex=this._startIndex;
		}
	});

	__getset(0,__proto,'vScrollBarSkin',function(){
		return this._scrollBar ? this._scrollBar.skin :null;
		},function(value){
		this._removePreScrollBar();
		var scrollBar=new VScrollBar();
		scrollBar.name="scrollBar";
		scrollBar.right=0;
		if (value && value !=" ")
			scrollBar.skin=value;
		this.scrollBar=scrollBar;
		this.addChild(scrollBar);
		this._setCellChanged();
	});

	return List;
})(Box)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/CheckBox.as=======94.999265/94.999265
//class laya.ui.CheckBox extends laya.ui.Button
var CheckBox=(function(_super){
	function CheckBox(skin,label){
		(label===void 0)&& (label="");
		CheckBox.__super.call(this,skin,label);
	}

	__class(CheckBox,'laya.ui.CheckBox',false,_super);
	var __proto=CheckBox.prototype;
	__proto.preinitialize=function(){
		laya.ui.Component.prototype.preinitialize.call(this);
		this.toggle=true;
		this._autoSize=false;
	}

	__proto.initialize=function(){
		_super.prototype.initialize.call(this);
		this.createText();
		this._text.align="left";
		this._text.valign="top";
		this._text.width=0;
	}

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		if ((typeof value=='boolean'))this.selected=value;
		else if ((typeof value=='string'))this.selected=value=="true";
		else Laya.superSet(Button,this,'dataSource',value);
	});

	return CheckBox;
})(Button)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Tree.as=======94.999258/94.999258
//class laya.ui.Tree extends laya.ui.Box
var Tree=(function(_super){
	function Tree(){
		this._list=null;
		this._source=null;
		this._renderHandler=null;
		this._spaceLeft=10;
		this._spaceBottom=0;
		this._keepStatus=true;
		Tree.__super.call(this);
		this.width=this.height=200;
	}

	__class(Tree,'laya.ui.Tree',false,_super);
	var __proto=Tree.prototype;
	Laya.imps(__proto,{"laya.ui.IRender":true})
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		laya.ui.Component.prototype.destroy.call(this,destroyChild);
		this._list && this._list.destroy(destroyChild);
		this._list=null;
		this._source=null;
		this._renderHandler=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._list=new List());
		this._list.renderHandler=Handler.create(this,__bind(this,this.renderItem),null,false);
		this._list.repeatX=1;
		this._list.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onListChange));
	}

	__proto.onListChange=function(e){
		this.event(/*laya.events.Event.CHANGE*/"change");
	}

	__proto.getArray=function(){
		var arr=[];
		var item;
		/*for each*/for(var $each_item in this._source){
			item=this._source[$each_item];
			if (this.getParentOpenStatus(item)){
				item.x=this._spaceLeft *this.getDepth(item);
				arr.push(item);
			}
		}
		return arr;
	}

	__proto.getDepth=function(item,num){
		(num===void 0)&& (num=0);
		if (item.nodeParent==null)return num;
		else return this.getDepth(item.nodeParent,num+1);
	}

	__proto.getParentOpenStatus=function(item){
		var parent=item.nodeParent;
		if (parent==null){
			return true;
			}else {
			if (parent.isOpen){
				if (parent.nodeParent !=null)return this.getParentOpenStatus(parent);
				else return true;
				}else {
				return false;
			}
		}
	}

	__proto.renderItem=function(cell,index){
		var item=cell.dataSource;
		if (item){
			cell.left=item.x;
			var arrow=cell.getChildByName("arrow");
			if (arrow){
				if (item.hasChild){
					arrow.visible=true;
					arrow.index=item.isOpen ? 1 :0;
					arrow.tag=index;
					arrow.off(/*laya.events.Event.CLICK*/"click",this,__bind(this,this.onArrowClick));
					arrow.on(/*laya.events.Event.CLICK*/"click",this,__bind(this,this.onArrowClick));
					}else {
					arrow.visible=false;
				}
			};
			var folder=cell.getChildByName("folder");
			if (folder){
				if (folder.clipY==2){
					folder.index=item.isDirectory ? 0 :1;
					}else {
					folder.index=item.isDirectory ? item.isOpen ? 1 :0 :2;
				}
			}
			this._renderHandler && this._renderHandler.runWith([cell,index]);
		}
	}

	__proto.onArrowClick=function(e){
		var arrow=e.currentTarget;
		var index=arrow.tag;
		this._list.array[index].isOpen=!this._list.array[index].isOpen;
		this.event(/*laya.events.Event.OPEN*/"open");
		this._list.array=this.getArray();
	}

	__proto.setItemState=function(index,isOpen){
		if (!this._list.array[index])return;
		this._list.array[index].isOpen=isOpen;
		this._list.array=this.getArray();
	}

	__proto.fresh=function(){
		this._list.array=this.getArray();
		this.repaint();
	}

	__proto.parseXml=function(xml,source,nodeParent,isRoot){
		var obj;
		var list=xml.childNodes;
		var childCount=list.length;
		if (!isRoot){
			obj={};
			var list2=xml.attributes;
			var attrs;
			/*for each*/for(var $each_attrs in list2){
				attrs=list2[$each_attrs];
				var prop=attrs.nodeName;
				var value=attrs.nodeValue;
				obj[prop]=value=="true" ? true :value=="false" ? false :value;
			}
			obj.nodeParent=nodeParent;
			if (childCount > 0)obj.isDirectory=true;
			obj.hasChild=childCount > 0;
			source.push(obj);
		}
		for (var i=0;i < childCount;i++){
			var node=list[i];
			this.parseXml(node,source,obj,false);
		}
	}

	__proto.parseOpenStatus=function(oldSource,newSource){
		for (var i=0,n=newSource.length;i < n;i++){
			var newItem=newSource[i];
			if (newItem.isDirectory){
				for (var j=0,m=oldSource.length;j < m;j++){
					var oldItem=oldSource[j];
					if (oldItem.isDirectory && this.isSameParent(oldItem,newItem)&& newItem.label==oldItem.label){
						newItem.isOpen=oldItem.isOpen;
						break ;
					}
				}
			}
		}
	}

	__proto.isSameParent=function(item1,item2){
		if (item1.nodeParent==null && item2.nodeParent==null)return true;
		else if (item1.nodeParent==null || item2.nodeParent==null)return false
		else {
			if (item1.nodeParent.label==item2.nodeParent.label)return this.isSameParent(item1.nodeParent,item2.nodeParent);
			else return false;
		}
	}

	__proto.filter=function(key){
		if (Boolean(key)){
			var result=[];
			this.getFilterSource(this._source,result,key);
			this._list.array=result;
			}else {
			this._list.array=this.getArray();
		}
	}

	__proto.getFilterSource=function(array,result,key){
		key=key.toLocaleLowerCase();
		var item;
		/*for each*/for(var $each_item in array){
			item=array[$each_item];
			if (!item.isDirectory && String(item.label).toLowerCase().indexOf(key)>-1){
				item.x=0;
				result.push(item);
			}
			if (item.child && item.child.length > 0){
				this.getFilterSource(item.child,result,key);
			}
		}
	}

	__getset(0,__proto,'xml',null,function(value){
		var arr=[];
		this.parseXml(value.childNodes[0],arr,null,true);
		this.array=arr;
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Box,this,'height',value);
		this._list.height=value;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Box,this,'width',value);
		this._list.width=value;
	});

	__getset(0,__proto,'selectedIndex',function(){
		return this._list.selectedIndex;
		},function(value){
		this._list.selectedIndex=value;
	});

	__getset(0,__proto,'dataSource',_super.prototype._$get_dataSource,function(value){
		this._dataSource=value;
		Laya.superSet(Box,this,'dataSource',value);
	});

	__getset(0,__proto,'scrollBar',function(){
		return this._list.scrollBar;
	});

	__getset(0,__proto,'spaceLeft',function(){
		return this._spaceLeft;
		},function(value){
		this._spaceLeft=value;
	});

	__getset(0,__proto,'renderHandler',function(){
		return this._renderHandler;
		},function(value){
		this._renderHandler=value;
	});

	__getset(0,__proto,'itemRender',function(){
		return this._list.itemRender;
		},function(value){
		this._list.itemRender=value;
	});

	__getset(0,__proto,'mouseHandler',function(){
		return this._list.mouseHandler;
		},function(value){
		this._list.mouseHandler=value;
	});

	__getset(0,__proto,'spaceBottom',function(){
		return this._list.spaceY;
		},function(value){
		this._list.spaceY=value;
	});

	__getset(0,__proto,'selectedPath',function(){
		if (this._list.selectedItem){
			return this._list.selectedItem.path;
		}
		return null;
	});

	__getset(0,__proto,'scrollBarSkin',function(){
		return this._list.vScrollBarSkin;
		},function(value){
		this._list.vScrollBarSkin=value;
	});

	__getset(0,__proto,'source',function(){
		return this._source;
	});

	__getset(0,__proto,'array',function(){
		return this._list.array;
		},function(value){
		if (this._keepStatus && this._list.array && value){
			this.parseOpenStatus(this._list.array,value);
		}
		this._source=value;
		this._list.array=this.getArray();
	});

	__getset(0,__proto,'selectedItem',function(){
		return this._list.selectedItem;
		},function(value){
		this._list.selectedItem=value;
	});

	__getset(0,__proto,'list',function(){
		return this._list;
	});

	__getset(0,__proto,'keepStatus',function(){
		return this._keepStatus;
		},function(value){
		this._keepStatus=value;
	});

	return Tree;
})(Box)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/VScrollBar.as=======94.999250/94.999250
//class laya.ui.VScrollBar extends laya.ui.ScrollBar
var VScrollBar=(function(_super){
	function VScrollBar(){
		VScrollBar.__super.call(this);;
	}

	__class(VScrollBar,'laya.ui.VScrollBar',false,_super);
	return VScrollBar;
})(ScrollBar)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/TextInput.as=======94.999250/94.999250
//class laya.ui.TextInput extends laya.ui.Label
var TextInput=(function(_super){
	function TextInput(text){
		this._bg=null;
		this._skin=null;
		TextInput.__super.call(this);
		(text===void 0)&& (text="");
		this.text=text;
		this.skin=this.skin;
	}

	__class(TextInput,'laya.ui.TextInput',false,_super);
	var __proto=TextInput.prototype;
	__proto.preinitialize=function(){
		this.mouseEnabled=true;
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._bg && this._bg.destroy();
		this._bg=null;
	}

	__proto.createChildren=function(){
		this.addChild(this._tf=new Input());
		this._tf.padding=Styles.inputLabelPadding;
		this._tf.on(/*laya.events.Event.INPUT*/"input",this,__bind(this,this._onInput));
		this._tf.on(/*laya.events.Event.ENTER*/"enter",this,__bind(this,this._onEnter));
		this._tf.on(/*laya.events.Event.BLUR*/"blur",this,__bind(this,this._onBlur));
		this._tf.on(/*laya.events.Event.FOCUS*/"focus",this,__bind(this,this._onFocus));
	}

	__proto._onFocus=function(){
		this.event(/*laya.events.Event.FOCUS*/"focus",this);
	}

	__proto._onBlur=function(){
		this.event(/*laya.events.Event.BLUR*/"blur",this);
	}

	__proto._onInput=function(){
		this.event(/*laya.events.Event.INPUT*/"input",this);
	}

	__proto._onEnter=function(){
		this.event(/*laya.events.Event.ENTER*/"enter",this);
	}

	__proto.initialize=function(){
		this.width=128;
		this.height=22;
	}

	__proto.select=function(){
		(this._tf).select();
	}

	__proto.setSelection=function(startIndex,endIndex){
		(this._tf).setSelection(startIndex,endIndex);
	}

	__getset(0,__proto,'type',function(){
		return (this._tf).type;
		},function(value){
		(this._tf).type=value;
	});

	__getset(0,__proto,'asPassword',function(){
		return (this._tf).asPassword;
		},function(value){
		(this._tf).asPassword=value;
	});

	__getset(0,__proto,'maxChars',function(){
		return (this._tf).maxChars;
		},function(value){
		(this._tf).maxChars=value;
	});

	__getset(0,__proto,'promptColor',function(){
		return (this._tf).promptColor;
		},function(value){
		(this._tf).promptColor=value;
	});

	__getset(0,__proto,'prompt',function(){
		return (this._tf).prompt;
		},function(value){
		(this._tf).prompt=value;
	});

	__getset(0,__proto,'text',_super.prototype._$get_text,function(value){
		if (this._tf.text !=value){
			value=value+"";
			this._tf.text=value;
			this.event(/*laya.events.Event.CHANGE*/"change");
		}
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Label,this,'height',value);
		this._bg && (this._bg.height=value);
	});

	__getset(0,__proto,'inputElementYAdjuster',function(){
		return (this._tf).inputElementYAdjuster;
		},function(value){
		(this._tf).inputElementYAdjuster=value;
	});

	__getset(0,__proto,'bg',function(){
		return this._bg;
		},function(value){
		this.graphics=this._bg=value;
	});

	__getset(0,__proto,'inputElementXAdjuster',function(){
		return (this._tf).inputElementXAdjuster;
		},function(value){
		(this._tf).inputElementXAdjuster=value;
	});

	__getset(0,__proto,'editable',function(){
		return (this._tf).editable;
		},function(value){
		(this._tf).editable=value;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Label,this,'width',value);
		this._bg && (this._bg.width=value);
	});

	__getset(0,__proto,'multiline',function(){
		return (this._tf).multiline;
		},function(value){
		(this._tf).multiline=value;
	});

	__getset(0,__proto,'restrict',function(){
		return (this._tf).restrict;
		},function(pattern){
		(this._tf).restrict=pattern;
	});

	__getset(0,__proto,'focus',function(){
		return (this._tf).focus;
		},function(value){
		(this._tf).focus=value;
	});

	__getset(0,__proto,'skin',function(){
		return this._skin;
		},function(value){
		if (this._skin !=value){
			this._skin=value;
			this._bg || (this.graphics=this._bg=new AutoBitmap());
			this._bg.source=Loader.getRes(this._skin);
			this._width && (this._bg.width=this._width);
			this._height && (this._bg.height=this._height);
		}
	});

	__getset(0,__proto,'sizeGrid',function(){
		return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(","):null;
		},function(value){
		this._bg || (this.graphics=this._bg=new AutoBitmap());
		this._bg.sizeGrid=UIUtils.fillArray(Styles.defaultSizeGrid,value,Number);
	});

	return TextInput;
})(Label)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/FontClip.as=======94.999239/94.999239
//class laya.ui.FontClip extends laya.ui.Clip
var FontClip=(function(_super){
	function FontClip(skin,sheet){
		this._valueArr=null;
		this._indexMap=null;
		this._sheet=null;
		this._direction="horizontal";
		this._spaceX=0;
		this._spaceY=0;
		this._align="left";
		this._wordsW=0;
		this._wordsH=0;
		FontClip.__super.call(this);
		if (skin)this.skin=skin;
		if (sheet)this.sheet=sheet;
	}

	__class(FontClip,'laya.ui.FontClip',false,_super);
	var __proto=FontClip.prototype;
	__proto.createChildren=function(){
		this._bitmap=new AutoBitmap();
		this.on(/*laya.events.Event.LOADED*/"loaded",this,__bind(this,this._onClipLoaded));
	}

	__proto._onClipLoaded=function(){
		this.callLater(__bind(this,this.changeValue));
	}

	__proto.changeValue=function(){
		if (!this._sources)return;
		if (!this._valueArr)return;
		this.graphics.clear(true);
		var texture;
		texture=this._sources[0];
		if (!texture)return;
		var isHorizontal=(this._direction=="horizontal");
		if (isHorizontal){
			this._wordsW=this._valueArr.length *(texture.sourceWidth+this.spaceX);
			this._wordsH=texture.sourceHeight;
			}else{
			this._wordsW=texture.sourceWidth;
			this._wordsH=(texture.sourceHeight+this.spaceY)*this._valueArr.length;
		};
		var dX=0;
		if (this._width){
			switch(this._align){
				case "center":
					dX=0.5 *(this._width-this._wordsW);
					break ;
				case "right":
					dX=this._width-this._wordsW;
					break ;
				default :
					dX=0;
				}
		}
		for (var i=0,sz=this._valueArr.length;i < sz;i++){
			var index=this._indexMap[this._valueArr.charAt(i)];
			if (!this.sources[index])continue ;
			texture=this.sources[index];
			if (isHorizontal)this.graphics.drawTexture(texture,dX+i *(texture.sourceWidth+this.spaceX),0,texture.sourceWidth,texture.sourceHeight);
			else this.graphics.drawTexture(texture,0+dX,i *(texture.sourceHeight+this.spaceY),texture.sourceWidth,texture.sourceHeight);
		}
		if (!this._width){
			this.resetLayoutX();
			this.callLater(__bind(this,this.changeSize));
		}
		if (!this._height){
			this.resetLayoutY();
			this.callLater(__bind(this,this.changeSize));
		}
	}

	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		this._valueArr=null;
		this._indexMap=null;
		this.graphics.clear(true);
		this.removeSelf();
		this.off(/*laya.events.Event.LOADED*/"loaded",this,__bind(this,this._onClipLoaded));
		_super.prototype.destroy.call(this,destroyChild);
	}

	__getset(0,__proto,'measureWidth',function(){
		return this._wordsW;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Clip,this,'width',value);
		this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'align',function(){
		return this._align;
		},function(v){
		this._align=v;
		this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Clip,this,'height',value);
		this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'spaceY',function(){
		return this._spaceY;
		},function(value){
		this._spaceY=value;
		if (!(this._direction=="horizontal"))this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'measureHeight',function(){
		return this._wordsH;
	});

	__getset(0,__proto,'value',function(){
		if (!this._valueArr)return "";
		return this._valueArr;
		},function(value){
		value+="";
		this._valueArr=value;
		this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'direction',function(){
		return this._direction;
		},function(value){
		this._direction=value;
		this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'spaceX',function(){
		return this._spaceX;
		},function(value){
		this._spaceX=value;
		if (this._direction=="horizontal")this.callLater(__bind(this,this.changeValue));
	});

	__getset(0,__proto,'sheet',function(){
		return this._sheet;
		},function(value){
		value+="";
		this._sheet=value;
		var arr=value.split(" ");
		this._clipX=String(arr[0]).length;
		this.clipY=arr.length;
		this._indexMap={};
		for (var i=0;i < this._clipY;i++){
			var line=arr[i].split("");
			for (var j=0,n=line.length;j < n;j++){
				this._indexMap[line[j]]=i *this._clipX+j;
			}
		}
	});

	return FontClip;
})(Clip)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/RadioGroup.as=======93.999065/93.999065
//class laya.ui.RadioGroup extends laya.ui.UIGroup
var RadioGroup=(function(_super){
	function RadioGroup(){
		RadioGroup.__super.call(this);;
	}

	__class(RadioGroup,'laya.ui.RadioGroup',false,_super);
	var __proto=RadioGroup.prototype;
	__proto.createItem=function(skin,label){
		return new Radio(skin,label);
	}

	return RadioGroup;
})(UIGroup)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/HBox.as=======93.999059/93.999059
//class laya.ui.HBox extends laya.ui.LayoutBox
var HBox=(function(_super){
	function HBox(){
		HBox.__super.call(this);;
	}

	__class(HBox,'laya.ui.HBox',false,_super);
	var __proto=HBox.prototype;
	__proto.sortItem=function(items){
		if (items)items.sort(function(a,b){return a.x-b.x;});
	}

	__proto.changeItems=function(){
		this._itemChanged=false;
		var items=[];
		var maxHeight=0;
		for (var i=0,n=this.numChildren;i < n;i++){
			var item=this.getChildAt(i);
			if (item&&item.layoutEnabled){
				items.push(item);
				maxHeight=this._height?this._height:Math.max(maxHeight,item.height *item.scaleY);
			}
		}
		this.sortItem(items);
		var left=0;
		for (i=0,n=items.length;i < n;i++){
			item=items[i];
			item.x=left;
			left+=item.width *item.scaleX+this._space;
			if (this._align=="top"){
				item.y=0;
				}else if (this._align=="middle"){
				item.y=(maxHeight-item.height *item.scaleY)*0.5;
				}else if (this._align=="bottom"){
				item.y=maxHeight-item.height *item.scaleY;
			}
		}
		this.changeSize();
	}

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		if (this._height !=value){
			Laya.superSet(LayoutBox,this,'height',value);
			this.callLater(__bind(this,this.changeItems));
		}
	});

	HBox.NONE="none";
	HBox.TOP="top";
	HBox.MIDDLE="middle";
	HBox.BOTTOM="bottom";
	return HBox;
})(LayoutBox)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Tab.as=======93.999059/93.999059
//class laya.ui.Tab extends laya.ui.UIGroup
var Tab=(function(_super){
	function Tab(){
		Tab.__super.call(this);;
	}

	__class(Tab,'laya.ui.Tab',false,_super);
	var __proto=Tab.prototype;
	__proto.createItem=function(skin,label){
		return new Button(skin,label);
	}

	return Tab;
})(UIGroup)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/Dialog.as=======93.999057/93.999057
//class laya.ui.Dialog extends laya.ui.View
var Dialog=(function(_super){
	function Dialog(){
		this.popupCenter=true;
		this.closeHandler=null;
		this.popupEffect=null;
		this.closeEffect=null;
		this.group=null;
		this.isModal=false;
		this._dragArea=null;
		Dialog.__super.call(this);
	}

	__class(Dialog,'laya.ui.Dialog',false,_super);
	var __proto=Dialog.prototype;
	__proto.initialize=function(){
		this.popupEffect=Dialog.manager.popupEffectHandler;
		this.closeEffect=Dialog.manager.closeEffectHandler;
		this._dealDragArea();
		this.on(/*laya.events.Event.CLICK*/"click",this,__bind(this,this._onClick));
	}

	__proto._dealDragArea=function(){
		var dragTarget=this.getChildByName("drag");
		if (dragTarget){
			this.dragArea=dragTarget.x+","+dragTarget.y+","+dragTarget.width+","+dragTarget.height;
			dragTarget.removeSelf();
		}
	}

	__proto._onClick=function(e){
		var btn=e.target;
		if (btn){
			switch (btn.name){
				case "close":
				case "cancel":
				case "sure":
				case "no":
				case "ok":
				case "yes":
					this.close(btn.name);
					break ;
				}
		}
	}

	__proto.show=function(closeOther,showEffect){
		(closeOther===void 0)&& (closeOther=false);
		(showEffect===void 0)&& (showEffect=true);
		this._open(false,closeOther,showEffect);
	}

	__proto.popup=function(closeOther,showEffect){
		(closeOther===void 0)&& (closeOther=false);
		(showEffect===void 0)&& (showEffect=true);
		this._open(true,closeOther,showEffect);
	}

	__proto._open=function(modal,closeOther,showEffect){
		Dialog.manager.lock(false);
		this.isModal=modal;
		Dialog.manager.open(this,closeOther,showEffect);
	}

	__proto.onOpened=function(){}
	__proto.close=function(type,showEffect){
		(showEffect===void 0)&& (showEffect=true);
		Dialog.manager.close(this,type,showEffect);
	}

	__proto.onClosed=function(type){}
	__proto._onMouseDown=function(e){
		var point=this.getMousePoint();
		if (this._dragArea.contains(point.x,point.y))this.startDrag();
		else this.stopDrag();
	}

	__getset(0,__proto,'zOrder',_super.prototype._$get_zOrder,function(value){
		Laya.superSet(View,this,'zOrder',value);
		Dialog.manager._checkMask();
	});

	__getset(0,__proto,'isPopup',function(){
		return this.parent !=null;
	});

	__getset(0,__proto,'dragArea',function(){
		if (this._dragArea)return this._dragArea.toString();
		return null;
		},function(value){
		if (value){
			var a=UIUtils.fillArray([0,0,0,0],value,Number);
			this._dragArea=new Rectangle(a[0],a[1],a[2],a[3]);
			this.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this._onMouseDown));
			}else {
			this._dragArea=null;
			this.off(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,__bind(this,this._onMouseDown));
		}
	});

	__getset(1,Dialog,'manager',function(){
		return Dialog._manager=Dialog._manager|| new DialogManager();
		},function(value){
		Dialog._manager=value;
	});

	Dialog.setLockView=function(view){
		Dialog.manager.setLockView(view);
	}

	Dialog.lock=function(value){
		Dialog.manager.lock(value);
	}

	Dialog.closeAll=function(){
		Dialog.manager.closeAll();
	}

	Dialog.getDialogsByGroup=function(group){
		return Dialog.manager.getDialogsByGroup(group);
	}

	Dialog.closeByGroup=function(group){
		return Dialog.manager.closeByGroup(group);
	}

	Dialog.CLOSE="close";
	Dialog.CANCEL="cancel";
	Dialog.SURE="sure";
	Dialog.NO="no";
	Dialog.OK="ok";
	Dialog.YES="yes";
	Dialog._manager=null;
	return Dialog;
})(View)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/VBox.as=======93.999044/93.999044
//class laya.ui.VBox extends laya.ui.LayoutBox
var VBox=(function(_super){
	function VBox(){
		VBox.__super.call(this);;
	}

	__class(VBox,'laya.ui.VBox',false,_super);
	var __proto=VBox.prototype;
	__proto.changeItems=function(){
		this._itemChanged=false;
		var items=[];
		var maxWidth=0;
		for (var i=0,n=this.numChildren;i < n;i++){
			var item=this.getChildAt(i);
			if (item&&item.layoutEnabled){
				items.push(item);
				maxWidth=this._width?this._width:Math.max(maxWidth,item.width *item.scaleX);
			}
		}
		this.sortItem(items);
		var top=0;
		for (i=0,n=items.length;i < n;i++){
			item=items[i];
			item.y=top;
			top+=item.height *item.scaleY+this._space;
			if (this._align=="left"){
				item.x=0;
				}else if (this._align=="center"){
				item.x=(maxWidth-item.width *item.scaleX)*0.5;
				}else if (this._align=="right"){
				item.x=maxWidth-item.width *item.scaleX;
			}
		}
		this.changeSize();
	}

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		if (this._width !=value){
			Laya.superSet(LayoutBox,this,'width',value);
			this.callLater(__bind(this,this.changeItems));
		}
	});

	VBox.NONE="none";
	VBox.LEFT="left";
	VBox.CENTER="center";
	VBox.RIGHT="right";
	return VBox;
})(LayoutBox)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/TextArea.as=======93.999017/93.999017
//class laya.ui.TextArea extends laya.ui.TextInput
var TextArea=(function(_super){
	function TextArea(text){
		this._vScrollBar=null;
		this._hScrollBar=null;
		(text===void 0)&& (text="");
		TextArea.__super.call(this,text);
	}

	__class(TextArea,'laya.ui.TextArea',false,_super);
	var __proto=TextArea.prototype;
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		_super.prototype.destroy.call(this,destroyChild);
		this._vScrollBar && this._vScrollBar.destroy();
		this._hScrollBar && this._hScrollBar.destroy();
		this._vScrollBar=null;
		this._hScrollBar=null;
	}

	__proto.initialize=function(){
		this.width=180;
		this.height=150;
		this._tf.wordWrap=true;
		this.multiline=true;
	}

	__proto.onVBarChanged=function(e){
		if (this._tf.scrollY !=this._vScrollBar.value){
			this._tf.scrollY=this._vScrollBar.value;
		}
	}

	__proto.onHBarChanged=function(e){
		if (this._tf.scrollX !=this._hScrollBar.value){
			this._tf.scrollX=this._hScrollBar.value;
		}
	}

	__proto.changeScroll=function(){
		var vShow=this._vScrollBar && this._tf.maxScrollY > 0;
		var hShow=this._hScrollBar && this._tf.maxScrollX > 0;
		var showWidth=vShow ? this._width-this._vScrollBar.width :this._width;
		var showHeight=hShow ? this._height-this._hScrollBar.height :this._height;
		var padding=this._tf.padding || Styles.labelPadding;
		this._tf.width=showWidth;
		this._tf.height=showHeight;
		if (this._vScrollBar){
			this._vScrollBar.x=this._width-this._vScrollBar.width-padding[2];
			this._vScrollBar.y=padding[1];
			this._vScrollBar.height=this._height-(hShow ? this._hScrollBar.height :0)-padding[1]-padding[3];
			this._vScrollBar.scrollSize=1;
			this._vScrollBar.thumbPercent=showHeight / Math.max(this._tf.textHeight,showHeight);
			this._vScrollBar.setScroll(1,this._tf.maxScrollY,this._tf.scrollY);
			this._vScrollBar.visible=vShow;
		}
		if (this._hScrollBar){
			this._hScrollBar.x=padding[0];
			this._hScrollBar.y=this._height-this._hScrollBar.height-padding[3];
			this._hScrollBar.width=this._width-(vShow ? this._vScrollBar.width :0)-padding[0]-padding[2];
			this._hScrollBar.scrollSize=Math.max(showWidth *0.033,1);
			this._hScrollBar.thumbPercent=showWidth / Math.max(this._tf.textWidth,showWidth);
			this._hScrollBar.setScroll(0,this.maxScrollX,this.scrollX);
			this._hScrollBar.visible=hShow;
		}
	}

	__proto.scrollTo=function(y){
		this.commitMeasure();
		this._tf.scrollY=y;
	}

	__getset(0,__proto,'scrollX',function(){
		return this._tf.scrollX;
	});

	__getset(0,__proto,'maxScrollX',function(){
		return this._tf.maxScrollX;
	});

	__getset(0,__proto,'maxScrollY',function(){
		return this._tf.maxScrollY;
	});

	__getset(0,__proto,'scrollY',function(){
		return this._tf.scrollY;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(TextInput,this,'width',value);
		this.callLater(__bind(this,this.changeScroll));
	});

	__getset(0,__proto,'vScrollBar',function(){
		return this._vScrollBar;
	});

	__getset(0,__proto,'hScrollBar',function(){
		return this._hScrollBar;
	});

	__getset(0,__proto,'hScrollBarSkin',function(){
		return this._hScrollBar ? this._hScrollBar.skin :null;
		},function(value){
		if (this._hScrollBar==null){
			this.addChild(this._hScrollBar=new HScrollBar());
			this._hScrollBar.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onHBarChanged));
			this._hScrollBar.mouseWheelEnable=false;
			this._hScrollBar.target=this._tf;
			this.callLater(__bind(this,this.changeScroll));
		}
		this._hScrollBar.skin=value;
	});

	__getset(0,__proto,'vScrollBarSkin',function(){
		return this._vScrollBar ? this._vScrollBar.skin :null;
		},function(value){
		if (this._vScrollBar==null){
			this.addChild(this._vScrollBar=new VScrollBar());
			this._vScrollBar.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onVBarChanged));
			this._vScrollBar.target=this._tf;
			this.callLater(__bind(this,this.changeScroll));
		}
		this._vScrollBar.skin=value;
	});

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(TextInput,this,'height',value);
		this.callLater(__bind(this,this.changeScroll));
	});

	return TextArea;
})(TextInput)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/ui/src/laya/ui/AsynDialog.as=======92.998830/92.998830
//class laya.ui.AsynDialog extends laya.ui.Dialog
var AsynDialog=(function(_super){
	function AsynDialog(){
		this._uiView=null;
		this.isCloseOther=false;
		AsynDialog.__super.call(this);
	}

	__class(AsynDialog,'laya.ui.AsynDialog',false,_super);
	var __proto=AsynDialog.prototype;
	__proto.createView=function(uiView){
		this._uiView=uiView;
	}

	__proto._open=function(modal,closeOther,showEffect){
		this.isModal=modal;
		this.isCloseOther=closeOther;
		Dialog.manager.lock(true);
		if (this._uiView)this.onCreated();
		else this.onOpen();
	}

	__proto.onCreated=function(){
		this.createUI();
		this.onOpen();
	}

	__proto.createUI=function(){
		laya.ui.View.prototype.createView.call(this,this._uiView);
		this._uiView=null;
		this._dealDragArea();
	}

	__proto.onOpen=function(){
		Dialog.manager.open(this,this.isCloseOther);
		Dialog.manager.lock(false);
	}

	__proto.close=function(type,showEffect){
		(showEffect===void 0)&& (showEffect=true);
		Dialog.manager.close(this);
		this.onClose();
	}

	__proto.onClose=function(){}
	__proto.destroy=function(destroyChild){
		(destroyChild===void 0)&& (destroyChild=true);
		laya.ui.View.prototype.destroy.call(this,destroyChild);
		this._uiView=null;
		this.onDestroy();
	}

	__proto.onDestroy=function(){}
	return AsynDialog;
})(Dialog)


	Laya.__init([View]);

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