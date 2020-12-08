describe('translate', function () {
	// tests go in here
    //     Multiple tests for words starting with different vowels.
    it("word starting with a", function() {
        expect(translate('apple')).toEqual('appleway')
    });
    
	// a. These tests are correct and pass.
	// 2. At least one test for words starting with one consonant.
	it("word starting with one consonant", function() {
        expect(translate('Supple')).toEqual('upplesay')
    });

	// a. These tests are correct and pass.
	// 3. At least one test for words starting with two consonants.
	it("word starting with two consonant", function() {
        expect(translate('Chelsea')).toEqual('elseachay')
    });

	// a. These tests are correct and pass.
	// 4. At least one test for words starting with three consonants.
	it("word starting with three consonant", function() {
        expect(translate('christian')).toEqual('istianchray')
	});
	// a. These tests are correct and pass.
	// 4. At least one test for words with no VOWELS.
	it("word starting with no vowels", function() {
        expect(translate('rhythm')).toEqual('rhythmay')
    });
	// a. These tests are correct and pass.
	// 5. At least one test checking for lower case conversion.
	it("word starting with one consonant", function() {
        expect(translate('RHYTHM')).toEqual('rhythmay')
    });

});