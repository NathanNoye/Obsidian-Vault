```table-of-contents
```

The bang operator (`!`) is used in method names to indicate that the method performs its action in a more "dangerous" or "unexpected" way compared to its non-bang counterpart. It's a naming convention rather than an operator that changes the method's functionality

**It mutates the caller. This means it mutates the previous function it's attached to**

### Example
```ruby
arr = [3, 1, 2]
arr.sort # => [1, 2, 3], arr remains unchanged
print arr
puts ''
arr.sort! # => [1, 2, 3], arr is now sorted in place
print arr
```

Notice how it modified the original value of the array.