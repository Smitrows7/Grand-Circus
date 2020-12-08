function tempConverter(temperature, convertTo) {
    if (typeof(convertTo) === 'number') {
        return ('convertTo is Numeric');
    }
    if ( convertTo && convertTo.toUpperCase() === 'C') {
        return (temperature - 32) * (5/9) + " (C)";
    }
    return null;
}

module.exports = tempConverter;