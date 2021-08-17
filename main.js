function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
    canvas.position(560,150);   
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
    }
}

function modelLoaded(){
    console.log( "POSENET is Loaded");
}

function draw(){
    background("#f6ff47");
    textSize(difference);
    fill("FFFF33");
    text("Maanya!",50,400);
}