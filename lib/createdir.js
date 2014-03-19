var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;
var copyfile = require('./copyfile').copyfile;

function createdir(param,callback){
	callback(_createdir(param.d,param.n));
}

/* 
	在给定路径，创建给定文件名的文件夹
	
	param:
		d:路径
		n：文件名
	rs:结果反馈
*/
function _createdir(d,n){
	var cur_path = gb['path'].join(d,n);
	try{
		if(!gb['fs'].existsSync(cur_path))gb['fs'].mkdirSync(cur_path);
	}catch(e){
		return util.rs('error','创建文件夹出错！->错误信息：'+e.message);
	}
	return util.rs();
}

exports.createdir = createdir;