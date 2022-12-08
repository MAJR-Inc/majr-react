function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.14.0";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has;

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

var React = {
	__proto__: null,
	'default': react,
	__moduleExports: react
};

var styles = {"flat-light":"_37uGn","inputLight":"_5gfdI","button":"_2hTXI","buttonDark":"_2kUFE","buttonSecondary":"_1Gipg","buttonMain":"_1iiPs","linkAnimated":"_vrVpH","link":"_71S8l","iconButton":"_2570K","navbarBtnActive":"_1W0H_","navbarBtnActiveDark":"_9TPHE","navbarBtn":"_2gBhj","iconButtonDark":"_1vMvm","navbarBtnDark":"_1_LN9","rounded":"_3gdqJ","inputWrapper":"_1V-hJ","input":"_2IYfc","textarea":"_24IuX","inputDark":"_2johG","textareaDark":"_2tmLN","textareaproperties":"_b3Ocf","radio":"_kkn6a","spotlight":"_1SOsU","spotlightDark":"_2YjhR","checkbox":"_3kknd","checkboxDark":"_2eX8z","radioDark":"_3QjCQ","radio__inner":"_2t5pY","spotlight__inner":"_hynTg","spotlight__innerActive":"_1WUYa","checkbox__inner":"_3O63b","radio__innerActive":"_1y9gd","checkbox__innerActive":"_2nnyc","select__inner":"_K4kjf","select__innerDark":"_3oq5m","select__options":"_2OWeN","select__optionsDark":"_2fH9V","switch":"_1zvwZ","switchDark":"_204Pu","switch__inner":"_yLiXT","switch__innerActive":"_1AOzu","footerButton":"_17aKo","footerButtonTwitter":"_qpthA","footerButtonDark":"_3-NH5","profile":"_2FLLu","image":"_2hdkJ","imageDark":"__VMFw","profileDark":"_22AHo","switch2":"_3isoC","switch2Dark":"_VPqNN","switch2__inner":"_1PWur","switch2__innerActive":"_2Qt4S","progressWrapper":"_fuT1A","progressWrapperDark":"_3Awf9","progress":"_2EqlW","progressDark":"_1YQhb","progressWrapper__lines":"_f2cuS","tag":"_kR9pS","tagDark":"_3ocXl","addButton":"_HUrcY","steps":"_tX7xC","stepsDark":"_3hKP7","stepsBar":"_3G1JP","stepsBarDark":"_27qPP","stepsBarActive":"_3zoqI","stepsNumber":"_i6jAu","stepsNumberDark":"_3Y_ou","stepsNumberInner":"_2MjMj","stepsNumberInnerActive":"_2j8cR"};

var Button = function Button(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.button,
    dark: styles.buttonDark,
    main: styles.buttonMain,
    highlight: styles.buttonHighlight,
    highlightdark: styles.buttonHighlightDark
  };
  return undefined("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, text);
};

var Link = function Link(_ref) {
  var text = _ref.text,
    link = _ref.link,
    variant = _ref.variant;
  var classname = {
    light: styles.link,
    dark: styles.linkDark,
    animated: styles.linkAnimated
  };
  return undefined("a", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return window.open(link, '_blank');
    }
  }, text);
};

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.iconButton,
    dark: styles.iconButtonDark
  };
  return undefined("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, icon);
};

var NavbarBtn = function NavbarBtn(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.navbarBtn,
    dark: styles.navbarBtnDark,
    active: styles.navbarBtnActive,
    activeDark: styles.navbarBtnActiveDark
  };
  return undefined("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, icon, variant && variant.includes('active') ? text : null);
};

var Input = function Input(_ref) {
  var text = _ref.text,
    setText = _ref.setText,
    variant = _ref.variant,
    placeholder = _ref.placeholder;
  var classname = {
    light: styles.input,
    dark: styles.inputDark,
    password: styles.input,
    passwordDark: styles.inputDark,
    search: styles.input,
    searchDark: styles.inputDark
  };
  var _React$useState = undefined(false),
    seePass = _React$useState[0],
    setSeePass = _React$useState[1];
  return undefined("section", {
    className: "" + styles.inputWrapper
  }, undefined("input", {
    type: variant !== null && variant !== void 0 && variant.includes('password') && !seePass ? 'password' : 'text',
    className: "" + (variant ? classname[variant] : classname.light),
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: placeholder || 'Enter text'
  }), variant === 'password' ? undefined("svg", {
    onClick: function onClick() {
      return setSeePass(!seePass);
    },
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.25 9.25C5.05731 9.25 3.16279 8.02526 1.57907 5.375C3.16279 2.72474 5.05731 1.5 7.25 1.5C9.44269 1.5 11.3372 2.72474 12.9209 5.375C11.3372 8.02526 9.44269 9.25 7.25 9.25ZM7.25 0.5C4.50999 0.5 2.28697 2.11517 0.56588 5.12692C0.478035 5.28064 0.478035 5.46936 0.56588 5.62308C2.28697 8.63483 4.50999 10.25 7.25 10.25C9.99 10.25 12.213 8.63483 13.9341 5.62308C14.022 5.46936 14.022 5.28064 13.9341 5.12692C12.213 2.11517 9.99 0.5 7.25 0.5ZM6.5 5.375C6.5 4.96079 6.83578 4.625 7.25 4.625C7.66421 4.625 8 4.96079 8 5.375C8 5.78921 7.66421 6.125 7.25 6.125C6.83578 6.125 6.5 5.78921 6.5 5.375ZM7.25 3.625C6.2835 3.625 5.5 4.4085 5.5 5.375C5.5 6.3415 6.2835 7.125 7.25 7.125C8.21649 7.125 9 6.3415 9 5.375C9 4.4085 8.21649 3.625 7.25 3.625Z',
    fill: '#38383B',
    fillOpacity: '0.5'
  })) : null, variant === 'passwordDark' ? undefined("svg", {
    onClick: function onClick() {
      return setSeePass(!seePass);
    },
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.25 9.25C5.05731 9.25 3.16279 8.02526 1.57907 5.375C3.16279 2.72474 5.05731 1.5 7.25 1.5C9.44269 1.5 11.3372 2.72474 12.9209 5.375C11.3372 8.02526 9.44269 9.25 7.25 9.25ZM7.25 0.5C4.50999 0.5 2.28697 2.11517 0.56588 5.12692C0.478035 5.28064 0.478035 5.46936 0.56588 5.62308C2.28697 8.63483 4.50999 10.25 7.25 10.25C9.99 10.25 12.213 8.63483 13.9341 5.62308C14.022 5.46936 14.022 5.28064 13.9341 5.12692C12.213 2.11517 9.99 0.5 7.25 0.5ZM6.5 5.375C6.5 4.96079 6.83578 4.625 7.25 4.625C7.66421 4.625 8 4.96079 8 5.375C8 5.78921 7.66421 6.125 7.25 6.125C6.83578 6.125 6.5 5.78921 6.5 5.375ZM7.25 3.625C6.2835 3.625 5.5 4.4085 5.5 5.375C5.5 6.3415 6.2835 7.125 7.25 7.125C8.21649 7.125 9 6.3415 9 5.375C9 4.4085 8.21649 3.625 7.25 3.625Z',
    fill: '#f9f9f9',
    fillOpacity: '0.5'
  })) : null, variant === 'search' ? undefined("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1 4.74828C1 2.67816 2.67816 1 4.74828 1C6.81839 1 8.49655 2.67816 8.49655 4.74828C8.49655 6.81839 6.81839 8.49655 4.74828 8.49655C2.67816 8.49655 1 6.81839 1 4.74828ZM4.74828 0C2.12588 0 0 2.12588 0 4.74828C0 7.37068 2.12588 9.49655 4.74828 9.49655C5.87936 9.49655 6.91807 9.10107 7.73367 8.44084L11.0706 11.7778C11.2659 11.973 11.5824 11.973 11.7777 11.7778C11.973 11.5825 11.973 11.2659 11.7777 11.0706L8.44079 7.73374C9.10105 6.91812 9.49655 5.87939 9.49655 4.74828C9.49655 2.12588 7.37068 0 4.74828 0Z',
    fill: '#38383B',
    fillOpacity: '0.5'
  })) : null, variant === 'searchDark' ? undefined("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1 4.74828C1 2.67816 2.67816 1 4.74828 1C6.81839 1 8.49655 2.67816 8.49655 4.74828C8.49655 6.81839 6.81839 8.49655 4.74828 8.49655C2.67816 8.49655 1 6.81839 1 4.74828ZM4.74828 0C2.12588 0 0 2.12588 0 4.74828C0 7.37068 2.12588 9.49655 4.74828 9.49655C5.87936 9.49655 6.91807 9.10107 7.73367 8.44084L11.0706 11.7778C11.2659 11.973 11.5824 11.973 11.7777 11.7778C11.973 11.5825 11.973 11.2659 11.7777 11.0706L8.44079 7.73374C9.10105 6.91812 9.49655 5.87939 9.49655 4.74828C9.49655 2.12588 7.37068 0 4.74828 0Z',
    fill: '#f9f9f9',
    fillOpacity: '0.5'
  })) : null);
};

var Textarea = function Textarea(_ref) {
  var text = _ref.text,
    setText = _ref.setText,
    variant = _ref.variant,
    placeholder = _ref.placeholder;
  var classname = {
    light: styles.textarea,
    dark: styles.textareaDark
  };
  return undefined("textarea", {
    className: "" + (variant ? classname[variant] : classname.light),
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: placeholder || 'Enter text'
  });
};

var Radio = function Radio(_ref) {
  var radio = _ref.radio,
    setRadio = _ref.setRadio,
    index = _ref.index,
    variant = _ref.variant;
  var classname = {
    light: styles.radio,
    dark: styles.radioDark
  };
  var handleClick = function handleClick() {
    var newRadio = radio.map(function () {
      return false;
    });
    newRadio[index] = true;
    setRadio(newRadio);
  };
  return undefined("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, undefined("div", {
    className: radio[index] ? styles.radio__innerActive : styles.radio__inner
  }));
};

var Checkbox = function Checkbox(_ref) {
  var checkbox = _ref.checkbox,
    setCheckbox = _ref.setCheckbox,
    index = _ref.index,
    variant = _ref.variant;
  var classname = {
    light: styles.checkbox,
    dark: styles.checkboxDark
  };
  var handleClick = function handleClick() {
    setCheckbox(checkbox.map(function (r, i) {
      return i === index ? !r : r;
    }));
  };
  return undefined("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, undefined("div", {
    className: checkbox[index] ? styles.checkbox__innerActive : styles.checkbox__inner
  }));
};

var Spotlight = function Spotlight(_ref) {
  var clicked = _ref.clicked,
    setClicked = _ref.setClicked,
    variant = _ref.variant;
  var classname = {
    light: styles.spotlight,
    dark: styles.spotlightDark
  };
  var handleClick = function handleClick() {
    setClicked(!clicked);
  };
  return undefined("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, undefined("div", {
    className: clicked ? styles.spotlight__innerActive : styles.spotlight__inner
  }, undefined("svg", {
    width: '23',
    height: '23',
    viewBox: '0 0 23 23',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M12 1C12 0.447715 11.5523 0 11 0C10.4477 0 10 0.447715 10 1V1.0125C10 1.56479 10.4477 2.0125 11 2.0125C11.5523 2.0125 12 1.56479 12 1.0125V1ZM11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7ZM5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11ZM0 11C0 10.4477 0.447715 10 1 10H1.0125C1.56479 10 2.0125 10.4477 2.0125 11C2.0125 11.5523 1.56479 12 1.0125 12H1C0.447715 12 0 11.5523 0 11ZM20 11C20 10.4477 20.4477 10 21 10H21.0125C21.5648 10 22.0125 10.4477 22.0125 11C22.0125 11.5523 21.5648 12 21.0125 12H21C20.4477 12 20 11.5523 20 11ZM12 21C12 20.4477 11.5523 20 11 20C10.4477 20 10 20.4477 10 21V21.0125C10 21.5648 10.4477 22.0125 11 22.0125C11.5523 22.0125 12 21.5648 12 21.0125V21ZM3.16789 3.16789C3.55842 2.77737 4.19158 2.77737 4.58211 3.16789L4.59461 3.18039C4.98513 3.57092 4.98513 4.20408 4.59461 4.59461C4.20408 4.98513 3.57092 4.98513 3.18039 4.59461L3.16789 4.58211C2.77737 4.19158 2.77737 3.55842 3.16789 3.16789ZM18.8322 3.16794C18.4417 2.77739 17.8085 2.77735 17.4179 3.16784C17.0274 3.55834 17.0273 4.1915 17.4178 4.58206L17.4303 4.59456C17.8208 4.98511 18.454 4.98515 18.8446 4.59466C19.2351 4.20416 19.2352 3.571 18.8447 3.18044L18.8322 3.16794ZM17.4179 17.4179C17.8084 17.0274 18.4416 17.0274 18.8321 17.4179L18.8446 17.4304C19.2351 17.8209 19.2351 18.4541 18.8446 18.8446C18.4541 19.2351 17.8209 19.2351 17.4304 18.8446L17.4179 18.8321C17.0274 18.4416 17.0274 17.8084 17.4179 17.4179ZM4.58206 17.4178C4.1915 17.0273 3.55834 17.0274 3.16784 17.4179C2.77735 17.8085 2.77739 18.4417 3.16794 18.8322L3.18044 18.8447C3.571 19.2352 4.20416 19.2351 4.59466 18.8446C4.98515 18.454 4.98511 17.8208 4.59456 17.4303L4.58206 17.4178Z',
    fill: variant === 'light' && !clicked ? '#de1149' : '#f9f9f9',
    style: {
      transition: 'all 0.3s ease-in-out'
    }
  }))));
};

var Select = function Select(_ref) {
  var select = _ref.select,
    setSelect = _ref.setSelect,
    def = _ref.def,
    variant = _ref.variant;
  var _React$useState = undefined(false),
    open = _React$useState[0],
    setOpen = _React$useState[1];
  var _React$useState2 = undefined(-1),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  var handleClick = function handleClick(index) {
    setSelected(index);
    setSelect(index);
    setOpen(false);
  };
  return undefined("div", {
    className: styles.select
  }, undefined("div", {
    className: variant === 'dark' ? styles.select__innerDark : styles.select__inner,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, selected !== -1 ? select[selected] : def || 'Select', undefined("svg", {
    width: '12',
    height: '7',
    viewBox: '0 0 12 7',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    opacity: '0.5',
    d: 'M1 1L6 6L11 1H1Z',
    fill: variant === 'dark' ? '#f9f9f9' : '#38383B',
    stroke: variant === 'dark' ? '#f9f9f9' : '#38383B',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), open && undefined("div", {
    className: variant === 'dark' ? styles.select__optionsDark : styles.select__options
  }, select.map(function (r, i) {
    return undefined("div", {
      key: i,
      className: styles.select__option,
      onClick: function onClick() {
        return handleClick(i);
      }
    }, r);
  })));
};

var ThemeSwitch = function ThemeSwitch(_ref) {
  var value = _ref.value,
    setSwitch = _ref.setSwitch;
  return undefined("div", {
    className: "" + (!value ? styles["switch"] : styles.switchDark),
    onClick: function onClick() {
      return setSwitch(!value);
    }
  }, undefined("div", {
    className: !value ? styles.switch__innerActive : styles.switch__inner
  }, undefined("svg", {
    width: '19',
    height: '19',
    viewBox: '0 0 19 19',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    d: 'M9.4612 12.6924C11.1605 12.6924 12.5381 11.3148 12.5381 9.6155C12.5381 7.91616 11.1605 6.53857 9.4612 6.53857C7.76186 6.53857 6.38428 7.91616 6.38428 9.6155C6.38428 11.3148 7.76186 12.6924 9.4612 12.6924Z',
    stroke: '#f9f9f9',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }), undefined("path", {
    d: 'M2.53821 9.61558H3.30744M9.46128 2.6925V3.46174M15.6151 9.61558H16.3844M9.46128 15.7694V16.5387M4.53821 4.6925L5.07667 5.23097M14.3844 4.6925L13.8459 5.23097M13.8459 14.0002L14.3844 14.5387M5.07667 14.0002L4.53821 14.5387',
    stroke: '#f9f9f9',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), undefined("div", {
    className: value ? styles.switch__innerActive : styles.switch__inner
  }, undefined("svg", {
    width: '20',
    height: '19',
    viewBox: '0 0 20 19',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    d: 'M9.92312 2.69243C10.0247 2.69243 10.1254 2.69243 10.2254 2.69243C9.23722 3.61067 8.60203 4.84616 8.43026 6.18414C8.25849 7.52212 8.56101 8.878 9.28522 10.0161C10.0094 11.1541 11.1096 12.0025 12.3943 12.4136C13.6791 12.8247 15.0674 12.7725 16.3177 12.2663C15.8368 13.4236 15.0506 14.4286 14.0433 15.1742C13.0359 15.9197 11.845 16.3778 10.5977 16.4997C9.35032 16.6215 8.09332 16.4024 6.96072 15.8658C5.82813 15.3292 4.86243 14.4953 4.16665 13.4529C3.47086 12.4105 3.07108 11.1988 3.00995 9.94703C2.94882 8.69525 3.22864 7.45035 3.81955 6.34514C4.41047 5.23992 5.29032 4.31584 6.36524 3.67146C7.44017 3.02708 8.66985 2.68658 9.92312 2.68628V2.69243Z',
    stroke: !value ? '#171717' : '#f9f9f9',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))));
};
var SwitchComponent = function SwitchComponent(_ref2) {
  var value = _ref2.value,
    setSwitch = _ref2.setSwitch,
    variant = _ref2.variant;
  return undefined("div", {
    className: "" + (variant === 'light' ? styles.switch2 : styles.switch2Dark),
    onClick: function onClick() {
      return setSwitch(!value);
    }
  }, undefined("div", {
    className: value ? styles.switch2__innerActive : styles.switch2__inner
  }));
};

var FooterButton = function FooterButton(_ref) {
  var variant = _ref.variant,
    text = _ref.text,
    onClick = _ref.onClick;
  var classname = {
    light: styles.footerButton,
    dark: styles.footerButtonDark,
    twitter: styles.footerButtonTwitter
  };
  return undefined("button", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: onClick
  }, variant !== 'twitter' ? text : undefined("svg", {
    width: '18',
    height: '15',
    viewBox: '0 0 18 15',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    d: 'M16.4715 1.58279C15.7229 1.94959 14.9893 2.09856 14.2258 2.32388C13.3866 1.37693 12.1425 1.32453 10.947 1.77218C9.75153 2.21983 8.96852 3.31424 8.98574 4.5696V5.31818C6.55662 5.38031 4.39324 4.27392 2.99715 2.32388C2.99715 2.32388 -0.133389 7.88803 5.99144 10.5582C4.59011 11.4917 3.19253 12.1212 1.5 12.0553C3.97628 13.405 6.67489 13.8691 9.01119 13.1909C11.6911 12.4124 13.8934 10.404 14.7385 7.39547C14.9906 6.48046 15.1158 5.53516 15.1106 4.58607C15.1091 4.39968 16.2409 2.51102 16.4715 1.58204V1.58279Z',
    fill: 'white',
    stroke: 'white',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })));
};

var Profile = function Profile(_ref) {
  var variant = _ref.variant,
    url = _ref.url,
    alt = _ref.alt,
    size = _ref.size;
  var classname = {
    light: styles.profile,
    dark: styles.profileDark
  };
  var getSize = function getSize() {
    var res = '30px';
    if (size === 'md') res = '50px';
    if (size === 'lg') res = '70px';
    return res;
  };
  return undefined("div", {
    className: "" + (variant ? classname[variant] : classname.light)
  }, undefined("img", {
    src: url,
    alt: alt || 'Profile',
    style: {
      width: getSize(),
      height: getSize()
    }
  }));
};

var Image = function Image(_ref) {
  var variant = _ref.variant,
    url = _ref.url,
    alt = _ref.alt,
    width = _ref.width,
    height = _ref.height;
  var classname = {
    light: styles.image,
    dark: styles.imageDark
  };
  return undefined("div", {
    className: "" + (variant ? classname[variant] : classname.light)
  }, undefined("img", {
    src: url,
    alt: alt || 'Image',
    style: {
      width: width + 'px',
      height: height + 'px'
    }
  }));
};

var Progress = function Progress(_ref) {
  var variant = _ref.variant,
    value = _ref.value,
    max = _ref.max,
    width = _ref.width;
  var classname = {
    light: styles.progress,
    dark: styles.progressDark
  };
  var wrapperClass = {
    light: styles.progressWrapper,
    dark: styles.progressWrapperDark
  };
  return undefined("div", {
    className: "" + (variant ? wrapperClass[variant] : wrapperClass.light),
    style: {
      width: width
    }
  }, undefined("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    style: {
      width: value / max * 100 + '%'
    }
  }));
};
var ProgressWDashes = function ProgressWDashes(_ref2) {
  var variant = _ref2.variant,
    value = _ref2.value,
    max = _ref2.max,
    width = _ref2.width;
  var classname = {
    light: styles.progress,
    dark: styles.progressDark
  };
  var wrapperClass = {
    light: styles.progressWrapper,
    dark: styles.progressWrapperDark
  };
  return undefined("div", {
    className: "" + (variant ? wrapperClass[variant] : wrapperClass.light),
    style: {
      width: width
    }
  }, undefined("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    style: {
      width: value / max * 100 + '%'
    }
  }), undefined("section", {
    className: styles.progressWrapper__lines
  }, [].concat(Array(7)).map(function (_, i) {
    return undefined("div", {
      key: i
    });
  })));
};

var Tag = function Tag(_ref) {
  var theme = _ref.theme,
    icon = _ref.icon,
    text = _ref.text,
    onClick = _ref.onClick,
    color = _ref.color;
  var classname = {
    light: styles.tag,
    dark: styles.tagDark
  };
  if (!color) color = theme === 'dark' ? '#f9f9f9' : '#171717';
  return undefined("button", {
    className: "" + (theme ? classname[theme] : classname.light),
    onClick: onClick,
    style: {
      color: color
    }
  }, text, icon || null);
};

var AddButton = function AddButton(_ref) {
  var onClick = _ref.onClick;
  return undefined("button", {
    className: styles.addButton,
    onClick: onClick
  }, undefined("svg", {
    width: '17',
    height: '17',
    viewBox: '0 0 17 17',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("g", {
    clipPath: 'url(#clip0_229_730)'
  }, undefined("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M9.5 3.54175C9.5 2.98946 9.05228 2.54175 8.5 2.54175C7.94772 2.54175 7.5 2.98946 7.5 3.54175V7.5H3.54199C2.98971 7.5 2.54199 7.94772 2.54199 8.5C2.54199 9.05228 2.98971 9.5 3.54199 9.5H7.5V13.4584C7.5 14.0107 7.94772 14.4584 8.5 14.4584C9.05228 14.4584 9.5 14.0107 9.5 13.4584V9.5H13.4587C14.0109 9.5 14.4587 9.05228 14.4587 8.5C14.4587 7.94772 14.0109 7.5 13.4587 7.5H9.5V3.54175Z',
    fill: '#F9F9F9'
  })), undefined("defs", null, undefined("clipPath", {
    id: 'clip0_229_730'
  }, undefined("rect", {
    width: '17',
    height: '17',
    fill: 'white'
  })))));
};

var IconVerified = function IconVerified() {
  return undefined("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("g", {
    clipPath: 'url(#clip0_2_944)'
  }, undefined("path", {
    d: 'M3.13635 6L5.45453 8.5L10.0909 3.5',
    stroke: '#DE1149',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })), undefined("defs", null, undefined("clipPath", {
    id: 'clip0_2_944'
  }, undefined("rect", {
    width: '11.1273',
    height: '12',
    fill: 'white',
    transform: 'translate(0.818176)'
  }))));
};

var IconCompatible = function IconCompatible() {
  return undefined("svg", {
    width: '12',
    height: '11',
    viewBox: '0 0 12 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    d: 'M5.9965 8.874L2.9105 10.4965L3.5 7.06L1 4.6265L4.45 4.1265L5.993 1L7.536 4.1265L10.986 4.6265L8.486 7.06L9.0755 10.4965L5.9965 8.874Z',
    stroke: '#009410',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
};

var IconReport = function IconReport() {
  return undefined("svg", {
    width: '11',
    height: '10',
    viewBox: '0 0 11 10',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, undefined("path", {
    d: 'M5.50351 4.01587V5.01587M5.50351 7.01587V7.02087',
    stroke: '#FCCA46',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }), undefined("path", {
    d: 'M2.00351 9.01588H9.00351C9.16667 9.01473 9.32706 8.97369 9.47071 8.89631C9.61435 8.81894 9.73689 8.7076 9.82762 8.572C9.91835 8.43639 9.97452 8.28065 9.99124 8.11835C10.008 7.95605 9.9847 7.79213 9.92351 7.64088L6.37351 1.51588C6.28703 1.35958 6.16027 1.22929 6.00639 1.13857C5.85251 1.04785 5.67714 1 5.49851 1C5.31988 1 5.14451 1.04785 4.99064 1.13857C4.83676 1.22929 4.70999 1.35958 4.62351 1.51588L1.07351 7.64088C1.01348 7.78866 0.98968 7.94867 1.00409 8.10753C1.0185 8.26639 1.0707 8.4195 1.15634 8.55408C1.24198 8.68866 1.35857 8.80079 1.49638 8.88113C1.63418 8.96146 1.78921 9.00766 1.94851 9.01588',
    stroke: '#FCCA46',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
};

var StepsBar = function StepsBar(_ref) {
  var active = _ref.active,
    theme = _ref.theme;
  return undefined("div", {
    className: (theme === 'dark' ? styles.stepsBarDark : styles.stepsBar) + " " + (active ? styles.stepsBarActive : '')
  });
};
var StepsNumber = function StepsNumber(_ref2) {
  var number = _ref2.number,
    active = _ref2.active,
    theme = _ref2.theme;
  return undefined("div", {
    className: (theme === 'dark' ? styles.stepsNumberDark : styles.stepsNumber) + " "
  }, undefined("div", {
    className: styles.stepsNumberInner + " " + (active ? styles.stepsNumberInnerActive : '')
  }, number));
};
var Steps = function Steps(_ref3) {
  var current = _ref3.current,
    total = _ref3.total,
    variant = _ref3.variant;
  return undefined("div", {
    className: variant === 'dark' ? styles.stepsDark : styles.steps
  }, undefined(StepsBar, {
    active: current > 0,
    theme: variant
  }), Array.from(Array(total).keys()).map(function (step) {
    return undefined(undefined, {
      key: step
    }, undefined(StepsNumber, {
      number: step + 1,
      active: current >= step + 1,
      theme: variant
    }), step < total - 1 && undefined(StepsBar, {
      active: current > step + 1,
      theme: variant
    }));
  }), undefined(StepsBar, {
    active: false,
    theme: variant
  }));
};

export { AddButton, Button, Checkbox, FooterButton, IconButton, IconCompatible, IconReport, IconVerified, Image, Input, Link, NavbarBtn, Profile, Progress, ProgressWDashes, Radio, Select, Spotlight, Steps, StepsBar, StepsNumber, SwitchComponent, Tag, Textarea, ThemeSwitch };
//# sourceMappingURL=index.modern.js.map
