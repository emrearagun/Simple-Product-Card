let credit_Number = document.getElementsByName('credit-number')[0];

credit_Number.addEventListener('keyup' , () => {
let number4 = ('credit_number.value').slice(0, 5);
if (5000 >= number4){
document.getElementById('master').src= "master.png";
} else {
document.getElementById('master').src=  "visa.png";



}

})


const img = ["air1.png", "airpods.png", "air3.png"];

let dotoff = () =>{
    Array.from(document.getElementsByClassName('dot')).forEach((Ele, i)=>{
    Ele.style.boxShadow = "unset";
    Ele.style.background = "#0070d6";
    });  
}



let cardoff = () =>{
    Array.from(document.getElementsByClassName('card_img')).forEach((Ele, i)=>{
    Ele.style.boxShadow = "unset";
   
    });  
}







Array.from(document.getElementsByClassName('card_img')).forEach((Ele, i)=>{
    Ele.addEventListener('click', () => { 
         
         dotoff()
    document.getElementById('poster').src = img[i];
    document.getElementsByClassName("card_img")[i].style.boxShadow = "0px 0px 20px rgb(0,0,0, .2)"
     document.getElementsByClassName('dot')[i].style.background = "trnsparent";
     document.getElementsByClassName('dot')[i].style.boxShadow = "0px 0px 5px #0070d6";
    });    
});
    
