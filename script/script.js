let header = document.getElementById("header"); //header goturur
let navbar = document.querySelector(".navbar"); // navbari goturur

window.onscroll = () => {                       // scroll edende navbar kicilsin deyedi 
    if (window.scrollY > header.offsetHeight) { header.style.opacity = "0.8"; } 
    else { header.style.opacity = "1";}
};

header.onmouseover = () =>{ header.style.opacity = "1"; }
header.onmouseleave = () =>{ header.style.opacity = "0.8"; }

let upper = document.getElementById("upper").addEventListener('click' , upperfuc , true); // seyfenin ey yuxarina getsin deye
function upperfuc(){window.scrollTo({ top: 0, behavior: 'smooth' });}

let feedback = document.getElementById("feedback").addEventListener("click" , feedbackfuc , true); // feedback acilib baqlanmaqi ucun 
let feedback_card = document.getElementById("feedback_card");
let feedback_card2 = document.getElementById("feedback_card2");
let feedback_open_i = document.getElementById('feedback_open_i');
let feedback_close_i = document.getElementById('feedback_close_i');
let counter = 0;
function feedbackfuc(){
    counter++;
    if( counter % 2 != 0 ){
        feedback_card.style.display = "inline-block";
        feedback_open_i.style.display ="none";
        feedback_close_i.style.display ="inline-block";
    }
    else{
        feedback_card.style.display = "none";
        feedback_open_i.style.display ="inline-block";
        feedback_close_i.style.display ="none";
        feedback_card2.style.display = "none";
    }
    return counter;
}
let btnfeed = document.getElementsByClassName("btnfeed");

for (let element of btnfeed) {
    element.addEventListener('click', function handleClick() {
        feedback_card.style.display = "none";
        feedback_card2.style.display = "inline-block";
    });
}

let fdb_btn_back = document.getElementById('fdb_btn_back');
fdb_btn_back.addEventListener('click' ,  () => {
    feedback_card.style.display = "inline-block";
        feedback_card2.style.display = "none";
});

let res_button = document.getElementsByClassName("res_button")[0];
res_button.addEventListener("click" , res_nav , true);
let res_header = document.getElementsByClassName("res_header")[0];
let close_nav_btn = document.getElementsByClassName("close_nav_btn")[0];
close_nav_btn.addEventListener("click" , res_nav_close , true);
function res_nav(){ res_header.style.right = "0";}
function res_nav_close() { res_header.style.right = "-100%"}
// $(':radio').change(function() { //console.log('New star rating: ' + this.value);//});