export const strings = [
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