```table-of-contents
```

## Outputting to the terminal:
```ruby
puts "Hello World" # => Hello World
puts ["Hello","World"] # => Hello World (but each word on new lines)
p "Hello World" # => "Hello World"
print "Hello World" # => Same thing as Puts but no new line
print "Hello World"
```

#### Puts
- Outputs each argument as a string to the console, appending a newline, primarily used for simple text display.
- converts the object it is passed to a string using the `.to_s` method and then outputs that string to the standard output (usually your console) followed by a newline character.
- If `puts` is given an array, it will output each element on a new line

#### P
- Prints the detailed, technical representation of an object to the console, useful for debugging.
- Prints the value of an object to the standard output in a more detailed and technical way. It calls the `.inspect` method on the object, which provides a string representation of the object that is more detailed than the simple string representation `puts` would provide
- Particularly useful when you want to see the details or the type of the object, not just its value. Also, unlike `puts`, `p` returns the value that was passed to it, which can be useful in debugging or when chaining methods.

#### Print
- Outputs each argument as a string to the console without appending a newline, useful for continuous, inline text display.
- Converts the object it is passed to a string using `.to_s` for display.

## Interacting with the terminal
- Typing IRB (Interactive Ruby) will let you start a ruby session in your terminal

## Getting input from the terminal
- You can get input from the terminal using the `gets` method, which reads a line of text from the standard input (usually the keyboard). Here’s how you can use it:
```ruby
puts "What is your name?"
name = gets.chomp
puts "Hello, #{name}!"
```
- `gets`: This method reads the next line of input, including the newline character at the end. If the end of file (EOF) is reached, it returns `nil`.
- `chomp`: Often used with `gets` to remove the newline character at the end of the input. This is because when you enter input in the terminal and press Enter, the newline character is included in the input.
### Handling integer inputs
- If you expect numerical input and want to use it as an integer, you can convert the input string to an integer using `to_i`:
```ruby
puts "Enter your age:"
age = gets.chomp.to_i
puts "You are #{age} years old."
```

### Reading Multiple Lines:
- If you need to read multiple lines of input, you can use a loop until a certain condition is met, like an empty line or a specific keyword:
```ruby
puts "Enter your comments (type 'done' to finish):"
comments = ""
while (line = gets.chomp) != "done"
  comments += line + "\n"
end
puts "Your comments:\n#{comments}"
```

