//console.log(acronym("Laughing Out Loud"))//

function acronym(str){
    let result = str.charAt(0);
    let sp = str.indexOf(" ");
    while ( sp !== -1) {
        result += str.charAt(sp + 1);
        sp = str.indexOf("", sp + 1);
    }
    return result;
}
str