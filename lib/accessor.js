'use strict';

/**
* FUNCTION: max( arr, clbk )
*	Computes the maximum value of an array using an accessor.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number[]|Null} maximum value indices
*/
function argmax( arr, clbk ) {
	var len = arr.length,
		max,
		i, v,
		idx;

	if ( !len ) {
		return null;
	}

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

	return idx;
} // end FUNCTION argmax()


// EXPORTS //

module.exports = argmax;
