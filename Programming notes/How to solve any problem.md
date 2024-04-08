This is more of a framework to solving problems than a step-by-step guide. You can use this on single problems (like simple functionality) or as part of a larger system design.

The art of war says this:
> "He who cannot command a few cannot command many."

On the flip side, if you can command a few, you can command many. If you can break down a big problem into small problems, you can complete it. Command each line of the code to complete the larger task.

## In short,
1. Understand the problem.
2. Devise a plan.
3. Carry out the plan.
4. Look back.

```table-of-contents
```

## How to use this framework
- **Define the problem**
	- What is the end goal
	- Find / make example end results
- **Start planning**
	- What are the inputs
	- What is the output
	- What are the edge cases
	- What are the error cases
- **Implement**
	- Write out pseudo code steps
	- Write actual code
	- Once you write the code that satisfies all of "Start Planning" - optimize
	- Write tests
- **Important notes**
	- This guide doesn't explicitly cover everything so I'm adding a few lines here that are useful to keep in mind:
		- "Where does this data come from"
		- Are there different outputs based on the logic?
			- no outputs
			- 1 output
			- many outputs
		- Any design patterns we can leverage here?

### Code Example
#### Step 1 - Define the problem
We might get some basic requirements like this:
```ruby
# We need a way to display how many users like this post.
# Example: 
# "Peter Likes this" 
```

So with that, consult with stakeholders and subject matter experts in areas that you lack.

##### Start by asking **"What are the outputs?"**
- What happens if no one likes this?
	- Return an empty string
- What happens if multiple people like this?
	- Nate likes this
	- Nate and Michayla like this
	- Nate, Michayla, and Roger like this
	- Nate, Michayla, and 5 others like this
		- We'll need to offset the total number by 2 in this case so we don't accidentally add more fake likes to it
- (We already know what happens if one person likes this since it's been given to us)

##### Now that we know the outputs, we can derive our inputs.
1. We need a list of names to display
2. The list might be empty
3. The list could have infinite users.

##### Now we can formulate questions to the SME's
1. Could there be a time we don't get a list making it optional?
	1. Possibly, assume the BE returns an empty list.
2. Do we have plans to expand on this in the future? 
	1. EX: Linking to the user's accounts for who liked it
3. How many users could we expect realistically? (This is more-so to avoid pitfalls and inefficiencies.)
	1. We could expect over 10,000. 
	2. We can optimize it by taking the first 4 names and then returning a count of all the names associated with liking t. 

##### Pseudo code
Based on those answers, we can now start writing pseudo code
```ruby
# Write a function that formats a list of names into who likes this post.

# Inputs:
# List of names - String[]
# How many people "also like this" - Integer

def who_likes_this(names, additional_likes)
	# Short circuit if names is empty
	# Start formatting strings
	# return formatted string
end
```

##### Actual code
And now that we have the pseudo code, we can write the code
```ruby
# Write a function that formats a list of names into who likes this post.

# Inputs:
# List of names - String[]
# How many people "also like this" - Integer

def who_likes_this(names, additional_likes)
	# Short circuit if names is empty
	return "No one likes this" if names.empty?
	
	# Start formatting strings
	output = "%s likes this" if names.length == 1
	output = "%s and %s likes this" if names.length == 2
	output = "%s, %s and %s likes this" if names.length == 3
	output = "%s, %s and #{additional_likes - 2} others like this" if names.length > 3

	formatted_output = output % names
	
	# return formatted string
	return formatted_output
end
```

Done! Now you can write the tests and complete your function.

## Table for gathering info:
Be sure to copy and paste this so we don't lose this

| Question             | Answer |
| -------------------- | ------ |
| What's the end goal? |        |
| Example outputs      |        |
| What are the inputs  |        |
| What are the outputs |        |
| Any edge cases       |        |
| Error cases          |        |
