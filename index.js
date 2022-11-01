// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return"number"==typeof e}function r(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function i(e,i,a){var t=!1,n=i-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=a?e+r(n):r(n)+e,t&&(e="-"+e)),e}var a=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function n(r){var n,o,s;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(o=r.arg,s=parseInt(o,10),!isFinite(s)){if(!e(o))throw new Error("invalid integer. Value: "+o);s=0}return s<0&&("u"===r.specifier||10!==n)&&(s=4294967295+s+1),s<0?(o=(-s).toString(n),r.precision&&(o=i(o,r.precision,r.padRight)),o="-"+o):(o=s.toString(n),s||r.precision?r.precision&&(o=i(o,r.precision,r.padRight)):o="",r.sign&&(o=r.sign+o)),16===n&&(r.alternate&&(o="0x"+o),o=r.specifier===t.call(r.specifier)?t.call(o):a.call(o)),8===n&&r.alternate&&"0"!==o.charAt(0)&&(o="0"+o),o}function o(e){return"string"==typeof e}var s=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,u=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var i,a,t=parseFloat(r.arg);if(!isFinite(t)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+a);t=r.arg}switch(r.specifier){case"e":case"E":a=t.toExponential(r.precision);break;case"f":case"F":a=t.toFixed(r.precision);break;case"g":case"G":s(t)<1e-4?((i=r.precision)>0&&(i-=1),a=t.toExponential(i)):a=t.toPrecision(r.precision),r.alternate||(a=l.call(a,b,"$1e"),a=l.call(a,w,"e"),a=l.call(a,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=l.call(a,f,"e+0$1"),a=l.call(a,g,"e-0$1"),r.alternate&&(a=l.call(a,d,"$1."),a=l.call(a,u,"$1.e")),t>=0&&r.sign&&(a=r.sign+a),a=r.specifier===p.call(r.specifier)?p.call(a):c.call(a)}function m(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function y(e,r,i){var a=r-e.length;return a<0?e:e=i?e+m(a):m(a)+e}var x=String.fromCharCode,k=isNaN,E=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,a,t,s,c,p,l,f,g;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,f=0;f<e.length;f++)if(o(t=e[f]))p+=t;else{if(r=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),a=t.flags,g=0;g<a.length;g++)switch(s=a.charAt(g)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=a.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+s)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,k(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=n(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!k(t.arg)){if((c=parseInt(t.arg,10))<0||c>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(c)?String(t.arg):x(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=v(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=y(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,i,a,t;for(i=[],t=0,a=I.exec(e);a;)(r=e.slice(t,I.lastIndex-a[0].length)).length&&i.push(r),i.push(T(a)),t=I.lastIndex,a=I.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function F(e){return"string"==typeof e}return function e(r){var i,a,t;if(!F(r))throw new TypeError(e("0hB3R",r));for(i=V(r),(a=new Array(arguments.length))[0]=i,t=1;t<a.length;t++)a[t]=arguments[t];return S.apply(null,a)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).format=r();
//# sourceMappingURL=index.js.map
