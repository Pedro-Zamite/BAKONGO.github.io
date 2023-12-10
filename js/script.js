import {btn_close, btn_contratar, btn_contratar2, btn_contratar3, contato, menu_itens, btn_paleta, modal_Paleta, hamburgue, menu, spread, spread2, spread3, spread4, spread5, spread6, modal, modal2, modal3, EuQuero, EuQuero2, EuQuero3, body} from "./_variaveis.js";
import {radio} from "./_slideMobile.js";

console.log(btn_contratar)
//! Inicio da Formatação do slide header
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


//? Inicio da formatação do menu hamburgue
hamburgue.addEventListener("click",()=>{
    hamburgue.classList.toggle('activou');
    menu.classList.toggle('activeMenu');
})
menu_itens.addEventListener('click',()=>{
    hamburgue.classList.toggle('activou');
    menu.classList.toggle('activeMenu');
})
contato.addEventListener('click',()=>{
    hamburgue.classList.toggle('activou');
    menu.classList.toggle('activeMenu');
})


//! Aqui esta a formatação do btn EuQuero
EuQuero.addEventListener("click",()=>{
    modal_Paleta.classList.toggle('activePaleta');
})
EuQuero2.addEventListener("click",()=>{
    modal_Paleta.classList.toggle('activePaleta');
})
EuQuero3.addEventListener("click",()=>{
    modal_Paleta.classList.toggle('activePaleta');
})

//? Aqui esta a formatação do 1ª modal da section serviços
spread4.addEventListener("click",()=>{
    modal.classList.toggle('active');
})
spread.addEventListener("click",()=>{
    modal.classList.toggle('active');
})
modal.addEventListener("click",()=>{
    modal.classList.toggle('active');
   })

//! Aqui esta a formatação do 2ª modal da section serviços
spread2.addEventListener("click",()=>{
    modal2.classList.toggle('active');
})
spread5.addEventListener("click",()=>{
    modal2.classList.toggle('active');
})
modal2.addEventListener("click",()=>{
    modal2.classList.toggle('active');
   })
  
//? Aqui esta a formatação do 3ª modal da section serviços
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
btn_close.addEventListener("click",()=>{
    modal_Paleta.classList.toggle('activePaleta');
})

//? Inicio da formatação do button btn_contratar
btn_contratar.addEventListener("click",()=>{
    alert("O seu futuro, começa Aqui!")
        modal_Paleta.classList.toggle('activePaleta');

})
btn_contratar2.addEventListener("click",()=>{
    alert("O seu futuro, começa Aqui!")
        modal_Paleta.classList.toggle('activePaleta');

})
btn_contratar3.addEventListener("click",()=>{
    alert("O seu futuro, começa Aqui!")
        modal_Paleta.classList.toggle('activePaleta');

})