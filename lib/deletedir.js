var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;

function deletedir(param,callback){
	if(!callback)callback = function(rs){return rs};
	callback(_deletedir(param.d));
}

/* 
	删除给定路径的文件夹
	
	param:
		d:路径
	rs:结果反馈
*/
function _deletedir(d){
	var cur_path = gb['path'].normalize(d);
	try{
		if(gb['fs'].existsSync(cur_path) && gb['fs'].statSync(cur_path).isDirectory()){
			util.forEach(gb['fs'].readdirSync(cur_path),function(k,v){
				var p = gb['path'].join(cur_path,v);
				if(gb['fs'].statSync(p).isDirectory())_deletedir(p);
				else gb['fs'].unlinkSync(p);
			});
			gb['fs'].rmdirSync(cur_path);
		}
	}catch(e){
		return util.rs('error','删除文件夹出错！->错误信息：'+e.message);
	}
	return util.rs();
}

exports.deletedir = deletedir;