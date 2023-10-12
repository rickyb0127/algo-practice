export const recursion = [
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
  }
];