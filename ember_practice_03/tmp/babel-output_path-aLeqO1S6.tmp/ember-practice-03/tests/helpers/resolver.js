define('ember-practice-03/tests/helpers/resolver', ['exports', 'ember/resolver', 'ember-practice-03/config/environment'], function (exports, _emberResolver, _emberPractice03ConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberPractice03ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberPractice03ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});