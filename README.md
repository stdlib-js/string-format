<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# format

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Insert supplied variable values into a format string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-format
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var format = require( '@stdlib/string-format' );
```

#### format( str, ...args )

Inserts supplied variable values into a format string.

```javascript
var str = 'Hello, %s! My name is %s.';
var out = format( str, 'world', 'Bob' );
// returns 'Hello, world! My name is Bob.'
```

The format string is a string literal containing zero or more conversion specifications, each of which results in a string value being inserted to the output string. A conversion specification consists of a percent sign (`%`) followed by one or more of the following flags, width, precision, and conversion type characters:

| type | description              | notes        |
| ---- | -------------------------| ------------ |
| s    | string                   |              |
| c    | character                |              |
| d    | signed decimal integer   |              |
| i    | signed decimal integer   |              |
| u    | unsigned decimal integer |              |
| b    | unsigned binary integer  |              |
| o    | unsigned octal integer   |              |
| x    | unsigned hexadecimal     |              |
| X    | unsigned hexadecimal     |              |
| f    | floating point           |              |
| e    | floating point           |              |
| E    | floating point           |              |
| g    | floating point           |              |
| G    | floating point           |              |

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var format = require( '@stdlib/string-format' );

var out = format( '%s %s!', 'Hello', 'World' );
// returns 'Hello World!'

out = format( 'Pi: ~%.2f', 3.141592653589793 );
// returns 'Pi: ~3.14'

out = format( '%-10s %-10s', 'a', 'b' );
// returns 'a       b       '

out = format( '%10s %10s', 'a', 'b' );
// returns '       a       b'

out = format( '%2$s %1$s %3$s', 'b', 'a', 'c' );
// returns 'a b c'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-format.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-format

[test-image]: https://github.com/stdlib-js/string-format/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-format/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-format/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-format?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-format.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-format/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-format/tree/deno
[umd-url]: https://github.com/stdlib-js/string-format/tree/umd
[esm-url]: https://github.com/stdlib-js/string-format/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-format/main/LICENSE

</section>

<!-- /.links -->
