(self["webpackChunk"] = self["webpackChunk"] || []).push([["/assets/js/livewire-turbolinks"],{

/***/ "./resources/js/livewire-turbolinks.js":
/*!*********************************************!*\
  !*** ./resources/js/livewire-turbolinks.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function () {
  'use strict';

  if (typeof window.livewire === 'undefined') {
    throw 'Livewire Turbolinks Plugin: window.Livewire is undefined. Make sure @livewireScripts is placed above this script include';
  }

  var firstTime = true;

  function wireTurboAfterFirstVisit() {
    // We only want this handler to run AFTER the first load.
    if (firstTime) {
      firstTime = false;
      return;
    }

    window.Livewire.restart();
    window.KTLayout.init();
  }

  function wireTurboBeforeCache() {
    document.querySelectorAll('[wire\\:id]').forEach(function (el) {
      var component = el.__livewire;

      if (component) {
        var dataObject = {
          fingerprint: component.fingerprint,
          serverMemo: component.serverMemo,
          effects: component.effects
        };
        el.setAttribute('wire:initial-data', JSON.stringify(dataObject));
      }
    });
  }

  document.addEventListener('turbo:load', wireTurboAfterFirstVisit);
  document.addEventListener('turbo:before-cache', wireTurboBeforeCache);
  Livewire.hook('beforePushState', function (state) {
    if (!state.turbolinks) state.turbolinks = {};
  });
  Livewire.hook('beforeReplaceState', function (state) {
    if (!state.turbolinks) state.turbolinks = {};
  });
});

/***/ })

},
0,[["./resources/js/livewire-turbolinks.js","/assets/js/manifest"]]]);