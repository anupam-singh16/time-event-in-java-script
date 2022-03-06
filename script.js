// {/* <span id="show-battery" class="battery"></span> */}
let tempload=()=>{
 const temp=document.getElementById('show-battery');
 temp.innerHTML="anupam";
 temp.style.color="yellow"
 setTimeout(()=>{
     temp.innerHTML="singh";
    temp.style.color="white"
 }, 1000);
 setTimeout(()=>{
    temp.innerHTML="i am";
    temp.style.color="blue"
}, 2000);
setTimeout(()=>{
    temp.innerHTML="from";
    temp.style.color="pink"
}, 3000);
setTimeout(()=>{
    temp.innerHTML="noida";
    temp.style.color="red"
}, 4000);
}
tempload();
setInterval(tempload,5000);