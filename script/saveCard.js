let fa_markcard = document.getElementsByClassName("fa_markcard");
let fa_heartcard = document.getElementsByClassName("fa_heartcard");
let card_save = document.getElementsByClassName("card-save");
let cardbtn = Array.from(card_save);
function test1(){
    for (let index = 0; index < cardbtn.length; index++) {
        const element1 = cardbtn[index];
        let countersave2 = 1;
        element1.addEventListener('click', () => {
            let countersave = countersave2;
            countersave++;
            if(countersave %2 == 0){
                fa_markcard[index].style.display = "none";
                fa_heartcard[index].style.display = "inline-block";
                return countersave2 = countersave;
            }
            else{
                fa_markcard[index].style.display = "inline-block";
                fa_heartcard[index].style.display = "none";
                return countersave2 = countersave;
            }
        });
    }
}
window.onload =  test1();