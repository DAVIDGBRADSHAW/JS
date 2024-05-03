
let testString="THE QUICK BROWN .............";
        const str1='bye bye';
        const str2='world';
        const str3='hhhhhhhhhhhhhhello'



function isLetter(){

function f_test_String(){
}
let strName="hhhhhhhelo wolrd";

function addIntegerList() {
    let sum = 0;
    console.log("...................")
    console.requestInput(" ?", processLine);


    function processLine(line) {
        if (line ==="") {
            console.log("Thhe sumis "+ sum +".");
        } else {
            let value =Number(line);
            if (isNaN(value) || value !== Math.floor(value)){
                console.log("illegal ingeger");
            } else {
                sum += value;
            }
            console.requestInput(" ?", processLine);
        }
}
