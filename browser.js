// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=function(e){return"number"==typeof e};function r(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}var i=function(e,i,a){var t=!1,n=i-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=a?e+r(n):r(n)+e,t&&(e="-"+e)),e},a=e,t=i,n=String.prototype.toLowerCase,o=String.prototype.toUpperCase,s=function(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!a(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=t(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=t(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i},c=function(e){return"string"==typeof e},p=e,l=Math.abs,f=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,u=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,y=/(\..*[^0])0*e/;function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var k=s,E=c,$=function(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!p(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":l(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=d.call(i,y,"$1e"),i=d.call(i,m,"e"),i=d.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=d.call(i,u,"e+0$1"),i=d.call(i,h,"e-0$1"),e.alternate&&(i=d.call(i,w,"$1."),i=d.call(i,b,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===g.call(e.specifier)?g.call(i):f.call(i)},S=function(e,r,i){var a=r-e.length;return a<0?e:e=i?e+x(a):x(a)+e},I=i,T=String.fromCharCode,V=isNaN,F=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}var A=function(e){var r,i,a,t,n,o,s,c,p;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(a=e[c],E(a))o+=a;else{if(r=void 0!==a.precision,!(a=R(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),i=a.flags,p=0;p<i.length;p++)switch(t=i.charAt(p)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===a.width){if(a.width=parseInt(arguments[s],10),s+=1,V(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[s],10),s+=1,V(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=k(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!V(a.arg)){if((n=parseInt(a.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=V(n)?String(a.arg):T(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=$(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=I(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=S(a.arg,a.width,a.padRight)),o+=a.arg||"",s+=1}return o},C=A,Z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}var L=function(e){var r,i,a,t;for(i=[],t=0,a=Z.exec(e);a;)(r=e.slice(t,Z.lastIndex-a[0].length)).length&&i.push(r),i.push(W(a)),t=Z.lastIndex,a=Z.exec(e);return(r=e.slice(t)).length&&i.push(r),i};function G(e){return"string"==typeof e}return function e(r){var i,a,t;if(!G(r))throw new TypeError(e("0hB3R",r));for(i=L(r),(a=new Array(arguments.length))[0]=i,t=1;t<a.length;t++)a[t]=arguments[t];return C.apply(null,a)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).format=r();
//# sourceMappingURL=browser.js.map