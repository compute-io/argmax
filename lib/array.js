'use strict';

/**
* FUNCTION: argmax( arr )
*	Computes the maximum value of an array and returns the corresponding array indices.
*
* @param {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @returns {Number[]|Null} maximum value indices
*/
function argmax( arr ) {
	var len = arr.length,
		max,
		i, v,
		idx;

	if ( !len ) {
		return null;
	}
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
	return idx;
} // end FUNCTION argmax()


// EXPORTS //

module.exports = argmax;
