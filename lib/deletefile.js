var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;

function deletefile(param,callback){
	if(!callback)callback = function(rs){return rs};
	callback(_deletefile(param.f));
}

/* 
	删除给定文件
	
	param:
		f:路径
	rs:结果反馈
*/
function _deletefile(p){
	try{
		gb['fs'].unlinkSync(p);
	}catch(e){
		return util.rs('error','删除文件出错！->错误信息：'+e.message);
	}
	return util.rs();
}

exports.deletefile = deletefile;