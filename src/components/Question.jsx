import { useState } from 'react';
import { useLocation } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import parse from 'html-react-parser';
import { ComparisonType } from '../assets/enums';

function Question() {
  const { state } = useLocation();
  const question = state.question || props.question;
  const initialValue = `function ${question.functionName}(${question.args.join(", ")}) {

};`;
  const [codeValue, setCodeValue] = useState(initialValue);

  const getTestResults = () => {
    const comparisonFunctionString = getComparisonFunctionString(question.comparisonType);
    let resultStr = `const comparisonFunction = ${JSON.stringify(comparisonFunctionString)};let numCorrect = 0;document.body.innerHTML += '<div id="results-container" class="results-container"></div><div id="num-correct" style="display:none;"></div><div id="num-questions" style="display:none;"></div>';`;    

    for(let i = 0; i < question.testCases.length; i++) {
      resultStr += `function testCase${i}(args) {
        const submittedAnswer = ${question.functionName}(...Object.values(args.input));
        const isAnswerCorrect = eval(comparisonFunction);
        const testCaseHeader = isAnswerCorrect ? '<div class="test-header-container"><div class="test-passed">Test Case ${i + 1} Passed</div></div>' : '<div class="test-header-container"><div class="test-failed">Test Case ${i + 1} Failed</div></div>';
        const resultDetail = '<div id="expanded-${i}" class="expanded"><div>Test Case: <code>' + JSON.stringify(args.input) + '</code></div><div>Expected Result: <code>' + JSON.stringify(args.output) + '</code></div>Your Result: <code>' + JSON.stringify(submittedAnswer) + '</code><div></div></div>';
        const container = document.getElementById("results-container");
        container.innerHTML += '<div id="result-${i}" class="result"></div>';
        const result = document.getElementById("result-${i}");
        result.innerHTML += testCaseHeader;
        container.innerHTML += resultDetail;
        if(isAnswerCorrect) {
          numCorrect++;
        }
        document.getElementById('num-correct').innerHTML = numCorrect;
        document.getElementById('num-questions').innerHTML = ${i + 1};
        return isAnswerCorrect;
      };

      var result${i} = testCase${i}(${JSON.stringify(question.testCases[i])});`;
    }

    return resultStr;
  };

  const getComparisonFunctionString = (comparisonType) => {
    switch (comparisonType) {
      case ComparisonType.UNORDERED_ARRAY:
        return "submittedAnswer ? submittedAnswer.sort().toString() === args.output.sort().toString() : false;";
      case ComparisonType.ORDERED_ARRAY:
        return "submittedAnswer ? submittedAnswer.toString() === args.output.toString() : false;";
      case ComparisonType.VALUE_MATCH:
      case ComparisonType.OBJECT_MATCH:
      case ComparisonType.BOOLEAN:
        return "submittedAnswer !== null && submittedAnswer !== undefined ? submittedAnswer === args.output : false";
    }
  };

  const binarySearchTreeSetupCode = () => {
    // This is the class of the input tree. Do not edit.
    // return class BST {
    //   constructor(value) {
    //     this.value = value;
    //     this.left = null;
    //     this.right = null;
    //   }
    // };
  }

  const binaryTreeSetupCode = () => {
    // This is the class of the input root. Do not edit it.
    // class BinaryTree {
    //   constructor(value) {
    //     this.value = value;
    //     this.left = null;
    //     this.right = null;
    //   }
    // }
  }

  const graphsSetupCode = () => {
    // Do not edit the class below except
    // for the depthFirstSearch method.
    // Feel free to add new properties
    // and methods to the class.
    // class Node {
    //   constructor(name) {
    //     this.name = name;
    //     this.children = [];
    //   }

    //   addChild(name) {
    //     this.children.push(new Node(name));
    //     return this;
    //   }

    //   depthFirstSearch(array) {
    //     // Write your code here.
    //   }
    // }
  }

  const linkedListsSetupCode = () => {
    // This is an input class. Do not edit.
    // class LinkedList {
    //   constructor(value) {
    //     this.value = value;
    //     this.next = null;
    //   }
    // }
  }
  
  const runCode = () => {
    const iframe = document.getElementById("iframe") || document.createElement("iframe");
    iframe.setAttribute("id", "iframe");
    iframe.setAttribute("style", "height:100%;");
    const iframeContainer = document.getElementById("iframe-container");
    iframeContainer.appendChild(iframe);
    const head = iframe.contentWindow.document.getElementsByTagName("head")[0];

    const scriptTag = document.createElement("script");
    const testResults = getTestResults();
    const fullScript = codeValue + testResults;
    scriptTag.textContent = fullScript;
    scriptTag.type = 'text/javascript';      
    head.append(scriptTag);

    const numCorrect = iframe.contentWindow.document.getElementById("num-correct").innerHTML;
    const numQuestions = iframe.contentWindow.document.getElementById("num-questions").innerHTML;
    const passFailElement = document.createElement('div');
    const passedText = "Hooray All Your Tests Passed!";
    const failedText = `Unfortunately Not All Your Tests Passed: ${numCorrect}/${numQuestions} Correct`;
    const passFailString = `<div style="color:white;text-align:center;"><h2>${numCorrect === numQuestions ? passedText : failedText}</h2></div>`;
    passFailElement.innerHTML = passFailString;
    const resultsContainer = iframe.contentWindow.document.getElementById("results-container");
    resultsContainer.prepend(passFailElement);

    // TODO add click handler to expand/hide resultDetail
    // const testScript = document.createElement("script");
    // testScript.textContent = `
    //   var result = document.getElementById("result-1");
    //   result.addEventListener("click", function(){ alert("Hello World!"); });
    // `;
    // testScript.type = 'text/javascript';      
    // head.append(testScript);

    const fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.rel = "stylesheet";
    fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/solid.min.css";
    fontAwesomeLink.integrity = "sha512-P9pgMgcSNlLb4Z2WAB2sH5KBKGnBfyJnq+bhcfLCFusrRc4XdXrhfDluBl/usq75NF5gTDIMcwI1GaG5gju+Mw==";
    fontAwesomeLink.crossOrigin = "anonymous";
    fontAwesomeLink.referrerPolicy = "no-referrer";
    head.append(fontAwesomeLink);

    const styleTag = document.createElement('style');
    const style = `
      body {
        margin: 0;
      }

      .results-container {
        background-color: rgb(5, 22, 39);
        padding: 10px;
      }

      .result {
        height: 50px;
        display: flex;
        align-items: center;
        background-color: rgb(28, 48, 73);
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .expanded {
        margin-left: 40px;
        color: white;
      }

      .test-header-container {
        margin-left: 40px;
        margin-right: 40px;
        color: white;
      }

      .test-failed {
        color: red;
      }

      .test-passed {
        color: green;
      }

      .expanded {
        display: hidden;
      }
    `;
    styleTag.textContent = style;
    styleTag.type = 'text/css';
    head.append(styleTag);
  }

  return (
    <div className="flex flex-col justify-between px-[10px] pt-[15px] text-white bg-blue-950">
      <button className="self-end bg-blue-500 rounded-sm p-[8px]" onClick={() => runCode()}>Run Code</button>
      <div className="flex h-[800px]">
        <div className="w-[50%] overflow-y-scroll p-[10px]">
          <h1 className="text-2xl pb-[10px]">{ question.title }</h1>
          <div>
            {parse(question.text)}
          </div>
        </div>
        <div className="w-[50%] overflow-y-scroll">
          <CodeMirror
            value={codeValue}
            height="800px"
            width="100%"
            theme={vscodeDark}
            extensions={[javascript({ jsx: true })]}
            onChange={(newVal) => { setCodeValue(newVal) }}
          />
        </div>
      </div>
      <div id="iframe-container" className="flex flex-col h-[500px]"></div>
    </div>
  )
}

export default Question;