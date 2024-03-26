```table-of-contents
```

## Creating an array
```ruby
numbers = [1, 2, 3]
puts numbers
puts '-------'
puts numbers[0]
puts '-------'
puts numbers.last
```

### Creating and array from a RANGE
- Remember - doing `1..100` will make an INCLUSIVE range while `1...100` will make an exclusive range
- You'll need to convert that range to an array
```ruby
numbers = (1...100).to_a
puts numbers[55]
puts numbers.last
```

### Shuffling an array
```ruby
numbers = (1...100).to_a
puts numbers.shuffle.first
puts numbers.shuffle.first
```

### Reversing an array
```ruby
numbers = (1...100).to_a
puts numbers.reverse.first
```

