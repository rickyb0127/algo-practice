export const famousAlgorithms = [
  {
    "title": "Kadane's Algorithm",
    "functionName": "kadanesAlgorithm",
    "args": ["array"],
    "difficulty": "Medium",
    "category": "Famous Algorithms",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty array of integers and returns the
      maximum sum that can be obtained by summing up all of the integers in a
      non-empty subarray of the input array. A subarray must only contain adjacent
      numbers (numbers next to each other in the input array).
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "array": [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
        },
        "output":  19
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        "output":  55
      },
      {
        "input": {
          "array": [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
        },
        "output":  -1
      },
      {
        "input": {
          "array": [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]
        },
        "output":  -1
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10]
        },
        "output":  35
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10]
        },
        "output":  34
      },
      {
        "input": {
          "array": [1, 2, -4, 3, 5, -9, 8, 1, 2]
        },
        "output":  11
      },
      {
        "input": {
          "array": [3, 4, -6, 7, 8]
        },
        "output":  16
      },
      {
        "input": {
          "array": [3, 4, -6, 7, 8, -15, 100]
        },
        "output": 101
      },
      {
        "input": {
          "array": [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
        },
        "output":  23
      },
      {
        "input": {
          "array": [8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 6]
        },
        "output":  24
      }
    ]
  },
  {
    "title": "Dijkstra's Algorithm",
    "functionName": "dijkstrasAlgorithm",
    "args": ["start", "edges"],
    "difficulty": "Hard",
    "category": "Famous Algorithms",
    "text": `<p className="flex mb-2">
      You're given an integer start and a list edges of
      pairs of integers.
    </p>
    <p className="flex mb-2">
      The list is what's called an adjacency list, and it represents a graph. The
      number of vertices in the graph is equal to the length of edges,
      where each index i in edges contains vertex
      i's outbound edges, in no particular order. Each individual edge
      is represented by an pair of two numbers,
      [destination, distance], where the destination is a positive
      integer denoting the destination vertex and the distance is a positive integer
      representing the length of the edge (the distance from vertex
      i to vertex destination). Note that these edges are
      directed, meaning that you can only travel from a particular vertex to its
      destination—not the other way around (unless the destination vertex itself has
      an outbound edge to the original vertex).
    </p>
    <p className="flex mb-2">
      Write a function that computes the lengths of the shortest paths between
      start and all of the other vertices in the graph using Dijkstra's
      algorithm and returns them in an array. Each index i in the
      output array should represent the length of the shortest path between
      start and vertex i. If no path is found from
      start to vertex i, then
      output[i] should be -1.
    </p>
    <p className="flex mb-2">
      Note that the graph represented by edges won't contain any
      self-loops (vertices that have an outbound edge to themselves) and will only
      have positively weighted edges (i.e., no negative distances).
    </p>
    <p className="flex mb-2">
      If you're unfamiliar with Dijkstra's algorithm, we recommend watching the
      Conceptual Overview section of this question's video explanation before
      starting to code.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "start": 0,
          "edges": [
            [
              [1, 7]
            ],
            [
              [2, 6],
              [3, 20],
              [4, 3]
            ],
            [
              [3, 14]
            ],
            [
              [4, 2]
            ],
            [],
            []
          ]
        },
        "output": [0, 7, 13, 27, 10, -1]
      },
      {
        "input": {
          "start": 1,
          "edges": [
            [],
            [],
            [],
            []
          ]
        },
        "output": [-1, 0, -1, -1]
      },
      {
        "input": {
          "start": 7,
          "edges": [
            [
              [1, 1],
              [3, 1]
            ],
            [
              [2, 1]
            ],
            [
              [6, 1]
            ],
            [
              [1, 3],
              [2, 4],
              [4, 2],
              [5, 3],
              [6, 5]
            ],
            [
              [5, 1]
            ],
            [
              [4, 1]
            ],
            [
              [5, 2]
            ],
            [
              [0, 7]
            ]
          ]
        },
        "output": [7, 8, 9, 8, 10, 11, 10, 0]
      },
      {
        "input": {
          "start": 4,
          "edges": [
            [
              [1, 3],
              [2, 2]
            ],
            [
              [3, 7]
            ],
            [
              [1, 2],
              [3, 4],
              [4, 1]
            ],
            [],
            [
              [0, 2],
              [1, 8],
              [3, 1]
            ]
          ]
        },
        "output": [2, 5, 4, 1, 0]
      },
      {
        "input": {
          "start": 1,
          "edges": [
            [
              [1, 2]
            ],
            [
              [0, 1]
            ],
            [
              [3, 1]
            ],
            [
              [2, 2]
            ]
          ]
        },
        "output": [1, 0, -1, -1]
      },
      {
        "input": {
          "start": 0,
          "edges": [
            [
              [1, 1],
              [7, 8]
            ],
            [
              [2, 1]
            ],
            [
              [3, 1]
            ],
            [
              [4, 1]
            ],
            [
              [5, 1]
            ],
            [
              [6, 1]
            ],
            [
              [7, 1]
            ],
            []
          ]
        },
        "output": [0, 1, 2, 3, 4, 5, 6, 7]
      },
      {
        "input": {
          "start": 3,
          "edges": [
            [
              [1, 2],
              [3, 3],
              [4, 2]
            ],
            [
              [0, 1],
              [6, 3]
            ],
            [
              [3, 9]
            ],
            [
              [0, 3],
              [1, 4],
              [4, 4],
              [8, 7]
            ],
            [
              [0, 1],
              [10, 3]
            ],
            [
              [7, 1],
              [8, 4]
            ],
            [
              [8, 1]
            ],
            [],
            [
              [7, 1]
            ],
            [
              [10, 2]
            ],
            []
          ]
        },
        "output": [3, 4, -1, 0, 4, -1, 7, 8, 7, -1, 7]
      },
      {
        "input": {
          "start": 8,
          "edges": [
            [
              [1, 4],
              [7, 11]
            ],
            [
              [0, 4],
              [2, 11],
              [7, 14]
            ],
            [
              [1, 11],
              [3, 10],
              [5, 7],
              [8, 5]
            ],
            [
              [2, 10],
              [4, 12],
              [5, 17]
            ],
            [
              [3, 12],
              [5, 13],
              [6, 3]
            ],
            [
              [2, 7],
              [3, 17],
              [4, 13],
              [6, 5]
            ],
            [
              [4, 3],
              [5, 6],
              [7, 4],
              [9, 8]
            ],
            [
              [0, 11],
              [1, 14],
              [6, 4],
              [8, 10]
            ],
            [
              [2, 5],
              [6, 9],
              [7, 10]
            ],
            []
          ]
        },
        "output": [20, 16, 5, 15, 12, 12, 9, 10, 0, 17]
      },
      {
        "input": {
          "start": 3,
          "edges": [
            [
              [2, 4]
            ],
            [
              [0, 2]
            ],
            [
              [1, 1],
              [3, 2]
            ],
            [
              [0, 3]
            ]
          ]
        },
        "output":[3, 8, 7, 0]
      }
    ]
  },
  {
    "title": "Knuth-Morris-Pratt Algorithm",
    "functionName": "knuthMorrisPrattAlgorithm",
    "args": ["srtring", "substring"],
    "difficulty": "Very Hard",
    "category": "Famous Algorithms",
    "text": `<p className="flex mb-2">
      Write a function that takes in two strings and checks if the first string
      contains the second one using the Knuth—Morris—Pratt algorithm. The function
      should return a boolean.
    </p>
    <p className="flex mb-2">
      If you're unfamiliar with the Knuth—Morris—Pratt Algorithm, we recommend
      watching the Conceptual Overview section of this question's video explanation
      before starting to code.
    </p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "string": "aefoaefcdaefcdaed",
          "substring": "aefcdaed"
        },
        "output": true
      },
      {
        "input": {
          "string": "testwafwafawfawfawfawfawfawfawfa",
          "substring": "fawfawfawfawfa"
        },
        "output": true
      },
      {
        "input": {
          "string": "tesseatesgawatewtesaffawgfawtteafawtesftawfawfawfwfawftest",
          "substring": "test"
        },
        "output": true
      },
      {
        "input": {
          "string": "aaabaabacdedfaabaabaaa",
          "substring": "aabaabaaa"
        },
        "output": true
      },
      {
        "input": {
          "string": "abxabcabcaby",
          "substring": "abcaby"
        },
        "output": true
      },
      {
        "input": {
          "string": "decadaafcdf",
          "substring": "daf"
        },
        "output": false
      },
      {
        "input": {
          "string": "aefoaefcdaefcdaed",
          "substring": "aefcaefaeiaefcd"
        },
        "output": false
      },
      {
        "input": {
          "string": "aefcdfaecdaefaefcdaefeaefcdcdeae",
          "substring": "aefcdaefeaefcd"
        },
        "output": true
      },
      {
        "input": {
          "string": "bccbefbcdabbbcabfdcfe",
          "substring": "abc"
        },
        "output": false
      },
      {
        "input": {
          "string": "adafccfefbbbfeeccbcfd",
          "substring": "ecb"
        },
        "output": false
      },
      {
        "input": {
          "string": "testwherethefullstringmatches",
          "substring": "testwherethefullstringmatches"
        },
        "output": true
      },
      {
        "input": {
          "string": "aabc",
          "substring": "abc"
        },
        "output": true
      }
    ]
  }
];