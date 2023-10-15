
// Strings

// 1. String Length
// length: Returns the length of a string.


// 2. Accessing Characters
// charAt(index): Returns the character at the specified index.


// 3. Substring
// substring(startIndex, endIndex): Returns the part of the string between the startIndex and endIndex.


// 4. Substring vs Slice
// slice(startIndex, endIndex): Similar to substring, but can also accept negative indices(counting from the end of the string).


// 5. Replacing Substrings
// replace(searchValue, replaceValue): Replaces a specified substring with another string.

// 6. Changing Case
// toUpperCase(): Converts the string to uppercase.
//     toLowerCase(): Converts the string to lowercase.

// 7. Trimming Whitespace
// trim(): Removes whitespace from both ends of a string.

// 8. Splitting a String

// split(separator): Splits a string into an array of substrings based on a specified separator.

// 9. Checking Substring Existence

// includes(substring): Checks if a string contains the specified substring.

// 10. Finding Substring

// indexOf(substring): Returns the index of the first occurrence of a specified substring.
//     lastIndexOf(substring): Returns the index of the last occurrence of a specified substring.

// 11. Concatenation

// concat(str1, str2, ..., strN): Combines two or more strings and returns a new string.

// 12. Character Code at Index

// charCodeAt(index): Returns the Unicode value of the character at the specified index.

// 13. Template Literals

// Template literals(Template Strings): Allow for embedded expressions and multi - line strings.They are defined using backticks (` `) instead of quotes.
//     javascript
// Copy code
// const name = "Alice";
// const greeting = `Hello, ${name}!`;
// 14. String Comparison
// localeCompare(compareString): Compares two strings and returns a number indicating their sort order.

// 15. String Padding
// padStart(targetLength, padString): Pads the current string with another string(repeated, if needed) so that the resulting string reaches the given length.
//     padEnd(targetLength, padString): Pads the current string with another string(repeated, if needed) so that the resulting string reaches the given length.
// 16. Regular Expressions with Strings

// match(regexp): Retrieves the result of matching a string against a regular expression.
//     search(regexp): Tests for a match in a string.It returns the index of the match, or - 1 if the search fails.
//         replace(regexp, replacement): Searches a string using a regular expression pattern and replaces the matched substring with a replacement substring.
// 17. String to Array and Vice Versa

// split(separator, limit): Splits a string into an array of substrings based on a specified separator.You can also specify a limit to how many parts the string should be split into.
//     join(separator): Joins the elements of an array into a string, using a specified separator.
// 18. String Starts / Ends With

// startsWith(searchString, position): Checks whether a string starts with the specified characters.
//     endsWith(searchString, position): Checks whether a string ends with the specified characters.
// 19. String Repeat

// repeat(count): Returns a new string with a specified number of copies of the string it was called on.
// 20. String Iterator

// [Symbol.iterator](): Returns a new iterator object that yields the characters in the string.





// 21. String Comparison

// localeCompare(compareString): Compares two strings in the current locale.
// 22. String Searching

// indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string, starting the search at a specified index.
//     lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string, searching backward from a specified index.
//         search(regexp): Tests for a match in a string.It returns the index of the match, or - 1 if the search fails.
// 23. String Extraction

// slice(startIndex, endIndex): Extracts a section of a string and returns it as a new string.
//     substring(startIndex, endIndex): Extracts a substring between two specified indices and returns it as a new string.
//         substr(startIndex, length): Extracts a specified number of characters in a string, starting from a specified index, and returns it as a new string.
// 24. String Inspection

// startsWith(searchString, position): Checks whether a string starts with the specified characters.
//     endsWith(searchString, position): Checks whether a string ends with the specified characters.
//         includes(searchString, position): Checks whether a string contains the specified characters.
//             charCodeAt(index): Returns the Unicode value of the character at the specified index.
// 25. Whitespace Removal

// trim(): Removes whitespace from both ends of a string.
//     trimStart()(or trimLeft()): Removes whitespace from the beginning of a string.
//         trimEnd()(or trimRight()): Removes whitespace from the end of a string.
// 26. String Conversion

// toString(): Converts a number or another type to a string.
//     String(value): Converts a value to a string.
// 27. String Iteration

// [Symbol.iterator](): Returns a new iterator object that yields the characters in the string.

// 28. String Formatting

// padStart(targetLength, padString): Pads the string with a given string(repeated, if necessary) so that the resulting string reaches a given length from the start.
//     padEnd(targetLength, padString): Pads the string with a given string(repeated, if necessary) so that the resulting string reaches a given length from the end.
// 29. String Matching

// match(regexp): Retrieves the matches when matching a string against a regular expression.
//     matchAll(regexp): Returns an iterator of all results matching a string against a regular expression, including capturing groups.
// 30. String Comparison

// localeCompare(compareString): Compares two strings in the current locale.Returns a negative number if the reference string is sorted before the compare string, a positive number if it's sorted after the compare string, and 0 if they are equal.



// 1. String Length
// length: Returns the length of a string.

let name="Bakthula Ganapathi";

console.log(name.length)



// 2. Accessing Characters
// charAt(index): Returns the character at the specified index.

let cute="Chandu";

console.log(cute[0])

// 3. Substring
// substring(startIndex, endIndex): Returns the part of the string between the startIndex and endIndex.


let angle="aurora";
console.log(angle.substring(0,3))



// 4. Substring vs Slice
// slice(startIndex, endIndex): Similar to substring, but can also accept negative indices(counting from the end of the string).

var gana="ganpathi";
console.log(gana.slice(3,5))



// 5. Replacing Substrings
// replace(searchValue, replaceValue): Replaces a specified substring with another string.

let chandu="priya";

let g=chandu.replace("priya","ganapthi")

console.log(g)


// 6. Changing Case
// toUpperCase(): Converts the string to uppercase.
//     toLowerCase(): Converts the string to lowercase.

var gan="Bakthula Ganpathi";

console.log(gan.toLocaleLowerCase())
console.log(gan.toLocaleUpperCase())



// 7. Trimming Whitespace
// trim(): Removes whitespace from both ends of a string.

let name1="LisaChandu           ";

console.log(name1.trim())



// 8. Splitting a String

// split(separator): Splits a string into an array of substrings based on a specified separator.
let naq="wine_wings";

console.log(naq.split(""))



// 9. Checking Substring Existence
// includes(substring): Checks if a string contains the specified substring.

let ruin="let Break the bone";

console.log(ruin.substring(3,10));



// 10. Finding Substring
// indexOf(substring): Returns the index of the first occurrence of a specified substring.
//     lastIndexOf(substring): Returns the index of the last occurrence of a specified substring.

let ganapathi="Bakthula Ganapathi is Fast learner";
let a=ganapathi.indexOf("Fast");

console.log(a)


// 11. Concatenation
// concat(str1, str2, ..., strN): Combines two or more strings and returns a new string.

let ana="ganapathi ";
let anya="aurora";

console.log(ana+anya)


// 12. Character Code at Index
// charCodeAt(index): Returns the Unicode value of the character at the specified index.

let guna="gana";
console.log(guna.charCodeAt("g"))



// 13. Template Literals

// Template literals(Template Strings): Allow for embedded expressions and multi - line strings.They are defined using backticks (` `) instead of quotes.
//     javascript
// Copy code

const name3 = "Nira";
const greeting = `Hello, ${name3}!`;

console.log(greeting);



// 14. String Comparison
// localeCompare(compareString): Compares two strings and returns a number indicating their sort order.

let name2="gana";
let guna2="ghan";









