
	//file:////Users/ChengZSing/Documents/codes/zsing/layaair/src/d3Plugin/src/laya/d3/component/PathFind.as=======97.998844/97.998844
//class laya.d3.component.PathFind extends laya.d3.component.Component3D
var PathFind=(function(_super){
	function PathFind(){
		this._meshTerrainSprite3D=null;
		this._finder=null;
		this._setting=null;
		this.grid=null;
		PathFind.__super.call(this);
	}

	__class(PathFind,'laya.d3.component.PathFind',false,_super);
	var __proto=PathFind.prototype;
	__proto._load=function(owner){
		if (! (owner instanceof laya.d3.core.MeshTerrainSprite3D ))
			throw new Error("PathFinding: The owner must MeshTerrainSprite3D!");
		_super.prototype._load.call(this,owner);
		this._meshTerrainSprite3D=owner;
	}

	__proto.findPath=function(startX,startZ,endX,endZ){
		var minX=this._meshTerrainSprite3D.minX;
		var minZ=this._meshTerrainSprite3D.minZ;
		var cellX=this._meshTerrainSprite3D.width / this.grid.width;
		var cellZ=this._meshTerrainSprite3D.depth / this.grid.height;
		var halfCellX=cellX / 2;
		var halfCellZ=cellZ / 2;
		var gridStartX=Math.floor((startX-minX)/ cellX);
		var gridStartZ=Math.floor((startZ-minZ)/ cellZ);
		var gridEndX=Math.floor((endX-minX)/ cellX);
		var gridEndZ=Math.floor((endZ-minZ)/ cellZ);
		var boundWidth=this.grid.width-1;
		var boundHeight=this.grid.height-1;
		(gridStartX > boundWidth)&& (gridStartX=boundWidth);
		(gridStartZ > boundHeight)&& (gridStartZ=boundHeight);
		(gridStartX < 0)&& (gridStartX=0);
		(gridStartZ < 0)&& (gridStartZ=0);
		(gridEndX > boundWidth)&& (gridEndX=boundWidth);
		(gridEndZ > boundHeight)&& (gridEndZ=boundHeight);
		(gridEndX < 0)&& (gridEndX=0);
		(gridEndZ < 0)&& (gridEndZ=0);
		var path=this._finder.findPath(gridStartX,gridStartZ,gridEndX,gridEndZ,this.grid);
		this.grid.reset();
		for (var i=1;i < path.length-1;i++){
			var gridPos=path[i];
			gridPos[0]=gridPos[0] *cellX+halfCellX+minX;
			gridPos[1]=gridPos[1] *cellZ+halfCellZ+minZ;
		}
		if (path.length==1){
			path[0][0]=endX;
			path[0][1]=endX;
			}else if (path.length > 1){
			path[0][0]=startX;
			path[0][1]=startZ;
			path[path.length-1][0]=endX;
			path[path.length-1][1]=endZ;
		}
		return path;
	}

	__getset(0,__proto,'setting',function(){
		return this._setting;
		},function(value){
		(value)&& (this._finder=new PathFinding.finders.AStarFinder(value));
		this._setting=value;
	});

	return PathFind;
})(Component3D)




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