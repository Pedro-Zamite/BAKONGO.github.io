
const contato=document.querySelector("#contato")
const menu_itens=document.querySelector("#menu-itens")


const btn_close=document.querySelector("#btn-close")
const btn_paleta=document.querySelector(".btn-paleta")
const modal_Paleta=document.querySelector(".modal-paleta")
const btn_contratar=document.querySelector(".btn_contratar")
const btn_contratar2=document.querySelector(".btn_contratar2")
const btn_contratar3=document.querySelector(".btn_contratar3")


const spread=document.querySelector(".spread")
const spread2=document.querySelector("#spread2");
const spread3=document.querySelector("#spread3");
const spread4=document.querySelector(".spread4")
const spread5=document.querySelector(".spread5")
const spread6=document.querySelector(".spread6")

const modal=document.querySelector(".modal");
const modal2=document.querySelector(".modal2");
const modal3=document.querySelector(".modal3");

const EuQuero=document.querySelector(".EuQuero");
const EuQuero2=document.querySelector(".EuQuero2");
const EuQuero3=document.querySelector(".EuQuero3");

const body=document.querySelector("body");

// Inicio da formatação do menu hamburgue
const hamburgue=document.querySelector("#hamburgue");
const menu=document.querySelector("#menu");




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