You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

Note: For 4 or more names, the number in `"and 2 others"` simply increases.

### My Solution
```ruby
# names = ['Nate', 'Michayla']
# names = ['Nate']
names = ['Nate', 'Michayla', 'Sharon']
# names = ['Nate', 'Michayla', 'Sharon', 'Roger']
# names = []

def likes(names)
	return "No one likes this" if names.empty?
	
	output = "%s likes this" if names.length == 1
	output = "%s and %s likes this" if names.length == 2
	output = "%s, %s and %s likes this" if names.length == 3
	output = "%s, %s and #{names.length - 2} others like this" if names.length > 3

	formatted_output = output % names

	return formatted_output
end

puts likes(names)
```

### Optimized Solution
```ruby
# names = ['Nate', 'Michayla']
# names = ['Nate']
names = ['Nate', 'Michayla', 'Sharon']
# names = ['Nate', 'Michayla', 'Sharon', 'Roger']
# names = []

def likes(names)
  case names.size
  when 0 then "no one likes this"
  when 1 then "%s likes this"           % names
  when 2 then "%s and %s like this"     % names
  when 3 then "%s, %s and %s like this" % names
  else "%s, %s and %d others like this" % (names[0,2] + [names.size-2])
  end
end

puts likes(names)
```