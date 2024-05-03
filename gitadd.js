// callback function//

const form =document.getElementById('myform');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {//Runform);//
    event.preventDefault();
function Runform(){


form.addEventListener('submit',function(event){
    event.preventDefault();
    
    
    resultDiv.innerHTML = '';

    const name = document.getElementById('name').value;
    const email =document.getElementById('email').value;
    const password =document.getElementById('password').value;


    if (!name ||!email ||!password) {
        resultDiv.innerHTML = '<p class="error">all fields are required</p>';
    } else if (password.lenegh < 16) {
         resultDiv.innerHTML = '<p class="error">PAASWORD must be at least  eight</p>';
    } else {
        resultDiv.innerHTML ='<p>suECCESSFULLY</p>';
    } 
});
     //   |||) //
//ClassList.add//