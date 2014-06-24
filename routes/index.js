
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'MBTI API v0.1.1' });
};
