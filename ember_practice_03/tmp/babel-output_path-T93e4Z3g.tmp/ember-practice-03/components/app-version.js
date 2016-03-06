define('ember-practice-03/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-practice-03/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberPractice03ConfigEnvironment) {

  var name = _emberPractice03ConfigEnvironment['default'].APP.name;
  var version = _emberPractice03ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});