The main idea is to count all the occurring characters in a string. If you have a string like `aba`, then the result should be `{'a': 2, 'b': 1}`.

What if the string is empty? Then the result should be empty object literal, `{}`.

### My solution
```ruby
def count_chars(s)
	hash = {}

	s.split('').each do |letter|
		hash.key?(letter) ? hash[letter] = hash[letter] + 1 : hash[letter] = 1
	end

	return hash
end

puts count_chars('hello world')
```