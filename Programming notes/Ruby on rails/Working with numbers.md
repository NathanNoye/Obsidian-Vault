```table-of-contents
```

## Dealing with FLOATS (issues with dividing ints)
- When dealing with division of two integers, you'll notice that the number gets rounded down. You need to ensure ONE of them is a float
```ruby
# BAD
puts 10 / 4 # outputs 2

# CORRECT
puts 10.0 / 4 # outputs 2.5
puts 10.to_f / 4
```

## Setting the float to a fixed amount of digits
- You can use `sprintf` or `String#%`
- These methods allow you to format a string with a specific format specification. To set a number to a fixed number of decimal places, you can use the `%.nf` format, where `n` is the number of decimal places you want:
```ruby
number = 3.14159 
formatted_number = sprintf("%.2f", number)
puts formatted_number # Outputs "3.14" 

# Alternatively, using String#% 
formatted_number = "%.2f" % number 
puts formatted_number # Outputs "3.14"
```

- You can also use `round`
- The `round` method can be used to round a float to a given number of decimal places. **However**, it returns a float, which might not include trailing zeros:
```ruby
number = 3.14159 
rounded_number = number.round(2) 
puts rounded_number # Outputs "3.14"

number = 3.50 
rounded_number = number.round(2) 
puts rounded_number # Outputs "3.5"
```

## Random numbers
- use rand(x) to generate a number between 0 and (x-1)
- use rand(x..y) to generate an INCLUSIVE number between x and y
- use rand(x...y) to generate an EXCLUSIVE number between x and y
	- Notice how this one has 3 dots