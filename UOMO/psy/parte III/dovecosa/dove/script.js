"use strict";
//  passive events 
var passiveSupported = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function () { passiveSupported = true; } }));
}
catch (err) { }
//  scroll listener
addEventListener('scroll', function (e) {
    var height = document.querySelector('.parallax').getBoundingClientRect().height;
    var percentage = Math.min(Math.max(pageYOffset / height, 0), 1);
    document.documentElement.style.setProperty('--pct', percentage);
}, passiveSupported ? { passive: true } : false);
//  link to open without iframe 
var inIframe = function () { try {
    return window.self !== window.top;
}
catch (e) {
    return true;
} };
if (inIframe())
    document.querySelector('.no-iframe').style.display = 'block';