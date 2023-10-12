export const graphs = [
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
  }
];