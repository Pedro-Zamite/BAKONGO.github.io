import {hamburgue, menu, spread, spread2, spread3, modal, modal2, modal3, EuQuero, EuQuero2, EuQuero3, body} from "./_variaveis.js"

hamburgue.addEventListener("click",()=>{
    hamburgue.classList.toggle('activou');
    menu.classList.toggle('activeMenu');
})
// Fim da formatação do menu hamburgue


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
spread.addEventListener("click",()=>{
    modal.classList.toggle('active');
    if(modal.classList.contains('active')==true){
        body.style.cssText="overflow: hidden;"
    }else(
        body.style.cssText="overflow: scroll;"
    ) 
})
modal.addEventListener("click",()=>{
    modal.classList.toggle('active');
   })

//Aqui esta a formatação do 2ª modal da section serviços
spread2.addEventListener("click",()=>{
    modal2.classList.toggle('active');
    if(modal2.classList.contains('active')){
        body.style.cssText="overflow: hidden;";
    }
})
modal2.addEventListener("click",()=>{
    modal2.classList.toggle('active');
   })
  
   //Aqui esta a formatação do 3ª modal da section serviços
spread3.addEventListener("click",()=>{
    modal3.classList.toggle('active');
    if(modal3.classList.contains('active')){
        body.style.cssText="overflow: hidden;";
    } 
})
modal3.addEventListener("click",()=>{
    modal3.classList.toggle('active');
   })