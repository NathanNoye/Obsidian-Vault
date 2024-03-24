Variables in Ruby are dynamically typed, meaning you don’t have to declare the data type of the variable when you declare it. The type is automatically determined by the value assigned to the variable, and the type can change if you assign a different type of value to the variable later in the program.

**Table of Contents**
```table-of-contents
```
#### Local Variables
- Defined within a method or a block and have the smallest scope. They start with a lowercase letter or an underscore and are accessible only within the block or method where they are declared
- If a local variable is set outside of a block of code or class, it is "global" to that file. Outside files cannot access it.
```ruby
greeting = "Hello friend!"

def my_code_block() 
	localGreeting = "Hello!"
end

puts greeting
puts localGreeting
```
#### Global Variables
- Globals start with `$`. 
- Accessible from anywhere in the Ruby program. They are not recommended for frequent use as they can make debugging and maintaining code difficult due to their wide-reaching impact. For example, `$debug_mode = true` defines a global variable `debug_mode`.
```ruby
$debugMode = true

def myFunc
	$anotherGlobal = "hello"
end

puts $debugMode
puts $anotherGlobal # Won't print anything, variable is not set

myFunc()
puts $anotherGlobal # Accessible outside the block scope but needs to get set first
```

#### Instance Variables
- Belong to an instance of a class. 
- Prefixed with an `@` symbol and maintain their value across different method calls within the same object instance. For example, `@user_name = 'John'` defines an instance variable `user_name`.
```ruby
class Customer
	def initialize(id, name, addr)
      @cust_id = id
      @cust_name = name
      @cust_addr = addr
   end
   def display_details()
      puts "Customer id #@cust_id"
      puts "Customer name #@cust_name"
      puts "Customer address #@cust_addr"
   end
end

# Create Objects
cust1 = Customer.new("1", "John", "Wisdom Apartments, Ludhiya")
cust2 = Customer.new("2", "Poul", "New Empire road, Khandala")

# Call Methods
cust1.display_details()
cust2.display_details()
```

#### Constants
- Meant to store data that never changes. 
- Defined with all uppercase letters, constants can be accessed anywhere within the program. Unlike other variables, attempting to change a constant after it has been set will result in a warning. The script will still run but trigger a warning.
```ruby
PI = 3.14
puts PI

PI = "abc"
puts PI
```

#### Class Variables
- Denoted by `@@`, are used to store data that is shared among all instances of a class and the class itself.
```ruby
class Customer
   @@no_of_customers = 0
   
   def initialize(id, name, addr)
      @cust_id = id
      @cust_name = name
      @cust_addr = addr

	@@no_of_customers += 1
	puts "New customer initialized: #@cust_name | total: #@@no_of_customers"
   end
   def display_details()
      puts "Customer id #@cust_id"
      puts "Customer name #@cust_name"
      puts "Customer address #@cust_addr"
   end
end

# Create Objects
cust1 = Customer.new("1", "John", "Toronto, Ontario")
cust2 = Customer.new("2", "Paul", "Edmonton, Alberta")
```

#### Pseudo-Variables
- They are special variables that have the appearance of local variables but behave like constants. You cannot assign any value to these variables.
```ruby
self # The receiver object of the current method.
true # Value representing true.
false # Value representing false.
nil # Value representing undefined.
__FILE__ # The name of the current source file.
__LINE__ # The current line number in the source file.
```