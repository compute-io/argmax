/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	argmax = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-argmax', function tests() {

	it( 'should export a function', function test() {
		expect( argmax ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is neither array-like or matrix-like', function test() {
		var values = [
			// '5', // valid as is array-like (length)
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmax( value );
			};
		}
	});

	it( 'should throw an error if provided a dimension which is greater than 2 when provided a matrix', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				argmax( matrix( [2,2] ), {
					'dim': value
				});
			};
		}
	});

	it( 'should compute the  maximum and return the corresponding indices', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = [ 4 ];

		assert.deepEqual( argmax( data ), expected );
	});

	it( 'should compute the maximum of a typed array and return the corresponding indices', function test() {
		var data, expected;

		data = new Int8Array( [ 2, 4, 5, 3, 8, 2 ] );
		expected = [ 4 ];

		assert.deepEqual( argmax( data ), expected );
	});

	it( 'should compute the maximum using an accessor function and return the corresponding indices', function test() {
		var data, expected, actual;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];

		expected = [ 4 ];
		actual = argmax( data, {
			'accessor': getValue
		});

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should compute the maximum and return the corresponding indices along a matrix dimension', function test() {
		var expected,
			data,
			mat,
			idx,
			i;

		data = new Int8Array( 25 );
		for ( i = 0; i < data.length; i++ ) {
			data[ i ] = i;
		}
		mat = matrix( data, [5,5], 'int8' );

		// Default:
		idx = argmax( mat );
		expected = [
			[ 4 ],
			[ 4 ],
			[ 4 ],
			[ 4 ],
			[ 4 ],
		];

		assert.deepEqual( idx, expected, 'default' );

		// Along columns:
		idx = argmax( mat, {
			'dim': 2
		});
		expected = [
			[ 4 ],
			[ 4 ],
			[ 4 ],
			[ 4 ],
			[ 4 ],
		];

		assert.deepEqual( idx, expected, 'dim: 2' );

		// Along rows:
		idx = argmax( mat, {
			'dim': 1
		});
		expected = [
			[ 4 ],
			[ 4 ],
			[ 4 ],
			[ 4 ],
			[ 4 ],
		];

		assert.deepEqual( idx, expected, 'dim: 1' );
	});

	it( 'should compute the maximum of 1d matrices (vectors) and return the corresponding indices', function test() {
		var data, mat;

		data = [ 2, 4, 5, 3, 8, 2 ];

		// Row vector:
		mat = matrix( data, [1,6], 'int8' );
		assert.deepEqual( argmax( mat ), [ 4 ] );

		// Column vector:
		mat = matrix( data, [6,1], 'int8' );
		assert.deepEqual( argmax( mat ), [ 4 ] );
	});

});
