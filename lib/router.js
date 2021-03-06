var nunjucks = require('./template');
var template;
var routers = {
  index: function index(req, res) {
    var html = template.render('index.html');
    res.send(html);
  }
};

module.exports = function (app, config) {
  app.get('/', routers.index);
  template = nunjucks(config);
};

module.exports.routers = routers;
