// import add function from scripts file
const add = require('./scripts');
const tempConverter = require('./tempConverter');
// suite of tests
describe('add', function () {
	// test case that we're running
	test('1 + 1 = 2', function () {
		expect(add(1, 1)).toEqual(2);
	});
	///
});
describe('tempConverter', function () {
	// entering letters instead of numbers for temp
	test('entering letters instead of numbers for temp', function () {
		expect(tempConverter('FF', 'F')).toBeNull();
	});
	// entering number instead of C or F for target unit
	test('entering number instead of C or F for target unit', function () {
		expect(tempConverter(14, 14)).toEqual('convertTo is Numeric');
	});
	// enter a letter that isn't C or F for target unit
	test("enter a letter that isn't C or F for target unit", function () {
		expect(tempConverter(15, 'K')).toBeNull();
	});
	// lowercase vs uppercase
	// should automatically uppercase letters
	test('should automatically uppercase letters', function () {
		expect(tempConverter(212, 'c')).toEqual('100 (C)');
	});
	// positive temp with C
    test("positive temp with C", function() {
        expect(tempConverter(212, 'C')).toEqual('100 (C)');
    })
	// positive temp with F
	// negative temp with C
	// negative temp with F
	// 0 temp with C
	// 0 temp with F
	// null for temp
	// null for units
	// Passing in more than one letter
	// result should always be a number
	// full name vs letter (aka Celcius instead of C)
});