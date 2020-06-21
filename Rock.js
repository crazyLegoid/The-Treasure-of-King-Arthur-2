class Rock{

    constructor(x, y, r) {
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.xspeed = -5;
        this.health = 0;

    }

    display() {
        
        fill("#8d8e74");
        ellipse(this.x, this.y, this.r);

    }

    update() {
        
        if (this.health === 1) {
         
            this.x += this.xspeed;

        }

    }

    isTouching(body) {
        
        if (body.x > this.x - this.r/2
            && body.x < this.x + this.r/2
            && body.y > this.y - this.r/2
            && body.y < this.y + this.r/2) {
            
            body.x = 780;
            this.x = 1500;

        }

    }

}