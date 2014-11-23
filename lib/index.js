/**
*
*	COMPUTE: argmax
*
*
*	DESCRIPTION:
*		- Computes the maximum value of a numeric array and returns the corresponding array indices.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: argmax( arr )
*	Computes the maximum value of a numeric array and returns the corresponding array indices.
*
* @param {Array} arr - array of values
* @returns {Array} array indices
*/
function argmax( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'argmax()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		max = arr[ 0 ],
		idx = [ 0 ],
		val;

	for ( var i = 1; i < len; i++ ) {
		val = arr[ i ];
		if ( val > max ) {
			max = val;
			idx.length = 0;
			idx.push( i );
		}
		else if ( val === max ) {
			idx.push( i );
		}
	}
	return idx;
} // end FUNCTION argmax()


// EXPORTS //

module.exports = argmax;
