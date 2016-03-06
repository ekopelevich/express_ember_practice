define('ember-practice-03/router', ['exports', 'ember', 'ember-practice-03/config/environment'], function (exports, _ember, _emberPractice03ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberPractice03ConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('dashboard');
  });

  exports['default'] = Router;
});