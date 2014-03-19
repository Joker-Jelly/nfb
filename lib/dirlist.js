var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;

function dirlist(){
	var callback = arguments[1];
	try{
        callback(_readAndCount(gb['conf'].FILES_ROOT));
	}catch(e){
		callback('列出目录出错！->错误信息：'+e.message);
	}
}

/*
	子节点计数器
	
	param:路径
	rs:返回一个对象{f:n,d:n},f子文件数，d子目录数
*/
function _subCount(path){
	var rsCount = {p:{},d:0,f:0};
	var fnArray = gb['fs'].readdirSync(path);
	util.forEach(fnArray,function(key,fname){
		var curPath = gb['path'].join(path,fname);
		var stats = gb['fs'].statSync(curPath);
		if(stats.isDirectory())rsCount.d++;
		else rsCount.f++;
	});
	rsCount.p = gb['path'].format(path);
	return rsCount;
}

/* 
	遍历非文件路径，并运行子节点计数器
	
	param:路径
	rs:对象数组，所有子节点计数器返回值的集合 
*/
function _readAndCount(path,arr){
	var rsArray = arr || [];
	if(path && gb['fs'].statSync(path).isDirectory()){
		rsArray.push(_subCount(path));
		util.forEach(gb['fs'].readdirSync(path),function(k,v){
			if(gb['fs'].statSync(path).isDirectory()){
				_readAndCount(gb['path'].join(path,v),rsArray);
			}
		});
	}else return null;
	return rsArray;
}

exports.dirlist = dirlist;




