// Create a function that takes a string and a character as a parameter (Two Parameters).
// print a new string with the first occurrence of the character removed.


function removeLetter(str, char) {
      if (str.includes(char)){
        str = str.replace(char, " ");
        console.log(str)
        
      }
      else{
        console.log(char+" in "+ str + " Is Not Found")
      }
}

removeLetter("hello world","o")
