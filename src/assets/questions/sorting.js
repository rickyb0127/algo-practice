export const sorting = [
  {
    "title": "Merge Sort",
    "functionName": "mergeSort",
    "args": ["array"],
    "difficulty": "Very Hard",
    "category": "Sorting",
    "text": `<p className="flex mb-2">
      Write a function that takes in an array of integers and returns a sorted
      version of that array. Use the Merge Sort algorithm to sort the array.
    </p>
    <p className="flex mb-2">
      If you're unfamiliar with Merge Sort, we recommend watching the Conceptual
      Overview section of this question's video explanation before starting to code.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [8, 5, 2, 9, 5, 6, 3]
        },
        "output": [2, 3, 5, 5, 6, 8, 9]
      },
      {
        "input": {
          "array": [1]
        },
        "output": [1]
      },
      {
        "input": {
          "array": [1, 2]
        },
        "output": [1, 2]
      },
      {
        "input": {
          "array": [2, 1]
        },
        "output": [1, 2]
      },
      {
        "input": {
          "array": [1, 3, 2]
        },
        "output": [1, 2, 3]
      },
      {
        "input": {
          "array": [3, 1, 2]
        },
        "output": [1, 2, 3]
      },
      {
        "input": {
          "array": [1, 2, 3]
        },
        "output": [1, 2, 3]
      },
      {
        "input": {
          "array": [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]
        },
        "output": [-10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1, 1, 3, 5, 5, 6, 8, 8, 10]
      },
      {
        "input": {
          "array": [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
        },
        "output": [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]
      },
      {
        "input": {
          "array": [8, -6, 7, 10, 8, -1, 6, 2, 4, -5, 1, 10, 8, -10, -9, -10, 8, 9, -2, 7, -2, 4]
        },
        "output": [-10, -10, -9, -6, -5, -2, -2, -1, 1, 2, 4, 4, 6, 7, 7, 8, 8, 8, 8, 9, 10, 10]
      },
      {
        "input": {
          "array": [5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1]
        },
        "output": [-10, -8, -6, -2, -2, -1, 1, 1, 2, 2, 3, 5, 9]
      },
      {
        "input": {
          "array": [2, -2, -6, -10, 10, 4, -8, -1, -8, -4, 7, -4, 0, 9, -9, 0, -9, -9, 8, 1, -4, 4, 8, 5, 1, 5, 0, 0, 2, -10]
        },
        "output": [-10, -10, -9, -9, -9, -8, -8, -6, -4, -4, -4, -2, -1, 0, 0, 0, 0, 1, 1, 2, 2, 4, 4, 5, 5, 7, 8, 8, 9, 10]
      }
    ]
  }
];