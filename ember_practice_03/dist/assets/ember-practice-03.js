"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

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
define('ember-practice-03/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-practice-03/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberPractice03ConfigEnvironment) {

  var name = _emberPractice03ConfigEnvironment['default'].APP.name;
  var version = _emberPractice03ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ember-practice-03/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-practice-03/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('ember-practice-03/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-practice-03/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberPractice03ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberPractice03ConfigEnvironment['default'].APP.name, _emberPractice03ConfigEnvironment['default'].APP.version)
  };
});
define('ember-practice-03/initializers/export-application-global', ['exports', 'ember', 'ember-practice-03/config/environment'], function (exports, _ember, _emberPractice03ConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberPractice03ConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _emberPractice03ConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberPractice03ConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-practice-03/router', ['exports', 'ember', 'ember-practice-03/config/environment'], function (exports, _ember, _emberPractice03ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberPractice03ConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('dashboard');
  });

  exports['default'] = Router;
});
define("ember-practice-03/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "ember-practice-03/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Collabowrite");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ember-practice-03/templates/dashboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "ember-practice-03/templates/dashboard.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("ember-practice-03/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ember-practice-03/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Hello from Index");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

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
//# sourceMappingURL=ember-practice-03.map