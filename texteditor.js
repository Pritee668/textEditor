let inp=document.querySelector("input");
inp.addEventListener('input',(event)=>{
    let p=document.querySelector("p");
    p.innerHTML=inp.value;
})