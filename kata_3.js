const numberOfVowels = function(data) {
  let totalVowels = 0;
  const vowels = ['a','e','i','o','u'];
  for(let i = 0; i < data.length; i++) {
    if(vowels.includes(data[i])) {   
      totalVowels++;                  
    }       
  }
  return totalVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));