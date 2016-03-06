define('ember-practice-03/tests/helpers/start-app', ['exports', 'ember', 'ember-practice-03/app', 'ember-practice-03/config/environment'], function (exports, _ember, _emberPractice03App, _emberPractice03ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberPractice03ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberPractice03App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});