let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let d=document.querySelector('div');
    let randomcolors=randomcolor();
    h3.innerText=randomcolors;
    h3.style.color=randomcolors;
    d.style.backgroundColor=randomcolors;
})
function randomcolor(){
    let R=Math.floor(Math.random()*255);
    let G=Math.floor(Math.random()*255);
    let B=Math.floor(Math.random()*255);
    let color=`rgb(${R},${G},${B})`;
    return color;
}