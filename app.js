const chrono = document.querySelector(".chrono");
const demarrer_btn = document.querySelector(".demarrer");
const arreter_btn = document.querySelector(".arreter");
const reset_btn = document.querySelector(".reset");

let mil_sec=0,sec=0,min=0,hours=0;

let timeoutID;
let est_arrete=true;

function go_chrono(){

  mil_sec = parseInt(mil_sec);
  sec = parseInt(sec);
  min = parseInt(min);
  hours = parseInt(hours);

    mil_sec++;
    if(mil_sec == 60){
        sec++;
        mil_sec = 0;
    }
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min == 60){
        hours++;
        min = 0;
    }
     
    // Affichage

    if (mil_sec < 10) {
        mil_sec = "0" + mil_sec;
      }
    
      if (sec < 10) {
        sec = "0" + sec;
      }

      if (min < 10) {
        min = "0" + min;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
    chrono.textContent=(`${hours}:${min}:${sec}:${mil_sec}`);
}
function demarrer(){
  if(est_arrete){
    est_arrete = false;
    interval_ID = setInterval(go_chrono, 100);
  }
}

function arreter(){
  if(!est_arrete){
    est_arrete=true;
    clearInterval(interval_ID);
  }
}
function reset(){
  chrono.textContent="00:00:00:00";
  est_arrete = true;
  mil_sec = 0
  sec = 0
  min = 0
  hours = 0
  clearInterval(interval_ID)
}

demarrer_btn.addEventListener("click",demarrer);
arreter_btn.addEventListener("click",arreter);
reset_btn.addEventListener("click",reset);