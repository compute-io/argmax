'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' ),
	isMatrixLike = require( 'validate.io-matrix-like' ),
	validate = require( './validate.js' );


// FUNCTIONS //

var argmax1 = require( './array.js' ),
	argmax2 = require( './accessor.js' ),
	argmax3 = require( './matrix.js' );

// ARG MAX //

/**
* FUNCTION: argmax( x[, options] )
*	Computes the maximum value of elements in x and returns the corresponding array indices.
*
* @param {Number[]|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} x - input value
* @param {Object} [opts] - function options
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @param {Number} [opts.dim=2] - dimension along which to compute the maximum
* @returns {Number[]|Array|Null} maximum value indices or null
*/
function argmax( x, options ) {

	/* jshint newcap:false */
	var opts = {},
		shape,
		err,
		len,
		dim,
		idx;

	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( isMatrixLike( x ) ) {

		dim = opts.dim;
		if ( dim > 2 ) {
			throw new RangeError( 'argmax()::invalid option. Dimension option exceeds number of matrix dimensions. Option: `' + dim + '`.' );
		}

		// Determine if provided a vector...
		if ( x.shape[ 0 ] === 1 || x.shape[ 1 ] === 1 ) {
			// Treat as an array-like object:
			return argmax1( x.data );
		}
		if ( dim === void 0 || dim === 2 ) {
			len = x.shape[ 0 ];
			shape = [ len, 1 ];
		} else {
			len = x.shape[ 1 ];
			shape = [ 1, len ];
		}
		idx = [];
		return argmax3( idx, x, dim );
	}

	if ( isArrayLike( x ) ) {
		if ( opts.accessor ) {
			return argmax2( x, opts.accessor );
		}
		return argmax1( x );
	}
	throw new TypeError( 'argmax()::invalid input argument. First argument must be either an array or a matrix. Value: `' + x + '`.' );
} // end FUNCTION argmax()


// EXPORTS //

module.exports = argmax;
