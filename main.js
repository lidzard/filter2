var mx = 0;
var my = 0;

function preload() {

}
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
    cam.size(500, 500);
    poseNet = ml5.poseNet(cam, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    image(cam, 0, 0, 500, 500);
    fill("red");
}
function save()
{
    save()
}
function modelLoaded()
{
    console.log("model is Loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log(noseX);
        console.log(noseY);

    }
}
