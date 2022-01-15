// Using a loop //
const urlEncode = function(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++){    
    newText += (text[i] === " ") ? "%20": text[i];
  }
  return newText;
}

// Using regex //
// const urlEncode = function(text) {
//   const encoded = text.replace(/\s/g, '%20')
//   return encoded;  
// };    


// Without using a loop //
// const urlEncode = function(text) {  
//   const encoded = text.split(' ').join('%20');
//   return encoded;
// }

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));






 