this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=-0.3;	
		this.angle=0;	
		this.image = loadImage("paper/paper.png");

		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
            
            translate(posRight.x, posRight.y);
			rectMode(CENTER)
		
			stroke(255)
			angleMode(RADIANS)
			fill(255)
            rotate(-1*this.angle)

            push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			strokeWeight(4);
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);

            
