var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;
var rename = require('./rename').rename;

function movefile(param,callback){
	_movefile(param.f,param.n,callback);
}

/* 
	移动给定文件夹
	
	param:
		d：原路径
		n：新路径
	rs:结果反馈
*/
function _movefile(f,n,callback){
	try{
		gb['fs'].renameSync(f,n);
		callback(util.rs());
	}catch(e){
		callback(util.rs('error','移动文件出错！->错误信息：'+e.message));
	}
}

exports.movefile = movefile;