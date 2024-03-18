**Definition:** Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.

**Problem it Solves:** The Factory Method pattern solves the problem of creating objects without specifying the exact class of object that will be created. This is useful for managing dependencies and decoupling the code that generates objects from the code that uses those objects.

**Use Case:** A notification system that can send different types of notifications (like email, SMS, etc.) based on user preferences or system configuration.

**Pros:**
- Provides flexibility by allowing subclasses to change the type of objects that will be created.
- Separates product construction code from the code that uses the product, following the Single Responsibility Principle.

**Cons:**
- Can lead to complex code due to the introduction of many subclasses to implement the factory method.
- May require more code and effort to establish compared to creating objects directly.

![[Pasted image 20240318164731.png]]

#### JavaScript
```javascript
interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    send(recipient:string, message: string) {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotification implements Notification {
    send(recipient:string, message: string) {
        console.log(`Sending SMS: ${message}`);
    }
}

class NotificationFactory {
    static createNotification(type: 'email' | 'sms'): Notification {
        if (type === 'email') {
            return new EmailNotification();
        } else if (type === 'sms') {
            return new SMSNotification();
        }
        throw new Error("Invalid notification type");
    }
}

// Usage
const notification = NotificationFactory.createNotification('email');
notification.send('Hello World');


```

#### Flutter
```dart
abstract class Notification {
    void send(String message);
}

class EmailNotification implements Notification {
    @override
    void send(String recipient, String message) {
        print('Sending email: $message');
    }
}

class SMSNotification implements Notification {
    @override
    void send(String recipient, String message) {
        print('Sending SMS: $message');
    }
}

class NotificationFactory {
    static Notification createNotification(String type) {
        if (type == 'email') {
            return EmailNotification();
        } else if (type == 'sms') {
            return SMSNotification();
        }
        throw Exception('Invalid notification type');
    }
}

// Usage
void main() {
    final notification = NotificationFactory.createNotification('email');
    notification.send('Hello World');
}

```