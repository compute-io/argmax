'use strict';

var matrix = require( 'dstructs-matrix' ),
	argmax = require( './../lib' ),
	util = require( 'util' );

var data,
	mat,
	idx,
	i;

// ----
// Plain arrays...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
idx = argmax( data );
console.log( 'Arrays: %d\n', idx );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
idx = argmax( data, {
	'accessor': getValue
});
console.log( 'Accessors: %d\n', idx );


// ----
// Typed arrays...
data = new Int32Array( 1000 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random() * 100 );
}
idx = argmax( data );
console.log( 'Typed Arrays: \n' );
console.log( util.inspect( idx ) );

// ----
// Matrices (along rows)...
mat = matrix( data, [20,50], 'int32' );
idx = argmax( mat, {
	'dim': 1
});
console.log( 'Matrix (rows): \n' );
console.log( util.inspect( idx ) );

// ----
// Matrices (along columns)...
idx = argmax( mat, {
	'dim': 2
});
console.log( 'Matrix (columns): \n');
console.log( util.inspect( idx ) );
