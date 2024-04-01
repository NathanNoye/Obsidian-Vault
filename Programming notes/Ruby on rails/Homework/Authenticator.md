```ruby
users = [
	{username: "Nate", password: "test"},
	{username: "Michayla", password: "test1"},
	{username: "Roger", password: "test2"},
	{username: "Sharon", password: "test3"},
]

def auth_user (user_list, username, password) 
	user_list.each do |user|
		if user[:username] == username && user[:password] == password
			return true
		end
	end
	return false
end

puts "Welcome to sign in, input your name and password"
25.times {print "-"}
print "\n"

username = "Nate"
password = "test"

puts "You chose #{username} and #{password}"

valid_user = auth_user(users, username, password)

puts valid_user == true ? "Signed in!" : "Sign in failed"
```

## This solution is from the course
```ruby
# users array where username and password are stored
users = [
	{ username: "mashrur", password: "password1" },
	{ username: "jack", password: "password2" },
	{ username: "arya", password: "password3" },
	{ username: "jonshow", password: "password4" },
	{ username: "heisenberg", password: "password5" }
]

# authentication method to check and verify if username/password combination exists
def auth_user(username, password, list_of_users)
	list_of_users.each do |user_record|
		 if user_record[:username] == username && user_record[:password] == password
			return user_record
		end
	end
	"Credentials were not correct"
end

# program execution flow
puts "Welcome to the authenticator"
25.times { print "-" }
puts
puts "This program will take input from the user and compare password"
puts "If password is correct, you will get back the user object"

# Program execution - handling input
attempts = 1
while attempts < 4
	print "Username: "
	username = gets.chomp
	print "Password: "
	password = gets.chomp
	authentication = auth_user(username, password, users)
	puts authentication
	puts "Press n to quit or any other key to continue: "
	input = gets.chomp.downcase
	break if input == "n"
	attempts += 1
end
puts "You have exceeded the number of attempts" if attempts == 4
```