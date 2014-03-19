var gb = require('./function.con.js').gb;
var util = require('./function.con.js').util;

function fileslist(param,callback){
	_readFilesList(param.d,param.type,callback);
}

/* 
	遍历给定文件路径，查看给定类型的文件
	
	param:路径
	rs:对象数组，所有子节点计数器返回值的集合 
*/
function _readFilesList(path,type,callback){
	var  rsArray = [];
	if(path && gb['fs'].statSync(path).isDirectory()){
		var fn_arr = gb['fs'].readdirSync(path);
		var arr_len = arr_len = fn_arr.length || (callback(rsArray));
		util.forEach(fn_arr,function(k,v){
			var cur_path = gb['path'].join(path,v);
			var stat = gb['fs'].statSync(cur_path);
			if(!stat.isDirectory()){
				gb['gm'](cur_path).size(function(err,size){
					var cur_stat = {"p":gb['path'].format(cur_path),"s":stat.size,"t":Date.parse(stat.mtime)/1000,"w":"","h":""};
					if(!err){
						cur_stat.w = size.width;
						cur_stat.h = size.height;
					}
					rsArray.push(cur_stat);
					if(rsArray.length == arr_len)callback(rsArray.sort(function(a,b){return (a.t-b.t) || (b.s-a.s)}));
				});
			}else arr_len--;
		});
	}
}

exports.fileslist = fileslist;




