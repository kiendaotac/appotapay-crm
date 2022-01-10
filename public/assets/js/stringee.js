(self["webpackChunk"] = self["webpackChunk"] || []).push([["/assets/js/stringee"],{

/***/ "./resources/js/stringee.js":
/*!**********************************!*\
  !*** ./resources/js/stringee.js ***!
  \**********************************/
/***/ (() => {

var callRef = null;
var FROM_NUMBER = [{
  alias: 'Hoàng Kiên Phone',
  number: '842471099386'
}]; // window.__user__.stringee_token = 'eyJjdHkiOiJzdHJpbmdlZS1hcGk7dj0xIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiJTS2tuT1p6OVgyZ2tKdTZqMjlrWWkwRWptMHp3NHZFbmJ4LTE2NDE1ODAzMTYiLCJpc3MiOiJTS2tuT1p6OVgyZ2tKdTZqMjlrWWkwRWptMHp3NHZFbmJ4IiwiZXhwIjoxNjQ0MTcyMzE2LCJ1c2VySWQiOiIxIn0.EDnJZoXKa7su0HSxd2zDGRSVJ7wKgVlCT59oie5B-jw';

var STATE_CODE = {
  CALLING: 1,
  RINGING: 2,
  ANSWERED: 3,
  BUSY: 5,
  END: 6
};
var CONFIG = {
  showMode: window.sessionStorage.getItem('stringee_show_mode') ? window.sessionStorage.getItem('stringee_show_mode') : 'min',
  bottom: 10,
  right: 10,
  arrowLeft: 155,
  arrowDisplay: 'none',
  fromNumbers: FROM_NUMBER
};
StringeeSoftPhone.init(CONFIG);
StringeeSoftPhone.on('requestNewToken', function () {
  console.log('requestNewToken+++++++');
  StringeeSoftPhone.connect(window.__user__.stringee_token);
});
StringeeSoftPhone.on('authen', function (res) {
  console.log('authen: ', res);
});
window.addEventListener('DOMContentLoaded', function (event) {// Livewire.emit('incoming-call', 'xxx-123-abc-246', '84374331095');
  // Livewire.emit(
  //     'incoming-call-answered',
  //     'xxx-123-abc-246'
  // );
  // Livewire.emit(
  //     'call-ended',
  //     'xxx-123-abc-246',
  //     864
  // );
});
StringeeSoftPhone.on('incomingCall', function (incomingCall) {
  console.log('incomingCall', incomingCall);
  console.log('incomingCall.callId', incomingCall.callId);
  window.sessionStorage.setItem('call_id', incomingCall.callId);
  window.sessionStorage.setItem('phone_number', incomingCall.fromNumber);
  Livewire.emit('incoming-call', incomingCall.callId, incomingCall.fromNumber);
  console.log('setCookie', window.sessionStorage.getItem('call_id'), window.sessionStorage.getItem('phone_number'));
});
StringeeSoftPhone.on('makeOutgoingCallBtnClick', function (fromNumber, toNumber, callType) {
  console.log('makeOutgoingCallBtnClick', toNumber, fromNumber, callType);
  window.sessionStorage.setItem('phone_number', toNumber);
});
StringeeSoftPhone.on('answerIncomingCallBtnClick', function () {
  console.log('answerIncomingCallBtnClick test ');
  window.sessionStorage.setItem('stringee_show_mode', 'min');
  window.sessionStorage.setItem('call_start_time', new Date().getTime());
  Livewire.emit('incoming-call-answered', window.sessionStorage.getItem('call_id'));
});
StringeeSoftPhone.on('signalingstate', function (state) {
  window.sessionStorage.setItem('stringee_show_mode', 'min');
  console.log('signaling');

  switch (state.code) {
    case STATE_CODE.ANSWERED:
      window.sessionStorage.setItem('call_start_time', new Date().getTime());

      if (window.sessionStorage.getItem('outgoing_from_ticket')) {
        // TODO: update log for exist ticket
        console.log('ticket exist');
      } else {
        console.log(' new ticket');
        window.sessionStorage.setItem('call_id', callRef.callId);
        Livewire.emit('outgoing-call-answered', callRef.callId, window.sessionStorage.getItem('phone_number'));
      }

      break;

    case STATE_CODE.BUSY:
      window.sessionStorage.removeItem('outgoing_from_ticket');
      window.sessionStorage.removeItem('call_id');
      break;

    case STATE_CODE.END:
      var end_time_in_second = (new Date().getTime() - parseInt(window.sessionStorage.getItem('call_start_time'))) / 1000;
      console.log(end_time_in_second);
      Livewire.emit('call-ended', window.sessionStorage.getItem('call_id'), end_time_in_second);
      window.sessionStorage.removeItem('outgoing_from_ticket');
      window.sessionStorage.removeItem('call_id');
      window.sessionStorage.removeItem('call_start_time');
      break;

    default:
      break;
  }
});
StringeeSoftPhone.on('endCallBtnClick', function (data) {
  var end_time_in_second = (new Date().getTime() - parseInt(window.sessionStorage.getItem('call_start_time'))) / 1000;
  console.log(end_time_in_second);
  Livewire.emit('call-ended', window.sessionStorage.getItem('call_id'), end_time_in_second);
  window.sessionStorage.removeItem('outgoing_from_ticket');
  window.sessionStorage.removeItem('call_id');
  window.sessionStorage.removeItem('call_start_time');
});
StringeeSoftPhone.on('addlocalstream', function (data) {
  console.log('On addlocalstream: ');
  console.log(data);
});
StringeeSoftPhone.on('beforeMakeCall', function (call, callType) {
  callRef = call;
  return true;
});
StringeeSoftPhone.on('displayModeChange', function (event) {
  console.log('displayModeChange', event);

  if (event === 'min') {
    window.sessionStorage.setItem('stringee_show_mode', 'min');
    StringeeSoftPhone.config({
      arrowLeft: 0
    });
  } else if (event === 'full') {
    window.sessionStorage.setItem('stringee_show_mode', 'full');
    StringeeSoftPhone.config({
      arrowLeft: 155
    });
  }
}); //transferCallBtnClick

StringeeSoftPhone.on('transferCallBtnClick', function (event) {
  document.getElementById('open_dp').click();
});
StringeeSoftPhone.connect(window.__user__.stringee_token);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/stringee.js"));
/******/ }
]);