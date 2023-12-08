import {btn_paleta, modal_Paleta, hamburgue, menu, spread, spread2, spread3, spread4, spread5, spread6, modal, modal2, modal3, EuQuero, EuQuero2, EuQuero3, body} from "./_variaveis.js";
import {radio} from "./_slideMobile.js";


// ? Inicio da Formatação do slide header
var radial=document.querySelector('.manual-btn');
document.getElementById('radio4').checked=true;
var cont=4;
 setInterval(()=>{
   proximoCard()
},7000);
function proximoCard(){
   cont++;
   if(cont > 6){
       cont=4;
   }
   document.getElementById('radio'+cont).checked=true;
}
// ? Fim da Formatação do slide header


//? Inicio da formatação do menu hamburgue
hamburgue.addEventListener("click",()=>{
    hamburgue.classList.toggle('activou');
    menu.classList.toggle('activeMenu');
})
//? Fim da formatação do menu hamburgue


// Aqui esta a formatação do btn EuQuero
EuQuero.addEventListener("click",()=>{
    alert("OBRIGADO! por Juntar-se a nós enquanto continuamos nossa jornada emocionante no mundo do desenvolvimento web. Estamos ansiosos para colaborar com você e enfrentar os desafios e conquistas que o futuro reserva.")
})
EuQuero2.addEventListener("click",()=>{
    alert("OBRIGADO! por Juntar-se a nós enquanto continuamos nossa jornada emocionante no mundo do desenvolvimento web. Estamos ansiosos para colaborar com você e enfrentar os desafios e conquistas que o futuro reserva.")
})
EuQuero3.addEventListener("click",()=>{
    alert("OBRIGADO! por Juntar-se a nós enquanto continuamos nossa jornada emocionante no mundo do desenvolvimento web. Estamos ansiosos para colaborar com você e enfrentar os desafios e conquistas que o futuro reserva.")
})

//Aqui esta a formatação do 1ª modal da section serviços
spread4.addEventListener("click",()=>{
    modal.classList.toggle('active');
})
spread.addEventListener("click",()=>{
    modal.classList.toggle('active');
})
modal.addEventListener("click",()=>{
    modal.classList.toggle('active');
   })

//Aqui esta a formatação do 2ª modal da section serviços
spread2.addEventListener("click",()=>{
    modal2.classList.toggle('active');
})
spread5.addEventListener("click",()=>{
    modal2.classList.toggle('active');
})
modal2.addEventListener("click",()=>{
    modal2.classList.toggle('active');
   })
  
   //Aqui esta a formatação do 3ª modal da section serviços
spread3.addEventListener("click",()=>{
    modal3.classList.toggle('active');
})
spread6.addEventListener("click",()=>{
    modal3.classList.toggle('active');
})
modal3.addEventListener("click",()=>{
    modal3.classList.toggle('active');
   })

// ! Inicio da Formatação do article de paleta 
btn_paleta.addEventListener("click",()=>{
    modal_Paleta.classList.toggle('activePaleta');
})
modal_Paleta.addEventListener("click",()=>{
    modal_Paleta.classList.toggle('activePaleta');
})