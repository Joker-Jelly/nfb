/*
	
	param:
		act:请求的动作
		param:参数
*/
exports.filebrowser = function(act,param,callback){
	var d = require('./'+act);
	d[act](param,callback);
};