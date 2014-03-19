var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;
var sys_util = require('util');

/* 
	复制文件
	
	param:
		c：原文件路径
		n：新文件夹路径
	rs:结果反馈
*/
var _copyfile = function _copyfile(){
	var that = this;
	return function(param,callback){
		var c = param.f;
		var n = gb['path'].joinm(param.n,c);
		var rs = gb['fs'].statSync(c).isFile() ? gb['fs'].createReadStream(c) : null;
		var ws = gb['fs'].statSync(c).isFile() ? gb['fs'].createWriteStream(n) : null;
		if(typeof callback !== 'function')callback = function(rs){return rs;};
		if(rs && ws){
			rs.on('readable',function(){
				while(null !== (perChunk = rs.read())){
					ws.write(perChunk);
				} 
				//rs.pipe(ws);
			});
			rs.on('error',function(event){
				console.log(event);
				rs.close();
				ws.end();
			});
			rs.on('end',function(){
				rs.close();
				ws.end();
				//判断异步计数器是否达到末端
				if(util.Counter('cpfiles').sub() === 0){
					callback(util.rs());
				}
			});
		}else callback(util.rs('error','复制文件出错!'));
		return that;
	}
};

exports.copyfile = new _copyfile();