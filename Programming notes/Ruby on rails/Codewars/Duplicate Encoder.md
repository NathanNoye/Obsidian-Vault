The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

### Examples

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

### Notes

Assertion messages may be unclear about what they display in some languages. If you read `"...It Should encode XXX"`, the `"XXX"` is the expected result, not the input!

### My Solution (faster)
Fun fact - this one doesn't look faster but it is. 
If each loop iteration take 1 ms and there are 1234 iterations - this way will take 2.5 seconds to complete.

On the flip side, if we do the alternative solution (most upvoted), we'll end up waiting over 25.379 minutes.

```ruby
word = "din"
word = "recede"
# word = "(( @"

def duplicate_encode(word)
	word_hash = {}
	output = "";

	word = word.downcase

	word.split('').each do |w|
		sym = w.to_sym
		word_hash.key?(sym) ? word_hash[sym] += 1 : word_hash[sym] = 1
	end

	word.split('').each do |w|
		sym = w.to_sym
		if word_hash.key?(sym) && word_hash[sym] > 1 
			output += ')'
		else
			output += '('
		end
	end

	puts word_hash

	return output
end

puts duplicate_encode(word)
```

### Best solution
```ruby
word = "recede"

def duplicate_encode(word)
  word = word.downcase
  char_counts = Hash.new(0)  # Using default value 0 for new keys

  # Count occurrences of each character
  word.each_char { |char| char_counts[char] += 1 }

  # Generate the output based on character count
  word.each_char.map { |char| char_counts[char] > 1 ? ')' : '(' }.join
end

puts duplicate_encode(word)
```
### Alternative Solution
```ruby
def duplicate_encode(word)
  word
      .downcase
      .chars
      .map { |char| word.downcase.count(char) > 1 ? letter = ')' : letter = '(' }
      .join
end
```