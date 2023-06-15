let stars = document.getElementsByName("stars");
let modalbox = document.getElementById("modal");
stars.forEach(element => {
    element.onclick = () => {
        modalbox.style.display = "flex";
    }
});
let modalclosebtn = document.getElementById("modalclosebtn");
modalclosebtn.addEventListener('click' , () => {
    modalbox.style.display = "none";
});
let btn_close = document.getElementsByClassName("btn-close")[0];
btn_close.addEventListener('click' , () => {
    modalbox.style.display = "none";
});