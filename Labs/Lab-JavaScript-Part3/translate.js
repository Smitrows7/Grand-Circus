//const { ConsoleReporter } = require("jasmine");

function translate(str) {
    
    //const str = tmpStr.split('');
    
    //for(i=0;i<str.length;i++) {
     str=str.toLowerCase(); 
     var firstLetter=str[0];
     
     var vowels=/[aeiou]/gi;
     var newStr="";
     if(!str.match(vowels))
     {
      return str + 'ay';
     }
     if(firstLetter.match(vowels))
     {
      newStr= str+'way';
     }else
     {
      var indexOfVowel=str.indexOf(str.match(vowels)[0]);
      newStr=str.substr(indexOfVowel)+str.substr(0,indexOfVowel)+'ay';
     }
     //var finalStr = newStr.join("");
    //}

    return newStr;
  }
 
  //function convertPhrase(phrase){
  // var rep = /(\w+)\s(\w+)/;
 //  var splitPhrase = phrase.split();
  // return splitPhrase.replace(rep,translate);

 // }

  //console.log(translate('Suguna'));