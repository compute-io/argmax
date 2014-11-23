argmax
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the maximum value of a numeric array and returns the corresponding array indices.


## Installation

``` bash
$ npm install compute-argmax
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var argmax = require( 'compute-argmax' );
```

#### argmax( arr )

Computes the maximum value of a numeric `array` and returns the corresponding `array` indices.

``` javascript
var data = [ 3, 2, 5, 2, 5 ];

var idx = argmax( data );
// returns [2,4]
```


## Examples

``` javascript
var argmax = require( 'compute-argmax' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}
var idx = argmax( data );
console.log( idx );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-argmax.svg
[npm-url]: https://npmjs.org/package/compute-argmax

[travis-image]: http://img.shields.io/travis/compute-io/argmax/master.svg
[travis-url]: https://travis-ci.org/compute-io/argmax

[coveralls-image]: https://img.shields.io/coveralls/compute-io/argmax/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/argmax?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/argmax.svg
[dependencies-url]: https://david-dm.org/compute-io/argmax

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/argmax.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/argmax

[github-issues-image]: http://img.shields.io/github/issues/compute-io/argmax.svg
[github-issues-url]: https://github.com/compute-io/argmax/issues
