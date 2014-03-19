module.exports = function(app){
	try{
		/* 文件浏览器 */
		app.all('/filebrowser/:act',function(req,res){
			var fb = require('./lib/filebrowser');
			var act = req.params.act;
			if(act){
				if(act === 'upload'){
					file = req.files.upload;
					res.json({res:'ok',msg:'上传成功！'});
				}else if(act === 'download'){
					res.download(req.query.f);
				}else{
					fb.filebrowser(act,req.query,function callback(rs){
						if(act === 'thumb'){
							res.sendfile(rs);
						}else{
							res.json(rs);
						}
					});
				}
			}
		});
		return true;
	}catch(e){
		throw new Error('Please pass an Express instance to construct NFB!');
	}
};