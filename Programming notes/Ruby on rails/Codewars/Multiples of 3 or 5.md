If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 **below** the number passed in.

Additionally, if the number is negative, return 0.

**Note:** If the number is a multiple of **both** 3 and 5, only count it _once_.

```ruby
 # example, not optimized
  def sum_natural_numbers(upper_limit)
    valid_numbers = []
    
      (1...upper_limit).to_a.each do |num|
	      multiple_of_three = 3 * num
	      multiple_of_five = 5 * num

	      if multiple_of_three < upper_limit
	          valid_numbers.push(multiple_of_three)
          end
          
	      if multiple_of_five < upper_limit
	          valid_numbers.push(multiple_of_five)
          end
      end
      
	  # puts valid_numbers
    
    return valid_numbers.reject {|x| x < 0}.uniq.sum
  end

puts sum_natural_numbers(10) # should output 23
puts sum_natural_numbers(20) # should output 78
```

### Optimized Version
```ruby
def sum_natural_numbers(upper_limit)
  # Return 0 immediately if the upper limit is negative or zero
  return 0 if upper_limit <= 0

  # Initialize the sum variable to accumulate the sum of valid multiples
  sum = 0

  # Loop through numbers from 1 up to (but not including) the upper limit
  (1...upper_limit).each do |num|
    # Check if the current number is a multiple of 3 or 5
    if num % 3 == 0 || num % 5 == 0
      # Add the current number to the sum if it is a multiple of 3 or 5
      sum += num
    end
  end

  # Return the total sum of numbers that are multiples of 3 or 5
  return sum
end

# Test the method with example values
puts sum_natural_numbers(10) # should output 23
puts sum_natural_numbers(20) # should output 78


```

### Ultra optimized
```ruby
number = 10
puts (1...number).select {|i| i%3==0 || i%5==0}.sum
```