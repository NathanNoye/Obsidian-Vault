**Definition:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

**Use Case:** A software application requires different types of database connections based on the environment it's running in (development or production).

**Problem it Solves:** The Abstract Factory pattern addresses the need to create families of related or dependent objects without specifying their concrete classes. It promotes consistency among products that are designed to work together.

**Example in TypeScript and Flutter:** Imagine a UI library where we need to create themed UI elements like buttons and checkboxes that match the theme (e.g., Light or Dark).


**Pros:**
- Ensures that products in a family are compatible with each other.
- Avoids tight coupling between concrete products and client code.
- Supports adding new variants of products without altering existing client code.

**Cons:**
- Can be more complex than necessary if only a few products are being created by the factory.
- Increasing the number of factories and products can lead to larger codebase and complexity.

#### Javascript
```javascript
// Abstract factory interface
interface DBConnectionFactory {
    createConnection(): DBConnection;
}

// Abstract product interface
interface DBConnection {
    connect(): string;
}

// Concrete factories
class DevDBConnectionFactory implements DBConnectionFactory {
    createConnection(): DBConnection {
        return new SQLiteConnection();
    }
}

class ProdDBConnectionFactory implements DBConnectionFactory {
    createConnection(): DBConnection {
        return new MySQLConnection();
    }
}

// Concrete products
class SQLiteConnection implements DBConnection {
    connect(): string {
        return "Connected to SQLite database in development";
    }
}

class MySQLConnection implements DBConnection {
    connect(): string {
        return "Connected to MySQL database in production";
    }
}

// Client code
function clientCode(factory: DBConnectionFactory) {
    const dbConnection = factory.createConnection();
    console.log(dbConnection.connect());
}

// Usage
clientCode(new DevDBConnectionFactory()); // Output: Connected to SQLite database in development
clientCode(new ProdDBConnectionFactory()); // Output: Connected to MySQL database in production

```

#### Flutter
```dart
// Abstract factory interface
abstract class DataSourceFactory {
    DataSource createDataSource();
}

// Abstract product interface
abstract class DataSource {
    String connect();
}

// Concrete factories
class DevDataSourceFactory implements DataSourceFactory {
    @override
    DataSource createDataSource() {
        return DevDataSource();
    }
}

class ProdDataSourceFactory implements DataSourceFactory {
    @override
    DataSource createDataSource() {
        return ProdDataSource();
    }
}

// Concrete products
class DevDataSource implements DataSource {
    @override
    String connect() {
        return "Connected to local development data source";
    }
}

class ProdDataSource implements DataSource {
    @override
    String connect() {
        return "Connected to remote production data source";
    }
}

void clientCode(DataSourceFactory factory) {
    final dataSource = factory.createDataSource();
    print(dataSource.connect());
}

void main() {
    clientCode(DevDataSourceFactory()); // Outputs: Connected to local development data source
    clientCode(ProdDataSourceFactory()); // Outputs: Connected to remote production data source
}

```