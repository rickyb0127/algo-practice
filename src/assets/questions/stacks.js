export const stacks = [
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
  }
];


// {
//   "title": "Sunset Views",
//   "functionName": "sunsetViews",
//   "args": ["buildings", "direction"],
//   "difficulty": "Easy",
//   "category": "Stacks",
//   "text": `<p className="flex mb-2">
//     Given an array of buildings and a direction that all of the buildings face,
//     return an array of the indices of the buildings that can see the sunset.
//   </p>
//   <p className="flex mb-2">
//     A building can see the sunset if it's strictly taller than all of the
//     buildings that come after it in the direction that it faces.
//   </p>
//   <p className="flex mb-2">
//     The input array named buildings contains positive, non-zero
//     integers representing the heights of the buildings. A building at index
//     i thus has a height denoted by buildings[i]. All of
//     the buildings face the same direction, and this direction is either east or
//     west, denoted by the input string named direction, which will
//     always be equal to either "EAST" or "WEST". In
//     relation to the input array, you can interpret these directions as right for
//     east and left for west.
//   </p>
//   <p className="flex mb-2">
//     Important note: the indices in the ouput array should be sorted in ascending
//     order.
//   </p>`,
//   "comparisonType": "VALUE_MATCH",
//   "testCases": [
//     {
      
//     }
//   ]
// }

// Test Case 1

// {
//   "buildings": [3, 5, 4, 4, 3, 1, 3, 2],
//   "direction": "EAST"
// }

// Test Case 2

// {
//   "buildings": [3, 5, 4, 4, 3, 1, 3, 2],
//   "direction": "WEST"
// }

// Test Case 3

// {
//   "buildings": [10, 11],
//   "direction": "EAST"
// }

// Test Case 4

// {
//   "buildings": [2, 4],
//   "direction": "WEST"
// }

// Test Case 5

// {
//   "buildings": [1],
//   "direction": "EAST"
// }

// Test Case 6

// {
//   "buildings": [1],
//   "direction": "WEST"
// }

// Test Case 7

// {
//   "buildings": [],
//   "direction": "EAST"
// }

// Test Case 8

// {
//   "buildings": [],
//   "direction": "WEST"
// }

// Test Case 9

// {
//   "buildings": [7, 1, 7, 8, 9, 8, 7, 6, 5, 4, 2, 5],
//   "direction": "EAST"
// }

// Test Case 10

// {
//   "buildings": [1, 2, 3, 4, 5, 6],
//   "direction": "EAST"
// }

// Test Case 11

// {
//   "buildings": [1, 2, 3, 4, 5, 6],
//   "direction": "WEST"
// }

// Test Case 12

// {
//   "buildings": [1, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8],
//   "direction": "WEST"
// }