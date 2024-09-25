    //  total amount update function
    
    function BlanceUpdate(navtotal , inputamount , donatetotal , donatediv, modalalert){
    
        // condition for positive number
    
        if( ((parseFloat(document.getElementById(inputamount).value)) > 0) && ((parseFloat(document.getElementById(inputamount).value)) <= (parseFloat(document.getElementById(navtotal).innerHTML))) ){
        
        // nav total update
        const navTotal = parseFloat(document.getElementById(navtotal).innerHTML) - parseFloat(document.getElementById(inputamount).value);
        document.getElementById(navtotal).innerHTML =parseFloat(navTotal).toFixed(2);


        // donation update
        const donateBlance = parseFloat(document.getElementById(donatetotal).innerHTML) + parseFloat(document.getElementById(inputamount).value);
        document.getElementById(donatetotal).innerHTML = parseFloat(donateBlance).toFixed(2);


        // modal show

        document.getElementById(modalalert).style.display ="flex";  
        
        // create history

        const div = document.createElement('div');
        const h3  = document.createElement('h3');
        const p  = document.createElement('p');
        

        h3.innerText = parseFloat(document.getElementById(inputamount).value).toFixed(2) + " Taka is " + document.getElementById(donatediv).innerHTML;
        p.innerText ="Time: " + new Date() ;
        

        div.appendChild(h3);
        div.appendChild(p) ;

        // history style

        div.style.borderRadius = "16px";
        div.style.border ="1px solid";
        div.style.width= "80vw"
        div.style.margin = " 8px"
        div.style.padding = " 16px"
        h3.style.color = "black";
        h3.style.fontWeight = "bold"
        h3.style.fontSize = "20px"


        document.getElementById('history-detail').insertBefore(div,document.getElementById('history-detail').firstChild);
    }
    else if(((parseFloat(document.getElementById(inputamount).value)) > (parseFloat(document.getElementById(navtotal).innerHTML)))){
        alert("You don't have enough money to donate");
    }
    else if( parseFloat(document.getElementById(inputamount).value) <= 0 ){
        alert("Please input a valid amount or check you have available balance");

    }
    else{
        alert("Invalid Amount");
    }
    
}

// button and modal function

function ButtonEvent(button , buttonEvent){
    document.getElementById('donate-btn').style.backgroundColor = "rgb(17,17,17,.3)";
    document.getElementById('history-btn').style.backgroundColor = "rgb(17,17,17,.3)";
    document.getElementById('history-detail').style.display ="none";
    document.getElementById('donation').style.display =" none";
    document.getElementById(button).style.backgroundColor = "#B4F461"
    document.getElementById(buttonEvent).style.display =" flex";
}
