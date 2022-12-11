Peter_pan_song="";
Harry_potter_theme_song="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}

function modelLoaded(){
    console.log("PoseNet Is Initiaized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = resulta[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console,log("leftWistX" + leftWristX + "leftWristY" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX" + rightWristX + "rightWristY" + rightWristY);
    }
}