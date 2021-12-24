import '../metronic/tools/webpack/vendors/global';
import '../metronic/tools/webpack/scripts';
import './helper';
import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');

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
    template: `
            <div data-notify="container" class="col-sm-5 col-md-4 col-lg-3 bg-white shadow-lg px-1 py-4 rounded-lg border-left border-{0}" style="border-width:6px !important;" role="alert">
                <div class="d-flex">
                <button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button>
                <div class="mx-3">
                    <span data-notify="icon" class="p-2 text-white bg-{0} rounded-circle"></span>
                </div>
                <div class="text-break">
                <span data-notify="title">{1}</span>
                <span data-notify="message">{2}</span>
                </div>
                <a href="{3}" target="{4}" data-notify="url"></a>
            </div>`,
    animate: {
        enter: 'animated fadeInUp',
        exit: 'animated fadeOutDown'
    }
});

$.fn.selectpicker.Constructor.DEFAULTS.iconBase = '';
$.fn.selectpicker.Constructor.DEFAULTS.tickIcon = 'fas fa-check';

window.emitEvent = function(name, options) {
    window.dispatchEvent(new CustomEvent(name, { detail: options }));
};

window.addEventListener('notify', event => {
    let icon = 'flaticon-exclamation-1';
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

    let option = { icon: icon, message: event.detail.message };
    if (event.detail.url) {
        option = { ...option, url: event.detail.url, target: '_blank' };
    }
    $.notify(option, { type: event.detail.type });
});

document.addEventListener('DOMContentLoaded', function(event) {
    Livewire.hook('element.removed', () => {
        KTApp.initTooltips();
    });
});

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: process.env.MIX_WEBSOCKET_HOST ,
    wsPort: process.env.MIX_WEBSOCKET_PORT ,
    forceTLS: false,
    disableStats: true
});

window.Echo.private(`App.Models.User.${window.__user__.id}`).notification(
    notification =>
        window.emitEvent('notify', {
            type: 'primary',
            message: notification.description,
            url: notification.url
        })
);
