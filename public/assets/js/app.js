(self["webpackChunk"] = self["webpackChunk"] || []).push([["/assets/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metronic_tools_webpack_vendors_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metronic/tools/webpack/vendors/global */ "./resources/metronic/tools/webpack/vendors/global.js");
/* harmony import */ var _metronic_tools_webpack_scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metronic/tools/webpack/scripts */ "./resources/metronic/tools/webpack/scripts.js");
/* harmony import */ var _metronic_tools_webpack_scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metronic_tools_webpack_scripts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./resources/js/helper.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





window.Pusher = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
window.KTAppOptions = {
  colors: {
    state: {
      brand: '#5d78ff',
      dark: '#282a3c',
      light: '#ffffff',
      primary: '#5867dd',
      success: '#34bfa3',
      info: '#36a3f7',
      warning: '#ffb822',
      danger: '#fd3995'
    },
    base: {
      label: ['#c5cbe3', '#a1a8c3', '#3d4465', '#3e4466'],
      shape: ['#f0f3ff', '#d9dffa', '#afb4d4', '#646c9a']
    }
  }
};
$.notifyDefaults({
  newest_on_top: true,
  offset: 5,
  spacing: 10,
  placement: {
    from: 'bottom',
    align: 'left'
  },
  template: "\n            <div data-notify=\"container\" class=\"col-sm-5 col-md-4 col-lg-3 bg-white shadow-lg px-1 py-4 rounded-lg border-left border-{0}\" style=\"border-width:6px !important;\" role=\"alert\">\n                <div class=\"d-flex\">\n                <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-notify=\"dismiss\">&times;</button>\n                <div class=\"mx-3\">\n                    <span data-notify=\"icon\" class=\"p-2 text-white bg-{0} rounded-circle\"></span>\n                </div>\n                <div class=\"text-break\">\n                <span data-notify=\"title\">{1}</span>\n                <span data-notify=\"message\">{2}</span>\n                </div>\n                <a href=\"{3}\" target=\"{4}\" data-notify=\"url\"></a>\n            </div>",
  animate: {
    enter: 'animated fadeInUp',
    exit: 'animated fadeOutDown'
  }
});
$.fn.selectpicker.Constructor.DEFAULTS.iconBase = '';
$.fn.selectpicker.Constructor.DEFAULTS.tickIcon = 'fas fa-check';

window.emitEvent = function (name, options) {
  window.dispatchEvent(new CustomEvent(name, {
    detail: options
  }));
};

window.addEventListener('notify', function (event) {
  var icon = 'flaticon-exclamation-1';

  switch (event.detail.type) {
    case 'success':
      icon = 'flaticon2-check-mark';
      break;

    case 'danger':
      icon = 'flaticon2-cross';

    case 'warning':
      icon = 'flaticon-questions-circular-button';

    case 'info':
      icon = 'flaticon2-information';

    default:
      break;
  }

  var option = {
    icon: icon,
    message: event.detail.message
  };

  if (event.detail.url) {
    option = _objectSpread(_objectSpread({}, option), {}, {
      url: event.detail.url,
      target: '_blank'
    });
  }

  $.notify(option, {
    type: event.detail.type
  });
});
document.addEventListener('DOMContentLoaded', function (event) {
  Livewire.hook('element.removed', function () {
    KTApp.initTooltips();
  });
});
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_3__["default"]({
  broadcaster: 'pusher',
  key: "",
  wsHost: "",
  wsPort: "",
  forceTLS: false,
  disableStats: true
});
window.Echo["private"]("App.Models.User.".concat(window.__user__.id)).notification(function (notification) {
  return window.emitEvent('notify', {
    type: 'primary',
    message: notification.description,
    url: notification.url
  });
});

/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/***/ (() => {

window.linkify = function (text) {
  var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text.replace(urlRegex, function (url) {
    return "<a href=\"".concat(url, "\" target=\"_blank\" class=\"text-primary\">").concat(url, "</a>");
  });
};

window.clean_comment_input = function (text) {
  return $("<div>".concat(text, "</div>")).find('a').replaceWith(function () {
    return this.innerHTML;
  }).end().find('img').remove().end().find('script').remove().end().find('[style]').removeAttr('style').end().find('[x-html]').removeAttr('x-html').end().find('[x-text]').removeAttr('x-text').end().html();
};

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/app.js":
/*!************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/app.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";

/**
 * @class KApp
 */

var KTApp = function () {
  /** @type {object} colors State colors **/
  var colors = {};

  var _initTooltip = function initTooltip(el) {
    var skin = el.data('skin') ? 'tooltip-' + el.data('skin') : '';
    var width = el.data('width') == 'auto' ? 'tooltop-auto-width' : '';
    var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
    var placement = el.data('placement') ? el.data('placement') : 'left';
    el.tooltip({
      trigger: triggerValue,
      template: '<div class="tooltip ' + skin + ' ' + width + '" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
    });
  };

  var _initTooltips = function initTooltips() {
    // init bootstrap tooltips
    $('[data-toggle="kt-tooltip"]').each(function () {
      _initTooltip($(this));
    });
  };

  var _initPopover = function initPopover(el) {
    var skin = el.data('skin') ? 'popover-' + el.data('skin') : '';
    var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
    el.popover({
      trigger: triggerValue,
      template: '\
            <div class="popover ' + skin + '" role="tooltip">\
                <div class="arrow"></div>\
                <h3 class="popover-header"></h3>\
                <div class="popover-body"></div>\
            </div>'
    });
  };

  var _initPopovers = function initPopovers() {
    // init bootstrap popover
    $('[data-toggle="kt-popover"]').each(function () {
      _initPopover($(this));
    });
  };

  var initFileInput = function initFileInput() {
    // init bootstrap popover
    $('.custom-file-input').on('change', function () {
      var fileName = $(this).val();
      $(this).next('.custom-file-label').addClass("selected").html(fileName);
    });
  };

  var _initPortlet = function initPortlet(el, options) {
    // init portlet tools
    var el = $(el);
    var portlet = new KTPortlet(el[0], options);
  };

  var _initPortlets = function initPortlets() {
    // init portlet tools
    $('[data-ktportlet="true"]').each(function () {
      var el = $(this);

      if (el.data('data-ktportlet-initialized') !== true) {
        _initPortlet(el, {});

        el.data('data-ktportlet-initialized', true);
      }
    });
  };

  var initScroll = function initScroll() {
    $('[data-scroll="true"]').each(function () {
      var el = $(this);
      KTUtil.scrollInit(this, {
        mobileNativeScroll: true,
        handleWindowResize: true,
        rememberPosition: el.data('remember-position') == 'true' ? true : false,
        height: function height() {
          if (KTUtil.isInResponsiveRange('tablet-and-mobile') && el.data('mobile-height')) {
            return el.data('mobile-height');
          } else {
            return el.data('height');
          }
        }
      });
    });
  };

  var initAlerts = function initAlerts() {
    // init bootstrap popover
    $('body').on('click', '[data-close=alert]', function () {
      $(this).closest('.alert').hide();
    });
  };

  var _initSticky = function initSticky() {
    var sticky = new Sticky('[data-sticky="true"]');
  };

  var _initAbsoluteDropdown = function initAbsoluteDropdown(context) {
    var dropdownMenu;

    if (!context) {
      return;
    }

    $('body').on('show.bs.dropdown', context, function (e) {
      dropdownMenu = $(e.target).find('.dropdown-menu');
      $('body').append(dropdownMenu.detach());
      dropdownMenu.css('display', 'block');
      dropdownMenu.position({
        'my': 'right top',
        'at': 'right bottom',
        'of': $(e.relatedTarget)
      });
    }).on('hide.bs.dropdown', context, function (e) {
      $(e.target).append(dropdownMenu.detach());
      dropdownMenu.hide();
    });
  };

  var initAbsoluteDropdowns = function initAbsoluteDropdowns() {
    $('body').on('show.bs.dropdown', function (e) {
      // e.target is always parent (contains toggler and menu)
      var $toggler = $(e.target).find("[data-attach='body']");

      if ($toggler.length === 0) {
        return;
      }

      var $dropdownMenu = $(e.target).find('.dropdown-menu'); // save detached menu

      var $detachedDropdownMenu = $dropdownMenu.detach(); // save reference to detached menu inside data of toggler

      $toggler.data('dropdown-menu', $detachedDropdownMenu);
      $('body').append($detachedDropdownMenu);
      $detachedDropdownMenu.css('display', 'block');
      $detachedDropdownMenu.position({
        my: 'right top',
        at: 'right bottom',
        of: $(e.relatedTarget)
      });
    });
    $('body').on('hide.bs.dropdown', function (e) {
      var $toggler = $(e.target).find("[data-attach='body']");

      if ($toggler.length === 0) {
        return;
      } // access to reference of detached menu from data of toggler


      var $detachedDropdownMenu = $toggler.data('dropdown-menu'); // re-append detached menu inside parent

      $(e.target).append($detachedDropdownMenu.detach()); // hide dropdown

      $detachedDropdownMenu.hide();
    });
  };

  return {
    init: function init(options) {
      if (options && options.colors) {
        colors = options.colors;
      }

      KTApp.initComponents();
    },
    initComponents: function initComponents() {
      initScroll();

      _initTooltips();

      _initPopovers();

      initAlerts();

      _initPortlets();

      initFileInput();

      _initSticky();

      initAbsoluteDropdowns();
    },
    initTooltips: function initTooltips() {
      _initTooltips();
    },
    initTooltip: function initTooltip(el) {
      _initTooltip(el);
    },
    initPopovers: function initPopovers() {
      _initPopovers();
    },
    initPopover: function initPopover(el) {
      _initPopover(el);
    },
    initPortlet: function initPortlet(el, options) {
      _initPortlet(el, options);
    },
    initPortlets: function initPortlets() {
      _initPortlets();
    },
    initSticky: function initSticky() {
      _initSticky();
    },
    initAbsoluteDropdown: function initAbsoluteDropdown(context) {
      _initAbsoluteDropdown(context);
    },
    block: function block(target, options) {
      var el = $(target);
      options = $.extend(true, {
        opacity: 0.05,
        overlayColor: '#000000',
        type: '',
        size: '',
        state: 'brand',
        centerX: true,
        centerY: true,
        message: '',
        shadow: true,
        width: 'auto'
      }, options);
      var html;
      var version = options.type ? 'kt-spinner--' + options.type : '';
      var state = options.state ? 'kt-spinner--' + options.state : '';
      var size = options.size ? 'kt-spinner--' + options.size : '';
      var spinner = '<div class="kt-spinner ' + version + ' ' + state + ' ' + size + '"></div';

      if (options.message && options.message.length > 0) {
        var classes = 'blockui ' + (options.shadow === false ? 'blockui' : '');
        html = '<div class="' + classes + '"><span>' + options.message + '</span><span>' + spinner + '</span></div>';
        var el = document.createElement('div');
        KTUtil.get('body').prepend(el);
        KTUtil.addClass(el, classes);
        el.innerHTML = '<span>' + options.message + '</span><span>' + spinner + '</span>';
        options.width = KTUtil.actualWidth(el) + 10;
        KTUtil.remove(el);

        if (target == 'body') {
          html = '<div class="' + classes + '" style="margin-left:-' + options.width / 2 + 'px;"><span>' + options.message + '</span><span>' + spinner + '</span></div>';
        }
      } else {
        html = spinner;
      }

      var params = {
        message: html,
        centerY: options.centerY,
        centerX: options.centerX,
        css: {
          top: '30%',
          left: '50%',
          border: '0',
          padding: '0',
          backgroundColor: 'none',
          width: options.width
        },
        overlayCSS: {
          backgroundColor: options.overlayColor,
          opacity: options.opacity,
          cursor: 'wait',
          zIndex: target == 'body' ? 1100 : 10
        },
        onUnblock: function onUnblock() {
          if (el && el[0]) {
            KTUtil.css(el[0], 'position', '');
            KTUtil.css(el[0], 'zoom', '');
          }
        }
      };

      if (target == 'body') {
        params.css.top = '50%';
        $.blockUI(params);
      } else {
        var el = $(target);
        el.block(params);
      }
    },
    unblock: function unblock(target) {
      if (target && target != 'body') {
        $(target).unblock();
      } else {
        $.unblockUI();
      }
    },
    blockPage: function blockPage(options) {
      return KTApp.block('body', options);
    },
    unblockPage: function unblockPage() {
      return KTApp.unblock('body');
    },
    progress: function progress(target, options) {
      var skin = options && options.skin ? options.skin : 'light';
      var alignment = options && options.alignment ? options.alignment : 'right';
      var size = options && options.size ? ' kt-spinner--' + options.size : '';
      var classes = 'kt-spinner ' + 'kt-spinner--' + skin + ' kt-spinner--' + alignment + size;
      KTApp.unprogress(target);
      KTUtil.attr(target, 'disabled', true);
      $(target).addClass(classes);
      $(target).data('progress-classes', classes);
    },
    unprogress: function unprogress(target) {
      $(target).removeClass($(target).data('progress-classes'));
      KTUtil.removeAttr(target, 'disabled');
    },
    getStateColor: function getStateColor(name) {
      return colors["state"][name];
    },
    getBaseColor: function getBaseColor(type, level) {
      return colors["base"][type][level - 1];
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTApp;
} // Initialize KTApp class on document ready


$(document).ready(function () {
  KTApp.init(KTAppOptions);
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/avatar.js":
/*!***************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/avatar.js ***!
  \***************************************************************************/
/***/ ((module) => {

// plugin setup
var KTAvatar = function KTAvatar(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {}; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('avatar')) {
        the = KTUtil.data(element).get('avatar');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('avatar', the);
      }

      return the;
    },

    /**
     * Init avatar
     */
    init: function init(options) {
      the.element = element;
      the.events = [];
      the.input = KTUtil.find(element, 'input[type="file"]');
      the.holder = KTUtil.find(element, '.kt-avatar__holder');
      the.cancel = KTUtil.find(element, '.kt-avatar__cancel');
      the.src = KTUtil.css(the.holder, 'backgroundImage'); // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Handle avatar change
      KTUtil.addEvent(the.input, 'change', function (e) {
        e.preventDefault();

        if (the.input && the.input.files && the.input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            KTUtil.css(the.holder, 'background-image', 'url(' + e.target.result + ')');
          };

          reader.readAsDataURL(the.input.files[0]);
          KTUtil.addClass(the.element, 'kt-avatar--changed');
        }
      }); // Handle avatar cancel

      KTUtil.addEvent(the.cancel, 'click', function (e) {
        e.preventDefault();
        KTUtil.removeClass(the.element, 'kt-avatar--changed');
        KTUtil.css(the.holder, 'background-image', the.src);
        the.input.value = "";
      });
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTAvatar;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/dialog.js":
/*!***************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/dialog.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
 // plugin setup

var KTDialog = function KTDialog(options) {
  // Main object
  var the = this; // Get element object

  var element;
  var body = KTUtil.get('body'); // Default options

  var defaultOptions = {
    'placement': 'top center',
    'type': 'loader',
    'width': 100,
    'state': 'default',
    'message': 'Loading...'
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      Plugin.init(options);
      return the;
    },

    /**
     * Handles subtoggle click toggle
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.state = false;
    },

    /**
     * Show dialog
     */
    show: function show() {
      Plugin.eventTrigger('show');
      element = document.createElement("DIV");
      KTUtil.setHTML(element, the.options.message);
      KTUtil.addClass(element, 'kt-dialog kt-dialog--shown');
      KTUtil.addClass(element, 'kt-dialog--' + the.options.state);
      KTUtil.addClass(element, 'kt-dialog--' + the.options.type);

      if (the.options.placement == 'top center') {
        KTUtil.addClass(element, 'kt-dialog--top-center');
      }

      body.appendChild(element);
      the.state = 'shown';
      Plugin.eventTrigger('shown');
      return the;
    },

    /**
     * Hide dialog
     */
    hide: function hide() {
      if (element) {
        Plugin.eventTrigger('hide');
        element.remove();
        the.state = 'hidden';
        Plugin.eventTrigger('hidden');
      }

      return the;
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options 
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Check shown state 
   */


  the.shown = function () {
    return the.state == 'shown';
  };
  /**
   * Check hidden state 
   */


  the.hidden = function () {
    return the.state == 'hidden';
  };
  /**
   * Show dialog 
   */


  the.show = function () {
    return Plugin.show();
  };
  /**
   * Hide dialog
   */


  the.hide = function () {
    return Plugin.hide();
  };
  /**
   * Attach event
   * @returns {KTToggle}
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   * @returns {KTToggle}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTDialog;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/header.js":
/*!***************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/header.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";


var KTHeader = function KTHeader(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (element === undefined) {
    return;
  } // Default options


  var defaultOptions = {
    classic: false,
    offset: {
      mobile: 150,
      desktop: 200
    },
    minimize: {
      mobile: false,
      desktop: false
    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {KTHeader}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('header')) {
        the = KTUtil.data(element).get('header');
      } else {
        // reset header
        Plugin.init(options); // build header

        Plugin.build();
        KTUtil.data(element).set('header', the);
      }

      return the;
    },

    /**
     * Handles subheader click toggle
     * @returns {KTHeader}
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },

    /**
     * Reset header
     * @returns {KTHeader}
     */
    build: function build() {
      var lastScrollTop = 0;
      var eventTriggerState = true;
      var viewportHeight = KTUtil.getViewPort().height;
      var documentHeight = KTUtil.getDocumentHeight();

      if (the.options.minimize.mobile === false && the.options.minimize.desktop === false) {
        return;
      }

      window.addEventListener('scroll', function () {
        var offset = 0,
            on,
            off,
            st;

        if (KTUtil.isInResponsiveRange('desktop')) {
          offset = the.options.offset.desktop;
          on = the.options.minimize.desktop.on;
          off = the.options.minimize.desktop.off;
        } else if (KTUtil.isInResponsiveRange('tablet-and-mobile')) {
          offset = the.options.offset.mobile;
          on = the.options.minimize.mobile.on;
          off = the.options.minimize.mobile.off;
        }

        st = KTUtil.getScrollTop();

        if (KTUtil.isInResponsiveRange('tablet-and-mobile') && the.options.classic && the.options.classic.mobile || KTUtil.isInResponsiveRange('desktop') && the.options.classic && the.options.classic.desktop) {
          if (st > offset) {
            // down scroll mode
            KTUtil.addClass(body, on);
            KTUtil.removeClass(body, off);

            if (eventTriggerState) {
              Plugin.eventTrigger('minimizeOn', the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            KTUtil.addClass(body, off);
            KTUtil.removeClass(body, on);

            if (eventTriggerState == false) {
              Plugin.eventTrigger('minimizeOff', the);
              eventTriggerState = true;
            }
          }
        } else {
          if (st > offset && lastScrollTop < st) {
            // down scroll mode
            KTUtil.addClass(body, on);
            KTUtil.removeClass(body, off);

            if (eventTriggerState) {
              Plugin.eventTrigger('minimizeOn', the);
              eventTriggerState = false;
            }
          } else {
            // back scroll mode
            KTUtil.addClass(body, off);
            KTUtil.removeClass(body, on);

            if (eventTriggerState == false) {
              Plugin.eventTrigger('minimizeOff', the);
              eventTriggerState = true;
            }
          }

          lastScrollTop = st;
        }
      });
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Register event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTHeader;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/menu.js":
/*!*************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/menu.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";


var KTMenu = function KTMenu(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    // scrollable area with Perfect Scroll
    scroll: {
      rememberPosition: false
    },
    // accordion submenu mode
    accordion: {
      slideSpeed: 200,
      // accordion toggle slide speed in milliseconds
      autoScroll: false,
      // enable auto scrolling(focus) to the clicked menu item
      autoScrollSpeed: 1200,
      expandAll: true // allow having multiple expanded accordions in the menu

    },
    // dropdown submenu mode
    dropdown: {
      timeout: 500 // timeout in milliseconds to show and hide the hoverable submenu dropdown

    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {KTMenu}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('menu')) {
        the = KTUtil.data(element).get('menu');
      } else {
        // reset menu
        Plugin.init(options); // reset menu

        Plugin.reset(); // build menu

        Plugin.build();
        KTUtil.data(element).set('menu', the);
      }

      return the;
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    init: function init(options) {
      the.events = [];
      the.eventHandlers = {}; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0;
      the.uid = KTUtil.getUniqueID();
    },
    update: function update(options) {
      // merge default and user defined options
      the.options = KTUtil.deepExtend({}, defaultOptions, options); // pause menu

      the.pauseDropdownHoverTime = 0; // reset menu

      Plugin.reset();
      the.eventHandlers = {}; // build menu

      Plugin.build();
      KTUtil.data(element).set('menu', the);
    },
    reload: function reload() {
      // reset menu
      Plugin.reset(); // build menu

      Plugin.build(); // reset submenu props

      Plugin.resetSubmenuProps();
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    build: function build() {
      // General accordion submenu toggle
      the.eventHandlers['event_1'] = KTUtil.on(element, '.kt-menu__toggle', 'click', Plugin.handleSubmenuAccordion); // Dropdown mode(hoverable)

      if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {
        // dropdown submenu - hover toggle
        the.eventHandlers['event_2'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="hover"]', 'mouseover', Plugin.handleSubmenuDrodownHoverEnter);
        the.eventHandlers['event_3'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="hover"]', 'mouseout', Plugin.handleSubmenuDrodownHoverExit); // dropdown submenu - click toggle

        the.eventHandlers['event_4'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="click"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="click"] > .kt-menu__link .kt-menu__toggle', 'click', Plugin.handleSubmenuDropdownClick);
        the.eventHandlers['event_5'] = KTUtil.on(element, '[data-ktmenu-submenu-toggle="tab"] > .kt-menu__toggle, [data-ktmenu-submenu-toggle="tab"] > .kt-menu__link .kt-menu__toggle', 'click', Plugin.handleSubmenuDropdownTabClick);
      } // handle link click


      the.eventHandlers['event_6'] = KTUtil.on(element, '.kt-menu__item > .kt-menu__link:not(.kt-menu__toggle):not(.kt-menu__link--toggle-skip)', 'click', Plugin.handleLinkClick); // Init scrollable menu

      if (the.options.scroll && the.options.scroll.height) {
        Plugin.scrollInit();
      }
    },

    /**
     * Reset menu
     * @returns {KTMenu}
     */
    reset: function reset() {
      KTUtil.off(element, 'click', the.eventHandlers['event_1']); // dropdown submenu - hover toggle

      KTUtil.off(element, 'mouseover', the.eventHandlers['event_2']);
      KTUtil.off(element, 'mouseout', the.eventHandlers['event_3']); // dropdown submenu - click toggle

      KTUtil.off(element, 'click', the.eventHandlers['event_4']);
      KTUtil.off(element, 'click', the.eventHandlers['event_5']); // handle link click

      KTUtil.off(element, 'click', the.eventHandlers['event_6']);
    },

    /**
     * Init scroll menu
     *
    */
    scrollInit: function scrollInit() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollDestroy(element);
        KTUtil.scrollInit(element, {
          mobileNativeScroll: true,
          windowScroll: false,
          resetHeightOnDestroy: true,
          handleWindowResize: true,
          height: the.options.scroll.height,
          rememberPosition: the.options.scroll.rememberPosition
        });
      } else {
        KTUtil.scrollDestroy(element);
      }
    },

    /**
     * Update scroll menu
    */
    scrollUpdate: function scrollUpdate() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollUpdate(element);
      }
    },

    /**
     * Scroll top
    */
    scrollTop: function scrollTop() {
      if (the.options.scroll && the.options.scroll.height) {
        KTUtil.scrollTop(element);
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    getSubmenuMode: function getSubmenuMode(el) {
      if (KTUtil.isInResponsiveRange('desktop')) {
        if (el && KTUtil.hasAttr(el, 'data-ktmenu-submenu-toggle') && KTUtil.attr(el, 'data-ktmenu-submenu-toggle') == 'hover') {
          return 'dropdown';
        }

        if (KTUtil.isset(the.options.submenu, 'desktop.state.body')) {
          if (KTUtil.hasClasses(body, the.options.submenu.desktop.state.body)) {
            return the.options.submenu.desktop.state.mode;
          } else {
            return the.options.submenu.desktop["default"];
          }
        } else if (KTUtil.isset(the.options.submenu, 'desktop')) {
          return the.options.submenu.desktop;
        }
      } else if (KTUtil.isInResponsiveRange('tablet') && KTUtil.isset(the.options.submenu, 'tablet')) {
        return the.options.submenu.tablet;
      } else if (KTUtil.isInResponsiveRange('mobile') && KTUtil.isset(the.options.submenu, 'mobile')) {
        return the.options.submenu.mobile;
      } else {
        return false;
      }
    },

    /**
     * Get submenu mode for current breakpoint and menu state
     * @returns {KTMenu}
     */
    isConditionalSubmenuDropdown: function isConditionalSubmenuDropdown() {
      if (KTUtil.isInResponsiveRange('desktop') && KTUtil.isset(the.options.submenu, 'desktop.state.body')) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Reset submenu attributes
     * @returns {KTMenu}
     */
    resetSubmenuProps: function resetSubmenuProps(e) {
      var submenus = KTUtil.findAll(element, '.kt-menu__submenu');

      if (submenus) {
        for (var i = 0, len = submenus.length; i < len; i++) {
          KTUtil.css(submenus[0], 'display', '');
          KTUtil.css(submenus[0], 'overflow', '');
        }
      }
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverEnter: function handleSubmenuDrodownHoverEnter(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      if (the.resumeDropdownHover() === false) {
        return;
      }

      var item = this;

      if (item.getAttribute('data-hover') == '1') {
        item.removeAttribute('data-hover');
        clearTimeout(item.getAttribute('data-timeout'));
        item.removeAttribute('data-timeout');
      }

      Plugin.showSubmenuDropdown(item);
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    handleSubmenuDrodownHoverExit: function handleSubmenuDrodownHoverExit(e) {
      if (the.resumeDropdownHover() === false) {
        return;
      }

      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this;
      var time = the.options.dropdown.timeout;
      var timeout = setTimeout(function () {
        if (item.getAttribute('data-hover') == '1') {
          Plugin.hideSubmenuDropdown(item, true);
        }
      }, time);
      item.setAttribute('data-hover', '1');
      item.setAttribute('data-timeout', timeout);
    },

    /**
     * Handles submenu click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClick: function handleSubmenuDropdownClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.kt-menu__item');

      if (item.getAttribute('data-ktmenu-submenu-mode') == 'accordion') {
        return;
      }

      if (KTUtil.hasClass(item, 'kt-menu__item--hover') === false) {
        KTUtil.addClass(item, 'kt-menu__item--open-dropdown');
        Plugin.showSubmenuDropdown(item);
      } else {
        KTUtil.removeClass(item, 'kt-menu__item--open-dropdown');
        Plugin.hideSubmenuDropdown(item, true);
      }

      e.preventDefault();
    },

    /**
     * Handles tab click toggle
     * @returns {KTMenu}
     */
    handleSubmenuDropdownTabClick: function handleSubmenuDropdownTabClick(e) {
      if (Plugin.getSubmenuMode(this) === 'accordion') {
        return;
      }

      var item = this.closest('.kt-menu__item');

      if (item.getAttribute('data-ktmenu-submenu-mode') == 'accordion') {
        return;
      }

      if (KTUtil.hasClass(item, 'kt-menu__item--hover') == false) {
        KTUtil.addClass(item, 'kt-menu__item--open-dropdown');
        Plugin.showSubmenuDropdown(item);
      }

      e.preventDefault();
    },

    /**
     * Handles link click
     * @returns {KTMenu}
     */
    handleLinkClick: function handleLinkClick(e) {
      var submenu = this.closest('.kt-menu__item.kt-menu__item--submenu'); //

      var result = Plugin.eventTrigger('linkClick', this, e);

      if (result === false) {
        return;
      }

      if (submenu && Plugin.getSubmenuMode(submenu) === 'dropdown') {
        Plugin.hideSubmenuDropdowns();
      }
    },

    /**
     * Handles submenu dropdown close on link click
     * @returns {KTMenu}
     */
    handleSubmenuDropdownClose: function handleSubmenuDropdownClose(e, el) {
      // exit if its not submenu dropdown mode
      if (Plugin.getSubmenuMode(el) === 'accordion') {
        return;
      }

      var shown = element.querySelectorAll('.kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)'); // check if currently clicked link's parent item ha

      if (shown.length > 0 && KTUtil.hasClass(el, 'kt-menu__toggle') === false && el.querySelectorAll('.kt-menu__toggle').length === 0) {
        // close opened dropdown menus
        for (var i = 0, len = shown.length; i < len; i++) {
          Plugin.hideSubmenuDropdown(shown[0], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    handleSubmenuAccordion: function handleSubmenuAccordion(e, el) {
      var query;
      var item = el ? el : this;

      if (Plugin.getSubmenuMode(el) === 'dropdown' && (query = item.closest('.kt-menu__item'))) {
        if (query.getAttribute('data-ktmenu-submenu-mode') != 'accordion') {
          e.preventDefault();
          return;
        }
      }

      var li = item.closest('.kt-menu__item');
      var submenu = KTUtil.child(li, '.kt-menu__submenu, .kt-menu__inner');

      if (KTUtil.hasClass(item.closest('.kt-menu__item'), 'kt-menu__item--open-always')) {
        return;
      }

      if (li && submenu) {
        e.preventDefault();
        var speed = the.options.accordion.slideSpeed;
        var hasClosables = false;

        if (KTUtil.hasClass(li, 'kt-menu__item--open') === false) {
          // hide other accordions
          if (the.options.accordion.expandAll === false) {
            var subnav = item.closest('.kt-menu__nav, .kt-menu__subnav');
            var closables = KTUtil.children(subnav, '.kt-menu__item.kt-menu__item--open.kt-menu__item--submenu:not(.kt-menu__item--here):not(.kt-menu__item--open-always)');

            if (subnav && closables) {
              for (var i = 0, len = closables.length; i < len; i++) {
                var el_ = closables[0];
                var submenu_ = KTUtil.child(el_, '.kt-menu__submenu');

                if (submenu_) {
                  KTUtil.slideUp(submenu_, speed, function () {
                    Plugin.scrollUpdate();
                    KTUtil.removeClass(el_, 'kt-menu__item--open');
                  });
                }
              }
            }
          }

          KTUtil.slideDown(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.scrollUpdate();
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          KTUtil.addClass(li, 'kt-menu__item--open');
        } else {
          KTUtil.slideUp(submenu, speed, function () {
            Plugin.scrollToItem(item);
            Plugin.eventTrigger('submenuToggle', submenu, e);
          });
          KTUtil.removeClass(li, 'kt-menu__item--open');
        }
      }
    },

    /**
     * scroll to item function
     * @returns {KTMenu}
     */
    scrollToItem: function scrollToItem(item) {
      // handle auto scroll for accordion submenus
      if (KTUtil.isInResponsiveRange('desktop') && the.options.accordion.autoScroll && element.getAttribute('data-ktmenu-scroll') !== '1') {
        KTUtil.scrollTo(item, the.options.accordion.autoScrollSpeed);
      }
    },

    /**
     * Hide submenu dropdown
     * @returns {KTMenu}
     */
    hideSubmenuDropdown: function hideSubmenuDropdown(item, classAlso) {
      // remove submenu activation class
      if (classAlso) {
        KTUtil.removeClass(item, 'kt-menu__item--hover');
        KTUtil.removeClass(item, 'kt-menu__item--active-tab');
      } // clear timeout


      item.removeAttribute('data-hover');

      if (item.getAttribute('data-ktmenu-dropdown-toggle-class')) {
        KTUtil.removeClass(body, item.getAttribute('data-ktmenu-dropdown-toggle-class'));
      }

      var timeout = item.getAttribute('data-timeout');
      item.removeAttribute('data-timeout');
      clearTimeout(timeout);
    },

    /**
     * Hide submenu dropdowns
     * @returns {KTMenu}
     */
    hideSubmenuDropdowns: function hideSubmenuDropdowns() {
      var items;

      if (items = element.querySelectorAll('.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs):not([data-ktmenu-submenu-toggle="tab"])')) {
        for (var j = 0, cnt = items.length; j < cnt; j++) {
          Plugin.hideSubmenuDropdown(items[j], true);
        }
      }
    },

    /**
     * helper functions
     * @returns {KTMenu}
     */
    showSubmenuDropdown: function showSubmenuDropdown(item) {
      // close active submenus
      var list = element.querySelectorAll('.kt-menu__item--submenu.kt-menu__item--hover, .kt-menu__item--submenu.kt-menu__item--active-tab');

      if (list) {
        for (var i = 0, len = list.length; i < len; i++) {
          var el = list[i];

          if (item !== el && el.contains(item) === false && item.contains(el) === false) {
            Plugin.hideSubmenuDropdown(el, true);
          }
        }
      } // add submenu activation class


      KTUtil.addClass(item, 'kt-menu__item--hover');

      if (item.getAttribute('data-ktmenu-dropdown-toggle-class')) {
        KTUtil.addClass(body, item.getAttribute('data-ktmenu-dropdown-toggle-class'));
      }
    },

    /**
     * Handles submenu slide toggle
     * @returns {KTMenu}
     */
    createSubmenuDropdownClickDropoff: function createSubmenuDropdownClickDropoff(el) {
      var query;
      var zIndex = (query = KTUtil.child(el, '.kt-menu__submenu') ? KTUtil.css(query, 'z-index') : 0) - 1;
      var dropoff = document.createElement('<div class="kt-menu__dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');
      body.appendChild(dropoff);
      KTUtil.addEvent(dropoff, 'click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        KTUtil.remove(this);
        Plugin.hideSubmenuDropdown(el, true);
      });
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    pauseDropdownHover: function pauseDropdownHover(time) {
      var date = new Date();
      the.pauseDropdownHoverTime = date.getTime() + time;
    },

    /**
     * Handles submenu hover toggle
     * @returns {KTMenu}
     */
    resumeDropdownHover: function resumeDropdownHover() {
      var date = new Date();
      return date.getTime() > the.pauseDropdownHoverTime ? true : false;
    },

    /**
     * Reset menu's current active item
     * @returns {KTMenu}
     */
    resetActiveItem: function resetActiveItem(item) {
      var list;
      var parents;
      list = element.querySelectorAll('.kt-menu__item--active');

      for (var i = 0, len = list.length; i < len; i++) {
        var el = list[0];
        KTUtil.removeClass(el, 'kt-menu__item--active');
        KTUtil.hide(KTUtil.child(el, '.kt-menu__submenu'));
        parents = KTUtil.parents(el, '.kt-menu__item--submenu') || [];

        for (var i_ = 0, len_ = parents.length; i_ < len_; i_++) {
          var el_ = parents[i];
          KTUtil.removeClass(el_, 'kt-menu__item--open');
          KTUtil.hide(KTUtil.child(el_, '.kt-menu__submenu'));
        }
      } // close open submenus


      if (the.options.accordion.expandAll === false) {
        if (list = element.querySelectorAll('.kt-menu__item--open')) {
          for (var i = 0, len = list.length; i < len; i++) {
            KTUtil.removeClass(parents[0], 'kt-menu__item--open');
          }
        }
      }
    },

    /**
     * Sets menu's active item
     * @returns {KTMenu}
     */
    setActiveItem: function setActiveItem(item) {
      // reset current active item
      Plugin.resetActiveItem();
      var parents = KTUtil.parents(item, '.kt-menu__item--submenu') || [];

      for (var i = 0, len = parents.length; i < len; i++) {
        KTUtil.addClass(KTUtil.get(parents[i]), 'kt-menu__item--open');
      }

      KTUtil.addClass(KTUtil.get(item), 'kt-menu__item--active');
    },

    /**
     * Returns page breadcrumbs for the menu's active item
     * @returns {KTMenu}
     */
    getBreadcrumbs: function getBreadcrumbs(item) {
      var query;
      var breadcrumbs = [];
      var link = KTUtil.child(item, '.kt-menu__link');
      breadcrumbs.push({
        text: query = KTUtil.child(link, '.kt-menu__link-text') ? query.innerHTML : '',
        title: link.getAttribute('title'),
        href: link.getAttribute('href')
      });
      var parents = KTUtil.parents(item, '.kt-menu__item--submenu');

      for (var i = 0, len = parents.length; i < len; i++) {
        var submenuLink = KTUtil.child(parents[i], '.kt-menu__link');
        breadcrumbs.push({
          text: query = KTUtil.child(submenuLink, '.kt-menu__link-text') ? query.innerHTML : '',
          title: submenuLink.getAttribute('title'),
          href: submenuLink.getAttribute('href')
        });
      }

      return breadcrumbs.reverse();
    },

    /**
     * Returns page title for the menu's active item
     * @returns {KTMenu}
     */
    getPageTitle: function getPageTitle(item) {
      var query;
      return query = KTUtil.child(item, '.kt-menu__link-text') ? query.innerHTML : '';
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, target, e) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, target, e);
            }
          } else {
            return event.handler.call(this, target, e);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    },
    removeEvent: function removeEvent(name) {
      if (the.events[name]) {
        delete the.events[name];
      }
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Update scroll
   */


  the.scrollUpdate = function () {
    return Plugin.scrollUpdate();
  };
  /**
   * Re-init scroll
   */


  the.scrollReInit = function () {
    return Plugin.scrollInit();
  };
  /**
   * Scroll top
   */


  the.scrollTop = function () {
    return Plugin.scrollTop();
  };
  /**
   * Set active menu item
   */


  the.setActiveItem = function (item) {
    return Plugin.setActiveItem(item);
  };

  the.reload = function () {
    return Plugin.reload();
  };

  the.update = function (options) {
    return Plugin.update(options);
  };
  /**
   * Set breadcrumb for menu item
   */


  the.getBreadcrumbs = function (item) {
    return Plugin.getBreadcrumbs(item);
  };
  /**
   * Set page title for menu item
   */


  the.getPageTitle = function (item) {
    return Plugin.getPageTitle(item);
  };
  /**
   * Get submenu mode
   */


  the.getSubmenuMode = function (el) {
    return Plugin.getSubmenuMode(el);
  };
  /**
   * Hide dropdown
   * @returns {Object}
   */


  the.hideDropdown = function (item) {
    Plugin.hideSubmenuDropdown(item, true);
  };
  /**
   * Hide dropdowns
   * @returns {Object}
   */


  the.hideDropdowns = function () {
    Plugin.hideSubmenuDropdowns();
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.pauseDropdownHover = function (time) {
    Plugin.pauseDropdownHover(time);
  };
  /**
   * Disable menu for given time
   * @returns {Object}
   */


  the.resumeDropdownHover = function () {
    return Plugin.resumeDropdownHover();
  };
  /**
   * Register event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };

  the.off = function (name) {
    return Plugin.removeEvent(name);
  };

  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Handle plugin on window resize

  KTUtil.addResizeHandler(function () {
    if (init) {
      the.reload();
    }
  }); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTMenu;
} // Plugin global lazy initialization


document.addEventListener("click", function (e) {
  var body = KTUtil.get('body');
  var query;

  if (query = body.querySelectorAll('.kt-menu__nav .kt-menu__item.kt-menu__item--submenu.kt-menu__item--hover:not(.kt-menu__item--tabs)[data-ktmenu-submenu-toggle="click"]')) {
    for (var i = 0, len = query.length; i < len; i++) {
      var element = query[i].closest('.kt-menu__nav').parentNode;

      if (element) {
        var the = KTUtil.data(element).get('menu');

        if (!the) {
          break;
        }

        if (!the || the.getSubmenuMode() !== 'dropdown') {
          break;
        }

        if (e.target !== element && element.contains(e.target) === false) {
          the.hideDropdowns();
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/offcanvas.js":
/*!******************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/offcanvas.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


var KTOffcanvas = function KTOffcanvas(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {}; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    construct: function construct(options) {
      if (KTUtil.data(element).has('offcanvas')) {
        the = KTUtil.data(element).get('offcanvas');
      } else {
        // reset offcanvas
        Plugin.init(options); // build offcanvas

        Plugin.build();
        KTUtil.data(element).set('offcanvas', the);
      }

      return the;
    },
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.overlay;
      the.classBase = the.options.baseClass;
      the.classShown = the.classBase + '--on';
      the.classOverlay = the.classBase + '-overlay';
      the.state = KTUtil.hasClass(element, the.classShown) ? 'shown' : 'hidden';
    },
    build: function build() {
      // offcanvas toggle
      if (the.options.toggleBy) {
        if (typeof the.options.toggleBy === 'string') {
          KTUtil.addEvent(the.options.toggleBy, 'click', function (e) {
            e.preventDefault();
            Plugin.toggle();
          });
        } else if (the.options.toggleBy && the.options.toggleBy[0]) {
          if (the.options.toggleBy[0].target) {
            for (var i in the.options.toggleBy) {
              KTUtil.addEvent(the.options.toggleBy[i].target, 'click', function (e) {
                e.preventDefault();
                Plugin.toggle();
              });
            }
          } else {
            for (var i in the.options.toggleBy) {
              KTUtil.addEvent(the.options.toggleBy[i], 'click', function (e) {
                e.preventDefault();
                Plugin.toggle();
              });
            }
          }
        } else if (the.options.toggleBy && the.options.toggleBy.target) {
          KTUtil.addEvent(the.options.toggleBy.target, 'click', function (e) {
            e.preventDefault();
            Plugin.toggle();
          });
        }
      } // offcanvas close


      var closeBy = KTUtil.get(the.options.closeBy);

      if (closeBy) {
        KTUtil.addEvent(closeBy, 'click', function (e) {
          e.preventDefault();
          Plugin.hide();
        });
      } // Window resize

      /*
      KTUtil.addResizeHandler(function() {
          if (parseInt(KTUtil.css(element, 'left')) >= 0 || parseInt(KTUtil.css(element, 'right') >= 0) || KTUtil.css(element, 'position') != 'fixed') {
              KTUtil.css(element, 'opacity', '1');
          }
      });
      */

    },
    isShown: function isShown(target) {
      return the.state == 'shown' ? true : false;
    },
    toggle: function toggle() {
      ;
      Plugin.eventTrigger('toggle');

      if (the.state == 'shown') {
        Plugin.hide(this);
      } else {
        Plugin.show(this);
      }
    },
    show: function show(target) {
      if (the.state == 'shown') {
        return;
      }

      Plugin.eventTrigger('beforeShow');
      Plugin.togglerClass(target, 'show'); // Offcanvas panel

      KTUtil.addClass(body, the.classShown);
      KTUtil.addClass(element, the.classShown); //KTUtil.css(element, 'opacity', '1');

      the.state = 'shown';

      if (the.options.overlay) {
        the.overlay = KTUtil.insertAfter(document.createElement('DIV'), element);
        KTUtil.addClass(the.overlay, the.classOverlay);
        KTUtil.addEvent(the.overlay, 'click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          Plugin.hide(target);
        });
      }

      Plugin.eventTrigger('afterShow');
    },
    hide: function hide(target) {
      if (the.state == 'hidden') {
        return;
      }

      Plugin.eventTrigger('beforeHide');
      Plugin.togglerClass(target, 'hide');
      KTUtil.removeClass(body, the.classShown);
      KTUtil.removeClass(element, the.classShown);
      the.state = 'hidden';

      if (the.options.overlay && the.overlay) {
        KTUtil.remove(the.overlay);
      }
      /*
      KTUtil.transitionEnd(element, function() {
          KTUtil.css(element, 'opacity', '0');
      });
      */


      Plugin.eventTrigger('afterHide');
    },
    togglerClass: function togglerClass(target, mode) {
      // Toggler
      var id = KTUtil.attr(target, 'id');
      var toggleBy;

      if (the.options.toggleBy && the.options.toggleBy[0] && the.options.toggleBy[0].target) {
        for (var i in the.options.toggleBy) {
          if (the.options.toggleBy[i].target === id) {
            toggleBy = the.options.toggleBy[i];
          }
        }
      } else if (the.options.toggleBy && the.options.toggleBy.target) {
        toggleBy = the.options.toggleBy;
      }

      if (toggleBy) {
        var el = KTUtil.get(toggleBy.target);

        if (mode === 'show') {
          KTUtil.addClass(el, toggleBy.state);
        }

        if (mode === 'hide') {
          KTUtil.removeClass(el, toggleBy.state);
        }
      }
    },
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  the.setDefaults = function (options) {
    defaultOptions = options;
  };

  the.isShown = function () {
    return Plugin.isShown();
  };

  the.hide = function () {
    return Plugin.hide();
  };

  the.show = function () {
    return Plugin.show();
  };

  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };

  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTOffcanvas;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/portlet.js":
/*!****************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/portlet.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
 // plugin setup

var KTPortlet = function KTPortlet(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    bodyToggleSpeed: 400,
    tooltips: true,
    tools: {
      toggle: {
        collapse: 'Collapse',
        expand: 'Expand'
      },
      reload: 'Reload',
      remove: 'Remove',
      fullscreen: {
        on: 'Fullscreen',
        off: 'Exit Fullscreen'
      }
    },
    sticky: {
      offset: 300,
      zIndex: 101
    }
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('portlet')) {
        the = KTUtil.data(element).get('portlet');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('portlet', the);
      }

      return the;
    },

    /**
     * Init portlet
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.head = KTUtil.child(element, '.kt-portlet__head');
      the.foot = KTUtil.child(element, '.kt-portlet__foot');

      if (KTUtil.child(element, '.kt-portlet__body')) {
        the.body = KTUtil.child(element, '.kt-portlet__body');
      } else if (KTUtil.child(element, '.kt-form')) {
        the.body = KTUtil.child(element, '.kt-form');
      }
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Remove
      var remove = KTUtil.find(the.head, '[data-ktportlet-tool=remove]');

      if (remove) {
        KTUtil.addEvent(remove, 'click', function (e) {
          e.preventDefault();
          Plugin.remove();
        });
      } // Reload


      var reload = KTUtil.find(the.head, '[data-ktportlet-tool=reload]');

      if (reload) {
        KTUtil.addEvent(reload, 'click', function (e) {
          e.preventDefault();
          Plugin.reload();
        });
      } // Toggle


      var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

      if (toggle) {
        KTUtil.addEvent(toggle, 'click', function (e) {
          e.preventDefault();
          Plugin.toggle();
        });
      } //== Fullscreen


      var fullscreen = KTUtil.find(the.head, '[data-ktportlet-tool=fullscreen]');

      if (fullscreen) {
        KTUtil.addEvent(fullscreen, 'click', function (e) {
          e.preventDefault();
          Plugin.fullscreen();
        });
      }

      Plugin.setupTooltips();
    },

    /**
     * Enable stickt mode
     */
    initSticky: function initSticky() {
      var lastScrollTop = 0;
      var offset = the.options.sticky.offset;

      if (!the.head) {
        return;
      }

      window.addEventListener('scroll', Plugin.onScrollSticky);
    },

    /**
     * Window scroll handle event for sticky portlet
     */
    onScrollSticky: function onScrollSticky(e) {
      var offset = the.options.sticky.offset;
      if (isNaN(offset)) return;
      var st = KTUtil.getScrollTop();

      if (st >= offset && KTUtil.hasClass(body, 'kt-portlet--sticky') === false) {
        Plugin.eventTrigger('stickyOn');
        KTUtil.addClass(body, 'kt-portlet--sticky');
        KTUtil.addClass(element, 'kt-portlet--sticky');
        Plugin.updateSticky();
      } else if (st * 1.5 <= offset && KTUtil.hasClass(body, 'kt-portlet--sticky')) {
        // back scroll mode
        Plugin.eventTrigger('stickyOff');
        KTUtil.removeClass(body, 'kt-portlet--sticky');
        KTUtil.removeClass(element, 'kt-portlet--sticky');
        Plugin.resetSticky();
      }
    },
    updateSticky: function updateSticky() {
      if (!the.head) {
        return;
      }

      var top;

      if (KTUtil.hasClass(body, 'kt-portlet--sticky')) {
        if (the.options.sticky.position.top instanceof Function) {
          top = parseInt(the.options.sticky.position.top.call(this, the));
        } else {
          top = parseInt(the.options.sticky.position.top);
        }

        var left;

        if (the.options.sticky.position.left instanceof Function) {
          left = parseInt(the.options.sticky.position.left.call(this, the));
        } else {
          left = parseInt(the.options.sticky.position.left);
        }

        var right;

        if (the.options.sticky.position.right instanceof Function) {
          right = parseInt(the.options.sticky.position.right.call(this, the));
        } else {
          right = parseInt(the.options.sticky.position.right);
        }

        KTUtil.css(the.head, 'z-index', the.options.sticky.zIndex);
        KTUtil.css(the.head, 'top', top + 'px');
        KTUtil.css(the.head, 'left', left + 'px');
        KTUtil.css(the.head, 'right', right + 'px');
      }
    },
    resetSticky: function resetSticky() {
      if (!the.head) {
        return;
      }

      if (KTUtil.hasClass(body, 'kt-portlet--sticky') === false) {
        KTUtil.css(the.head, 'z-index', '');
        KTUtil.css(the.head, 'top', '');
        KTUtil.css(the.head, 'left', '');
        KTUtil.css(the.head, 'right', '');
      }
    },

    /**
     * Remove portlet
     */
    remove: function remove() {
      if (Plugin.eventTrigger('beforeRemove') === false) {
        return;
      }

      if (KTUtil.hasClass(body, 'kt-portlet--fullscreen') && KTUtil.hasClass(element, 'kt-portlet--fullscreen')) {
        Plugin.fullscreen('off');
      }

      Plugin.removeTooltips();
      KTUtil.remove(element);
      Plugin.eventTrigger('afterRemove');
    },

    /**
     * Set content
     */
    setContent: function setContent(html) {
      if (html) {
        the.body.innerHTML = html;
      }
    },

    /**
     * Get body
     */
    getBody: function getBody() {
      return the.body;
    },

    /**
     * Get self
     */
    getSelf: function getSelf() {
      return element;
    },

    /**
     * Setup tooltips
     */
    setupTooltips: function setupTooltips() {
      if (the.options.tooltips) {
        var collapsed = KTUtil.hasClass(element, 'kt-portlet--collapse') || KTUtil.hasClass(element, 'kt-portlet--collapsed');
        var fullscreenOn = KTUtil.hasClass(body, 'kt-portlet--fullscreen') && KTUtil.hasClass(element, 'kt-portlet--fullscreen'); //== Remove

        var remove = KTUtil.find(the.head, '[data-ktportlet-tool=remove]');

        if (remove) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(remove, {
            title: the.options.tools.remove,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(remove).set('tooltip', tip);
        } //== Reload


        var reload = KTUtil.find(the.head, '[data-ktportlet-tool=reload]');

        if (reload) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(reload, {
            title: the.options.tools.reload,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(reload).set('tooltip', tip);
        } //== Toggle


        var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

        if (toggle) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(toggle, {
            title: collapsed ? the.options.tools.toggle.expand : the.options.tools.toggle.collapse,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(toggle).set('tooltip', tip);
        } //== Fullscreen


        var fullscreen = KTUtil.find(the.head, '[data-ktportlet-tool=fullscreen]');

        if (fullscreen) {
          var placement = fullscreenOn ? 'bottom' : 'top';
          var tip = new Tooltip(fullscreen, {
            title: fullscreenOn ? the.options.tools.fullscreen.off : the.options.tools.fullscreen.on,
            placement: placement,
            offset: fullscreenOn ? '0,10px,0,0' : '0,5px',
            trigger: 'hover',
            template: '<div class="tooltip tooltip-portlet tooltip bs-tooltip-' + placement + '" role="tooltip">\
                            <div class="tooltip-arrow arrow"></div>\
                            <div class="tooltip-inner"></div>\
                        </div>'
          });
          KTUtil.data(fullscreen).set('tooltip', tip);
        }
      }
    },

    /**
     * Setup tooltips
     */
    removeTooltips: function removeTooltips() {
      if (the.options.tooltips) {
        //== Remove
        var remove = KTUtil.find(the.head, '[data-ktportlet-tool=remove]');

        if (remove && KTUtil.data(remove).has('tooltip')) {
          KTUtil.data(remove).get('tooltip').dispose();
        } //== Reload


        var reload = KTUtil.find(the.head, '[data-ktportlet-tool=reload]');

        if (reload && KTUtil.data(reload).has('tooltip')) {
          KTUtil.data(reload).get('tooltip').dispose();
        } //== Toggle


        var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

        if (toggle && KTUtil.data(toggle).has('tooltip')) {
          KTUtil.data(toggle).get('tooltip').dispose();
        } //== Fullscreen


        var fullscreen = KTUtil.find(the.head, '[data-ktportlet-tool=fullscreen]');

        if (fullscreen && KTUtil.data(fullscreen).has('tooltip')) {
          KTUtil.data(fullscreen).get('tooltip').dispose();
        }
      }
    },

    /**
     * Reload
     */
    reload: function reload() {
      Plugin.eventTrigger('reload');
    },

    /**
     * Toggle
     */
    toggle: function toggle() {
      if (KTUtil.hasClass(element, 'kt-portlet--collapse') || KTUtil.hasClass(element, 'kt-portlet--collapsed')) {
        Plugin.expand();
      } else {
        Plugin.collapse();
      }
    },

    /**
     * Collapse
     */
    collapse: function collapse() {
      if (Plugin.eventTrigger('beforeCollapse') === false) {
        return;
      }

      KTUtil.slideUp(the.body, the.options.bodyToggleSpeed, function () {
        Plugin.eventTrigger('afterCollapse');
      });
      KTUtil.addClass(element, 'kt-portlet--collapse');
      var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

      if (toggle && KTUtil.data(toggle).has('tooltip')) {
        KTUtil.data(toggle).get('tooltip').updateTitleContent(the.options.tools.toggle.expand);
      }
    },

    /**
     * Expand
     */
    expand: function expand() {
      if (Plugin.eventTrigger('beforeExpand') === false) {
        return;
      }

      KTUtil.slideDown(the.body, the.options.bodyToggleSpeed, function () {
        Plugin.eventTrigger('afterExpand');
      });
      KTUtil.removeClass(element, 'kt-portlet--collapse');
      KTUtil.removeClass(element, 'kt-portlet--collapsed');
      var toggle = KTUtil.find(the.head, '[data-ktportlet-tool=toggle]');

      if (toggle && KTUtil.data(toggle).has('tooltip')) {
        KTUtil.data(toggle).get('tooltip').updateTitleContent(the.options.tools.toggle.collapse);
      }
    },

    /**
     * fullscreen
     */
    fullscreen: function fullscreen(mode) {
      var d = {};
      var speed = 300;

      if (mode === 'off' || KTUtil.hasClass(body, 'kt-portlet--fullscreen') && KTUtil.hasClass(element, 'kt-portlet--fullscreen')) {
        Plugin.eventTrigger('beforeFullscreenOff');
        KTUtil.removeClass(body, 'kt-portlet--fullscreen');
        KTUtil.removeClass(element, 'kt-portlet--fullscreen');
        Plugin.removeTooltips();
        Plugin.setupTooltips();

        if (the.foot) {
          KTUtil.css(the.body, 'margin-bottom', '');
          KTUtil.css(the.foot, 'margin-top', '');
        }

        Plugin.eventTrigger('afterFullscreenOff');
      } else {
        Plugin.eventTrigger('beforeFullscreenOn');
        KTUtil.addClass(element, 'kt-portlet--fullscreen');
        KTUtil.addClass(body, 'kt-portlet--fullscreen');
        Plugin.removeTooltips();
        Plugin.setupTooltips();

        if (the.foot) {
          var height1 = parseInt(KTUtil.css(the.foot, 'height'));
          var height2 = parseInt(KTUtil.css(the.foot, 'height')) + parseInt(KTUtil.css(the.head, 'height'));
          KTUtil.css(the.body, 'margin-bottom', height1 + 'px');
          KTUtil.css(the.foot, 'margin-top', '-' + height2 + 'px');
        }

        Plugin.eventTrigger('afterFullscreenOn');
      }
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.remove = function () {
    return Plugin.remove(html);
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.initSticky = function () {
    return Plugin.initSticky();
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.updateSticky = function () {
    return Plugin.updateSticky();
  };
  /**
   * Remove portlet
   * @returns {KTPortlet}
   */


  the.resetSticky = function () {
    return Plugin.resetSticky();
  };
  /**
   * Destroy sticky portlet
   */


  the.destroySticky = function () {
    Plugin.resetSticky();
    window.removeEventListener('scroll', Plugin.onScrollSticky);
  };
  /**
   * Reload portlet
   * @returns {KTPortlet}
   */


  the.reload = function () {
    return Plugin.reload();
  };
  /**
   * Set portlet content
   * @returns {KTPortlet}
   */


  the.setContent = function (html) {
    return Plugin.setContent(html);
  };
  /**
   * Toggle portlet
   * @returns {KTPortlet}
   */


  the.toggle = function () {
    return Plugin.toggle();
  };
  /**
   * Collapse portlet
   * @returns {KTPortlet}
   */


  the.collapse = function () {
    return Plugin.collapse();
  };
  /**
   * Expand portlet
   * @returns {KTPortlet}
   */


  the.expand = function () {
    return Plugin.expand();
  };
  /**
   * Fullscreen portlet
   * @returns {MPortlet}
   */


  the.fullscreen = function () {
    return Plugin.fullscreen('on');
  };
  /**
   * Fullscreen portlet
   * @returns {MPortlet}
   */


  the.unFullscreen = function () {
    return Plugin.fullscreen('off');
  };
  /**
   * Get portletbody
   * @returns {jQuery}
   */


  the.getBody = function () {
    return Plugin.getBody();
  };
  /**
   * Get portletbody
   * @returns {jQuery}
   */


  the.getSelf = function () {
    return Plugin.getSelf();
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTPortlet;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/scrolltop.js":
/*!******************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/scrolltop.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


var KTScrolltop = function KTScrolltop(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    offset: 300,
    speed: 600,
    toggleClass: 'kt-scrolltop--on'
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Run plugin
     * @returns {mscrolltop}
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('scrolltop')) {
        the = KTUtil.data(element).get('scrolltop');
      } else {
        // reset scrolltop
        Plugin.init(options); // build scrolltop

        Plugin.build();
        KTUtil.data(element).set('scrolltop', the);
      }

      return the;
    },

    /**
     * Handles subscrolltop click toggle
     * @returns {mscrolltop}
     */
    init: function init(options) {
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
    },
    build: function build() {
      // handle window scroll
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.addEventListener('touchend', function () {
          Plugin.handle();
        });
        window.addEventListener('touchcancel', function () {
          Plugin.handle();
        });
        window.addEventListener('touchleave', function () {
          Plugin.handle();
        });
      } else {
        window.addEventListener('scroll', function () {
          Plugin.handle();
        });
      } // handle button click 


      KTUtil.addEvent(element, 'click', Plugin.scroll);
    },

    /**
     * Handles scrolltop click scrollTop
     */
    handle: function handle() {
      var pos = window.pageYOffset; // current vertical position

      if (pos > the.options.offset) {
        KTUtil.addClass(body, the.options.toggleClass);
      } else {
        KTUtil.removeClass(body, the.options.toggleClass);
      }
    },

    /**
     * Handles scrolltop click scrollTop
     */
    scroll: function scroll(e) {
      e.preventDefault();
      KTUtil.scrollTop(0, the.options.speed);
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, args) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the, args);
            }
          } else {
            return event.handler.call(this, the, args);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options 
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Get subscrolltop mode
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Set scrolltop content
   * @returns {mscrolltop}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; ///////////////////////////////
  // ** Plugin Construction ** //
  ///////////////////////////////
  // Run plugin


  Plugin.construct.apply(the, [options]); // Init done

  init = true; // Return plugin instance

  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTScrolltop;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/toggle.js":
/*!***************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/toggle.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
 // plugin setup

var KTToggle = function KTToggle(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    togglerState: '',
    targetState: ''
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('toggle')) {
        the = KTUtil.data(element).get('toggle');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('toggle', the);
      }

      return the;
    },

    /**
     * Handles subtoggle click toggle
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options);
      the.target = KTUtil.get(the.options.target);
      the.targetState = the.options.targetState;
      the.togglerState = the.options.togglerState;
      the.state = KTUtil.hasClasses(the.target, the.targetState) ? 'on' : 'off';
    },

    /**
     * Setup toggle
     */
    build: function build() {
      KTUtil.addEvent(element, 'mouseup', Plugin.toggle);
    },

    /**
     * Handles offcanvas click toggle
     */
    toggle: function toggle(e) {
      Plugin.eventTrigger('beforeToggle');

      if (the.state == 'off') {
        Plugin.toggleOn();
      } else {
        Plugin.toggleOff();
      }

      Plugin.eventTrigger('afterToggle');
      e.preventDefault();
      return the;
    },

    /**
     * Handles toggle click toggle
     */
    toggleOn: function toggleOn() {
      Plugin.eventTrigger('beforeOn');
      KTUtil.addClass(the.target, the.targetState);

      if (the.togglerState) {
        KTUtil.addClass(element, the.togglerState);
      }

      the.state = 'on';
      Plugin.eventTrigger('afterOn');
      Plugin.eventTrigger('toggle');
      return the;
    },

    /**
     * Handles toggle click toggle
     */
    toggleOff: function toggleOff() {
      Plugin.eventTrigger('beforeOff');
      KTUtil.removeClass(the.target, the.targetState);

      if (the.togglerState) {
        KTUtil.removeClass(element, the.togglerState);
      }

      the.state = 'off';
      Plugin.eventTrigger('afterOff');
      Plugin.eventTrigger('toggle');
      return the;
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name) {
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options 
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Get toggle state 
   */


  the.getState = function () {
    return the.state;
  };
  /**
   * Toggle 
   */


  the.toggle = function () {
    return Plugin.toggle();
  };
  /**
   * Toggle on 
   */


  the.toggleOn = function () {
    return Plugin.toggleOn();
  };
  /**
   * Toggle off 
   */


  the.toggleOff = function () {
    return Plugin.toggleOff();
  };
  /**
   * Attach event
   * @returns {KTToggle}
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   * @returns {KTToggle}
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTToggle;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/util.js":
/*!*************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/util.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";

/**
 * @class KTUtil  base utilize class that privides helper functions
 */
// Polyfills

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */


if (!Element.prototype.closest) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);

    return null;
  };
}
/**
 * ChildNode.remove() polyfill
 * https://gomakethings.com/removing-an-element-from-the-dom-the-es6-way/
 * @author Chris Ferdinandi
 * @license MIT
 */


(function (elem) {
  for (var i = 0; i < elem.length; i++) {
    if (!window[elem[i]] || 'remove' in window[elem[i]].prototype) continue;

    window[elem[i]].prototype.remove = function () {
      this.parentNode.removeChild(this);
    };
  }
})(['Element', 'CharacterData', 'DocumentType']); //
// requestAnimationFrame polyfill by Erik Möller.
//  With fixes from Paul Irish and Tino Zijdel
//
//  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//
//  MIT license
//


(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})(); // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/prepend()/prepend().md


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }

    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]); // Global variables


window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

var KTUtil = function () {
  var resizeHandlers = [];
  /** @type {object} breakpoints The device width breakpoints **/

  var breakpoints = {
    sm: 544,
    // Small screen / phone
    md: 768,
    // Medium screen / tablet
    lg: 1024,
    // Large screen / desktop
    xl: 1200 // Extra large screen / wide desktop

  };
  /**
   * Handle window resize event with some
   * delay to attach event handlers upon resize complete
   */

  var _windowResizeHandler = function _windowResizeHandler() {
    var _runResizeHandlers = function _runResizeHandlers() {
      // reinitialize other subscribed elements
      for (var i = 0; i < resizeHandlers.length; i++) {
        var each = resizeHandlers[i];
        each.call();
      }
    };

    var timeout = false; // holder for timeout id

    var delay = 250; // delay after event is "complete" to run callback

    window.addEventListener('resize', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        _runResizeHandlers();
      }, delay); // wait 50ms until window resize finishes.
    });
  };

  return {
    /**
     * Class main initializer.
     * @param {object} options.
     * @returns null
     */
    //main function to initiate the theme
    init: function init(options) {
      if (options && options.breakpoints) {
        breakpoints = options.breakpoints;
      }

      _windowResizeHandler();
    },

    /**
     * Adds window resize event handler.
     * @param {function} callback function.
     */
    addResizeHandler: function addResizeHandler(callback) {
      resizeHandlers.push(callback);
    },

    /**
     * Removes window resize event handler.
     * @param {function} callback function.
     */
    removeResizeHandler: function removeResizeHandler(callback) {
      for (var i = 0; i < resizeHandlers.length; i++) {
        if (callback === resizeHandlers[i]) {
          delete resizeHandlers[i];
        }
      }
    },

    /**
     * Trigger window resize handlers.
     */
    runResizeHandlers: function runResizeHandlers() {
      _runResizeHandlers();
    },
    resize: function resize() {
      if (typeof Event === 'function') {
        // modern browsers
        window.dispatchEvent(new Event('resize'));
      } else {
        // for IE and other old browsers
        // causes deprecation warning on modern browsers
        var evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
      }
    },

    /**
     * Get GET parameter value from URL.
     * @param {string} paramName Parameter name.
     * @returns {string}
     */
    getURLParam: function getURLParam(paramName) {
      var searchString = window.location.search.substring(1),
          i,
          val,
          params = searchString.split("&");

      for (i = 0; i < params.length; i++) {
        val = params[i].split("=");

        if (val[0] == paramName) {
          return unescape(val[1]);
        }
      }

      return null;
    },

    /**
     * Checks whether current device is mobile touch.
     * @returns {boolean}
     */
    isMobileDevice: function isMobileDevice() {
      return this.getViewPort().width < this.getBreakpoint('lg') ? true : false;
    },

    /**
     * Checks whether current device is desktop.
     * @returns {boolean}
     */
    isDesktopDevice: function isDesktopDevice() {
      return KTUtil.isMobileDevice() ? false : true;
    },

    /**
     * Gets browser window viewport size. Ref:
     * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
     * @returns {object}
     */
    getViewPort: function getViewPort() {
      var e = window,
          a = 'inner';

      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    },

    /**
     * Checks whether given device mode is currently activated.
     * @param {string} mode Responsive mode name(e.g: desktop,
     *     desktop-and-tablet, tablet, tablet-and-mobile, mobile)
     * @returns {boolean}
     */
    isInResponsiveRange: function isInResponsiveRange(mode) {
      var breakpoint = this.getViewPort().width;

      if (mode == 'general') {
        return true;
      } else if (mode == 'desktop' && breakpoint >= this.getBreakpoint('lg') + 1) {
        return true;
      } else if (mode == 'tablet' && breakpoint >= this.getBreakpoint('md') + 1 && breakpoint < this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
        return true;
      } else if (mode == 'desktop-and-tablet' && breakpoint >= this.getBreakpoint('md') + 1) {
        return true;
      } else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
        return true;
      } else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
        return true;
      }

      return false;
    },

    /**
     * Generates unique ID for give prefix.
     * @param {string} prefix Prefix for generated ID
     * @returns {boolean}
     */
    getUniqueID: function getUniqueID(prefix) {
      return prefix + Math.floor(Math.random() * new Date().getTime());
    },

    /**
     * Gets window width for give breakpoint mode.
     * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
     * @returns {number}
     */
    getBreakpoint: function getBreakpoint(mode) {
      return breakpoints[mode];
    },

    /**
     * Checks whether object has property matchs given key path.
     * @param {object} obj Object contains values paired with given key path
     * @param {string} keys Keys path seperated with dots
     * @returns {object}
     */
    isset: function isset(obj, keys) {
      var stone;
      keys = keys || '';

      if (keys.indexOf('[') !== -1) {
        throw new Error('Unsupported object path notation.');
      }

      keys = keys.split('.');

      do {
        if (obj === undefined) {
          return false;
        }

        stone = keys.shift();

        if (!obj.hasOwnProperty(stone)) {
          return false;
        }

        obj = obj[stone];
      } while (keys.length);

      return true;
    },

    /**
     * Gets highest z-index of the given element parents
     * @param {object} el jQuery element object
     * @returns {number}
     */
    getHighestZindex: function getHighestZindex(el) {
      var elem = KTUtil.get(el),
          position,
          value;

      while (elem && elem !== document) {
        // Ignore z-index if position is set to a value where z-index is ignored by the browser
        // This makes behavior of this function consistent across browsers
        // WebKit always returns auto if the element is positioned
        position = KTUtil.css(elem, 'position');

        if (position === "absolute" || position === "relative" || position === "fixed") {
          // IE returns 0 when zIndex is not specified
          // other browsers return a string
          // we ignore the case of nested elements with an explicit value of 0
          // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
          value = parseInt(KTUtil.css(elem, 'z-index'));

          if (!isNaN(value) && value !== 0) {
            return value;
          }
        }

        elem = elem.parentNode;
      }

      return null;
    },

    /**
     * Checks whether the element has any parent with fixed positionfreg
     * @param {object} el jQuery element object
     * @returns {boolean}
     */
    hasFixedPositionedParent: function hasFixedPositionedParent(el) {
      var position;

      while (el && el !== document) {
        position = KTUtil.css(el, 'position');

        if (position === "fixed") {
          return true;
        }

        el = el.parentNode;
      }

      return false;
    },

    /**
     * Simulates delay
     */
    sleep: function sleep(milliseconds) {
      var start = new Date().getTime();

      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    },

    /**
     * Gets randomly generated integer value within given min and max range
     * @param {number} min Range start value
     * @param {number} max Range end value
     * @returns {number}
     */
    getRandomInt: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Checks whether Angular library is included
     * @returns {boolean}
     */
    isAngularVersion: function isAngularVersion() {
      return window.Zone !== undefined ? true : false;
    },
    // jQuery Workarounds
    // Deep extend:  $.extend(true, {}, objA, objB);
    deepExtend: function deepExtend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj) continue;

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (_typeof(obj[key]) === 'object') out[key] = KTUtil.deepExtend(out[key], obj[key]);else out[key] = obj[key];
          }
        }
      }

      return out;
    },
    // extend:  $.extend({}, objA, objB);
    extend: function extend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) continue;

        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
        }
      }

      return out;
    },
    get: function get(query) {
      var el;

      if (query === document) {
        return document;
      }

      if (!!(query && query.nodeType === 1)) {
        return query;
      }

      if (el = document.getElementById(query)) {
        return el;
      } else if (el = document.getElementsByTagName(query), el.length > 0) {
        return el[0];
      } else if (el = document.getElementsByClassName(query), el.length > 0) {
        return el[0];
      } else {
        return null;
      }
    },
    getByID: function getByID(query) {
      if (!!(query && query.nodeType === 1)) {
        return query;
      }

      return document.getElementById(query);
    },
    getByTag: function getByTag(query) {
      var el;

      if (el = document.getElementsByTagName(query)) {
        return el[0];
      } else {
        return null;
      }
    },
    getByClass: function getByClass(query) {
      var el;

      if (el = document.getElementsByClassName(query)) {
        return el[0];
      } else {
        return null;
      }
    },

    /**
     * Checks whether the element has given classes
     * @param {object} el jQuery element object
     * @param {string} Classes string
     * @returns {boolean}
     */
    hasClasses: function hasClasses(el, classes) {
      if (!el) {
        return;
      }

      var classesArr = classes.split(" ");

      for (var i = 0; i < classesArr.length; i++) {
        if (KTUtil.hasClass(el, KTUtil.trim(classesArr[i])) == false) {
          return false;
        }
      }

      return true;
    },
    hasClass: function hasClass(el, className) {
      if (!el) {
        return;
      }

      return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    },
    addClass: function addClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          if (classNames[i] && classNames[i].length > 0) {
            el.classList.add(KTUtil.trim(classNames[i]));
          }
        }
      } else if (!KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className += ' ' + KTUtil.trim(classNames[x]);
        }
      }
    },
    removeClass: function removeClass(el, className) {
      if (!el || typeof className === 'undefined') {
        return;
      }

      var classNames = className.split(' ');

      if (el.classList) {
        for (var i = 0; i < classNames.length; i++) {
          el.classList.remove(KTUtil.trim(classNames[i]));
        }
      } else if (KTUtil.hasClass(el, className)) {
        for (var x = 0; x < classNames.length; x++) {
          el.className = el.className.replace(new RegExp('\\b' + KTUtil.trim(classNames[x]) + '\\b', 'g'), '');
        }
      }
    },
    triggerCustomEvent: function triggerCustomEvent(el, eventName, data) {
      var event;

      if (window.CustomEvent) {
        event = new CustomEvent(eventName, {
          detail: data
        });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
      }

      el.dispatchEvent(event);
    },
    triggerEvent: function triggerEvent(node, eventName) {
      // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
      var doc;

      if (node.ownerDocument) {
        doc = node.ownerDocument;
      } else if (node.nodeType == 9) {
        // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
        doc = node;
      } else {
        throw new Error("Invalid node passed to fireEvent: " + node.id);
      }

      if (node.dispatchEvent) {
        // Gecko-style approach (now the standard) takes more work
        var eventClass = ""; // Different events have different event classes.
        // If this switch statement can't map an eventName to an eventClass,
        // the event firing is going to fail.

        switch (eventName) {
          case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.

          case "mouseenter":
          case "mouseleave":
          case "mousedown":
          case "mouseup":
            eventClass = "MouseEvents";
            break;

          case "focus":
          case "change":
          case "blur":
          case "select":
            eventClass = "HTMLEvents";
            break;

          default:
            throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
            break;
        }

        var event = doc.createEvent(eventClass);
        var bubbles = eventName == "change" ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

        event.synthetic = true; // allow detection of synthetic events
        // The second parameter says go ahead with the default action

        node.dispatchEvent(event, true);
      } else if (node.fireEvent) {
        // IE-old school style
        var event = doc.createEventObject();
        event.synthetic = true; // allow detection of synthetic events

        node.fireEvent("on" + eventName, event);
      }
    },
    index: function index(elm) {
      elm = KTUtil.get(elm);
      var c = elm.parentNode.children,
          i = 0;

      for (; i < c.length; i++) {
        if (c[i] == elm) return i;
      }
    },
    trim: function trim(string) {
      return string.trim();
    },
    eventTriggered: function eventTriggered(e) {
      if (e.currentTarget.dataset.triggered) {
        return true;
      } else {
        e.currentTarget.dataset.triggered = true;
        return false;
      }
    },
    remove: function remove(el) {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    },
    find: function find(parent, query) {
      parent = KTUtil.get(parent);

      if (parent) {
        return parent.querySelector(query);
      }
    },
    findAll: function findAll(parent, query) {
      parent = KTUtil.get(parent);

      if (parent) {
        return parent.querySelectorAll(query);
      }
    },
    insertAfter: function insertAfter(el, referenceNode) {
      return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    },
    parents: function parents(elem, selector) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;

          while (--i >= 0 && matches.item(i) !== this) {}

          return i > -1;
        };
      } // Set up a parent array


      var parents = []; // Push each parent element to the array

      for (; elem && elem !== document; elem = elem.parentNode) {
        if (selector) {
          if (elem.matches(selector)) {
            parents.push(elem);
          }

          continue;
        }

        parents.push(elem);
      } // Return our parent array


      return parents;
    },
    children: function children(el, selector, log) {
      if (!el || !el.childNodes) {
        return;
      }

      var result = [],
          i = 0,
          l = el.childNodes.length;

      for (var i; i < l; ++i) {
        if (el.childNodes[i].nodeType == 1 && KTUtil.matches(el.childNodes[i], selector, log)) {
          result.push(el.childNodes[i]);
        }
      }

      return result;
    },
    child: function child(el, selector, log) {
      var children = KTUtil.children(el, selector, log);
      return children ? children[0] : null;
    },
    matches: function matches(el, selector, log) {
      var p = Element.prototype;

      var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
      };

      if (el && el.tagName) {
        return f.call(el, selector);
      } else {
        return false;
      }
    },
    data: function data(element) {
      element = KTUtil.get(element);
      return {
        set: function set(name, data) {
          if (element == null || element === undefined) {
            return;
          }

          if (element.customDataTag === undefined) {
            window.KTUtilElementDataStoreID++;
            element.customDataTag = window.KTUtilElementDataStoreID;
          }

          if (window.KTUtilElementDataStore[element.customDataTag] === undefined) {
            window.KTUtilElementDataStore[element.customDataTag] = {};
          }

          window.KTUtilElementDataStore[element.customDataTag][name] = data;
        },
        get: function get(name) {
          if (element === undefined) {
            return;
          }

          if (element == null || element.customDataTag === undefined) {
            return null;
          }

          return this.has(name) ? window.KTUtilElementDataStore[element.customDataTag][name] : null;
        },
        has: function has(name) {
          if (element === undefined) {
            return false;
          }

          if (element == null || element.customDataTag === undefined) {
            return false;
          }

          return window.KTUtilElementDataStore[element.customDataTag] && window.KTUtilElementDataStore[element.customDataTag][name] ? true : false;
        },
        remove: function remove(name) {
          if (element && this.has(name)) {
            delete window.KTUtilElementDataStore[element.customDataTag][name];
          }
        }
      };
    },
    outerWidth: function outerWidth(el, margin) {
      var width;

      if (margin === true) {
        width = parseFloat(el.offsetWidth);
        width += parseFloat(KTUtil.css(el, 'margin-left')) + parseFloat(KTUtil.css(el, 'margin-right'));
        return parseFloat(width);
      } else {
        width = parseFloat(el.offsetWidth);
        return width;
      }
    },
    offset: function offset(elem) {
      var rect, win;
      elem = KTUtil.get(elem);

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    height: function height(el) {
      return KTUtil.css(el, 'height');
    },
    visible: function visible(el) {
      return !(el.offsetWidth === 0 && el.offsetHeight === 0);
    },
    attr: function attr(el, name, value) {
      el = KTUtil.get(el);

      if (el == undefined) {
        return;
      }

      if (value !== undefined) {
        el.setAttribute(name, value);
      } else {
        return el.getAttribute(name);
      }
    },
    hasAttr: function hasAttr(el, name) {
      el = KTUtil.get(el);

      if (el == undefined) {
        return;
      }

      return el.getAttribute(name) ? true : false;
    },
    removeAttr: function removeAttr(el, name) {
      el = KTUtil.get(el);

      if (el == undefined) {
        return;
      }

      el.removeAttribute(name);
    },
    animate: function animate(from, to, duration, update, easing, done) {
      /**
       * TinyAnimate.easings
       *  Adapted from jQuery Easing
       */
      var easings = {};
      var easing;

      easings.linear = function (t, b, c, d) {
        return c * t / d + b;
      };

      easing = easings.linear; // Early bail out if called incorrectly

      if (typeof from !== 'number' || typeof to !== 'number' || typeof duration !== 'number' || typeof update !== 'function') {
        return;
      } // Create mock done() function if necessary


      if (typeof done !== 'function') {
        done = function done() {};
      } // Pick implementation (requestAnimationFrame | setTimeout)


      var rAF = window.requestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 50);
      }; // Animation loop


      var canceled = false;
      var change = to - from;

      function loop(timestamp) {
        var time = (timestamp || +new Date()) - start;

        if (time >= 0) {
          update(easing(time, from, change, duration));
        }

        if (time >= 0 && time >= duration) {
          update(to);
          done();
        } else {
          rAF(loop);
        }
      }

      update(from); // Start animation loop

      var start = window.performance && window.performance.now ? window.performance.now() : +new Date();
      rAF(loop);
    },
    actualCss: function actualCss(el, prop, cache) {
      el = KTUtil.get(el);
      var css = '';

      if (el instanceof HTMLElement === false) {
        return;
      }

      if (!el.getAttribute('kt-hidden-' + prop) || cache === false) {
        var value; // the element is hidden so:
        // making the el block so we can meassure its height but still be hidden

        css = el.style.cssText;
        el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

        if (prop == 'width') {
          value = el.offsetWidth;
        } else if (prop == 'height') {
          value = el.offsetHeight;
        }

        el.style.cssText = css; // store it in cache

        el.setAttribute('kt-hidden-' + prop, value);
        return parseFloat(value);
      } else {
        // store it in cache
        return parseFloat(el.getAttribute('kt-hidden-' + prop));
      }
    },
    actualHeight: function actualHeight(el, cache) {
      return KTUtil.actualCss(el, 'height', cache);
    },
    actualWidth: function actualWidth(el, cache) {
      return KTUtil.actualCss(el, 'width', cache);
    },
    getScroll: function getScroll(element, method) {
      // The passed in `method` value should be 'Top' or 'Left'
      method = 'scroll' + method;
      return element == window || element == document ? self[method == 'scrollTop' ? 'pageYOffset' : 'pageXOffset'] || browserSupportsBoxModel && document.documentElement[method] || document.body[method] : element[method];
    },
    css: function css(el, styleProp, value) {
      el = KTUtil.get(el);

      if (!el) {
        return;
      }

      if (value !== undefined) {
        el.style[styleProp] = value;
      } else {
        var defaultView = (el.ownerDocument || document).defaultView; // W3C standard way:

        if (defaultView && defaultView.getComputedStyle) {
          // sanitize property name to css notation
          // (hyphen separated words eg. font-Size)
          styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
          return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) {
          // IE
          // sanitize property name to camelCase
          styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
          });
          value = el.currentStyle[styleProp]; // convert other units to pixels on IE

          if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return function (value) {
              var oldLeft = el.style.left,
                  oldRsLeft = el.runtimeStyle.left;
              el.runtimeStyle.left = el.currentStyle.left;
              el.style.left = value || 0;
              value = el.style.pixelLeft + "px";
              el.style.left = oldLeft;
              el.runtimeStyle.left = oldRsLeft;
              return value;
            }(value);
          }

          return value;
        }
      }
    },
    slide: function slide(el, dir, speed, callback, recalcMaxHeight) {
      if (!el || dir == 'up' && KTUtil.visible(el) === false || dir == 'down' && KTUtil.visible(el) === true) {
        return;
      }

      speed = speed ? speed : 600;
      var calcHeight = KTUtil.actualHeight(el);
      var calcPaddingTop = false;
      var calcPaddingBottom = false;

      if (KTUtil.css(el, 'padding-top') && KTUtil.data(el).has('slide-padding-top') !== true) {
        KTUtil.data(el).set('slide-padding-top', KTUtil.css(el, 'padding-top'));
      }

      if (KTUtil.css(el, 'padding-bottom') && KTUtil.data(el).has('slide-padding-bottom') !== true) {
        KTUtil.data(el).set('slide-padding-bottom', KTUtil.css(el, 'padding-bottom'));
      }

      if (KTUtil.data(el).has('slide-padding-top')) {
        calcPaddingTop = parseInt(KTUtil.data(el).get('slide-padding-top'));
      }

      if (KTUtil.data(el).has('slide-padding-bottom')) {
        calcPaddingBottom = parseInt(KTUtil.data(el).get('slide-padding-bottom'));
      }

      if (dir == 'up') {
        // up
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            el.style.paddingTop = calcPaddingTop - value + 'px';
          }, 'linear');
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = calcPaddingBottom - value + 'px';
          }, 'linear');
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = calcHeight - value + 'px';
        }, 'linear', function () {
          callback();
          el.style.height = '';
          el.style.display = 'none';
        });
      } else if (dir == 'down') {
        // down
        el.style.cssText = 'display: block; overflow: hidden;';

        if (calcPaddingTop) {
          KTUtil.animate(0, calcPaddingTop, speed, function (value) {
            el.style.paddingTop = value + 'px';
          }, 'linear', function () {
            el.style.paddingTop = '';
          });
        }

        if (calcPaddingBottom) {
          KTUtil.animate(0, calcPaddingBottom, speed, function (value) {
            el.style.paddingBottom = value + 'px';
          }, 'linear', function () {
            el.style.paddingBottom = '';
          });
        }

        KTUtil.animate(0, calcHeight, speed, function (value) {
          el.style.height = value + 'px';
        }, 'linear', function () {
          callback();
          el.style.height = '';
          el.style.display = '';
          el.style.overflow = '';
        });
      }
    },
    slideUp: function slideUp(el, speed, callback) {
      KTUtil.slide(el, 'up', speed, callback);
    },
    slideDown: function slideDown(el, speed, callback) {
      KTUtil.slide(el, 'down', speed, callback);
    },
    show: function show(el, display) {
      if (typeof el !== 'undefined') {
        el.style.display = display ? display : 'block';
      }
    },
    hide: function hide(el) {
      if (typeof el !== 'undefined') {
        el.style.display = 'none';
      }
    },
    addEvent: function addEvent(el, type, handler, one) {
      el = KTUtil.get(el);

      if (typeof el !== 'undefined' && el !== null) {
        el.addEventListener(type, handler);
      }
    },
    removeEvent: function removeEvent(el, type, handler) {
      el = KTUtil.get(el);

      if (el !== null) {
        el.removeEventListener(type, handler);
      }
    },
    on: function on(element, selector, event, handler) {
      if (!selector) {
        return;
      }

      var eventId = KTUtil.getUniqueID('event');

      window.KTUtilDelegatedEventHandlers[eventId] = function (e) {
        var targets = element.querySelectorAll(selector);
        var target = e.target;

        while (target && target !== element) {
          for (var i = 0, j = targets.length; i < j; i++) {
            if (target === targets[i]) {
              handler.call(target, e);
            }
          }

          target = target.parentNode;
        }
      };

      KTUtil.addEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      return eventId;
    },
    off: function off(element, event, eventId) {
      if (!element || !window.KTUtilDelegatedEventHandlers[eventId]) {
        return;
      }

      KTUtil.removeEvent(element, event, window.KTUtilDelegatedEventHandlers[eventId]);
      delete window.KTUtilDelegatedEventHandlers[eventId];
    },
    one: function onetime(el, type, callback) {
      el = KTUtil.get(el);
      el.addEventListener(type, function callee(e) {
        // remove event
        if (e.target && e.target.removeEventListener) {
          e.target.removeEventListener(e.type, callee);
        } // call handler


        return callback(e);
      });
    },
    hash: function hash(str) {
      var hash = 0,
          i,
          chr;
      if (str.length === 0) return hash;

      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
      }

      return hash;
    },
    animateClass: function animateClass(el, animationName, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.addClass(el, 'animated ' + animationName);
      KTUtil.one(el, animation, function () {
        KTUtil.removeClass(el, 'animated ' + animationName);
      });

      if (callback) {
        KTUtil.one(el, animation, callback);
      }
    },
    transitionEnd: function transitionEnd(el, callback) {
      var transition;
      var transitions = {
        transition: 'transitionend',
        OTransition: 'oTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        WebkitTransition: 'webkitTransitionEnd',
        msTransition: 'msTransitionEnd'
      };

      for (var t in transitions) {
        if (el.style[t] !== undefined) {
          transition = transitions[t];
        }
      }

      KTUtil.one(el, transition, callback);
    },
    animationEnd: function animationEnd(el, callback) {
      var animation;
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        msAnimation: 'msAnimationEnd'
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          animation = animations[t];
        }
      }

      KTUtil.one(el, animation, callback);
    },
    animateDelay: function animateDelay(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-delay', value);
      }
    },
    animateDuration: function animateDuration(el, value) {
      var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];

      for (var i = 0; i < vendors.length; i++) {
        KTUtil.css(el, vendors[i] + 'animation-duration', value);
      }
    },
    scrollTo: function scrollTo(target, offset, duration) {
      duration = duration ? duration : 500;
      target = KTUtil.get(target);
      var targetPos = target ? KTUtil.offset(target).top : 0;
      var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      var from, to;

      if (offset) {
        scrollPos += offset;
      }

      from = scrollPos;
      to = targetPos;
      KTUtil.animate(from, to, duration, function (value) {
        document.documentElement.scrollTop = value;
        document.body.parentNode.scrollTop = value;
        document.body.scrollTop = value;
      }); //, easing, done
    },
    scrollTop: function scrollTop(offset, duration) {
      KTUtil.scrollTo(null, offset, duration);
    },
    isArray: function isArray(obj) {
      return obj && Array.isArray(obj);
    },
    ready: function ready(callback) {
      if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    },
    isEmpty: function isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    },
    numberString: function numberString(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;

      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }

      return x1 + x2;
    },
    detectIE: function detectIE() {
      var ua = window.navigator.userAgent; // Test values; Uncomment to check result …
      // IE 10
      // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
      // IE 11
      // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
      // Edge 12 (Spartan)
      // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
      // Edge 13
      // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

      var msie = ua.indexOf('MSIE ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      } // other browser


      return false;
    },
    isRTL: function isRTL() {
      return KTUtil.attr(KTUtil.get('html'), 'direction') == 'rtl';
    },
    //
    // Scroller
    scrollInit: function scrollInit(element, options) {
      if (!element) return; // Define init function

      function init() {
        var ps;
        var height;

        if (options.height instanceof Function) {
          height = parseInt(options.height.call());
        } else {
          height = parseInt(options.height);
        } // Destroy scroll on table and mobile modes


        if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isInResponsiveRange('tablet-and-mobile')) {
          ps = KTUtil.data(element).get('ps');

          if (ps) {
            if (options.resetHeightOnDestroy) {
              KTUtil.css(element, 'height', 'auto');
            } else {
              KTUtil.css(element, 'overflow', 'auto');

              if (height > 0) {
                KTUtil.css(element, 'height', height + 'px');
              }
            }

            ps.destroy();
            ps = KTUtil.data(element).remove('ps');
          } else if (height > 0) {
            KTUtil.css(element, 'overflow', 'auto');
            KTUtil.css(element, 'height', height + 'px');
          }

          return;
        }

        if (height > 0) {
          KTUtil.css(element, 'height', height + 'px');
        }

        if (options.desktopNativeScroll) {
          KTUtil.css(element, 'overflow', 'auto');
          return;
        } // Init scroll


        KTUtil.css(element, 'overflow', 'hidden');
        ps = KTUtil.data(element).get('ps');

        if (ps) {
          ps.update();
        } else {
          KTUtil.addClass(element, 'kt-scroll');
          ps = new PerfectScrollbar(element, {
            wheelSpeed: 0.5,
            swipeEasing: true,
            wheelPropagation: options.windowScroll === false ? false : true,
            minScrollbarLength: 40,
            maxScrollbarLength: 300,
            suppressScrollX: KTUtil.attr(element, 'data-scroll-x') != 'true' ? true : false
          });
          KTUtil.data(element).set('ps', ps);
        } // Remember scroll position in cookie


        var uid = KTUtil.attr(element, 'id');

        if (options.rememberPosition === true && Cookies && uid) {
          if (Cookies.get(uid)) {
            var pos = parseInt(Cookies.get(uid));

            if (pos > 0) {
              element.scrollTop = pos;
            }
          }

          element.addEventListener('ps-scroll-y', function () {
            Cookies.set(uid, element.scrollTop);
          });
        }
      } // Init


      init(); // Handle window resize

      if (options.handleWindowResize) {
        KTUtil.addResizeHandler(function () {
          init();
        });
      }
    },
    scrollUpdate: function scrollUpdate(element) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.update();
      }
    },
    scrollUpdateAll: function scrollUpdateAll(parent) {
      var scrollers = KTUtil.findAll(parent, '.ps');

      for (var i = 0, len = scrollers.length; i < len; i++) {
        KTUtil.scrollUpdate(scrollers[i]);
      }
    },
    scrollDestroy: function scrollDestroy(element) {
      var ps = KTUtil.data(element).get('ps');

      if (ps) {
        ps.destroy();
        ps = KTUtil.data(element).remove('ps');
      }
    },
    setHTML: function setHTML(el, html) {
      if (KTUtil.get(el)) {
        KTUtil.get(el).innerHTML = html;
      }
    },
    getHTML: function getHTML(el) {
      if (KTUtil.get(el)) {
        return KTUtil.get(el).innerHTML;
      }
    },
    getDocumentHeight: function getDocumentHeight() {
      var body = document.body;
      var html = document.documentElement;
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    },
    getScrollTop: function getScrollTop() {
      return (document.scrollingElement || document.documentElement).scrollTop;
    }
  };
}(); // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTUtil;
} // Initialize KTUtil class on document ready


KTUtil.ready(function () {
  KTUtil.init();
}); // CSS3 Transitions only after page load(.kt-page-loading class added to body tag and remove with JS on page load)

window.onload = function () {
  KTUtil.removeClass(KTUtil.get('body'), 'kt-page--loading');
};

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/components/base/wizard.js":
/*!***************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/components/base/wizard.js ***!
  \***************************************************************************/
/***/ ((module) => {

// plugin setup
var KTWizard = function KTWizard(elementId, options) {
  // Main object
  var the = this;
  var init = false; // Get element object

  var element = KTUtil.get(elementId);
  var body = KTUtil.get('body');

  if (!element) {
    return;
  } // Default options


  var defaultOptions = {
    startStep: 1,
    clickableSteps: true
  }; ////////////////////////////
  // ** Private Methods  ** //
  ////////////////////////////

  var Plugin = {
    /**
     * Construct
     */
    construct: function construct(options) {
      if (KTUtil.data(element).has('wizard')) {
        the = KTUtil.data(element).get('wizard');
      } else {
        // reset menu
        Plugin.init(options); // build menu

        Plugin.build();
        KTUtil.data(element).set('wizard', the);
      }

      return the;
    },

    /**
     * Init wizard
     */
    init: function init(options) {
      the.element = element;
      the.events = []; // merge default and user defined options

      the.options = KTUtil.deepExtend({}, defaultOptions, options); // Elements

      the.steps = KTUtil.findAll(element, '[data-ktwizard-type="step"]');
      the.btnSubmit = KTUtil.find(element, '[data-ktwizard-type="action-submit"]');
      the.btnNext = KTUtil.find(element, '[data-ktwizard-type="action-next"]');
      the.btnPrev = KTUtil.find(element, '[data-ktwizard-type="action-prev"]');
      the.btnLast = KTUtil.find(element, '[data-ktwizard-type="action-last"]');
      the.btnFirst = KTUtil.find(element, '[data-ktwizard-type="action-first"]'); // Variables

      the.events = [];
      the.currentStep = 1;
      the.stopped = false;
      the.totalSteps = the.steps.length; // Init current step

      if (the.options.startStep > 1) {
        Plugin.goTo(the.options.startStep);
      } // Init UI


      Plugin.updateUI();
    },

    /**
     * Build Form Wizard
     */
    build: function build() {
      // Next button event handler
      KTUtil.addEvent(the.btnNext, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(Plugin.getNextStep(), true);
      }); // Prev button event handler

      KTUtil.addEvent(the.btnPrev, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(Plugin.getPrevStep(), true);
      }); // First button event handler

      KTUtil.addEvent(the.btnFirst, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(1, true);
      }); // Last button event handler

      KTUtil.addEvent(the.btnLast, 'click', function (e) {
        e.preventDefault();
        Plugin.goTo(the.totalSteps, true);
      });

      if (the.options.clickableSteps === true) {
        KTUtil.on(element, '[data-ktwizard-type="step"]', 'click', function () {
          var index = Array.prototype.indexOf.call(the.steps, this) + 1;

          if (index !== the.currentStep) {
            Plugin.goTo(index, true);
          }
        });
      }
    },

    /**
     * Handles wizard click wizard
     */
    goTo: function goTo(number, eventHandle) {
      // Skip if this step is already shown
      if (number === the.currentStep || number > the.totalSteps || number < 0) {
        return;
      } // Validate step number


      if (number) {
        number = parseInt(number);
      } else {
        number = Plugin.getNextStep();
      } // Before next and prev events


      var callback;

      if (eventHandle === true) {
        if (number > the.currentStep) {
          callback = Plugin.eventTrigger('beforeNext');
        } else {
          callback = Plugin.eventTrigger('beforePrev');
        }
      } // Skip if stopped


      if (the.stopped === true) {
        the.stopped = false;
        return;
      } // Continue if no exit


      if (callback !== false) {
        // Before change
        if (eventHandle === true) {
          Plugin.eventTrigger('beforeChange');
        } // Set current step


        the.currentStep = number;
        Plugin.updateUI(); // Trigger change event

        if (eventHandle === true) {
          Plugin.eventTrigger('change');
        }
      } // After next and prev events


      if (eventHandle === true) {
        if (number > the.startStep) {
          Plugin.eventTrigger('afterNext');
        } else {
          Plugin.eventTrigger('afterPrev');
        }
      } else {
        // this function called by method, stop for the next call
        the.stopped = true;
      }

      return the;
    },

    /**
     * Cancel
     */
    stop: function stop() {
      the.stopped = true;
    },

    /**
     * Resume
     */
    start: function start() {
      the.stopped = false;
    },

    /**
     * Check last step
     */
    isLastStep: function isLastStep() {
      return the.currentStep === the.totalSteps;
    },

    /**
     * Check first step
     */
    isFirstStep: function isFirstStep() {
      return the.currentStep === 1;
    },

    /**
     * Check between step
     */
    isBetweenStep: function isBetweenStep() {
      return Plugin.isLastStep() === false && Plugin.isFirstStep() === false;
    },

    /**
     * Go to the first step
     */
    updateUI: function updateUI() {
      var stepType = '';
      var index = the.currentStep - 1;

      if (Plugin.isLastStep()) {
        stepType = 'last';
      } else if (Plugin.isFirstStep()) {
        stepType = 'first';
      } else {
        stepType = 'between';
      }

      KTUtil.attr(the.element, 'data-ktwizard-state', stepType); // Steps

      var steps = KTUtil.findAll(the.element, '[data-ktwizard-type="step"]');

      if (steps && steps.length > 0) {
        for (var i = 0, len = steps.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(steps[i], 'data-ktwizard-state', 'current');
          } else {
            if (i < index) {
              KTUtil.attr(steps[i], 'data-ktwizard-state', 'done');
            } else {
              KTUtil.attr(steps[i], 'data-ktwizard-state', 'pending');
            }
          }
        }
      } // Steps Info


      var stepsInfo = KTUtil.findAll(the.element, '[data-ktwizard-type="step-info"]');

      if (stepsInfo && stepsInfo.length > 0) {
        for (var i = 0, len = stepsInfo.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(stepsInfo[i], 'data-ktwizard-state', 'current');
          } else {
            KTUtil.removeAttr(stepsInfo[i], 'data-ktwizard-state');
          }
        }
      } // Steps Content


      var stepsContent = KTUtil.findAll(the.element, '[data-ktwizard-type="step-content"]');

      if (stepsContent && stepsContent.length > 0) {
        for (var i = 0, len = stepsContent.length; i < len; i++) {
          if (i == index) {
            KTUtil.attr(stepsContent[i], 'data-ktwizard-state', 'current');
          } else {
            KTUtil.removeAttr(stepsContent[i], 'data-ktwizard-state');
          }
        }
      }
    },

    /**
     * Get next step
     */
    getNextStep: function getNextStep() {
      if (the.totalSteps >= the.currentStep + 1) {
        return the.currentStep + 1;
      } else {
        return the.totalSteps;
      }
    },

    /**
     * Get prev step
     */
    getPrevStep: function getPrevStep() {
      if (the.currentStep - 1 >= 1) {
        return the.currentStep - 1;
      } else {
        return 1;
      }
    },

    /**
     * Trigger events
     */
    eventTrigger: function eventTrigger(name, nested) {
      //KTUtil.triggerCustomEvent(name);
      for (var i = 0; i < the.events.length; i++) {
        var event = the.events[i];

        if (event.name == name) {
          if (event.one == true) {
            if (event.fired == false) {
              the.events[i].fired = true;
              return event.handler.call(this, the);
            }
          } else {
            return event.handler.call(this, the);
          }
        }
      }
    },
    addEvent: function addEvent(name, handler, one) {
      the.events.push({
        name: name,
        handler: handler,
        one: one,
        fired: false
      });
      return the;
    }
  }; //////////////////////////
  // ** Public Methods ** //
  //////////////////////////

  /**
   * Set default options
   */

  the.setDefaults = function (options) {
    defaultOptions = options;
  };
  /**
   * Go to the next step
   */


  the.goNext = function (eventHandle) {
    return Plugin.goTo(Plugin.getNextStep(), eventHandle);
  };
  /**
   * Go to the prev step
   */


  the.goPrev = function (eventHandle) {
    return Plugin.goTo(Plugin.getPrevStep(), eventHandle);
  };
  /**
   * Go to the last step
   */


  the.goLast = function (eventHandle) {
    return Plugin.goTo(the.totalSteps, eventHandle);
  };
  /**
   * Go to the first step
   */


  the.goFirst = function (eventHandle) {
    return Plugin.goTo(1, eventHandle);
  };
  /**
   * Go to a step
   */


  the.goTo = function (number, eventHandle) {
    return Plugin.goTo(number, eventHandle);
  };
  /**
   * Cancel step
   */


  the.stop = function () {
    return Plugin.stop();
  };
  /**
   * Resume step
   */


  the.start = function () {
    return Plugin.start();
  };
  /**
   * Get current step number
   */


  the.getStep = function () {
    return the.currentStep;
  };
  /**
   * Check last step
   */


  the.isLastStep = function () {
    return Plugin.isLastStep();
  };
  /**
   * Check first step
   */


  the.isFirstStep = function () {
    return Plugin.isFirstStep();
  };
  /**
   * Attach event
   */


  the.on = function (name, handler) {
    return Plugin.addEvent(name, handler);
  };
  /**
   * Attach event that will be fired once
   */


  the.one = function (name, handler) {
    return Plugin.addEvent(name, handler, true);
  }; // Construct plugin


  Plugin.construct.apply(the, [options]);
  return the;
}; // webpack support


if ( true && typeof module.exports !== 'undefined') {
  module.exports = KTWizard;
}

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/integration/plugins/bootstrap-notify.init.js":
/*!**********************************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/integration/plugins/bootstrap-notify.init.js ***!
  \**********************************************************************************************/
/***/ (() => {

//== Set defaults
$.notifyDefaults({
  template: '' + '<div data-notify="container" class="alert alert-{0} m-alert" role="alert">' + '<button type="button" aria-hidden="true" class="close" data-notify="dismiss"></button>' + '<span data-notify="icon"></span>' + '<span data-notify="title">{1}</span>' + '<span data-notify="message">{2}</span>' + '<div class="progress" data-notify="progressbar">' + '<div class="progress-bar progress-bar-animated bg-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' + '</div>' + '<a href="{3}" target="{4}" data-notify="url"></a>' + '</div>'
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/integration/plugins/bootstrap-switch.init.js":
/*!**********************************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/integration/plugins/bootstrap-switch.init.js ***!
  \**********************************************************************************************/
/***/ (() => {

//$.fn.bootstrapSwitch.defaults.size = 'large';
//$.fn.bootstrapSwitch.defaults.onColor = 'success';

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/integration/plugins/jquery-validation.init.js":
/*!***********************************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/integration/plugins/jquery-validation.init.js ***!
  \***********************************************************************************************/
/***/ (() => {

"use strict";


var valGetParentContainer = function valGetParentContainer(element) {
  var element = $(element);

  if ($(element).closest('.form-group-sub').length > 0) {
    return $(element).closest('.form-group-sub');
  } else if ($(element).closest('.bootstrap-select').length > 0) {
    return $(element).closest('.bootstrap-select');
  } else {
    return $(element).closest('.form-group');
  }
};

jQuery.validator.setDefaults({
  errorElement: 'div',
  //default input error message container
  focusInvalid: false,
  // do not focus the last invalid input
  ignore: "",
  // validate all fields including form hidden input
  errorPlacement: function errorPlacement(error, element) {
    // render error placement for each input type
    var element = $(element);
    var group = valGetParentContainer(element);
    var help = group.find('.form-text');

    if (group.find('.valid-feedback, .invalid-feedback').length !== 0) {
      return;
    }

    element.addClass('is-invalid');
    error.addClass('invalid-feedback');

    if (help.length > 0) {
      help.before(error);
    } else {
      if (element.closest('.bootstrap-select').length > 0) {
        //Bootstrap select
        element.closest('.bootstrap-select').wrap('<div class="bootstrap-select-wrapper" />').after(error);
      } else if (element.closest('.input-group').length > 0) {
        //Bootstrap group
        element.after(error);
      } else {
        //Checkbox & radios
        if (element.is(':checkbox')) {
          element.closest('.kt-checkbox').find('> span').after(error);
        } else {
          element.after(error);
        }
      }
    }
  },
  highlight: function highlight(element) {
    // hightlight error inputs
    var group = valGetParentContainer(element);
    group.addClass('validate');
    group.addClass('is-invalid');
    $(element).removeClass('is-valid');
  },
  unhighlight: function unhighlight(element) {
    // revert the change done by hightlight
    var group = valGetParentContainer(element);
    group.removeClass('validate');
    group.removeClass('is-invalid');
    $(element).removeClass('is-invalid');
  },
  success: function success(label, element) {
    var group = valGetParentContainer(element);
    group.removeClass('validate');
    group.find('.invalid-feedback').remove();
  }
});
jQuery.validator.addMethod("email", function (value, element) {
  if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}, "Please enter a valid Email.");

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/integration/plugins/sweetalert2.init.js":
/*!*****************************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/integration/plugins/sweetalert2.init.js ***!
  \*****************************************************************************************/
/***/ (() => {

"use strict";
 // Set defaults

swal.mixin({
  width: 400,
  heightAuto: false,
  padding: '2.5rem',
  buttonsStyling: false,
  confirmButtonClass: 'btn btn-success',
  confirmButtonColor: null,
  cancelButtonClass: 'btn btn-secondary',
  cancelButtonColor: null
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/layout/chat.js":
/*!****************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/layout/chat.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
 // Class definition

var KTChat = function () {
  var initChat = function initChat(parentEl) {
    var messageListEl = KTUtil.find(parentEl, '.kt-scroll');

    if (!messageListEl) {
      return;
    } // initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)


    KTUtil.scrollInit(messageListEl, {
      windowScroll: false,
      // allow browser scroll when the scroll reaches the end of the side
      mobileNativeScroll: true,
      // enable native scroll for mobile
      desktopNativeScroll: false,
      // disable native scroll and use custom scroll for desktop
      resetHeightOnDestroy: true,
      // reset css height on scroll feature destroyed
      handleWindowResize: true,
      // recalculate hight on window resize
      rememberPosition: true,
      // remember scroll position in cookie
      height: function height() {
        // calculate height
        var height; // Mobile mode

        if (KTUtil.isInResponsiveRange('tablet-and-mobile')) {
          return KTUtil.hasAttr(messageListEl, 'data-mobile-height') ? parseInt(KTUtil.attr(messageListEl, 'data-mobile-height')) : 300;
        } // Desktop mode


        if (KTUtil.isInResponsiveRange('desktop') && KTUtil.hasAttr(messageListEl, 'data-height')) {
          return parseInt(KTUtil.attr(messageListEl, 'data-height'));
        }

        var chatEl = KTUtil.find(parentEl, '.kt-chat');
        var portletHeadEl = KTUtil.find(parentEl, '.kt-portlet > .kt-portlet__head');
        var portletBodyEl = KTUtil.find(parentEl, '.kt-portlet > .kt-portlet__body');
        var portletFootEl = KTUtil.find(parentEl, '.kt-portlet > .kt-portlet__foot');

        if (KTUtil.isInResponsiveRange('desktop')) {
          height = KTLayout.getContentHeight();
        } else {
          height = KTUtil.getViewPort().height;
        }

        if (chatEl) {
          height = height - parseInt(KTUtil.css(chatEl, 'margin-top')) - parseInt(KTUtil.css(chatEl, 'margin-bottom'));
          height = height - parseInt(KTUtil.css(chatEl, 'padding-top')) - parseInt(KTUtil.css(chatEl, 'padding-bottom'));
        }

        if (portletHeadEl) {
          height = height - parseInt(KTUtil.css(portletHeadEl, 'height'));
          height = height - parseInt(KTUtil.css(portletHeadEl, 'margin-top')) - parseInt(KTUtil.css(portletHeadEl, 'margin-bottom'));
        }

        if (portletBodyEl) {
          height = height - parseInt(KTUtil.css(portletBodyEl, 'margin-top')) - parseInt(KTUtil.css(portletBodyEl, 'margin-bottom'));
          height = height - parseInt(KTUtil.css(portletBodyEl, 'padding-top')) - parseInt(KTUtil.css(portletBodyEl, 'padding-bottom'));
        }

        if (portletFootEl) {
          height = height - parseInt(KTUtil.css(portletFootEl, 'height'));
          height = height - parseInt(KTUtil.css(portletFootEl, 'margin-top')) - parseInt(KTUtil.css(portletFootEl, 'margin-bottom'));
        } // remove additional space


        height = height - 5;
        return height;
      }
    }); // messaging

    var handleMessaging = function handleMessaging() {
      var scrollEl = KTUtil.find(parentEl, '.kt-scroll');
      var messagesEl = KTUtil.find(parentEl, '.kt-chat__messages');
      var textarea = KTUtil.find(parentEl, '.kt-chat__input textarea');

      if (textarea.value.length === 0) {
        return;
      }

      var node = document.createElement("DIV");
      KTUtil.addClass(node, 'kt-chat__message kt-chat__message--brand kt-chat__message--right');
      var html = '<div class="kt-chat__user">' + '<span class="kt-chat__datetime">Just now</span>' + '<a href="#" class="kt-chat__username">Jason Muller</span></a>' + '<span class="kt-media kt-media--circle kt-media--sm">' + '<img src="./assets/media/users/100_12.jpg" alt="image">' + '</span>' + '</div>' + '<div class="kt-chat__text kt-bg-light-brand">' + textarea.value;
      '</div>';
      KTUtil.setHTML(node, html);
      messagesEl.appendChild(node);
      textarea.value = '';
      scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));
      var ps;

      if (ps = KTUtil.data(scrollEl).get('ps')) {
        ps.update();
      }

      setTimeout(function () {
        var node = document.createElement("DIV");
        KTUtil.addClass(node, 'kt-chat__message kt-chat__message--success');
        var html = '<div class="kt-chat__user">' + '<span class="kt-media kt-media--circle kt-media--sm">' + '<img src="./assets/media/users/100_13.jpg" alt="image">' + '</span>' + '<a href="#" class="kt-chat__username">Max Born</span></a>' + '<span class="kt-chat__datetime">Just now</span>' + '</div>' + '<div class="kt-chat__text kt-bg-light-success">' + 'Right before vacation season we have the next Big Deal for you. <br>Book the car of your dreams and save up to <b>25%*</b> worldwide.' + '</div>';
        KTUtil.setHTML(node, html);
        messagesEl.appendChild(node);
        textarea.value = '';
        scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));
        var ps;

        if (ps = KTUtil.data(scrollEl).get('ps')) {
          ps.update();
        }
      }, 2000);
    }; // attach events


    KTUtil.on(parentEl, '.kt-chat__input textarea', 'keydown', function (e) {
      if (e.keyCode == 13) {
        handleMessaging();
        e.preventDefault();
        return false;
      }
    });
    KTUtil.on(parentEl, '.kt-chat__input .kt-chat__reply', 'click', function (e) {
      handleMessaging();
    });
  };

  var _scrollBottom = function scrollBottom(parentEl) {
    var messageListEl = KTUtil.find(parentEl, '.kt-scroll');
    var messagesEl = KTUtil.find(parentEl, '.kt-chat__messages');

    if (!messageListEl) {
      return;
    }

    var scrollEl = KTUtil.find(parentEl, '.kt-scroll');
    scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));
    var ps;

    if (ps = KTUtil.data(scrollEl).get('ps')) {
      ps.update();
    }
  };

  return {
    // public functions
    init: function init() {
      // init modal chat example
      initChat(KTUtil.getByID('kt_chat_modal')); // trigger click to show popup modal chat on page load

      if (encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com') {
        setTimeout(function () {
          if (!Cookies.get('kt_app_chat_shown')) {
            var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

            Cookies.set('kt_app_chat_shown', 1, {
              expires: expires
            });
            KTUtil.getByID('kt_app_chat_launch_btn').click();
          }
        }, 2000);
      }
    },
    setup: function setup(element) {
      initChat(element);
    },
    scrollBottom: function scrollBottom(element) {
      _scrollBottom(element);
    }
  };
}(); // webpack support


if (true) {
  module.exports = KTChat;
}

KTUtil.ready(function () {
  KTChat.init();
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/layout/demo-panel.js":
/*!**********************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/layout/demo-panel.js ***!
  \**********************************************************************/
/***/ (() => {

"use strict";


var KTDemoPanel = function () {
  var demoPanel;
  var offcanvas;

  var _init = function init() {
    offcanvas = new KTOffcanvas(demoPanel, {
      overlay: true,
      baseClass: 'kt-demo-panel',
      closeBy: 'kt_demo_panel_close',
      toggleBy: 'kt_demo_panel_toggle'
    });
    var head = KTUtil.find(demoPanel, '.kt-demo-panel__head');
    var body = KTUtil.find(demoPanel, '.kt-demo-panel__body');
    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(demoPanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(demoPanel, 'paddingBottom'));
        return height;
      }
    });

    if (typeof offcanvas !== 'undefined' && offcanvas.length === 0) {
      offcanvas.on('hide', function () {
        var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

        Cookies.set('kt_demo_panel_shown', 1, {
          expires: expires
        });
      });
    }
  };

  var remind = function remind() {
    if (!(encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com')) {
      return;
    }

    setTimeout(function () {
      if (!Cookies.get('kt_demo_panel_shown')) {
        var expires = new Date(new Date().getTime() + 15 * 60 * 1000); // expire in 15 minutes from now

        Cookies.set('kt_demo_panel_shown', 1, {
          expires: expires
        });
        offcanvas.show();
      }
    }, 4000);
  };

  return {
    init: function init() {
      demoPanel = KTUtil.getByID('kt_demo_panel');

      _init();

      remind();
    }
  };
}();

$(document).ready(function () {
  KTDemoPanel.init();
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/layout/layout.js":
/*!******************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/layout/layout.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


var KTLayout = function () {
  var body;
  var header;
  var headerMenu;
  var headerMenuOffcanvas;
  var asideMenu;
  var asideMenuOffcanvas;
  var asideToggler;
  var asideSecondary;
  var asideSecondaryToggler;
  var scrollTop;
  var pageStickyPortlet; // Header

  var _initHeader = function initHeader() {
    var tmp;
    var headerEl = KTUtil.get('kt_header');
    var options = {
      offset: {},
      minimize: {
        /*
        desktop: {
            on: 'kt-header--minimize'
        },
        */
        desktop: false,
        mobile: false
      }
    };

    if (tmp = KTUtil.attr(headerEl, 'data-ktheader-minimize-offset')) {
      options.offset.desktop = tmp;
    }

    if (tmp = KTUtil.attr(headerEl, 'data-ktheader-minimize-mobile-offset')) {
      options.offset.mobile = tmp;
    }

    header = new KTHeader('kt_header', options);
  }; // Header Menu


  var initHeaderMenu = function initHeaderMenu() {
    // init aside left offcanvas
    headerMenuOffcanvas = new KTOffcanvas('kt_header_menu_wrapper', {
      overlay: true,
      baseClass: 'kt-header-menu-wrapper',
      closeBy: 'kt_header_menu_mobile_close_btn',
      toggleBy: {
        target: 'kt_header_mobile_toggler',
        state: 'kt-header-mobile__toolbar-toggler--active'
      }
    });
    headerMenu = new KTMenu('kt_header_menu', {
      submenu: {
        desktop: 'dropdown',
        tablet: 'accordion',
        mobile: 'accordion'
      },
      accordion: {
        slideSpeed: 200,
        // accordion toggle slide speed in milliseconds
        expandAll: false // allow having multiple expanded accordions in the menu

      }
    });
  }; // Header Topbar


  var initHeaderTopbar = function initHeaderTopbar() {
    asideToggler = new KTToggle('kt_header_mobile_topbar_toggler', {
      target: 'body',
      targetState: 'kt-header__topbar--mobile-on',
      togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
    });
  }; // Aside


  var _initAside = function initAside() {
    // init aside left offcanvas
    var asidBrandHover = false;
    var aside = KTUtil.get('kt_aside');
    var asideBrand = KTUtil.get('kt_aside_brand');
    var asideOffcanvasClass = KTUtil.hasClass(aside, 'kt-aside--offcanvas-default') ? 'kt-aside--offcanvas-default' : 'kt-aside';
    asideMenuOffcanvas = new KTOffcanvas('kt_aside', {
      baseClass: asideOffcanvasClass,
      overlay: true,
      closeBy: 'kt_aside_close_btn',
      toggleBy: {
        target: 'kt_aside_mobile_toggler',
        state: 'kt-header-mobile__toolbar-toggler--active'
      }
    }); // Handle minimzied aside hover

    if (KTUtil.hasClass(body, 'kt-aside--fixed')) {
      var insideTm;
      var outsideTm;
      KTUtil.addEvent(aside, 'mouseenter', function (e) {
        e.preventDefault();

        if (KTUtil.isInResponsiveRange('desktop') === false) {
          return;
        }

        if (outsideTm) {
          clearTimeout(outsideTm);
          outsideTm = null;
        }

        insideTm = setTimeout(function () {
          if (KTUtil.hasClass(body, 'kt-aside--minimize') && KTUtil.isInResponsiveRange('desktop')) {
            KTUtil.removeClass(body, 'kt-aside--minimize'); // Minimizing class

            KTUtil.addClass(body, 'kt-aside--minimizing');
            KTUtil.transitionEnd(body, function () {
              KTUtil.removeClass(body, 'kt-aside--minimizing');
            }); // Hover class

            KTUtil.addClass(body, 'kt-aside--minimize-hover');
            asideMenu.scrollUpdate();
            asideMenu.scrollTop();
          }
        }, 50);
      });
      KTUtil.addEvent(aside, 'mouseleave', function (e) {
        e.preventDefault();

        if (KTUtil.isInResponsiveRange('desktop') === false) {
          return;
        }

        if (insideTm) {
          clearTimeout(insideTm);
          insideTm = null;
        }

        outsideTm = setTimeout(function () {
          if (KTUtil.hasClass(body, 'kt-aside--minimize-hover') && KTUtil.isInResponsiveRange('desktop')) {
            KTUtil.removeClass(body, 'kt-aside--minimize-hover');
            KTUtil.addClass(body, 'kt-aside--minimize'); // Minimizing class

            KTUtil.addClass(body, 'kt-aside--minimizing');
            KTUtil.transitionEnd(body, function () {
              KTUtil.removeClass(body, 'kt-aside--minimizing');
            }); // Hover class

            asideMenu.scrollUpdate();
            asideMenu.scrollTop();
          }
        }, 100);
      });
    }
  }; // Aside menu


  var initAsideMenu = function initAsideMenu() {
    // Init aside menu
    var menu = KTUtil.get('kt_aside_menu');
    var menuDesktopMode = KTUtil.attr(menu, 'data-ktmenu-dropdown') === '1' ? 'dropdown' : 'accordion';
    var scroll;

    if (KTUtil.attr(menu, 'data-ktmenu-scroll') === '1') {
      scroll = {
        rememberPosition: true,
        // remember position on page reload
        height: function height() {
          // calculate available scrollable area height
          var height;

          if (KTUtil.isInResponsiveRange('desktop')) {
            height = parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.actualHeight('kt_aside_brand')) - parseInt(KTUtil.getByID('kt_aside_footer') ? KTUtil.actualHeight('kt_aside_footer') : 0);
          } else {
            height = parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.getByID('kt_aside_footer') ? KTUtil.actualHeight('kt_aside_footer') : 0);
          }

          height = height - (parseInt(KTUtil.css(menu, 'marginBottom')) + parseInt(KTUtil.css(menu, 'marginTop')));
          return height;
        }
      };
    }

    asideMenu = new KTMenu('kt_aside_menu', {
      // vertical scroll
      scroll: scroll,
      // submenu setup
      submenu: {
        desktop: menuDesktopMode,
        tablet: 'accordion',
        // menu set to accordion in tablet mode
        mobile: 'accordion' // menu set to accordion in mobile mode

      },
      //accordion setup
      accordion: {
        expandAll: false // allow having multiple expanded accordions in the menu

      }
    }); // sample set active menu

    if (typeof asideMenu.setActiveItem === "function") {
      asideMenu.setActiveItem($(".menu-item-is-active")[0]);
    }
  }; // Sidebar toggle


  var initAsideToggler = function initAsideToggler() {
    if (!KTUtil.get('kt_aside_toggler')) {
      return;
    }

    asideToggler = new KTToggle('kt_aside_toggler', {
      target: 'body',
      targetState: 'kt-aside--minimize',
      togglerState: 'kt-aside__brand-aside-toggler--active'
    });
    asideToggler.on('toggle', function (toggle) {
      KTUtil.addClass(body, 'kt-aside--minimizing');

      if (KTUtil.get('kt_page_portlet')) {
        pageStickyPortlet.updateSticky();
      }

      KTUtil.transitionEnd(body, function () {
        KTUtil.removeClass(body, 'kt-aside--minimizing');
      });
      headerMenu.pauseDropdownHover(800);
      asideMenu.pauseDropdownHover(800); // Remember state in cookie

      Cookies.set('kt_aside_toggle_state', toggle.getState()); // to set default minimized left aside use this cookie value in your
      // server side code and add "kt-brand--minimize kt-aside--minimize" classes to
      // the body tag in order to initialize the minimized left aside mode during page loading.
    });
    asideToggler.on('beforeToggle', function (toggle) {
      var body = KTUtil.get('body');

      if (KTUtil.hasClass(body, 'kt-aside--minimize') === false && KTUtil.hasClass(body, 'kt-aside--minimize-hover')) {
        KTUtil.removeClass(body, 'kt-aside--minimize-hover');
      }
    });
  }; // Aside secondary


  var _initAsideSecondary = function initAsideSecondary() {
    if (!KTUtil.get('kt_aside_secondary')) {
      return;
    }

    asideSecondaryToggler = new KTToggle('kt_aside_secondary_toggler', {
      target: 'body',
      targetState: 'kt-aside-secondary--expanded'
    });
    asideSecondaryToggler.on('toggle', function (toggle) {
      if (KTUtil.get('kt_page_portlet')) {
        pageStickyPortlet.updateSticky();
      }
    });
  }; // Scrolltop


  var initScrolltop = function initScrolltop() {
    var scrolltop = new KTScrolltop('kt_scrolltop', {
      offset: 300,
      speed: 600
    });
  }; // Init page sticky portlet


  var _initPageStickyPortlet = function initPageStickyPortlet() {
    return new KTPortlet('kt_page_portlet', {
      sticky: {
        offset: parseInt(KTUtil.css(KTUtil.get('kt_header'), 'height')),
        zIndex: 90,
        position: {
          top: function top() {
            var pos = 0;

            if (KTUtil.isInResponsiveRange('desktop')) {
              if (KTUtil.hasClass(body, 'kt-header--fixed')) {
                pos = pos + parseInt(KTUtil.css(KTUtil.get('kt_header'), 'height'));
              }

              if (KTUtil.hasClass(body, 'kt-subheader--fixed') && KTUtil.get('kt_subheader')) {
                pos = pos + parseInt(KTUtil.css(KTUtil.get('kt_subheader'), 'height'));
              }
            } else {
              if (KTUtil.hasClass(body, 'kt-header-mobile--fixed')) {
                pos = pos + parseInt(KTUtil.css(KTUtil.get('kt_header_mobile'), 'height'));
              }
            }

            return pos;
          },
          left: function left(portlet) {
            var porletEl = portlet.getSelf();
            return KTUtil.offset(porletEl).left;
          },
          right: function right(portlet) {
            var porletEl = portlet.getSelf();
            var portletWidth = parseInt(KTUtil.css(porletEl, 'width'));
            var bodyWidth = parseInt(KTUtil.css(KTUtil.get('body'), 'width'));
            var portletOffsetLeft = KTUtil.offset(porletEl).left;
            return bodyWidth - portletWidth - portletOffsetLeft;
          }
        }
      }
    });
  }; // Calculate content available full height


  var _getContentHeight = function getContentHeight() {
    var height;
    height = KTUtil.getViewPort().height;

    if (KTUtil.getByID('kt_header')) {
      height = height - KTUtil.actualHeight('kt_header');
    }

    if (KTUtil.getByID('kt_subheader')) {
      height = height - KTUtil.actualHeight('kt_subheader');
    }

    if (KTUtil.getByID('kt_footer')) {
      height = height - parseInt(KTUtil.css('kt_footer', 'height'));
    }

    if (KTUtil.getByID('kt_content')) {
      height = height - parseInt(KTUtil.css('kt_content', 'padding-top')) - parseInt(KTUtil.css('kt_content', 'padding-bottom'));
    }

    return height;
  };

  return {
    init: function init() {
      body = KTUtil.get('body');
      this.initHeader();
      this.initAside();
      this.initAsideSecondary();
      this.initPageStickyPortlet(); // Non functional links notice(can be removed in production)

      $('#kt_aside_menu, #kt_header_menu').on('click', '.kt-menu__link[href="#"]', function (e) {
        swal.fire("", "You have clicked on a non-functional dummy link!");
        e.preventDefault();
      });
    },
    initHeader: function initHeader() {
      _initHeader();

      initHeaderMenu();
      initHeaderTopbar();
      initScrolltop();
    },
    initAside: function initAside() {
      _initAside();

      initAsideMenu();
      initAsideToggler();
      this.onAsideToggle(function (e) {
        // Update sticky portlet
        if (pageStickyPortlet) {
          pageStickyPortlet.updateSticky();
        } // Reload datatable


        var datatables = $('.kt-datatable');

        if (datatables) {
          datatables.each(function () {
            $(this).KTDatatable('redraw');
          });
        }
      });
    },
    initAsideSecondary: function initAsideSecondary() {
      _initAsideSecondary();
    },
    initPageStickyPortlet: function initPageStickyPortlet() {
      if (!KTUtil.get('kt_page_portlet')) {
        return;
      }

      pageStickyPortlet = _initPageStickyPortlet();
      pageStickyPortlet.initSticky();
      KTUtil.addResizeHandler(function () {
        pageStickyPortlet.updateSticky();
      });

      _initPageStickyPortlet();
    },
    getAsideMenu: function getAsideMenu() {
      return asideMenu;
    },
    onAsideToggle: function onAsideToggle(handler) {
      if (typeof asideToggler.element !== 'undefined') {
        asideToggler.on('toggle', handler);
      }
    },
    getAsideToggler: function getAsideToggler() {
      return asideToggler;
    },
    openAsideSecondary: function openAsideSecondary() {
      asideSecondaryToggler.toggleOn();
    },
    closeAsideSecondary: function closeAsideSecondary() {
      asideSecondaryToggler.toggleOff();
    },
    getAsideSecondaryToggler: function getAsideSecondaryToggler() {
      return asideSecondaryToggler;
    },
    onAsideSecondaryToggle: function onAsideSecondaryToggle(handler) {
      if (asideSecondaryToggler) {
        asideSecondaryToggler.on('toggle', handler);
      }
    },
    closeMobileAsideMenuOffcanvas: function closeMobileAsideMenuOffcanvas() {
      if (KTUtil.isMobileDevice()) {
        asideMenuOffcanvas.hide();
      }
    },
    closeMobileHeaderMenuOffcanvas: function closeMobileHeaderMenuOffcanvas() {
      if (KTUtil.isMobileDevice()) {
        headerMenuOffcanvas.hide();
      }
    },
    getContentHeight: function getContentHeight() {
      return _getContentHeight();
    }
  };
}(); // webpack support


if (true) {
  module.exports = KTLayout;
}

KTUtil.ready(function () {
  KTLayout.init();
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/layout/offcanvas-panel.js":
/*!***************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/layout/offcanvas-panel.js ***!
  \***************************************************************************/
/***/ (() => {

"use strict";


var KTOffcanvasPanel = function () {
  var notificationPanel;
  var quickActionsPanel;
  var profilePanel;
  var searchPanel;

  var initNotifications = function initNotifications() {
    var head = KTUtil.find(notificationPanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(notificationPanel, '.kt-offcanvas-panel__body');
    var offcanvas = new KTOffcanvas(notificationPanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_notifications_close',
      toggleBy: 'kt_offcanvas_toolbar_notifications_toggler_btn'
    });
    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(notificationPanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(notificationPanel, 'paddingBottom'));
        return height;
      }
    });
  };

  var initQucikActions = function initQucikActions() {
    var head = KTUtil.find(quickActionsPanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(quickActionsPanel, '.kt-offcanvas-panel__body');
    var offcanvas = new KTOffcanvas(quickActionsPanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_quick_actions_close',
      toggleBy: 'kt_offcanvas_toolbar_quick_actions_toggler_btn'
    });
    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(quickActionsPanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(quickActionsPanel, 'paddingBottom'));
        return height;
      }
    });
  };

  var initProfile = function initProfile() {
    var head = KTUtil.find(profilePanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(profilePanel, '.kt-offcanvas-panel__body');
    var offcanvas = new KTOffcanvas(profilePanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_profile_close',
      toggleBy: 'kt_offcanvas_toolbar_profile_toggler_btn'
    });
    KTUtil.scrollInit(body, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(profilePanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(profilePanel, 'paddingBottom'));
        return height;
      }
    });
  };

  var initSearch = function initSearch() {
    var head = KTUtil.find(searchPanel, '.kt-offcanvas-panel__head');
    var body = KTUtil.find(searchPanel, '.kt-offcanvas-panel__body');
    var search = KTUtil.get('kt_quick_search_offcanvas');
    var form = KTUtil.find(search, '.kt-quick-search__form');
    var wrapper = KTUtil.find(search, '.kt-quick-search__wrapper');
    var offcanvas = new KTOffcanvas(searchPanel, {
      overlay: true,
      baseClass: 'kt-offcanvas-panel',
      closeBy: 'kt_offcanvas_toolbar_search_close',
      toggleBy: 'kt_offcanvas_toolbar_search_toggler_btn'
    });
    KTUtil.scrollInit(wrapper, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        var height = parseInt(KTUtil.getViewPort().height);
        height = height - parseInt(KTUtil.actualHeight(form));
        height = height - parseInt(KTUtil.css(form, 'marginBottom'));

        if (head) {
          height = height - parseInt(KTUtil.actualHeight(head));
          height = height - parseInt(KTUtil.css(head, 'marginBottom'));
        }

        height = height - parseInt(KTUtil.css(searchPanel, 'paddingTop'));
        height = height - parseInt(KTUtil.css(searchPanel, 'paddingBottom'));
        return height;
      }
    });
  };

  return {
    init: function init() {
      notificationPanel = KTUtil.get('kt_offcanvas_toolbar_notifications');
      quickActionsPanel = KTUtil.get('kt_offcanvas_toolbar_quick_actions');
      profilePanel = KTUtil.get('kt_offcanvas_toolbar_profile');
      searchPanel = KTUtil.get('kt_offcanvas_toolbar_search');
      initNotifications();
      initQucikActions();
      initProfile();
      initSearch();
    }
  };
}(); // Init on page load completed


KTUtil.ready(function () {
  KTOffcanvasPanel.init();
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/layout/quick-panel.js":
/*!***********************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/layout/quick-panel.js ***!
  \***********************************************************************/
/***/ (() => {

"use strict";


var KTQuickPanel = function () {
  var panel;
  var notificationPanel;
  var logsPanel;
  var settingsPanel;

  var getContentHeight = function getContentHeight() {
    var height;
    var nav = KTUtil.find(panel, '.kt-quick-panel__nav');
    var content = KTUtil.find(panel, '.kt-quick-panel__content');
    height = parseInt(KTUtil.getViewPort().height) - parseInt(KTUtil.actualHeight(nav)) - 2 * parseInt(KTUtil.css(nav, 'padding-top')) - 10;
    return height;
  };

  var initOffcanvas = function initOffcanvas() {
    new KTOffcanvas(panel, {
      overlay: true,
      baseClass: 'kt-quick-panel',
      closeBy: 'kt_quick_panel_close_btn',
      toggleBy: 'kt_quick_panel_toggler_btn'
    });
  };

  var initNotifications = function initNotifications() {
    KTUtil.scrollInit(notificationPanel, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return getContentHeight();
      }
    });
  };

  var initLogs = function initLogs() {
    KTUtil.scrollInit(logsPanel, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return getContentHeight();
      }
    });
  };

  var initSettings = function initSettings() {
    KTUtil.scrollInit(settingsPanel, {
      mobileNativeScroll: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height: function height() {
        return getContentHeight();
      }
    });
  };

  var updatePerfectScrollbars = function updatePerfectScrollbars() {
    $(panel).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      KTUtil.scrollUpdate(notificationPanel);
      KTUtil.scrollUpdate(logsPanel);
      KTUtil.scrollUpdate(settingsPanel);
    });
  };

  return {
    init: function init() {
      panel = KTUtil.get('kt_quick_panel');
      notificationPanel = KTUtil.get('kt_quick_panel_tab_notifications');
      logsPanel = KTUtil.get('kt_quick_panel_tab_logs');
      settingsPanel = KTUtil.get('kt_quick_panel_tab_settings');
      initOffcanvas();
      initNotifications();
      initLogs();
      initSettings();
      updatePerfectScrollbars();
    }
  };
}();

$(document).ready(function () {
  KTQuickPanel.init();
});

/***/ }),

/***/ "./resources/metronic/src/assets/js/global/layout/quick-search.js":
/*!************************************************************************!*\
  !*** ./resources/metronic/src/assets/js/global/layout/quick-search.js ***!
  \************************************************************************/
/***/ (() => {

"use strict";


var KTQuickSearch = function KTQuickSearch() {
  var target;
  var form;
  var input;
  var closeIcon;
  var resultWrapper;
  var resultDropdown;
  var resultDropdownToggle;
  var inputGroup;
  var query = '';
  var hasResult = false;
  var timeout = false;
  var isProcessing = false;
  var requestTimeout = 200; // ajax request fire timeout in milliseconds

  var spinnerClass = 'kt-spinner kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right';
  var resultClass = 'kt-quick-search--has-result';
  var minLength = 2;

  var showProgress = function showProgress() {
    isProcessing = true;
    KTUtil.addClass(inputGroup, spinnerClass);

    if (closeIcon) {
      KTUtil.hide(closeIcon);
    }
  };

  var hideProgress = function hideProgress() {
    isProcessing = false;
    KTUtil.removeClass(inputGroup, spinnerClass);

    if (closeIcon) {
      if (input.value.length < minLength) {
        KTUtil.hide(closeIcon);
      } else {
        KTUtil.show(closeIcon, 'flex');
      }
    }
  };

  var showDropdown = function showDropdown() {
    if (resultDropdownToggle && !KTUtil.hasClass(resultDropdown, 'show')) {
      $(resultDropdownToggle).dropdown('toggle');
      $(resultDropdownToggle).dropdown('update');
    }
  };

  var hideDropdown = function hideDropdown() {
    if (resultDropdownToggle && KTUtil.hasClass(resultDropdown, 'show')) {
      $(resultDropdownToggle).dropdown('toggle');
    }
  };

  var processSearch = function processSearch() {
    if (hasResult && query === input.value) {
      hideProgress();
      KTUtil.addClass(target, resultClass);
      showDropdown();
      KTUtil.scrollUpdate(resultWrapper);
      return;
    }

    query = input.value;
    KTUtil.removeClass(target, resultClass);
    showProgress();
    hideDropdown();
    setTimeout(function () {
      $.ajax({
        url: 'https://keenthemes.com/metronic/tools/preview/api/quick_search.php',
        data: {
          query: query
        },
        dataType: 'html',
        success: function success(res) {
          hasResult = true;
          hideProgress();
          KTUtil.addClass(target, resultClass);
          KTUtil.setHTML(resultWrapper, res);
          showDropdown();
          KTUtil.scrollUpdate(resultWrapper);
        },
        error: function error(res) {
          hasResult = false;
          hideProgress();
          KTUtil.addClass(target, resultClass);
          KTUtil.setHTML(resultWrapper, '<span class="kt-quick-search__message">Connection error. Pleae try again later.</div>');
          showDropdown();
          KTUtil.scrollUpdate(resultWrapper);
        }
      });
    }, 1000);
  };

  var handleCancel = function handleCancel(e) {
    input.value = '';
    query = '';
    hasResult = false;
    KTUtil.hide(closeIcon);
    KTUtil.removeClass(target, resultClass);
    hideDropdown();
  };

  var handleSearch = function handleSearch() {
    if (input.value.length < minLength) {
      hideProgress();
      hideDropdown();
      return;
    }

    if (isProcessing == true) {
      return;
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      processSearch();
    }, requestTimeout);
  };

  return {
    init: function init(element) {
      // Init
      target = element;
      form = KTUtil.find(target, '.kt-quick-search__form');
      input = KTUtil.find(target, '.kt-quick-search__input');
      closeIcon = KTUtil.find(target, '.kt-quick-search__close');
      resultWrapper = KTUtil.find(target, '.kt-quick-search__wrapper');
      resultDropdown = KTUtil.find(target, '.dropdown-menu');
      resultDropdownToggle = KTUtil.find(target, '[data-toggle="dropdown"]');
      inputGroup = KTUtil.find(target, '.input-group'); // Attach input keyup handler

      KTUtil.addEvent(input, 'keyup', handleSearch);
      KTUtil.addEvent(input, 'focus', handleSearch); // Prevent enter click

      form.onkeypress = function (e) {
        var key = e.charCode || e.keyCode || 0;

        if (key == 13) {
          e.preventDefault();
        }
      };

      KTUtil.addEvent(closeIcon, 'click', handleCancel);
    }
  };
};

var KTQuickSearchInline = KTQuickSearch;
var KTQuickSearchOffcanvas = KTQuickSearch; // Init on page load completed

KTUtil.ready(function () {
  if (KTUtil.get('kt_quick_search_dropdown')) {
    KTQuickSearch().init(KTUtil.get('kt_quick_search_dropdown'));
  }

  if (KTUtil.get('kt_quick_search_inline')) {
    KTQuickSearchInline().init(KTUtil.get('kt_quick_search_inline'));
  }

  if (KTUtil.get('kt_quick_search_offcanvas')) {
    KTQuickSearchOffcanvas().init(KTUtil.get('kt_quick_search_offcanvas'));
  }
});

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js":
/*!******************************************************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js ***!
  \******************************************************************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

+function (a) {
  "use strict";

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("multiselectsplitter"),
          f = "object" == _typeof(c) && c;
      (e || "destroy" != c) && (e || d.data("multiselectsplitter", e = new b(this, f)), "string" == typeof c && e[c]());
    });
  }

  var b = function b(a, _b) {
    this.init("multiselectsplitter", a, _b);
  };

  b.DEFAULTS = {
    selectSize: null,
    maxSelectSize: null,
    clearOnFirstChange: !1,
    onlySameGroup: !1,
    groupCounter: !1,
    maximumSelected: null,
    afterInitialize: null,
    maximumAlert: function maximumAlert(a) {
      alert("Only " + a + " values can be selected");
    },
    createFirstSelect: function createFirstSelect(a, b) {
      return "<option>" + a + "</option>";
    },
    createSecondSelect: function createSecondSelect(a, b) {
      return "<option>" + a + "</option>";
    },
    template: '<div class="row" data-multiselectsplitter-wrapper-selector><div class="col-xs-6 col-sm-6"><select class="form-control" data-multiselectsplitter-firstselect-selector></select></div> <!-- Add the extra clearfix for only the required viewport --><div class="col-xs-6 col-sm-6"><select class="form-control" data-multiselectsplitter-secondselect-selector></select></div></div>'
  }, b.prototype.init = function (c, d, e) {
    var f = this;
    f.type = c, f.last$ElementSelected = [], f.initialized = !1, f.$element = a(d), f.$element.hide(), f.options = a.extend({}, b.DEFAULTS, e), f.$element.after(f.options.template), f.$wrapper = f.$element.next("div[data-multiselectsplitter-wrapper-selector]"), f.$firstSelect = a("select[data-multiselectsplitter-firstselect-selector]", f.$wrapper), f.$secondSelect = a("select[data-multiselectsplitter-secondselect-selector]", f.$wrapper);
    var g = 0,
        h = 0;

    if (0 != f.$element.find("optgroup").length) {
      f.$element.find("optgroup").each(function () {
        var b = a(this).attr("label"),
            c = a(f.options.createFirstSelect(b, f.$element));
        c.val(b), c.attr("data-current-label", c.text()), f.$firstSelect.append(c);
        var d = a(this).find("option").length;
        d > h && (h = d), g++;
      });
      var i = Math.max(g, h);
      i = Math.min(i, 10), f.options.selectSize ? i = f.options.selectSize : f.options.maxSelectSize && (i = Math.min(i, f.options.maxSelectSize)), f.$firstSelect.attr("size", i), f.$secondSelect.attr("size", i), f.$element.attr("multiple") && f.$secondSelect.attr("multiple", "multiple"), f.$element.is(":disabled") && f.disable(), f.$firstSelect.on("change", a.proxy(f.updateParentCategory, f)), f.$secondSelect.on("click change", a.proxy(f.updateChildCategory, f)), f.update = function () {
        if (!(f.$element.find("option").length < 1)) {
          var b,
              a = f.$element.find("option:selected:first");
          b = a.length ? a.parent().attr("label") : f.$element.find("option:first").parent().attr("label"), f.$firstSelect.find('option[value="' + b + '"]').prop("selected", !0), f.$firstSelect.trigger("change");
        }
      }, f.update(), f.initialized = !0, f.options.afterInitialize && f.options.afterInitialize(f.$firstSelect, f.$secondSelect);
    }
  }, b.prototype.disable = function () {
    this.$secondSelect.prop("disabled", !0), this.$firstSelect.prop("disabled", !0);
  }, b.prototype.enable = function () {
    this.$secondSelect.prop("disabled", !1), this.$firstSelect.prop("disabled", !1);
  }, b.prototype.createSecondSelect = function () {
    var b = this;
    b.$secondSelect.empty(), a.each(b.$element.find('optgroup[label="' + b.$firstSelect.val() + '"] option'), function (c, d) {
      var e = a(this).val(),
          f = a(this).text(),
          g = a(b.options.createSecondSelect(f, b.$firstSelect));
      g.val(e), a.each(b.$element.find("option:selected"), function (b, c) {
        a(c).val() == e && g.prop("selected", !0);
      }), b.$secondSelect.append(g);
    });
  }, b.prototype.updateParentCategory = function () {
    var a = this;
    a.last$ElementSelected = a.$element.find("option:selected"), a.options.clearOnFirstChange && a.initialized && a.$element.find("option:selected").prop("selected", !1), a.createSecondSelect(), a.checkSelected(), a.updateCounter();
  }, b.prototype.updateCounter = function () {
    var b = this;
    b.$element.attr("multiple") && b.options.groupCounter && a.each(b.$firstSelect.find("option"), function (c, d) {
      var e = a(d).val(),
          f = a(d).data("currentLabel"),
          g = b.$element.find('optgroup[label="' + e + '"] option:selected').length;
      g > 0 && (f += " (" + g + ")"), a(d).html(f);
    });
  }, b.prototype.checkSelected = function () {
    var b = this;

    if (b.$element.attr("multiple") && b.options.maximumSelected) {
      var c = 0;

      if (c = "function" == typeof b.options.maximumSelected ? b.options.maximumSelected(b.$firstSelect, b.$secondSelect) : b.options.maximumSelected, !(c < 1)) {
        var d = b.$element.find("option:selected");

        if (d.length > c) {
          b.$firstSelect.find("option:selected").prop("selected", !1), b.$secondSelect.find("option:selected").prop("selected", !1), b.initialized ? (b.$element.find("option:selected").prop("selected", !1), b.last$ElementSelected.prop("selected", !0)) : a.each(b.$element.find("option:selected"), function (b, d) {
            b > c - 1 && a(d).prop("selected", !1);
          });
          var e = b.last$ElementSelected.first().parent().attr("label");
          b.$firstSelect.find('option[value="' + e + '"]').prop("selected", !0), b.createSecondSelect(), b.options.maximumAlert(c);
        }
      }
    }
  }, b.prototype.basicUpdateChildCategory = function (b, c) {
    var d = this;
    d.last$ElementSelected = d.$element.find("option:selected");
    var e = d.$secondSelect.val();
    a.isArray(e) || (e = [e]);
    var f = d.$firstSelect.val(),
        g = !1;
    d.$element.attr("multiple") ? d.options.onlySameGroup ? a.each(d.$element.find("option:selected"), function (b, c) {
      if (a(c).parent().attr("label") != f) return g = !0, !1;
    }) : c || (g = !0) : g = !0, g ? d.$element.find("option:selected").prop("selected", !1) : a.each(d.$element.find("option:selected"), function (b, c) {
      f == a(c).parent().attr("label") && a.inArray(a(c).val(), e) == -1 && a(c).prop("selected", !1);
    }), a.each(e, function (a, b) {
      d.$element.find('option[value="' + b + '"]').prop("selected", !0);
    }), d.checkSelected(), d.updateCounter(), d.$element.trigger("change");
  }, b.prototype.updateChildCategory = function (b) {
    "change" == b.type ? this.timeOut = setTimeout(a.proxy(function () {
      this.basicUpdateChildCategory(b, b.ctrlKey);
    }, this), 10) : "click" == b.type && (clearTimeout(this.timeOut), this.basicUpdateChildCategory(b, b.ctrlKey));
  }, b.prototype.destroy = function () {
    this.$wrapper.remove(), this.$element.removeData(this.type), this.$element.show();
  }, a.fn.multiselectsplitter = c, a.fn.multiselectsplitter.Constructor = b, a.fn.multiselectsplitter.VERSION = "1.0.1";
}(jQuery);

/***/ }),

/***/ "./resources/metronic/tools/webpack/scripts.js":
/*!*****************************************************!*\
  !*** ./resources/metronic/tools/webpack/scripts.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Define the output of this file. The output of CSS and JS file will be auto detected.
 *
 * @output js/scripts.bundle
 */
// Core Plugins

window.KTUtil = __webpack_require__(/*! ../../src/assets/js/global/components/base/util */ "./resources/metronic/src/assets/js/global/components/base/util.js");
window.KTApp = __webpack_require__(/*! ../../src/assets/js/global/components/base/app */ "./resources/metronic/src/assets/js/global/components/base/app.js");
window.KTAvatar = __webpack_require__(/*! ../../src/assets/js/global/components/base/avatar */ "./resources/metronic/src/assets/js/global/components/base/avatar.js");
window.KTDialog = __webpack_require__(/*! ../../src/assets/js/global/components/base/dialog */ "./resources/metronic/src/assets/js/global/components/base/dialog.js");
window.KTHeader = __webpack_require__(/*! ../../src/assets/js/global/components/base/header */ "./resources/metronic/src/assets/js/global/components/base/header.js");
window.KTMenu = __webpack_require__(/*! ../../src/assets/js/global/components/base/menu */ "./resources/metronic/src/assets/js/global/components/base/menu.js");
window.KTOffcanvas = __webpack_require__(/*! ../../src/assets/js/global/components/base/offcanvas */ "./resources/metronic/src/assets/js/global/components/base/offcanvas.js");
window.KTPortlet = __webpack_require__(/*! ../../src/assets/js/global/components/base/portlet */ "./resources/metronic/src/assets/js/global/components/base/portlet.js");
window.KTScrolltop = __webpack_require__(/*! ../../src/assets/js/global/components/base/scrolltop */ "./resources/metronic/src/assets/js/global/components/base/scrolltop.js");
window.KTToggle = __webpack_require__(/*! ../../src/assets/js/global/components/base/toggle */ "./resources/metronic/src/assets/js/global/components/base/toggle.js");
window.KTWizard = __webpack_require__(/*! ../../src/assets/js/global/components/base/wizard */ "./resources/metronic/src/assets/js/global/components/base/wizard.js"); // require("../../src/assets/js/global/components/base/datatable/core.datatable");
// require("../../src/assets/js/global/components/base/datatable/datatable.checkbox");
// require("../../src/assets/js/global/components/base/datatable/datatable.rtl");
// Layout Scripts

window.KTLayout = __webpack_require__(/*! ../../src/assets/js/global/layout/layout */ "./resources/metronic/src/assets/js/global/layout/layout.js");
window.KTChat = __webpack_require__(/*! ../../src/assets/js/global/layout/chat */ "./resources/metronic/src/assets/js/global/layout/chat.js");

__webpack_require__(/*! ../../src/assets/js/global/layout/demo-panel */ "./resources/metronic/src/assets/js/global/layout/demo-panel.js");

__webpack_require__(/*! ../../src/assets/js/global/layout/offcanvas-panel */ "./resources/metronic/src/assets/js/global/layout/offcanvas-panel.js");

__webpack_require__(/*! ../../src/assets/js/global/layout/quick-panel */ "./resources/metronic/src/assets/js/global/layout/quick-panel.js");

__webpack_require__(/*! ../../src/assets/js/global/layout/quick-search */ "./resources/metronic/src/assets/js/global/layout/quick-search.js");

/***/ }),

/***/ "./resources/metronic/tools/webpack/vendors/global.js":
/*!************************************************************!*\
  !*** ./resources/metronic/tools/webpack/vendors/global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tooltip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tooltip.js */ "./node_modules/tooltip.js/dist/esm/tooltip.js");
/* harmony import */ var sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dual_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dual-listbox */ "./node_modules/dual-listbox/dist/dual-listbox.js");
/* harmony import */ var dual_listbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dual_listbox__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Define the output of this file. The output of CSS and JS file will be auto detected.
 *
 * @output plugins/global/plugins.bundle
 */
//** Begin: Global mandatory plugins

window.jQuery = window.$ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // require("morris.js");


__webpack_require__(/*! block-ui */ "./node_modules/block-ui/jquery.blockUI.js");

__webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");

__webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");

window.moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
window.Sticky = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js"); // window.Chart = require("chart.js");
// window.Raphael = require("raphael");

window.Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! jquery-form */ "./node_modules/jquery-form/dist/jquery.form.min.js"); // Toastr


__webpack_require__(/*! toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");

window.toastr = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js"); // Tooltips


window.Tooltip = tooltip_js__WEBPACK_IMPORTED_MODULE_0__["default"]; // Perfect-Scrollbar

__webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");

window.PerfectScrollbar = __webpack_require__(/*! perfect-scrollbar/dist/perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.js"); //** End: Globally mandatory plugins
//** Begin: Global optional plugins
// Owl.Carousel

__webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");

__webpack_require__(/*! owl.carousel/dist/assets/owl.theme.default.css */ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css");

__webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js"); // Daterangepicker
// require("bootstrap-daterangepicker/daterangepicker.css");
// require("bootstrap-daterangepicker");
// Bootstrap-Select


__webpack_require__(/*! bootstrap-select/dist/css/bootstrap-select.css */ "./node_modules/bootstrap-select/dist/css/bootstrap-select.css");

__webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js"); // Bootstrap-Session-Timeout
// require("../../../src/assets/plugins/bootstrap-session-timeout/dist/bootstrap-session-timeout.js");
// jQuery-Idletimer
// require("../../../src/assets/plugins/jquery-idletimer/idle-timer.js");
// Bootstrap-Switch


__webpack_require__(/*! bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css */ "./node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css");

__webpack_require__(/*! bootstrap-switch */ "./node_modules/bootstrap-switch/dist/js/bootstrap-switch.js");

__webpack_require__(/*! ../../../src/assets/js/global/integration/plugins/bootstrap-switch.init.js */ "./resources/metronic/src/assets/js/global/integration/plugins/bootstrap-switch.init.js"); // Sweetalert2


__webpack_require__(/*! sweetalert2/dist/sweetalert2.css */ "./node_modules/sweetalert2/dist/sweetalert2.css");


window.swal = (sweetalert2_dist_sweetalert2__WEBPACK_IMPORTED_MODULE_1___default());

__webpack_require__(/*! es6-promise-polyfill/promise.min.js */ "./node_modules/es6-promise-polyfill/promise.min.js");

__webpack_require__(/*! ../../../src/assets/js/global/integration/plugins/sweetalert2.init */ "./resources/metronic/src/assets/js/global/integration/plugins/sweetalert2.init.js"); // Bootstrap-Notify


__webpack_require__(/*! bootstrap-notify */ "./node_modules/bootstrap-notify/bootstrap-notify.js");

__webpack_require__(/*! ../../../src/assets/js/global/integration/plugins/bootstrap-notify.init.js */ "./resources/metronic/src/assets/js/global/integration/plugins/bootstrap-notify.init.js"); // Bootstrap-Datepicker
// require("bootstrap-datepicker/dist/css/bootstrap-datepicker3.css");
// require("bootstrap-datepicker");
// require("bootstrap-datepicker/js/locales/bootstrap-datepicker.fr.js");
// require("../../../src/assets/js/global/integration/plugins/bootstrap-datepicker.init");
// Bootstrap-Datetimepicker
// require("bootstrap-datetime-picker/css/bootstrap-datetimepicker.css");
// require("bootstrap-datetime-picker");
// require("bootstrap-datetime-picker/js/locales/bootstrap-datetimepicker.fr.js");
// Select2


__webpack_require__(/*! select2/dist/css/select2.css */ "./node_modules/select2/dist/css/select2.css");

__webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js"); // Bootstrap-Timepicker
// require("bootstrap-timepicker/css/bootstrap-timepicker.css");
// require("bootstrap-timepicker");
// require("../../../src/assets/js/global/integration/plugins/bootstrap-timepicker.init");
// Tagify


__webpack_require__(/*! @yaireo/tagify/dist/tagify.css */ "./node_modules/@yaireo/tagify/dist/tagify.css");

window.Tagify = __webpack_require__(/*! @yaireo/tagify/dist/tagify.min.js */ "./node_modules/@yaireo/tagify/dist/tagify.min.js");

__webpack_require__(/*! @yaireo/tagify/dist/tagify.polyfills.min.js */ "./node_modules/@yaireo/tagify/dist/tagify.polyfills.min.js"); // Typeahead


window.Bloodhound = __webpack_require__(/*! corejs-typeahead */ "./node_modules/corejs-typeahead/dist/typeahead.bundle.js");
window.Handlebars = __webpack_require__(/*! handlebars/dist/handlebars.js */ "./node_modules/handlebars/dist/handlebars.js"); // Dropzone
// require("dropzone/dist/dropzone.css");
// window.Dropzone = require("dropzone");
// require("../../../src/assets/js/global/integration/plugins/dropzone.init");
// ClipboardJS

window.ClipboardJS = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js"); // Autosize

window.autosize = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js"); // Quill
// require("quill/dist/quill.snow.css");
// window.Quill = require("quill");
// Inputmask
// require("inputmask/dist/jquery.inputmask");
// iOn-Rangeslider
// require("ion-rangeslider/css/ion.rangeSlider.css");
// require("ion-rangeslider");
// jQuery.Repeater

__webpack_require__(/*! jquery.repeater */ "./node_modules/jquery.repeater/jquery.repeater.js"); // noUISlider


__webpack_require__(/*! nouislider/distribute/nouislider.css */ "./node_modules/nouislider/distribute/nouislider.css");

window.noUiSlider = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js"); // Wnumb
// window.wNumb = require("wnumb");
// jQuery-Validation

__webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");

__webpack_require__(/*! jquery-validation/dist/additional-methods.js */ "./node_modules/jquery-validation/dist/additional-methods.js");

__webpack_require__(/*! ../../../src/assets/js/global/integration/plugins/jquery-validation.init */ "./resources/metronic/src/assets/js/global/integration/plugins/jquery-validation.init.js"); // Bootstrap-Multiselectsplitter


__webpack_require__(/*! ../../../src/assets/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js */ "./resources/metronic/src/assets/plugins/bootstrap-multiselectsplitter/bootstrap-multiselectsplitter.min.js"); // Bootstrap-Maxlength


__webpack_require__(/*! bootstrap-maxlength */ "./node_modules/bootstrap-maxlength/dist/bootstrap-maxlength.js"); // Bootstrap-Touchspin


__webpack_require__(/*! bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css */ "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css");

__webpack_require__(/*! bootstrap-touchspin */ "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js"); // Bootstrap-Markdown
// require("bootstrap-markdown/css/bootstrap-markdown.min.css");
// require("bootstrap-markdown/js/bootstrap-markdown");
// require("../../../src/assets/js/global/integration/plugins/bootstrap-markdown.init");
// Animate.css


__webpack_require__(/*! animate.css/animate.css */ "./node_modules/animate.css/animate.css"); // Dual-listbox



window.DualListbox = (dual_listbox__WEBPACK_IMPORTED_MODULE_2___default());

__webpack_require__(/*! dual-listbox/dist/dual-listbox.css */ "./node_modules/dual-listbox/dist/dual-listbox.css"); // Cropper.js
// window.Cropper = require("cropperjs");
// require("cropperjs/dist/cropper.css");
// Flatpickr


__webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");

__webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css"); // Lightbox2


__webpack_require__(/*! lightbox2 */ "./node_modules/lightbox2/dist/js/lightbox.js");

__webpack_require__(/*! lightbox2/dist/css/lightbox.css */ "./node_modules/lightbox2/dist/css/lightbox.css"); // Font Icons


__webpack_require__(/*! ../../../src/assets/plugins/line-awesome/css/line-awesome.css */ "./resources/metronic/src/assets/plugins/line-awesome/css/line-awesome.css");

__webpack_require__(/*! ../../../src/assets/plugins/flaticon/flaticon.css */ "./resources/metronic/src/assets/plugins/flaticon/flaticon.css");

__webpack_require__(/*! ../../../src/assets/plugins/flaticon2/flaticon.css */ "./resources/metronic/src/assets/plugins/flaticon2/flaticon.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! socicon */ "./node_modules/socicon/css/socicon.css"); //** End: Global optional plugins

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/flaticon/flaticon.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/flaticon/flaticon.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_Flaticon_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font/Flaticon.eot */ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.eot");
/* harmony import */ var _font_Flaticon_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font/Flaticon.woff */ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.woff");
/* harmony import */ var _font_Flaticon_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font/Flaticon.ttf */ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.ttf");
/* harmony import */ var _font_Flaticon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./font/Flaticon.svg */ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.svg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon_eot__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon_eot__WEBPACK_IMPORTED_MODULE_2__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon_woff__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon_ttf__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon_svg__WEBPACK_IMPORTED_MODULE_5__["default"], { hash: "#Flaticon" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "  /*\n    Flaticon icon font: Flaticon\n    Creation date: 20/03/2017 20:02\n    */\n\n@font-face {\n  font-family: \"Flaticon\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: \"Flaticon\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  }\n}\n\n[class^=\"flaticon-\"]:before, \n[class*=\" flaticon-\"]:before {\n    font-family: Flaticon;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    line-height: 1;\n    text-decoration: inherit;\n    text-rendering: optimizeLegibility;\n    text-transform: none;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n}  \n\n.flaticon-email-black-circular-button:before { content: \"\\f100\"; }\n.flaticon-map:before { content: \"\\f101\"; }\n.flaticon-alert-off:before { content: \"\\f102\"; }\n.flaticon-alert:before { content: \"\\f103\"; }\n.flaticon-computer:before { content: \"\\f104\"; }\n.flaticon-responsive:before { content: \"\\f105\"; }\n.flaticon-presentation:before { content: \"\\f106\"; }\n.flaticon-arrows:before { content: \"\\f107\"; }\n.flaticon-rocket:before { content: \"\\f108\"; }\n.flaticon-reply:before { content: \"\\f109\"; }\n.flaticon-gift:before { content: \"\\f10a\"; }\n.flaticon-confetti:before { content: \"\\f10b\"; }\n.flaticon-piggy-bank:before { content: \"\\f10c\"; }\n.flaticon-support:before { content: \"\\f10d\"; }\n.flaticon-delete:before { content: \"\\f10e\"; }\n.flaticon-eye:before { content: \"\\f10f\"; }\n.flaticon-multimedia:before { content: \"\\f110\"; }\n.flaticon-whatsapp:before { content: \"\\f111\"; }\n.flaticon-multimedia-2:before { content: \"\\f112\"; }\n.flaticon-email:before { content: \"\\f113\"; }\n.flaticon-presentation-1:before { content: \"\\f114\"; }\n.flaticon-trophy:before { content: \"\\f115\"; }\n.flaticon-psd:before { content: \"\\f116\"; }\n.flaticon-layer:before { content: \"\\f117\"; }\n.flaticon-doc:before { content: \"\\f118\"; }\n.flaticon-file:before { content: \"\\f119\"; }\n.flaticon-network:before { content: \"\\f11a\"; }\n.flaticon-bus-stop:before { content: \"\\f11b\"; }\n.flaticon-globe:before { content: \"\\f11c\"; }\n.flaticon-upload:before { content: \"\\f11d\"; }\n.flaticon-squares:before { content: \"\\f11e\"; }\n.flaticon-technology:before { content: \"\\f11f\"; }\n.flaticon-up-arrow:before { content: \"\\f120\"; }\n.flaticon-browser:before { content: \"\\f121\"; }\n.flaticon-speech-bubble:before { content: \"\\f122\"; }\n.flaticon-coins:before { content: \"\\f123\"; }\n.flaticon-open-box:before { content: \"\\f124\"; }\n.flaticon-speech-bubble-1:before { content: \"\\f125\"; }\n.flaticon-attachment:before { content: \"\\f126\"; }\n.flaticon-photo-camera:before { content: \"\\f127\"; }\n.flaticon-skype-logo:before { content: \"\\f128\"; }\n.flaticon-linkedin-logo:before { content: \"\\f129\"; }\n.flaticon-twitter-logo:before { content: \"\\f12a\"; }\n.flaticon-facebook-letter-logo:before { content: \"\\f12b\"; }\n.flaticon-calendar-with-a-clock-time-tools:before { content: \"\\f12c\"; }\n.flaticon-youtube:before { content: \"\\f12d\"; }\n.flaticon-add-circular-button:before { content: \"\\f12e\"; }\n.flaticon-more-v2:before { content: \"\\f12f\"; }\n.flaticon-search:before { content: \"\\f130\"; }\n.flaticon-search-magnifier-interface-symbol:before { content: \"\\f131\"; }\n.flaticon-questions-circular-button:before { content: \"\\f132\"; }\n.flaticon-refresh:before { content: \"\\f133\"; }\n.flaticon-logout:before { content: \"\\f134\"; }\n.flaticon-event-calendar-symbol:before { content: \"\\f135\"; }\n.flaticon-laptop:before { content: \"\\f136\"; }\n.flaticon-tool:before { content: \"\\f137\"; }\n.flaticon-graphic:before { content: \"\\f138\"; }\n.flaticon-symbol:before { content: \"\\f139\"; }\n.flaticon-graphic-1:before { content: \"\\f13a\"; }\n.flaticon-clock:before { content: \"\\f13b\"; }\n.flaticon-squares-1:before { content: \"\\f13c\"; }\n.flaticon-black:before { content: \"\\f13d\"; }\n.flaticon-book:before { content: \"\\f13e\"; }\n.flaticon-cogwheel:before { content: \"\\f13f\"; }\n.flaticon-exclamation:before { content: \"\\f140\"; }\n.flaticon-add-label-button:before { content: \"\\f141\"; }\n.flaticon-delete-1:before { content: \"\\f142\"; }\n.flaticon-interface:before { content: \"\\f143\"; }\n.flaticon-more:before { content: \"\\f144\"; }\n.flaticon-warning-sign:before { content: \"\\f145\"; }\n.flaticon-calendar:before { content: \"\\f146\"; }\n.flaticon-instagram-logo:before { content: \"\\f147\"; }\n.flaticon-linkedin:before { content: \"\\f148\"; }\n.flaticon-facebook-logo-button:before { content: \"\\f149\"; }\n.flaticon-twitter-logo-button:before { content: \"\\f14a\"; }\n.flaticon-cancel:before { content: \"\\f14b\"; }\n.flaticon-exclamation-square:before { content: \"\\f14c\"; }\n.flaticon-buildings:before { content: \"\\f14d\"; }\n.flaticon-danger:before { content: \"\\f14e\"; }\n.flaticon-technology-1:before { content: \"\\f14f\"; }\n.flaticon-letter-g:before { content: \"\\f150\"; }\n.flaticon-interface-1:before { content: \"\\f151\"; }\n.flaticon-circle:before { content: \"\\f152\"; }\n.flaticon-pin:before { content: \"\\f153\"; }\n.flaticon-close:before { content: \"\\f154\"; }\n.flaticon-clock-1:before { content: \"\\f155\"; }\n.flaticon-apps:before { content: \"\\f156\"; }\n.flaticon-user:before { content: \"\\f157\"; }\n.flaticon-menu-button:before { content: \"\\f158\"; }\n.flaticon-settings:before { content: \"\\f159\"; }\n.flaticon-home:before { content: \"\\f15a\"; }\n.flaticon-clock-2:before { content: \"\\f15b\"; }\n.flaticon-lifebuoy:before { content: \"\\f15c\"; }\n.flaticon-cogwheel-1:before { content: \"\\f15d\"; }\n.flaticon-paper-plane:before { content: \"\\f15e\"; }\n.flaticon-statistics:before { content: \"\\f15f\"; }\n.flaticon-diagram:before { content: \"\\f160\"; }\n.flaticon-line-graph:before { content: \"\\f161\"; }\n.flaticon-customer:before { content: \"\\f162\"; }\n.flaticon-visible:before { content: \"\\f163\"; }\n.flaticon-shopping-basket:before { content: \"\\f164\"; }\n.flaticon-price-tag:before { content: \"\\f165\"; }\n.flaticon-businesswoman:before { content: \"\\f166\"; }\n.flaticon-medal:before { content: \"\\f167\"; }\n.flaticon-like:before { content: \"\\f168\"; }\n.flaticon-edit:before { content: \"\\f169\"; }\n.flaticon-avatar:before { content: \"\\f16a\"; }\n.flaticon-download:before { content: \"\\f16b\"; }\n.flaticon-home-1:before { content: \"\\f16c\"; }\n.flaticon-mail:before { content: \"\\f16d\"; }\n.flaticon-mail-1:before { content: \"\\f16e\"; }\n.flaticon-warning:before { content: \"\\f16f\"; }\n.flaticon-cart:before { content: \"\\f170\"; }\n.flaticon-bag:before { content: \"\\f171\"; }\n.flaticon-pie-chart:before { content: \"\\f172\"; }\n.flaticon-graph:before { content: \"\\f173\"; }\n.flaticon-interface-2:before { content: \"\\f174\"; }\n.flaticon-chat:before { content: \"\\f175\"; }\n.flaticon-envelope:before { content: \"\\f176\"; }\n.flaticon-chat-1:before { content: \"\\f177\"; }\n.flaticon-interface-3:before { content: \"\\f178\"; }\n.flaticon-background:before { content: \"\\f179\"; }\n.flaticon-file-1:before { content: \"\\f17a\"; }\n.flaticon-interface-4:before { content: \"\\f17b\"; }\n.flaticon-multimedia-3:before { content: \"\\f17c\"; }\n.flaticon-list:before { content: \"\\f17d\"; }\n.flaticon-time:before { content: \"\\f17e\"; }\n.flaticon-profile:before { content: \"\\f17f\"; }\n.flaticon-imac:before { content: \"\\f180\"; }\n.flaticon-medical:before { content: \"\\f181\"; }\n.flaticon-music:before { content: \"\\f182\"; }\n.flaticon-plus:before { content: \"\\f183\"; }\n.flaticon-exclamation-1:before { content: \"\\f184\"; }\n.flaticon-info:before { content: \"\\f185\"; }\n.flaticon-menu-1:before { content: \"\\f186\"; }\n.flaticon-menu-2:before { content: \"\\f187\"; }\n.flaticon-share:before { content: \"\\f188\"; }\n.flaticon-interface-5:before { content: \"\\f189\"; }\n.flaticon-signs:before { content: \"\\f18a\"; }\n.flaticon-tabs:before { content: \"\\f18b\"; }\n.flaticon-multimedia-4:before { content: \"\\f18c\"; }\n.flaticon-upload-1:before { content: \"\\f18d\"; }\n.flaticon-web:before { content: \"\\f18e\"; }\n.flaticon-placeholder:before { content: \"\\f18f\"; }\n.flaticon-placeholder-1:before { content: \"\\f190\"; }\n.flaticon-layers:before { content: \"\\f191\"; }\n.flaticon-interface-6:before { content: \"\\f192\"; }\n.flaticon-interface-7:before { content: \"\\f193\"; }\n.flaticon-interface-8:before { content: \"\\f194\"; }\n.flaticon-tool-1:before { content: \"\\f195\"; }\n.flaticon-settings-1:before { content: \"\\f196\"; }\n.flaticon-alarm:before { content: \"\\f197\"; }\n.flaticon-search-1:before { content: \"\\f198\"; }\n.flaticon-time-1:before { content: \"\\f199\"; }\n.flaticon-stopwatch:before { content: \"\\f19a\"; }\n.flaticon-folder:before { content: \"\\f19b\"; }\n.flaticon-folder-1:before { content: \"\\f19c\"; }\n.flaticon-folder-2:before { content: \"\\f19d\"; }\n.flaticon-folder-3:before { content: \"\\f19e\"; }\n.flaticon-file-2:before { content: \"\\f19f\"; }\n.flaticon-list-1:before { content: \"\\f1a0\"; }\n.flaticon-list-2:before { content: \"\\f1a1\"; }\n.flaticon-calendar-1:before { content: \"\\f1a2\"; }\n.flaticon-time-2:before { content: \"\\f1a3\"; }\n.flaticon-interface-9:before { content: \"\\f1a4\"; }\n.flaticon-app:before { content: \"\\f1a5\"; }\n.flaticon-suitcase:before { content: \"\\f1a6\"; }\n.flaticon-grid-menu-v2:before { content: \"\\f1a7\"; }\n.flaticon-more-v6:before { content: \"\\f1a8\"; }\n.flaticon-more-v5:before { content: \"\\f1a9\"; }\n.flaticon-add:before { content: \"\\f1aa\"; }\n.flaticon-multimedia-5:before { content: \"\\f1ab\"; }\n.flaticon-more-v4:before { content: \"\\f1ac\"; }\n.flaticon-placeholder-2:before { content: \"\\f1ad\"; }\n.flaticon-map-location:before { content: \"\\f1ae\"; }\n.flaticon-users:before { content: \"\\f1af\"; }\n.flaticon-profile-1:before { content: \"\\f1b0\"; }\n.flaticon-lock:before { content: \"\\f1b1\"; }\n.flaticon-sound:before { content: \"\\f1b2\"; }\n.flaticon-star:before { content: \"\\f1b3\"; }\n.flaticon-placeholder-3:before { content: \"\\f1b4\"; }\n.flaticon-bell:before { content: \"\\f1b5\"; }\n.flaticon-paper-plane-1:before { content: \"\\f1b6\"; }\n.flaticon-users-1:before { content: \"\\f1b7\"; }\n.flaticon-more-1:before { content: \"\\f1b8\"; }\n.flaticon-up-arrow-1:before { content: \"\\f1b9\"; }\n.flaticon-grid-menu:before { content: \"\\f1ba\"; }\n.flaticon-alarm-1:before { content: \"\\f1bb\"; }\n.flaticon-earth-globe:before { content: \"\\f1bc\"; }\n.flaticon-alert-1:before { content: \"\\f1bd\"; }\n.flaticon-internet:before { content: \"\\f1be\"; }\n.flaticon-user-ok:before { content: \"\\f1bf\"; }\n.flaticon-user-add:before { content: \"\\f1c0\"; }\n.flaticon-user-settings:before { content: \"\\f1c1\"; }\n.flaticon-truck:before { content: \"\\f1c2\"; }\n.flaticon-analytics:before { content: \"\\f1c3\"; }\n.flaticon-notes:before { content: \"\\f1c4\"; }\n.flaticon-tea-cup:before { content: \"\\f1c5\"; }\n.flaticon-exclamation-2:before { content: \"\\f1c6\"; }\n.flaticon-technology-2:before { content: \"\\f1c7\"; }\n.flaticon-location:before { content: \"\\f1c8\"; }\n.flaticon-edit-1:before { content: \"\\f1c9\"; }\n.flaticon-home-2:before { content: \"\\f1ca\"; }\n.flaticon-dashboard:before { content: \"\\f1cb\"; }\n.flaticon-information:before { content: \"\\f1cc\"; }\n.flaticon-light:before { content: \"\\f1cd\"; }\n.flaticon-car:before { content: \"\\f1ce\"; }\n.flaticon-business:before { content: \"\\f1cf\"; }\n.flaticon-squares-2:before { content: \"\\f1d0\"; }\n.flaticon-signs-1:before { content: \"\\f1d1\"; }\n.flaticon-mark:before { content: \"\\f1d2\"; }\n.flaticon-squares-3:before { content: \"\\f1d3\"; }\n.flaticon-comment:before { content: \"\\f1d4\"; }\n.flaticon-shapes:before { content: \"\\f1d5\"; }\n.flaticon-clipboard:before { content: \"\\f1d6\"; }\n.flaticon-squares-4:before { content: \"\\f1d7\"; }\n.flaticon-delete-2:before { content: \"\\f1d8\"; }\n.flaticon-bell-1:before { content: \"\\f1d9\"; }\n.flaticon-list-3:before { content: \"\\f1da\"; }\n.flaticon-infinity:before { content: \"\\f1db\"; }\n.flaticon-chat-2:before { content: \"\\f1dc\"; }\n.flaticon-calendar-2:before { content: \"\\f1dd\"; }\n.flaticon-signs-2:before { content: \"\\f1de\"; }\n.flaticon-time-3:before { content: \"\\f1df\"; }\n.flaticon-calendar-3:before { content: \"\\f1e0\"; }\n.flaticon-interface-10:before { content: \"\\f1e1\"; }\n.flaticon-interface-11:before { content: \"\\f1e2\"; }\n.flaticon-folder-4:before { content: \"\\f1e3\"; }\n.flaticon-alert-2:before { content: \"\\f1e4\"; }\n.flaticon-cogwheel-2:before { content: \"\\f1e5\"; }\n.flaticon-graphic-2:before { content: \"\\f1e6\"; }\n.flaticon-rotate:before { content: \"\\f1e7\"; }\n.flaticon-feed:before { content: \"\\f1e8\"; }\n.flaticon-safe-shield-protection:before { content: \"\\f1e9\"; }\n.flaticon-security:before { content: \"\\f1ea\"; }\n.flaticon-download-1:before { content: \"\\f1eb\"; }\n.flaticon-pie-chart-1:before { content: \"\\f1ec\"; }\n.flaticon-notepad:before { content: \"\\f1ed\"; }", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/flaticon2/flaticon.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/flaticon2/flaticon.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_Flaticon2_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font/Flaticon2.eot */ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.eot");
/* harmony import */ var _font_Flaticon2_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font/Flaticon2.woff */ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.woff");
/* harmony import */ var _font_Flaticon2_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font/Flaticon2.ttf */ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.ttf");
/* harmony import */ var _font_Flaticon2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./font/Flaticon2.svg */ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.svg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon2_eot__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon2_eot__WEBPACK_IMPORTED_MODULE_2__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon2_woff__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon2_ttf__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_Flaticon2_svg__WEBPACK_IMPORTED_MODULE_5__["default"], { hash: "#Flaticon2" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "  /*\n    Flaticon icon font: Flaticon\n    Creation date: 20/03/2017 20:02\n    */\n\n@font-face {\n  font-family: \"Flaticon2\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: \"Flaticon2\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  }\n}\n\n[class^=\"flaticon2-\"]:before,\n[class*=\" flaticon2-\"]:before {\n    font-family: Flaticon2;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    line-height: 1;\n    text-decoration: inherit;\n    text-rendering: optimizeLegibility;\n    text-transform: none;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n}\n\n.flaticon2-notification:before { content: \"\\f100\"; }\n.flaticon2-settings:before { content: \"\\f101\"; }\n.flaticon2-search:before { content: \"\\f102\"; }\n.flaticon2-delete:before { content: \"\\f103\"; }\n.flaticon2-psd:before { content: \"\\f104\"; }\n.flaticon2-list:before { content: \"\\f105\"; }\n.flaticon2-box:before { content: \"\\f106\"; }\n.flaticon2-download:before { content: \"\\f107\"; }\n.flaticon2-shield:before { content: \"\\f108\"; }\n.flaticon2-paperplane:before { content: \"\\f109\"; }\n.flaticon2-avatar:before { content: \"\\f10a\"; }\n.flaticon2-bell:before { content: \"\\f10b\"; }\n.flaticon2-fax:before { content: \"\\f10c\"; }\n.flaticon2-chart2:before { content: \"\\f10d\"; }\n.flaticon2-supermarket:before { content: \"\\f10e\"; }\n.flaticon2-phone:before { content: \"\\f10f\"; }\n.flaticon2-envelope:before { content: \"\\f110\"; }\n.flaticon2-pin:before { content: \"\\f111\"; }\n.flaticon2-chat:before { content: \"\\f112\"; }\n.flaticon2-chart:before { content: \"\\f113\"; }\n.flaticon2-infographic:before { content: \"\\f114\"; }\n.flaticon2-grids:before { content: \"\\f115\"; }\n.flaticon2-menu:before { content: \"\\f116\"; }\n.flaticon2-plus:before { content: \"\\f117\"; }\n.flaticon2-list-1:before { content: \"\\f118\"; }\n.flaticon2-talk:before { content: \"\\f119\"; }\n.flaticon2-file:before { content: \"\\f11a\"; }\n.flaticon2-user:before { content: \"\\f11b\"; }\n.flaticon2-line-chart:before { content: \"\\f11c\"; }\n.flaticon2-percentage:before { content: \"\\f11d\"; }\n.flaticon2-menu-1:before { content: \"\\f11e\"; }\n.flaticon2-paper-plane:before { content: \"\\f11f\"; }\n.flaticon2-menu-2:before { content: \"\\f120\"; }\n.flaticon2-shopping-cart:before { content: \"\\f121\"; }\n.flaticon2-pie-chart:before { content: \"\\f122\"; }\n.flaticon2-box-1:before { content: \"\\f123\"; }\n.flaticon2-map:before { content: \"\\f124\"; }\n.flaticon2-favourite:before { content: \"\\f125\"; }\n.flaticon2-checking:before { content: \"\\f126\"; }\n.flaticon2-safe:before { content: \"\\f127\"; }\n.flaticon2-heart-rate-monitor:before { content: \"\\f128\"; }\n.flaticon2-layers:before { content: \"\\f129\"; }\n.flaticon2-delivery-package:before { content: \"\\f12a\"; }\n.flaticon2-sms:before { content: \"\\f12b\"; }\n.flaticon2-image-file:before { content: \"\\f12c\"; }\n.flaticon2-plus-1:before { content: \"\\f12d\"; }\n.flaticon2-send:before { content: \"\\f12e\"; }\n.flaticon2-graphic-design:before { content: \"\\f12f\"; }\n.flaticon2-cup:before { content: \"\\f130\"; }\n.flaticon2-website:before { content: \"\\f131\"; }\n.flaticon2-gift:before { content: \"\\f132\"; }\n.flaticon2-chronometer:before { content: \"\\f133\"; }\n.flaticon2-browser:before { content: \"\\f134\"; }\n.flaticon2-digital-marketing:before { content: \"\\f135\"; }\n.flaticon2-calendar:before { content: \"\\f136\"; }\n.flaticon2-calendar-1:before { content: \"\\f137\"; }\n.flaticon2-rocket:before { content: \"\\f138\"; }\n.flaticon2-analytics:before { content: \"\\f139\"; }\n.flaticon2-pie-chart-1:before { content: \"\\f13a\"; }\n.flaticon2-pie-chart-2:before { content: \"\\f13b\"; }\n.flaticon2-analytics-1:before { content: \"\\f13c\"; }\n.flaticon2-google-drive-file:before { content: \"\\f13d\"; }\n.flaticon2-pie-chart-3:before { content: \"\\f13e\"; }\n.flaticon2-poll-symbol:before { content: \"\\f13f\"; }\n.flaticon2-gear:before { content: \"\\f140\"; }\n.flaticon2-magnifier-tool:before { content: \"\\f141\"; }\n.flaticon2-add:before { content: \"\\f142\"; }\n.flaticon2-cube:before { content: \"\\f143\"; }\n.flaticon2-gift-1:before { content: \"\\f144\"; }\n.flaticon2-list-2:before { content: \"\\f145\"; }\n.flaticon2-shopping-cart-1:before { content: \"\\f146\"; }\n.flaticon2-calendar-2:before { content: \"\\f147\"; }\n.flaticon2-laptop:before { content: \"\\f148\"; }\n.flaticon2-cube-1:before { content: \"\\f149\"; }\n.flaticon2-layers-1:before { content: \"\\f14a\"; }\n.flaticon2-chat-1:before { content: \"\\f14b\"; }\n.flaticon2-copy:before { content: \"\\f14c\"; }\n.flaticon2-paper:before { content: \"\\f14d\"; }\n.flaticon2-hospital:before { content: \"\\f14e\"; }\n.flaticon2-calendar-3:before { content: \"\\f14f\"; }\n.flaticon2-speaker:before { content: \"\\f150\"; }\n.flaticon2-pie-chart-4:before { content: \"\\f151\"; }\n.flaticon2-schedule:before { content: \"\\f152\"; }\n.flaticon2-expand:before { content: \"\\f153\"; }\n.flaticon2-menu-3:before { content: \"\\f154\"; }\n.flaticon2-download-1:before { content: \"\\f155\"; }\n.flaticon2-help:before { content: \"\\f156\"; }\n.flaticon2-list-3:before { content: \"\\f157\"; }\n.flaticon2-notepad:before { content: \"\\f158\"; }\n.flaticon2-graph:before { content: \"\\f159\"; }\n.flaticon2-browser-1:before { content: \"\\f15a\"; }\n.flaticon2-photograph:before { content: \"\\f15b\"; }\n.flaticon2-browser-2:before { content: \"\\f15c\"; }\n.flaticon2-hourglass:before { content: \"\\f15d\"; }\n.flaticon2-mail:before { content: \"\\f15e\"; }\n.flaticon2-cardiogram:before { content: \"\\f15f\"; }\n.flaticon2-document:before { content: \"\\f160\"; }\n.flaticon2-contract:before { content: \"\\f161\"; }\n.flaticon2-graph-1:before { content: \"\\f162\"; }\n.flaticon2-graphic:before { content: \"\\f163\"; }\n.flaticon2-position:before { content: \"\\f164\"; }\n.flaticon2-soft-icons:before { content: \"\\f165\"; }\n.flaticon2-circle-vol-2:before { content: \"\\f166\"; }\n.flaticon2-rocket-1:before { content: \"\\f167\"; }\n.flaticon2-lorry:before { content: \"\\f168\"; }\n.flaticon2-cd:before { content: \"\\f169\"; }\n.flaticon2-file-1:before { content: \"\\f16a\"; }\n.flaticon2-reload:before { content: \"\\f16b\"; }\n.flaticon2-placeholder:before { content: \"\\f16c\"; }\n.flaticon2-refresh:before { content: \"\\f16d\"; }\n.flaticon2-medical-records:before { content: \"\\f16e\"; }\n.flaticon2-rectangular:before { content: \"\\f16f\"; }\n.flaticon2-medical-records-1:before { content: \"\\f170\"; }\n.flaticon2-indent-dots:before { content: \"\\f171\"; }\n.flaticon2-search-1:before { content: \"\\f172\"; }\n.flaticon2-edit:before { content: \"\\f173\"; }\n.flaticon2-new-email:before { content: \"\\f174\"; }\n.flaticon2-calendar-4:before { content: \"\\f175\"; }\n.flaticon2-console:before { content: \"\\f176\"; }\n.flaticon2-open-text-book:before { content: \"\\f177\"; }\n.flaticon2-download-2:before { content: \"\\f178\"; }\n.flaticon2-zig-zag-line-sign:before { content: \"\\f179\"; }\n.flaticon2-tools-and-utensils:before { content: \"\\f17a\"; }\n.flaticon2-crisp-icons:before { content: \"\\f17b\"; }\n.flaticon2-trash:before { content: \"\\f17c\"; }\n.flaticon2-lock:before { content: \"\\f17d\"; }\n.flaticon2-bell-1:before { content: \"\\f17e\"; }\n.flaticon2-setup:before { content: \"\\f17f\"; }\n.flaticon2-menu-4:before { content: \"\\f180\"; }\n.flaticon2-architecture-and-city:before { content: \"\\f181\"; }\n.flaticon2-shelter:before { content: \"\\f182\"; }\n.flaticon2-add-1:before { content: \"\\f183\"; }\n.flaticon2-checkmark:before { content: \"\\f184\"; }\n.flaticon2-circular-arrow:before { content: \"\\f185\"; }\n.flaticon2-user-outline-symbol:before { content: \"\\f186\"; }\n.flaticon2-rhombus:before { content: \"\\f187\"; }\n.flaticon2-crisp-icons-1:before { content: \"\\f188\"; }\n.flaticon2-soft-icons-1:before { content: \"\\f189\"; }\n.flaticon2-hexagonal:before { content: \"\\f18a\"; }\n.flaticon2-time:before { content: \"\\f18b\"; }\n.flaticon2-contrast:before { content: \"\\f18c\"; }\n.flaticon2-telegram-logo:before { content: \"\\f18d\"; }\n.flaticon2-hangouts-logo:before { content: \"\\f18e\"; }\n.flaticon2-analytics-2:before { content: \"\\f18f\"; }\n.flaticon2-wifi:before { content: \"\\f190\"; }\n.flaticon2-protected:before { content: \"\\f191\"; }\n.flaticon2-drop:before { content: \"\\f192\"; }\n.flaticon2-mail-1:before { content: \"\\f193\"; }\n.flaticon2-delivery-truck:before { content: \"\\f194\"; }\n.flaticon2-writing:before { content: \"\\f195\"; }\n.flaticon2-calendar-5:before { content: \"\\f196\"; }\n.flaticon2-protection:before { content: \"\\f197\"; }\n.flaticon2-calendar-6:before { content: \"\\f198\"; }\n.flaticon2-calendar-7:before { content: \"\\f199\"; }\n.flaticon2-calendar-8:before { content: \"\\f19a\"; }\n.flaticon2-bell-2:before { content: \"\\f19b\"; }\n.flaticon2-hourglass-1:before { content: \"\\f19c\"; }\n.flaticon2-next:before { content: \"\\f19d\"; }\n.flaticon2-chat-2:before { content: \"\\f19e\"; }\n.flaticon2-correct:before { content: \"\\f19f\"; }\n.flaticon2-photo-camera:before { content: \"\\f1a0\"; }\n.flaticon2-fast-next:before { content: \"\\f1a1\"; }\n.flaticon2-fast-back:before { content: \"\\f1a2\"; }\n.flaticon2-down:before { content: \"\\f1a3\"; }\n.flaticon2-back:before { content: \"\\f1a4\"; }\n.flaticon2-up:before { content: \"\\f1a5\"; }\n.flaticon2-arrow-down:before { content: \"\\f1a6\"; }\n.flaticon2-arrow-up:before { content: \"\\f1a7\"; }\n.flaticon2-accept:before { content: \"\\f1a8\"; }\n.flaticon2-sort:before { content: \"\\f1a9\"; }\n.flaticon2-arrow:before { content: \"\\f1aa\"; }\n.flaticon2-back-1:before { content: \"\\f1ab\"; }\n.flaticon2-add-square:before { content: \"\\f1ac\"; }\n.flaticon2-quotation-mark:before { content: \"\\f1ad\"; }\n.flaticon2-clip-symbol:before { content: \"\\f1ae\"; }\n.flaticon2-check-mark:before { content: \"\\f1af\"; }\n.flaticon2-folder:before { content: \"\\f1b0\"; }\n.flaticon2-cancel-music:before { content: \"\\f1b1\"; }\n.flaticon2-cross:before { content: \"\\f1b2\"; }\n.flaticon2-pen:before { content: \"\\f1b3\"; }\n.flaticon2-email:before { content: \"\\f1b4\"; }\n.flaticon2-graph-2:before { content: \"\\f1b5\"; }\n.flaticon2-open-box:before { content: \"\\f1b6\"; }\n.flaticon2-files-and-folders:before { content: \"\\f1b7\"; }\n.flaticon2-ui:before { content: \"\\f1b8\"; }\n.flaticon2-sheet:before { content: \"\\f1b9\"; }\n.flaticon2-dashboard:before { content: \"\\f1ba\"; }\n.flaticon2-user-1:before { content: \"\\f1bb\"; }\n.flaticon2-group:before { content: \"\\f1bc\"; }\n.flaticon2-black-back-closed-envelope-shape:before { content: \"\\f1bd\"; }\n.flaticon2-left-arrow:before { content: \"\\f1be\"; }\n.flaticon2-sort-alphabetically:before { content: \"\\f1bf\"; }\n.flaticon2-sort-down:before { content: \"\\f1c0\"; }\n.flaticon2-rubbish-bin:before { content: \"\\f1c1\"; }\n.flaticon2-rubbish-bin-delete-button:before { content: \"\\f1c2\"; }\n.flaticon2-calendar-9:before { content: \"\\f1c3\"; }\n.flaticon2-tag:before { content: \"\\f1c4\"; }\n.flaticon2-refresh-button:before { content: \"\\f1c5\"; }\n.flaticon2-refresh-arrow:before { content: \"\\f1c6\"; }\n.flaticon2-reload-1:before { content: \"\\f1c7\"; }\n.flaticon2-refresh-1:before { content: \"\\f1c8\"; }\n.flaticon2-left-arrow-1:before { content: \"\\f1c9\"; }\n.flaticon2-reply:before { content: \"\\f1ca\"; }\n.flaticon2-reply-1:before { content: \"\\f1cb\"; }\n.flaticon2-printer:before { content: \"\\f1cc\"; }\n.flaticon2-print:before { content: \"\\f1cd\"; }\n.flaticon2-shrink:before { content: \"\\f1ce\"; }\n.flaticon2-resize:before { content: \"\\f1cf\"; }\n.flaticon2-arrow-1:before { content: \"\\f1d0\"; }\n.flaticon2-size:before { content: \"\\f1d1\"; }\n.flaticon2-arrow-2:before { content: \"\\f1d2\"; }\n.flaticon2-cancel:before { content: \"\\f1d3\"; }\n.flaticon2-exclamation:before { content: \"\\f1d4\"; }\n.flaticon2-line:before { content: \"\\f1d5\"; }\n.flaticon2-warning:before { content: \"\\f1d6\"; }\n.flaticon2-information:before { content: \"\\f1d7\"; }\n.flaticon2-layers-2:before { content: \"\\f1d8\"; }\n.flaticon2-file-2:before { content: \"\\f1d9\"; }\n.flaticon2-bell-3:before { content: \"\\f1da\"; }\n.flaticon2-bell-4:before { content: \"\\f1db\"; }\n.flaticon2-bell-5:before { content: \"\\f1dc\"; }\n.flaticon2-bell-alarm-symbol:before { content: \"\\f1dd\"; }\n.flaticon2-world:before { content: \"\\f1de\"; }\n.flaticon2-graphic-1:before { content: \"\\f1df\"; }\n.flaticon2-send-1:before { content: \"\\f1e0\"; }\n.flaticon2-location:before { content: \"\\f1e1\"; }\n.flaticon2-pin-1:before { content: \"\\f1e2\"; }\n.flaticon2-start-up:before { content: \"\\f1e3\"; }\n.flaticon2-right-arrow:before { content: \"\\f1e4\"; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/line-awesome/css/line-awesome.css":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/line-awesome/css/line-awesome.css ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_line_awesome_eot_v_1_1___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/line-awesome.eot?v=1.1. */ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.eot?v=1.1.");
/* harmony import */ var _fonts_line_awesome_eot_v_1_1___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/line-awesome.eot??v=1.1. */ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.eot??v=1.1.");
/* harmony import */ var _fonts_line_awesome_woff2_v_1_1___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/line-awesome.woff2?v=1.1. */ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.woff2?v=1.1.");
/* harmony import */ var _fonts_line_awesome_woff_v_1_1___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/line-awesome.woff?v=1.1. */ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.woff?v=1.1.");
/* harmony import */ var _fonts_line_awesome_ttf_v_1_1___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/line-awesome.ttf?v=1.1. */ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.ttf?v=1.1.");
/* harmony import */ var _fonts_line_awesome_svg_v_1_1___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/line-awesome.svg?v=1.1. */ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.svg?v=1.1.");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_line_awesome_eot_v_1_1___WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_line_awesome_eot_v_1_1___WEBPACK_IMPORTED_MODULE_3__["default"], { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_line_awesome_woff2_v_1_1___WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_line_awesome_woff_v_1_1___WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_line_awesome_ttf_v_1_1___WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_line_awesome_svg_v_1_1___WEBPACK_IMPORTED_MODULE_7__["default"], { hash: "#fa" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n *  Line Awesome 1.1.0 by @icons_8 - https://icons8.com/line-awesome\n *  License - https://icons8.com/good-boy-license/ (Font: SIL OFL 1.1, CSS: MIT License)\n *\n * Made with love by Icons8 [ https://icons8.com/ ] using FontCustom [ https://github.com/FontCustom/fontcustom ]\n *\n * Contacts:\n *    [ https://icons8.com/contact ]\n *\n * Follow Icon8 on\n *    Twitter [ https://twitter.com/icons_8 ]\n *    Facebook [ https://www.facebook.com/Icons8 ]\n *    Google+ [ https://plus.google.com/+Icons8 ]\n *    GitHub [ https://github.com/icons8 ]\n */\n\n@font-face {\n  font-family: \"LineAwesome\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: \"LineAwesome\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");\n  }\n}\n\n/* Thanks to http://fontawesome.io @fontawesome and @davegandy */\n.la {\n    display: inline-block;\n    font: normal normal normal 16px/1 \"LineAwesome\";\n    font-size: inherit;\n    text-decoration: inherit;\n    text-rendering: optimizeLegibility;\n    text-transform: none;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n}\n/* makes the font 33% larger relative to the icon container */\n.la-lg {\n    font-size: 1.33333333em;\n    line-height: 0.75em;\n    vertical-align: -15%;\n}\n.la-2x {\n    font-size: 2em;\n}\n.la-3x {\n    font-size: 3em;\n}\n.la-4x {\n    font-size: 4em;\n}\n.la-5x {\n    font-size: 5em;\n}\n.la-fw {\n    width: 1.28571429em;\n    text-align: center;\n}\n.la-ul {\n    padding-left: 0;\n    margin-left: 2.14285714em;\n    list-style-type: none;\n}\n.la-ul > li {\n    position: relative;\n}\n.la-li {\n    position: absolute;\n    left: -2.14285714em;\n    width: 2.14285714em;\n    top: 0.14285714em;\n    text-align: center;\n}\n.la-li.la-lg {\n    left: -1.85714286em;\n}\n.la-border {\n    padding: .2em .25em .15em;\n    border: solid 0.08em #eeeeee;\n    border-radius: .1em;\n}\n.pull-right {\n    float: right;\n}\n.pull-left {\n    float: left;\n}\n.li.pull-left {\n    margin-right: .3em;\n}\n.li.pull-right {\n    margin-left: .3em;\n}\n.la-spin {\n    -webkit-animation: fa-spin 2s infinite linear;\n    animation: fa-spin 2s infinite linear;\n}\n@-webkit-keyframes fa-spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(359deg);\n    }\n}\n@keyframes fa-spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(359deg);\n    }\n}\n.la-rotate-90 {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n    transform: rotate(90deg);\n}\n.la-rotate-180 {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n    transform: rotate(180deg);\n}\n.la-rotate-270 {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n    transform: rotate(270deg);\n}\n.la-flip-horizontal {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n    transform: scale(-1, 1);\n}\n.la-flip-vertical {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n    transform: scale(1, -1);\n}\n:root .la-rotate-90,\n:root .la-rotate-180,\n:root .la-rotate-270,\n:root .la-flip-horizontal,\n:root .la-flip-vertical {\n    filter: none;\n}\n.la-stack {\n    position: relative;\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle;\n}\n.la-stack-1x,\n.la-stack-2x {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    text-align: center;\n}\n.la-stack-1x {\n    line-height: inherit;\n}\n.la-stack-2x {\n    font-size: 2em;\n}\n.la-inverse {\n    color: #ffffff;\n}\n/* Thanks to http://fontawesome.io @fontawesome and @davegandy */\n\n.la-500px:before { content: \"\\f100\"; }\n.la-adjust:before { content: \"\\f101\"; }\n.la-adn:before { content: \"\\f102\"; }\n.la-align-center:before { content: \"\\f103\"; }\n.la-align-justify:before { content: \"\\f104\"; }\n.la-align-left:before { content: \"\\f105\"; }\n.la-align-right:before { content: \"\\f106\"; }\n.la-amazon:before { content: \"\\f107\"; }\n.la-ambulance:before { content: \"\\f108\"; }\n.la-anchor:before { content: \"\\f109\"; }\n.la-android:before { content: \"\\f10a\"; }\n.la-angellist:before { content: \"\\f10b\"; }\n.la-angle-double-down:before { content: \"\\f10c\"; }\n.la-angle-double-left:before { content: \"\\f10d\"; }\n.la-angle-double-right:before { content: \"\\f10e\"; }\n.la-angle-double-up:before { content: \"\\f10f\"; }\n.la-angle-down:before { content: \"\\f110\"; }\n.la-angle-left:before { content: \"\\f111\"; }\n.la-angle-right:before { content: \"\\f112\"; }\n.la-angle-up:before { content: \"\\f113\"; }\n.la-apple:before { content: \"\\f114\"; }\n.la-archive:before { content: \"\\f115\"; }\n.la-area-chart:before { content: \"\\f116\"; }\n.la-arrow-circle-down:before { content: \"\\f117\"; }\n.la-arrow-circle-left:before { content: \"\\f118\"; }\n.la-arrow-circle-o-down:before { content: \"\\f119\"; }\n.la-arrow-circle-o-left:before { content: \"\\f11a\"; }\n.la-arrow-circle-o-right:before { content: \"\\f11b\"; }\n.la-arrow-circle-o-up:before { content: \"\\f11c\"; }\n.la-arrow-circle-right:before { content: \"\\f11d\"; }\n.la-arrow-circle-up:before { content: \"\\f11e\"; }\n.la-arrow-down:before { content: \"\\f11f\"; }\n.la-arrow-left:before { content: \"\\f120\"; }\n.la-arrow-right:before { content: \"\\f121\"; }\n.la-arrow-up:before { content: \"\\f122\"; }\n.la-arrows:before { content: \"\\f123\"; }\n.la-arrows-alt:before { content: \"\\f124\"; }\n.la-arrows-h:before { content: \"\\f125\"; }\n.la-arrows-v:before { content: \"\\f126\"; }\n.la-asterisk:before { content: \"\\f127\"; }\n.la-at:before { content: \"\\f128\"; }\n.la-automobile:before { content: \"\\f129\"; }\n.la-backward:before { content: \"\\f12a\"; }\n.la-balance-scale:before { content: \"\\f12b\"; }\n.la-ban:before { content: \"\\f12c\"; }\n.la-bank:before { content: \"\\f12d\"; }\n.la-bar-chart:before { content: \"\\f12e\"; }\n.la-bar-chart-o:before { content: \"\\f12f\"; }\n.la-barcode:before { content: \"\\f130\"; }\n.la-bars:before { content: \"\\f131\"; }\n.la-battery-0:before { content: \"\\f132\"; }\n.la-battery-1:before { content: \"\\f133\"; }\n.la-battery-2:before { content: \"\\f134\"; }\n.la-battery-3:before { content: \"\\f135\"; }\n.la-battery-4:before { content: \"\\f136\"; }\n.la-battery-empty:before { content: \"\\f137\"; }\n.la-battery-full:before { content: \"\\f138\"; }\n.la-battery-half:before { content: \"\\f139\"; }\n.la-battery-quarter:before { content: \"\\f13a\"; }\n.la-battery-three-quarters:before { content: \"\\f13b\"; }\n.la-bed:before { content: \"\\f13c\"; }\n.la-beer:before { content: \"\\f13d\"; }\n.la-behance:before { content: \"\\f13e\"; }\n.la-behance-square:before { content: \"\\f13f\"; }\n.la-bell:before { content: \"\\f140\"; }\n.la-bell-o:before { content: \"\\f141\"; }\n.la-bell-slash:before { content: \"\\f142\"; }\n.la-bell-slash-o:before { content: \"\\f143\"; }\n.la-bicycle:before { content: \"\\f144\"; }\n.la-binoculars:before { content: \"\\f145\"; }\n.la-birthday-cake:before { content: \"\\f146\"; }\n.la-bitbucket:before { content: \"\\f147\"; }\n.la-bitbucket-square:before { content: \"\\f148\"; }\n.la-bitcoin:before { content: \"\\f149\"; }\n.la-black-tie:before { content: \"\\f14a\"; }\n.la-bold:before { content: \"\\f14b\"; }\n.la-bolt:before { content: \"\\f14c\"; }\n.la-bomb:before { content: \"\\f14d\"; }\n.la-book:before { content: \"\\f14e\"; }\n.la-bookmark:before { content: \"\\f14f\"; }\n.la-bookmark-o:before { content: \"\\f150\"; }\n.la-briefcase:before { content: \"\\f151\"; }\n.la-btc:before { content: \"\\f152\"; }\n.la-bug:before { content: \"\\f153\"; }\n.la-building:before { content: \"\\f154\"; }\n.la-building-o:before { content: \"\\f155\"; }\n.la-bullhorn:before { content: \"\\f156\"; }\n.la-bullseye:before { content: \"\\f157\"; }\n.la-bus:before { content: \"\\f158\"; }\n.la-buysellads:before { content: \"\\f159\"; }\n.la-cab:before { content: \"\\f15a\"; }\n.la-calculator:before { content: \"\\f15b\"; }\n.la-calendar:before { content: \"\\f15c\"; }\n.la-calendar-check-o:before { content: \"\\f15d\"; }\n.la-calendar-minus-o:before { content: \"\\f15e\"; }\n.la-calendar-o:before { content: \"\\f15f\"; }\n.la-calendar-plus-o:before { content: \"\\f160\"; }\n.la-calendar-times-o:before { content: \"\\f161\"; }\n.la-camera:before { content: \"\\f162\"; }\n.la-camera-retro:before { content: \"\\f163\"; }\n.la-car:before { content: \"\\f164\"; }\n.la-caret-down:before { content: \"\\f165\"; }\n.la-caret-left:before { content: \"\\f166\"; }\n.la-caret-right:before { content: \"\\f167\"; }\n.la-caret-square-o-down:before, .la-toggle-down:before { content: \"\\f168\"; }\n.la-caret-square-o-left:before, .la-toggle-left:before { content: \"\\f169\"; }\n.la-caret-square-o-right:before, .la-toggle-right:before { content: \"\\f16a\"; }\n.la-caret-square-o-up:before, .la-toggle-up:before { content: \"\\f16b\"; }\n.la-caret-up:before { content: \"\\f16c\"; }\n.la-cart-arrow-down:before { content: \"\\f16d\"; }\n.la-cart-plus:before { content: \"\\f16e\"; }\n.la-cc:before { content: \"\\f16f\"; }\n.la-cc-amex:before { content: \"\\f170\"; }\n.la-cc-diners-club:before { content: \"\\f171\"; }\n.la-cc-discover:before { content: \"\\f172\"; }\n.la-cc-jcb:before { content: \"\\f173\"; }\n.la-cc-mastercard:before { content: \"\\f174\"; }\n.la-cc-paypal:before { content: \"\\f175\"; }\n.la-cc-stripe:before { content: \"\\f176\"; }\n.la-cc-visa:before { content: \"\\f177\"; }\n.la-certificate:before { content: \"\\f178\"; }\n.la-chain:before { content: \"\\f179\"; }\n.la-chain-broken:before { content: \"\\f17a\"; }\n.la-check:before { content: \"\\f17b\"; }\n.la-check-circle:before { content: \"\\f17c\"; }\n.la-check-circle-o:before { content: \"\\f17d\"; }\n.la-check-square:before { content: \"\\f17e\"; }\n.la-check-square-o:before { content: \"\\f17f\"; }\n.la-chevron-circle-down:before { content: \"\\f180\"; }\n.la-chevron-circle-left:before { content: \"\\f181\"; }\n.la-chevron-circle-right:before { content: \"\\f182\"; }\n.la-chevron-circle-up:before { content: \"\\f183\"; }\n.la-chevron-down:before { content: \"\\f184\"; }\n.la-chevron-left:before { content: \"\\f185\"; }\n.la-chevron-right:before { content: \"\\f186\"; }\n.la-chevron-up:before { content: \"\\f187\"; }\n.la-child:before { content: \"\\f188\"; }\n.la-chrome:before { content: \"\\f189\"; }\n.la-circle:before { content: \"\\f18a\"; }\n.la-circle-o:before { content: \"\\f18b\"; }\n.la-circle-o-notch:before { content: \"\\f18c\"; }\n.la-circle-thin:before { content: \"\\f18d\"; }\n.la-clipboard:before { content: \"\\f18e\"; }\n.la-clock-o:before { content: \"\\f18f\"; }\n.la-clone:before { content: \"\\f190\"; }\n.la-close:before { content: \"\\f191\"; }\n.la-cloud:before { content: \"\\f192\"; }\n.la-cloud-download:before { content: \"\\f193\"; }\n.la-cloud-upload:before { content: \"\\f194\"; }\n.la-cny:before { content: \"\\f195\"; }\n.la-code:before { content: \"\\f196\"; }\n.la-code-fork:before { content: \"\\f197\"; }\n.la-codepen:before { content: \"\\f198\"; }\n.la-coffee:before { content: \"\\f199\"; }\n.la-cog:before { content: \"\\f19a\"; }\n.la-cogs:before { content: \"\\f19b\"; }\n.la-columns:before { content: \"\\f19c\"; }\n.la-comment:before { content: \"\\f19d\"; }\n.la-comment-o:before { content: \"\\f19e\"; }\n.la-commenting:before { content: \"\\f19f\"; }\n.la-commenting-o:before { content: \"\\f1a0\"; }\n.la-comments:before { content: \"\\f1a1\"; }\n.la-comments-o:before { content: \"\\f1a2\"; }\n.la-compass:before { content: \"\\f1a3\"; }\n.la-compress:before { content: \"\\f1a4\"; }\n.la-connectdevelop:before { content: \"\\f1a5\"; }\n.la-contao:before { content: \"\\f1a6\"; }\n.la-copy:before { content: \"\\f1a7\"; }\n.la-copyright:before { content: \"\\f1a8\"; }\n.la-creative-commons:before { content: \"\\f1a9\"; }\n.la-credit-card:before { content: \"\\f1aa\"; }\n.la-crop:before { content: \"\\f1ab\"; }\n.la-crosshairs:before { content: \"\\f1ac\"; }\n.la-css3:before { content: \"\\f1ad\"; }\n.la-cube:before { content: \"\\f1ae\"; }\n.la-cubes:before { content: \"\\f1af\"; }\n.la-cut:before { content: \"\\f1b0\"; }\n.la-cutlery:before { content: \"\\f1b1\"; }\n.la-dashboard:before { content: \"\\f1b2\"; }\n.la-dashcube:before { content: \"\\f1b3\"; }\n.la-database:before { content: \"\\f1b4\"; }\n.la-dedent:before { content: \"\\f1b5\"; }\n.la-delicious:before { content: \"\\f1b6\"; }\n.la-desktop:before { content: \"\\f1b7\"; }\n.la-deviantart:before { content: \"\\f1b8\"; }\n.la-diamond:before { content: \"\\f1b9\"; }\n.la-digg:before { content: \"\\f1ba\"; }\n.la-dollar:before { content: \"\\f1bb\"; }\n.la-dot-circle-o:before { content: \"\\f1bc\"; }\n.la-download:before { content: \"\\f1bd\"; }\n.la-dribbble:before { content: \"\\f1be\"; }\n.la-dropbox:before { content: \"\\f1bf\"; }\n.la-drupal:before { content: \"\\f1c0\"; }\n.la-edit:before { content: \"\\f1c1\"; }\n.la-eject:before { content: \"\\f1c2\"; }\n.la-ellipsis-h:before { content: \"\\f1c3\"; }\n.la-ellipsis-v:before { content: \"\\f1c4\"; }\n.la-empire:before, .la-ge:before { content: \"\\f1c5\"; }\n.la-envelope:before { content: \"\\f1c6\"; }\n.la-envelope-o:before { content: \"\\f1c7\"; }\n.la-envelope-square:before { content: \"\\f1c8\"; }\n.la-eraser:before { content: \"\\f1c9\"; }\n.la-eur:before { content: \"\\f1ca\"; }\n.la-euro:before { content: \"\\f1cb\"; }\n.la-exchange:before { content: \"\\f1cc\"; }\n.la-exclamation:before { content: \"\\f1cd\"; }\n.la-exclamation-circle:before { content: \"\\f1ce\"; }\n.la-exclamation-triangle:before { content: \"\\f1cf\"; }\n.la-expand:before { content: \"\\f1d0\"; }\n.la-expeditedssl:before { content: \"\\f1d1\"; }\n.la-external-link:before { content: \"\\f1d2\"; }\n.la-external-link-square:before { content: \"\\f1d3\"; }\n.la-eye:before { content: \"\\f1d4\"; }\n.la-eye-slash:before { content: \"\\f1d5\"; }\n.la-eyedropper:before { content: \"\\f1d6\"; }\n.la-facebook:before, .la-facebook-f:before { content: \"\\f1d7\"; }\n.la-facebook-official:before { content: \"\\f1d8\"; }\n.la-facebook-square:before { content: \"\\f1d9\"; }\n.la-fast-backward:before { content: \"\\f1da\"; }\n.la-fast-forward:before { content: \"\\f1db\"; }\n.la-fax:before { content: \"\\f1dc\"; }\n.la-female:before { content: \"\\f1dd\"; }\n.la-fighter-jet:before { content: \"\\f1de\"; }\n.la-file:before { content: \"\\f1df\"; }\n.la-file-archive-o:before { content: \"\\f1e0\"; }\n.la-file-audio-o:before { content: \"\\f1e1\"; }\n.la-file-code-o:before { content: \"\\f1e2\"; }\n.la-file-excel-o:before { content: \"\\f1e3\"; }\n.la-file-image-o:before { content: \"\\f1e4\"; }\n.la-file-movie-o:before { content: \"\\f1e5\"; }\n.la-file-o:before { content: \"\\f1e6\"; }\n.la-file-pdf-o:before { content: \"\\f1e7\"; }\n.la-file-photo-o:before { content: \"\\f1e8\"; }\n.la-file-picture-o:before { content: \"\\f1e9\"; }\n.la-file-powerpoint-o:before { content: \"\\f1ea\"; }\n.la-file-sound-o:before { content: \"\\f1eb\"; }\n.la-file-text:before { content: \"\\f1ec\"; }\n.la-file-text-o:before { content: \"\\f1ed\"; }\n.la-file-video-o:before { content: \"\\f1ee\"; }\n.la-file-word-o:before { content: \"\\f1ef\"; }\n.la-file-zip-o:before { content: \"\\f1f0\"; }\n.la-files-o:before { content: \"\\f1f1\"; }\n.la-film:before { content: \"\\f1f2\"; }\n.la-filter:before { content: \"\\f1f3\"; }\n.la-fire:before { content: \"\\f1f4\"; }\n.la-fire-extinguisher:before { content: \"\\f1f5\"; }\n.la-firefox:before { content: \"\\f1f6\"; }\n.la-flag:before { content: \"\\f1f7\"; }\n.la-flag-checkered:before { content: \"\\f1f8\"; }\n.la-flag-o:before { content: \"\\f1f9\"; }\n.la-flash:before { content: \"\\f1fa\"; }\n.la-flask:before { content: \"\\f1fb\"; }\n.la-flickr:before { content: \"\\f1fc\"; }\n.la-floppy-o:before { content: \"\\f1fd\"; }\n.la-folder:before { content: \"\\f1fe\"; }\n.la-folder-o:before { content: \"\\f1ff\"; }\n.la-folder-open:before { content: \"\\f200\"; }\n.la-folder-open-o:before { content: \"\\f201\"; }\n.la-font:before { content: \"\\f202\"; }\n.la-fonticons:before { content: \"\\f203\"; }\n.la-forumbee:before { content: \"\\f204\"; }\n.la-forward:before { content: \"\\f205\"; }\n.la-foursquare:before { content: \"\\f206\"; }\n.la-frown-o:before { content: \"\\f207\"; }\n.la-futbol-o:before, .la-soccer-ball-o:before { content: \"\\f208\"; }\n.la-gamepad:before { content: \"\\f209\"; }\n.la-gavel:before { content: \"\\f20a\"; }\n.la-gbp:before { content: \"\\f20b\"; }\n.la-gear:before { content: \"\\f20c\"; }\n.la-gears:before { content: \"\\f20d\"; }\n.la-genderless:before { content: \"\\f20e\"; }\n.la-get-pocket:before { content: \"\\f20f\"; }\n.la-gg:before { content: \"\\f210\"; }\n.la-gg-circle:before { content: \"\\f211\"; }\n.la-gift:before { content: \"\\f212\"; }\n.la-git:before { content: \"\\f213\"; }\n.la-git-square:before { content: \"\\f214\"; }\n.la-github:before { content: \"\\f215\"; }\n.la-github-alt:before { content: \"\\f216\"; }\n.la-github-square:before { content: \"\\f217\"; }\n.la-glass:before { content: \"\\f218\"; }\n.la-globe:before { content: \"\\f219\"; }\n.la-google:before { content: \"\\f21a\"; }\n.la-google-plus:before { content: \"\\f21b\"; }\n.la-google-plus-square:before { content: \"\\f21c\"; }\n.la-google-wallet:before { content: \"\\f21d\"; }\n.la-graduation-cap:before { content: \"\\f21e\"; }\n.la-gratipay:before, .la-gittip:before { content: \"\\f21f\"; }\n.la-group:before { content: \"\\f220\"; }\n.la-h-square:before { content: \"\\f221\"; }\n.la-hacker-news:before { content: \"\\f222\"; }\n.la-hand-grab-o:before { content: \"\\f223\"; }\n.la-hand-lizard-o:before { content: \"\\f224\"; }\n.la-hand-o-down:before { content: \"\\f225\"; }\n.la-hand-o-left:before { content: \"\\f226\"; }\n.la-hand-o-right:before { content: \"\\f227\"; }\n.la-hand-o-up:before { content: \"\\f228\"; }\n.la-hand-paper-o:before { content: \"\\f229\"; }\n.la-hand-peace-o:before { content: \"\\f22a\"; }\n.la-hand-pointer-o:before { content: \"\\f22b\"; }\n.la-hand-rock-o:before { content: \"\\f22c\"; }\n.la-hand-scissors-o:before { content: \"\\f22d\"; }\n.la-hand-spock-o:before { content: \"\\f22e\"; }\n.la-hand-stop-o:before { content: \"\\f22f\"; }\n.la-hdd-o:before { content: \"\\f230\"; }\n.la-header:before { content: \"\\f231\"; }\n.la-headphones:before { content: \"\\f232\"; }\n.la-heart:before { content: \"\\f233\"; }\n.la-heart-o:before { content: \"\\f234\"; }\n.la-heartbeat:before { content: \"\\f235\"; }\n.la-history:before { content: \"\\f236\"; }\n.la-home:before { content: \"\\f237\"; }\n.la-hospital-o:before { content: \"\\f238\"; }\n.la-hotel:before { content: \"\\f239\"; }\n.la-hourglass:before { content: \"\\f23a\"; }\n.la-hourglass-1:before { content: \"\\f23b\"; }\n.la-hourglass-2:before { content: \"\\f23c\"; }\n.la-hourglass-3:before { content: \"\\f23d\"; }\n.la-hourglass-end:before { content: \"\\f23e\"; }\n.la-hourglass-half:before { content: \"\\f23f\"; }\n.la-hourglass-o:before { content: \"\\f240\"; }\n.la-hourglass-start:before { content: \"\\f241\"; }\n.la-houzz:before { content: \"\\f242\"; }\n.la-html5:before { content: \"\\f243\"; }\n.la-i-cursor:before { content: \"\\f244\"; }\n.la-ils:before { content: \"\\f245\"; }\n.la-image:before { content: \"\\f246\"; }\n.la-inbox:before { content: \"\\f247\"; }\n.la-indent:before { content: \"\\f248\"; }\n.la-industry:before { content: \"\\f249\"; }\n.la-info:before { content: \"\\f24a\"; }\n.la-info-circle:before { content: \"\\f24b\"; }\n.la-inr:before { content: \"\\f24c\"; }\n.la-instagram:before { content: \"\\f24d\"; }\n.la-institution:before { content: \"\\f24e\"; }\n.la-internet-explorer:before { content: \"\\f24f\"; }\n.la-ioxhost:before { content: \"\\f250\"; }\n.la-italic:before { content: \"\\f251\"; }\n.la-joomla:before { content: \"\\f252\"; }\n.la-jpy:before { content: \"\\f253\"; }\n.la-jsfiddle:before { content: \"\\f254\"; }\n.la-key:before { content: \"\\f255\"; }\n.la-keyboard-o:before { content: \"\\f256\"; }\n.la-krw:before { content: \"\\f257\"; }\n.la-language:before { content: \"\\f258\"; }\n.la-laptop:before { content: \"\\f259\"; }\n.la-lastfm:before { content: \"\\f25a\"; }\n.la-lastfm-square:before { content: \"\\f25b\"; }\n.la-leaf:before { content: \"\\f25c\"; }\n.la-leanpub:before { content: \"\\f25d\"; }\n.la-legal:before { content: \"\\f25e\"; }\n.la-lemon-o:before { content: \"\\f25f\"; }\n.la-level-down:before { content: \"\\f260\"; }\n.la-level-up:before { content: \"\\f261\"; }\n.la-life-bouy:before { content: \"\\f262\"; }\n.la-life-buoy:before { content: \"\\f263\"; }\n.la-life-ring:before, .la-support:before { content: \"\\f264\"; }\n.la-life-saver:before { content: \"\\f265\"; }\n.la-lightbulb-o:before { content: \"\\f266\"; }\n.la-line-chart:before { content: \"\\f267\"; }\n.la-link:before { content: \"\\f268\"; }\n.la-linkedin:before { content: \"\\f269\"; }\n.la-linkedin-square:before { content: \"\\f26a\"; }\n.la-linux:before { content: \"\\f26b\"; }\n.la-list:before { content: \"\\f26c\"; }\n.la-list-alt:before { content: \"\\f26d\"; }\n.la-list-ol:before { content: \"\\f26e\"; }\n.la-list-ul:before { content: \"\\f26f\"; }\n.la-location-arrow:before { content: \"\\f270\"; }\n.la-lock:before { content: \"\\f271\"; }\n.la-long-arrow-down:before { content: \"\\f272\"; }\n.la-long-arrow-left:before { content: \"\\f273\"; }\n.la-long-arrow-right:before { content: \"\\f274\"; }\n.la-long-arrow-up:before { content: \"\\f275\"; }\n.la-magic:before { content: \"\\f276\"; }\n.la-magnet:before { content: \"\\f277\"; }\n.la-mail-forward:before { content: \"\\f278\"; }\n.la-mail-reply:before { content: \"\\f279\"; }\n.la-mail-reply-all:before { content: \"\\f27a\"; }\n.la-male:before { content: \"\\f27b\"; }\n.la-map:before { content: \"\\f27c\"; }\n.la-map-marker:before { content: \"\\f27d\"; }\n.la-map-o:before { content: \"\\f27e\"; }\n.la-map-pin:before { content: \"\\f27f\"; }\n.la-map-signs:before { content: \"\\f280\"; }\n.la-mars:before { content: \"\\f281\"; }\n.la-mars-double:before { content: \"\\f282\"; }\n.la-mars-stroke:before { content: \"\\f283\"; }\n.la-mars-stroke-h:before { content: \"\\f284\"; }\n.la-mars-stroke-v:before { content: \"\\f285\"; }\n.la-maxcdn:before { content: \"\\f286\"; }\n.la-meanpath:before { content: \"\\f287\"; }\n.la-medium:before { content: \"\\f288\"; }\n.la-medkit:before { content: \"\\f289\"; }\n.la-meh-o:before { content: \"\\f28a\"; }\n.la-mercury:before { content: \"\\f28b\"; }\n.la-microphone:before { content: \"\\f28c\"; }\n.la-microphone-slash:before { content: \"\\f28d\"; }\n.la-minus:before { content: \"\\f28e\"; }\n.la-minus-circle:before { content: \"\\f28f\"; }\n.la-minus-square:before { content: \"\\f290\"; }\n.la-minus-square-o:before { content: \"\\f291\"; }\n.la-mobile:before { content: \"\\f292\"; }\n.la-mobile-phone:before { content: \"\\f293\"; }\n.la-money:before { content: \"\\f294\"; }\n.la-moon-o:before { content: \"\\f295\"; }\n.la-mortar-board:before { content: \"\\f296\"; }\n.la-motorcycle:before { content: \"\\f297\"; }\n.la-mouse-pointer:before { content: \"\\f298\"; }\n.la-music:before { content: \"\\f299\"; }\n.la-navicon:before { content: \"\\f29a\"; }\n.la-neuter:before { content: \"\\f29b\"; }\n.la-newspaper-o:before { content: \"\\f29c\"; }\n.la-object-group:before { content: \"\\f29d\"; }\n.la-object-ungroup:before { content: \"\\f29e\"; }\n.la-odnoklassniki:before { content: \"\\f29f\"; }\n.la-odnoklassniki-square:before { content: \"\\f2a0\"; }\n.la-opencart:before { content: \"\\f2a1\"; }\n.la-openid:before { content: \"\\f2a2\"; }\n.la-opera:before { content: \"\\f2a3\"; }\n.la-optin-monster:before { content: \"\\f2a4\"; }\n.la-outdent:before { content: \"\\f2a5\"; }\n.la-pagelines:before { content: \"\\f2a6\"; }\n.la-paint-brush:before { content: \"\\f2a7\"; }\n.la-paper-plane:before, .la-send:before { content: \"\\f2a8\"; }\n.la-paper-plane-o:before, .la-send-o:before { content: \"\\f2a9\"; }\n.la-paperclip:before { content: \"\\f2aa\"; }\n.la-paragraph:before { content: \"\\f2ab\"; }\n.la-paste:before { content: \"\\f2ac\"; }\n.la-pause:before { content: \"\\f2ad\"; }\n.la-paw:before { content: \"\\f2ae\"; }\n.la-paypal:before { content: \"\\f2af\"; }\n.la-pencil:before { content: \"\\f2b0\"; }\n.la-pencil-square:before { content: \"\\f2b1\"; }\n.la-pencil-square-o:before { content: \"\\f2b2\"; }\n.la-phone:before { content: \"\\f2b3\"; }\n.la-phone-square:before { content: \"\\f2b4\"; }\n.la-photo:before { content: \"\\f2b5\"; }\n.la-picture-o:before { content: \"\\f2b6\"; }\n.la-pie-chart:before { content: \"\\f2b7\"; }\n.la-pied-piper:before { content: \"\\f2b8\"; }\n.la-pied-piper-alt:before { content: \"\\f2b9\"; }\n.la-pinterest:before { content: \"\\f2ba\"; }\n.la-pinterest-p:before { content: \"\\f2bb\"; }\n.la-pinterest-square:before { content: \"\\f2bc\"; }\n.la-plane:before { content: \"\\f2bd\"; }\n.la-play:before { content: \"\\f2be\"; }\n.la-play-circle:before { content: \"\\f2bf\"; }\n.la-play-circle-o:before { content: \"\\f2c0\"; }\n.la-plug:before { content: \"\\f2c1\"; }\n.la-plus:before { content: \"\\f2c2\"; }\n.la-plus-circle:before { content: \"\\f2c3\"; }\n.la-plus-square:before { content: \"\\f2c4\"; }\n.la-plus-square-o:before { content: \"\\f2c5\"; }\n.la-power-off:before { content: \"\\f2c6\"; }\n.la-print:before { content: \"\\f2c7\"; }\n.la-puzzle-piece:before { content: \"\\f2c8\"; }\n.la-qq:before { content: \"\\f2c9\"; }\n.la-qrcode:before { content: \"\\f2ca\"; }\n.la-question:before { content: \"\\f2cb\"; }\n.la-question-circle:before { content: \"\\f2cc\"; }\n.la-quote-left:before { content: \"\\f2cd\"; }\n.la-quote-right:before { content: \"\\f2ce\"; }\n.la-ra:before { content: \"\\f2cf\"; }\n.la-random:before { content: \"\\f2d0\"; }\n.la-rebel:before { content: \"\\f2d1\"; }\n.la-recycle:before { content: \"\\f2d2\"; }\n.la-reddit:before { content: \"\\f2d3\"; }\n.la-reddit-square:before { content: \"\\f2d4\"; }\n.la-refresh:before { content: \"\\f2d5\"; }\n.la-registered:before { content: \"\\f2d6\"; }\n.la-renren:before { content: \"\\f2d7\"; }\n.la-reorder:before { content: \"\\f2d8\"; }\n.la-repeat:before { content: \"\\f2d9\"; }\n.la-reply:before { content: \"\\f2da\"; }\n.la-reply-all:before { content: \"\\f2db\"; }\n.la-retweet:before { content: \"\\f2dc\"; }\n.la-rmb:before { content: \"\\f2dd\"; }\n.la-road:before { content: \"\\f2de\"; }\n.la-rocket:before { content: \"\\f2df\"; }\n.la-rotate-left:before { content: \"\\f2e0\"; }\n.la-rotate-right:before { content: \"\\f2e1\"; }\n.la-rouble:before { content: \"\\f2e2\"; }\n.la-rss:before, .la-feed:before { content: \"\\f2e3\"; }\n.la-rss-square:before { content: \"\\f2e4\"; }\n.la-rub:before { content: \"\\f2e5\"; }\n.la-ruble:before { content: \"\\f2e6\"; }\n.la-rupee:before { content: \"\\f2e7\"; }\n.la-safari:before { content: \"\\f2e8\"; }\n.la-save:before { content: \"\\f2e9\"; }\n.la-scissors:before { content: \"\\f2ea\"; }\n.la-search:before { content: \"\\f2eb\"; }\n.la-search-minus:before { content: \"\\f2ec\"; }\n.la-search-plus:before { content: \"\\f2ed\"; }\n.la-sellsy:before { content: \"\\f2ee\"; }\n.la-server:before { content: \"\\f2ef\"; }\n.la-share:before { content: \"\\f2f0\"; }\n.la-share-alt:before { content: \"\\f2f1\"; }\n.la-share-alt-square:before { content: \"\\f2f2\"; }\n.la-share-square:before { content: \"\\f2f3\"; }\n.la-share-square-o:before { content: \"\\f2f4\"; }\n.la-shekel:before { content: \"\\f2f5\"; }\n.la-sheqel:before { content: \"\\f2f6\"; }\n.la-shield:before { content: \"\\f2f7\"; }\n.la-ship:before { content: \"\\f2f8\"; }\n.la-shirtsinbulk:before { content: \"\\f2f9\"; }\n.la-shopping-cart:before { content: \"\\f2fa\"; }\n.la-sign-in:before { content: \"\\f2fb\"; }\n.la-sign-out:before { content: \"\\f2fc\"; }\n.la-signal:before { content: \"\\f2fd\"; }\n.la-simplybuilt:before { content: \"\\f2fe\"; }\n.la-sitemap:before { content: \"\\f2ff\"; }\n.la-skyatlas:before { content: \"\\f300\"; }\n.la-skype:before { content: \"\\f301\"; }\n.la-slack:before { content: \"\\f302\"; }\n.la-sliders:before { content: \"\\f303\"; }\n.la-slideshare:before { content: \"\\f304\"; }\n.la-smile-o:before { content: \"\\f305\"; }\n.la-sort:before, .la-unsorted:before { content: \"\\f306\"; }\n.la-sort-alpha-asc:before { content: \"\\f307\"; }\n.la-sort-alpha-desc:before { content: \"\\f308\"; }\n.la-sort-amount-asc:before { content: \"\\f309\"; }\n.la-sort-amount-desc:before { content: \"\\f30a\"; }\n.la-sort-asc:before, .la-sort-up:before { content: \"\\f30b\"; }\n.la-sort-desc:before, .la-sort-down:before { content: \"\\f30c\"; }\n.la-sort-numeric-asc:before { content: \"\\f30d\"; }\n.la-sort-numeric-desc:before { content: \"\\f30e\"; }\n.la-soundcloud:before { content: \"\\f30f\"; }\n.la-space-shuttle:before { content: \"\\f310\"; }\n.la-spinner:before { content: \"\\f311\"; }\n.la-spoon:before { content: \"\\f312\"; }\n.la-spotify:before { content: \"\\f313\"; }\n.la-square:before { content: \"\\f314\"; }\n.la-square-o:before { content: \"\\f315\"; }\n.la-stack-exchange:before { content: \"\\f316\"; }\n.la-stack-overflow:before { content: \"\\f317\"; }\n.la-star:before { content: \"\\f318\"; }\n.la-star-half:before { content: \"\\f319\"; }\n.la-star-half-o:before, .la-star-half-full:before, .la-star-half-empty:before { content: \"\\f31a\"; }\n.la-star-o:before { content: \"\\f31b\"; }\n.la-steam:before { content: \"\\f31c\"; }\n.la-steam-square:before { content: \"\\f31d\"; }\n.la-step-backward:before { content: \"\\f31e\"; }\n.la-step-forward:before { content: \"\\f31f\"; }\n.la-stethoscope:before { content: \"\\f320\"; }\n.la-sticky-note:before { content: \"\\f321\"; }\n.la-sticky-note-o:before { content: \"\\f322\"; }\n.la-stop:before { content: \"\\f323\"; }\n.la-street-view:before { content: \"\\f324\"; }\n.la-strikethrough:before { content: \"\\f325\"; }\n.la-stumbleupon:before { content: \"\\f326\"; }\n.la-stumbleupon-circle:before { content: \"\\f327\"; }\n.la-subscript:before { content: \"\\f328\"; }\n.la-subway:before { content: \"\\f329\"; }\n.la-suitcase:before { content: \"\\f32a\"; }\n.la-sun-o:before { content: \"\\f32b\"; }\n.la-superscript:before { content: \"\\f32c\"; }\n.la-table:before { content: \"\\f32d\"; }\n.la-tablet:before { content: \"\\f32e\"; }\n.la-tachometer:before { content: \"\\f32f\"; }\n.la-tag:before { content: \"\\f330\"; }\n.la-tags:before { content: \"\\f331\"; }\n.la-tasks:before { content: \"\\f332\"; }\n.la-taxi:before { content: \"\\f333\"; }\n.la-television:before, .la-tv:before { content: \"\\f334\"; }\n.la-tencent-weibo:before { content: \"\\f335\"; }\n.la-terminal:before { content: \"\\f336\"; }\n.la-text-height:before { content: \"\\f337\"; }\n.la-text-width:before { content: \"\\f338\"; }\n.la-th:before { content: \"\\f339\"; }\n.la-th-large:before { content: \"\\f33a\"; }\n.la-th-list:before { content: \"\\f33b\"; }\n.la-thumb-tack:before { content: \"\\f33c\"; }\n.la-thumbs-down:before { content: \"\\f33d\"; }\n.la-thumbs-o-down:before { content: \"\\f33e\"; }\n.la-thumbs-o-up:before { content: \"\\f33f\"; }\n.la-thumbs-up:before { content: \"\\f340\"; }\n.la-ticket:before { content: \"\\f341\"; }\n.la-times:before, .la-remove:before { content: \"\\f342\"; }\n.la-times-circle:before { content: \"\\f343\"; }\n.la-times-circle-o:before { content: \"\\f344\"; }\n.la-tint:before { content: \"\\f345\"; }\n.la-toggle-off:before { content: \"\\f346\"; }\n.la-toggle-on:before { content: \"\\f347\"; }\n.la-trademark:before { content: \"\\f348\"; }\n.la-train:before { content: \"\\f349\"; }\n.la-transgender:before, .la-intersex:before { content: \"\\f34a\"; }\n.la-transgender-alt:before { content: \"\\f34b\"; }\n.la-trash:before { content: \"\\f34c\"; }\n.la-trash-o:before { content: \"\\f34d\"; }\n.la-tree:before { content: \"\\f34e\"; }\n.la-trello:before { content: \"\\f34f\"; }\n.la-tripadvisor:before { content: \"\\f350\"; }\n.la-trophy:before { content: \"\\f351\"; }\n.la-truck:before { content: \"\\f352\"; }\n.la-try:before { content: \"\\f353\"; }\n.la-tty:before { content: \"\\f354\"; }\n.la-tumblr:before { content: \"\\f355\"; }\n.la-tumblr-square:before { content: \"\\f356\"; }\n.la-turkish-lira:before { content: \"\\f357\"; }\n.la-twitch:before { content: \"\\f358\"; }\n.la-twitter:before { content: \"\\f359\"; }\n.la-twitter-square:before { content: \"\\f35a\"; }\n.la-umbrella:before { content: \"\\f35b\"; }\n.la-underline:before { content: \"\\f35c\"; }\n.la-undo:before { content: \"\\f35d\"; }\n.la-university:before { content: \"\\f35e\"; }\n.la-unlink:before { content: \"\\f35f\"; }\n.la-unlock:before { content: \"\\f360\"; }\n.la-unlock-alt:before { content: \"\\f361\"; }\n.la-upload:before { content: \"\\f362\"; }\n.la-usd:before { content: \"\\f363\"; }\n.la-user:before { content: \"\\f364\"; }\n.la-user-md:before { content: \"\\f365\"; }\n.la-user-plus:before { content: \"\\f366\"; }\n.la-user-secret:before { content: \"\\f367\"; }\n.la-user-times:before { content: \"\\f368\"; }\n.la-users:before { content: \"\\f369\"; }\n.la-venus:before { content: \"\\f36a\"; }\n.la-venus-double:before { content: \"\\f36b\"; }\n.la-venus-mars:before { content: \"\\f36c\"; }\n.la-viacoin:before { content: \"\\f36d\"; }\n.la-video-camera:before { content: \"\\f36e\"; }\n.la-vimeo:before { content: \"\\f36f\"; }\n.la-vimeo-square:before { content: \"\\f370\"; }\n.la-vine:before { content: \"\\f371\"; }\n.la-vk:before { content: \"\\f372\"; }\n.la-volume-down:before { content: \"\\f373\"; }\n.la-volume-off:before { content: \"\\f374\"; }\n.la-volume-up:before { content: \"\\f375\"; }\n.la-warning:before { content: \"\\f376\"; }\n.la-wechat:before { content: \"\\f377\"; }\n.la-weibo:before { content: \"\\f378\"; }\n.la-weixin:before { content: \"\\f379\"; }\n.la-whatsapp:before { content: \"\\f37a\"; }\n.la-wheelchair:before { content: \"\\f37b\"; }\n.la-wifi:before { content: \"\\f37c\"; }\n.la-wikipedia-w:before { content: \"\\f37d\"; }\n.la-windows:before { content: \"\\f37e\"; }\n.la-won:before { content: \"\\f37f\"; }\n.la-wordpress:before { content: \"\\f380\"; }\n.la-wrench:before { content: \"\\f381\"; }\n.la-xing:before { content: \"\\f382\"; }\n.la-xing-square:before { content: \"\\f383\"; }\n.la-y-combinator:before { content: \"\\f384\"; }\n.la-y-combinator-square:before { content: \"\\f385\"; }\n.la-yahoo:before { content: \"\\f386\"; }\n.la-yc:before { content: \"\\f387\"; }\n.la-yc-square:before { content: \"\\f388\"; }\n.la-yelp:before { content: \"\\f389\"; }\n.la-yen:before { content: \"\\f38a\"; }\n.la-youtube:before { content: \"\\f38b\"; }\n.la-youtube-play:before { content: \"\\f38c\"; }\n.la-youtube-square:before { content: \"\\f38d\"; }", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.eot":
/*!**************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.eot ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon.eot?ff4db9d699282a5e5f6ca4df550d4439");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.svg":
/*!**************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.svg ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon.svg?9b97d4a03f52096e0278a9fe29e338ae");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.ttf":
/*!**************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.ttf ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon.ttf?00eacf86b4318d9958a8179dea589b04");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.woff":
/*!***************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon/font/Flaticon.woff ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon.woff?a53eae6b65c8492060d77a4b55fb79f7");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.eot":
/*!****************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.eot ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon2.eot?5971908741f540117ba1d68f2304dd85");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.svg":
/*!****************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.svg ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon2.svg?79370877b4f6af461592daf107da82bb");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.ttf":
/*!****************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.ttf ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon2.ttf?41914745046d0478cead813ef1a0c614");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.woff":
/*!*****************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon2/font/Flaticon2.woff ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/Flaticon2.woff?76f38df3aea1a621f8bf1ae415a0311d");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.eot??v=1.1.":
/*!*******************************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.eot??v=1.1. ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/line-awesome.eot?3400fa38b566632e63a76d3b766689ee");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.eot?v=1.1.":
/*!******************************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.eot?v=1.1. ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/line-awesome.eot?3400fa38b566632e63a76d3b766689ee");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.svg?v=1.1.":
/*!******************************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.svg?v=1.1. ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/line-awesome.svg?f4b3204d4678bf15ec93569dea727e87");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.ttf?v=1.1.":
/*!******************************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.ttf?v=1.1. ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/line-awesome.ttf?09dc31126068bedb290b1efed5216b26");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.woff2?v=1.1.":
/*!********************************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.woff2?v=1.1. ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/line-awesome.woff2?4b43b038741cb489a5027a5c8ab14fb9");

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.woff?v=1.1.":
/*!*******************************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/line-awesome/fonts/line-awesome.woff?v=1.1. ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/line-awesome.woff?58df7918b614b748dd5715159ffc8c65");

/***/ }),

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon/flaticon.css":
/*!*********************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon/flaticon.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_flaticon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./flaticon.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/flaticon/flaticon.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_flaticon_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_flaticon_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/flaticon2/flaticon.css":
/*!**********************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/flaticon2/flaticon.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_flaticon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./flaticon.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/flaticon2/flaticon.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_flaticon_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_flaticon_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/metronic/src/assets/plugins/line-awesome/css/line-awesome.css":
/*!*********************************************************************************!*\
  !*** ./resources/metronic/src/assets/plugins/line-awesome/css/line-awesome.css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_line_awesome_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./line-awesome.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/metronic/src/assets/plugins/line-awesome/css/line-awesome.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_line_awesome_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_line_awesome_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets/css/app","/assets/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);