You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer `N`. Write a method that takes the array as an argument and returns this "outlier" `N`.

## Examples

```
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
```

### My Solution
```ruby
def find_outlier(integers)
	return integers.take(3).count(&:even?) >= 2 ? integers.find(&:odd?) : integers.find(&:even?)
end

# Testing the method with the given examples
puts find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]) # Output should be 11
puts find_outlier([160, 3, 1719, 19, 11, 13, -21]) # Output should be 160

```

### Optimized Solution
```ruby
def find_outlier(integers)
	return integers.partition(&:odd?).find(&:one?).first
end

# Testing the method with the given examples
puts find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]) # Output should be 11
puts find_outlier([160, 3, 1719, 19, 11, 13, -21]) # Output should be 160
```