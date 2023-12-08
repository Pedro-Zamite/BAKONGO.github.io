var radioHeader=document.querySelector('.manual-btn');
document.getElementById('radio4').checked=true;
var cont=4;
 setInterval(()=>{
   proximoCard()
},500);
function proximoCard(){
   cont++;
   if(cont > 6){
       cont=4;
   }
   document.getElementById('radioHeader'+cont).checked=true;
}

export {radioHeader};