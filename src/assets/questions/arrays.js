export const arrays = [
  {
    "id": 1,
    "title": "Two Number Sum",
    "functionName": "twoNumberSum",
    "args": ["array", "targetSum"],
    "difficulty": "Easy",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty array of distinct integers and an
      integer representing a target sum. If any two numbers in the input array sum
      up to the target sum, the function should return them in an array, in any
      order. If no two numbers sum up to the target sum, the function should return
      an empty array.
    </p>
    <p className="flex mb-2">
      Note that the target sum has to be obtained by summing two different integers
      in the array; you can't add a single integer to itself in order to obtain the
      target sum.
    </p>
    <p className="flex mb-2">
      You can assume that there will be at most one pair of numbers summing up to
      the target sum.
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [3, 5, -4, 8, 11, 1, -1, 6],
          "targetSum": 10,
        },
        "output": [11, -1]
      },
      {
        "input": {
          "array": [4, 6],
          "targetSum": 10,
        },
        "output": [4, 6]
      },
      {
        "input": {
          "array": [4, 6, 1],
          "targetSum": 5,
        },
        "output": [4, 1]
      },
      {
        "input": {
          "array": [4, 6, 1, -3],
          "targetSum": 3,
        },
        "output": [6, -3]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9],
          "targetSum": 17,
        },
        "output": [0, 9]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
          "targetSum": 18,
        },
        "output": [3, 15]
      },
      {
        "input": {
          "array": [-7, -5, -3, -1, 0, 1, 3, 5, 7],
          "targetSum": -5,
        },
        "output": [-5, 0]
      },
      {
        "input": {
          "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
          "targetSum": 163,
        },
        "output": [210, -47]
      },
      {
        "input": {
          "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47],
          "targetSum": 164,
        },
        "output": []
      },
      {
        "input": {
          "array": [3, 5, -4, 8, 11, 1, -1, 6],
          "targetSum": 15,
        },
        "output": []
      },
      {
        "input": {
          "array": [14],
          "targetSum": 15,
        },
        "output": []
      },
      {
        "input": {
          "array": [15],
          "targetSum": 15,
        },
        "output": []
      }
    ]
  },
  {
    "id": 2,
    "title": "Validate Subsequence",
    "functionName": "validateSubsequence",
    "args": ["array", "sequence"],
    "difficulty": "Easy",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Given two non-empty arrays of integers, write a function that determines
      whether the second array is a subsequence of the first one.
    </p>
    <p className="flex mb-2">
      A subsequence of an array is a set of numbers that aren't necessarily adjacent
      in the array but that are in the same order as they appear in the array. For
      instance, the numbers [1, 3, 4] form a subsequence of the array
      [1, 2, 3, 4], and so do the numbers [2, 4]. Note
      that a single number in an array and the array itself are both valid
      subsequences of the array.
    </p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [1, 6, -1, 10]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [5, 1, 22, 25, 6, -1, 8, 10]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [5, 1, 22, 6, -1, 8, 10]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [22, 25, 6]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [1, 6, 10]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [5, 1, 22, 10]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [5, -1, 8, 10]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [25]
        },
        "output": true
      },
      {
        "input": {
          "array": [1, 1, 1, 1, 1],
          "sequence": [1, 1, 1]
        },
        "output": true
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12]
        },
        "output":false
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [4, 5, 1, 22, 25, 6, -1, 8, 10]
        },
        "output":false
      },
      {
        "input": {
          "array": [5, 1, 22, 25, 6, -1, 8, 10],
          "sequence": [5, 1, 22, 23, 6, -1, 8, 10]
        },
        "output":false
      }
    ]
  },
  {
    "id": 3,
    "title": "Sorted Square Array",
    "functionName": "sortedSquareArray",
    "args": ["array"],
    "difficulty": "Easy",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty array of integers that are sorted
      in ascending order and returns a new array of the same length with the squares
      of the original integers also sorted in ascending order.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [1, 2, 3, 5, 6, 8, 9]
        },
        "output": [1, 4, 9, 25, 36, 64, 81]
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
        "output": [1, 4]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5]
        },
        "output": [1, 4, 9, 16, 25]
      },
      {
        "input": {
          "array": [0]
        },
        "output": [0]
      },
      {
        "input": {
          "array": [10]
        },
        "output": [100]
      },
      {
        "input": {
          "array": [-1]
        },
        "output": [1]
      },
      {
        "input": {
          "array": [-2, -1]
        },
        "output": [1, 4]
      },
      {
        "input": {
          "array": [-5, -4, -3, -2, -1]
        },
        "output": [1, 4, 9, 16, 25]
      },
      {
        "input": {
          "array": [-10]
        },
        "output": [100]
      },
      {
        "input": {
          "array": [-10, -5, 0, 5, 10]
        },
        "output": [0, 25, 25, 100, 100]
      },
      {
        "input": {
          "array": [-7, -3, 1, 9, 22, 30]
        },
        "output": [1, 9, 49, 81, 484, 900]
      }
    ]
  },
  {
    "id": 4,
    "title": "Tournament Winner",
    "functionName": "tournamentWinner",
    "args": ["competitions", "results"],
    "difficulty": "Easy",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      There's an algorithms tournament taking place in which teams of programmers
      compete against each other to solve algorithmic problems as fast as possible.
      Teams compete in a round robin, where each team faces off against all other
      teams. Only two teams compete against each other at a time, and for each
      competition, one team is designated the home team, while the other team is the
      away team. In each competition there's always one winner and one loser; there
      are no ties. A team receives 3 points if it wins and 0 points if it loses. The
      winner of the tournament is the team that receives the most amount of points.
    </p>
    <p className="flex mb-2">
      Given an array of pairs representing the teams that have competed against each
      other and an array containing the results of each competition, write a
      function that returns the winner of the tournament. The input arrays are named
      competitions and results, respectively. The
      competitions array has elements in the form of
      [homeTeam, awayTeam], where each team is a string of at most 30
      characters representing the name of the team. The results array
      contains information about the winner of each corresponding competition in the
      competitions array. Specifically, results[i] denotes
      the winner of competitions[i], where a 1 in the
      results array means that the home team in the corresponding
      competition won and a 0 means that the away team won.
    </p>
    <p className="flex mb-2">
      It's guaranteed that exactly one team will win the tournament and that each
      team will compete against all other teams exactly once. It's also guaranteed
      that the tournament will always have at least two teams.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "competitions": [
            ["HTML", "C#"],
            ["C#", "Python"],
            ["Python", "HTML"]
          ],
          "results": [0, 0, 1]
        },
        "output": "Python"
      },
      {
        "input": {
          "competitions": [
            ["HTML", "Java"],
            ["Java", "Python"],
            ["Python", "HTML"]
          ],
          "results": [0, 1, 1]
        },
        "output": "Java"
      },
      {
        "input": {
          "competitions": [
            ["HTML", "Java"],
            ["Java", "Python"],
            ["Python", "HTML"],
            ["C#", "Python"],
            ["Java", "C#"],
            ["C#", "HTML"]
          ],
          "results": [0, 1, 1, 1, 0, 1]
        },
        "output": "C#"
      },
      {
        "input": {
          "competitions": [
            ["HTML", "Java"],
            ["Java", "Python"],
            ["Python", "HTML"],
            ["C#", "Python"],
            ["Java", "C#"],
            ["C#", "HTML"],
            ["SQL", "C#"],
            ["HTML", "SQL"],
            ["SQL", "Python"],
            ["SQL", "Java"]
          ],
          "results": [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
        },
        "output": "C#"
      },
      {
        "input": {
          "competitions": [
            ["Bulls", "Eagles"]
          ],
          "results": [1]
        },
        "output": "Bulls"
      },
      {
        "input": {
          "competitions": [
            ["Bulls", "Eagles"],
            ["Bulls", "Bears"],
            ["Bears", "Eagles"]
          ],
          "results": [0, 0, 0]
        },
        "output": "Eagles"
      },
      {
        "input": {
          "competitions": [
            ["Bulls", "Eagles"],
            ["Bulls", "Bears"],
            ["Bulls", "Monkeys"],
            ["Eagles", "Bears"],
            ["Eagles", "Monkeys"],
            ["Bears", "Monkeys"]
          ],
          "results": [1, 1, 1, 1, 1, 1]
        },
        "output": "Bulls"
      },
      {
        "input": {
          "competitions": [
            ["AlgoMasters", "FrontPage Freebirds"],
            ["Runtime Terror", "Static Startup"],
            ["WeC#", "Hypertext Assassins"],
            ["AlgoMasters", "WeC#"],
            ["Static Startup", "Hypertext Assassins"],
            ["Runtime Terror", "FrontPage Freebirds"],
            ["AlgoMasters", "Runtime Terror"],
            ["Hypertext Assassins", "FrontPage Freebirds"],
            ["Static Startup", "WeC#"],
            ["AlgoMasters", "Static Startup"],
            ["FrontPage Freebirds", "WeC#"],
            ["Hypertext Assassins", "Runtime Terror"],
            ["AlgoMasters", "Hypertext Assassins"],
            ["WeC#", "Runtime Terror"],
            ["FrontPage Freebirds", "Static Startup"]
          ],
          "results": [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
        },
        "output": "AlgoMasters"
      },
      {
        "input": {
          "competitions": [
            ["HTML", "Java"],
            ["Java", "Python"],
            ["Python", "HTML"],
            ["C#", "Python"],
            ["Java", "C#"],
            ["C#", "HTML"],
            ["SQL", "C#"],
            ["HTML", "SQL"],
            ["SQL", "Python"],
            ["SQL", "Java"]
          ],
          "results": [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
        },
        "output": "SQL"
      },
      {
        "input": {
          "competitions": [
            ["A", "B"]
          ],
          "results": [0]
        },
        "output": "B"
      }
    ]
  },
  {
    "id": 5,
    "title": "Three Number Sum",
    "functionName": "threeNumberSum",
    "args": ["array", "targetSum"],
    "difficulty": "Medium",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty array of distinct integers and an
      integer representing a target sum. The function should find all triplets in
      the array that sum up to the target sum and return a two-dimensional array of
      all these triplets. The numbers in each triplet should be ordered in ascending
      order, and the triplets themselves should be ordered in ascending order with
      respect to the numbers they hold.
    </p>
    <p className="flex mb-2">
      If no three numbers sum up to the target sum, the function should return an
      empty array.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [12, 3, 1, 2, -6, 5, -8, 6],
          "targetSum": 0
        },
        "output": [
          [-8, 2, 6],
          [-8, 3, 5],
          [-6, 1, 5]
        ]
      },
      {
        "input": {
          "array": [1, 2, 3],
          "targetSum": 6
        },
        "output": [
          [1, 2, 3]
        ]
      },
      {
        "input": {
          "array": [1, 2, 3],
          "targetSum": 7
        },
        "output": []
      },
      {
        "input": {
          "array": [8, 10, -2, 49, 14],
          "targetSum": 57
        },
        "output": [
          [-2, 10, 49]
        ]
      },
      {
        "input": {
          "array": [12, 3, 1, 2, -6, 5, 0, -8, -1],
          "targetSum": 0
        },
        "output": [
          [-8, 3, 5],
          [-6, 1, 5],
          [-1, 0, 1]
        ]
      },
      {
        "input": {
          "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6],
          "targetSum": 0
        },
        "output": [
          [-8, 2, 6],
          [-8, 3, 5],
          [-6, 0, 6],
          [-6, 1, 5],
          [-1, 0, 1]
        ]
      },
      {
        "input": {
          "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
          "targetSum": 0
        },
        "output": [
          [-8, 2, 6],
          [-8, 3, 5],
          [-6, 0, 6],
          [-6, 1, 5],
          [-5, -1, 6],
          [-5, 0, 5],
          [-5, 2, 3],
          [-1, 0, 1]
        ]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
          "targetSum": 18
        },
        "output": [
          [1, 2, 15],
          [1, 8, 9],
          [2, 7, 9],
          [3, 6, 9],
          [3, 7, 8],
          [4, 5, 9],
          [4, 6, 8],
          [5, 6, 7]
        ]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
          "targetSum": 32
        },
        "output": [
          [8, 9, 15]
        ]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
          "targetSum": 33
        },
        "output": []
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15],
          "targetSum": 5
        },
        "output": []
      }
    ]
  },
  {
    "id": 6,
    "title": "Smallest Difference",
    "functionName": "smallestDifference",
    "args": ["arrayOne", "arrayTwo"],
    "difficulty": "Medium",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Write a function that takes in two non-empty arrays of integers, finds the
      pair of numbers (one from each array) whose absolute difference is closest to
      zero, and returns an array containing these two numbers, with the number from
      the first array in the first position.
    </p>
    <p className="flex mb-2">
      Note that the absolute difference of two integers is the distance between
      them on the real number line. For example, the absolute difference of -5 and 5
      is 10, and the absolute difference of -5 and -4 is 1.
    </p>
    <p className="flex mb-2">
      You can assume that there will only be one pair of numbers with the smallest
      difference.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "arrayOne": [-1, 5, 10, 20, 28, 3],
          "arrayTwo": [26, 134, 135, 15, 17]
        },
        "output": [28, 26]
      },
      {
        "input": {
          "arrayOne": [-1, 5, 10, 20, 3],
          "arrayTwo": [26, 134, 135, 15, 17]
        },
        "output": [20, 17]
      },
      {
        "input": {
          "arrayOne": [10, 0, 20, 25],
          "arrayTwo": [1005, 1006, 1014, 1032, 1031]
        },
        "output": [25, 1005]
      },
      {
        "input": {
          "arrayOne": [10, 0, 20, 25, 2200],
          "arrayTwo": [1005, 1006, 1014, 1032, 1031]
        },
        "output": [25, 1005]
      },
      {
        "input": {
          "arrayOne": [10, 0, 20, 25, 2000],
          "arrayTwo": [1005, 1006, 1014, 1032, 1031]
        },
        "output": [2000, 1032]
      },
      {
        "input": {
          "arrayOne": [240, 124, 86, 111, 2, 84, 954, 27, 89],
          "arrayTwo": [1, 3, 954, 19, 8]
        },
        "output": [954, 954]
      },
      {
        "input": {
          "arrayOne": [0, 20],
          "arrayTwo": [21, -2]
        },
        "output": [20, 21]
      },
      {
        "input": {
          "arrayOne": [10, 1000],
          "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
        },
        "output": [1000, 1014]
      },
      {
        "input": {
          "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
          "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
        },
        "output": [-123, -124]
      },
      {
        "input": {
          "arrayOne": [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
          "arrayTwo": [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
        },
        "output": [530, 530]
      }
    ]
  },
  {
    "id": 7,
    "title": "Move Element To End",
    "functionName": "moveElementToEnd",
    "args": ["array", "toMove"],
    "difficulty": "Medium",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      You're given an array of integers and an integer. Write a function that moves
      all instances of that integer in the array to the end of the array and returns
      the array.
    </p>
    <p className="flex mb-2">
      The function should perform this in place (i.e., it should mutate the input
      array) and doesn't need to maintain the order of the other integers.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [2, 1, 2, 2, 2, 3, 4, 2],
          "toMove": 2
        },
        "output": [4, 1, 3, 2, 2, 2, 2, 2]
      },
      {
        "input": {
          "array": [],
          "toMove": 3
        },
        "output": []
      },
      {
        "input": {
          "array": [1, 2, 4, 5, 6],
          "toMove": 3
        },
        "output": [1, 2, 4, 5, 6]
      },
      {
        "input": {
          "array": [3, 3, 3, 3, 3],
          "toMove": 3
        },
        "output": [3, 3, 3, 3, 3]
      },
      {
        "input": {
          "array": [3, 1, 2, 4, 5],
          "toMove": 3
        },
        "output": [5, 1, 2, 4, 3]
      },
      {
        "input": {
          "array": [1, 2, 4, 5, 3],
          "toMove": 3
        },
        "output": [1, 2, 4, 5, 3]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5],
          "toMove": 3
        },
        "output": [1, 2, 5, 4, 3]
      },
      {
        "input": {
          "array": [2, 4, 2, 5, 6, 2, 2],
          "toMove": 2
        },
        "output": [6, 4, 5, 2, 2, 2, 2]
      },
      {
        "input": {
          "array": [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
          "toMove": 5
        },
        "output": [12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 6, 5, 5, 5, 5, 5, 5]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
          "toMove": 5
        },
        "output": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5]
      },
      {
        "input": {
          "array": [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12],
          "toMove": 5
        },
        "output": [12, 1, 2, 11, 10, 3, 4, 6, 7, 9, 8, 5, 5, 5, 5, 5, 5]
      }
    ]
  },
  {
    "id": 8,
    "title": "Monotonic Array",
    "functionName": "monotonicArray",
    "args": ["array"],
    "difficulty": "Medium",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Write a function that takes in an array of integers and returns a boolean
      representing whether the array is monotonic.
    </p>
    <p className="flex mb-2">
      An array is said to be monotonic if its elements, from left to right, are
      entirely non-increasing or entirely non-decreasing.
    </p>
    <p className="flex mb-2">
      Non-increasing elements aren't necessarily exclusively decreasing; they simply
      don't increase. Similarly, non-decreasing elements aren't necessarily
      exclusively increasing; they simply don't decrease.
    </p>
    <p className="flex mb-2">Note that empty arrays and arrays of one element are monotonic.</p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "array": [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
        },
        "output": true
      },
      {
        "input": {
          "array": []
        },
        "output": true
      },
      {
        "input": {
          "array": [1]
        },
        "output": true
      },
      {
        "input": {
          "array": [1, 2]
        },
        "output": true
      },
      {
        "input": {
          "array": [2, 1]
        },
        "output": true
      },
      {
        "input": {
          "array": [1, 5, 10, 1100, 1101, 1102, 9001]
        },
        "output": true
      },
      {
        "input": {
          "array": [-1, -5, -10, -1100, -1101, -1102, -9001]
        },
        "output": true
      },
      {
        "input": {
          "array": [-1, -5, -10, -1100, -900, -1101, -1102, -9001]
        },
        "output": false
      },
      {
        "input": {
          "array": [1, 2, 0]
        },
        "output": false
      },
      {
        "input": {
          "array": [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]
        },
        "output": false
      },
      {
        "input": {
          "array": [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]
        },
        "output": true
      },
      {
        "input": {
          "array": [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11]
        },
        "output": false
      }
    ]
  },
  {
    "id": 9,
    "title": "Longest Peak",
    "functionName": "longestPeask",
    "args": ["array"],
    "difficulty": "Medium",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Write a function that takes in an array of integers and returns the length of
      the longest peak in the array.
    </p>
    <p className="flex mb-2">
      A peak is defined as adjacent integers in the array that are strictly
      increasing until they reach a tip (the highest value in the peak), at which
      point they become strictly decreasing. At least three integers are required to
      form a peak.
    </p>
    <p className="flex mb-2">
      For example, the integers 1, 4, 10, 2 form a peak, but the
      integers 4, 0, 10 don't and neither do the integers
      1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
      form a peak because there aren't any strictly decreasing integers after the
      3.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "array": [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
        },
        "output": 6
      },
      {
        "input": {
          "array": []
        },
        "output": 0
      },
      {
        "input": {
          "array": [1, 3, 2]
        },
        "output": 3
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 1]
        },
        "output": 6
      },
      {
        "input": {
          "array": [5, 4, 3, 2, 1, 2, 1]
        },
        "output": 3
      },
      {
        "input": {
          "array": [5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10]
        },
        "output": 5
      },
      {
        "input": {
          "array": [5, 4, 3, 2, 1, 2, 10, 12]
        },
        "output": 0
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 10, 100, 1000]
        },
        "output": 0
      },
      {
        "input": {
          "array": [1, 2, 3, 3, 2, 1]
        },
        "output": 0
      },
      {
        "input": {
          "array": [1, 1, 3, 2, 1]
        },
        "output": 4
      },
      {
        "input": {
          "array": [1, 2, 3, 2, 1, 1]
        },
        "output": 5
      },
      {
        "input": {
          "array": [1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]
        },
        "output": 9
      }
    ]
  },
  {
    "id": 10,
    "title": "First Duplicate Value",
    "functionName": "firstDuplicateValue",
    "args": ["array"],
    "difficulty": "Medium",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Given an array of integers between 1 and n,
      inclusive, where n is the length of the array, write a function
      that returns the first integer that appears more than once (when the array is
      read from left to right).
    </p>
    <p className="flex mb-2">
      In other words, out of all the integers that might occur more than once in the
      input array, your function should return the one whose first duplicate value
      has the minimum index.
    </p>
    <p className="flex mb-2">
      If no integer appears more than once, your function should return -1.
    </p>
    <p className="flex mb-2">Note that you're allowed to mutate the input array.</p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "array": [2, 1, 5, 2, 3, 3, 4]
        },
        "output": 2
      },
      {
        "input": {
          "array": [2, 1, 5, 3, 3, 2, 4]
        },
        "output": 3
      },
      {
        "input": {
          "array": [1, 1, 2, 3, 3, 2, 2]
        },
        "output": 1
      },
      {
        "input": {
          "array": [3, 1, 3, 1, 1, 4, 4]
        },
        "output": 3
      },
      {
        "input": {
          "array": []
        },
        "output": -1
      },
      {
        "input": {
          "array": [1]
        },
        "output": -1
      },
      {
        "input": {
          "array": [1, 1]
        },
        "output": 1
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]
        },
        "output": 10
      },
      {
        "input": {
          "array": [2, 1, 1]
        },
        "output": 1
      },
      {
        "input": {
          "array": [2, 2, 2, 2, 2, 2, 2, 2, 2]
        },
        "output": 2
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        "output": -1
      },
      {
        "input": {
          "array": [7, 6, 5, 3, 6, 4, 3, 5, 2]
        },
        "output": 6
      }
    ]
  },
  {
    "id": 11,
    "title": "Four Number Sum",
    "functionName": "fourNumberSum",
    "args": ["array", "targetSum"],
    "difficulty": "Hard",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty array of distinct integers and an
      integer representing a target sum. The function should find all quadruplets in
      the array that sum up to the target sum and return a two-dimensional array of
      all these quadruplets in no particular order.
    </p>
    <p className="flex mb-2">
      If no four numbers sum up to the target sum, the function should return an
      empty array.
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [7, 6, 4, -1, 1, 2],
          "targetSum": 16
        },
        "output": [
          [7, 6, 4, -1],
          [7, 6, 1, 2]
        ]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, 6, 7],
          "targetSum": 10
        },
        "output": [
          [1, 2, 3, 4]
        ]
      },
      {
        "input": {
          "array": [5, -5, -2, 2, 3, -3],
          "targetSum": 0
        },
        "output": [
          [5, -5, -2, 2],
          [5, -5, 3, -3],
          [-2, 2, 3, -3]
        ]
      },
      {
        "input": {
          "array": [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          "targetSum": 4
        },
        "output": [
          [-2, -1, 1, 6],
          [-2, 1, 2, 3],
          [-2, -1, 2, 5],
          [-2, -1, 3, 4]
        ]
      },
      {
        "input": {
          "array": [-1, 22, 18, 4, 7, 11, 2, -5, -3],
          "targetSum": 30
        },
        "output": [
          [-1, 22, 7, 2],
          [22, 4, 7, -3],
          [-1, 18, 11, 2],
          [18, 4, 11, -3],
          [22, 11, 2, -5]
        ]
      },
      {
        "input": {
          "array": [-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5],
          "targetSum": 20
        },
        "output": [
          [-5, 2, 15, 8],
          [-3, 2, -7, 28],
          [-10, -3, 28, 5],
          [-10, 28, -6, 8],
          [-7, 28, -6, 5],
          [-5, 2, 12, 11],
          [-5, 12, 8, 5]
        ]
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5],
          "targetSum": 100
        },
        "output": []
      },
      {
        "input": {
          "array": [1, 2, 3, 4, 5, -5, 6, -6],
          "targetSum": 5
        },
        "output": [
          [2, 3, 5, -5],
          [1, 4, 5, -5],
          [2, 4, 5, -6],
          [1, 3, -5, 6],
          [2, 3, 6, -6],
          [1, 4, 6, -6]
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "Min Rewards",
    "functionName": "minRewards",
    "args": ["scores"],
    "difficulty": "Hard",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      Imagine that you're a teacher who's just graded the final exam in a class. You
      have a list of student scores on the final exam in a particular order (not
      necessarily sorted), and you want to reward your students. You decide to do so
      fairly by giving them arbitrary rewards following two rules:
    </p>
    <ol>
      <li>All students must receive at least one reward.</li>
      <li>
        Any given student must receive strictly more rewards than an adjacent
        student (a student immediately to the left or to the right) with a lower
        score and must receive strictly fewer rewards than an adjacent student with
        a higher score.
      </li>
    </ol>
    <p className="flex mb-2">
      Write a function that takes in a list of scores and returns the minimum number
      of rewards that you must give out to students to satisfy the two rules.
    </p>
    <p className="flex mb-2">
      You can assume that all students have different scores; in other words, the
      scores are all unique.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "scores": [8, 4, 2, 1, 3, 6, 7, 9, 5]
        },
        "output": 25
      },
      {
        "input": {
          "scores": [1]
        },
        "output": 1
      },
      {
        "input": {
          "scores": [5, 10]
        },
        "output": 3
      },
      {
        "input": {
          "scores": [10, 5]
        },
        "output": 3
      },
      {
        "input": {
          "scores": [4, 2, 1, 3]
        },
        "output": 8
      },
      {
        "input": {
          "scores": [0, 4, 2, 1, 3]
        },
        "output": 9
      },
      {
        "input": {
          "scores": [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0]
        },
        "output": 52
      },
      {
        "input": {
          "scores": [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
        },
        "output": 15
      },
      {
        "input": {
          "scores": [800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]
        },
        "output": 93
      }
    ]
  },
  {
    "id": 13,
    "title": "Apartment Hunting",
    "functionName": "apartmentHunting",
    "args": ["blocks", "reqs"],
    "difficulty": "Very Hard",
    "category": "Arrays",
    "text": `<p className="flex mb-2">
      You're looking to move into a new apartment on specific street, and you're
      given a list of contiguous blocks on that street where each block contains an
      apartment that you could move into.
    </p>
    <p className="flex mb-2">
      You also have a list of requirements: a list of buildings that are important
      to you. For instance, you might value having a school and a gym near your
      apartment. The list of blocks that you have contains information at every
      block about all of the buildings that are present and absent at the block in
      question. For instance, for every block, you might know whether a school, a
      pool, an office, and a gym are present.
    </p>
    <p className="flex mb-2">
      In order to optimize your life, you want to pick an apartment block such that
      you minimize the farthest distance you'd have to walk from your apartment to
      reach any of your required buildings.
    </p>
    <p className="flex mb-2">
      Write a function that takes in a list of contiguous blocks on a specific
      street and a list of your required buildings and that returns the location
      (the index) of the block that's most optimal for you.
    </p>
    <p className="flex mb-2">
      If there are multiple most optimal blocks, your function can return the index
      of any one of them.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "blocks": [
            {
              "gym": false,
              "school": true,
              "store": false
            },
            {
              "gym": true,
              "school": false,
              "store": false
            },
            {
              "gym": true,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "school": true,
              "store": true
            }
          ],
          "reqs": ["gym", "school", "store"]
        },
        "output": 3
      },
      {
        "input": {
          "blocks": [
            {
              "gym": false,
              "office": true,
              "school": true,
              "store": false
            },
            {
              "gym": true,
              "office": false,
              "school": false,
              "store": false
            },
            {
              "gym": true,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "school": true,
              "store": true
            }
          ],
          "reqs": ["gym", "office", "school", "store"]
        },
        "output": 2
      },
      {
        "input": {
          "blocks": [
            {
              "gym": false,
              "office": true,
              "school": true,
              "store": false
            },
            {
              "gym": true,
              "office": false,
              "school": false,
              "store": false
            },
            {
              "gym": true,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "school": true,
              "store": true
            }
          ],
          "reqs": ["gym", "office", "school", "store"]
        },
        "output": 2
      },
      {
        "input": {
          "blocks": [
            {
              "foo": true,
              "gym": false,
              "kappa": false,
              "office": true,
              "school": true,
              "store": false
            },
            {
              "foo": true,
              "gym": true,
              "kappa": false,
              "office": false,
              "school": false,
              "store": false
            },
            {
              "foo": true,
              "gym": true,
              "kappa": false,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "foo": true,
              "gym": false,
              "kappa": false,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "foo": true,
              "gym": true,
              "kappa": false,
              "office": false,
              "school": true,
              "store": false
            },
            {
              "foo": true,
              "gym": false,
              "kappa": false,
              "office": false,
              "school": true,
              "store": true
            }
          ],
          "reqs": ["gym", "school", "store"]
        },
        "output": 4
      },
      {
        "input": {
          "blocks": [
            {
              "gym": true,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "school": false,
              "store": true
            },
            {
              "gym": true,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "school": true,
              "store": false
            }
          ],
          "reqs": ["gym", "school", "store"]
        },
        "output": 2
      },
      {
        "input": {
          "blocks": [
            {
              "gym": true,
              "pool": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": false,
              "store": true
            },
            {
              "gym": true,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "pool": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "pool": true,
              "school": false,
              "store": false
            }
          ],
          "reqs": ["gym", "pool", "school", "store"]
        },
        "output": 7
      },
      {
        "input": {
          "blocks": [
            {
              "gym": true,
              "office": false,
              "pool": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "office": true,
              "pool": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": true,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "pool": false,
              "school": false,
              "store": true
            },
            {
              "gym": true,
              "office": true,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "pool": true,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "pool": false,
              "school": false,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "pool": false,
              "school": true,
              "store": false
            },
            {
              "gym": false,
              "office": false,
              "pool": true,
              "school": false,
              "store": false
            }
          ],
          "reqs": ["gym", "pool", "school", "store"]
        },
        "output": 4
      }
    ]
  }
];