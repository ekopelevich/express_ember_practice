define('ember-practice-03/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-practice-03/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberPractice03ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberPractice03ConfigEnvironment['default'].APP.name, _emberPractice03ConfigEnvironment['default'].APP.version)
  };
});