var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;

function rename(param,callback){
	if(!callback)callback = function(rs){return rs};
	callback(_rename(param.d || param.f,param.n));
}

/* 
	删除给定文件
	
	param:
		o：原路径
		n：基础名或文件名
	rs:结果反馈
*/
function _rename(o,n){
	try{
		gb['fs'].renameSync(o,gb['path'].join(gb['path'].dirname(o),n));
	}catch(e){
		return util.rs('error','重命名文件出错！->错误信息：'+e.message);
	}
	return util.rs();
}

exports.rename = rename;