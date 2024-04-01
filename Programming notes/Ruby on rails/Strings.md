```table-of-contents
```

## Concatenation
```ruby
first_name = 'Nate'
greeting = 'Hi, my name is ' + first_name
puts greeting
```

## String Interpolation
```ruby
first_name = 'Nate'
greeting = "Hi, my name is #{first_name}" # <= Notice the double quotes
puts greeting
```

## Methods, how to find them
- Running the "methods" prop on an object will return all the methods available. Check out the example below:
```ruby
first_name = "nate"
print first_name.methods
```

## Sub vs GSub
- Sub replaces one instances of text
- GSub replaces all instances of text
- Notice how it is case sensitive
```ruby
sentence = 'Welcome to the dome welcome welcome'
puts sentence.sub('welcome', 'greetings')
puts sentence.gsub('welcome', 'greetings')
```

## Integers being misused like strings
```ruby
age = "5"
puts age * 2
puts age.to_i * 2
```

## Repeating strings
```ruby
puts "-" * 20
30.times { print "-" }
puts "\n"
10.times { puts rand(10) }
```

### Ranges and Strings
```ruby
x = ("a".."z").to_a
print x
```
see also [[Arrays#Creating and array from a RANGE|Creating and array from a RANGE]]
