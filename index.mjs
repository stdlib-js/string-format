// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-format-interpolate@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-format-tokenize@v0.1.1-esm/index.mjs";function e(t){return"string"==typeof t}function n(s){var i,o;if(!e(s))throw new TypeError(n("1Of3F,Ex",s));for(i=[r(s)],o=1;o<arguments.length;o++)i.push(arguments[o]);return t.apply(null,i)}export{n as default};
//# sourceMappingURL=index.mjs.map
