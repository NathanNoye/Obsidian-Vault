```table-of-contents
```

### Hash with strings
```ruby
hash = {'a' => 1, 'b' => 2}
puts hash['a']
```

### Hash with symbols (modern / faster)
```ruby
hash = {a: 1, b: 2}
puts hash[:a]
```

### Iterating
```ruby
hash = {a:1, b:2}
hash.each do |k, v|
	puts "key: #{k}, value: #{v}"
end
```

### Adding
```ruby
hash = {a: 1, b:2}
hash[:c] = 3
puts hash [:c]
```

### Selecting BUT only if it's a string
```ruby
hash = {a:1, b:2, c:"hello"}
new_hash = hash.select do |k, v|
	v.is_a?(String)
end
puts hash
puts new_hash
```

### Dynamic symbol keys
```ruby
letter_arr = ['a', 'b', 'c']
hash = {}
symbol = letter_arr[0].to_sym
hash[symbol] = letter_arr[0]
puts hash [:a]
puts hash[symbol]
```


### Adding and Updating Entries
- `hash[key] = value`: Sets the value of the key. If the key exists, it updates the value; otherwise, it adds a new key-value pair.
- `merge(other_hash)`: Returns a new hash containing the contents of the original hash and the `other_hash`. If keys overlap, the values from `other_hash` will overwrite those in the original hash.
### Accessing Values
- `hash[key]`: Retrieves the value for the specified key.
- `fetch(key, default_value)`: Retrieves the value for the specified key. If the key is not found, it returns `default_value` or raises an error if no default is provided.
- `values`: Returns an array of all the values in the hash.
- `keys`: Returns an array of all the keys in the hash.
### Checking for Presence
- `key?(key)`: Returns `true` if the given key is present in the hash.
- `has_key?(key)`: Alias for `key?`.
- `value?(value)`: Returns `true` if the given value is present in the hash.
- `has_value?(value)`: Alias for `value?`.
- `empty?`: Returns `true` if the hash has no key-value pairs.
### Removing Entries
- `delete(key)`: Removes the key-value pair for the given key and returns the value. If the key is not found, it returns `nil` or the optional default value if specified.
- `delete_if { |key, value| block }`: Deletes every key-value pair for which the block evaluates to true.
### Iterating
- `each { |key, value| block }`: Calls the block once for each key-value pair, passing the key and value as parameters.
- `each_key { |key| block }`: Iterates over each key in the hash.
- `each_value { |value| block }`: Iterates over each value in the hash.
### Transforming
- `map { |key, value| block }`: Returns an array containing the results of running the block for every key-value pair.
- `transform_keys { |key| block }`: Returns a new hash with all keys converted using the provided block.
- `transform_values { |value| block }`: Returns a new hash with all values converted using the provided block.
### Selecting and Filtering
- `select { |key, value| block }`: Returns a new hash consisting of key-value pairs for which the block returns true.
- `reject { |key, value| block }`: Opposite of `select`, returns a hash for all elements for which the block returns false.
### Merging Hashes
- `merge(other_hash)`: Returns a new hash containing the merged contents of the original hash and `other_hash`.
- `merge!(other_hash)`: Adds the contents of `other_hash` to `self`, overwriting entries with duplicate keys.
### Sizing and Capacity
- `length` or `size`: Returns the number of key-value pairs in the hash.
### Converting
- `to_a`: Converts the hash to a nested array of `[key, value]` arrays.
- `to_h`: Converts the object to a hash (useful for converting arrays back to a hash).