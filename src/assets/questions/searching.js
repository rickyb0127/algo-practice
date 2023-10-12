export const searching = [
  {
    "title": "Find Three Largest Numbers",
    "functionName": "findThreeLargestNumbers",
    "args": ["array"],
    "difficulty": "Easy",
    "category": "Searching",
    "text":`<p className="flex mb-2">
      Write a function that takes in an array of at least three integers and,
      without sorting the input array, returns a sorted array of the three largest
      integers in the input array.
    </p>
    <p className="flex mb-2">
      The function should return duplicate integers if necessary; for example, it
      should return [10, 10, 12] for an input array of
      [10, 5, 9, 10, 12].
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
        },
        "output": [18, 141, 541]
      },
      {
        "input": {
          "array": [55, 7, 8]
        },
        "output": [7, 8, 55]
      },
      {
        "input": {
          "array": [55, 43, 11, 3, -3, 10]
        },
        "output": [11, 43, 55]
      },
      {
        "input": {
          "array": [7, 8, 3, 11, 43, 55]
        },
        "output": [11, 43, 55]
      },
      {
        "input": {
          "array": [55, 7, 8, 3, 43, 11]
        },
        "output": [11, 43, 55]
      },
      {
        "input": {
          "array": [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
        },
        "output": [7, 7, 7]
      },
      {
        "input": {
          "array": [7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7]
        },
        "output": [7, 7, 8]
      },
      {
        "input": {
          "array": [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]
        },
        "output": [-2, -1, 7]
      }
    ]
  },
  {
    "title": "Search In Sorted Matrix",
    "functionName": "searchInSortedMatrix",
    "args": ["matrix", "target"],
    "difficulty": "Medium",
    "category": "Searching",
    "text":`<p className="flex mb-2">  You're given a two-dimensional array (a matrix) of distinct integers and a
      target integer. Each row in the matrix is sorted, and each column is also sorted; the
      matrix doesn't necessarily have the same height and width.
    </p>
    <p className="flex mb-2">
      Write a function that returns an array of the row and column indices of the
      target integer if it's contained in the matrix, otherwise
      [-1, -1].
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 44
        },
        "output": [3, 3]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 1
        },
        "output": [0, 0]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 2
        },
        "output": [1, 0]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 4
        },
        "output": [0, 1]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 15
        },
        "output": [0, 4]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 12
        },
        "output": [0, 3]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 32
        },
        "output": [1, 4]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 99
        },
        "output": [4, 0]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 100
        },
        "output": [4, 1]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 40
        },
        "output": [3, 0]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 128
        },
        "output": [4, 4]
      },
      {
        "input": {
          "matrix": [
            [1, 4, 7, 12, 15, 1000],
            [2, 5, 19, 31, 32, 1001],
            [3, 8, 24, 33, 35, 1002],
            [40, 41, 42, 44, 45, 1003],
            [99, 100, 103, 106, 128, 1004]
          ],
          "target": 106
        },
        "output": [4, 3]
      }
    ]
  },
  {
    "title": "Search For Range",
    "functionName": "searchForRange",
    "args": ["array", "target"],
    "difficulty": "Hard",
    "category": "Searching",
    "text":`<p className="flex mb-2">
      Write a function that takes in a sorted array of integers as well as a target
      integer. The function should use a variation of the Binary Search algorithm to
      find a range of indices in between which the target number is contained in the
      array and should return this range in the form of an array.
    </p>
    <p className="flex mb-2">
      The first number in the output array should represent the first index at which
      the target number is located, while the second number should represent the
      last index at which the target number is located. The function should return
      [-1, -1] if the integer isn't contained in the array.
    </p>
    <p className="flex mb-2">
      If you're unfamiliar with Binary Search, we recommend watching the Conceptual
      Overview section of the Binary Search question's video explanation before
      starting to code.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73],
          "target": 45
        },
        "output": [4, 9]
      },
      {
        "input": {
          "array": [5, 7, 7, 8, 8, 10],
          "target": 5
        },
        "output": [0, 0]
      },
      {
        "input": {
          "array": [5, 7, 7, 8, 8, 10],
          "target": 7
        },
        "output": [1, 2]
      },
      {
        "input": {
          "array": [5, 7, 7, 8, 8, 10],
          "target": 8
        },
        "output": [3, 4]
      },
      {
        "input": {
          "array": [5, 7, 7, 8, 8, 10],
          "target": 10
        },
        "output": [5, 5]
      },
      {
        "input": {
          "array": [5, 7, 7, 8, 8, 10],
          "target": 9
        },
        "output": [-1, -1]
      },
      {
        "input": {
          "array": [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73],
          "target": 47
        },
        "output": [-1, -1]
      },
      {
        "input": {
          "array": [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73],
          "target": -1
        },
        "output": [-1, -1]
      },
      {
        "input": {
          "array": [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 45, 45, 45],
          "target": 45
        },
        "output": [4, 12]
      }
    ]
  }
];