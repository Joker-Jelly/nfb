var util = require('util');
var path = require('path');
var async = require('async');
var fs = require('fs');
var gm = require('gm');
var conf = require('../conf');  //全局变量，用于取conf中的配置信息

/**
	初始化设置
*/
var init = (function(){
	conf.FILES_ROOT = conf.FILES_ROOT || 'upload';
	conf.THUMB_PATH = conf.THUMB_PATH || path.join(conf.FILES_ROOT,'thumb');
	return conf;
}());

/* 
	遍历一个数组或对象，并执行一个方法 
	
	param:
		o：数组或对象
		doing：方法，有两个参数，顺序为key,val
	
*/
var forEach = function forEach(o,doing){
	if(o){
		for(var i in o){
            if(o.hasOwnProperty(i)){
			    doing(i,o[i]);
            }
		}
	}
};

/*
	回传给前台页面，告知正确或者错误的信息
	
	param:
		res:结果（ok，error）
		msg:显示给用户的消息
*/
var rsJSON = function rsJSON(res,msg){
	return {res:res || 'ok',msg:msg || ''};
};

/*
	生成特殊名称
	
	param:
		接受一组字符串
*/
var getUniqueName = function getUniqueName(){
	var str = '';
	for(var i=0;i<arguments.length;i++){
		if(arguments[i])str += arguments[i]+'/';
	}
	str = str.match(/(\w{0,3}(?=\/))|^\d*|\w*$/).join().replace(/,/g,'');
	return str;
};

/*
	格式化路径字符串
	
	param:
		p:路径
	rssult:
		格式化后的路径
*/
path.format = function(p){
	p = path.normalize(p);
	while(p.indexOf('\\') != -1){
		p = p.replace('\\','/');
	}
	return p;
};

/*
	合并路径，并且以第二个参数为基础重新拼合
	主要用于文件移动
	param:
		p：路径
		n：基础路径
	rssult:
		格式化后的路径
*/
path.joinm = function(p,n){
	return path.join(p,path.basename(n));
};

/*
	创建一个计数器类，用于取得多重异步操作的结束标记
	
	param:
		n：计数器名称
*/
var Counter = function Counter(){
	var count = {};
	
	return function(n){
		count[n] = count[n] || 0;
		return {
			add:function(){
				return ++count[n];
			},
			sub:function(){
				return (count[n] === 0 ? 0 : --count[n]);
			},
			show:function(){
				return count[n];
			}
		};
	};
};
	
exports.gb = {'conf':init,'util':util,'path':path,'fs':fs,'async':async,'gm':gm};

exports.util = {'forEach':forEach,'rs':rsJSON,'getUniqueName':getUniqueName,'Counter':Counter()};