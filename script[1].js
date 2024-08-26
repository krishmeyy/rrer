function change(event){
  let slide = document.getElementById("slide");
  slide.src = event.target.src;
}
let images = document.querySelectorAll(".flexbox img");
let urls = []
for(let i of images){
  urls.push(i.src);
  console.log(i);
}
let index = 0;

function next(){
   index+=1;
  if(index>=urls.length){
    index=0;
  }
   let slide = document.getElementById("slide");
   slide.src = urls[index];
}