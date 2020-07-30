let codes= document.getElementById("IdCodes");
let play = document.getElementById("IdPlayButton");
let remove = document.getElementById("IdRemoveButton");
let result = document.getElementById("IdDivResult");
/* ================================= زر التشغيل ==================================== */
play.onclick = ()=>{
    result.innerHTML = codes.value;
localStorage.setItem("RESULT",codes.value)
}
/* ================================= زر الحذف ==================================== */
remove.onclick = ()=>{
    result.innerHTML = "";
    localStorage.removeItem("RESULT");
    codes.value="";
  
    
}
onload = ()=>{
    if (localStorage.getItem("RESULT")!=null){
        codes.value=localStorage.getItem("RESULT");
  
    }
    // codes.value=localStorage.getItem("RESULT");
}