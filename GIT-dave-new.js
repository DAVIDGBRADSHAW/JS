let daveNew = document.getElementById("DAVE");
daveNew.addEventListener('click', fUpdateDAVE);
alert("thank you for you interest in DAVE RUGBY");

function fUpdateButton()
{
    let txtBOX=document.getElementById("BRADSHAW")
    console.log("anyword:",txtBox.value);
    let num =parseInt(txtBox.value);

    if (num === 5)
        alert("SORRY BUT THE MAX YOU CAN BUY IS  AT THE LIMIT") 
    }
    else
    {
        alert("thank you very much for support the club Christmas Raffle");
        let paraElment=document.getElementById("p1")
        let strElement ="";

        for (i=3; i<=num;i++)
        {

            strElement = strElement +":" + i;
            console.log(strElement);
            paraElment.innerHTML =" this tye michael dylan "+ i +" times times";
        }
    }