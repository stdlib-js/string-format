// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).format=r()}(this,(function(){"use strict";var e=function(e){return"number"==typeof e};function r(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}var i=function(e,i,a){var t=!1,n=i-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=a?e+r(n):r(n)+e,t&&(e="-"+e)),e},a=e,t=i,n=String.prototype.toLowerCase,s=String.prototype.toUpperCase;var o=function(e){var r,i,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,o=parseInt(i,10),!isFinite(o)){if(!a(i))throw new Error("invalid integer. Value: "+i);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(i=(-o).toString(r),e.precision&&(i=t(i,e.precision,e.padRight)),i="-"+i):(i=o.toString(r),o||e.precision?e.precision&&(i=t(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i},c=e,p=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,d=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,u=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){return{mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],hasPeriod:"."===e[4],precision:e[5],specifier:e[6]}}function y(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var E=o,$=function(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!c(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=d.call(i,m,"$1e"),i=d.call(i,v,"e"),i=d.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=d.call(i,g,"e+0$1"),i=d.call(i,h,"e-0$1"),e.alternate&&(i=d.call(i,u,"$1."),i=d.call(i,w,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):l.call(i)},S=function(e){var r,i,a,t;for(i=[],t=0,a=x.exec(e);a;)(r=e.slice(t,x.lastIndex-a[0].length)).length&&i.push(r),i.push(k(a)),t=x.lastIndex,a=x.exec(e);return(r=e.slice(t)).length&&i.push(r),i},F=function(e,r,i){var a=r-e.length;return a<0?e:e=i?e+y(a):y(a)+e},I=i,P=function(e){return"string"==typeof e},V=String.fromCharCode,C=isNaN;var R=function e(r){var i,a,t,n,s,o,c,p,l;if(!P(r))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",r));for(i=S(r),o="",c=1,p=0;p<i.length;p++)if(t=i[p],P(t))o+=t;else{for(t.mapping&&(c=t.mapping),a=t.flags,l=0;l<a.length;l++)switch(n=a.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=a.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,C(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if("*"===t.precision&&t.hasPeriod){if(t.precision=parseInt(arguments[c],10),c+=1,C(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,t.hasPeriod=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t.hasPeriod&&(t.padZeros=!1),t.arg=E(t);break;case"s":t.maxWidth=t.hasPeriod?t.precision:-1;break;case"c":if(!C(t.arg)){if((s=parseInt(t.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=C(s)?String(t.arg):V(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":t.hasPeriod||(t.precision=6),t.arg=$(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=I(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=F(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o};return R}));
//# sourceMappingURL=bundle.js.map
