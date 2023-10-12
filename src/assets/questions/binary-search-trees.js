export const binarySearchTrees = [
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
  }
];