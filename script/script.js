let header = document.getElementById("header"); //header goturur
let navbar = document.querySelector(".navbar"); // navbari goturur
window.onscroll = () => {                       // scroll edende navbar kicilsin deyedi 
    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('nav-active');
        header.style.opacity = "0.7";
    } else {
        navbar.classList.remove('nav-active');
        header.style.opacity = "1";
    }
};

let upper = document.getElementById("upper").addEventListener('click' , upperfuc , true); // seyfenin ey yuxarina getsin deye
function upperfuc(){window.scrollTo({ top: 0, behavior: 'smooth' });}

let feedback = document.getElementById("feedback").addEventListener("click" , feedbackfuc , true); // feedback acilib baqlanmaqi ucun 
let feedback_card = document.getElementById("feedback_card");
let feedback_count = 0;
function feedbackfuc(){
    feedback_count++;
    if(feedback_count % 2 != 0){feedback_card.style.display = "inline-block";}
    else{feedback_card.style.display = "none";}
}