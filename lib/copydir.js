var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;
var copyfile = require('./copyfile').copyfile;

function copydir(param,callback){
	if(!callback)callback = function(rs){return rs};
	_copydir(param.d,gb['path'].joinm(param.n,param.d),callback);
}

/* 
	复制给定文件夹
	
	param:
		c：原路径
		d：新路径
	rs:结果反馈
*/
function _copydir(c,n,callback){
	try{
		if(gb['fs'].statSync(c).isDirectory()){
			gb['fs'].exists(n,function(flag){
				if(!flag)gb['fs'].mkdirSync(n);
				util.forEach(gb['fs'].readdirSync(c),function(k,v){
					var child_path = gb['path'].join(c,v);
					var n_child_path = gb['path'].joinm(n,child_path);
					if(gb['fs'].statSync(child_path).isDirectory())_copydir(child_path,n_child_path,callback);
					else {
						util.Counter('cpfiles').add();	//调用异步计数器，增加一个异步操作标记
						copyfile({f:child_path,n:n},callback);
					}
				});
			});
		}
	}catch(e){
		callback(util.rs('error','复制文件夹出错！->错误信息：'+e.message));
	}
}

exports.copydir = copydir;