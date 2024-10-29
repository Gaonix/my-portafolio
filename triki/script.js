const botones=document.querySelectorAll('.item')
const item1=document.getElementById('i1');
let turno1=true;

botones.forEach((e)=>{
    e.addEventListener('click',(a)=>{
        verificarTurno(a.target);
});
});


function verificarTurno(element){
    if(element.innerText==="-"){

        if (turno1){
            element.innerText="X";
            element.classList.add('turno1')
        }else{
            element.innerText="O";
            element.classList.add('turno2')
        }
        turno1=!turno1;
    }
}