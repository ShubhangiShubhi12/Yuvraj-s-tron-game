class Player{
    constructor(x,y,width,height,Images){
        var options = {
            isStatic: true,
            friction : 0.05,
            density: 1
        }
        this.Images = Images;
        this.x = x;
        this.y = y;
        this.width=width;
        this.height = height;
        player = Bodies.rectangle(this.x,this.y,this.width,this.height,options);

        World.add(world,player);

    }

    display(){
        var pos = player.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(Images,this.x,this.y,this.width,this.height);
        pop();
        

    }
}