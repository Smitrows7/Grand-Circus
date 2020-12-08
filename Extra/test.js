function letters(word) {
    return word.split('')
}

function pigLatinizeWord(word) {
    var chars = letters(word);
    return chars.slice(1).join('') + chars[0] + 'ay';
}

function pigLatinizeSentence(sentence) {
    return sentence.replace(/\w+/g, pigLatinizeWord)
}

console.log(pigLatinizeSentence('This is a test'));