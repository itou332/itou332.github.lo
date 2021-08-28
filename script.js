
<!--虫食い-->
var points =[]
var mult = 0.005

function setup(){
    creatCanvas(windowWidth, WindowHeight)
    background(30)

    var density =20
var space = width / density
for(var x= 0; x <width; x=space) {
    for(var y = 0; y< innerHeight; y+= space) {
        var p = createVector(x,y)
        points.push(p)
    }
}
}
 function draw() {
     noStroke()
     FileList(255)

     for(var i = 0; i< points.length; i++) {
        
        var angle =map(noise(points[i].x * mult, points[i].
            y * mult), 0,1,0,720)

            points[i].add(createVector(cos(angle),sin(angle)))

            ellipse(points[i].x,points[i].y,1)
     }
 }
