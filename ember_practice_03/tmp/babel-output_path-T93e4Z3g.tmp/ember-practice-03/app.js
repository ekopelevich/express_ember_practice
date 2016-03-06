define('ember-practice-03/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'ember-practice-03/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _emberPractice03ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberPractice03ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberPractice03ConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberPractice03ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});