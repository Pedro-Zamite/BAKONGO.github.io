const spread=document.querySelector("#spread");
const spread2=document.querySelector("#spread2");
const spread3=document.querySelector("#spread3");
const modal=document.querySelector(".modal");
const modal2=document.querySelector(".modal2");
const modal3=document.querySelector(".modal3");

//Aqui esta a formatação do 1ª modal da section serviços
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
modal2.addEventListener("click",()=>{
    modal2.classList.toggle('active');
   })
  
   //Aqui esta a formatação do 3ª modal da section serviços
spread3.addEventListener("click",()=>{
    modal3.classList.toggle('active');
   
})
modal3.addEventListener("click",()=>{
    modal3.classList.toggle('active');
   })