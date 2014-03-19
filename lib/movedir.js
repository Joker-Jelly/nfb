var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;
var rename = require('./rename').rename;

function movedir(param,callback){
	_movedir(param.d,param.n,callback);
}

/* 
	移动给定文件夹
	
	param:
		d：原路径
		n：新路径
	rs:结果反馈
*/
function _movedir(d,n,callback){
	try{
		gb['fs'].renameSync(d,gb['path'].joinm(n,d));
		callback(util.rs());
	}catch(e){
		callback(util.rs('error','移动文件夹出错！->错误信息：'+e.message));
	}
}

exports.movedir = movedir;