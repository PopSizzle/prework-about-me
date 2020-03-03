var box = document.getElementById("box")

document.getElementById("button1").addEventListener("click", function(){
    console.log(box.clientHeight);
    box.style.height = `${box.clientHeight + 50}px`;
});

document.getElementById("button2").addEventListener("click", function(){
    console.log(box.clientHeight);
    box.style.height = `${box.clientHeight - 50}px`;
});

document.getElementById("button3").addEventListener("click", function(){
    box.style.backgroundColor = "blue";
});

box.style.opacity=1
box.style.transition = '350ms'

document.getElementById("button4").addEventListener("click", function(){
    console.log(box.style.opacity);
    box.style.opacity = box.style.opacity - 0.2;
});

document.getElementById("button5").addEventListener("click", function(){
    box.style.backgroundColor = "orange";
    box.style.height = "150px";
    box.style.opacity = "1";
});

