const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');


function loop(){
    requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);

    context.fillStyle = 'red';
    context.fillRect(50,50,100,100);
}


requestAnimationFrame(loop);