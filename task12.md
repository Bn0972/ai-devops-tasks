def find_duplicates(list_of_items):
    duplicates = []
    for i in range(len(list_of_items)):
        for j in range(i+1, len(list_of_items)):
            if list_of_items[i] == list_of_items[j] and list_of_items[i] not in duplicates:
                duplicates.append(list_of_items[i])
    return duplicates





    Yes, this code can be optimized. The current version has a time complexity of O(n²) due to nested loops. Here are two more efficient solutions:

1. **Using a Set (Most Efficient)**:
```python
def find_duplicates(list_of_items):
    seen = set()
    duplicates = set()
    for item in list_of_items:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return list(duplicates)
```

2. **Using Counter from collections**:
```python
from collections import Counter

def find_duplicates(list_of_items):
    return [item for item, count in Counter(list_of_items).items() if count > 1]
```

Let's compare the approaches:

1. **Original Solution (O(n²))**:
   - Uses nested loops
   - Checks each pair of elements
   - Time complexity: O(n²)
   - Space complexity: O(n)

2. **Set Solution (O(n))**:
   - Uses a single loop
   - Uses sets for O(1) lookups
   - Time complexity: O(n)
   - Space complexity: O(n)
   - More readable and maintainable

3. **Counter Solution (O(n))**:
   - Uses Python's built-in Counter
   - Very concise
   - Time complexity: O(n)
   - Space complexity: O(n)
   - Most Pythonic solution

Example usage:
```python
# Test cases
test_list = [1, 2, 3, 2, 4, 5, 4, 6, 7, 8, 7]

# Using Set solution
print(find_duplicates(test_list))  # Output: [2, 4, 7]

# Using Counter solution
print(find_duplicates(test_list))  # Output: [2, 4, 7]
```

Benefits of the optimized solutions:
1. Better time complexity (O(n) vs O(n²))
2. More readable and maintainable
3. Less code
4. Uses Python's built-in data structures
5. More efficient memory usage

The Set solution is particularly good because:
- It's easy to understand
- It's efficient
- It maintains the order of first appearance
- It's memory efficient

The Counter solution is best when:
- You need to know the count of duplicates
- You want the most concise solution
- You're working with Python's standard library

Would you like me to explain any of these solutions in more detail or provide more examples?
