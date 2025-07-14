let boxes=document.querySelectorAll(".box") 
boxes.forEach(box => {
    box.addEventListener("mouseover",()=>{
    box.style.backgroundColor="white";
});
box.addEventListener("mouseout",()=>{
    box.style.backgroundColor="black"
});
});
const typed=new Typed('.multiline',{
    strings:['Physical Fitness','Weight gain','Strength Training','Fat Lose','Weight Lifting','Running'],
    typeSpeed:60,
    backSpeed:40,
    backDelay:1500,
    loop:true,
});
let joinButton = document.querySelector("#button");
let signUp = document.querySelector("#Sign-up")
let name=document.querySelector("#Name");
let Email=document.querySelector("#email");
let phone=document.querySelector("#Phoneno")
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");
let Submitt = document.querySelector("#submitt-butt");
let closeButton = document.querySelector("#close-button");

joinButton.addEventListener("click",()=>{
    signUp.style.display="block";
})
closeButton.addEventListener("click",()=>{
    signUp.style.display="none";
})
Submitt.addEventListener("click",(e)=>{
    e.preventDefault();
    if(password.value==confirmPassword.value){
        alert("sign-up successful");
        signUp.style.display="none";
    }
    else{
        confirmPassword.value="";
        alert("Incorrect password .Reenter your password to confirm ");
    }

})




