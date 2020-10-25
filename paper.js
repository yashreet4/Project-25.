push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			this.image = loadImage("Dustbin/dustbingreen.png");
			pop()