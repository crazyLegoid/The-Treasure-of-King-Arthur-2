class Spike{

    constructor(x, y, width, height) {
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    display() {
        
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);

    }

    isTouching(body) {
        
        if (body.x > (this.x - this.width)
            && body.x < (this.x + this.width)
            && body.y > (this.y - this.height)
            && body.y < (this.y + this.height)) {
            
            if (levelD === 0) {
                
                body.x = 20;
                //console.log("try")
                deathS.play();

            } else {
                
                body.x = 780;
                rock.x = 1500;

            }
            
            
        }

    }

}