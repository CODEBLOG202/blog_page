let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let black = rootStyles.getPropertyValue('--cl2');
let logo_img_1 = document.getElementsByClassName("logo_img_1")[0];
let logo_img_2 = document.getElementsByClassName("logo_img_1")[1];
let night_mood_img = document.getElementsByClassName("night_mood_img")[0];

localStorage.setItem("mood", 0);
window.onload = function(){
    let cat = Number(localStorage.getItem("moodpage"));
    if( cat % 2 != 0 ){
        root.style.setProperty('--cl4' , '#374151');
        root.style.setProperty('--cl5' , 'white');
        root.style.setProperty('--cl6' , '#d7d7d7');
        root.style.setProperty('--cl7' , 'radial-gradient(circle, rgba(0,0,0,0.2049194677871149) 0%, rgba(0,0,0,0.196516106442577) 100%)');
        root.style.setProperty('--cl8', 'white');
        root.style.setProperty('--clh1', 'linear-gradient(90deg, #15cf3a 0%, #3041f7 57.29%)');
        root.style.setProperty('--clh2', 'linear-gradient(0deg, rgba(48, 107, 255, 0.936) 0%, #ffffff 93%)');
    }
    else{
        root.style.setProperty('--cl4' , 'white');
        root.style.setProperty('--cl5' , '#000000');
        root.style.setProperty('--cl6' , 'white');
        root.style.setProperty('--cl7' , 'radial-gradient(circle, rgba(255,255,255,0.2049194677871149) 0%, rgba(255,255,255,0.196516106442577) 100%)');
        root.style.setProperty('--cl8', '#D9D9D9');
        root.style.setProperty('--clh1', 'linear-gradient(90deg, #157B29 0%, #1D2363 57.29%)');
        root.style.setProperty('--clh2', 'linear-gradient(0deg, rgba(0, 69, 245, 0.936) 0%, #000000 93%)');
    }
    if( cat % 2 != 0 ){
        logo_img_1.src = "image/logos/icons8-ai-white-64.png";
        logo_img_2.src = "image/logos/icons8-ai-white-64.png";
        night_mood_img.src = "image/icons/icons8-light-on-50.png";
    }
    else{
        logo_img_1.src = "image/logos/icons8-ai-64.png";
        logo_img_2.src = "image/logos/icons8-ai-64.png";
        night_mood_img.src = "image/icons/icons8-night-portrait-50.png";
    }

}
let night_mood = document.getElementById("night_mood").addEventListener("click" , nightmood , true);
function nightmood(){
    let count2 =  Number(localStorage.getItem("moodpage")) ;
    count2++;
    localStorage.setItem("mood", count2 );
    localStorage.setItem("moodpage", count2 );
    if( count2 % 2 != 0){
        root.style.setProperty('--cl4' , '#374151');
        root.style.setProperty('--cl5' , 'white');
        root.style.setProperty('--cl6' , '#d7d7d7');
        root.style.setProperty('--cl7' , 'radial-gradient(circle, rgba(0,0,0,0.2049194677871149) 0%, rgba(0,0,0,0.196516106442577) 100%)');
        root.style.setProperty('--cl8', 'white');
        root.style.setProperty('--clh1', 'linear-gradient(90deg, #15cf3a 0%, #3041f7 57.29%)');
        root.style.setProperty('--clh2', 'linear-gradient(0deg, rgba(48, 107, 255, 0.936) 0%, #ffffff 93%)');
    }
    else{
        root.style.setProperty('--cl4' , 'white');
        root.style.setProperty('--cl5' , '#000000');
        root.style.setProperty('--cl6' , 'white');
        root.style.setProperty('--cl7' , 'radial-gradient(circle, rgba(255,255,255,0.2049194677871149) 0%, rgba(255,255,255,0.196516106442577) 100%)');
        root.style.setProperty('--cl8', '#D9D9D9');
        root.style.setProperty('--clh1', 'linear-gradient(90deg, #157B29 0%, #1D2363 57.29%)');
        root.style.setProperty('--clh2', 'linear-gradient(0deg, rgba(0, 69, 245, 0.936) 0%, #000000 93%)');
    }
    function iconchage(){
        if( count2 % 2 != 0 ){
            logo_img_1.src = "image/logos/icons8-ai-white-64.png";
            logo_img_2.src = "image/logos/icons8-ai-white-64.png";
            night_mood_img.src = "image/icons/icons8-light-on-50.png";
        }
        else{
            logo_img_1.src = "image/logos/icons8-ai-64.png";
            logo_img_2.src = "image/logos/icons8-ai-64.png";
            night_mood_img.src = "image/icons/icons8-night-portrait-50.png";
        }
    }
    iconchage();
}