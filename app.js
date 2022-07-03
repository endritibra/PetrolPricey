const items=document.querySelectorAll(".item");
const modal=document.querySelector(".modal");
const display = document.querySelector(".display");
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
const tipi=month + "/" + day + "/" + year;
document.getElementById("data").innerHTML = tipi;
document.querySelector("#data2").innerHTML=tipi;
document.querySelector("#data1").innerHTML=tipi;



items.forEach((item)=>{
  item.addEventListener('click',ev=>{
    modal.style.display = "block";

  })  
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }   }


const litra = document.querySelector("#litra");
const gas=document.querySelector("#gasi")


const dergo=document.querySelector("#dergo");


dergo.addEventListener('click',(ev)=>{
    const lloji=document.querySelector("#typeoff").value;
    const liter=document.querySelector("#litra").value;
    
    if(lloji==='gas'){
            const shuma= liter * 100;
            display.textContent=shuma + ' lek';
    }
    else if(lloji==='dizel'){
        const shuma=liter *180;
        display.textContent=shuma + ' lek';
    }
    else if(lloji==='petrol'){
        const shuma=liter *200;
        display.textContent=shuma + ' lek'
    }
    if(isNaN(liter)){
        display.textContent='Kerkohet numer'
    }
})

dergo.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        const lloji=document.querySelector("#typeoff").value;
    
        if(lloji==='gas'){
                const shuma= document.querySelector("#litra").value * 100;
                display.textContent=shuma + ' lek';
        }
        else if(lloji==='dizel'){
            const shuma=document.querySelector("#litra").value *180;
            display.textContent=shuma + ' lek';
        }
        else if(lloji==='petrol'){
            const shuma=document.querySelector("#litra").value *200;
            display.textContent=shuma + ' lek'
        }
        
        event.preventDefault();

    }
});


console.log()