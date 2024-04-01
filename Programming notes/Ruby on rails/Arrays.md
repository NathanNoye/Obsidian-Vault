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

### Appending to an array
- `push` or `<<`: Adds one or more elements to the end of an array.
```ruby
arr = [1, 2, 3]
puts arr.to_s
arr << 4
puts arr.to_s
arr.push(5)
puts arr.to_s
```

### Adding to the start of an array
- `unshift`: Adds one or more elements to the beginning of an array.
```ruby
arr = [1, 2, 3]
puts arr.to_s
arr.unshift(0)
puts arr.to_s
```

### Iterating
```ruby
arr = %w(my name is nate)
puts arr.to_s

arr.each do |word|
	puts word
end

puts "---------------"

arr.each_with_index do |word, index|
	puts word
	puts index
end
```

### Create an array and remove all odd numbers
```ruby
arr = (1..100).to_a
odd_arr = arr.select do |number|
	number.odd?
end

puts odd_arr
```
### Removing Elements
- `pop`: Removes the last element from an array and returns it.
- `shift`: Removes the first element from an array and returns it.
- `delete`: Removes all elements equal to the specified object from the array.
- `delete_at`: Deletes the element at the specified index.

### Querying
- `include?`: Returns `true` if the array contains the specified element.
- `empty?`: Returns `true` if the array has no elements.
- `size` or `length`: Returns the number of elements in the array.

### Sorting
- `sort`: Returns a new array created by sorting the array.
- `sort_by`: Sorts the array by the specified criterion.

### Selecting
- `select` or `filter`: Returns a new array containing all elements of the array for which the given block returns a true value.
- `reject`: Returns a new array containing the items in the array for which the given block is not true.

### Unique Elements
- `uniq`: Returns a new array by removing duplicate values in the array.