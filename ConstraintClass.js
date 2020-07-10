class ContraintClass{
    constructor(A,B){
        var options ={
            bodyA:A,
            bodyB:B,
            stiffness: 0.5,
            length: 20
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var A_pos = this.chain.bodyA.position;
        var B_pos = this.chain.bodyB.position;
        line(A_pos.x,A_pos.y,B_pos.x,B_pos.y);
    }
}