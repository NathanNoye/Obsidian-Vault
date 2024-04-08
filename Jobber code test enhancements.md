## Q1
1. **Error Handling**: Consider adding error handling, especially for operations that could lead to errors, such as division by zero.

## Q2
1. **Optimize Graph Building**: In the `build_graph` method, you iterate through each character in each triplet to build the graph. You could optimize this by reducing the number of times you check for the existence of an edge before adding it.
2. **Use Set for Edges**: To avoid adding duplicate edges and to improve the efficiency of the edge existence check, you could use a `Set` instead of an `Array` for storing the edges in the graph.
3. **Optimize Topological Sort**: The current `topological_sort` function uses recursion, which could lead to a stack overflow for very large graphs. While not always necessary, considering an iterative approach could improve performance and avoid potential stack overflow issues.