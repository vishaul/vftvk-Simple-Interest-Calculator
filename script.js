function compute()
{
    
    var P = document.getElementById("principle").value; 

    if(P<=0){
        alert("Enter a positive number");
        P.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var noofyears=document.getElementById("years").value;
    
    const p=Number(P);
    const r=Number(rate);
    const n=Number(noofyears);
    
    var amount=parseFloat((p*r*n)/100);
    
    var year = new Date().getFullYear() + n;
    document.getElementById('result').innerHTML="if you deposit"+p+",\<br\>at an interest rate of "+r+"%\<br\>you will receive an amount of "+amount+"\<br\>in the year "+year+"\<br\>";

    
    
}

function updateRate() //update the rate
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";


}




    
        
