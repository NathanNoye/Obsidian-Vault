**Definition:** **Adapter** is a structural design pattern that allows objects with incompatible interfaces to collaborate.

**Problem it Solves:** The Adapter pattern allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, enabling them to interact without modifying their existing code.

**Pros:**
- Allows existing classes to work with others without altering their source code, facilitating reuse and compatibility.
- Separates and hides the complexity of interacting with different interfaces or classes.

**Cons:**
- Can introduce additional layers and complexity into the code, potentially complicating the overall system architecture.
- Overuse can lead to a messy codebase with many small, adapter classes that are hard to manage and understand.

**Use Case:** Integrating a new library or system into an existing application where the interfaces do not match. For example, making a legacy logging system work with a new and more modern logging framework.

**TypeScript Example:**
```javascript
// Existing interface that needs adapting
interface LegacyLogger {
    logMessage(message: string): void;
}

// New interface to be used in the application
interface Logger {
    log(message: string): void;
}

// Legacy Logger implementation
class LegacyLoggerImpl implements LegacyLogger {
    logMessage(message: string) {
        console.log(`Legacy: ${message}`);
    }
}

// Adapter that makes the new interface work with the old interface
class LoggerAdapter implements Logger {
    constructor(private legacyLogger: LegacyLogger) {}

    log(message: string) {
        this.legacyLogger.logMessage(message);
    }
}

// Usage
const legacyLogger = new LegacyLoggerImpl();
const logger = new LoggerAdapter(legacyLogger);
logger.log('Hello World');

```

**Flutter**
```dart
// Existing interface
abstract class LegacyLogger {
  void logMessage(String message);
}

// New interface
abstract class Logger {
  void log(String message);
}

// Legacy Logger implementation
class LegacyLoggerImpl implements LegacyLogger {
  @override
  void logMessage(String message) {
    print('Legacy: $message');
  }
}

// Adapter
class LoggerAdapter implements Logger {
  final LegacyLogger legacyLogger;

  LoggerAdapter(this.legacyLogger);

  @override
  void log(String message) {
    legacyLogger.logMessage(message);
  }
}

void main() {
  final legacyLogger = LegacyLoggerImpl();
  final logger = LoggerAdapter(legacyLogger);
  logger.log('Hello World');
}

```