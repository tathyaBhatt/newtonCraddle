class Bar{
    constructor(x, y, width, height){
        var options={
    isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 800, 30, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(pos.x, pos.y, 1600, 30);
        pop();
    }
}