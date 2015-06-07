/* global describe, it, require, beforeEach */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	argmax = require( './../lib/matrix.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'matrix arg maximum', function tests() {

	var data,
		mat;

	data = new Int8Array( [ 1, 2, 3, 6, 5, 4, 7, 9, 8 ] );

	beforeEach( function before() {
		mat = matrix( data, [3,3], 'int8' );
	});

	it( 'should export a function', function test() {
		expect( argmax ).to.be.a( 'function' );
	});

	it( 'should compute the maximum along matrix columns and return the corresponding indices', function test() {
		var out, idx, expected;

		out = matrix( [3,1], 'int8' );

		idx = argmax( out, mat );
		expected = [
			[ 2 ],
			[ 0 ],
			[ 1 ]
		];

		assert.deepEqual( idx, expected );

		idx = argmax( out, mat, 2 );
		expected = [
			[ 2 ],
			[ 0 ],
			[ 1 ]
		];

		assert.deepEqual( idx, expected );

		// Flip a matrix up-down:
		mat.strides[ 0 ] *= -1;
		mat.offset = mat.length + mat.strides[ 0 ];

		idx = argmax( out, mat );
		expected = [
			[ 1 ],
			[ 0 ],
			[ 2 ]
		];

		assert.deepEqual( idx, expected );
	});

	it( 'should compute the maximum along matrix rows and return the corresponding indices', function test() {
		var out, idx, expected;

		out = matrix( [1,3], 'int8' );

		idx = argmax( out, mat, 1 );
		expected = [
			[ 2 ],
			[ 2 ],
			[ 2 ]
		];

		assert.deepEqual( idx, expected );

		// Flip a matrix left-right:
		mat.strides[ 1 ] *= -1;
		mat.offset = mat.strides[ 0 ] - 1;

		idx = argmax( out, mat, 1 );
		expected = [
			[ 2 ],
			[ 2 ],
			[ 2 ]
		];

		assert.deepEqual( idx, expected );
	});

	it( 'should return null if provided a matrix having one or more zero dimensions', function test() {
		var out, mat;

		out = matrix( [0,0] );

		mat = matrix( [0,10] );
		assert.isNull( argmax( out, mat ) );

		mat = matrix( [10,0] );
		assert.isNull( argmax( out, mat ) );

		mat = matrix( [0,0] );
		assert.isNull( argmax( out, mat ) );
	});

});
