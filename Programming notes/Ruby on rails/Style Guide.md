Read more here: https://rubystyle.guide/

### Variables
- **Naming**: Use `snake_case` for variable names and method names. For example, `item_count` or `calculate_total`.
- **Scope Indicators**: Use appropriate prefixes to indicate scope: `@` for instance variables (e.g., `@user_name`), `@@` for class variables (e.g., `@@counter`), and `$` for global variables (e.g., `$debug_mode`), though global variables are discouraged.
- **Constants**: Name constants with `SCREAMING_SNAKE_CASE` (e.g., `MAX_LIMIT`).
- **Booleans**: Predicate methods (methods that return a boolean value) should end with a question mark (e.g., `empty?`), and methods that are dangerous, or modify the receiver, should end with an exclamation mark (e.g., `replace!`).

### Methods
- **Naming**: Use `snake_case` for method names. Method names should be descriptive, indicating what the method does.
- **Parameters**: Use parentheses around method parameters when defining a method, but they can be omitted when calling a method if no ambiguity arises.
- **Method Length**: Aim to keep methods short and focused. A method should ideally have fewer than 10 lines of code.
- **Access Control**: Use `public`, `protected`, and `private` to control method visibility appropriately. Group public, protected, and private methods in separate sections within a class.
- **Default Parameters**: Use default arguments for methods when appropriate to reduce the need for method overloads.

### General Principles
- **Readability**: Prioritize readability over compactness. Clear code is better than concise code.
- **Consistency**: Stick to a consistent style throughout your codebase. If you're working in a codebase with an established style, conform to that style.