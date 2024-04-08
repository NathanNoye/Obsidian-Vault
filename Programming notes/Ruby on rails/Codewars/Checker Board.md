Given 4 inputs, write a program that will output a checkerboard pattern. 
We use the characters X and O to represent the black and white squares on the board.
The number of rows and columns are variable. 
The width and height of each row and column are measured in characters and are also variable. 

Example:

XXXOOOXXXOOOXXX
XXXOOOXXXOOOXXX
OOOXXXOOOXXXOOO
OOOXXXOOOXXXOOO
XXXOOOXXXOOOXXX
XXXOOOXXXOOOXXX
OOOXXXOOOXXXOOO
OOOXXXOOOXXXOOO

The inputs for the above output:

columns = 5

rows = 4

column_width = 3

row_height = 2

column_width indicates how many characters are in each column. 
row_height indicates how many lines of characters are in each row.
columns tells us how many times to alternate between groups of Xs and Os in a line.
rows tells us how many lines to print before switching the starting character.


### My (psuedo) Solution
```ruby
# 1. Have a loop that prints a marker
# 2. Check if the marker has hit the column_width
# 3. if it did - move on to the next marker (flip the boolean)
# 4. If it hit the end of the column, move to the next row
# 5. If the next row is modulus of 2, use the previous marker, if not, change to the next
# 6. If we're at the limit for the rows, end the function. Otherwise, continue until it completes.


# Top to bottom
let flip_y = true;
for (let j = 0; j < row; j++) {
  # Left to right
  let flip_x = flip_y;
  
  for (let i = 0; i < column; i++) {      
      console.log(flip_x ? 'x' : 'o' * column_width)
      flip_x = !flip_x;
  }
  
  if (j % row_height == 0) {
  	flip_y = !flip_y;
	}
}

```

### ChatGPT
```ruby
def generate_checkerboard(columns, rows, column_width, row_height)
  board = ''

  rows.times do |row|
    alternating = row.even?

    row_height.times do
      columns.times do |col|
        board << (alternating ? 'X' : 'O') * column_width
        alternating = !alternating
      end
      board << "\n"
    end
  end

  board
end

# Example usage:
columns = 5
rows = 4
column_width = 3
row_height = 2

puts generate_checkerboard(columns, rows, column_width, row_height)

```