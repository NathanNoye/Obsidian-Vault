**Definition:** Ensures a class has only one instance and provides a global point of access to it.

**Problem it Solves:** The Singleton pattern ensures that a class has only one instance and provides a global point of access to it, which is useful for controlling resources, such as a configuration manager or a connection pool.

**Use Case:** Managing the configuration settings of an application.

**Pros:**
- Controlled access to the sole instance.
- Lazily initialized, loading only when necessary.
- Can substitute for global variables.

**Cons:**
- Can introduce global state into an application, leading to hidden dependencies.
- Difficult to test due to the single instance and global access.

#### JavaScript Example
```javascript
class Singleton {
    private static instance: Singleton;

	// private constructor to prevent direct construction calls
    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true


```

#### Flutter Example
```dart
class Singleton {
    static final Singleton _instance = Singleton._internal();

    factory Singleton() {
        return _instance;
    }

    Singleton._internal();
}

void main() {
    var instance1 = Singleton();
    var instance2 = Singleton();
    print(identical(instance1, instance2)); // true
}


```

In both examples, attempting to create a new instance of `Singleton` will actually return the same instance every time, ensuring that there is only one instance of the class in the application.