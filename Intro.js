class Intro{

    constructor(x, y) {
        
        this.x = x;
        this.y = y;
        this.image = loadImage("images/Intro.png");

    }

    display() {
        
        fill(255);
        ellipse(this.x, this.y, this.r);
        imageMode(CENTER)
        image(this.image, this.x, this.y, 800, 400);

    }

}