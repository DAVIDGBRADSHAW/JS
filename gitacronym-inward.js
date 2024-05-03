//console.log(acronym("In My Humble Opinion"))//

function acronym(str) {
    let result = "";
    let inWord = false;
    for ( let i = 0 ; i < str.length ; i++ ) {
        let ch = str.charAt(i);
        if ( isLetter (ch ) ) {
            if (!inWord) result += ch;
            inWord = true;
        } else {
            inWord = false;
        } 
    }
    return result;
}