require('alpine-magic-helpers');
import '@ryangjchandler/spruce';
require('alpinejs');

window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
