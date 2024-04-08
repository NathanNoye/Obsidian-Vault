The marketing team is spending way too much time typing in hashtags.  
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (`#`).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return `false`.
- If the input or the result is an empty string it must return `false`.

## Examples

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

### My Solution
```ruby
word = " Hello there thanks for trying my Kata"
word = " "
# word = ""

def generateHashtag(str)
	return false if str.length == 0 || str.strip!.length == 0

	 return str.strip!.split(' ').unshift('#').each{|w| w.capitalize!}.join
end

puts generateHashtag(word)
```