'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );


// ARGMAX //

/**
* FUNCTION: argmax( arr[, accessor] )
*	Computes the maximum value of an array and returns the corresponding array indices.
*
* @param {Number[]|Array} arr - input array
* @returns {Number[]|Null} maximum value indices
*/
function argmax( arr, clbk ) {
	var len,
		max,
		idx,
		v, i;
	if ( !isArray( arr ) ) {
		throw new TypeError( 'argmax()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'argmax()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	len = arr.length;
	if ( !len ) {
		return null;
	}
	if ( clbk ) {
		max = clbk( arr[ 0 ], 0 );
		idx = [ 0 ];
		for ( i = 1; i < len; i++ ) {
			v = clbk( arr[ i ], i );
			if ( v > max ) {
				max = v;
				idx.length = 0;
				idx.push( i );
			}
			else if ( v === max ) {
				idx.push( i );
			}
		}
	} else {
		max = arr[ 0 ];
		idx = [ 0 ];
		for ( i = 1; i < len; i++ ) {
			v = arr[ i ];
			if ( v > max ) {
				max = v;
				idx.length = 0;
				idx.push( i );
			}
			else if ( v === max ) {
				idx.push( i );
			}
		}
	}
	return idx;
} // end FUNCTION argmax()


// EXPORTS //

module.exports = argmax;
