define('ember-practice-03/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-practice-03/tests/helpers/start-app', 'ember-practice-03/tests/helpers/destroy-app'], function (exports, _qunit, _emberPractice03TestsHelpersStartApp, _emberPractice03TestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberPractice03TestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _emberPractice03TestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});