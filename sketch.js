var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint,
Composite = Matter.Composite,
Bodies = Matter.Bodies;
var engine,world,render,runner;
var mouseConstraint, a;
function setup(){
// create engine
engine = Engine.create(),
world = engine.world;

// create renderer
render = Render.create({
element: document.body,
engine: engine,
options: {
    width: 800,
    height: 600,
    wireframes: false,
    background: 'rgb(255,180,255)'
    //showVelocity: true
}
});
runner = Runner.create();
// add bodies
Composite.add(world, [
    // falling blocks
   Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001,
    render: {
        fillStyle: 'red',
        strokeStyle: 'black',
        lineWidth: 3
   }
   }),
    Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05,
        render: {
            fillStyle: 'blue',
            strokeStyle: 'black',
            lineWidth: 3
       } }),
    Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1,
        render: {
            fillStyle: 'yellow',
            strokeStyle: 'black',
            lineWidth: 3
       } }),
    
    // ground
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true ,
        render: {
            fillStyle: 'brown',
            strokeStyle: 'black',
            lineWidth: 3
       }})
    
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    
    
}

function draw(){
  
    Render.run(render);

    // create runner
    Runner.run(runner, engine);
    // keep the mouse in sync with rendering
    render.mouse = mouse;





}
