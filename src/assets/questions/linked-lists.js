export const linkedLists = [
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
  }
];