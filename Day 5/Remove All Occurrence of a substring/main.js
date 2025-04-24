function removeSubstring(mainString, subString) {
    const result = mainString.split(subString).join('');
    console.log(result);
}

removeSubstring("This is a test string", "is") ;
