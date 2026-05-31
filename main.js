function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	mariocoins = loadSound("coin.wav");
	gameOver = loadSound("gameover.wav");
	kick = loadSound("kick.wav");
	marioDie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600,300);
	canvas.parent("canvas");
	video.parent("gameConsole");
	modal = ml5.poseNet(video, modalLoad);
	modal.on('pose', gotResult);
}

function modalLoad(){
	console.log("modal is loaded");
}

function gotResult(result){
	if(result.length > 0){
		console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
	}
}

function draw() {
	game()
}






