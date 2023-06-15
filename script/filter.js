let filter_area = document.getElementById("filter_area");
let fl_button = document.getElementById("fl_button");
fl_button.addEventListener("click" , filterclose , true );
function filterclose(){ filter_area.style.display = "none"; }
let filter_btn = document.getElementById("filter_btn");
filter_btn.addEventListener("click" , filteropen , true);
function filteropen(){ filter_area.style.display = "flex"; }