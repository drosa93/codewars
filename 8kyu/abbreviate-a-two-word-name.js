/*Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

function abbrevName(name){
    const words = name.split(' ');
    if (words.length >= 2) {
       const firstWord = words[0]
      const fLetter = firstWord.charAt(0)
      const secondWord = words[1];
      const letter = secondWord.charAt(0);
      return `${fLetter.toUpperCase()}.${letter.toUpperCase()}`;
    }else{
      return null
    }
   }
   console.log(abbrevName('Patrick Feenan'))