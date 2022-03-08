diffrence = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    capture = createCapture(VIDEO);
    capture.size(550,500)

    canvas = createCanvas(450,500);
    canvas.position(560,150);

    Posenet = ml5.poseNet(capture , modelLoaded);
    Posenet.on("pose", gotPoses);

}

function modelLoaded(){
        console.log("The model has been loaded");
}

function draw(){
    background("black");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        diffrence = floor(leftWrist - rightWrist);
    }
}