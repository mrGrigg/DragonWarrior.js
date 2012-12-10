
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'DW Demo' });
};


exports.editor = function(req, res){
  res.render('editor', { title: 'Editor Demo' });
};