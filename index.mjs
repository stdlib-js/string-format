// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-format-interpolate@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-format-tokenize@v0.1.0-esm/index.mjs";function e(t){return"string"==typeof t}function n(s){var i,o,f;if(!e(s))throw new TypeError(n("1Of3F,Ex",s));for(i=r(s),(o=new Array(arguments.length))[0]=i,f=1;f<o.length;f++)o[f]=arguments[f];return t.apply(null,o)}export{n as default};
//# sourceMappingURL=index.mjs.map
