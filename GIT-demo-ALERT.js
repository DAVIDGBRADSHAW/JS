
const user_button = document.getElementById("user_btn");
user_button.addEventListener("click", f_Get_Text_Box_Value);

function f_Get_Text_Box_Value(){
    alert("THE DAVE BRADSHAW ALERT");
}

function f_select_Grade(grade){

    let strGrade ="";
    console.log(grade);

    if (grade >=0 && grade <=39){
        strGrade="Fail";
    }else{
        if(grade >=40 && grade <=55){
            strGrade="Pass";
        }else{
            if(grade >=55 && grade < 70) {
                strGrade="Merit";
            }else{
                if (grade >=70 && grade <=100){
                strGrade ="DISTINCTION";
                }else{
                    strGrade="DGB UNDEFINED"
                }       
            }
        }
    }
    return strGrade;
}
