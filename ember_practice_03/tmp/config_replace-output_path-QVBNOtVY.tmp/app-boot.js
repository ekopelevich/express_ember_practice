/* jshint ignore:start */

define('ember-practice-03/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-practice-03';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("ember-practice-03/app")["default"].create({"name":"ember-practice-03","version":"0.0.0+60c322e6"});
}

/* jshint ignore:end */
