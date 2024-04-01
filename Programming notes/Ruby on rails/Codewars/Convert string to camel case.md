Complete the method/function so that it converts dash/underscore delimited words into [camel casing](https://en.wikipedia.org/wiki/Camel_case). The first word within the output should be capitalized **only** if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

### Examples

`"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
`"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`
`"The_Stealth-Warrior"` gets converted to `"TheStealthWarrior"`

### My solution
```ruby
def to_camel_case(str)
	return '' if str.empty?
	output = ''
	words = str.split(/[_-]/).each_with_index do |word, index|
		output += index == 0 ? word : word.capitalize
	end

	return output 
end

puts to_camel_case('the-stealth-warrior')
```

### Optimized Solution
```ruby
def to_camel_case(str)
	str.gsub('_','-').split('-').each_with_index.map{ |x,i| i == 0 ? x : x.capitalize }.join
end

OR


def to_camel_case(str)
  str.gsub(/[_-](.)/) {"#{$1.upcase}"}
end

```

- `{"#{$1.upcase}"}` is the block that defines how each match of the regular expression is replaced.
- `#{$1}` refers to the first capture group in the regular expression, which in this case is the character immediately following an underscore or hyphen.
- `.upcase` is called on this captured character to convert it to uppercase.