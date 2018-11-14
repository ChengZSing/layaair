
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/motion/RotationInfo.as=======199.999292/199.999292
//class laya.device.motion.RotationInfo
var RotationInfo=(function(){
	function RotationInfo(){
		this.absolute=false;
		this.alpha=NaN;
		this.beta=NaN;
		this.gamma=NaN;
		this.compassAccuracy=NaN;
	}

	__class(RotationInfo,'laya.device.motion.RotationInfo',true);
	return RotationInfo;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/motion/AccelerationInfo.as=======199.999290/199.999290
//class laya.device.motion.AccelerationInfo
var AccelerationInfo=(function(){
	function AccelerationInfo(){
		this.x=NaN;
		this.y=NaN;
		this.z=NaN;
	}

	__class(AccelerationInfo,'laya.device.motion.AccelerationInfo',true);
	return AccelerationInfo;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/geolocation/Geolocation.as=======199.999288/199.999288
//class laya.device.geolocation.Geolocation
var Geolocation=(function(){
	function Geolocation(){}
	__class(Geolocation,'laya.device.geolocation.Geolocation',true);
	Geolocation.getCurrentPosition=function(onSuccess,onError){
		Geolocation.navigator.geolocation.getCurrentPosition(function(pos){
			Geolocation.position.setPosition(pos);
			onSuccess.runWith(Geolocation.position);
		},
		function(error){
			onError.runWith(error);
			},{
			enableHighAccuracy :Geolocation.enableHighAccuracy,
			timeout :Geolocation.timeout,
			maximumAge :Geolocation.maximumAge
		});
	}

	Geolocation.watchPosition=function(onSuccess,onError){
		return Geolocation.navigator.geolocation.watchPosition(function(pos){
			Geolocation.position.setPosition(pos);
			onSuccess.runWith(Geolocation.position);
		},
		function(error){
			onError.runWith(error);
			},{
			enableHighAccuracy :Geolocation.enableHighAccuracy,
			timeout :Geolocation.timeout,
			maximumAge :Geolocation.maximumAge
		});
	}

	Geolocation.clearWatch=function(id){
		Geolocation.navigator.geolocation.clearWatch(id);
	}

	Geolocation.PERMISSION_DENIED=1;
	Geolocation.POSITION_UNAVAILABLE=2;
	Geolocation.TIMEOUT=3;
	Geolocation.enableHighAccuracy=false;
	Geolocation.maximumAge=0;
	__static(Geolocation,
	['navigator',function(){return this.navigator=Browser.window.navigator;},'position',function(){return this.position=new GeolocationInfo();},'supported',function(){return this.supported=!!Geolocation.navigator.geolocation;},'timeout',function(){return this.timeout=1E10;}
	]);
	return Geolocation;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/geolocation/GeolocationInfo.as=======199.999287/199.999287
//class laya.device.geolocation.GeolocationInfo
var GeolocationInfo=(function(){
	function GeolocationInfo(){
		this.pos=null;
		this.coords=null;
	}

	__class(GeolocationInfo,'laya.device.geolocation.GeolocationInfo',true);
	var __proto=GeolocationInfo.prototype;
	__proto.setPosition=function(pos){
		this.pos=pos;
		this.coords=pos.coords;
	}

	__getset(0,__proto,'timestamp',function(){
		return this.pos.timestamp;
	});

	__getset(0,__proto,'heading',function(){
		return this.coords.heading;
	});

	__getset(0,__proto,'latitude',function(){
		return this.coords.latitude;
	});

	__getset(0,__proto,'altitudeAccuracy',function(){
		return this.coords.altitudeAccuracy;
	});

	__getset(0,__proto,'accuracy',function(){
		return this.coords.accuracy;
	});

	__getset(0,__proto,'altitude',function(){
		return this.coords.altitude;
	});

	__getset(0,__proto,'speed',function(){
		return this.coords.speed;
	});

	__getset(0,__proto,'longitude',function(){
		return this.coords.longitude;
	});

	return GeolocationInfo;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/media/Media.as=======199.999282/199.999282
//class laya.device.media.Media
var Media=(function(){
	function Media(){}
	__class(Media,'laya.device.media.Media',true);
	Media.supported=function(){
		return !!Browser.window.navigator.getUserMedia;
	}

	Media.getMedia=function(options,onSuccess,onError){
		if (Browser.window.navigator.getUserMedia){
			Browser.window.navigator.getUserMedia(options,function(stream){
				onSuccess.runWith(Browser.window.URL.createObjectURL(stream));
				},function(err){
				onError.runWith(err);
			});
		}
	}

	Media.__init$=function(){
		/*__JS__ */navigator.getUserMedia=navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;;
	}

	return Media;
})()


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/motion/Accelerator.as=======98.999283/98.999283
//class laya.device.motion.Accelerator extends laya.events.EventDispatcher
var Accelerator=(function(_super){
	function Accelerator(singleton){
		Accelerator.__super.call(this);
		/*__JS__ */this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this);
	}

	__class(Accelerator,'laya.device.motion.Accelerator',false,_super);
	var __proto=Accelerator.prototype;
	__proto.on=function(type,caller,listener,args){
		_super.prototype.on.call(this,type,caller,listener,args);
		Browser.window.addEventListener('devicemotion',__bind(this,this.onDeviceOrientationChange));
		return this;
	}

	__proto.off=function(type,caller,listener,onceOnly){
		(onceOnly===void 0)&& (onceOnly=false);
		if (!this.hasListener(type))
			Browser.window.removeEventListener('devicemotion',__bind(this,this.onDeviceOrientationChange))
		return _super.prototype.off.call(this,type,caller,listener,onceOnly);
	}

	__proto.onDeviceOrientationChange=function(e){
		var interval=e.interval;
		Accelerator.acceleration.x=e.acceleration.x;
		Accelerator.acceleration.y=e.acceleration.y;
		Accelerator.acceleration.z=e.acceleration.z;
		Accelerator.accelerationIncludingGravity.x=e.accelerationIncludingGravity.x;
		Accelerator.accelerationIncludingGravity.y=e.accelerationIncludingGravity.y;
		Accelerator.accelerationIncludingGravity.z=e.accelerationIncludingGravity.z;
		Accelerator.rotationRate.alpha=e.rotationRate.gamma *-1;
		Accelerator.rotationRate.beta=e.rotationRate.alpha *-1;
		Accelerator.rotationRate.gamma=e.rotationRate.beta;
		if (Browser.onAndriod){
			if (Accelerator.onChrome){
				Accelerator.rotationRate.alpha *=180 / Math.PI;
				Accelerator.rotationRate.beta *=180 / Math.PI;
				Accelerator.rotationRate.gamma *=180 / Math.PI;
			}
			Accelerator.acceleration.x *=-1;
			Accelerator.accelerationIncludingGravity.x *=-1;
		}
		else if (Browser.onIOS){
			Accelerator.acceleration.y *=-1;
			Accelerator.acceleration.z *=-1;
			Accelerator.accelerationIncludingGravity.y *=-1;
			Accelerator.accelerationIncludingGravity.z *=-1;
			interval *=1000;
		}
		this.event(/*laya.events.Event.CHANGE*/"change",[Accelerator.acceleration,Accelerator.accelerationIncludingGravity,Accelerator.rotationRate,interval]);
	}

	__getset(1,Accelerator,'instance',function(){Accelerator._instance=Accelerator._instance|| new Accelerator(0)
		return Accelerator._instance;
	},laya.events.EventDispatcher._$SET_instance);

	Accelerator.getTransformedAcceleration=function(acceleration){Accelerator.transformedAcceleration=Accelerator.transformedAcceleration|| new AccelerationInfo();
		Accelerator.transformedAcceleration.z=acceleration.z;
		if (Browser.window.orientation==90){
			Accelerator.transformedAcceleration.x=acceleration.y;
			Accelerator.transformedAcceleration.y=-acceleration.x;
		}
		else if (Browser.window.orientation==-90){
			Accelerator.transformedAcceleration.x=-acceleration.y;
			Accelerator.transformedAcceleration.y=acceleration.x;
		}
		else if (!Browser.window.orientation){
			Accelerator.transformedAcceleration.x=acceleration.x;
			Accelerator.transformedAcceleration.y=acceleration.y;
		}
		else if (Browser.window.orientation==180){
			Accelerator.transformedAcceleration.x=-acceleration.x;
			Accelerator.transformedAcceleration.y=-acceleration.y;
		};
		var tx=NaN;
		if (Laya.stage.canvasDegree==-90){
			tx=Accelerator.transformedAcceleration.x;
			Accelerator.transformedAcceleration.x=-Accelerator.transformedAcceleration.y;
			Accelerator.transformedAcceleration.y=tx;
		}
		else if (Laya.stage.canvasDegree==90){
			tx=Accelerator.transformedAcceleration.x;
			Accelerator.transformedAcceleration.x=Accelerator.transformedAcceleration.y;
			Accelerator.transformedAcceleration.y=-tx;
		}
		return Accelerator.transformedAcceleration;
	}

	Accelerator._instance=null;
	Accelerator.transformedAcceleration=null;
	__static(Accelerator,
	['acceleration',function(){return this.acceleration=new AccelerationInfo();},'accelerationIncludingGravity',function(){return this.accelerationIncludingGravity=new AccelerationInfo();},'rotationRate',function(){return this.rotationRate=new RotationInfo();},'onChrome',function(){return this.onChrome=(Browser.userAgent.indexOf("Chrome")>-1);}
	]);
	return Accelerator;
})(EventDispatcher)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/motion/Gyroscope.as=======98.999281/98.999281
//class laya.device.motion.Gyroscope extends laya.events.EventDispatcher
var Gyroscope=(function(_super){
	function Gyroscope(singleton){
		Gyroscope.__super.call(this);
		/*__JS__ */this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this);
	}

	__class(Gyroscope,'laya.device.motion.Gyroscope',false,_super);
	var __proto=Gyroscope.prototype;
	__proto.on=function(type,caller,listener,args){
		_super.prototype.on.call(this,type,caller,listener,args);
		Browser.window.addEventListener('deviceorientation',__bind(this,this.onDeviceOrientationChange));
		return this;
	}

	__proto.off=function(type,caller,listener,onceOnly){
		(onceOnly===void 0)&& (onceOnly=false);
		if (!this.hasListener(type))
			Browser.window.removeEventListener('deviceorientation',__bind(this,this.onDeviceOrientationChange));
		return _super.prototype.off.call(this,type,caller,listener,onceOnly);
	}

	__proto.onDeviceOrientationChange=function(e){
		Gyroscope.info.alpha=e.alpha;
		Gyroscope.info.beta=e.beta;
		Gyroscope.info.gamma=e.gamma;
		if (e.webkitCompassHeading){
			Gyroscope.info.alpha=e.webkitCompassHeading *-1;
			Gyroscope.info.compassAccuracy=e.webkitCompassAccuracy;
		}
		this.event(/*laya.events.Event.CHANGE*/"change",[e.absolute,Gyroscope.info]);
	}

	__getset(1,Gyroscope,'instance',function(){Gyroscope._instance=Gyroscope._instance|| new Gyroscope(0);
		return Gyroscope._instance;
	},laya.events.EventDispatcher._$SET_instance);

	Gyroscope._instance=null;
	__static(Gyroscope,
	['info',function(){return this.info=new RotationInfo();}
	]);
	return Gyroscope;
})(EventDispatcher)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/Shake.as=======98.999278/98.999278
//class laya.device.Shake extends laya.events.EventDispatcher
var Shake=(function(_super){
	function Shake(){
		this.throushold=0;
		this.shakeInterval=0;
		this.callback=null;
		this.lastX=NaN;
		this.lastY=NaN;
		this.lastZ=NaN;
		this.lastMillSecond=NaN;
		Shake.__super.call(this);
	}

	__class(Shake,'laya.device.Shake',false,_super);
	var __proto=Shake.prototype;
	__proto.start=function(throushold,interval){
		this.throushold=throushold;
		this.shakeInterval=interval;
		this.lastX=this.lastY=this.lastZ=NaN;
		Accelerator.instance.on(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onShake));
	}

	__proto.stop=function(){
		Accelerator.instance.off(/*laya.events.Event.CHANGE*/"change",this,__bind(this,this.onShake));
	}

	__proto.onShake=function(acceleration,accelerationIncludingGravity,rotationRate,interval){
		if(isNaN(this.lastX)){
			this.lastX=accelerationIncludingGravity.x;
			this.lastY=accelerationIncludingGravity.y;
			this.lastZ=accelerationIncludingGravity.z;
			this.lastMillSecond=Browser.now();
			return;
		};
		var deltaX=Math.abs(this.lastX-accelerationIncludingGravity.x);
		var deltaY=Math.abs(this.lastY-accelerationIncludingGravity.y);
		var deltaZ=Math.abs(this.lastZ-accelerationIncludingGravity.z);
		if(this.isShaked(deltaX,deltaY,deltaZ)){
			var deltaMillSecond=Browser.now()-this.lastMillSecond;
			if (deltaMillSecond > this.shakeInterval){
				this.event(/*laya.events.Event.CHANGE*/"change");
				this.lastMillSecond=Browser.now();
			}
		}
		this.lastX=accelerationIncludingGravity.x;
		this.lastY=accelerationIncludingGravity.y;
		this.lastZ=accelerationIncludingGravity.z;
	}

	__proto.isShaked=function(deltaX,deltaY,deltaZ){
		return (deltaX > this.throushold && deltaY > this.throushold)||
		(deltaX > this.throushold && deltaZ > this.throushold)||
		(deltaY > this.throushold && deltaZ > this.throushold)
	}

	__getset(1,Shake,'instance',function(){Shake._instance=Shake._instance|| new Shake();
		return Shake._instance;
	},laya.events.EventDispatcher._$SET_instance);

	Shake._instance=null;
	return Shake;
})(EventDispatcher)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/media/Video.as=======96.999162/96.999162
//class laya.device.media.Video extends laya.display.Sprite
var Video=(function(_super){
	function Video(width,height){
		this.htmlVideo=null;
		this.videoElement=null;
		this.internalTexture=null;
		(width===void 0)&& (width=320);
		(height===void 0)&& (height=240);
		Video.__super.call(this);
		if (Render.isWebGL)
			this.htmlVideo=new WebGLVideo();
		else
		this.htmlVideo=new HtmlVideo();
		this.videoElement=this.htmlVideo.getVideo();
		this.videoElement.layaTarget=this;
		this.internalTexture=new Texture(this.htmlVideo);
		this.videoElement.addEventListener("abort",Video.onAbort);
		this.videoElement.addEventListener("canplay",Video.onCanplay);
		this.videoElement.addEventListener("canplaythrough",Video.onCanplaythrough);
		this.videoElement.addEventListener("durationchange",Video.onDurationchange);
		this.videoElement.addEventListener("emptied",Video.onEmptied);
		this.videoElement.addEventListener("error",Video.onError);
		this.videoElement.addEventListener("loadeddata",Video.onLoadeddata);
		this.videoElement.addEventListener("loadedmetadata",Video.onLoadedmetadata);
		this.videoElement.addEventListener("loadstart",Video.onLoadstart);
		this.videoElement.addEventListener("pause",Video.onPause);
		this.videoElement.addEventListener("play",Video.onPlay);
		this.videoElement.addEventListener("playing",Video.onPlaying);
		this.videoElement.addEventListener("progress",Video.onProgress);
		this.videoElement.addEventListener("ratechange",Video.onRatechange);
		this.videoElement.addEventListener("seeked",Video.onSeeked);
		this.videoElement.addEventListener("seeking",Video.onSeeking);
		this.videoElement.addEventListener("stalled",Video.onStalled);
		this.videoElement.addEventListener("suspend",Video.onSuspend);
		this.videoElement.addEventListener("timeupdate",Video.onTimeupdate);
		this.videoElement.addEventListener("volumechange",Video.onVolumechange);
		this.videoElement.addEventListener("waiting",Video.onWaiting);
		this.videoElement.addEventListener("ended",this.onPlayComplete['bind'](this));
		this.size(width,height);
		if (Browser.onMobile){
			/*__JS__ */this.onDocumentClick=this.onDocumentClick.bind(this);
			Browser.document.addEventListener("touchend",__bind(this,this.onDocumentClick));
		}
	}

	__class(Video,'laya.device.media.Video',false,_super);
	var __proto=Video.prototype;
	__proto.onPlayComplete=function(e){
		Laya.timer.clear(this,__bind(this,this.renderCanvas));
		this.event("ended");
	}

	__proto.load=function(url){
		if (url.indexOf("blob:")==0)
			this.videoElement.src=url;
		else
		this.htmlVideo.setSource(url,laya.device.media.Video.MP4);
	}

	__proto.play=function(){
		this.videoElement.play();
		Laya.timer.frameLoop(1,this,__bind(this,this.renderCanvas));
	}

	__proto.pause=function(){
		this.videoElement.pause();
		Laya.timer.clear(this,__bind(this,this.renderCanvas));
	}

	__proto.reload=function(){
		this.videoElement.load();
	}

	__proto.canPlayType=function(type){
		var typeString;
		switch (type){
			case laya.device.media.Video.MP4:
				typeString="video/mp4";
				break ;
			case laya.device.media.Video.OGG:
				typeString="video/ogg";
				break ;
			case laya.device.media.Video.WEBM:
				typeString="video/webm";
				break ;
			}
		return this.videoElement.canPlayType(typeString);
	}

	__proto.renderCanvas=function(){
		if (this.readyState==0)
			return;
		if (Render.isWebGL)
			this.htmlVideo['updateTexture']();
		this.graphics.clear();
		this.graphics.drawTexture(this.internalTexture,0,0,this.width,this.height);
	}

	__proto.onDocumentClick=function(){
		this.videoElement.play();
		this.videoElement.pause();
		Browser.document.removeEventListener("touchend",__bind(this,this.onDocumentClick));
	}

	__proto.size=function(width,height){
		_super.prototype.size.call(this,width,height)
		this.videoElement.width=width / Browser.pixelRatio;
		if (this.paused)this.renderCanvas();
		return this;
	}

	__proto.destroy=function(detroyChildren){
		(detroyChildren===void 0)&& (detroyChildren=true);
		_super.prototype.destroy.call(this,detroyChildren);
		this.videoElement.removeEventListener("abort",Video.onAbort);
		this.videoElement.removeEventListener("canplay",Video.onCanplay);
		this.videoElement.removeEventListener("canplaythrough",Video.onCanplaythrough);
		this.videoElement.removeEventListener("durationchange",Video.onDurationchange);
		this.videoElement.removeEventListener("emptied",Video.onEmptied);
		this.videoElement.removeEventListener("error",Video.onError);
		this.videoElement.removeEventListener("loadeddata",Video.onLoadeddata);
		this.videoElement.removeEventListener("loadedmetadata",Video.onLoadedmetadata);
		this.videoElement.removeEventListener("loadstart",Video.onLoadstart);
		this.videoElement.removeEventListener("pause",Video.onPause);
		this.videoElement.removeEventListener("play",Video.onPlay);
		this.videoElement.removeEventListener("playing",Video.onPlaying);
		this.videoElement.removeEventListener("progress",Video.onProgress);
		this.videoElement.removeEventListener("ratechange",Video.onRatechange);
		this.videoElement.removeEventListener("seeked",Video.onSeeked);
		this.videoElement.removeEventListener("seeking",Video.onSeeking);
		this.videoElement.removeEventListener("stalled",Video.onStalled);
		this.videoElement.removeEventListener("suspend",Video.onSuspend);
		this.videoElement.removeEventListener("timeupdate",Video.onTimeupdate);
		this.videoElement.removeEventListener("volumechange",Video.onVolumechange);
		this.videoElement.removeEventListener("waiting",Video.onWaiting);
		this.videoElement.removeEventListener("ended",__bind(this,this.onPlayComplete));
		this.pause();
		this.videoElement=null;
	}

	__proto.syncVideoPosition=function(){
		var stage=Laya.stage;
		var rec;
		rec=Utils.getGlobalPosAndScale(this);
		var a=stage._canvasTransform.a,d=stage._canvasTransform.d;
		var x=rec.x *stage.clientScaleX *a+stage.offset.x;
		var y=rec.y *stage.clientScaleY *d+stage.offset.y;
		this.videoElement.style.left=x+'px';;
		this.videoElement.style.top=y+'px';
		this.videoElement.width=this.width / Browser.pixelRatio;
		this.videoElement.height=this.height / Browser.pixelRatio;
	}

	__getset(0,__proto,'height',_super.prototype._$get_height,function(value){
		Laya.superSet(Sprite,this,'height',value);
		if (this.paused)this.renderCanvas();
	});

	__getset(0,__proto,'seeking',function(){
		return this.videoElement.seeking;
	});

	__getset(0,__proto,'preload',function(){
		return this.videoElement.preload;
		},function(value){
		this.videoElement.preload=value;
	});

	__getset(0,__proto,'seekable',function(){
		return this.videoElement.seekable;
	});

	__getset(0,__proto,'paused',function(){
		return this.videoElement.paused;
	});

	__getset(0,__proto,'loop',function(){
		return this.videoElement.loop;
		},function(value){
		this.videoElement.loop=value;
	});

	__getset(0,__proto,'ended',function(){
		return this.videoElement.ended;
	});

	__getset(0,__proto,'muted',function(){
		return this.videoElement.muted;
		},function(value){
		this.videoElement.muted=value;
	});

	__getset(0,__proto,'duration',function(){
		return this.videoElement.duration;
	});

	__getset(0,__proto,'videoHeight',function(){
		return this.videoElement.videoHeight;
	});

	__getset(0,__proto,'videoWidth',function(){
		return this.videoElement.videoWidth;
	});

	__getset(0,__proto,'playbackRate',function(){
		return this.videoElement.playbackRate;
		},function(value){
		this.videoElement.playbackRate=value;
	});

	__getset(0,__proto,'currentSrc',function(){
		return this.videoElement.currentSrc;
	});

	__getset(0,__proto,'readyState',function(){
		return this.videoElement.readyState;
	});

	__getset(0,__proto,'volume',function(){
		return this.videoElement.volume;
		},function(value){
		this.videoElement.volume=value;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		this.videoElement.width=this.width / Browser.pixelRatio;
		Laya.superSet(Sprite,this,'width',value);
		if (this.paused)this.renderCanvas();
	});

	__getset(0,__proto,'currentTime',function(){
		return this.videoElement.currentTime;
		},function(value){
		this.videoElement.currentTime=value;
		this.renderCanvas();
	});

	__getset(0,__proto,'error',function(){
		return this.videoElement.error;
	});

	__getset(0,__proto,'buffered',function(){
		return this.videoElement.buffered;
	});

	Video.onAbort=function(e){e.target.layaTarget.event("abort")}
	Video.onCanplay=function(e){e.target.layaTarget.event("canplay")}
	Video.onCanplaythrough=function(e){e.target.layaTarget.event("canplaythrough")}
	Video.onDurationchange=function(e){e.target.layaTarget.event("durationchange")}
	Video.onEmptied=function(e){e.target.layaTarget.event("emptied")}
	Video.onError=function(e){e.target.layaTarget.event("error")}
	Video.onLoadeddata=function(e){e.target.layaTarget.event("loadeddata")}
	Video.onLoadedmetadata=function(e){e.target.layaTarget.event("loadedmetadata")}
	Video.onLoadstart=function(e){e.target.layaTarget.event("loadstart")}
	Video.onPause=function(e){e.target.layaTarget.event("pause")}
	Video.onPlay=function(e){e.target.layaTarget.event("play")}
	Video.onPlaying=function(e){e.target.layaTarget.event("playing")}
	Video.onProgress=function(e){e.target.layaTarget.event("progress")}
	Video.onRatechange=function(e){e.target.layaTarget.event("ratechange")}
	Video.onSeeked=function(e){e.target.layaTarget.event("seeked")}
	Video.onSeeking=function(e){e.target.layaTarget.event("seeking")}
	Video.onStalled=function(e){e.target.layaTarget.event("stalled")}
	Video.onSuspend=function(e){e.target.layaTarget.event("suspend")}
	Video.onTimeupdate=function(e){e.target.layaTarget.event("timeupdate")}
	Video.onVolumechange=function(e){e.target.layaTarget.event("volumechange")}
	Video.onWaiting=function(e){e.target.layaTarget.event("waiting")}
	Video.MP4=1;
	Video.OGG=2;
	Video.CAMERA=4;
	Video.WEBM=8;
	Video.SUPPORT_PROBABLY="probably";
	Video.SUPPORT_MAYBY="maybe";
	Video.SUPPORT_NO="";
	return Video;
})(Sprite)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/media/HtmlVideo.as=======96.999091/96.999091
//class laya.device.media.HtmlVideo extends laya.resource.Bitmap
var HtmlVideo=(function(_super){
	function HtmlVideo(){
		this.video=null;
		HtmlVideo.__super.call(this);
		this._w=1;
		this._h=1;
		this.createDomElement();
	}

	__class(HtmlVideo,'laya.device.media.HtmlVideo',false,_super);
	var __proto=HtmlVideo.prototype;
	__proto.createDomElement=function(){
		var _$this=this;
		this._source=this.video=Browser.createElement("video");
		var style=this.video.style;
		style.position='absolute';
		style.top='0px';
		style.left='0px';
		this.video.addEventListener("loadedmetadata",(function(){
			this._w=_$this.video.videoWidth;
			this._h=_$this.video.videoHeight;
		})['bind'](this));
	}

	__proto.setSource=function(url,extension){
		while(this.video.childElementCount)
		this.video.firstChild.remove();
		if (extension & Video.MP4)
			this.appendSource(url,"video/mp4");
		if (extension & Video.OGG)
			this.appendSource(url+".ogg","video/ogg");
	}

	__proto.appendSource=function(source,type){
		var sourceElement=Browser.createElement("source");
		sourceElement.src=source;
		sourceElement.type=type;
		this.video.appendChild(sourceElement);
	}

	__proto.getVideo=function(){
		return this.video;
	}

	HtmlVideo.create=function(){
		return new HtmlVideo();
	}

	return HtmlVideo;
})(Bitmap)


	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/plugins/device/src/laya/device/media/WebGLVideo.as=======95.998376/95.998376
//class laya.device.media.WebGLVideo extends laya.device.media.HtmlVideo
var WebGLVideo=(function(_super){
	function WebGLVideo(){
		this.gl=null;
		this.preTarget=null;
		this.preTexture=null;
		WebGLVideo.__super.call(this);
		if(Browser.onIPhone)
			return;
		this.gl=WebGL.mainContext;
		this._source=this.gl.createTexture();
		this.preTarget=WebGLContext.curBindTexTarget;
		this.preTexture=WebGLContext.curBindTexValue;
		WebGLContext.bindTexture(this.gl,/*laya.webgl.WebGLContext.TEXTURE_2D*/0x0DE1,this._source);
		this.gl.texParameteri(/*laya.webgl.WebGLContext.TEXTURE_2D*/0x0DE1,/*laya.webgl.WebGLContext.TEXTURE_WRAP_S*/0x2802,/*laya.webgl.WebGLContext.CLAMP_TO_EDGE*/0x812F);
		this.gl.texParameteri(/*laya.webgl.WebGLContext.TEXTURE_2D*/0x0DE1,/*laya.webgl.WebGLContext.TEXTURE_WRAP_T*/0x2803,/*laya.webgl.WebGLContext.CLAMP_TO_EDGE*/0x812F);
		this.gl.texParameteri(/*laya.webgl.WebGLContext.TEXTURE_2D*/0x0DE1,/*laya.webgl.WebGLContext.TEXTURE_MAG_FILTER*/0x2800,/*laya.webgl.WebGLContext.LINEAR*/0x2601);
		this.gl.texParameteri(/*laya.webgl.WebGLContext.TEXTURE_2D*/0x0DE1,/*laya.webgl.WebGLContext.TEXTURE_MIN_FILTER*/0x2801,/*laya.webgl.WebGLContext.LINEAR*/0x2601);
		(this.preTarget && this.preTexture)&& (WebGLContext.bindTexture(this.gl,this.preTarget,this.preTexture));
	}

	__class(WebGLVideo,'laya.device.media.WebGLVideo',false,_super);
	var __proto=WebGLVideo.prototype;
	__proto.updateTexture=function(){
		if(Browser.onIPhone)
			return;
		WebGLContext.bindTexture(this.gl,/*laya.webgl.WebGLContext.TEXTURE_2D*/0x0DE1,this._source);
		this.gl.texImage2D(/*laya.webgl.WebGLContext.TEXTURE_2D*/0x0DE1,0,/*laya.webgl.WebGLContext.RGB*/0x1907,/*laya.webgl.WebGLContext.RGB*/0x1907,/*laya.webgl.WebGLContext.UNSIGNED_BYTE*/0x1401,this.video);
	}

	return WebGLVideo;
})(HtmlVideo)


	Laya.__init([Media]);

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