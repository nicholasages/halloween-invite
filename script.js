const myCanvas = document.getElementById("myDrawing");
const ctx = myCanvas.getContext("2d");
let angleInitialD = 0;
let direction = 1;
let opacity = 0.1;
let opacityDirection = 1;

function updateOpacity() {
	opacity += 0.05 * opacityDirection;
	if (opacity <= 0.1 || opacity >= 1) {
		opacityDirection *= -1;
	}
}

function updateDisplay(event) {
	console.log(event.pageX + ", " + event.pageY);
	draw_ghost(ctx, event.pageX/1.3, event.pageY/1.3);
}


function draw_ghost(ctx, center_x, center_y) {
		ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        
    	this.x  = center_x;
    	this.y  = center_y;

		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.lineWidth="1";
		ctx.fillStyle="rgba(255, 255, 255," + opacity + ")";
    	ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.quadraticCurveTo(this.x + 19, this.y - 90, this.x + 40, this.y);
		ctx.moveTo(this.x, this.y);
    	ctx.quadraticCurveTo(this.x + 3, this.y + 4, this.x + 10, this.y);
		ctx.moveTo(this.x + 10, this.y);
    	ctx.quadraticCurveTo(this.x + 12, this.y - 2, this.x + 20, this.y);
    	ctx.moveTo(this.x + 20, this.y);
    	ctx.quadraticCurveTo(this.x + 22, this.y + 4, this.x + 30, this.y);
    	ctx.moveTo(this.x + 30, this.y);
    	ctx.quadraticCurveTo(this.x + 35, this.y - 2, this.x + 40, this.y);
    	ctx.strokeStyle = 'black';
    	ctx.stroke();
    	ctx.fill();
    	ctx.closePath();
    	ctx.fillStyle = "#000000";
    	ctx.beginPath();
    	ctx.arc(this.x + 14, this.y - 29, 2, 0,  Math.PI * 8, true);
		ctx.strokeStyle = 'black';
    	ctx.stroke();
    	ctx.fill();
    	ctx.beginPath();
    	ctx.arc(this.x + 25, this.y - 29, 2, 0,  Math.PI * 8, true);
		ctx.strokeStyle = 'black';
    	ctx.stroke();
    	ctx.fill();
}

document.addEventListener("mousemove", updateDisplay, false);
document.addEventListener("mouseenter", updateDisplay, false);
document.addEventListener("mouseleave", updateDisplay, false);

setInterval(updateOpacity, 60);
