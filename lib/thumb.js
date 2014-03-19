var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;

function thumb(param,callback){
	if(!callback)callback = function(rs){return rs};
	_thumb(param.f,param.width,param.height,callback);
}

/* 
	删除给定文件
	
	param:
		f:路径
	rs:结果反馈
*/
function _thumb(p,w,h,callback){
	try{
		var new_path = gb['conf'].THUMB_PATH;
		if(!gb['fs'].existsSync(new_path))gb['fs'].mkdirSync(new_path);
		
		var thumb_path = gb['path'].join(new_path,util.getUniqueName(w,h,p)+gb['path'].basename(p));
		gb['fs'].exists(thumb_path,function(flag){
			if(!flag){
				gb['gm'](p).resize(w.replace('px',''),h.replace('px','')).write(thumb_path,function (err) {
					if(!err)callback(thumb_path);
				});
			}else callback(thumb_path);
		});
	}catch(e){
		callback(util.rs('error','获取图片缩略图出错！->错误信息：'+e.message));
	}
}

exports.thumb = thumb;