export const greedyAlgorithms = [
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
  }
];