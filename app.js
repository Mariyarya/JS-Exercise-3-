const input = 'Hi, Human'; //Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.

const vowels = ['a', 'e', 'i', 'o', 'u']; // need an array of vowels

let resultArray = []; //Create a variable named resultArray and set it equal to an empty array: [].

for (let i = 0; i < input.length; i++) //Create a loop to iterate through each letter of the input variable text
{
    for (let j = 0; j < vowels.length; j++) //a inner loop that iterate through the vowels array each time the outer loop runs
    {
        if (input[i] === vowels[j]) //compares the input letter to every letter in the vowels array
        {
            resultArray.push(input[i]);
        }
    }
    if (input[i] === 'e' || input[i] === 'u') //checks if each letter in the input string is equal to 'e' or 'u'
    {
        resultArray.push(input[i]);
    }
}
console.log(resultArray.join('').toUpperCase()); //print the whale language in one string with uppercase