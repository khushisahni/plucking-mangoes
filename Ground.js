class Ground {
    constructor() {
      var options = {
          isStatic: true,
          friction:0.4
      }
      this.body = Bodies.rectangle(500,625,1200,20,options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      rectMode(CENTER);
      fill("silver");
      rect(500,625,1200,20);
    }
  };
