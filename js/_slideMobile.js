'use strict';

//?    Aqui começa a formatação do slide Mobile
var radio=document.querySelector('.btn_manual');
document.getElementById('radio1').checked=true;
var cont=1;
 setInterval(()=>{
   proximoCard()
},7000);
function proximoCard(){
   cont++;
   if(cont > 3){
       cont=1;
   }
   document.getElementById('radio'+cont).checked=true;
}


export {radio};




