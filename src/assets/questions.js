import { ComparisonType } from './enums';

export const questions = [
  {
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
  },
  {
    "title": "Find Closest Value in BST",
    "functionName": "findClosestValueInBst",
    "args": ["tree", "target"],
    "difficulty": "Easy",
    "category": "Binary Search Trees",
    "text": `<p className="flex mb-2">
      Write a function that takes in a Binary Search Tree (BST) and a target integer
      value and returns the closest value to that target value contained in the BST.
    </p>
    <p className="flex mb-2">You can assume that there will only be one closest value.</p>
    <p className="flex mb-2">
      Each BST node has an integer value, a
      left child node, and a right child node. A node is
      said to be a valid BST node if and only if it satisfies the BST
      property: its value is strictly greater than the values of every
      node to its left; its value is less than or equal to the values
      of every node to its right; and its children nodes are either valid
      BST nodes themselves or None / null.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "10", "left": "5", "right": "15", "value": 10},
              {"id": "15", "left": "13", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": null, "value": 22},
              {"id": "13", "left": null, "right": "14", "value": 13},
              {"id": "14", "left": null, "right": null, "value": 14},
              {"id": "5", "left": "2", "right": "5-2", "value": 5},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": null, "value": 2},
              {"id": "1", "left": null, "right": null, "value": 1}
            ],
            "root": "10"
          },
          "target": 12
        },
        "output": 13
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 100
        },
        "output": 100
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 208
        },
        "output": 208
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 4500
        },
        "output": 4500
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 4501
        },
        "output": 4500
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": -70
        },
        "output": -51
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 2000
        },
        "output": 1001
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 6
        },
        "output": 5
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 30000
        },
        "output": 55000
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": -1
        },
        "output": 1
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 29751
        },
        "output": 55000
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          },
          "target": 29749
        },
        "output": 4500
      }
    ]
  },
  {
    "title": "BST Traversal",
    "functionName": "bstTraveral",
    "args": ["tree"],
    "difficulty": "Medium",
    "category": "Binary Search Trees",
    "text": `<p className="flex mb-2">
      Write three functions that take in a Binary Search Tree (BST) and an empty
      array, traverse the BST, add its nodes' values to the input array, and return
      that array. The three functions should traverse the BST using the in-order,
      pre-order, and post-order tree-traversal techniques, respectively.
    </p>
    <p className="flex mb-2">
      If you're unfamiliar with tree-traversal techniques, we recommend watching the
      Conceptual Overview section of this question's video explanation before
      starting to code.
    </p>
    <p className="flex mb-2">
      Each BST node has an integer value, a
      left child node, and a right child node. A node is
      said to be a valid BST node if and only if it satisfies the BST
      property: its value is strictly greater than the values of every
      node to its left; its value is less than or equal to the values
      of every node to its right; and its children nodes are either valid
      BST nodes themselves or None / null.
    </p>`,
    "comparisonType": "OBJECT_MATCH",
    "testCases": [
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "10", "left": "5", "right": "15", "value": 10},
              {"id": "15", "left": null, "right": "22", "value": 15},
              {"id": "22", "left": null, "right": null, "value": 22},
              {"id": "5", "left": "2", "right": "5-2", "value": 5},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": null, "value": 2},
              {"id": "1", "left": null, "right": null, "value": 1}
            ],
            "root": "10"
          }
        },
        "output": {
          "inOrderArray": [1, 2, 5, 5, 10, 15, 22],
          "postOrderArray": [1, 2, 5, 5, 22, 15, 10],
          "preOrderArray": [10, 5, 2, 1, 5, 15, 22]
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "100", "left": "5", "right": "502", "value": 100},
              {"id": "502", "left": "204", "right": "55000", "value": 502},
              {"id": "55000", "left": "1001", "right": null, "value": 55000},
              {"id": "1001", "left": null, "right": "4500", "value": 1001},
              {"id": "4500", "left": null, "right": null, "value": 4500},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "57", "value": 22},
              {"id": "57", "left": null, "right": "60", "value": 57},
              {"id": "60", "left": null, "right": null, "value": 60},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": "-51", "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "-51", "left": "-403", "right": null, "value": -51},
              {"id": "-403", "left": null, "right": null, "value": -403}
            ],
            "root": "100"
          }
        },
        "output": {
          "inOrderArray": [-403, -51, 1, 1, 1, 1, 1, 2, 3, 5, 5, 15, 22, 57, 60, 100, 203, 204, 205, 206, 207, 208, 502, 1001, 4500, 55000],
          "postOrderArray": [-403, -51, 1, 1, 1, 1, 1, 3, 2, 5, 60, 57, 22, 15, 5, 203, 206, 208, 207, 205, 204, 4500, 1001, 55000, 502, 100],
          "preOrderArray": [100, 5, 2, 1, -51, -403, 1, 1, 1, 1, 3, 15, 5, 22, 57, 60, 502, 204, 203, 205, 207, 206, 208, 55000, 1001, 4500]
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "10", "left": "5", "right": "15", "value": 10},
              {"id": "15", "left": null, "right": "22", "value": 15},
              {"id": "22", "left": null, "right": null, "value": 22},
              {"id": "5", "left": "2", "right": "5-2", "value": 5},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": null, "value": 2},
              {"id": "1", "left": "-5", "right": null, "value": 1},
              {"id": "-5", "left": "-15", "right": "-5-2", "value": -5},
              {"id": "-5-2", "left": null, "right": "-2", "value": -5},
              {"id": "-2", "left": null, "right": "-1", "value": -2},
              {"id": "-1", "left": null, "right": null, "value": -1},
              {"id": "-15", "left": "-22", "right": null, "value": -15},
              {"id": "-22", "left": null, "right": null, "value": -22}
            ],
            "root": "10"
          }
        },
        "output": {
          "inOrderArray": [-22, -15, -5, -5, -2, -1, 1, 2, 5, 5, 10, 15, 22],
          "postOrderArray": [-22, -15, -1, -2, -5, -5, 1, 2, 5, 5, 22, 15, 10],
          "preOrderArray": [10, 5, 2, 1, -5, -15, -22, -5, -2, -1, 5, 15, 22]
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "10", "left": null, "right": null, "value": 10}
            ],
            "root": "10"
          }
        },
        "output": {
          "inOrderArray": [10],
          "postOrderArray": [10],
          "preOrderArray": [10]
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "10", "left": "5", "right": "15", "value": 10},
              {"id": "15", "left": null, "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "500", "value": 22},
              {"id": "500", "left": "50", "right": "1500", "value": 500},
              {"id": "1500", "left": null, "right": "10000", "value": 1500},
              {"id": "10000", "left": "2200", "right": null, "value": 10000},
              {"id": "2200", "left": null, "right": null, "value": 2200},
              {"id": "50", "left": null, "right": "200", "value": 50},
              {"id": "200", "left": null, "right": null, "value": 200},
              {"id": "5", "left": "2", "right": "5-2", "value": 5},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": null, "value": 2},
              {"id": "1", "left": null, "right": null, "value": 1}
            ],
            "root": "10"
          }
        },
        "output": {
          "inOrderArray": [1, 2, 5, 5, 10, 15, 22, 50, 200, 500, 1500, 2200, 10000],
          "postOrderArray": [1, 2, 5, 5, 200, 50, 2200, 10000, 1500, 500, 22, 15, 10],
          "preOrderArray": [10, 5, 2, 1, 5, 15, 22, 500, 50, 200, 1500, 10000, 2200]
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "5000", "left": "5", "right": "55000", "value": 5000},
              {"id": "55000", "left": null, "right": null, "value": 55000},
              {"id": "5", "left": "2", "right": "15", "value": 5},
              {"id": "15", "left": "5-2", "right": "22", "value": 15},
              {"id": "22", "left": null, "right": "502", "value": 22},
              {"id": "502", "left": "204", "right": null, "value": 502},
              {"id": "204", "left": "203", "right": "205", "value": 204},
              {"id": "205", "left": null, "right": "207", "value": 205},
              {"id": "207", "left": "206", "right": "208", "value": 207},
              {"id": "208", "left": null, "right": null, "value": 208},
              {"id": "206", "left": null, "right": null, "value": 206},
              {"id": "203", "left": null, "right": null, "value": 203},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "2", "left": "1", "right": "3", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "1", "left": null, "right": "1-2", "value": 1},
              {"id": "1-2", "left": null, "right": "1-3", "value": 1},
              {"id": "1-3", "left": null, "right": "1-4", "value": 1},
              {"id": "1-4", "left": null, "right": "1-5", "value": 1},
              {"id": "1-5", "left": null, "right": null, "value": 1}
            ],
            "root": "5000"
          }
        },
        "output": {
          "inOrderArray": [1, 1, 1, 1, 1, 2, 3, 5, 5, 15, 22, 203, 204, 205, 206, 207, 208, 502, 5000, 55000],
          "postOrderArray": [1, 1, 1, 1, 1, 3, 2, 5, 203, 206, 208, 207, 205, 204, 502, 22, 15, 5, 55000, 5000],
          "preOrderArray": [5000, 5, 2, 1, 1, 1, 1, 1, 3, 15, 5, 22, 502, 204, 203, 205, 207, 206, 208, 55000]
        }
      }
    ]
  },
  {
    "title": "Same BST",
    "functionName": "sameBst",
    "args": ["arrayOne", "arrayTwo"],
    "difficulty": "Hard",
    "category": "Binary Search Trees",
    "text": `<p className="flex mb-2">
      An array of integers is said to represent the Binary Search Tree (BST)
      obtained by inserting each integer in the array, from left to right, into the
      BST.
    </p>
    <p className="flex mb-2">
      Write a function that takes in two arrays of integers and determines whether
      these arrays represent the same BST. Note that you're not allowed to
      construct any BSTs in your code.
    </p>
    <p className="flex mb-2">
      A BST is a Binary Tree that consists only of BST nodes. A node is said to be a
      valid BST node if and only if it satisfies the BST property: its value is
      strictly greater than the values of every node to its left; its value is less
      than or equal to the values of every node to its right; and its children nodes
      are either valid BST nodes themselves or None /
      null.
    </p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, 11],
          "arrayTwo": [10, 8, 5, 15, 2, 12, 11, 94, 81]
        },
        "output": true
      },
      {
        "input": {
          "arrayOne": [1, 2, 3, 4, 5, 6, 7],
          "arrayTwo": [1, 2, 3, 4, 5, 6, 7]
        },
        "output": true
      },
      {
        "input": {
          "arrayOne": [7, 6, 5, 4, 3, 2, 1],
          "arrayTwo": [7, 6, 5, 4, 3, 2, 1]
        },
        "output": true
      },
      {
        "input": {
          "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
          "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81]
        },
        "output": true
      },
      {
        "input": {
          "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2],
          "arrayTwo": [11, 8, 5, 15, 2, 12, 94, 81]
        },
        "output": false
      },
      {
        "input": {
          "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 8, -1, 8, 2, -34],
          "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]
        },
        "output": true
      },
      {
        "input": {
          "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 101, 45, 12, 8, -1, 8, 2, -34],
          "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 8, 12, 45, 100]
        },
        "output": false
      },
      {
        "input": {
          "arrayOne": [5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34],
          "arrayTwo": [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8]
        },
        "output": false
      },
      {
        "input": {
          "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, -1, 100, 45, 12, 9, -1, 8, 2, -34],
          "arrayTwo": [10, 8, 5, 15, 2, 12, 94, 81, -1, -1, -34, 8, 2, 9, 12, 45, 100]
        },
        "output": false
      },
      {
        "input": {
          "arrayOne": [1, 2, 3, 4, 5, 6, 7, 8],
          "arrayTwo": [1, 2, 3, 4, 5, 6, 7]
        },
        "output": false
      },
      {
        "input": {
          "arrayOne": [7, 6, 5, 4, 3, 2, 1],
          "arrayTwo": [7, 6, 5, 4, 3, 2, 1, 0]
        },
        "output": false
      },
      {
        "input": {
          "arrayOne": [10, 15, 8, 12, 94, 81, 5, 2, 10],
          "arrayTwo": [10, 8, 5, 15, 2, 10, 12, 94, 81]
        },
        "output": false
      }
    ]
  },
  {
    "title": "Right Smaller Than",
    "functionName": "rightSmallerThan",
    "args": ["array"],
    "difficulty": "Very Hard",
    "category": "Binary Search Trees",
    "text": `<p className="flex mb-2">
      Write a function that takes in an array of integers and returns an array of
      the same length, where each element in the output array corresponds to the
      number of integers in the input array that are to the right of the relevant
      index and that are strictly smaller than the integer at that index.
    </p>
    <p className="flex mb-2">
      In other words, the value at output[i] represents the number of
      integers that are to the right of i and that are strictly smaller
      than input[i].
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "array": [8, 5, 11, -1, 3, 4, 2]
        },
        "output": [5, 4, 4, 0, 1, 1, 0]
      },
      {
        "input": {
          "array": []
        },
        "output": []
      },
      {
        "input": {
          "array": [1]
        },
        "output": [0]
      },
      {
        "input": {
          "array": [0, 1, 1, 2, 3, 5, 8, 13]
        },
        "output": [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        "input": {
          "array": [13, 8, 5, 3, 2, 1, 1, 0]
        },
        "output": [7, 6, 5, 4, 3, 1, 1, 0]
      },
      {
        "input": {
          "array": [8, 5, 2, 9, 5, 6, 3]
        },
        "output": [5, 2, 0, 3, 1, 1, 0]
      },
      {
        "input": {
          "array": [991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80, -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331, -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354, 747, 805, 382, -827, -796, 372, 753, 519, 906]
        },
        "output": [50, 5, 1, 22, 24, 19, 28, 36, 6, 20, 9, 0, 33, 17, 11, 25, 28, 14, 1, 16, 28, 23, 19, 14, 5, 7, 17, 6, 5, 3, 4, 10, 4, 6, 5, 2, 14, 12, 3, 11, 2, 2, 5, 6, 3, 0, 0, 0, 1, 0, 0]
      },
      {
        "input": {
          "array": [384, -67, 120, 759, 697, 232, -7, -557, -772, -987, 687, 397, -763, -86, -491, 947, 921, 421, 825, -679, 946, -562, -626, -898, 204, 776, -343, 393, 51, -796, -425, 31, 165, 975, -720, 878, -785, -367, -609, 662, -79, -112, -313, -94, 187, 260, 43, 85, -746, 612, 67, -389, 508, 777, 624, 993, -581, 34, 444, -544, 243, -995, 432, -755, -978, 515, -68, -559, 489, 732, -19, -489, 737, 924]
        },
        "output": [47, 31, 39, 60, 57, 42, 32, 17, 6, 1, 51, 41, 5, 24, 15, 56, 53, 38, 50, 8, 51, 11, 8, 2, 30, 43, 15, 31, 24, 2, 11, 19, 23, 39, 5, 36, 2, 10, 4, 29, 12, 10, 9, 9, 15, 16, 12, 13, 3, 18, 11, 7, 14, 18, 15, 18, 3, 8, 10, 4, 7, 0, 6, 1, 0, 5, 2, 0, 2, 2, 1, 0, 0, 0]
      },
      {
        "input": {
          "array": [-823, 164, 48, -987, 323, 399, -293, 183, -908, -376, 14, 980, 965, 842, 422, 829, 59, 724, -415, -733, 356, -855, -155, 52, 328, -544, -371, -160, -942, -51, 700, -363, -353, -359, 238, 892, -730, -575, 892, 490, 490, 995, 572, 888, -935, 919, -191, 646, -120, 125, -817, 341, -575, 372, -874, 243, 610, -36, -685, -337, -13, 295, 800, -950, -949, -257, 631, -542, 201, -796, 157, 950, 540, -846, -265, 746, 355, -578, -441, -254, -941, -738, -469, -167, -420, -126, -410, 59]
        },
        "output": [10, 52, 46, 0, 55, 60, 31, 49, 5, 24, 41, 75, 74, 68, 55, 66, 42, 62, 22, 11, 50, 6, 32, 37, 44, 15, 20, 29, 2, 30, 49, 19, 20, 19, 33, 48, 9, 11, 46, 36, 36, 46, 37, 42, 3, 41, 20, 37, 22, 25, 5, 28, 9, 28, 3, 24, 27, 19, 6, 12, 17, 20, 24, 0, 0, 11, 19, 5, 15, 2, 13, 16, 14, 1, 7, 12, 11, 2, 3, 5, 0, 0, 0, 2, 0, 1, 0, 0]
      }
    ]
  },
  {
    "title": "Branch Sums",
    "functionName": "branchSums",
    "args": ["tree"],
    "difficulty": "Easy",
    "category": "Binary Trees",
    "text":`<p className="flex mb-2">
      Write a function that takes in a Binary Tree and returns a list of its branch
      sums ordered from leftmost branch sum to rightmost branch sum.
    </p>
    <p className="flex mb-2">
      A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
      branch is a path of nodes in a tree that starts at the root node and ends at
      any leaf node.
    </p>
    <p className="flex mb-2">
      Each BinaryTree node has an integer value, a
      left child node, and a right child node. Children
      nodes can either be BinaryTree nodes themselves or
      None / null.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "4", "left": "8", "right": "9", "value": 4},
              {"id": "5", "left": "10", "right": null, "value": 5},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "8", "left": null, "right": null, "value": 8},
              {"id": "9", "left": null, "right": null, "value": 9},
              {"id": "10", "left": null, "right": null, "value": 10}
            ],
            "root": "1"
          }
        },
        "output": [15, 16, 18, 10, 11]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": null, "right": null, "value": 1}
            ],
            "root": "1"
          }
        },
        "output": [1]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": null, "value": 1},
              {"id": "2", "left": null, "right": null, "value": 2}
            ],
            "root": "1"
          }
        },
        "output": [3]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3}
            ],
            "root": "1"
          }
        },
        "output": [3, 4]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "4", "left": null, "right": null, "value": 4},
              {"id": "5", "left": null, "right": null, "value": 5}
            ],
            "root": "1"
          }
        }
        [7, 8, 4]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "4", "left": "8", "right": "9", "value": 4},
              {"id": "5", "left": "10", "right": "1-2", "value": 5},
              {"id": "6", "left": "1-3", "right": "1-4", "value": 6},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "8", "left": null, "right": null, "value": 8},
              {"id": "9", "left": null, "right": null, "value": 9},
              {"id": "10", "left": null, "right": null, "value": 10},
              {"id": "1-2", "left": null, "right": null, "value": 1},
              {"id": "1-3", "left": null, "right": null, "value": 1},
              {"id": "1-4", "left": null, "right": null, "value": 1}
            ],
            "root": "1"
          }
        },
        "output": [15, 16, 18, 9, 11, 11, 11]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "0", "left": "1", "right": null, "value": 0},
              {"id": "1", "left": "10", "right": null, "value": 1},
              {"id": "10", "left": "100", "right": null, "value": 10},
              {"id": "100", "left": null, "right": null, "value": 100}
            ],
            "root": "0"
          }
        },
        "output": [111]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "0", "left": null, "right": "1", "value": 0},
              {"id": "1", "left": null, "right": "10", "value": 1},
              {"id": "10", "left": null, "right": "100", "value": 10},
              {"id": "100", "left": null, "right": null, "value": 100}
            ],
            "root": "0"
          }
        },
        "output": [111]
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "0", "left": "9", "right": "1", "value": 0},
              {"id": "9", "left": null, "right": null, "value": 9},
              {"id": "1", "left": "15", "right": "10", "value": 1},
              {"id": "15", "left": null, "right": null, "value": 15},
              {"id": "10", "left": "100", "right": "200", "value": 10},
              {"id": "100", "left": null, "right": null, "value": 100},
              {"id": "200", "left": null, "right": null, "value": 200}
            ],
            "root": "0"
          }
        },
        "output": [9, 16, 111, 211]
      }
    ]
  },
  {
    "title": "Invert Binary Tree",
    "functionName": "invertBinaryTree",
    "args": ["tree"],
    "difficulty": "Medium",
    "category": "Binary Trees",
    "text":`<p className="flex mb-2">
      Write a function that takes in a Binary Tree and inverts it. In other words,
      the function should swap every left node in the tree for its corresponding
      right node.
    </p>
    <p className="flex mb-2">
      Each BinaryTree node has an integer value, a
      left child node, and a right child node. Children
      nodes can either be BinaryTree nodes themselves or
      None / null.
    </p>`,
    "comparisonType": "OBJECT_MATCH",
    "testCases": [
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "4", "left": "8", "right": "9", "value": 4},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "8", "left": null, "right": null, "value": 8},
              {"id": "9", "left": null, "right": null, "value": 9}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": "5", "right": "4", "value": 2},
            {"id": "4", "left": "9", "right": "8", "value": 4},
            {"id": "8", "left": null, "right": null, "value": 8},
            {"id": "9", "left": null, "right": null, "value": 9},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "3", "left": "7", "right": "6", "value": 3},
            {"id": "6", "left": null, "right": null, "value": 6},
            {"id": "7", "left": null, "right": null, "value": 7}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": null, "right": null, "value": 1}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": null, "right": null, "value": 1}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": null, "value": 1},
              {"id": "2", "left": null, "right": null, "value": 2}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": null, "right": "2", "value": 1},
            {"id": "2", "left": null, "right": null, "value": 2}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": null, "right": null, "value": 2},
            {"id": "3", "left": null, "right": null, "value": 3}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": null, "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "4", "left": null, "right": null, "value": 4}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": null, "right": "4", "value": 2},
            {"id": "4", "left": null, "right": null, "value": 4},
            {"id": "3", "left": null, "right": null, "value": 3}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "4", "left": null, "right": null, "value": 4},
              {"id": "5", "left": null, "right": null, "value": 5}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": "5", "right": "4", "value": 2},
            {"id": "4", "left": null, "right": null, "value": 4},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "3", "left": null, "right": null, "value": 3}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": "6", "right": null, "value": 3},
              {"id": "4", "left": null, "right": null, "value": 4},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "6", "left": null, "right": null, "value": 6}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": "5", "right": "4", "value": 2},
            {"id": "4", "left": null, "right": null, "value": 4},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "3", "left": null, "right": "6", "value": 3},
            {"id": "6", "left": null, "right": null, "value": 6}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "4", "left": null, "right": null, "value": 4},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "7", "left": null, "right": null, "value": 7}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": "5", "right": "4", "value": 2},
            {"id": "4", "left": null, "right": null, "value": 4},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "3", "left": "7", "right": "6", "value": 3},
            {"id": "6", "left": null, "right": null, "value": 6},
            {"id": "7", "left": null, "right": null, "value": 7}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "4", "left": "8", "right": null, "value": 4},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "8", "left": null, "right": null, "value": 8}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": "5", "right": "4", "value": 2},
            {"id": "4", "left": null, "right": "8", "value": 4},
            {"id": "8", "left": null, "right": null, "value": 8},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "3", "left": "7", "right": "6", "value": 3},
            {"id": "6", "left": null, "right": null, "value": 6},
            {"id": "7", "left": null, "right": null, "value": 7}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "4", "left": "8", "right": "9", "value": 4},
              {"id": "5", "left": "10", "right": null, "value": 5},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "8", "left": null, "right": null, "value": 8},
              {"id": "9", "left": null, "right": null, "value": 9},
              {"id": "10", "left": null, "right": null, "value": 10}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": "3", "right": "2", "value": 1},
            {"id": "2", "left": "5", "right": "4", "value": 2},
            {"id": "4", "left": "9", "right": "8", "value": 4},
            {"id": "8", "left": null, "right": null, "value": 8},
            {"id": "9", "left": null, "right": null, "value": 9},
            {"id": "5", "left": null, "right": "10", "value": 5},
            {"id": "10", "left": null, "right": null, "value": 10},
            {"id": "3", "left": "7", "right": "6", "value": 3},
            {"id": "6", "left": null, "right": null, "value": 6},
            {"id": "7", "left": null, "right": null, "value": 7}
          ],
          "root": "1"
        }
      }
    ]
  },
  {
    "title": "Max Path Sum In Binary Tree",
    "functionName": "maxPathSumInBinaryTree",
    "args": ["tree"],
    "difficulty": "Hard",
    "category": "Binary Trees",
    "text":`<p className="flex mb-2">
      Write a function that takes in a Binary Tree and returns its max path sum.
    </p>
    <p className="flex mb-2">
      A path is a collection of connected nodes in a tree, where no node is
      connected to more than two other nodes; a path sum is the sum of the values of
      the nodes in a particular path.
    </p>
    <p className="flex mb-2">
      Each BinaryTree< node has an integer value, a
      left child node, and a right child node. Children
      nodes can either be BinaryTree nodes themselves or
      None / null.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "4", "left": null, "right": null, "value": 4}
            ],
            "root": "1"
          }
        },
        "output": 18
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "2", "left": null, "right": null, "value": 2}
            ],
            "root": "1"
          }
        },
        "output": 6
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "-1", "value": 1},
              {"id": "-1", "left": null, "right": null, "value": -1},
              {"id": "2", "left": null, "right": null, "value": 2}
            ],
            "root": "1"
          }
        },
        "output": 3
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-5", "right": "3", "value": 1},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "-5", "left": "6", "right": null, "value": -5},
              {"id": "6", "left": null, "right": null, "value": 6}
            ],
            "root": "1"
          }
        },
        "output": 6
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-10", "right": "-5", "value": 1},
              {"id": "-5", "left": "-20", "right": "-21", "value": -5},
              {"id": "-21", "left": "100-2", "right": "1-3", "value": -21},
              {"id": "1-3", "left": null, "right": null, "value": 1},
              {"id": "100-2", "left": null, "right": null, "value": 100},
              {"id": "-20", "left": "100", "right": "2", "value": -20},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "100", "left": null, "right": null, "value": 100},
              {"id": "-10", "left": "30", "right": "45", "value": -10},
              {"id": "45", "left": "3", "right": "-3", "value": 45},
              {"id": "-3", "left": null, "right": null, "value": -3},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "30", "left": "5", "right": "1-2", "value": 30},
              {"id": "1-2", "left": null, "right": null, "value": 1},
              {"id": "5", "left": null, "right": null, "value": 5}
            ],
            "root": "1"
          }
        },
        "output": 154
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-10", "right": "-5", "value": 1},
              {"id": "-5", "left": "-20", "right": "-21", "value": -5},
              {"id": "-21", "left": "100-3", "right": "1-3", "value": -21},
              {"id": "1-3", "left": null, "right": null, "value": 1},
              {"id": "100-3", "left": null, "right": null, "value": 100},
              {"id": "-20", "left": "100-2", "right": "2", "value": -20},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "100-2", "left": null, "right": null, "value": 100},
              {"id": "-10", "left": "30", "right": "45", "value": -10},
              {"id": "45", "left": "3", "right": "-3", "value": 45},
              {"id": "-3", "left": null, "right": null, "value": -3},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "30", "left": "5", "right": "1-2", "value": 30},
              {"id": "1-2", "left": null, "right": null, "value": 1},
              {"id": "5", "left": "100", "right": null, "value": 5},
              {"id": "100", "left": null, "right": null, "value": 100}
            ],
            "root": "1"
          }
        },
        "output": 201
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-10", "right": "-5", "value": 1},
              {"id": "-5", "left": "-20", "right": "-21", "value": -5},
              {"id": "-21", "left": "100-3", "right": "1-3", "value": -21},
              {"id": "1-3", "left": null, "right": null, "value": 1},
              {"id": "100-3", "left": null, "right": null, "value": 100},
              {"id": "-20", "left": "100-2", "right": "2", "value": -20},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "100-2", "left": null, "right": null, "value": 100},
              {"id": "-10", "left": "30", "right": "75", "value": -10},
              {"id": "75", "left": "3", "right": "-3", "value": 75},
              {"id": "-3", "left": null, "right": null, "value": -3},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "30", "left": "5", "right": "1-2", "value": 30},
              {"id": "1-2", "left": null, "right": null, "value": 1},
              {"id": "5", "left": "100", "right": null, "value": 5},
              {"id": "100", "left": null, "right": null, "value": 100}
            ],
            "root": "1"
          }
        },
        "output": 203
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-150", "right": "-5", "value": 1},
              {"id": "-5", "left": "-20", "right": "-21", "value": -5},
              {"id": "-21", "left": "100-4", "right": "1-3", "value": -21},
              {"id": "1-3", "left": null, "right": null, "value": 1},
              {"id": "100-4", "left": null, "right": null, "value": 100},
              {"id": "-20", "left": "100-3", "right": "2", "value": -20},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "100-3", "left": null, "right": null, "value": 100},
              {"id": "-150", "left": "30", "right": "75", "value": -150},
              {"id": "75", "left": "3", "right": "-3", "value": 75},
              {"id": "-3", "left": null, "right": null, "value": -3},
              {"id": "3", "left": "150", "right": "-8", "value": 3},
              {"id": "-8", "left": null, "right": null, "value": -8},
              {"id": "150", "left": null, "right": null, "value": 150},
              {"id": "30", "left": "5", "right": "1-2", "value": 30},
              {"id": "1-2", "left": "5-2", "right": "10", "value": 1},
              {"id": "10", "left": null, "right": null, "value": 10},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "5", "left": "100", "right": "100-2", "value": 5},
              {"id": "100-2", "left": null, "right": null, "value": 100},
              {"id": "100", "left": null, "right": null, "value": 100}
            ],
            "root": "1"
          }
        },
        "output": 228
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-150", "right": "-5", "value": 1},
              {"id": "-5", "left": "-20", "right": "-21", "value": -5},
              {"id": "-21", "left": "100-4", "right": "1-3", "value": -21},
              {"id": "1-3", "left": null, "right": null, "value": 1},
              {"id": "100-4", "left": null, "right": null, "value": 100},
              {"id": "-20", "left": "100-3", "right": "2", "value": -20},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "100-3", "left": null, "right": null, "value": 100},
              {"id": "-150", "left": "30", "right": "75", "value": -150},
              {"id": "75", "left": "3", "right": "-3", "value": 75},
              {"id": "-3", "left": null, "right": null, "value": -3},
              {"id": "3", "left": "150", "right": "151", "value": 3},
              {"id": "151", "left": null, "right": null, "value": 151},
              {"id": "150", "left": null, "right": null, "value": 150},
              {"id": "30", "left": "5", "right": "1-2", "value": 30},
              {"id": "1-2", "left": "5-2", "right": "10", "value": 1},
              {"id": "10", "left": null, "right": null, "value": 10},
              {"id": "5-2", "left": null, "right": null, "value": 5},
              {"id": "5", "left": "100", "right": "100-2", "value": 5},
              {"id": "100-2", "left": null, "right": null, "value": 100},
              {"id": "100", "left": null, "right": null, "value": 100}
            ],
            "root": "1"
          }
        },
        "output": 304
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-5", "right": "-3-2", "value": 1},
              {"id": "-3-2", "left": "2-2", "right": "1-7", "value": -3},
              {"id": "1-7", "left": "1-8", "right": "1-10", "value": 1},
              {"id": "1-10", "left": "-5-2", "right": "0-5", "value": 1},
              {"id": "0-5", "left": null, "right": null, "value": 0},
              {"id": "-5-2", "left": null, "right": null, "value": -5},
              {"id": "1-8", "left": "0-4", "right": "1-9", "value": 1},
              {"id": "1-9", "left": null, "right": null, "value": 1},
              {"id": "0-4", "left": null, "right": null, "value": 0},
              {"id": "2-2", "left": "0-3", "right": "5", "value": 2},
              {"id": "5", "left": "2-3", "right": "1-6", "value": 5},
              {"id": "1-6", "left": null, "right": null, "value": 1},
              {"id": "2-3", "left": null, "right": null, "value": 2},
              {"id": "0-3", "left": "-9", "right": "-91", "value": 0},
              {"id": "-91", "left": null, "right": null, "value": -91},
              {"id": "-9", "left": null, "right": null, "value": -9},
              {"id": "-5", "left": "0", "right": "2", "value": -5},
              {"id": "2", "left": "1-4", "right": "1-5", "value": 2},
              {"id": "1-5", "left": "-1-3", "right": "-100", "value": 1},
              {"id": "-100", "left": null, "right": null, "value": -100},
              {"id": "-1-3", "left": null, "right": null, "value": -1},
              {"id": "1-4", "left": "-1-2", "right": "-6", "value": 1},
              {"id": "-6", "left": null, "right": null, "value": -6},
              {"id": "-1-2", "left": null, "right": null, "value": -1},
              {"id": "0", "left": "-3", "right": "3", "value": 0},
              {"id": "3", "left": "1-3", "right": "-1", "value": 3},
              {"id": "-1", "left": null, "right": null, "value": -1},
              {"id": "1-3", "left": null, "right": null, "value": 1},
              {"id": "-3", "left": "0-2", "right": "1-2", "value": -3},
              {"id": "1-2", "left": null, "right": null, "value": 1},
              {"id": "0-2", "left": null, "right": null, "value": 0}
            ],
            "root": "1"
          }
        },
        "output": 9
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-5", "right": "-3-2", "value": 1},
              {"id": "-3-2", "left": "2-2", "right": "1-6", "value": -3},
              {"id": "1-6", "left": "1-7", "right": "1-9", "value": 1},
              {"id": "1-9", "left": "-5-2", "right": "0-5", "value": 1},
              {"id": "0-5", "left": null, "right": null, "value": 0},
              {"id": "-5-2", "left": null, "right": null, "value": -5},
              {"id": "1-7", "left": "0-4", "right": "1-8", "value": 1},
              {"id": "1-8", "left": null, "right": null, "value": 1},
              {"id": "0-4", "left": null, "right": null, "value": 0},
              {"id": "2-2", "left": "0-3", "right": "5", "value": 2},
              {"id": "5", "left": "2-3", "right": "1-5", "value": 5},
              {"id": "1-5", "left": null, "right": null, "value": 1},
              {"id": "2-3", "left": null, "right": null, "value": 2},
              {"id": "0-3", "left": "-9", "right": "-91", "value": 0},
              {"id": "-91", "left": null, "right": null, "value": -91},
              {"id": "-9", "left": null, "right": null, "value": -9},
              {"id": "-5", "left": "0", "right": "2", "value": -5},
              {"id": "2", "left": "1-3", "right": "1-4", "value": 2},
              {"id": "1-4", "left": "-1-3", "right": "-100", "value": 1},
              {"id": "-100", "left": null, "right": null, "value": -100},
              {"id": "-1-3", "left": null, "right": null, "value": -1},
              {"id": "1-3", "left": "-1-2", "right": "-6", "value": 1},
              {"id": "-6", "left": null, "right": null, "value": -6},
              {"id": "-1-2", "left": null, "right": null, "value": -1},
              {"id": "0", "left": "-3", "right": "-4", "value": 0},
              {"id": "-4", "left": "10", "right": "-1", "value": -4},
              {"id": "-1", "left": null, "right": null, "value": -1},
              {"id": "10", "left": null, "right": null, "value": 10},
              {"id": "-3", "left": "0-2", "right": "1-2", "value": -3},
              {"id": "1-2", "left": null, "right": null, "value": 1},
              {"id": "0-2", "left": null, "right": null, "value": 0}
            ],
            "root": "1"
          }
        },
        "output": 10
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "-5", "right": "-3-2", "value": 1},
              {"id": "-3-2", "left": "2-4", "right": "1-7", "value": -3},
              {"id": "1-7", "left": "1-8", "right": "1-10", "value": 1},
              {"id": "1-10", "left": "-5-3", "right": "0-5", "value": 1},
              {"id": "0-5", "left": null, "right": null, "value": 0},
              {"id": "-5-3", "left": null, "right": null, "value": -5},
              {"id": "1-8", "left": "0-4", "right": "1-9", "value": 1},
              {"id": "1-9", "left": null, "right": null, "value": 1},
              {"id": "0-4", "left": null, "right": null, "value": 0},
              {"id": "2-4", "left": "0-3", "right": "5", "value": 2},
              {"id": "5", "left": "2-5", "right": "1-6", "value": 5},
              {"id": "1-6", "left": null, "right": null, "value": 1},
              {"id": "2-5", "left": null, "right": null, "value": 2},
              {"id": "0-3", "left": "-9", "right": "-91", "value": 0},
              {"id": "-91", "left": null, "right": null, "value": -91},
              {"id": "-9", "left": null, "right": null, "value": -9},
              {"id": "-5", "left": "0", "right": "2-3", "value": -5},
              {"id": "2-3", "left": "1-4", "right": "1-5", "value": 2},
              {"id": "1-5", "left": "-1-3", "right": "-100", "value": 1},
              {"id": "-100", "left": null, "right": null, "value": -100},
              {"id": "-1-3", "left": null, "right": null, "value": -1},
              {"id": "1-4", "left": "-1-2", "right": "-6", "value": 1},
              {"id": "-6", "left": null, "right": null, "value": -6},
              {"id": "-1-2", "left": null, "right": null, "value": -1},
              {"id": "0", "left": "-3", "right": "-4", "value": 0},
              {"id": "-4", "left": "3-2", "right": "-1", "value": -4},
              {"id": "-1", "left": null, "right": null, "value": -1},
              {"id": "3-2", "left": "7", "right": "-5-2", "value": 3},
              {"id": "-5-2", "left": null, "right": null, "value": -5},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "-3", "left": "0-2", "right": "1-3", "value": -3},
              {"id": "1-3", "left": "2", "right": "2-2", "value": 1},
              {"id": "2-2", "left": null, "right": null, "value": 2},
              {"id": "2", "left": null, "right": null, "value": 2},
              {"id": "0-2", "left": "3", "right": "1-2", "value": 0},
              {"id": "1-2", "left": null, "right": null, "value": 1},
              {"id": "3", "left": null, "right": null, "value": 3}
            ],
            "root": "1"
          }
        },
        "output": 10
      }
    ]
  },
  {
    "title": "Flatten Binary Tree",
    "functionName": "flattenBinaryTree",
    "args": ["tree"],
    "difficulty": "Very Hard",
    "category": "Binary Trees",
    "text":`<p className="flex mb-2">
      Write a function that takes in a Binary Tree, flattens it, and returns its
      leftmost node.
    </p>
    <p className="flex mb-2">
      A flattened Binary Tree is a structure that's nearly identical to a Doubly
      Linked List (except that nodes have left and
      right pointers instead of prev and
      next pointers), where nodes follow the original tree's
      left-to-right order.
    </p>
    <p className="flex mb-2">
      Note that if the input Binary Tree happens to be a valid Binary Search Tree,
      the nodes in the flattened tree will be sorted.
    </p>
    <p className="flex mb-2">
      The flattening should be done in place, meaning that the original data
      structure should be mutated (no new structure should be created).
    </p>
    <p className="flex mb-2">
      Each BinaryTree node has an integer value, a
      left child node, and a right child node. Children
      nodes can either be BinaryTree nodes themselves or
      None / null.
    </p>`,
    "comparisonType": "ONJECT_MATCH",
    "testCases": [
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": "6", "right": null, "value": 3},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "5", "left": "7", "right": "8", "value": 5},
              {"id": "8", "left": null, "right": null, "value": 8},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "4", "left": null, "right": null, "value": 4}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "4", "left": null, "right": "2", "value": 4},
            {"id": "2", "left": "4", "right": "7", "value": 2},
            {"id": "7", "left": "2", "right": "5", "value": 7},
            {"id": "5", "left": "7", "right": "8", "value": 5},
            {"id": "8", "left": "5", "right": "1", "value": 8},
            {"id": "1", "left": "8", "right": "6", "value": 1},
            {"id": "6", "left": "1", "right": "3", "value": 6},
            {"id": "3", "left": "6", "right": null, "value": 3}
          ],
          "root": "4"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": null, "right": null, "value": 1}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "1", "left": null, "right": null, "value": 1}
          ],
          "root": "1"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": null, "value": 1},
              {"id": "2", "left": null, "right": null, "value": 2}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "2", "left": null, "right": "1", "value": 2},
            {"id": "1", "left": "2", "right": null, "value": 1}
          ],
          "root": "2"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "2", "left": null, "right": null, "value": 2}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "2", "left": null, "right": "1", "value": 2},
            {"id": "1", "left": "2", "right": "3", "value": 1},
            {"id": "3", "left": "1", "right": null, "value": 3}
          ],
          "root": "2"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "2", "left": "4", "right": null, "value": 2},
              {"id": "4", "left": null, "right": null, "value": 4}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "4", "left": null, "right": "2", "value": 4},
            {"id": "2", "left": "4", "right": "1", "value": 2},
            {"id": "1", "left": "2", "right": "3", "value": 1},
            {"id": "3", "left": "1", "right": null, "value": 3}
          ],
          "root": "4"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": null, "right": null, "value": 3},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "4", "left": null, "right": null, "value": 4}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "4", "left": null, "right": "2", "value": 4},
            {"id": "2", "left": "4", "right": "5", "value": 2},
            {"id": "5", "left": "2", "right": "1", "value": 5},
            {"id": "1", "left": "5", "right": "3", "value": 1},
            {"id": "3", "left": "1", "right": null, "value": 3}
          ],
          "root": "4"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": "6", "right": null, "value": 3},
              {"id": "6", "left": null, "right": null, "value": 6},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "5", "left": null, "right": null, "value": 5},
              {"id": "4", "left": null, "right": null, "value": 4}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "4", "left": null, "right": "2", "value": 4},
            {"id": "2", "left": "4", "right": "5", "value": 2},
            {"id": "5", "left": "2", "right": "1", "value": 5},
            {"id": "1", "left": "5", "right": "6", "value": 1},
            {"id": "6", "left": "1", "right": "3", "value": 6},
            {"id": "3", "left": "6", "right": null, "value": 3}
          ],
          "root": "4"
        }
      },
      {
        "input": {
          "tree": {
            "nodes": [
              {"id": "1", "left": "2", "right": "3", "value": 1},
              {"id": "3", "left": "6", "right": "7", "value": 3},
              {"id": "7", "left": null, "right": null, "value": 7},
              {"id": "6", "left": "12", "right": null, "value": 6},
              {"id": "12", "left": null, "right": null, "value": 12},
              {"id": "2", "left": "4", "right": "5", "value": 2},
              {"id": "5", "left": "10", "right": "11", "value": 5},
              {"id": "11", "left": null, "right": null, "value": 11},
              {"id": "10", "left": null, "right": null, "value": 10},
              {"id": "4", "left": "8", "right": "9", "value": 4},
              {"id": "9", "left": null, "right": null, "value": 9},
              {"id": "8", "left": null, "right": null, "value": 8}
            ],
            "root": "1"
          }
        },
        "output": {
          "nodes": [
            {"id": "8", "left": null, "right": "4", "value": 8},
            {"id": "4", "left": "8", "right": "9", "value": 4},
            {"id": "9", "left": "4", "right": "2", "value": 9},
            {"id": "2", "left": "9", "right": "10", "value": 2},
            {"id": "10", "left": "2", "right": "5", "value": 10},
            {"id": "5", "left": "10", "right": "11", "value": 5},
            {"id": "11", "left": "5", "right": "1", "value": 11},
            {"id": "1", "left": "11", "right": "12", "value": 1},
            {"id": "12", "left": "1", "right": "6", "value": 12},
            {"id": "6", "left": "12", "right": "3", "value": 6},
            {"id": "3", "left": "6", "right": "7", "value": 3},
            {"id": "7", "left": "3", "right": null, "value": 7}
          ],
          "root": "8"
        }
      }
    ]
  },
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
  },
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
  },
  {
    "title": "Depth-first Search",
    "functionName": "depthFirstSearch",
    "args": ["graph"],
    "difficulty": "Easy",
    "category": "Graphs",
    "text": `<p className="flex mb-2">
      You're given a Node class that has a name and an
      array of optional children nodes. When put together, nodes form
      an acyclic tree-like structure.
    </p>
    <p className="flex mb-2">
      Implement the depthFirstSearch method on the
      Node class, which takes in an empty array, traverses the tree
      using the Depth-first Search approach (specifically navigating the tree from
      left to right), stores all of the nodes' names in the input array, and returns
      it.
    </p>
    <p className="flex mb-2">
      If you're unfamiliar with Depth-first Search, we recommend watching the
      Conceptual Overview section of this question's video explanation before
      starting to code.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "graph": {
            "nodes": [
              {"children": ["B", "C", "D"], "id": "A", "value": "A"},
              {"children": ["E", "F"], "id": "B", "value": "B"},
              {"children": [], "id": "C", "value": "C"},
              {"children": ["G", "H"], "id": "D", "value": "D"},
              {"children": [], "id": "E", "value": "E"},
              {"children": ["I", "J"], "id": "F", "value": "F"},
              {"children": ["K"], "id": "G", "value": "G"},
              {"children": [], "id": "H", "value": "H"},
              {"children": [], "id": "I", "value": "I"},
              {"children": [], "id": "J", "value": "J"},
              {"children": [], "id": "K", "value": "K"}
            ],
            "startNode": "A"
          }
        },
        "output": ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
      },
      {
        "input": {
          "graph": {
            "nodes": [
              {"children": ["B", "C"], "id": "A", "value": "A"},
              {"children": ["D"], "id": "B", "value": "B"},
              {"children": [], "id": "C", "value": "C"},
              {"children": [], "id": "D", "value": "D"}
            ],
            "startNode": "A"
          }
        },
        "output": ["A", "B", "D", "C"]
      },
      {
        "input": {
          "graph": {
            "nodes": [
              {"children": ["B", "C", "D", "E"], "id": "A", "value": "A"},
              {"children": [], "id": "B", "value": "B"},
              {"children": ["F"], "id": "C", "value": "C"},
              {"children": [], "id": "D", "value": "D"},
              {"children": [], "id": "E", "value": "E"},
              {"children": [], "id": "F", "value": "F"}
            ],
            "startNode": "A"
          }
        },
        "output": ["A", "B", "C", "F", "D", "E"]
      },
      {
        "input": {
          "graph": {
            "nodes": [
              {"children": ["B"], "id": "A", "value": "A"},
              {"children": ["C"], "id": "B", "value": "B"},
              {"children": ["D", "E"], "id": "C", "value": "C"},
              {"children": ["F"], "id": "D", "value": "D"},
              {"children": [], "id": "E", "value": "E"},
              {"children": [], "id": "F", "value": "F"}
            ],
            "startNode": "A"
          }
        },
        "output": ["A", "B", "C", "D", "F", "E"]
      },
      {
        "input": {
          "graph": {
            "nodes": [
              {"children": ["B", "C", "D", "E", "F"], "id": "A", "value": "A"},
              {"children": ["G", "H", "I"], "id": "B", "value": "B"},
              {"children": ["J"], "id": "C", "value": "C"},
              {"children": ["K", "L"], "id": "D", "value": "D"},
              {"children": [], "id": "E", "value": "E"},
              {"children": ["M", "N"], "id": "F", "value": "F"},
              {"children": [], "id": "G", "value": "G"},
              {"children": ["O", "P", "Q", "R"], "id": "H", "value": "H"},
              {"children": [], "id": "I", "value": "I"},
              {"children": [], "id": "J", "value": "J"},
              {"children": ["S"], "id": "K", "value": "K"},
              {"children": [], "id": "L", "value": "L"},
              {"children": [], "id": "M", "value": "M"},
              {"children": [], "id": "N", "value": "N"},
              {"children": [], "id": "O", "value": "O"},
              {"children": ["T", "U"], "id": "P", "value": "P"},
              {"children": [], "id": "Q", "value": "Q"},
              {"children": ["V"], "id": "R", "value": "R"},
              {"children": [], "id": "S", "value": "S"},
              {"children": [], "id": "T", "value": "T"},
              {"children": [], "id": "U", "value": "U"},
              {"children": ["W", "X", "Y"], "id": "V", "value": "V"},
              {"children": [], "id": "W", "value": "W"},
              {"children": ["Z"], "id": "X", "value": "X"},
              {"children": [], "id": "Y", "value": "Y"},
              {"children": [], "id": "Z", "value": "Z"}
            ],
            "startNode": "A"
          }
        },
        "output": ["A", "B", "G", "H", "O", "P", "T", "U", "Q", "R", "V", "W", "X", "Z", "Y", "I", "C", "J", "D", "K", "S", "L", "E", "F", "M", "N"]
      }
    ]
  },
  {
    "title": "Single Cycle Check",
    "functionName": "singleCyleCheck",
    "args": ["array"],
    "difficulty": "Medium",
    "category": "Graphs",
    "text": `<p className="flex mb-2">
      You're given an array of integers where each integer represents a jump of its
      value in the array. For instance, the integer 2 represents a jump
      of two indices forward in the array; the integer -3 represents a
      jump of three indices backward in the array.
    </p>
    <p className="flex mb-2">
      If a jump spills past the array's bounds, it wraps over to the other side. For
      instance, a jump of -1 at index 0 brings us to the last index in
      the array. Similarly, a jump of 1 at the last index in the array brings us to
      index 0.
    </p>
    <p className="flex mb-2">
      Write a function that returns a boolean representing whether the jumps in the
      array form a single cycle. A single cycle occurs if, starting at any index in
      the array and following the jumps, every element in the array is visited
      exactly once before landing back on the starting index.
    </p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "array": [2, 3, 1, -4, -4, 2]
        },
        "output": true
      },
      {
        "input": {
          "array": [2, 2, -1]
        },
        "output": true
      },
      {
        "input": {
          "array": [2, 2, 2]
        },
        "output": true
      },
      {
        "input": {
          "array": [1, 1, 1, 1, 1]
        },
        "output": true
      },
      {
        "input": {
          "array": [-1, 2, 2]
        },
        "output": true
      },
      {
        "input": {
          "array": [0, 1, 1, 1, 1]
        },
        "output": false
      },
      {
        "input": {
          "array": [1, 1, 0, 1, 1]
        },
        "output": false
      },
      {
        "input": {
          "array": [1, 1, 1, 1, 2]
        },
        "output": false
      },
      {
        "input": {
          "array": [3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2]
        },
        "output": true
      },
      {
        "input": {
          "array": [3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2]
        },
        "output": false
      },
      {
        "input": {
          "array": [1, 2, 3, 4, -2, 3, 7, 8, 1]
        },
        "output": true
      },
      {
        "input": {
          "array": [1, 2, 3, 4, -2, 3, 7, 8, -8]
        },
        "output": true
      }
    ]
  },
  {
    "title": "Boggle Board",
    "functionName": "boogieBoard",
    "args": ["board", "words"],
    "difficulty": "Hard",
    "category": "Graphs",
    "text": `<p className="flex mb-2">
      You're given a two-dimensional array (a matrix) of potentially unequal height
      and width containing letters; this matrix represents a boggle board. You're
      also given a list of words.
    </p>
    <p className="flex mb-2">
      Write a function that returns an array of all the words contained in the
      boggle board. The final words don't need to be in any particular order.
    </p>
    <p className="flex mb-2">
      A word is constructed in the boggle board by connecting adjacent
      (horizontally, vertically, or diagonally) letters, without using any single
      letter at a given position more than once; while a word can of course have
      repeated letters, those repeated letters must come from different positions in
      the boggle board in order for the word to be contained in the board. Note that
      two or more words are allowed to overlap and use the same letters in the
      boggle board.
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "board": [
            ["t", "h", "i", "s", "i", "s", "a"],
            ["s", "i", "m", "p", "l", "e", "x"],
            ["b", "x", "x", "x", "x", "e", "b"],
            ["x", "o", "g", "g", "l", "x", "o"],
            ["x", "x", "x", "D", "T", "r", "a"],
            ["R", "E", "P", "E", "A", "d", "x"],
            ["x", "x", "x", "x", "x", "x", "x"],
            ["N", "O", "T", "R", "E", "-", "P"],
            ["x", "x", "D", "E", "T", "A", "E"]
          ],
          "words": ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]
        },
        "output": ["NOTRE-PEATED", "a", "board", "boggle", "is", "simple", "this"]
      },
      {
        "input": {
          "board": [
            ["y", "g", "f", "y", "e", "i"],
            ["c", "o", "r", "p", "o", "u"],
            ["j", "u", "z", "s", "e", "l"],
            ["s", "y", "u", "r", "h", "p"],
            ["e", "a", "e", "g", "n", "d"],
            ["h", "e", "l", "s", "a", "t"]
          ],
          "words": ["san", "sana", "at", "vomit", "yours", "help", "end", "been", "bed", "danger", "calm", "ok", "chaos", "complete", "rear", "going", "storm", "face", "epual", "dangerous"]
        },
        "output": ["at", "danger", "help", "san", "yours"]
      },
      {
        "input": {
          "board": [
            ["a", "b", "c", "d", "e"],
            ["f", "g", "h", "i", "j"],
            ["k", "l", "m", "n", "o"],
            ["p", "q", "r", "s", "t"],
            ["u", "v", "w", "x", "y"]
          ],
          "words": ["agmsy", "agmsytojed", "agmsytojedinhcbgl", "agmsytojedinhcbfl"]
        },
        "output": ["agmsy", "agmsytojed", "agmsytojedinhcbfl"]
      },
      {
        "input": {
          "board": [
            ["a", "b"],
            ["c", "d"]
          ],
          "words": ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "abca"]
        },
        "output": ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb"]
      },
      {
        "input": {
          "board": [
            ["f", "t", "r", "o", "p", "i", "k", "b", "o"],
            ["r", "w", "l", "p", "e", "u", "e", "a", "b"],
            ["j", "o", "t", "s", "e", "l", "f", "l", "p"],
            ["s", "z", "u", "t", "h", "u", "o", "p", "i"],
            ["k", "a", "e", "g", "n", "d", "r", "g", "a"],
            ["h", "n", "l", "s", "a", "t", "e", "t", "x"]
          ],
          "words": ["frozen", "rotten", "teleport", "city", "zutgatz", "kappa", "before", "rope", "obligate", "annoying"]
        },
        "output": ["before", "frozen", "kappa", "obligate", "rope", "rotten", "teleport"]
      },
      {
        "input": {
          "board": [
            ["c", "o", "m"],
            ["r", "p", "l"],
            ["c", "i", "t"],
            ["o", "a", "e"],
            ["f", "o", "d"],
            ["z", "r", "b"],
            ["g", "i", "a"],
            ["o", "a", "g"],
            ["f", "s", "z"],
            ["t", "e", "i"],
            ["t", "w", "d"]
          ],
          "words": ["commerce", "complicated", "twisted", "zigzag", "comma", "foobar", "baz", "there"]
        },
        "output": ["complicated", "foobar", "twisted", "zigzag"]
      },
      {
        "input": {
          "board": [
            ["c", "o", "m"],
            ["r", "p", "l"],
            ["c", "i", "t"],
            ["o", "a", "e"],
            ["f", "o", "d"],
            ["z", "r", "b"],
            ["g", "i", "a"],
            ["o", "a", "g"],
            ["f", "s", "z"],
            ["t", "e", "i"],
            ["t", "w", "d"]
          ],
          "words": ["cr", "oc", "ml", "iao", "opo", "zrb", "big", "fs", "ogiagao", "dwd", "twt"]
        },
        "output": ["big", "cr", "fs", "iao", "ml", "oc", "twt", "zrb"]
      },
      {
        "input": {
          "board": [
            ["c", "o", "m"],
            ["r", "p", "l"],
            ["c", "i", "t"],
            ["o", "a", "e"],
            ["f", "o", "d"],
            ["z", "r", "b"],
            ["g", "i", "a"],
            ["o", "a", "g"],
            ["f", "s", "z"],
            ["t", "e", "i"],
            ["t", "w", "d"]
          ],
          "words": ["comlpriteacoofziraagsizefttw", "comlpriteacoofzirabagsizefottw", "comlpriteacoofziraagsizefottw", "comlpriteacoofzirabagsizeftttw"]
        },
        "output": ["comlpriteacoofziraagsizefttw"]
      }
    ]
  },
  {
    "title": "Airport Connections",
    "functionName": "airportConnections",
    "args": ["airports", "routes", "startingAirport"],
    "difficulty": "Very Hard",
    "category": "Graphs",
    "text": `<p className="flex mb-2">
      <i>For the purpose of this question, the phrases "airport route" and "airport
        connection" are used interchangeably.</i>
    </p>
    <p className="flex mb-2">
      You're given a list of airports (three-letter codes like "JFK"),
      a list of routes (one-way flights from one airport to another like
      ["JFK", "SFO"]), and a starting airport.
    </p>
    <p className="flex mb-2">
      Write a function that returns the minimum number of airport connections
      (one-way flights) that need to be added in order for someone to be able to
      reach any airport in the list, starting at the starting airport.
    </p>
    <p className="flex mb-2">
      Note that routes only allow you to fly in one direction; for instance,
      the route
      ["JFK", "SFO"] only allows you to fly from "JFK" to
      "SFO".
    </p>
    <p className="flex mb-2">
      Also note that the connections don't have to be direct; it's okay if an
      airport can only be reached from the starting airport by stopping at other
      airports first.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["DSM", "ORD"],
            ["ORD", "BGI"],
            ["BGI", "LGA"],
            ["SIN", "CDG"],
            ["CDG", "SIN"],
            ["CDG", "BUD"],
            ["DEL", "DOH"],
            ["DEL", "CDG"],
            ["TLV", "DEL"],
            ["EWR", "HND"],
            ["HND", "ICN"],
            ["HND", "JFK"],
            ["ICN", "JFK"],
            ["JFK", "LGA"],
            ["EYW", "LHR"],
            ["LHR", "SFO"],
            ["SFO", "SAN"],
            ["SFO", "DSM"],
            ["SAN", "EYW"]
          ],
          "startingAirport": "LGA"
        },
        "output": 3
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [],
          "startingAirport": "LGA"
        },
        "output": 17
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["LGA", "ORD"],
            ["LGA", "EYW"]
          ],
          "startingAirport": "LGA"
        },
        "output": 14
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["LGA", "EYW"],
            ["EYW", "JFK"],
            ["EYW", "EWR"],
            ["JFK", "ICN"]
          ],
          "startingAirport": "LGA"
        },
        "output": 11
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["LGA", "EYW"],
            ["EYW", "JFK"],
            ["EYW", "EWR"],
            ["JFK", "ICN"],
            ["LGA", "ICN"],
            ["ICN", "ORD"],
            ["ICN", "EWR"],
            ["JFK", "DSM"]
          ],
          "startingAirport": "LGA"
        },
        "output": 11
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["LGA", "EYW"],
            ["EYW", "JFK"],
            ["EYW", "EWR"],
            ["JFK", "ICN"],
            ["LGA", "ICN"],
            ["ICN", "ORD"],
            ["ICN", "EWR"],
            ["JFK", "DSM"],
            ["ICN", "JFK"],
            ["ORD", "DSM"],
            ["DSM", "LGA"],
            ["JFK", "LGA"],
            ["JFK", "HND"]
          ],
          "startingAirport": "LGA"
        },
        "output": 10
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["LGA", "EYW"],
            ["EYW", "JFK"],
            ["EYW", "EWR"],
            ["JFK", "ICN"],
            ["LGA", "ICN"],
            ["ICN", "ORD"],
            ["ICN", "EWR"],
            ["JFK", "DSM"],
            ["ICN", "JFK"],
            ["ORD", "DSM"],
            ["DSM", "LGA"],
            ["JFK", "LGA"],
            ["JFK", "HND"],
            ["SFO", "SIN"],
            ["SFO", "CDG"],
            ["SFO", "LHR"],
            ["LHR", "DEL"],
            ["DEL", "BGI"],
            ["DEL", "DOH"],
            ["DOH", "SAN"]
          ],
          "startingAirport": "LGA"
        },
        "output": 3
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["EYW", "JFK"],
            ["EYW", "EWR"],
            ["JFK", "ICN"],
            ["LGA", "ICN"],
            ["ICN", "ORD"],
            ["ICN", "EWR"],
            ["JFK", "DSM"],
            ["ICN", "JFK"],
            ["ORD", "DSM"],
            ["DSM", "LGA"],
            ["JFK", "LGA"],
            ["JFK", "HND"],
            ["SFO", "SIN"],
            ["SFO", "CDG"],
            ["SFO", "LHR"],
            ["LHR", "DEL"],
            ["DEL", "BGI"],
            ["DEL", "DOH"],
            ["DOH", "SAN"]
          ],
          "startingAirport": "LGA"
        },
        "output": 4
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["SIN", "BGI"],
            ["SIN", "CDG"],
            ["SIN", "DEL"],
            ["SIN", "DOH"],
            ["SIN", "DSM"],
            ["SIN", "EWR"],
            ["SIN", "EYW"],
            ["SIN", "HND"],
            ["SIN", "ICN"],
            ["SIN", "JFK"],
            ["SIN", "LHR"],
            ["SIN", "ORD"],
            ["SFO", "SIN"],
            ["SFO", "SAN"]
          ],
          "startingAirport": "LGA"
        },
        "output": 3
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["SIN", "BGI"],
            ["SIN", "CDG"],
            ["CDG", "DEL"],
            ["DEL", "DOH"],
            ["DEL", "CDG"],
            ["DEL", "EWR"],
            ["HND", "ICN"],
            ["ICN", "JFK"],
            ["JFK", "LGA"],
            ["JFK", "SFO"],
            ["EYW", "LHR"],
            ["SFO", "ORD"],
            ["SFO", "LGA"]
          ],
          "startingAirport": "LGA"
        },
        "output": 6
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["SIN", "BGI"],
            ["SIN", "CDG"],
            ["CDG", "DEL"],
            ["DEL", "DOH"],
            ["DEL", "CDG"],
            ["DEL", "EWR"],
            ["HND", "ICN"],
            ["ICN", "JFK"],
            ["JFK", "LGA"],
            ["JFK", "SFO"],
            ["EYW", "LHR"],
            ["SFO", "ORD"],
            ["SFO", "LGA"],
            ["SFO", "SIN"],
            ["CDG", "EYW"],
            ["LGA", "SAN"]
          ],
          "startingAirport": "LGA"
        },
        "output": 3
      },
      {
        "input": {
          "airports": ["BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN", "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD"],
          "routes": [
            ["LGA", "DSM"],
            ["DSM", "ORD"],
            ["SIN", "BGI"],
            ["SIN", "CDG"],
            ["CDG", "DEL"],
            ["DEL", "DOH"],
            ["DEL", "CDG"],
            ["DEL", "EWR"],
            ["HND", "ICN"],
            ["ICN", "JFK"],
            ["JFK", "LGA"],
            ["JFK", "SFO"],
            ["EYW", "LHR"],
            ["SFO", "ORD"],
            ["SFO", "LGA"],
            ["SFO", "SIN"],
            ["CDG", "EYW"],
            ["ORD", "HND"],
            ["HND", "SAN"],
            ["LGA", "TLV"],
            ["LGA", "BUD"]
          ],
          "startingAirport": "LGA"
        },
        "output": 0
      }
    ]
  },
  {
    "title": "Minimum Waiting Time",
    "functionName": "minimumWaitingTime",
    "args": ["queries"],
    "difficulty": "Easy",
    "category": "Greedy Algorithms",
    "text": `<p className="flex mb-2">
      You're given a non-empty array of positive integers representing the amounts
      of time that specific queries take to execute. Only one query can be executed
      at a time, but the queries can be executed in any order.
    </p>
    <p className="flex mb-2">
      A query's waiting time is defined as the amount of time that it must
      wait before its execution starts. In other words, if a query is executed
      second, then its waiting time is the duration of the first query; if a query
      is executed third, then its waiting time is the sum of the durations of the
      first two queries.
    </p>
    <p className="flex mb-2">
      Write a function that returns the minimum amount of total waiting time for all
      of the queries. For example, if you're given the queries of durations
      [1, 4, 5], then the total waiting time if the queries were
      executed in the order of [5, 1, 4] would be
      (0) + (5) + (5 + 1) = 11. The first query of duration
      5 would be executed immediately, so its waiting time would be
      0, the second query of duration 1 would have to wait
      5 seconds (the duration of the first query) to be executed, and
      the last query would have to wait the duration of the first two queries before
      being executed.
    </p>
    <p className="flex mb-2">Note: you're allowed to mutate the input array.</p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "queries": [3, 2, 1, 2, 6]
        },
        "output": 17
      },
      {
        "input": {
          "queries": [2, 1, 1, 1]
        },
        "output": 6
      },
      {
        "input": {
          "queries": [1, 2, 4, 5, 2, 1]
        },
        "output": 23
      },
      {
        "input": {
          "queries": [25, 30, 2, 1]
        },
        "output": 32
      },
      {
        "input": {
          "queries": [1, 1, 1, 1, 1]
        },
        "output": 10
      },
      {
        "input": {
          "queries": [7, 9, 2, 3]
        },
        "output": 19
      },
      {
        "input": {
          "queries": [4, 3, 1, 1, 3, 2, 1, 8]
        },
        "output": 45
      },
      {
        "input": {
          "queries": [2]
        },
        "output": 0
      },
      {
        "input": {
          "queries": [7]
        },
        "output": 0
      },
      {
        "input": {
          "queries": [8, 9]
        },
        "output": 8
      },
      {
        "input": {
          "queries": [1, 9]
        },
        "output": 1
      },
      {
        "input": {
          "queries": [5, 4, 3, 2, 1]
        },
        "output": 20
      }
    ]
  },
  {
    "title": "Class Photos",
    "functionName": "classPhotos",
    "args": ["redShirtHeights", "blueShirtHeights"],
    "difficulty": "Easy",
    "category": "Greedy Algorithms",
    "text": `<p className="flex mb-2">
      It's photo day at the local school, and you're the photographer assigned to
      take class photos. The class that you'll be photographing has an even number
      of students, and all these students are wearing red or blue shirts. In fact,
      exactly half of the class is wearing red shirts, and the other half is wearing
      blue shirts. You're responsible for arranging the students in two rows before
      taking the photo. Each row should contain the same number of the students and
      should adhere to the following guidelines:
    </p>
    <ul>
      <li>All students wearing red shirts must be in the same row.</li>
      <li>All students wearing blue shirts must be in the same row.</li>
      <li>
        Each student in the back row must be strictly taller than the student
        directly in front of them in the front row.
      </li>
    </ul>
    <p className="flex mb-2">
      You're given two input arrays: one containing the heights of all the students
      with red shirts and another one containing the heights of all the students
      with blue shirts. These arrays will always have the same length, and each
      height will be a positive integer. Write a function that returns whether or
      not a class photo that follows the stated guidelines can be taken.
    </p>
    <p className="flex mb-2">Note: you can assume that each class has at least 2 students.</p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "redShirtHeights": [5, 8, 1, 3, 4],
          "blueShirtHeights": [6, 9, 2, 4, 5]
        },
        "output": true
      },
      {
        "input": {
          "redShirtHeights": [6, 9, 2, 4, 5],
          "blueShirtHeights": [5, 8, 1, 3, 4]
        },
        "output": true
      },
      {
        "input": {
          "redShirtHeights": [6, 9, 2, 4, 5, 1],
          "blueShirtHeights": [5, 8, 1, 3, 4, 9]
        },
        "output": false
      },
      {
        "input": {
          "redShirtHeights": [6],
          "blueShirtHeights": [6]
        },
        "output": false
      },
      {
        "input": {
          "redShirtHeights": [126],
          "blueShirtHeights": [125]
        },
        "output": true
      },
      {
        "input": {
          "redShirtHeights": [1, 2, 3, 4, 5],
          "blueShirtHeights": [2, 3, 4, 5, 6]
        },
        "output": true
      },
      {
        "input": {
          "redShirtHeights": [1, 1, 1, 1, 1, 1, 1, 1],
          "blueShirtHeights": [5, 6, 7, 2, 3, 1, 2, 3]
        },
        "output": false
      },
      {
        "input": {
          "redShirtHeights": [1, 1, 1, 1, 1, 1, 1, 1],
          "blueShirtHeights": [2, 2, 2, 2, 2, 2, 2, 2]
        },
        "output": true
      },
      {
        "input": {
          "redShirtHeights": [125],
          "blueShirtHeights": [126]
        },
        "output": true
      },
      {
        "input": {
          "redShirtHeights": [19, 2, 4, 6, 2, 3, 1, 1, 4],
          "blueShirtHeights": [21, 5, 4, 4, 4, 4, 4, 4, 4]
        },
        "output": false
      },
      {
        "input": {
          "redShirtHeights": [19, 19, 21, 1, 1, 1, 1, 1],
          "blueShirtHeights": [20, 5, 4, 4, 4, 4, 4, 4]
        },
        "output": false
      },
      {
        "input": {
          "redShirtHeights": [3, 5, 6, 8, 2],
          "blueShirtHeights": [2, 4, 7, 5, 1]
        },
        "output": true
      }
    ]
  },
  {
    "title": "Tandem Bicycle",
    "functionName": "tandemBicycle",
    "args": ["redShirtSpeed", "blueShirtSpeed", "fastest"],
    "difficulty": "Easy",
    "category": "Greedy Algorithms",
    "text": `<p className="flex mb-2">
      A tandem bicycle is a bicycle that's operated by two people: person A and
      person B. Both people pedal the bicycle, but the person that pedals faster
      dictates the speed of the bicycle. So if person A pedals at a speed of
      5, and person B pedals at a speed of 4, the tandem
      bicycle moves at a speed of 5 (i.e.,
      tandemSpeed = max(speedA, speedB)).
    </p>
    <p className="flex mb-2">
      You're given two lists of positive integers: one that contains the speeds of
      riders wearing red shirts and one that contains the speeds of riders wearing
      blue shirts. Each rider is represented by a single positive integer, which is
      the speed that they pedal a tandem bicycle at. Both lists have the same
      length, meaning that there are as many red-shirt riders as there are
      blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a
      rider wearing a blue shirt to operate a tandem bicycle.
    </p>
    <p className="flex mb-2">
      Write a function that returns the maximum possible total speed or the minimum
      possible total speed of all of the tandem bicycles being ridden based on an
      input parameter, fastest. If fastest = true, your
      function should return the maximum possible total speed; otherwise it should
      return the minimum total speed.
    </p>
    <p className="flex mb-2">
      "Total speed" is defined as the sum of the speeds of all the tandem bicycles
      being ridden. For example, if there are 4 riders (2 red-shirt riders and 2
      blue-shirt riders) who have speeds of 1, 3, 4, 5, and if they're
      paired on tandem bicycles as follows: [1, 4], [5, 3], then the
      total speed of these tandem bicycles is 4 + 5 = 9.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "redShirtSpeeds": [5, 5, 3, 9, 2],
          "blueShirtSpeeds": [3, 6, 7, 2, 1],
          "fastest": true
        },
        "output": 32
      },
      {
        "input": {
          "redShirtSpeeds": [5, 5, 3, 9, 2],
          "blueShirtSpeeds": [3, 6, 7, 2, 1],
          "fastest": false
        },
        "output": 25
      },
      {
        "input": {
          "redShirtSpeeds": [1, 2, 1, 9, 12, 3],
          "blueShirtSpeeds": [3, 3, 4, 6, 1, 2],
          "fastest": false
        },
        "output": 30
      },
      {
        "input": {
          "redShirtSpeeds": [1, 2, 1, 9, 12, 3],
          "blueShirtSpeeds": [3, 3, 4, 6, 1, 2],
          "fastest": true
        },
        "output": 37
      },
      {
        "input": {
          "redShirtSpeeds": [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1],
          "blueShirtSpeeds": [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32],
          "fastest": true
        },
        "output": 816
      },
      {
        "input": {
          "redShirtSpeeds": [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1],
          "blueShirtSpeeds": [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32],
          "fastest": false
        },
        "output": 484
      },
      {
        "input": {
          "redShirtSpeeds": [1],
          "blueShirtSpeeds": [5],
          "fastest": true
        },
        "output": 5
      },
      {
        "input": {
          "redShirtSpeeds": [1],
          "blueShirtSpeeds": [5],
          "fastest": false
        },
        "output": 5
      },
      {
        "input": {
          "redShirtSpeeds": [1, 1, 1, 1],
          "blueShirtSpeeds": [1, 1, 1, 1],
          "fastest": true
        },
        "output": 4
      },
      {
        "input": {
          "redShirtSpeeds": [1, 1, 1, 1],
          "blueShirtSpeeds": [1, 1, 1, 1],
          "fastest": false
        },
        "output": 4
      },
      {
        "input": {
          "redShirtSpeeds": [1, 1, 1, 1, 2, 2, 2, 2, 9, 11],
          "blueShirtSpeeds": [1, 1, 1, 1, 3, 3, 3, 3, 5, 7],
          "fastest": true
        },
        "output": 48
      },
      {
        "input": {
          "redShirtSpeeds": [1, 1, 1, 1, 2, 2, 2, 2, 9, 11],
          "blueShirtSpeeds": [1, 1, 1, 1, 3, 3, 3, 3, 5, 7],
          "fastest": false
        },
        "output": 36
      }
    ]
  },
  {
    "title": "Task Assignment",
    "functionName": "tastAssignment",
    "args": ["k", "tasks"],
    "difficulty": "Medium",
    "category": "Greedy Algorithms",
    "text": `p>
      Youre given an integer k representing a number of workers and an
      array of positive integers representing durations of tasks that must be
      completed by the workers. Specifically, each worker must complete two unique
      tasks and can only work on one task at a time. The number of tasks will always
      be equal to 2k such that each worker always has exactly two tasks
      to complete. All tasks are independent of one another and can be completed in
      any order. Workers will complete their assigned tasks in parallel, and the
      time taken to complete all tasks will be equal to the time taken to complete
      the longest pair of tasks (see the sample output for an explanation).
    </p>
    <p className="flex mb-2">
      Write a function that returns the optimal assignment of tasks to each worker
      such that the tasks are completed as fast as possible. Your function should
      return a list of pairs, where each pair stores the indices of the tasks that
      should be completed by one worker. The pairs should be in the following
      format: [task1, task2], where the order of task1 and
      task2 doesn't matter. Your function can return the pairs in any
      order. If multiple optimal assignments exist, any correct answer will be
      accepted.
    </p>
    <p className="flex mb-2">
      Note: you'll always be given at least one worker (i.e., k will
      always be greater than 0).
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "k": 3,
          "tasks": [1, 3, 5, 3, 1, 4]
        },
        "output": [
          [4, 2],
          [0, 5],
          [3, 1]
        ]
      },
      {
        "input": {
          "k": 4,
          "tasks": [1, 2, 3, 4, 5, 6, 7, 8]
        },
        "output": [
          [0, 7],
          [1, 6],
          [2, 5],
          [3, 4]
        ]
      },
      {
        "input": {
          "k": 5,
          "tasks": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        },
        "output": [
          [9, 8],
          [7, 6],
          [5, 4],
          [3, 2],
          [1, 0]
        ]
      },
      {
        "input": {
          "k": 1,
          "tasks": [3, 5]
        },
        "output": [
          [0, 1]
        ]
      },
      {
        "input": {
          "k": 7,
          "tasks": [2, 1, 3, 4, 5, 13, 12, 9, 11, 10, 6, 7, 14, 8]
        },
        "output": [
          [1, 12],
          [0, 5],
          [2, 6],
          [3, 8],
          [4, 9],
          [10, 7],
          [11, 13]
        ]
      },
      {
        "input": {
          "k": 5,
          "tasks": [3, 7, 5, 4, 4, 3, 6, 8, 3, 3]
        },
        "output": [
          [9, 7],
          [8, 1],
          [5, 6],
          [0, 2],
          [4, 3]
        ]
      },
      {
        "input": {
          "k": 10,
          "tasks": [5, 6, 2, 3, 15, 15, 16, 19, 2, 10, 10, 3, 3, 32, 12, 1, 23, 32, 9, 2]
        },
        "output": [
          [15, 17],
          [19, 13],
          [8, 16],
          [2, 7],
          [12, 6],
          [11, 5],
          [3, 4],
          [0, 14],
          [1, 10],
          [18, 9]
        ]
      },
      {
        "input": {
          "k": 4,
          "tasks": [1, 2, 2, 1, 3, 4, 4, 4]
        },
        "output": [
          [3, 7],
          [0, 6],
          [2, 5],
          [1, 4]
        ]
      },
      {
        "input": {
          "k": 3,
          "tasks": [87, 65, 43, 32, 31, 320]
        },
        "output": [
          [4, 5],
          [3, 0],
          [2, 1]
        ]
      },
      {
        "input": {
          "k": 2,
          "tasks": [3, 4, 5, 3]
        },
        "output": [
          [3, 2],
          [0, 1]
        ]
      },
      {
        "input": {
          "k": 3,
          "tasks": [5, 2, 1, 6, 4, 4]
        },
        "output": [
          [2, 3],
          [1, 0],
          [5, 4]
        ]
      },
      {
        "input": {
          "k": 2,
          "tasks": [1, 8, 9, 10]
        },
        "output": [
          [0, 3],
          [1, 2]
        ]
      }
    ]
  },
  {
    "title": "Valid Starting City",
    "functionName": "validStartingCity",
    "args": ["distance", "fuel", "mpg"],
    "difficulty": "Medium",
    "category": "Greedy Algorithms",
    "text": `p>
      Imaine you have a set of cities that are laid out in a circle, connected by a
      circular road that runs clockwise. Each city has a gas station that provides
      gallons of fuel, and each city is some distance away from the next city.
    </p>
    <p className="flex mb-2">
      You have a car that can drive some number of miles per gallon of fuel, and
      your goal is to pick a starting city such that you can fill up your car with
      that city's fuel, drive to the next city, refill up your car with that city's
      fuel, drive to the next city, and so on and so forth until you return back to
      the starting city with 0 or more gallons of fuel left.
    </p>
    <p className="flex mb-2">
      This city is called a valid starting city, and it's guaranteed that there will
      always be exactly one valid starting city.
    </p>
    <p className="flex mb-2">
      For the actual problem, you'll be given an array of distances such that city
      i is distances[i] away from city i + 1.
      Since the cities are connected via a circular road, the last city is connected
      to the first city. In other words, the last distance in the
      distances array is equal to the distance from the last city to
      the first city. You'll also be given an array of fuel available at each city,
      where fuel[i] is equal to the fuel available at city
      i. The total amount of fuel available (from all cities combined)
      is exactly enough to travel to all cities. Your fuel tank always starts out
      empty, and you're given a positive integer value for the number of miles that
      your car can travel per gallon of fuel (miles per gallon, or MPG). You can
      assume that you will always be given at least two cities.
    </p>
    <p className="flex mb-2">Write a function that returns the index of the valid starting city.</p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "distances": [5, 25, 15, 10, 15],
          "fuel": [1, 2, 1, 0, 3],
          "mpg": 10
        },
        "output": 4
      },
      {
        "input": {
          "distances": [10, 20, 10, 15, 5, 15, 25],
          "fuel": [0, 2, 1, 0, 0, 1, 1],
          "mpg": 20
        },
        "output": 1
      },
      {
        "input": {
          "distances": [30, 25, 5, 100, 40],
          "fuel": [3, 2, 1, 0, 4],
          "mpg": 20
        },
        "output": 4
      },
      {
        "input": {
          "distances": [1, 3, 10, 6, 7, 7, 2, 4],
          "fuel": [1, 1, 1, 1, 1, 1, 1, 1],
          "mpg": 5
        },
        "output": 6
      },
      {
        "input": {
          "distances": [5, 2, 3],
          "fuel": [1, 0, 1],
          "mpg": 5
        },
        "output": 2
      },
      {
        "input": {
          "distances": [4, 6],
          "fuel": [1, 9],
          "mpg": 1
        },
        "output": 1
      },
      {
        "input": {
          "distances": [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
          "fuel": [1, 2, 0, 1, 1, 0, 3, 1, 0, 1],
          "mpg": 25
        },
        "output": 1
      },
      {
        "input": {
          "distances": [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
          "fuel": [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "mpg": 25
        },
        "output": 0
      },
      {
        "input": {
          "distances": [15, 20, 25, 30, 35, 5],
          "fuel": [0, 3, 0, 0, 1, 1],
          "mpg": 26
        },
        "output": 5
      },
      {
        "input": {
          "distances": [10, 10, 10, 10],
          "fuel": [1, 2, 3, 4],
          "mpg": 4
        },
        "output": 2
      }
    ]
  },
  {
    "title": "Laptop Rentals",
    "functionName": "laptopRentals",
    "args": ["times"],
    "difficulty": "Hard",
    "category": "Heaps",
    "text": `<p className="flex mb-2">
      You're given a list of time intervals during which students at a school need a
      laptop. These time intervals are represented by pairs of integers
      [start, end], where 0 <= start end. However,
      start and end don't represent real times; therefore,
      they may be greater than 24.
    </p>
    <p className="flex mb-2">
      No two students can use a laptop at the same time, but immediately after a
      student is done using a laptop, another student can use that same laptop. For
      example, if one student rents a laptop during the time interval
      [0, 2], another student can rent the same laptop during any time
      interval starting with 2.
    </p>
    <p className="flex mb-2">
      Write a function that returns the minimum number of laptops that the school
      needs to rent such that all students will always have access to a laptop when
      they need one.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "times": [
            [0, 2],
            [1, 4],
            [4, 6],
            [0, 4],
            [7, 8],
            [9, 11],
            [3, 10]
          ]
        },
        "output": 3
      },
      {
        "input": {
          "times": [
            [0, 4],
            [2, 3],
            [2, 3],
            [2, 3]
          ]
        },
        "output": 4
      },
      {
        "input": {
          "times": [
            [1, 5],
            [5, 6],
            [6, 7],
            [7, 9]
          ]
        },
        "output": 1
      },
      {
        "input": {
          "times": [
            [0, 4]
          ]
        },
        "output": 1
      },
      { 
        "input": {
          "times": []
        },
        "output": 0
      },
      {
        "input": {
          "times": [
            [0, 5],
            [2, 4],
            [4, 7],
            [5, 7],
            [9, 20],
            [3, 15],
            [6, 10]
          ]
        },
        "output": 4
      },
      {
        "input": {
          "times": [
            [10, 20],
            [0, 5],
            [5, 10],
            [10, 15]
          ]
        },
        "output": 2
      },
      {
        "input": {
          "times": [
            [0, 5],
            [3, 8],
            [4, 10],
            [7, 11],
            [6, 10]
          ]
        },
        "output": 4
      },
      {
        "input": {
          "times": [
            [0, 5],
            [1, 4],
            [2, 3],
            [3, 8],
            [7, 9],
            [11, 20],
            [0, 20],
            [3, 10]
          ]
        },
        "output": 5
      },
      {
        "input": {
          "times": [
            [10, 20],
            [5, 15],
            [0, 6],
            [0, 20],
            [21, 22],
            [0, 1],
            [2, 5]
          ]
        },
        "output": 3
      },
      {
        "input": {
          "times": [
            [0, 10],
            [1, 9],
            [2, 8],
            [3, 7],
            [4, 6],
            [5, 6]
          ]
        },
        "output": 6
      },
      {
        "input": {
          "times": [
            [0, 20],
            [0, 10],
            [1, 9],
            [2, 8],
            [3, 7],
            [4, 6],
            [5, 6],
            [10, 15],
            [11, 12]
          ]
        },
        "output": 7
      }
    ]
  },
  {
    "title": "Merge Sorted Arrays",
    "functionName": "mergeSortedArrays",
    "args": ["arrays"],
    "difficulty": "Very Hard",
    "category": "Heaps",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty list of non-empty sorted arrays of
      integers and returns a merged list of all of those arrays.
    </p>
    <p className="flex mb-2">The integers in the merged list should be in sorted order.</p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "arrays": [
            [1, 5, 9, 21],
            [-1, 0],
            [-124, 81, 121],
            [3, 6, 12, 20, 150]
          ]
        },
        "output": [-124, -1, 0, 1, 3, 5, 6, 9, 12, 20, 21, 81, 121, 150]
      },
      {
        "input": {
          "arrays": [
            [-92, -78, -68, 43, 46, 46, 79, 79],
            [-66, -49, -26, -16, 21, 28, 33, 50],
            [-40, -8, 12, 20, 36, 38, 81],
            [-76, -74, -62, -46, -23, 33, 42, 48, 55, 94]
          ]
        },
        "output": [-92, -78, -76, -74, -68, -66, -62, -49, -46, -40, -26, -23, -16, -8, 12, 20, 21, 28, 33, 33, 36, 38, 42, 43, 46, 46, 48, 50, 55, 79, 79, 81, 94]
      },
      {
        "input": {
          "arrays": [
            [-95, -74, 1],
            [-28, 28, 95],
            [-89, -78, -67, -66, -25, -22, 2, 38],
            [-86, -35, -25, -13, 41],
            [-85, -77, -21, 72],
            [-55, 4, 84, 98],
            [-75, -73, 22]
          ]
        },
        "output": [-95, -89, -86, -85, -78, -77, -75, -74, -73, -67, -66, -55, -35, -28, -25, -25, -22, -21, -13, 1, 2, 4, 22, 28, 38, 41, 72, 84, 95, 98]
      },
      {
        "input": {
          "arrays": [
            [-79, -43, -15, 89],
            [-48, 13, 20],
            [-33, -19, -8, 12, 40, 44, 50, 52, 91, 95],
            [-100, -43, -8, 17],
            [-15, 81]
          ]
        },
        "output": [-100, -79, -48, -43, -43, -33, -19, -15, -15, -8, -8, 12, 13, 17, 20, 40, 44, 50, 52, 81, 89, 91, 95]
      },
      {
        "input": {
          "arrays": [
            [-88, -56, -43, -41, -13, -8, 82],
            [-38, 53],
            [-75, -48, -42, -27, 20, 35, 55],
            [-55, -50, -48, -45, 62, 69, 77],
            [-90, -27, -22, -19, -6, -3, 4, 6, 91],
            [-86, -67, -66, 2, 8, 8, 39, 74],
            [-62, 34, 40, 42, 47, 48, 55, 56, 68, 87]
          ]
        },
        "output": [-90, -88, -86, -75, -67, -66, -62, -56, -55, -50, -48, -48, -45, -43, -42, -41, -38, -27, -27, -22, -19, -13, -8, -6, -3, 2, 4, 6, 8, 8, 20, 34, 35, 39, 40, 42, 47, 48, 53, 55, 55, 56, 62, 68, 69, 74, 77, 82, 87, 91]
      },
      {
        "input": {
          "arrays": [
            [-93, -83, -43, -32, -32, -15, -14, 12, 78, 80],
            [-83],
            [-82, -51, -29, 40, 60, 76, 80],
            [50],
            [-33, -16],
            [-100],
            [-33, -11, 23, 29, 29, 43],
            [0, 70],
            [-57, -43, -41, -18, -5, 74]
          ]
        },
        "output": [-100, -93, -83, -83, -82, -57, -51, -43, -43, -41, -33, -33, -32, -32, -29, -18, -16, -15, -14, -11, -5, 0, 12, 23, 29, 29, 40, 43, 50, 60, 70, 74, 76, 78, 80, 80]
      },
      {
        "input": {
          "arrays": [
            [98],
            [-87, -79, -56, -33, -20, -10, -5, 19, 49, 86],
            [-73, -49],
            [-98, -63, -47, -4, 21],
            [-56, -43, -24, 8, 34, 80, 83],
            [-83, -65, -61, -30, -26, -16, 16, 19],
            [-91, -42, -21, 91],
            [-73, -62, -56, -30, 11, 67],
            [-91, -90, -40, 32, 94]
          ]
        },
        "output": [-98, -91, -91, -90, -87, -83, -79, -73, -73, -65, -63, -62, -61, -56, -56, -56, -49, -47, -43, -42, -40, -33, -30, -30, -26, -24, -21, -20, -16, -10, -5, -4, 8, 11, 16, 19, 19, 21, 32, 34, 49, 67, 80, 83, 86, 91, 94, 98]
      },
      {
        "input": {
          "arrays": [
            [-81, 36, 57, 59],
            [-65, -58, -47, -39, 29, 53, 66, 75, 88, 92],
            [-67, -54, -40, -25, 9, 17, 55, 75, 94],
            [-35, -3, 24, 82],
            [-86, 32, 95]
          ]
        },
        "output": [-86, -81, -67, -65, -58, -54, -47, -40, -39, -35, -25, -3, 9, 17, 24, 29, 32, 36, 53, 55, 57, 59, 66, 75, 75, 82, 88, 92, 94, 95]
      },
      {
        "input": {
          "arrays": [
            [-93, -83, -78, -75, -40, -32, 48],
            [-90, -75, -57, 7, 11, 21, 53, 84, 89],
            [-50, -40, -20, 71, 96],
            [-49, 13, 18, 61, 97],
            [42, 96]
          ]
        },
        "output": [-93, -90, -83, -78, -75, -75, -57, -50, -49, -40, -40, -32, -20, 7, 11, 13, 18, 21, 42, 48, 53, 61, 71, 84, 89, 96, 96, 97]
      },
      {
        "input": {
          "arrays": [
            [-63, -55, -9, 37, 86, 97],
            [-62, -48, -37, -16, 11, 33, 80, 97],
            [-51, 5, 34],
            [-24, -24, -19, 32, 46, 97],
            [-98, -56, -12, -2, -1, 11, 47, 79],
            [-59, 64, 93, 96],
            [-96, -51, -21, -18, 29, 57, 87, 90, 92],
            [-89, -85, -55, -12, 27],
            [-96, -96, -95, -95, -71, -45, -28, 8, 19, 100]
          ]
        },
        "output": [-98, -96, -96, -96, -95, -95, -89, -85, -71, -63, -62, -59, -56, -55, -55, -51, -51, -48, -45, -37, -28, -24, -24, -21, -19, -18, -16, -12, -12, -9, -2, -1, 5, 8, 11, 11, 19, 27, 29, 32, 33, 34, 37, 46, 47, 57, 64, 79, 80, 86, 87, 90, 92, 93, 96, 97, 97, 97, 100]
      },
      {
        "input": {
          "arrays": [
            [49, 72],
            [-95, -49, -18, -16, 1, 16, 36, 40, 75, 92],
            [-77, 11, 65, 91]
          ]
        },
        "output": [-95, -77, -49, -18, -16, 1, 11, 16, 36, 40, 49, 65, 72, 75, 91, 92]
      },
      {
        "input": {
          "arrays": [
            [-94, -93, -25, -2, 67, 85],
            [-83, -74, 64],
            [-83, 10, 46, 64],
            [-94, -54, -40, 9, 22, 49]
          ]
        },
        "output": [-94, -94, -93, -83, -83, -74, -54, -40, -25, -2, 9, 10, 22, 46, 49, 64, 64, 67, 85]
      }
    ]
  },
  {
    "title": "Remove Duplicates From Linked List",
    "functionName": "removeDuplicatesFromLinkedList",
    "args": ["linkedList"],
    "difficulty": "Easy",
    "category": "Linked Lists",
    "text": `<p className="flex mb-2">
      You're given the head of a Singly Linked List whose nodes are in sorted order
      with respect to their values. Write a function that returns a modified version
      of the Linked List that doesn't contain any nodes with duplicate values. The
      Linked List should be modified in place (i.e., you shouldn't create a brand
      new list), and the modified Linked List should still have its nodes sorted
      with respect to their values.
    </p>
    <p className="flex mb-2">
      Each LinkedList node has an integer value as well as
      a next node pointing to the next node in the list or to
      None / null if it's the tail of the list.
    </p>`,
    "comparisonType": "OBJECT_MATCH",
    "testCases": [
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "1-2", "value": 1},
              {"id": "1-2", "next": "1-3", "value": 1},
              {"id": "1-3", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 3},
              {"id": "3", "next": "3-2", "value": 4},
              {"id": "3-2", "next": "3-3", "value": 4},
              {"id": "3-3", "next": "4", "value": 4},
              {"id": "4", "next": "5", "value": 5},
              {"id": "5", "next": "5-2", "value": 6},
              {"id": "5-2", "next": null, "value": 6}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "3", "value": 1},
            {"id": "3", "next": "4", "value": 3},
            {"id": "4", "next": "5", "value": 4},
            {"id": "5", "next": "6", "value": 5},
            {"id": "6", "next": null, "value": 6}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "1-2", "value": 1},
              {"id": "1-2", "next": "1-3", "value": 1},
              {"id": "1-3", "next": "1-4", "value": 1},
              {"id": "1-4", "next": "1-5", "value": 1},
              {"id": "1-5", "next": "4", "value": 1},
              {"id": "4", "next": "4-2", "value": 4},
              {"id": "4-2", "next": "5", "value": 4},
              {"id": "5", "next": "6", "value": 5},
              {"id": "6", "next": "6-2", "value": 6},
              {"id": "6-2", "next": null, "value": 6}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "4", "value": 1},
            {"id": "4", "next": "5", "value": 4},
            {"id": "5", "next": "6", "value": 5},
            {"id": "6", "next": null, "value": 6}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "1-2", "value": 1},
              {"id": "1-2", "next": "1-3", "value": 1},
              {"id": "1-3", "next": "1-4", "value": 1},
              {"id": "1-4", "next": "1-5", "value": 1},
              {"id": "1-5", "next": "1-6", "value": 1},
              {"id": "1-6", "next": "1-7", "value": 1},
              {"id": "1-7", "next": null, "value": 1}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "value": 1}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "9", "value": 1},
              {"id": "9", "next": "11", "value": 9},
              {"id": "11", "next": "15", "value": 11},
              {"id": "15", "next": "15-2", "value": 15},
              {"id": "15-2", "next": "16", "value": 15},
              {"id": "16", "next": "17", "value": 16},
              {"id": "17", "next": null, "value": 17}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "9", "value": 1},
            {"id": "9", "next": "11", "value": 9},
            {"id": "11", "next": "15", "value": 11},
            {"id": "15", "next": "16", "value": 15},
            {"id": "16", "next": "17", "value": 16},
            {"id": "17", "next": null, "value": 17}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": null, "value": 1}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": null, "value": 1}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "-5",
            "nodes": [
              {"id": "-5", "next": "-1", "value": -5},
              {"id": "-1", "next": "-1-2", "value": -1},
              {"id": "-1-2", "next": "-1-3", "value": -1},
              {"id": "-1-3", "next": "5", "value": -1},
              {"id": "5", "next": "5-2", "value": 5},
              {"id": "5-2", "next": "5-3", "value": 5},
              {"id": "5-3", "next": "8", "value": 5},
              {"id": "8", "next": "8-2", "value": 8},
              {"id": "8-2", "next": "9", "value": 8},
              {"id": "9", "next": "10", "value": 9},
              {"id": "10", "next": "11", "value": 10},
              {"id": "11", "next": "11-2", "value": 11},
              {"id": "11-2", "next": null, "value": 11}
            ]
          }
        },
        "output": {
          "head": "-5",
          "nodes": [
            {"id": "-5", "next": "-1", "value": -5},
            {"id": "-1", "next": "5", "value": -1},
            {"id": "5", "next": "8", "value": 5},
            {"id": "8", "next": "9", "value": 8},
            {"id": "9", "next": "10", "value": 9},
            {"id": "10", "next": "11", "value": 10},
            {"id": "11", "next": null, "value": 11}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": "4", "value": 3},
              {"id": "4", "next": "5", "value": 4},
              {"id": "5", "next": "6", "value": 5},
              {"id": "6", "next": "7", "value": 6},
              {"id": "7", "next": "8", "value": 7},
              {"id": "8", "next": "9", "value": 8},
              {"id": "9", "next": "10", "value": 9},
              {"id": "10", "next": "11", "value": 10},
              {"id": "11", "next": "12", "value": 11},
              {"id": "12", "next": "12-2", "value": 12},
              {"id": "12-2", "next": null, "value": 12}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "value": 1},
            {"id": "2", "next": "3", "value": 2},
            {"id": "3", "next": "4", "value": 3},
            {"id": "4", "next": "5", "value": 4},
            {"id": "5", "next": "6", "value": 5},
            {"id": "6", "next": "7", "value": 6},
            {"id": "7", "next": "8", "value": 7},
            {"id": "8", "next": "9", "value": 8},
            {"id": "9", "next": "10", "value": 9},
            {"id": "10", "next": "11", "value": 10},
            {"id": "11", "next": "12", "value": 11},
            {"id": "12", "next": null, "value": 12}
          ]
        }
      }
    ]
  },
  {
    "title": "Sum of Linked Lists",
    "functionName": "sumOfLinkedLists",
    "args": ["linkedListOne", "linkedListTwo"],
    "difficulty": "Medium",
    "category": "Linked Lists",
    "text": `<p className="flex mb-2">
      Youre given two Linked Lists of potentially unequal length. Each Linked List
      represents a non-negative integer, where each node in the Linked List is a
      digit of that integer, and the first node in each Linked List always
      represents the least significant digit of the integer. Write a function that
      returns the head of a new Linked List that represents the sum of the integers
      represented by the two input Linked Lists.
    </p>
    <p className="flex mb-2">
      Each LinkedList node has an integer value as well as
      a next node pointing to the next node in the list or to
      None / null if it's the tail of the list. The
      value of each LinkedList node is always in the range
      of 0 - 9.
    </p>
    <p className="flex mb-2">
      Note: your function must create and return a new Linked List, and you're not
      allowed to modify either of the input Linked Lists.
    </p>`,
    "comparisonType": "OBJECT_MATCH",
    "testCases": [
      {
        "input": {
          "linkedListOne": {
            "head": "2",
            "nodes": [
              {"id": "2", "next": "4", "value": 2},
              {"id": "4", "next": "7", "value": 4},
              {"id": "7", "next": "1", "value": 7},
              {"id": "1", "next": null, "value": 1}
            ]
          },
          "linkedListTwo": {
            "head": "9",
            "nodes": [
              {"id": "9", "next": "4", "value": 9},
              {"id": "4", "next": "5", "value": 4},
              {"id": "5", "next": null, "value": 5}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "9", "value": 1},
            {"id": "9", "next": "2", "value": 9},
            {"id": "2", "next": "2-2", "value": 2},
            {"id": "2-2", "next": null, "value": 2}
          ]
        }
      },
      {
        "input": {
          "linkedListOne": {
            "head": "2",
            "nodes": [
              {"id": "2", "next": null, "value": 2}
            ]
          },
          "linkedListTwo": {
            "head": "9",
            "nodes": [
              {"id": "9", "next": null, "value": 9}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "1-2", "value": 1},
            {"id": "1-2", "next": null, "value": 1}
          ]
        }
      },
      {
        "input": {
          "linkedListOne": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "0-2", "value": 0},
              {"id": "0-2", "next": "0-3", "value": 0},
              {"id": "0-3", "next": "5", "value": 0},
              {"id": "5", "next": null, "value": 5}
            ]
          },
          "linkedListTwo": {
            "head": "9",
            "nodes": [
              {"id": "9", "next": null, "value": 9}
            ]
          }
        },
        "output": {
          "head": "9",
          "nodes": [
            {"id": "9", "next": "0", "value": 9},
            {"id": "0", "next": "0-2", "value": 0},
            {"id": "0-2", "next": "5", "value": 0},
            {"id": "5", "next": null, "value": 5}
          ]
        }
      },
      {
        "input": {
          "linkedListOne": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "1-2", "value": 1},
              {"id": "1-2", "next": "1-3", "value": 1},
              {"id": "1-3", "next": null, "value": 1}
            ]
          },
          "linkedListTwo": {
            "head": "9",
            "nodes": [
              {"id": "9", "next": "9-2", "value": 9},
              {"id": "9-2", "next": "9-3", "value": 9},
              {"id": "9-3", "next": null, "value": 9}
            ]
          }
        },
        "output": {
          "head": "0",
          "nodes": [
            {"id": "0", "next": "1", "value": 0},
            {"id": "1", "next": "1-2", "value": 1},
            {"id": "1-2", "next": "1-3", "value": 1},
            {"id": "1-3", "next": null, "value": 1}
          ]
        }
      },
      {
        "input": {
          "linkedListOne": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": null, "value": 3}
            ]
          },
          "linkedListTwo": {
            "head": "6",
            "nodes": [
              {"id": "6", "next": "7", "value": 6},
              {"id": "7", "next": "9", "value": 7},
              {"id": "9", "next": "1", "value": 9},
              {"id": "1", "next": "8", "value": 1},
              {"id": "8", "next": null, "value": 8}
            ]
          }
        },
        "output": {
          "head": "7",
          "nodes": [
            {"id": "7", "next": "9", "value": 7},
            {"id": "9", "next": "2", "value": 9},
            {"id": "2", "next": "2-2", "value": 2},
            {"id": "2-2", "next": "8", "value": 2},
            {"id": "8", "next": null, "value": 8}
          ]
        }
      },
      {
        "input": {
          "linkedListOne": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": null, "value": 0}
            ]
          },
          "linkedListTwo": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": null, "value": 0}
            ]
          }
        },
        "output": {
          "head": "0",
          "nodes": [
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedListOne": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": null, "value": 0}
            ]
          },
          "linkedListTwo": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "0-2", "value": 0},
              {"id": "0-2", "next": "0-3", "value": 0},
              {"id": "0-3", "next": "0-4", "value": 0},
              {"id": "0-4", "next": "0-5", "value": 0},
              {"id": "0-5", "next": "8", "value": 0},
              {"id": "8", "next": null, "value": 8}
            ]
          }
        },
        "output": {
          "head": "0",
          "nodes": [
            {"id": "0", "next": "0-2", "value": 0},
            {"id": "0-2", "next": "0-3", "value": 0},
            {"id": "0-3", "next": "0-4", "value": 0},
            {"id": "0-4", "next": "0-5", "value": 0},
            {"id": "0-5", "next": "8", "value": 0},
            {"id": "8", "next": null, "value": 8}
          ]
        }
      },
      {
        "input": {
          "linkedListOne": {
            "head": "4",
            "nodes": [
              {"id": "4", "next": "6", "value": 4},
              {"id": "6", "next": "9", "value": 6},
              {"id": "9", "next": "3", "value": 9},
              {"id": "3", "next": "1", "value": 3},
              {"id": "1", "next": null, "value": 1}
            ]
          },
          "linkedListTwo": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "0-2", "value": 0},
              {"id": "0-2", "next": "0-3", "value": 0},
              {"id": "0-3", "next": "0-4", "value": 0},
              {"id": "0-4", "next": "2", "value": 0},
              {"id": "2", "next": "7", "value": 2},
              {"id": "7", "next": null, "value": 7}
            ]
          }
        },
        "output": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "6", "value": 4},
            {"id": "6", "next": "9", "value": 6},
            {"id": "9", "next": "3", "value": 9},
            {"id": "3", "next": "3-2", "value": 3},
            {"id": "3-2", "next": "7", "value": 3},
            {"id": "7", "next": null, "value": 7}
          ]
        }
      }
    ]
  },
  {
    "title": "Reverse Linked List",
    "functionName": "reverseLinkedList",
    "args": ["linkedList"],
    "difficulty": "Hard",
    "category": "Linked Lists",
    "text": `<p className="flex mb-2">
      Write a function that takes in the head of a Singly Linked List, reverses the
      list in place (i.e., doesn't create a brand new list), and returns its new head.
    </p>
    <p className="flex mb-2">
      Each LinkedList node has an integer value as well as
      a next node pointing to the next node in the list or to
      None / null if it's the tail of the list.
    </p>
    <p className="flex mb-2">
      You can assume that the input Linked List will always have at least one node; in other
      words, the head will never be None / null.
    </p>`,
    "comparisonType": "OBJECT_MATCH",
    "testCases": [
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": "4", "value": 3},
              {"id": "4", "next": "5", "value": 4},
              {"id": "5", "next": null, "value": 5}
            ]
          }
        },
        "output": {
          "head": "5",
          "nodes": [
            {"id": "5", "next": "4", "value": 5},
            {"id": "4", "next": "3", "value": 4},
            {"id": "3", "next": "2", "value": 3},
            {"id": "2", "next": "1", "value": 2},
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": null, "value": 0}
            ]
          }
        },
        "output": {
          "head": "0",
          "nodes": [
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": null, "value": 1}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": null, "value": 2}
            ]
          }
        },
        "output": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "value": 2},
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": null, "value": 3}
            ]
          }
        },
        "output": {
          "head": "3",
          "nodes": [
            {"id": "3", "next": "2", "value": 3},
            {"id": "2", "next": "1", "value": 2},
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": "4", "value": 3},
              {"id": "4", "next": "5", "value": 4},
              {"id": "5", "next": "6", "value": 5},
              {"id": "6", "next": null, "value": 6}
            ]
          }
        },
        "output": {
          "head": "6",
          "nodes": [
            {"id": "6", "next": "5", "value": 6},
            {"id": "5", "next": "4", "value": 5},
            {"id": "4", "next": "3", "value": 4},
            {"id": "3", "next": "2", "value": 3},
            {"id": "2", "next": "1", "value": 2},
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": "4", "value": 3},
              {"id": "4", "next": "5", "value": 4},
              {"id": "5", "next": "6", "value": 5},
              {"id": "6", "next": "7", "value": 6},
              {"id": "7", "next": "8", "value": 7},
              {"id": "8", "next": "9", "value": 8},
              {"id": "9", "next": "10", "value": 9},
              {"id": "10", "next": "11", "value": 10},
              {"id": "11", "next": "12", "value": 11},
              {"id": "12", "next": null, "value": 12}
            ]
          }
        },
        "output": {
          "head": "12",
          "nodes": [
            {"id": "12", "next": "11", "value": 12},
            {"id": "11", "next": "10", "value": 11},
            {"id": "10", "next": "9", "value": 10},
            {"id": "9", "next": "8", "value": 9},
            {"id": "8", "next": "7", "value": 8},
            {"id": "7", "next": "6", "value": 7},
            {"id": "6", "next": "5", "value": 6},
            {"id": "5", "next": "4", "value": 5},
            {"id": "4", "next": "3", "value": 4},
            {"id": "3", "next": "2", "value": 3},
            {"id": "2", "next": "1", "value": 2},
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": null, "value": 0}
          ]
        }
      }
    ]
  },
  {
    "title": "Node Swap",
    "functionName": "nodeSwap",
    "args": ["linkedList"],
    "difficulty": "Very Hard",
    "category": "Linked Lists",
    "text": `<p className="flex mb-2">Write a function that takes in the head of a Singly Linked List, swaps every
      pai of adjacent nodes in place (i.e., doesn't create a brand new list), and
      returns its new head.
    </p>
    <p className="flex mb-2">
      If the input Linked List has an odd number of nodes, its final node should
      remain the same.
    </p>
    <p className="flex mb-2">
      Each LinkedList node has an integer value as well as
      a next node pointing to the next node in the list or to
      None / null if it's the tail of the list.
    </p>
    <p className="flex mb-2">
      You can assume that the input Linked List will always have at least one node;
      in other words, the head will never be None / null.
    </p>`,
    "comparisonType": "OBJECT_MATCH",
    "testCases": [
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": "4", "value": 3},
              {"id": "4", "next": "5", "value": 4},
              {"id": "5", "next": null, "value": 5}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": "3", "value": 0},
            {"id": "3", "next": "2", "value": 3},
            {"id": "2", "next": "5", "value": 2},
            {"id": "5", "next": "4", "value": 5},
            {"id": "4", "next": null, "value": 4}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": null, "value": 0}
            ]
          }
        },
        "output": {
          "head": "0",
          "nodes": [
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "0",
            "nodes": [
              {"id": "0", "next": "1", "value": 0},
              {"id": "1", "next": null, "value": 1}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "0", "value": 1},
            {"id": "0", "next": null, "value": 0}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "5",
            "nodes": [
              {"id": "5", "next": "10", "value": 5},
              {"id": "10", "next": "15", "value": 10},
              {"id": "15", "next": "20", "value": 15},
              {"id": "20", "next": "25", "value": 20},
              {"id": "25", "next": "30", "value": 25},
              {"id": "30", "next": null, "value": 30}
            ]
          }
        },
        "output": {
          "head": "10",
          "nodes": [
            {"id": "10", "next": "5", "value": 10},
            {"id": "5", "next": "20", "value": 5},
            {"id": "20", "next": "15", "value": 20},
            {"id": "15", "next": "30", "value": 15},
            {"id": "30", "next": "25", "value": 30},
            {"id": "25", "next": null, "value": 25}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "3", "value": 1},
              {"id": "3", "next": "9", "value": 3},
              {"id": "9", "next": "6", "value": 9},
              {"id": "6", "next": "20", "value": 6},
              {"id": "20", "next": "4", "value": 20},
              {"id": "4", "next": null, "value": 4}
            ]
          }
        },
        "output": {
          "head": "3",
          "nodes": [
            {"id": "3", "next": "1", "value": 3},
            {"id": "1", "next": "6", "value": 1},
            {"id": "6", "next": "9", "value": 6},
            {"id": "9", "next": "4", "value": 9},
            {"id": "4", "next": "20", "value": 4},
            {"id": "20", "next": null, "value": 20}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "5",
            "nodes": [
              {"id": "5", "next": "4", "value": 5},
              {"id": "4", "next": "3", "value": 4},
              {"id": "3", "next": "2", "value": 3},
              {"id": "2", "next": "1", "value": 2},
              {"id": "1", "next": "0", "value": 1},
              {"id": "0", "next": null, "value": 0}
            ]
          }
        },
        "output": {
          "head": "4",
          "nodes": [
            {"id": "4", "next": "5", "value": 4},
            {"id": "5", "next": "2", "value": 5},
            {"id": "2", "next": "3", "value": 2},
            {"id": "3", "next": "0", "value": 3},
            {"id": "0", "next": "1", "value": 0},
            {"id": "1", "next": null, "value": 1}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "1",
            "nodes": [
              {"id": "1", "next": "2", "value": 1},
              {"id": "2", "next": "3", "value": 2},
              {"id": "3", "next": "4", "value": 3},
              {"id": "4", "next": "5", "value": 4},
              {"id": "5", "next": "6", "value": 5},
              {"id": "6", "next": "7", "value": 6},
              {"id": "7", "next": "8", "value": 7},
              {"id": "8", "next": "9", "value": 8},
              {"id": "9", "next": "10", "value": 9},
              {"id": "10", "next": "11", "value": 10},
              {"id": "11", "next": "12", "value": 11},
              {"id": "12", "next": "13", "value": 12},
              {"id": "13", "next": "14", "value": 13},
              {"id": "14", "next": "15", "value": 14},
              {"id": "15", "next": null, "value": 15}
            ]
          }
        },
        "output": {
          "head": "2",
          "nodes": [
            {"id": "2", "next": "1", "value": 2},
            {"id": "1", "next": "4", "value": 1},
            {"id": "4", "next": "3", "value": 4},
            {"id": "3", "next": "6", "value": 3},
            {"id": "6", "next": "5", "value": 6},
            {"id": "5", "next": "8", "value": 5},
            {"id": "8", "next": "7", "value": 8},
            {"id": "7", "next": "10", "value": 7},
            {"id": "10", "next": "9", "value": 10},
            {"id": "9", "next": "12", "value": 9},
            {"id": "12", "next": "11", "value": 12},
            {"id": "11", "next": "14", "value": 11},
            {"id": "14", "next": "13", "value": 14},
            {"id": "13", "next": "15", "value": 13},
            {"id": "15", "next": null, "value": 15}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "10",
            "nodes": [
              {"id": "10", "next": "20", "value": 10},
              {"id": "20", "next": "30", "value": 20},
              {"id": "30", "next": null, "value": 30}
            ]
          }
        },
        "output": {
          "head": "20",
          "nodes": [
            {"id": "20", "next": "10", "value": 20},
            {"id": "10", "next": "30", "value": 10},
            {"id": "30", "next": null, "value": 30}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "30",
            "nodes": [
              {"id": "30", "next": "10", "value": 30},
              {"id": "10", "next": "20", "value": 10},
              {"id": "20", "next": null, "value": 20}
            ]
          }
        },
        "output": {
          "head": "10",
          "nodes": [
            {"id": "10", "next": "30", "value": 10},
            {"id": "30", "next": "20", "value": 30},
            {"id": "20", "next": null, "value": 20}
          ]
        }
      },
      {
        "input": {
          "linkedList": {
            "head": "2",
            "nodes": [
              {"id": "2", "next": "1", "value": 2},
              {"id": "1", "next": "4", "value": 1},
              {"id": "4", "next": "3", "value": 4},
              {"id": "3", "next": "6", "value": 3},
              {"id": "6", "next": "5", "value": 6},
              {"id": "5", "next": "8", "value": 5},
              {"id": "8", "next": "7", "value": 8},
              {"id": "7", "next": "10", "value": 7},
              {"id": "10", "next": "9", "value": 10},
              {"id": "9", "next": null, "value": 9}
            ]
          }
        },
        "output": {
          "head": "1",
          "nodes": [
            {"id": "1", "next": "2", "value": 1},
            {"id": "2", "next": "3", "value": 2},
            {"id": "3", "next": "4", "value": 3},
            {"id": "4", "next": "5", "value": 4},
            {"id": "5", "next": "6", "value": 5},
            {"id": "6", "next": "7", "value": 6},
            {"id": "7", "next": "8", "value": 7},
            {"id": "8", "next": "9", "value": 8},
            {"id": "9", "next": "10", "value": 9},
            {"id": "10", "next": null, "value": 10}
          ]
        }
      }
    ]
  },
  {
    "title": "Find Nth Fibonacci",
    "functionName": "findNthFibonacci",
    "args": ["n"],
    "difficulty": "Easy",
    "category": "Recursion",
    "text": `
    <p className="flex mb-2">
      The Fibonacci sequence is defined as follows: the first number of the sequence
      is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
      and (n - 2)th numbers. Write a function that takes in an integer
      n and returns the nth Fibonacci number.
    </p>
    <p className="flex mb-2">
      Important note: the Fibonacci sequence is often defined with its first two
      numbers as F0 = 0 and F1 = 1. For the purpose of
      this question, the first Fibonacci number is F0; therefore,
      getNthFib(1) is equal to F0, getNthFib(2)
      is equal to F1, etc..
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "n": 6
        },
        "output": 5
      },
      {
        "input": {
          "n": 1
        },
        "output": 0
      },
      {
        "input": {
          "n": 2
        },
        "output": 1
      },
      {
        "input": {
          "n": 3
        },
        "output": 1
      },
      {
        "input": {
          "n": 4
        },
        "output": 2
      },
      {
        "input": {
          "n": 5
        },
        "output": 3
      },
      {
        "input": {
          "n": 7
        },
        "output": 8
      },
      {
        "input": {
          "n": 8
        },
        "output": 13
      },
      {
        "input": {
          "n": 9
        },
        "output": 21
      },
      {
        "input": {
          "n": 10
        },
        "output": 34
      },
      {
        "input": {
          "n": 11
        },
        "output": 55
      },
      {
        "input": {
          "n": 12
        },
        "output": 89
      }
    ]
  },
  {
    "title": "Blackjack Probability",
    "functionName": "blackjackProbablity",
    "args": ["target", "startingHand"],
    "difficulty": "Medium",
    "category": "Recursion",
    "text": `<p className="flex mb-2">
      In the game of Blackjack, the dealer must draw cards until the sum of the
      values of their cards is greater than or equal to a
      target value minus 4. For example, traditional Blackjack uses a
      target value of 21, so the dealer must draw cards until their
      total is greater than or equal to 17, at which point they stop drawing cards
      (they "stand"). If the dealer draws a card that brings their total above the
      target (above 21 in traditional Blackjack), they lose (they
      "bust").
    </p>
    <p className="flex mb-2">
      Naturally, when a dealer is drawing cards, they can either end up standing
      or busting, and this is entirely up to the luck of their draw.
    </p>
    <p className="flex mb-2">
      Write a function that takes in a target value as well as a
      dealer's startingHand value and returns the probability that
      the dealer will bust (go over the target value before
      standing). The target value will always be a positive integer,
      and the startingHand value will always be a positive integer
      that's smaller than or equal to the target value.
    </p>
    <p className="flex mb-2">
      For simplicity, you can assume that the dealer has an infinite deck of cards
      and that each card has a value between 1 and 10 inclusive. The likelihood of
      drawing a card of any value is always the same, regardless of previous
      draws.
    </p>
    <p className="flex mb-2">
      Your solution should be rounded to 3 decimal places and to the nearest
      value. For example, a probability of 0.314159 would be rounded
      to 0.314, while a probability of 0.1337 would be
      rounded to 0.134.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "target": 21,
          "startingHand": 16
        },
        "output": 0.5
      },
      {
        "input": {
          "target": 21,
          "startingHand": 21
        },
        "output": 0
      },
      {
        "input": {
          "target": 21,
          "startingHand": 20
        },
        "output": 0
      },
      {
        "input": {
          "target": 21,
          "startingHand": 17
        },
        "output": 0
      },
      {
        "input": {
          "target": 21,
          "startingHand": 15
        },
        "output": 0.45
      },
      {
        "input": {
          "target": 21,
          "startingHand": 12
        },
        "output": 0.268
      },
      {
        "input": {
          "target": 21,
          "startingHand": 5
        },
        "output": 0.295
      },
      {
        "input": {
          "target": 21,
          "startingHand": 1
        },
        "output": 0.261
      },
      {
        "input": {
          "target": 100,
          "startingHand": 95
        },
        "output": 0.5
      },
      {
        "input": {
          "target": 100,
          "startingHand": 90
        },
        "output": 0.195
      },
      {
        "input": {
          "target": 100,
          "startingHand": 20
        },
        "output": 0.273
      },
      {
        "input": {
          "target": 100,
          "startingHand": 100
        },
        "output": 0
      }
    ]
  },
  {
    "title": "Generate Div Tags",
    "functionName": "generateDivTags",
    "args": ["numberOfTags"],
    "difficulty": "Hard",
    "category": "Recursion",
    "text": `<p className="flex mb-2">
      Write a function that takes in a positive integer
      numberOfTags and returns a list of all the valid strings that
      you can generate with that number of matched
      div/div tags.
    </p>
    <p className="flex mb-2">
      A string is valid and contains matched
      div/div tags if for every opening tag
      div, there's a closing tag /div
      that comes after the opening tag and that isn't used as a closing tag for
      another opening tag. Each output string should contain exactly
      numberOfTags opening tags and numberOfTags closing
      tags.
    </p>
    <p className="flex mb-2">
      For example, given numberOfTags = 2, the valid strings to
      return would be: ["div/divdiv/div", "divdiv/div/div"].
    </p>
    <p className="flex mb-2">Note that the output strings don't need to be in any particular order.</p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "numberOfTags": 3
        },
        "output": ["<div><div><div></div></div></div>", "<div><div></div><div></div></div>", "<div><div></div></div><div></div>", "<div></div><div><div></div></div>", "<div></div><div></div><div></div>"]
      },
      {
        "input": {
          "numberOfTags": 2
        },
        "output": ["<div><div></div></div>", "<div></div><div></div>"]
      },
      {
        "input": {
          "numberOfTags": 1
        },
        "output": ["<div></div>"]
      },
      {
        "input": {
          "numberOfTags": 4
        },
        "output": ["<div><div><div><div></div></div></div></div>", "<div><div><div></div><div></div></div></div>", "<div><div><div></div></div><div></div></div>", "<div><div><div></div></div></div><div></div>", "<div><div></div><div><div></div></div></div>", "<div><div></div><div></div><div></div></div>", "<div><div></div><div></div></div><div></div>", "<div><div></div></div><div><div></div></div>", "<div><div></div></div><div></div><div></div>", "<div></div><div><div><div></div></div></div>", "<div></div><div><div></div><div></div></div>", "<div></div><div><div></div></div><div></div>", "<div></div><div></div><div><div></div></div>", "<div></div><div></div><div></div><div></div>"]
      }
    ]
  },
  {
    "title": "Number Of Binary Tree Topologies",
    "functionName": "numberOfBinaryTreeTopologies",
    "args": ["n"],
    "difficulty": "Very Hard",
    "category": "Recursion",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-negative integer n and
      returns the number of possible Binary Tree topologies that can be created with
      exactly n nodes.
    </p>
    <p className="flex mb-2">
      A Binary Tree topology is defined as any Binary Tree configuration,
      irrespective of node values. For instance, there exist only two Binary Tree
      topologies when n is equal to 2: a root node with a
      left node, and a root node with a right node.
    </p>
    <p className="flex mb-2">
      Note that when n is equal to 0, there's one topology
      that can be created: the None / null node.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "n": 3
        },
        "output": 5
      },
      {
        "input": {
          "n": 0
        },
        "output": 1
      },
      {
        "input": {
          "n": 1
        },
        "output": 1
      },
      {
        "input": {
          "n": 2
        },
        "output": 2
      },
      {
        "input": {
          "n": 4
        },
        "output": 14
      },
      {
        "input": {
          "n": 5
        },
        "output": 42
      },
      {
        "input": {
          "n": 6
        },
        "output": 132
      },
      {
        "input": {
          "n": 7
        },
        "output": 429
      },
      {
        "input": {
          "n": 8
        },
        "output": 1430
      },
      {
        "input": {
          "n": 9
        },
        "output": 4862
      },
      {
        "input": {
          "n": 10
        },
        "output": 16796
      },
      {
        "input": {
          "n": 11
        },
        "output": 58786
      }
    ]
  },
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
  },
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
  },
  {
    "title": "Balanced Brackets",
    "functionName": "balancedBrackets",
    "args": ["string"],
    "difficulty": "Easy",
    "category": "Stacks",
    "text": `<p className="flex mb-2">
      Write a function that takes in a string made up of brackets ((,
      [, {, ), ], and
      }) and other optional characters. The function should return a
      boolean representing whether the string is balanced with regards to brackets.
    </p>
    <p className="flex mb-2">
      A string is said to be balanced if it has as many opening brackets of a
      certain type as it has closing brackets of that type and if no bracket is
      unmatched. Note that an opening bracket can't match a corresponding closing
      bracket that comes before it, and similarly, a closing bracket can't match a
      corresponding opening bracket that comes after it. Also, brackets can't
      overlap each other as in
      [(]).
    </p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "string": "([])(){}(())()()"
        },
        "output": true
      },
      {
        "input": {
          "string": "()[]{}{"
        },
        "output": false
      },
      {
        "input": {
          "string": "(((((({{{{{[[[[[([)])]]]]]}}}}}))))))"
        },
        "output": false
      },
      {
        "input": {
          "string": "()()[{()})]"
        },
        "output": false
      },
      {
        "input": {
          "string": "(()())((()()()))"
        },
        "output": true
      },
      {
        "input": {
          "string": "{}()"
        },
        "output": true
      },
      {
        "input": {
          "string": "()([])"
        },
        "output": true
      },
      {
        "input": {
          "string": "((){{{{[]}}}})"
        },
        "output": true
      },
      {
        "input": {
          "string": "((({})()))"
        },
        "output": true
      },
      {
        "input": {
          "string": "(([]()()){})"
        },
        "output": true
      },
      {
        "input": {
          "string": "(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())"
        },
        "output": true
      },
      {
        "input": {
          "string": "{[[[[({(}))]]]]}"
        },
        "output": false
      }
    ]
  },
  {
    "title": "Palindrome Check",
    "functionName": "palindromeCheck",
    "args": ["string"],
    "difficulty": "Easy",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty string and that returns a boolean
      representing whether the string is a palindrome.
    </p>
    <p className="flex mb-2">
      A palindrome is defined as a string that's written the same forward and
      backward. Note that single-character strings are palindromes.
    </p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "string": "abcdcba"
        },
        "output": true
      },
      {
        "input": {
          "string": "a"
        },
        "output": true
      },
      {
        "input": {
          "string": "ab"
        },
        "output": false
      },
      {
        "input": {
          "string": "aba"
        },
        "output": true
      },
      {
        "input": {
          "string": "abb"
        },
        "output": false
      },
      {
        "input": {
          "string": "abba"
        },
        "output": true
      },
      {
        "input": {
          "string": "abcdefghhgfedcba"
        },
        "output": true
      },
      {
        "input": {
          "string": "abcdefghihgfedcba"
        },
        "output": true
      },
      {
        "input": {
          "string": "abcdefghihgfeddcba"
        },
        "output": false
      }
    ]
  },
  {
    "title": "Caesar Cipher Encryptor",
    "functionName": "caesarCipherEncryptor",
    "args": ["string", "key"],
    "difficulty": "Easy",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Given a non-empty string of lowercase letters and a non-negative integer
      representing a key, write a function that returns a new string obtained by
      shifting every letter in the input string by k positions in the alphabet,
      where k is the key.
    </p>
    <p className="flex mb-2">
      Note that letters should "wrap" around the alphabet; in other words, the
      letter z shifted by one returns the letter a.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "xyz",
          "key": 2
        },
        "output": "zab"
      },
      {
        "input": {
          "string": "abc",
          "key": 0
        },
        "output": "abc"
      },
      {
        "input": {
          "string": "abc",
          "key": 3
        },
        "output": "def"
      },
      {
        "input": {
          "string": "xyz",
          "key": 5
        },
        "output": "cde"
      },
      {
        "input": {
          "string": "abc",
          "key": 26
        },
        "output": "abc"
      },
      {
        "input": {
          "string": "abc",
          "key": 52
        },
        "output": "abc"
      },
      {
        "input": {
          "string": "abc",
          "key": 57
        },
        "output": "fgh"
      },
      {
        "input": {
          "string": "xyz",
          "key": 25
        },
        "output": "wxy"
      },
      {
        "input": {
          "string": "iwufqnkqkqoolxzzlzihqfm",
          "key": 25
        },
        "output": "hvtepmjpjpnnkwyykyhgpel"
      },
      {
        "input": {
          "string": "ovmqkwtujqmfkao",
          "key": 52
        },
        "output": "ovmqkwtujqmfkao"
      },
      {
        "input": {
          "string": "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf",
          "key": 7
        },
        "output": "tcrshocqjuidxcabatmhmrdpbhnqrgtgdnm"
      },
      {
        "input": {
          "string": "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh",
          "key": 15
        },
        "output": "zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw"
      }
    ]
  },
  {
    "title": "Run-Length Encoding",
    "functionName": "runLengthEncoding",
    "args": ["string"],
    "difficulty": "Easy",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty string and returns its run-length
      encoding.
    </p>
    <p className="flex mb-2">
      From Wikipedia, "run-length encoding is a form of lossless data compression in
      which runs of data are stored as a single data value and count, rather than as
      the original run." For this problem, a run of data is any sequence of
      consecutive, identical characters. So the run "AAA" would be
      run-length-encoded as "3A".
    </p>
    <p className="flex mb-2">
      To make things more complicated, however, the input string can contain all
      sorts of special characters, including numbers. And since encoded data must be
      decodable, this means that we can't naively run-length-encode long runs. For
      example, the run "AAAAAAAAAAAA" (12 As), can't
      naively be encoded as "12A", since this string can be decoded as
      either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs
      of 10 or more characters) should be encoded in a split fashion; the
      aforementioned run should be encoded as "9A3A".
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "AAAAAAAAAAAAABBCCCCDD"
        },
        "output": "9A4A2B4C2D"
      },
      {
        "input": {
          "string": "aA"
        },
        "output": "1a1A"
      },
      {
        "input": {
          "string": "122333"
        },
        "output": "112233"
      },
      {
        "input": {
          "string": "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"
        },
        "output": "9*3*7^6$7%6!9A9A2A"
      },
      {
        "input": {
          "string": "aAaAaaaaaAaaaAAAABbbbBBBB"
        },
        "output": "1a1A1a1A5a1A3a4A1B3b4B"
      },
      {
        "input": {
          "string": "                          "
        },
        "output": "9 9 8 "
      },
      {
        "input": {
          "string": "1  222 333    444  555"
        },
        "output": "112 321 334 342 35"
      },
      {
        "input": {
          "string": "1A2BB3CCC4DDDD"
        },
        "output": "111A122B133C144D"
      },
      {
        "input": {
          "string": "........______=========AAAA   AAABBBB   BBB"
        },
        "output": "8.6_9=4A3 3A4B3 3B"
      },
      {
        "input": {
          "string": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        "output": "9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a"
      },
      {
        "input": {
          "string": "        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        "output": "8 9a9a9a9a9a4a"
      },
      {
        "input": {
          "string": " "
        },
        "output": "1"
      }
    ]
  },
  {
    "title": "Common Characters",
    "functionName": "commonCharacters",
    "args": ["strings"],
    "difficulty": "Easy",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a non-empty list of non-empty strings and
      returns a list of characters that are common to all strings in the list,
      ignoring multiplicity.
    </p>
    <p className="flex mb-2">
      Note that the strings are not guaranteed to only contain alphanumeric characters. The list
      you return can be in any order.
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "strings": ["abc", "bcd", "cbad"]
        },
        "output": ["b", "c"]
      },
      {
        "input": {
          "strings": ["a"]
        },
        "output": ["a"]
      },
      {
        "input": {
          "strings": ["a", "b", "c"]
        },
        "output": []
      },
      {
        "input": {
          "strings": ["aa", "aa"]
        },
        "output": ["a"]
      },
      {
        "input": {
          "strings": ["aaaa", "a"]
        },
        "output": ["a"]
      },
      {
        "input": {
          "strings": ["abcde", "aa", "foobar", "foobaz", "and this is a string", "aaaaaaaa", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea"]
        },
        "output": ["a"]
      },
      {
        "input": {
          "strings": ["abcdef", "fedcba", "abcefd", "aefbcd", "efadbc", "effffffffffffbcda", "eeeeeffffffbbbbbaaaaaccccdddd", "**************abdcef************"]
        },
        "output": ["a", "b", "c", "d", "e", "f"]
      },
      {
        "input": {
          "strings": ["ab&cdef!", "f!ed&cba", "a&bce!d", "ae&fb!cd", "efa&!dbc", "eff!&fff&fffffffbcda", "eeee!efff&fffbbbbbaaaaaccccdddd", "*******!***&****abdcef************", "*******!***&****a***********f*", "*******!***&****b***********c*"]
        },
        "output": ["!", "&"]
      },
      {
        "input": {
          "strings": ["*abcd", "def*", "******d*****"]
        },
        "output": ["*", "d"]
      },
      {
        "input": {
          "strings": ["*abc!d", "de!f*", "**!!!****d*****"]
        },
        "output": ["!", "*", "d"]
      }
    ]
  },
  {
    "title": "Generate Document",
    "functionName": "generateDocument",
    "args": ["characters", "document"],
    "difficulty": "Easy",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      You're given a string of available characters and a string representing a
      document that you need to generate. Write a function that determines if you
      can generate the document using the available characters. If you can generate
      the document, your function should return true; otherwise, it
      should return false.
    </p>
    <p className="flex mb-2">
      You're only able to generate the document if the frequency of unique
      characters in the characters string is greater than or equal to the frequency
      of unique characters in the document string. For example, if you're given
      characters = "abcabc" and document = "aabbccc" you
      <b>cannot</b> generate the document because you're missing one c.
    </p>
    <p className="flex mb-2">
      The document that you need to create may contain any characters, including
      special characters, capital letters, numbers, and spaces.
    </p>
    <p className="flex mb-2">Note: you can always generate the empty string ("").</p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "characters": "Bste!hetsi ogEAxpelrt x ",
          "document": "AlgoExpert is the Best!"
        },
        "output": true
      },
      {
        "input": {
          "characters": "A",
          "document": "a"
        },
        "output": false
      },
      {
        "input": {
          "characters": "a",
          "document": "a"
        },
        "output": true
      },
      {
        "input": {
          "characters": "a hsgalhsa sanbjksbdkjba kjx",
          "document": ""
        },
        "output": true
      },
      {
        "input": {
          "characters": " ",
          "document": "hello"
        },
        "output": false
      },
      {
        "input": {
          "characters": "     ",
          "document": "     "
        },
        "output": true
      },
      {
        "input": {
          "characters": "aheaollabbhb",
          "document": "hello"
        },
        "output": true
      },
      {
        "input": {
          "characters": "aheaolabbhb",
          "document": "hello"
        },
        "output": false
      },
      {
        "input": {
          "characters": "estssa",
          "document": "testing"
        },
        "output": false
      },
      {
        "input": {
          "characters": "Bste!hetsi ogEAxpert",
          "document": "AlgoExpert is the Best!"
        },
        "output": false
      },
      {
        "input": {
          "characters": "helloworld ",
          "document": "hello wOrld"
        },
        "output": false
      },
      {
        "input": {
          "characters": "helloworldO",
          "document": "hello wOrld"
        },
        "output": false
      }
    ]
  },
  {
    "title": "First Non-repeating Character",
    "functionName": "firstNonRepeatingCharacter",
    "args": ["string"],
    "difficulty": "Easy",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a string of lowercase English-alphabet letters
      and returns the index of the string's first non-repeating character.
    </p>
    <p className="flex mb-2">
      The first non-repeating character is the first character in a string that
      occurs only once.
    </p>
    <p className="flex mb-2">
      If the input string doesn't have any non-repeating characters, your function
      should return -1.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "abcdcaf"
        },
        "output": 1
      },
      {
        "input": {
          "string": "faadabcbbebdf"
        },
        "output": 6
      },
      {
        "input": {
          "string": "a"
        },
        "output": 0
      },
      {
        "input": {
          "string": "ab"
        },
        "output": 0
      },
      {
        "input": {
          "string": "abc"
        },
        "output": 0
      },
      {
        "input": {
          "string": "abac"
        },
        "output": 1
      },
      {
        "input": {
          "string": "ababac"
        },
        "output": 5
      },
      {
        "input": {
          "string": "ababacc"
        },
        "output": -1
      },
      {
        "input": {
          "string": "lmnopqldsafmnopqsa"
        },
        "output": 7
      },
      {
        "input": {
          "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"
        },
        "output": 25
      },
      {
        "input": {
          "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
        },
        "output": -1
      },
      {
        "input": {
          "string": ""
        },
        "output": -1
      }
    ]
  },
  {
    "title": "Semordnilap",
    "functionName": "semordnilap",
    "args": ["words"],
    "difficulty": "Easy",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a list of unique strings and returns a list of
      semordnilap pairs.
    </p>
    <p className="flex mb-2">
      A semordnilap pair is defined as a set of different strings where the reverse
      of one word is the same as the forward version of the other. For example the
      words "diaper" and "repaid" are a semordnilap pair, as are the words
      "palindromes" and "semordnilap".
    </p>
    <p className="flex mb-2">
      The order of the returned pairs and the order of the strings within each pair
      does not matter.
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "words": []
        },
        "output": []
      },
      {
        "input": {
          "words": ["aaa", "bbbb"]
        },
        "output": []
      },
      {
        "input": {
          "words": ["dog", "god"]
        },
        "output": [
          ["dog", "god"]
        ]
      },
      {
        "input": {
          "words": ["dog", "hello", "god"]
        },
        "output": [
          ["dog", "god"]
        ]
      },
      {
        "input": {
          "words": ["dog", "desserts", "god", "stressed"]
        },
        "output": [
          ["dog", "god"],
          ["desserts", "stressed"]
        ]
      },
      {
        "input": {
          "words": ["dog", "hello", "desserts", "test", "god", "stressed"]
        },
        "output": [
          ["dog", "god"],
          ["desserts", "stressed"]
        ]
      },
      {
        "input": {
          "words": ["abcde", "edcba", "edbc", "edb", "cbde", "abc"]
        },
        "output": [
          ["abcde", "edcba"],
          ["cbde", "edbc"]
        ]
      },
      {
        "input": {
          "words": ["abcde", "bcd", "dcb", "edcba", "aaa"]
        },
        "output": [
          ["abcde", "edcba"],
          ["bcd", "dcb"]
        ]
      },
      {
        "input": {
          "words": ["abcdefghijk", "aaa", "hello", "racecar", "kjihgfedcba"]
        },
        "output": [
          ["abcdefghijk", "kjihgfedcba"]
        ]
      },
      {
        "input": {
          "words": ["liver", "dog", "hello", "desserts", "evil", "test", "god", "stressed", "racecar", "palindromes", "semordnilap", "abcd", "live"]
        },
        "output": [
          ["dog", "god"],
          ["desserts", "stressed"],
          ["evil", "live"],
          ["palindromes", "semordnilap"]
        ]
      }
    ]
  },
  {
    "title": "Longest Palindromic Substring",
    "functionName": "longestPalindromicSubstring",
    "args": ["string"],
    "difficulty": "Medium",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that, given a string, returns its longest palindromic
      substring.
    </p>
    <p className="flex mb-2">
      A palindrome is defined as a string that's written the same forward and
      backward. Note that single-character strings are palindromes.
    </p>
    <p className="flex mb-2">You can assume that there will only be one longest palindromic substring.</p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "abaxyzzyxf"
        },
        "output": "xyzzyx"
      },
      {
        "input": {
          "string": "a"
        },
        "output": "a"
      },
      {
        "input": {
          "string": "it's highnoon"
        },
        "output": "noon"
      },
      {
        "input": {
          "string": "noon high it is"
        },
        "output": "noon"
      },
      {
        "input": {
          "string": "abccbait's highnoon"
        },
        "output": "abccba"
      },
      {
        "input": {
          "string": "abcdefgfedcbazzzzzzzzzzzzzzzzzzzz"
        },
        "output": "zzzzzzzzzzzzzzzzzzzz"
      },
      {
        "input": {
          "string": "abcdefgfedcba"
        },
        "output": "abcdefgfedcba"
      },
      {
        "input": {
          "string": "abcdefghfedcbaa"
        },
        "output": "aa"
      },
      {
        "input": {
          "string": "abcdefggfedcba"
        },
        "output": "abcdefggfedcba"
      },
      {
        "input": {
          "string": "zzzzzzz2345abbbba5432zzbbababa"
        },
        "output": "zz2345abbbba5432zz"
      },
      {
        "input": {
          "string": "z234a5abbbba54a32z"
        },
        "output": "5abbbba5"
      },
      {
        "input": {
          "string": "z234a5abbba54a32z"
        },
        "output": "5abbba5"
      }
    ]
  },
  {
    "title": "Group Anagrams",
    "functionName": "groupAnagrams",
    "args": ["words"],
    "difficulty": "Medium",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in an array of strings and groups anagrams together.
    </p>
    <p className="flex mb-2">
      Anagrams are strings made up of exactly the same letters, where order doesn't
      matter. For example, "cinema" and "iceman" are
      anagrams; similarly, "foo" and "ofo" are anagrams.
    </p>
    <p className="flex mb-2">
      Your function should return a list of anagram groups in no particular order.
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "words": ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
        },
        "output": [
          ["foo"],
          ["flop", "olfp"],
          ["oy", "yo"],
          ["act", "cat", "tac"]
        ]
      },
      {
        "input": {
          "words": []
        },
        "output": []
      },
      {
        "input": {
          "words": ["test"]
        },
        "output": [
          ["test"]
        ]
      },
      {
        "input": {
          "words": ["abc", "dabd", "bca", "cab", "ddba"]
        },
        "output": [
          ["dabd", "ddba"],
          ["abc", "bca", "cab"]
        ]
      },
      {
        "input": {
          "words": ["abc", "cba", "bca"]
        },
        "output": [
          ["abc", "bca", "cba"]
        ]
      },
      {
        "input": {
          "words": ["zxc", "asd", "weq", "sda", "qwe", "xcz"]
        },
        "output": [
          ["asd", "sda"],
          ["qwe", "weq"],
          ["xcz", "zxc"]
        ]
      },
      {
        "input": {
          "words": ["cinema", "a", "flop", "iceman", "meacyne", "lofp", "olfp"]
        },
        "output": [
          ["a"],
          ["meacyne"],
          ["cinema", "iceman"],
          ["flop", "lofp", "olfp"]
        ]
      },
      {
        "input": {
          "words": ["abc", "abe", "abf", "abg"]
        },
        "output": [
          ["abc"],
          ["abe"],
          ["abf"],
          ["abg"]
        ]
      },
      {
        "input": {
          "words": ["aaa", "a"]
        },
        "output": [
          ["a"],
          ["aaa"]
        ]
      },
      {
        "input": {
          "words": ["bob", "boo"]
        },
        "output": [
          ["bob"],
          ["boo"]
        ]
      },
      {
        "input": {
          "words": ["ill", "duh"]
        },
        "output": [
          ["duh"],
          ["ill"]
        ]
      },
      {
        "input": {
          "words": ["yo", "oy", "zn"]
        },
        "output": [
          ["zn"],
          ["oy", "yo"]
        ]
      }
    ]
  },
  {
    "title": "Valid IP Address",
    "functionName": "validIpAddress",
    "args": ["string"],
    "difficulty": "Medium",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      You're given a string of length 12 or smaller, containing only digits. Write a
      function that returns all the possible IP addresses that can be created by
      inserting three .s in the string.
    </p>
    <p className="flex mb-2">
      An IP address is a sequence of four positive integers that are separated by
      .s, where each individual integer is within the range
      0 - 255, inclusive.
    </p>
    <p className="flex mb-2">
      An IP address isn't valid if any of the individual integers contains leading
      0s. For example, "192.168.0.1" is a valid IP
      address, but "192.168.00.1" and
      "192.168.0.01" aren't, because they contain "00" and
      01, respectively. Another example of a valid IP address is
      "99.1.1.10"; conversely, "991.1.1.0" isn't valid,
      because "991" is greater than 255.
    </p>
    <p className="flex mb-2">
      Your function should return the IP addresses in string format and in no
      particular order. If no valid IP addresses can be created from the string,
      your function should return an empty list.
    </p>
    <p className="flex mb-2">
      Note: check out our Systems Design Fundamentals on SystemsExpert to learn more
      about IP addresses!
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "string": "1921680"
        },
        "output": ["1.9.216.80", "1.92.16.80", "1.92.168.0", "19.2.16.80", "19.2.168.0", "19.21.6.80", "19.21.68.0", "19.216.8.0", "192.1.6.80", "192.1.68.0", "192.16.8.0"]
      },
      {
        "input": {
          "string": "3700100"
        },
        "output": ["3.70.0.100", "37.0.0.100"]
      },
      {
        "input": {
          "string": "9743"
        },
        "output": ["9.7.4.3"]
      },
      {
        "input": {
          "string": "97430"
        },
        "output": ["9.7.4.30", "9.7.43.0", "9.74.3.0", "97.4.3.0"]
      },
      {
        "input": {
          "string": "997430"
        },
        "output": ["9.9.74.30", "9.97.4.30", "9.97.43.0", "99.7.4.30", "99.7.43.0", "99.74.3.0"]
      },
      {
        "input": {
          "string": "255255255255"
        },
        "output": ["255.255.255.255"]
      },
      {
        "input": {
          "string": "255255255256"
        },
        "output": []
      },
      {
        "input": {
          "string": "99999999"
        },
        "output": ["99.99.99.99"]
      },
      {
        "input": {
          "string": "33133313"
        },
        "output": ["33.13.33.13", "33.133.3.13", "33.133.31.3"]
      },
      {
        "input": {
          "string": "00010"
        },
        "output": ["0.0.0.10"]
      },
      {
        "input": {
          "string": "100100"
        },
        "output": ["1.0.0.100", "10.0.10.0", "100.1.0.0"]
      },
      {
        "input": {
          "string": "1072310"
        },
        "output": ["10.7.23.10", "10.7.231.0", "10.72.3.10", "10.72.31.0", "107.2.3.10", "107.2.31.0", "107.23.1.0"]
      }
    ]
  },
  {
    "title": "Reverse Words In String",
    "functionName": "reverseWordsInString",
    "args": ["string"],
    "difficulty": "Medium",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a string of words separated by one or more
      whitespaces and returns a string that has these words in reverse order. For
      example, given the string "tim is great", your function should
      return "great is tim".
    </p>
    <p className="flex mb-2">
      For this problem, a word can contain special characters, punctuation, and
      numbers. The words in the string will be separated by one or more whitespaces,
      and the reversed string must contain the same whitespaces as the original
      string. For example, given the string
      "whitespaces    4" you would be expected to return
      "4    whitespaces".
    </p>
    <p className="flex mb-2">
      Note that you're <b><i>not</i></b> allowed to to use any built-in
      split or reverse methods/functions. However, you
      <b><i>are</i></b> allowed to use a built-in join method/function.
    </p>
    <p className="flex mb-2">Also note that the input string isn't guaranteed to always contain words.</p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "AlgoExpert is the best!"
        },
        "output": "best! the is AlgoExpert"
      },
      {
        "input": {
          "string": "Reverse These Words"
        },
        "output": "Words These Reverse"
      },
      {
        "input": {
          "string": "..H,, hello 678"
        },
        "output": "678 hello ..H,,"
      },
      {
        "input": {
          "string": "this this words this this this words this"
        },
        "output": "this words this this this words this this"
      },
      {
        "input": {
          "string": "1 12 23 34 56"
        },
        "output": "56 34 23 12 1"
      },
      {
        "input": {
          "string": "APPLE PEAR PLUM ORANGE"
        },
        "output": "ORANGE PLUM PEAR APPLE"
      },
      {
        "input": {
          "string": "this-is-one-word"
        },
        "output": "this-is-one-word"
      },
      {
        "input": {
          "string": "a"
        },
        "output": "a"
      },
      {
        "input": {
          "string": "ab"
        },
        "output": "ab"
      },
      {
        "input": {
          "string": ""
        },
        "output": ""
      },
      {
        "input": {
          "string": "algoexpert is the best platform to use to prepare for coding interviews!"
        },
        "output": "interviews! coding for prepare to use to platform best the is algoexpert"
      },
      {
        "input": {
          "string": "words, separated, by, commas"
        },
        "output": "commas by, separated, words,"
      }
    ]
  },
  {
    "title": "Minimum Characters For Word",
    "functionName": "minimumCharactersForWord",
    "args": ["words"],
    "difficulty": "Medium",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in an array of words and returns the smallest
      array of characters needed to form all of the words. The characters don't need
      to be in any particular order.
    </p>
    <p className="flex mb-2">
      For example, the characters ["y", "r", "o", "u"] are needed to
      form the words ["your", "you", "or", "yo"].
    </p>
    <p className="flex mb-2">
      Note: the input words won't contain any spaces; however, they might contain
      punctuation and/or special characters.
    </p>`,
    "comparisonType": ComparisonType.UNORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "words": ["this", "that", "did", "deed", "them!", "a"]
        },
        "output": ["!", "a", "d", "d", "e", "e", "h", "i", "m", "s", "t", "t"]
      },
      {
        "input": {
          "words": ["a", "abc", "ab", "boo"]
        },
        "output": ["a", "b", "c", "o", "o"]
      },
      {
        "input": {
          "words": ["a"]
        },
        "output": ["a"]
      },
      {
        "input": {
          "words": ["abc", "ab", "b", "bac", "c"]
        },
        "output": ["a", "b", "c"]
      },
      {
        "input": {
          "words": ["!!!2", "234", "222", "432"]
        },
        "output": ["!", "!", "!", "2", "2", "2", "3", "4"]
      },
      {
        "input": {
          "words": ["this", "that", "they", "them", "their", "there", "time", "is"]
        },
        "output": ["a", "e", "e", "h", "i", "m", "r", "s", "t", "t", "y"]
      },
      {
        "input": {
          "words": ["tim", "is", "great"]
        },
        "output": ["a", "e", "g", "i", "m", "r", "s", "t"]
      },
      {
        "input": {
          "words": ["abc", "bavcc", "aaaa", "cde", "efg", "gead"]
        },
        "output": ["a", "a", "a", "a", "b", "c", "c", "d", "e", "f", "g", "v"]
      },
      {
        "input": {
          "words": ["a", "a", "a"]
        },
        "output": ["a"]
      },
      {
        "input": {
          "words": ["them", "they", "that", "that", "yes", "yo", "no", "boo", "you", "okay", "too"]
        },
        "output": ["a", "b", "e", "h", "k", "m", "n", "o", "o", "s", "t", "t", "u", "y"]
      },
      {
        "input": {
          "words": ["cta", "cat", "tca", "tac", "a", "c", "t"]
        },
        "output": ["a", "c", "t"]
      },
      {
        "input": {
          "words": ["my", "coding", "skills", "are", "great"]
        },
        "output": ["a", "c", "d", "e", "g", "i", "k", "l", "l", "m", "n", "o", "r", "s", "s", "t", "y"]
      }
    ]
  },
  {
    "title": "One Edit",
    "functionName": "oneEdit",
    "args": ["stringOne", "stringTwo"],
    "difficulty": "Medium",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      You're given two strings stringOne and stringTwo.
      Write a function that determines if these two strings can be made equal
      using only one edit.
    </p>
    <p className="flex mb-2">
    There are 3 possible edits:
    </p>
    <ul>
      <li>
        <b>Replace</b>: One character in one string is swapped for a different
        character.
      </li>
      <li>
        <b>Add</b>: One character is added at any index in one string.
      </li>
      <li>
        <b>Remove</b>: One character is removed at any index in one string.
      </li>
    </ul>
    <p className="flex mb-2"></p>
    <p className="flex mb-2">
      Note that both strings will contain at least one character. If the strings
      are the same, your function should return true.
    </p>`,
    "comparisonType": "BOOLEAN",
    "testCases": [
      {
        "input": {
          "stringOne": "a",
          "stringTwo": "a"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "aaa",
          "stringTwo": "aaa"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "a",
          "stringTwo": "b"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "ab",
          "stringTwo": "b"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "abc",
          "stringTwo": "b"
        },
        "output": false
      },
      {
        "input": {
          "stringOne": "ab",
          "stringTwo": "a"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "b",
          "stringTwo": "ab"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "bb",
          "stringTwo": "a"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "a",
          "stringTwo": "ab"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "bb",
          "stringTwo": "ab"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "ab",
          "stringTwo": "bb"
        },
        "output": true
      },
      {
        "input": {
          "stringOne": "hello",
          "stringTwo": "helo"
        },
        "output": true
      }
    ]
  },
  {
    "title": "Longest Substring Without Duplication",
    "functionName": "longestSubstringWithoutDuplication",
    "args": ["string"],
    "difficulty": "Hard",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a string and returns its longest substring
      without duplicate characters.
    </p>
    <p className="flex mb-2">You can assume that there will only be one longest substring without duplication.</p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "clementisacap"
        },
        "output": "mentisac"
      },
      {
        "input": {
          "string": "a"
        },
        "output": "a"
      },
      {
        "input": {
          "string": "abc"
        },
        "output": "abc"
      },
      {
        "input": {
          "string": "abcb"
        },
        "output": "abc"
      },
      {
        "input": {
          "string": "abcdeabcdefc"
        },
        "output": "abcdef"
      },
      {
        "input": {
          "string": "abccdeaabbcddef"
        },
        "output": "cdea"
      },
      {
        "input": {
          "string": "abacacacaaabacaaaeaaafa"
        },
        "output": "bac"
      },
      {
        "input": {
          "string": "abcdabcef"
        },
        "output": "dabcef"
      },
      {
        "input": {
          "string": "abcbde"
        },
        "output": "cbde"
      },
      {
        "input": {
          "string": "clementisanarm"
        },
        "output": "mentisa"
      }
    ]
  },
  {
    "title": "Underscorify Substring",
    "functionName": "underscorifySubstring",
    "args": ["string", "substring"],
    "difficulty": "Hard",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in two strings: a main string and a potential
      substring of the main string. The function should return a version of the main
      string with every instance of the substring in it wrapped between underscores.
    </p>
    <p className="flex mb-2">
      If two or more instances of the substring in the main string overlap each
      other or sit side by side, the underscores relevant to these substrings should
      only appear on the far left of the leftmost substring and on the far right of
      the rightmost substring. If the main string doesn't contain the other string
      at all, the function should return the main string intact.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "testthis is a testtest to see if testestest it works",
          "substring": "test"
        },
        "output": "_test_this is a _testtest_ to see if _testestest_ it works"
      },
      {
        "input": {
          "string": "this is a test to see if it works",
          "substring": "test"
        },
        "output": "this is a _test_ to see if it works"
      },
      {
        "input": {
          "string": "test this is a test to see if it works",
          "substring": "test"
        },
        "output": "_test_ this is a _test_ to see if it works"
      },
      {
        "input": {
          "string": "testthis is a test to see if it works",
          "substring": "test"
        },
        "output": "_test_this is a _test_ to see if it works"
      },
      {
        "input": {
          "string": "testthis is a testest to see if testestes it works",
          "substring": "test"
        },
        "output": "_test_this is a _testest_ to see if _testest_es it works"
      },
      {
        "input": {
          "string": "this is a test to see if it works and test",
          "substring": "test"
        },
        "output": "this is a _test_ to see if it works and _test_"
      },
      {
        "input": {
          "string": "this is a test to see if it works and test",
          "substring": "bfjawkfja"
        },
        "output": "this is a test to see if it works and test"
      },
      {
        "input": {
          "string": "ttttttttttttttbtttttctatawtatttttastvb",
          "substring": "ttt"
        },
        "output": "_tttttttttttttt_b_ttttt_ctatawta_ttttt_astvb"
      },
      {
        "input": {
          "string": "tzttztttz",
          "substring": "ttt"
        },
        "output": "tzttz_ttt_z"
      },
      {
        "input": {
          "string": "abababababababababababababaababaaabbababaa",
          "substring": "a"
        },
        "output": "_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_aa_b_a_b_aaa_bb_a_b_a_b_aa_"
      },
      {
        "input": {
          "string": "abcabcabcabcabcabcabcabcabcabcabcabcabcabc",
          "substring": "abc"
        },
        "output": "_abcabcabcabcabcabcabcabcabcabcabcabcabcabc_"
      }
    ]
  },
  {
    "title": "Pattern Matcher",
    "functionName": "patternMatcher",
    "args": ["pattern", "string"],
    "difficulty": "Hard",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      You're given two non-empty strings. The first one is a pattern consisting of
      only "x"s and / or "y"s; the other one is a normal
      string of alphanumeric characters. Write a function that checks whether the
      normal string matches the pattern.
    </p>
    <p className="flex mb-2">
      A string S0 is said to match a pattern if replacing all
      "x"s in the pattern with some non-empty substring
      S1 of S0 and replacing all "y"s in the
      pattern with some non-empty substring S2 of
      S0 yields the same string S0.
    </p>
    <p className="flex mb-2">
      If the input string doesn't match the input pattern, the function should
      return an empty array; otherwise, it should return an array holding the
      strings S1 and S2 that represent
      "x" and "y" in the normal string, in that order. If
      the pattern doesn't contain any "x"s or "y"s, the
      respective letter should be represented by an empty string in the final array
      that you return.
    </p>
    <p className="flex mb-2">
      You can assume that there will never be more than one pair of strings
      S1 and S2 that appropriately represent
      "x" and "y" in the normal string.
    </p>`,
    "comparisonType": ComparisonType.ORDERED_ARRAY,
    "testCases": [
      {
        "input": {
          "pattern": "xxyxxy",
          "string": "gogopowerrangergogopowerranger"
        },
        "output": ["go", "powerranger"]
      },
      {
        "input": {
          "pattern": "xyxy",
          "string": "abab"
        },
        "output": ["a", "b"]
      },
      {
        "input": {
          "pattern": "yxyx",
          "string": "abab"
        },
        "output": ["b", "a"]
      },
      {
        "input": {
          "pattern": "yxx",
          "string": "yomama"
        },
        "output": ["ma", "yo"]
      },
      {
        "input": {
          "pattern": "yyxyyx",
          "string": "gogopowerrangergogopowerranger"
        },
        "output": ["powerranger", "go"]
      },
      {
        "input": {
          "pattern": "xyx",
          "string": "thisshouldobviouslybewrong"
        },
        "output": []
      },
      {
        "input": {
          "pattern": "xxxx",
          "string": "testtesttesttest"
        },
        "output": ["test", ""]
      },
      {
        "input": {
          "pattern": "yyyy",
          "string": "testtesttesttest"
        },
        "output": ["", "test"]
      },
      {
        "input": {
          "pattern": "xxyxyy",
          "string": "testtestwrongtestwrongtest"
        },
        "output": []
      },
      {
        "input": {
          "pattern": "xyxxxyyx",
          "string": "baddaddoombaddadoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom"
        },
        "output": []
      },
      {
        "input": {
          "pattern": "yxyyyxxy",
          "string": "baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom"
        },
        "output": ["baddaddoomi", "baddaddoom"]
      },
      {
        "input": {
          "pattern": "xyxxxyyx",
          "string": "baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom"
        },
        "output": ["baddaddoom", "baddaddoomi"]
      }
    ]
  },
  {
    "title": "Smallest Substring Containing",
    "functionName": "smallestSubstringContaining",
    "args": ["bigString", "smallString"],
    "difficulty": "Very Hard",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      You're given two non-empty strings: a big string and a small string. Write a
      function that returns the smallest substring in the big string that contains
      all of the small string's characters.
    </p>
    <p className="flex mb-2">
      Note that:
    </p>
    <ul>
      <li>
        The substring can contain other characters not found in the small string.
      </li>
      <li>
        The characters in the substring don't have to be in the same order as they
        appear in the small string.
      </li>
      <li>
        If the small string has duplicate characters, the substring has to contain
        those duplicate characters (it can also contain more, but not fewer).
      </li>
    </ul>
    <p className="flex mb-2">
      You can assume that there will only be one relevant smallest substring.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "bigString": "abcd$ef$axb$c$",
          "smallString": "$$abf"
        },
        "output": "f$axb$"
      },
      {
        "input": {
          "bigString": "abcdef",
          "smallString": "fa"
        },
        "output": "abcdef"
      },
      {
        "input": {
          "bigString": "abcdef",
          "smallString": "d"
        },
        "output": "d"
      },
      {
        "input": {
          "bigString": "abcdefghijklmnopqrstuvwxyz",
          "smallString": "aajjttwwxxzz"
        },
        "output": ""
      },
      {
        "input": {
          "bigString": "abzacdwejxjftghiwjtklmnopqrstuvwxyz",
          "smallString": "aajjttwwxxzz"
        },
        "output": "abzacdwejxjftghiwjtklmnopqrstuvwxyz"
      },
      {
        "input": {
          "bigString": "abzacdwejxjfxztghiwjtklmnopqrstuvwxyz",
          "smallString": "aajjttwwxxzz"
        },
        "output": "abzacdwejxjfxztghiwjt"
      },
      {
        "input": {
          "bigString": "aaaa+a$+aaa++$+++++++aaa",
          "smallString": "a+$aaAaaaa$++"
        },
        "output": ""
      },
      {
        "input": {
          "bigString": "a$fuu+afff+affaffa+a$Affab+a+a+$a$",
          "smallString": "a+$aaAaaaa$++"
        },
        "output": "affa+a$Affab+a+a+$a"
      },
      {
        "input": {
          "bigString": "a$fuu+afff+affaffa+a$Affab+a+a+$a$bccgtt+aaaacA+++aaa$",
          "smallString": "a+$aaAaaaa$++"
        },
        "output": "affa+a$Affab+a+a+$a"
      },
      {
        "input": {
          "bigString": "145624356128828193236336541277356789901",
          "smallString": "123"
        },
        "output": "1932"
      },
      {
        "input": {
          "bigString": "1456243561288281932363365412356789901!",
          "smallString": "123!"
        },
        "output": "2356789901!"
      },
      {
        "input": {
          "bigString": "14562435612!88281932363365$412356789901",
          "smallString": "$123!"
        },
        "output": "!88281932363365$"
      }
    ]
  },
  {
    "title": "Longest Balanced Substring",
    "functionName": "longestBalancedSubstring",
    "args": ["string"],
    "difficulty": "Very Hard",
    "category": "Strings",
    "text": `<p className="flex mb-2">
      Write a function that takes in a string made up of parentheses ((
      and )). The function should return an integer representing the
      length of the longest balanced substring with regards to parentheses.
    </p>
    <p className="flex mb-2">
      A string is said to be balanced if it has as many opening parentheses as it
      has closing parentheses and if no parenthesis is unmatched. Note that an
      opening parenthesis can't match a closing parenthesis that comes before it,
      and similarly, a closing parenthesis can't match an opening parenthesis that
      comes after it.
    </p>`,
    "comparisonType": "VALUE_MATCH",
    "testCases": [
      {
        "input": {
          "string": "(()))("
        },
        "output": 4
      },
      {
        "input": {
          "string": "())()(()())"
        },
        "output": 8
      },
      {
        "input": {
          "string": "()()()()()()()()()()"
        },
        "output": 20
      },
      {
        "input": {
          "string": "((()))()()()()()()()()()()"
        },
        "output": 26
      },
      {
        "input": {
          "string": "()"
        },
        "output": 2
      },
      {
        "input": {
          "string": "(())"
        },
        "output": 4
      },
      {
        "input": {
          "string": "((((((((()))))))))"
        },
        "output": 18
      },
      {
        "input": {
          "string": "((((((((((((((((()))))))))))))))))"
        },
        "output": 34
      },
      {
        "input": {
          "string": "(((()))()())))(()()()())()()"
        },
        "output": 14
      },
      {
        "input": {
          "string": "((((((()()()())()))((())))()"
        },
        "output": 26
      },
      {
        "input": {
          "string": "(("
        },
        "output": 0
      },
      {
        "input": {
          "string": "))"
        },
        "output": 0
      }
    ]
  }
];