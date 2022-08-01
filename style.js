function getzakat() {
    let goatValue=document.getElementById('goatZakat').value;
let result;
if(goatValue>=400){
    result=" 4 Goats (After 400 Goats, 1 goat will be added for every 100 Goats.)";
}else if(goatValue>=201){
    result="3 Goats";
}else if(goatValue>=121 ){
    result="2 Goats";
}else if(goatValue>=40){
    result="1 Goats";
}else if(goatValue>=1){
    result="0 Goats";
}
document.getElementById('resultshow').innerText=result;

}
