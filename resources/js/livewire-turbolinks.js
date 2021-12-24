(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) : factory();
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
            const component = el.__livewire;
            if (component) {
                const dataObject = {
                    fingerprint: component.fingerprint,
                    serverMemo: component.serverMemo,
                    effects: component.effects,
                };
                el.setAttribute(
                    'wire:initial-data',
                    JSON.stringify(dataObject)
                );
            }
        });
    }

    document.addEventListener('turbo:load', wireTurboAfterFirstVisit);
    document.addEventListener('turbo:before-cache', wireTurboBeforeCache);
    Livewire.hook('beforePushState', (state) => {
        if (!state.turbolinks) state.turbolinks = {};
    });
    Livewire.hook('beforeReplaceState', (state) => {
        if (!state.turbolinks) state.turbolinks = {};
    });
});
