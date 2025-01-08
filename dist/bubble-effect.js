document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("bubble-container");
  
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;
  
    // Create an engine
    const engine = Engine.create();
    const world = engine.world;
  
    // Set up the renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });
  
    Render.run(render);
  
    // Create a runner
    const runner = Runner.create();
    Runner.run(runner, engine);
  
    // Bubble properties
    const rows = 10;
    const columns = 10;
    const bubbleRadius = 30;
  
    // Color options
    const colors = ['#FFA500', '#FFFF00', '#FFFFE0', '#00008B']; // Orange, Yellow, White, Dark Blue
  
    // Create bubbles
    const stack = Composites.stack(50, 50, columns, rows, 10, 10, (x, y) => {
      // Pick a random color from the predefined color array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
      return Bodies.circle(x, y, bubbleRadius, {
        restitution: 0.9,
        render: {
          fillStyle: randomColor, // Apply the random color
        },
      });
    });
  
    // Add random velocity to bubbles
    stack.bodies.forEach((body) => {
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
      });
    });
  
    Composite.add(world, [
      // Walls
      Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 0.5, { isStatic: true }),
      Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 0.5, {
        isStatic: true,
      }),
      Bodies.rectangle(0, window.innerHeight / 2,0.5, window.innerHeight, { isStatic: true }),
      Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 0.5, window.innerHeight, {
        isStatic: true,
      }),
      stack,
    ]);
  
    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
  
    Composite.add(world, mouseConstraint);
  
    render.mouse = mouse;
  
    // Handle window resize
    const handleResize = () => {
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;
  
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight },
      });
    };
  
    window.addEventListener("resize", handleResize);
  });
  