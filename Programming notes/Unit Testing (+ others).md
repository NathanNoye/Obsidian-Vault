This doc covers unit testing plus some other kinds of tests
```table-of-contents
```

# Introduction to Unit Testing with Minitest

Minitest is a complete suite of testing facilities supporting TDD, BDD, mocking, and benchmarking. It's part of the Ruby standard library, so there's no need to install anything else to get started.
1. **Setup:** You don’t need to install anything extra as `minitest` comes with Ruby. Just require it in your test file.
2. **Example:** Let's assume we are testing a simple `Calculator` class. Here's how you might structure your test file:

```ruby
require 'minitest/autorun'

class Calculator
  def add(a, b)
    a + b
  end
end

class CalculatorTest < Minitest::Test
  def setup
    @calculator = Calculator.new
  end

  def test_addition
    assert_equal 5, @calculator.add(2, 3)
  end
end

```

# Types of unit tests
Unit tests can be categorized into different types based on the nature of the test and what it aims to verify or validate. Here are the common types of unit tests:

## 1. Positive Tests

Positive tests verify that the code works as expected under normal conditions. They are designed to confirm that the function or method performs its intended task correctly when given valid input.

**Example:** Testing a function that adds two numbers to ensure it correctly calculates the sum.

```ruby
require 'minitest/autorun'

class CalculatorTest < Minitest::Test
  def setup
    @calculator = Calculator.new
  end

	# Testing expected behaviour under normal conditions.
  def test_addition
    assert_equal 10, @calculator.add(5, 5), "Should return 10 for 5 + 5"
  end
end

```

## 2. Negative Tests

Negative tests ensure that the code handles error conditions gracefully. They are crucial for verifying the robustness of the application by testing how it behaves with invalid, unexpected, or boundary input. It generally tests the following:
1. The application does not crash or hang when faced with invalid inputs or states.
2. The application provides meaningful error messages or exceptions.
3. The application's state remains consistent and manageable after an error occurs.

**Example:** Testing a function by passing invalid inputs to ensure it throws the appropriate exceptions or errors.
```ruby
require 'minitest/autorun'

class CalculatorTest < Minitest::Test
  def setup
    @calculator = Calculator.new
  end

  # Test to assert the custom DivideByZero error is thrown
  # This error is created below
  def test_divide_by_zero_raises_custom_error
    assert_raises(DivideByZero) do
      @calculator.divide(4, 0)
    end
  end
end

# Define the custom DivideByZero error class
class DivideByZero < StandardError
end

class Calculator
  def divide(a, b)
    raise DivideByZero if b == 0
    a / b
  end
end



```

## 3. Boundary Tests

Boundary tests (a subset of edge case tests) specifically focus on the limits of the input range. They verify that the code can handle boundary conditions without errors.

**Example:** Testing the maximum and minimum acceptable inputs for a function to ensure it handles them correctly.
```ruby
class CalculatorTest < Minitest::Test
  def setup
    @calculator = Calculator.new
  end

	# Testing the limits of the input range.
  def test_addition_with_maximum_integers
    max_int = (2**31) - 1
    assert_equal max_int * 2, @calculator.add(max_int, max_int)
  end
end

```

## 4. Edge Case Tests

Edge case tests examine scenarios that are outside of normal operating parameters, which might not be immediately obvious. They help identify less common paths in the code.

**Example:** Testing how a function behaves with a zero, negative, or extremely large number, even if these values are not the typical input.
```ruby
class CalculatorTest < Minitest::Test
  def setup
    @calculator = Calculator.new
  end

	# Testing scenarios that are at the extreme ends of the input spectrum or outside normal operation.
  def test_addition_with_zero
    assert_equal 5, @calculator.add(5, 0), "Adding zero should return the other number"
  end
end

```

## 5. Performance Tests

Performance tests, in the context of unit testing, focus on the efficiency of individual functions or methods, ensuring they run within acceptable time and resource constraints.

**Example:** Testing a function to ensure it completes its task within a certain time frame, especially under heavy load.
```ruby
class CalculatorTest < Minitest::Test
  def setup
    @calculator = Calculator.new
  end

	# Testing the function's performance to ensure it runs within acceptable time or resource constraints.
  def test_addition_performance
    assert_performance_constant do
      1000.times { @calculator.add(rand(1000), rand(1000)) }
    end
  end
end

```

## Honourable mention: Regression Tests

Regression tests are designed to ensure that new changes or updates in the code do not break existing functionality. They are typically automated and run after any change to verify that previously working features still operate as expected.

**Example:** Re-running previous tests after code modifications to ensure that the changes have not introduced new bugs.

### Conclusion

Understanding these different types of unit tests allows developers to create a comprehensive test suite that covers various aspects of the software’s functionality, ensuring the application is robust, reliable, and maintainable.


## Other types of tests

## 1. Integration Tests

Integration tests verify the interactions between different units or components to ensure they work together as expected. They are broader than unit tests but can be included in the unit testing process to catch issues between integrated components.

**Example:** Testing the interaction between two classes or modules that depend on each other.
```ruby
class CalculatorTest < Minitest::Test
  def setup
    @calculator = Calculator.new
    @memory = Memory.new
  end

  def test_addition_and_memory_store
    @calculator.add(5, 5)
    @memory.store(@calculator.result)
    assert_equal 10, @memory.retrieve
  end
end

```