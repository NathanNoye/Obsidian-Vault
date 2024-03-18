**Definition:** lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

**Problem it Solves:** The Bridge pattern decouples an abstraction from its implementation, allowing the two to vary independently. It's particularly useful for avoiding a permanent binding between an interface and its implementation, and for allowing the choice of implementation to be made at runtime.

**Pros:**
- Separates abstraction and implementation into two different hierarchies, improving modularity and enabling independent extensibility.
- Facilitates a platform-independent way to implement functionality and switch implementations at runtime.

**Cons:**
- Can add complexity to the code by introducing more classes and interfaces.
- May require a deeper understanding of the pattern for proper implementation, which could lead to initial overhead in design.

**Use Case:** Imagine a software system for drawing shapes that should work across different rendering engines, such as OpenGL or DirectX. The Bridge pattern allows changing the rendering engine without modifying the shape's abstraction.

**Typescript**
```javascript
// Abstraction
interface Shape {
    draw(): void;
}

// Implementor
interface Renderer {
    renderShape(shape: string): void;
}

// Refined Abstraction
class Circle implements Shape {
    constructor(private renderer: Renderer, private radius: number) {}

    draw() {
        this.renderer.renderShape(`Circle with radius ${this.radius}`);
    }
}

// Concrete Implementor A
class OpenGLRenderer implements Renderer {
    renderShape(shape: string) {
        console.log(`OpenGL rendering ${shape}`);
    }
}

// Concrete Implementor B
class DirectXRenderer implements Renderer {
    renderShape(shape: string) {
        console.log(`DirectX rendering ${shape}`);
    }
}

// Usage
const openGLRenderer = new OpenGLRenderer();
const directXRenderer = new DirectXRenderer();

const circleWithOpenGL = new Circle(openGLRenderer, 10);
circleWithOpenGL.draw(); // Uses OpenGL to render the circle

const circleWithDirectX = new Circle(directXRenderer, 10);
circleWithDirectX.draw(); // Uses DirectX to render the circle

```

**Flutter**
```dart
// Abstraction
abstract class Shape {
  void draw();
}

// Implementor
abstract class Renderer {
  void renderShape(String shape);
}

// Refined Abstraction
class Circle extends Shape {
  final Renderer renderer;
  final double radius;

  Circle(this.renderer, this.radius);

  @override
  void draw() {
    renderer.renderShape('Circle with radius $radius');
  }
}

// Concrete Implementor A
class OpenGLRenderer implements Renderer {
  @override
  void renderShape(String shape) {
    print('OpenGL rendering $shape');
  }
}

// Concrete Implementor B
class DirectXRenderer implements Renderer {
  @override
  void renderShape(String shape) {
    print('DirectX rendering $shape');
  }
}

void main() {
  final openGLRenderer = OpenGLRenderer();
  final directXRenderer = DirectXRenderer();

  final circleWithOpenGL = Circle(openGLRenderer, 10.0);
  circleWithOpenGL.draw(); // Uses OpenGL to render the circle

  final circleWithDirectX = Circle(directXRenderer, 10.0);
  circleWithDirectX.draw(); // Uses DirectX to render the circle
}

```