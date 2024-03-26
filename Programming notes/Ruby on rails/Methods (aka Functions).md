Functions are called Methods in Ruby

```table-of-contents
```

## Creating a Method
```ruby
def function_name()
	# code here
end
```

## Methods with parameters
### Positional Parameters
- These are params that must be input in the same order each time
```ruby
def function_name(name, age, email)
	puts "Name: #{name}, Age: #{age}, Email: #{email}"
end

function_name("Nate", 28, "nate@neonfish.net")
function_name("nate@neonfish.net", 28, "nate")
```

### Named params 
- can be used in any order
```ruby
def function_name(name:, age:, email:) 
	puts "Name: #{name}, Age: #{age}, Email: #{email}"
end

function_name(name: "Nate", age: 28, email: "nate@neonfish.net")
function_name(email: "nate@neonfish.net", age: 28, name: "Nate")
```

### Default Params
- You can provide default values for named parameters. If a caller omits that argument, the default value is used
```ruby
def create_user(name:, age:, email: "nate@neonfish.net")
	puts "Name: #{name}, Age: #{age}, Email: #{email}" 
end 

create_user(name: "Nate", age: 28)
```

### Combining with positional params
- Methods can have both positional and named parameters. Positional parameters come first
```ruby
def create_user(name, age, email: "default@example.com")
	puts "Name: #{name}, Age: #{age}, Email: #{email}"
end

create_user("Nate", 28, email: "nate@neonfish.net")
```