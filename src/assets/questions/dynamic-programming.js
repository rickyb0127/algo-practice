export const dynamicProgramming = [
  {
    "title": "Max Subset Sum No Adjacent",
    "functionName": "maxSubsetSumNoAdjacent",
    "args": ["array"],
    "difficulty": "Medium",
    "category": "Dynamic Programming",
    "text":`<p className="flex mb-2">
      Write a function that takes in an array of positive integers and returns the
      maximum sum of non-adjacent elements in the array.
    </p>
    <p className="flex mb-2">If the input array is empty, the function should return 0.</p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "array": [75, 105, 120, 75, 90, 135]
        },
        "output": 330
      },
      {
        "input": {
          "array": []
        },
        "output": 0
      },
      {
        "input": {
          "array": [1]
        },
        "output": 1
      },
      {
        "input": {
          "array": [1, 2]
        },
        "output": 2
      },
      {
        "input": {
          "array": [1, 2, 3]
        },
        "output": 4
      },
      {
        "input": {
          "array": [1, 15, 3]
        },
        "output": 15
      },
      {
        "input": {
          "array": [7, 10, 12, 7, 9, 14]
        },
        "output": 33
      },
      {
        "input": {
          "array": [4, 3, 5, 200, 5, 3]
        },
        "output": 207
      },
      {
        "input": {
          "array": [10, 5, 20, 25, 15, 5, 5, 15]
        },
        "output": 60
      },
      {
        "input": {
          "array": [10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15]
        },
        "output": 90
      },
      {
        "input": {
          "array": [125, 210, 250, 120, 150, 300]
        },
        "output": 675
      },
      {
        "input": {
          "array": [30, 25, 50, 55, 100]
        },
        "output": 180
      }
    ]
  },
  {
    "title": "Min Numer Of Jumps",
    "functionName": "minNumberOfJumps",
    "args": ["array"],
    "difficulty": "Hard",
    "category": "Dynamic Programming",
    "text":`<p className="flex mb-2">
      You're given a non-empty array of positive integers where each integer represents the
      maximum number of steps you can take forward in the array. For example, if the
      element at index 1 is 3, you can go from index
      1 to index 2, 3, or 4.
    </p>
    <p className="flex mb-2">
      Write a function that returns the minimum number of jumps needed to reach the
      final index.
    </p>
    <p className="flex mb-2">
      Note that jumping from index i to index i + x always
      constitutes one jump, no matter how large x is.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "array": [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
        },
        "output": 4
      },
      {
        "input": {
          "array": [1]
        },
        "output": 0
      },
      {
        "input": {
          "array": [1, 1]
        },
        "output": 1
      },
      {
        "input": {
          "array": [3, 1]
        },
        "output": 1
      },
      {
        "input": {
          "array": [1, 1, 1]
        },
        "output": 2
      },
      {
        "input": {
          "array": [2, 1, 1]
        },
        "output": 1
      },
      {
        "input": {
          "array": [2, 1, 2, 3, 1]
        },
        "output": 2
      },
      {
        "input": {
          "array": [2, 1, 2, 3, 1, 1, 1]
        },
        "output": 3
      },
      {
        "input": {
          "array": [2, 1, 2, 2, 1, 1, 1]
        },
        "output": 4
      },
      {
        "input": {
          "array": [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 6, 2, 1, 1, 1, 1]
        },
        "output": 5
      },
      {
        "input": {
          "array": [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1]
        },
        "output": 7
      },
      {
        "input": {
          "array": [3, 10, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1]
        },
        "output": 6
      }
    ]
  },
  {
    "title": "Longest String Chain",
    "functionName": "longestStringChain",
    "args": ["strings"],
    "difficulty": "Very Hard",
    "category": "Dynamic Programming",
    "text":`<p className="flex mb-2">
      Given a list of strings, write a function that returns the longest string
      chain that can be built from those strings.
    </p>
    <p className="flex mb-2">
      A string chain is defined as follows: let string A be a string in
      the initial array; if removing any single character from string
      A yields a new string B that's contained in the
      initial array of strings, then strings A and B form
      a string chain of length 2. Similarly, if removing any single character from
      string B yields a new string C that's contained in
      the initial array of strings, then strings A, B, and
      C form a string chain of length 3.
    </p>
    <p className="flex mb-2">
      The function should return the string chain in descending order (i.e., from
      the longest string to the shortest one). Note that string chains of length 1
      don't exist; if the list of strings doesn't contain any string chain formed by
      two or more strings, the function should return an empty array.
    </p>
    <p className="flex mb-2">
      You can assume that there will only be one longest string chain.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "strings": ["abde", "abc", "abd", "abcde", "ade", "ae", "1abde", "abcdef"]
        },
        "output": ["abcdef", "abcde", "abde", "ade", "ae"]
      },
      {
        "input": {
          "strings": ["abcdefg", "abcdef", "abcde", "abcd", "abc", "ab", "a"]
        },
        "output": ["abcdefg", "abcdef", "abcde", "abcd", "abc", "ab", "a"]
      },
      {
        "input": {
          "strings": ["abcdefg", "abdefg", "abdfg", "bdfg", "bfg", "bg", "g"]
        },
        "output": ["abcdefg", "abdefg", "abdfg", "bdfg", "bfg", "bg", "g"]
      },
      {
        "input": {
          "strings": ["abcdefg", "1234", "abdefg", "abdfg", "123", "12", "bg", "g", "12345", "12a345"]
        },
        "output": ["12a345", "12345", "1234", "123", "12"]
      },
      {
        "input": {
          "strings": ["abcdefg1", "1234c", "abdefg2", "abdfg", "123", "122", "bgg", "g", "1a2345", "12a345"]
        },
        "output": []
      },
      {
        "input": {
          "strings": ["lgoprt", "12345678", "algoxpert", "abcde", "123468", "lgoxprt", "abde", "lgopt", "1234678", "ade", "ae", "algoxprt", "a", "1abde", "lgpt", "123456789", "234678", "algoexpert"]
        },
        "output": ["algoexpert", "algoxpert", "algoxprt", "lgoxprt", "lgoprt", "lgopt", "lgpt"]
      },
      {
        "input": {
          "strings": ["12345678", "algoxpert", "123468", "abde", "lgopt", "1234678", "ade", "ae", "a", "1abde", "lgpt", "123456789", "234678", "algoexpert"]
        },
        "output": ["1abde", "abde", "ade", "ae", "a"]
      }
    ]
  }
];