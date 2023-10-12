export const binaryTrees = [
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
  }
];